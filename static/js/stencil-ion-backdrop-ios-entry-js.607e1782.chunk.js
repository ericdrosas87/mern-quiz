(this["webpackJsonpmern-quiz"]=this["webpackJsonpmern-quiz"]||[]).push([[12],{95:function(t,o,a){"use strict";a.r(o),a.d(o,"ion_backdrop",(function(){return b}));var i=a(16),n=a(5),e=a(6),c=a(17),r=a(14),s=a(20),p=a(42),b=function(){function t(o){Object(n.a)(this,t),Object(c.l)(this,o),this.lastClick=-1e4,this.blocker=p.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0,this.ionBackdropTap=Object(c.f)(this,"ionBackdropTap",7)}return Object(e.a)(t,[{key:"connectedCallback",value:function(){this.stopPropagation&&this.blocker.block()}},{key:"disconnectedCallback",value:function(){this.blocker.unblock()}},{key:"onTouchStart",value:function(t){this.lastClick=Object(s.i)(t),this.emitTap(t)}},{key:"onMouseDown",value:function(t){this.lastClick<Object(s.i)(t)-2500&&this.emitTap(t)}},{key:"emitTap",value:function(t){this.stopPropagation&&(t.preventDefault(),t.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}},{key:"render",value:function(){var t,o=Object(r.b)(this);return Object(c.j)(c.b,{tabindex:"-1",class:(t={},Object(i.a)(t,o,!0),Object(i.a)(t,"backdrop-hide",!this.visible),Object(i.a)(t,"backdrop-no-tappable",!this.tappable),t)})}}]),t}();b.style={ios:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",md:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}"}}}]);
//# sourceMappingURL=stencil-ion-backdrop-ios-entry-js.607e1782.chunk.js.map