const http = require('http')
const fs = require('fs')

http.createServer(function (req, res){
	console.log(req.url + '+++' + req.headers.host)

    if (req.url === '/') {
    	const html = fs.readFileSync('index.html','utf8')
    	res.writeHead(200,{
      		'Content-Type': 'text/html',
      		//'Set-Cookie': 'id=123' //一个cookie
      		//'Set-Cookie': ['id=123','ic=456'] //多个cookie
      		//'Set-Cookie': 'id=123;max-age=10' //设置cookie的存在时间
            'Set-Cookie': 'abc=456;domin=lotusdata.com' //设置顶级域名或多级域名共享cookie
		})
		res.end(html)
    }
	
}).listen(8333)

console.log('sever listening at 8333')