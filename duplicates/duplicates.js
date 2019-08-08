import {sort} from "../sort-algorithms/quick-sort/quick-sort";

export function checkDuplicateCharacters(word) {
    word = word.split('');
    word = sort(word);

    for(let i = 0; i<word.length;i++){
        if(word[i]===word[i++]){
            return true;
        }
    }

}