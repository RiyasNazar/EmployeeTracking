let people = n;
let numberOfTeams = m;
let peopleAlone = n;

let initialPeopleForTeam = n/m;
let teams= new Array[numberOfTeams];
for (let i = 0; i < m; i++) {
    teams[i] = initialPeopleForTeam;
    peopleAlone = peopleAlone - initialPeopleForTeam;
}
let index = 0;
while (peopleAlone > 0) {
teams[index] = teams[index] + 1;
index++;
peopleAlone--;
}

