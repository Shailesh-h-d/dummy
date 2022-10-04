const http = require('http');

const appServer = http.createServer((req, res) => {
    if(req.url === '/') res.write('this is a home page');
    else if (req.url === '/about') res.write('this is about page');
    else res.write('invalid page');
    res.end();
}).listen(3001);