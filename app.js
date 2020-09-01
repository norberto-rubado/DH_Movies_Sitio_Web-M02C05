const http = require('http');
const router = require('./router');

// Servidor

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
	
	// Route System
    res.end(router.routes(req))

}).listen(3030, 'localhost', () => console.log('Server running in 3030 port')); // Arrow function

