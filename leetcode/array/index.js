/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//   let j = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       nums[j] = nums[i];
//       j++;
//     }
//   }
//   return j;
// };

// const result = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
// console.log(result);

// var removeElement = function (nums, val) {
//   let k = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }

//   return nums;
// };

// console.log(removeElement([3, 2, 2, 3], 3));

// var plusOne = function (digits) {
//   let size = digits.length - 1;
//   while (size >= 0) {
//     if (digits[size] + 1 !== 10) {
//       digits[size] = digits[size] + 1;
//       return digits;
//     }

//     digits[size] = 0;
//     if (size === 0) {
//       digits.unshift(1);
//     }
//     size--;
//   }
//   return digits;
// };

// const result = plusOne([9, 8, 9, 9]);
// console.log(result);

// var merge = function (nums1, nums2) {
//   let k = 0;
//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < nums2.length; j++) {
//       if (nums1[i] === nums1[i + 1]) {
//         break;
//       }
//       if (nums1[i] <= nums2[j + k]) {
//         nums1.splice(i + 1, 0, nums2[j + k]);
//         k++;
//         break;
//       }
//     }
//     console.log(nums1);
//   }
//   return nums1;
// };

// console.log(merge([1, 2, 3], [2, 5, 6]));

var merge = function (nums1, nums2) {
  const nums3 = [];
  for (let i = 0; i < nums2.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      if (nums1[j] >= nums2[i]) {
        nums1.splice(j + 1, 0, nums2[i]);
        break;
      }
      if (j === nums1.length - 1) {
        nums1.push(nums2[i]);
      }
      console.log(nums1);
    }
  }
  return nums1;
};

merge([1, 2, 3], [2, 5, 6]);
