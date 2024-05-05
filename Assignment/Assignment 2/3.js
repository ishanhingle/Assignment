
function swapValues(data, indexA, indexB) {
    const temporaryValue = data[indexA];
    data[indexA] = data[indexB];
    data[indexB] = temporaryValue;
  }
  
  // Function to partition the array around a pivot element
  function partitionArray(data, lowIndex, highIndex) {
    // Use the first element as the pivot
    const pivotIndex = lowIndex;
    let leftIndex = lowIndex;
    let rightIndex = highIndex;
  
    // Move elements around the pivot
    while (leftIndex < rightIndex) {
      // Increment left index while data[leftIndex] is less than or equal to pivot
      while (leftIndex < highIndex && data[leftIndex] <= data[pivotIndex]) {
        leftIndex++;
      }
      // Decrement right index while data[rightIndex] is greater than pivot
      while (rightIndex > lowIndex && data[rightIndex] > data[pivotIndex]) {
        rightIndex--;
      }
      // If left and right haven't crossed, swap elements at left and right indices
      if (leftIndex < rightIndex) {
        swapValues(data, leftIndex, rightIndex);
      }
    }
    // Swap the pivot element with the right index element to place the pivot in its final position
    swapValues(data, pivotIndex, rightIndex);
  
    // Return the final index of the pivot
    return rightIndex;
  }
  // Function to perform quicksort on an array
  function quickSort(data, lowIndex, highIndex) {
    if (lowIndex < highIndex) {
      // Partition the array and get the index of the pivot element
      const pivotIndex = partitionArray(data, lowIndex, highIndex);
  
      // Recursively sort the subarrays before and after the pivot
      quickSort(data, lowIndex, pivotIndex - 1);
      quickSort(data, pivotIndex + 1, highIndex);
    }
  }
  
  // Sample array to be sorted
  const numbers = [10, 9, 7, 6, 5, 2, 1];
  // Perform quicksort on the array
  quickSort(numbers, 0, numbers.length - 1);
  // Output the sorted array
  console.log(numbers);
  