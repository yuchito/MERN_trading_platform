const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// User Model 
const User = require('../../models/User');

// @route POST api/auth
// @desc  Auth user
// @access public

router.get('/', (req, res) => {
    const {email, password} = req.body;

    // simple validation
    if(!email || !password) {
        return res.status(400).json({ message: 'Please entrer all fields '});
    }

    // check exsiting user
    User.findOne({ email })
    .then(user => {
        if(!user) return res.status(400).json({ message: 'User doesnt exist'});
        
        // password comparaison
        bcrypt.compare(password, user.password)
        .then(matched => {
            if(!matched) return es.status(400).json({ message: 'Credentials incorrect'});

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
});

module.exports = router;