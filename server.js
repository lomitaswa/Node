const datamuse = require('datamuse')


function genAlphabetArray(charA, charZ) {
    let letters = [];
    let i = charA.charCodeAt(0);
    let j = charZ.charCodeAt(0);
    
    for (; i <= j; ++i) {
        letters.push(String.fromCharCode(i));
    }
    return letters;
};
let letterArray = genAlphabetArray('a', 'z'); // ["a", ..., "z"]

let newArray = [];

const getLetters = async () => {
    let k;
    try {
        for (var i=0; i<26; i++){
            // console.error("first")
                k=letterArray[i];
                // console.error(k)
                datamuse.request(`words?sp=${k}??*&md=f&max=2`)
                .then((json) => {
                    console.log(json)
                }) 
                    // if (err) {
                    //   throw err;
                    // }
                    //console.log(json);
                    //console.error("data Fetch")
                    // var words = JSON.parse(JSON.stringify(json));
                    //console.error("json parse")
                    // newArray = words.word;
                    // console.log(words); 
                                    
        }

getLetters();
console.log(newArray);
