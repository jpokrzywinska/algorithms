const MIN_SIZE = 10;

class ArrayList {

    constructor() {
        this.maxSize = MIN_SIZE;
        this.array = [];
        for (let i = 0; i < this.maxSize; i++) {
            this.array[i] = undefined;
        }
        this.size = 0;
    }

    add(el) {
        this.array[this.size++] = el;
        this.resize();
    }

    addAt(index, el) {
        //TODO spr czy istnieje element o danym indeksie (index < size)
        this.array[index] = el;
        this.size++;
        this.resize();
    }

    resize() {
        if (this.size > 0.8 * this.maxSize) {
            this.maxSize *= 2;
            this.array = this.copy(this.array);
            this.fillWithEmptySpots(this.array, this.maxSize);
        } else if (this.size < 0.3 * this.maxSize) {
            this.maxSize = this.maxSize < MIN_SIZE ? MIN_SIZE : this.maxSize / 2;
            this.array = this.copy(this.array);
            this.fillWithEmptySpots(this.array, this.maxSize);
        }
    }

    fillWithEmptySpots(array, size) {
        for (let i = array.length; i < size; i++) {
            array[i] = undefined;
        }
    }

    copy(array) {
        const newArray = [];
        for (let i = 0; i < array.size; i++) {
            newArray[i] = array[i];
        }
        return newArray;
    }

    getSize() {
        return this.size;
    }

    get(index) {
        return this.array[index];
    }

    // todo remove index
    remove(index) {
        this.array[index] = undefined;
        this.size--;
        this.resize();
    }

    // todo remove object

    print() {
        const result =
            this.array.reduce((result, elem, index) => result + ', ' + elem);
        console.log(result);
    }
}

let ar = new ArrayList();
ar.add(5);
ar.add("3a");
ar.print();
console.log(ar.get(2));