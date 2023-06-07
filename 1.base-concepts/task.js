"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** -4 * a * c;
	console.log(d)
	if (d < 0) {
		arr['dscrt'] = d;
	} else if (d === 0) {
		arr = -b / (2 * a);
	} else {
		arr.push = (-b + Math.sqrt(d)) / (2 * a);
		arr.push = (-b - Math.sqrt(d)) / (2 * a);
	}
	return arr;
}
console.log(solveEquation(5, 2, 3))

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = ((1 + 100 / 100)(1 / 12) - 1) * 100;
	let S = amount - contribution;
	let pay = S * (percent + (percent / (((1 + percent) ** countMonths) - 1)))
	let totalAmound = pay * countMonths;
	console.log(totalAmound.toFixed(2));
}
console.log(calculateTotalMortgage(10, 0, 50000, 12));