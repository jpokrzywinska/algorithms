export function swap(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[array.length - 1];
    array[index2] = temp;
}