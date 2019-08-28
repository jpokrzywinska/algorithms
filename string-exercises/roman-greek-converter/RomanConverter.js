import {RomanGreekValue} from "./RomanGreekValue";

export default class RomanConverter {
    constructor() {
        this.romanGreekValue = new RomanGreekValue();
        this.greekValues = this.romanGreekValue.values;
    }

    convert(greekNumber) {

        let rest, result = '';
        rest = greekNumber;
        for (let i = 0; i < this.greekValues.length;) {
            const value = this.greekValues[i].value;
            const symbol = this.greekValues[i].symbol;
            const successor = this.findSuccessor(value);
            if (rest >= value) {
                result = result.concat(symbol);
                rest = rest - value;
            }
            else if (successor && rest >= value - successor.value) {
                result = result.concat(successor.symbol, symbol);
                rest = rest - value + successor.value;
            }
            else
                i++;
        }
        return result;
    }

    findSuccessor(value) {
        this.greekValues[0];
        let result = this.greekValues.filter(romanValue => romanValue.value < value && romanValue.substractive);
        return result[0];
    }
}