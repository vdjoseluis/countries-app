import{a as E}from"./chunk-ZCRNACJ4.js";import{b as N,c as D,d as w,e as P,i as M,m as S}from"./chunk-KLQYZYXN.js";import{Ca as y,Ea as A,V as c,W as m,Xa as C,Yb as R,Z as h,Za as v,aa as d,da as u,db as F,ic as I,qa as g,sc as b,ta as f,zb as _}from"./chunk-TAAER7OC.js";var k="@",j=(()=>{class r{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=d(g,{optional:!0});loadingSchedulerFn=d(z,{optional:!0});_engine;constructor(t,o,n,i,s){this.doc=t,this.delegate=o,this.zone=n,this.animationType=i,this.moduleImpl=s}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-J573MA2U.js").then(n=>n),o;return this.loadingSchedulerFn?o=this.loadingSchedulerFn(t):o=t(),o.catch(n=>{throw new c(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:i})=>{this._engine=n(this.animationType,this.doc);let s=new i(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(t,o){let n=this.delegate.createRenderer(t,o);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let i=new p(n);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let O=s.createRenderer(t,o);i.use(O),this.scheduler?.notify(11)}).catch(s=>{i.use(n)}),i}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static \u0275fac=function(o){C()};static \u0275prov=m({token:r,factory:r.\u0275fac})}return r})(),p=class{delegate;replay=[];\u0275type=1;constructor(e){this.delegate=e}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,o,n){this.delegate.insertBefore(e,t,o,n)}removeChild(e,t,o){this.delegate.removeChild(e,t,o)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,o,n){this.delegate.setAttribute(e,t,o,n)}removeAttribute(e,t,o){this.delegate.removeAttribute(e,t,o)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,o,n){this.delegate.setStyle(e,t,o,n)}removeStyle(e,t,o){this.delegate.removeStyle(e,t,o)}setProperty(e,t,o){this.shouldReplay(t)&&this.replay.push(n=>n.setProperty(e,t,o)),this.delegate.setProperty(e,t,o)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,o){return this.shouldReplay(t)&&this.replay.push(n=>n.listen(e,t,o)),this.delegate.listen(e,t,o)}shouldReplay(e){return this.replay!==null&&e.startsWith(k)}},z=new h("");function a(r="animations"){return A("NgAsyncAnimations"),u([{provide:v,useFactory:(e,t,o)=>new j(e,t,o,r),deps:[I,w,f]},{provide:y,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}var T={providers:[R({eventCoalescing:!0}),S(E),a(),N(D()),a(),a()]};var l=class r{title="countries-app";static \u0275fac=function(t){return new(t||r)};static \u0275cmp=F({type:r,selectors:[["app-root"]],decls:1,vars:0,template:function(t,o){t&1&&_(0,"router-outlet")},dependencies:[b,M],encapsulation:2})};P(l,T).catch(r=>console.error(r));
