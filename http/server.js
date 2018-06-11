//加载http模块
var http = require('http');
var url = require('url');
var querystring = require('querystring');
//创建一个服务
var server = http.createServer()
	.listen('8081')
	.on('listening', function() {
		console.log(`listening at ${server.address().port}`)
	})

console.log(JSON.stringify(server.address()))

server.on('request', function(req, res) {
	var urlObj = url.parse(req.url),
		pathname = urlObj.pathname.substr(1) || 'index.html',
		query = urlObj.query,
		queryObj=querystring.parse(query);
	console.log(query);
	console.log(queryObj);
	res.writeHead(200, '', {
		//'content-type':'text/plain'
		'content-type': 'text/html;charset=utf-8'
	})
	res.write('<h1>hello world!</h1>')
	res.end()
})