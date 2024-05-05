function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }

    return arr;
}

// Example usage:
const arr = [5, 3, 8, 1, 2, 7, 4];
const sortedArr = insertionSort(arr);
console.log("Sorted Array:", sortedArr);
