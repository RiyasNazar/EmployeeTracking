const express = require('express');
app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))
const players = ["Ajumal","Riyas"]
app.get('/players',(req,res)=>{
    return res.send(players);
});
app.post('/players', (req,res)=>{
    players.push(req.body.name);
    return res.send(players);
});
app.put('/players',(req,res)=>{
    let temp = req.body.oldname;
    let temp1 = req.body.newname;
    for(let i in players){
        if(players[i]==temp){
            players[i]=temp1;
        }
    }
    return res.send(players);
});
app.delete('/players',(req,res) => {
    let temp = req.body.name;
    for(let i in players){
        if(players[i]==temp){
            players.splice(i,1);
        }
    }
    return res.send(players);
})
app.listen(5000,() =>{
    console.log("server is listening on port 5000");
});
