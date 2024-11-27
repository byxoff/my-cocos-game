System.register("chunks:///_virtual/index.js",["./cjs-loader.mjs"],(function(e,t){var r;return{setters:[function(e){r=e.default}],execute:function(){e("default",void 0);var u=e("__cjsMetaURL",t.meta.url);r.define(u,(function(t,r,u,n,s){var i,c;System.register("chunks:///_virtual/resources",[],(function(){return{execute:function(){}}})),i="virtual:///prerequisite-imports/resources",c="chunks:///_virtual/resources",System.register(i,[c],(function(e,t){return{setters:[function(t){var r={};for(var u in t)"default"!==u&&"__esModule"!==u&&(r[u]=t[u]);e(r)}],execute:function(){}}})),e("default",u.exports)}),{})}}}));

System.register("chunks:///_virtual/index.mjs_cjs=&original=.js",["./index.js","./cjs-loader.mjs"],(function(e,t){var r,n;return{setters:[function(t){r=t.__cjsMetaURL;var n={};n.__cjsMetaURL=t.__cjsMetaURL,n.default=t.default,e(n)},function(e){n=e.default}],execute:function(){r||n.throwInvalidWrapper("./index.js",t.meta.url),n.require(r)}}}));

System.register("chunks:///_virtual/resources",["./index.mjs_cjs=&original=.js"],(function(){return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});