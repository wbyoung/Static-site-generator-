var fs = require('fs');
var options = { encoding: 'utf8' };
var path = require('path');

var fileReader = module.exports.fileReader = function (textFile, cb) {
	fs.readFile(textFile, options, function(err, contents) {
		cb(null, contents);
	});
};

var pathReader = module.exports.pathReader = function (ipath, cb) {
	var newPath = path.join(__dirname, ipath);
	fs.readdir(newPath, function(err, files) {
		cb(null, files);
	});
};

var fileWriter = module.exports.fileWriter = function () {

};

//Deletes all the files in the generated director
var fileShreader  = module.exports.fileShreader = function (cb) {
	var targetDir = path.join(__dirname, 'generated');
	pathReader('generated', function(err, files) {
		files.forEach(function(element) {
			var targetFile = path.join(targetDir, element);
			fs.unlink(targetFile);
		});
		cb();
	});
};

var isHtml = module.exports.isHtml = function(ifile) {
	if (ifile.search('html') !== -1) {
		return true;
	} else {
		return false;
	}
};
