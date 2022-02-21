'use strict'

const arr = [1, [3, 4, [1, 2]], 10];
function flatten(arr) {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      return acc.concat(flatten(val));
    } else {
      return acc.concat(val);
    }
  }, []);
}
console.log(flatten(arr))
