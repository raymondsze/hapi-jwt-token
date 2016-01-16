/* 
* @Author: Sze Ka Wai Raymond (FakeC)
* @Date:   2016-01-03 21:51:57
* @Last Modified by:   Sze Ka Wai Raymond (FakeC)
* @Last Modified time: 2016-01-17 01:46:44
*/

const JWT = require('jsonwebtoken');
const Schema = require('./schema');

// This plugin is used to register sign / verify method for JWT
// API
// server.plugin.token.sign (session: object) => token 
// server.plugin.token.verify (token: string) => session
function register(server, options, next) {
	Schema.validate(options, (error, config) => {
		if (error) {
			return next(error);
		}
		const sign = function (session, after) {
			const token = JWT.sign(session, config.key, config.signOptions || {});
			after(null, token);
		};
		server.expose('sign', sign);

		const verify = function (token, after) {
			const valid = JWT.verify(token, config.key, config.verifyOptions || {});
			after(null, valid);
		};
		server.expose('verify', verify);
		return next();
	});
}

register.attributes = {
	pkg: require('../package.json')
};

module.exports = {
	register: register
};
