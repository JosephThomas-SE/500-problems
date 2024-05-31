//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.
 

// Example :

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


// CODE
var twoSum = function(nums, target) {
    // Create an empty object to store the complement and its index
    const numMap = {};

    // Loop through each number in the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement that would sum to the target
        const complement = target - nums[i];

        // Check if the complement exists in the object
        if (numMap[complement] !== undefined) {
            // If it exists, return the indices of the complement and the current number
            return [numMap[complement], i];
        }
        // Otherwise, add the current number and its index to the object
        numMap[nums[i]] = i;
    }

    // If no solution is found, return an empty array (this case should not occur per problem constraints)
    return [];
};

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Output: [1, 2]
console.log(twoSum([3, 3], 6));         // Output: [0, 1]
