let arr = [8, 11, 20, 5, 20, 8, 0, 2, 4, 8];

function dup(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i]);
    for (let j = 0; j < newArr.length - 2; j++) {
      if (arr[i] === newArr[j]) {
        newArr.pop();
      }
      break;
    }
  }

  return newArr;
}

console.log(dup(arr));
