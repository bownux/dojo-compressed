//>>built
(function(k,s){var p,V,A=function(){},na=function(a){for(var b in a)return 0;return 1},W={}.toString,t=function(a){return"[object Function]"==W.call(a)},B=function(a){return"[object String]"==W.call(a)},X=function(a){return"[object Array]"==W.call(a)},o=function(a,b){if(a)for(var c=0;c<a.length;)b(a[c++])},i=function(a,b){for(var c in b)a[c]=b[c];return a},q=function(a,b){return i(Error(a),{src:"dojoLoader",info:b})},Na=1,oa=function(){return"_"+Na++},e=function(a,b,c){return pa(a,b,c,0,e)},C=this,
m=C.document,Oa=m&&m.createElement("DiV"),j=e.has=function(a){return t(u[a])?u[a]=u[a](C,m,Oa):u[a]},u=j.cache=s.hasCache;j.add=function(a,b,c,d){(void 0===u[a]||d)&&(u[a]=b);return c&&j(a)};for(var qa in k.has)j.add(qa,k.has[qa],0,1);e.async=1;var Pa=new Function("return eval(arguments[0]);");e.eval=function(a,b){return Pa(a+"\r\n////@ sourceURL="+b)};var Y={},r=e.signal=function(a,b){var c=Y[a];o(c&&c.slice(0),function(a){a.apply(null,X(b)?b:[b])})},Qa=e.on=function(a,b){var c=Y[a]||(Y[a]=[]);c.push(b);
return{remove:function(){for(var a=0;a<c.length;a++)if(c[a]===b){c.splice(a,1);break}}}},ra=[],Ra={},sa=[],x={},ta=e.map={},G=[],h={},Z="",y={},H={},I={},K=function(a){var b,c,d,f;for(b in H)c=H[b],(d=b.match(/^url\:(.+)/))?y["url:"+ua(d[1],a)]=c:"*now"==b?f=c:"*noref"!=b&&(d=J(b,a),y[d.mid]=y["url:"+d.url]=c);f&&f($(a));H={}},va=function(a){return a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,function(a){return"\\"+a})},aa=function(a,b){b.splice(0,b.length);for(var c in a)b.push([c,a[c],RegExp("^"+va(c)+
"(/|$)"),c.length]);b.sort(function(a,b){return b[3]-a[3]});return b},wa=function(a){var b=a.name;b||(b=a,a={name:b});a=i({main:"main"},a);a.location=a.location?a.location:b;if(a.packageMap)ta[b]=a.packageMap;if(!a.main.indexOf("./"))a.main=a.main.substring(2);x[b]=a},xa=[],D=function(a,b,c){for(var d in a){if("waitSeconds"==d)e.waitms=1E3*(a[d]||0);"cacheBust"==d&&(Z=a[d]?B(a[d])?a[d]:(new Date).getTime()+"":"");if("baseUrl"==d||"combo"==d)e[d]=a[d];a[d]!==u&&(e.rawConfig[d]=a[d],"has"!=d&&j.add("config-"+
d,a[d],0,b))}if(!e.baseUrl)e.baseUrl="./";/\/$/.test(e.baseUrl)||(e.baseUrl+="/");for(d in a.has)j.add(d,a.has[d],0,b);o(a.packages,wa);for(V in a.packagePaths)o(a.packagePaths[V],function(a){var b=V+"/"+a;B(a)&&(a={name:a});a.location=b;wa(a)});aa(i(ta,a.map),G);o(G,function(a){a[1]=aa(a[1],[]);if("*"==a[0])G.star=a});aa(i(Ra,a.paths),sa);o(a.aliases,function(a){B(a[0])&&(a[0]=RegExp("^"+va(a[0])+"$"));ra.push(a)});if(b)xa.push({config:a.config});else for(d in a.config)b=v(d,c),b.config=i(b.config||
{},a.config[d]);if(a.cache)K(),H=a.cache,a.cache["*noref"]&&K();r("config",[a,e.rawConfig])};j("dojo-cdn");var ya=m.getElementsByTagName("script");p=0;for(var L,w,M,E;p<ya.length;)if(L=ya[p++],(M=L.getAttribute("src"))&&(E=M.match(/(((.*)\/)|^)dojo\.js(\W|$)/i))){w=E[3]||"";s.baseUrl=s.baseUrl||w;(M=L.getAttribute("data-dojo-config")||L.getAttribute("djConfig"))&&(I=e.eval("({ "+M+" })","data-dojo-config"));break}e.rawConfig={};D(s,1);if(j("dojo-cdn"))(x.dojo.location=w)&&(w+="/"),x.dijit.location=
w+"../dijit/",x.dojox.location=w+"../dojox/";D(k,1);D(I,1);var N=function(a){ba(function(){o(a.deps,za)})},pa=function(a,b,c,d,f){var g;if(B(a)){if((g=v(a,d,!0))&&g.executed)return g.result;throw q("undefinedModule",a);}X(a)||(D(a,0,d),a=b,b=c);if(X(a))if(a.length){for(var c="require*"+oa(),Aa,j=[],k=0;k<a.length;)Aa=a[k++],j.push(v(Aa,d));g=i(O("",c,0,""),{injected:2,deps:j,def:b||A,require:d?d.require:e,gc:1});h[g.mid]=g;N(g);var l=F&&0!="sync";ba(function(){ca(g,l)});g.executed||n.push(g);P()}else b&&
b();return f},$=function(a){if(!a)return e;var b=a.require;if(!b)b=function(c,d,f){return pa(c,d,f,a,b)},a.require=i(b,e),b.module=a,b.toUrl=function(b){return ua(b,a)},b.toAbsMid=function(b){return da(b,a)};return b},n=[],Q=[],l={},Sa=function(a){a.injected=1;l[a.mid]=1;a.url&&(l[a.url]=a.pack||1);Ba()},S=function(a){a.injected=2;delete l[a.mid];a.url&&delete l[a.url];na(l)&&R()},Ta=e.idle=function(){return!Q.length&&na(l)&&!n.length&&!F},ea=function(a,b){if(b)for(var c=0;c<b.length;c++)if(b[c][2].test(a))return b[c];
return 0},Ca=function(a){for(var b=[],c,d,a=a.replace(/\\/g,"/").split("/");a.length;)c=a.shift(),".."==c&&b.length&&".."!=d?(b.pop(),d=b[b.length-1]):"."!=c&&b.push(d=c);return b.join("/")},O=function(a,b,c,d){return{pid:a,mid:b,pack:c,url:d,executed:0,def:0}},Da=function(a,b,c,d,f,g,e,k){var i,l,h,m;m=/^\./.test(a);if(/(^\/)|(\:)|(\.js$)/.test(a)||m&&!b)return O(0,a,0,a);a=Ca(m?b.mid+"/../"+a:a);if(/^\./.test(a))throw q("irrationalPath",a);b&&(h=ea(b.mid,g));(h=(h=h||g.star)&&ea(a,h[1]))&&(a=h[1]+
a.substring(h[3]));b=(E=a.match(/^([^\/]+)(\/(.+))?$/))?E[1]:"";(i=c[b])?a=b+"/"+(l=E[3]||i.main):b="";var n=0;o(ra,function(b){var c=a.match(b[0]);c&&0<c.length&&(n=t(b[1])?a.replace(b[0],b[1]):b[1])});if(n)return Da(n,0,c,d,f,g,e,k);if(c=d[a])return k?O(c.pid,c.mid,c.pack,c.url):d[a];d=(h=ea(a,e))?h[1]+a.substring(h[3]):b?i.location+"/"+l:j("config-tlmSiblingOfDojo")?"../"+a:a;/(^\/)|(\:)/.test(d)||(d=f+d);return O(b,a,i,Ca(d+".js"))},J=function(a,b){return Da(a,b,x,h,e.baseUrl,G,sa)},Ea=function(a,
b,c){return a.normalize?a.normalize(b,function(a){return da(a,c)}):da(b,c)},Fa=0,v=function(a,b,c){var d,f;(d=a.match(/^(.+?)\!(.*)$/))?(f=v(d[1],b,c),5===f.executed&&!f.load&&fa(f),f.load?(d=Ea(f,d[2],b),a=f.mid+"!"+(f.dynamic?++Fa+"!":"")+d):(d=d[2],a=f.mid+"!"+ ++Fa+"!waitingForPlugin"),a={plugin:f,mid:a,req:$(b),prid:d}):a=J(a,b);return h[a.mid]||!c&&(h[a.mid]=a)},da=e.toAbsMid=function(a,b){return J(a,b).mid},ua=e.toUrl=function(a,b){var c=J(a+"/x",b),d=c.url;return Ga(0===c.pid?a:d.substring(0,
d.length-5))},Ha={injected:2,executed:5,def:3,result:3},ga=function(a){return h[a]=i({mid:a},Ha)},Ua=ga("require"),Va=ga("exports"),Wa=ga("module"),T={},ha=0,fa=function(a){var b=a.result;a.dynamic=b.dynamic;a.normalize=b.normalize;a.load=b.load;return a},Xa=function(a){var b={};o(a.loadQ,function(c){var d=Ea(a,c.prid,c.req.module),e=a.dynamic?c.mid.replace(/waitingForPlugin$/,d):a.mid+"!"+d,d=i(i({},c),{mid:e,prid:d,injected:0});h[e]||Ia(h[e]=d);b[c.mid]=h[e];S(c);delete h[c.mid]});a.loadQ=0;var c=
function(a){for(var c=a.deps||[],d=0;d<c.length;d++)(a=b[c[d].mid])&&(c[d]=a)},d;for(d in h)c(h[d]);o(n,c)},ia=function(a){e.trace("loader-finish-exec",[a.mid]);a.executed=5;a.defOrder=ha++;a.loadQ&&(fa(a),Xa(a));for(p=0;p<n.length;)n[p]===a?n.splice(p,1):p++;/^require\*/.test(a.mid)&&delete h[a.mid]},Ya=[],ca=function(a,b){if(4===a.executed)return e.trace("loader-circular-dependency",[Ya.concat(a.mid).join("->")]),!a.def||b?T:a.cjs&&a.cjs.exports;if(!a.executed){if(!a.def)return T;var c=a.mid,d=
a.deps||[],f,g=[],h=0;for(a.executed=4;h<d.length;){f=d[h++];f=f===Ua?$(a):f===Va?a.cjs.exports:f===Wa?a.cjs:ca(f,b);if(f===T)return a.executed=0,e.trace("loader-exec-module",["abort",c]),T;g.push(f)}e.trace("loader-run-factory",[a.mid]);var c=a.def,i;if(j("config-dojo-loader-catches"))try{i=t(c)?c.apply(null,g):c}catch(k){r("error",a.result=q("factoryThrew",[a,k]))}else i=t(c)?c.apply(null,g):c;a.result=void 0===i&&a.cjs?a.cjs.exports:i;ia(a)}return a.result},F=0,ba=function(a){try{F++,a()}finally{F--}Ta()&&
r("idle",[])},P=function(){F||ba(function(){for(var a,b,c=0;c<n.length;)a=ha,b=n[c],ca(b),a!=ha?c=0:c++})};void 0===j("dojo-loader-eval-hint-url")&&j.add("dojo-loader-eval-hint-url",1);var Ga=function(a){a+="";return a+(Z?(/\?/.test(a)?"&":"?")+Z:"")},Ia=function(a){var b=a.plugin;5===b.executed&&!b.load&&fa(b);var c=function(b){a.result=b;S(a);ia(a);P()};b.load?b.load(a.prid,a.req,c):b.loadQ?b.loadQ.push(a):(b.loadQ=[a],n.unshift(b),za(b))},z=0,ja=0,ka=0,Za=function(a,b){j("config-stripStrict")&&
(a=a.replace(/"use strict"/g,""));ka=1;if(j("config-dojo-loader-catches"))try{a===z?z.call(null):e.eval(a,j("dojo-loader-eval-hint-url")?b.url:b.mid)}catch(c){r("error",q("evalModuleThrew",b))}else a===z?z.call(null):e.eval(a,j("dojo-loader-eval-hint-url")?b.url:b.mid);ka=0},za=function(a){var b=a.mid,c=a.url;if(!a.executed&&!a.injected&&!(l[b]||a.url&&(a.pack&&l[a.url]===a.pack||1==l[a.url])))if(Sa(a),a.plugin)Ia(a);else{var d=function(){$a(a);2!==a.injected&&(S(a),i(a,Ha),e.trace("loader-define-nonmodule",
[a.url]));P()};(z=y[b]||y["url:"+a.url])?(e.trace("loader-inject",["cache",a.mid,c]),Za(z,a),d()):(e.trace("loader-inject",["script",a.mid,c]),ja=a,e.injectUrl(Ga(c),d,a),ja=0)}},la=function(a,b,c){e.trace("loader-define-module",[a.mid,b]);if(2===a.injected)return r("error",q("multipleDefine",a)),a;i(a,{deps:b,def:c,cjs:{id:a.mid,uri:a.url,exports:a.result={},setExports:function(b){a.cjs.exports=b},config:function(){return a.config}}});for(var d=0;d<b.length;d++)b[d]=v(b[d],a);S(a);if(!t(c)&&!b.length)a.result=
c,ia(a);return a},$a=function(a,b){for(var c=[],d,e;Q.length;)e=Q.shift(),b&&(e[0]=b.shift()),d=e[0]&&v(e[0])||a,c.push([d,e[1],e[2]]);K(a);o(c,function(a){N(la.apply(null,a))})},U=0,R=A,Ba=A;R=function(){U&&clearTimeout(U);U=0};Ba=function(){R();e.waitms&&(U=window.setTimeout(function(){R();r("error",q("timeout",l))},e.waitms))};j.add("ie-event-behavior",!!m.attachEvent&&("undefined"===typeof opera||"[object Opera]"!=opera.toString()));var ma=function(a,b,c,d){if(j("ie-event-behavior"))return a.attachEvent(c,
d),function(){a.detachEvent(c,d)};a.addEventListener(b,d,!1);return function(){a.removeEventListener(b,d,!1)}},ab=ma(window,"load","onload",function(){e.pageLoaded=1;"complete"!=m.readyState&&(m.readyState="complete");ab()}),Ja=m.getElementsByTagName("script")[0],bb=Ja.parentNode;e.injectUrl=function(a,b,c){var c=c.node=m.createElement("script"),d=ma(c,"load","onreadystatechange",function(a){var a=a||window.event,c=a.target||a.srcElement;if("load"===a.type||/complete|loaded/.test(c.readyState))d(),
e(),b&&b()}),e=ma(c,"error","onerror",function(b){d();e();r("error",q("scriptError",[a,b]))});c.type="text/javascript";c.charset="utf-8";c.src=a;bb.insertBefore(c,Ja);return c};e.log=A;e.trace=A;var Ka=function(a,b,c){var d=arguments.length,f=["require","exports","module"],g=[0,a,b];1==d?g=[0,t(a)?f:[],a]:2==d&&B(a)?g=[a,t(b)?f:[],b]:3==d&&(g=[a,b,c]);e.trace("loader-define",g.slice(0,2));if((d=g[0]&&v(g[0]))&&!l[d.mid])N(la(d,g[1],g[2]));else if(!j("ie-event-behavior")||ka)Q.push(g);else{d=d||ja;
if(!d)for(a in l)if((f=h[a])&&f.node&&"interactive"===f.node.readyState){d=f;break}d?(K(d),N(la(d,g[1],g[2]))):r("error",q("ieDefineFailed",g[0]));P()}};Ka.amd={vendor:"dojotoolkit.org"};i(i(e,s.loaderPatch),k.loaderPatch);Qa("error",function(a){try{if(console.error(a),a instanceof Error){for(var b in a)console.log(b+":",a[b]);console.log(".")}}catch(c){}});i(e,{uid:oa,cache:y,packs:x});if(!C.define){C.define=Ka;C.require=e;o(xa,function(a){D(a)});var La=I.deps||k.deps||s.deps,Ma=I.callback||k.callback||
s.callback;e.boot=La||Ma?[La||[],Ma]:0}})(this.dojoConfig||this.djConfig||this.require||{},{async:0,hasCache:{"config-selectorEngine":"acme","config-tlmSiblingOfDojo":1,"dojo-built":1,"dojo-loader":1,dom:1,"host-browser":1},packages:[{location:"../dojox",name:"dojox"},{location:"../dijit",name:"dijit"},{location:".",name:"dojo"},{location:"../wpnativejslib",name:"native"},{location:"../../vvmjs",name:"vvmjs"},{location:"../router",name:"router"}]});
(function(){var k=this.require;k({cache:{}});!k.async&&k(["dojo"]);k.boot&&k.apply(null,k.boot)})();