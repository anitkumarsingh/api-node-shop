const http = require('http');
const PORT = process.env.PORT || 4000;
const app = require('./app');

const server = http.createServer(app);

server.listen(PORT,()=>console.log(`Server is up and running on port ${PORT}`));