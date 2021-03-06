'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(percent)) {
    return `Параметр 'Процентная ставка' содержит неправильное значение '${percent}'`;
  }
  if (isNaN(contribution)) {
    return `Параметр 'Начальный взнос' содержит неправильное значение '${contribution}'`;
  }
  if (isNaN(amount)) {
    return `Параметр 'Общая стоимость' содержит неправильное значение '${amount}'`;
  }
  if (isNaN(date)) {
    return `Параметр 'Срок ипотеки' содержит неправильное значение '${date}'`;
  }

  percent = parseFloat(percent / 100);
  contribution = parseFloat(contribution);
  amount = parseFloat(amount);
  date = new Date(date);

  let P = percent / 12;
  let months = (date.getFullYear() - new Date().getFullYear()) * 12;
  let S = amount - contribution;

  let totalAmount = parseFloat(
    (S * (P + P / ((1 + P) ** months - 1)) * months).toFixed(2)
  );
  console.log(totalAmount);
  return totalAmount;
}

function getGreeting(name) {
  if (name === undefined || name.length === 0) {
    name = 'Аноним';
  }
  let greeting = `Привет, мир! Меня зовут ${name}.`;
  console.log(greeting);
  return greeting;
}
