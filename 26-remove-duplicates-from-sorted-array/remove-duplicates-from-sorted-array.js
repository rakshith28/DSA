/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
let uniqueCursor = 1;

	// Loop through the array of number
	for (let i = 1; i < nums.length; i++) {
		// Find unique values
		if (nums[i] !== nums[i - 1]) {
			// Move unique values to follow the last unique value found
			nums[uniqueCursor] = nums[i];

			// Move the unique value cursor onward
			uniqueCursor++;
		}
	}
       return uniqueCursor
};


