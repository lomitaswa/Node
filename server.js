const datamuse = require('datamuse')


function genAlphabetArray(charA, charZ) {
    var letters = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        letters.push(String.fromCharCode(i));
    }
    return letters;
};
var letterArray = genAlphabetArray('a', 'z'); // ["a", ..., "z"]

var newArray = [];

const getLetters = async () => {
    var k;
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
                    // console.log("xxx");                  
        }

getLetters();
console.log(newArray);