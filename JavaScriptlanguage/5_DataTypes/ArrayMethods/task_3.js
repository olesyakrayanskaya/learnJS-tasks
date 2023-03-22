function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        let n = arr[i];
        if (n < a || n > b) {
            arr.splice(i, 1);
            i -= 1;
        }
    }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

console.log(arr); 