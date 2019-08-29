import {RomanGreekValue} from "./RomanGreekValue";

export default class GreekConverter {

    constructor() {
        this.romanGreekValue = new RomanGreekValue();
        this.greekValues = this.romanGreekValue.values;
    }

    convert(romanNumber) {
        romanNumber = romanNumber.split('');
        romanNumber.forEach(value => {
            if (!this.validate(value)) {
                throw new Error("Incorrect number")
            }
        });
        let sum = 0;
        for (let i = 0; i < romanNumber.length - 1; i++) {
            const greekNum1 = this.romanGreekValue.getGreekValue(romanNumber[i]);
            const greekNum2 = this.romanGreekValue.getGreekValue(romanNumber[i + 1]);
            greekNum1 < greekNum2 ? sum -= greekNum1 : sum += greekNum1;
        }
        sum += this.romanGreekValue.getGreekValue(romanNumber[romanNumber.length - 1]);
        return sum;
    }

    validate(romanValue) {
        const value = this.greekValues.filter(val => val.symbol === romanValue)[0];
        return value ? true : false;
    }
}
