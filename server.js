const datamuse = require('datamuse')


function genAlphabetArray(charA, charZ) {
    var latters = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        latters.push(String.fromCharCode(i));
    }
    return latters;
};
var latterArray = genAlphabetArray('a', 'z'); // ["a", ..., "z"]

var newArray = [];
var k='';
const getLatters = async () => {
    try {
        for (var i=0; i<latterArray.length; i++){
            //console.error("first")
            for (var j=i, k=latterArray[i]; j<1; j++){
                //console.error(k)
                datamuse.request(`words?sp=${k}`)
                .then((json) => {
                    console.log(json)
                }) 
                    if (err) {
                      throw err;
                    }
                    //console.log(json);
                    //console.error("data Fetch")
                    var words = JSON.parse(JSON.stringify(json));
                    //console.error("json parse")
                    newArray = words.word;
                    console.log(newArray);
                }
                    
                   
            }
        } catch (error){
            console.error("error")
        }
    return newArray;
}

getLatters();
console.log(newArray);


