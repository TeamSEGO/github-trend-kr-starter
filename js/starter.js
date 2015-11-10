var ref = new Firebase("https://amber-heat-3970.firebaseio.com/");
// var list = [{"no":"01","title":"FreeCodeCamp/FreeCodeCamp","desc":"The http://FreeCodeCamp.com open-source codebase and curriculum. Learn to code and help nonprofits.","url":"https://github.com/FreeCodeCamp/FreeCodeCamp","etc":"HTML•8,835 stars","owner":{}},{"no":"02","title":"herrbischoff/awesome-osx-command-line","desc":"Use your OS X terminal shell to do awesome things.","url":"https://github.com/herrbischoff/awesome-osx-command-line","etc":"5,713 stars","owner":{}},{"no":"03","title":"basecamp/trix","desc":"A rich text editor for everyday writing","url":"https://github.com/basecamp/trix","etc":"CoffeeScript•5,673 stars","owner":{}},{"no":"04","title":"nylas/N1","desc":"An extensible mail client built on the modern web.","url":"https://github.com/nylas/N1","etc":"CoffeeScript•4,953 stars","owner":{}},{"no":"05","title":"open-source-society/computer-science","desc":"Path to a free self-taught education in Computer Science!","url":"https://github.com/open-source-society/computer-science","etc":"3,919 stars","owner":{}},{"no":"06","title":"JohnCoates/Aerial","desc":"Apple TV Aerial Screensaver for Mac","url":"https://github.com/JohnCoates/Aerial","etc":"Swift•3,856 stars","owner":{}},{"no":"07","title":"gabrielbull/react-desktop","desc":"React UI Components for OS X El Capitan and Windows 10","url":"https://github.com/gabrielbull/react-desktop","etc":"JavaScript•3,635 stars","owner":{}},{"no":"08","title":"connors/photon","desc":"The fastest way to build beautiful Electron apps using simple HTML and CSS","url":"https://github.com/connors/photon","etc":"CSS•3,578 stars","owner":{}},{"no":"09","title":"weui/weui","desc":"An UI library by WeChat official design team, includes the most useful widgets/modules in mobile web applications.","url":"https://github.com/weui/weui","etc":"CSS•3,053 stars","owner":{}},{"no":"10","title":"Jack000/Expose","desc":"A simple static site generator for photoessays","url":"https://github.com/Jack000/Expose","etc":"Perl•3,290 stars","owner":{}},{"no":"11","title":"cmusatyalab/openface","desc":"Face recognition with Google's FaceNet deep neural network.","url":"https://github.com/cmusatyalab/openface","etc":"Lua•2,864 stars","owner":{}},{"no":"12","title":"butterproject/butter-desktop","desc":"All the free parts of what used to be Popcorn Time","url":"https://github.com/butterproject/butter-desktop","etc":"JavaScript•2,748 stars","owner":{}},{"no":"13","title":"nickbutcher/plaid","desc":"","url":"https://github.com/nickbutcher/plaid","etc":"Java•2,797 stars","owner":{}},{"no":"14","title":"una/CSSgram","desc":"CSS library for Instagram filters","url":"https://github.com/una/CSSgram","etc":"HTML•2,871 stars","owner":{}},{"no":"15","title":"sindresorhus/awesome","desc":"A curated list of awesome lists","url":"https://github.com/sindresorhus/awesome","etc":"2,578 stars","owner":{}},{"no":"16","title":"hangtwenty/dive-into-machine-learning","desc":"Dive into Machine Learning with Python Jupyter notebook and scikit-learn","url":"https://github.com/hangtwenty/dive-into-machine-learning","etc":"2,587 stars","owner":{}},{"no":"17","title":"AllThingsSmitty/jquery-tips-everyone-should-know","desc":"A collection of simple tips to help up your jQuery game","url":"https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know","etc":"JavaScript•2,432 stars","owner":{}},{"no":"18","title":"JuanPotato/Legofy","desc":"","url":"https://github.com/JuanPotato/Legofy","etc":"Python•2,351 stars","owner":{}},{"no":"19","title":"letsencrypt/letsencrypt","desc":"An ACME client that can obtain certs and extensibly update server configurations (currently supports Apache on .deb based systems, nginx support coming soon)","url":"https://github.com/letsencrypt/letsencrypt","etc":"Python•2,273 stars","owner":{}},{"no":"20","title":"vuejs/vue","desc":"Simple yet powerful library for building modern web interfaces.","url":"https://github.com/vuejs/vue","etc":"JavaScript•2,043 stars","owner":{}},{"no":"21","title":"twbs/bootstrap","desc":"The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.","url":"https://github.com/twbs/bootstrap","etc":"CSS•1,534 stars","owner":{}},{"no":"22","title":"facebook/react","desc":"A declarative, efficient, and flexible JavaScript library for building user interfaces.","url":"https://github.com/facebook/react","etc":"JavaScript•1,839 stars","owner":{}},{"no":"23","title":"jtleek/datasharing","desc":"The Leek group guide to data sharing","url":"https://github.com/jtleek/datasharing","etc":"90 stars","owner":{}},{"no":"24","title":"atom/electron","desc":"Build cross platform desktop apps with web technologies","url":"https://github.com/atom/electron","etc":"C++•1,913 stars","owner":{}},{"no":"25","title":"javascript-society/javascript-path","desc":"List of books to master JavaScript Development","url":"https://github.com/javascript-society/javascript-path","etc":"1,975 stars","owner":{}}];
var db = "github_trend_kr/022/list";
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
  // githubTrendKrRef.set(list);
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
