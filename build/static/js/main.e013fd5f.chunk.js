(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{141:function(e,n,t){},202:function(e,n,t){"use strict";t.r(n);var r,a,c,o,i,s,u=t(0),b=t.n(u),j=t(36),l=t.n(j),d=(t(141),t(9)),p=t(6),x=t(27),O=t(4),h=t(5),f=h.a.div(r||(r=Object(O.a)(["\n  padding: 20px;\n  text-align: center;\n"]))),g=(h.a.h2(a||(a=Object(O.a)(["\n  color: #000000;\n"]))),h.a.p(c||(c=Object(O.a)(["\n  color: #000000;\n  margin: 0;\n"]))),h.a.button(o||(o=Object(O.a)(["\n  background-color: #9db17c;\n  color: white;\n  margin-top: 20px;\n  cursor: pointer;\n"]))),h.a.div(i||(i=Object(O.a)(["\n  .wrapper {\n    background-color: #fff;\n    border-radius: 2px;\n    box-shadow: 0px 2px 1px 0px #ddd;\n    box-sizing: border-box;\n    height: 300px;\n    left: 50%;\n    margin: -150px 0 0 -150px;\n    position: absolute;\n    top: 50%;\n    width: 300px;\n  }\n"])))),m=h.a.input(s||(s=Object(O.a)(["\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #777777;\n  color: #000000;\n  box-sizing: border-box;\n  font-size: 18px;\n  padding: 5px 0px;\n  width: 200px;\n  margin-bottom: 15px;\n  &:focus {\n    outline: none;\n  }\n"]))),v=t(221),w=t(14),k=t.n(w),y=t(28),C=t(22),z=t.n(C),L=t(10);function S(){return A.apply(this,arguments)}function A(){return(A=Object(y.a)(k.a.mark((function e(){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.get("/contacts");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}z.a.defaults.baseURL="https://connections-api.herokuapp.com";var N=Object(L.c)("contacts/fetchContacts",Object(y.a)(k.a.mark((function e(){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))),F=Object(L.c)("contacts/addContact",function(){var e=Object(y.a)(k.a.mark((function e(n){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.post("/contacts",n);case 2:return e.next=4,S();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),q=Object(L.c)("contacts/deleteContact",function(){var e=Object(y.a)(k.a.mark((function e(n){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.delete("/contacts/".concat(n));case 2:return e.next=4,S();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),I=function(e){return e.contacts.items},T=function(e){return e.contacts.filter},U=function(e){var n=I(e),t=T(e).toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))},E=t(220),P=t(46),R=t(1);var B,J,D,M=function(){var e=Object(p.b)(),n=Object(p.c)(I),t=Object(u.useState)(""),r=Object(x.a)(t,2),a=r[0],c=r[1],o=Object(u.useState)(""),i=Object(x.a)(o,2),s=i[0],b=i[1];Object(u.useEffect)((function(){e(N())}),[e]);var j=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":c(r);break;case"number":b(r)}},l=function(){c(""),b("")};return Object(R.jsx)(f,{children:Object(R.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r=Object(v.a)();if(n.find((function(e){return e.name.toLowerCase()===a.toLowerCase()})))return alert("".concat(a," already exists in your contacts"));e(F({id:r,name:a,number:s})),P.b.success("".concat(a," successfully added")),l()},children:[Object(R.jsx)(g,{children:Object(R.jsx)(m,{type:"text",name:"name",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:j,value:a,placeholder:"Name *"})}),Object(R.jsx)(g,{children:Object(R.jsx)(m,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:j,value:s,placeholder:"Phone number *"})}),Object(R.jsx)(E.a,{variant:"outlined",color:"primary",type:"submit",children:"Add contact"})]})})},W=h.a.div(B||(B=Object(O.a)(["\n  text-align: center;\n"]))),Z=h.a.ul(J||(J=Object(O.a)(["\n  margin: 0;\n  padding: 0;\n  color: #4b3b40;\n"]))),H=h.a.li(D||(D=Object(O.a)(["\n  display: flex;\n  list-style: none;\n  justify-content: center;\n  align-items: center;\n"]))),V=t(126),$=t.n(V);var G,K,Q=function(){var e=Object(p.b)(),n=Object(p.c)(U);return Object(R.jsx)(W,{children:Object(R.jsx)(Z,{children:n.map((function(n){var t=n.id,r=n.name,a=n.number;return Object(R.jsxs)(H,{children:[r,": ",a,Object(R.jsx)($.a,{color:"primary",onClick:function(){return function(n){e(q(n)),P.b.success("Contact deleted")}(t)},cursor:"pointer",size:"large"})]},t)}))})})},X=h.a.div(G||(G=Object(O.a)(["\n  text-align: center;\n  padding: 20px;\n"]))),Y=h.a.input(K||(K=Object(O.a)(["\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #777777;\n  color: #555;\n  box-sizing: border-box;\n  font-size: 18px;\n  padding: 5px 0px;\n  width: 200px;\n  margin-bottom: 15px;\n  &:focus {\n    outline: none;\n  }\n"]))),_=Object(L.b)("contacts/changeFilter");var ee,ne=function(){var e=Object(p.b)(),n=Object(p.c)(T);return Object(R.jsx)(X,{children:Object(R.jsx)(Y,{type:"text",name:"filter",onChange:function(n){e(_(n.target.value))},value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,autoComplete:"off",placeholder:"Find contacts by name"})})},te=h.a.div(ee||(ee=Object(O.a)(["\n  margin: auto;\n  max-width: 1280px;\n"])));var re,ae,ce,oe,ie,se=function(e){var n=e.children;return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)("div",{className:"background",children:[Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{})]}),Object(R.jsx)(te,{children:n})]})},ue=h.a.div(re||(re=Object(O.a)(["\n  text-align: center;\n  padding: 20px;\n"]))),be=(h.a.h2(ae||(ae=Object(O.a)(["\n  color: #4b3b40;\n"]))),h.a.p(ce||(ce=Object(O.a)(["\n  color: #82735c;\n  margin: 0;\n"]))),h.a.div(oe||(oe=Object(O.a)(["\n  .wrapper {\n    background-color: #fff;\n    border-radius: 2px;\n    box-shadow: 0px 2px 1px 0px #ddd;\n    box-sizing: border-box;\n    height: 300px;\n    left: 50%;\n    margin: -150px 0 0 -150px;\n    position: absolute;\n    top: 50%;\n    width: 300px;\n  }\n"])))),je=h.a.input(ie||(ie=Object(O.a)(["\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #777777;\n  color: #555;\n  box-sizing: border-box;\n  font-size: 18px;\n  padding: 5px 0px;\n  width: 200px;\n  margin-bottom: 15px;\n  &:focus {\n    outline: none;\n  }\n"])));z.a.defaults.baseURL="https://connections-api.herokuapp.com";var le=function(e){z.a.defaults.headers.common.Authorization="Bearer ".concat(e)},de=function(){z.a.defaults.headers.common.Authorization=""},pe=Object(L.c)("auth/register",function(){var e=Object(y.a)(k.a.mark((function e(n){var t,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.post("/users/signup",n);case 3:return t=e.sent,r=t.data,le(r.token),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}()),xe=Object(L.c)("auth/login",function(){var e=Object(y.a)(k.a.mark((function e(n){var t,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.post("/users/login",n);case 3:return t=e.sent,r=t.data,le(r.token),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}()),Oe=Object(L.c)("auth/logout",Object(y.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.post("/users/logout");case 3:de(),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))),he=Object(L.c)("auth/refresh",function(){var e=Object(y.a)(k.a.mark((function e(n,t){var r,a,c,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.getState(),a=r.auth.token){e.next=4;break}return e.abrupt("return",t.rejectWithValue());case 4:return le(a),e.prev=5,e.next=8,z.a.get("/users/current");case 8:return c=e.sent,o=c.data,e.abrupt("return",o);case 13:e.prev=13,e.t0=e.catch(5);case 15:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(n,t){return e.apply(this,arguments)}}());var fe,ge,me,ve,we=function(){var e=Object(p.b)(),n=Object(u.useState)(""),t=Object(x.a)(n,2),r=t[0],a=t[1],c=Object(u.useState)(""),o=Object(x.a)(c,2),i=o[0],s=o[1],b=Object(u.useState)(""),j=Object(x.a)(b,2),l=j[0],d=j[1],O=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":a(r);break;case"email":s(r);break;case"password":d(r)}},h=function(){a(""),s(""),d("")};return Object(R.jsx)(ue,{children:Object(R.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e(pe({name:r,email:i,password:l})),h()},children:[Object(R.jsx)(be,{children:Object(R.jsx)(je,{type:"text",name:"name",required:!0,onChange:O,value:r,placeholder:"Name *"})}),Object(R.jsx)(be,{children:Object(R.jsx)(je,{type:"email",name:"email",required:!0,onChange:O,value:i,placeholder:"Email *"})}),Object(R.jsx)(be,{children:Object(R.jsx)(je,{type:"password",name:"password",required:!0,onChange:O,value:l,placeholder:"Password *"})}),Object(R.jsx)(E.a,{variant:"outlined",color:"primary",type:"submit",children:"Register"})]})})},ke=h.a.div(fe||(fe=Object(O.a)(["\n  text-align: center;\n  padding: 20px;\n"]))),ye=(h.a.button(ge||(ge=Object(O.a)(["\n  background-color: #9db17c;\n  color: white;\n  margin-top: 20px;\n  cursor: pointer;\n"]))),h.a.div(me||(me=Object(O.a)(["\n  .wrapper {\n    background-color: #fff;\n    border-radius: 2px;\n    box-shadow: 0px 2px 1px 0px #ddd;\n    box-sizing: border-box;\n    height: 300px;\n    left: 50%;\n    margin: -150px 0 0 -150px;\n    position: absolute;\n    top: 50%;\n    width: 300px;\n  }\n"])))),Ce=h.a.input(ve||(ve=Object(O.a)(["\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #777777;\n  color: #555;\n  box-sizing: border-box;\n  font-size: 18px;\n  padding: 5px 0px;\n  width: 200px;\n  margin-bottom: 15px;\n  &:focus {\n    outline: none;\n  }\n"])));var ze,Le,Se,Ae,Ne=function(){var e=Object(p.b)(),n=Object(u.useState)(""),t=Object(x.a)(n,2),r=t[0],a=t[1],c=Object(u.useState)(""),o=Object(x.a)(c,2),i=o[0],s=o[1],b=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"email":a(r);break;case"password":s(r)}},j=function(){a(""),s("")};return Object(R.jsx)(ke,{children:Object(R.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e(xe({email:r,password:i})),j()},children:[Object(R.jsx)(ye,{children:Object(R.jsx)(Ce,{type:"email",name:"email",required:!0,onChange:b,value:r,placeholder:"Email *"})}),Object(R.jsx)(ye,{children:Object(R.jsx)(Ce,{type:"password",name:"password",required:!0,onChange:b,value:i,placeholder:"Password *"})}),Object(R.jsx)(E.a,{variant:"outlined",color:"primary",type:"submit",children:"Log in"})]})})},Fe=t(40),qe=Object(h.a)(Fe.b)(ze||(ze=Object(O.a)(["\n  &.link {\n    text-decoration: none;\n    color: white;\n    /* margin: 10px; */\n    margin-right: 10px;\n    text-shadow: 1px 1px grey;\n    text-align: center;\n    margin-left: 20px;\n  }\n  &.activeLink {\n    font-size: 20px;\n  }\n"]))),Ie=(h.a.nav(Le||(Le=Object(O.a)(["\n  /* text-align: center; */\n  padding: 10px;\n  border-bottom: solid 1px black;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n"]))),h.a.div(Se||(Se=Object(O.a)(["\n  display: flex;\n  justify-content: space-between;\n"])))),Te=h.a.div(Ae||(Ae=Object(O.a)(["\n  display: flex;\n  align-items: center;\n"]))),Ue=function(e){return e.auth.isLoggedIn},Ee=function(e){return e.auth.user.name},Pe=function(e){return e.auth.isFetchingCurrentUser};var Re=function(){var e=Object(p.c)(Ue);return Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)(Te,{children:[!e&&Object(R.jsx)(qe,{exact:!0,to:"/",className:"link",activeClassName:"activeLink",children:"Home"}),e&&Object(R.jsx)(qe,{to:"/contacts",className:"link",activeClassName:"activeLink",children:"Contacts"})]})})};var Be,Je,De=function(){return Object(R.jsxs)(Te,{children:[Object(R.jsx)(qe,{to:"/login",className:"link",activeClassName:"activeLink",children:"Login"}),Object(R.jsx)(qe,{to:"/register",className:"link",activeClassName:"activeLink",children:"Register"})]})},Me=h.a.div(Be||(Be=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n"]))),We=h.a.p(Je||(Je=Object(O.a)(["\n  margin: 0;\n  margin-right: 5px;\n"]))),Ze=t(132),He=t(129),Ve=t.n(He);var $e=function(){var e=Object(p.b)(),n=Object(p.c)(Ee);return Object(R.jsxs)(Me,{children:[Object(R.jsxs)(We,{children:["Welcome, ",n,"!"]}),Object(R.jsx)(Ze.a,{round:!0,size:"40",src:"https://picsum.photos/200/300"}),Object(R.jsx)(Ve.a,{cursor:"pointer",fontSize:"medium",style:{color:"white"},onClick:function(){return e(Oe())},children:"Logout"})]})},Ge=t(222);var Ke,Qe=function(){var e=Object(p.c)(Ue);return Object(R.jsx)(Ge.a,{position:"sticky",className:"Appbar",children:Object(R.jsxs)(Ie,{children:[Object(R.jsx)(Re,{}),e?Object(R.jsx)($e,{}):Object(R.jsx)(De,{})]})})},Xe=h.a.div(Ke||(Ke=Object(O.a)(["\n  text-align: center;\n  max-width: 640px;\n  margin: 20px auto;\n"])));var Ye=function(){return Object(R.jsx)(Xe,{children:"Welcome to Phonebook app! Phonebook app allows you to save your contact names, phone numbers and get them any time by logging in to your account."})},_e=t(47),en=t(67),nn=["children","redirectTo"];var tn=function(e){var n=e.children,t=e.redirectTo,r=void 0===t?"/":t,a=Object(en.a)(e,nn),c=Object(p.c)(Ue);return Object(R.jsx)(d.b,Object(_e.a)(Object(_e.a)({},a),{},{children:c?n:Object(R.jsx)(d.a,{to:r})}))},rn=["children","restricted","redirectTo"];var an=function(e){var n=e.children,t=e.restricted,r=void 0!==t&&t,a=e.redirectTo,c=void 0===a?"/":a,o=Object(en.a)(e,rn),i=Object(p.c)(Ue)&&r;return Object(R.jsx)(d.b,Object(_e.a)(Object(_e.a)({},o),{},{children:i?Object(R.jsx)(d.a,{to:c}):n}))};var cn,on,sn,un,bn=function(){var e=Object(p.c)(I),n=Object(p.b)(),t=Object(p.c)(Pe);return Object(u.useEffect)((function(){n(he())}),[n]),Object(R.jsx)(se,{children:!t&&Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(P.a,{}),Object(R.jsx)(Qe,{}),Object(R.jsx)(u.Suspense,{fallback:Object(R.jsx)("div",{children:"Loading..."}),children:Object(R.jsxs)(d.d,{children:[Object(R.jsx)(an,{exact:!0,path:"/",children:Object(R.jsx)(Ye,{})}),Object(R.jsx)(an,{path:"/register",restricted:!0,children:Object(R.jsx)(we,{})}),Object(R.jsx)(an,{path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(R.jsx)(Ne,{})}),Object(R.jsxs)(tn,{path:"/contacts",redirectTo:"/login",children:[Object(R.jsx)(M,{}),e.length>0&&Object(R.jsxs)(R.Fragment,{children:[e.length>1&&Object(R.jsx)(ne,{}),Object(R.jsx)(Q,{})]})]})]})})]})})},jn=t(133),ln=t(8),dn=t(16),pn=Object(L.d)([],(cn={},Object(ln.a)(cn,N.fulfilled,(function(e,n){return n.payload})),Object(ln.a)(cn,F.fulfilled,(function(e,n){return n.payload})),Object(ln.a)(cn,q.fulfilled,(function(e,n){return n.payload})),cn)),xn=Object(L.d)(!1,(on={},Object(ln.a)(on,N.pending,(function(){return!0})),Object(ln.a)(on,N.fulfilled,(function(){return!1})),Object(ln.a)(on,N.rejected,(function(){return!1})),on)),On=Object(L.d)(null,(sn={},Object(ln.a)(sn,N.rejected,(function(e,n){return n.payload})),Object(ln.a)(sn,N.fulfilled,(function(){return null})),Object(ln.a)(sn,F.rejected,(function(e,n){return n.payload})),Object(ln.a)(sn,F.pending,(function(){return null})),Object(ln.a)(sn,q.rejected,(function(e,n){return n.payload})),Object(ln.a)(sn,q.pending,(function(){return null})),sn)),hn=Object(L.d)("",Object(ln.a)({},_,(function(e,n){return n.payload}))),fn=Object(dn.b)({items:pn,isLoading:xn,filter:hn,error:On}),gn={user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrentUser:!1},mn=Object(L.e)({name:"auth",initialState:gn,extraReducers:(un={},Object(ln.a)(un,pe.fulfilled,(function(e,n){e.user=n.payload.user,e.token=n.payload.token,e.isLoggedIn=!0})),Object(ln.a)(un,xe.fulfilled,(function(e,n){e.user=n.payload.user,e.token=n.payload.token,e.isLoggedIn=!0})),Object(ln.a)(un,Oe.fulfilled,(function(e){e.user=gn.user,e.token=gn.token,e.isLoggedIn=gn.isLoggedIn})),Object(ln.a)(un,he.pending,(function(e){e.isFetchingCurrentUser=!0})),Object(ln.a)(un,he.fulfilled,(function(e,n){e.user=n.payload,e.isLoggedIn=!0,e.isFetchingCurrentUser=!1})),Object(ln.a)(un,he.rejected,(function(e){e.isFetchingCurrentUser=!1})),un)}).reducer,vn=t(32),wn=t(130),kn=t.n(wn),yn=Object(jn.a)(Object(L.f)({serializableCheck:{ignoredActions:[vn.a,vn.f,vn.b,vn.c,vn.d,vn.e]}})),Cn={key:"auth",storage:kn.a,whitelist:["token"]},zn=Object(L.a)({reducer:{contacts:fn,auth:Object(vn.g)(Cn,mn)},middleware:yn,devTools:!1}),Ln=Object(vn.h)(zn),Sn=t(131);l.a.render(Object(R.jsx)(b.a.StrictMode,{children:Object(R.jsx)(p.a,{store:zn,children:Object(R.jsx)(Sn.a,{loading:null,persistor:Ln,children:Object(R.jsx)(Fe.a,{children:Object(R.jsx)(bn,{})})})})}),document.getElementById("root"))}},[[202,1,2]]]);
//# sourceMappingURL=main.e013fd5f.chunk.js.map