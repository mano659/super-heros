(this.webpackJsonpsuperheros=this.webpackJsonpsuperheros||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o),s=(n(12),n(3)),u=n(4),i=n(6),l=n(5),h=(n(13),n(14),n(15),function(e){return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.hero.id,"?size=200x200")}),a.a.createElement("h2",null,e.hero.name),a.a.createElement("p",null,e.hero.email))}),m=function(e){return a.a.createElement("div",{className:"card-list"},e.users.map((function(e){return a.a.createElement(h,{hero:e,key:e.id})})))},d=(n(16),function(e){var t=e.placeholder,n=e.changeHandler;return a.a.createElement("input",{type:"search",className:"search",placeholder:t,onChange:n})}),f=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={users:[],searchQuery:""},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({users:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.users,r=t.searchQuery;console.log(n);var o=n.filter((function(e){return-1!==e.name.toLowerCase().indexOf(r.toLowerCase())}));return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Super Heros"),a.a.createElement(d,{placeholder:"Search Heros",changeHandler:function(t){return e.setState({searchQuery:t.target.value})}}),a.a.createElement(m,{users:o}))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.73dbca84.chunk.js.map