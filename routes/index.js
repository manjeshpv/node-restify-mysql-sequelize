var fs = require('fs');
var route = {};

fs.readdirSync(__dirname).forEach(function(file) {
	if (file == "index.js") return;
	var name = file.substr(0, file.indexOf('.'));
	route[name] = require('./' + name);
});

module.exports = route;
