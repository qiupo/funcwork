!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r=r||self).funcwork=e()}(this,function(){"use strict";var r=function(){return function(r,e){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return function(r,e){var t=[],n=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(n=(a=u.next()).done)&&(t.push(a.value),!e||t.length!==e);n=!0);}catch(r){o=!0,i=r}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return t}(r,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var e="\n    self.onmessage = function (e) {\n      var data = JSON.parse(e.data)\n      var method = data.method\n      var params = data.params || []\n      try {\n        var result = self[method].apply(null, params) || null\n        if (result instanceof Promise) {\n          Promise.resolve(result).then(res => {\n            self.postMessage(JSON.stringify(res))\n          }).catch(e => {\n            throw new Error(e)\n          })\n        } else {\n          self.postMessage(JSON.stringify(result))\n        }\n      } catch (e) {\n        throw new Error(e)\n      }\n    } \n  ",t=function(r){if("function"==typeof r&&null!==r){if(r.prototype&&r.prototype.constructor===r)return!1;if(0!==Function.prototype.toString.call(r).indexOf("function"))return!0;try{return new r,!1}catch(r){return!0}}return!1},n=function(r){return r.name},o=Function.prototype.toString;return function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!Worker)throw Error("the current runtime does not support web worker");if(!Promise)throw Error("the current runtime does not support Promise");var a=void 0,u=void 0,f=new Map;return{add:function(){for(var s=arguments.length,c=Array(s),l=0;s>l;l++)c[l]=arguments[l];c.forEach(function(r){if("function"!=typeof r)throw Error(r+" should be a function");var e=n(r);f.set(e,r)});var d="",p=!0,h=!1,v=void 0;try{for(var y,m=f.entries()[Symbol.iterator]();!(p=(y=m.next()).done);p=!0){var w=r(y.value,2),g=w[0],b=w[1];d+=t(b)?";var "+g+" = "+o.call(b):";"+o.call(b)}}catch(r){h=!0,v=r}finally{try{!p&&m.return&&m.return()}finally{if(h)throw v}}u=URL.createObjectURL(new Blob([d+";\n"+e])),a=new Worker(u,i)},invoke:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!f.has(r))throw Error(r+" is not defined");return new Promise(function(t,n){a.onmessage=function(r){var e=JSON.parse(r.data);t(e)},a.onerror=function(r){n(r.message)},a.postMessage(JSON.stringify({method:r,params:e}))})},terminate:function(){a&&(a.terminate(),a=null),URL.revokeObjectURL(u),f.clear()}}}});
