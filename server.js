const http = require('http');

const hostname = '127.0.0.1'; //localhost
const port = 8000;

const server = http.createServer((request, response)=>{
    if (request.method == 'POST'){
        console.log('POST')
        var body =''

        request.on('data', function(data){
            body += data 
        })

        request.on('end', function(){
            console.log('Body: '+ body)
            response.setHeader('Access-Control-Allow-Origin', '*'); //cors 
            response.writeHead(200, {'Content-Type': 'aplication/json'})
            response.end(JSON.stringify({
                ok:true,
                nombre: 'Willy',
                id: 124
            }))
        })
    } else {
        console.log('GET')
        response.statusCode= 200;
        response.setHeader('Access-Control-Allow-Origin', '*'); //cors 
        response.setHeader('Content-Type', 'text/plain');
        responde.end('Hello World');
    }
});

server.listen(port,hostname,() => {
    console.log('Server running at http://${hostname}:${port}/');
});