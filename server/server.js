

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
    client.on('data', (data) => {
      // Client has sent a filename to look for
      console.log('Message from client:::', data)
      client.write('you sent me:::' + data)

    })

  });
  
  server.listen(3000, () => {
    console.log('Server listening on port 3000!');
  });

  // server.on('data', (data) => {

  // })
}

// const readFile = function(path) {

//   return "file contents placeholder"
// }


launchServer()
  
  