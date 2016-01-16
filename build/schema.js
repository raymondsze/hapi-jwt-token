'use strict';

/* 
* @Author: Sze Ka Wai Raymond (FakeC)
* @Date:   2016-01-03 21:52:13
* @Last Modified by:   Sze Ka Wai Raymond (FakeC)
* @Last Modified time: 2016-01-17 01:41:38
*/

const Joi = require('joi');

module.exports = Joi.object({
	key: Joi.string().min(1).required(),
	signOptions: Joi.object().default({}).optional(),
	verifyOptions: Joi.object().default({}).optional()
});
