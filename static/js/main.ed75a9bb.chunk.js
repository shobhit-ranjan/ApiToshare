(this.webpackJsonpapi=this.webpackJsonpapi||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),c=n(16),r=n.n(c),i=(n(23),n(3)),o=n(4),l=n(6),u=n(5),p=(n(24),n(25),n(0)),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:this.props.persons.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{src:e.avatar,className:"person-image"}),Object(p.jsxs)("div",{className:"flex column justify-center",children:[Object(p.jsxs)("div",{className:"person-name",children:[e.first_name," ",e.last_name]}),Object(p.jsx)("div",{className:"flex column justify-space-between"}),Object(p.jsx)("div",{children:Object(p.jsx)("span",{className:"person-email",children:e.email})})]})]})}))})}}]),n}(s.a.Component),d=n(17),h=n.n(d),v=n(18),b=n.n(v),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={persons:[],pageCount:0,page:1},e.handlePageClick=function(t){var n=t.selected;e.setState({page:n+1},(function(){e.loadPersonFromServer()}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.loadPersonFromServer()}},{key:"loadPersonFromServer",value:function(){var e=this;b.a.get("https://reqres.in/api/users?page="+this.state.page).then((function(t){var n=t.data.data,a=t.data.total_pages;e.setState({persons:n,pageCount:a})}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",id:"react-paginate",children:[Object(p.jsx)(j,{persons:this.state.persons}),Object(p.jsx)(h.a,{previousLabel:"previous",nextLabel:"next",pageCount:this.state.pageCount,onPageChange:this.handlePageClick,containerClassName:"pagination",activeClassName:"active"})]})}}]),n}(s.a.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root")),f()}},[[46,1,2]]]);
//# sourceMappingURL=main.ed75a9bb.chunk.js.map