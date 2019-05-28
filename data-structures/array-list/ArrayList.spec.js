import {assert, expect, should} from "chai";
import {ArrayList} from "./ArrayList";

describe('test', () => {
    it('shoud successfully add element to array', () => {

        //given
        const arrayList = new ArrayList();
        const el = 5;

        //when
        arrayList.add(el);

        //then
        const size = 1;
        expect(arrayList.size).to.eql(size);

    });
});

describe('test', () => {
    it('shoud successfully add element to array on given index', () => {

        //given
        const arrayList = new ArrayList();
        const el1 = 5;
        const el2 = 4;
        const index = 0;
        arrayList.add(el1);

        //when
        arrayList.addAt(index, el2);

        //then
        const size = 1;
        expect(arrayList.size).to.eql(size);
        expect(arrayList.get(index)).to.equal(el2);
    });
});

describe('test', () => {
    it('shoud successfully remove element from array', () => {

        //given
        const arrayList = new ArrayList();
        const el1 = 6;
        const el2 = 5;
        arrayList.add(el1);
        arrayList.add(el2);

        //when
        arrayList.remove(0);

        //then
        const size = 1;
        expect(arrayList.size).to.eql(size);

    });
});


describe('test', () => {
    it('shoud successfully remove object from array', () => {

        //given
        const arrayList = new ArrayList();
        const el1 = 6;
        const el2 = 5;
        arrayList.add(el1);
        arrayList.add(el2);

        //when
        arrayList.removeObj(el1);

        //then
        const size = 1;
        expect(arrayList.size).to.eql(size);

    });
});

describe('test', () => {
    it('shoud successfully get element with given index', () => {

        //given
        const arrayList = new ArrayList();
        const el1 = 6;
        const el2 = 5;
        arrayList.add(el1);
        arrayList.add(el2);

        //when
        const result = arrayList.get(0);

        //then
        const size = 1;
        expect(result).to.eql(el1);

    });
});
