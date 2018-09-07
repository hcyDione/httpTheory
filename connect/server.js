const http = require('http')
const fs = require('fs')

http.createServer(function (req, res){
	console.log(req.url + '+++' + req.headers.host)
  
    if (req.url === '/') {
      const html = fs.readFileSync('index.html','utf8')
    	res.writeHead(200,{
      		'Content-Type': 'text/html',
          'Connection':'close'
		  })
      res.end(html)
    } else {
      const img = fs.readFileSync('2.jpg')
      res.writeHead(200,{
          'Content-Type': 'image/jpg',
          'Connection':'close'
      })
      res.end(img)
    }
	
}).listen(8333)

console.log('sever listening at 8333')