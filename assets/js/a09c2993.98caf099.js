(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),o=(n(0),n(130)),i=n(134),c=n(135),l={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},s={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"GraphQL CLI",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/introduction",editUrl:"https://github.com/urigo/graphql-cli/edit/master/website/docs/introduction.md",version:"current",sidebar_label:"Introduction",frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction"},sidebar:"docs",next:{title:"codegen",permalink:"/codegen"}},u=[{value:"Features",id:"features",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Commands",id:"commands",children:[]}],p={toc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/20847995/67651234-85bf1500-f916-11e9-90e5-cb3bd0e6a338.png",alt:"GraphQL CLI"})),Object(o.b)("h3",{id:"features"},"Features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Helpful commands to improve your workflows"),Object(o.b)("li",{parentName:"ul"},"Compatible with editors and IDEs based on ",Object(o.b)("a",{parentName:"li",href:"https://www.graphql-config.com"},"graphql-config")),Object(o.b)("li",{parentName:"ul"},"Powerful plugin system to extend graphql-cli with custom commands")),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("p",null,"Run the following command to install GraphQL CLI globally:"),Object(o.b)(i.a,{defaultValue:"yarn",values:[{label:"yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"yarn global add graphql-cli graphql\n"))),Object(o.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm i -g graphql-cli graphql\n")))),Object(o.b)("h3",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"GraphQL CLI utilizes GraphQL Config for its configuration. You can learn more about GraphQL Config ",Object(o.b)("a",{parentName:"p",href:"https://www.graphql-config.com"},"here"),". The easiest way to get started is to run ",Object(o.b)("inlineCode",{parentName:"p"},"init")," command from your desired workspace:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npx graphql-cli init\n")),Object(o.b)("p",null,"After a series of questions from the command-prompt, the command will use the inputs and selected project templates to generate your configuration file for you. You can also write your own configuration file using an editor of your choice. For example, you could create a ",Object(o.b)("inlineCode",{parentName:"p"},".graphqlrc.yml")," file with the following content:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'schema: "server/src/schema/**/*.graphql"\ndocuments: "client/src/documents/**/*.graphql"\n')),Object(o.b)("p",null,"If you can run the ",Object(o.b)("inlineCode",{parentName:"p"},"init")," command with an existing file like the one above, its contents will be included with inputs you provide."),Object(o.b)("h3",{id:"commands"},"Commands"),Object(o.b)("p",null,"Each command in GraphQL CLI is treated as a plugin. In order to use the command, you have to install it first. Each command's package name follows this pattern: ",Object(o.b)("inlineCode",{parentName:"p"},"@graphql-cli/[COMMAND-NAME]"),". So to install the ",Object(o.b)("inlineCode",{parentName:"p"},"init")," command we used above, we would run"),Object(o.b)(i.a,{defaultValue:"yarn",values:[{label:"yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"yarn global add @graphql-cli/init\n"))),Object(o.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm i -g @graphql-cli/init\n")))),Object(o.b)("p",null,"After installing the command, we can then run it like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"graphql init\n")),Object(o.b)("p",null,"Each command can be configured by updating the ",Object(o.b)("inlineCode",{parentName:"p"},"extensions")," field in your configuration file (",Object(o.b)("inlineCode",{parentName:"p"},".graphqlrc.yml"),"). For example, if we install the ",Object(o.b)("inlineCode",{parentName:"p"},"codegen")," command, we can provide additional options to it like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"schema: \n  ./server/src/schema/**/*.ts:\n    require: ts-node/register\ndocuments: ./client/src/graphql/**/*.ts\nextensions:\n  codegen:\n    generates:\n      ./server/src/generated-types.d.ts:\n        plugins:\n          - typescript\n          - typescript-resolvers\n      ./client/src/generated-types.tsx:\n        plugins:\n          - typescript\n          - typescript-operations\n          - typescript-react-apollo\n")),Object(o.b)("p",null,"You can learn more about each command by navigating to its page from the menu. You can also write your own commands; see ",Object(o.b)("a",{parentName:"p",href:"custom-commands"},"this guide")," for a detailed explanation."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Note: You can execute the command ",Object(o.b)("inlineCode",{parentName:"p"},"graphql discover")," to open a list of GraphQL CLI plugins you can still. This is the only command that is available without installing additional packages."))))}b.isMDXComponent=!0},129:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},132:function(e,t,n){"use strict";var a=n(0),r=n(133);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},133:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},134:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(132),i=n(129),c=n(91),l=n.n(c);var s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,b=e.groupId,d=e.className,m=Object(o.a)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,g=Object(a.useState)(c),v=g[0],O=g[1],y=a.Children.toArray(e.children),j=[];if(null!=b){var w=f[b];null!=w&&w!==v&&p.some((function(e){return e.value===w}))&&O(w)}var N=function(e){var t=e.currentTarget,n=j.indexOf(t),a=p[n].value;O(a),null!=b&&(h(b,a),setTimeout((function(){var e,n,a,r,o,i,c,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,c=i.innerHeight,s=i.innerWidth,n>=0&&o<=s&&r<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((function(){return t.classList.remove(l.a.tabItemActive)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case u:var a=j.indexOf(e.target)+1;n=j[a]||j[0];break;case s:var r=j.indexOf(e.target)-1;n=j[r]||j[j.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:C,onFocus:N,onClick:N},n)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},135:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);