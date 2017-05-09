var express = require('express');
var app = express();
var appRouter = require('./app/router/app.router');
var mongoCon = require('./app/models/mongoconfig');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.set('views', __dirname, 'dist');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/api', appRouter); 
app.use('/', function(req,res){
    res.render('dist/index.html');
});

app.listen(3200, function(){
    console.log('servidor rodando na porta 3200');
});
