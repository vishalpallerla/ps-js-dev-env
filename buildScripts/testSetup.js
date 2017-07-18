//This file isn't transpiled, so must use commonJS and ES5

//Regsiter babel to transpile before our tests run
require('babel-register')();

//Disable webpack features that Mocha doesnt understand
require.extensions['.css'] = function () {};
