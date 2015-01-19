var express = require('express');
var bodyParser = require('body-parser');
var feedParser = require('feedparser');
var http = require('http');
var $ = require('jquery');
var app = express();


app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

var port = 2999;
var server = app.listen(port, function() {
    console.log('open for business');
});

app.get('/', function(req, res) {
   res.render('index');
});

app.get('/get', function(req, response) {
   
    //map stuff


    //news stuff
    var news = [];
    http.get('http://yle.fi/uutiset/rss/uutiset.rss?osasto=kotimaa',
        function(res) {
            res.pipe(new feedParser({}))
              .on('error', function(error) {
                  //error
              })
              .on('meta', function(meta) {
                  //meta
              })
              .on('readable', function() {
                  var stream = this, item;
                  while (item = stream.read()) {
                      var article = {
                          'title' : item.title,
                          'link' : item.link,
               //           'content' : item.content:encoded,
                      };
                      news.push(article);
                  }
                  console.log("yay");
             })
             .on('end', function() {

             });

            response.json(news);
        });

});
