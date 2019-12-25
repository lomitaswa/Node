const https = require('https');

const BASE_URL = 'https://api.datamuse.com/words?sp=';
function genAlphabetArray(charA, charZ) {
    var latters = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        latters.push(String.fromCharCode(i));
    }
    return latters;
};
var latterArray = genAlphabetArray('a', 'z'); // ["a", ..., "z"]

console.log(latterArray);
var newArray = [];
const getLatters = async () => {
    try {
        for (var i=0; i<latterArray.length; i++){
            for (var j=i,k=latterArray[i]; j<2; j++){
                    var fetchData =  https.get(`${BASE_URL}/k`);
                    var words = JSON.parse(fetchData);
                    newArray.push(words.word);
            };
        };
        return newArray;
    } catch (error){
        console.error("error")
    }
}
getLatters();
console.log(newArray);
