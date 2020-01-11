const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// User Model 
const User = require('../../models/User');

// @route POST api/users
// @desc  register new user
// @access public

router.post('/', (req, res) => {
    const {firstname, lastname, email, password} = req.body;

    // simple validation
    if(!firstname || !lastname || !email || !password) {
        return res.status(400).json({ message: 'Please entrer all fields '});
    }

    // check exsiting user
    User.findOne({ email })
     .then(user => {
         if(user) return res.status(400).json({ message: 'Email already exists '});

         const newUser = new User({
            firstname,
            lastname,
            email,
            password
         });

        // salt and hash
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err) throw err;
                newUser.password = hash;
                newUser.save()
                    .then( user => {
                        // create json web token
                        
                        jwt.sign(
                            {id: user.id},
                            config.get('jwtSecret'),
                            { expiresIn: 3600 }, 
                            (err, token) => {
                                if(err) throw err;
                                res.json({
                                    token,
                                    user: {
                                        id: user.id,
                                        firstname: user.firstname,
                                        lastname: user.lastname,
                                        email: user.email
                                    }
                                });
                        
                            }
                        )
                        
                    })
            })            
        })

     })
});

module.exports = router;