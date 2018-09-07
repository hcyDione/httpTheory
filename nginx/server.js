const http = require('http')
const fs = require('fs')

const wait = (sec) => {
   return new Promise((resolve,reject) => {
   	 setTimeout(() => {
   	 	resolve()
   	 },sec*1000)
   })
}

http.createServer(function (req, res){
	console.log(req.url + '+++' + req.headers.host)
  
    if (req.url === '/') {
        const html = fs.readFileSync('index.html','utf8')
    	res.writeHead(200,{
      		'Content-Type': 'text/html',
		})
        res.end(html)
    } 
    if (req.url === '/data') {
    	res.writeHead(200, {
    		'Cache-Control':'max-age=50 private',
        //浏览器缓存max-age private只能被缓存在浏览器故而不会将缓存的内容写入代理服务器的缓存文件中去
    		//'Cache-Control':'max-age=50 s-maxage=50',//同时使用浏览器会用max-age,代理服务器会用s-maxage
        //虽然是在浏览器上看到的是做了http请求 其实是从代理服务器拿到的数据
        //'Cache-Control':'max-age=50 s-maxage=50 private',//加上private会让s-maxage失效,代理服务器不缓存
        //'Cache-Control':'max-age=50 s-maxage=50 no-store',//代理服务器和浏览器都不缓存
    		'Cache-Control':'s-maxage=50',//和vary一起使用的话只有vary头的值已经请求过了才能缓存如果这个头的值没有请求过仍然需要重新做请求
        'Vary': 'X-Test-Cache'//vary的值和cache共同验证缓存
    	})
    	wait(2).then(() => res.end('dione'))
    }
	
}).listen(8333)

console.log('server listening at 8333')
