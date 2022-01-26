"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8090],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,g=p["".concat(l,".").concat(m)]||p[m]||f[m]||o;return t?r.createElement(g,i(i({ref:n},s),{},{components:t})):r.createElement(g,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1748:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={},l="Closure",u={unversionedId:"golang/Basis/Closure 014afeb7831e4c99ae690ead9f2c881a",id:"golang/Basis/Closure 014afeb7831e4c99ae690ead9f2c881a",title:"Closure",description:"- closure \u5f80\u5f80\u8ddf first-class function \u6709\u95dc",source:"@site/docs/golang/Basis/Closure 014afeb7831e4c99ae690ead9f2c881a.md",sourceDirName:"golang/Basis",slug:"/golang/Basis/Closure 014afeb7831e4c99ae690ead9f2c881a",permalink:"/docs/golang/Basis/Closure 014afeb7831e4c99ae690ead9f2c881a",editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/golang/Basis/Closure 014afeb7831e4c99ae690ead9f2c881a.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Buffer Reader",permalink:"/docs/golang/Basis/Buffer Reader d449be360a3c43e8a84a7f56ac686933"},next:{title:"Context",permalink:"/docs/golang/Basis/Context 819838d394d24327abf706e47051b1e8"}},s=[{value:"Example",id:"example",children:[],level:2}],f={toc:s};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"closure"},"Closure"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"closure \u5f80\u5f80\u8ddf ",(0,o.kt)("a",{parentName:"li",href:"/docs/golang/Basis/First-Class%20function%205082af28a52d49d080d95d2a61c90ebe"},"first-class function")," \u6709\u95dc")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n)\n\nfunc main() {\n    // \u8b8a\u6578 t \u5176\u5be6\u5c31\u662f func() int\n    t := test()\n\n    // \u8abf\u7528\u8b8a\u6578 t\uff0c\u4e5f\u5c31\u662f\u8abf\u7528 func() int\n    fmt.Println(t()) // 1\n    fmt.Println(t()) // 2\n    fmt.Println(t()) // 3\n    fmt.Println(t()) // 4\n\n    o := test()\n    fmt.Println(o()) // 1\n\n}\n\nfunc test() func() int {\n    i := 0\n\n    // \u8abf\u7528 test() \u6703\u56de\u50b3\u9019\u500b func\n    return func() int {\n        i++\n        return i\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\ntype Getter func() int\ntype Setter func(int)\n\n// getter, setter \u9019\u5169\u500b closure \u7684 x \u70ba\u540c\u4e00\u500b\u8b8a\u6578\nfunc x_getter_setter(x int) (Getter, Setter) {\n    fmt.Printf("the parameter :\\tx (%p) = %d\\n", &x, x)\n\n    getter := func() int {\n        fmt.Printf("getter: %p\\n", &x)\n        return x\n    }\n    setter := func(n int) {\n        x = n\n        fmt.Printf("setter: %p\\n", &x)\n    }\n    return getter, setter\n}\n\nfunc main() {\n    getX, setX := x_getter_setter(10)\n\n    fmt.Println(getX()) // 10\n    setX(20)\n    fmt.Println(getX()) // 20\n}\n')))}p.isMDXComponent=!0}}]);