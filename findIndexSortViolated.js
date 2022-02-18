"use strict";

function findIndexWhereSortViolated(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return i;
    }else return-1
  }
}

console.log(findIndexWhereSortViolated([2, 12, 15, 48, 64]));
