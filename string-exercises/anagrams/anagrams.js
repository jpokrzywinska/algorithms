import {sort} from "../../sort-algorithms/quick-sort/quick-sort";

export function checkAnagrams(word1, word2) {
    word1 = deleteWhiteSpaces(word1);
    word2 = deleteWhiteSpaces(word2);
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();

    if (!haveWordsTheSameLength(word1, word2)) {
        return false;
    }
    word1 = word1.split('');
    word1 = sort(word1);
    word2 = word2.split('');
    word2 = sort(word2);

    for (let i = 0; i < word1.length; i++) {
        if (word1[i] != word2[i]) {
            return false;
        }
    }
    return true;
}

function deleteWhiteSpaces(word) {
    return word.replace(/\s/g, '');
}

function haveWordsTheSameLength(word1, word2) {
    return word1.length === word2.length;
}


