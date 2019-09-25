const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '192.168.88.254',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log("you ded cuz you idled.", data);

  });
  conn.on('connect', () => {
    console.log("connection successfully established");
    conn.write('Name: JON');
  });
  return conn;
};

module.exports = connect;