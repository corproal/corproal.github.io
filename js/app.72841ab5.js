(function(t){function e(e){for(var n,a,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)a=r[u],o[a]&&d.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);h&&h(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,a=1;a<i.length;a++){var r=i[a];0!==o[r]&&(n=!1)}n&&(s.splice(e--,1),t=l(l.s=i[0]))}return t}var n={},a={app:0},o={app:0},s=[];function r(t){return l.p+"js/"+({articleDetail:"articleDetail"}[t]||t)+"."+{articleDetail:"d8da492f"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.e=function(t){var e=[],i={articleDetail:1};a[t]?e.push(a[t]):0!==a[t]&&i[t]&&e.push(a[t]=new Promise(function(e,i){for(var n="css/"+({articleDetail:"articleDetail"}[t]||t)+"."+{articleDetail:"02a816bf"}[t]+".css",a=l.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var r=o[s],c=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(c===n||c===a))return e()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){r=u[s],c=r.getAttribute("data-href");if(c===n||c===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||a,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.request=n,i(o)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){a[t]=0}));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise(function(e,i){n=o[t]=[e,i]});e.push(n[2]=s);var c,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=r(t),c=function(e){d.onerror=d.onload=null,clearTimeout(h);var i=o[t];if(0!==i){if(i){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+n+": "+a+")");s.type=n,s.request=a,i[1](s)}o[t]=void 0}};var h=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,u.appendChild(d)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(i,n,function(e){return t[e]}.bind(null,n));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var h=u;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("c21b"),a=i.n(n);a.a},"0a55":function(t,e,i){},"0bac":function(t,e,i){},"10bb":function(t,e,i){},"16ae":function(t,e,i){"use strict";var n=i("84c8"),a=i.n(n);a.a},1730:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAiCAYAAACnSgJKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEG0lEQVRYhbWXX2hbdRTHz/nde3ObJu16kyZOY9c5pchA146hFPShL8OHYEXahdaA4FNBHUgH68CW2lXqnxUfROzrpDOkwcpGEdqXgC8VdU3xYTJdC7NWR5ObxDYxubl/fj50iVnu76ZJ/3wfz++e8zm/P+f8fhehiqTQRBsRWnpQaOpG3tEJXMMpRL6VUi0Ben6datlVqu4sG2o6mhoY26gWiyW0gPqI6A0SsTWAgqNrryBUzcYMJRE2lK3Z1MDY5r7h7rlr54n9iXdRlPy1BikloaQWjNxfn8sXLi3V8j33CDjyWR9xnpxEW/PL9YIBAJC3dyDvPGN/rTuRiyzeqRnunrt2njhPTiLf+Px+wKUEiPAY8o3P2ntfWM9Fltb2hEuhCR/naL9qNWOqFzZoQb5p5B7MGP/++SHVMreBaklAwYWEO8ZMAAVJfPXM9/lvojtWcB4AgIjeIGuPqV7YpEp81lDi4WTgSqxs6AcAmHGFp7qI6Amg6AkiZ/M9koAo+YnqDQLAx1ZwlEITbXzz6ZuVp5rqhU0jc29I7h9esHIuyh2Z9hPnMzOVCVA1G9O27/RalSHZrWNzOVElPlsLGABA7h9eoEp8ttKOgqOLCC09Vn4EhaZuE1gvbBhKPFwLuChDiYepXjDNkBX/fzjv6DTB1XS0Yo/3VDJwJUbVdNQEZ8QvwYFrOGWG7yzXA67qx4hfgiPyraYgWnZ1X3CGHyt+CU6pljA5VFmqamJuISN+CQ56ft0UpMohqQpn+THil+DMpRJaelzhqT1vs3K5wlNdyCiraltIWIcEOVsbET2BeuBE9ASQs7WZ4FUOLzHUdJSqWVNZoegJuiPTNV2r7si0H0VP0AzOxgxG+ZUYAADu+ZnLnLP9I5OzdW8HgN2lturtAAB65v6I/PqQZW/nAQAMZWuWCM0vVV4uyNl82Oi7jKJnsPXW9ShVd5apll1F3tGJQlM3Ci09rKUGePiwULZMLdc0c4Diff7Upwe9z3fJRl7fWRuS+y5erwkO8PAl4zgxejgJ6FlV/vlEanA8WRMc4GBvOBPfUB9o8k/tqTeuFljjpNIgX7i0pGXuDemZ+yOsKrCAbLHsSITjvNS5YuXHfDoXVc+7nT92+pZVW6aF9GLcP/BKXfB65fnu27vIN3Swxozc318ket96p9xmWvaDSEutPEd1hdnLif3xt93zXw6X2w515gAA0o1RG+86t4ac7UnTIKVU377bJ/e/N38k8N0Expy8+9waEsHLSEDX0r+8mAyM3D4SOACA9PW4i3ed/Q2J4DYnYORV+cfjh7rn5UoNjie15EoHGNp25Zie/eP91OAH/xzZzIuSQhNtguvsr4CcAwBA3/79Tbnv4ldHzS3JFZp82ru4kHHNfbKvH9ADS7oxKlTa/gMeCsPWQIn+twAAAABJRU5ErkJggg=="},"1ff9":function(t,e,i){"use strict";var n=i("10bb"),a=i.n(n);a.a},"27fa":function(t,e,i){},"33a8":function(t,e,i){"use strict";var n=i("0bac"),a=i.n(n);a.a},"3f2c":function(t,e,i){"use strict";var n=i("27fa"),a=i.n(n);a.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("VuePageAnimation",[i("keep-alive",[t.$route.meta.keepAlive?i("router-view",{staticClass:"vue-page-animation-router-view",attrs:{"transition-mode":"out-in"}}):t._e()],1)],1),i("VuePageAnimation",[t.$route.meta.keepAlive?t._e():i("router-view",{staticClass:"vue-page-animation-router-view",attrs:{"transition-mode":"out-in"}})],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vue-page-animation"},[i("transition",{attrs:{name:t.transitionName},on:{"before-leave":t.beforeLeave,"before-enter":t.beforeEnter,"after-leave":t.afterLeave,"after-enter":t.afterEnter,"enter-cancelled":t.cancelAnimation,"leave-cancelled":t.cancelAnimation}},[t._t("default")],2)],1)},r=[],l="state"in history&&"replaceState"in history,c=i("c665"),u=i("aa9a"),d=function(){function t(e){var i=e.clsLock,n=void 0===i?"vue-page-animation-lock":i;Object(c["a"])(this,t),this.clsLock=n,this.elBody=document.body||document.getElementsByTagName("body")[0]}return Object(u["a"])(t,[{key:"lockScroll",value:function(){this.elBody.classList.add(this.clsLock)}},{key:"unlockScroll",value:function(){this.elBody.classList.remove(this.clsLock)}},{key:"fixElementPos",value:function(t,e){return t.org_top=t.style.top,t.style.top=0-e+"px",{clear:function(i,n){var a=t.org_top;t.style.top=a,t.org_top=null,i&&window.scrollTo(0,null!=n?n:e||0)}}}}]),t}();function h(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}var p=function(){function t(e){Object(c["a"])(this,t),this.posMap={},this.lastState=null,this.state=null,this.posSaveByUri=!!e,this.lastUri="",this.uri="",this.update()}return Object(u["a"])(t,[{key:"update",value:function(){var t=h({},history.state||{});t.rid||(t.rid=new Date/1,history.replaceState(t,null)),this.lastState=this.state,this.state=t,this.lastUri=this.uri,this.uri=location.href,null==this.lastState&&(this.lastState=t),""==this.lastUri&&(this.lastUri=this.uri)}},{key:"isPageBack",value:function(){return!!l&&this.state.rid<this.lastState.rid}},{key:"isPageForward",value:function(){return!!l&&this.state.rid>this.lastState.rid}},{key:"getCurrentPosition",value:function(){var t=l?this.state.rid:this.uri;return this.posSaveByUri&&(t=this.uri),this.posMap[t]}},{key:"getLastPosition",value:function(){var t=l?this.lastState.rid:this.lastUri;return this.posSaveByUri&&(t=this.lastUri),this.posMap[t]}},{key:"saveLastPosition",value:function(t){var e=l?this.lastState.rid:this.lastUri;this.posSaveByUri&&(e=this.lastUri),this.posMap[e]=t||0}}]),t}(),f={props:{forceTransitionName:{default:""},driveByUrl:{default:!1}},data:function(){return{transitionName:"vue-page-animation-fade"}},created:function(){this.positionFixer=new d({}),this.stateHelper=new p(this.driveByUrl),this.watchRouter()},beforeDestroy:function(){this.unwatchRouter()},activated:function(){this.watchRouter()},deactivated:function(){this.unwatchRouter()},methods:{watchRouter:function(){var t=this;this._calculateScroll||(this._calculateScroll=function(e,i,n){t._lastScrollY=window.scrollY||window.pageYOffset||document.body.scrollTop,n()},this.$router.beforeHooks.push(this._calculateScroll)),this._unwatchRouter||(this._unwatchRouter=this.$watch("$route",function(e,i){if(t._isWatchingRouter){var n=t._lastScrollY||0,a=t.stateHelper;t.positionFixer;a.update(),a.saveLastPosition(n);var o=t.forceTransitionName||"";o||(o=a.isPageBack()?"vue-page-animation-right":a.isPageForward()?"vue-page-animation-left":"vue-page-animation-fade"),t.transitionName=o}})),this._isWatchingRouter=!0},unwatchRouter:function(){if(this._calculateScroll){var t=this.$router.beforeHooks,e=this._calculateScroll;t.indexOf(e)>=0&&this.$router.beforeHooks.splice(t.indexOf(e),1),this._calculateScroll=null}this._isWatchingRouter=!1},beforeLeave:function(t){var e=this.positionFixer,i=this.stateHelper;e.lockScroll(),this._leaveFixer=e.fixElementPos(t,i.getLastPosition()||0)},beforeEnter:function(t){var e=this.positionFixer,i=this.stateHelper,n=null;i.isPageBack()?n=t.getAttribute("data-vue-paga-animation-back"):i.isPageForward()&&(n=t.getAttribute("data-vue-paga-animation-forward")),n=n||i.getCurrentPosition(),e.lockScroll(),this._enterFixer=e.fixElementPos(t,n)},afterLeave:function(){var t=this.positionFixer;t.unlockScroll(),this._leaveFixer&&this._leaveFixer.clear(),this._leaveFixer=null},afterEnter:function(t){var e=this.positionFixer;e.unlockScroll();var i=!0;this._enterFixer&&this._enterFixer.clear(i),this._enterFixer=null},cancelAnimation:function(){this.afterLeave(),this.afterEnter()}}},v=f,g=(i("33a8"),i("2877")),m=Object(g["a"])(v,s,r,!1,null,null,null);m.options.__file="vue-page-animation.vue";var A=m.exports,b={name:"App",data:function(){return{transitionName:""}},components:{VuePageAnimation:A},watch:{$route:function(t,e){t.meta.index>e.meta.index?this.transitionName="slide-left":this.transitionName="slide-right"}}},E=b,w=(i("034f"),Object(g["a"])(E,a,o,!1,null,null,null));w.options.__file="App.vue";var y=w.exports,k=i("8c4f"),C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home",staticStyle:{"padding-bottom":"44px"}},[i("ArticleList")],1)},M=[],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"articleList"},[n("header",{class:t.headerHiddenClass},[n("div",{staticClass:"primary-nav"},[t._m(0),n("div",{staticClass:"searchInputDiv"},[n("img",{staticClass:"searchIcon",attrs:{src:i("1730")}}),n("input",{staticClass:"searchInput",attrs:{type:"text",name:"search",placeholder:"200以上の医療サイトから検索"}}),n("img",{staticClass:"updateIcon",attrs:{src:i("c1ce")},on:{click:t.takePhoto}})])]),n("div",{staticClass:"secondary-nav"},[n("ul",{staticClass:"cate-tab"},t._l(t.cate,function(e,i){return n("li",{staticClass:"cate",class:{"tab-active":t.cate_index===e.id},on:{click:function(i){t.toggleCate(e.id)}}},[n("p",[t._v(t._s(e.des))])])}))])]),n("div",{staticClass:"page",class:{disableScroll:t.showAppMenu}},[n("ul",{staticClass:"article-list"},t._l(t.articleList,function(e,i){return n("li",{staticClass:"article-item",on:{click:function(i){t.gotoDescription(e.id)}}},[n("div",{staticClass:"article-img"},[n("img",{attrs:{src:e.imgUrl,alt:e.name}})]),n("div",{staticClass:"article-info"},[n("p",{staticClass:"article-title"},[t._v(t._s(e.title))]),n("p",{staticClass:"article-site"},[t._v(t._s(e.siteName))])])])}))]),t.shouldShowLoader?n("div",{staticClass:"loader"},[n("img",{attrs:{src:i("d276")}})]):t._e(),n("div",{staticClass:"footerTabDiv"},[n("ul",{staticClass:"footerTab"},[t._l(t.footerTabs,function(e){return n("li",{staticClass:"footerTabItem",on:{click:function(i){t.toggleTab(e.id)}}},[n("img",{attrs:{src:i("5aff")}}),n("p",[t._v(t._s(e.title))])])}),n("dialog-bar",{attrs:{type:"danger",title:"ここはタイトル",content:"ここはコンテンツ",dangerText:"デリート"},on:{cancel:function(e){t.clickCancel()},danger:function(e){t.clickDanger()},confirm:function(e){t.clickConfirm()}},model:{value:t.sendVal,callback:function(e){t.sendVal=e},expression:"sendVal"}})],2)]),t.showAppMenu?n("AppMenu",{on:{closePage:function(e){t.closePage()}}}):t._e()],1)},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"medyLogoDiv"},[n("img",{staticClass:"medyLogo",attrs:{src:i("56f5")}})])}],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"appMenuModal"}},[n("div",{staticClass:"appMenuMask"},[n("div",{staticClass:"appMenuWrapper"},[n("div",{staticClass:"appMenu"},[n("div",{staticClass:"appMenuHeader"},[n("img",{staticClass:"headerClose",attrs:{src:i("821b")},on:{click:function(e){t.closePage()}}}),n("div",{staticClass:"headerTitle"},[t._v("メニュー")])]),n("div",{staticClass:"appMenuContent"},[n("ul",{staticClass:"appMenuList"},[t._l(t.menuList,function(e,i){return n("li",{staticClass:"appMenuItem",on:{click:function(e){t.gotoMenuDetail(i)}}},[n("div",{staticClass:"appMenuIcon"}),n("p",{staticClass:"appMenuItemTitle"},[t._v(t._s(e.title))])])}),n("dialog-bar",{attrs:{type:"danger",title:"ここはタイトル",content:"ここはコンテンツ",dangerText:"デリート"},on:{cancel:function(e){t.clickCancel()},danger:function(e){t.clickDanger()},confirm:function(e){t.clickConfirm()}},model:{value:t.sendVal,callback:function(e){t.sendVal=e},expression:"sendVal"}})],2)])])])])])},I=[],x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.showMask,expression:"showMask"}],staticClass:"dialog"},[i("div",{staticClass:"dialog-container"},[i("div",{staticClass:"dialog-title"},[t._v(t._s(t.title))]),i("div",{staticClass:"content",domProps:{innerHTML:t._s(t.content)}}),i("div",{staticClass:"btns"},["confirm"!=t.type?i("div",{staticClass:"default-btn",on:{click:t.closeBtn}},[t._v("\n                "+t._s(t.cancelText)+"\n            ")]):t._e(),"danger"==t.type?i("div",{staticClass:"danger-btn",on:{click:t.dangerBtn}},[t._v("\n                "+t._s(t.dangerText)+"\n            ")]):t._e(),"confirm"==t.type?i("div",{staticClass:"confirm-btn",on:{click:t.confirmBtn}},[t._v("\n                "+t._s(t.confirmText)+"\n            ")]):t._e()]),i("div",{staticClass:"close-btn",on:{click:t.closeMask}},[i("i",{staticClass:"iconfont icon-close"})])])])},R=[],T={props:{value:{},type:{type:String,default:"default"},content:{type:String,default:""},title:{type:String,default:""},cancelText:{type:String,default:"キャンセル"},dangerText:{type:String,default:"削除"},confirmText:{type:String,default:"遑ｮ隶､"}},data:function(){return{showMask:!1}},methods:{closeMask:function(){this.showMask=!1},closeBtn:function(){this.$emit("cancel"),this.closeMask()},dangerBtn:function(){this.$emit("danger"),this.closeMask()},confirmBtn:function(){this.$emit("confirm"),this.closeMask()}},mounted:function(){this.showMask=this.value},watch:{value:function(t,e){this.showMask=t},showMask:function(t){this.$emit("input",t)}}},P=T,L=(i("1ff9"),Object(g["a"])(P,x,R,!1,null,"28b04191",null));L.options.__file="dialog.vue";var U=L.exports,D={name:"AppMenu",components:{"dialog-bar":U},data:function(){return{menuList:[{title:"ユーザー情報設定"},{title:"お知らせ・キャンペン"},{title:"アンケート"},{title:"配信スケジュール設定"},{title:"クリップリスト"},{title:"論文検索"},{title:"MEDYポイント"},{title:"利用規約"},{title:"よくある質問"},{title:"お問い合わせ"},{title:"お問い合わせ"},{title:"お問い合わせ"},{title:"お問い合わせ"}],sendVal:!1}},methods:{closePage:function(){this.$emit("closePage")},gotoMenuDetail:function(){this.sendVal=!0},clickCancel:function(){},clickDanger:function(){},clickConfirm:function(){}}},B=D,G=(i("3f2c"),Object(g["a"])(B,_,I,!1,null,"52a8fa9c",null));G.options.__file="AppMenu.vue";var H=G.exports,F="feb8db34ea39448db7e2cdf798595036",W={name:"ArticleList",data:function(){return{cate_index:this.Global.currentMenuId,cate:[{id:100,des:"総合Top"},{id:200,des:"臨床Q&A"},{id:300,des:"医療ニュース"},{id:400,des:"アンケート"},{id:500,des:"特集・企画"},{id:600,des:"医学生ナビ"},{id:700,des:"ライフスタイル"}],footerTabs:[{id:0,title:"お知らせ"},{id:1,title:"ポイント"},{id:2,title:"メニュー"}],articleList:[],shouldShowLoader:!1,previousTop:0,isLoading:!1,scrolling:!1,headerHiddenClass:"auto-hide-header",showAppMenu:!1,popScrollTop:0,popHeaderClass:"",notificationsSupported:!1,sendVal:!1}},components:{AppMenu:H,"dialog-bar":U},created:function(){this.getArticleListFromServer(),"Notification"in window&&"serviceWorker"in navigator&&(this.notificationsSupported=!0)},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{takePhoto:function(){this.$router.push({name:"camera"})},gotoBaidu:function(){window.open("http://www.baidu.com","_blank")},handleScroll:function(){this.scrolling||(this.scrolling=!0,setTimeout(this.autoHideHeader(),250))},autoHideHeader:function(){if(this.showAppMenu)this.scrolling=!1;else{var t=0,e=100,i=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;this.previousTop-i>t&&i<100||i<100?this.headerHiddenClass="auto-hide-header":i-this.previousTop>t&&i>e&&(this.headerHiddenClass="auto-hide-header is-hidden"),this.previousTop=i,this.scrolling=!1}},toggleCate:function(t){this.isLoading||(this.cate_index=t,this.Global.currentMenuId=t,this.getArticleListFromServer())},toggleTab:function(t){2==t?(this.recordScroll(),this.showAppMenu=!0,this.restoreScrolAfterPopOpen()):0==t?this.askForNotificationPermission():1==t&&this.$router.push({name:"camera"})},clickCancel:function(){},clickDanger:function(){},clickConfirm:function(){},bodyScroll:function(t){t.preventDefault()},recordScroll:function(){this.popScrollTop=this.previousTop,this.popHeaderClass=this.headerHiddenClass},restoreScrolAfterPopOpen:function(){this.headerHiddenClass=this.popHeaderClass,document.body.style.position="relative",document.body.style.top="-"+this.popScrollTop+"px"},restoreScrolAfterPopClose:function(){var t=this;document.body.style.position="",document.body.style.top="0",this.$nextTick(function(){window.scrollTo(1,t.previousTop)})},closePage:function(){this.showAppMenu=!1,this.restoreScrolAfterPopClose()},askForNotificationPermission:function(){var t=this;this.notificationsSupported&&Notification.requestPermission(function(e){"granted"==e&&t.showNotification()})},showNotification:function(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){return t.showNotification("Notifications granted",{body:"Here is a first notification",icon:"/img/icons/android-chrome-192x192.png",image:"../assets/description/index_logo.png",vibrate:[300,200,300],badge:"/img/icons/android-chrome-192x192.png",data:{primaryKey:1234}})})},gotoDescription:function(t){var e=this.articleList.filter(function(e){return e.id==t});if("undefined"!=typeof e&&null!=e&&e.length>0){var i=e[0];this.$router.push({name:"articleDetail",params:{title:i.title,siteName:""!=i.siteName?i.siteName:"null",openDate:""!=i.openDate?i.openDate:"null",description:""!=i.description?i.description:"null"}})}},showArticleList:function(){this.articleDetail=null},getArticleListFromServer:function(){this.articleList=[],this.shouldShowLoader=!0,this.isLoading=!0;var t=null;switch(this.cate_index){case this.Global.MENU_ID_CLINIC:t="business";break;case this.Global.MENU_ID_NEWS:t="entertainment";break;case this.Global.MENU_ID_ENQUETE:t="health";break;case this.Global.MENU_ID_FEATURE:t="science";break;case this.Global.MENU_ID_NAVI:t="sports";break;case this.Global.MENU_ID_LIFE:t="technology";break;default:break}var e=null!=t?"https://newsapi.org/v2/top-headlines?country=jp&category="+t:"https://newsapi.org/v2/top-headlines?country=jp";e=e+"&apiKey="+F;var i=this;this.$axios.get(e).then(function(t){for(var e=t.data.articles,n=0;n<e.length;n++){var a=e[n],o={id:1e3+n,title:a.title,siteName:null!=a.author?a.author:"",openDate:null!=a.publishedAt?a.publishedAt:"",imgUrl:null!=a.urlToImage?a.urlToImage:"",description:null!=a.description?a.description:""};i.articleList.push(o)}i.$toasted.show("hello billo")}).catch(function(t){alert("記事一覧更新失敗しました。")}).then(function(){i.shouldShowLoader=!1,i.isLoading=!1})},testMedyApi:function(){var t="http://192.168.56.102:7010/api/1/user/comment/get/tabList";this.$axios.post(t,{appVersion:null},{withCredentials:!0}).then(function(t){console.log(t)}).catch(function(t){console.log(t)}).then(function(){})}}},j=W,O=(i("f80e"),Object(g["a"])(j,S,N,!1,null,"61e1d9d0",null));O.options.__file="ArticleList.vue";var Y=O.exports,V={name:"home",components:{ArticleList:Y}},Z=V,Q=Object(g["a"])(Z,C,M,!1,null,null,null);Q.options.__file="Home.vue";var J=Q.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"camera-modal"},[i("video",{ref:"video",staticClass:"camera-stream"})])},X=[],q={mounted:function(){var t=this;navigator.mediaDevices.getUserMedia({video:!0}).then(function(e){t.$refs.video.srcObject=e,t.$refs.video.play()}).catch(function(t){console.error("getUserMedia() error:",t)})}},K=q,$=(i("16ae"),Object(g["a"])(K,z,X,!1,null,"e78f6036",null));$.options.__file="CameraView.vue";var tt=$.exports;n["a"].use(k["a"]);var et=new k["a"]({routes:[{path:"/",name:"home",component:J,meta:{index:1,keepAlive:!0}},{path:"/articleDetail/:title/:siteName/:openDate/:description",name:"articleDetail",component:function(){return i.e("articleDetail").then(i.bind(null,"99ad"))},meta:{index:2}},{path:"/camera",name:"camera",component:tt}],scrollBehavior:function(t,e,i){return i||{x:0,y:0}}}),it=i("9483");Object(it["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var nt,at,ot=i("bc3a"),st=i.n(ot),rt=i("a65d"),lt=i.n(rt),ct=100,ut=200,dt=300,ht=400,pt=500,ft=600,vt=700,gt=ct,mt={MENU_ID_TOP:ct,MENU_ID_CLINIC:ut,MENU_ID_NEWS:dt,MENU_ID_ENQUETE:ht,MENU_ID_FEATURE:pt,MENU_ID_NAVI:ft,MENU_ID_LIFE:vt,currentMenuId:gt},At=mt,bt=Object(g["a"])(At,nt,at,!1,null,null,null);bt.options.__file="Global.vue";var Et=bt.exports;n["a"].config.productionTip=!1,n["a"].prototype.Global=Et,n["a"].prototype.$axios=st.a;var wt={position:"bottom-center",duration:500};n["a"].use(lt.a,wt),new n["a"]({router:et,render:function(t){return t(y)}}).$mount("#app")},"56f5":function(t,e,i){t.exports=i.p+"img/index_logo.8b986932.png"},"5aff":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAYAAAAkNenBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkExRDUwNjM5Q0IxMDExRTVCNTUxRUMyMEZGRDMwMjREIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkExRDUwNjNBQ0IxMDExRTVCNTUxRUMyMEZGRDMwMjREIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTFENTA2MzdDQjEwMTFFNUI1NTFFQzIwRkZEMzAyNEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTFENTA2MzhDQjEwMTFFNUI1NTFFQzIwRkZEMzAyNEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4lgMa6AAACD0lEQVR42uyavWoCQRSFnU2aPEBqIZXlCsEySRls7CW1CNrZpAkI+wgqiA+QPs2S2tJGS9vt06SzijlX7pDx3/ytO3IGDsPOJuv9PHf3rtwx8/k8dwojyJ3IOBmQ89WFbrdbwFSGbqAQymck1gSaQEMohqay2Gw210EAUcdUg4oZ/NLzqgr0AA2g/pojgHjC1PYk3eSL7kGXUCQLRp5a6kTPgZiqfWLjBPYlG1IwLRdCTalQ013SvqDnP6AG4uubTqcji89OOoldA5wc7/qElEC2uSHpX9djibMaKGHRcWIvxJHHWO+PqQNWDtQuO+KMQ7gwsXN8E2ju2TH0qHS4sYaBWyfgxotHIG6seb6iEIQg33xp3FME0/7xYphaBPEJBAXTaN6mJTpCEIIQhJWdqUUQVnamFkEIwsrOys7U4j1yeGW39wsdIQhBPANJnBu44lHsbqyJPLWkh23bb9IY/Zf2m91qseWN4SeXdJu4E3HEbSqWcdGiB24sWtLO8VBApM1rW9KyeaD2FzDiwC4XfglRy33tfli0qs/iOH4bjUZGCWW+hm6xdgVdQLNSqfS+ejWsH5RG+N/F38q8bey4lqT8HTTTWQAeoXs9L1s4Inzeq7E76DzbVGMh2oCIlh6/utBw0izLY6yxRhvriOyywVSFWvr0SjIUfKIxtTTG/tIPF27OJAhBCEKQY4xPAQYAIEedXegjYMIAAAAASUVORK5CYII="},"821b":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAnVJREFUeNrs3DFSwkAUgOGFvQBHwM7SUjq9Aa2dHAEPYo6gnZa2VtJpCZ0ldnZyA92dWUYLFUKSt+9t/n8mQwZBN/lMiGDiHBERERERERERERERERERERERERG139V8PlI8tnGu8Q2EF/Qk3FRhOkt3rcM0v66qByUQ0zS+cbprkca3LA4kYTyF6bffvFlY6NvMGJfh5uaXL23CdC6FMhRc5uoPjNhNWiHaMFwacyU1lqHQAo9+7KacJpQdGNvOigL5Z8vIirInhuhBiAhI2P+u0wu4GpQ6GHHsYRk2pb2GzGs8tlOUmhh1x94oL/WDnl9eXieTyVuYne75lGl8fHjeMjNGPAK8Lw4koSxzohyIIXo4LgqSE8UCRhaQHChWMLKBSKJYwsgKIoFiDSM7SJcoFjFUgHSBYhVDDUibKJYxVIG0gWIdIzZwCjtkxW7fcrGMoRbkQBRnHUPdLqvh7ss8hmqQjlBUY6gHaRlFPYYJkJZQTGCYAWmIYgYjNnTEFiJ8GNzJJ4+9BmnhbxIzKL4HGKZQfE8wzKD4HmGYQOHNRbaQ9jHiis39L0ZFgjT9PKMEFF8KRikoviSMElB8aRjWUXyJGJZRfKkYVlF8yRgWUXzpGNZQfB8wLKF4QYy4Eu5yv7VxIMoqngEmsZ6kz1PPirEtfe9ZR2Nv1EBo64inFH9owGiwCz1KZxPbB0kL/6kJoy5KGJfIupLcZS20YdTYfS2kxiN9nvpGE8aeKBtX6Hnq7+Fo5THMHrvvyx+tnfB54DuOvlZh9tR9XwokbhkXkpdnyla8SJjisY0cEREREREREREREREREREREREREbXflwADAH98E1RP74gVAAAAAElFTkSuQmCC"},"84c8":function(t,e,i){},c1ce:function(t,e,i){t.exports=i.p+"img/update_icon.cdf7add2.png"},c21b:function(t,e,i){},d276:function(t,e,i){t.exports=i.p+"img/loading.e580552f.gif"},f80e:function(t,e,i){"use strict";var n=i("0a55"),a=i.n(n);a.a}});
//# sourceMappingURL=app.72841ab5.js.map