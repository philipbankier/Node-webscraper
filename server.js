var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var prettyjson = require('prettyjson');

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

app.listen('8081')
console.log('Magic happening on port 8081');
exports = module.exports = app;

