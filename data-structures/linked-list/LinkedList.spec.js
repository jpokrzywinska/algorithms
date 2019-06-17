import {assert, expect, should} from "chai";
import {LinkedList} from "./LinkedList";

describe('linkedList test', () => {
    it('shoud successfully add element to list', () => {

        //given
        const list = new LinkedList();
        const el = 5;

        //when
        list.add(el);

        //then
        const size = 1;
        expect(list.size).to.eql(size);

    });
});

describe('linkedList test', () => {
    it('shoud successfully add 2 elements to list', () => {

        //given
        const list = new LinkedList();
        const el = 5;
        const el2 = 4;

        //when
        list.add(el);
        list.add(el2);

        //then
        const size = 2;
        expect(list.size).to.eql(size);

    });
});

describe('linkedList test', () => {
    it('shoud successfully add 3 elements to list', () => {

        //given
        const list = new LinkedList();
        const el = 5;
        const el2 = 4;
        const el3 = 3;

        //when
        list.add(el);
        list.add(el2);
        list.add(el3);

        //then
        const size = 3;
        expect(list.size).to.eql(size);

    });
});

describe('linkedList test', () => {
    it('shoud successfully get element with index', () => {

        //given
        const list = new LinkedList();
        const el = 5;
        const el2 = 4;
        const el3 = 3;

        //when
        list.add(el);
        list.add(el2);
        list.add(el3);

        //then
        expect(list.get(0)).to.eql(el);
        expect(list.get(1)).to.eql(el2);
        expect(list.get(2)).to.eql(el3);
    });
});

describe('linkedList test', () => {
    it('shoud successfully add element on given index', () => {

        //given
        const list = new LinkedList();
        const el = 5;
        const el2 = 4;
        const el3 = 3;
        const newElem = 10;
        list.add(el);
        list.add(el2);
        list.add(el3);

        //when
        const index = 1;
        list.addAt(index, newElem);

        //then
        expect(list.get(1)).to.eql(newElem);
    });
});

describe('linkedList test', () => {
    it('shoud successfully remove element on given index', () => {

        //given
        const list = new LinkedList();
        const el = 5;
        const el2 = 4;
        const el3 = 3;
        list.add(el);
        list.add(el2);
        list.add(el3);

        //when
        const index = 1;
        list.remove(index);

        //then
        const expectedSize = 2;
        expect(list.size).to.eql(expectedSize);
        expect(list.get(1)).to.eql(el3);
    });
});

describe('linkedList test', () => {
    it('shoud successfully remove element with given value - first element', () => {

        //given
        const list = new LinkedList();
        const el = 1;
        const el2 = 2;
        const el3 = 3;
        list.add(el);
        list.add(el2);
        list.add(el3);

        //when
        list.removeObj(el);

        //then
        const expectedSize = 2;
        expect(list.size).to.eql(expectedSize);
        expect(list.get(0)).to.eql(el2);
    });
});

describe('linkedList test', () => {
    it('shoud successfully remove element with given value', () => {

        //given
        const list = new LinkedList();
        const el = 1;
        const el2 = 2;
        const el3 = 3;
        list.add(el);
        list.add(el2);
        list.add(el3);

        //when
        list.removeObj(el2);

        //then
        const expectedSize = 2;
        expect(list.size).to.eql(expectedSize);
        expect(list.get(1)).to.eql(el3);
    });
});

describe('linkedList test', () => {
    it('shoud successfully remove element with given value - last element', () => {

        //given
        const list = new LinkedList();
        const el = 1;
        const el2 = 2;
        const el3 = 3;
        const el4 = 4;
        const el5 = 5;
        list.add(el);
        list.add(el2);
        list.add(el3);
        list.add(el4);
        list.add(el5);

        //when
        list.removeObj(el5);

        //then
        const expectedSize = 4;
        expect(list.size).to.eql(expectedSize);
        expect(list.get(3)).to.eql(el4);
    });
});