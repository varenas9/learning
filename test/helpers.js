'use strict';
const code = require('code');
global.Lab = require('lab');
const lab = exports.lab = Lab.script();

global.describe = lab.describe;
global.it = lab.it;
global.expect = code.expect;