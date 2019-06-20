const express = require('express');
const bodyParser = require('body-parser');
var app = express();

// app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./rest-app/routes')(app)
var port = 3000;
app.get('/', function (req, res) {
    res.render('index');
});

app.listen(port, function(){
console.log('Server is running at port: ',port);
});

module.exports = app
