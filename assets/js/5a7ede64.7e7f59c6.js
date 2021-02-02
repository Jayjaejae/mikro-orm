(window.webpackJsonp=window.webpackJsonp||[]).push([[397],{1256:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||s[d]||c;return n?a.a.createElement(m,o(o({ref:t},b),{},{components:n})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<c;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},466:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),c=(n(0),n(1256)),i={id:"knex.knex.functionhelper",title:"Interface: FunctionHelper",sidebar_label:"FunctionHelper",hide_title:!0},o={unversionedId:"api/interfaces/knex.knex.functionhelper",id:"version-4.4/api/interfaces/knex.knex.functionhelper",isDocsHomePage:!1,title:"Interface: FunctionHelper",description:"Interface: FunctionHelper",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.functionhelper.md",slug:"/api/interfaces/knex.knex.functionhelper",permalink:"/docs/api/interfaces/knex.knex.functionhelper",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.functionhelper.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612280878,sidebar_label:"FunctionHelper",sidebar:"version-4.4/API",previous:{title:"Interface: ForeignConstraintBuilder",permalink:"/docs/api/interfaces/knex.knex.foreignconstraintbuilder"},next:{title:"Interface: GroupBy<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex.groupby"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"now",id:"now",children:[]}]}],b={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-functionhelper"},"Interface: FunctionHelper"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1"}),"Knex"),".FunctionHelper"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"FunctionHelper"))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"now"},"now"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"now"),"(",Object(c.b)("inlineCode",{parentName:"p"},"precision?"),": ",Object(c.b)("em",{parentName:"p"},"number"),"): ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.raw"}),Object(c.b)("em",{parentName:"a"},"Raw")),"<",Object(c.b)("em",{parentName:"p"},"any"),">"),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"precision?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"number"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.raw"}),Object(c.b)("em",{parentName:"a"},"Raw")),"<",Object(c.b)("em",{parentName:"p"},"any"),">"),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2160"))}l.isMDXComponent=!0}}]);