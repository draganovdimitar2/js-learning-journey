function partition(l, h, arr) {
    let pivot = arr[l];
    let i = l;
    let j = h;

    while (true) {
        while (arr[i] <= pivot && i < h) i++;
        while (arr[j] > pivot && j > l) j--;

        if (i >= j) break;

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    [arr[l], arr[j]] = [arr[j], arr[l]];
    return j;
}


function quickSort(arr, l, h) {
    if (l < h) {
        let j = partition(l, h, arr);
        quickSort(arr, l, j - 1);
        quickSort(arr, j + 1, h);
    }
}


let arr = [9,8,7,6,5,4,3,2,1,0];
quickSort(arr, 0, arr.length - 1);
console.log(arr);  // Sorted


