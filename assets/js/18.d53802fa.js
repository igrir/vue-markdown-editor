(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{383:function(t,e,n){"use strict";var r=n(1),i=n(4),o=n(118),s=n(23),a=n(213),u=n(216),c=n(215),f=n(5),l=n(3),d=n(121),v=n(56),h=n(389);t.exports=function(t,e,n){var p=-1!==t.indexOf("Map"),m=-1!==t.indexOf("Weak"),g=p?"set":"add",x=i[t],k=x&&x.prototype,y=x,w={},b=function(t){var e=k[t];s(k,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(m&&!f(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return m&&!f(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(m&&!f(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(o(t,"function"!=typeof x||!(m||k.forEach&&!l((function(){(new x).entries().next()})))))y=n.getConstructor(e,t,p,g),a.REQUIRED=!0;else if(o(t,!0)){var z=new y,O=z[g](m?{}:-0,1)!=z,E=l((function(){z.has(1)})),j=d((function(t){new x(t)})),I=!m&&l((function(){for(var t=new x,e=5;e--;)t[g](e,e);return!t.has(-0)}));j||((y=e((function(e,n){c(e,y,t);var r=h(new x,e,y);return null!=n&&u(n,r[g],r,p),r}))).prototype=k,k.constructor=y),(E||I)&&(b("delete"),b("has"),p&&b("get")),(I||O)&&b(g),m&&k.clear&&delete k.clear}return w[t]=y,r({global:!0,forced:y!=x},w),v(y,t),m||n.setStrong(y,t,p),y}},384:function(t,e,n){"use strict";var r=n(11).f,i=n(57),o=n(214),s=n(59),a=n(215),u=n(216),c=n(120),f=n(217),l=n(12),d=n(213).fastKey,v=n(39),h=v.set,p=v.getterFor;t.exports={getConstructor:function(t,e,n,c){var f=t((function(t,r){a(t,f,e),h(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),l||(t.size=0),null!=r&&u(r,t[c],t,n)})),v=p(e),m=function(t,e,n){var r,i,o=v(t),s=g(t,e);return s?s.value=n:(o.last=s={index:i=d(e,!0),key:e,value:n,previous:r=o.last,next:void 0,removed:!1},o.first||(o.first=s),r&&(r.next=s),l?o.size++:t.size++,"F"!==i&&(o.index[i]=s)),t},g=function(t,e){var n,r=v(t),i=d(e);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==e)return n};return o(f.prototype,{clear:function(){for(var t=v(this),e=t.index,n=t.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete e[n.index],n=n.next;t.first=t.last=void 0,l?t.size=0:this.size=0},delete:function(t){var e=v(this),n=g(this,t);if(n){var r=n.next,i=n.previous;delete e.index[n.index],n.removed=!0,i&&(i.next=r),r&&(r.previous=i),e.first==n&&(e.first=r),e.last==n&&(e.last=i),l?e.size--:this.size--}return!!n},forEach:function(t){for(var e,n=v(this),r=s(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!g(this,t)}}),o(f.prototype,n?{get:function(t){var e=g(this,t);return e&&e.value},set:function(t,e){return m(this,0===t?0:t,e)}}:{add:function(t){return m(this,t=0===t?0:t,t)}}),l&&r(f.prototype,"size",{get:function(){return v(this).size}}),f},setStrong:function(t,e,n){var r=e+" Iterator",i=p(e),o=p(r);c(t,e,(function(t,e){h(this,{type:r,target:t,state:i(t),kind:e,last:void 0})}),(function(){for(var t=o(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),f(e)}}},385:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},386:function(t,e,n){"use strict";var r=n(15),i=n(55),o=n(14),s=n(41),a=n(22),u=Math.min,c=[].lastIndexOf,f=!!c&&1/[1].lastIndexOf(1,-0)<0,l=s("lastIndexOf"),d=a("indexOf",{ACCESSORS:!0,1:0}),v=f||!l||!d;t.exports=v?function(t){if(f)return c.apply(this,arguments)||0;var e=r(this),n=o(e.length),s=n-1;for(arguments.length>1&&(s=u(s,i(arguments[1]))),s<0&&(s=n+s);s>=0;s--)if(s in e&&e[s]===t)return s||0;return-1}:c},387:function(t,e,n){"use strict";var r=n(214),i=n(213).getWeakData,o=n(7),s=n(5),a=n(215),u=n(216),c=n(40),f=n(8),l=n(39),d=l.set,v=l.getterFor,h=c.find,p=c.findIndex,m=0,g=function(t){return t.frozen||(t.frozen=new x)},x=function(){this.entries=[]},k=function(t,e){return h(t.entries,(function(t){return t[0]===e}))};x.prototype={get:function(t){var e=k(this,t);if(e)return e[1]},has:function(t){return!!k(this,t)},set:function(t,e){var n=k(this,t);n?n[1]=e:this.entries.push([t,e])},delete:function(t){var e=p(this.entries,(function(e){return e[0]===t}));return~e&&this.entries.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,c){var l=t((function(t,r){a(t,l,e),d(t,{type:e,id:m++,frozen:void 0}),null!=r&&u(r,t[c],t,n)})),h=v(e),p=function(t,e,n){var r=h(t),s=i(o(e),!0);return!0===s?g(r).set(e,n):s[r.id]=n,t};return r(l.prototype,{delete:function(t){var e=h(this);if(!s(t))return!1;var n=i(t);return!0===n?g(e).delete(t):n&&f(n,e.id)&&delete n[e.id]},has:function(t){var e=h(this);if(!s(t))return!1;var n=i(t);return!0===n?g(e).has(t):n&&f(n,e.id)}}),r(l.prototype,n?{get:function(t){var e=h(this);if(s(t)){var n=i(t);return!0===n?g(e).get(t):n?n[e.id]:void 0}},set:function(t,e){return p(this,t,e)}}:{add:function(t){return p(this,t,!0)}}),l}}},388:function(t,e,n){var r=n(1),i=n(386);r({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},390:function(t,e,n){"use strict";var r=n(1),i=n(40).every,o=n(41),s=n(22),a=o("every"),u=s("every");r({target:"Array",proto:!0,forced:!a||!u},{every:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},393:function(t,e,n){"use strict";var r=n(383),i=n(384);t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},396:function(t,e,n){var r=n(1),i=n(3),o=n(220).f;r({target:"Object",stat:!0,forced:i((function(){return!Object.getOwnPropertyNames(1)}))},{getOwnPropertyNames:o})},397:function(t,e,n){var r=n(1),i=n(3),o=n(5),s=Object.isFrozen;r({target:"Object",stat:!0,forced:i((function(){s(1)}))},{isFrozen:function(t){return!o(t)||!!s&&s(t)}})},398:function(t,e,n){n(119)("asyncIterator")},399:function(t,e,n){"use strict";var r=n(383),i=n(384);t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},400:function(t,e,n){"use strict";var r,i=n(4),o=n(214),s=n(213),a=n(383),u=n(387),c=n(5),f=n(39).enforce,l=n(219),d=!i.ActiveXObject&&"ActiveXObject"in i,v=Object.isExtensible,h=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},p=t.exports=a("WeakMap",h,u);if(l&&d){r=u.getConstructor(h,"WeakMap",!0),s.REQUIRED=!0;var m=p.prototype,g=m.delete,x=m.has,k=m.get,y=m.set;o(m,{delete:function(t){if(c(t)&&!v(t)){var e=f(this);return e.frozen||(e.frozen=new r),g.call(this,t)||e.frozen.delete(t)}return g.call(this,t)},has:function(t){if(c(t)&&!v(t)){var e=f(this);return e.frozen||(e.frozen=new r),x.call(this,t)||e.frozen.has(t)}return x.call(this,t)},get:function(t){if(c(t)&&!v(t)){var e=f(this);return e.frozen||(e.frozen=new r),x.call(this,t)?k.call(this,t):e.frozen.get(t)}return k.call(this,t)},set:function(t,e){if(c(t)&&!v(t)){var n=f(this);n.frozen||(n.frozen=new r),x.call(this,t)?y.call(this,t,e):n.frozen.set(t,e)}else y.call(this,t,e);return this}})}},406:function(t,e,n){"use strict";e.a='<h1 align="center">Markdown Editor built on Vue</h1>\n\n<p align="center">\n  <a href="https://npmcharts.com/compare/@kangc/v-md-editor?minimal=true"><img src="https://img.shields.io/npm/dm/@kangc/v-md-editor.svg?sanitize=true" alt="Downloads"></a>\n  <a href="https://www.npmjs.com/package/@kangc/v-md-editor"><img src="https://img.shields.io/npm/v/@kangc/v-md-editor.svg?sanitize=true" alt="Version"></a>\n  <a href="https://www.npmjs.com/package/@kangc/v-md-editor"><img src="https://img.shields.io/npm/l/@kangc/v-md-editor.svg?sanitize=true" alt="License"></a>\n</p>\n\n## Links\n\n- [Demo](https://code-farmer-i.github.io/vue-markdown-editor/examples/base-editor.html)\n- [Documentation](https://code-farmer-i.github.io/vue-markdown-editor/)\n- [Changelog](https://code-farmer-i.github.io/vue-markdown-editor/changelog.html)\n\n## Install\n\n```bash\n# use npm\nnpm i @kangc/v-md-editor -S\n\n# use yarn\nyarn add @kangc/v-md-editor\n```\n\n## Quick Start\n\n```js\nimport Vue from \'vue\';\nimport VueMarkdownEditor from \'@kangc/v-md-editor\';\nimport \'@kangc/v-md-editor/lib/style/base-editor.css\';\nimport vuepressTheme from \'@kangc/v-md-editor/lib/theme/vuepress.js\';\n\nVueMarkdownEditor.use(vuepressTheme);\n\nVue.use(VueMarkdownEditor);\n```\n\n## Usage\n\n```html\n<template>\n  <v-md-editor v-model="text" height="400px"></v-md-editor>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        text: \'\',\n      };\n    },\n  };\n<\/script>\n```\n\n## Refrence\n\n- [ElementUi Scrollbar Component](https://github.com/ElemeFE/element/tree/dev/packages/scrollbar)\n- [vuepress-plugin-container](https://vuepress.github.io/zh/plugins/container/)\n'},546:function(t,e,n){"use strict";n.r(e);var r=n(385),i=n(391),o=n.n(i),s=(n(392),n(395)),a=n.n(s),u=n(406),c={components:Object(r.a)({},o.a.name,o.a),data:function(){return this.theme=a.a,{text:"[[toc]]\n\n".concat(u.a)}},mounted:function(){this.$refs.editor.toggleToc()}},f=n(54),l=Object(f.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-md-editor",{ref:"editor",attrs:{theme:t.theme,height:"500px"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})}),[],!1,null,null,null);e.default=l.exports}}]);