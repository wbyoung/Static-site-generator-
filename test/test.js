var chai = require('chai');
var expect = chai.expect;
var _ = require('../index');
var path = require('path');

describe('fileReader()', function() {
	var fixture = path.join(__dirname, 'text.txt');

	it('should read a file', function(done) {
		_.fileReader(fixture, function (err, contents) {
			expect(contents).to.be.eql('this is just some text');
			done();
		});
	});
});

describe('pathReader()', function() {
	it('shoud turn directory items into an array', function(done) {
		_.pathReader('source', function(err, files) {
			expect(files.length).to.be.eql(3);
			done();
		});
	});
});

describe('isHtml()', function() {
	it('should return true for html files', function () {
		expect(_.isHtml('blablab.hml')).to.be.eql(false);
	});
});

describe('fileShreader()', function() {
	it.skip('deletes files inside a direcotry', function(done) {
		_.fileShreader(function(err, files) {
			expect()
		});
	});
});