import {sort} from "../quick-sort/quick-sort.mjs";

export function checkAnagrams(word1, word2) {
    word1 = deleteWhiteSpaces(word1);
    word2 = deleteWhiteSpaces(word2);
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();
    console.log("word1: " + word1);
    console.log("word2: " + word2);

    if (!haveWordsTheSameLength(word1, word2)) {
        return false;
    }
    word1 = word1.split('');
    word1 = sort(word1);
    word2 = word2.split('');
    word2 = sort(word2);
    console.log("word1: " + word1);

    console.log("word2: " + word2);

    for (let i = 0; i < word1.length; i++) {
        if (word1[i] != word2[i]) {
            return false;
        }
    }
    return true;
}

// TODO string oferuje juz podobna metode => trim() - usuwanie bialyych znakow
function deleteWhiteSpaces(word) {
    return word.replace(/\s/g, '');
}

function haveWordsTheSameLength(word1, word2) {
    return word1.length === word2.length;
}


