import {divide} from "./merge-sort.mjs";
import {assert, expect, should} from "chai";

describe('bubble sort test', () => {
    it('shoud successfully sort array', () => {

        //given
        const array = [4, 8, 2, 7, 9, 10];

        //when
        const result = divide(array);

        //then
        const sortedArray = [2, 4, 7, 8, 9, 10];
        expect(result).to.eql(sortedArray);

    });
});

