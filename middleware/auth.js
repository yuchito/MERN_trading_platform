const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.header('x-auth-token');

    // Check if unauthorized
    if(!token)  res.status(401).json({ message: 'No token, permission denied'})

    try {

        // Verify token
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        // Take user from token (payload), put it in req.user
        req.user = decoded;
        next();

    } catch(e) {
        res.status(400).json({ message: 'Invalid token '})
    }
    
}

module.exports = auth;