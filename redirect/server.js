const http = require('http')
const fs = require('fs')

http.createServer(function (req, res){
	console.log(req.url + '+++' + req.headers.host)
  
    if (req.url === '/') {
        res.writeHead(301,{ //永久跳转会存进缓存之后只读缓存
           'Location': '/dione'
        })
        res.end('')
        /*res.writeHead(302,{ //只有这一次跳转是临时的跳转
           'Location': '/dione'
        })
        res.end('')*/
    } 
    if (req.url === '/dione') {
        res.writeHead(200,{
           'Content-Type': 'text/html'
        })
        res.end('<div>Welcome to Dione Website</div>')
    } 
	
}).listen(8333)

console.log('sever listening at 8333')