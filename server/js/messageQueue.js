const keypress = require('keypress');

const messages = []; // the storage unit for messages

const logKeypress = (key) => {
  // in raw-mode it's handy to see what's been typed
  // when not in raw mode, the terminal will do this for us
  if (process.stdin.isRaw) {
    process.stdout.write(key);
  }
};

module.exports.enqueue = (message) => {
  console.log(`Enqueing message: ${message}`);
  messages.push(message);
  console.log('MESSAGES ', messages);
};

module.exports.dequeue = () => {
  // returns undefined if messages array is empty
  return messages.shift();
};
// module.exports.messages = bin;