"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[459],{459:function(t,r,e){e.r(r),e.d(r,{default:function(){return l}});var n=e(861),a=e(439),u=e(757),s=e.n(u),c=e(791),i=e(689),o=e(928),p=e(106),f={list:"Cast_list__oOD41"},v=e(184),l=function(){var t=(0,c.useState)([]),r=(0,a.Z)(t,2),e=r[0],u=r[1],l=(0,c.useState)(!1),d=(0,a.Z)(l,2),h=d[0],m=d[1],x=(0,c.useState)(null),g=(0,a.Z)(x,2),w=g[0],b=g[1],_=(0,i.UO)().movieId;(0,c.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){var r,e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,(0,o.M1)(_);case 4:0===(r=t.sent).length&&alert("Sorry, casts not found"),u(r),t.next=14;break;case 9:return t.prev=9,t.t0=t.catch(0),e=t.t0.response,b(e.data.message),t.abrupt("return",alert("Sorry,".concat(w)));case 14:return t.prev=14,m(!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,9,14,17]])})));return function(){return t.apply(this,arguments)}}();t()}),[_,w]);var k=e.map((function(t){var r=t.original_name,e=t.profile_path,n=t.id;return(0,v.jsxs)("li",{children:[(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(e),alt:r,loading:"lazy",className:f.img,width:"100px",height:"150px"}),(0,v.jsx)("h3",{children:r})]},n)}));return(0,v.jsxs)(v.Fragment,{children:[h&&(0,v.jsx)(p.Z,{}),e&&(0,v.jsx)("div",{children:(0,v.jsx)("ul",{className:f.list,children:k})})]})}},928:function(t,r,e){e.d(r,{Jh:function(){return f},M1:function(){return p},TP:function(){return i},Zf:function(){return o},x1:function(){return c}});var n=e(861),a=e(757),u=e.n(a),s=e(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"7f6b82d6e6301d2c74dd8fbee3405c81"}}),c=function(){var t=(0,n.Z)(u().mark((function t(){var r,e,n,a=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:1,t.next=3,s.get("/trending/movie/day?",{params:{page:r}});case 3:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(r,"?"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/search/movie?",{params:{query:r}});case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(r,"/credits?"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.cast);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(r,"//reviews?"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=459.f24a6545.chunk.js.map