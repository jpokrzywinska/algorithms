export default class RomanConverter {


    constructor() {
        this.romanValues = [
            {symbol: "M", value: 1000, substractive: false},
            {symbol: "D", value: 500, substractive: false},
            {symbol: "C", value: 100, substractive: true},
            {symbol: "L", value: 50, substractive: false},
            {symbol: "X", value: 10, substractive: true},
            {symbol: "V", value: 5, substractive: false},
            {symbol: "I", value: 1, substractive: true}
        ];
    }

    convert(greekNumber) {

        let rest, result = '';
        rest = greekNumber;
        for (let i = 0; i < this.romanValues.length;) {
            const value = this.romanValues[i].value;
            const symbol = this.romanValues[i].symbol;
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
        this.romanValues[0];
        let result = this.romanValues.filter(romanValue => romanValue.value < value && romanValue.substractive);
        return result[0];
    }
}