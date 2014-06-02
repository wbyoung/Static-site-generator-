var chai = require('chai');
var expect = chai.expect;
var _ = require('../sitegen');

describe('insertfunction()', function() {
	it('should test true', function() {
		expect(_.fileSaver()).to.be.eql(true);
	});
});