const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messages = require('./messageQueue');
const keypress = require('keypress');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

const logKeypress = (key) => {
  // in raw-mode it's handy to see what's been typed
  // when not in raw mode, the terminal will do this for us
  if (process.stdin.isRaw) {
    process.stdout.write(key);
  }
};

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  // res.writeHead(200, headers);
  if (fs.)
  if (req.method === 'GET') {
    console.log('WRITTING ', messages);
    var dequeue = messages.dequeue();
    if (dequeue) {
      res.write(dequeue);
      res.end();
    }
    // res.end(messages.dequeue());

  } else if (req.method === 'POST') {
    var filePath = path.join('./spec', '.background.jpg');
    var stat = fs.statSync(filePath);
    debugger
    logKeypress('HELLLOOOO LOGGER')
    res.writeHead(200, {
        'Content-Type': 'jpg',
        'Content-Length': stat.size
    });
    var readStream = fs.createReadStream(filePath);
    readStream.on('data', function(data) {
      debugger
      res.write(data);
      res.end();
    });
  // res.write(data);
  // res.end();
  next(); // invoke next() at the end of a request to help with testing!
};
};