(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),O=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=O(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=O(a),m=n,u=d["".concat(c,".").concat(m)]||d[m]||j[m]||b;return a?r.a.createElement(u,l(l({ref:t},i),{},{components:a})):r.a.createElement(u,l({ref:t},i))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<b;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},226:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return O}));var n=a(3),r=a(7),b=(a(0),a(1256)),c={id:"knex.knex-1.rawbuilder",title:"Interface: RawBuilder<TRecord, TResult>",sidebar_label:"RawBuilder",custom_edit_url:null,hide_title:!0},l={unversionedId:"api/interfaces/knex.knex-1.rawbuilder",id:"api/interfaces/knex.knex-1.rawbuilder",isDocsHomePage:!1,title:"Interface: RawBuilder<TRecord, TResult>",description:"Interface: RawBuilder",source:"@site/docs/api/interfaces/knex.knex-1.rawbuilder.md",slug:"/api/interfaces/knex.knex-1.rawbuilder",permalink:"/docs/next/api/interfaces/knex.knex-1.rawbuilder",editUrl:null,version:"current",sidebar_label:"RawBuilder",sidebar:"API",previous:{title:"Interface: Raw<TResult>",permalink:"/docs/next/api/interfaces/knex.knex-1.raw"},next:{title:"Interface: RawQueryBuilder<TRecord, TResult>",permalink:"/docs/next/api/interfaces/knex.knex-1.rawquerybuilder"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],i={toc:p};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-rawbuildertrecord-tresult"},"Interface: RawBuilder<TRecord, TResult",">"),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/knex"}),"knex"),".",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/knex.knex-1"}),"Knex"),".RawBuilder"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TRecord")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TResult")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"any"))))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"RawBuilder"))),Object(b.b)("h2",{id:"callable"},"Callable"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"RawBuilder"),"<TResult2",">","(",Object(b.b)("inlineCode",{parentName:"p"},"value"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/knex.knex-1#value"}),Object(b.b)("em",{parentName:"a"},"Value")),"): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.knex-1.raw"}),Object(b.b)("em",{parentName:"a"},"Raw")),"<TResult2",">"),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TResult")))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/knex.knex-1#value"}),Object(b.b)("em",{parentName:"a"},"Value")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.knex-1.raw"}),Object(b.b)("em",{parentName:"a"},"Raw")),"<TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1512"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"RawBuilder"),"<TResult2",">","(",Object(b.b)("inlineCode",{parentName:"p"},"sql"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ...",Object(b.b)("inlineCode",{parentName:"p"},"bindings"),": readonly ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/knex.knex-1#rawbinding"}),Object(b.b)("em",{parentName:"a"},"RawBinding")),"[]): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.knex-1.raw"}),Object(b.b)("em",{parentName:"a"},"Raw")),"<TResult2",">"),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TResult")))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"sql")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"...bindings")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"readonly ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/knex.knex-1#rawbinding"}),Object(b.b)("em",{parentName:"a"},"RawBinding")),"[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.knex-1.raw"}),Object(b.b)("em",{parentName:"a"},"Raw")),"<TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1513"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"RawBuilder"),"<TResult2",">","(",Object(b.b)("inlineCode",{parentName:"p"},"sql"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"bindings"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.knex-1.valuedict"}),Object(b.b)("em",{parentName:"a"},"ValueDict"))," ","|"," readonly ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/knex.knex-1#rawbinding"}),Object(b.b)("em",{parentName:"a"},"RawBinding")),"[]): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.knex-1.raw"}),Object(b.b)("em",{parentName:"a"},"Raw")),"<TResult2",">"),Object(b.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TResult")))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"sql")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"bindings")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/knex.knex-1.valuedict"}),Object(b.b)("em",{parentName:"a"},"ValueDict"))," ","|"," readonly ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/knex.knex-1#rawbinding"}),Object(b.b)("em",{parentName:"a"},"RawBinding")),"[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.knex-1.raw"}),Object(b.b)("em",{parentName:"a"},"Raw")),"<TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1514"))}O.isMDXComponent=!0}}]);