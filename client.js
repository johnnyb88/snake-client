const net = require('net');
const {IP, PORT} = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log("you ded cuz you idled.", data);
  });
  conn.on('connect', (data) => {
    console.log("connection successfully established");
    conn.write('Name: JON');
    
  });
  // conn.on('connect', (data) => {
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 2000);
    
  // });

  return conn;
};

module.exports = {
  connect
};