import {checkDuplicateCharacters} from "./duplicates";
import {expect, should} from "chai";

describe('Duplicatess', () => {
    it('word consist 2 letters: r', () => {
        //given
        const word = "Dormitory";

        //when
        const result = checkDuplicateCharacters(word);

        //then
        expect(result).to.be.true;
    });
});