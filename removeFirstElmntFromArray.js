"use strict";
function removeFirstElmnt(arr, size = 0) {
  if (arr.length === size) {
    arr.pop();
    return arr;
  }

  arr[size] = arr[size + 1];
  size++;

  return removeFirstElmnt(arr, size);
}

console.log(removeFirstElmnt([6, 78, "n", 0, 1]));
console.log(removeFirstElmnt([5]));
console.log(removeFirstElmnt([]));
