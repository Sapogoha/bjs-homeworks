'use strict';

//Task 2

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return (sum += +arg);
  }, 0);
}

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((item, i) => item === arr2[i]);
}

function memorize(fn, limit) {
  const memory = [];

  return function (...args) {
    const searchResult = memory.find((item) => compareArrays(item.args, args));

    if (searchResult) {
      console.log('Результат из памяти');
      return searchResult.result;
    } else {
      memory.push({ args: args, result: fn(...args) });
    }

    if (memory.length > limit) {
      console.log('Удаляю лишнее');
      memory.shift();
    }

    console.log('Считаю');
    return fn(...args);
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

  for (let i = 0; i < 100; i++) {
    testArray.forEach((element) => testFunction(...element));
  }
  console.timeEnd(someTimer);
}

testCase(sum, 'timer');

//timer: 5051.252ms
//timer: 0.529ms
