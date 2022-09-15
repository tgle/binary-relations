import{S as ct,i as at,s as Me,a as B,k as w,H as le,e as J,q as T,L as _t,h,c as P,l as E,m as g,I as ne,r as C,n as u,p as Ee,M as xe,b as z,F as f,u as K,A as pe,J as Q,N as ut,K as Ie,O as dt,f as ht,t as ft,v as vt,w as mt,x as gt,y as pt}from"../../../chunks/index-37015614.js";import{a as bt,l as Ce,_ as He}from"../../../chunks/index-e852a150.js";function ge(s,e){const t=Object.keys(e),l=Object.keys(e[t[0]]);if(s==="functional")return t.every(n=>l.filter(r=>e[n][r]).length<=1);if(s==="injective")return l.every(n=>t.filter(r=>e[r][n]).length<=1);if(s==="total")return t.every(n=>l.some(r=>e[n][r]));if(s==="surjective")return l.every(n=>t.some(r=>e[r][n]));if(s==="bijective")return ge("functional",e)&&ge("injective",e)&&ge("total",e)&&ge("surjective",e);throw new Error(`Unknown check: ${s}`)}function kt(s){const e=s-1;return e*e*e+1}const Le=["#FFFF04","#EA4C89","#892AB8","#4AF2FD"];class yt{constructor(e,t){this.x=e,this.y=t,this.vx=(Math.random()-.5)*30,this.vy=-Math.random()*30,this.r=Math.random()*3+3,this.lifetime=Math.random()*500+300,this.birth=Date.now(),this.color=Le[Math.floor(Math.random()*Le.length)]}update(){this.x+=this.vx,this.y+=this.vy,this.vx*=.9,this.vy*=.9,this.vy+=.5}}class wt{constructor(e){this.canvas=e,this.running=!1,this.particles=[],this.ctx=e.getContext("2d")}loop(){const{canvas:e,ctx:t,particles:l}=this;t.clearRect(0,0,e.width,e.height);for(const n of l){n.update(),t.beginPath(),t.fillStyle=n.color;const r=bt.clamp((Date.now()-n.birth)/n.lifetime,0,1);t.globalAlpha=1-kt(r),t.arc(n.x,n.y,n.r,0,Math.PI*2),t.fill()}t.globalAlpha=1,this.particles=l.filter(n=>Date.now()-n.birth<=n.lifetime),this.particles.length?requestAnimationFrame(()=>this.loop()):(this.running=!1,t.clearRect(0,0,e.width,e.height))}spawnAt(e){const t=e.getBoundingClientRect();for(let l=0;l<50;l++)this.particles.push(new yt(t.left+t.width/2,t.top+t.height/2));this.running||(this.running=!0,this.loop())}}class Et{constructor(){this.canvas=document.createElement("canvas"),this.canvas.id="effectCanvas",document.body.appendChild(this.canvas),window.addEventListener("resize",this.resize.bind(this)),this.resize(),this.canvas.style.position="fixed",this.canvas.style.left="0px",this.canvas.style.top="0px",this.canvas.style.width="100vw",this.canvas.style.height="100vh",this.canvas.style.pointerEvents="none",this.canvas.style.zIndex="1",this.confetti=new wt(this.canvas)}resize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}}function Se(s,e,t){const l=s.slice();return l[25]=e[t].check,l[26]=e[t].applies,l[28]=t,l}function We(s,e,t){const l=s.slice();return l[29]=e[t],l}function Ue(s,e,t){const l=s.slice();return l[32]=e[t],l}function Xe(s,e,t){const l=s.slice();return l[35]=e[t],l}function Ye(s,e,t){const l=s.slice();return l[29]=e[t],l}function Je(s,e,t){const l=s.slice();return l[29]=e[t],l}function Ke(s,e,t){const l=s.slice();return l[42]=e[t],l}function Ze(s,e,t){const l=s.slice();return l[29]=e[t],l}function Ge(s){let e,t=s[29]+"",l;return{c(){e=w("td"),l=T(t),this.h()},l(n){e=E(n,"TD",{class:!0});var r=g(e);l=C(r,t),r.forEach(h),this.h()},h(){u(e,"class","svelte-n3nfkz")},m(n,r){z(n,e,r),f(e,l)},p(n,r){r[0]&8&&t!==(t=n[29]+"")&&K(l,t)},d(n){n&&h(e)}}}function zt(s){let e;return{c(){e=T("0")},l(t){e=C(t,"0")},m(t,l){z(t,e,l)},d(t){t&&h(e)}}}function Dt(s){let e;return{c(){e=T("1")},l(t){e=C(t,"1")},m(t,l){z(t,e,l)},d(t){t&&h(e)}}}function Qe(s){let e;function t(r,o){return r[0][r[29]][r[42]]?Dt:zt}let l=t(s),n=l(s);return{c(){e=w("td"),n.c(),this.h()},l(r){e=E(r,"TD",{class:!0});var o=g(e);n.l(o),o.forEach(h),this.h()},h(){u(e,"class","svelte-n3nfkz"),Ee(e,"font-weight","normal",!1)},m(r,o){z(r,e,o),n.m(e,null)},p(r,o){l!==(l=t(r))&&(n.d(1),n=l(r),n&&(n.c(),n.m(e,null)))},d(r){r&&h(e),n.d()}}}function $e(s){let e,t,l=s[29]+"",n,r,o,a=s[3],d=[];for(let m=0;m<a.length;m+=1)d[m]=Qe(Ke(s,a,m));return{c(){e=w("tr"),t=w("td"),n=T(l),r=B();for(let m=0;m<d.length;m+=1)d[m].c();o=B(),this.h()},l(m){e=E(m,"TR",{});var D=g(e);t=E(D,"TD",{class:!0});var _=g(t);n=C(_,l),_.forEach(h),r=P(D);for(let v=0;v<d.length;v+=1)d[v].l(D);o=P(D),D.forEach(h),this.h()},h(){u(t,"class","svelte-n3nfkz")},m(m,D){z(m,e,D),f(e,t),f(t,n),f(e,r);for(let _=0;_<d.length;_+=1)d[_].m(e,null);f(e,o)},p(m,D){if(D[0]&16&&l!==(l=m[29]+"")&&K(n,l),D[0]&25){a=m[3];let _;for(_=0;_<a.length;_+=1){const v=Ke(m,a,_);d[_]?d[_].p(v,D):(d[_]=Qe(v),d[_].c(),d[_].m(e,o))}for(;_<d.length;_+=1)d[_].d(1);d.length=a.length}},d(m){m&&h(e),Q(d,m)}}}function et(s){let e,t=s[29].label+"",l,n,r;return{c(){e=le("text"),l=T(t),this.h()},l(o){e=ne(o,"text",{x:!0,y:!0,"dominant-baseline":!0});var a=g(e);l=C(a,t),a.forEach(h),this.h()},h(){u(e,"x",n=s[29].x),u(e,"y",r=s[29].y),u(e,"dominant-baseline","hanging")},m(o,a){z(o,e,a),f(e,l)},p(o,a){a[0]&256&&t!==(t=o[29].label+"")&&K(l,t),a[0]&256&&n!==(n=o[29].x)&&u(e,"x",n),a[0]&256&&r!==(r=o[29].y)&&u(e,"y",r)},d(o){o&&h(e)}}}function tt(s){let e,t,l,n,r;return{c(){e=le("line"),this.h()},l(o){e=ne(o,"line",{x1:!0,y1:!0,x2:!0,y2:!0,"marker-end":!0,stroke:!0,"stroke-width":!0}),g(e).forEach(h),this.h()},h(){u(e,"x1",t=s[32].x+s[32].width+5),u(e,"y1",l=s[32].y+s[32].height/2),u(e,"x2",n=s[35].x-5),u(e,"y2",r=s[35].y+s[35].height/2),u(e,"marker-end","url(#head)"),u(e,"stroke","black"),u(e,"stroke-width","2")},m(o,a){z(o,e,a)},p(o,a){a[0]&256&&t!==(t=o[32].x+o[32].width+5)&&u(e,"x1",t),a[0]&256&&l!==(l=o[32].y+o[32].height/2)&&u(e,"y1",l),a[0]&128&&n!==(n=o[35].x-5)&&u(e,"x2",n),a[0]&128&&r!==(r=o[35].y+o[35].height/2)&&u(e,"y2",r)},d(o){o&&h(e)}}}function lt(s){let e,t=s[0][s[32].label][s[35].label]&&tt(s);return{c(){t&&t.c(),e=J()},l(l){t&&t.l(l),e=J()},m(l,n){t&&t.m(l,n),z(l,e,n)},p(l,n){l[0][l[32].label][l[35].label]?t?t.p(l,n):(t=tt(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){t&&t.d(l),l&&h(e)}}}function nt(s){let e,t=s[7],l=[];for(let n=0;n<t.length;n+=1)l[n]=lt(Xe(s,t,n));return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=J()},l(n){for(let r=0;r<l.length;r+=1)l[r].l(n);e=J()},m(n,r){for(let o=0;o<l.length;o+=1)l[o].m(n,r);z(n,e,r)},p(n,r){if(r[0]&385){t=n[7];let o;for(o=0;o<t.length;o+=1){const a=Xe(n,t,o);l[o]?l[o].p(a,r):(l[o]=lt(a),l[o].c(),l[o].m(e.parentNode,e))}for(;o<l.length;o+=1)l[o].d(1);l.length=t.length}},d(n){Q(l,n),n&&h(e)}}}function st(s){let e,t=s[29].label+"",l,n,r;return{c(){e=le("text"),l=T(t),this.h()},l(o){e=ne(o,"text",{x:!0,y:!0,"dominant-baseline":!0});var a=g(e);l=C(a,t),a.forEach(h),this.h()},h(){u(e,"x",n=s[29].x),u(e,"y",r=s[29].y),u(e,"dominant-baseline","hanging")},m(o,a){z(o,e,a),f(e,l)},p(o,a){a[0]&128&&t!==(t=o[29].label+"")&&K(l,t),a[0]&128&&n!==(n=o[29].x)&&u(e,"x",n),a[0]&128&&r!==(r=o[29].y)&&u(e,"y",r)},d(o){o&&h(e)}}}function At(s){let e,t;return{c(){e=T(s[13]),t=T("%")},l(l){e=C(l,s[13]),t=C(l,"%")},m(l,n){z(l,e,n),z(l,t,n)},p(l,n){n[0]&8192&&K(e,l[13])},d(l){l&&h(e),l&&h(t)}}}function Nt(s){let e;return{c(){e=T("TBD")},l(t){e=C(t,"TBD")},m(t,l){z(t,e,l)},p:pe,d(t){t&&h(e)}}}function it(s){let e;return{c(){e=T("not")},l(t){e=C(t,"not")},m(t,l){z(t,e,l)},d(t){t&&h(e)}}}function rt(s){let e,t,l=s[25]+"",n,r,o=!s[26]&&it();return{c(){e=w("li"),o&&o.c(),t=B(),n=T(l),r=B()},l(a){e=E(a,"LI",{});var d=g(e);o&&o.l(d),t=P(d),n=C(d,l),r=P(d),d.forEach(h)},m(a,d){z(a,e,d),o&&o.m(e,null),f(e,t),f(e,n),f(e,r)},p(a,d){a[26]?o&&(o.d(1),o=null):o||(o=it(),o.c(),o.m(e,t)),d[0]&4096&&l!==(l=a[25]+"")&&K(n,l)},d(a){a&&h(e),o&&o.d()}}}function Tt(s){let e=s[11].check,t,l=ot(s);return{c(){l.c(),t=J()},l(n){l.l(n),t=J()},m(n,r){l.m(n,r),z(n,t,r)},p(n,r){r[0]&2048&&Me(e,e=n[11].check)?(l.d(1),l=ot(n),l.c(),l.m(t.parentNode,t)):l.p(n,r)},d(n){n&&h(t),l.d(n)}}}function Ct(s){let e,t,l,n;return{c(){e=w("button"),t=T("Next"),this.h()},l(r){e=E(r,"BUTTON",{class:!0});var o=g(e);t=C(o,"Next"),o.forEach(h),this.h()},h(){u(e,"class","btn btn-success svelte-n3nfkz")},m(r,o){z(r,e,o),f(e,t),l||(n=Ie(e,"click",s[14]),l=!0)},p:pe,d(r){r&&h(e),l=!1,n()}}}function ot(s){let e,t=s[11].check+"",l,n,r,o,a=s[11].check+"",d,m,D;return{c(){e=w("button"),l=T(t),n=B(),r=w("button"),o=T("not "),d=T(a),this.h()},l(_){e=E(_,"BUTTON",{class:!0});var v=g(e);l=C(v,t),v.forEach(h),n=P(_),r=E(_,"BUTTON",{class:!0});var A=g(r);o=C(A,"not "),d=C(A,a),A.forEach(h),this.h()},h(){u(e,"class","btn btn-success svelte-n3nfkz"),u(r,"class","btn btn-danger svelte-n3nfkz")},m(_,v){z(_,e,v),f(e,l),z(_,n,v),z(_,r,v),f(r,o),f(r,d),m||(D=[Ie(e,"click",s[18]),Ie(r,"click",s[19])],m=!0)},p(_,v){v[0]&2048&&t!==(t=_[11].check+"")&&K(l,t),v[0]&2048&&a!==(a=_[11].check+"")&&K(d,a)},d(_){_&&h(e),_&&h(n),_&&h(r),m=!1,dt(D)}}}function It(s){let e,t,l,n,r,o,a,d,m,D,_,v,A,N,x,Z,G,$,I,H,ee,se,ie,U,de,re,ve,p,L,q,te,ze,oe,De,X,ce=s[3],M=[];for(let c=0;c<ce.length;c+=1)M[c]=Ge(Ze(s,ce,c));let ae=s[4],j=[];for(let c=0;c<ae.length;c+=1)j[c]=$e(Je(s,ae,c));let he=s[8],R=[];for(let c=0;c<he.length;c+=1)R[c]=et(Ye(s,he,c));let fe=s[8],O=[];for(let c=0;c<fe.length;c+=1)O[c]=nt(Ue(s,fe,c));let _e=s[7],V=[];for(let c=0;c<_e.length;c+=1)V[c]=st(We(s,_e,c));function je(c,b){return c[13]==="NaN"?Nt:At}let be=je(s),S=be(s),ue=s[12],F=[];for(let c=0;c<ue.length;c+=1)F[c]=rt(Se(s,ue,c));function Re(c,b){return c[10]?Ct:Tt}let ke=Re(s),W=ke(s);return{c(){e=B(),t=w("div"),l=w("div"),n=w("div"),r=w("table"),o=w("tr"),a=w("td"),d=B();for(let c=0;c<M.length;c+=1)M[c].c();m=B();for(let c=0;c<j.length;c+=1)j[c].c();D=B(),_=w("div"),v=le("svg"),A=le("defs"),N=le("marker"),x=le("path");for(let c=0;c<R.length;c+=1)R[c].c();Z=J();for(let c=0;c<O.length;c+=1)O[c].c();G=J();for(let c=0;c<V.length;c+=1)V[c].c();$=B(),I=w("div"),H=w("div"),ee=T("Answered: "),se=T(s[1]),ie=B(),U=w("div"),de=T("Correct: "),re=T(s[2]),ve=B(),p=w("div"),L=T("Accuracy: "),S.c(),q=B(),te=w("hr"),ze=B(),oe=w("ul");for(let c=0;c<F.length;c+=1)F[c].c();De=B(),X=w("div"),W.c(),this.h()},l(c){_t('[data-svelte="svelte-iegv2u"]',document.head).forEach(h),e=P(c),t=E(c,"DIV",{class:!0});var i=g(t);l=E(i,"DIV",{class:!0});var k=g(l);n=E(k,"DIV",{class:!0});var Oe=g(n);r=E(Oe,"TABLE",{});var ye=g(r);o=E(ye,"TR",{});var we=g(o);a=E(we,"TD",{class:!0}),g(a).forEach(h),d=P(we);for(let y=0;y<M.length;y+=1)M[y].l(we);we.forEach(h),m=P(ye);for(let y=0;y<j.length;y+=1)j[y].l(ye);ye.forEach(h),Oe.forEach(h),D=P(k),_=E(k,"DIV",{class:!0});var Ve=g(_);v=ne(Ve,"svg",{class:!0});var me=g(v);A=ne(me,"defs",{});var Fe=g(A);N=ne(Fe,"marker",{id:!0,orient:!0,markerWidth:!0,markerHeight:!0,refX:!0,refY:!0});var qe=g(N);x=ne(qe,"path",{d:!0,fill:!0}),g(x).forEach(h),qe.forEach(h),Fe.forEach(h);for(let y=0;y<R.length;y+=1)R[y].l(me);Z=J();for(let y=0;y<O.length;y+=1)O[y].l(me);G=J();for(let y=0;y<V.length;y+=1)V[y].l(me);me.forEach(h),Ve.forEach(h),$=P(k),I=E(k,"DIV",{class:!0});var Y=g(I);H=E(Y,"DIV",{});var Ae=g(H);ee=C(Ae,"Answered: "),se=C(Ae,s[1]),Ae.forEach(h),ie=P(Y),U=E(Y,"DIV",{});var Ne=g(U);de=C(Ne,"Correct: "),re=C(Ne,s[2]),Ne.forEach(h),ve=P(Y),p=E(Y,"DIV",{});var Te=g(p);L=C(Te,"Accuracy: "),S.l(Te),Te.forEach(h),q=P(Y),te=E(Y,"HR",{}),ze=P(Y),oe=E(Y,"UL",{});var Be=g(oe);for(let y=0;y<F.length;y+=1)F[y].l(Be);Be.forEach(h),Y.forEach(h),k.forEach(h),De=P(i),X=E(i,"DIV",{class:!0});var Pe=g(X);W.l(Pe),Pe.forEach(h),i.forEach(h),this.h()},h(){document.title="Practice binary relations",u(a,"class","svelte-n3nfkz"),u(n,"class","grid svelte-n3nfkz"),u(x,"d","M0,0 V4 L2,2 Z"),u(x,"fill","black"),u(N,"id","head"),u(N,"orient","auto"),u(N,"markerWidth","3"),u(N,"markerHeight","4"),u(N,"refX","1.5"),u(N,"refY","2"),u(v,"class","svelte-n3nfkz"),Ee(v,"width",Mt,!1),Ee(v,"height",s[9],!1),u(_,"class","slopes svelte-n3nfkz"),u(I,"class","sidebar svelte-n3nfkz"),u(l,"class","visual svelte-n3nfkz"),u(X,"class","quiz svelte-n3nfkz"),xe(X,"shake",s[5]),u(t,"class","Practice")},m(c,b){z(c,e,b),z(c,t,b),f(t,l),f(l,n),f(n,r),f(r,o),f(o,a),f(o,d);for(let i=0;i<M.length;i+=1)M[i].m(o,null);f(r,m);for(let i=0;i<j.length;i+=1)j[i].m(r,null);f(l,D),f(l,_),f(_,v),f(v,A),f(A,N),f(N,x);for(let i=0;i<R.length;i+=1)R[i].m(v,null);f(v,Z);for(let i=0;i<O.length;i+=1)O[i].m(v,null);f(v,G);for(let i=0;i<V.length;i+=1)V[i].m(v,null);f(l,$),f(l,I),f(I,H),f(H,ee),f(H,se),f(I,ie),f(I,U),f(U,de),f(U,re),f(I,ve),f(I,p),f(p,L),S.m(p,null),f(I,q),f(I,te),f(I,ze),f(I,oe);for(let i=0;i<F.length;i+=1)F[i].m(oe,null);f(t,De),f(t,X),W.m(X,null),s[20](X)},p(c,b){if(b[0]&8){ce=c[3];let i;for(i=0;i<ce.length;i+=1){const k=Ze(c,ce,i);M[i]?M[i].p(k,b):(M[i]=Ge(k),M[i].c(),M[i].m(o,null))}for(;i<M.length;i+=1)M[i].d(1);M.length=ce.length}if(b[0]&25){ae=c[4];let i;for(i=0;i<ae.length;i+=1){const k=Je(c,ae,i);j[i]?j[i].p(k,b):(j[i]=$e(k),j[i].c(),j[i].m(r,null))}for(;i<j.length;i+=1)j[i].d(1);j.length=ae.length}if(b[0]&256){he=c[8];let i;for(i=0;i<he.length;i+=1){const k=Ye(c,he,i);R[i]?R[i].p(k,b):(R[i]=et(k),R[i].c(),R[i].m(v,Z))}for(;i<R.length;i+=1)R[i].d(1);R.length=he.length}if(b[0]&385){fe=c[8];let i;for(i=0;i<fe.length;i+=1){const k=Ue(c,fe,i);O[i]?O[i].p(k,b):(O[i]=nt(k),O[i].c(),O[i].m(v,G))}for(;i<O.length;i+=1)O[i].d(1);O.length=fe.length}if(b[0]&128){_e=c[7];let i;for(i=0;i<_e.length;i+=1){const k=We(c,_e,i);V[i]?V[i].p(k,b):(V[i]=st(k),V[i].c(),V[i].m(v,null))}for(;i<V.length;i+=1)V[i].d(1);V.length=_e.length}if(b[0]&512&&Ee(v,"height",c[9],!1),b[0]&2&&K(se,c[1]),b[0]&4&&K(re,c[2]),be===(be=je(c))&&S?S.p(c,b):(S.d(1),S=be(c),S&&(S.c(),S.m(p,null))),b[0]&4096){ue=c[12];let i;for(i=0;i<ue.length;i+=1){const k=Se(c,ue,i);F[i]?F[i].p(k,b):(F[i]=rt(k),F[i].c(),F[i].m(oe,null))}for(;i<F.length;i+=1)F[i].d(1);F.length=ue.length}ke===(ke=Re(c))&&W?W.p(c,b):(W.d(1),W=ke(c),W&&(W.c(),W.m(X,null))),b[0]&32&&xe(X,"shake",c[5])},i:pe,o:pe,d(c){c&&h(e),c&&h(t),Q(M,c),Q(j,c),Q(R,c),Q(O,c),Q(V,c),S.d(),Q(F,c),W.d(),s[20](null)}}}const Mt=150;function jt(s,e,t){let l,n,r,o,a,d,m,D,_;const v=new Et;let A={},N=[],x=0,Z=0,G=0,$=!1,I,H,ee=!1;const se=["functional","injective","total","surjective","bijective"];function ie(){t(0,A={});const p=Z===0?3:Math.floor(Math.random()*3)+2,L="ABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let q=0;q<p;q++){t(0,A[L[q]]={},A);for(let te=0;te<p;te++)t(0,A[L[q]][L[te]]=Math.random()>.5,A)}t(16,N=se.map(q=>({check:q,applies:ge(q,A),visible:!1}))),t(17,x=0),ee=!1}function U(p){t(1,Z+=1),p===r.applies?(t(11,r.visible=!0,r),t(16,N=Array.from(N)),t(17,x++,x),t(2,G+=1),x===N.length&&!ee&&v.confetti.spawnAt(H)):(ee=!0,t(5,$=!0),clearTimeout(I),I=setTimeout(()=>{t(5,$=!1)},300))}ie();const de=()=>U(!0),re=()=>U(!1);function ve(p){ut[p?"unshift":"push"](()=>{H=p,t(6,H)})}return s.$$.update=()=>{s.$$.dirty[0]&6&&t(13,l=(G/Z*100).toFixed(0)),s.$$.dirty[0]&65536&&t(12,n=N.filter(p=>p.visible)),s.$$.dirty[0]&196608&&t(11,r=N[x]),s.$$.dirty[0]&196608&&t(10,o=x===N.length),s.$$.dirty[0]&1&&t(4,a=Object.keys(A)),s.$$.dirty[0]&1&&t(3,d=Ce.exports.uniq(Object.keys(A).flatMap(p=>Object.keys(A[p])))),s.$$.dirty[0]&16&&t(9,m=a.length*30),s.$$.dirty[0]&16&&t(8,D=Ce.exports.uniq(a.map((p,L)=>{const q=He(p,{font:"Arial",fontSize:"18px",fontWeight:"bold"});return{x:0,y:5+L*30,width:q.width,height:12,label:p}}))),s.$$.dirty[0]&8&&t(7,_=Ce.exports.uniq(d.map((p,L)=>{const q=He(p,{font:"Arial",fontSize:"18px",fontWeight:"bold"});return{x:130,y:5+L*30,width:q.width,height:12,label:p}})))},[A,Z,G,d,a,$,H,_,D,m,o,r,n,l,ie,U,N,x,de,re,ve]}class Rt extends ct{constructor(e){super(),at(this,e,jt,It,Me,{},null,[-1,-1])}}function Ot(s){let e,t;return e=new Rt({}),{c(){vt(e.$$.fragment)},l(l){mt(e.$$.fragment,l)},m(l,n){gt(e,l,n),t=!0},i(l){t||(ht(e.$$.fragment,l),t=!0)},o(l){ft(e.$$.fragment,l),t=!1},d(l){pt(e,l)}}}function Vt(s){let e,t,l=Ot();return{c(){e=w("main"),l&&l.c(),this.h()},l(n){e=E(n,"MAIN",{class:!0});var r=g(e);l&&l.l(r),r.forEach(h),this.h()},h(){u(e,"class","svelte-4v788m")},m(n,r){z(n,e,r),l&&l.m(e,null),t=!0},p:pe,i(n){t||(ht(l),t=!0)},o(n){ft(l),t=!1},d(n){n&&h(e),l&&l.d()}}}class Bt extends ct{constructor(e){super(),at(this,e,null,Vt,Me,{})}}export{Bt as default};
