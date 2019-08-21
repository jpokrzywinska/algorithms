import {expect, should} from "chai";
import GreekNumber from "./GreekConverter";
import RomanNumber from "./RomanConverter";

describe('Roman -> Greek converter', () => {

    it('should convert greek number to roman', () => {
        const sut = new GreekNumber();
        expect(sut.convert("MCLXIV")).to.eql(1164);
        expect(sut.convert("XL")).to.eql(40);
        expect(sut.convert("XIV")).to.eql(14);
        expect(sut.convert("IV")).to.eql(4);
        expect(sut.convert("XL")).to.eql(40);
    });
});
describe('Greek -> Roman converter', () => {

    it('should convert greek number to roman', () => {
        const sut = new RomanNumber();
        expect(sut.convert(423)).to.eql("CDXXIII");
        expect(sut.convert(648)).to.eql("DCXLVIII");
        expect(sut.convert(1164)).to.eql("MCLXIV");
        expect(sut.convert(2600)).to.eql("MMDC");
        expect(sut.convert(4999)).to.eql("MMMMCMXCIX");
    });
});