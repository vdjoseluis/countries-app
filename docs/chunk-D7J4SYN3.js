import{a as D}from"./chunk-4Y6L3UUT.js";import{a as R}from"./chunk-77LDLBZX.js";import{g as L,h as T,i as B,j as N}from"./chunk-5LPJRBJ6.js";import"./chunk-ZSSD5RUB.js";import"./chunk-FTN34QYB.js";import{k as M,n as I}from"./chunk-KLQYZYXN.js";import{Bb as E,Db as F,Fb as v,Ob as n,Qb as s,Sa as _,Tb as m,Va as r,aa as d,db as C,ia as x,ib as S,ja as h,pb as c,sc as w,tb as y,ub as g,vb as k,wb as b,xb as t,yb as i,zb as p}from"./chunk-TAAER7OC.js";var l=o=>["/countries/country/",o];function P(o,a){o&1&&(t(0,"div",0),n(1,"No countries to show"),i())}function $(o,a){if(o&1){let e=E();t(0,"tr",9)(1,"td")(2,"button",10),F("click",function(){let O=x(e).$implicit,V=v(2);return h(V.removeFromFavourites(O.cca3))}),t(3,"mat-icon",11),n(4,"delete"),i()()(),t(5,"td",12),n(6),i(),t(7,"td",13),n(8),i(),t(9,"td",12),p(10,"img",14),i(),t(11,"td",15),n(12),i(),t(13,"td",12),n(14),i()()}if(o&2){let e=a.$implicit;r(5),c("routerLink",m(11,l,e.cca3)),r(),s(" ",e.name.common," "),r(),c("routerLink",m(13,l,e.cca3)),r(),s(" ",e.cca3," "),r(),c("routerLink",m(15,l,e.cca3)),r(),c("src",e.flags.svg,_)("alt",e.name.common),r(),c("routerLink",m(17,l,e.cca3)),r(),s(" ",e.capital||e.name.common," "),r(),c("routerLink",m(19,l,e.cca3)),r(),s(" ",e.region," ")}}function j(o,a){if(o&1&&(t(0,"div",1)(1,"h1",2),n(2," Favourite Countries "),i(),t(3,"table",3)(4,"thead",4)(5,"tr",5),p(6,"th"),t(7,"th"),n(8,"Name"),i(),t(9,"th",6),n(10,"Code"),i(),t(11,"th",7),n(12,"Flag"),i(),t(13,"th",8),n(14,"Capital"),i(),t(15,"th"),n(16,"Region"),i()()(),t(17,"tbody"),k(18,$,15,21,"tr",9,g),i()()()),o&2){let e=v();r(18),b(e.countries)}}var f=class o{countriesService=d(R);countries=this.countriesService.favourites.countries;removeFromFavourites(a){this.countriesService.favourites.countries=this.countriesService.favourites.countries.filter(e=>e.cca3!==a),this.countries=this.countriesService.favourites.countries,localStorage.setItem("favourites",JSON.stringify(this.countriesService.favourites)),this.openSnackBar("Country removed","Close")}_snackBar=d(D);openSnackBar(a,e){this._snackBar.open(a,e,{duration:3e3})}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=C({type:o,selectors:[["app-favourites"]],decls:2,vars:1,consts:[[1,"text-center","py-4"],[1,"bg-slate-300","rounded-2xl","shadow-md","shadow-sky-500","max-h-[70vh]","overflow-y-auto"],[1,"text-sky-600","my-2","text-center","text-2xl","font-medium","tracking-widest"],[1,"table-fixed","w-full","text-sm","lg:text-base"],[1,"sticky","top-0","text-center"],[1,"bg-sky-500","text-white","h-8"],[1,"hidden","md:table-cell"],[1,""],[1,"hidden","sm:table-cell"],[1,"hover:bg-slate-200","text-center","h-12","sm:h-14"],["matTooltip","Remove",3,"click"],[1,"text-red-700"],[1,"cursor-pointer",3,"routerLink"],[1,"hidden","md:table-cell","cursor-pointer",3,"routerLink"],[1,"mx-auto",3,"src","alt"],[1,"hidden","sm:table-cell","cursor-pointer",3,"routerLink"]],template:function(e,u){e&1&&S(0,P,2,0,"div",0)(1,j,20,0,"div",1),e&2&&y(!u.countries||u.countries.length===0?0:1)},dependencies:[I,M,w,N,B,T,L],styles:["img[_ngcontent-%COMP%]{width:30%}"]})};export{f as default};