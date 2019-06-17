export class LinkedList {
    constructor() {
        this.size = 0;
        this.first = new Element();
    }

    add(elem) {
        if (this.size === 0) {
            this.first = new Element(elem);
            this.size++;
            return;
        }
        let temp = this.first;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = new Element(elem);
        this.size++;
    }

    addAt(index, elem) {
        if (index >= this.size) {
            throw new Error("Index out of bound");
        }
        let temp = this.first;
        for (let i = 1; i <= index; i++) {
            temp = temp.next;
        }
        temp.value = elem;
    }

    get(index) {
        if (index >= this.size) {
            throw new Error("Index out of bound");
        }
        let temp = this.first;
        for (let i = 1; i <= index; i++) {
            temp = temp.next;
        }
        return temp.value;
    }

    remove(index) {
        if (index >= this.size) {
            throw new Error("Index out of bound");
        }
        let temp = this.first;
        for (let i = 1; i < index; i++) {
            temp = temp.next;
        }
        let before = temp;
        let actual = temp.next;
        before.next = actual.next;
        this.size--;
    }

    removeObj(obj) {
        let temp = this.first;
        if (temp.value === obj) {
            temp.value = temp.next.value;
            this.size--;
            return;
        }
        for (let i = 1; i < this.size; i++) {
            let before = temp;
            if (temp.next.value === obj) {
                let actual = temp.next;
                before.next = actual.next;
                this.size--;
                return;
            }
            temp = temp.next;
        }
        throw Error("Element doesnt exist");
    }
}


class Element {
    constructor(value) {
        this.value = value;
    }
}