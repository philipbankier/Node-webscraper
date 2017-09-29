var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var prettyjson = require('prettyjson');
var port = process.env.PORT || 5000;

app.get('/scrape', function(req, res){

  url = 'http://api.dronestre.am/data';

  request(url, function(error, response, body){
    if(!error){
      var $ = cheerio.load(body);
    }
    
    var options = {
      noColor: false
    };

    var formatBody = prettyjson.render(body, options);
    fs.writeFile('output.json', body , function(err){
      console.log('File successfully written! - Check your project directory for the output.json file');
    })

    res.send('Check the terminal')
  })
})

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
exports = module.exports = app;

