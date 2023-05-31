/* esm.sh - esbuild bundle(d3-transition@3.0.1) esnext production */
import{selection as ut}from"/v124/d3-selection@3.0.0/esnext/d3-selection.mjs";import{dispatch as lt}from"/v124/d3-dispatch@3.0.1/esnext/d3-dispatch.mjs";import{timer as ct,timeout as b}from"/v124/d3-timer@3.0.1/esnext/d3-timer.mjs";var pt=lt("start","end","cancel","interrupt"),ht=[],G=0,A=1,C=2,N=3,V=4,S=5,g=6;function y(t,r,n,e,i,a){var o=t.__transition;if(!o)t.__transition={};else if(n in o)return;mt(t,n,{name:r,index:e,group:i,on:pt,tween:ht,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:G})}function x(t,r){var n=h(t,r);if(n.state>G)throw new Error("too late; already scheduled");return n}function _(t,r){var n=h(t,r);if(n.state>N)throw new Error("too late; already running");return n}function h(t,r){var n=t.__transition;if(!n||!(n=n[r]))throw new Error("transition not found");return n}function mt(t,r,n){var e=t.__transition,i;e[r]=n,n.timer=ct(a,0,n.time);function a(f){n.state=A,n.timer.restart(o,n.delay,n.time),n.delay<=f&&o(f-n.delay)}function o(f){var l,m,p,c;if(n.state!==A)return s();for(l in e)if(c=e[l],c.name===n.name){if(c.state===N)return b(o);c.state===V?(c.state=g,c.timer.stop(),c.on.call("interrupt",t,t.__data__,c.index,c.group),delete e[l]):+l<r&&(c.state=g,c.timer.stop(),c.on.call("cancel",t,t.__data__,c.index,c.group),delete e[l])}if(b(function(){n.state===N&&(n.state=V,n.timer.restart(u,n.delay,n.time),u(f))}),n.state=C,n.on.call("start",t,t.__data__,n.index,n.group),n.state===C){for(n.state=N,i=new Array(p=n.tween.length),l=0,m=-1;l<p;++l)(c=n.tween[l].value.call(t,t.__data__,n.index,n.group))&&(i[++m]=c);i.length=m+1}}function u(f){for(var l=f<n.duration?n.ease.call(null,f/n.duration):(n.timer.restart(s),n.state=S,1),m=-1,p=i.length;++m<p;)i[m].call(t,l);n.state===S&&(n.on.call("end",t,t.__data__,n.index,n.group),s())}function s(){n.state=g,n.timer.stop(),delete e[r];for(var f in e)return;delete t.__transition}}function R(t,r){var n=t.__transition,e,i,a=!0,o;if(n){r=r==null?null:r+"";for(o in n){if((e=n[o]).name!==r){a=!1;continue}i=e.state>C&&e.state<S,e.state=g,e.timer.stop(),e.on.call(i?"interrupt":"cancel",t,t.__data__,e.index,e.group),delete n[o]}a&&delete t.__transition}}function P(t){return this.each(function(){R(this,t)})}import{selection as ot}from"/v124/d3-selection@3.0.0/esnext/d3-selection.mjs";import{interpolateTransformSvg as wt}from"/v124/d3-interpolate@3.0.1/esnext/d3-interpolate.mjs";import{namespace as gt}from"/v124/d3-selection@3.0.0/esnext/d3-selection.mjs";function _t(t,r){var n,e;return function(){var i=_(this,t),a=i.tween;if(a!==n){e=n=a;for(var o=0,u=e.length;o<u;++o)if(e[o].name===r){e=e.slice(),e.splice(o,1);break}}i.tween=e}}function dt(t,r,n){var e,i;if(typeof n!="function")throw new Error;return function(){var a=_(this,t),o=a.tween;if(o!==e){i=(e=o).slice();for(var u={name:r,value:n},s=0,f=i.length;s<f;++s)if(i[s].name===r){i[s]=u;break}s===f&&i.push(u)}a.tween=i}}function k(t,r){var n=this._id;if(t+="",arguments.length<2){for(var e=h(this.node(),n).tween,i=0,a=e.length,o;i<a;++i)if((o=e[i]).name===t)return o.value;return null}return this.each((r==null?_t:dt)(n,t,r))}function w(t,r,n){var e=t._id;return t.each(function(){var i=_(this,e);(i.value||(i.value={}))[r]=n.apply(this,arguments)}),function(i){return h(i,e).value[r]}}import{color as z}from"/v124/d3-color@3.1.0/esnext/d3-color.mjs";import{interpolateNumber as vt,interpolateRgb as O,interpolateString as yt}from"/v124/d3-interpolate@3.0.1/esnext/d3-interpolate.mjs";function I(t,r){var n;return(typeof r=="number"?vt:r instanceof z?O:(n=z(r))?(r=n,O):yt)(t,r)}function xt(t){return function(){this.removeAttribute(t)}}function Tt(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Et(t,r,n){var e,i=n+"",a;return function(){var o=this.getAttribute(t);return o===i?null:o===e?a:a=r(e=o,n)}}function Nt(t,r,n){var e,i=n+"",a;return function(){var o=this.getAttributeNS(t.space,t.local);return o===i?null:o===e?a:a=r(e=o,n)}}function At(t,r,n){var e,i,a;return function(){var o,u=n(this),s;return u==null?void this.removeAttribute(t):(o=this.getAttribute(t),s=u+"",o===s?null:o===e&&s===i?a:(i=s,a=r(e=o,u)))}}function Ct(t,r,n){var e,i,a;return function(){var o,u=n(this),s;return u==null?void this.removeAttributeNS(t.space,t.local):(o=this.getAttributeNS(t.space,t.local),s=u+"",o===s?null:o===e&&s===i?a:(i=s,a=r(e=o,u)))}}function U(t,r){var n=gt(t),e=n==="transform"?wt:I;return this.attrTween(t,typeof r=="function"?(n.local?Ct:At)(n,e,w(this,"attr."+t,r)):r==null?(n.local?Tt:xt)(n):(n.local?Nt:Et)(n,e,r))}import{namespace as St}from"/v124/d3-selection@3.0.0/esnext/d3-selection.mjs";function It(t,r){return function(n){this.setAttribute(t,r.call(this,n))}}function Dt(t,r){return function(n){this.setAttributeNS(t.space,t.local,r.call(this,n))}}function Rt(t,r){var n,e;function i(){var a=r.apply(this,arguments);return a!==e&&(n=(e=a)&&Dt(t,a)),n}return i._value=r,i}function Ft(t,r){var n,e;function i(){var a=r.apply(this,arguments);return a!==e&&(n=(e=a)&&It(t,a)),n}return i._value=r,i}function H(t,r){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(r==null)return this.tween(n,null);if(typeof r!="function")throw new Error;var e=St(t);return this.tween(n,(e.local?Rt:Ft)(e,r))}function bt(t,r){return function(){x(this,t).delay=+r.apply(this,arguments)}}function Vt(t,r){return r=+r,function(){x(this,t).delay=r}}function L(t){var r=this._id;return arguments.length?this.each((typeof t=="function"?bt:Vt)(r,t)):h(this.node(),r).delay}function Gt(t,r){return function(){_(this,t).duration=+r.apply(this,arguments)}}function Pt(t,r){return r=+r,function(){_(this,t).duration=r}}function M(t){var r=this._id;return arguments.length?this.each((typeof t=="function"?Gt:Pt)(r,t)):h(this.node(),r).duration}function kt(t,r){if(typeof r!="function")throw new Error;return function(){_(this,t).ease=r}}function $(t){var r=this._id;return arguments.length?this.each(kt(r,t)):h(this.node(),r).ease}function zt(t,r){return function(){var n=r.apply(this,arguments);if(typeof n!="function")throw new Error;_(this,t).ease=n}}function q(t){if(typeof t!="function")throw new Error;return this.each(zt(this._id,t))}import{matcher as Ot}from"/v124/d3-selection@3.0.0/esnext/d3-selection.mjs";function B(t){typeof t!="function"&&(t=Ot(t));for(var r=this._groups,n=r.length,e=new Array(n),i=0;i<n;++i)for(var a=r[i],o=a.length,u=e[i]=[],s,f=0;f<o;++f)(s=a[f])&&t.call(s,s.__data__,f,a)&&u.push(s);return new d(e,this._parents,this._name,this._id)}function J(t){if(t._id!==this._id)throw new Error;for(var r=this._groups,n=t._groups,e=r.length,i=n.length,a=Math.min(e,i),o=new Array(e),u=0;u<a;++u)for(var s=r[u],f=n[u],l=s.length,m=o[u]=new Array(l),p,c=0;c<l;++c)(p=s[c]||f[c])&&(m[c]=p);for(;u<e;++u)o[u]=r[u];return new d(o,this._parents,this._name,this._id)}function Ut(t){return(t+"").trim().split(/^|\s+/).every(function(r){var n=r.indexOf(".");return n>=0&&(r=r.slice(0,n)),!r||r==="start"})}function Ht(t,r,n){var e,i,a=Ut(r)?x:_;return function(){var o=a(this,t),u=o.on;u!==e&&(i=(e=u).copy()).on(r,n),o.on=i}}function K(t,r){var n=this._id;return arguments.length<2?h(this.node(),n).on.on(t):this.each(Ht(n,t,r))}function Lt(t){return function(){var r=this.parentNode;for(var n in this.__transition)if(+n!==t)return;r&&r.removeChild(this)}}function Q(){return this.on("end.remove",Lt(this._id))}import{selector as Mt}from"/v124/d3-selection@3.0.0/esnext/d3-selection.mjs";function W(t){var r=this._name,n=this._id;typeof t!="function"&&(t=Mt(t));for(var e=this._groups,i=e.length,a=new Array(i),o=0;o<i;++o)for(var u=e[o],s=u.length,f=a[o]=new Array(s),l,m,p=0;p<s;++p)(l=u[p])&&(m=t.call(l,l.__data__,p,u))&&("__data__"in l&&(m.__data__=l.__data__),f[p]=m,y(f[p],r,n,p,f,h(l,n)));return new d(a,this._parents,r,n)}import{selectorAll as $t}from"/v124/d3-selection@3.0.0/esnext/d3-selection.mjs";function X(t){var r=this._name,n=this._id;typeof t!="function"&&(t=$t(t));for(var e=this._groups,i=e.length,a=[],o=[],u=0;u<i;++u)for(var s=e[u],f=s.length,l,m=0;m<f;++m)if(l=s[m]){for(var p=t.call(l,l.__data__,m,s),c,st=h(l,n),E=0,ft=p.length;E<ft;++E)(c=p[E])&&y(c,r,n,E,p,st);a.push(p),o.push(l)}return new d(a,o,r,n)}import{selection as qt}from"/v124/d3-selection@3.0.0/esnext/d3-selection.mjs";var Bt=qt.prototype.constructor;function Y(){return new Bt(this._groups,this._parents)}import{interpolateTransformCss as Jt}from"/v124/d3-interpolate@3.0.1/esnext/d3-interpolate.mjs";import{style as T}from"/v124/d3-selection@3.0.0/esnext/d3-selection.mjs";function Kt(t,r){var n,e,i;return function(){var a=T(this,t),o=(this.style.removeProperty(t),T(this,t));return a===o?null:a===n&&o===e?i:i=r(n=a,e=o)}}function Z(t){return function(){this.style.removeProperty(t)}}function Qt(t,r,n){var e,i=n+"",a;return function(){var o=T(this,t);return o===i?null:o===e?a:a=r(e=o,n)}}function Wt(t,r,n){var e,i,a;return function(){var o=T(this,t),u=n(this),s=u+"";return u==null&&(s=u=(this.style.removeProperty(t),T(this,t))),o===s?null:o===e&&s===i?a:(i=s,a=r(e=o,u))}}function Xt(t,r){var n,e,i,a="style."+r,o="end."+a,u;return function(){var s=_(this,t),f=s.on,l=s.value[a]==null?u||(u=Z(r)):void 0;(f!==n||i!==l)&&(e=(n=f).copy()).on(o,i=l),s.on=e}}function j(t,r,n){var e=(t+="")=="transform"?Jt:I;return r==null?this.styleTween(t,Kt(t,e)).on("end.style."+t,Z(t)):typeof r=="function"?this.styleTween(t,Wt(t,e,w(this,"style."+t,r))).each(Xt(this._id,t)):this.styleTween(t,Qt(t,e,r),n).on("end.style."+t,null)}function Yt(t,r,n){return function(e){this.style.setProperty(t,r.call(this,e),n)}}function Zt(t,r,n){var e,i;function a(){var o=r.apply(this,arguments);return o!==i&&(e=(i=o)&&Yt(t,o,n)),e}return a._value=r,a}function tt(t,r,n){var e="style."+(t+="");if(arguments.length<2)return(e=this.tween(e))&&e._value;if(r==null)return this.tween(e,null);if(typeof r!="function")throw new Error;return this.tween(e,Zt(t,r,n??""))}function jt(t){return function(){this.textContent=t}}function tr(t){return function(){var r=t(this);this.textContent=r??""}}function rt(t){return this.tween("text",typeof t=="function"?tr(w(this,"text",t)):jt(t==null?"":t+""))}function rr(t){return function(r){this.textContent=t.call(this,r)}}function nr(t){var r,n;function e(){var i=t.apply(this,arguments);return i!==n&&(r=(n=i)&&rr(i)),r}return e._value=t,e}function nt(t){var r="text";if(arguments.length<1)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,nr(t))}function et(){for(var t=this._name,r=this._id,n=D(),e=this._groups,i=e.length,a=0;a<i;++a)for(var o=e[a],u=o.length,s,f=0;f<u;++f)if(s=o[f]){var l=h(s,r);y(s,t,n,f,o,{time:l.time+l.delay+l.duration,delay:0,duration:l.duration,ease:l.ease})}return new d(e,this._parents,t,n)}function it(){var t,r,n=this,e=n._id,i=n.size();return new Promise(function(a,o){var u={value:o},s={value:function(){--i===0&&a()}};n.each(function(){var f=_(this,e),l=f.on;l!==t&&(r=(t=l).copy(),r._.cancel.push(u),r._.interrupt.push(u),r._.end.push(s)),f.on=r}),i===0&&a()})}var er=0;function d(t,r,n,e){this._groups=t,this._parents=r,this._name=n,this._id=e}function F(t){return ot().transition(t)}function D(){return++er}var v=ot.prototype;d.prototype=F.prototype={constructor:d,select:W,selectAll:X,selectChild:v.selectChild,selectChildren:v.selectChildren,filter:B,merge:J,selection:Y,transition:et,call:v.call,nodes:v.nodes,node:v.node,size:v.size,empty:v.empty,each:v.each,on:K,attr:U,attrTween:H,style:j,styleTween:tt,text:rt,textTween:nt,remove:Q,tween:k,delay:L,duration:M,ease:$,easeVarying:q,end:it,[Symbol.iterator]:v[Symbol.iterator]};import{easeCubicInOut as ir}from"/v124/d3-ease@3.0.1/esnext/d3-ease.mjs";import{now as or}from"/v124/d3-timer@3.0.1/esnext/d3-timer.mjs";var ar={time:null,delay:0,duration:250,ease:ir};function ur(t,r){for(var n;!(n=t.__transition)||!(n=n[r]);)if(!(t=t.parentNode))throw new Error(`transition ${r} not found`);return n}function at(t){var r,n;t instanceof d?(r=t._id,t=t._name):(r=D(),(n=ar).time=or(),t=t==null?null:t+"");for(var e=this._groups,i=e.length,a=0;a<i;++a)for(var o=e[a],u=o.length,s,f=0;f<u;++f)(s=o[f])&&y(s,t,r,f,o,n||ur(s,r));return new d(e,this._parents,t,r)}ut.prototype.interrupt=P;ut.prototype.transition=at;var sr=[null];function fr(t,r){var n=t.__transition,e,i;if(n){r=r==null?null:r+"";for(i in n)if((e=n[i]).state>A&&e.name===r)return new d([[t]],sr,r,+i)}return null}export{fr as active,R as interrupt,F as transition};
//# sourceMappingURL=d3-transition.mjs.map