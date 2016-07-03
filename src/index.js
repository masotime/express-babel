import path from 'path';
import Promise from 'bluebird';
import fs from 'fs';
var babel = require('babel-core'); // lol

Promise.promisifyAll(fs);
Promise.promisifyAll(babel);

const logger = {
	log: (...args) => console.log(...args),
	warn: (...args) => console.warn(...args),
	error: (...args) => console.error(...args)
};

export default (src, babelOpts) => {

	const basePath = path.resolve(src);

	async function resolvePath(urlPath) {
		const localPath = path.resolve(src, urlPath);

		if (localPath.indexOf(basePath) === 0) { // i.e. it doesn't attempt to escape the sandbox
			return localPath;
		}

		// check if the file is readable
		try {
			await fs.accessAsync(localPath, fs.R_OK);
			return localPath;
		} catch (err) {
			logger.warn(`Unable to read file ${localPath}`);
		}
	}

	return async (req, res, next) => {
		try {
			const pathToFile = await resolvePath(`.${req.path}`);

			if (pathToFile === undefined) {
				return next();
			}

			const { code, map, ast } = await babel.transformFileAsync(pathToFile);
			res.write(code);
			return res.end();
		} catch (err) {
			return next(err);
		}
	}
}