function areAnagrams(word1, word2) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanWord1 = word1.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const cleanWord2 = word2.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // Check if the lengths are the same
  if (cleanWord1.length !== cleanWord2.length) {
    return false;
  }

  // Create character frequency maps
  const frequencyMap1 = {};
  const frequencyMap2 = {};

  // Populate the frequency maps
  for (const char of cleanWord1) {
    frequencyMap1[char] = (frequencyMap1[char] || 0) + 1;
  }

  for (const char of cleanWord2) {
    frequencyMap2[char] = (frequencyMap2[char] || 0) + 1;
  }

  // Compare the frequency maps
  for (const char in frequencyMap1) {
    if (frequencyMap1[char] !== frequencyMap2[char]) {
      return false;
    }
  }

  return true;
}

// Example usage:
const word1 = "listen";
const word2 = "silent";

if (areAnagrams(word1, word2)) {
  console.log(`${word1} and ${word2} are anagrams.`);
} else {
  console.log(`${word1} and ${word2} are not anagrams.`);
}