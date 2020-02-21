## WebServer || HTTP!!

`PORT=3000`<br>
`IP=127.0.0.1`
<br><br>

*Example-WebServer* || *HTTP* // **text/plain**
```javascript
var http = require('http');

http.createServer(function (req, res){
  res.writeHead(200, {"Content-Type":"text/plain"});
  res.end('Hallo Welt!');
}).listen(3000, '127.0.0.1');

console.log('Der Server läuft unter PORT=3000 || IP=127.0.0.1');
```
<br><br>

*Example-WebServer* || *HTTP* // **text/html**

```javascript
var http = require('http');

http.createServer(function (req, res){
  res.writeHead(200, {"Content-Type":"text/html"});
  res.send('<title>Heyho ;)</title><br><br><p>Heyho ;)</p>');
}).listen(3000, '127.0.0.1');
console.log('IP=127.0.0.1 || PORT=3000');
```
