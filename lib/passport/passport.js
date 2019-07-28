const cookie_parser = require('cookie-parser');
const body_parser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const local_strategy = require('passport-local').Strategy;

// temp user account
const acc1 = {
    id: 1,
    username: 'test',
    password: 'test',
    security: 10
}

// temp admin account

const acc2 = {
    id: 2,
    username: 'admin',
    password: 'admin',
    security: 1
}

const accs = [acc1, acc2]

module.exports = (router) => {
    router.use(cookie_parser());
    router.use(body_parser.urlencoded({ extended: false }));
    router.use(session({ secret: 'cats' }));
    router.use(passport.initialize());
    router.use(passport.session());

    passport.use(new local_strategy(
        function (username, password, done) {
            // change to database fetch
            for (let acc of accs) {
                if (acc.username == username) {
                    if (acc.password == password) {
                        return done(null, acc.id);
                    }
                }
            }
            return done(null, false, { message: 'Incorrect username.' });
        }
    ));

    // get id from user object
    passport.serializeUser(function (id, done) {
        done(null, id);
    });

    // get user object from id
    passport.deserializeUser(function (id, done) {
        done(null, id);
    });

    // temp change to database fetch
    module.get_user_by_id = (id) => {
        for (let acc of accs) {
            console.log(acc)
            if (acc.id == id) {
                return acc;
            }
        }
    }

    // is authenticated middleware
    module.is_authenticated = () => {
        return (req, res, next) => {
            if (req.user) {
                return next();
            } else {
                res.redirect('/login');
            }
        }
    }

    // authenticate middleware
    module.authenticate = (success_route, failure_route) => {
        return passport.authenticate('local', { successRedirect: success_route, failureRedirect: failure_route });
    }

    return module;
}