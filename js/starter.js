var ref = new Firebase("https://amber-heat-3970.firebaseio.com/");
var list = [{"no":"01","title":"google/material-design-lite","desc":"Material Design Lite Components in HTML/CSS/JS","url":"https://github.com/google/material-design-lite","etc":"CSS•9,246 stars","owner":"데파"},{"no":"02","title":"FreeCodeCamp/freecodecamp","desc":"FreeCodeCamp.com's open-source MEAN web application","url":"https://github.com/FreeCodeCamp/freecodecamp","etc":"HTML•4,608 stars","owner":"데파"},{"no":"03","title":"google/deepdream","desc":"","url":"https://github.com/google/deepdream","etc":"2,877 stars","owner":"킨"},{"no":"04","title":"jlevy/the-art-of-command-line","desc":"Master the command line, in one page","url":"https://github.com/jlevy/the-art-of-command-line","etc":"1,741 stars","owner":"크리스"},{"no":"05","title":"jtleek/datasharing","desc":"The Leek group guide to data sharing","url":"https://github.com/jtleek/datasharing","etc":"73 stars","owner":"중복"},{"no":"06","title":"chjj/ttystudio","desc":"A terminal-to-gif recorder minus the headaches.","url":"https://github.com/chjj/ttystudio","etc":"JavaScript•1,772 stars","owner":"알렉스"},{"no":"07","title":"donnemartin/interactive-coding-challenges","desc":"Interactive, test-driven coding challenges (algorithms and data structures). https://bit.ly/git-code","url":"https://github.com/donnemartin/interactive-coding-challenges","etc":"Python•1,351 stars","owner":""},{"no":"08","title":"ipselon/react-ui-builder","desc":"React UI Builder","url":"https://github.com/ipselon/react-ui-builder","etc":"JavaScript•1,271 stars","owner":"킨"},{"no":"09","title":"graphific/DeepDreamVideo","desc":"implementing deep dream on video","url":"https://github.com/graphific/DeepDreamVideo","etc":"Python•1,085 stars","owner":""},{"no":"10","title":"airbnb/javascript","desc":"JavaScript Style Guide","url":"https://github.com/airbnb/javascript","etc":"JavaScript•1,042 stars","owner":"킨"},{"no":"11","title":"AndrewBelt/hack.chat","desc":"","url":"https://github.com/AndrewBelt/hack.chat","etc":"JavaScript•993 stars","owner":"필스너"},{"no":"12","title":"google/incremental-dom","desc":"","url":"https://github.com/google/incremental-dom","etc":"JavaScript•994 stars","owner":"킨"},{"no":"13","title":"rasguanabana/ytfs","desc":"YouTube File System","url":"https://github.com/rasguanabana/ytfs","etc":"Python•773 stars","owner":""},{"no":"14","title":"gilbarbara/logos","desc":"A collection of web development logos in SVG","url":"https://github.com/gilbarbara/logos","etc":"CSS•750 stars","owner":"제시카"},{"no":"15","title":"hrescak/Sketch-Flex-Layout","desc":"Plugin for Sketch allowing for CSS Flexbox layouts using stylesheets and prototypes","url":"https://github.com/hrescak/Sketch-Flex-Layout","etc":"JavaScript•723 stars","owner":"필스너"},{"no":"16","title":"gaearon/redux","desc":"Atomic Flux with hot reloading","url":"https://github.com/gaearon/redux","etc":"JavaScript•705 stars","owner":"켈리"},{"no":"17","title":"tencent-php/tsf","desc":"coroutine and Swoole based php server framework in tencent","url":"https://github.com/tencent-php/tsf","etc":"PHP•588 stars","owner":""},{"no":"18","title":"futurice/android-best-practices","desc":"Do's and Don'ts for Android development, by Futurice developers","url":"https://github.com/futurice/android-best-practices","etc":"Java•542 stars","owner":"알렉스"},{"no":"19","title":"chenglou/react-motion","desc":"A spring that solves your animation problems.","url":"https://github.com/chenglou/react-motion","etc":"JavaScript•593 stars","owner":"킨"},{"no":"20","title":"twbs/bootstrap","desc":"The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.","url":"https://github.com/twbs/bootstrap","etc":"CSS•452 stars","owner":""},{"no":"21","title":"oa414/objc-zen-book-cn","desc":"ObjC Zen Book 中文翻译","url":"https://github.com/oa414/objc-zen-book-cn","etc":"Ruby•551 stars","owner":""},{"no":"22","title":"hyperoslo/Presentation","desc":"Presentation helps you to make tutorials, release notes and animated pages.","url":"https://github.com/hyperoslo/Presentation","etc":"Swift•528 stars","owner":""},{"no":"23","title":"kilianc/rtail","desc":"rtail(1) - Terminal output to the browser in seconds, using UNIX pipes.","url":"https://github.com/kilianc/rtail","etc":"CSS•519 stars","owner":""},{"no":"24","title":"BVLC/caffe","desc":"Caffe: a fast open framework for deep learning.","url":"https://github.com/BVLC/caffe","etc":"C++•427 stars","owner":"니모"},{"no":"25","title":"google/or-tools","desc":"Google's Operations Research tools","url":"https://github.com/google/or-tools","etc":"C++•482 stars","owner":"킨"}]
var db = "github_trend_kr/019/list";
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
          button.css({"background-image":"none"});
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
