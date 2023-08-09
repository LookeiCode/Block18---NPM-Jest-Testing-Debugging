// // arrays.test.js

// // Even Even
// Write a function that takes an array of numbers, and returns true if there is an even number of even numbers.

function evenEven(nums) {
  
}

test('evenEven should return true if there is an even number of even numbers', () => {
  expect(evenEven([5, 6, 2])).toBe(true);
  expect(evenEven([5, 5, 2])).toBe(false);
});

// // Reverse
// // Write a function that takes a list and returns a new list with the elements in reverse order

// function reverse(nums) {
//   // Fill in the code for the reverse function
// }

// test('reverse should return a new list with elements in reverse order', () => {
//   expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
// });

// // Common Elements
// function commonElements(nums1, nums2) {
//   // Implementation goes here...
// }

// test('commonElements should return the common elements between two arrays', () => {
//   expect(commonElements([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
// });

// // Combine
// function combine(nums1, nums2) {
//   // Implementation goes here...
// }

// test('combine should combine two arrays by alternating elements', () => {
//   expect(combine(['a', 'b', 'c'], [1, 2, 3])).toEqual(['a', 1, 'b', 2, 'c', 3]);
// });

// // Find Pair
// function findPair(nums, target) {
//   // Implementation goes here...
// }

// test('findPair should find a pair of numbers from the list that sum to the target number', () => {
//   expect(findPair([5, 6, 2, 3], 7)).toEqual([5, 2]);
// });

// // Average
// function average(nums) {
//   // Implementation goes here...
// }

// test('average should return the average of a list of numbers', () => {
//   expect(average([1, 2, 3, 4, 5])).toEqual(3);
// });

// // Remove Empty
// function removeEmpty(mylist) {
//   // Implementation goes here...
// }

// test('removeEmpty should remove all empty strings from a list', () => {
//   expect(removeEmpty(['a', 'b', '', 'c', '', 'd'])).toEqual(['a', 'b', 'c', 'd']);
// });

// // Merge Arrays
// function mergeArrays(nums1, nums2) {
//   // Implementation goes here...
// }

// test('mergeArrays should merge two arrays into a single array of arrays', () => {
//   expect(mergeArrays([5, 2, 1], [6, 8, 2])).toEqual([[5, 6], [2, 8], [1, 2]]);
// });

// // Combine All
// function combineAllArrays(nums) {
//   // Implementation goes here...
// }

// test('combineAllArrays should combine all elements from an array of arrays', () => {
//   expect(combineAllArrays([[5, 2, 3], [4, 5, 1], [7, 6, 3]])).toEqual([5, 2, 3, 4, 5, 1, 7, 6, 3]);
// });

// // Fibonacci
// function fibonacci(n) {
 
// }

// test('fibonacci should return the first n Fibonacci numbers', () => {
//   expect(fibonacci(8)).toEqual([1, 1, 2, 3, 5, 8, 13, 21]);
// });

// // Factorial
// function factorial(n) {
//   // Implementation goes here...
// }

// test('factorial should return the factorial of n', () => {
//   expect(factorial(5)).toEqual(120);
// });

// // Find Unique
// function findUnique(nums) {
//   // Implementation goes here...
// }

// test('findUnique should return a new array with any duplicates removed', () => {
//   const nums = [12, 24, 35, 24, 88, 120, 155, 88, 120, 155];
//   expect(findUnique(nums)).toEqual([12, 24, 35, 88, 120, 155]);
// });