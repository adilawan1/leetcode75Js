//Container with most water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let ans = 0,
    i = 0,
    j = H.length - 1;
  while (i < j) {
    ans = Math.max(ans, Math.min(H[i], H[j]) * (j - i));
    H[i] <= H[j] ? i++ : j--;
  }
  return ans;

  // let left=0;
  // let right=0;
  // for (let i=0;i<height.length;i++){
  //     left=i
  //     right=height.length-i-1
  //     const height=
  //     console.log(left,height[left],right,height[right])
  // }
};
