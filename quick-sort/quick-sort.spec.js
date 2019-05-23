import {sort} from "./quick-sort.mjs";
import {assert, expect, should} from "chai";

describe('quick sort test', () => {
    it('shoud successfully sort array', () => {

        //given
        const array = [1, 4, 3, 5, 2];

        //when
        const result = sort(array);

        //then
        const sortedArray = [1, 2, 3, 4, 5];
        expect(result).to.eql(sortedArray);

    });
});

describe('quick sort test', () => {
    it('shoud successfully sort array of chars', () => {

        //given
        const string = ['a', 'g', 't', 'z', 'b', 'e'];

        //when
        const result = sort(string);

        //then
        const sortedString = ['a', 'b', 'e', 'g', 't', 'z'];
        expect(result).to.eql(sortedString);

    });
});

describe('quick sort test', () => {
    it('shoud successfully sort word', () => {

        //given
        let word1 = "dormitory";
        word1 = word1.split('');

        //when
        const result = sort(word1);

        //then
        const sortedWord = ['d', 'i', 'm', 'o', 'o', 'r', 'r', 't', 'y'];
        expect(result).to.eql(sortedWord);

    });
});
