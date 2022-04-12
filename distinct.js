//write a program that parses a sentence and replaces each word with the following: first letter, 
//number of distinct characters between first and last character, and last letter. For example, Smooth would become S3h. 
//Words are separated by spaces or non-alphabetic characters and these separators should be maintained in their original form
//and location in the answer

//Assuming empty sentence will return ""
//Assuming word "Sh" will return "Sh" and not "S0h"

const isLetter = (letter) => {
    return letter.length === 1 && letter.match(/[a-zA-Z]/i);
}

const parse = (sentence) =>{
    if(sentence.length === 0 || sentence === null) return sentence;

    let result = "";
    let currentWord = [];

    for(let i = 0; i < sentence.length; i++){
        let letter = sentence[i];
        
        if(!isLetter(letter)){
            result += distinct(currentWord);
            result += letter;
            currentWord = [];
        }else if(i === sentence.length - 1){
            currentWord.push(letter);
            result += distinct(currentWord);
        }else{
            currentWord.push(letter);
        }
    }

    return result;
}

const distinct = (word) => {
    if(word.length === 0 || word === null) return word;

    let result = "";
    let unique = new Set();

    for(let i = 0; i < word.length; i++){
        if(i !== 0 && i !== word.length - 1){
            unique.add(word[i]);
        }    
    }

    result = word[0] + (unique.size > 0 ? unique.size : '') + (word.length > 1 ? word[word.length - 1] : '');

    return result;
}


//Examples
console.log(parse(""));
console.log(parse("Smooth"));
console.log(parse("The quick brown fox jumps over the lazy dog."));
console.log(parse("Lorem$ipsum#dolor%sit amet"));