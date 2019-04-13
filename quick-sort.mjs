import {swap,isSorted} from "./ArrayUtils";

let array = [4, 7, 2, 14, 22, 1, 8];
console.info(sort(array));

function sort(array) {
    if (isSorted(array)) {
        return array;
    }
    let pivotIndex = Math.round(array.length / 2) - 1,
        pivot = array[pivotIndex],
        j = 0;

    swap(array, pivotIndex, array.length - 1);

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, j, array.length - 1);

    const head = sort(array.slice(0, j));
    const tail = sort(array.slice(j + 1, array.length));

    return head.concat(pivot, tail);

}

