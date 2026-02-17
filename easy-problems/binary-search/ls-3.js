// First Bad Version
// https://leetcode.com/problems/first-bad-version/

// The isBadVersion API is defined for you.
// @param {integer} version number
// @return {boolean} whether the version is bad
// function isBadVersion(version) {
//     ...
// }

function isBadVersion(version) {
  return version >= 4;
}

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let l = 1;
    let r = n;

    while (l < r) {
      let mid = Math.floor((l + r) / 2);

      if (isBadVersion(mid)) r = mid;
      else l = mid + 1;
    }

    return l;
  };
};

console.log(solution(isBadVersion)(5));
