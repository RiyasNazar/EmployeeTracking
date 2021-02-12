//profileController.js
// Import profile model
const Profile = require('../model/profileModel');
const _ = require('lodash');
// Handle index actions
exports.index =  (req, res) => {
    Profile.get( (err, profile) => {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Profile retrieved successfully",
            data: profile
        });
    });
};
// Handle create profile actions
exports.new =  (req, res)  => {
    const profile = new Profile();
    profile.username = req.body.username;
    profile.gender = req.body.gender;
    profile.email = req.body.email;
    profile.phone = req.body.phone;
// save the profile and check for errors
    profile.save( (err) => {
        if (err)
        res.json(err);
        res.json({                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        message: 'New profile created!',
        data: profile
        });
    });
};

// Handle view profile info
exports.view =  (req, res) => {
    Profile.findById(req.params.profile_id,  (err, profile) => {
        if (err)
            res.send(err);
        res.json({
            message: 'profile details loading..',
            data: profile
        });
    });
};

// Handle update profile info
/*exports.update = /*async*/ (req, res) => {
    /*const user = await Profile.find({"email": req.body.email})
    if(!_.isEmpty(user)){
        res.send("email id already exists")
    }*/
Profile.findById(req.params.profileid, verifyToken,  (err, profile) => {
        if (err)
            res.send(err);
        profile.username = req.body.username;
        profile.gender = req.body.gender;
        profile.email = req.body.email;
        profile.phone = req.body.phone;
        profile.save( (err) => {
              if (err)
               res.json(err);
              res.json({
                message: 'profile Info updated',
                data: profile
              });
        });
});
};


exports.delete =  (req, res) => {
    profile.remove({
        _id: req.params.profile_id
    },  (err, profile) => {
        if (err)
            res.send(err);
      res.json({
        status: "success",
        message: 'profile deleted'
      });
    });
};

function verifyToken  (req,res,next) {
    jwt.verify(req.token,'secretkey',(err,authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const bearerHeader =  req.headers['authorization'];
        if(typeof bearerHeader != 'undefined') {
          const bearer =  bearerHeader.split(''),
                bearerToken = bearer[1];
          req.token = bearerToken;
          next();
        }
      };    
    });    
};