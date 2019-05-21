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
        if (index < this.size) {
            this.array[index] = el;
            this.size++;
            this.resize();
        }
    }

    resize() {
        if (this.size > 0.8 * this.maxSize) {
            this.maxSize *= 2;
            this.array = this.copy(this.array);
            this.fillWithEmptySpots(this.array, this.maxSize);
        } else if (this.size < 0.3 * this.maxSize) {
            this.maxSize = this.size <= MIN_SIZE ? MIN_SIZE : this.maxSize / 2;
            if (this.maxSize != MIN_SIZE) {
                this.array = this.copy(this.array);
                this.fillWithEmptySpots(this.array, this.maxSize);
            }
        }
    }

    fillWithEmptySpots(array, size) {
        for (let i = array.length; i < size; i++) {
            array[i] = undefined;
        }
    }

    copy(array) {
        const newArray = [];
        for (let i = 0; i < array.length; i++) {
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

    remove(index) {
        if (index < this.size) {
            this.array = this.removeFromArray(index, this.array);
            this.size--;
            this.resize();
        }
    }

    removeObj(obj) {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] === obj) {
                this.removeFromArray(i, this.array);
            }
        }
        this.size--;
        this.resize();
    }

    removeFromArray(index, array) {
        for (let i = index; i < array.length; i++) {
            if (i === array.length - 1) {
                return array;
            }
            array[i] = array[i + 1];
        }
        return array;
    }


    print() {
        const result =
            this.array.reduce((result, elem) => result + ', ' + elem);
        console.log(result);
    }
}

let ar = new ArrayList();
ar.add(4);
ar.add("d");
ar.add(3);
ar.add(33);
ar.add(76);
ar.add(55);
ar.add(55);
ar.add(55);
ar.add(55);

// ar.remove(1);

ar.print();

// console.log(ar.get(0));