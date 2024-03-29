// Stores the active TCP connection object.
const { connect } = require('./play');
let connection;

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'w') {
    connection.write("Move: up");
  }
  if (data === 's') {
    connection.write("Move: down");
  }
  if (data === 'a') {
    connection.write("Move: left");
  }
  if (data === 'd') {
    connection.write("Move: right");
  }
  if (data === 'i') {
    connection.write("Say: comin for U!");
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  

  return stdin;
};

module.exports = {
  setupInput
};
