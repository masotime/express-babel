"use strict";

var _obj;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _templateObject = _taggedTemplateLiteral(["In JavaScript this is\n not legal."], ["In JavaScript this is\n not legal."]),
    _templateObject2 = _taggedTemplateLiteral(["http://foo.org/bar?a=", "&b=", "\n     Content-Type: application/json\n     X-Credentials: ", "\n     { \"foo\": ", ",\n       \"bar\": ", "}"], ["http://foo.org/bar?a=", "&b=", "\n     Content-Type: application/json\n     X-Credentials: ", "\n     { \"foo\": ", ",\n       \"bar\": ", "}"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// lifted from https://github.com/lukehoban/es6features examples

var SkinnedMesh = function (_THREE$Mesh) {
  _inherits(SkinnedMesh, _THREE$Mesh);

  function SkinnedMesh(geometry, materials) {
    _classCallCheck(this, SkinnedMesh);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SkinnedMesh).call(this, geometry, materials));

    _this.idMatrix = SkinnedMesh.defaultMatrix();
    _this.bones = [];
    _this.boneMatrices = [];
    //...
    return _this;
  }

  _createClass(SkinnedMesh, [{
    key: "update",
    value: function update(camera) {
      //...
      _get(Object.getPrototypeOf(SkinnedMesh.prototype), "update", this).call(this);
    }
  }, {
    key: "boneCount",
    get: function get() {
      return this.bones.length;
    }
  }, {
    key: "matrixType",
    set: function set(matrixType) {
      this.idMatrix = SkinnedMesh[matrixType]();
    }
  }], [{
    key: "defaultMatrix",
    value: function defaultMatrix() {
      return new THREE.Matrix4();
    }
  }]);

  return SkinnedMesh;
}(THREE.Mesh);

var obj = _obj = _defineProperty({
  // __proto__
  __proto__: theProtoObj,
  // Shorthand for ‘handler: handler’
  handler: handler,
  // Methods
  toString: function toString() {
    // Super calls
    return "d " + _get(Object.getPrototypeOf(_obj), "toString", this).call(this);
  }
}, 'prop_' + function () {
  return 42;
}(), 42);

// Basic literal string creation
"In JavaScript '\n' is a line-feed."

// Multiline strings
(_templateObject);

// String interpolation
var name = "Bob",
    time = "today";
"Hello " + name + ", how are you " + time + "?";

var POST = function POST() {};

// Construct an HTTP request prefix is used to interpret the replacements and construction
POST(_templateObject2, a, b, credentials, foo, bar)(myOnReadyStateChangeHandler);

// list matching
var _ref = [1, 2, 3];
var a = _ref[0];
var b = _ref[2];

// object matching

var _getASTNode = getASTNode();

var a = _getASTNode.op;
var b = _getASTNode.lhs.op;
var c = _getASTNode.rhs;

// object matching shorthand
// binds `op`, `lhs` and `rhs` in scope

var _getASTNode2 = getASTNode();

var op = _getASTNode2.op;
var lhs = _getASTNode2.lhs;
var rhs = _getASTNode2.rhs;

// Can be used in parameter position

function g(_ref2) {
  var x = _ref2.name;

  console.log(x);
}
g({ name: 5 });

// Fail-soft destructuring
var _ref3 = [];
var a = _ref3[0];

a === undefined;

// Fail-soft destructuring with defaults
var _ref4 = [];
var _ref4$ = _ref4[0];
var a = _ref4$ === undefined ? 1 : _ref4$;

a === 1;

