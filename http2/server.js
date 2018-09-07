const http = require('http')
const fs = require('fs')

http.createServer(function (req, res){
	console.log(req.url + '+++' + req.headers.host)
  
    if (req.url === '/') {
      const html = fs.readFileSync('index.html','utf8')
    	res.writeHead(200,{
      		'Content-Type': 'text/html',
      		'Connection':'close',
      		'Link': '</2.jpg>; as=image; rel=preload'
      		//给服务器推送一个图片按图片的相对路径引入图片
      	    //一旦服务器提前推送,则后面请求这个资源的直接就能获取不用单独在请求
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