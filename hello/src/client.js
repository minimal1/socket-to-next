// 소켓을 띄운다
const net = require('net');

const client = net.createConnection(50159, "qukka-echosystem.herokuapp.com");
client.once('connect', e => {
    console.log("서버와 연결됨!!", e);
})

client.on('data', (e) => {
    console.log("Received From Server: ", e.toString());
})

setInterval(() => {
    client.write("HI");
}, 500);
