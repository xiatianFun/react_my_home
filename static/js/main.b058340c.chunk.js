(this.webpackJsonpreact_my_home=this.webpackJsonpreact_my_home||[]).push([[0],{138:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},179:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(25),s=n.n(i),r=(n(138),n(139),n(140),n(141),n(2)),o=(n(142),n(5)),u=n(7),j=n(8),l=n(9),m=n(3),b=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n),(e=t.call(this)).boxnum=16;for(var c=[],a=0;a<e.boxnum;a++)c.push({active:!1});return e.state={active:!0,dom:c},e}return Object(u.a)(n,[{key:"shuffle",value:function(e){for(var t=new Array(e),n=0;n<e;n++)t[n]=n;for(var c=[],a=e;a>0;a--){var i=Math.floor(Math.random()*a);c.push(t[i]),t.splice(i,1)}return console.log(c),c}},{key:"componentDidMount",value:function(){var e=this,t=this.shuffle(16),n=this.state.dom,c=-1;this.setAnimate=setInterval((function(){++c>=t.length||(n[t[c]].active=!0,e.setState({dom:n}))}),16),console.log(this.props),this.setCallback=setTimeout((function(){e.props.animateEnd&&e.props.animateEnd(!1)}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.setAnimate),clearTimeout(this.setCallback)}},{key:"render",value:function(){var e={animate:"animate-".concat(this.props.type),active:"active-".concat(this.props.type)};return Object(m.jsx)("div",{className:e.animate,children:this.state.dom.map((function(t,n){return Object(m.jsx)("span",{className:t.active?e.active:""},n)}))})}}]),n}(c.Component),f=function(){return Object(m.jsx)("div",{className:"header",children:"Summer\u4e2a\u4eba\u535a\u5ba2"})},h=n(21),d=function(){var e,t,n,a,i=Object(c.useState)(!1),s=Object(r.a)(i,2),o=s[0],u=s[1],j=Object(c.useState)(!1),l=Object(r.a)(j,2),b=l[0],f=l[1],h=Object(c.useState)(!1),d=Object(r.a)(h,2),O=d[0],v=d[1],x=Object(c.useState)(!1),p=Object(r.a)(x,2),y=p[0],g=p[1];return Object(c.useEffect)((function(){return e=setTimeout((function(){u(!0)}),1200),t=setTimeout((function(){f(!0)}),1400),n=setTimeout((function(){v(!0)}),1600),a=setTimeout((function(){g(!0)}),2400),function(){clearTimeout(e),clearTimeout(t),clearTimeout(n),clearTimeout(a)}}),[]),Object(m.jsxs)("div",{className:"homeContentStyle text",children:[Object(m.jsx)("div",{className:o?"animate":"",children:"Hey!"}),Object(m.jsx)("div",{className:b?"animate":"",children:"Welcome!"}),Object(m.jsxs)("div",{className:O?"animate":"",style:{fontSize:"39px"},children:["I'm Summer #",Object(m.jsx)("i",{className:y?"cursor":""})]})]})},O=function(){return Object(m.jsx)(m.Fragment,{})},v=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{style:{color:"#fff"},children:"\u8fd9\u91cc\u662f\u6587\u7ae0\u5217\u8868"})})},x=function(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)(f,{}),Object(m.jsxs)(h.a,{style:{height:"100%"},defaultIndex:1,children:[Object(m.jsx)(h.a.Item,{children:"\u7b80\u5386"}),Object(m.jsxs)(h.a.Item,{children:[Object(m.jsx)(d,{}),Object(m.jsx)(O,{})]}),Object(m.jsx)(h.a.Item,{children:Object(m.jsx)(v,{})})]}),n&&Object(m.jsx)(b,{type:"enter",animateEnd:function(e){a(!1)}})]})};var p=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(x,{})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,180)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root")),y()}},[[179,1,2]]]);
//# sourceMappingURL=main.b058340c.chunk.js.map