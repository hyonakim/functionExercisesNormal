// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(val1, val2){
    //...
    if (val1 > val2) {
      return val1 + " is larger than " + val2;
    } else if (val1 < val2) {
      return val2 + " is larger than " + val1;
    }
};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(value1, value2, value3) {
    //...
    if (value1 > value2 && value1 > value3) {
      return value1 + " is the largest";
    } else if (value1 < value2 && value2 > value3) {
      return value2 + " is the largest";
    } else if (value1 < value3 && value2 < value3) {
      return value3 + " is the largest";
    }
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    //...
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "i") {
      return true;
      } else {
      return false;
      }
    }; 

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    //...

}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    //...
     var backwards = string.split('').reverse();
     var joined = backwards.join('');
     return joined;
};

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    //...

   var longest = words.reduce();
   return longest;
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...
}