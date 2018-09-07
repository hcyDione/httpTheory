# httpTheory
这是一个http协议原理讲解的例子，从简单的请求到如何建立网络长连接，网络安全，如何用nginx代理缓存等例子
###项目补充
[证书生成命令] 
(openssl req -x509 -newkey rsa:2048 -nodes -sha256 -keyout localhost-privkey.pem -out localhost-cert.pem)
命令端模拟http请求 curl (-v -k) --http1.1(规定请求版本)  https://localhost
###http讲解步骤
   > 跨域  要注意 OPTIONS请求 是跨域请求的预验证请求,预请求成功才会做真正的请求
   > 跨域信息缓存  Access-Control-Max-Age
   > 浏览器缓存  304返回头 Last-Modified Etag
   > 浏览器cookie
   > 浏览器文件压缩
   > 浏览器长连接 所有的http是建立在一个tcp/ip上的 还是每一个http连接就需要先建立一个tcp/ip的连接
   > 浏览器网站重定向 区分临时跳转和永久跳转
   > 浏览器的Accept 允许接收并可以解析的文件类型，压缩方式，语言，浏览器相关信息特性 注意区分请求的content-type和返回的
   content-type的区别
   > 浏览器安全 如何防止自己的网站被攻击 以XSS(网站脚本攻击为例讲解)
   > http2.0版本  注意服务器推送
###nginx服务器代理
   > 安装nginx服务器 到http://nginx.org/en/download.html 下载稳定版 Stable version
   > 配置nginx的nginx.coff文件配置成自己需要的服务
   > 用ngnix启动的服务做代理访问
    注意443https端口被占用的情况
     运行 netstat -aon|findstr "443" 找到 0.0.0.0:443 对应的 PID 结束进程 访问:https://localhost/
   > 用ngnix代理https的连接 
   > 用ngnix设置参数重定向http连接到https的连接
   > 用ngnix服务器做代理服务器缓存 代理缓存的优势是会将服务器的缓存存到自己的目录下面,一旦用户换了浏览器用代理来访问的时候数据会从代理缓存目录获取然后立马显示出来
   > 用ngnix服务器设置https的连接http2优先
   > 用ngnix服务器设置服务端推送功能 
###相关链接
   >ftp://speedtest.tele2.net/
   >https://http2.akamai.com/demo/http2-lab.html