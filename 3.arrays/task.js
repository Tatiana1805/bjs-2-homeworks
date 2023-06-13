function compareArrays(arr1, arr2) {
	compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);

}
compareArrays()

function getUsersNamesInAgeRange(users, gender) {
	if (users !== [] && gender === "мужской") {
		let user = users.filter(users => users.gender === "мужской");
		let result = user.reduce((total, next) => total + next.age / user.length, 0);
		return result;
	}
	if (users !== [] && gender === "женский" && gender.length !== 0) {
		let user = users.filter(users => users.gender === "женский");
		let result1 = user.reduce((total, next) => total + next.age / user.length, 0);
		return result1;
	} else {
		return 0;
	}
}
getUsersNamesInAgeRange();