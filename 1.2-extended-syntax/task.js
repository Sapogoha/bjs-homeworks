'use strict';
function getResult(a, b, c) {
  let x = [],
    D = Math.pow(b, 2) - 4 * a * c;

  if (D === 0) {
    x = [((-b - Math.sqrt(D)) / 2) * a];
  } else if (D > 0) {
    x = [((-b + Math.sqrt(D)) / 2) * a, ((-b - Math.sqrt(D)) / 2) * a];
  }

  return x;
}

function getAverageMark(marks) {
  if (marks.length === 0) {
    return 0;
  } else if (marks.length > 4) {
    marks.splice(5);
    console.log(
      `Оценок больше пяти, расчет будет произведен по первым пяти оценкам: ${marks}`
    );
  }

  let sumOfMarks = 0,
    averageMark;

  for (let mark of marks) {
    sumOfMarks += mark;
  }

  averageMark = sumOfMarks / marks.length;

  return averageMark;
}

function askDrink(name, dateOfBirthday) {
  let result;

  const age = new Date().getFullYear() - dateOfBirthday.getFullYear();

  if (age > 18) {
    result = `Не желаете ли олд-фэшн, ${name}?`;
  } else {
    result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }

  return result;
}
