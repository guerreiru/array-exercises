//1. Data filter exercise:
// Given a set of numbers, filter only the even numbers and store them in a new list.
// Example:
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Output: [2, 4, 6, 8, 10]
const evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbersFiltered = evenNumbers.filter((num) => num % 2 === 0);
// console.log(evenNumbersFiltered);

//two. Data transformation exercise:
// Given a set of names in string format, convert them to uppercase and store them in a new list.
// Example:
// Input: ["john", "maria", "carlos", "ana"]
// Output: ["JOÃO", "MARIA", "CARLOS", "ANA"]
const lowerCaseNames = ['john', 'maria', 'carlos', 'ana'];
const upperCaseNames = lowerCaseNames.map((name) => name.toUpperCase());
// console.log(upperCaseNames);

//3. Data sorting exercise:
// Given a set of numbers, sort them in ascending order and return the sorted list.
// Example:
// Input: [9, 3, 6, 1, 8, 2, 5, 7, 4]
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
const unorderedNumbers = [9, 3, 6, 1, 8, 2, 5, 7, 4];
const orderedNumbers = unorderedNumbers.sort();
// console.log(orderedNumbers);

//4. Data aggregation exercise:
// Given a set of numbers, average the values and return the result.
// Example:
// Input: [4, 7, 13, 9, 5]
// Output: 7.6
const notes = [4, 7, 13, 9, 5];
const sum = notes.reduce((acc, note) => acc + note, 0);
const average = sum / notes.length;
// console.log(average);

//5. Data research exercise:
// Given a set of words, find all words that contain the letter 'a' and store them in a new list.
// Example:
// Input: ["banana", "orange", "apple", "grape", "pineapple"]
// Output: ["banana", "orange", "apple", "pineapple"]
const fruits = ['banana', 'orange', 'apple', 'grape', 'pineapple'];
const fruitsWithA = fruits.filter((fruit) => fruit.includes('a'));
console.log(fruitsWithA);