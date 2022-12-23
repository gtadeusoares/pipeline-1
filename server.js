const server = require('./index.js');

server.listen(process.env.PORT || 3000, () => {
    console.log('Listening on Port: 3000');
});