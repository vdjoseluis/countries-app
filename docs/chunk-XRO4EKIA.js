import{a as w}from"./chunk-Y7MZ5PVW.js";import{a as B,b as P}from"./chunk-5NJOTN4B.js";import{a as S}from"./chunk-77LDLBZX.js";import"./chunk-FTN34QYB.js";import"./chunk-KLQYZYXN.js";import{Bb as R,Db as _,Fb as c,Ob as p,Qb as k,Va as o,aa as g,db as u,ia as m,ib as y,ja as d,pb as x,sb as f,tb as b,ub as h,vb as v,wb as C,xb as s,yb as r,zb as a}from"./chunk-TAAER7OC.js";function T(t,i){if(t&1){let e=R();s(0,"button",7),_("click",function(){let I=m(e).$implicit,M=c();return d(M.searchByRegion(I))}),p(1),r()}if(t&2){let e=i.$implicit,n=c();f(n.selectedRegion===e?"bg-sky-600 text-white":""),o(),k(" ",e," ")}}function E(t,i){t&1&&a(0,"mat-spinner",5)}var l=class t{countries=[];isLoading=!1;regions=["Africa","Americas","Asia","Europe","Oceania"];selectedRegion;countriesService=g(S);ngOnInit(){this.countries=this.countriesService.cacheStore.byRegion.countries,this.selectedRegion=this.countriesService.cacheStore.byRegion.region}searchByRegion(i){this.isLoading=!0,this.selectedRegion=i,this.countriesService.searchRegion(i).subscribe(e=>{this.countries=e,this.isLoading=!1})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=u({type:t,selectors:[["app-by-region-page"]],decls:9,vars:2,consts:[[1,"bg-slate-300","rounded-2xl","shadow-md","shadow-sky-500","flex","flex-col","p-4","mb-4"],[1,"flex","flex-wrap","gap-2"],[1,"text-sky-600","pe-2"],[1,"bg-sky-100","hover:bg-sky-200","text-sky-600","rounded-2xl","px-2","py-1","text-xs","lg:text-base",3,"class"],[1,"bg-slate-300","rounded-2xl","shadow-md","shadow-sky-500"],[1,"mx-auto"],[3,"countries"],[1,"bg-sky-100","hover:bg-sky-200","text-sky-600","rounded-2xl","px-2","py-1","text-xs","lg:text-base",3,"click"]],template:function(e,n){e&1&&(s(0,"div",0)(1,"div",1)(2,"h1",2),p(3,"Select a region:"),r(),v(4,T,2,3,"button",3,h),r()(),s(6,"div",4),y(7,E,1,0,"mat-spinner",5),a(8,"countries-table",6),r()),e&2&&(o(4),C(n.regions),o(3),b(n.isLoading?7:-1),o(),x("countries",n.countries))},dependencies:[w,P,B],encapsulation:2})};export{l as default};