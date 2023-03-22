function getMaxSubSum(arr) {
    let maxSum = -Infinity;
    let partialSum = 0;

    for (let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) {partialSum = 0};
    }

    return maxSum;
}

console.log(getMaxSubSum([9, 8, 0]));