(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{1051:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),l=s(r),u=n,f=l["".concat(a,".").concat(u)]||l[u]||m[u]||c;return r?o.a.createElement(f,i(i({ref:t},b),{},{components:r})):o.a.createElement(f,i({ref:t},b))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var b=2;b<c;b++)a[b]=r[b];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},414:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(8),c=(r(0),r(1051)),a={id:"core.factoryoptions",title:"Interface: FactoryOptions",sidebar_label:"FactoryOptions",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/interfaces/core.factoryoptions",id:"api/interfaces/core.factoryoptions",isDocsHomePage:!1,title:"Interface: FactoryOptions",description:"Interface: FactoryOptions",source:"@site/docs/api/interfaces/core.factoryoptions.md",slug:"/api/interfaces/core.factoryoptions",permalink:"/docs/next/api/interfaces/core.factoryoptions",editUrl:null,version:"current",sidebar_label:"FactoryOptions",sidebar:"API",previous:{title:"Interface: EventSubscriber<T>",permalink:"/docs/next/api/interfaces/core.eventsubscriber"},next:{title:"Interface: FindOneOptions<T, P>",permalink:"/docs/next/api/interfaces/core.findoneoptions"}},p=[{value:"Properties",id:"properties",children:[{value:"convertCustomTypes",id:"convertcustomtypes",children:[]},{value:"initialized",id:"initialized",children:[]},{value:"merge",id:"merge",children:[]},{value:"newEntity",id:"newentity",children:[]},{value:"refresh",id:"refresh",children:[]}]}],b={toc:p};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-factoryoptions"},"Interface: FactoryOptions"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".FactoryOptions"),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"convertcustomtypes"},"convertCustomTypes"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"convertCustomTypes"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/57b605c/packages/core/src/entity/EntityFactory.ts#L12"},"packages/core/src/entity/EntityFactory.ts:12")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"initialized"},"initialized"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"initialized"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/57b605c/packages/core/src/entity/EntityFactory.ts#L8"},"packages/core/src/entity/EntityFactory.ts:8")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"merge"},"merge"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"merge"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/57b605c/packages/core/src/entity/EntityFactory.ts#L10"},"packages/core/src/entity/EntityFactory.ts:10")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"newentity"},"newEntity"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"newEntity"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/57b605c/packages/core/src/entity/EntityFactory.ts#L9"},"packages/core/src/entity/EntityFactory.ts:9")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"refresh"},"refresh"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"refresh"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/57b605c/packages/core/src/entity/EntityFactory.ts#L11"},"packages/core/src/entity/EntityFactory.ts:11")))}s.isMDXComponent=!0}}]);