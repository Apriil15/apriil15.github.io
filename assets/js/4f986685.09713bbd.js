"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9380],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(t),g=a,s=f["".concat(l,".").concat(g)]||f[g]||m[g]||o;return t?r.createElement(s,i(i({ref:n},u),{},{components:t})):r.createElement(s,i({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6679:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={},l="Package",p={unversionedId:"golang/Basis/Package f4495ea63df14ce59b5039c6137fa3ef",id:"golang/Basis/Package f4495ea63df14ce59b5039c6137fa3ef",title:"Package",description:"- \u91cd\u9ede\u5c31\u662f import \u7684\u8def\u5f91\u8981 follow go.mod \u53bb\u8a02",source:"@site/docs/golang/Basis/Package f4495ea63df14ce59b5039c6137fa3ef.md",sourceDirName:"golang/Basis",slug:"/golang/Basis/Package f4495ea63df14ce59b5039c6137fa3ef",permalink:"/docs/golang/Basis/Package f4495ea63df14ce59b5039c6137fa3ef",editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/golang/Basis/Package f4495ea63df14ce59b5039c6137fa3ef.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Operator \u904b\u7b97\u5b50",permalink:"/docs/golang/Basis/Operator \u904b\u7b97\u5b50 701a43ea335b49a19f8ebcbf90cdfa88"},next:{title:"Pointer \u6307\u6a19",permalink:"/docs/golang/Basis/Pointer \u6307\u6a19 b7f0b049988b4cf2aa7a10cae420e361"}},u=[],m={toc:u};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"package"},"Package"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u91cd\u9ede\u5c31\u662f import \u7684\u8def\u5f91\u8981 follow ",(0,o.kt)("inlineCode",{parentName:"li"},"go.mod")," \u53bb\u8a02","  \u4f8b\u5982\uff0c\u4e00\u958b\u59cb\u9019\u6a23\u521d\u59cb\u5316\uff0cpath \u70ba ",(0,o.kt)("inlineCode",{parentName:"li"},"my_project"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"$ go mod init my_project\n")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"go.mod")," \u5c31\u6703\u50cf\u9019\u6a23",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},"module my_project\n\ngo 1.16\n")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5c08\u6848\u7684\u7d50\u69cb","  ",(0,o.kt)("img",{parentName:"li",src:"https://i.imgur.com/ZvV42Qg.png",alt:"https://i.imgur.com/ZvV42Qg.png"})),(0,o.kt)("li",{parentName:"ul"},"main.go",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "my_project/module"\n    "my_project/module/inner"\n)\n\nfunc main() {\n    fmt.Println("main")\n\n    module.Output() // \u4f7f\u7528 module1.go\n\n    inner.Output() // \u4f7f\u7528 inner.go\n}\n\n'))),(0,o.kt)("li",{parentName:"ul"},"module1.go",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package module\n\nimport (\n    "fmt"\n)\n\nfunc Output() {\n    fmt.Println("module1")\n}\n\n'))),(0,o.kt)("li",{parentName:"ul"},"inner.go",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package inner\n\nimport (\n    "fmt"\n)\n\nfunc Output() {\n    fmt.Println("inner")\n}\n\n')))))}f.isMDXComponent=!0}}]);