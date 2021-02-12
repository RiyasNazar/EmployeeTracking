const words = ['riyas', 'tharzeez'];
const result = words.filter(word => word.length > 6 );
console.log(result);

const num = [1, 2, 3, 4];
const arr = num.map(x => x * 2);
console.log(arr);

const name = ['ab', 'bc', 'cd'];
const copy = [];
name.forEach(function(item)
{
copy.push(item);
console.log(copy);
})
console.log(name.includes('ab'));