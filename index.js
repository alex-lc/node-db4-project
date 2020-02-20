require('dotenv').config();
const server = require('./server.js');

const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`We're listening...`);
});

module.exports = server;