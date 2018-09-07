const http = require('http')

http.createServer(function (req, res){
	console.log(req.url + '+++' + req.headers.host)

	res.writeHead(200,{
      'Access-Control-Allow-Origin': 'http://127.0.0.1:8333',
      'Access-Control-Allow-Headers': 'X-Test-Cors',
      'Access-Control-Allow-Methods': 'PUT',
      'Access-Control-Max-Age': '10' //缓存access-Control这个值的
      //'Content-Type':'application/javascript'
	})
	//res.end('console.log("loaded javascript")')
	res.end('Dione')
}).listen(8334)

console.log('sever listening at 8334')