!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r=r||self).funcwork=e()}(this,function(){"use strict";var r=function(){return function(r,e){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return function(r,e){var n=[],t=!0,o=!1,i=void 0;try{for(var a,s=r[Symbol.iterator]();!(t=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);t=!0);}catch(r){o=!0,i=r}finally{try{!t&&s.return&&s.return()}finally{if(o)throw i}}return n}(r,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!Worker)throw Error("the current runtime does not support web worker");if(!Promise)throw Error("the current runtime does not support Promise");var n=void 0,t=void 0,o=new Map,i=function(r){return r.name},a=Function.prototype.toString,s="\n    self.onmessage = function (e) {\n      const { method, params = [] } = JSON.parse(e.data)\n      try {\n        const result = methods[method].apply(null, params)\n        if (result instanceof Promise) {\n          Promise.resolve(result).then(res => {\n            self.postMessage(JSON.stringify(res))\n          }).catch(e => {\n            throw new Error(e)\n          })\n        } else {\n          self.postMessage(JSON.stringify(result))\n        }\n      } catch (e) {\n        throw new Error(e)\n      }\n    } \n  ";return{add:function(){for(var u=arguments.length,f=Array(u),c=0;u>c;c++)f[c]=arguments[c];f.forEach(function(r){if("function"!=typeof r)throw Error(r+" should be a function");var e=i(r);o.set(e,r)});var l="",d=!0,h=!1,m=void 0;try{for(var p,v=o.entries()[Symbol.iterator]();!(d=(p=v.next()).done);d=!0){var y=r(p.value,2);l+=y[0]+": "+a.call(y[1])+","}}catch(r){h=!0,m=r}finally{try{!d&&v.return&&v.return()}finally{if(h)throw m}}t=URL.createObjectURL(new Blob(["const methods = {"+l+"}\n"+s])),n=new Worker(t,e)},invoke:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!o.has(r))throw Error(r+" is not defined");return new Promise(function(t,o){n.onmessage=function(r){var e=JSON.parse(r.data);t(e)},n.onerror=function(r){o(r.message)},n.postMessage(JSON.stringify({method:r,params:e}))})},terminate:function(){n&&(n.terminate(),n=null),URL.revokeObjectURL(t),o.clear()}}}});
