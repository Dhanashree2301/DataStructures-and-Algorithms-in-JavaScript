// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0
// -------------------------------------------------solution 1----------------------->
// function vowels(str) {
//     let count=0;
//     let list=['a','e','i','o','u'];
//     for(let char of str.toLowerCase())
//     {
        
//         if(list.includes('char'))
//         {
//             count++;
//         }
//     }
//     console.log(count);
// }
// vowels('Why do you ask?');


// ---------------------------------------------Solution 2 using regular expression--------------------------------------->
function vowels(str)
{
   const matchess= str.match(/[aeiou]/gi);
   console.log(matchess?matchess.length:0)
}
vowels('Why do you ask?');
module.exports = vowels;
