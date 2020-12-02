'use strict';

//Task 1

String.prototype.isPalindrome = function () {
  const string = this.toLowerCase().replace(/\s+/g, '');
  const reversedString = string.split('').reverse().join('');

  return string === reversedString;
};

console.log('А роза упала на лапу Азора'.isPalindrome());

//Task 2

function getAverageMark(marks) {
  if (marks.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }

  const average = sum / marks.length;
  const roundedAverage = Math.round(average);

  return roundedAverage;
}

//Task 3

function checkBirthday(birthday) {
  const now = Date.now();
  const parsedBirthday = new Date(birthday).getTime();
  const diff = now - parsedBirthday;
  const age = diff / (1000 * 60 * 60 * 24 * 365.25);

  return age >= 18;
}
