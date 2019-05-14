import {isSorted, swap} from "./ArrayUtils.mjs";

let array = [3, 1, 7, 0, 9];
console.info(sort(array));

function sort(array) {
    if (isSorted(array)) {
        return array;
    }
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
        }
    }
    return sort(array);
}