var ref = new Firebase("https://amber-heat-3970.firebaseio.com/");
var list = [{"no":"01","title":"bevacqua/dragula","desc":"Drag and drop so simple it hurts","url":"https://github.com/bevacqua/dragula","etc":"JavaScript•3,418 stars","owner":""},{"no":"02","title":"p8952/bocker","desc":"Docker implemented in 100 lines of bash","url":"https://github.com/p8952/bocker","etc":"Shell•2,186 stars","owner":""},{"no":"03","title":"begriffs/postgrest","desc":"REST API for any Postgres database","url":"https://github.com/begriffs/postgrest","etc":"Haskell•2,134 stars","owner":""},{"no":"04","title":"rdpeng/ProgrammingAssignment2","desc":"Repository for Programming Assignment 2 for R Programming on Coursera","url":"https://github.com/rdpeng/ProgrammingAssignment2","etc":"R•13 stars","owner":""},{"no":"05","title":"FreeCodeCamp/freecodecamp","desc":"The http://FreeCodeCamp.com open-source codebase and curriculum. Practice coding by helping nonprofits.","url":"https://github.com/FreeCodeCamp/freecodecamp","etc":"HTML•1,643 stars","owner":""},{"no":"06","title":"DrBoolean/mostly-adequate-guide","desc":"Mostly adequate guide to FP (in javascript)","url":"https://github.com/DrBoolean/mostly-adequate-guide","etc":"JavaScript•1,614 stars","owner":""},{"no":"07","title":"dbcli/pgcli","desc":"Postgres CLI with autocompletion and syntax highlighting","url":"https://github.com/dbcli/pgcli","etc":"Python•1,408 stars","owner":""},{"no":"08","title":"avinassh/rockstar","desc":"Makes you a Rockstar C++ Programmer in 2 minutes","url":"https://github.com/avinassh/rockstar","etc":"Python•1,141 stars","owner":""},{"no":"09","title":"openstf/stf","desc":"Control and manage Android devices from your browser.","url":"https://github.com/openstf/stf","etc":"JavaScript•1,016 stars","owner":""},{"no":"10","title":"jtleek/datasharing","desc":"The Leek group guide to data sharing","url":"https://github.com/jtleek/datasharing","etc":"58 stars","owner":""},{"no":"11","title":"google/material-design-lite","desc":"Material Design Lite Components in HTML/CSS/JS","url":"https://github.com/google/material-design-lite","etc":"CSS•902 stars","owner":""},{"no":"12","title":"larsenwork/monoid","desc":"Open Source Coding Font","url":"https://github.com/larsenwork/monoid","etc":"Python•925 stars","owner":""},{"no":"13","title":"IFTTT/RazzleDazzle","desc":"A simple keyframe-based animation framework for iOS, written in Swift. Perfect for scrolling app intros.","url":"https://github.com/IFTTT/RazzleDazzle","etc":"Swift•843 stars","owner":""},{"no":"14","title":"facebook/wdt","desc":"Warp speed Data Transfer (WDT) is an embeddedable library (and command line tool) aiming to transfer data between 2 systems as fast as possible over multiple TCP paths.","url":"https://github.com/facebook/wdt","etc":"C++•665 stars","owner":""},{"no":"15","title":"Skykai521/StickerCamera","desc":"An Android application Sticker-Camera ,post stickers and tags on the picture.贴纸标签相机,功能:拍照,相片裁剪,给图片贴贴纸,打标签。","url":"https://github.com/Skykai521/StickerCamera","etc":"Java•550 stars","owner":""},{"no":"16","title":"ZhongTaoTian/WNXHuntForCity","desc":"高仿城觅2.0 by-objective-c","url":"https://github.com/ZhongTaoTian/WNXHuntForCity","etc":"Objective-C•509 stars•","owner":""},{"no":"17","title":"tuesda/CircleRefreshLayout","desc":"a custom pull-to-refresh layout which contains a interesting animation","url":"https://github.com/tuesda/CircleRefreshLayout","etc":"Java•510 stars","owner":""},{"no":"18","title":"zombodb/zombodb","desc":"Making Postgres and Elasticsearch work together like it's 2015","url":"https://github.com/zombodb/zombodb","etc":"Java•524 stars","owner":""},{"no":"19","title":"okulbilisim/awesome-datascience","desc":"An awesome Data Science repository to learn and apply for real world problems.","url":"https://github.com/okulbilisim/awesome-datascience","etc":"492 stars","owner":""},{"no":"20","title":"hugeinc/styleguide","desc":"A tool to make creating and maintaining style guides easy.","url":"https://github.com/hugeinc/styleguide","etc":"JavaScript•503 stars","owner":""},{"no":"21","title":"twbs/bootstrap","desc":"The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.","url":"https://github.com/twbs/bootstrap","etc":"CSS•351 stars","owner":""},{"no":"22","title":"Ereza/CustomActivityOnCrash","desc":"Android library that allows launching a custom activity when your app crashes, instead of showing the hated \"Unfortunately, X has stopped\" dialog.","url":"https://github.com/Ereza/CustomActivityOnCrash","etc":"Java•476 stars","owner":""},{"no":"23","title":"s-a/iron-node","desc":"Debug Node.js code with Chrome Developer Tools.","url":"https://github.com/s-a/iron-node","etc":"JavaScript•456 stars","owner":""},{"no":"24","title":"yaronn/wopr","desc":"A simple markup language for creating rich terminal reports, presentations and infographics","url":"https://github.com/yaronn/wopr","etc":"JavaScript•424 stars","owner":""},{"no":"25","title":"cymen/show-me-the-react","desc":"A Google Chrome extension that highlights React components on the page.","url":"https://github.com/cymen/show-me-the-react","etc":"JavaScript•421 stars","owner":""}];
var db = "github_trend_kr/020/list";
var _sessionKey = 'firebase:session::amber-heat-3970'
var githubTrendKrRef = ref.child(db);

