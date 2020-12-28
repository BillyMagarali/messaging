(this.webpackJsonpmessaging=this.webpackJsonpmessaging||[]).push([[0],{33:function(e,t,n){},43:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),c=n.n(r),s=n(36),i=n.n(s),o=(n(33),n(15)),h=n(16),u=n(18),l=n(17),b=n(22),j=n(30),d=(n(43),n(4)),p=n(10),O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"home",children:[Object(a.jsxs)("h1",{children:["Welcome to ",Object(a.jsx)(p.b,{to:"/",children:"Messaging"})]}),Object(a.jsxs)("h2",{children:[" ",Object(a.jsx)(p.b,{to:"/Login",children:"Login"})]}),Object(a.jsxs)("h2",{children:[" ",Object(a.jsx)(p.b,{to:"/Signup",children:"Sign Up"})]})]})}}]),n}(r.Component),g=n(6),m=n.n(g),x=n(14),v=n(9),f=n(27),S=n.n(f);S.a.initializeApp({apiKey:"AIzaSyD31Nzhof6UsCw5Kb1rxrQOMSbnP7OKglY",authDomain:"messaging-9cc0e.firebaseapp.com",databaseURL:"https://messaging-9cc0e.firebaseio.com"});var w=S.a.auth,y=S.a.database();function k(e){var t=new Date(e),n=t.getFullYear(),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];return t.getDate()+" "+a+" "+n+" "+("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)+":"+("0"+t.getSeconds()).slice(-2)}var C=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={user:w().currentUser,chats:[],content:"",readError:null,writeError:null},a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(x.a)(m.a.mark((function e(){var t=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({readError:null});try{y.ref("chats").on("value",(function(e){var n=[];e.forEach((function(e){n.push(e.val())})),t.setState({chats:n})}))}catch(n){this.setState({readError:n.message})}case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState({content:e.target.value})}},{key:"handleSubmit",value:function(){var e=Object(x.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({writeError:null}),e.prev=2,e.next=5,y.ref("chats").push({content:this.state.content,timestamp:Date.now(),uid:this.state.user.uid,email:this.state.user.email});case 5:this.setState({content:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),this.setState({writeError:e.t0.message});case 11:case"end":return e.stop()}}),e,this,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"chats",onScroll:this.onScroll,children:Object(a.jsx)("div",{children:this.state.chats.map((function(e){return Object(a.jsxs)("div",{className:"message",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:e.email})," ",Object(a.jsx)("em",{children:k(e.timestamp)})]}),Object(a.jsx)("p",{children:e.content})]},e.timestamp)}))})}),Object(a.jsxs)("div",{className:"sendform",children:[Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("input",{autoFocus:!0,required:!0,onChange:this.handleChange,value:this.state.content}),this.state.error?Object(a.jsx)("p",{children:this.state.writeError}):null,Object(a.jsx)("button",{type:"submit",children:"Send"})]}),Object(a.jsxs)("div",{children:["Login in as: ",Object(a.jsx)("strong",{children:this.state.user.email})]})]})]})}}]),n}(r.Component),I=n(23);function E(){var e=new w.GoogleAuthProvider;return w().signInWithPopup(e)}function D(){var e=new w.GithubAuthProvider;return w().signInWithPopup(e)}var M=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={error:null,email:"",password:""},a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a.githubSignIn=a.githubSignIn.bind(Object(v.a)(a)),a.googleSignIn=a.googleSignIn.bind(Object(v.a)(a)),a}return Object(h.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(I.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(x.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({error:""}),e.prev=2,e.next=5,n=this.state.email,a=this.state.password,w().createUserWithEmailAndPassword(n,a);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),this.setState({error:e.t0.message});case 10:case"end":return e.stop()}var n,a}),e,this,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"githubSignIn",value:function(){var e=Object(x.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"googleSignIn",value:function(){var e=Object(x.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("h1",{children:["Sign up to ",Object(a.jsx)(p.b,{to:"/",children:"Messaging"})]}),Object(a.jsx)("p",{children:"Fill in the form below to create an account."}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{placeholder:"Email",required:"true",name:"email",type:"email",onChange:this.handleChange,value:this.state.email})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{placeholder:"Password",required:"true",name:"password",onChange:this.handleChange,value:this.state.password,type:"password"})}),Object(a.jsxs)("div",{children:[this.state.error?Object(a.jsx)("p",{children:this.state.error}):null,Object(a.jsx)("button",{type:"submit",children:"Sign up"})]}),Object(a.jsx)("p",{children:"Or"}),Object(a.jsx)("hr",{}),Object(a.jsx)("button",{type:"button",onClick:this.googleSignIn,children:"Sign up with Google"}),Object(a.jsx)("hr",{}),Object(a.jsx)("button",{type:"button",onClick:this.githubSignIn,children:"Sign up with GitHub"}),Object(a.jsx)("hr",{}),Object(a.jsxs)("p",{children:["Already have an account? ",Object(a.jsx)(p.b,{to:"/login",children:"Login"})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("p",{children:["Go back to ",Object(a.jsx)(p.b,{to:"/",children:"Menu"})]})]})})}}]),n}(r.Component),A=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={error:null,email:"",password:""},a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a.githubSignIn=a.githubSignIn.bind(Object(v.a)(a)),a}return Object(h.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(I.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(x.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({error:""}),e.prev=2,e.next=5,n=this.state.email,a=this.state.password,w().signInWithEmailAndPassword(n,a);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),this.setState({error:e.t0.message});case 10:case"end":return e.stop()}var n,a}),e,this,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"googleSignIn",value:function(){var e=Object(x.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"githubSignIn",value:function(){var e=Object(x.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(a.jsxs)("h1",{children:["Login to ",Object(a.jsx)(p.b,{to:"/",children:"Messaging"})]}),Object(a.jsx)("p",{children:"Fill in the form below to login to your account."}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{placeholder:"Email",name:"email",type:"email",onChange:this.handleChange,value:this.state.email})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password,type:"password"})}),Object(a.jsxs)("div",{children:[this.state.error?Object(a.jsx)("p",{children:this.state.error}):null,Object(a.jsx)("button",{type:"submit",children:"Login"})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("p",{children:["Don't have an account? ",Object(a.jsx)(p.b,{to:"/signup",children:"Sign up"})]}),Object(a.jsx)("p",{children:"Or"}),Object(a.jsx)("button",{onClick:this.googleSignIn,type:"button",children:"Sign up with Google"}),Object(a.jsx)("p",{children:"Or"}),Object(a.jsx)("button",{type:"button",onClick:this.githubSignIn,children:"Sign up with GitHub"}),Object(a.jsx)("hr",{})]})})}}]),n}(r.Component);function P(e){var t=e.component,n=e.authenticated,r=Object(j.a)(e,["component","authenticated"]);return Object(a.jsx)(d.b,Object(b.a)(Object(b.a)({},r),{},{render:function(e){return!0===n?Object(a.jsx)(t,Object(b.a)({},e)):Object(a.jsx)(d.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}function L(e){var t=e.component,n=e.authenticated,r=Object(j.a)(e,["component","authenticated"]);return Object(a.jsx)(d.b,Object(b.a)(Object(b.a)({},r),{},{render:function(e){return!1===n?Object(a.jsx)(t,Object(b.a)({},e)):Object(a.jsx)(d.a,{to:"/chat"})}}))}var G=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={authenticated:!1,loading:!0},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;w().onAuthStateChanged((function(t){t?e.setState({authenticated:!0,loading:!1}):e.setState({authenticated:!1,loading:!1})}))}},{key:"render",value:function(){return!0===this.state.loading?Object(a.jsx)("h2",{children:"Loading..."}):Object(a.jsx)(p.a,{basename:"/messaging",children:Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.b,{exact:!0,path:"/",component:O}),Object(a.jsx)(P,{exact:!0,path:"/chat",authenticated:this.state.authenticated,component:C}),Object(a.jsx)(L,{exact:!0,path:"/signup",authenticated:this.state.authenticated,component:M}),Object(a.jsx)(L,{exact:!0,path:"/login",authenticated:this.state.authenticated,component:A})]})})}}]),n}(r.Component);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(G,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.ef51222d.chunk.js.map