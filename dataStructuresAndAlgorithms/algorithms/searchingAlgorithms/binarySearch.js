function binarySearch(arr, target) {
    let lowIdx = 0;
    let highIdx = arr.length - 1;

    while (lowIdx <= highIdx) {
        let midIdx = Math.floor((lowIdx + highIdx) / 2);
        let midEl = arr[midIdx];
        
        if (midEl == target) {
            return midIdx;
        } else if (midEl < target){
            lowIdx = midIdx + 1;
        } else {
            highIdx = midIdx - 1;
        }
    }

    return -1;  // If an error arise
}

console.log(binarySearch([1,2,3,4,5,7,8,8,9], 9));