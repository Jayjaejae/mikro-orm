(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1051:function(e,r,n){"use strict";n.d(r,"a",(function(){return m})),n.d(r,"b",(function(){return O}));var t=n(0),c=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function b(e,r){if(null==e)return{};var n,t,c=function(e,r){if(null==e)return{};var n,t,c={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(c[n]=e[n]);return c}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),u=function(e){var r=c.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},m=function(e){var r=u(e.components);return c.a.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},l=c.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,a=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),m=u(n),l=t,O=m["".concat(a,".").concat(l)]||m[l]||s[l]||o;return n?c.a.createElement(O,i(i({ref:r},p),{},{components:n})):c.a.createElement(O,i({ref:r},p))}));function O(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,a=new Array(o);a[0]=l;var i={};for(var b in r)hasOwnProperty.call(r,b)&&(i[b]=r[b]);i.originalType=e,i.mdxType="string"==typeof e?e:t,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},121:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return b})),n.d(r,"default",(function(){return u}));var t=n(3),c=n(8),o=(n(0),n(1051)),a={id:"core.referencetype",title:"Enumeration: ReferenceType",sidebar_label:"ReferenceType",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/enums/core.referencetype",id:"api/enums/core.referencetype",isDocsHomePage:!1,title:"Enumeration: ReferenceType",description:"Enumeration: ReferenceType",source:"@site/docs/api/enums/core.referencetype.md",slug:"/api/enums/core.referencetype",permalink:"/docs/next/api/enums/core.referencetype",editUrl:null,version:"current",sidebar_label:"ReferenceType",sidebar:"API",previous:{title:"Enumeration: QueryOrderNumeric",permalink:"/docs/next/api/enums/core.queryordernumeric"},next:{title:"Enumeration: QueryType",permalink:"/docs/next/api/enums/knex.querytype"}},b=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"EMBEDDED",id:"embedded",children:[]},{value:"MANY_TO_MANY",id:"many_to_many",children:[]},{value:"MANY_TO_ONE",id:"many_to_one",children:[]},{value:"ONE_TO_MANY",id:"one_to_many",children:[]},{value:"ONE_TO_ONE",id:"one_to_one",children:[]},{value:"SCALAR",id:"scalar",children:[]}]}],p={toc:b};function u(e){var r=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"enumeration-referencetype"},"Enumeration: ReferenceType"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".ReferenceType"),Object(o.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(o.b)("h3",{id:"embedded"},"EMBEDDED"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"EMBEDDED"),': = "embedded"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/57b605c/packages/core/src/enums.ts#L74"},"packages/core/src/enums.ts:74")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"many_to_many"},"MANY","_","TO","_","MANY"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"MANY","_","TO","_","MANY"),': = "m:n"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/57b605c/packages/core/src/enums.ts#L73"},"packages/core/src/enums.ts:73")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"many_to_one"},"MANY","_","TO","_","ONE"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"MANY","_","TO","_","ONE"),': = "m:1"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/57b605c/packages/core/src/enums.ts#L72"},"packages/core/src/enums.ts:72")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"one_to_many"},"ONE","_","TO","_","MANY"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"ONE","_","TO","_","MANY"),': = "1:m"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/57b605c/packages/core/src/enums.ts#L71"},"packages/core/src/enums.ts:71")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"one_to_one"},"ONE","_","TO","_","ONE"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"ONE","_","TO","_","ONE"),': = "1:1"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/57b605c/packages/core/src/enums.ts#L70"},"packages/core/src/enums.ts:70")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"scalar"},"SCALAR"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"SCALAR"),': = "scalar"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/57b605c/packages/core/src/enums.ts#L69"},"packages/core/src/enums.ts:69")))}u.isMDXComponent=!0}}]);