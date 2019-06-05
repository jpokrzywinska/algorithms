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
        for (let i = 0; i < this.size; i++) {
            if (temp.value === obj) {
                let actual = temp;
                before.next = actual.next;
                this.size--;
                return;

            }
            let before = temp;
            temp = temp.next;
        }
    }
}


class Element {
    constructor(value) {
        this.value = value;
    }
}