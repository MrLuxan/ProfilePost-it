!function i(c,u,a){function f(t,r){if(!u[t]){if(!c[t]){var o="function"==typeof require&&require;if(!r&&o)return o(t,!0);if(s)return s(t,!0);var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}var n=u[t]={exports:{}};c[t][0].call(n.exports,function(r){return f(c[t][1][r]||r)},n,n.exports,i,c,u,a)}return u[t].exports}for(var s="function"==typeof require&&require,r=0;r<a.length;r++)f(a[r]);return f}({1:[function(r,t,o){var e=new MutationObserver(function(r){r.forEach(function(r){console.log(r.type);var t=document.location.toString().match(/https?\:\/\/(?:www\.)?facebook\.com\/(\d+|[A-Za-z0-9\.]+)\/?/)[1];console.log(t)})}),n=document.body;e.observe(n,{attributes:!0,childList:!0,characterData:!0})},{}]},{},[1]);
//# sourceMappingURL=contentscript.js.map
