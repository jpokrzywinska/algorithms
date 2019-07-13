import {isSorted} from "../ArrayUtils.mjs";

let array = [4, 8, 2, 7, 9, 10];
console.log(divide(array));

export function divide(array) {
    console.log("DIVIDING: " + array);
    if (isSorted(array)) {
        return array;
    }
    let length = array.length,
        array1 = array.slice(0, length / 2),
        array2 = array.slice(length / 2, length);
    array1 = divide(array1);
    array2 = divide(array2);
    return merge(array1, array2);
}

function merge(array1, array2) {
    console.log("MERGING: " + array1 + " AND " + array2);
    let array = [];
    let i, j;
    for (i = 0, j = 0; i < array1.length, j < array2.length;) {
        if (array1[i] <= array2[j]) {
            array.push(array1[i++]);
        }
        else {
            array.push(array2[j++]);
        }
    }
    if (i < array1.length) {
        array.push(array1.slice(i, array1.length));
    } else if (j < array2.length) {
        array.push(array2.slice(j, array2.length));
    }
    console.log("MERGE RESULT: " + array);
    return array;
}
