// Star Patterns

console.log("**************PATTERN ONE*******************");

/**
 * Pattern 1:
 * * * * * *
 * * * * * *
 * * * * * *
 * * * * * *
 */
function squarePattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (j = 0; j < n; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}
squarePattern(4);

console.log("**************PATTERN TWO*******************");
/**
 * Pattern 2:
 *  *
 *  * *
 *  * * *
 *  * * * * *
 */

function partternTwo(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      row = row + "*";
    }

    console.log(row);
  }
}
partternTwo(4);

console.log("**************PATTERN THREE*******************");
/**
 * Pattern 3:
 *  1
 *  1 2
 *  1 2 3
 *  1 2 3 4
 */

function partternThree(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      row = row + (j + 1);
    }

    console.log(row);
  }
}
partternThree(4);

console.log("**************PATTERN FOUR*******************");
/**
 * Pattern 3:
 *  1
 *  2 2
 *  3 3 3
 *  4 4 4 4
 */

function partternFour(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      row = row + (i + 1);
    }

    console.log(row);
  }
}
partternFour(4);

console.log("**************PATTERN FIVE*******************");
/**
 * Pattern 3:
 *  1 2 3 4
 *  1 2 3
 *  1 2
 *  1
 */

function partternFive(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n - i; j++) {
      row = row + (j + 1);
    }

    console.log(row);
  }
}
partternFive(4);

console.log("**************PATTERN SIX*******************");
/**
 * Pattern 3:
 *       *
 *     * *
 *   * * *
 * * * * *
 */

function partternSix(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n - (i + 1); j++) {
      row = row + " ";
    }

    for (let j = 0; j < i + 1; j++) {
      row = row + "*";
    }

    console.log(row);
  }
}
partternSix(4);

console.log("**************PATTERN SEVEN*******************");
/**
 * Pattern 3:
 * 1
 * 1 0
 * 1 0 1
 * 1 0 1 0
 * 1 0 1 0 1
 */

function partternSeven(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < i + 1; j++) {
      row = row + (j % 2 === 0 ? "1" : "0");
    }

    console.log(row);
  }
}
partternSeven(5);

console.log("**************PATTERN SEVEN*******************");
/**
 * Pattern 3:
 * 1
 * 0 1
 * 0 1 0
 * 0 1 0 1
 * 0 1 0 1 0
 */

function partternSeven(n) {
  let swap = 1;
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < i + 1; j++) {
      row = row + swap;
      swap = swap === 1 ? 0 : 1;
    }

    console.log(row);
  }
}
partternSeven(5);
