/**
 * Created by 杨阵雨大人 on 2016/9/29 0029.
 */
//各浏览器对XMLHttpRequest对象的实现不同，IE是以ActiveX对象的形式实现了一个名叫XMLHTTP的对象。
function getHTTPObject() {
  if(typeof XMLHttpRequest == 'undefined'){
    XMLHttpRequest = function () {
      try{ return new ActiveXObject("Msxml2.XMLHTTP.6.0"); } //MS 只推荐使用6.0和3.0，不推荐最初版的
      catch (e){}
      try{ return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
      catch (e){}
      try{ return new ActiveXObject("Msxml2.XMLHTTP"); }
      catch (e){}
      return false;
    }
  }else{
    return new XMLHttpRequest();
  }
}

function get(option,callback) {
  var op={},cb = function () {};
  if(arguments.length == 1) {
    cb = callback;
  }
  if(arguments.length == 2){
    op = option;
    cb =callback;
  }
    var _option = {
      url: '127.0.0.1',
      async: true,
      data: {}
    }
    Object.assign(_option, op)
    var request = getHTTPObject();
    if (request) {
      var urlStr = _option.url + '?';
      var data = _option.data;
      for(var key in data){
        if(typeof data[key] == 'string'){
          urlStr += key+"="+data[key] + "&";
        }
      }
      urlStr = urlStr.substr(0,urlStr.length-1);
      request.open("GET", _option.url, _option.async);
      request.onreadystatechange = function () {
        if (request.readyState == 4) {
          cb();
        }
      }
      request.send(null);
    } else {
      console.log("your browser does not support XMLHttpRequest");
    }
}