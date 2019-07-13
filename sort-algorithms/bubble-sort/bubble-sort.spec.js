import {sort} from "./bubble-sort.mjs";
import {assert, expect, should} from "chai";

describe('bubble sort test', () => {
    it('shoud successfully sort array', () => {

        //given
        const array = [1, 4, 3, 5, 2, 2];

        //when
        const result = sort(array);

        //then
        const sortedArray = [1, 2, 2, 3, 4, 5];
        expect(result).to.eql(sortedArray);

    });
});

