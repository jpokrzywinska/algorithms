// TODO there are better names for this arg instead of number
// TODO what happens when someone provide incorrect number e.g. ABD
export function toGreekNumber(number) {
    let sum = 0;
    number = number.split('');
    //TODO try to use reduce instead of for
    for (let i = 0; i < number.length - 1; i++) {
        if (getGreekValue(number[i]) < getGreekValue(number[i + 1])) {
            sum -= getGreekValue(number[i]);
        }
        else {
            sum += getGreekValue(number[i]);
        }
    }
    sum += getGreekValue(number[number.length - 1]);
    return sum;
}


export function toRomanNumber(number) {

    // TODO  are "m" and "rest" really roman signs?
    //TODO if I am not wrong these are numbers of occurances - try to use better names
    //roman signs
    let m, rest, d, l, c, x, v;

    // TODO If you make simmilar operations each time this means there could be a loop
    //  try to make a loop instead, maybe going through all the enum values
    m = Math.floor(number / getGreekValue('M'));
    rest = number % getGreekValue('M');
    d = 0;
    if (rest >= getGreekValue('D')) {
        d = 1;
        rest = rest - getGreekValue('D');
    }
    c = Math.floor(rest / getGreekValue('C'));
    rest = rest % getGreekValue('C');
    l = 0;
    if (rest >= getGreekValue('L')) {
        l = 1;
        rest = rest - getGreekValue('L');
    }
    x = Math.floor(rest / getGreekValue('X'));
    rest = rest % getGreekValue('X');
    v = 0;
    if (rest >= getGreekValue('V')) {
        v = 1;
        rest = rest - getGreekValue('V');
    }

    let romanArray = addRomanSignsToArray(m, d, c, l, x, v, rest);

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
    // TODO If you make simmilar operations each time this means there could be a loop
    //  every time you check whetere the occurance equals 4 then u assign letter + higher letter
    //  its not hard to make it in a loop
    if (c !== 0) {
        // TODO what does 4 mean? extract to constant variable
        if (c === 4) {
            romanArray.push('CD');
        }
        else {
            addRomanValue(c, romanArray, 'C');
        }
    }
    addRomanValue(l, romanArray, 'L');
    if (x !== 0) {
        if (x === 4) {
            romanArray.push('XL');
        }
        else {
            addRomanValue(x, romanArray, 'X');
        }
    }
    addRomanValue(v, romanArray, 'V');
    if (rest !== 0) {
        if (rest === 4) {
            romanArray.push('IV');
        }
        else
            addRomanValue(rest, romanArray, 'I');
    }
    return romanArray;
}

function addRomanValue(value, romanNumber, letter) {
    if (value !== 0) {
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

