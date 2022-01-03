const expect = require('chai').expect;
const request = require('request');

it('Home page content', function (done) {
	request('http://localhost:8080', function (error, response, body) {
		expect(body).to.equal('Sample Jira App');
		done();
	});
});
