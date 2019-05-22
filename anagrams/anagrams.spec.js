import {checkAnagrams} from "./anagrams";
import {expect, should} from "chai";

// TODO sprawic by test przeszedl i napisac jakies jeszcze testy ktore pokryja podstawowe corner-case'y
describe('Anagrams', () => {
    it('two words are anagrams when they consist of same letters ommiting spaces', () => {
        //given
        const word1 = "Dormitory";
        const word2 = "Dirty room";

        //when
        const result = checkAnagrams(word1, word2);

        //then
        expect(result).to.be.true;
    });
});

describe('Anagrams', () => {
    it('are not words when they doesnt have the same length of chars', () => {
        //give
        const word1 = "Dormitory";
        const word2 = "Dirty rooeem";

        //when
        const result = checkAnagrams(word1, word2);

        //then
        expect(result).to.be.false;
    });
});