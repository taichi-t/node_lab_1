const http = require("http");
const routes = require("./route");

const server = http.createServer(routes);

const PORT = process.env.PORT || 3000;
server.listen(PORT);
