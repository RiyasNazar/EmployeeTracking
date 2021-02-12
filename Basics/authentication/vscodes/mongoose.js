const Express = require('express'),
      Mongoose = require('mongoose'),
      BodyParser = require('body-parser'),
      app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
Mongoose.Promise = global.Promise;

Mongoose.connect("mongodb://localhost/crud", { useNewUrlParser: true });
const playersModel = Mongoose.model("players", {
      id: Number,
      name: String,
      runs: Number
});

app.get("/players", async (request, response) => {
    if (!(isNaN(request.body.id))) {
        const result = await playersModel.find().exec();
        response.send(result);
    } else {
        console.log("enter a valid id");
    }
});

app.post("/players", async (request, response) => {
    try {
        if (!(isNumeric(request.body.id))) {
            const players = new playersModel(request.body),
                result = await players.save();
            response.send(result);
        } else {
            console.log("enter a valid id");
        }
    } catch (error) {
        return response.send(error)
    }
});

app.post('/signup', (req, res, next) => {
    const user = {
        Name: req.body.name,
        Password: req.body.password
    }
 const UserReg = mongoose.model('userReg', RegSchema);
   userReg.create(user, function(err, newUser) {
      if(err) return next(err);
      req.session.user = email;
      return res.send('Logged In!');
   });
});

app.post('/login', (req, res, next) => {
    const email = req.body.email,
          pass = req.body.pass;
     
    playersModel.findOne({Email: email, Pass: pass}, (err, user) => {
           if(err) return next(err);
           if(!user) return res.send('Not logged in!');
     
           req.session.user = email;
           return res.send('Logged In!');
        });
     });
    
    function isLoggedIn (req, res, next) {
        if (!(req.session && req.session.players)) {
          return res.send('Not logged in!');
        }
        next();
      }


app.put("/players/:id", async (request, response) => {
    if (!(isNaN(request.body.id))) {
        const myobj = { idnumber: id },
            myobj1 = { $set: { name: name, runs: runs } },
            players = await playersModel.UpdateOne(myobj, myobj1).exec();
        players.set(request.body);
        const result = await players.save();
        response.send(result);
    } else {
        console.log("enter a valid id");
    }
});

app.delete("/players/:id", async (request, response) => {
    if (!(isNaN(request.body.id))) {
        const myobj = { id: id },
            result = await playersModel.deleteOne(myobj).exec();
        response.send(result);
    } else {
        console.log("enter a valid id");
    }
});

app.listen(6000, () => {
    console.log("server is listening on port 6000");
});
