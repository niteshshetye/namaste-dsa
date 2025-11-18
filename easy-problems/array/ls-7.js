/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = 0;
  let p2 = 0;
  let n1Copy = nums1.slice(0, m);

  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (n1Copy[p1] < nums2[p2] && p1 < m)) {
      nums1[i] = n1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }

  console.log("nums1: ", nums1);
};

var mergeApproch2 = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) {
      break;
    }

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
  console.log("nums1: ", nums1);
};

const nums1 = [2, 5, 6, 0, 0, 0];
const m = 3;
const nums2 = [1, 2, 3];
const n = 3;
mergeApproch2(nums1, m, nums2, n);
