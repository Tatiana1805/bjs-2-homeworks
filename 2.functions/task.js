function getArrayParams(...arr) {
	let max, min, sum, avg;
	max = -Infinity;
	min = Infinity;
	sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];

		}
		if (arr[i] > max) {
			max = arr[i];
		}
		sum += arr[i];
		avg = sum / arr.length;
	}

	return {
		min: min,
		max: max,
		avg: Number(avg.toFixed(2))
	};
}
getArrayParams(-99, 99, 10);



function summElementsWorker(...arr) {
	return arr.reduce((a, b) => a + b, 0);
}
summElementsWorker(1, 2, 3);

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0
	} else {
		return Math.max(...arr) - Math.min(...arr)
	}
}
differenceMaxMinWorker(1, 2, 3);

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumOddElement - sumEvenElement;
}
differenceEvenOddWorker(1, 2, 3, 4, 5, 6, 7, 8, 9);


function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	if (arr.length === 0) {
		return 0;
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		} else {
			arr[i]++
		}
	}
	return sumEvenElement / countEvenElement;
}
averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35);

function makeWork(arrOfArr, func) {
	let maxWorkerResult = func(...arrOfArr[0]);
	for (let i = 0; i < arrOfArr.length; i++) {
		const nozzle = func(...arrOfArr[i])
		if (nozzle > maxWorkerResult) {
			maxWorkerResult = nozzle;
		}
	}
	return maxWorkerResult
}