const net = require('net');
const readline = require('readline');
let connection;

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost', // change to IP address of computer or ngrok host if tunneling
    port: 3000 // or change to the ngrok port if tunneling
  });
  // interpret data as text
  conn.setEncoding('utf8'); 
  // On connect:
  conn.on('connect', () => {
    console.log('Successful connection')
  });
  // When data received:
  conn.on('data', (data) => {
    console.log('From server:::', data);
  });

  return conn;
}


const userInput = (conn) => {
  connection = conn;
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Filename:::', (answer) => {
    // console.log(`Your answer: ${answer}`);
    connection.write(answer);
    rl.close();
    // userInput(connect())
    // process.exit()
  });

}


userInput(connect())

module.exports = { connect }



