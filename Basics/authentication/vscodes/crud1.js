const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

const players = [{ 
  "id":1,
  "name":"raina",
  "runs":3000
}];

app.get('/players', (req,res) => {
     res.send(players);
});

app.post('/players', (req,res) => {
    players.push({
        "id": req.body.id,
        "name": req.body.name,
        "runs": req.body.runs
    });
    res.send(players);
});

app.put('/players', (req,res) => {
    const id = req.body.id,
          name = req.body.name,
          runs = req.body.runs;
    players.forEach((player,i) => {
        if (players[i].id === id){
            players[i].name = name,
            players[i].runs = runs;
        }
    });
     res.send(players);
});

app.delete('/players', (req,res) => {
    const id = req.body.id;
    players.forEach((player, i) => {
        if (players[i].id == id) {
               players.splice(i,1);
        }
    });
     res.send(players);
})

app.listen(6000, () => {
    console.log("server is listening on port 6000");
});
