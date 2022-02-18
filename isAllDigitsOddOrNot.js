"use strict";
function isDigitsOdd(n) {
  let digit = n % 10;
  if (n < 10) {
    return n % 2 === 1;
  }

  if (digit % 2 === 0) return false;

  return isDigitsOdd(parseInt(n / 10));
}
console.log(isDigitsOdd(5319735));
