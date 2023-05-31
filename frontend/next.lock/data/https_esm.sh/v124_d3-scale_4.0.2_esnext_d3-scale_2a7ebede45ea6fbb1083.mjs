/* esm.sh - esbuild bundle(d3-scale@4.0.2) esnext production */
import{range as Nn}from"/v124/d3-array@3.2.3/esnext/d3-array.mjs";function y(n,r){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(r).domain(n);break}return this}function k(n,r){switch(arguments.length){case 0:break;case 1:{typeof n=="function"?this.interpolator(n):this.range(n);break}default:{this.domain(n),typeof r=="function"?this.interpolator(r):this.range(r);break}}return this}import{InternMap as on}from"/v124/d3-array@3.2.3/esnext/d3-array.mjs";var W=Symbol("implicit");function A(){var n=new on,r=[],o=[],t=W;function u(e){let i=n.get(e);if(i===void 0){if(t!==W)return t;n.set(e,i=r.push(e)-1)}return o[i%o.length]}return u.domain=function(e){if(!arguments.length)return r.slice();r=[],n=new on;for(let i of e)n.has(i)||n.set(i,r.push(i)-1);return u},u.range=function(e){return arguments.length?(o=Array.from(e),u):o.slice()},u.unknown=function(e){return arguments.length?(t=e,u):t},u.copy=function(){return A(r,o).unknown(t)},y.apply(u,arguments),u}function E(){var n=A().unknown(void 0),r=n.domain,o=n.range,t=0,u=1,e,i,f=!1,c=0,a=0,s=.5;delete n.unknown;function m(){var l=r().length,g=u<t,d=g?u:t,p=g?t:u;e=(p-d)/Math.max(1,l-c+a*2),f&&(e=Math.floor(e)),d+=(p-d-e*(l-c))*s,i=e*(1-c),f&&(d=Math.round(d),i=Math.round(i));var x=Nn(l).map(function(w){return d+e*w});return o(g?x.reverse():x)}return n.domain=function(l){return arguments.length?(r(l),m()):r()},n.range=function(l){return arguments.length?([t,u]=l,t=+t,u=+u,m()):[t,u]},n.rangeRound=function(l){return[t,u]=l,t=+t,u=+u,f=!0,m()},n.bandwidth=function(){return i},n.step=function(){return e},n.round=function(l){return arguments.length?(f=!!l,m()):f},n.padding=function(l){return arguments.length?(c=Math.min(1,a=+l),m()):c},n.paddingInner=function(l){return arguments.length?(c=Math.min(1,l),m()):c},n.paddingOuter=function(l){return arguments.length?(a=+l,m()):a},n.align=function(l){return arguments.length?(s=Math.max(0,Math.min(1,l)),m()):s},n.copy=function(){return E(r(),[t,u]).round(f).paddingInner(c).paddingOuter(a).align(s)},y.apply(m(),arguments)}function un(n){var r=n.copy;return n.padding=n.paddingOuter,delete n.paddingInner,delete n.paddingOuter,n.copy=function(){return un(r())},n}function Sn(){return un(E.apply(null,arguments).paddingInner(1))}import{ticks as Hn,tickIncrement as Un}from"/v124/d3-array@3.2.3/esnext/d3-array.mjs";import{bisect as bn}from"/v124/d3-array@3.2.3/esnext/d3-array.mjs";import{interpolate as Rn,interpolateNumber as In,interpolateRound as An}from"/v124/d3-interpolate@3.0.1/esnext/d3-interpolate.mjs";function j(n){return function(){return n}}function b(n){return+n}var an=[0,1];function v(n){return n}function B(n,r){return(r-=n=+n)?function(o){return(o-n)/r}:j(isNaN(r)?NaN:.5)}function Dn(n,r){var o;return n>r&&(o=n,n=r,r=o),function(t){return Math.max(n,Math.min(r,t))}}function Fn(n,r,o){var t=n[0],u=n[1],e=r[0],i=r[1];return u<t?(t=B(u,t),e=o(i,e)):(t=B(t,u),e=o(e,i)),function(f){return e(t(f))}}function Ln(n,r,o){var t=Math.min(n.length,r.length)-1,u=new Array(t),e=new Array(t),i=-1;for(n[t]<n[0]&&(n=n.slice().reverse(),r=r.slice().reverse());++i<t;)u[i]=B(n[i],n[i+1]),e[i]=o(r[i],r[i+1]);return function(f){var c=bn(n,f,1,t)-1;return e[c](u[c](f))}}function N(n,r){return r.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function R(){var n=an,r=an,o=Rn,t,u,e,i=v,f,c,a;function s(){var l=Math.min(n.length,r.length);return i!==v&&(i=Dn(n[0],n[l-1])),f=l>2?Ln:Fn,c=a=null,m}function m(l){return l==null||isNaN(l=+l)?e:(c||(c=f(n.map(t),r,o)))(t(i(l)))}return m.invert=function(l){return i(u((a||(a=f(r,n.map(t),In)))(l)))},m.domain=function(l){return arguments.length?(n=Array.from(l,b),s()):n.slice()},m.range=function(l){return arguments.length?(r=Array.from(l),s()):r.slice()},m.rangeRound=function(l){return r=Array.from(l),o=An,s()},m.clamp=function(l){return arguments.length?(i=l?!0:v,s()):i!==v},m.interpolate=function(l){return arguments.length?(o=l,s()):o},m.unknown=function(l){return arguments.length?(e=l,m):e},function(l,g){return t=l,u=g,s()}}function I(){return R()(v,v)}import{tickStep as Pn}from"/v124/d3-array@3.2.3/esnext/d3-array.mjs";import{format as On,formatPrefix as Tn,formatSpecifier as En,precisionFixed as zn,precisionPrefix as Qn,precisionRound as Yn}from"/v124/d3-format@3.1.0/esnext/d3-format.mjs";function z(n,r,o,t){var u=Pn(n,r,o),e;switch(t=En(t??",f"),t.type){case"s":{var i=Math.max(Math.abs(n),Math.abs(r));return t.precision==null&&!isNaN(e=Qn(u,i))&&(t.precision=e),Tn(t,i)}case"":case"e":case"g":case"p":case"r":{t.precision==null&&!isNaN(e=Yn(u,Math.max(Math.abs(n),Math.abs(r))))&&(t.precision=e-(t.type==="e"));break}case"f":case"%":{t.precision==null&&!isNaN(e=zn(u))&&(t.precision=e-(t.type==="%")*2);break}}return On(t)}function M(n){var r=n.domain;return n.ticks=function(o){var t=r();return Hn(t[0],t[t.length-1],o??10)},n.tickFormat=function(o,t){var u=r();return z(u[0],u[u.length-1],o??10,t)},n.nice=function(o){o==null&&(o=10);var t=r(),u=0,e=t.length-1,i=t[u],f=t[e],c,a,s=10;for(f<i&&(a=i,i=f,f=a,a=u,u=e,e=a);s-- >0;){if(a=Un(i,f,o),a===c)return t[u]=i,t[e]=f,r(t);if(a>0)i=Math.floor(i/a)*a,f=Math.ceil(f/a)*a;else if(a<0)i=Math.ceil(i*a)/a,f=Math.floor(f*a)/a;else break;c=a}return n},n}function C(){var n=I();return n.copy=function(){return N(n,C())},y.apply(n,arguments),M(n)}function V(n){var r;function o(t){return t==null||isNaN(t=+t)?r:t}return o.invert=o,o.domain=o.range=function(t){return arguments.length?(n=Array.from(t,b),o):n.slice()},o.unknown=function(t){return arguments.length?(r=t,o):r},o.copy=function(){return V(n).unknown(r)},n=arguments.length?Array.from(n,b):[0,1],M(o)}import{ticks as ln}from"/v124/d3-array@3.2.3/esnext/d3-array.mjs";import{format as Wn,formatSpecifier as jn}from"/v124/d3-format@3.1.0/esnext/d3-format.mjs";function D(n,r){n=n.slice();var o=0,t=n.length-1,u=n[o],e=n[t],i;return e<u&&(i=o,o=t,t=i,i=u,u=e,e=i),n[o]=r.floor(u),n[t]=r.ceil(e),n}function fn(n){return Math.log(n)}function cn(n){return Math.exp(n)}function Bn(n){return-Math.log(-n)}function Cn(n){return-Math.exp(-n)}function Vn(n){return isFinite(n)?+("1e"+n):n<0?0:n}function _n(n){return n===10?Vn:n===Math.E?Math.exp:r=>Math.pow(n,r)}function Gn(n){return n===Math.E?Math.log:n===10&&Math.log10||n===2&&Math.log2||(n=Math.log(n),r=>Math.log(r)/n)}function mn(n){return(r,o)=>-n(-r,o)}function F(n){let r=n(fn,cn),o=r.domain,t=10,u,e;function i(){return u=Gn(t),e=_n(t),o()[0]<0?(u=mn(u),e=mn(e),n(Bn,Cn)):n(fn,cn),r}return r.base=function(f){return arguments.length?(t=+f,i()):t},r.domain=function(f){return arguments.length?(o(f),i()):o()},r.ticks=f=>{let c=o(),a=c[0],s=c[c.length-1],m=s<a;m&&([a,s]=[s,a]);let l=u(a),g=u(s),d,p,x=f==null?10:+f,w=[];if(!(t%1)&&g-l<x){if(l=Math.floor(l),g=Math.ceil(g),a>0){for(;l<=g;++l)for(d=1;d<t;++d)if(p=l<0?d/e(-l):d*e(l),!(p<a)){if(p>s)break;w.push(p)}}else for(;l<=g;++l)for(d=t-1;d>=1;--d)if(p=l>0?d/e(-l):d*e(l),!(p<a)){if(p>s)break;w.push(p)}w.length*2<x&&(w=ln(a,s,x))}else w=ln(l,g,Math.min(g-l,x)).map(e);return m?w.reverse():w},r.tickFormat=(f,c)=>{if(f==null&&(f=10),c==null&&(c=t===10?"s":","),typeof c!="function"&&(!(t%1)&&(c=jn(c)).precision==null&&(c.trim=!0),c=Wn(c)),f===1/0)return c;let a=Math.max(1,t*f/r.ticks().length);return s=>{let m=s/e(Math.round(u(s)));return m*t<t-.5&&(m*=t),m<=a?c(s):""}},r.nice=()=>o(D(o(),{floor:f=>e(Math.floor(u(f))),ceil:f=>e(Math.ceil(u(f)))})),r}function _(){let n=F(R()).domain([1,10]);return n.copy=()=>N(n,_()).base(n.base()),y.apply(n,arguments),n}function sn(n){return function(r){return Math.sign(r)*Math.log1p(Math.abs(r/n))}}function pn(n){return function(r){return Math.sign(r)*Math.expm1(Math.abs(r))*n}}function L(n){var r=1,o=n(sn(r),pn(r));return o.constant=function(t){return arguments.length?n(sn(r=+t),pn(r)):r},M(o)}function G(){var n=L(R());return n.copy=function(){return N(n,G()).constant(n.constant())},y.apply(n,arguments)}function gn(n){return function(r){return r<0?-Math.pow(-r,n):Math.pow(r,n)}}function Jn(n){return n<0?-Math.sqrt(-n):Math.sqrt(n)}function Kn(n){return n<0?-n*n:n*n}function P(n){var r=n(v,v),o=1;function t(){return o===1?n(v,v):o===.5?n(Jn,Kn):n(gn(o),gn(1/o))}return r.exponent=function(u){return arguments.length?(o=+u,t()):o},M(r)}function Q(){var n=P(R());return n.copy=function(){return N(n,Q()).exponent(n.exponent())},y.apply(n,arguments),n}function Xn(){return Q.apply(null,arguments).exponent(.5)}function hn(n){return Math.sign(n)*n*n}function Zn(n){return Math.sign(n)*Math.sqrt(Math.abs(n))}function J(){var n=I(),r=[0,1],o=!1,t;function u(e){var i=Zn(n(e));return isNaN(i)?t:o?Math.round(i):i}return u.invert=function(e){return n.invert(hn(e))},u.domain=function(e){return arguments.length?(n.domain(e),u):n.domain()},u.range=function(e){return arguments.length?(n.range((r=Array.from(e,b)).map(hn)),u):r.slice()},u.rangeRound=function(e){return u.range(e).round(!0)},u.round=function(e){return arguments.length?(o=!!e,u):o},u.clamp=function(e){return arguments.length?(n.clamp(e),u):n.clamp()},u.unknown=function(e){return arguments.length?(t=e,u):t},u.copy=function(){return J(n.domain(),r).round(o).clamp(n.clamp()).unknown(t)},y.apply(u,arguments),M(u)}import{ascending as $n,bisect as nt,quantileSorted as tt}from"/v124/d3-array@3.2.3/esnext/d3-array.mjs";function K(){var n=[],r=[],o=[],t;function u(){var i=0,f=Math.max(1,r.length);for(o=new Array(f-1);++i<f;)o[i-1]=tt(n,i/f);return e}function e(i){return i==null||isNaN(i=+i)?t:r[nt(o,i)]}return e.invertExtent=function(i){var f=r.indexOf(i);return f<0?[NaN,NaN]:[f>0?o[f-1]:n[0],f<o.length?o[f]:n[n.length-1]]},e.domain=function(i){if(!arguments.length)return n.slice();n=[];for(let f of i)f!=null&&!isNaN(f=+f)&&n.push(f);return n.sort($n),u()},e.range=function(i){return arguments.length?(r=Array.from(i),u()):r.slice()},e.unknown=function(i){return arguments.length?(t=i,e):t},e.quantiles=function(){return o.slice()},e.copy=function(){return K().domain(n).range(r).unknown(t)},y.apply(e,arguments)}import{bisect as rt}from"/v124/d3-array@3.2.3/esnext/d3-array.mjs";function X(){var n=0,r=1,o=1,t=[.5],u=[0,1],e;function i(c){return c!=null&&c<=c?u[rt(t,c,0,o)]:e}function f(){var c=-1;for(t=new Array(o);++c<o;)t[c]=((c+1)*r-(c-o)*n)/(o+1);return i}return i.domain=function(c){return arguments.length?([n,r]=c,n=+n,r=+r,f()):[n,r]},i.range=function(c){return arguments.length?(o=(u=Array.from(c)).length-1,f()):u.slice()},i.invertExtent=function(c){var a=u.indexOf(c);return a<0?[NaN,NaN]:a<1?[n,t[0]]:a>=o?[t[o-1],r]:[t[a-1],t[a]]},i.unknown=function(c){return arguments.length&&(e=c),i},i.thresholds=function(){return t.slice()},i.copy=function(){return X().domain([n,r]).range(u).unknown(e)},y.apply(M(i),arguments)}import{bisect as et}from"/v124/d3-array@3.2.3/esnext/d3-array.mjs";function Z(){var n=[.5],r=[0,1],o,t=1;function u(e){return e!=null&&e<=e?r[et(n,e,0,t)]:o}return u.domain=function(e){return arguments.length?(n=Array.from(e),t=Math.min(n.length,r.length-1),u):n.slice()},u.range=function(e){return arguments.length?(r=Array.from(e),t=Math.min(n.length,r.length-1),u):r.slice()},u.invertExtent=function(e){var i=r.indexOf(e);return[n[i-1],n[i]]},u.unknown=function(e){return arguments.length?(o=e,u):o},u.copy=function(){return Z().domain(n).range(r).unknown(o)},y.apply(u,arguments)}import{timeYear as ot,timeMonth as ut,timeWeek as it,timeDay as at,timeHour as lt,timeMinute as ft,timeSecond as ct,timeTicks as mt,timeTickInterval as st}from"/v124/d3-time@3.1.0/esnext/d3-time.mjs";import{timeFormat as pt}from"/v124/d3-time-format@4.1.0/esnext/d3-time-format.mjs";function gt(n){return new Date(n)}function ht(n){return n instanceof Date?+n:+new Date(+n)}function Y(n,r,o,t,u,e,i,f,c,a){var s=I(),m=s.invert,l=s.domain,g=a(".%L"),d=a(":%S"),p=a("%I:%M"),x=a("%I %p"),w=a("%a %d"),O=a("%b %d"),T=a("%B"),xn=a("%Y");function qn(h){return(c(h)<h?g:f(h)<h?d:i(h)<h?p:e(h)<h?x:t(h)<h?u(h)<h?w:O:o(h)<h?T:xn)(h)}return s.invert=function(h){return new Date(m(h))},s.domain=function(h){return arguments.length?l(Array.from(h,ht)):l().map(gt)},s.ticks=function(h){var q=l();return n(q[0],q[q.length-1],h??10)},s.tickFormat=function(h,q){return q==null?qn:a(q)},s.nice=function(h){var q=l();return(!h||typeof h.range!="function")&&(h=r(q[0],q[q.length-1],h??10)),h?l(D(q,h)):s},s.copy=function(){return N(s,Y(n,r,o,t,u,e,i,f,c,a))},s}function dn(){return y.apply(Y(mt,st,ot,ut,it,at,lt,ft,ct,pt).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}import{utcYear as dt,utcMonth as yt,utcWeek as vt,utcDay as Mt,utcHour as wt,utcMinute as kt,utcSecond as xt,utcTicks as qt,utcTickInterval as Nt}from"/v124/d3-time@3.1.0/esnext/d3-time.mjs";import{utcFormat as St}from"/v124/d3-time-format@4.1.0/esnext/d3-time-format.mjs";function yn(){return y.apply(Y(qt,Nt,dt,yt,vt,Mt,wt,kt,xt,St).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}import{interpolate as bt,interpolateRound as Rt}from"/v124/d3-interpolate@3.0.1/esnext/d3-interpolate.mjs";function H(){var n=0,r=1,o,t,u,e,i=v,f=!1,c;function a(m){return m==null||isNaN(m=+m)?c:i(u===0?.5:(m=(e(m)-o)*u,f?Math.max(0,Math.min(1,m)):m))}a.domain=function(m){return arguments.length?([n,r]=m,o=e(n=+n),t=e(r=+r),u=o===t?0:1/(t-o),a):[n,r]},a.clamp=function(m){return arguments.length?(f=!!m,a):f},a.interpolator=function(m){return arguments.length?(i=m,a):i};function s(m){return function(l){var g,d;return arguments.length?([g,d]=l,i=m(g,d),a):[i(0),i(1)]}}return a.range=s(bt),a.rangeRound=s(Rt),a.unknown=function(m){return arguments.length?(c=m,a):c},function(m){return e=m,o=m(n),t=m(r),u=o===t?0:1/(t-o),a}}function S(n,r){return r.domain(n.domain()).interpolator(n.interpolator()).clamp(n.clamp()).unknown(n.unknown())}function $(){var n=M(H()(v));return n.copy=function(){return S(n,$())},k.apply(n,arguments)}function vn(){var n=F(H()).domain([1,10]);return n.copy=function(){return S(n,vn()).base(n.base())},k.apply(n,arguments)}function Mn(){var n=L(H());return n.copy=function(){return S(n,Mn()).constant(n.constant())},k.apply(n,arguments)}function nn(){var n=P(H());return n.copy=function(){return S(n,nn()).exponent(n.exponent())},k.apply(n,arguments)}function It(){return nn.apply(null,arguments).exponent(.5)}import{ascending as At,bisect as Dt,quantile as Ft}from"/v124/d3-array@3.2.3/esnext/d3-array.mjs";function tn(){var n=[],r=v;function o(t){if(t!=null&&!isNaN(t=+t))return r((Dt(n,t,1)-1)/(n.length-1))}return o.domain=function(t){if(!arguments.length)return n.slice();n=[];for(let u of t)u!=null&&!isNaN(u=+u)&&n.push(u);return n.sort(At),o},o.interpolator=function(t){return arguments.length?(r=t,o):r},o.range=function(){return n.map((t,u)=>r(u/(n.length-1)))},o.quantiles=function(t){return Array.from({length:t+1},(u,e)=>Ft(n,e/t))},o.copy=function(){return tn(r).domain(n)},k.apply(o,arguments)}import{interpolate as Lt,interpolateRound as Pt,piecewise as Ot}from"/v124/d3-interpolate@3.0.1/esnext/d3-interpolate.mjs";function U(){var n=0,r=.5,o=1,t=1,u,e,i,f,c,a=v,s,m=!1,l;function g(p){return isNaN(p=+p)?l:(p=.5+((p=+s(p))-e)*(t*p<t*e?f:c),a(m?Math.max(0,Math.min(1,p)):p))}g.domain=function(p){return arguments.length?([n,r,o]=p,u=s(n=+n),e=s(r=+r),i=s(o=+o),f=u===e?0:.5/(e-u),c=e===i?0:.5/(i-e),t=e<u?-1:1,g):[n,r,o]},g.clamp=function(p){return arguments.length?(m=!!p,g):m},g.interpolator=function(p){return arguments.length?(a=p,g):a};function d(p){return function(x){var w,O,T;return arguments.length?([w,O,T]=x,a=Ot(p,[w,O,T]),g):[a(0),a(.5),a(1)]}}return g.range=d(Lt),g.rangeRound=d(Pt),g.unknown=function(p){return arguments.length?(l=p,g):l},function(p){return s=p,u=p(n),e=p(r),i=p(o),f=u===e?0:.5/(e-u),c=e===i?0:.5/(i-e),t=e<u?-1:1,g}}function rn(){var n=M(U()(v));return n.copy=function(){return S(n,rn())},k.apply(n,arguments)}function wn(){var n=F(U()).domain([.1,1,10]);return n.copy=function(){return S(n,wn()).base(n.base())},k.apply(n,arguments)}function kn(){var n=L(U());return n.copy=function(){return S(n,kn()).constant(n.constant())},k.apply(n,arguments)}function en(){var n=P(U());return n.copy=function(){return S(n,en()).exponent(n.exponent())},k.apply(n,arguments)}function Tt(){return en.apply(null,arguments).exponent(.5)}export{E as scaleBand,rn as scaleDiverging,wn as scaleDivergingLog,en as scaleDivergingPow,Tt as scaleDivergingSqrt,kn as scaleDivergingSymlog,V as scaleIdentity,W as scaleImplicit,C as scaleLinear,_ as scaleLog,A as scaleOrdinal,Sn as scalePoint,Q as scalePow,K as scaleQuantile,X as scaleQuantize,J as scaleRadial,$ as scaleSequential,vn as scaleSequentialLog,nn as scaleSequentialPow,tn as scaleSequentialQuantile,It as scaleSequentialSqrt,Mn as scaleSequentialSymlog,Xn as scaleSqrt,G as scaleSymlog,Z as scaleThreshold,dn as scaleTime,yn as scaleUtc,z as tickFormat};
//# sourceMappingURL=d3-scale.mjs.map