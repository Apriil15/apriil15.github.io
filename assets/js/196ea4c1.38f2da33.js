"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3802],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3864:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],u={sidebar_label:"Tips To Use Docusaurus",sidebar_position:2},s="Tips To Use Docusaurus",l={unversionedId:"tips-to-use-docusaurus",id:"tips-to-use-docusaurus",title:"Tips To Use Docusaurus",description:"- Use sidebar_position in markdown file to change position",source:"@site/docs/tips-to-use-docusaurus.md",sourceDirName:".",slug:"/tips-to-use-docusaurus",permalink:"/docs/tips-to-use-docusaurus",editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/tips-to-use-docusaurus.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Tips To Use Docusaurus",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/intro"},next:{title:"1",permalink:"/docs/to-be-continued/1"}},c=[],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tips-to-use-docusaurus"},"Tips To Use Docusaurus"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"sidebar_position")," in markdown file to change position")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"---\nsidebar_position: 3\n---\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you use a folder, don't forget to add ",(0,i.kt)("inlineCode",{parentName:"li"},"_category_.json"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "label": "name",\n  "position": 3\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"truncate")," to limit blog post size in the list view")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\x3c!--truncate--\x3e\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The blog post date can be extracted from filenames, such as:"),(0,i.kt)("p",{parentName:"li"},"2019-05-30-welcome.md"),(0,i.kt)("p",{parentName:"li"},"2019-05-30-welcome/index.md"))))}d.isMDXComponent=!0}}]);