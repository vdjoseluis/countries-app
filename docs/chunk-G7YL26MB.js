import{a as H}from"./chunk-ZCRNACJ4.js";import{g as _,h as D,i as R,j as V}from"./chunk-5LPJRBJ6.js";import"./chunk-ZSSD5RUB.js";import"./chunk-FTN34QYB.js";import{g as S,i as M,j as I,k as E,l as L,n as d}from"./chunk-KLQYZYXN.js";import{Ob as r,Pb as c,Sb as f,Va as a,Wa as h,db as m,ib as v,pb as s,sc as k,tb as g,ub as w,vb as y,wa as x,wb as C,xb as t,yb as n,zb as p}from"./chunk-TAAER7OC.js";var N=()=>["/countries/home"],O=()=>["/countries/favourites"];function j(o,e){if(o&1&&(t(0,"a",6)(1,"div",8)(2,"span",9),r(3),n(),t(4,"span",10),r(5),n()()()),o&2){let i=e.$implicit;s("routerLink",i.path),a(3),c(i.title),a(2),c(i.path)}}function q(o,e){o&1&&(t(0,"button",7)(1,"mat-icon"),r(2,"star"),n(),r(3,"Favourites"),n()),o&2&&s("routerLink",f(1,O))}var u=class o{isHomeVisible=x.required();menuItems=H.map(e=>e.children??[]).flat().filter(e=>!e.path?.includes(":")&&!e.path?.includes("home")&&!e.path?.includes("favourites"));static \u0275fac=function(i){return new(i||o)};static \u0275cmp=m({type:o,selectors:[["app-sidebar"]],inputs:{isHomeVisible:[1,"isHomeVisible"]},decls:12,vars:3,consts:[["id","menu",1,"bg-gray-800","min-h-screen","text-slate-300","w-40","md:w-60","overflow-auto"],["id","logo",1,"my-6","px-6"],[1,"text-lg","md:text-2xl","font-semibold","text-white","cursor-pointer",3,"routerLink"],[1,"text-sky-500"],[1,"text-slate-400","text-sm"],["id","nav",1,"w-full","md:px-6"],["routerLinkActive","bg-sky-800",1,"w-full","px-2","inline-flex","space-x-2","items-center","border-b","border-slate-700","py-3","hover:bg-white/5","transition","ease-linear","duration-150",3,"routerLink"],["matTooltip","My favourite countries",1,"flex","mx-auto","bg-sky-500","hover:bg-yellow-500","text-white","rounded-full","p-2","mt-10",3,"routerLink"],[1,"flex","flex-col","ps-4"],[1,"md:text-lg","text-white"],[1,"md:text-sm","text-white/50","hidden","md:block"]],template:function(i,l){i&1&&(t(0,"div",0)(1,"div",1)(2,"h1",2),r(3," Countries"),t(4,"span",3),r(5,"App"),n()(),t(6,"p",4),r(7,"Choose a search option"),n()(),t(8,"div",5),y(9,j,6,3,"a",6,w),n(),v(11,q,4,2,"button",7),n()),i&2&&(a(2),s("routerLink",f(2,N)),a(7),C(l.menuItems),a(2),g(l.isHomeVisible()?-1:11))},dependencies:[d,E,L,k,D,_,V,R],encapsulation:2})};var b=class o{constructor(e){this.router=e}isHomeVisible=!0;ngOnInit(){this.router.events.subscribe(e=>{e instanceof S&&(this.isHomeVisible=e.urlAfterRedirects==="/countries/home"||e.urlAfterRedirects==="/countries/favourites")})}static \u0275fac=function(i){return new(i||o)(h(I))};static \u0275cmp=m({type:o,selectors:[["app-dashboard"]],decls:10,vars:1,consts:[[1,"flex","w-screen","text-black","selection:bg-blue-500","selection:text-white","bg-slate-400"],[3,"isHomeVisible"],[1,"text-slate-800","px-2","md:px-10","mt-10","w-full","max-w-5xl","mx-auto"],[1,"flex","flex-col","fixed","bottom-2","right-0","items-end"],["src","angular_logo.png","alt","Angular Logo",1,"w-14","lg:w-24","overflow-hidden"],[1,"text-sm","md:text-lg","text-slate-600"],["href","https://www.linkedin.com/in/vdjoseluis/","target","_blank",1,"font-semibold","cursor-pointer","hover:text-sky-700"]],template:function(i,l){i&1&&(t(0,"div",0),p(1,"app-sidebar",1),t(2,"div",2),p(3,"router-outlet"),t(4,"div",3),p(5,"img",4),t(6,"p",5),r(7," Copyright \xA9 2024 by "),t(8,"a",6),r(9,"Jos\xE9 Luis V\xE1squez Drouet"),n()()()()()),i&2&&(a(),s("isHomeVisible",l.isHomeVisible))},dependencies:[d,M,u],encapsulation:2})};export{b as default};