import {toGreekNumber, toRomanNumber} from "./romanGreekConverter";
import {expect, should} from "chai";

describe('Roman -> Greek converter', () => {

    it('should convert greek number to roman', () => {
        expect(toGreekNumber("MCLXIV")).to.eql(1164);
        expect(toGreekNumber("XL")).to.eql(40);
        expect(toGreekNumber("XIV")).to.eql(14);
        expect(toGreekNumber("IV")).to.eql(4);
        expect(toGreekNumber("XL")).to.eql(40);
    });
});
describe('Greek -> Roman converter', () => {

    it('should convert greek number to roman', () => {
        expect(toRomanNumber(423)).to.eql("CDXXIII");
        expect(toRomanNumber(648)).to.eql("DCXLVIII");
        expect(toRomanNumber(1164)).to.eql("MCLXIV");
        expect(toRomanNumber(2600)).to.eql("MMDC");
    });
});