import {divide} from "./merge-sort";
import {assert, expect, should} from "chai";

describe('merge sort test', () => {
    it('should successfully sort array', () => {

        //given
        const array = [4, 8, 2, 7, 9, 10];

        //when
        const result = divide(array);

        //then
        const sortedArray = [2, 4, 7, 8, 9, 10];
        expect(result).to.eql(sortedArray);

    });
});

