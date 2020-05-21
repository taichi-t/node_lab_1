const http = require('http');

http.createServer((req, res) => {
    //where we will write our response
    res.write('Hello~');
    res.end()

}).listen(5000, ()=> console.log('Server running.....'))