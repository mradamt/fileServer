let conn = require('./client').connect
// let connection;

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data) => {
    handleUserInput(data);
  });
  return stdin;
};

const handleUserInput = function(data) {
  if (data === '\u0003') process.exit();

  console.log("data sent:::", data)
  
};


module.exports = { setupInput };




// const userInput = () => {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   rl.question('I\'m a question? ', (answer) => {
//     // TODO: Log the answer in a database
//     console.log(`Your answer: ${answer}`);
    
//     rl.close();
//   });
// }