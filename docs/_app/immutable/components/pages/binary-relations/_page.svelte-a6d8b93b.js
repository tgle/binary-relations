import{S as Fn,i as On,s as Gn,k as u,a as p,H as Ce,e as H,l as _,m as f,h as a,c as y,I as He,n as d,b as w,F as r,A as Bt,J as Ge,q as v,r as b,u as Cn,K as Hn,L as Mn,f as U,t as W,v as oe,w as ae,x as se,y as ce}from"../../../chunks/index-37015614.js";import{l as Mt,_ as kn}from"../../../chunks/index-e852a150.js";function En(s,e,t){const n=s.slice();return n[14]=e[t],n}function wn(s,e,t){const n=s.slice();return n[17]=e[t],n}function $n(s,e,t){const n=s.slice();return n[20]=e[t],n}function Rn(s,e,t){const n=s.slice();return n[14]=e[t],n}function jn(s,e,t){const n=s.slice();return n[14]=e[t],n[25]=e,n[26]=t,n}function In(s,e,t){const n=s.slice();return n[27]=e[t],n[28]=e,n[29]=t,n}function Tn(s,e,t){const n=s.slice();return n[14]=e[t],n}function Nn(s){let e,t=s[14]+"",n;return{c(){e=u("td"),n=v(t),this.h()},l(i){e=_(i,"TD",{class:!0});var l=f(e);n=b(l,t),l.forEach(a),this.h()},h(){d(e,"class","svelte-14uv5yg")},m(i,l){w(i,e,l),r(e,n)},p:Bt,d(i){i&&a(e)}}}function An(s){let e,t,n,i;function l(){s[12].call(t,s[14],s[27])}return{c(){e=u("td"),t=u("input"),this.h()},l(o){e=_(o,"TD",{class:!0});var m=f(e);t=_(m,"INPUT",{type:!0,class:!0}),m.forEach(a),this.h()},h(){d(t,"type","checkbox"),d(t,"class","svelte-14uv5yg"),d(e,"class","svelte-14uv5yg")},m(o,m){w(o,e,m),r(e,t),t.checked=s[1][s[14]][s[27]],n||(i=Hn(t,"change",l),n=!0)},p(o,m){s=o,m[0]&1538&&(t.checked=s[1][s[14]][s[27]])},d(o){o&&a(e),n=!1,i()}}}function qn(s){let e,t,n=s[14]+"",i,l,o,m=s[10],$=[];for(let R=0;R<m.length;R+=1)$[R]=An(In(s,m,R));return{c(){e=u("tr"),t=u("td"),i=v(n),l=p();for(let R=0;R<$.length;R+=1)$[R].c();o=p(),this.h()},l(R){e=_(R,"TR",{});var T=f(e);t=_(T,"TD",{class:!0});var g=f(t);i=b(g,n),g.forEach(a),l=y(T);for(let S=0;S<$.length;S+=1)$[S].l(T);o=y(T),T.forEach(a),this.h()},h(){d(t,"class","svelte-14uv5yg")},m(R,T){w(R,e,T),r(e,t),r(t,i),r(e,l);for(let g=0;g<$.length;g+=1)$[g].m(e,null);r(e,o)},p(R,T){if(T[0]&1538){m=R[10];let g;for(g=0;g<m.length;g+=1){const S=In(R,m,g);$[g]?$[g].p(S,T):($[g]=An(S),$[g].c(),$[g].m(e,o))}for(;g<$.length;g+=1)$[g].d(1);$.length=m.length}},d(R){R&&a(e),Ge($,R)}}}function xn(s){let e,t=s[14].label+"",n,i,l;return{c(){e=Ce("text"),n=v(t),this.h()},l(o){e=He(o,"text",{x:!0,y:!0,"dominant-baseline":!0});var m=f(e);n=b(m,t),m.forEach(a),this.h()},h(){d(e,"x",i=s[14].x),d(e,"y",l=s[14].y),d(e,"dominant-baseline","hanging")},m(o,m){w(o,e,m),r(e,n)},p(o,m){m[0]&128&&t!==(t=o[14].label+"")&&Cn(n,t),m[0]&128&&i!==(i=o[14].x)&&d(e,"x",i),m[0]&128&&l!==(l=o[14].y)&&d(e,"y",l)},d(o){o&&a(e)}}}function Dn(s){let e,t,n,i,l;return{c(){e=Ce("line"),this.h()},l(o){e=He(o,"line",{x1:!0,y1:!0,x2:!0,y2:!0,"marker-end":!0,stroke:!0,"stroke-width":!0}),f(e).forEach(a),this.h()},h(){d(e,"x1",t=s[17].x+s[17].width+5),d(e,"y1",n=s[17].y+s[17].height/2),d(e,"x2",i=s[20].x-5),d(e,"y2",l=s[20].y+s[20].height/2),d(e,"marker-end","url(#head)"),d(e,"stroke","black"),d(e,"stroke-width","2")},m(o,m){w(o,e,m)},p(o,m){m[0]&128&&t!==(t=o[17].x+o[17].width+5)&&d(e,"x1",t),m[0]&128&&n!==(n=o[17].y+o[17].height/2)&&d(e,"y1",n),m[0]&64&&i!==(i=o[20].x-5)&&d(e,"x2",i),m[0]&64&&l!==(l=o[20].y+o[20].height/2)&&d(e,"y2",l)},d(o){o&&a(e)}}}function Pn(s){let e,t=s[1][s[17].label][s[20].label]&&Dn(s);return{c(){t&&t.c(),e=H()},l(n){t&&t.l(n),e=H()},m(n,i){t&&t.m(n,i),w(n,e,i)},p(n,i){n[1][n[17].label][n[20].label]?t?t.p(n,i):(t=Dn(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(n){t&&t.d(n),n&&a(e)}}}function Sn(s){let e,t=s[6],n=[];for(let i=0;i<t.length;i+=1)n[i]=Pn($n(s,t,i));return{c(){for(let i=0;i<n.length;i+=1)n[i].c();e=H()},l(i){for(let l=0;l<n.length;l+=1)n[l].l(i);e=H()},m(i,l){for(let o=0;o<n.length;o+=1)n[o].m(i,l);w(i,e,l)},p(i,l){if(l[0]&194){t=i[6];let o;for(o=0;o<t.length;o+=1){const m=$n(i,t,o);n[o]?n[o].p(m,l):(n[o]=Pn(m),n[o].c(),n[o].m(e.parentNode,e))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(i){Ge(n,i),i&&a(e)}}}function Vn(s){let e,t=s[14].label+"",n,i,l;return{c(){e=Ce("text"),n=v(t),this.h()},l(o){e=He(o,"text",{x:!0,y:!0,"dominant-baseline":!0});var m=f(e);n=b(m,t),m.forEach(a),this.h()},h(){d(e,"x",i=s[14].x),d(e,"y",l=s[14].y),d(e,"dominant-baseline","hanging")},m(o,m){w(o,e,m),r(e,n)},p(o,m){m[0]&64&&t!==(t=o[14].label+"")&&Cn(n,t),m[0]&64&&i!==(i=o[14].x)&&d(e,"x",i),m[0]&64&&l!==(l=o[14].y)&&d(e,"y",l)},d(o){o&&a(e)}}}function Bn(s){let e;function t(l,o){return l[8]?Xn:Ln}let n=t(s),i=n(s);return{c(){i.c(),e=H()},l(l){i.l(l),e=H()},m(l,o){i.m(l,o),w(l,e,o)},p(l,o){n!==(n=t(l))&&(i.d(1),i=n(l),i&&(i.c(),i.m(e.parentNode,e)))},d(l){i.d(l),l&&a(e)}}}function Un(s){let e;function t(l,o){return l[2]?Kn:Jn}let n=t(s),i=n(s);return{c(){i.c(),e=H()},l(l){i.l(l),e=H()},m(l,o){i.m(l,o),w(l,e,o)},p(l,o){n!==(n=t(l))&&(i.d(1),i=n(l),i&&(i.c(),i.m(e.parentNode,e)))},d(l){i.d(l),l&&a(e)}}}function Wn(s){let e;function t(l,o){return l[3]?Qn:Zn}let n=t(s),i=n(s);return{c(){i.c(),e=H()},l(l){i.l(l),e=H()},m(l,o){i.m(l,o),w(l,e,o)},p(l,o){n!==(n=t(l))&&(i.d(1),i=n(l),i&&(i.c(),i.m(e.parentNode,e)))},d(l){i.d(l),l&&a(e)}}}function zn(s){let e;function t(l,o){return l[4]?tr:er}let n=t(s),i=n(s);return{c(){i.c(),e=H()},l(l){i.l(l),e=H()},m(l,o){i.m(l,o),w(l,e,o)},p(l,o){n!==(n=t(l))&&(i.d(1),i=n(l),i&&(i.c(),i.m(e.parentNode,e)))},d(l){i.d(l),l&&a(e)}}}function Yn(s){let e;function t(l,o){return l[5]?nr:lr}let n=t(s),i=n(s);return{c(){i.c(),e=H()},l(l){i.l(l),e=H()},m(l,o){i.m(l,o),w(l,e,o)},p(l,o){n!==(n=t(l))&&(i.d(1),i=n(l),i&&(i.c(),i.m(e.parentNode,e)))},d(l){i.d(l),l&&a(e)}}}function Ln(s){let e;return{c(){e=v("Not bijective \u274C")},l(t){e=b(t,"Not bijective \u274C")},m(t,n){w(t,e,n)},d(t){t&&a(e)}}}function Xn(s){let e;return{c(){e=v("Bijective \u2705")},l(t){e=b(t,"Bijective \u2705")},m(t,n){w(t,e,n)},d(t){t&&a(e)}}}function Jn(s){let e;return{c(){e=v("Not surjective \u274C")},l(t){e=b(t,"Not surjective \u274C")},m(t,n){w(t,e,n)},d(t){t&&a(e)}}}function Kn(s){let e;return{c(){e=v("Surjective \u2705")},l(t){e=b(t,"Surjective \u2705")},m(t,n){w(t,e,n)},d(t){t&&a(e)}}}function Zn(s){let e;return{c(){e=v("Not total \u274C")},l(t){e=b(t,"Not total \u274C")},m(t,n){w(t,e,n)},d(t){t&&a(e)}}}function Qn(s){let e;return{c(){e=v("Total \u2705")},l(t){e=b(t,"Total \u2705")},m(t,n){w(t,e,n)},d(t){t&&a(e)}}}function er(s){let e;return{c(){e=v("Not injective \u274C")},l(t){e=b(t,"Not injective \u274C")},m(t,n){w(t,e,n)},d(t){t&&a(e)}}}function tr(s){let e;return{c(){e=v("Injective \u2705")},l(t){e=b(t,"Injective \u2705")},m(t,n){w(t,e,n)},d(t){t&&a(e)}}}function lr(s){let e;return{c(){e=v("Not functional \u274C")},l(t){e=b(t,"Not functional \u274C")},m(t,n){w(t,e,n)},d(t){t&&a(e)}}}function nr(s){let e;return{c(){e=v("Functional \u2705")},l(t){e=b(t,"Functional \u2705")},m(t,n){w(t,e,n)},d(t){t&&a(e)}}}function rr(s){let e,t,n,i,l,o,m,$,R,T,g,S,A,M,V,G,k,j,C=s[10],P=[];for(let h=0;h<C.length;h+=1)P[h]=Nn(Tn(s,C,h));let z=s[9],E=[];for(let h=0;h<z.length;h+=1)E[h]=qn(jn(s,z,h));let B=s[7],q=[];for(let h=0;h<B.length;h+=1)q[h]=xn(Rn(s,B,h));let L=s[7],F=[];for(let h=0;h<L.length;h+=1)F[h]=Sn(wn(s,L,h));let J=s[6],O=[];for(let h=0;h<J.length;h+=1)O[h]=Vn(En(s,J,h));function K(h,D){if(h[0]==="functional")return Yn;if(h[0]==="injective")return zn;if(h[0]==="total")return Wn;if(h[0]==="surjective")return Un;if(h[0]==="bijective")return Bn}let Z=K(s),x=Z&&Z(s);return{c(){e=u("div"),t=u("div"),n=u("div"),i=u("table"),l=u("tr"),o=u("td"),m=p();for(let h=0;h<P.length;h+=1)P[h].c();$=p();for(let h=0;h<E.length;h+=1)E[h].c();R=p(),T=u("div"),g=Ce("svg"),S=Ce("defs"),A=Ce("marker"),M=Ce("path");for(let h=0;h<q.length;h+=1)q[h].c();V=H();for(let h=0;h<F.length;h+=1)F[h].c();G=H();for(let h=0;h<O.length;h+=1)O[h].c();k=p(),j=u("div"),x&&x.c(),this.h()},l(h){e=_(h,"DIV",{class:!0});var D=f(e);t=_(D,"DIV",{class:!0});var c=f(t);n=_(c,"DIV",{class:!0});var N=f(n);i=_(N,"TABLE",{});var ue=f(i);l=_(ue,"TR",{});var Q=f(l);o=_(Q,"TD",{class:!0}),f(o).forEach(a),m=y(Q);for(let I=0;I<P.length;I+=1)P[I].l(Q);Q.forEach(a),$=y(ue);for(let I=0;I<E.length;I+=1)E[I].l(ue);ue.forEach(a),N.forEach(a),R=y(c),T=_(c,"DIV",{class:!0});var Me=f(T);g=He(Me,"svg",{class:!0});var he=f(g);S=He(he,"defs",{});var Be=f(S);A=He(Be,"marker",{id:!0,orient:!0,markerWidth:!0,markerHeight:!0,refX:!0,refY:!0});var X=f(A);M=He(X,"path",{d:!0,fill:!0}),f(M).forEach(a),X.forEach(a),Be.forEach(a);for(let I=0;I<q.length;I+=1)q[I].l(he);V=H();for(let I=0;I<F.length;I+=1)F[I].l(he);G=H();for(let I=0;I<O.length;I+=1)O[I].l(he);he.forEach(a),Me.forEach(a),c.forEach(a),k=y(D),j=_(D,"DIV",{class:!0});var Ue=f(j);x&&x.l(Ue),Ue.forEach(a),D.forEach(a),this.h()},h(){d(o,"class","svelte-14uv5yg"),d(n,"class","grid svelte-14uv5yg"),d(M,"d","M0,0 V4 L2,2 Z"),d(M,"fill","black"),d(A,"id","head"),d(A,"orient","auto"),d(A,"markerWidth","3"),d(A,"markerHeight","4"),d(A,"refX","1.5"),d(A,"refY","2"),d(g,"class","svelte-14uv5yg"),d(T,"class","slopes svelte-14uv5yg"),d(t,"class","editor svelte-14uv5yg"),d(j,"class","check svelte-14uv5yg"),d(e,"class","RelationEditor svelte-14uv5yg")},m(h,D){w(h,e,D),r(e,t),r(t,n),r(n,i),r(i,l),r(l,o),r(l,m);for(let c=0;c<P.length;c+=1)P[c].m(l,null);r(i,$);for(let c=0;c<E.length;c+=1)E[c].m(i,null);r(t,R),r(t,T),r(T,g),r(g,S),r(S,A),r(A,M);for(let c=0;c<q.length;c+=1)q[c].m(g,null);r(g,V);for(let c=0;c<F.length;c+=1)F[c].m(g,null);r(g,G);for(let c=0;c<O.length;c+=1)O[c].m(g,null);r(e,k),r(e,j),x&&x.m(j,null)},p(h,D){if(D[0]&1024){C=h[10];let c;for(c=0;c<C.length;c+=1){const N=Tn(h,C,c);P[c]?P[c].p(N,D):(P[c]=Nn(N),P[c].c(),P[c].m(l,null))}for(;c<P.length;c+=1)P[c].d(1);P.length=C.length}if(D[0]&1538){z=h[9];let c;for(c=0;c<z.length;c+=1){const N=jn(h,z,c);E[c]?E[c].p(N,D):(E[c]=qn(N),E[c].c(),E[c].m(i,null))}for(;c<E.length;c+=1)E[c].d(1);E.length=z.length}if(D[0]&128){B=h[7];let c;for(c=0;c<B.length;c+=1){const N=Rn(h,B,c);q[c]?q[c].p(N,D):(q[c]=xn(N),q[c].c(),q[c].m(g,V))}for(;c<q.length;c+=1)q[c].d(1);q.length=B.length}if(D[0]&194){L=h[7];let c;for(c=0;c<L.length;c+=1){const N=wn(h,L,c);F[c]?F[c].p(N,D):(F[c]=Sn(N),F[c].c(),F[c].m(g,G))}for(;c<F.length;c+=1)F[c].d(1);F.length=L.length}if(D[0]&64){J=h[6];let c;for(c=0;c<J.length;c+=1){const N=En(h,J,c);O[c]?O[c].p(N,D):(O[c]=Vn(N),O[c].c(),O[c].m(g,null))}for(;c<O.length;c+=1)O[c].d(1);O.length=J.length}Z===(Z=K(h))&&x?x.p(h,D):(x&&x.d(1),x=Z&&Z(h),x&&(x.c(),x.m(j,null)))},i:Bt,o:Bt,d(h){h&&a(e),Ge(P,h),Ge(E,h),Ge(q,h),Ge(F,h),Ge(O,h),x&&x.d()}}}function ir(s,e,t){let n,i,l,o,m,$,R,{rel:T}=e,{check:g}=e;function S(k){const j=k.split(" ").filter(E=>E.length),C=Mt.exports.uniq(j.map(E=>E.split("R")[0]).filter(E=>E)),P=Mt.exports.uniq(j.flatMap(E=>E.split("R")[1]).filter(E=>E)),z={};for(const E of C)z[E]={};for(const E of j){const[B,q]=E.split("R");B&&q&&(z[B][q]=!0)}return{grid:z,leftNodes:C,rightNodes:P}}const{grid:A,leftNodes:M,rightNodes:V}=S(T);function G(k,j){A[k][j]=this.checked,t(1,A)}return s.$$set=k=>{"rel"in k&&t(11,T=k.rel),"check"in k&&t(0,g=k.check)},s.$$.update=()=>{s.$$.dirty[0]&2&&t(5,n=M.every(k=>V.filter(j=>A[k][j]).length<=1)),s.$$.dirty[0]&2&&t(4,i=V.every(k=>M.filter(j=>A[j][k]).length<=1)),s.$$.dirty[0]&2&&t(3,l=M.every(k=>V.some(j=>A[k][j]))),s.$$.dirty[0]&2&&t(2,o=V.every(k=>M.some(j=>A[j][k]))),s.$$.dirty[0]&60&&t(8,m=n&&i&&l&&o)},t(7,$=Mt.exports.uniq(M.map((k,j)=>{const C=kn(k,{font:"Arial",fontSize:"18px",fontWeight:"bold"});return{x:0,y:5+j*30,width:C.width,height:12,label:k}}))),t(6,R=Mt.exports.uniq(V.map((k,j)=>{const C=kn(k,{font:"Arial",fontSize:"18px",fontWeight:"bold"});return{x:130,y:5+j*30,width:C.width,height:12,label:k}}))),[g,A,o,l,i,n,R,$,m,M,V,T,G]}class fe extends Fn{constructor(e){super(),On(this,e,ir,rr,Gn,{rel:11,check:0},null,[-1,-1])}}function or(s){let e,t,n,i;return e=new fe({props:{rel:"\u{1F330}R\u{1F43F}\uFE0F 2Rb 3 Rc",check:"functional"}}),n=new fe({props:{rel:"\u{1F330}R\u{1F43F}\uFE0F \u{1F330}Rb 2 3 Rc",check:"functional"}}),{c(){oe(e.$$.fragment),t=p(),oe(n.$$.fragment)},l(l){ae(e.$$.fragment,l),t=y(l),ae(n.$$.fragment,l)},m(l,o){se(e,l,o),w(l,t,o),se(n,l,o),i=!0},i(l){i||(U(e.$$.fragment,l),U(n.$$.fragment,l),i=!0)},o(l){W(e.$$.fragment,l),W(n.$$.fragment,l),i=!1},d(l){ce(e,l),l&&a(t),ce(n,l)}}}function ar(s){let e,t,n,i;return e=new fe({props:{rel:"\u{1F330}R\u{1F43F}\uFE0F 2Rb 3 Rc",check:"injective"}}),n=new fe({props:{rel:"\u{1F330}R\u{1F43F}\uFE0F 2R\u{1F43F}\uFE0F Rb 3 Rc",check:"injective"}}),{c(){oe(e.$$.fragment),t=p(),oe(n.$$.fragment)},l(l){ae(e.$$.fragment,l),t=y(l),ae(n.$$.fragment,l)},m(l,o){se(e,l,o),w(l,t,o),se(n,l,o),i=!0},i(l){i||(U(e.$$.fragment,l),U(n.$$.fragment,l),i=!0)},o(l){W(e.$$.fragment,l),W(n.$$.fragment,l),i=!1},d(l){ce(e,l),l&&a(t),ce(n,l)}}}function sr(s){let e,t,n,i;return e=new fe({props:{rel:"\u{1F330}R\u{1F43F}\uFE0F 2Rb 3Rb Rc",check:"total"}}),n=new fe({props:{rel:"\u{1F330}R\u{1F43F}\uFE0F 2Rb 2Rc 3",check:"total"}}),{c(){oe(e.$$.fragment),t=p(),oe(n.$$.fragment)},l(l){ae(e.$$.fragment,l),t=y(l),ae(n.$$.fragment,l)},m(l,o){se(e,l,o),w(l,t,o),se(n,l,o),i=!0},i(l){i||(U(e.$$.fragment,l),U(n.$$.fragment,l),i=!0)},o(l){W(e.$$.fragment,l),W(n.$$.fragment,l),i=!1},d(l){ce(e,l),l&&a(t),ce(n,l)}}}function cr(s){let e,t,n,i;return e=new fe({props:{rel:"\u{1F330}R\u{1F43F}\uFE0F 2Rb 2Rc 3",check:"surjective"}}),n=new fe({props:{rel:"\u{1F330}R\u{1F43F}\uFE0F 2Rb 3Rb Rc",check:"surjective"}}),{c(){oe(e.$$.fragment),t=p(),oe(n.$$.fragment)},l(l){ae(e.$$.fragment,l),t=y(l),ae(n.$$.fragment,l)},m(l,o){se(e,l,o),w(l,t,o),se(n,l,o),i=!0},i(l){i||(U(e.$$.fragment,l),U(n.$$.fragment,l),i=!0)},o(l){W(e.$$.fragment,l),W(n.$$.fragment,l),i=!1},d(l){ce(e,l),l&&a(t),ce(n,l)}}}function fr(s){let e,t,n,i;return e=new fe({props:{rel:"\u{1F330}R\u{1F43F}\uFE0F R2 bR3 cR2",check:"bijective"}}),n=new fe({props:{rel:"\u{1F330}R\u{1F43F}\uFE0F \u{1F330}R2 bR2 c R3",check:"bijective"}}),{c(){oe(e.$$.fragment),t=p(),oe(n.$$.fragment)},l(l){ae(e.$$.fragment,l),t=y(l),ae(n.$$.fragment,l)},m(l,o){se(e,l,o),w(l,t,o),se(n,l,o),i=!0},i(l){i||(U(e.$$.fragment,l),U(n.$$.fragment,l),i=!0)},o(l){W(e.$$.fragment,l),W(n.$$.fragment,l),i=!1},d(l){ce(e,l),l&&a(t),ce(n,l)}}}function hr(s){let e,t,n,i,l,o,m,$,R,T,g,S,A,M,V,G,k,j,C,P,z,E,B,q,L,F,J,O,K,Z,x,h,D,c,N,ue,Q,Me,he,Be,X,Ue,I,Ut,Wt,_e,Ke,zt,Yt,de,ve,Ae,Lt,Ze,Xt,Jt,Kt,qe,Zt,Qe,Qt,el,tl,be,ll,We,nl,rl,me,et,il,ol,ge,pe,xe,al,tt,sl,cl,fl,De,hl,lt,ul,_l,dl,ye,vl,ze,bl,ml,ke,nt,gl,pl,Ee,we,Pe,yl,rt,kl,El,wl,Se,$l,it,Rl,jl,Il,$e,Tl,Ye,Nl,Al,Re,ot,ql,xl,je,Ie,Ve,Dl,at,Pl,Sl,Vl,Fe,Fl,st,Ol,Gl,Cl,Te,Hl,Le,Ml,Bl,Xe,Je,Oe,Ul,ct,ee=or(),te=ar(),le=sr(),ne=cr(),re=fr();return{c(){e=p(),t=u("main"),n=u("header"),i=u("div"),l=u("h1"),o=v("Properties of binary relations"),m=p(),$=u("p"),R=v(`This page covers the common properties of binary relations, with
        illustrative examples.`),T=p(),g=u("section"),S=u("h2"),A=v("Functional"),M=p(),V=u("div"),G=u("div"),k=u("p"),j=v("A relation is functional when each node on the left points to "),C=u("em"),P=v("at most"),z=v(" one node on the right."),E=p(),B=u("p"),q=v("We describe this as "),L=u("em"),F=v("functional"),J=v(` because it mirrors the behavior
          of a mathematical function, which always has one defined output for a given
          input value. A function can be viewed as a binary relation between the
          domain and codomain of the function.`),O=p(),K=u("p"),Z=v("Many of the terms used to describe relations were originally defined "),x=u("a"),h=v("in the context of functions"),D=v(`. The key difference is that a valid function is always by definition
          functional, but binary relations need not be.`),c=p(),N=u("p"),ue=v(`You can quickly identify functional relations by looking at the grid
          of connections. A relation is functional if `),Q=u("strong"),Me=v("no row has more than one tick"),he=v("."),Be=p(),X=u("figure"),ee&&ee.c(),Ue=p(),I=u("figcaption"),Ut=v(`The functional squirrel doesn't like to share his acorn. He feels he
          earned it with his clever functions.`),Wt=p(),_e=u("section"),Ke=u("h2"),zt=v("Injective"),Yt=p(),de=u("div"),ve=u("div"),Ae=u("p"),Lt=v("A relation is injective when each node on the right receives "),Ze=u("em"),Xt=v("at most"),Jt=v(" one connection from the left."),Kt=p(),qe=u("p"),Zt=v("A grid shows an injective relation if "),Qe=u("strong"),Qt=v("no column has more than one tick"),el=v("."),tl=p(),be=u("figure"),te&&te.c(),ll=p(),We=u("figcaption"),nl=v(`The injective squirrel can't have more than one acorn each. The
          squirrels are trying to reduce wealth inequality.`),rl=p(),me=u("section"),et=u("h2"),il=v("Total"),ol=p(),ge=u("div"),pe=u("div"),xe=u("p"),al=v("A relation is total or "),tt=u("em"),sl=v("left-total"),cl=v(` when every node on the left
          has at least one connection.`),fl=p(),De=u("p"),hl=v("A grid shows a total relation if "),lt=u("strong"),ul=v("every row has a tick"),_l=v("."),dl=p(),ye=u("figure"),le&&le.c(),vl=p(),ze=u("figcaption"),bl=v(`Every left-total acorn is always assigned to a squirrel. They're
          trying to eliminate food waste!`),ml=p(),ke=u("section"),nt=u("h2"),gl=v("Surjective"),pl=p(),Ee=u("div"),we=u("div"),Pe=u("p"),yl=v("A relation is surjective or "),rt=u("em"),kl=v("right-total"),El=v(` when every node on the
          right has at least one connection.`),wl=p(),Se=u("p"),$l=v("A grid shows a surjective relation if "),it=u("strong"),Rl=v("every column has a tick"),jl=v("."),Il=p(),$e=u("figure"),ne&&ne.c(),Tl=p(),Ye=u("figcaption"),Nl=v(`Every surjective squirrel gets to at least share one acorn. The
          squirrels have announced a welfare policy.`),Al=p(),Re=u("section"),ot=u("h2"),ql=v("Bijective"),xl=p(),je=u("div"),Ie=u("div"),Ve=u("p"),Dl=v("A relation is bijective when it is functional, total, injective "),at=u("em"),Pl=v("and"),Sl=v(` surjective. Every node on both sides must have a connection, and both
          ends of every connection must be unique.`),Vl=p(),Fe=u("p"),Fl=v("The grid shows a bijective relation if "),st=u("strong"),Ol=v("every row and every column has exactly one tick"),Gl=v("."),Cl=p(),Te=u("figure"),re&&re.c(),Hl=p(),Le=u("figcaption"),Ml=v(`Every bijective squirrel gets exactly one acorn, and every acorn goes
          to exactly one squirrel. It's a time of strict rationing during the
          squirrel war.`),Bl=p(),Xe=u("section"),Je=u("div"),Oe=u("a"),Ul=v("Practice!"),this.h()},l(ie){Mn('[data-svelte="svelte-rtwzb3"]',document.head).forEach(a),e=y(ie),t=_(ie,"MAIN",{class:!0});var Y=f(t);n=_(Y,"HEADER",{class:!0});var zl=f(n);i=_(zl,"DIV",{class:!0});var ft=f(i);l=_(ft,"H1",{});var Yl=f(l);o=b(Yl,"Properties of binary relations"),Yl.forEach(a),m=y(ft),$=_(ft,"P",{});var Ll=f($);R=b(Ll,`This page covers the common properties of binary relations, with
        illustrative examples.`),Ll.forEach(a),ft.forEach(a),zl.forEach(a),T=y(Y),g=_(Y,"SECTION",{class:!0});var ht=f(g);S=_(ht,"H2",{});var Xl=f(S);A=b(Xl,"Functional"),Xl.forEach(a),M=y(ht),V=_(ht,"DIV",{class:!0});var ut=f(V);G=_(ut,"DIV",{class:!0});var Ne=f(G);k=_(Ne,"P",{});var _t=f(k);j=b(_t,"A relation is functional when each node on the left points to "),C=_(_t,"EM",{});var Jl=f(C);P=b(Jl,"at most"),Jl.forEach(a),z=b(_t," one node on the right."),_t.forEach(a),E=y(Ne),B=_(Ne,"P",{});var dt=f(B);q=b(dt,"We describe this as "),L=_(dt,"EM",{});var Kl=f(L);F=b(Kl,"functional"),Kl.forEach(a),J=b(dt,` because it mirrors the behavior
          of a mathematical function, which always has one defined output for a given
          input value. A function can be viewed as a binary relation between the
          domain and codomain of the function.`),dt.forEach(a),O=y(Ne),K=_(Ne,"P",{});var vt=f(K);Z=b(vt,"Many of the terms used to describe relations were originally defined "),x=_(vt,"A",{href:!0});var Zl=f(x);h=b(Zl,"in the context of functions"),Zl.forEach(a),D=b(vt,`. The key difference is that a valid function is always by definition
          functional, but binary relations need not be.`),vt.forEach(a),c=y(Ne),N=_(Ne,"P",{});var bt=f(N);ue=b(bt,`You can quickly identify functional relations by looking at the grid
          of connections. A relation is functional if `),Q=_(bt,"STRONG",{});var Ql=f(Q);Me=b(Ql,"no row has more than one tick"),Ql.forEach(a),he=b(bt,"."),bt.forEach(a),Ne.forEach(a),Be=y(ut),X=_(ut,"FIGURE",{class:!0});var mt=f(X);ee&&ee.l(mt),Ue=y(mt),I=_(mt,"FIGCAPTION",{class:!0});var en=f(I);Ut=b(en,`The functional squirrel doesn't like to share his acorn. He feels he
          earned it with his clever functions.`),en.forEach(a),mt.forEach(a),ut.forEach(a),ht.forEach(a),Wt=y(Y),_e=_(Y,"SECTION",{class:!0});var gt=f(_e);Ke=_(gt,"H2",{});var tn=f(Ke);zt=b(tn,"Injective"),tn.forEach(a),Yt=y(gt),de=_(gt,"DIV",{class:!0});var pt=f(de);ve=_(pt,"DIV",{class:!0});var yt=f(ve);Ae=_(yt,"P",{});var kt=f(Ae);Lt=b(kt,"A relation is injective when each node on the right receives "),Ze=_(kt,"EM",{});var ln=f(Ze);Xt=b(ln,"at most"),ln.forEach(a),Jt=b(kt," one connection from the left."),kt.forEach(a),Kt=y(yt),qe=_(yt,"P",{});var Et=f(qe);Zt=b(Et,"A grid shows an injective relation if "),Qe=_(Et,"STRONG",{});var nn=f(Qe);Qt=b(nn,"no column has more than one tick"),nn.forEach(a),el=b(Et,"."),Et.forEach(a),yt.forEach(a),tl=y(pt),be=_(pt,"FIGURE",{class:!0});var wt=f(be);te&&te.l(wt),ll=y(wt),We=_(wt,"FIGCAPTION",{class:!0});var rn=f(We);nl=b(rn,`The injective squirrel can't have more than one acorn each. The
          squirrels are trying to reduce wealth inequality.`),rn.forEach(a),wt.forEach(a),pt.forEach(a),gt.forEach(a),rl=y(Y),me=_(Y,"SECTION",{class:!0});var $t=f(me);et=_($t,"H2",{});var on=f(et);il=b(on,"Total"),on.forEach(a),ol=y($t),ge=_($t,"DIV",{class:!0});var Rt=f(ge);pe=_(Rt,"DIV",{class:!0});var jt=f(pe);xe=_(jt,"P",{});var It=f(xe);al=b(It,"A relation is total or "),tt=_(It,"EM",{});var an=f(tt);sl=b(an,"left-total"),an.forEach(a),cl=b(It,` when every node on the left
          has at least one connection.`),It.forEach(a),fl=y(jt),De=_(jt,"P",{});var Tt=f(De);hl=b(Tt,"A grid shows a total relation if "),lt=_(Tt,"STRONG",{});var sn=f(lt);ul=b(sn,"every row has a tick"),sn.forEach(a),_l=b(Tt,"."),Tt.forEach(a),jt.forEach(a),dl=y(Rt),ye=_(Rt,"FIGURE",{class:!0});var Nt=f(ye);le&&le.l(Nt),vl=y(Nt),ze=_(Nt,"FIGCAPTION",{class:!0});var cn=f(ze);bl=b(cn,`Every left-total acorn is always assigned to a squirrel. They're
          trying to eliminate food waste!`),cn.forEach(a),Nt.forEach(a),Rt.forEach(a),$t.forEach(a),ml=y(Y),ke=_(Y,"SECTION",{class:!0});var At=f(ke);nt=_(At,"H2",{});var fn=f(nt);gl=b(fn,"Surjective"),fn.forEach(a),pl=y(At),Ee=_(At,"DIV",{class:!0});var qt=f(Ee);we=_(qt,"DIV",{class:!0});var xt=f(we);Pe=_(xt,"P",{});var Dt=f(Pe);yl=b(Dt,"A relation is surjective or "),rt=_(Dt,"EM",{});var hn=f(rt);kl=b(hn,"right-total"),hn.forEach(a),El=b(Dt,` when every node on the
          right has at least one connection.`),Dt.forEach(a),wl=y(xt),Se=_(xt,"P",{});var Pt=f(Se);$l=b(Pt,"A grid shows a surjective relation if "),it=_(Pt,"STRONG",{});var un=f(it);Rl=b(un,"every column has a tick"),un.forEach(a),jl=b(Pt,"."),Pt.forEach(a),xt.forEach(a),Il=y(qt),$e=_(qt,"FIGURE",{class:!0});var St=f($e);ne&&ne.l(St),Tl=y(St),Ye=_(St,"FIGCAPTION",{class:!0});var _n=f(Ye);Nl=b(_n,`Every surjective squirrel gets to at least share one acorn. The
          squirrels have announced a welfare policy.`),_n.forEach(a),St.forEach(a),qt.forEach(a),At.forEach(a),Al=y(Y),Re=_(Y,"SECTION",{class:!0});var Vt=f(Re);ot=_(Vt,"H2",{});var dn=f(ot);ql=b(dn,"Bijective"),dn.forEach(a),xl=y(Vt),je=_(Vt,"DIV",{class:!0});var Ft=f(je);Ie=_(Ft,"DIV",{class:!0});var Ot=f(Ie);Ve=_(Ot,"P",{});var Gt=f(Ve);Dl=b(Gt,"A relation is bijective when it is functional, total, injective "),at=_(Gt,"EM",{});var vn=f(at);Pl=b(vn,"and"),vn.forEach(a),Sl=b(Gt,` surjective. Every node on both sides must have a connection, and both
          ends of every connection must be unique.`),Gt.forEach(a),Vl=y(Ot),Fe=_(Ot,"P",{});var Ct=f(Fe);Fl=b(Ct,"The grid shows a bijective relation if "),st=_(Ct,"STRONG",{});var bn=f(st);Ol=b(bn,"every row and every column has exactly one tick"),bn.forEach(a),Gl=b(Ct,"."),Ct.forEach(a),Ot.forEach(a),Cl=y(Ft),Te=_(Ft,"FIGURE",{class:!0});var Ht=f(Te);re&&re.l(Ht),Hl=y(Ht),Le=_(Ht,"FIGCAPTION",{class:!0});var mn=f(Le);Ml=b(mn,`Every bijective squirrel gets exactly one acorn, and every acorn goes
          to exactly one squirrel. It's a time of strict rationing during the
          squirrel war.`),mn.forEach(a),Ht.forEach(a),Ft.forEach(a),Vt.forEach(a),Bl=y(Y),Xe=_(Y,"SECTION",{class:!0});var gn=f(Xe);Je=_(gn,"DIV",{class:!0});var pn=f(Je);Oe=_(pn,"A",{class:!0,href:!0});var yn=f(Oe);Ul=b(yn,"Practice!"),yn.forEach(a),pn.forEach(a),gn.forEach(a),Y.forEach(a),this.h()},h(){document.title="Properties of binary relations",d(i,"class","container"),d(n,"class","svelte-b0nbsb"),d(x,"href","https://hsm.stackexchange.com/questions/4929/history-of-the-definition-of-injective-surjective-function"),d(G,"class","explanation svelte-b0nbsb"),d(I,"class","svelte-b0nbsb"),d(X,"class","svelte-b0nbsb"),d(V,"class","with-figure svelte-b0nbsb"),d(g,"class","container svelte-b0nbsb"),d(ve,"class","explanation svelte-b0nbsb"),d(We,"class","svelte-b0nbsb"),d(be,"class","svelte-b0nbsb"),d(de,"class","with-figure svelte-b0nbsb"),d(_e,"class","container svelte-b0nbsb"),d(pe,"class","explanation svelte-b0nbsb"),d(ze,"class","svelte-b0nbsb"),d(ye,"class","svelte-b0nbsb"),d(ge,"class","with-figure svelte-b0nbsb"),d(me,"class","container svelte-b0nbsb"),d(we,"class","explanation svelte-b0nbsb"),d(Ye,"class","svelte-b0nbsb"),d($e,"class","svelte-b0nbsb"),d(Ee,"class","with-figure svelte-b0nbsb"),d(ke,"class","container svelte-b0nbsb"),d(Ie,"class","explanation svelte-b0nbsb"),d(Le,"class","svelte-b0nbsb"),d(Te,"class","svelte-b0nbsb"),d(je,"class","with-figure svelte-b0nbsb"),d(Re,"class","container svelte-b0nbsb"),d(Oe,"class","btn btn-lg btn-success"),d(Oe,"href","/binary-relations/practice"),d(Je,"class","d-flex align-items-center justify-content-center"),d(Xe,"class","practice svelte-b0nbsb"),d(t,"class","svelte-b0nbsb")},m(ie,Wl){w(ie,e,Wl),w(ie,t,Wl),r(t,n),r(n,i),r(i,l),r(l,o),r(i,m),r(i,$),r($,R),r(t,T),r(t,g),r(g,S),r(S,A),r(g,M),r(g,V),r(V,G),r(G,k),r(k,j),r(k,C),r(C,P),r(k,z),r(G,E),r(G,B),r(B,q),r(B,L),r(L,F),r(B,J),r(G,O),r(G,K),r(K,Z),r(K,x),r(x,h),r(K,D),r(G,c),r(G,N),r(N,ue),r(N,Q),r(Q,Me),r(N,he),r(V,Be),r(V,X),ee&&ee.m(X,null),r(X,Ue),r(X,I),r(I,Ut),r(t,Wt),r(t,_e),r(_e,Ke),r(Ke,zt),r(_e,Yt),r(_e,de),r(de,ve),r(ve,Ae),r(Ae,Lt),r(Ae,Ze),r(Ze,Xt),r(Ae,Jt),r(ve,Kt),r(ve,qe),r(qe,Zt),r(qe,Qe),r(Qe,Qt),r(qe,el),r(de,tl),r(de,be),te&&te.m(be,null),r(be,ll),r(be,We),r(We,nl),r(t,rl),r(t,me),r(me,et),r(et,il),r(me,ol),r(me,ge),r(ge,pe),r(pe,xe),r(xe,al),r(xe,tt),r(tt,sl),r(xe,cl),r(pe,fl),r(pe,De),r(De,hl),r(De,lt),r(lt,ul),r(De,_l),r(ge,dl),r(ge,ye),le&&le.m(ye,null),r(ye,vl),r(ye,ze),r(ze,bl),r(t,ml),r(t,ke),r(ke,nt),r(nt,gl),r(ke,pl),r(ke,Ee),r(Ee,we),r(we,Pe),r(Pe,yl),r(Pe,rt),r(rt,kl),r(Pe,El),r(we,wl),r(we,Se),r(Se,$l),r(Se,it),r(it,Rl),r(Se,jl),r(Ee,Il),r(Ee,$e),ne&&ne.m($e,null),r($e,Tl),r($e,Ye),r(Ye,Nl),r(t,Al),r(t,Re),r(Re,ot),r(ot,ql),r(Re,xl),r(Re,je),r(je,Ie),r(Ie,Ve),r(Ve,Dl),r(Ve,at),r(at,Pl),r(Ve,Sl),r(Ie,Vl),r(Ie,Fe),r(Fe,Fl),r(Fe,st),r(st,Ol),r(Fe,Gl),r(je,Cl),r(je,Te),re&&re.m(Te,null),r(Te,Hl),r(Te,Le),r(Le,Ml),r(t,Bl),r(t,Xe),r(Xe,Je),r(Je,Oe),r(Oe,Ul),ct=!0},p:Bt,i(ie){ct||(U(ee),U(te),U(le),U(ne),U(re),ct=!0)},o(ie){W(ee),W(te),W(le),W(ne),W(re),ct=!1},d(ie){ie&&a(e),ie&&a(t),ee&&ee.d(),te&&te.d(),le&&le.d(),ne&&ne.d(),re&&re.d()}}}class dr extends Fn{constructor(e){super(),On(this,e,null,hr,Gn,{})}}export{dr as default};
