function parseCount(number) {
	let result = Number.parseFloat(number);
	if (Number.isNaN(result)) {
		throw new Error('Невалидное значение');
	}
	return result;
}

function validateCount(number) {
	try {
		return parseCount(number);
	} catch (Error) {
		return Error;
	}
}


class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if (a > b + c || b > a + c || c > a + b) {
			throw new Error('Треугольник с такими сторонами не существует')
		}
	}
	get perimeter() {
		return (this.a + this.b + this.c);
	}

	get area() {
		const p = this.perimeter / 2;
		return +((p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5).toFixed(3);
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			},
			get area() {
				return 'Ошибка! Треугольник не существует';
			}
		}
	}

}