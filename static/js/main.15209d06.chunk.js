(this.webpackJsonpreact_my_home=this.webpackJsonpreact_my_home||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(4),i=n.n(r),o=(n(14),n(15),n(16),n(17),n(2)),u=(n(18),n(5)),A=n(6),s=n(9),l=n(8),v=n(0),m=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n),(e=t.call(this)).boxnum=16;for(var c=[],a=0;a<e.boxnum;a++)c.push({active:!1});return e.state={active:!0,dom:c},e}return Object(A.a)(n,[{key:"shuffle",value:function(e){for(var t=new Array(e),n=0;n<e;n++)t[n]=n;for(var c=[],a=e;a>0;a--){var r=Math.floor(Math.random()*a);c.push(t[r]),t.splice(r,1)}return console.log(c),c}},{key:"componentDidMount",value:function(){var e=this,t=this.shuffle(16),n=this.state.dom,c=-1;this.setAnimate=setInterval((function(){++c>=t.length||(n[t[c]].active=!0,e.setState({dom:n}))}),16),console.log(this.props),this.setCallback=setTimeout((function(){e.props.animateEnd&&e.props.animateEnd(!1)}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.setAnimate),clearTimeout(this.setCallback)}},{key:"render",value:function(){var e={animate:"animate-".concat(this.props.type),active:"active-".concat(this.props.type)};return Object(v.jsx)("div",{className:e.animate,children:this.state.dom.map((function(t,n){return Object(v.jsx)("span",{className:t.active?e.active:""},n)}))})}}]),n}(c.Component),j=function(){return Object(v.jsx)("div",{className:"header",children:"Summer\u4e2a\u4eba\u535a\u5ba2"})},d=function(){var e,t,n,a,r=Object(c.useState)(!1),i=Object(o.a)(r,2),u=i[0],A=i[1],s=Object(c.useState)(!1),l=Object(o.a)(s,2),m=l[0],j=l[1],d=Object(c.useState)(!1),f=Object(o.a)(d,2),O=f[0],b=f[1],C=Object(c.useState)(!1),g=Object(o.a)(C,2),E=g[0],I=g[1];return Object(c.useEffect)((function(){return e=setTimeout((function(){A(!0)}),1200),t=setTimeout((function(){j(!0)}),1400),n=setTimeout((function(){b(!0)}),1600),a=setTimeout((function(){I(!0)}),2400),function(){clearTimeout(e),clearTimeout(t),clearTimeout(n),clearTimeout(a)}}),[]),Object(v.jsxs)("div",{className:"homeContentStyle text",children:[Object(v.jsx)("div",{className:u?"animate":"",children:"Hey!"}),Object(v.jsx)("div",{className:m?"animate":"",children:"Welcome!"}),Object(v.jsxs)("div",{className:O?"animate":"",style:{fontSize:"39px"},children:["I'm Summer #",Object(v.jsx)("i",{className:E?"cursor":""})]})]})},f=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"flex-col navBox",children:Object(v.jsxs)("div",{onClick:function(){alert("\u70b9\u51fb\u4e86\u6587\u7ae0")},children:[Object(v.jsx)("img",{src:"data:image/png;base64,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",className:"WorkImage",alt:""}),Object(v.jsx)("div",{className:"WorkTitle",children:"\u6587\u7ae0"})]})})})},O=function(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(v.jsxs)("div",{className:"main",children:[Object(v.jsx)(j,{}),Object(v.jsx)(d,{}),Object(v.jsx)(f,{}),n&&Object(v.jsx)(m,{type:"enter",animateEnd:function(e){a(!1)}})]})};var b=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(O,{})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(b,{})}),document.getElementById("root")),C()}],[[20,1,2]]]);
//# sourceMappingURL=main.15209d06.chunk.js.map