var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('config.json');

router.get('/', function (req, res) {
    res.render('registermem');
});

router.post('/', function (req, res) {
    // register using api to maintain clean separation between layers
    request.post({
        url: config.apiUrl + '/members/registermem',
        form: req.body,
        json: true
    }, function (error, response, body) {
        if (error) {
            return res.render('registermem', { error: 'An error occurred' });
        }

        if (response.statusCode !== 200) {
            return res.render('registermem', {
                error: response.body,
                username: req.body.username,
                age: req.body.age,
                emailid: req.body.emailid,
                thelicense:req.body.thelicense,
                thexp: req.body.thexp
            });
        }

        // return to login page with success message
        req.session.success = 'Registration successful';
        return res.redirect('/loginmem');
    });
});

module.exports = router;