$(document).ready(function(){
  var session = localStorage.getItem(_sessionKey);
  if(session){
    _session = JSON.parse(session);
    $('#oauth').css({"background-image":'url('+ _session.github.profileImageURL +')'});
    $('#oauth-tooltip').text('bye bye~~');
    $('#oauth').click(function(){
      localStorage.clear();
      location.reload();
    });
  }
  else {
    $('#oauth-tooltip').text('login plz~~');
    $('#oauth').click(function(){
      ref.authWithOAuthPopup("github", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          $('#oauth').css({"background-image":'url('+authData.github.profileImageURL+')'});
        }
      });
    });
  }

  githubTrendKrRef.once('value',function(snap){
    snap.forEach(function(trend){
      var card = $('<div>', {class:"mdl-card mdl-cell mdl-cell--4-col mdl-shadow--2dp"}).appendTo('#list');
      var body = $('<div>', {class:"mdl-card__supporting-text"}).appendTo(card);
      var title = $('<h4>').appendTo(body);
      var link = $('<a>', {class:"gtk-project-link", href:trend.url, target:"_blank"}).appendTo(title).text(trend.val().title);
      body.append(trend.val().desc);
      var bottom = $('<div>', {class:"mdl-card__actions gtk-card-bottom"}).appendTo(card);
      $('<div>',{class:"gtk-project-etc"}).appendTo(bottom).text(trend.val().etc);
      var button = $('<button>',{class:"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp gtk-assign-btn"}).appendTo(bottom);

      trend.ref().on("value",function(_trend){
        if(_trend.val().owner){
          button.css({"background-image":'url('+ _trend.val().owner.profile +')', "background-size":"56px"});
        } else {
          $(button).css('background-image', 'none');
        }
        button.unbind('click');
        button.click(assign(_trend));
      });
    })
  });
});

var assign = function(trend){
  return function(event){
    var _this = this;
    var session = localStorage.getItem(_sessionKey);
    if(session){
      _session = JSON.parse(session);
      if(trend.val().owner) {
        if(trend.val().owner.username == _session.github.username) {
          if(confirm(trend.val().title + ' 프로젝트 선택을 취소하시겠습니까?')){
            trend.ref().update({owner:{}});
          }
        }
      } else {
        if(confirm(trend.val().title + ' 프로젝트를 선택하시겠습니까?')){
          trend.ref().update({owner:{ username : _session.github.username, email : _session.github.email , profile: _session.github.profileImageURL }});
        }
      }
    } else {
      if(!trend.val().owner) {
        alert('Github 로그인 후 선택해주세요!!');
      }
    }
    (function(){
      setTimeout(function(){ $(_this).blur(); },500);
    })();
  }
}
