const { groupBy } = require("../../utils");

// 1. Calculate the sum of all elements in an array:
const arrayToSum = [1, 2, 3, 4, 5];
const sum = arrayToSum.reduce((acc, num) => acc + num, 0);
// console.log(sum);

// 2. Find the maximum value in an array:
const arrayToFindGreatestValue = [10, 5, 20, 15, 30];
const greatestValue = arrayToFindGreatestValue.reduce((acc, num) => {
  if (num > acc) {
    return num;
  }
  return acc;
});
// console.log(greatestValue);

// 3. Concatenate all elements of a string array into a single string:
const arrayToConcatenate = ['Hello', 'world', 'of', 'JavaScript'];
const concatenatedString = arrayToConcatenate.join(' ');
// console.log(concatenatedString);

// 4. Count the occurrence of each element in an array:
const occurrenceNumbers = [1, 2, 3, 2, 1, 1, 3, 4, 5, 4, 3, 2];
const occurrences = occurrenceNumbers.reduce((acc, num) => {
  return {
    ...acc,
    [num]: (acc[num] || 0) + 1
  }
}, {})
// console.log(occurrences);

// 5. Group objects based on a specific property:
const arrayGroupBasedProperty = [
  { id: 1, category: 'A' },
  { id: 2, category: 'B' },
  { id: 3, category: 'A' },
  { id: 4, category: 'C' },
  { id: 5, category: 'B' }
];

const arrayGroupByCategory = groupBy(arrayGroupBasedProperty, 'category')
// console.log(arrayGroupByCategory);