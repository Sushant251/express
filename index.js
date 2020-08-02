// const http=require('http')
// const hostname ='localhost';
// const port =3000;

// const server=http.createServer((req,res) => {
//     console.log(req.headers);
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/html');
//     res.end('<html><body><h1>hii sushant</h1></body></html>')

// })
// server.listen(port,hostname, () =>  {
//     console.log(`server running at http://${hostname}:${port}`)
// });
const express=require('express')
const http=require('http')
const morgan = require('morgan')

const hostname= 'localhost';
const port ='3001'
const app =express();

app.use(express.static(__dirname + '/public'));

app.use((req,res,next) => {
    console.log(req.headers)
    res.statusCode=200;
    res.setHeader('content-type','text/html');
    res.end('<html><body><h1>This is express</h1></body></html>');
});
app.use(morgan('dev'));



const server =http.createServer(app);
server.listen(port,hostname,() =>
{
    console.log(`server running at http://${hostname}:${port}`)
})