const sentence = prompt("Enter a sentence:");
let charCount = 0;
let wordCount = 1;
let vowelCount = 0;

for (let i = 0; i < sentence.length; i++) {
  charCount++;
  if (sentence[i] === " ") {
    wordCount++;
  }
  if ("aeiouAEIOU".includes(sentence[i])) {
    vowelCount++;
  }
}

console.log(`Sentence: ${sentence}`);
console.log(`Length of the sentence: ${charCount}`);
console.log(`Number of words in the sentence: ${wordCount}`);
console.log(`Number of vowels in the sentence: ${vowelCount}`);