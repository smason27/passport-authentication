
// import axios from "axios";
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");
const User = require("../models/User")




const strategy = passport.use(new LocalStrategy({
        usernameField: "username",
        passwordFiled: "password"
    },
        function (username, password, done) {
            console.log("hello");
            User.findOne({username: username, password: password}, (err, user) => {
                console.log("0")
                if (err) {
                    console.log("1")
                    return done(err)
                }
                if (!user) {
                    console.log("3")
                    return done(null, false, { message: 'Incorrect username' })
                }
                if (user.password !== password) {
                    console.log(user);
                    return done(null, false, { message: 'Incorrect password' })
                }
                console.log("5")
                return done(null, user)
            });       
        }
    ));

    passport.serializeUser((user, done) => {
        done(null, { _id: user._id });
      });
      
      passport.deserializeUser((id, done) => {
        User.findOne(
            { _id: id },
            'username',
            (err, user) => {
                console.log(user)
                done(null, user)
            }
        )
      });

    module.exports = strategy;