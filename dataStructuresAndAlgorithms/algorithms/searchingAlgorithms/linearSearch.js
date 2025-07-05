function linearSearch(someArr, target) {
    for (let i = 0; i < someArr.length; i++) {
        if (someArr[i] == target) {
            return i;
        }
    }
    return -1;
}