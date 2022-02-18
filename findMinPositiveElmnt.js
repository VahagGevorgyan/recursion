"use strict";

function findMinimalPositiveElmnt(arr, minPositive = Infinity) {
  let min = minPositive;
  if (arr.length === 0) {
    if (min === Infinity) {
      return -1;
    }
    return min;
  }

  let last = arr.pop();

  if (last >= 0 && last < minPositive) {
    min = last;
  }

  return findMinimalPositiveElmnt(arr, min);
}

console.log(findMinimalPositiveElmnt([56, -9, 87, -23, 0, -105, 55, 1]));
