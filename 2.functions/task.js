function getArrayParams(arr) {
  min = arr[0];
  max = arr[0];
  sum = arr[0];


  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum +=  arr[i]
  }
  let avg = sum / arr.length;

  return { min: min, max: max, avg: +avg.toFixed(2)};
}


// Задание 2
function worker(arr) {
  let summa = (sum, elem) => sum + elem;
  return arr.reduce(summa);
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);

  for (let i = 1; i < arrOfArr.length; i++) {
    const funcResult = func(arrOfArr[i]);
    if (funcResult > max) {
      max = funcResult;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  return max - min;
}