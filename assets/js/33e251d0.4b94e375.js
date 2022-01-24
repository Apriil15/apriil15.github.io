"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3679],{3905:function(e,n,t){t.d(n,{Zo:function(){return f},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},f=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),s=u(t),g=a,m=s["".concat(o,".").concat(g)]||s[g]||p[g]||i;return t?r.createElement(m,c(c({ref:n},f),{},{components:t})):r.createElement(m,c({ref:n},f))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=s;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<i;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},1614:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return f},default:function(){return s}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),c=["components"],l={},o="interface",u={unversionedId:"golang/interface 0f319be3a7024dbd82a2e439c9e278de",id:"golang/interface 0f319be3a7024dbd82a2e439c9e278de",title:"interface",description:"- interface\u3001struct \u5beb\u6cd5",source:"@site/docs/golang/interface 0f319be3a7024dbd82a2e439c9e278de.md",sourceDirName:"golang",slug:"/golang/interface 0f319be3a7024dbd82a2e439c9e278de",permalink:"/docs/golang/interface 0f319be3a7024dbd82a2e439c9e278de",editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/golang/interface 0f319be3a7024dbd82a2e439c9e278de.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"init function",permalink:"/docs/golang/init function ba25f0ecb84146bea2b5a6fa11cbec54"},next:{title:"\u5982\u4f55\u5beb Benchmark",permalink:"/docs/golang/\u5982\u4f55\u5beb Benchmark f59b6673a85f4f27913bc2becac61789"}},f=[{value:"\u7d93\u5178\u7684 Shape",id:"\u7d93\u5178\u7684-shape",children:[],level:2},{value:"interface{}",id:"interface-1",children:[],level:2},{value:"Stringer",id:"stringer",children:[],level:2}],p={toc:f};function s(e){var n=e.components,t=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface"},"interface"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"interface\u3001struct \u5beb\u6cd5"),(0,i.kt)("li",{parentName:"ul"},"interface{} \u7a7a\u4ecb\u9762\u662f\u4ec0\u9ebc"),(0,i.kt)("li",{parentName:"ul"},"type assertion \u578b\u5225\u65b7\u8a00\u600e\u9ebc\u7528")),(0,i.kt)("h2",{id:"\u7d93\u5178\u7684-shape"},"\u7d93\u5178\u7684 Shape"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b9a\u7fa9\u4e00\u500b interface: shape\n\u5169\u500b struct \u5be6\u73fe: rectangle, circle")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "math"\n)\n\nfunc main() {\n    r := rectangle{width: 5, height: 8, totalInnerAngle: 360}\n    c := circle{radius: 6}\n\n    Calculate(r)\n    Calculate(c)\n}\n\nfunc Calculate(s shape) {\n    fmt.Println("area:", s.area())\n    fmt.Println("perimeter:", s.perimeter())\n\n    // \u56e0\u70ba rectangle \u624d\u6709 getTotalInnerAngle()\uff0c\u56e0\u6b64\u8981 type assertion\n    if r, ok := s.(rectangle); ok {\n        fmt.Println("total inner angle:", r.getTotalInnerAngle())\n    }\n}\n\n// \u4ee5\u4e0b\u70ba interface and struct\ntype shape interface {\n    area() float32\n    perimeter() float32\n}\n\ntype rectangle struct {\n    width, height   float32\n    totalInnerAngle int\n}\n\ntype circle struct {\n    radius float32\n}\n\n// \u591a\u4e86\u9019\u500b\u65b9\u6cd5\nfunc (r rectangle) getTotalInnerAngle() int {\n    return r.totalInnerAngle\n}\n\nfunc (r rectangle) area() float32 {\n    return r.height * r.width\n}\n\nfunc (r rectangle) perimeter() float32 {\n    return (r.height + r.width) * 2\n}\n\nfunc (c circle) area() float32 {\n    return c.radius * c.radius * math.Pi\n}\n\nfunc (c circle) perimeter() float32 {\n    return 2 * c.radius * math.Pi\n}\n\n')),(0,i.kt)("h2",{id:"interface-1"},"interface{}"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"interface{}"),"\uff1a\u53ef\u4ee5\u4ee3\u8868\u4efb\u4f55\u578b\u5225"),(0,i.kt)("li",{parentName:"ul"},"type assertion: ",(0,i.kt)("inlineCode",{parentName:"li"},"\u8f49\u578b"),"\u7684\u6982\u5ff5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n)\n\nfunc main() {\n    // type assertion \u53ef\u4ee5 return \u5169\u500b\u503c\n    // \u7b2c\u4e00\u500b\uff1a\u8f49\u5b8c\u578b\u5225\u7684\u503c\n    // \u7b2c\u4e8c\u500b\uff1a\u6709\u6c92\u6709\u6210\u529f\u8f49\u904e\u53bb\n    var i interface{} = "string"\n    s, ok := i.(string) // type assertion\n    fmt.Println(s, ok)  // string true\n\n    // \u53ef\u4ee5\u5beb\u6210 switch\n    // %T: type \u7684\u610f\u601d\n    var something interface{} = true\n    switch result := something.(type) {\n    case string:\n        fmt.Printf("%T\\n", result)\n    case int:\n        fmt.Printf("%T\\n", result)\n    case bool:\n        fmt.Printf("%T\\n", result) // bool\n    default:\n        fmt.Println("none of above")\n    }\n}\n')),(0,i.kt)("h2",{id:"stringer"},"Stringer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u81ea\u5df1\u5ba2\u88fd\u5316\u5370\u51fa\u6771\u897f")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main() {\n\n    t := Test(1.23456)\n\n    // \u672c\u4f86\u6703\u5370\u51fa 1.23456 -> \u8b8a\u6210 1.23\n    fmt.Println(t)\n}\n\ntype Test float64\n\n// \u5be6\u73fe Stringer \u4ecb\u9762\n// \u53ef\u4ee5\u81ea\u5df1\u5ba2\u88fd\u5316\u5370\u51fa\u7684\u6771\u897f\nfunc (t Test) String() string {\n    return fmt.Sprintf("%0.2f", t)\n}\n')))}s.isMDXComponent=!0}}]);