function f(x) {
  var y = arguments.length <= 1 || arguments[1] === undefined ? 12 : arguments[1];

  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
f(3) == 15;

function f(x) {
  // y is an Array
  return x * (arguments.length - 1);
}
f(3, "hello", true) == 6;

function f(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
f.apply(undefined, [1, 2, 3]) == 6;

function f() {
  {
    var x = void 0;
    {
      // okay, block scoped name
      var _x2 = "sneaky";
    }
  }
}

var fibonacci = _defineProperty({}, Symbol.iterator, function () {
  var pre = 0,
      cur = 1;
  return {
    next: function next() {
      var _ref5 = [cur, pre + cur];
      pre = _ref5[0];
      cur = _ref5[1];

      return { done: false, value: cur };
    }
  };
});

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = fibonacci[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var n = _step.value;

    // truncate the sequence at 1000
    if (n > 1000) break;
    console.log(n);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var fibonacci2 = _defineProperty({}, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
  var pre, cur, temp;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          pre = 0, cur = 1;

        case 1:
          temp = pre;

          pre = cur;
          cur += temp;
          _context.next = 6;
          return cur;

        case 6:
          _context.next = 1;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = fibonacci2[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var n = _step2.value;

    // truncate the sequence at 1000
    if (n > 1000) break;
    console.log(n);
  }

  // same as ES5.1
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

"𠮷".length == 2;

// new RegExp behaviour, opt-in ‘u’
"𠮷".match(/(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/)[0].length == 2;

// new form
"𠮷" == "𠮷" == "𠮷";

// new String ops
"𠮷".codePointAt(0) == 0x20BB7;

// for-of iterates code points
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = "𠮷"[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var c = _step3.value;

    console.log(c);
  }

  // Sets
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3.return) {
      _iterator3.return();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}

var s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;

// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) == 34;

// Weak Maps
var wm = new WeakMap();
wm.set(s, { extra: 42 });
wm.size === undefined;

// Weak Sets
var ws = new WeakSet();
ws.add({ data: 42 });
// Because the added object has no other references, it will not be held in the set

// Proxying a normal object
var target = {};
var handler = {
  get: function get(receiver, name) {
    return "Hello, " + name + "!";
  }
};

var p = new Proxy(target, handler);
p.world === 'Hello, world!';

// Proxying a function object
var target = function target() {
  return 'I am the target';
};
var handler = {
  apply: function apply(receiver) {
    return 'I am the proxy';
  }
};

var p = new Proxy(target, handler);
p() === 'I am the proxy';

var MyClass = function () {

  // module scoped symbol
  var key = Symbol("key");

  function MyClass(privateData) {
    this[key] = privateData;
  }

  MyClass.prototype = {
    doStuff: function doStuff() {
      this[key];
    }
  };

  return MyClass;
}();

var c = new MyClass("hello");
c["key"] === undefined;

// User code of Array subclass

var MyArray = function (_Array) {
  _inherits(MyArray, _Array);

  function MyArray() {
    var _Object$getPrototypeO;

    _classCallCheck(this, MyArray);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(MyArray)).call.apply(_Object$getPrototypeO, [this].concat(args)));
  }

  return MyArray;
}(Array);

// Two-phase 'new':
// 1) Call @@create to allocate object
// 2) Invoke constructor on new instance


var arr = new MyArray();
arr[1] = 12;
arr.length == 2;

Number.EPSILON;
Number.isInteger(Infinity); // false
Number.isNaN("NaN"); // false

Math.acosh(3); // 1.762747174039086
Math.hypot(3, 4); // 5
Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2); // 2

"abcde".includes("cd"); // true
"abc".repeat(3); // "abcabcabc"

Array.from(document.querySelectorAll('*')); // Returns a real Array
Array.of(1, 2, 3) // Similar to new Array(...), but without special one-arg behavior
[(0, 0, 0)].fill(7, 1) // [0,7,7]
[(1, 2, 3)].find(function (x) {
  return x == 3;
}) // 3
[(1, 2, 3)].findIndex(function (x) {
  return x == 2;
}) // 1
[(1, 2, 3, 4, 5)].copyWithin(3, 0) // [1, 2, 3, 1, 2]
[("a", "b", "c")].entries() // iterator [0, "a"], [1,"b"], [2,"c"]
[("a", "b", "c")].keys() // iterator 0, 1, 2
[("a", "b", "c")].values(); // iterator "a", "b", "c"

Object.assign(Point, { origin: new Point(0, 0) });

503 === 503; // true
503 === 503; // true

function timeout() {
  var duration = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

  return new Promise(function (resolve, reject) {
    setTimeout(resolve, duration);
  });
}

var p = timeout(1000).then(function () {
  return timeout(2000);
}).then(function () {
  throw new Error("hmm");
}).catch(function (err) {
  return Promise.all([timeout(100), timeout(200)]);
});