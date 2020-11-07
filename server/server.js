const fs = require('fs');

/*
  Build a file server and client where:
    Clients can connect to the server via TCP and send a request for a file (by filename)
    The server looks for requested files locally and sends back the data
*/

const net = require('net');
const server = net.createServer();

const launchServer = function() {
  server.on('connection', (client) => {
    console.log('New client connected');
    // client.write('Hello there!');
    
    client.setEncoding('utf-8');
    client.on('data', (path) => {
      // Client has sent a filename to look for
      
      readFileContents(path, 'utf8', x => client.write(x)) 
    })
  });
  
  server.listen(3000, () => {
    console.log('Server listening on port 3000!');
  });
}

// const encoding = 'utf8'
const readFileContents = (path, encoding, callback) => {
  fs.readFile(path, encoding, (err, data) => {
    if (err) throw err;
    return callback(data)
  })
}


launchServer()
  
  