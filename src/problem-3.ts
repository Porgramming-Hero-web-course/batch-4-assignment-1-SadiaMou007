/*
Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

 Sample Input: countWordOccurrences("I love typescript", "typescript");
 Sample Output: 1;
*/
function countWordOccurrences(sentence: string, word: string): number {
  const words = sentence.toLowerCase().split(" ");
  const targetWord = word.toLowerCase();
  const filteredWords = words.filter((w) => w === targetWord);

  return filteredWords.length;
}
