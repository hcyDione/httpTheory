const http = require('http')
const fs = require('fs')
const zlib = require('zlib')

http.createServer(function (req, res){
	console.log(req.url + '+++' + req.headers.host)
  
    if (req.url === '/') {
      const html = fs.readFileSync('index.html','utf8')
    	res.writeHead(200,{
      		'Content-Type': 'text/html',
          'Content-Encoding': 'gzip'
		  })
      res.end(zlib.gzipSync(html))
    } else {
      const img = fs.readFileSync('2.jpg')
      res.writeHead(200,{
          'Content-Type': 'image/jpg',
          'Content-Encoding': 'gzip'
      })
      res.end(zlib.gzipSync(img))
    }
	
}).listen(8333)

console.log('sever listening at 8333')