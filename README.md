## hapi-jwt-token [![Build Status](https://travis-ci.org/raymondsze/hapi-jwt-token.svg)](https://travis-ci.org/raymondsze/hapi-jwt-token.svg?branch=master)
## Not Maintained
:exclamation: I haven't use Hapi framework for a long time. This repository is no longer maintained.

<p>1. This plugin can let you plug <a href="https://github.com/auth0/node-jsonwebtoken">jsonwebtoken</a> sign function and verify function with config.</p>
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

## LICENSE
The MIT License (MIT)

Copyright (c) 2016 Sze Ka Wai Raymond

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
