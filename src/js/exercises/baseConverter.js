const Stack = require("../data-structures/stack");
const numberToBase = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let arg = process.argv.slice(2);

/**
 *
 * @param {*} number positive integer
 *
 */

function decimalToBinary(number, base) {
  if (base < 2 || base > 36) return "base input is between 2 and 32";

  const convertedStack = new Stack();
  let remainder;

  while (number > 0) {
    remainder = number % base;
    convertedStack.push(remainder);
    number = Math.floor(number / base);
  }

  let outputString = "";
  while (!convertedStack.isEmpty()) {
    outputString += `${numberToBase[convertedStack.pop()]}`;
  }
  return outputString;
}

console.log(decimalToBinary(arg[0], arg[1]));
