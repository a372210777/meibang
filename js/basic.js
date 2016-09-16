
var $ = require('jQuery');

exports.getURIParam=function() {
    var search = decodeURI(location.search.substr(1));
    var ls = search ? search.split('&') : [];
    var data = {};
    for (var i = ls.length; i--;) {
      var it = ls[i];
      var index = it.indexOf('=');
      data[it.substring(0, index)] = it.substring(1 + index);
    }
    return data;
  }
exports.request=function(url,data,method,success,error,beforeSend,complete){
    $.ajax({
       type: method || "POST",
       url: url,
       dataType:"json",
       data:data,
       headers:{weiLeversion:"300"},
       success: success,
       error:error,
       beforeSend:beforeSend || function(){    layer.load(2, {shade: [0.1,'#fff'] });},
       complete:complete || function(){    layer.closeAll(); } 
    })
}
 exports.simpleTip=function(text, time) {
    if (!$('#weile-tip').length) $('body').append('<div id="weile-tip" style="position:fixed;width:100%;text-align:center;bottom:120px;"></div>');
    var $t = $('#weile-tip');
    $t.html('<span style="padding:6px 12px;background:#222;color: #ccc;border-radius:2px;">' + text + '<span>');
    setTimeout(function() {
      $t.html('');
    }, +time || 1500);
  }
    
