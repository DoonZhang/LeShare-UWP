!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?b(exports,require("leancloud-storage"),require("leancloud-realtime")):"function"==typeof define&&define.amd?define("typed-messages",["exports","leancloud-storage","leancloud-realtime"],b):b(a.AV=a.AV||{},a.AV,a.AV)}(this,function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a.default:a}function e(a,b){return b={exports:{}},a(b,b.exports),b.exports}var f="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},g=e(function(a){var b=a.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=b)}),h=e(function(a){var b=a.exports={version:"2.4.0"};"number"==typeof __e&&(__e=b)}),i=e(function(a){a.exports=function(a){if("function"!=typeof a)throw TypeError(a+" is not a function!");return a}}),j=e(function(a){var b=i;a.exports=function(a,c,d){if(b(a),void 0===c)return a;switch(d){case 1:return function(b){return a.call(c,b)};case 2:return function(b,d){return a.call(c,b,d)};case 3:return function(b,d,e){return a.call(c,b,d,e)}}return function(){return a.apply(c,arguments)}}}),k=e(function(a){a.exports=function(a){return"object"==typeof a?null!==a:"function"==typeof a}}),l=e(function(a){var b=k;a.exports=function(a){if(!b(a))throw TypeError(a+" is not an object!");return a}}),m=e(function(a){a.exports=function(a){try{return!!a()}catch(a){return!0}}}),n=e(function(a){a.exports=!m(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})}),o=e(function(a){var b=k,c=g.document,d=b(c)&&b(c.createElement);a.exports=function(a){return d?c.createElement(a):{}}}),p=e(function(a){a.exports=!n&&!m(function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a})}),q=e(function(a){var b=k;a.exports=function(a,c){if(!b(a))return a;var d,e;if(c&&"function"==typeof(d=a.toString)&&!b(e=d.call(a)))return e;if("function"==typeof(d=a.valueOf)&&!b(e=d.call(a)))return e;if(!c&&"function"==typeof(d=a.toString)&&!b(e=d.call(a)))return e;throw TypeError("Can't convert object to primitive value")}}),r=e(function(a,b){var c=l,d=p,e=q,f=Object.defineProperty;b.f=n?Object.defineProperty:function(a,b,g){if(c(a),b=e(b,!0),c(g),d)try{return f(a,b,g)}catch(a){}if("get"in g||"set"in g)throw TypeError("Accessors not supported!");return"value"in g&&(a[b]=g.value),a}}),s=e(function(a){a.exports=function(a,b){return{enumerable:!(1&a),configurable:!(2&a),writable:!(4&a),value:b}}}),t=e(function(a){var b=r,c=s;a.exports=n?function(a,d,e){return b.f(a,d,c(1,e))}:function(a,b,c){return a[b]=c,a}}),u=e(function(a){var b=g,c=h,d=j,e=t,f="prototype",i=function(a,g,h){var j,k,l,m=a&i.F,n=a&i.G,o=a&i.S,p=a&i.P,q=a&i.B,r=a&i.W,s=n?c:c[g]||(c[g]={}),t=s[f],u=n?b:o?b[g]:(b[g]||{})[f];n&&(h=g);for(j in h)k=!m&&u&&void 0!==u[j],k&&j in s||(l=k?u[j]:h[j],s[j]=n&&"function"!=typeof u[j]?h[j]:q&&k?d(l,b):r&&u[j]==l?function(a){var b=function(b,c,d){if(this instanceof a){switch(arguments.length){case 0:return new a;case 1:return new a(b);case 2:return new a(b,c)}return new a(b,c,d)}return a.apply(this,arguments)};return b[f]=a[f],b}(l):p&&"function"==typeof l?d(Function.call,l):l,p&&((s.virtual||(s.virtual={}))[j]=l,a&i.R&&t&&!t[j]&&e(t,j,l)))};i.F=1,i.G=2,i.S=4,i.P=8,i.B=16,i.W=32,i.U=64,i.R=128,a.exports=i}),v=e(function(a){var b={}.hasOwnProperty;a.exports=function(a,c){return b.call(a,c)}}),w=e(function(a){var b={}.toString;a.exports=function(a){return b.call(a).slice(8,-1)}}),x=e(function(a){var b=w;a.exports=Object("z").propertyIsEnumerable(0)?Object:function(a){return"String"==b(a)?a.split(""):Object(a)}}),y=e(function(a){a.exports=function(a){if(void 0==a)throw TypeError("Can't call method on  "+a);return a}}),z=e(function(a){var b=x,c=y;a.exports=function(a){return b(c(a))}}),A=e(function(a){var b=Math.ceil,c=Math.floor;a.exports=function(a){return isNaN(a=+a)?0:(a>0?c:b)(a)}}),B=e(function(a){var b=A,c=Math.min;a.exports=function(a){return a>0?c(b(a),9007199254740991):0}}),C=e(function(a){var b=A,c=Math.max,d=Math.min;a.exports=function(a,e){return a=b(a),a<0?c(a+e,0):d(a,e)}}),D=e(function(a){var b=z,c=B,d=C;a.exports=function(a){return function(e,f,g){var h,i=b(e),j=c(i.length),k=d(g,j);if(a&&f!=f){for(;j>k;)if(h=i[k++],h!=h)return!0}else for(;j>k;k++)if((a||k in i)&&i[k]===f)return a||k||0;return!a&&-1}}}),E=e(function(a){var b=g,c="__core-js_shared__",d=b[c]||(b[c]={});a.exports=function(a){return d[a]||(d[a]={})}}),F=e(function(a){var b=0,c=Math.random();a.exports=function(a){return"Symbol(".concat(void 0===a?"":a,")_",(++b+c).toString(36))}}),G=e(function(a){var b=E("keys"),c=F;a.exports=function(a){return b[a]||(b[a]=c(a))}}),H=e(function(a){var b=v,c=z,d=D(!1),e=G("IE_PROTO");a.exports=function(a,f){var g,h=c(a),i=0,j=[];for(g in h)g!=e&&b(h,g)&&j.push(g);for(;f.length>i;)b(h,g=f[i++])&&(~d(j,g)||j.push(g));return j}}),I=e(function(a){a.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")}),J=e(function(a){var b=H,c=I;a.exports=Object.keys||function(a){return b(a,c)}}),K=e(function(a,b){b.f=Object.getOwnPropertySymbols}),L=e(function(a,b){b.f={}.propertyIsEnumerable}),M=e(function(a){var b=y;a.exports=function(a){return Object(b(a))}}),N=e(function(a){var b=J,c=K,d=L,e=M,f=x,g=Object.assign;a.exports=!g||m(function(){var a={},b={},c=Symbol(),d="abcdefghijklmnopqrst";return a[c]=7,d.split("").forEach(function(a){b[a]=a}),7!=g({},a)[c]||Object.keys(g({},b)).join("")!=d})?function(a,g){for(var h=e(a),i=arguments.length,j=1,k=c.f,l=d.f;i>j;)for(var m,n=f(arguments[j++]),o=k?b(n).concat(k(n)):b(n),p=o.length,q=0;p>q;)l.call(n,m=o[q++])&&(h[m]=n[m]);return h}:g}),O=(e(function(a){var b=u;b(b.S+b.F,"Object",{assign:N})}),e(function(a){a.exports=h.Object.assign})),P=e(function(a){a.exports={default:O,__esModule:!0}}),Q=d(P),R=e(function(a,b){!function(c){function d(a){var b=l(a);if(r)for(var c,d=0;c=u[d++];)a.hasOwnProperty(c)&&b.push(c);return b}function e(a,b,c){for(var e,f,g=d(c),i=0,j=g.length;i<j;)"__self"!==(e=g[i++])&&(f=c[e],!p(f)||f.prototype&&f.prototype.__self||h&&!(f.toString().indexOf(".__base")>-1)?b[e]=f:b[e]=function(c,d){var e=a[c]?a[c]:"__constructor"===c?b.__self.__parent:q,f=function(){var a=this.__base;this.__base=f.__base;var b=d.apply(this,arguments);return this.__base=a,b};return f.__base=e,f}(e,f))}function f(a,b){for(var c,d=1;c=a[d++];)b?p(c)?g.self(b,c.prototype,c):g.self(b,c):b=p(c)?g(a[0],c.prototype,c):g(a[0],c);return b||a[0]}function g(){var a=arguments,b=o(a[0]),c=b||p(a[0]),d=c?b?f(a[0]):a[0]:i,g=a[c?1:0]||{},h=a[c?2:1],j=g.__constructor||c&&d.prototype&&d.prototype.__constructor?function(){return this.__constructor.apply(this,arguments)}:c?function(){return d.apply(this,arguments)}:function(){};if(!c)return j.prototype=g,j.prototype.__self=j.prototype.constructor=j,m(j,h);m(j,d),j.__parent=d;var l=d.prototype,n=j.prototype=k(l);return n.__self=n.constructor=j,g&&e(l,n,g),h&&e(d,j,h),j}var h=function(){return"_"}.toString().indexOf("_")>-1,i=function(){},j=Object.prototype.hasOwnProperty,k=Object.create||function(a){var b=function(){};return b.prototype=a,new b},l=Object.keys||function(a){var b=[];for(var c in a)j.call(a,c)&&b.push(c);return b},m=function(a,b){for(var c in b)j.call(b,c)&&(a[c]=b[c]);return a},n=Object.prototype.toString,o=Array.isArray||function(a){return"[object Array]"===n.call(a)},p=function(a){return"[object Function]"===n.call(a)},q=function(){},r=!0,s={toString:""};for(var t in s)s.hasOwnProperty(t)&&(r=!1);var u=r?["toString","valueOf"]:null;g.self=function(){var a=arguments,b=o(a[0]),c=b?f(a[0],a[0][0]):a[0],d=a[1],g=a[2],h=c.prototype;return d&&e(h,h,d),g&&e(c,c,g),c};var v=!0;"object"==typeof b&&(a.exports=g,v=!1),"object"==typeof modules&&"function"==typeof modules.define&&(modules.define("inherit",function(a){a(g)}),v=!1),"function"==typeof define&&(define(function(a,b,c){c.exports=g}),v=!1),v&&(c.inherit=g)}(f)}),S=e(function(a){a.exports=R});if(!b.File)throw new Error("LeanCloud Storage SDK not installed");if(!c.TypedMessage)throw new Error("LeanCloud Realtime SDK not installed");var T=S(c.TypedMessage,{__constructor:function(a){if(!(a instanceof b.File))throw new TypeError("file must be an AV.File");if("string"!=typeof a.id)throw new Error("file must be saved before used to create a Message");this.__base(),this._file=a,this._lcfile={objId:a.id,url:a.url(),metaData:Q(a.metaData()||{},{name:a.name()})}},getFile:function(){return this._file}},{_parseFileFromRawData:function(a){if(!a||!a._lcfile)throw new Error("malformed FileMessage content");var c=a._lcfile.objId;"string"!=typeof c&&(c="");var d=b.File.createWithoutData(c);return d.attributes=d.attributes||{},d._url=d.attributes.url=a._lcfile.url,d._metaData=d.attributes.metaData=a._lcfile.metaData||{},a._lcfile.metaData&&(d._name=d.attributes.name=a._lcfile.metaData.name),d},parse:function(a,b){var c=this._parseFileFromRawData(a);return this.__base(a,b||new this(c))}});c.messageType(-6)(T),c.messageField("_lcfile")(T);var U=S(T);c.messageType(-2)(U);var V=S(T);c.messageType(-3)(V);var W=S(T);c.messageType(-4)(W);var X=S(c.TypedMessage,{__constructor:function(a){if(!(a instanceof b.GeoPoint))throw new TypeError("geoPoint must be an AV.GeoPoint");this.__base(),this._geoPoint=a;var c=a.latitude,d=a.longitude;this._lcloc={latitude:c,longitude:d}},getLocation:function(){return this._geoPoint}},{parse:function(a,c){var d=a._lcloc,e=d.latitude,f=d.longitude,g=new b.GeoPoint({latitude:e,longitude:f});return this.__base(a,c||new this(g))}});c.messageType(-5)(X),c.messageField("_lcloc")(X);var Y="leancloud-realtime-plugin-typed-messages",Z={name:Y,messageClasses:[T,U,V,W,X]};a.TypedMessagesPlugin=Z,a.FileMessage=T,a.ImageMessage=U,a.AudioMessage=V,a.VideoMessage=W,a.LocationMessage=X,Object.defineProperty(a,"__esModule",{value:!0})});
//# sourceMappingURL=typed-messages.min.js.map