(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1051:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),m=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=m(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(r),d=n,b=p["".concat(a,".").concat(d)]||p[d]||u[d]||i;return r?o.a.createElement(b,s(s({ref:t},c),{},{components:r})):o.a.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},133:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return m}));var n=r(3),o=r(8),i=(r(0),r(1051)),a={title:"Using MikroORM with NestJS framework",sidebar_label:"Usage with NestJS"},s={unversionedId:"usage-with-nestjs",id:"version-2.7/usage-with-nestjs",isDocsHomePage:!1,title:"Using MikroORM with NestJS framework",description:"Installation",source:"@site/versioned_docs/version-2.7/usage-with-nestjs.md",slug:"/usage-with-nestjs",permalink:"/docs/2.7/usage-with-nestjs",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/usage-with-nestjs.md",version:"2.7",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1613718075,sidebar_label:"Usage with NestJS",sidebar:"version-2.7/docs",previous:{title:"Usage with MongoDB",permalink:"/docs/2.7/usage-with-mongo"},next:{title:"Usage with JavaScript",permalink:"/docs/2.7/usage-with-js"}},l=[{value:"Installation",id:"installation",children:[]}],c={toc:l};function m(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Easiest way to integrate MikroORM to Nest is via ",Object(i.b)("a",{parentName:"p",href:"https://github.com/dario1985/nestjs-mikro-orm"},Object(i.b)("inlineCode",{parentName:"a"},"nestjs-mikro-orm")," module"),".\nSimply install it next to Nest, MikroORM and underlying driver: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ yarn add mikro-orm nestjs-mikro-orm mongodb # for mongo\n$ yarn add mikro-orm nestjs-mikro-orm mysql2  # for mysql\n$ yarn add mikro-orm nestjs-mikro-orm pg      # for postgre\n$ yarn add mikro-orm nestjs-mikro-orm sqlite  # for sqlite\n")),Object(i.b)("p",null,"or"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ npm i -s mikro-orm nestjs-mikro-orm mongodb # for mongo\n$ npm i -s mikro-orm nestjs-mikro-orm mysql2  # for mysql\n$ npm i -s mikro-orm nestjs-mikro-orm pg      # for postgre\n$ npm i -s mikro-orm nestjs-mikro-orm sqlite  # for sqlite\n")),Object(i.b)("p",null,"Then import the ",Object(i.b)("inlineCode",{parentName:"p"},"MikroOrmModule")," in your top level module (usually called ",Object(i.b)("inlineCode",{parentName:"p"},"AppModule"),") via\n",Object(i.b)("inlineCode",{parentName:"p"},"forRoot()"),", which will register ",Object(i.b)("inlineCode",{parentName:"p"},"MikroORM")," and ",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager")," services. It will also\ncreate the request context for you automatically."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Module({\n  imports: [\n    MikroOrmModule.forRoot({\n      entitiesDirs: ['dist/entities'],\n      entitiesDirsTs: ['src/entities'],\n      dbName: 'my-db-name.sqlite3',\n      type: 'sqlite',\n      autoFlush: false, // read more here: https://mikro-orm.io/unit-of-work/\n    }),\n    // ... your feature modules\n  ],\n})\nexport class AppModule {}\n")),Object(i.b)("p",null,"Then use ",Object(i.b)("inlineCode",{parentName:"p"},"forFeature()")," to register entity repositories at feature module level:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Module({\n  imports: [MikroOrmModule.forFeature([Photo])],\n  providers: [PhotoService],\n  controllers: [PhotoController],\n})\nexport class PhotoModule {}\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Don't forget to import the feature module in your top level module.")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/2.7/index#table-of-contents"},"\u2190"," Back to table of contents")))}m.isMDXComponent=!0}}]);