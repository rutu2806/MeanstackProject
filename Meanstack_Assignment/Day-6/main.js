/**
 * FS => INTERNAL MODULE
 *
 * PROMISE
 * ASYNC
 * AWAIT
 *
 * BLUEBIRD => EXTERNAL MODULE
 * MYSQL => External Module
 *
 * Start the node program in Background
 * node src/main.js &
 *
 * To Kill the NodeJS Background
 * kill -9 $(lsof -t -i:3000 -sTCP:LISTEN)
 */

const http = require("http");
const mod = require("./my.module");

http
  .createServer((req, res) => {
    // CORS ENABLED
    // res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.setHeader("Access-Control-Allow-Origin", "*");

    const myresponse = JSON.stringify(mod.list);

    // to send the response to the client
    res.end(myresponse);
  })
  .listen(5600);