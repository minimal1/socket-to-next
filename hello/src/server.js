//  소켓을 띄운다.
const net = require('net');

const server = net.createServer();

server.on('listening', () => {
    console.log("In listening Event!");
    console.log(server.address());
});

server.on('connection', connectionListener);

server.on('close', () => {
    console.log("CLOSED:");
})

server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
        console.log('Address in use, retrying...');
    }
    console.log("ERROR", e);
});

server.listen(7777, 'localhost');

function connectionListener(socket) {
    socket.on('data', msg => {
        console.log('msg:', msg.toString());

        socket.write(html);
    });
}

const html =
    `<html><body>안녕</body></html>`