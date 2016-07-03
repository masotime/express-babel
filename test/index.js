import test from 'ava';
import Promise from 'bluebird';
import fs from 'fs';
import request from 'supertest-as-promised';
import express from 'express';
import expressBabel from '../src/index';

Promise.promisifyAll(fs);

function appFactory() {
	let reference;

	return function getApp(rebuild = false, babelOpts = { presets: ['es2015', 'stage-0']}) {
		if (!reference || rebuild) {
			reference = express();
			reference.use('/public/js', expressBabel(__dirname + '/fixtures', babelOpts));
		}

		return reference;
	};
}

const getApp = appFactory();

test('test', t => t.pass());
test('should transform es2015 correctly', async t => {
	const app = getApp();
	const expected = await fs.readFileAsync(__dirname + '/fixtures/sample-expected.js', { encoding: 'utf8' });
	const { text } = await request(app).get('/public/js/sample.js').expect(200);

	t.is(text, expected, 'es2015 not transpiled');
});

test('should transform nothing if no presets are provided', async t => {
	const app = getApp(true, { presets: [], babelrc: false });
	const original = await fs.readFileAsync(__dirname + '/fixtures/sample.js', { encoding: 'utf8' });
	const { text } = await request(app).get('/public/js/sample.js').expect(200);

	// babel will fiddle with whitespace, brackets and semicolons, so we are forced to remove all whitespace when comparing
	const actual = text.replace(/[\s;\(\)]/g, '');
	const expected = original.replace(/[\s;\(\)]/g, '');

	t.is(actual, expected, 'nothing should be transpiled');
});