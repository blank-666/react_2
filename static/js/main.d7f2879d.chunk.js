(this.webpackJsonpreact_2=this.webpackJsonpreact_2||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/mars.07582995.svg"},function(e,t,a){e.exports=a.p+"static/media/female.5c87994c.svg"},function(e,t,a){e.exports=a.p+"static/media/anonymous.71ee1719.svg"},function(e,t,a){e.exports=a.p+"static/media/call.58b5d0bb.svg"},function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),s=a.n(r),o=(a(16),a(1)),i=a(2),l=a(4),m=a(3),h=a(7),u=a.n(h),d=a(8),p=a.n(d),f=a(9),g=a.n(f),v=a(10),N=a.n(v),k=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.gender?"male"===this.props.gender?u.a:p.a:g.a,t="gender-image-container ".concat(this.props.gender,"-image-container");return c.a.createElement("div",{className:"wrapper"},c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:t},c.a.createElement("img",{className:"gender-image",src:e,alt:this.props.gender})),c.a.createElement("div",{className:"contact-data"},c.a.createElement("h3",{className:"contact-name"},this.props.firstName," ",this.props.lastName),c.a.createElement("span",{className:"contact-number"},"\u041c\u043e\u0431\u0456\u043b\u044c\u043d\u0438\u0439: ",this.props.phone),c.a.createElement("img",{className:"call-image",src:N.a,alt:"call"}))))}}]),a}(c.a.Component),b=[{firstName:"\u0411\u0430\u0440\u043d\u0435\u0439",lastName:"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u044c\u043a\u0438\u0439",phone:"+380956319521",gender:"male"},{firstName:"\u0420\u043e\u0431\u0456\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u044c\u043a\u0430",phone:"+380931460123",gender:"female"},{firstName:"\u0410\u043d\u043e\u043d\u0456\u043c\u043d\u0438\u0439",lastName:"\u0410\u043d\u043e\u043d\u0456\u043c\u0443\u0441",phone:"+380666666666"},{firstName:"\u041b\u0456\u043b\u0456\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",phone:"+380504691254",gender:"female"},{firstName:"\u041c\u0430\u0440\u0448\u0435\u043d",lastName:"\u0415\u0440\u0456\u043a\u0441\u043e\u043d\u044f\u043d",phone:"+380739432123",gender:"male"},{firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u0435\u0441",phone:"+380956319521",gender:"male"},{firstName:"\u0421\u043d\u0443\u043f",lastName:"\u0414\u043e\u0433",phone:"+380420420420",gender:"male"}],C=["firstName","lastName","phone"],E=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={search:"",activeGenders:["male","female",void 0]},e.handleSearchChange=function(t){e.setState({search:t.currentTarget.value.toLowerCase()})},e.filterContacts=function(){return b.filter((function(t){return C.some((function(a){return t[a].toLowerCase().includes(e.state.search)&&e.state.activeGenders.includes(t.gender)}))}))},e.isGenderActive=function(t){return e.state.activeGenders.includes(t)},e.onCheckBoxChange=function(t){t.persist(),"unknown"===t.currentTarget.name?t.target.checked?e.setState((function(e){return{activeGenders:e.activeGenders.concat(void 0)}})):e.setState({activeGenders:e.state.activeGenders.filter((function(e){return e}))}):t.target.checked?e.setState((function(e){return{activeGenders:e.activeGenders.concat(t.target.name)}})):e.setState({activeGenders:e.state.activeGenders.filter((function(e){return e!==t.currentTarget.name}))})},e}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"search-panel"},c.a.createElement("input",{placeholder:"Search contacts...",className:"search-input",type:"text",value:this.state.search,onChange:this.handleSearchChange}),c.a.createElement("div",{className:"checkbox-panel"},c.a.createElement("label",{htmlFor:"male"},"Male:"),c.a.createElement("input",{name:"male",className:"checkbox",type:"checkbox",onChange:this.onCheckBoxChange,checked:this.isGenderActive("male")}),c.a.createElement("label",{htmlFor:"female"},"Female:"),c.a.createElement("input",{name:"female",className:"checkbox",type:"checkbox",onChange:this.onCheckBoxChange,checked:this.isGenderActive("female")}),c.a.createElement("label",{htmlFor:"unknown"},"Unknown gender:"),c.a.createElement("input",{name:"unknown",className:"checkbox",type:"checkbox",onChange:this.onCheckBoxChange,checked:this.isGenderActive(void 0)})),this.filterContacts().map((function(e){return c.a.createElement(k,e)})))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.d7f2879d.chunk.js.map