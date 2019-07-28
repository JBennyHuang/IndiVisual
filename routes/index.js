const express = require('express');
const router = express.Router();

const cookie_parser = require('cookie-parser');
const body_parser = require('body-parser');
const session = require('express-session');

// authentication
const pass = require('../lib/passport/passport.js')(router)


router.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'resources/html' });
});

router.get('/login', (req, res) => {
    res.sendFile('login.html', { root: 'resources/html' });
});

router.post('/login', pass.authenticate('/', '/login'), (req, res) => {
    res.redirect('/public');
});

router.get('/public', pass.is_authenticated(), (req, res) => {
    if (pass.get_user_by_id(req.user).security <= 10) {
        res.send('Only users and admins can view this');
    } else {
        res.send('You do not have access!');
    }
});

router.get('/private', pass.is_authenticated(), (req, res) => {
    if (pass.get_user_by_id(req.user).security <= 1) {
        res.send('Only admins can view this');
    } else {
        res.send('You do not have access!');
    }
});

module.exports = router;