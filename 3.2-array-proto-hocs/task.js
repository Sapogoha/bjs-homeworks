'use strict';

//Task 2

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(10); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return (sum += +arg);
  }, 0);
}

function compareArrays(arr1, arr2) {
  return (
    arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i])
  );
}

function memorize(fn, limit) {
  const memory = [];

  return (...args) => {
    const searchResult = memory.find((item) => compareArrays(item.args, args));

    if (searchResult) {
      return searchResult.result;
    }

    const result = fn(...args);
    memory.push({ args: args, result: result });

    if (memory.length > limit) {
      memory.shift();
    }

    return result;
  };
}

const testArray = [
  [1, 2, 3],
  [1, 2],
  [1, 2, 3],
  [1, 2],
  [9, 5, 2, 4],
];

function testCase(testFunction, someTimer) {
  console.time('timer');

  for (let i = 0; i < 10; i++) {
    testArray.forEach((element) => testFunction(...element));
  }
  console.timeEnd(someTimer);
}

testCase(sum, 'timer');

//timer: 5051.252ms
//timer: 0.529ms
