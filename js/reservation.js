var url=window.location.href;
var indice =parseInt(url.substring( url.length - 1,url.length));

Tab = [lyon, pyongyang, chernobyl,paris];

function f() {
    alert(String(Tab[indice].prix+0.99));
  }
;