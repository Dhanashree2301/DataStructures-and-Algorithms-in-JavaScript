// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// -------------------------------------------------------solution 1-------------------------------------------------------
// function anagrams(stringA, stringB) {
//     const arr=buildcharmap(stringA);
//     const arr2=buildcharmap(stringB);
//     if((Object.keys(arr).length!==Object.keys(arr2).length))
//     {
//          console.log(false);
//     }
//    for (char in arr)
//    {
//     if(arr[char]!==arr2[char])
//     {
//          console.log(false);
//     }
//    }
//    console.log(true);
// }
// function buildcharmap(str)
// {
//     const arr=[];
//     for(char of str.replace('/[^\w]/g','').toLowerCase())
//     {
//         arr[char]=arr[char]+1 || 1
//     }
//     return arr;
// }
// anagrams('ddabc','abcdd');


//----------------------------------------------------------alternate solution---------------------------------
// remove spaces and punctuations convert string to array sort n then join back to string
function anagrams(stringA, stringB) {
    const arr=stringA.replace('/[^\w]/g','').toLowerCase().split('').sort().join('');
    const arr2=stringB.replace('/[^\w]/g','').toLowerCase().split('').sort().join('');
    console.log(arr===arr2);
}
anagrams('ddabc','abcddd');
//  module.exports = anagrams;
