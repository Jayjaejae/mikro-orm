(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1256:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var b=t(0),a=t.n(b);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);n&&(b=b.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,b)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,b,a=function(e,n){if(null==e)return{};var t,b,a={},r=Object.keys(e);for(b=0;b<r.length;b++)t=r[b],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(b=0;b<r.length;b++)t=r[b],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),o=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=o(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,b=e.mdxType,r=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=o(t),u=b,m=d["".concat(i,".").concat(u)]||d[u]||s[u]||r;return t?a.a.createElement(m,c(c({ref:n},l),{},{components:t})):a.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,b=n&&n.mdxType;if("string"==typeof e||b){var r=t.length,i=new Array(r);i[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:b,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},92:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return o}));var b=t(3),a=t(7),r=(t(0),t(1256)),i={id:"knex.knex-1.mysqlconnectionconfig",title:"Interface: MySqlConnectionConfig",sidebar_label:"MySqlConnectionConfig",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/knex.knex-1.mysqlconnectionconfig",id:"api/interfaces/knex.knex-1.mysqlconnectionconfig",isDocsHomePage:!1,title:"Interface: MySqlConnectionConfig",description:"Interface: MySqlConnectionConfig",source:"@site/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig.md",slug:"/api/interfaces/knex.knex-1.mysqlconnectionconfig",permalink:"/docs/next/api/interfaces/knex.knex-1.mysqlconnectionconfig",editUrl:null,version:"current",sidebar_label:"MySqlConnectionConfig",sidebar:"API",previous:{title:"Interface: MySqlAlterColumnBuilder",permalink:"/docs/next/api/interfaces/knex.knex-1.mysqlaltercolumnbuilder"},next:{title:"Interface: OnConflictQueryBuilder<TRecord, TResult>",permalink:"/docs/next/api/interfaces/knex.knex-1.onconflictquerybuilder"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"bigNumberStrings",id:"bignumberstrings",children:[]},{value:"charset",id:"charset",children:[]},{value:"connectTimeout",id:"connecttimeout",children:[]},{value:"database",id:"database",children:[]},{value:"dateStrings",id:"datestrings",children:[]},{value:"debug",id:"debug",children:[]},{value:"decimalNumbers",id:"decimalnumbers",children:[]},{value:"flags",id:"flags",children:[]},{value:"host",id:"host",children:[]},{value:"insecureAuth",id:"insecureauth",children:[]},{value:"localAddress",id:"localaddress",children:[]},{value:"multipleStatements",id:"multiplestatements",children:[]},{value:"password",id:"password",children:[]},{value:"port",id:"port",children:[]},{value:"queryFormat",id:"queryformat",children:[]},{value:"socketPath",id:"socketpath",children:[]},{value:"ssl",id:"ssl",children:[]},{value:"stringifyObjects",id:"stringifyobjects",children:[]},{value:"supportBigNumbers",id:"supportbignumbers",children:[]},{value:"timezone",id:"timezone",children:[]},{value:"trace",id:"trace",children:[]},{value:"typeCast",id:"typecast",children:[]},{value:"user",id:"user",children:[]}]},{value:"Methods",id:"methods",children:[{value:"expirationChecker",id:"expirationchecker",children:[]}]}],l={toc:p};function o(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(b.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"interface-mysqlconnectionconfig"},"Interface: MySqlConnectionConfig"),Object(r.b)("p",null,Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/modules/knex"}),"knex"),".",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/modules/knex.knex-1"}),"Knex"),".MySqlConnectionConfig"),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"MySqlConnectionConfig")),Object(r.b)("p",{parentName:"li"},"\u21b3 ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.knex-1.mysql2connectionconfig"}),Object(r.b)("em",{parentName:"a"},"MySql2ConnectionConfig"))))),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"bignumberstrings"},"bigNumberStrings"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"bigNumberStrings"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2000"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"charset"},"charset"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"charset"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1992"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"connecttimeout"},"connectTimeout"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"connectTimeout"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1994"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"database"},"database"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"database"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1991"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"datestrings"},"dateStrings"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"dateStrings"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2001"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"debug"},"debug"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"debug"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2002"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"decimalnumbers"},"decimalNumbers"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"decimalNumbers"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2007"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"flags"},"flags"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"flags"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2005"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"host"},"host"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"host"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1985"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"insecureauth"},"insecureAuth"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"insecureAuth"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1996"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"localaddress"},"localAddress"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"localAddress"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1987"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"multiplestatements"},"multipleStatements"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"multipleStatements"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2004"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"password"},"password"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"password"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1990"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"port"},"port"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"port"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1986"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"queryformat"},"queryFormat"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"queryFormat"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(r.b)("inlineCode",{parentName:"p"},"query"),": ",Object(r.b)("em",{parentName:"p"},"string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"values"),": ",Object(r.b)("em",{parentName:"p"},"any"),") => ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1998"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"socketpath"},"socketPath"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"socketPath"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1988"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"ssl"},"ssl"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"ssl"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")," ","|"," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.knex-1.mariasslconfiguration"}),Object(r.b)("em",{parentName:"a"},"MariaSslConfiguration"))),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2006"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"stringifyobjects"},"stringifyObjects"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"stringifyObjects"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1995"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"supportbignumbers"},"supportBigNumbers"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"supportBigNumbers"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1999"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"timezone"},"timezone"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"timezone"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1993"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"trace"},"trace"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"trace"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2003"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"typecast"},"typeCast"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"typeCast"),": ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1997"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"user"},"user"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"user"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1989"),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"expirationchecker"},"expirationChecker"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional"),Object(r.b)("strong",{parentName:"p"},"expirationChecker"),"(): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2008"))}o.isMDXComponent=!0}}]);