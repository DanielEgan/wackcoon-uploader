var express = require('express');
var request = require('request');
var querystring = require('querystring');
var http = require('http');
var needle = require('needle');


var data = {
  file: '/home/johnlennon/walrus.png',
  content_type: 'image/png'
};

var data = {
 url:"http://1.bp.blogspot.com/-YZ-8H9fT53E/T2reVAKkSGI/AAAAAAAABd8/XjX2Eu5KaYI/s1600/Raccoon-4.jpg"
};

var params = {
            "visualFeatures": "Tags"
        };

  var options = {
  headers: {'Ocp-Apim-Subscription-Key': '48cdc4d0cd6d4bed9f1cb05dcfef72ec', 'Content-Type':'application/json' }
}

needle.post('https://api.projectoxford.ai/vision/v1.0/analyze?' + querystring.stringify(params), JSON.stringify({"url":"https://upload.wikimedia.org/wikipedia/commons/4/41/Raccoon_-_Jonathan_Dickinson_State_Park.jpg"}), options, function(err, resp) {
  // you can pass params as a string or as an object.
  console.log(err);
  console.log('https://api.projectoxford.ai/vision/v1.0/analyze?' + querystring.stringify(params));
  console.log(resp.body);
});



