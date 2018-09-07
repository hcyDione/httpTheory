const http = require('http')
const fs = require('fs')

http.createServer(function (req, res){
	console.log(req.url + '+++' + req.headers.host)
  
        const html = fs.readFileSync('index.html','utf8')
    	res.writeHead(200,{
      		'Content-Type': 'text/html'
		})
        res.end(html)
	
}).listen(8333)

console.log('sever listening at 8333')