import test from 'ava';
import Promise from 'bluebird';
import fs from 'fs';
import request from 'supertest-as-promised';
import express from 'express';
import expressBabel from '../src/index';

Promise.promisifyAll(fs);

function appFactory() {
	let reference;

	return function getApp(rebuild = false) {
		if (!reference || rebuild) {
			reference = express();
			reference.use('/public/js', expressBabel(__dirname + '/fixtures', {
				presets: [ 'es2015', 'stage-0' ]
			}));
		}

		return reference;
	};
}

const getApp = appFactory();

test('test', t => t.pass());
test('middleware', async t => {
	const app = getApp();
	const expected = await fs.readFileAsync(__dirname + '/fixtures/sample-expected.js', { encoding: 'utf8' });

	const { text } = await request(app).get('/public/js/sample.js').expect(200);
	t.is(text, expected, 'why is it not equal???');
});