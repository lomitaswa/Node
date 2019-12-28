const axios = require('axios')

function genAlphabetArray(charA, charZ) {
    let letters = [];
    let  i = charA.charCodeAt(0);
    let  j = charZ.charCodeAt(0);
    for (; i<=j ; ++i) {
        letters.push(String.fromCharCode(i));
    }
    return letters;
    
}
let letterArray = genAlphabetArray('a', 'z');
console.log(letterArray)

let newArray = [];

const getLetters = async() => {
    let k ; 
    try {
        for (let i=0 ; i<26; i++) {
            k = letterArray[i]
            axios.get(`https://api.datamuse.com/words?sp=${k}??*&md=f&max=2`)
            .then((json) => {
                console.log(json.data)
            })
        }
    } catch (error) {
        console.error("error")
    }
    //return newArray;
    //console.log(newArray)
}

getLetters();
console.log(newArray)
