## WebServer || HTTP!!

`PORT=3000`<br>
`IP=127.0.0.1`
<br><br>

*Example-WebServer* || *HTTP*
```javascript
var http = require('http');

http.createServer(function (req, res){
  res.writeHead(200, {"Content-Type":"text/plain"});
  res.end('Hallo Welt!');
}).listen(3000, '127.0.0.1');

console.log('Der Server läuft unter PORT=3000 || IP=127.0.0.1');
```
