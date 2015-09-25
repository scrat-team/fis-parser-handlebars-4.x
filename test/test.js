var parser = require('../index');
var fs = require('fs');
var input = fs.readFileSync(__dirname + '/input.hbs', 'utf8');
fs.writeFileSync(__dirname + '/output.js', parser(input));