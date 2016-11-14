var cors_proxy = require('cors-anywhere');
var express = require('express')
var serveStatic = require('serve-static')
var host = process.env.PORT ? '0.0.0.0' : '127.0.0.1';
var port = process.env.PORT || 8080;
var app = express()

cors_proxy.createServer({
  requireHeader: ['origin', 'x-requested-with'],
  redirectSameOrigin: true,
  httpProxyOptions: {
    xfwd: false,
  },
}).listen(port, host, function() {
  console.log('Proxy listening on port:', port);
});


app.use(serveStatic('public', {
	setHeaders : setCustomCacheControl
}))
app.listen(3000)
console.log('App listening on port: ', 3000);

function setCustomCacheControl (res, path) {
    res.setHeader('Access-Control-Allow-Origin','*')
}