"use strict"
function getArrayParams(...arr) {
  let max = -Infinity;
  let min = Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

console.log("Задача №1 Исследовать массив")
console.log(getArrayParams(-99, 99, 10))
console.log(getArrayParams(1, 2, 3, -100, 10))
console.log(getArrayParams(5))

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }    
  return sum;
}

console.log("Задача №2 Сумма элементов")
console.log(summElementsWorker())
console.log(summElementsWorker(10, 10, 11, 20, 10))
console.log(summElementsWorker(0, 0, 0, -1, -100))

function differenceMaxMinWorker(...arr) {
  if (arr.length < 1) {
    return 0;
  }
  let min = Infinity;
  let max = -Infinity;
  let current;
  for (let i = 0; i < arr.length; i++){
    current = Number(arr[i]);
    if (current > max) {
      max = current;
    }
    if (current < min) {
      min = current;
    }
  }  
  return max - min;
}

console.log("Задача №2 Разница максимального и минимального элемента")
console.log(differenceMaxMinWorker())
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10))
console.log(differenceMaxMinWorker(0, 0, 0, -1, -100))

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 1) {
      sumOddElement += arr[i];      
    } else {
      sumEvenElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

console.log("Задача №2 Разница сумм четных и нечетных элементов")
console.log(differenceEvenOddWorker())
console.log(differenceEvenOddWorker(1, 2, 3, 4,5, 6, 7, 8, 9))
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17))
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35))

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length < 1){
    return 0;
  }
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  
  return sumEvenElement / countEvenElement;
}

console.log("Задача №2 Среднее значение четных элементов")
console.log(averageEvenElementsWorker())
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9))
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35))

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++){
    let result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}