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
//console.log(letterArray)

let newArray = [];

const getLetters = async() => {
    let k; 
    try {
        //for (let i=0 ; i<1; i++) {
            axios.get(`https://api.datamuse.com/words?sp=a???*&max=2`)
            .then((json) => {
                console.log(json)
            })
        //}
    } catch (error) {
        console.error("error")
    }
    //return newArray;
    console.log(newArray)
}

getLetters();
//console.log(newArray)
