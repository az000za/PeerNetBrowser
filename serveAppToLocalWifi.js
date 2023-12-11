const http = require('http');
const fs = require('fs');
const yourIPAddress = "192.168.56.1";
const yourLocalWifiIP = "172.31.32.110";
const port = 3000;
const htmlFile = './app.PeerNet.html';
let parentPeerId = "f30d33e4-cbd4-4317-8389-2784b3443075";

const server = http.createServer((req, res) => {
  const clientIp = req.connection.remoteAddress;
  console.log(`Client IP: ${clientIp}`);
  // if (req.query.hasOwnProperty("peerId")) {
  //   let peerId = req.query.peerId;
  //   parentPeerId = peerId; 
  // }
  fs.readFile(htmlFile, (err, data) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Error reading HTML file');
      return;
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
});
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(`Access the HTML file at http://localhost:${port}`);
  console.log(`Access the HTML file at http://127.0.0.1:${port}`);
  console.log(`Access the HTML file at http://${yourIPAddress}:${port}`);
  console.log(`Access the HTML file at http://${yourLocalWifiIP}:${port}?peerId=${parentPeerId}`);
});
