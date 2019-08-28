export class RomanGreekValue {
    constructor(){
        this.values = [
            {symbol: "M", value: 1000, substractive: false},
            {symbol: "D", value: 500, substractive: false},
            {symbol: "C", value: 100, substractive: true},
            {symbol: "L", value: 50, substractive: false},
            {symbol: "X", value: 10, substractive: true},
            {symbol: "V", value: 5, substractive: false},
            {symbol: "I", value: 1, substractive: true}
        ];
    }

    getRomanValue(greekValue) {
        const value = this.values.filter(val => val.value === greekValue)[0];
        return value ? value.symbol : null;
    }

    getGreekValue(romanValue) {
        const value = this.values.filter(val => val.symbol === romanValue)[0];
        return value ? value.value : null;
    }

}