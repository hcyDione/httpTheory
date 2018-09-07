const http = require('http')
const fs = require('fs')
const status = require('./status.js')

http.createServer( function (req, res) {
  console.log(req.url + '+++' + req.headers.host)
  const html = fs.readFileSync('index.html', 'utf8')
  if (req.url === '/') {
  	res.writeHead(200,{
  		'Content-Type': 'text/html'
	})
	res.end(html)
  } 
  const etag = req.headers['if-none-match']
  if (req.url === '/script.js') {
  	if (etag === status.etag){
  		res.writeHead(304,{
	  		'Content-Type': 'text/javascript',
	  		'Cache-Control': 'max-age=10000', //设置了数据的缓存且缓存时间是100ms,在缓存时间内会一直读取缓存
	  		//'Cache-Control': 'max-age=10000,no-cache', //为了防止从缓存中获取过期的资源,也就是使用缓存前一定要先经过验证
	  		//'Cache-Control': 'max-age=10000,no-store', //不进行缓存
	  		'Last-Modified': 'dione',
			'Etag': '369'
		})
		res.end('console.log("I am from huncun")')
  	} else {
  		res.writeHead(200,{
	  		'Content-Type': 'text/javascript',
	  		//'Cache-Control': 'max-age=10000', //设置了数据的缓存且缓存时间是100ms,在缓存时间内会一直读取缓存
	  		//'Cache-Control': 'max-age=10000,no-cache', //为了防止从缓存中获取过期的资源,也就是使用缓存前一定要先经过验证
	  		'Cache-Control': 'max-age=10000,no-store', //不进行缓存
	  		'Last-Modified': 'dione',
			'Etag': '369'
		})
		res.end('console.log("script loaded change")')
  	}
  }
}).listen(8333)

console.log('sever listening at 8333')