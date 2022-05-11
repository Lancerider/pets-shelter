const http = require('http');
/**
 * Very simple endpoint, feel free to use a library to make your life easier, Rest or Graph, both work
 */
const server = http.createServer((req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.url === '/') {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      cats: 'http://localhost:3000/cats'
    }))
  }
  if (req.url === '/cats') {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify([{
      id: 1,
      type: 'cat',
      name: 'Vasia',
      status: 'Adopted',
      someOther: 'Some Other',
    },{
      id: 2,
      type: 'cat',
      name: 'Musci',
      status: 'Adopted',
      someOther: 'New Value',
    }
    ]))
  }
})

server.listen(3000, (err) => {
  if (err) throw err;
  console.log('server is listening on port 3000');
})
