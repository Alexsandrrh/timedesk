const fs = require('fs');
const express = require('express');
const app = express();

app.use('/assets', express.static(__dirname + '/public/assets'));

// static pages
app.get('/',function (req, res) {
    res.render(__dirname + '/public/user/desk.ejs');
    console.log(req.url);
});

app.get('/desk', function (req, res) {
   res.render(__dirname + '/public/user/desk.ejs');
});

app.get('/library', function (req, res) {
    res.render(__dirname + '/public/user/library.ejs');
});

app.get('/settings', function (req, res) {
    res.render(__dirname + '/public/user/settings.ejs');
});

app.get('/profile', function (req, res) {
    res.render(__dirname + '/public/user/profile.ejs');
});



// api
app.get('/api/notify/:type', function (req, res) {
    let typeNotify = req.params.type;
    fs.readFile(__dirname + '/api/notify.json', 'utf-8', function (err, data) {
        let odj = JSON.parse(data);
        if (typeNotify === 'new') {
            res.json(odj.messages.new);
        } else if (typeNotify === 'looked') {
            res.json(odj.messages.looked);
        } else {
            res.json({"error" : "401", "status_message" : "Your link is not valible"});
        }
    });
    console.log(req.url);
});

app.get('/api/schedule' ,function () {

});

app.listen(3000, console.log('Server is working\n' + 'Tracking port: 3000'));