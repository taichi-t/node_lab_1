const fs = require("fs");

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Read Page</title></head>');
        res.write('<body>');
        res.write('<h1>Hola!</h1>')
        res.write('<a href="write-message">Write a message</a> | ')
        res.write('<a href="read-message">Read the messages</a>')
        res.write('</body>')
        res.write('</html>');
        return res.end();
    }

    if (url === '/write-message') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body>');
        res.write('<a href="/">Home</a><br/><br/>');
        res.write(`<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button>`);
        res.write('</form></body>')
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {

        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                if (err) throw err;
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });

        });
    }

    if (url === '/read-message') {
        return fs.readFile('message.txt', 'utf8', (err, data) => {
            if (err) throw err;
            const message = data.split('+').join(' ');
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Read Page</title></head>');
            res.write('<body>');
            res.write('<a href="/">Home</a><br/><br/>');
            res.write('<h1>' + message + '</h1>');
            res.write('</body>')
            res.write('</html>');
            return res.end();
        })
    }
}

module.exports = requestHandler;
