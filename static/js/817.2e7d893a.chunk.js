"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[817],{5817:function(e,r,t){t.r(r),t.d(r,{default:function(){return b}});var n=t(885),a=t(2791),s=t(501),i=t(6871),c=t(2007),u=t.n(c),o=t(5617),p="MovieDetails_wrapper__itFj7",l="MovieDetails_descr__nRxsA",v="MovieDetails_img__RKWM6",d="MovieDetails_score__a4vnJ",h="MovieDetails_descrText__HJ2o3",f="MovieDetails_btnBack__eTFZk",_=t(184),m=(0,a.lazy)((function(){return t.e(333).then(t.bind(t,9333))})),g=(0,a.lazy)((function(){return t.e(807).then(t.bind(t,7807))})),x=function(){var e=(0,a.useState)(""),r=(0,n.Z)(e,2),t=r[0],c=r[1],u=(0,i.UO)().movId,x=(0,i.s0)();return(0,a.useEffect)((function(){(0,o.vJ)(u).then(c)}),[u]),(0,_.jsx)("div",{className:p,children:t&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("img",{className:v,src:"https://image.tmdb.org/t/p/w300/".concat(t.poster_path),alt:t.original_title}),(0,_.jsxs)("div",{className:l,children:[(0,_.jsx)("button",{className:f,onClick:function(){return x(-1)},children:"Go Back"}),(0,_.jsxs)("h2",{children:[t.original_title," / Release date: ",t.release_date]}),(0,_.jsxs)("p",{className:d,children:["Use score: ",10*t.vote_average]}),(0,_.jsx)("p",{className:h,children:"Overwiev:"}),(0,_.jsx)("p",{className:h,children:t.overview}),(0,_.jsxs)("p",{className:h,children:["Genres: ",t.tagline]}),!t.tagline&&(0,_.jsx)("p",{children:"NO INFO"}),(0,_.jsx)("hr",{}),(0,_.jsxs)("ul",{children:[(0,_.jsx)("li",{children:(0,_.jsx)(s.rU,{to:"cast",children:"Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(s.rU,{to:"reviews",children:"Review"})})]}),(0,_.jsx)("hr",{}),(0,_.jsx)(a.Suspense,{fallback:(0,_.jsx)("p",{children:"Please wait....loading..."}),children:(0,_.jsxs)(i.Z5,{children:[(0,_.jsx)(i.AW,{path:"cast",element:(0,_.jsx)(m,{})}),(0,_.jsx)(i.AW,{path:"reviews",element:(0,_.jsx)(g,{})})]})})]})]})})};x.proptype={id:u().number.isRequired,poster_path:u().string.isRequired,vote_average:u().number.isRequired,release_date:u().string.isRequired,overview:u().string.isRequired,tagline:u().string.isRequired};var b=x},5617:function(e,r,t){t.d(r,{Ai:function(){return f},Bt:function(){return h},HO:function(){return l},vJ:function(){return v},y:function(){return d}});var n=t(5861),a=t(7757),s=t.n(a),i=t(4569),c=t.n(i),u=t(2007),o=t.n(u);c().defaults.baseURL="https://api.themoviedb.org/3/";var p="36a867fb0821ee549130a5bcc22653fa",l=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().get("/trending/movie/day?api_key=".concat(p));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();l.proptype={API_KEY:o().string.isRequired};var v=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().get("/movie/".concat(r,"?api_key=").concat(p));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}();v.proptype={API_KEY:o().string.isRequired,movId:o().number.isRequired};var d=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().get("/movie/".concat(r,"/credits?api_key=").concat(p));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}();d.proptype={API_KEY:o().string.isRequired,movId:o().number.isRequired};var h=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().get("/movie/".concat(r,"/reviews?api_key=").concat(p));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}();h.proptype={API_KEY:o().string.isRequired,movId:o().number.isRequired};var f=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().get("/search/movie?query=".concat(r,"&api_key=").concat(p));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}();f.proptype={API_KEY:o().string.isRequired,query:o().string.isRequired}}}]);
//# sourceMappingURL=817.2e7d893a.chunk.js.map