var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, ('Content-Tyle', 'text/plain'))
	
	var file = fs.createReadStream('index.html');
	file.pipe(res);

}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');