export default class GreekConverter {

     constructor(){

    }

// TODO what happens when someone provide incorrect number e.g. ABD


     convert(romanNumber) {
        // if ()) {
        //     throw new Error("Incorrect number");
        // }
        let sum = 0;
        romanNumber = romanNumber.split('');
        //TODO try to use reduce instead of for
        for (let i = 0; i < romanNumber.length - 1; i++) {
            if (this.getGreekValue(romanNumber[i]) < this.getGreekValue(romanNumber[i + 1])) {
                sum -= this.getGreekValue(romanNumber[i]);
            }
            else {
                sum += this.getGreekValue(romanNumber[i]);
            }
        }
        sum += this.getGreekValue(romanNumber[romanNumber.length - 1]);
        return sum;
    }

    getGreekValue(romanValue) {
        switch (romanValue) {
            case 'M':
                return 1000;
            case 'D':
                return 500;
            case 'C':
                return 100;
            case 'L':
                return 50;
            case 'X':
                return 10;
            case 'V':
                return 5;
            case 'I':
                return 1;
        }
    }
}




