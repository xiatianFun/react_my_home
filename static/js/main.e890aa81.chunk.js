(this.webpackJsonpreact_my_home=this.webpackJsonpreact_my_home||[]).push([[0],{138:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},179:function(e,t,n){},180:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(25),s=n.n(a),o=(n(138),n(139),n(140),n(141),n(3)),r=(n(142),n(5)),u=n(7),l=n(8),j=n(9),m=n(2),b=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(r.a)(this,n),(e=t.call(this)).boxnum=16;for(var c=[],i=0;i<e.boxnum;i++)c.push({active:!1});return e.state={active:!0,dom:c},e}return Object(u.a)(n,[{key:"shuffle",value:function(e){for(var t=new Array(e),n=0;n<e;n++)t[n]=n;for(var c=[],i=e;i>0;i--){var a=Math.floor(Math.random()*i);c.push(t[a]),t.splice(a,1)}return console.log(c),c}},{key:"componentDidMount",value:function(){var e=this,t=this.shuffle(16),n=this.state.dom,c=-1;this.setAnimate=setInterval((function(){++c>=t.length||(n[t[c]].active=!0,e.setState({dom:n}))}),16),console.log(this.props),this.setCallback=setTimeout((function(){e.props.animateEnd&&e.props.animateEnd(!1)}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.setAnimate),clearTimeout(this.setCallback)}},{key:"render",value:function(){var e={animate:"animate-".concat(this.props.type),active:"active-".concat(this.props.type)};return Object(m.jsx)("div",{className:e.animate,children:this.state.dom.map((function(t,n){return Object(m.jsx)("span",{className:t.active?e.active:""},n)}))})}}]),n}(c.Component),d=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("div",{children:Object(m.jsx)("ion-icon",{style:{color:"#4456a7",fontSize:"30px",marginTop:"3px"},name:"logo-tableau"})}),Object(m.jsx)("div",{style:{marginLeft:"10px",fontSize:"12px"},children:"Summer\u4e2a\u4eba\u535a\u5ba2"})]})})},f=function(){var e,t,n,i,a=Object(c.useState)(!1),s=Object(o.a)(a,2),r=s[0],u=s[1],l=Object(c.useState)(!1),j=Object(o.a)(l,2),b=j[0],d=j[1],f=Object(c.useState)(!1),h=Object(o.a)(f,2),O=h[0],x=h[1],v=Object(c.useState)(!1),p=Object(o.a)(v,2),y=p[0],I=p[1];return Object(c.useEffect)((function(){return e=setTimeout((function(){u(!0)}),1200),t=setTimeout((function(){d(!0)}),1400),n=setTimeout((function(){x(!0)}),1600),i=setTimeout((function(){I(!0)}),2400),function(){clearTimeout(e),clearTimeout(t),clearTimeout(n),clearTimeout(i)}}),[]),Object(m.jsxs)("div",{className:"homeContentStyle text",children:[Object(m.jsx)("div",{className:r?"animate":"",children:"Hey!"}),Object(m.jsx)("div",{className:b?"animate":"",children:"Welcome!"}),Object(m.jsxs)("div",{className:O?"animate":"",style:{fontSize:"39px"},children:["I'm Summer #",Object(m.jsx)("i",{className:y?"cursor":""})]})]})},h=function(){return Object(m.jsx)("div",{})},O=n(19),x=(n(179),[{icon:"home-outline",title:"Home"},{icon:"person-outline",title:"My"},{icon:"chatbubble-outline",title:"Home"},{icon:"camera-outline",title:"Home"},{icon:"settings-outline",title:"Home"}]),v=function(e,t){var n=Object(c.useState)(0),i=Object(o.a)(n,2),a=i[0],s=i[1];Object(c.useImperativeHandle)(t,(function(){return{setIndex:function(e){return s(e)}}}));return Object(m.jsx)("div",{className:"Box",children:Object(m.jsxs)("ul",{children:[x.map((function(t,n){return Object(m.jsx)("li",{className:"list ".concat(a===n?"active":""),onClick:function(){return function(t){s(t),e.setTabbarIndex(t)}(n)},children:Object(m.jsxs)("a",{href:"#",children:[Object(m.jsx)("span",{className:"icon",children:Object(m.jsx)("ion-icon",{name:t.icon})}),Object(m.jsx)("span",{className:"text",children:t.title})]})},t.icon)})),Object(m.jsx)("div",{className:"indicator"})]})})},p=Object(c.forwardRef)(v),y=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(),n=Object(c.useState)(!0),i=Object(o.a)(n,2),a=i[0],s=i[1];return Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)(d,{}),Object(m.jsxs)(O.a,{ref:e,style:{height:"100%"},onIndexChange:function(e){return function(e){t.current.setIndex(e)}(e)},defaultIndex:0,indicator:function(){return null},children:[Object(m.jsxs)(O.a.Item,{children:[Object(m.jsx)(f,{}),Object(m.jsx)(h,{})]}),Object(m.jsxs)(O.a.Item,{children:["\u81ea\u6211\u4ecb\u7ecd",Object(m.jsx)("ion-icon",{name:"home-outline"})]}),Object(m.jsx)(O.a.Item,{children:"\u7559\u8a00"}),Object(m.jsx)(O.a.Item,{children:"\u6587\u7ae0\u5217\u8868"}),Object(m.jsx)(O.a.Item,{children:"\u8bbe\u7f6e"})]}),Object(m.jsx)(p,{ref:t,setTabbarIndex:function(t){e.current.swipeTo(t)}}),a&&Object(m.jsx)(b,{type:"enter",animateEnd:function(e){s(!1)}})]})};var I=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(y,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,181)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root")),g()}},[[180,1,2]]]);
//# sourceMappingURL=main.e890aa81.chunk.js.map