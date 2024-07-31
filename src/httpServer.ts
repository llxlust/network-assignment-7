import http from 'http'
import url from 'url'

http.createServer((req:any,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})

    let q = url.parse(req.url,true).query
    let txt = q.year + " " + q.month
    const {firstName,lastName,month,date,year} = q
    res.end(`<div><div>${firstName} ${lastName}</div><div>Login Date:${month} ${date},${year}</div></div>`)
}).listen(3100,()=>{
    console.log(`Server is running of port ${3100}`)
})