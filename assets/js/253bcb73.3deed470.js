(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{1256:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},224:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(1256)),i={title:"Usage with JavaScript",sidebar_label:"Usage with Vanilla JS"},c={unversionedId:"usage-with-js",id:"usage-with-js",isDocsHomePage:!1,title:"Usage with JavaScript",description:"Since MikroORM 3.2, we can use EntitySchema helper to define own entities without",source:"@site/docs/usage-with-js.md",slug:"/usage-with-js",permalink:"/docs/next/usage-with-js",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/usage-with-js.md",version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612280878,sidebar_label:"Usage with Vanilla JS",sidebar:"docs",previous:{title:"Using MikroORM with NestJS framework",permalink:"/docs/next/usage-with-nestjs"},next:{title:"Using Entity Constructors",permalink:"/docs/next/entity-constructors"}},s=[],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Since MikroORM 3.2, we can use ",Object(o.b)("inlineCode",{parentName:"p"},"EntitySchema")," helper to define own entities without\ndecorators, which works also for Vanilla JavaScript."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Read more about ",Object(o.b)("inlineCode",{parentName:"p"},"EntitySchema")," in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/entity-schema"}),"this section"),".")),Object(o.b)("p",null,"Here is an example of such entity:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="./entities/Author.js"',title:'"./entities/Author.js"'}),"const { Collection, EntitySchema } = require('@mikro-orm/core');\nconst { Book } = require('./Book');\nconst { BaseEntity } = require('./BaseEntity');\n\n/**\n * @property {number} id\n * @property {Date} createdAt\n * @property {Date} updatedAt\n * @property {string} name\n * @property {string} email\n * @property {number} age\n * @property {boolean} termsAccepted\n * @property {string[]} identities\n * @property {Date} born\n * @property {Collection<Book>} books\n * @property {Book} favouriteBook\n * @property {number} version\n * @property {string} versionAsString\n */\nclass Author extends BaseEntity {\n\n  /**\n   * @param {string} name\n   * @param {string} email\n   */\n  constructor(name, email) {\n    super();\n    this.name = name;\n    this.email = email;\n    this.books = new Collection(this);\n    this.createdAt = new Date();\n    this.updatedAt = new Date();\n    this.termsAccepted = false;\n  }\n\n}\n\nexport const schema = new EntitySchema({\n  class: Author,\n  properties: {\n    name: { type: 'string' },\n    email: { type: 'string', unique: true },\n    age: { type: 'number', nullable: true },\n    termsAccepted: { type: 'boolean', default: 0, onCreate: () => false },\n    identities: { type: 'string[]', nullable: true },\n    born: { type: DateType, nullable: true, length: 3 },\n    books: { reference: '1:m', entity: () => 'Book', mappedBy: book => book.author },\n    favouriteBook: { reference: 'm:1', type: 'Book' },\n    version: { type: 'number', persist: false },\n  },\n});\n\nmodule.exports.Author = Author;\nmodule.exports.entity = Author;\nmodule.exports.schema = schema;\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Do not forget to provide ",Object(o.b)("inlineCode",{parentName:"p"},"name")," and ",Object(o.b)("inlineCode",{parentName:"p"},"path")," schema parameters as well as ",Object(o.b)("inlineCode",{parentName:"p"},"entity"),"\nand ",Object(o.b)("inlineCode",{parentName:"p"},"schema")," exports.")),Object(o.b)("p",null,"Reference parameter can be one of (where ",Object(o.b)("inlineCode",{parentName:"p"},"SCALAR")," is the default one):"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export enum ReferenceType {\n  SCALAR = 'scalar',\n  ONE_TO_ONE = '1:1',\n  MANY_TO_ONE = 'm:1',\n  ONE_TO_MANY = '1:m',\n  MANY_TO_MANY = 'm:n',\n  EMBEDDED = 'embedded',\n}\n")),Object(o.b)("p",null,"You can register your entities as usual."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const orm = await MikroORM.init({\n  entities: [Author, Book, BookTag, BaseEntity],\n  dbName: 'my-db-name',\n  type: 'mysql',\n});\n")),Object(o.b)("p",null,"For more examples of plain JavaScript entity definitions take a look\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/express-js-example-app"}),"Express JavaScript example"),". "))}l.isMDXComponent=!0}}]);