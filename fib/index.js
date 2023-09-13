// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
// ---------------------------------------Iterative approach----------------------------------------------
// function fib(n) {
//     const result=[0,1];
//     for(i=2;i<=n;i++)
//     {
//         const a=result[i-1];
//         const b=result[i-2];
//         result.push(a+b);
//     }
//     // console.log(result);
//     console.log(result[n]);
// }
// fib(10);

// ----------------------------------------------Recursive approach-------------------------------------------
function fib(n) {
    if(n<2){
        return n;
    }
    else
    {
        return fib(n-1)+fib(n-2);
}
}
const nTerms = 10;

if(nTerms <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < nTerms; i++) {
        console.log(fib(i));
    }
}
module.exports = fib;