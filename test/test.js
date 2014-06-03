var chai = require('chai');
var expect = chai.expect;
var _ = require('../index');
var path = require('path');

describe('fileReader()', function() {
	it('should read a file', function(done) {
		_.fileReader('text.txt', function (err, contents) {
			expect(contents).to.be.eql('this is just some text');
			done();
		});
	});
});

describe('pathReader()', function() {
	it('shoud turn directory items into a number of arrays', function(done) {
		_.pathReader('source', function(err, files) {
			expect(files.length).to.be.eql(3);
			done();
		});
	});
	it('should return the array', function(done) {
		_.pathReader('test', function(err, files) {
			expect(files).to.be.eql(['.DS_Store', 'test.js', 'text.txt']);
			done();
		});
	});
});

describe('isHtml()', function() {
	it('should return false for non-html files', function () {
		expect(_.isHtml('blablab.hml')).to.be.eql(false);
	});
	it('should return true for html files', function() {
		expect(_.isHtml('blah.html')).to.be.eql(true);
	});
});

describe('fileShreader()', function() {
	it.skip('deletes files inside a direcotry', function(done) {
		_.fileShreader(function(err, files) {
			expect();
		});
	});
});