(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{141:function(e,t,n){},202:function(e,t,n){"use strict";n.r(t);var r,a,c,o,i,s,u=n(0),b=n.n(u),j=n(36),l=n.n(j),d=(n(141),n(9)),p=n(6),x=n(27),O=n(4),h=n(5),f=h.a.div(r||(r=Object(O.a)(["\n  padding: 20px;\n  text-align: center;\n"]))),g=(h.a.h2(a||(a=Object(O.a)(["\n  color: #000000;\n"]))),h.a.p(c||(c=Object(O.a)(["\n  color: #000000;\n  margin: 0;\n"]))),h.a.button(o||(o=Object(O.a)(["\n  background-color: #9db17c;\n  color: white;\n  margin-top: 20px;\n  cursor: pointer;\n"]))),h.a.div(i||(i=Object(O.a)(["\n  .wrapper {\n    background-color: #fff;\n    border-radius: 2px;\n    box-shadow: 0px 2px 1px 0px #ddd;\n    box-sizing: border-box;\n    height: 300px;\n    left: 50%;\n    margin: -150px 0 0 -150px;\n    position: absolute;\n    top: 50%;\n    width: 300px;\n  }\n"])))),m=h.a.input(s||(s=Object(O.a)(["\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #777777;\n  color: #000000;\n  box-sizing: border-box;\n  font-size: 18px;\n  padding: 5px 0px;\n  width: 200px;\n  margin-bottom: 15px;\n  &:focus {\n    outline: none;\n  }\n"]))),v=n(221),k=n(14),w=n.n(k),y=n(28),C=n(22),z=n.n(C),L=n(10);function S(){return A.apply(this,arguments)}function A(){return(A=Object(y.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.get("/contacts");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}z.a.defaults.baseURL="https://connections-api.herokuapp.com";var N=Object(L.c)("contacts/fetchContacts",Object(y.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),F=Object(L.c)("contacts/addContact",function(){var e=Object(y.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.post("/contacts",t);case 2:return e.next=4,S();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),q=Object(L.c)("contacts/deleteContact",function(){var e=Object(y.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.delete("/contacts/".concat(t));case 2:return e.next=4,S();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),I=function(e){return e.contacts.items},W=function(e){return e.contacts.filter},T=function(e){var t=I(e),n=W(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},U=n(220),E=n(37),P=n(1);var R,V,B,J=function(){var e=Object(p.b)(),t=Object(p.c)(I),n=Object(u.useState)(""),r=Object(x.a)(n,2),a=r[0],c=r[1],o=Object(u.useState)(""),i=Object(x.a)(o,2),s=i[0],b=i[1];Object(u.useEffect)((function(){e(N())}),[e]);var j=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":c(r);break;case"number":b(r)}},l=function(){c(""),b("")};return Object(P.jsx)(f,{children:Object(P.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r=Object(v.a)();if(t.find((function(e){return e.name.toLowerCase()===a.toLowerCase()})))return alert("".concat(a," already exists in your contacts"));e(F({id:r,name:a,number:s})),E.b.success("".concat(a," successfully added")),l()},children:[Object(P.jsx)(g,{children:Object(P.jsx)(m,{type:"text",name:"name",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:j,value:a,placeholder:"Name *"})}),Object(P.jsx)(g,{children:Object(P.jsx)(m,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:j,value:s,placeholder:"Phone number *"})}),Object(P.jsx)(U.a,{variant:"outlined",color:"primary",type:"submit",children:"Add contact"})]})})},D=h.a.div(R||(R=Object(O.a)(["\n  text-align: center;\n"]))),M=h.a.ul(V||(V=Object(O.a)(["\n  margin: 0;\n  padding: 0;\n  color: #4b3b40;\n"]))),Z=h.a.li(B||(B=Object(O.a)(["\n  display: flex;\n  list-style: none;\n  justify-content: center;\n  align-items: center;\n"]))),H=n(126),$=n.n(H);var G,K,Q=function(){var e=Object(p.b)(),t=Object(p.c)(T);return Object(P.jsx)(D,{children:Object(P.jsx)(M,{children:t.map((function(t){var n=t.id,r=t.name,a=t.number;return Object(P.jsxs)(Z,{children:[r,": ",a,Object(P.jsx)($.a,{color:"primary",onClick:function(){return function(t){e(q(t)),E.b.success("Contact deleted")}(n)},cursor:"pointer",size:"large"})]},n)}))})})},X=h.a.div(G||(G=Object(O.a)(["\n  text-align: center;\n  padding: 20px;\n"]))),Y=h.a.input(K||(K=Object(O.a)(["\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #777777;\n  color: #555;\n  box-sizing: border-box;\n  font-size: 18px;\n  padding: 5px 0px;\n  width: 200px;\n  margin-bottom: 15px;\n  &:focus {\n    outline: none;\n  }\n"]))),_=Object(L.b)("contacts/changeFilter");var ee,te=function(){var e=Object(p.b)(),t=Object(p.c)(W);return Object(P.jsx)(X,{children:Object(P.jsx)(Y,{type:"text",name:"filter",onChange:function(t){e(_(t.target.value))},value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,autoComplete:"off",placeholder:"Find contacts by name"})})},ne=h.a.div(ee||(ee=Object(O.a)(["\n  margin: auto;\n  max-width: 1280px;\n"])));var re,ae,ce,oe,ie,se=function(e){var t=e.children;return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)("div",{className:"background",children:[Object(P.jsx)("span",{}),Object(P.jsx)("span",{}),Object(P.jsx)("span",{}),Object(P.jsx)("span",{}),Object(P.jsx)("span",{}),Object(P.jsx)("span",{}),Object(P.jsx)("span",{}),Object(P.jsx)("span",{}),Object(P.jsx)("span",{}),Object(P.jsx)("span",{}),Object(P.jsx)("span",{}),Object(P.jsx)("span",{}),Object(P.jsx)("span",{}),Object(P.jsx)("span",{}),Object(P.jsx)("span",{}),Object(P.jsx)("span",{}),Object(P.jsx)("span",{}),Object(P.jsx)("span",{}),Object(P.jsx)("span",{}),Object(P.jsx)("span",{})]}),Object(P.jsx)(ne,{children:t})]})},ue=h.a.div(re||(re=Object(O.a)(["\n  text-align: center;\n  padding: 20px;\n"]))),be=(h.a.h2(ae||(ae=Object(O.a)(["\n  color: #4b3b40;\n"]))),h.a.p(ce||(ce=Object(O.a)(["\n  color: #82735c;\n  margin: 0;\n"]))),h.a.div(oe||(oe=Object(O.a)(["\n  .wrapper {\n    background-color: #fff;\n    border-radius: 2px;\n    box-shadow: 0px 2px 1px 0px #ddd;\n    box-sizing: border-box;\n    height: 300px;\n    left: 50%;\n    margin: -150px 0 0 -150px;\n    position: absolute;\n    top: 50%;\n    width: 300px;\n  }\n"])))),je=h.a.input(ie||(ie=Object(O.a)(["\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #777777;\n  color: #555;\n  box-sizing: border-box;\n  font-size: 18px;\n  padding: 5px 0px;\n  width: 200px;\n  margin-bottom: 15px;\n  &:focus {\n    outline: none;\n  }\n"]))),le=function(e){return e.auth.isLoggedIn},de=function(e){return e.auth.user.name},pe=function(e){return e.auth.isFetchingCurrentUser};z.a.defaults.baseURL="https://connections-api.herokuapp.com";var xe=function(e){z.a.defaults.headers.common.Authorization="Bearer ".concat(e)},Oe=function(){z.a.defaults.headers.common.Authorization=""},he=Object(L.c)("auth/register",function(){var e=Object(y.a)(w.a.mark((function e(t,n){var r,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.post("/users/signup",t);case 3:return r=e.sent,a=r.data,xe(a.token),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",n.rejectWithValue(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}()),fe=Object(L.c)("auth/login",function(){var e=Object(y.a)(w.a.mark((function e(t,n){var r,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.post("/users/login",t);case 3:return r=e.sent,a=r.data,xe(a.token),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",n.rejectWithValue(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}()),ge=Object(L.c)("auth/logout",function(){var e=Object(y.a)(w.a.mark((function e(t,n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.post("/users/logout");case 3:Oe(),e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",n.rejectWithValue(e.t0.message));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}()),me=Object(L.c)("auth/refresh",function(){var e=Object(y.a)(w.a.mark((function e(t,n){var r,a,c,o,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState(),a=r.auth.token,c=Object(p.c)(de),null!==a){e.next=5;break}return e.abrupt("return",n.rejectWithValue());case 5:return xe(a),e.prev=6,e.next=9,z.a.get("/users/current");case 9:return o=e.sent,i=o.data,Object(E.b)("Welcome back, ".concat(c)),e.abrupt("return",i);case 15:return e.prev=15,e.t0=e.catch(6),e.abrupt("return",n.rejectWithValue(e.t0.message));case 18:case"end":return e.stop()}}),e,null,[[6,15]])})));return function(t,n){return e.apply(this,arguments)}}());var ve,ke,we,ye,Ce=function(){var e=Object(p.b)(),t=Object(u.useState)(""),n=Object(x.a)(t,2),r=n[0],a=n[1],c=Object(u.useState)(""),o=Object(x.a)(c,2),i=o[0],s=o[1],b=Object(u.useState)(""),j=Object(x.a)(b,2),l=j[0],d=j[1],O=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":a(r);break;case"email":s(r);break;case"password":d(r)}},h=function(){a(""),s(""),d("")};return Object(P.jsx)(ue,{children:Object(P.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(he({name:r,email:i,password:l})),h()},children:[Object(P.jsx)(be,{children:Object(P.jsx)(je,{type:"text",name:"name",required:!0,onChange:O,value:r,placeholder:"Name *"})}),Object(P.jsx)(be,{children:Object(P.jsx)(je,{type:"email",name:"email",required:!0,onChange:O,value:i,placeholder:"Email *"})}),Object(P.jsx)(be,{children:Object(P.jsx)(je,{type:"password",name:"password",required:!0,onChange:O,value:l,placeholder:"Password *"})}),Object(P.jsx)(U.a,{variant:"outlined",color:"primary",type:"submit",children:"Register"})]})})},ze=h.a.div(ve||(ve=Object(O.a)(["\n  text-align: center;\n  padding: 20px;\n"]))),Le=(h.a.button(ke||(ke=Object(O.a)(["\n  background-color: #9db17c;\n  color: white;\n  margin-top: 20px;\n  cursor: pointer;\n"]))),h.a.div(we||(we=Object(O.a)(["\n  .wrapper {\n    background-color: #fff;\n    border-radius: 2px;\n    box-shadow: 0px 2px 1px 0px #ddd;\n    box-sizing: border-box;\n    height: 300px;\n    left: 50%;\n    margin: -150px 0 0 -150px;\n    position: absolute;\n    top: 50%;\n    width: 300px;\n  }\n"])))),Se=h.a.input(ye||(ye=Object(O.a)(["\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #777777;\n  color: #555;\n  box-sizing: border-box;\n  font-size: 18px;\n  padding: 5px 0px;\n  width: 200px;\n  margin-bottom: 15px;\n  &:focus {\n    outline: none;\n  }\n"])));var Ae,Ne,Fe,qe,Ie=function(){var e=Object(p.b)(),t=Object(u.useState)(""),n=Object(x.a)(t,2),r=n[0],a=n[1],c=Object(u.useState)(""),o=Object(x.a)(c,2),i=o[0],s=o[1],b=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"email":a(r);break;case"password":s(r)}},j=function(){a(""),s("")};return Object(P.jsx)(ze,{children:Object(P.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(fe({email:r,password:i})),j()},children:[Object(P.jsx)(Le,{children:Object(P.jsx)(Se,{type:"email",name:"email",required:!0,onChange:b,value:r,placeholder:"Email *"})}),Object(P.jsx)(Le,{children:Object(P.jsx)(Se,{type:"password",name:"password",required:!0,onChange:b,value:i,placeholder:"Password *"})}),Object(P.jsx)(U.a,{variant:"outlined",color:"primary",type:"submit",children:"Log in"})]})})},We=n(41),Te=Object(h.a)(We.b)(Ae||(Ae=Object(O.a)(["\n  &.link {\n    text-decoration: none;\n    color: white;\n    /* margin: 10px; */\n    margin-right: 10px;\n    text-shadow: 1px 1px grey;\n    text-align: center;\n    margin-left: 20px;\n  }\n  &.activeLink {\n    font-size: 20px;\n  }\n"]))),Ue=(h.a.nav(Ne||(Ne=Object(O.a)(["\n  /* text-align: center; */\n  padding: 10px;\n  border-bottom: solid 1px black;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n"]))),h.a.div(Fe||(Fe=Object(O.a)(["\n  display: flex;\n  justify-content: space-between;\n"])))),Ee=h.a.div(qe||(qe=Object(O.a)(["\n  display: flex;\n  align-items: center;\n"])));var Pe=function(){var e=Object(p.c)(le);return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(Ee,{children:[!e&&Object(P.jsx)(Te,{exact:!0,to:"/",className:"link",activeClassName:"activeLink",children:"Home"}),e&&Object(P.jsx)(Te,{to:"/contacts",className:"link",activeClassName:"activeLink",children:"Contacts"})]})})};var Re,Ve,Be=function(){return Object(P.jsxs)(Ee,{children:[Object(P.jsx)(Te,{to:"/login",className:"link",activeClassName:"activeLink",children:"Login"}),Object(P.jsx)(Te,{to:"/register",className:"link",activeClassName:"activeLink",children:"Register"})]})},Je=h.a.div(Re||(Re=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n"]))),De=h.a.p(Ve||(Ve=Object(O.a)(["\n  margin: 0;\n  margin-right: 5px;\n"]))),Me=n(132),Ze=n(129),He=n.n(Ze);var $e=function(){var e=Object(p.b)(),t=Object(p.c)(de);return Object(P.jsxs)(Je,{children:[Object(P.jsxs)(De,{children:["Welcome, ",t,"!"]}),Object(P.jsx)(Me.a,{round:!0,size:"40",src:"https://picsum.photos/200/300"}),Object(P.jsx)(He.a,{cursor:"pointer",fontSize:"medium",style:{color:"white"},onClick:function(){return e(ge())},children:"Logout"})]})},Ge=n(222);var Ke,Qe=function(){var e=Object(p.c)(le);return Object(P.jsx)(Ge.a,{position:"sticky",className:"Appbar",children:Object(P.jsxs)(Ue,{children:[Object(P.jsx)(Pe,{}),e?Object(P.jsx)($e,{}):Object(P.jsx)(Be,{})]})})},Xe=h.a.div(Ke||(Ke=Object(O.a)(["\n  text-align: center;\n  max-width: 640px;\n  margin: 20px auto;\n"])));var Ye=function(){return Object(P.jsx)(Xe,{children:"Welcome to Phonebook app! Phonebook app allows you to save your contact names, phone numbers and get them any time by logging in to your account."})},_e=n(47),et=n(67),tt=["children","redirectTo"];var nt=function(e){var t=e.children,n=e.redirectTo,r=void 0===n?"/":n,a=Object(et.a)(e,tt),c=Object(p.c)(le);return Object(P.jsx)(d.b,Object(_e.a)(Object(_e.a)({},a),{},{children:c?t:Object(P.jsx)(d.a,{to:r})}))},rt=["children","restricted","redirectTo"];var at=function(e){var t=e.children,n=e.restricted,r=void 0!==n&&n,a=e.redirectTo,c=void 0===a?"/":a,o=Object(et.a)(e,rt),i=Object(p.c)(le)&&r;return Object(P.jsx)(d.b,Object(_e.a)(Object(_e.a)({},o),{},{children:i?Object(P.jsx)(d.a,{to:c}):t}))};var ct,ot,it,st,ut=function(){var e=Object(p.c)(I),t=Object(p.b)(),n=Object(p.c)(pe);return Object(u.useEffect)((function(){t(me())}),[t]),Object(P.jsx)(se,{children:!n&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(E.a,{}),Object(P.jsx)(Qe,{}),Object(P.jsx)(u.Suspense,{fallback:Object(P.jsx)("div",{children:"Loading..."}),children:Object(P.jsxs)(d.d,{children:[Object(P.jsx)(at,{exact:!0,path:"/",children:Object(P.jsx)(Ye,{})}),Object(P.jsx)(at,{path:"/register",restricted:!0,children:Object(P.jsx)(Ce,{})}),Object(P.jsx)(at,{path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(P.jsx)(Ie,{})}),Object(P.jsxs)(nt,{path:"/contacts",redirectTo:"/login",children:[Object(P.jsx)(J,{}),e.length>0&&Object(P.jsxs)(P.Fragment,{children:[e.length>1&&Object(P.jsx)(te,{}),Object(P.jsx)(Q,{})]})]})]})})]})})},bt=n(133),jt=n(8),lt=n(16),dt=Object(L.d)([],(ct={},Object(jt.a)(ct,N.fulfilled,(function(e,t){return t.payload})),Object(jt.a)(ct,F.fulfilled,(function(e,t){return t.payload})),Object(jt.a)(ct,q.fulfilled,(function(e,t){return t.payload})),ct)),pt=Object(L.d)(!1,(ot={},Object(jt.a)(ot,N.pending,(function(){return!0})),Object(jt.a)(ot,N.fulfilled,(function(){return!1})),Object(jt.a)(ot,N.rejected,(function(){return!1})),ot)),xt=Object(L.d)(null,(it={},Object(jt.a)(it,N.rejected,(function(e,t){return t.payload})),Object(jt.a)(it,N.fulfilled,(function(){return null})),Object(jt.a)(it,F.rejected,(function(e,t){return t.payload})),Object(jt.a)(it,F.pending,(function(){return null})),Object(jt.a)(it,q.rejected,(function(e,t){return t.payload})),Object(jt.a)(it,q.pending,(function(){return null})),it)),Ot=Object(L.d)("",Object(jt.a)({},_,(function(e,t){return t.payload}))),ht=Object(lt.b)({items:dt,isLoading:pt,filter:Ot,error:xt}),ft={user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrentUser:!1},gt=Object(L.e)({name:"auth",initialState:ft,extraReducers:(st={},Object(jt.a)(st,he.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(jt.a)(st,fe.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(jt.a)(st,ge.fulfilled,(function(e){e.user=ft.user,e.token=ft.token,e.isLoggedIn=ft.isLoggedIn})),Object(jt.a)(st,me.pending,(function(e){e.isFetchingCurrentUser=!0})),Object(jt.a)(st,me.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0,e.isFetchingCurrentUser=!1})),Object(jt.a)(st,me.rejected,(function(e){e.isFetchingCurrentUser=!1})),st)}).reducer,mt=n(32),vt=n(130),kt=n.n(vt),wt=Object(bt.a)(Object(L.f)({serializableCheck:{ignoredActions:[mt.a,mt.f,mt.b,mt.c,mt.d,mt.e]}})),yt={key:"auth",storage:kt.a,whitelist:["token"]},Ct=Object(L.a)({reducer:{contacts:ht,auth:Object(mt.g)(yt,gt)},middleware:wt,devTools:!1}),zt=Object(mt.h)(Ct),Lt=n(131);l.a.render(Object(P.jsx)(b.a.StrictMode,{children:Object(P.jsx)(p.a,{store:Ct,children:Object(P.jsx)(Lt.a,{loading:null,persistor:zt,children:Object(P.jsx)(We.a,{children:Object(P.jsx)(ut,{})})})})}),document.getElementById("root"))}},[[202,1,2]]]);
//# sourceMappingURL=main.b6a4bcd1.chunk.js.map