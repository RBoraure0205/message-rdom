const messages = ["Oscar", "Ana", "Nicole", "Diego", "Juan", "Laura"];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  return message;
};

console.log(randomMsg());

module.exports = {
  randomMsg,
};
