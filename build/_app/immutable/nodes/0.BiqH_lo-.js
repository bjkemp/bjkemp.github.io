import{t as T,a as b,n as B}from"../chunks/BIFVk_1s.js";import{i as Q}from"../chunks/fx_-bmrw.js";import{a0 as ie,b as ve,s as O,h as E,R as de,a as W,m as g,a5 as fe,c as ce,r as K,d as Y,g as N,V as ue,e as ee,f as re,p as he,a6 as z,Z as ae,L as P,a7 as pe,F,a8 as U,a9 as me,aa as _e,Y as ge,ab as xe,ac as we,ad as ke,ae as be,S as ye,P as Me,af as Ee,ag as Ae,ah as Ce,ai as Te,w as Ie,x as S,A as _,B as I,z as x,D as H,v as te,C as Ne,y as ne,G as Le}from"../chunks/DwShG1_-.js";import{e as j,s as V}from"../chunks/xPKK279I.js";import{i as $}from"../chunks/BM4-P2wW.js";function q(a,e){return e}function Se(a,e,r,n){for(var l=[],i=e.length,v=0;v<i;v++)_e(e[v].e,l,!0);var f=i>0&&l.length===0&&r!==null;if(f){var u=r.parentNode;ge(u),u.append(r),n.clear(),C(a,e[0].prev,e[i-1].next)}xe(l,()=>{for(var h=0;h<i;h++){var o=e[h];f||(n.delete(o.k),C(a,o.prev,o.next)),we(o.e,!f)}})}function X(a,e,r,n,l,i=null){var v=a,f={flags:e,items:new Map,first:null};{var u=a;v=E?O(de(u)):u.appendChild(ie())}E&&W();var h=null,o=!1,p=fe(()=>{var t=r();return Me(t)?t:t==null?[]:ae(t)});ve(()=>{var t=g(p),s=t.length;if(o&&s===0)return;o=s===0;let d=!1;if(E){var w=v.data===ce;w!==(s===0)&&(v=K(),O(v),Y(!1),d=!0)}if(E){for(var k=null,c,m=0;m<s;m++){if(N.nodeType===8&&N.data===ue){v=N,d=!0,Y(!1);break}var y=t[m],M=n(y,m);c=se(N,f,k,null,y,M,m,l,e,r),f.items.set(M,c),k=c}s>0&&O(K())}E||He(t,f,v,l,e,n,r),i!==null&&(s===0?h?ee(h):h=re(()=>i(v)):h!==null&&he(h,()=>{h=null})),d&&Y(!0),g(p)}),E&&(v=N)}function He(a,e,r,n,l,i,v){var f=a.length,u=e.items,h=e.first,o=h,p,t=null,s=[],d=[],w,k,c,m;for(m=0;m<f;m+=1){if(w=a[m],k=i(w,m),c=u.get(k),c===void 0){var y=o?o.e.nodes_start:r;t=se(y,e,t,t===null?e.first:t.next,w,k,m,n,l,v),u.set(k,t),s=[],d=[],o=t.next;continue}if(Be(c,w,m),(c.e.f&z)!==0&&ee(c.e),c!==o){if(p!==void 0&&p.has(c)){if(s.length<d.length){var M=d[0],A;t=M.prev;var G=s[0],D=s[s.length-1];for(A=0;A<s.length;A+=1)Z(s[A],M,r);for(A=0;A<d.length;A+=1)p.delete(d[A]);C(e,G.prev,D.next),C(e,t,G),C(e,D,M),o=M,t=D,m-=1,s=[],d=[]}else p.delete(c),Z(c,o,r),C(e,c.prev,c.next),C(e,c,t===null?e.first:t.next),C(e,t,c),t=c;continue}for(s=[],d=[];o!==null&&o.k!==k;)(o.e.f&z)===0&&(p??(p=new Set)).add(o),d.push(o),o=o.next;if(o===null)continue;c=o}s.push(c),t=c,o=c.next}if(o!==null||p!==void 0){for(var R=p===void 0?[]:ae(p);o!==null;)(o.e.f&z)===0&&R.push(o),o=o.next;var oe=R.length;if(oe>0){var le=f===0?r:null;Se(e,R,le,u)}}P.first=e.first&&e.first.e,P.last=t&&t.e}function Be(a,e,r,n){pe(a.v,e),a.i=r}function se(a,e,r,n,l,i,v,f,u,h){var o=(u&ke)!==0,p=(u&be)===0,t=o?p?F(l):U(l):l,s=(u&me)===0?v:U(v),d={i:s,v:t,k:i,a:null,e:null,prev:r,next:n};try{return d.e=re(()=>f(a,t,s,h),E),d.e.prev=r&&r.e,d.e.next=n&&n.e,r===null?e.first=d:(r.next=d,r.e.next=d.e),n!==null&&(n.prev=d,n.e.prev=d.e),d}finally{}}function Z(a,e,r){for(var n=a.next?a.next.e.nodes_start:r,l=e?e.e.nodes_start:r,i=a.e.nodes_start;i!==n;){var v=ye(i);l.before(i),i=v}}function C(a,e,r){e===null?a.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function De(a,e,r,n,l){var f;E&&W();var i=(f=e.$$slots)==null?void 0:f[r],v=!1;i===!0&&(i=e.children,v=!0),i===void 0||i(a,v?()=>n:n)}const Re=Symbol("is custom element"),Oe=Symbol("is html");function L(a,e,r,n){var l=Ye(a);E&&(l[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||l[e]!==(l[e]=r)&&(e==="loading"&&(a[Ee]=r),r==null?a.removeAttribute(e):typeof r!="string"&&ze(a).includes(e)?a[e]=r:a.setAttribute(e,r))}function Ye(a){return a.__attributes??(a.__attributes={[Re]:a.nodeName.includes("-"),[Oe]:a.namespaceURI===Ae})}var J=new Map;function ze(a){var e=J.get(a.nodeName);if(e)return e;J.set(a.nodeName,e=[]);for(var r,n=a,l=Element.prototype;l!==n;){r=Te(n);for(var i in r)r[i].set&&e.push(i);n=Ce(n)}return e}var je=T('<a class="text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"> </a>'),$e=B('<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'),Fe=B('<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>'),Ge=T('<a class="text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-2"> </a>'),Ke=T('<div class="absolute top-16 left-0 right-0 bg-white dark:bg-neutral-800 shadow-lg md:hidden z-50"><div class="container mx-auto px-4 py-2"><div class="flex flex-col space-y-3 py-3"></div></div></div>'),Pe=T('<nav class="hidden md:flex items-center space-x-6"></nav> <button class="md:hidden p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"><!></button> <!>',1);function Ue(a){let e=F(!1);function r(){H(e,!g(e))}function n(){H(e,!1)}const l=[{href:"/",label:"Home"},{href:"/legacy-ml-project/",label:"ML Project"}];var i=Pe(),v=Ie(i);X(v,5,()=>l,q,(s,d)=>{var w=je(),k=x(w,!0);_(w),S(()=>{L(w,"href",g(d).href),V(k,g(d).label)}),b(s,w)}),_(v);var f=I(v,2),u=x(f);{var h=s=>{var d=$e();b(s,d)},o=s=>{var d=Fe();b(s,d)};$(u,s=>{g(e)?s(h):s(o,!1)})}_(f);var p=I(f,2);{var t=s=>{var d=Ke(),w=x(d),k=x(w);X(k,5,()=>l,q,(c,m)=>{var y=Ge(),M=x(y,!0);_(y),S(()=>{L(y,"href",g(m).href),V(M,g(m).label)}),j("click",y,n),b(c,y)}),_(k),_(w),_(d),b(s,d)};$(p,s=>{g(e)&&s(t)})}S(()=>{L(f,"aria-label",g(e)?"Close menu":"Open menu"),L(f,"aria-expanded",g(e))}),j("click",f,r),b(a,i)}var Ve=B('<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>'),qe=B('<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>'),Xe=T('<header class="bg-white dark:bg-neutral-800 shadow-md"><div class="container mx-auto px-4 py-4 flex justify-between items-center"><div class="flex items-center"><a href="/" class="text-2xl font-bold text-primary-600 dark:text-primary-400">Benjamin Kemp</a></div> <div class="flex items-center gap-4"><!> <button class="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"><!></button></div></div></header>');function Ze(a,e){te(e,!1);let r=F(!1);function n(){H(r,!g(r)),g(r)?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}Ne(()=>{if(typeof window<"u"){const t=window.matchMedia("(prefers-color-scheme: dark)").matches;H(r,t),g(r)&&document.documentElement.classList.add("dark")}}),Q();var l=Xe(),i=x(l),v=I(x(i),2),f=x(v);Ue(f);var u=I(f,2),h=x(u);{var o=t=>{var s=Ve();b(t,s)},p=t=>{var s=qe();b(t,s)};$(h,t=>{g(r).$?t(o):t(p,!1)})}_(u),_(v),_(i),_(l),S(()=>L(u,"aria-label",g(r).$?"Switch to light mode":"Switch to dark mode")),j("click",u,n),b(a,l),ne()}var Je=T('<footer class="bg-white dark:bg-neutral-800 shadow-inner mt-auto"><div class="container mx-auto px-4 py-6"><div class="flex flex-col md:flex-row justify-between items-center"><div class="mb-4 md:mb-0"><p class="text-neutral-600 dark:text-neutral-400 text-sm"></p></div> <div class="flex space-x-4"><a href="https://github.com/bjkemp" target="_blank" rel="noopener noreferrer" class="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"><span class="sr-only">GitHub</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg></a></div></div></div></footer>');function Qe(a,e){te(e,!1);const r=new Date().getFullYear();Q();var n=Je(),l=x(n),i=x(l),v=x(i),f=x(v);f.textContent=`© ${r??""} Benjamin Kemp. All rights reserved.`,_(v),Le(2),_(i),_(l),_(n),b(a,n),ne()}var We=T('<div class="flex flex-col min-h-screen"><!> <main class="flex-grow container mx-auto px-4 py-8"><!></main> <!></div>');function sr(a,e){var r=We(),n=x(r);Ze(n,{});var l=I(n,2),i=x(l);De(i,e,"default",{}),_(l);var v=I(l,2);Qe(v,{}),_(r),b(a,r)}export{sr as component};
