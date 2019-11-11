const jasmine_util = require('@tensorflow/tfjs-core/dist/jasmine_util');
const runTests = require('../test_util').runTests;

runTests(jasmine_util, ['./*test.js']);
