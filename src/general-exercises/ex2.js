// 1. Advanced filter exercise:
// Given an array of objects representing products, filter only those products that have a price greater than 100
// and a stock quantity greater than 0.
// Example:
const products = [
  { name: 'iPhone', price: 999, stock: 5 },
  { name: 'Laptop', price: 1299, stock: 10 },
  { name: 'Headphones', price: 99, stock: 10 },
  { name: 'Smartwatch', price: 199, stock: 0 },
];
// Output:
// [
// { name: 'iPhone', price: 999, stock: 5 },
// { name: 'Laptop', price: 1299, stock: 10 }
// ]

const productsWithPriceGreaterThan100 = products.filter(
  (product) => product.price > 100 && product.stock
);
// console.log(productsWithPriceGreaterThan100);

// 2. Advanced transformation exercise:
// Given an array of objects representing students, add a property called "status" to each object,
// based on student grade.
// If the grade is greater than or equal to 7, the status must be "Approved"; otherwise, it must be "Disapproved".
// Example
const students = [
  { name: 'John', grade: 8 },
  { name: 'Mary', grade: 6 },
  { name: 'Carlos', grade: 9 },
  { name: 'Ana', grade: 5 },
];
const studentsWithStatus = students.map((student) => ({
  ...student,
  status: student.grade > 7 ? 'Approved' : 'Disapproved',
}));
// console.log(studentsWithStatus);
// Output:
// [
// { name: 'John', grade: 8, status: 'Approved' },
// { name: 'Maria', grade: 6, status: 'Failed' },
// { name: 'Carlos', grade: 9, status: 'Approved' },
// { name: 'Ana', grade: 5, status: 'Failed' }
// ]
//

// 3. Advanced reduction exercise:
// Given an array of numbers, find the sum of squares of the positive numbers.
// Example:
const numbers = [1, -2, 3, -4, 5];
const sumOfSquaresOfNumbers = numbers
  .filter((number) => number > 0)
  .map((number) => number ** 2)
  .reduce((acc, number) => acc + number);
// console.log(sumOfSquaresOfNumbers);

// 4. Advanced search exercise:
// Given an array of words, find the longest word present in the array.
// Example:
const fruits = ['banana', 'orange', 'apple', 'pineapple'];
const fruitWithBiggestName = fruits.reduce((prev, curr) => {
  const currIsBiggerThanPrev = curr.length > prev.length;
  const SameLengthAndisAlphabeticallySmaller =
    curr.length === prev.length && curr < prev;

  if (currIsBiggerThanPrev || SameLengthAndisAlphabeticallySmaller) {
    return curr;
  }

  return prev;
}, '');
// console.log(fruitWithBiggestName);
// Output: 'pineapple'