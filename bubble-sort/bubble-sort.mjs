import {isSorted, swap} from "../ArrayUtils.mjs";

export function sort(array) {

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