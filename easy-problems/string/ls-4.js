// Jweles and stones (easy)

function includesJewels(jewel, stone) {
  for (let i = 0; i < jewel.length; i++) {
    if (jewel[i] === stone) {
      return true;
    }
  }
  return false;
}

function numJewelsAndStones(jewels, stones) {
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    if (includesJewels(jewels, stones[i])) {
      count++;
    }
  }

  return count;
}

function numJewelsAndStonesWithSet(jewels, stones) {
  let count = 0;
  const jewelSet = new Set();
  for (let i = 0; i < jewels.length; i++) {
    jewelSet.add(jewels[i]);
  }

  for (let i = 0; i < stones.length; i++) {
    if (jewelSet.has(stones[i])) {
      count++;
    }
  }

  return count;
}

console.log(numJewelsAndStonesWithSet("aA", "aAAbb"));
