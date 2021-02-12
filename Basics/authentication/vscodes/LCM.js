// function findLCM(a, b) {
//     const lar = Math.max(a, b);
//     const small = Math.min(a, b);
//     for (let i = lar; i += lar;) {
//         if (i % small == 0)
//             return i;
//     }
// }
// console.log(findLCM(5, 7));

// let lcm = (n1, n2) => {
//     //Find the smallest and biggest number from both the numbers
//     let lar = Math.max(n1, n2);
//     let small = Math.min(n1, n2);

//     //Loop till you find a number by adding the largest number which is divisble by the smallest number
//     let i = lar;
//     while(i % small !== 0){
//       i += lar;
//     }

//     //return the number
//     return i;
//   }
//   console.log(lcm(20, 15));

// function findlcm(num1, num2) {
//     let temp = (num1 > num2) ? num1 : num2;
//     while (true) {
//         if (temp % num1 == 0 && temp % num2 == 0)
//             return temp;
//         ++temp;
//     }
// }
// console.log(findlcm(72, 120));

function gcdOf2Num(num1, num2) {
    if (!num2){
     return num2 === 0 ? num1 : '';
    }   
    return gcdOf2Num(num2, num1 % num2);
}

function lcmOf2Num(num1, num2) {
    return num1 * num2 / gcdOf2Num(num1, num2);
}

function LCMOfListOfNums(array) {
    let n = 1;
    for (let i = 0; i < array.length; ++i)
        n = lcmOf2Num(array[i], n);
    return n;
}
console.log(LCMOfListOfNums([5,6,3,6,2,7]));