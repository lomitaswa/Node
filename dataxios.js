//Connecting to the Axios server.
const axios = require('axios') 

// Function to generate alpahbets from A-Z and storing it in an array called letter, then returns the array.
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

// New array is created to store the 
let newArray = [];

// Promise  based asynchrnous function to fetch data from Datamuse with Datamuse API.
const getLetters = async() => {
    let temp ; 
    try {
        for (let i=0 ; i<26; i++) {
            temp = letterArray[i] // This variable stores the letter which is sent with the API to fetch desired result.
            
            // HTTP GET request is performed with Axios to fetch the data and display the data in console.
            axios.get(`https://api.datamuse.com/words?sp=${temp}??*&md=f&max=2`)
            .then((json) => {
                console.log(json.data)

            })
        }
    } catch (error) {
        console.error("error")
    }
}

getLetters();
console.log(newArray)
