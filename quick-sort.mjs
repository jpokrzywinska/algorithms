import {swap} from "./ArrayUtils";

let array = [4, 7, 2, 14, 22, 1, 8];
quickSort(array);


function quickSort(array) {
    console.info(sort(array));
}

function sort(array) {
    if (isSorted(array)) {
        return array;
    }

    let valueToCompareIndex = Math.round(array.length / 2) - 1,
        valueToCompare = array[valueToCompareIndex],
        j = 0,
        array1 = [],
        array2 = [];

    swap(array, valueToCompareIndex, array.length - 1);

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < valueToCompare) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            j++;
        }
    }
    swap(array, j, array.length - 1);

    array1 = array.slice(0, j);
    array2 = array.slice(j + 1, array.length);

    return sort(array1).concat(valueToCompare, sort(array2));

}

function isSorted(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}
