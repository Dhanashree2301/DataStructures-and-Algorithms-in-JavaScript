// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// -------------------------------Solution 1 using array---------------------->
// function reverse(str) {
//      const arra=str.split('');
//     arra.reverse();
//     // console.log(arra.join(''));
//     return(arra.join(''));
//  }
//reverse('abc');


// -----------------------------------solution 2 using string---------------------------->

// function reverse(str) {
//     let reversed='';
//     for (let char of str)
//     {
//         reversed=char+reversed;
//     }
//    console.log(reversed);
// }


// -------------------------------------------solution 3 using helper----------------------------------------->
function reverse(str) {
    console.log(str.split('').reduce((rev,char)=> char+rev,''));
   
   
}
reverse('abc');
module.exports = reverse;

