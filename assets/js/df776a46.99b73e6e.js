(window.webpackJsonp=window.webpackJsonp||[]).push([[840],{1051:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},913:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(8),a=(n(0),n(1051)),i={title:"Using MikroORM with NestJS framework",sidebar_label:"Usage with NestJS"},s={unversionedId:"usage-with-nestjs",id:"usage-with-nestjs",isDocsHomePage:!1,title:"Using MikroORM with NestJS framework",description:"Installation",source:"@site/docs/usage-with-nestjs.md",slug:"/usage-with-nestjs",permalink:"/docs/next/usage-with-nestjs",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/usage-with-nestjs.md",version:"current",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1613718075,sidebar_label:"Usage with NestJS",sidebar:"docs",previous:{title:"Quick Start",permalink:"/docs/next/quick-start"},next:{title:"Usage with JavaScript",permalink:"/docs/next/usage-with-js"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Auto entities automatically",id:"auto-entities-automatically",children:[]},{value:"Request scoped handlers in queues",id:"request-scoped-handlers-in-queues",children:[]},{value:"Using <code>AsyncLocalStorage</code> for request context",id:"using-asynclocalstorage-for-request-context",children:[]},{value:"Using custom repositories",id:"using-custom-repositories",children:[]},{value:"Testing",id:"testing",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"Easiest way to integrate MikroORM to Nest is via ",Object(a.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/nestjs"},Object(a.b)("inlineCode",{parentName:"a"},"@mikro-orm/nestjs")," module"),".\nSimply install it next to Nest, MikroORM and underlying driver: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ yarn add @mikro-orm/core @mikro-orm/nestjs @mikro-orm/mongodb     # for mongo\n$ yarn add @mikro-orm/core @mikro-orm/nestjs @mikro-orm/mysql       # for mysql/mariadb\n$ yarn add @mikro-orm/core @mikro-orm/nestjs @mikro-orm/mariadb     # for mysql/mariadb\n$ yarn add @mikro-orm/core @mikro-orm/nestjs @mikro-orm/postgresql  # for postgresql\n$ yarn add @mikro-orm/core @mikro-orm/nestjs @mikro-orm/sqlite      # for sqlite\n")),Object(a.b)("p",null,"or"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ npm i -s @mikro-orm/core @mikro-orm/nestjs @mikro-orm/mongodb     # for mongo\n$ npm i -s @mikro-orm/core @mikro-orm/nestjs @mikro-orm/mysql       # for mysql/mariadb\n$ npm i -s @mikro-orm/core @mikro-orm/nestjs @mikro-orm/mariadb     # for mysql/mariadb\n$ npm i -s @mikro-orm/core @mikro-orm/nestjs @mikro-orm/postgresql  # for postgresql\n$ npm i -s @mikro-orm/core @mikro-orm/nestjs @mikro-orm/sqlite      # for sqlite\n")),Object(a.b)("p",null,"Once the installation process is completed, we can import the ",Object(a.b)("inlineCode",{parentName:"p"},"MikroOrmModule")," into the root ",Object(a.b)("inlineCode",{parentName:"p"},"AppModule"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"@Module({\n  imports: [\n    MikroOrmModule.forRoot({\n      entities: ['./dist/entities'],\n      entitiesTs: ['./src/entities'],\n      dbName: 'my-db-name.sqlite3',\n      type: 'sqlite',\n    }),\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"forRoot()")," method accepts the same configuration object as ",Object(a.b)("inlineCode",{parentName:"p"},"init()")," from the MikroORM package.\nYou can also omit the parameter to use the CLI config."),Object(a.b)("p",null,"Afterward, the ",Object(a.b)("inlineCode",{parentName:"p"},"EntityManager")," will be available to inject across entire project (without importing any module elsewhere)."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"@Injectable()\nexport class MyService {\n\n  constructor(private readonly orm: MikroORM,\n              private readonly em: EntityManager) { }\n\n}\n")),Object(a.b)("p",null,"To define which repositories shall be registered in the current scope you can use the ",Object(a.b)("inlineCode",{parentName:"p"},"forFeature()")," method. For example, in this way:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You should ",Object(a.b)("strong",{parentName:"p"},"not")," register your base entities via ",Object(a.b)("inlineCode",{parentName:"p"},"forFeature()"),", as there are no\nrepositories for those. On the other hand, base entities need to be part of the list\nin ",Object(a.b)("inlineCode",{parentName:"p"},"forRoot()")," (or in the ORM config in general).")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"// photo.module.ts\n\n@Module({\n  imports: [MikroOrmModule.forFeature([Photo])],\n  providers: [PhotoService],\n  controllers: [PhotoController],\n})\nexport class PhotoModule {}\n")),Object(a.b)("p",null,"and import it into the root ",Object(a.b)("inlineCode",{parentName:"p"},"AppModule"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"// app.module.ts\n@Module({\n  imports: [MikroOrmModule.forRoot(...), PhotoModule],\n})\nexport class AppModule {}\n")),Object(a.b)("p",null,"In this way we can inject the ",Object(a.b)("inlineCode",{parentName:"p"},"PhotoRepository")," to the ",Object(a.b)("inlineCode",{parentName:"p"},"PhotoService")," using the ",Object(a.b)("inlineCode",{parentName:"p"},"@InjectRepository()")," decorator:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"@Injectable()\nexport class PhotoService {\n  constructor(\n    @InjectRepository(Photo)\n    private readonly photoRepository: EntityRepository<Photo>\n  ) {}\n\n  // ...\n\n}\n")),Object(a.b)("h2",{id:"auto-entities-automatically"},"Auto entities automatically"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("inlineCode",{parentName:"p"},"autoLoadEntities")," option was added in v4.1.0 ")),Object(a.b)("p",null,"Manually adding entities to the entities array of the connection options can be\ntedious. In addition, referencing entities from the root module breaks application\ndomain boundaries and causes leaking implementation details to other parts of the\napplication. To solve this issue, static glob paths can be used."),Object(a.b)("p",null,"Note, however, that glob paths are not supported by webpack, so if you are building\nyour application within a monorepo, you won't be able to use them. To address this\nissue, an alternative solution is provided. To automatically load entities, set the\n",Object(a.b)("inlineCode",{parentName:"p"},"autoLoadEntities")," property of the configuration object (passed into the ",Object(a.b)("inlineCode",{parentName:"p"},"forRoot()"),"\nmethod) to ",Object(a.b)("inlineCode",{parentName:"p"},"true"),", as shown below: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"@Module({\n  imports: [\n    MikroOrmModule.forRoot({\n      ...\n      autoLoadEntities: true,\n    }),\n  ],\n})\nexport class AppModule {}\n")),Object(a.b)("p",null,"With that option specified, every entity registered through the ",Object(a.b)("inlineCode",{parentName:"p"},"forFeature()"),"\nmethod will be automatically added to the entities array of the configuration\nobject."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note that entities that aren't registered through the ",Object(a.b)("inlineCode",{parentName:"p"},"forFeature()")," method, but\nare only referenced from the entity (via a relationship), won't be included by\nway of the ",Object(a.b)("inlineCode",{parentName:"p"},"autoLoadEntities")," setting.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Using ",Object(a.b)("inlineCode",{parentName:"p"},"autoLoadEntities")," also has no effect on the MikroORM CLI - for that we\nstill need CLI config with the full list of entities. On the other hand, we can\nuse globs there, as the CLI won't go thru webpack.")),Object(a.b)("h2",{id:"request-scoped-handlers-in-queues"},"Request scoped handlers in queues"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("inlineCode",{parentName:"p"},"@UseRequestContext()")," decorator was added in v4.1.0 ")),Object(a.b)("p",null,"As mentioned in the docs, we need a clean state for each request. That is handled\nautomatically thanks to the ",Object(a.b)("inlineCode",{parentName:"p"},"RequestContext")," helper registered via middleware. "),Object(a.b)("p",null,"But middlewares are executed only for regular HTTP request handles, what if we need\na request scoped method outside of that? One example of that is queue handlers or\nscheduled tasks. "),Object(a.b)("p",null,"We can use the ",Object(a.b)("inlineCode",{parentName:"p"},"@UseRequestContext()")," decorator. It requires you to first inject the\n",Object(a.b)("inlineCode",{parentName:"p"},"MikroORM")," instance to current context, it will be then used to create the context\nfor you. Under the hood, the decorator will register new request context for your\nmethod and execute it inside the context. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"@Injectable()\nexport class MyService {\n\n  constructor(private readonly orm: MikroORM) { }\n\n  @UseRequestContext()\n  async doSomething() {\n    // this will be executed in a separate context\n  }\n\n}\n")),Object(a.b)("h2",{id:"using-asynclocalstorage-for-request-context"},"Using ",Object(a.b)("inlineCode",{parentName:"h2"},"AsyncLocalStorage")," for request context"),Object(a.b)("p",null,"By default, ",Object(a.b)("inlineCode",{parentName:"p"},"domain")," api use used in the ",Object(a.b)("inlineCode",{parentName:"p"},"RequestContext")," helper. Since ",Object(a.b)("inlineCode",{parentName:"p"},"@mikro-orm/core@4.0.3"),",\nyou can use the new ",Object(a.b)("inlineCode",{parentName:"p"},"AsyncLocalStorage")," too, if you are on up to date node version:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"// create new (global) storage instance\nconst storage = new AsyncLocalStorage<EntityManager>();\n\n@Module({\n  imports: [\n    MikroOrmModule.forRoot({\n      // ...\n      registerRequestContext: false, // disable automatatic middleware\n      context: () => storage.getStore(), // use our AsyncLocalStorage instance\n    }),\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}\n\n// register the request context middleware\nconst app = await NestFactory.create(AppModule, { ... });\n\napp.use((req, res, next) => {\n  storage.run(orm.em.fork(true, true), next);\n});\n")),Object(a.b)("h2",{id:"using-custom-repositories"},"Using custom repositories"),Object(a.b)("p",null,"When using custom repositories, we can get around the need for ",Object(a.b)("inlineCode",{parentName:"p"},"@InjectRepository()"),"\ndecorator by naming our repositories the same way as ",Object(a.b)("inlineCode",{parentName:"p"},"getRepositoryToken()")," method do:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"export const getRepositoryToken = <T> (entity: EntityName<T>) => `${Utils.className(entity)}Repository`;\n")),Object(a.b)("p",null,"In other words, as long as we name the repository same was as the entity is called,\nappending ",Object(a.b)("inlineCode",{parentName:"p"},"Repository")," suffix, the repository will be registered automatically in\nthe Nest.js DI container."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"**./author.entity.ts**")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"@Entity()\nexport class Author {\n\n  // to allow inference in `em.getRepository()`\n  [EntityRepositoryType]?: AuthorRepository;\n\n}\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"**./author.repository.ts**")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"@Repository(Author)\nexport class AuthorRepository extends EntityRepository<Author> {\n\n  // your custom methods...\n\n}\n")),Object(a.b)("p",null,"As the custom repository name is the same as what ",Object(a.b)("inlineCode",{parentName:"p"},"getRepositoryToken()")," would\nreturn, we do not need the ",Object(a.b)("inlineCode",{parentName:"p"},"@InjectRepository()")," decorator anymore:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"@Injectable()\nexport class MyService {\n\n  constructor(private readonly repo: AuthorRepository) { }\n\n}\n")),Object(a.b)("h2",{id:"testing"},"Testing"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@mikro-orm/nestjs")," package exposes ",Object(a.b)("inlineCode",{parentName:"p"},"getRepositoryToken()")," function that returns prepared token based on a given entity to allow mocking the repository."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"@Module({\n  providers: [\n    PhotoService,\n    {\n      provide: getRepositoryToken(Photo),\n      useValue: mockedRepository,\n    },\n  ],\n})\nexport class PhotoModule {}\n")))}p.isMDXComponent=!0}}]);