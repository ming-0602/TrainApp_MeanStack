const mongoose = require('mongoose');
const Account = mongoose.model('Accounts');
const passport = require("passport");
const {models} = require("mongoose");

const register = async function (req, res) {
    try {
        const { username, password } = req.body;
        const existaccount = await Account.findOne({username});
        if (existaccount) {
            return res.status(400).json({ Message: "Account already exists"});
        }

        Account.register(new Account({ username: req.body.username }), req.body.password, function (err, account) {
            if (err) {
                return res.render('registerpage', { account: account });
            }

            passport.authenticate('local')(req, res, function () {
                res.redirect('/');
            });
        });

    } catch (error) {
        console.log(error);
        return res
            .status(400)
            .json({message: "Error registering user", error: error.message});
    }
}

const login = async function (req, res) {
    try {
        const { username, password } = req.body;

        // Authenticate user
        passport.authenticate('local', function (err, user, info) {
            if (err) {
                return res.status(400).json({ message: "Error authenticating user", error: err.message });
            }

            if (!user) {
                // Authentication failed
                return res.status(401).json({ message: "Invalid username or password" });
            }

            // Login successful
            req.login(user, function (err) {
                if (err) {
                    return res.status(500).json({ message: "Error logging in user", error: err.message });
                }

                return res.redirect('/');
            });
        })(req, res);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Error logging in user", error: error.message });
    }
};








module.exports = {
    register,
    login
}