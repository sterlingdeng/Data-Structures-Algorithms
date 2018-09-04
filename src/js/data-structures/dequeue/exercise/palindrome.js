const Dequeue = require("../dequeue");

function palindrome(word) {
  //input check
  if (!word || word === "") return undefined;

  if (typeof word === "number") {
    word = word.toString();
  }

  const dequeue = new Dequeue();
  Array.from(word).forEach(letter => {
    dequeue.addBack(letter);
  });

  let palindrome = true;

  while (dequeue.size() > 1) {
    if (dequeue.removeFront() !== dequeue.removeBack()) {
      palindrome = false;
      break;
    }
  }
  return palindrome;
}

module.exports = palindrome;
