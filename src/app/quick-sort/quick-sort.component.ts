async function quickSort(array: number[], left: number, right: number) {
    if (left >= right) return;

    const pivot = array[Math.floor(left+right)/2];
    const partitionIdx = partition(array, left, right, pivot);

    await delay(300)
    quickSort(array, left, partitionIdx-1);
    await delay(300)
    quickSort(array, partitionIdx, right);
}

function partition(array: number[], left: number, right: number, pivot: number): number {
    while (left <= right) {
        while (array[left] < pivot) left++;
        while (array[right] > pivot ) right--;

        if (left <= right) {
            [array[left],array[right]] = [array[right], array[left]];
            left++; right--;
        }
    }
    return left;
}

async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}


// function quicksort(data: number[], left: number, right: number): void {
//     // base case: if the left idx is greater than or equal to the right index, then the array is already sorted
//     if (left>=right) return;

//     // choose a pivot value and partition the data array around it
//     const pivot = data[Math.floor((left+right)/2)];
//     const partitionIndex = partition(data, left, right, pivot);

//     // recursevely sort the left and right sides of the partitioned array
//     quicksort(data, left, partitionIndex-1);
//     quicksort(data, partitionIndex, right)
// }

// function partition(data: number[], left: number, right: number, pivot: number): number {
//     while (left <= right) {
//         // find the next value on the left that should be swapped
//         while (data[left]<pivot) {
//             left++;
//         }
//         while (data[right]>pivot) {
//             right--;
//         }

//         // if the left index is still less than or equal to the right index, then swap the values
//         if (left<=right) {
//             [data[left], data[right]] = [data[right], data[left]];
//             left++;
//             right--;
//         }
//     }
//     // return the final position of the pivot
//     return left;
// }

