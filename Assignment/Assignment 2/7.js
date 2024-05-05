function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;

        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        // If no swap occurred in this pass, the array is already sorted
        if (!swapped) {
            break;
        }
    }

    return arr;
}

// Example usage:
const arr = [5, 3, 8, 1, 2, 7, 4];
const sortedArr = bubbleSort(arr);
console.log("Sorted Array:", sortedArr);
