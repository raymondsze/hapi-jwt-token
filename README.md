## hapi-jwt-token [![Build Status](https://travis-ci.org/raymondsze/hapi-jwt-token.svg)](https://travis-ci.org/raymondsze/hapi-jwt-token.svg?branch=master)
## Introduction
<p>1. This plugin can let you plug jsonwebtoken sign function and verify function with config.</p>
<p>2. Sign method accessible by server.plugins['hapi-jwt-token'].sign.</p>
<p>3. Verify method accessible by server.plugins['hapi-jwt-token'].verify.</p>
<p>You may use server.method in the callback to prevent always typing the long path server.plugins['hapi-jwt-token']</p>

```javascript
server.method('sign', server.plugins['hapi-jwt-token'].sign);
server.method('verify', server.plugins['hapi-jwt-token'].verify);
```
If you want to make the function return Promise (i.e async function), you may interested in <a href="https://github.com/raymondsze/hapi-async-methods">hapi-async-methods</a>

## Install
<p>Note: jsonwebtoken is required.</p>
<p><b>npm install --save jsonwebtoken</b></p>

<p><b>npm install --save hapi-jwt-token</b></p>

## Options
<p><b>signOptions</b>(Optional) see <a href="https://github.com/auth0/node-jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback">here</a></p>
<p><b>verifyOptions</b>(Optional) see <a href="https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback">here</a></p>
<p><b>key</b>(Required): The second parameter of jsonwebtoken.sign and jsonwebtoken.verify. i.e (The secretOrPublicKey)</p>
<p>You can use this plugin with <a href="https://www.npmjs.com/package/hapi-auth-jwt2">hapi-auth-jwt2</a> to provide user login with jsonwebtoken.
