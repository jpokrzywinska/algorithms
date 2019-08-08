// TODO what happens when someone provide incorrect number e.g. ABD
export function toGreekNumber(romanNumber) {
    // if ()) {
    //     throw new Error("Incorrect number");
    // }
    let sum = 0;
    romanNumber = romanNumber.split('');
    //TODO try to use reduce instead of for
    for (let i = 0; i < romanNumber.length - 1; i++) {
        if (getGreekValue(romanNumber[i]) < getGreekValue(romanNumber[i + 1])) {
            sum -= getGreekValue(romanNumber[i]);
        }
        else {
            sum += getGreekValue(romanNumber[i]);
        }
    }
    sum += getGreekValue(romanNumber[romanNumber.length - 1]);
    return sum;
}


export function toRomanNumber(greekNumber) {

    const values = {
        THOUSAND: 1000,
        FIVE_HUNDRED: 500,
        HUNDRED: 100,
        FIFTY: 50,
        TEN: 10,
        FIVE: 5
    };

    let thousand, fiveHundred, fifty, hundred, ten, five, rest;

    // TODO If you make simmilar operations each time this means there could be a loop
    //  try to make a loop instead, maybe going through all the enum values
    thousand = Math.floor(greekNumber / values.THOUSAND);
    rest = greekNumber % values.THOUSAND;
    fiveHundred = 0;
    if (rest >= values.FIVE_HUNDRED) {
        fiveHundred = 1;
        rest = rest - values.FIVE_HUNDRED;
    }
    hundred = Math.floor(rest / values.HUNDRED);
    rest = rest % values.HUNDRED;
    fifty = 0;
    if (rest >= values.FIFTY) {
        fifty = 1;
        rest = rest - values.FIFTY;
    }
    ten = Math.floor(rest / values.TEN);
    rest = rest % values.TEN;
    five = 0;
    if (rest >= values.FIVE) {
        five = 1;
        rest = rest - values.FIVE;
    }

    let romanArray = addRomanSignsToArray(thousand, fiveHundred, hundred, fifty, ten, five, rest);

    romanArray = romanArray.toString();
    for (let i = 0; i < romanArray.length; i++) {
        romanArray = romanArray.replace(',', '');
    }

    return romanArray;
}

function addRomanSignsToArray(m, d, c, l, x, v, rest) {
    let romanArray = [];
    addRomanValue(m, romanArray, 'M');
    addRomanValue(d, romanArray, 'D');
    addRomanValue(c, romanArray, 'C');
    addRomanValue(l, romanArray, 'L');
    addRomanValue(x, romanArray, 'X');
    addRomanValue(v, romanArray, 'V');
    addRomanValue(rest, romanArray, 'I');
    return romanArray;
}

function addRomanValue(value, romanNumber, letter) {
    let specificValue = 4;
    if (letter === 'C' && value === specificValue) {
        romanNumber.push('CD');
    }
    else if (letter === 'X' && value === specificValue) {
        romanNumber.push('XL');
    }
    else if (letter === 'I' && value === specificValue) {
        romanNumber.push('IV');
    }
    else if (value !== 0) {
        for (let i = 0; i < value; i++) {
            romanNumber.push(letter);
        }
    }
}

function getGreekValue(romanValue) {
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

