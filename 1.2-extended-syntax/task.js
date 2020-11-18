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
  const maxNumberOfMarks = 5;
  if (marks.length === 0) {
    return 0;
  } else if (marks.length >= maxNumberOfMarks) {
    marks.splice(maxNumberOfMarks);
    console.log(
      `Оценок больше пяти, расчет будет произведен по первым пяти оценкам: ${marks}`
    );
  }

  let sumOfMarks = 0;

  for (let mark of marks) {
    sumOfMarks += mark;
  }

  return sumOfMarks / marks.length;
}

function askDrink(name, dateOfBirthday) {
  if (new Date().getFullYear() - dateOfBirthday.getFullYear() > 18) {
    return `Не желаете ли олд-фэшн, ${name}?`;
  } else {
    return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }
}
