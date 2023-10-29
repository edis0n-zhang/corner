const User = require('../models/User');

exports.createUser = (req, res, next) => {
    const { username, email, password } = req.body;

    User.create(username, email, password, (err, userId) => {
        if (err) {
            return next(err);
        }
        res.status(201).json({ message: 'User created successfully!', userId });
    });
};
