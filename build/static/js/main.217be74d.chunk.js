(this.webpackJsonpmessaging=this.webpackJsonpmessaging||[]).push([[0],{33:function(t,e,n){},43:function(t,e,n){},59:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(2),i=n.n(r),c=n(36),s=n.n(c),o=(n(33),n(15)),h=n(16),u=n(18),l=n(17),b=n(22),j=n(32),d=(n(43),n(4)),p=n(12),O=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{children:["Welcome to ",Object(a.jsx)(p.b,{to:"/",children:"Messaging"})]}),Object(a.jsxs)("h2",{children:[" ",Object(a.jsx)(p.b,{to:"/Login",children:"Login"})]}),Object(a.jsxs)("h2",{children:[" ",Object(a.jsx)(p.b,{to:"/Signup",children:"Sign Up"})]})]})}}]),n}(r.Component),g=n(6),v=n.n(g),x=n(14),m=n(9),f=n(27),S=n.n(f);S.a.initializeApp({apiKey:"AIzaSyD31Nzhof6UsCw5Kb1rxrQOMSbnP7OKglY",authDomain:"messaging-9cc0e.firebaseapp.com",databaseURL:"https://messaging-9cc0e.firebaseio.com"});var w=S.a.auth,y=S.a.database();function k(t){var e=new Date(t),n=e.getFullYear(),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()];return e.getDate()+" "+a+" "+n+" "+("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)+":"+("0"+e.getSeconds()).slice(-2)}var C=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={user:w().currentUser,chats:[],content:"",readError:null,writeError:null},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=Object(x.a)(v.a.mark((function t(){var e=this;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({readError:null});try{y.ref("chats").on("value",(function(t){var n=[];t.forEach((function(t){n.push(t.val())})),e.setState({chats:n})}))}catch(n){this.setState({readError:n.message})}case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"handleChange",value:function(t){this.setState({content:t.target.value})}},{key:"handleSubmit",value:function(){var t=Object(x.a)(v.a.mark((function t(e){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),this.setState({writeError:null}),t.prev=2,t.next=5,y.ref("chats").push({content:this.state.content,timestamp:Date.now(),uid:this.state.user.uid});case 5:this.setState({content:""}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),this.setState({writeError:t.t0.message});case 11:case"end":return t.stop()}}),t,this,[[2,8]])})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"chats",children:this.state.chats.map((function(e){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:t.state.user.email})," ",Object(a.jsx)("em",{children:k(e.timestamp)})]}),Object(a.jsx)("p",{children:e.content})]},e.timestamp)}))}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("input",{onChange:this.handleChange,value:this.state.content}),this.state.error?Object(a.jsx)("p",{children:this.state.writeError}):null,Object(a.jsx)("button",{type:"submit",children:"Send"})]}),Object(a.jsxs)("div",{children:["Login in as: ",Object(a.jsx)("strong",{children:this.state.user.email})]})]})}}]),n}(r.Component),I=n(23);function E(){var t=new w.GoogleAuthProvider;return w().signInWithPopup(t)}function D(){var t=new w.GithubAuthProvider;return w().signInWithPopup(t)}var M=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={error:null,email:"",password:""},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a.githubSignIn=a.githubSignIn.bind(Object(m.a)(a)),a.googleSignIn=a.googleSignIn.bind(Object(m.a)(a)),a}return Object(h.a)(n,[{key:"handleChange",value:function(t){this.setState(Object(I.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(){var t=Object(x.a)(v.a.mark((function t(e){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),this.setState({error:""}),t.prev=2,t.next=5,n=this.state.email,a=this.state.password,w().createUserWithEmailAndPassword(n,a);case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),this.setState({error:t.t0.message});case 10:case"end":return t.stop()}var n,a}),t,this,[[2,7]])})));return function(e){return t.apply(this,arguments)}}()},{key:"githubSignIn",value:function(){var t=Object(x.a)(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),this.setState({error:t.t0.message});case 8:case"end":return t.stop()}}),t,this,[[0,5]])})));return function(){return t.apply(this,arguments)}}()},{key:"googleSignIn",value:function(){var t=Object(x.a)(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),this.setState({error:t.t0.message});case 8:case"end":return t.stop()}}),t,this,[[0,5]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("h1",{children:["Sign up to ",Object(a.jsx)(p.b,{to:"/",children:"Messaging"})]}),Object(a.jsx)("p",{children:"Fill in the form below to create an account."}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{placeholder:"Email",name:"email",type:"email",onChange:this.handleChange,value:this.state.email})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password,type:"password"})}),Object(a.jsxs)("div",{children:[this.state.error?Object(a.jsx)("p",{children:this.state.error}):null,Object(a.jsx)("button",{type:"submit",children:"Sign up"})]}),Object(a.jsx)("p",{children:"Or"}),Object(a.jsx)("hr",{}),Object(a.jsx)("button",{type:"button",onClick:this.googleSignIn,children:"Sign up with Google"}),Object(a.jsx)("hr",{}),Object(a.jsx)("button",{type:"button",onClick:this.githubSignIn,children:"Sign up with GitHub"}),Object(a.jsx)("hr",{}),Object(a.jsxs)("p",{children:["Already have an account? ",Object(a.jsx)(p.b,{to:"/login",children:"Login"})]})]})})}}]),n}(r.Component),A=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={error:null,email:"",password:""},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a.githubSignIn=a.githubSignIn.bind(Object(m.a)(a)),a}return Object(h.a)(n,[{key:"handleChange",value:function(t){this.setState(Object(I.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(){var t=Object(x.a)(v.a.mark((function t(e){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),this.setState({error:""}),t.prev=2,t.next=5,n=this.state.email,a=this.state.password,w().signInWithEmailAndPassword(n,a);case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),this.setState({error:t.t0.message});case 10:case"end":return t.stop()}var n,a}),t,this,[[2,7]])})));return function(e){return t.apply(this,arguments)}}()},{key:"googleSignIn",value:function(){var t=Object(x.a)(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),this.setState({error:t.t0.message});case 8:case"end":return t.stop()}}),t,this,[[0,5]])})));return function(){return t.apply(this,arguments)}}()},{key:"githubSignIn",value:function(){var t=Object(x.a)(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),this.setState({error:t.t0.message});case 8:case"end":return t.stop()}}),t,this,[[0,5]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(a.jsxs)("h1",{children:["Login to ",Object(a.jsx)(p.b,{to:"/",children:"Messaging"})]}),Object(a.jsx)("p",{children:"Fill in the form below to login to your account."}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{placeholder:"Email",name:"email",type:"email",onChange:this.handleChange,value:this.state.email})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password,type:"password"})}),Object(a.jsxs)("div",{children:[this.state.error?Object(a.jsx)("p",{children:this.state.error}):null,Object(a.jsx)("button",{type:"submit",children:"Login"})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("p",{children:["Don't have an account? ",Object(a.jsx)(p.b,{to:"/signup",children:"Sign up"})]}),Object(a.jsx)("p",{children:"Or"}),Object(a.jsx)("button",{onClick:this.googleSignIn,type:"button",children:"Sign up with Google"}),Object(a.jsx)("p",{children:"Or"}),Object(a.jsx)("button",{type:"button",onClick:this.githubSignIn,children:"Sign up with GitHub"}),Object(a.jsx)("hr",{})]})})}}]),n}(r.Component);function P(t){var e=t.component,n=t.authenticated,r=Object(j.a)(t,["component","authenticated"]);return Object(a.jsx)(d.b,Object(b.a)(Object(b.a)({},r),{},{render:function(t){return!0===n?Object(a.jsx)(e,Object(b.a)({},t)):Object(a.jsx)(d.a,{to:{pathname:"/login",state:{from:t.location}}})}}))}function L(t){var e=t.component,n=t.authenticated,r=Object(j.a)(t,["component","authenticated"]);return Object(a.jsx)(d.b,Object(b.a)(Object(b.a)({},r),{},{render:function(t){return!1===n?Object(a.jsx)(e,Object(b.a)({},t)):Object(a.jsx)(d.a,{to:"/chat"})}}))}var G=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).state={authenticated:!1,loading:!0},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;w().onAuthStateChanged((function(e){e?t.setState({authenticated:!0,loading:!1}):t.setState({authenticated:!1,loading:!1})}))}},{key:"render",value:function(){return!0===this.state.loading?Object(a.jsx)("h2",{children:"Loading..."}):Object(a.jsx)(p.a,{children:Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.b,{exact:!0,path:"/",component:O}),Object(a.jsx)(P,{path:"/chat",authenticated:this.state.authenticated,component:C}),Object(a.jsx)(L,{path:"/signup",authenticated:this.state.authenticated,component:M}),Object(a.jsx)(L,{path:"/login",authenticated:this.state.authenticated,component:A})]})})}}]),n}(r.Component);s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(G,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.217be74d.chunk.js.map