//mdn上面的csp直接搜索就可以
const http = require('http')
const fs = require('fs')

http.createServer(function (requset, response){
	console.log('request come'+ requset.headers.host)

    if (requset.url === '/') {
    	const html = fs.readFileSync('index.html')
        response.writeHead(200, {
		    'Content-Type':'text/html',
		    //'Content-Security-Policy': 'default-src',//默认组织任何html里面内联的资源解析 包括内联style, 包括内联script
		    //'Content-Security-Policy': 'script-src',//只是默认阻止script标签
		    //'Content-Security-Policy': 'script-src \'self\'',//允许同域的script标签加载但是阻止inline 的script脚本的直接执行
	    	//'Content-Security-Policy': 'script-src https: http:',//只允许外联script是https / http 请求的脚本执行
	    	//'Content-Security-Policy': 'script-src \'self\' http://code.jquery.com/',//允许某一个特定域名下面的外联script脚本的加载和执行
	        //'Content-Security-Policy': 'script-src \'self\'; form-action',//阻止form表单直接提交到某一个外网链接
	        //'Content-Security-Policy': 'script-src \'self\'; form-action \'self\';',//允许form表单提交到同域下面的链接
	        //'Content-Security-Policy': 'script-src \'self\'; form-action \'self\'; report-uri /report',//report数据可直接传递到后端http://localhost:8333/report
	        //对于csp不允许加载解析的script标签打印一个report文件请求头的request Payload参数有详细的被禁止加载的每一个文件的详细信息
	        //'Content-Security-Policy-Report-Only': 'script-src \'self\'; form-action \'self\'; report-uri /report',
	        //改加载的都会加载，但是csp不允许加载的会全部打印出来一个report文件
	    })	
		response.end(html)
    } else {
    	response.writeHead(200, {
		    'Content-Type':'application/javascript'
	    })	
		response.end('console.log("script loaded")')
    }
}).listen(8333)

console.log('serve listening at 8333')

