// Rotten Oranges

function rottenOranges(grid) {
  // 1. traverse to all element and get x,y cordinates of rotten oranges
  //    into ques

  let m = grid.length,
    n = grid[0].length;
  let ques = [];

  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (grid[x][y] === 2) ques.push([x, y, 0]);
    }
  }

  if (!ques.length) return -1;

  // Mark all left, right, top, bottom to 2 one by one
  let minute = 0;

  while (ques.length) {
    const [x, y, min] = ques.shift();

    if (x < m - 1 && grid[x + 1][y] === 1) {
      grid[x + 1][y] = 2; // right
      ques.push([x + 1, y, min + 1]);
    }
    if (x > 0 && grid[x - 1][y] === 1) {
      grid[x - 1][y] = 2; // left
      ques.push([x - 1, y, min + 1]);
    }
    if (y < n - 1 && grid[x][y + 1] === 1) {
      grid[x][y + 1] = 2; // bottom
      ques.push([x, y + 1, min + 1]);
    }
    if (y > 0 && grid[x][y - 1] === 1) {
      grid[x][y - 1] = 2; // top
      ques.push([x, y - 1, min + 1]);
    }

    minute = Math.max(minute, min);
  }

  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (grid[x][y] === 1) return -1;
    }
  }

  return minute;
}

console.log(
  rottenOranges([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
);
