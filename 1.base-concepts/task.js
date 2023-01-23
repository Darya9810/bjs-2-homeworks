"use strict";

"use strict";

// Задача 1.1

function solveEquation(a, b, c) {
  let arr;

  // код для задачи №1 писать здесь

  arr = [];
  let d = (b**2-4*a*c);
  if (d > 0){
    arr.push((-b + Math.sqrt(d) )/(2*a));
    arr.push((-b - Math.sqrt(d) )/(2*a));
  }
  if (d === 0){
    arr.push(-b/(2*a));
  }
  return arr; // array
}


// Задача 1.2

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  // Блок валидации число/не число поля "Процентная ставка"
  if (Number.isFinite(percent)){
    percent = Number(percent)
  } else {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }

  // Блок валидации число/нечисло поля "Начальный взнос"
  if (Number.isFinite(contribution)){
    contribution = Number(contribution)
  } else {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }

  // Блок валидации число/нечисло поля "Общая стоимость"
  if (Number.isFinite(amount)){
    amount = Number(amount)
  } else {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  let creditBody = (amount - contribution);
  let dateStart = new Date();

  let monthsOfCredit = (
      date.getMonth() - dateStart.getMonth() + (12 * (date.getFullYear() - dateStart.getFullYear()))
  );
  let monthPayment = (creditBody * (percent/1200 + ((percent/1200) / (((1 + (percent/1200)) ** monthsOfCredit) - 1))));

  totalAmount = monthPayment * monthsOfCredit;

  //console.log(Number(totalAmount.toFixed(2)));

  return Number(totalAmount.toFixed(2));
}