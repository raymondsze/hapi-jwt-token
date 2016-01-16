/*
* @Author: Sze Ka Wai Raymond (FakeC)
* @Date:   2016-01-01 02:43:46
* @Last Modified by:   Sze Ka Wai Raymond (FakeC)
* @Last Modified time: 2016-01-17 01:49:23
*/

const server = require('./server');
const Lab = require('lab');
const Code = require('code');
const lab = Lab.script();
lab.experiment('async methods', {timeout: 10000}, function () {
	const pluginOptions = {
		key: 'YourSecretKey',
		verifyOptions: {
			// Set it to true as we use database cache with expire options
			ignoreExpiration: true,
			// Algorithm for signing token
			algorithms: ['HS256'],
			// Audience
			audience: 'company:example',
			// Issuer
			issuer: 'company'
		},
		// Sign token options
		signOptions: {
			// Algorithm for decode token, should be same as verify Options 
			algorithms: ['HS256'],
			// Audience, should be same as verify Options
			audience: 'company:example',
			// Issuer, should be same as verify Options
			issuer: 'company'
		}
	};

	lab.test('register hapi-jwt-token', (done) => {
		server.register({
			register: require('../build'),
			options: pluginOptions
		}, () => {
			server.start(() => {
				server.log(['info'], 'Server started at ' + server.info.uri);
				done();
			});
		});
	});

	lab.test('sign and verify', (done) => {
		server.plugins['hapi-jwt-token'].sign({
			id: '1234567'
		}, (error, token) => {
			server.plugins['hapi-jwt-token'].verify(token, (error, session) => {
				Code.expect(session.id).to.be.equal('1234567');
				done();
			});
		});
	});
});

module.exports = lab;
