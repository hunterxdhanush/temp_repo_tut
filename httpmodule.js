const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('hello')
    }
    if(req.url==='/about'){
        res.end('here is our short history')
    }
    res.end(`
        <h1>oops</h1>
        <p> we cannot seem to find your page</p>
        <a href="/">back home</a>
        `)
})
server.listen(5000)