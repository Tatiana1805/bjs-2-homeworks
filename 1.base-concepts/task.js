"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let dscrt = Math.pow(b, 2) -4 * a * c;
	// console.log(dscrt)
	if (dscrt < 0) {
		console.log(arr);
	} else if (dscrt === 0) {
		arr = [-b / (2 * a)];
		console.log(arr)
	} else {
		x1 = [(-b + Math.sqrt(dscrt)) / (2 * a)];
		x2 = [(-b - Math.sqrt(dscrt)) / (2 * a)];
		console.log(x1, x2);
	}
	return arr;
}
solveEquation(1, 12, 3)


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (calculateTotalMortgage === String) {
		false
	} else {
	let	percentMonth = percent / 100 / 12;
	let sum = amount - contribution;
	let payMonth = sum * (percentMonth + (percentMonth / (((1 + percentMonth)**countMonths) - 1)));
	amount = payMonth * countMonths;
	}
	console.log(Number(amount.toFixed(2)));
}
calculateTotalMortgage(10, 1000, 50000, 12)



function get(allMessa)