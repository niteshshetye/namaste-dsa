// Group Anagrams (medium)
// Given an array of strings, group the anagrams together. You can return the answer in any order.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = {};

  for (let str of strs) {
    let sortedStr = str.split("").sort().join("");

    if (map[sortedStr]) {
      map[sortedStr].push(str);
    } else {
      map[sortedStr] = [str];
    }
  }

  return [...Object.values(map)];
};

function generateKey(str) {
  let freqArray = Array(26).fill(0);

  for (let i = 0; i < str.length; i++) {
    let index = str[i].charCodeAt() - "a".charCodeAt();
    ++freqArray[index];
  }

  let key = "";
  for (let i = 0; i < freqArray.length; i++) {
    key = key + String.fromCharCode(i + "a".charCodeAt()) + freqArray[i];
  }

  return key;
}

var groupAnagramsOptimized = function (strs) {
  let map = {};

  for (let str of strs) {
    let key = generateKey(str);

    if (map[key]) {
      map[key].push(str);
    } else {
      map[key] = [str];
    }
  }

  return Object.values(map);
};

// Example usage:
console.log(groupAnagramsOptimized(["eat", "tea", "tan", "ate", "nat", "bat"]));
