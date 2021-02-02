(window.webpackJsonp=window.webpackJsonp||[]).push([[387],{1256:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(r),m=n,u=s["".concat(i,".").concat(m)]||s[m]||d[m]||c;return r?a.a.createElement(u,o(o({ref:t},b),{},{components:r})):a.a.createElement(u,o({ref:t},b))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<c;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},456:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),c=(r(0),r(1256)),i={id:"sqliteexceptionconverter",title:"Class: SqliteExceptionConverter",sidebar_label:"SqliteExceptionConverter"},o={unversionedId:"api/classes/sqliteexceptionconverter",id:"version-4.3/api/classes/sqliteexceptionconverter",isDocsHomePage:!1,title:"Class: SqliteExceptionConverter",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/classes/sqliteexceptionconverter.md",slug:"/api/classes/sqliteexceptionconverter",permalink:"/docs/4.3/api/classes/sqliteexceptionconverter",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/sqliteexceptionconverter.md",version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612280878,sidebar_label:"SqliteExceptionConverter",sidebar:"version-4.3/API",previous:{title:"Class: SqliteDriver",permalink:"/docs/4.3/api/classes/sqlitedriver"},next:{title:"Class: SqlitePlatform",permalink:"/docs/4.3/api/classes/sqliteplatform"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"convertException",id:"convertexception",children:[]}]}],b={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"ExceptionConverter"),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("strong",{parentName:"p"},"SqliteExceptionConverter")))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"convertexception"},"convertException"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"convertException"),"(",Object(c.b)("inlineCode",{parentName:"p"},"exception"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/driverexception#error"}),"Error")," & ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#dictionary"}),"Dictionary"),"): DriverException"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Overrides void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/sqlite/src/SqliteExceptionConverter.ts#L14"}),"packages/sqlite/src/SqliteExceptionConverter.ts:14"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"inheritdoc"))," "),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"link"))," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.sqlite.org/c3ref/c_abort.html"}),"http://www.sqlite.org/c3ref/c_abort.html")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"link"))," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/doctrine/dbal/blob/master/src/Driver/AbstractSQLiteDriver.php"}),"https://github.com/doctrine/dbal/blob/master/src/Driver/AbstractSQLiteDriver.php")),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"exception")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/classes/driverexception#error"}),"Error")," & ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#dictionary"}),"Dictionary"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," DriverException"))}l.isMDXComponent=!0}}]);