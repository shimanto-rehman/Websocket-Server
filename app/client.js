const config = require('../config/config');

const WebSocket = require('ws');
const url = `ws://${config.Ip}:${config.port}`;
const connection = new WebSocket(url)

// Send message when the connection with the websocket is established
connection.onopen = () => {
  connection.send(
    // Send any json object to the websocket and other devices
    JSON.stringify({
      'id':'6c84fb90-12c4-11e1-840d-7b25c5ee775a',
      'author': { 'name': 'Peter', 'imageUrl': 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200', 'color': '#4286f4', },
      'body': 'This is your Computer',
    })
  );
}

// Print messages from other clients in the client terminal
connection.onmessage = (event) => console.log(event.data);

// Print Websocket error in the client terminal
connection.onerror = (error) => console.log(`WebSocket error: ${error}`);