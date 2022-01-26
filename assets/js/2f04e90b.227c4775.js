"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5957],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},492:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={},u="Struct",s={unversionedId:"golang/Basis/Struct 27c3a60b9d694d82b8ebe3f04f32719b",id:"golang/Basis/Struct 27c3a60b9d694d82b8ebe3f04f32719b",title:"Struct",description:"Basic",source:"@site/docs/golang/Basis/Struct 27c3a60b9d694d82b8ebe3f04f32719b.md",sourceDirName:"golang/Basis",slug:"/golang/Basis/Struct 27c3a60b9d694d82b8ebe3f04f32719b",permalink:"/docs/golang/Basis/Struct 27c3a60b9d694d82b8ebe3f04f32719b",editUrl:"https://github.com/Apriil15/apriil15.github.io/tree/master/docs/golang/Basis/Struct 27c3a60b9d694d82b8ebe3f04f32719b.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Slice",permalink:"/docs/golang/Basis/Slice 9e032790971d44b4bb3444adb19a5b1e"},next:{title:"Swap",permalink:"/docs/golang/Basis/Swap 075d0d171c2146df95c315bf9caaeced"}},l=[{value:"Basic",id:"basic",children:[],level:2},{value:"Anonymous",id:"anonymous",children:[],level:2},{value:"Embedded",id:"embedded",children:[],level:2},{value:"Struct Tag",id:"struct-tag",children:[],level:2}],d={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"struct"},"Struct"),(0,i.kt)("h2",{id:"basic"},"Basic"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6a5f\u5236\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"copy struct")),(0,i.kt)("li",{parentName:"ul"},"pointer receiver: \u5169\u500b memory address \u662f\u4e00\u6a23\u7684")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n)\n\nfunc main() {\n    student := Student{Age: 18}\n    fmt.Printf("memory address: %p\\n", &student)\n\n    student.change()\n    fmt.Println(student.Age)\n}\n\ntype Student struct {\n    Age int\n}\n\nfunc (student *Student) change() {\n    student.Age = 25\n    fmt.Printf("memory address: %p\\n", student) // %p -> pointer\n}\n\n')),(0,i.kt)("h2",{id:"anonymous"},"Anonymous"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n)\n\nfunc main() {\n    // 1.\n    var test1 struct {\n        name string\n        age  int\n    }\n    test1.age = 15\n    test1.name = "test"\n    fmt.Println(test1)\n\n    // 2.\n    test2 := struct {\n        name string\n        age  int\n    }{\n        name: "test",\n        age:  15,\n    }\n    fmt.Println(test2)\n}\n\n')),(0,i.kt)("h2",{id:"embedded"},"Embedded"),(0,i.kt)("p",null,"\u628a\u4e00\u500b struct \u5beb\u5728\u53e6\u4e00\u500b struct \u88e1\u9762\uff0c\u7a31\u4f5c ",(0,i.kt)("inlineCode",{parentName:"p"},"embedded")," (\u5d4c\u5165)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"promoted \u88ab\u63d0\u5347 \u2192 \u5916\u90e8 struct \u53ef\u4ee5\u76f4\u63a5\u7528\u5167\u90e8 struct \u7684 fields")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n)\n\nfunc main() {\n    s := Student{}\n    s.Age = 27\n    s.Name.FirstName = "Nano"\n    s.LastName = "Wang" // \u53ef\u4ee5\u76f4\u63a5\u7528 -> promoted\n\n    fmt.Println(s)\n}\n\ntype Student struct {\n    Name // anonymous field -> embedded\n    Age  int\n}\n\ntype Name struct {\n    FirstName string\n    LastName  string\n}\n')),(0,i.kt)("h2",{id:"struct-tag"},"Struct Tag"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-use-struct-tags-in-go"},"How To Use Struct Tags in Go | DigitalOcean")))}m.isMDXComponent=!0}}]);