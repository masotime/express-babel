# express-babel

Simple middleware that translates ES2015 JavaScript files on the fly and serves them up. For anything more complicated, you're probably better off with something like webpack.

NOTE: Uses babel6

# usage

```
var express = require('express');
var app = express();
var expressBabel = require('express-babel');

app.use('/public/js', expressBabel('/path/to/jsfiles', { 
	presets: [ 'stage-0', 'es2015' ]
}));

// GET /public/js/pineapple.js > returns Babelified /path/to/jsfiles/pineapple.js
```

## todo

Caching and other features
