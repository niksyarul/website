!function(e,t,n,o,r){"function"==typeof define&&define.amd?define(function(){return e.fullpage=o(t,n),e.fullpage}):"object"==typeof exports?module.exports=o(t,n):t.fullpage=o(t,n)}(this,window,document,function(e,t){"use strict";var n="fullpage-wrapper",o="."+n,r="fp-responsive",i="fp-notransition",a="fp-destroyed",l="fp-enabled",c="fp-viewing",s="active",u="."+s,f="fp-completely",d="."+f,v=".section",p="fp-section",h="."+p,g=h+u,m="fp-tableCell",S="."+m,b="fp-auto-height",w="."+b,y=".fp-auto-height-responsive",E="fp-normal-scroll",L="fp-nav",x="#"+L,A="fp-tooltip",T="."+A,k="fp-show-active",M=".slide",O="fp-slide",C="."+O,H=C+u,I="fp-slides",B="."+I,R="fp-slidesContainer",N="."+R,z="fp-table",P="fp-slidesNav",j="."+P,D=j+" a",W=".fp-controlArrow",Y="fp-prev",V="fp-controlArrow "+Y,U=W+("."+Y),F="fp-controlArrow fp-next",X=W+".fp-next";function _(t,n){e.console&&e.console[t]&&e.console[t]("fullPage: ")}function K(e,n){return(n=arguments.length>1?n:t)?n.querySelectorAll(e):null}function $(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=$(e[r],o[r]))}return e}function Q(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function q(){return"innerHeight"in e?e.innerHeight:t.documentElement.offsetHeight}function G(){return e.innerWidth}function J(e,t){var n;for(n in e=ae(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function Z(e,t,n){for(var o=e[n];o&&!Te(o,t);)o=o[n];return o}function ee(e,t){return Z(e,t,"previousElementSibling")}function te(e,t){return Z(e,t,"nextElementSibling")}function ne(e){return e.previousElementSibling}function oe(e){return e.nextElementSibling}function re(e){return e[e.length-1]}function ie(e,t){e=se(e)?e[0]:e;for(var n=null!=t?K(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function ae(e){return se(e)?e:[e]}function le(e){e=ae(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function ce(e){e=ae(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function se(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function ue(e,t){e=ae(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function fe(e,t){e=ae(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function de(e,t){t.appendChild(e)}function ve(e,n,o){var r;n=n||t.createElement("div");for(var i=0;i<e.length;i++){var a=e[i];(o&&!i||!o)&&(r=n.cloneNode(!0),a.parentNode.insertBefore(r,a)),r.appendChild(a)}return e}function pe(e,t){ve(e,t,!0)}function he(e,t){for("string"==typeof t&&(t=Me(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function ge(e){for(var n=t.createDocumentFragment();e.firstChild;)n.appendChild(e.firstChild);e.parentNode.replaceChild(n,e)}function me(e,t){return e&&1===e.nodeType?Te(e,t)?e:me(e.parentNode,t):null}function Se(e,t){we(e,e.nextSibling,t)}function be(e,t){we(e,e,t)}function we(e,t,n){se(n)||("string"==typeof n&&(n=Me(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function ye(){var n=t.documentElement;return(e.pageYOffset||n.scrollTop)-(n.clientTop||0)}function Ee(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})}function Le(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function xe(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function Ae(n,o,r){var i;r=void 0===r?{}:r,"function"==typeof e.CustomEvent?i=new CustomEvent(o,{detail:r}):(i=t.createEvent("CustomEvent")).initCustomEvent(o,!0,!0,r),n.dispatchEvent(i)}function Te(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function ke(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function Me(e){var n=t.createElement("div");return n.innerHTML=e.trim(),n.firstChild}function Oe(e){e=ae(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function Ce(e,t,n){for(var o=e[n],r=[];o;)(Te(o,t)||null==t)&&r.push(o),o=o[n];return r}function He(e,t){return Ce(e,t,"nextElementSibling")}function Ie(e,t){return Ce(e,t,"previousElementSibling")}return e.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,n){n=n||e;for(var o=0;o<this.length;o++)t.call(n,this[o],o,this)}),e.fp_utils={$:K,deepExtend:$,hasClass:Q,getWindowHeight:q,css:J,until:Z,prevUntil:ee,nextUntil:te,prev:ne,next:oe,last:re,index:ie,getList:ae,hide:le,show:ce,isArrayOrList:se,addClass:ue,removeClass:fe,appendTo:de,wrap:ve,wrapAll:pe,wrapInner:he,unwrap:ge,closest:me,after:Se,before:be,insertBefore:we,getScrollTop:ye,siblings:Ee,preventDefault:Le,isFunction:xe,trigger:Ae,matches:Te,toggle:ke,createElementFromHTML:Me,remove:Oe,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:Ce,nextAll:He,prevAll:Ie,showError:_},function(Z,ae){var se=ae&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(ae.licenseKey)||t.domain.indexOf("alvarotrigo.com")>-1,ve=K("html, body"),we=K("html")[0],Ce=K("body")[0];if(!Q(we,l)){var Be={};ae=$({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:e.fp_scrolloverflow?e.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,touchWrapper:"string"==typeof Z?K(Z)[0]:Z,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:v,slideSelector:M,v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},ae);var Re,Ne,ze,Pe,je=!1,De=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),We="ontouchstart"in e||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,Ye="string"==typeof Z?K(Z)[0]:Z,Ve=q(),Ue=G(),Fe=!1,Xe=!0,_e=!0,Ke=[],$e={m:{up:!0,down:!0,left:!0,right:!0}};$e.k=$({},$e.m);var Qe,qe,Ge,Je,Ze,et,tt,nt,ot,rt=e.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"},it={touchmove:"ontouchmove"in e?"touchmove":rt.move,touchstart:"ontouchstart"in e?"touchstart":rt.down},at='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',lt=!1;try{var ct=Object.defineProperty({},"passive",{get:function(){lt=!0}});e.addEventListener("testPassive",null,ct),e.removeEventListener("testPassive",null,ct)}catch(e){}var st,ut,ft,dt=$({},ae),vt=!1,pt=!0,ht=["parallax","scrollOverflowReset","dragAndMove","offsetSections","fadingEffect","responsiveSlides","continuousHorizontal","interlockedSlides","scrollHorizontally","resetSliders","cards","dropEffect","waterEffect"];ao(),e.fp_easings=$(e.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),Ye&&(Be.version="3.1.1",Be.setAutoScrolling=Tt,Be.setRecordHistory=kt,Be.setScrollingSpeed=Mt,Be.setFitToSection=Ot,Be.setLockAnchors=function(e){ae.lockAnchors=e},Be.setMouseWheelScrolling=Ct,Be.setAllowScrolling=Ht,Be.setKeyboardScrolling=Bt,Be.moveSectionUp=Rt,Be.moveSectionDown=Nt,Be.silentMoveTo=zt,Be.moveTo=Pt,Be.moveSlideRight=jt,Be.moveSlideLeft=Dt,Be.fitToSection=Zt,Be.reBuild=Wt,Be.setResponsive=Vt,Be.getFullpageData=function(){return ae},Be.destroy=function(n){Tt(!1,"internal"),Ht(!0),It(!1),Bt(!1),ue(Ye,a),[Ze,Je,qe,et,tt,ot,Ge,ft].forEach(function(e){clearTimeout(e)}),e.removeEventListener("scroll",Jt),e.removeEventListener("hashchange",An),e.removeEventListener("resize",Pn),t.removeEventListener("keydown",kn),t.removeEventListener("keyup",Mn),["click","touchstart"].forEach(function(e){t.removeEventListener(e,Ut)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){t.removeEventListener(e,Xt,!0)}),n&&(no(0),K("img[data-src], source[data-src], audio[data-src], iframe[data-src]",Ye).forEach(function(e){gn(e,"src")}),K("img[data-srcset]").forEach(function(e){gn(e,"srcset")}),Oe(K(x+", "+j+", "+W)),J(K(h),{height:"","background-color":"",padding:""}),J(K(C),{width:""}),J(Ye,{height:"",position:"","-ms-touch-action":"","touch-action":""}),J(ve,{overflow:"",height:""}),fe(we,l),fe(Ce,r),Ce.className.split(/\s+/).forEach(function(e){0===e.indexOf(c)&&fe(Ce,e)}),K(h+", "+C).forEach(function(e){ae.scrollOverflowHandler&&ae.scrollOverflow&&ae.scrollOverflowHandler.remove(e),fe(e,z+" "+s+" "+f);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles")),Q(e,p)&&!vt&&e.removeAttribute("data-anchor")}),Yn(Ye),[S,N,B].forEach(function(e){K(e,Ye).forEach(function(e){ge(e)})}),J(Ye,{"-webkit-transition":"none",transition:"none"}),e.scrollTo(0,0),[p,O,R].forEach(function(e){fe(K("."+e),e)}))},Be.getActiveSection=function(){return new uo(K(g)[0])},Be.getActiveSlide=function(){return vn(K(H,K(g)[0])[0])},Be.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<K(ae.sectionSelector,Ye).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<K(ae.sectionSelector,Ye).length;t++)e.push(0);return e}(),options:ae,setAutoScrolling:Tt},Be.shared={afterRenderActions:Gt,isNormalScrollElement:!1},e.fullpage_api=Be,ae.$&&Object.keys(Be).forEach(function(e){ae.$.fn.fullpage[e]=Be[e]}),ae.css3&&(ae.css3=function(){var n,o=t.createElement("p"),r={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var i in o.style.display="block",t.body.insertBefore(o,null),r)void 0!==o.style[i]&&(o.style[i]="translate3d(1px,1px,1px)",n=e.getComputedStyle(o).getPropertyValue(r[i]));return t.body.removeChild(o),void 0!==n&&n.length>0&&"none"!==n}()),ae.scrollBar=ae.scrollBar||ae.hybrid,function(){if(!ae.anchors.length){var e=K(ae.sectionSelector.split(",").join("[data-anchor],")+"[data-anchor]",Ye);e.length&&e.length===K(ae.sectionSelector,Ye).length&&(vt=!0,e.forEach(function(e){ae.anchors.push(e.getAttribute("data-anchor").toString())}))}if(!ae.navigationTooltips.length){var t=K(ae.sectionSelector.split(",").join("[data-tooltip],")+"[data-tooltip]",Ye);t.length&&t.forEach(function(e){ae.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){J(Ye,{height:"100%",position:"relative"}),ue(Ye,n),ue(we,l),Ve=q(),fe(Ye,a),ue(K(ae.sectionSelector,Ye),p),ue(K(ae.slideSelector,Ye),O);for(var e=K(h),o=0;o<e.length;o++){var r=o,i=e[o],c=K(C,i),u=c.length;i.setAttribute("data-fp-styles",i.getAttribute("style")),$t(i,r),Qt(i,r),u>0?Kt(i,c,u):ae.verticalCentered&&Fn(i)}ae.fixedElements&&ae.css3&&K(ae.fixedElements).forEach(function(e){Ce.appendChild(e)}),ae.navigation&&function(){var e=t.createElement("div");e.setAttribute("id",L);var n=t.createElement("ul");e.appendChild(n),de(e,Ce);var o=K(x)[0];ue(o,"fp-"+ae.navigationPosition),ae.showActiveTooltip&&ue(o,k);for(var r="",i=0;i<K(h).length;i++){var a="";ae.anchors.length&&(a=ae.anchors[i]),r+='<li><a href="#'+a+'"><span class="fp-sr-only">'+qt(i,"Section")+"</span><span></span></a>";var l=ae.navigationTooltips[i];void 0!==l&&""!==l&&(r+='<div class="'+A+" fp-"+ae.navigationPosition+'">'+l+"</div>"),r+="</li>"}K("ul",o)[0].innerHTML=r;var c=K("li",K(x)[0])[ie(K(g)[0],h)];ue(K("a",c),s)}(),K('iframe[src*="youtube.com/embed/"]',Ye).forEach(function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)}),ae.scrollOverflow&&(Qe=ae.scrollOverflowHandler.init(ae))}(),Ht(!0),It(!0),Tt(ae.autoScrolling,"internal"),Dn(),Zn(),"complete"===t.readyState&&xn(),e.addEventListener("load",xn),ae.scrollOverflow||Gt(),function(){for(var e=1;e<4;e++)ot=setTimeout(_t,350*e)}(),e.addEventListener("scroll",Jt),e.addEventListener("hashchange",An),e.addEventListener("focus",In),e.addEventListener("blur",Bn),e.addEventListener("resize",Pn),t.addEventListener("keydown",kn),t.addEventListener("keyup",Mn),["click","touchstart"].forEach(function(e){t.addEventListener(e,Ut)}),ae.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){Ft(e,!1)}),["mouseleave","touchend"].forEach(function(e){Ft(e,!0)})));var gt=!1,mt=0,St=0,bt=0,wt=0,yt=0,Et=(new Date).getTime(),Lt=0,xt=0,At=Ve;return Be}function Tt(e,t){e||no(0),io("autoScrolling",e,t);var n=K(g)[0];if(ae.autoScrolling&&!ae.scrollBar)J(ve,{overflow:"hidden",height:"100%"}),kt(dt.recordHistory,"internal"),J(Ye,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&no(n.offsetTop);else if(J(ve,{overflow:"visible",height:"initial"}),kt(!!ae.autoScrolling&&dt.recordHistory,"internal"),J(Ye,{"-ms-touch-action":"","touch-action":""}),null!=n){var o=pn(n.offsetTop);o.element.scrollTo(0,o.options)}}function kt(e,t){io("recordHistory",e,t)}function Mt(e,t){io("scrollingSpeed",e,t)}function Ot(e,t){io("fitToSection",e,t)}function Ct(n){n?(function(){var n,o="";e.addEventListener?n="addEventListener":(n="attachEvent",o="on");var r="onwheel"in t.createElement("div")?"wheel":void 0!==t.onmousewheel?"mousewheel":"DOMMouseScroll",i=!!lt&&{passive:!1};"DOMMouseScroll"==r?t[n](o+"MozMousePixelScroll",ln,i):t[n](o+r,ln,i)}(),Ye.addEventListener("mousedown",On),Ye.addEventListener("mouseup",Cn)):(t.addEventListener?(t.removeEventListener("mousewheel",ln,!1),t.removeEventListener("wheel",ln,!1),t.removeEventListener("MozMousePixelScroll",ln,!1)):t.detachEvent("onmousewheel",ln),Ye.removeEventListener("mousedown",On),Ye.removeEventListener("mouseup",Cn))}function Ht(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach(function(t){ro(e,t,"m")}):ro(e,"all","m")}function It(e){e?(Ct(!0),function(){if(De||We){ae.autoScrolling&&(Ce.removeEventListener(it.touchmove,tn,{passive:!1}),Ce.addEventListener(it.touchmove,tn,{passive:!1}));var e=ae.touchWrapper;e.removeEventListener(it.touchstart,rn),e.removeEventListener(it.touchmove,nn,{passive:!1}),e.addEventListener(it.touchstart,rn),e.addEventListener(it.touchmove,nn,{passive:!1})}}()):(Ct(!1),function(){if(De||We){ae.autoScrolling&&(Ce.removeEventListener(it.touchmove,nn,{passive:!1}),Ce.removeEventListener(it.touchmove,tn,{passive:!1}));var e=ae.touchWrapper;e.removeEventListener(it.touchstart,rn),e.removeEventListener(it.touchmove,nn,{passive:!1})}}())}function Bt(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach(function(t){ro(e,t,"k")}):(ro(e,"all","k"),ae.keyboardScrolling=e)}function Rt(){var e=ee(K(g)[0],h);e||!ae.loopTop&&!ae.continuousVertical||(e=re(K(h))),null!=e&&un(e,null,!0)}function Nt(){var e=te(K(g)[0],h);e||!ae.loopBottom&&!ae.continuousVertical||(e=K(h)[0]),null!=e&&un(e,null,!1)}function zt(e,t){Mt(0,"internal"),Pt(e,t),Mt(dt.scrollingSpeed,"internal")}function Pt(e,t){var n=Kn(e);void 0!==t?$n(e,t):null!=n&&un(n)}function jt(e){cn("right",e)}function Dt(e){cn("left",e)}function Wt(t){if(!Q(Ye,a)){Fe=!0,Ve=q(),Ue=G();for(var n=K(h),o=0;o<n.length;++o){var r=n[o],i=K(B,r)[0],l=K(C,r);ae.verticalCentered&&J(K(S,r),{height:Xn(r)+"px"}),J(r,{height:Ve+"px"}),l.length>1&&Nn(i,K(H,i)[0])}ae.scrollOverflow&&Qe.createScrollBarForAll();var c=ie(K(g)[0],h);c&&zt(c+1),Fe=!1,xe(ae.afterResize)&&t&&ae.afterResize.call(Ye,e.innerWidth,e.innerHeight),xe(ae.afterReBuild)&&!t&&ae.afterReBuild.call(Ye)}}function Yt(){return Q(Ce,r)}function Vt(e){var t=Yt();e?t||(Tt(!1,"internal"),Ot(!1,"internal"),le(K(x)),ue(Ce,r),xe(ae.afterResponsive)&&ae.afterResponsive.call(Ye,e),ae.scrollOverflow&&Qe.createScrollBarForAll()):t&&(Tt(dt.autoScrolling,"internal"),Ot(dt.autoScrolling,"internal"),ce(K(x)),fe(Ce,r),xe(ae.afterResponsive)&&ae.afterResponsive.call(Ye,e))}function Ut(e){var t=e.target;t&&me(t,x+" a")?function(e){Le(e);var t=ie(me(this,x+" li"));un(K(h)[t])}.call(t,e):Te(t,T)?function(){Ae(ne(this),"click")}.call(t):Te(t,W)?function(){var e=me(this,h);Q(this,Y)?$e.m.left&&Dt(e):$e.m.right&&jt(e)}.call(t,e):Te(t,D)||null!=me(t,D)?function(e){Le(e);var t=K(B,me(this,h))[0],n=K(C,t)[ie(me(this,"li"))];Nn(t,n)}.call(t,e):me(t,ae.menu+" [data-menuanchor]")&&function(e){!K(ae.menu)[0]||!ae.lockAnchors&&ae.anchors.length||(Le(e),Pt(this.getAttribute("data-menuanchor")))}.call(t,e)}function Ft(e,n){t["fp_"+e]=n,t.addEventListener(e,Xt,!0)}function Xt(e){var n=e.type,o=!1,r=ae.scrollOverflow,i="mouseleave"===n?e.toElement||e.relatedTarget:e.target;if(i==t||!i)return It(!0),void(r&&ae.scrollOverflowHandler.setIscroll(i,!0));"touchend"===n&&(pt=!1,setTimeout(function(){pt=!0},800)),("mouseenter"!==n||pt)&&(ae.normalScrollElements.split(",").forEach(function(e){if(!o){var t=Te(i,e),n=me(i,e);(t||n)&&(Be.shared.isNormalScrollElement||(It(!1),r&&ae.scrollOverflowHandler.setIscroll(i,!1)),Be.shared.isNormalScrollElement=!0,o=!0)}}),!o&&Be.shared.isNormalScrollElement&&(It(!0),r&&ae.scrollOverflowHandler.setIscroll(i,!0),Be.shared.isNormalScrollElement=!1))}function _t(){var e=q(),t=G();Ve===e&&Ue===t||(Ve=e,Ue=t,Wt(!0))}function Kt(e,n,o){var r=100*o,i=100/o,a=t.createElement("div");a.className=I,pe(n,a);var l=t.createElement("div");l.className=R,pe(n,l),J(K(N,e),{width:r+"%"}),o>1&&(ae.controlArrows&&function(e){var t=[Me('<div class="'+V+'"></div>'),Me('<div class="'+F+'"></div>')];Se(K(B,e)[0],t),"#fff"!==ae.controlArrowColor&&(J(K(X,e),{"border-color":"transparent transparent transparent "+ae.controlArrowColor}),J(K(U,e),{"border-color":"transparent "+ae.controlArrowColor+" transparent transparent"})),ae.loopHorizontal||le(K(U,e))}(e),ae.slidesNavigation&&function(e,t){de(Me('<div class="'+P+'"><ul></ul></div>'),e);var n=K(j,e)[0];ue(n,"fp-"+ae.slidesNavPosition);for(var o=0;o<t;o++){var r=K(C,e)[o];de(Me('<li><a href="#"><span class="fp-sr-only">'+qt(o,"Slide",r)+"</span><span></span></a></li>"),K("ul",n)[0])}J(n,{"margin-left":"-"+n.innerWidth/2+"px"}),ue(K("a",K("li",n)[0]),s)}(e,o)),n.forEach(function(e){J(e,{width:i+"%"}),ae.verticalCentered&&Fn(e)});var c=K(H,e)[0];null!=c&&(0!==ie(K(g),h)||0===ie(K(g),h)&&0!==ie(c))?to(c,"internal"):ue(n[0],s)}function $t(e,t){t||null!=K(g)[0]||ue(e,s),Pe=K(g)[0],J(e,{height:Ve+"px"}),ae.paddingTop&&J(e,{"padding-top":ae.paddingTop}),ae.paddingBottom&&J(e,{"padding-bottom":ae.paddingBottom}),void 0!==ae.sectionsColor[t]&&J(e,{"background-color":ae.sectionsColor[t]}),void 0!==ae.anchors[t]&&e.setAttribute("data-anchor",ae.anchors[t])}function Qt(e,t){void 0!==ae.anchors[t]&&Q(e,s)&&Vn(ae.anchors[t],t),ae.menu&&ae.css3&&null!=me(K(ae.menu)[0],o)&&K(ae.menu).forEach(function(e){Ce.appendChild(e)})}function qt(e,t,n){var o="Section"===t?ae.anchors[e]:n.getAttribute("data-anchor");return ae.navigationTooltips[e]||o||t+" "+(e+1)}function Gt(){var e,t,n=K(g)[0];ue(n,f),Sn(n),mn(),wn(n),ae.scrollOverflow&&ae.scrollOverflowHandler.afterLoad(),e=Tn(),t=Kn(e.section),e.section&&t&&(void 0===t||ie(t)!==ie(Pe))||!xe(ae.afterLoad)||fn("afterLoad",{activeSection:n,element:n,direction:null,anchorLink:n.getAttribute("data-anchor"),sectionIndex:ie(n,h)}),xe(ae.afterRender)&&fn("afterRender")}function Jt(){var e,t,n,o;if(!Fe&&(!ae.autoScrolling||ae.scrollBar)){var r=ye(),i=function(e){var t=e>mt?"down":"up";return mt=e,Lt=e,t}(r),a=0,l=r+q()/2,c=Ce.offsetHeight-q()===r,u=K(h);if(c)a=u.length-1;else if(r)for(var d=0;d<u.length;++d)u[d].offsetTop<=l&&(a=d);else a=0;if(t=i,n=K(g)[0].offsetTop,o=n+q(),("up"==t?o>=ye()+q():n<=ye())&&(Q(K(g)[0],f)||(ue(K(g)[0],f),fe(Ee(K(g)[0]),f))),!Q(e=u[a],s)){gt=!0;var v,p,m=K(g)[0],S=ie(m,h)+1,b=Un(e),w=e.getAttribute("data-anchor"),y=ie(e,h)+1,E=K(H,e)[0],L={activeSection:m,sectionIndex:y-1,anchorLink:w,element:e,leavingSection:S,direction:b};E&&(p=E.getAttribute("data-anchor"),v=ie(E)),_e&&(ue(e,s),fe(Ee(e),s),xe(ae.onLeave)&&fn("onLeave",L),xe(ae.afterLoad)&&fn("afterLoad",L),En(m),Sn(e),wn(e),Vn(w,y-1),ae.anchors.length&&(Re=w),qn(v,p,w)),clearTimeout(et),et=setTimeout(function(){gt=!1},100)}ae.fitToSection&&(clearTimeout(tt),tt=setTimeout(function(){ae.fitToSection&&K(g)[0].offsetHeight<=Ve&&Zt()},ae.fitToSectionDelay))}}function Zt(){_e&&(Fe=!0,un(K(g)[0]),Fe=!1)}function en(e){if($e.m[e]){var t="down"===e?Nt:Rt;if(ae.scrollOverflow){var n=ae.scrollOverflowHandler.scrollable(K(g)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!ae.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function tn(e){ae.autoScrolling&&on(e)&&$e.m.up&&Le(e)}function nn(t){var n=me(t.target,h)||K(g)[0];if(on(t)){ae.autoScrolling&&Le(t);var o=eo(t);wt=o.y,yt=o.x,K(B,n).length&&Math.abs(bt-yt)>Math.abs(St-wt)?!je&&Math.abs(bt-yt)>G()/100*ae.touchSensitivity&&(bt>yt?$e.m.right&&jt(n):$e.m.left&&Dt(n)):ae.autoScrolling&&_e&&Math.abs(St-wt)>e.innerHeight/100*ae.touchSensitivity&&(St>wt?en("down"):wt>St&&en("up"))}}function on(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function rn(e){if(ae.fitToSection&&(st=!1),on(e)){var t=eo(e);St=t.y,bt=t.x}}function an(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function ln(t){var n=(new Date).getTime(),o=Q(K(d)[0],E);if(!$e.m.down&&!$e.m.up)return Le(t),!1;if(ae.autoScrolling&&!ze&&!o){var r=(t=t||e.event).wheelDelta||-t.deltaY||-t.detail,i=Math.max(-1,Math.min(1,r)),a=void 0!==t.wheelDeltaX||void 0!==t.deltaX,l=Math.abs(t.wheelDeltaX)<Math.abs(t.wheelDelta)||Math.abs(t.deltaX)<Math.abs(t.deltaY)||!a;Ke.length>149&&Ke.shift(),Ke.push(Math.abs(r)),ae.scrollBar&&Le(t);var c=n-Et;return Et=n,c>200&&(Ke=[]),_e&&an(Ke,10)>=an(Ke,70)&&l&&en(i<0?"down":"up"),!1}ae.fitToSection&&(st=!1)}function cn(e,t){var n=null==t?K(g)[0]:t,o=K(B,n)[0];if(!(null==o||je||K(C,o).length<2)){var r=K(H,o)[0],i=null;if(null==(i="left"===e?ee(r,C):te(r,C))){if(!ae.loopHorizontal)return;var a=Ee(r);i="left"===e?a[a.length-1]:a[0]}je=!Be.test.isTesting,Nn(o,i,e)}}function sn(){for(var e=K(H),t=0;t<e.length;t++)to(e[t],"internal")}function un(e,t,n){if(null!=e){var o,r,i={element:e,callback:t,isMovementUp:n,dtop:function(e){var t=e.offsetHeight,n=e.offsetTop,o=n,r=n>Lt,i=o-Ve+t,a=ae.bigSectionsDestination;return t>Ve?(r||a)&&"bottom"!==a||(o=i):(r||Fe&&null==oe(e))&&(o=i),Lt=o,o}(e),yMovement:Un(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:ie(e,h),activeSlide:K(H,e)[0],activeSection:K(g)[0],leavingSection:ie(K(g),h)+1,localIsResizing:Fe};if(!(i.activeSection==e&&!Fe||ae.scrollBar&&ye()===i.dtop&&!Q(e,b))){if(null!=i.activeSlide&&(o=i.activeSlide.getAttribute("data-anchor"),r=ie(i.activeSlide)),!i.localIsResizing){var a=i.yMovement;if(void 0!==n&&(a=n?"up":"down"),i.direction=a,xe(ae.onLeave)&&!1===fn("onLeave",i))return}ae.autoScrolling&&ae.continuousVertical&&void 0!==i.isMovementUp&&(!i.isMovementUp&&"up"==i.yMovement||i.isMovementUp&&"down"==i.yMovement)&&(i=function(e){return e.isMovementUp?be(K(g)[0],He(e.activeSection,h)):Se(K(g)[0],Ie(e.activeSection,h).reverse()),no(K(g)[0].offsetTop),sn(),e.wrapAroundElements=e.activeSection,e.dtop=e.element.offsetTop,e.yMovement=Un(e.element),e}(i)),i.localIsResizing||En(i.activeSection),ae.scrollOverflow&&ae.scrollOverflowHandler.beforeLeave(),ue(e,s),fe(Ee(e),s),Sn(e),ae.scrollOverflow&&ae.scrollOverflowHandler.onLeave(),_e=Be.test.isTesting,qn(r,o,i.anchorLink,i.sectionIndex),function(e){var t=ae.scrollingSpeed<700,n=t?700:ae.scrollingSpeed;if(ae.css3&&ae.autoScrolling&&!ae.scrollBar){var o="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";_n(o,!0),ae.scrollingSpeed?(clearTimeout(Je),Je=setTimeout(function(){hn(e),_e=!t},ae.scrollingSpeed)):hn(e)}else{var r=pn(e.dtop);Be.test.top=-e.dtop+"px",J(ve,{"scroll-behavior":"unset"}),lo(r.element,r.options,ae.scrollingSpeed,function(){ae.scrollBar?setTimeout(function(){hn(e)},30):(hn(e),_e=!t)})}t&&(clearTimeout(ft),ft=setTimeout(function(){_e=!0},n))}(i),Re=i.anchorLink,Vn(i.anchorLink,i.sectionIndex)}}}function fn(e,t){var n,o=function(e,t){var n;return(n=ae.v2compatible?{afterRender:function(){return[Ye]},onLeave:function(){return[t.activeSection,t.leavingSection,t.sectionIndex+1,t.direction]},afterLoad:function(){return[t.element,t.anchorLink,t.sectionIndex+1]},afterSlideLoad:function(){return[t.destiny,t.anchorLink,t.sectionIndex+1,t.slideAnchor,t.slideIndex]},onSlideLeave:function(){return[t.prevSlide,t.anchorLink,t.sectionIndex+1,t.prevSlideIndex,t.direction,t.slideIndex]}}:{afterRender:function(){return{section:dn(K(g)[0]),slide:vn(K(H,K(g)[0])[0])}},onLeave:function(){return{origin:dn(t.activeSection),destination:dn(t.element),direction:t.direction}},afterLoad:function(){return n.onLeave()},afterSlideLoad:function(){return{section:dn(t.section),origin:vn(t.prevSlide),destination:vn(t.destiny),direction:t.direction}},onSlideLeave:function(){return n.afterSlideLoad()}})[e]()}(e,t);if(ae.v2compatible){if(!1===ae[e].apply(o[0],o.slice(1)))return!1}else if(Ae(Ye,e,o),!1===ae[e].apply(o[Object.keys(o)[0]],(n=o,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function dn(e){return e?new uo(e):null}function vn(e){return e?new fo(e):null}function pn(t){var n={};return ae.autoScrolling&&!ae.scrollBar?(n.options=-t,n.element=K(o)[0]):(n.options=t,n.element=e),n}function hn(e){!function(e){null!=e.wrapAroundElements&&(e.isMovementUp?be(K(h)[0],e.wrapAroundElements):Se(K(h)[K(h).length-1],e.wrapAroundElements),no(K(g)[0].offsetTop),sn())}(e),xe(ae.afterLoad)&&!e.localIsResizing&&fn("afterLoad",e),ae.scrollOverflow&&ae.scrollOverflowHandler.afterLoad(),e.localIsResizing||wn(e.element),ue(e.element,f),fe(Ee(e.element),f),mn(),_e=!0,xe(e.callback)&&e.callback()}function gn(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function mn(){var e=K(w)[0]||Yt()&&K(y)[0];ae.lazyLoading&&e&&K(h+":not("+u+")").forEach(function(e){var t,n,o;t=e.getBoundingClientRect(),n=t.top,o=t.bottom,(n+2<Ve&&n>0||o>2&&o<Ve)&&Sn(e)})}function Sn(e){ae.lazyLoading&&K("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",Ln(e)).forEach(function(t){if(["src","srcset"].forEach(function(n){var o=t.getAttribute("data-"+n);null!=o&&o&&(gn(t,n),t.addEventListener("load",function(){bn(e)}))}),Te(t,"source")){var n=me(t,"video, audio");n&&(n.load(),n.onloadeddata=function(){bn(e)})}})}function bn(e){ae.scrollOverflow&&(clearTimeout(ut),ut=setTimeout(function(){Q(Ce,r)||Qe.createScrollBar(e)},200))}function wn(e){var t=Ln(e);K("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),K('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&yn(e),e.onload=function(){e.hasAttribute("data-autoplay")&&yn(e)}})}function yn(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function En(e){var t=Ln(e);K("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),K('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function Ln(e){var t=K(H,e);return t.length&&(e=t[0]),e}function xn(){var e=Tn(),t=e.section,n=e.slide;t&&(ae.animateAnchor?$n(t,n):zt(t,n))}function An(){if(!gt&&!ae.lockAnchors){var e=Tn(),t=e.section,n=e.slide,o=void 0===Re,r=void 0===Re&&void 0===n&&!je;t&&t.length&&(t&&t!==Re&&!o||r||!je&&Ne!=n)&&$n(t,n)}}function Tn(){var t,n,o=e.location.hash;if(o.length){var r=o.replace("#","").split("/"),i=o.indexOf("#/")>-1;t=i?"/"+r[1]:decodeURIComponent(r[0]);var a=i?r[2]:r[1];a&&a.length&&(n=decodeURIComponent(a))}return{section:t,slide:n}}function kn(e){clearTimeout(nt);var n=t.activeElement,o=e.keyCode;9===o?function(e){var n=e.shiftKey,o=t.activeElement,r=Hn(Ln(K(g)[0]));function i(e){return Le(e),r[0]?r[0].focus():null}(function(e){var n=Hn(t),o=n.indexOf(t.activeElement),r=e.shiftKey?o-1:o+1,i=n[r],a=vn(me(i,C)),l=dn(me(i,h));return!a&&!l})(e)||(o?null==me(o,g+","+g+" "+H)&&(o=i(e)):i(e),(!n&&o==r[r.length-1]||n&&o==r[0])&&Le(e))}(e):Te(n,"textarea")||Te(n,"input")||Te(n,"select")||"true"===n.getAttribute("contentEditable")||""===n.getAttribute("contentEditable")||!ae.keyboardScrolling||!ae.autoScrolling||([40,38,32,33,34].indexOf(o)>-1&&Le(e),ze=e.ctrlKey,nt=setTimeout(function(){!function(e){var n=e.shiftKey,o=t.activeElement,r=Te(o,"video")||Te(o,"audio");if(_e||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:$e.k.up&&Rt();break;case 32:if(n&&$e.k.up&&!r){Rt();break}case 40:case 34:$e.k.down&&(32===e.keyCode&&r||Nt());break;case 36:$e.k.up&&Pt(1);break;case 35:$e.k.down&&Pt(K(h).length);break;case 37:$e.k.left&&Dt();break;case 39:$e.k.right&&jt()}}(e)},150))}function Mn(e){Xe&&(ze=e.ctrlKey)}function On(e){2==e.which&&(xt=e.pageY,Ye.addEventListener("mousemove",Rn))}function Cn(e){2==e.which&&Ye.removeEventListener("mousemove",Rn)}function Hn(e){return[].slice.call(K(at,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function In(){Xe=!0}function Bn(){Xe=!1,ze=!1}function Rn(e){ae.autoScrolling&&(_e&&(e.pageY<xt&&$e.m.up?Rt():e.pageY>xt&&$e.m.down&&Nt()),xt=e.pageY)}function Nn(e,t,n){var o,r,i=me(e,h),a={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:ie(t),section:i,sectionIndex:ie(i,h),anchorLink:i.getAttribute("data-anchor"),slidesNav:K(j,i)[0],slideAnchor:Jn(t),prevSlide:K(H,i)[0],prevSlideIndex:ie(K(H,i)[0]),localIsResizing:Fe};a.xMovement=(o=a.prevSlideIndex,r=a.slideIndex,o==r?"none":o>r?"left":"right"),a.direction=a.direction?a.direction:a.xMovement,a.localIsResizing||(_e=!1),ae.onSlideLeave&&!a.localIsResizing&&"none"!==a.xMovement&&xe(ae.onSlideLeave)&&!1===fn("onSlideLeave",a)?je=!1:(ue(t,s),fe(Ee(t),s),a.localIsResizing||(En(a.prevSlide),Sn(t)),!ae.loopHorizontal&&ae.controlArrows&&(ke(K(U,i),0!==a.slideIndex),ke(K(X,i),null!=oe(t))),Q(i,s)&&!a.localIsResizing&&qn(a.slideIndex,a.slideAnchor,a.anchorLink,a.sectionIndex),function(e,t,n){var o=t.destinyPos;if(ae.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";Be.test.translate3dH[t.sectionIndex]=r,J(Wn(K(N,e)),oo(r)),Ze=setTimeout(function(){n&&zn(t)},ae.scrollingSpeed)}else Be.test.left[t.sectionIndex]=Math.round(o.left),lo(e,Math.round(o.left),ae.scrollingSpeed,function(){n&&zn(t)})}(e,a,!0))}function zn(e){var t,n;t=e.slidesNav,n=e.slideIndex,ae.slidesNavigation&&null!=t&&(fe(K(u,t),s),ue(K("a",K("li",t)[n]),s)),e.localIsResizing||(xe(ae.afterSlideLoad)&&fn("afterSlideLoad",e),_e=!0,wn(e.destiny)),je=!1}function Pn(){clearTimeout(qe),qe=setTimeout(function(){for(var e=0;e<4;e++)Ge=setTimeout(jn,200*e)},200)}function jn(){if(Fe=!0,Dn(),De){var e=t.activeElement;if(!Te(e,"textarea")&&!Te(e,"input")&&!Te(e,"select")){var n=q();Math.abs(n-At)>20*Math.max(At,n)/100&&(Wt(!0),At=n)}}else _t();Fe=!1}function Dn(){var t=ae.responsive||ae.responsiveWidth,n=ae.responsiveHeight,o=t&&e.innerWidth<t,r=n&&e.innerHeight<n;t&&n?Vt(o||r):t?Vt(o):n&&Vt(r)}function Wn(e){var t="all "+ae.scrollingSpeed+"ms "+ae.easingcss3;return fe(e,i),J(e,{"-webkit-transition":t,transition:t})}function Yn(e){return ue(e,i)}function Vn(e,t){var n;n=e,K(ae.menu).forEach(function(e){ae.menu&&null!=e&&(fe(K(u,e),s),ue(K('[data-menuanchor="'+n+'"]',e),s))}),function(e,t){ae.navigation&&null!=K(x)[0]&&(fe(K(u,K(x)[0]),s),ue(e?K('a[href="#'+e+'"]',K(x)[0]):K("a",K("li",K(x)[0])[t]),s))}(e,t)}function Un(e){var t=ie(K(g)[0],h),n=ie(e,h);return t==n?"none":t>n?"up":"down"}function Fn(e){if(!Q(e,z)){var n=t.createElement("div");n.className=m,n.style.height=Xn(e)+"px",ue(e,z),he(e,n)}}function Xn(e){var t=Ve;if(ae.paddingTop||ae.paddingBottom){var n=e;Q(n,p)||(n=me(e,h));var o=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"]);t=Ve-o}return t}function _n(e,t){t?Wn(Ye):Yn(Ye),J(Ye,oo(e)),Be.test.translate3d=e,setTimeout(function(){fe(Ye,i)},10)}function Kn(e){var t=K(h+'[data-anchor="'+e+'"]',Ye)[0];if(!t){var n=void 0!==e?e-1:0;t=K(h)[n]}return t}function $n(e,t){var n=Kn(e);if(null!=n){var o=function(e,t){var n=K(C+'[data-anchor="'+e+'"]',t)[0];return null==n&&(e=void 0!==e?e:0,n=K(C,t)[e]),n}(t,n);Jn(n)===Re||Q(n,s)?Qn(o):un(n,function(){Qn(o)})}}function Qn(e){null!=e&&Nn(me(e,B),e)}function qn(e,t,n,o){var r="";ae.anchors.length&&!ae.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),Ne=t,Gn(r+"/"+t)):null!=e?(Ne=t,Gn(n)):Gn(n)),Zn()}function Gn(t){if(ae.recordHistory)location.hash=t;else if(De||We)e.history.replaceState(void 0,void 0,"#"+t);else{var n=e.location.href.split("#")[0];e.location.replace(n+"#"+t)}}function Jn(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=ie(e);return null==t&&(t=n),t}function Zn(){var e=K(g)[0],t=K(H,e)[0],n=Jn(e),o=Jn(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+c+"-[^\\s]+\\b","g");Ce.className=Ce.className.replace(i,""),ue(Ce,c+"-"+r)}function eo(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,We&&on(e)&&ae.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function to(e,t){Mt(0,"internal"),void 0!==t&&(Fe=!0),Nn(me(e,B),e),void 0!==t&&(Fe=!1),Mt(dt.scrollingSpeed,"internal")}function no(e){var t=Math.round(e);if(ae.css3&&ae.autoScrolling&&!ae.scrollBar)_n("translate3d(0px, -"+t+"px, 0px)",!1);else if(ae.autoScrolling&&!ae.scrollBar)J(Ye,{top:-t+"px"}),Be.test.top=-t+"px";else{var n=pn(t);co(n.element,n.options)}}function oo(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function ro(e,t,n){"all"!==t?$e[n][t]=e:Object.keys($e[n]).forEach(function(t){$e[n][t]=e})}function io(e,t,n){ae[e]=t,"internal"!==n&&(dt[e]=t)}function ao(){var e=ae.licenseKey,t="font-size: 15px;background:yellow;";se?e&&e.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)):(_("error"),_("error")),Q(we,l)?_("error"):(ae.continuousVertical&&(ae.loopTop||ae.loopBottom)&&(ae.continuousVertical=!1,_("warn")),!ae.scrollOverflow||!ae.scrollBar&&ae.autoScrolling||_("warn"),!ae.continuousVertical||!ae.scrollBar&&ae.autoScrolling||(ae.continuousVertical=!1,_("warn")),ae.scrollOverflow&&null==ae.scrollOverflowHandler&&(ae.scrollOverflow=!1,_("error")),ht.forEach(function(e){ae[e]&&_("warn")}),ae.anchors.forEach(function(e){var t=[].slice.call(K("[name]")).filter(function(t){return t.getAttribute("name")&&t.getAttribute("name").toLowerCase()==e.toLowerCase()}),n=[].slice.call(K("[id]")).filter(function(t){return t.getAttribute("id")&&t.getAttribute("id").toLowerCase()==e.toLowerCase()});if(n.length||t.length){_("error");n.length;(n.length||t.length)&&_("error")}}))}function lo(t,n,o,r){var i=function(t){return t.self!=e&&Q(t,I)?t.scrollLeft:!ae.autoScrolling||ae.scrollBar?ye():t.offsetTop}(t),a=n-i,l=0;st=!0;var c=function(){if(st){var s=n;l+=20,o&&(s=e.fp_easings[ae.easing](l,i,a,o)),co(t,s),l<o?setTimeout(c,20):void 0!==r&&r()}else l<o&&r()};c()}function co(t,n){!ae.autoScrolling||ae.scrollBar||t.self!=e&&Q(t,I)?t.self!=e&&Q(t,I)?t.scrollLeft=n:t.scrollTo(0,n):t.style.top=n+"px"}function so(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=ie(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function uo(e){so.call(this,e,h)}function fo(e){so.call(this,e,C)}ao()}}),window.jQuery&&window.fullpage&&function(e,t){"use strict";e&&t?e.fn.fullpage=function(n){n=e.extend({},n,{$:e});new t(this[0],n)}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);