var ref = new Firebase("https://amber-heat-3970.firebaseio.com/");
var list = [{"no":"01","title":"Microsoft/WinObjC","desc":"Objective-C for Windows","url":"https://github.com/Microsoft/WinObjC","etc":"C•3,404 stars","owner":{}},{"no":"02","title":"jaws-stack/JAWS","desc":"JAWS: The Javascript + AWS Stack – A server-free, webapp boilerplate using bleeding-edge AWS services that redefine how to build massively scalable web applications","url":"https://github.com/jaws-stack/JAWS","etc":"JavaScript•3,200 stars","owner":{}},{"no":"03","title":"FreeCodeCamp/freecodecamp","desc":"The http://FreeCodeCamp.com open-source codebase and curriculum. Practice coding by helping nonprofits.","url":"https://github.com/FreeCodeCamp/freecodecamp","etc":"HTML•1,602 stars","owner":{}},{"no":"04","title":"Kickball/awesome-selfhosted","desc":"Selfhosting is the process of locally hosting and managing applications instead of renting from SaaS providers. This is a list of Free Software network services and web applications which can be hosted locally.","url":"https://github.com/Kickball/awesome-selfhosted","etc":"1,453 stars","owner":{}},{"no":"05","title":"rushter/data-science-blogs","desc":"A curated list of data science blogs","url":"https://github.com/rushter/data-science-blogs","etc":"Python•1,431 stars","owner":{}},{"no":"06","title":"JuanitoFatas/fast-ruby","desc":"Writing Fast Ruby—— Collect Common Ruby idioms.","url":"https://github.com/JuanitoFatas/fast-ruby","etc":"Ruby•1,375 stars","owner":{}},{"no":"07","title":"daveliepmann/tufte-css","desc":"Style your webpage like Edward Tufte's handouts.","url":"https://github.com/daveliepmann/tufte-css","etc":"HTML•1,192 stars","owner":{}},{"no":"08","title":"pusher/atom-pair","desc":"An Atom package that allows for epic pair programming","url":"https://github.com/pusher/atom-pair","etc":"JavaScript•1,044 stars","owner":{}},{"no":"09","title":"dularion/streama","desc":"It's like Netflix, but self-hosted! http://dularion.github.io/streama/","url":"https://github.com/dularion/streama","etc":"JavaScript•916 stars","owner":{}},{"no":"10","title":"rdpeng/ExData_Plotting1","desc":"Plotting Assignment 1 for Exploratory Data Analysis","url":"https://github.com/rdpeng/ExData_Plotting1","etc":"6 stars","owner":{}},{"no":"11","title":"sindresorhus/awesome","desc":"A curated list of awesome lists","url":"https://github.com/sindresorhus/awesome","etc":"792 stars","owner":{}},{"no":"12","title":"FiloSottile/whosthere","desc":"A ssh server that knows who you are. $ ssh whoami.filippo.io","url":"https://github.com/FiloSottile/whosthere","etc":"Go•796 stars","owner":{}},{"no":"13","title":"jagenjo/webglstudio.js","desc":"A full 3D graphics editor in the browser, with scene editor, coding pad, graph editor, virtual file system, and many features more.","url":"https://github.com/jagenjo/webglstudio.js","etc":"JavaScript•758 stars•","owner":{}},{"no":"14","title":"cpvrlab/ImagePlay","desc":"ImagePlay is a rapid prototyping application for image processing","url":"https://github.com/cpvrlab/ImagePlay","etc":"C++•754 stars","owner":{}},{"no":"15","title":"numbbbbb/the-swift-programming-language-in-chinese","desc":"中文版 Apple 官方 Swift 教程《The Swift Programming Language》","url":"https://github.com/numbbbbb/the-swift-programming-language-in-chinese","etc":"CSS•682 stars","owner":{}},{"no":"16","title":"madisonmay/Tomorrow","desc":"Magic decorator syntax for asynchronous code in Python","url":"https://github.com/madisonmay/Tomorrow","etc":"Python•691 stars","owner":{}},{"no":"17","title":"jtleek/datasharing","desc":"The Leek group guide to data sharing","url":"https://github.com/jtleek/datasharing","etc":"27 stars","owner":{}},{"no":"18","title":"pinterest/PINRemoteImage","desc":"A thread safe, performant, feature rich image fetcher","url":"https://github.com/pinterest/PINRemoteImage","etc":"Objective-C•626 stars","owner":{}},{"no":"19","title":"recruit-lifestyle/WaveSwipeRefreshLayout","desc":"","url":"https://github.com/recruit-lifestyle/WaveSwipeRefreshLayout","etc":"Java•593 stars","owner":{}},{"no":"20","title":"henriquea/minigrid","desc":"Minimal 2kb zero dependency cascading grid layout","url":"https://github.com/henriquea/minigrid","etc":"JavaScript•562 stars","owner":{}},{"no":"21","title":"danluu/post-mortems","desc":"A collection of postmortems. Pull requests welcome!","url":"https://github.com/danluu/post-mortems","etc":"565 stars","owner":{}},{"no":"22","title":"dbcli/mycli","desc":"A Terminal Client for MySQL with AutoCompletion and Syntax Highlighting.","url":"https://github.com/dbcli/mycli","etc":"Python•557 stars","owner":{}},{"no":"23","title":"gaearon/redux","desc":"Predictable state container for JavaScript apps","url":"https://github.com/gaearon/redux","etc":"JavaScript•521 stars","owner":{}},{"no":"24","title":"google/material-design-lite","desc":"Material Design Lite Components in HTML/CSS/JS","url":"https://github.com/google/material-design-lite","etc":"CSS•487 stars","owner":{}},{"no":"25","title":"mltframework/shotcut","desc":"cross-platform (Qt), open-source (GPLv3) video editor","url":"https://github.com/mltframework/shotcut","etc":"C++•487 stars","owner":{}}];
var db = "github_trend_kr/021/list";
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
      var link = $('<a>', {class:"gtk-project-link", target:"_blank"}).attr({'href':trend.val().url}).appendTo(title).text(trend.val().title);
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
