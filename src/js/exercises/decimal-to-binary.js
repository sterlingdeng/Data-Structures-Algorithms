const Stack = require("../data-structures/stack");
let arg = process.argv.slice(2);

/**
 *
 * @param {*} number positive integer
 *
 */

function decimalToBinary(number) {
  if (number % 1 !== 0 || number < 0) return "Positive Integers Only";

  const binaryStack = new Stack();
  let remainder;
  while (number > 0) {
    remainder = number % 2;
    number = Math.floor(number / 2);
    binaryStack.push(remainder);
  }

  let binaryString = "";
  while (!binaryStack.isEmpty()) {
    binaryString += `${binaryStack.pop()}`;
  }

  return binaryString;
}

console.log(decimalToBinary(arg));
