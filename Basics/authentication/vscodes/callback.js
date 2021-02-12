// function check (a,callback1,callback2) {
//     if((a % 2) == 0) {
//     callback1(); 
//     } else {
//     callback2()
//     };
// }

// check(5, function callback1() {
//     console.log("even");
// },
// function callback2() {
//     console.log("odd");
// });

// const words = ['baby', 'babies'];
// const result = words.filter(word => word.length > 5 );
// console.log(result);

// const num = [1, 2, 3, 4];
// const arr = num.map(x => x * 2);
// console.log(arr);

// const name = ['ab', 'bc', 'cd'];
// const copy = [];
// name.forEach(function(item)
// {
//     copy.push(item);
//     console.log(copy);
// })
// console.log(name.includes('ab'));

// const  array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(array1.reduce(reducer));


let a = {5: 'hello'};
console.log(a['5']);
