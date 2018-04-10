!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,n){if(!O[e]||!w[e])return;for(var r in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(h[r]=n[r]);0==--y&&0===m&&D()}(e,r),n&&n(e,r)};var r,t=!0,o="8a239b0ed3467505a4e9",c=1e4,i={},d=[],a=[];function s(e){var n=x[e];if(!n)return H;var t=function(t){return n.hot.active?(x[t]?x[t].parents.indexOf(e)<0&&x[t].parents.push(e):(d=[e],r=t),n.children.indexOf(t)<0&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),d=[]),H(t)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return H[e]},set:function(n){H[e]=n}}};for(var c in H)Object.prototype.hasOwnProperty.call(H,c)&&"e"!==c&&Object.defineProperty(t,c,o(c));return t.e=function(e){return"ready"===p&&u("prepare"),m++,H.e(e).then(n,function(e){throw n(),e});function n(){m--,"prepare"===p&&(b[e]||_(e),0===m&&0===y&&D())}},t}var l=[],p="idle";function u(e){p=e;for(var n=0;n<l.length;n++)l[n].call(null,e)}var f,h,v,y=0,m=0,b={},w={},O={};function g(e){return+e+""===e?+e:e}function j(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return t=e,u("check"),(n=c,n=n||1e4,new Promise(function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,c=H.p+""+o+".hot-update.json";t.open("GET",c,!0),t.timeout=n,t.send(null)}catch(e){return r(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+c+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+c+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(e){return void r(e)}e(n)}}})).then(function(e){if(!e)return u("idle"),null;w={},b={},O=e.c,v=e.h,u("prepare");var n=new Promise(function(e,n){f={resolve:e,reject:n}});h={};return _(0),"prepare"===p&&0===m&&0===y&&D(),n});var n}function _(e){O[e]?(w[e]=!0,y++,function(e){var n=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.src=H.p+""+e+"."+o+".hot-update.js",n.appendChild(r)}(e)):b[e]=!0}function D(){u("ready");var e=f;if(f=null,e)if(t)Promise.resolve().then(function(){return E(t)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&n.push(g(r));e.resolve(n)}}function E(n){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var r,t,c,a,s;function l(e){for(var n=[e],r={},t=n.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),c=o.id,i=o.chain;if((a=x[c])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:c};if(a.hot._main)return{type:"unaccepted",chain:i,moduleId:c};for(var d=0;d<a.parents.length;d++){var s=a.parents[d],l=x[s];if(l){if(l.hot._declinedDependencies[c])return{type:"declined",chain:i.concat([s]),moduleId:c,parentId:s};n.indexOf(s)>=0||(l.hot._acceptedDependencies[c]?(r[s]||(r[s]=[]),f(r[s],[c])):(delete r[s],n.push(s),t.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function f(e,n){for(var r=0;r<n.length;r++){var t=n[r];e.indexOf(t)<0&&e.push(t)}}n=n||{};var y={},m=[],b={},w=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var j in h)if(Object.prototype.hasOwnProperty.call(h,j)){var _;s=g(j);var D=!1,E=!1,P=!1,I="";switch((_=h[j]?l(s):{type:"disposed",moduleId:j}).chain&&(I="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(D=new Error("Aborted because of self decline: "+_.moduleId+I));break;case"declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+I));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(_),n.ignoreUnaccepted||(D=new Error("Aborted because "+s+" is not accepted"+I));break;case"accepted":n.onAccepted&&n.onAccepted(_),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(_),P=!0;break;default:throw new Error("Unexception type "+_.type)}if(D)return u("abort"),Promise.reject(D);if(E)for(s in b[s]=h[s],f(m,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,s)&&(y[s]||(y[s]=[]),f(y[s],_.outdatedDependencies[s]));P&&(f(m,[_.moduleId]),b[s]=w)}var k,A=[];for(t=0;t<m.length;t++)s=m[t],x[s]&&x[s].hot._selfAccepted&&A.push({module:s,errorHandler:x[s].hot._selfAccepted});u("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete installedChunks[e]}(e)});for(var M,q,U=m.slice();U.length>0;)if(s=U.pop(),a=x[s]){var R={},S=a.hot._disposeHandlers;for(c=0;c<S.length;c++)(r=S[c])(R);for(i[s]=R,a.hot.active=!1,delete x[s],delete y[s],c=0;c<a.children.length;c++){var T=x[a.children[c]];T&&((k=T.parents.indexOf(s))>=0&&T.parents.splice(k,1))}}for(s in y)if(Object.prototype.hasOwnProperty.call(y,s)&&(a=x[s]))for(q=y[s],c=0;c<q.length;c++)M=q[c],(k=a.children.indexOf(M))>=0&&a.children.splice(k,1);for(s in u("apply"),o=v,b)Object.prototype.hasOwnProperty.call(b,s)&&(e[s]=b[s]);var C=null;for(s in y)if(Object.prototype.hasOwnProperty.call(y,s)&&(a=x[s])){q=y[s];var L=[];for(t=0;t<q.length;t++)if(M=q[t],r=a.hot._acceptedDependencies[M]){if(L.indexOf(r)>=0)continue;L.push(r)}for(t=0;t<L.length;t++){r=L[t];try{r(q)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:s,dependencyId:q[t],error:e}),n.ignoreErrored||C||(C=e)}}}for(t=0;t<A.length;t++){var N=A[t];s=N.module,d=[s];try{H(s)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(r){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:r,orginalError:e,originalError:e}),n.ignoreErrored||C||(C=r),C||(C=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:s,error:e}),n.ignoreErrored||C||(C=e)}}return C?(u("fail"),Promise.reject(C)):(u("idle"),new Promise(function(e){e(m)}))}var x={};function H(n){if(x[n])return x[n].exports;var t=x[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:j,apply:E,status:function(e){if(!e)return p;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var n=l.indexOf(e);n>=0&&l.splice(n,1)},data:i[e]};return r=void 0,n}(n),parents:(a=d,d=[],a),children:[]};return e[n].call(t.exports,t,t.exports,s(n)),t.l=!0,t.exports}H.m=e,H.c=x,H.d=function(e,n,r){H.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},H.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return H.d(n,"a",n),n},H.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},H.p="/",H.h=function(){return o},s("./src/index.js")(H.s="./src/index.js")}({"./src/index.js":function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t,o=r("./src/math.js");document.body.appendChild(((t=document.createElement("pre")).innerHTML=["Hello webpack!","5 cubed is equal to "+Object(o.a)(5)].join("\n\n"),t))},"./src/math.js":function(e,n,r){"use strict";n.a=function(e){return e*e*e}}});