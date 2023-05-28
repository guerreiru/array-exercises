const { groupBy } = require("../../utils");

// 1. Calculate the sum of all elements in an array:
// Input = [1, 2, 3, 4, 5];
// Output = 15

// 2. Find the maximum value in an array:
// Input = [10, 5, 20, 15, 30];
// Output = 30

// 3. Concatenate all elements of a string array into a single string:
// Input = ['Hello', 'world', 'of', 'JavaScript'];
// Output = 'Hello world of JavaScript'

// 4. Count the occurrence of each element in an array:
// Input = [1, 2, 3, 2, 1, 1, 3, 4, 5, 4, 3, 2];
// Output = { '1': 3, '2': 3, '3': 3, '4': 2, '5': 1 }

// 5. Group objects based on a specific property:
// Input = arrayGroupBasedProperty = [
//   { id: 1, category: 'A' },
//   { id: 2, category: 'B' },
//   { id: 3, category: 'A' },
//   { id: 4, category: 'C' },
//   { id: 5, category: 'B' }
// ];
// Output = {
//     A: [
//       { id: 1, category: 'A' },
//       { id: 3, category: 'A' }
//     ],
//     B: [
//       { id: 2, category: 'B' },
//       { id: 5, category: 'B' }
//     ],
//     C: [
//       { id: 4, category: 'C'
//     } 
//   ]
// }