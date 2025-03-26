const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Mock Server!');
    }
    //  else if (req.url === '/api/courses') {
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify([
    //         { id: 1, name: 'Course1' },
    //         { id: 2, name: 'Course2' },
    //         { id: 3, name: 'Course3' }
    //     ]));
    // } 
    else {
        // res.writeHead(404, { 'Content-Type': 'text/plain' });
        // res.end('Not Found');
    }
});
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});