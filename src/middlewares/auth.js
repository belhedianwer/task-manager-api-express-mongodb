const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const payload = {
        username: user.username,
        isAdmin: user.isAdmin // Add the isAdmin status in the payload if necessary
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
    return token;
};

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

module.exports = { generateToken, authenticateToken };
