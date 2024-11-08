/*
Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
 Sample Input: removeDuplicates([1, 2, 2, 3, 4, 4, 5])
 Sample Output: [1, 2, 3, 4, 5]
*/

function removeDuplicates(numbers: number[]): number[] {
  const uniqueNumberArray: number[] = [];
  for (const num of numbers) {
    if (!uniqueNumberArray.includes(num)) {
      uniqueNumberArray.push(num);
    }
  }
  return uniqueNumberArray;
}
