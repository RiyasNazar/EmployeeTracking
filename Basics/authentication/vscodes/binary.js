// let arr = [1, 3, 5, 6, 7, 8, 9]; 
// let x = 8;  
// let binarySearchFunction = function (arr, x) { 
//    let start=0, end = arr.length-1;         
//     while (start <= end) {  
//         let mid = Math.floor((start + end)/2);  
//         if (arr[mid] === x) return true;  
//         else if (arr[mid] < x)  
//             start = mid + 1; 
//         else
//             end = mid - 1; 
//     } 
//     return false; 
// }  
// if (binarySearchFunction(arr, x, 0, arr.length-1)) 
//     console.log("Element found!", "The search element is:",x); 
// else console.log("Element not found");

/***** Palindrome program */

// function check_Palindrome(str_entry){
//        var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;
//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }
//         if ((cstr.length) % 2 === 0) {
//             ccount = (cstr.length) / 2;
//         } else {
//             if (cstr.length === 1) {
//                 console.log("Entry is a palindrome.");
//                 return true;
//             } else {
//                 ccount = (cstr.length - 1) / 2;
//             }
//         }
//         for (var x = 0; x < ccount; x++) {
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         console.log("The entry is a palindrome.");
//         return true;
// }
// check_Palindrome('abb');
// check_Palindrome('nurses run');
// check_Palindrome('fox');

/***** Factorial */
// function factorial(x) 
// { 

//   if (x === 0)
//  {
//     return 1;
//  }
//   return x * factorial(x-1);

// }
// console.log(factorial(5));

/****** ANAGRAM */

function find_unique_characters(str, char){
    return [...new Set(str.split(char))].join(char);
  }
  
  let result = find_unique_characters("aaaha ok yet?", "a");
  console.log(result.length);