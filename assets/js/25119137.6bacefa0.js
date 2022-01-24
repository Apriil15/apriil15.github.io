"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5745],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),f=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=f(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=f(t),d=o,s=m["".concat(l,".").concat(d)]||m[d]||p[d]||c;return t?r.createElement(s,i(i({ref:n},u),{},{components:t})):r.createElement(s,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var f=2;f<c;f++)i[f]=t[f];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9778:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return f},toc:function(){return u},default:function(){return m}});var r=t(7462),o=t(3366),c=(t(7294),t(3905)),i=["components"],a={},l="Reflection",f={unversionedId:"golang/Reflection 17c75934f9b54990b7354562fe61f1c9",id:"golang/Reflection 17c75934f9b54990b7354562fe61f1c9",title:"Reflection",description:"Example",source:"@site/docs/golang/Reflection 17c75934f9b54990b7354562fe61f1c9.md",sourceDirName:"golang",slug:"/golang/Reflection 17c75934f9b54990b7354562fe61f1c9",permalink:"/docs/golang/Reflection 17c75934f9b54990b7354562fe61f1c9",editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/golang/Reflection 17c75934f9b54990b7354562fe61f1c9.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Read Command From Command Line",permalink:"/docs/golang/Read Command Line \u6307\u4ee4 8ec0e52300a74bdab5c27691d7d99c2f"},next:{title:"Rune",permalink:"/docs/golang/Rune f98b591c73234f6b89d646417e6d377d"}},u=[{value:"Example",id:"example",children:[],level:2}],p={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"reflection"},"Reflection"),(0,c.kt)("h2",{id:"example"},"Example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "reflect"\n)\n\nfunc main() {\n    student := Student{26, "Test"}\n    myType := reflect.TypeOf(student)\n\n    fmt.Println(myType.Name())        // Student\n    fmt.Println(myType.Kind())        // struct\n    fmt.Println(myType.NumField())    // 2\n    fmt.Println(myType.Field(0).Name) // Age\n}\n\ntype Student struct {\n    Age  int\n    Name string\n}\n\n')))}m.isMDXComponent=!0}}]);