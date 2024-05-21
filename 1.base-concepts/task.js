"use strict"
function solveEquation(a, b, c) {
  let D=b**2-4*a*c;
  if (D<0) {
    return [];
  } else if (D===0){
    return [-b/(2*a)];
  } else if (D>0){
    return [(-b+Math.sqrt(D))/(2*a),(-b-Math.sqrt(D))/(2*a)];
  }
}
console.log(solveEquation(1, 5, 4));
console.log(solveEquation(1, 2, 1));
console.log(solveEquation(1, 2, 10));


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyRate = percent/100/12;
  let lloanAmount = amount - contribution;
  let payment = lloanAmount * (monthlyRate + (monthlyRate / (((1 + monthlyRate)**countMonths) - 1)))
  let totalPayment = payment * countMonths;
  return Math.round(totalPayment * 100) / 100;
}
console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 0, 20000, 24));
console.log(calculateTotalMortgage(10, 1000, 20000, 24));
console.log(calculateTotalMortgage(10, 20000, 20000, 24));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36));