(this.webpackJsonprobros=this.webpackJsonprobros||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(0),c=n(8),i=n.n(c),a=n(9),s=n(7),u=n(16),l=n(17),h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),o(e),r(e),c(e),i(e)}))},d=(n(28),n(3)),b=n(4),j=n(6),f=n(5),g=function(e){var t=e.name,n=e.email,r=e.id;return Object(o.jsxs)("div",{className:"bg-green dib br3 pa4 ma2 grow bw2 shadow-5 tc",children:[Object(o.jsx)("img",{src:"https://robohash.org/".concat(r,"?size=200x200&set=set3"),alt:"RoBro"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"ttu white f4",children:t}),Object(o.jsx)("p",{className:"ttu white i",children:n})]})]})},O=function(e){var t=e.robots;return console.log("CardList"),Object(o.jsx)("div",{children:t.map((function(e,n){return Object(o.jsx)(g,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},p=function(e){var t=e.searchChange;return console.log("SearchBox"),Object(o.jsx)("div",{children:Object(o.jsx)("input",{"aria-label":"Search Robros",className:"pa3 mb3 br4 tc ba b--green bg-lightest-blue w5",placeholder:"Search RoBros",type:"search",onChange:t})})},v=function(e){return Object(o.jsx)("div",{style:{overflowY:"scroll",border:"1px solid white",height:"500px",backgroundColor:"white"},children:e.children})},w=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(e){var o;return Object(d.a)(this,n),(o=t.call(this,e)).state={hasError:!1},o}return Object(b.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(o.jsx)("h1",{children:"Ooops. Something went wrong."}):this.props.children}}]),n}(r.Component),m="CHANGE_SEARCHFIELD",x="REQUEST_ROBOTS_PENDING",y="REQUEST_ROBOTS_SUCCESS ",C="REQUEST_ROBOTS_FAILED",R=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return console.log("Header"),Object(o.jsx)("div",{children:Object(o.jsx)("h1",{className:"f1",children:"RoBros"})})}}]),n}(r.Component),E=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchfield,n=e.onSearchChange,r=e.robots,c=e.isPending,i=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return c?Object(o.jsx)("h1",{className:"tc",children:"LOADING"}):Object(o.jsxs)("div",{className:"tc",children:[Object(o.jsx)(R,{}),Object(o.jsx)(p,{searchChange:n}),Object(o.jsx)(v,{children:Object(o.jsx)(w,{children:Object(o.jsx)(O,{robots:i})})})]})}}]),n}(r.Component),S=Object(a.b)((function(e){return{searchfield:e.searchRobots.searchfield,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:m,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:x}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:y,payload:t})})).catch((function(t){return e({type:C,payload:t})}))}))}}}))(E),k=(n(29),n(30),n(2)),N={searchfield:""},L={robots:[]},B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var T=Object(l.createLogger)(),D=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case m:return Object(k.a)(Object(k.a)({},e),{},{searchfield:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case x:return Object(k.a)(Object(k.a)({},e),{},{isPending:!0});case y:return Object(k.a)(Object(k.a)({},e),{},{robots:t.payload,isPending:!1});case C:return Object(k.a)(Object(k.a)({},e),{},{error:t.payload,isPending:!1});default:return e}}}),_=Object(s.d)(D,Object(s.a)(u.a,T));i.a.render(Object(o.jsx)(a.a,{store:_,children:Object(o.jsx)(S,{})}),document.getElementById("root")),h(),function(){if("serviceWorker"in navigator){if(new URL("/robros",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robros","/service-worker.js");B?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):P(e)}))}}()}},[[31,1,2]]]);
//# sourceMappingURL=main.661f17ac.chunk.js.map