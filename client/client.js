const net = require('net');
const readline = require('readline');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost', // change to IP address of computer or ngrok host if tunneling
    port: 3000 // or change to the ngrok port if tunneling
  });
  // interpret data as text
  conn.setEncoding('utf8');
  // On connect:
  conn.on('connect', () => {
    console.log('Successful connection');
    userInput(x => conn.write(x));
  });
  // When data received:
  conn.on('data', (data) => {
    console.log('From server:::', data);
  });

  return conn;
};


const userInput = (callback) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Filename:::', (answer) => {
    rl.close();
    return callback(answer);
  });
};

/*
// TODO: implement writeToFile?
const writeContentToFile = (path, content) => {
  fs.writeFile(path, content, (err, written, string) => {
    if (err) {
    console.log("ERROR: File write failed. See error message below.")
    throw err;
    }
    fs.stat(path, (err, stats) => {
      console.log(`Downloaded and saved ${stats.size} bytes to ${path}`)
    })
  })
}
*/

connect();