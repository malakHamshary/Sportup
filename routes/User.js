const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const UserModel = require('../models/User.js')

router.post(
    '/register', //http://www.myapp.com/user/register/
    (req, res) => {

        const formdata = {
            'firstname': req.body.firstname,
            'lastname': req.body.lastname,
            'email': req.body.email,
            'password': req.body.password,
            'firsoccupationtname': req.body.occupation
        }


        

        const theUser = new UserModel(formdata);

        // Step 1. Generate a salt
    bcrypt.genSalt(
        (err, salt) => {
            // Step 2. Generate Hash
         bcrypt.hash(
            formdata.password,
            salt,
            //how we handle the new hashed password
            (err, hashedPassword)=>{
                theUser.password=hashedPassword;

                theUser.save();
                res.send("User Saved");
                 }

             )
         }
    )

        
    }
)


router.post(
    '/login',
    (req, res)=> {
        const formdata = {
         'email' : req.body.email,
         'password' : req.body.password

        }

        UserModel.find({ email: formdata.email})
        .then((isMatch)=> {

            if(isMatch.length>0){
                res.send('found')

            }
            else{
                res.send('No address')
            }
        })


    }


)

module.exports = router;