import {RomanGreekValue} from "./RomanGreekValue";

export default class GreekConverter {

    constructor() {
        this.romanGreekValue = new RomanGreekValue();
        this.greekValues = this.romanGreekValue.values;
    }

// TODO what happens when someone provide incorrect number e.g. ABD


    convert(romanNumber) {
        // if ()) {
        //     throw new Error("Incorrect number");
        // }
        //
        let sum = 0;
        romanNumber = romanNumber.split('');
        for (let i = 0; i < romanNumber.length - 1; i++) {
            const greekNum1 = this.romanGreekValue.getGreekValue(romanNumber[i]);
            const greekNum2 = this.romanGreekValue.getGreekValue(romanNumber[i + 1]);
            greekNum1 < greekNum2 ? sum -= greekNum1 : sum += greekNum1;
        }
        sum += this.romanGreekValue.getGreekValue(romanNumber[romanNumber.length - 1]);
        return sum;
    }
}
