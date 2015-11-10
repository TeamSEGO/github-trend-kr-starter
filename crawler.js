"use strict";

var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
// var config = require('./config.json');
var github_url = 'https://github.com';
var trand_list = [];
var filename = 'data.json';

var init = function(cb){
  cb();
}

var github_trand_kr = function(){
  request({url : 'https://github.com/trending?since=monthly' ,  timeout: 100000}, function(error, response, body){
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(body);
      var list = $('.repo-list-item');
      for(var i=0; i<list.length; i++){
        var data = {
            "no"       : ("00" + (i+1)).slice(-2)
          , "title"    : $(list[i]).children('.repo-list-name').text().replace(/\n/gi,"").replace(/(\s*)/g,"")
          , "desc"     : $(list[i]).children('.repo-list-description').text().replace(/\n/gi,"").replace(/(\s{2,})/g,"")
          , "url"      : github_url + $(list[i]).children('.repo-list-name').children('a').attr('href')
          , "etc"      : $(list[i]).children('.repo-list-meta').text().replace(/\n/gi,"").replace(/(\s{2,})/g,"").replace("•Built by","").replace(" this month","")
          , "owner"    : {}
        }
        trand_list.push(data);
        var pname = data.title.split('/')[1];
        var content =  '# ' + pname  + '\n\n- 페이지 링크: '+ data.url;
        var fname = '022-'+ data.no + '-' + pname +'.md';

        write_md(fname,content);
      }
      console.log(trand_list);
      write_json(trand_list);
    } else {
      console.log("error project : " + url);
      console.log("error : " +error);
      if(!error){
        console.log("status code : " +response.statusCode);
      }
      cb();
    }
  });
}


var write_json = function(_json, cb){
  fs.writeFile(filename, JSON.stringify(_json), function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
  });
}

var write_md =function(fname, content, cb){
  fs.writeFile(fname, content, function (err) {
    if (err) throw err;
    console.log(fname + 'It\'s saved!');
  });
}

init(github_trand_kr);
