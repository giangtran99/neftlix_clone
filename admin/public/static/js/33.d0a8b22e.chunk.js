(this["webpackJsonpweb-megaone"]=this["webpackJsonpweb-megaone"]||[]).push([[33],{1412:function(e,t,a){e.exports={baseView:"antd-pro-views-accounts-base-view-baseView",left:"antd-pro-views-accounts-base-view-left",right:"antd-pro-views-accounts-base-view-right",avatar_title:"antd-pro-views-accounts-base-view-avatar_title",avatar:"antd-pro-views-accounts-base-view-avatar",button_view:"antd-pro-views-accounts-base-view-button_view"}},1436:function(e,t,a){e.exports={main:"antd-pro-views-accounts-info-main",leftmenu:"antd-pro-views-accounts-info-leftmenu",right:"antd-pro-views-accounts-info-right",title:"antd-pro-views-accounts-info-title"}},1531:function(e,t,a){"use strict";a.r(t);var n=a(458),r=a(459),i=a(461),s=a(460),c=(a(489),a(456)),o=a.n(c),u=a(2),l=a.n(u),m=a(44),p=a(39),d=a(825),f=a(604),v=(a(454),a(467)),g=a.n(v),h=(a(761),a(763)),b=a.n(h),y=(a(446),a(444)),E=a.n(y),w=a(451),j=a(62),O=(a(535),a(490)),M=a.n(O),k=(a(481),a(482)),N=a.n(k),x=a(792),R=a(1159),U=a(1412),_=a.n(U),A=a(596),S=a(91),z=N.a.Item,C=(M.a.Option,function(e){e.onChange;var t=e.action,a=e.headers,n=e.multiple,r=Object(j.a)(e,["onChange","action","headers","multiple"]),i=Object(u.useState)(e.avatar),s=Object(w.a)(i,2),c=s[0],o=s[1];return l.a.createElement(u.Fragment,null,l.a.createElement("div",{className:_.a.avatar_title},l.a.createElement(d.a,{id:"app.settings.basic.avatar",defaultMessage:"Avatar"})),l.a.createElement("div",{className:_.a.avatar},l.a.createElement("img",{src:c,alt:"avatar"})),l.a.createElement(b.a,Object.assign({fileList:[]},r,{multiple:n||!1,action:t,headers:a,onChange:function(t){var a=t.fileList;console.log("prop avartar ",e),o(S.a.API_URL+"/uploads/"+a[0].name),e.receiveAvatar(S.a.API_URL+"/uploads/"+a[0].name)},customRequest:function(e){var t=e.onSuccess,a=e.file,n=e.onError;Object(A.e)(a).then((function(e){var n=[{status:"done",url:e.url}];t(n,a)})).catch(n)}}),l.a.createElement("div",{className:_.a.button_view},l.a.createElement(E.a,{icon:l.a.createElement(R.a,null)},l.a.createElement(d.a,{id:"app.settings.basic.change-avatar",defaultMessage:"Thay avatar"})))))}),I=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).form=l.a.createRef(),r.setBaseInfo=function(){var e=r.props.currentUser;Object.keys(r.form.current.getFieldsValue()).forEach((function(t){var a={};a[t]=e[t]||null,r.form.current.setFieldsValue(a)}))},r.receiveAvatar=function(e){r.setState({avatar:e})},r.getViewDom=function(e){r.view=e},r.handleSubmit=function(){var e=r.props.dispatch,t=Object.assign(r.form.current.getFieldsValue(),{avatar:r.state.avatar});Object(A.d)(t,localStorage.getItem("token")).then((function(t){e({type:"user/saveCurrentUser",payload:t})}))},r.state={avatar:r.props.avatar},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.setBaseInfo()}},{key:"getAvatarURL",value:function(){var e=this.props.currentUser;if(e.avatar)return e.avatar;return"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"}},{key:"render",value:function(){var e=this.props.intl.formatMessage;return l.a.createElement("div",{className:_.a.baseView,ref:this.getViewDom},l.a.createElement("div",{className:_.a.left},l.a.createElement(N.a,{ref:this.form,layout:"vertical",hideRequiredMark:!0},l.a.createElement(z,{label:e({id:"app.settings.basic.firstname"}),name:"firstName",rules:[{required:!1,message:e({id:"app.settings.basic.firstname-message"},{})}]},l.a.createElement(g.a,null)),l.a.createElement(z,{label:e({id:"app.settings.basic.lastname"}),name:"lastName",rules:[{required:!1}]},l.a.createElement(g.a,null)),l.a.createElement(z,{label:e({id:"app.settings.basic.email"}),name:"email",rules:[{required:!1}]},l.a.createElement(g.a,null)),l.a.createElement(z,{label:e({id:"app.settings.basic.phone"}),name:"phone",rules:[{required:!1}]},l.a.createElement(g.a,null)),l.a.createElement(z,{label:e({id:"app.settings.basic.gender"}),name:"gender",rules:[{required:!1}]},l.a.createElement(g.a,null)),l.a.createElement(E.a,{type:"primary",onClick:this.handleSubmit},l.a.createElement(d.a,{id:"app.settings.basic.update",defaultMessage:"C\u1eadp nh\u1eadt"})))),l.a.createElement("div",{className:_.a.right},l.a.createElement(C,{avatar:this.getAvatarURL(),receiveAvatar:this.receiveAvatar})))}}]),a}(u.Component),L=Object(m.c)((function(e){return{currentUser:e.user.currentUser}}))(Object(x.c)(I)),F=(a(1433),a(1125)),K=a.n(F),V={strong:l.a.createElement("font",{className:"strong"},l.a.createElement(d.a,{id:"app.settings.security.strong",defaultMessage:"Strong"})),medium:l.a.createElement("font",{className:"medium"},l.a.createElement(d.a,{id:"app.settings.security.medium",defaultMessage:"Medium"})),weak:l.a.createElement("font",{className:"weak"},l.a.createElement(d.a,{id:"app.settings.security.weak",defaultMessage:"Weak"}),"Weak")},W=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).getData=function(){return[{title:e.props.intl.formatMessage({id:"app.settings.security.password"},{}),description:l.a.createElement(u.Fragment,null,e.props.intl.formatMessage({id:"app.settings.security.password-description"}),"\uff1a",V.strong),actions:[l.a.createElement("a",null,l.a.createElement(d.a,{id:"app.settings.security.modify",defaultMessage:"Modify"}))]},{title:e.props.intl.formatMessage({id:"app.settings.security.phone"},{}),description:"".concat(e.props.intl.formatMessage({id:"app.settings.security.phone-description"},{}),"\uff1a138****8293"),actions:[l.a.createElement("a",null,l.a.createElement(d.a,{id:"app.settings.security.modify",defaultMessage:"Modify"}))]},{title:e.props.intl.formatMessage({id:"app.settings.security.email"},{}),description:"".concat(e.props.intl.formatMessage({id:"app.settings.security.email-description"},{}),"\uff1am***one.com"),actions:[l.a.createElement("a",null,l.a.createElement(d.a,{id:"app.settings.security.modify",defaultMessage:"Modify"}))]}]},e}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement(u.Fragment,null,l.a.createElement(K.a,{itemLayout:"horizontal",dataSource:this.getData(),renderItem:function(e){return l.a.createElement(K.a.Item,{actions:e.actions},l.a.createElement(K.a.Item.Meta,{title:e.title,description:e.description}))}}))}}]),a}(u.Component),q=Object(x.c)(W),D=a(1436),P=a.n(D),T=o.a.Item,B=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var r;Object(n.a)(this,a),(r=t.call(this,e)).getmenu=function(){var e=r.state.menuMap;return Object.keys(e).map((function(t){return l.a.createElement(T,{key:t},e[t])}))},r.getRightTitle=function(){var e=r.state,t=e.selectKey;return e.menuMap[t]},r.selectKey=function(e){var t=e.key;(0,r.props.dispatch)(p.routerRedux.push({pathname:"/account/settings/".concat(t)})),r.setState({selectKey:t})},r.resize=function(){r.main&&requestAnimationFrame((function(){var e="inline",t=r.main.offsetWidth;r.main.offsetWidth<641&&t>400&&(e="horizontal"),window.innerWidth<768&&t>400&&(e="horizontal"),r.setState({mode:e})}))};var i=e.match,s=e.location,c={base:l.a.createElement(d.a,{id:"app.settings.menuMap.basic",defaultMessage:"Th\xf4ng tin"}),security:l.a.createElement(d.a,{id:"app.settings.menuMap.security",defaultMessage:"B\u1ea3o m\u1eadt"})},o=s.pathname.replace("".concat(i.path,"/"),"");return r.state={mode:"inline",menuMap:c,selectKey:c[o]?o:"base"},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){console.log("alo alo",this.props),window.addEventListener("resize",this.resize),this.resize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this,t=this.props,a=(t.children,t.currentUser);if(console.log("render account ",a),!a.id)return"";var n=this.state,r=n.mode,i=n.selectKey;return l.a.createElement(f.a,null,l.a.createElement("div",{className:P.a.main,ref:function(t){e.main=t}},l.a.createElement("div",{className:P.a.leftmenu},l.a.createElement(o.a,{mode:r,selectedKeys:[i],onClick:this.selectKey},this.getmenu())),l.a.createElement("div",{className:P.a.right},l.a.createElement("div",{className:P.a.title},this.getRightTitle()),l.a.createElement(p.Switch,null,l.a.createElement(p.Route,{exact:!0,path:"/account/settings",name:"settings_base",render:function(e){return l.a.createElement(L,e)}}),l.a.createElement(p.Route,{exact:!0,path:"/account/settings/base",name:"settings_base",render:function(e){return l.a.createElement(L,e)}}),l.a.createElement(p.Route,{exact:!0,path:"/account/settings/security",name:"settings_security",render:function(e){return l.a.createElement(q,e)}})))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.match,n=e.location.pathname.replace("".concat(a.path,"/"),"");return(n=t.menuMap[n]?n:"base")!==t.selectKey?{selectKey:n}:null}}]),a}(u.Component);t.default=Object(m.c)((function(e){return{currentUser:e.user.currentUser}}))(B)},596:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return o})),a.d(t,"e",(function(){return u})),a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return m}));a(26),a(10);var n=a(0),r=a.n(n),i=a(5),s=a(91),c={voucher:"voucher",partner:"partner",user:"user",store:"store",category:"category",banner:"banner",group:"group",voucher_hot:"voucher_hot"},o=["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue","purple"],u=function(){var e=Object(i.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("file",t),e.next=4,fetch(s.a.API_URL+"/upload",{method:"POST",body:a});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(e){return Object.keys(e).map((function(t){return e[t]})).join(",")},m=function(){var e=Object(i.a)(r.a.mark((function e(t,a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(s.a.API_URL+"/api/v1/accounts/update-me",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+a},body:JSON.stringify(t)});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},604:function(e,t,a){"use strict";var n=a(458),r=a(459),i=a(461),s=a(460),c=a(2),o=a.n(c),u=a(44),l=a(605),m=a.n(l),p=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.contentWidth,a=e.children,n="".concat(m.a.main);return"Fixed"===t&&(n="".concat(m.a.main," ").concat(m.a.wide)),o.a.createElement("div",{className:n},a)}}]),a}(c.PureComponent);t.a=Object(u.c)((function(e){return{contentWidth:e.setting.contentWidth}}))(p)},605:function(e,t,a){e.exports={main:"antd-pro-components-page-header-wrapper-grid-content-main",wide:"antd-pro-components-page-header-wrapper-grid-content-wide"}}}]);