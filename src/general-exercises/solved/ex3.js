//1. Filtering and transformation exercise:
// Given an array of objects representing students,
// return a new array with the names of students who are aged between 18 and 25, and sort them alphabetically.
// Example:
// Input:
//
const students = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 22 },
  { name: 'Carol', age: 18 },
  { name: 'Dave', age: 26 },
];

const studentsBetween18And25Years = students.filter(student => student.age >= 18 && student.age <= 25).sort()
// console.log(studentsBetween18And25Years);
// Output:
// ['Alice', 'Bob', 'Carol']

//two. Data aggregation exercise:
// Given an array of objects representing products,
// calculate the total inventory value (product price multiplied by the quantity in stock) and return the result.
// Example:
// Input:
const products = [
  { name: 'Product A', price: 10, stock: 5 },
  { name: 'Product B', price: 5, stock: 10 },
  { name: 'Product C', price: 8, stock: 3 },
];
const stock = products.reduce((acc, product) => acc + product.price * product.stock, 0);
// console.log(stock);
// Output:
// 124

//3. Data research exercise:
// Given an array of objects representing books, find the book with the most pages and return the title of the book.
// Example:
// Input:
//
const books = [
  { title: "Book A", pages: 200 },
  { title: "Book B", pages: 150 },
  { title: "Book C", pages: 300 },
];
const bookWithMorePages = books.reduce((acc, book) => acc.pages > book.pages ? acc.title : book.title, '')
// console.log(bookWithMorePages);
// Output:
// 'Book C'

//4. Advanced transformation exercise:
// Given an array of numbers, return a new array with the numbers sorted in descending order, removing duplicates.
// Example:
// Input:
const numbers = [5, 2, 9, 5, 1, 2, 8, 9];
const sortedUniqueNumbers = Array.from(new Set(numbers)).sort((a, b) => b - a)
// console.log(sortedUniqueNumbers);
// Output:
// [9, 8, 5, 2, 1]

//5. Advanced filtering and transformation exercise:
// Given an array of objects representing employees,
// return a new array with employees whose salary is above the company's average salary, sorted by salary in ascending order.
// Example:
// Input:
const employees = [
  { name: 'Bob', salary: 2500 },
  { name: 'Dave', salary: 3500 },
  { name: 'Carol', salary: 4000 },
  { name: 'Alice', salary: 3000 },
];

const averageWage = employees.reduce((acc, employee) => acc + employee.salary, 0) / employees.length;
const highestPaidEmployeesInAsc = employees.filter(employee => employee.salary > averageWage).sort((a, b) => {
  const salaryA = a.salary
  const salaryB = b.salary

  if (salaryA < salaryB) {
    return -1;
  }
  if (salaryA > salaryB) {
    return 1;
  }
  return 0;
});
// console.log(highestPaidEmployeesInAsc);
// Output:
// [
// { name: 'Dave', salary: 3500 },
// { name: 'Carol', salary: 4000 },
// ]