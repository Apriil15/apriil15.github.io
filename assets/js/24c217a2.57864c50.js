"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9941],{3905:function(n,e,t){t.d(e,{Zo:function(){return f},kt:function(){return s}});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},c=Object.keys(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=r.createContext({}),i=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},f=function(n){var e=i(n.components);return r.createElement(l.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,c=n.originalType,l=n.parentName,f=u(n,["components","mdxType","originalType","parentName"]),m=i(t),s=a,b=m["".concat(l,".").concat(s)]||m[s]||p[s]||c;return t?r.createElement(b,o(o({ref:e},f),{},{components:t})):r.createElement(b,o({ref:e},f))}));function s(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var c=t.length,o=new Array(c);o[0]=m;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=n,u.mdxType="string"==typeof n?n:a,o[1]=u;for(var i=2;i<c;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4537:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return f},default:function(){return m}});var r=t(7462),a=t(3366),c=(t(7294),t(3905)),o=["components"],u={},l="Mutex \u4e92\u65a5\u9396",i={unversionedId:"golang/Mutex \u4e92\u65a5\u9396 3f467bf2e87548ac909c818b080fbb8f",id:"golang/Mutex \u4e92\u65a5\u9396 3f467bf2e87548ac909c818b080fbb8f",title:"Mutex \u4e92\u65a5\u9396",description:"- \u4e3b\u8981\u6709\u4e09\u7a2e\u9396\uff0c\u4f7f\u7528\u60c5\u5883\u4e0d\u592a\u540c",source:"@site/docs/golang/Mutex \u4e92\u65a5\u9396 3f467bf2e87548ac909c818b080fbb8f.md",sourceDirName:"golang",slug:"/golang/Mutex \u4e92\u65a5\u9396 3f467bf2e87548ac909c818b080fbb8f",permalink:"/docs/golang/Mutex \u4e92\u65a5\u9396 3f467bf2e87548ac909c818b080fbb8f",editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/golang/Mutex \u4e92\u65a5\u9396 3f467bf2e87548ac909c818b080fbb8f.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Map",permalink:"/docs/golang/Map f2432b435b724172ae41501781ad7011"},next:{title:"Operator \u904b\u7b97\u5b50",permalink:"/docs/golang/Operator \u904b\u7b97\u5b50 701a43ea335b49a19f8ebcbf90cdfa88"}},f=[{value:"sync.Mutex",id:"syncmutex",children:[],level:2},{value:"sync.RWMutex",id:"syncrwmutex",children:[],level:2},{value:"sync.Once",id:"synconce",children:[],level:2},{value:"Reference",id:"reference",children:[],level:2}],p={toc:f};function m(n){var e=n.components,t=(0,a.Z)(n,o);return(0,c.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"mutex-\u4e92\u65a5\u9396"},"Mutex \u4e92\u65a5\u9396"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u6709\u4e09\u7a2e\u9396\uff0c\u4f7f\u7528\u60c5\u5883\u4e0d\u592a\u540c")),(0,c.kt)("h2",{id:"syncmutex"},"sync.Mutex"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u591a\u500b goroutine \u540c\u6642\u53bb\u8b80\u5beb\u67d0\u500b\u8b8a\u6578\u6703\u51fa\u554f\u984c\uff0c\u56e0\u6b64\u52a0\u4e0a lock\uff0c\u78ba\u4fdd\u524d\u4e00\u500b goroutine \u64cd\u4f5c\u5b8c\uff0c\u4e0b\u4e00\u500b\u624d\u80fd\u7528")),(0,c.kt)("p",null,"\u60c5\u5883\uff1a\u591a\u4eba\u540c\u6642\u5b58\u6b3e"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "sync"\n)\n\ntype Bank struct {\n    balance int // \u60f3\u6210\u9280\u884c\u5168\u90e8\u9918\u984d\n}\n\n// \u5b58\u6b3e\nfunc (b *Bank) saveMoney(money int) {\n    b.balance += money\n}\n\n// \u78ba\u8a8d\u9918\u984d\nfunc (b *Bank) getBalance() int {\n    return b.balance\n}\n\nfunc main() {\n    var wg sync.WaitGroup\n    var mux sync.Mutex\n\n    wg.Add(1000)\n\n    b := Bank{}\n\n    for i := 0; i < 1000; i++ {\n        go func() {\n            mux.Lock()\n            b.saveMoney(1000) // \u524d\u5f8c\u4e0a\u9396\n            mux.Unlock()\n\n            wg.Done()\n        }()\n    }\n\n    wg.Wait()\n\n    fmt.Println(b.getBalance())\n}\n\n')),(0,c.kt)("h2",{id:"syncrwmutex"},"sync.RWMutex"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u8b80\u5beb\u9396 (\u591a\u8b80\u55ae\u5beb)\uff0c\u5141\u8a31\u591a\u500b\u8b80 concurrency\uff0c\u55ae\u500b\u5beb"),(0,c.kt)("li",{parentName:"ul"},"\u5beb\u7684\u6642\u5019 lock\uff0c\u78ba\u4fdd\u503c\u662f\u5c0d\u7684\uff0c\u8b80\u7684\u6642\u5019 concurrency")),(0,c.kt)("p",null,"\u60c5\u5883\uff1a\u65e2\u7136\u53ef\u4ee5\u591a\u4eba\u540c\u6642\u5b58\uff0c\u90a3\u4e5f\u8981\u80fd\u591a\u4eba\u540c\u6642\u8b80"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "sync"\n)\n\ntype Bank struct {\n    balance int\n}\n\n// \u5b58\u6b3e\nfunc (b *Bank) saveMoney(money int) {\n    b.balance += money\n}\n\n// \u78ba\u8a8d\u9918\u984d\nfunc (b *Bank) getBalance() int {\n    return b.balance\n}\n\nfunc main() {\n    var wg sync.WaitGroup\n    var mux sync.RWMutex\n\n    wg.Add(10)\n\n    b := Bank{}\n\n    for i := 0; i < 5; i++ {\n        go func() {\n            mux.Lock()\n            b.saveMoney(1000) // \u524d\u5f8c\u4e0a\u9396\n            mux.Unlock()\n            wg.Done()\n        }()\n    }\n    for i := 0; i < 5; i++ {\n        go func() {\n            mux.RLock()\n            _ = b.getBalance() // \u8b80\u7684\u6642\u5019\u4e26\u767c\n            mux.RUnlock()\n            wg.Done()\n        }()\n    }\n\n    wg.Wait()\n    fmt.Println(b.getBalance())\n}\n\n')),(0,c.kt)("h2",{id:"synconce"},"sync.Once"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u60c5\u5883\uff1a\u6709\u4e00\u500b function\uff0c\u6211\u5011\u5e0c\u671b\u5728 concurrency \u6642\uff0c\u53ea\u88ab\u6240\u6709 goroutine \u505a\u4e00\u6b21")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "sync"\n    "time"\n)\n\nfunc main() {\n    var once sync.Once\n\n    for i := 0; i < 10; i++ {\n        go func() {\n            once.Do(read)\n        }()\n    }\n\n    time.Sleep(time.Second)\n}\n\nfunc read() {\n    fmt.Println(1)\n}\n\n')),(0,c.kt)("h2",{id:"reference"},"Reference"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://clouding.city/go/mutex-rwmutex/"},"Go \u7c21\u55ae\u4f8b\u5b50\u4f86\u7406\u89e3 sync.Mutex \u548c sync.RWMutex")))}m.isMDXComponent=!0}}]);