parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({4:[function(require,module,exports) {

},{}],2:[function(require,module,exports) {
"use strict";require("../sass/main.sass");var t=document.querySelector("#result thead"),e=document.querySelector("#result tbody"),n=function(t,e){return console.log(e),new Promise(function(n,r){var o=new XMLHttpRequest;o.open("post",t,!0),o.setRequestHeader("Content-type","application/json"),o.onload=function(){return n(o.responseText)},o.onerror=function(){return r(o.statusText)},o.send(JSON.stringify(e))})};n("/top100/api/getstat",{env:"env1"}).then(function(n){console.log(n),t.innerHTML="<tr><th>"+JSON.parse(n).metaData.map(function(t){return t.name}).join("</th><th>")+"</th></tr>",e.innerHTML="<tr><td>"+JSON.parse(n).rows.map(function(t){return t.join("</td><td>")}).join("</td></tr><tr><td>")+"</td></tr>"}).catch(function(t){return console.log(t)});
},{"../sass/main.sass":4}]},{},[2])
//# sourceMappingURL=/main.c3fa6823.map