const helmet = require('helmet');
const express = require('express');

const recipesRouter = require('./recipes/recipes-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

// routers
server.use('/api/recipes', recipesRouter);

// endpoints
server.get('/', (req, res) => {
    res.status(200).json({ hello: 'alex' });
});

module.exports = server;