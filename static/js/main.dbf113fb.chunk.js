(this.webpackJsonprobros=this.webpackJsonprobros||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),o=n(4),s=n.n(o),a=n(7),i=n(3),h=n(16),u=n(17),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),o(e),s(e)}))},l=(n(28),n(5)),d=n(6),j=n(9),O=n(8),p=function(e){var t=e.name,n=e.email,c=e.id;return Object(r.jsxs)("div",{className:"bg-green dib br3 pa1 ma2 grow bw2 shadow-5 tc",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(c,"?set=set3"),alt:""}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"ttu white f4",children:t}),Object(r.jsx)("p",{className:"ttu white i",children:n})]})]})},f=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e,n){return Object(r.jsx)(p,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},g=function(e){var t=e.searchChange;return Object(r.jsx)("div",{children:Object(r.jsx)("input",{className:"pa3 mb3 br4 tc ba b--green bg-lightest-blue w5",placeholder:"Search RoBros",type:"search",onChange:t})})},v=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"1px solid white",height:"500px",backgroundColor:"white"},children:e.children})},m=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Ooops. Something went wrong."}):this.props.children}}]),n}(c.Component),x="CHANGE_SEARCHFIELD",y="REQUEST_ROBOTS_PENDING",R="REQUEST_ROBOTS_SUCCESS ",C="REQUEST_ROBOTS_FAILED",w=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchfield,n=e.onSearchChange,c=e.robots,o=e.isPending,s=c.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?Object(r.jsx)("h1",{className:"tc",children:"LOADING"}):Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:"RoBros"}),Object(r.jsx)(g,{searchChange:n}),Object(r.jsx)(v,{children:Object(r.jsx)(m,{children:Object(r.jsx)(f,{robots:s})})})]})}}]),n}(c.Component),E=Object(a.b)((function(e){return{searchfield:e.searchRobots.searchfield,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:x,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:y}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:R,payload:t})})).catch((function(t){return e({type:C,payload:t})}))}))}}}))(w),S=(n(29),n(30),n(2)),N={searchfield:""},P={robots:[]},L=Object(u.createLogger)(),T=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case x:return Object(S.a)(Object(S.a)({},e),{},{searchfield:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case y:return Object(S.a)(Object(S.a)({},e),{},{isPending:!0});case R:return Object(S.a)(Object(S.a)({},e),{},{robots:t.payload,isPending:!1});case C:return Object(S.a)(Object(S.a)({},e),{},{error:t.payload,isPending:!1});default:return e}}}),k=Object(i.d)(T,Object(i.a)(h.a,L));s.a.render(Object(r.jsx)(a.a,{store:k,children:Object(r.jsx)(E,{})}),document.getElementById("root")),b()}},[[31,1,2]]]);
//# sourceMappingURL=main.dbf113fb.chunk.js.map