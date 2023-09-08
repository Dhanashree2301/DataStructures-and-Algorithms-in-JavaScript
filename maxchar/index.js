// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars={};
    let max=0;
    let maxcharacter='';
    for(char of str)
    {
        chars[char]=chars[char]+1 || 1;
    }
    console.log(chars);
    for(let char in chars)
    {
        if(max<chars[char])
        {
            max=chars[char];
            maxcharacter=char;
        }
    }
    console.log(maxcharacter);
}
maxChar('dhanashddd');
module.exports = maxChar;
