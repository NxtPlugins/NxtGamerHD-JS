var http = require('http');
var config = require('./webConfig.json');
var port = config.port;

http.createServer(function (req, res){
  res.writeHead(200, {"Content-Type":"text/plain"});
  res.end('Hallo Welt!');
}).listen(config.port, '127.0.0.1');

console.log(`Der Server läuft unter PORT=${port} || IP=127.0.0.1`);
