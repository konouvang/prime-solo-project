(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,n){e.exports=n.p+"static/media/submarine.7ce9680e.svg"},45:function(e,t,n){e.exports=n(83)},75:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(39),c=n.n(s),o=n(11),u=n(7),l=n(43),i=(n(54),Object(o.c)({loginMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";switch((arguments.length>1?arguments[1]:void 0).type){case"CLEAR_LOGIN_ERROR":return"";case"LOGIN_INPUT_ERROR":return"Enter your username and password!";case"LOGIN_FAILED":return"Oops! The username and password didn't match. Try again!";case"LOGIN_FAILED_NO_CODE":return"Oops! Something went wrong! Is the server running?";default:return e}},registrationMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";switch((arguments.length>1?arguments[1]:void 0).type){case"CLEAR_REGISTRATION_ERROR":return"";case"REGISTRATION_INPUT_ERROR":return"Choose a username and password!";case"REGISTRATION_FAILED":return"Oops! That didn't work. The username might already be taken. Try again!";default:return e}}})),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"login";switch((arguments.length>1?arguments[1]:void 0).type){case"SET_TO_LOGIN_MODE":return"login";case"SET_TO_REGISTER_MODE":return"register";default:return e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.payload;case"UNSET_USER":return{};default:return e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SECRETS":return t.payload;case"UNSET_SECRETS":return[];default:return e}},d=Object(o.c)({errors:i,loginMode:p,user:m,secrets:E}),h=n(5),b=n.n(h),O=n(6),v=n(15),f=n.n(v),g=b.a.mark(R),y=b.a.mark(T),w=b.a.mark(j);function R(e){var t;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(O.b)({type:"CLEAR_LOGIN_ERROR"});case 3:return t={headers:{"Content-Type":"application/json"},withCredentials:!0},n.next=6,f.a.post("api/user/login",e.payload,t);case 6:return n.next=8,Object(O.b)({type:"FETCH_USER"});case 8:n.next=20;break;case 10:if(n.prev=10,n.t0=n.catch(0),console.log("Error with user login:",n.t0),401!==n.t0.response.status){n.next=18;break}return n.next=16,Object(O.b)({type:"LOGIN_FAILED"});case 16:n.next=20;break;case 18:return n.next=20,Object(O.b)({type:"LOGIN_FAILED_NO_CODE"});case 20:case"end":return n.stop()}},g,null,[[0,10]])}function T(e){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={headers:{"Content-Type":"application/json"},withCredentials:!0},e.next=4,f.a.post("api/user/logout",t);case 4:return e.next=6,Object(O.b)({type:"UNSET_USER"});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error with user logout:",e.t0);case 11:case"end":return e.stop()}},y,null,[[0,8]])}function j(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)("LOGIN",R);case 2:return e.next=4,Object(O.c)("LOGOUT",T);case 4:case"end":return e.stop()}},w)}var _=j,I=b.a.mark(x),S=b.a.mark(C);function x(e){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(O.b)({type:"CLEAR_REGISTRATION_ERROR"});case 3:return t.next=5,f.a.post("api/user/register",e.payload);case 5:return t.next=7,Object(O.b)({type:"LOGIN",payload:e.payload});case 7:return t.next=9,Object(O.b)({type:"SET_TO_LOGIN_MODE"});case 9:t.next=16;break;case 11:return t.prev=11,t.t0=t.catch(0),console.log("Error with user registration:",t.t0),t.next=16,Object(O.b)({type:"REGISTRATION_FAILED"});case 16:case"end":return t.stop()}},I,null,[[0,11]])}function C(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)("REGISTER",x);case 2:case"end":return e.stop()}},S)}var N=C,k=b.a.mark(G),L=b.a.mark(F);function G(){var e,t;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e={headers:{"Content-Type":"application/json"},withCredentials:!0},n.next=4,f.a.get("api/user",e);case 4:return t=n.sent,n.next=7,Object(O.b)({type:"SET_USER",payload:t.data});case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log("User get request failed",n.t0);case 12:case"end":return n.stop()}},k,null,[[0,9]])}function F(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)("FETCH_USER",G);case 2:case"end":return e.stop()}},L)}var U=F,A=b.a.mark(M),D=b.a.mark(P);function M(){var e,t;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e={headers:{"Content-Type":"application/json"},withCredentials:!0},n.next=4,f.a.get("api/secrets",e);case 4:return t=n.sent,n.next=7,Object(O.b)({type:"SET_SECRETS",payload:t.data});case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log("Secrets get request failed",n.t0);case 12:case"end":return n.stop()}},A,null,[[0,9]])}function P(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)("FETCH_SECRETS",M);case 2:case"end":return e.stop()}},D)}var H=P,q=b.a.mark(J);function J(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)([_(),N(),U(),H()]);case 2:case"end":return e.stop()}},q)}var B=n(16),W=n(17),Y=n(19),z=n(18),K=n(20),Q=n(21),V=n(22),X=Object(u.b)()(function(e){return r.a.createElement("button",{className:e.className,onClick:function(){return e.dispatch({type:"LOGOUT"})}},"Log Out")}),Z=(n(75),Object(u.b)(function(e){return{user:e.user}})(function(e){return r.a.createElement("div",{className:"nav"},r.a.createElement(Q.b,{to:"/home"},r.a.createElement("h2",{className:"nav-title"},"Security Submarine")),r.a.createElement("div",{className:"nav-right"},r.a.createElement(Q.b,{className:"nav-link",to:"/home"},e.user.id?"Home":"Login / Register"),e.user.id&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.b,{className:"nav-link",to:"/secrets"},"Secrets Page"),r.a.createElement(X,{className:"nav-link"})),r.a.createElement(Q.b,{className:"nav-link",to:"/about"},"About")))})),$=(n(81),function(){return r.a.createElement("footer",null,"\xa9 Secure Submarine Navy")}),ee=n(44),te=n(28),ne=n(42),ae=n.n(ne),re=function(e){function t(){var e,n;Object(B.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(Y.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},n.login=function(e){e.preventDefault(),n.state.username&&n.state.password?n.props.dispatch({type:"LOGIN",payload:{username:n.state.username,password:n.state.password}}):n.props.dispatch({type:"LOGIN_INPUT_ERROR"})},n.handleInputChangeFor=function(e){return function(t){n.setState(Object(te.a)({},e,t.target.value))}},n}return Object(K.a)(t,e),Object(W.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.errors.loginMessage&&r.a.createElement("h2",{className:"alert",role:"alert"},this.props.errors.loginMessage),r.a.createElement("form",{onSubmit:this.login},r.a.createElement("h1",null,"Login"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"username"},"Username:",r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleInputChangeFor("username")}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password:",r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleInputChangeFor("password")}))),r.a.createElement("div",null,r.a.createElement("input",{className:"log-in",type:"submit",name:"submit",value:"Log In"}))),r.a.createElement("center",null,r.a.createElement("button",{type:"button",className:"link-button",onClick:function(){e.props.dispatch({type:"SET_TO_REGISTER_MODE"})}},"Register")),r.a.createElement("center",null,r.a.createElement("img",{src:ae.a,height:"200px"})))}}]),t}(a.Component),se=Object(u.b)(function(e){return{errors:e.errors}})(re),ce=function(e){function t(){var e,n;Object(B.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(Y.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},n.registerUser=function(e){e.preventDefault(),n.state.username&&n.state.password?n.props.dispatch({type:"REGISTER",payload:{username:n.state.username,password:n.state.password}}):n.props.dispatch({type:"REGISTRATION_INPUT_ERROR"})},n.handleInputChangeFor=function(e){return function(t){n.setState(Object(te.a)({},e,t.target.value))}},n}return Object(K.a)(t,e),Object(W.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.errors.registrationMessage&&r.a.createElement("h2",{className:"alert",role:"alert"},this.props.errors.registrationMessage),r.a.createElement("form",{onSubmit:this.registerUser},r.a.createElement("h1",null,"Register User"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"username"},"Username:",r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleInputChangeFor("username")}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password:",r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleInputChangeFor("password")}))),r.a.createElement("div",null,r.a.createElement("input",{className:"register",type:"submit",name:"submit",value:"Register"}))),r.a.createElement("center",null,r.a.createElement("button",{type:"button",className:"link-button",onClick:function(){e.props.dispatch({type:"SET_TO_LOGIN_MODE"})}},"Login")))}}]),t}(a.Component),oe=Object(u.b)(function(e){return{errors:e.errors}})(ce),ue=Object(u.b)(function(e){return{user:e.user,loginMode:e.loginMode}})(function(e){var t,n=e.component,a=e.user,s=e.loginMode,c=Object(ee.a)(e,["component","user","loginMode"]);return t=a.id?n:"login"===s?se:oe,r.a.createElement(V.b,Object.assign({},c,{component:t}))}),le=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,"This about page is for anyone to read!")))},ie=Object(u.b)(function(e){return{user:e.user}})(function(e){return r.a.createElement("div",null,r.a.createElement("h1",{id:"welcome"},"Welcome, ",e.user.username,"!"),r.a.createElement("p",null,"Your ID is: ",e.user.id),r.a.createElement(X,{className:"log-in"}))}),pe=function(e){function t(){return Object(B.a)(this,t),Object(Y.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(K.a)(t,e),Object(W.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"FETCH_SECRETS"})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Currently logged in as ",r.a.createElement("b",null,this.props.user.username)),r.a.createElement("p",null,"Clearance level: ",r.a.createElement("b",null,this.props.user.clearance_level)),r.a.createElement("ul",null,this.props.secrets.map(function(e){return r.a.createElement("li",null,"Clearance: ",e.secrecy_level," | Content: ",e.content)})))}}]),t}(a.Component),me=Object(u.b)(function(e){return{secrets:e.secrets,user:e.user}})(pe),Ee=(n(82),function(e){function t(){return Object(B.a)(this,t),Object(Y.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(K.a)(t,e),Object(W.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"FETCH_USER"})}},{key:"render",value:function(){return r.a.createElement(Q.a,null,r.a.createElement("div",null,r.a.createElement(Z,null),r.a.createElement(V.d,null,r.a.createElement(V.a,{exact:!0,from:"/",to:"/home"}),r.a.createElement(V.b,{exact:!0,path:"/about",component:le}),r.a.createElement(ue,{exact:!0,path:"/home",component:ie}),r.a.createElement(ue,{exact:!0,path:"/secrets",component:me}),r.a.createElement(V.b,{render:function(){return r.a.createElement("h1",null,"404")}})),r.a.createElement($,null)))}}]),t}(a.Component)),de=Object(u.b)()(Ee),he=Object(l.a)(),be=[he],Oe=Object(o.e)(d,o.a.apply(void 0,be));he.run(J),c.a.render(r.a.createElement(u.a,{store:Oe},r.a.createElement(de,null)),document.getElementById("react-root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.180371b1.chunk.js.map