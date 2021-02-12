const teammembers = ["ann","amm","bnn","bnm","cnn","cmm","dfd","wec","sdc","rbr"],
      arr = [],
      shuffled = teammembers
       .map((a) => ({sort: Math.random(), value: a}))
       .sort((a, b) => a.sort - b.sort)
       .map((a) => a.value);
const totalmembers = shuffled.length, 
      teamscount = 4;      
let remainingmembers = totalmembers % teamscount,
    totalteams = (totalmembers - remainingmembers) / teamscount,
    iteration3 = 0;
for(let iteration1 = 0; iteration1 < teamscount; iteration1++) {
  for(let iteration2 = 0; iteration2 < totalteams; iteration2++) {
    arr[iteration2] = shuffled[iteration3];
    iteration3++; 
  }
  if(remainingmembers != 0) {
    arr[totalteams] = shuffled[iteration3]
    iteration3++;
    remainingmembers--;
  } else {
    arr.splice(totalteams,1);
  }
  console.log(arr);
}

