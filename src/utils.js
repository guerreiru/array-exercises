const sumDigits = (number) => {
	return number
		.toString()
		.split("")
		.reduce((acc, digit) => acc + parseInt(digit), 0);
}

const isPrime = (number) => {
	if (number <= 1) {
		return false;
	}

	for (let i = 2; i <= Math.sqrt(number); i++) {
		if (number % i === 0) {
			return false;
		}
	}

	return true;
}

const reverseNumber = (number) => {
	return number
		.toString()
		.split("")
		.reverse()
		.join("");
}

const groupBy = (array, key) => {
	if (!Array.isArray(array)) {
		throw new Error('The first argument must be an array.');
	}

	if (typeof key !== 'string') {
		throw new Error('The second argument must be a string.');
	}

	const groupedArray = {};

	for (const item of array) {
		const groupKey = item[key]

		if (!groupedArray.hasOwnProperty(groupKey)) {
			groupedArray[groupKey] = [];
		}

		groupedArray[groupKey].push(item);
	}

	return groupedArray;
};

const getValue = (array, key, valueType) => {
	if (array.length === 0) {
		return null;
	}

	const compareFunction = (a, b) => {
		if (!valueType || valueType === 'highest') {
			return b[key] - a[key];
		} else {
			return a[key] - b[key];
		}
	};

	return array.reduce((acc, product) => {
		if (compareFunction(acc, product) > 0) {
			return product;
		}
		return acc;
	});

}

const capitalizeFirstLetter = ([first, ...rest]) =>
	first.toUpperCase() + rest.join('');

module.exports = { sumDigits, isPrime, reverseNumber, groupBy, getValue, capitalizeFirstLetter }