const teammembers = ["ann","amm","bnn","bnm","cnn","cmm","dfd","wec","sdc","rbr"],
      arr = [],
      shuffled = teammembers
       .map((a) => ({sort: Math.random(), value: a}))
       .sort((a, b) => a.sort - b.sort)
       .map((a) => a.value);
console.log(shuffled);
const totalmembers = teammembers.length, 
      teamscount = 4;      
let remainingmembers = totalmembers % teamscount,
     totalteams = (totalmembers - remainingmembers) / teamscount;
for(let i = 0;i <teamscount;i++){
    if(i<remainingmembers){
        arr.push(totalteams+1);
    }
    else{
        arr.push(totalteams);
    }
}
let arr1 = arr
       .map((a) => ({sort: Math.random(), value: a}))
       .sort((a, b) => a.sort - b.sort)
       .map((a) => a.value);

console.log(arr1);
for(let )
