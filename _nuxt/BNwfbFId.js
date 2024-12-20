import{aG as se,s as y,a0 as Y,aH as Ze,r as J,Z as we,h as K,g as Q,aD as et,a5 as T,D as u,m as R,aI as tt,C as pe,aJ as Be,aK as ge,aL as nt,aM as at,aN as st,a3 as O,x as k,I as le,z as H,A as M,aO as lt,u as B,aP as it,aQ as ot,b as f,H as rt,a2 as ie,a6 as ut,R as Ie,S as ct,az as oe,T as Pe,ab as dt,aR as vt,aS as Ve,a9 as ft,aA as mt,N as Le,v as gt,aC as ht,e as bt,B as Ee,ah as he,aF as yt,aT as Ct,aU as be,V as kt,a1 as St,aV as ye,L as _t}from"./K42HfLKS.js";const xt=["top","bottom"],wt=["start","end","left","right"];function pt(e,t){let[a,n]=e.split(" ");return n||(n=se(xt,a)?"start":se(wt,a)?"top":"center"),{side:Ce(a,t),align:Ce(n,t)}}function Ce(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}const G=y({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function A(e){const t=Y("useRender");t.render=e}function Bt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const a=Ze(),n=J();if(we){const s=new ResizeObserver(l=>{l.length&&(t==="content"?n.value=l[0].contentRect:n.value=l[0].target.getBoundingClientRect())});K(()=>{s.disconnect()}),Q(()=>a.el,(l,i)=>{i&&(s.unobserve(i),n.value=void 0),l&&s.observe(l)},{flush:"post"})}return{resizeRef:a,contentRect:et(n)}}const It=[null,"default","comfortable","compact"],Te=y({density:{type:String,default:"default",validator:e=>It.includes(e)}},"density");function Re(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{densityClasses:u(()=>`${t}--density-${e.density}`)}}const W=y({tag:{type:String,default:"div"}},"tag"),Pt=y({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),te=R(!1)({name:"VDefaultsProvider",props:Pt(),setup(e,t){let{slots:a}=t;const{defaults:n,disabled:s,reset:l,root:i,scoped:d}=tt(e);return pe(n,{reset:l,root:i,scoped:d,disabled:s}),()=>{var v;return(v=a.default)==null?void 0:v.call(a)}}});function ce(e){return Be(()=>{const t=[],a={};if(e.value.background)if(ge(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text&&nt(e.value.background)){const n=at(e.value.background);if(n.a==null||n.a===1){const s=st(n);a.color=s,a.caretColor=s}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(ge(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:a}})}function X(e,t){const a=u(()=>({text:O(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:s}=ce(a);return{textColorClasses:n,textColorStyles:s}}function ne(e,t){const a=u(()=>({background:O(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:s}=ce(a);return{backgroundColorClasses:n,backgroundColorStyles:s}}const Vt=["x-small","small","default","large","x-large"],de=y({size:{type:[String,Number],default:"default"}},"size");function ve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return Be(()=>{let a,n;return se(Vt,e.size)?a=`${t}--size-${e.size}`:e.size&&(n={width:k(e.size),height:k(e.size)}),{sizeClasses:a,sizeStyles:n}})}const Lt=y({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:le,...G(),...de(),...W({tag:"i"}),...H()},"VIcon"),ae=R()({name:"VIcon",props:Lt(),setup(e,t){let{attrs:a,slots:n}=t;const s=J(),{themeClasses:l}=M(e),{iconData:i}=lt(u(()=>s.value||e.icon)),{sizeClasses:d}=ve(e),{textColorClasses:v,textColorStyles:b}=X(B(e,"color"));return A(()=>{var o,c;const C=(o=n.default)==null?void 0:o.call(n);C&&(s.value=(c=it(C).filter(m=>m.type===ot&&m.children&&typeof m.children=="string")[0])==null?void 0:c.children);const h=!!(a.onClick||a.onClickOnce);return f(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",l.value,d.value,v.value,{"v-icon--clickable":h,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[d.value?void 0:{fontSize:k(e.size),height:k(e.size),width:k(e.size)},b.value,e.style],role:h?"button":void 0,"aria-hidden":!h,tabindex:h?e.disabled?-1:0:void 0},{default:()=>[C]})}),{}}}),Ne=y({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function $e(e){return{elevationClasses:u(()=>{const a=O(e)?e.value:e.elevation,n=[];return a==null||n.push(`elevation-${a}`),n})}}const fe=y({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function me(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{roundedClasses:u(()=>{const n=O(e)?e.value:e.rounded,s=O(e)?e.value:e.tile,l=[];if(n===!0||n==="")l.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const i of String(n).split(" "))l.push(`rounded-${i}`);else(s||n===!1)&&l.push("rounded-0");return l})}}const Et=y({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Tt(e){return{dimensionStyles:u(()=>{const a={},n=k(e.height),s=k(e.maxHeight),l=k(e.maxWidth),i=k(e.minHeight),d=k(e.minWidth),v=k(e.width);return n!=null&&(a.height=n),s!=null&&(a.maxHeight=s),l!=null&&(a.maxWidth=l),i!=null&&(a.minHeight=i),d!=null&&(a.minWidth=d),v!=null&&(a.width=v),a})}}const ze=y({border:[Boolean,Number,String]},"border");function Oe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{borderClasses:u(()=>{const n=O(e)?e.value:e.border,s=[];if(n===!0||n==="")s.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const l of String(n).split(" "))s.push(`border-${l}`);return s})}}const Rt=["elevated","flat","tonal","outlined","text","plain"];function Nt(e,t){return f(rt,null,[e&&f("span",{key:"overlay",class:`${t}__overlay`},null),f("span",{key:"underlay",class:`${t}__underlay`},null)])}const Ae=y({color:String,variant:{type:String,default:"elevated",validator:e=>Rt.includes(e)}},"variant");function $t(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();const a=u(()=>{const{variant:l}=ie(e);return`${t}--variant-${l}`}),{colorClasses:n,colorStyles:s}=ce(u(()=>{const{variant:l,color:i}=ie(e);return{[["elevated","flat"].includes(l)?"background":"text"]:i}}));return{colorClasses:n,colorStyles:s,variantClasses:a}}const De=y({baseColor:String,divided:Boolean,...ze(),...G(),...Te(),...Ne(),...fe(),...W(),...H(),...Ae()},"VBtnGroup"),ke=R()({name:"VBtnGroup",props:De(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=M(e),{densityClasses:s}=Re(e),{borderClasses:l}=Oe(e),{elevationClasses:i}=$e(e),{roundedClasses:d}=me(e);pe({VBtn:{height:"auto",baseColor:B(e,"baseColor"),color:B(e,"color"),density:B(e,"density"),flat:!0,variant:B(e,"variant")}}),A(()=>f(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,l.value,s.value,i.value,d.value,e.class],style:e.style},a))}}),zt=y({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Ot=y({value:null,disabled:Boolean,selectedClass:String},"group-item");function At(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=Y("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=ut();Ie(Symbol.for(`${t.description}:id`),s);const l=ct(t,null);if(!l){if(!a)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const i=B(e,"value"),d=u(()=>!!(l.disabled.value||e.disabled));l.register({id:s,value:i,disabled:d},n),K(()=>{l.unregister(s)});const v=u(()=>l.isSelected(s)),b=u(()=>l.items.value[0].id===s),C=u(()=>l.items.value[l.items.value.length-1].id===s),h=u(()=>v.value&&[l.selectedClass.value,e.selectedClass]);return Q(v,o=>{n.emit("group:selected",{value:o})},{flush:"sync"}),{id:s,isSelected:v,isFirst:b,isLast:C,toggle:()=>l.select(s,!v.value),select:o=>l.select(s,o),selectedClass:h,value:i,disabled:d,group:l}}function Dt(e,t){let a=!1;const n=oe([]),s=Pe(e,"modelValue",[],o=>o==null?[]:Fe(n,ft(o)),o=>{const c=Ht(n,o);return e.multiple?c:c[0]}),l=Y("useGroup");function i(o,c){const m=o,r=Symbol.for(`${t.description}:id`),S=mt(r,l==null?void 0:l.vnode).indexOf(c);ie(m.value)==null&&(m.value=S,m.useIndexAsValue=!0),S>-1?n.splice(S,0,m):n.push(m)}function d(o){if(a)return;v();const c=n.findIndex(m=>m.id===o);n.splice(c,1)}function v(){const o=n.find(c=>!c.disabled);o&&e.mandatory==="force"&&!s.value.length&&(s.value=[o.id])}dt(()=>{v()}),K(()=>{a=!0}),vt(()=>{for(let o=0;o<n.length;o++)n[o].useIndexAsValue&&(n[o].value=o)});function b(o,c){const m=n.find(r=>r.id===o);if(!(c&&(m!=null&&m.disabled)))if(e.multiple){const r=s.value.slice(),g=r.findIndex(I=>I===o),S=~g;if(c=c??!S,S&&e.mandatory&&r.length<=1||!S&&e.max!=null&&r.length+1>e.max)return;g<0&&c?r.push(o):g>=0&&!c&&r.splice(g,1),s.value=r}else{const r=s.value.includes(o);if(e.mandatory&&r)return;s.value=c??!r?[o]:[]}}function C(o){if(e.multiple,s.value.length){const c=s.value[0],m=n.findIndex(S=>S.id===c);let r=(m+o)%n.length,g=n[r];for(;g.disabled&&r!==m;)r=(r+o)%n.length,g=n[r];if(g.disabled)return;s.value=[n[r].id]}else{const c=n.find(m=>!m.disabled);c&&(s.value=[c.id])}}const h={register:i,unregister:d,selected:s,select:b,disabled:B(e,"disabled"),prev:()=>C(n.length-1),next:()=>C(1),isSelected:o=>s.value.includes(o),selectedClass:u(()=>e.selectedClass),items:u(()=>n),getItemIndex:o=>Ft(n,o)};return Ie(t,h),h}function Ft(e,t){const a=Fe(e,[t]);return a.length?e.findIndex(n=>n.id===a[0]):-1}function Fe(e,t){const a=[];return t.forEach(n=>{const s=e.find(i=>Ve(n,i.value)),l=e[n];(s==null?void 0:s.value)!=null?a.push(s.id):l!=null&&a.push(l.id)}),a}function Ht(e,t){const a=[];return t.forEach(n=>{const s=e.findIndex(l=>l.id===n);if(~s){const l=e[s];a.push(l.value!=null?l.value:s)}}),a}const He=Symbol.for("vuetify:v-btn-toggle"),Mt=y({...De(),...zt()},"VBtnToggle");R()({name:"VBtnToggle",props:Mt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{isSelected:n,next:s,prev:l,select:i,selected:d}=Dt(e,He);return A(()=>{const v=ke.filterProps(e);return f(ke,Le({class:["v-btn-toggle",e.class]},v,{style:e.style}),{default:()=>{var b;return[(b=a.default)==null?void 0:b.call(a,{isSelected:n,next:s,prev:l,select:i,selected:d})]}})}),{next:s,prev:l,select:i}}});function Me(e,t){const a=J(),n=gt(!1);if(ht){const s=new IntersectionObserver(l=>{n.value=!!l.find(i=>i.isIntersecting)},t);K(()=>{s.disconnect()}),Q(a,(l,i)=>{i&&(s.unobserve(i),n.value=!1),l&&s.observe(l)},{flush:"post"})}return{intersectionRef:a,isIntersecting:n}}const Gt=y({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...G(),...de(),...W({tag:"div"}),...H()},"VProgressCircular"),Wt=R()({name:"VProgressCircular",props:Gt(),setup(e,t){let{slots:a}=t;const n=20,s=2*Math.PI*n,l=J(),{themeClasses:i}=M(e),{sizeClasses:d,sizeStyles:v}=ve(e),{textColorClasses:b,textColorStyles:C}=X(B(e,"color")),{textColorClasses:h,textColorStyles:o}=X(B(e,"bgColor")),{intersectionRef:c,isIntersecting:m}=Me(),{resizeRef:r,contentRect:g}=Bt(),S=u(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),I=u(()=>Number(e.width)),V=u(()=>v.value?Number(e.size):g.value?g.value.width:Math.max(I.value,32)),p=u(()=>n/(1-I.value/V.value)*2),L=u(()=>I.value/V.value*p.value),E=u(()=>k((100-S.value)/100*s));return bt(()=>{c.value=l.value,r.value=l.value}),A(()=>f(e.tag,{ref:l,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":m.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},i.value,d.value,b.value,e.class],style:[v.value,C.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[f("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${p.value} ${p.value}`},[f("circle",{class:["v-progress-circular__underlay",h.value],style:o.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":L.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),f("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":L.value,"stroke-dasharray":s,"stroke-dashoffset":E.value},null)]),a.default&&f("div",{class:"v-progress-circular__content"},[a.default({value:S.value})])]})),{}}}),Se={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Ge=y({location:String},"location");function We(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=Ee();return{locationStyles:u(()=>{if(!e.location)return{};const{side:l,align:i}=pt(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function d(b){return a?a(b):0}const v={};return l!=="center"&&(t?v[Se[l]]=`calc(100% - ${d(l)}px)`:v[l]=0),i!=="center"?t?v[Se[i]]=`calc(100% - ${d(i)}px)`:v[i]=0:(l==="center"?v.top=v.left="50%":v[{top:"left",bottom:"left",left:"top",right:"top"}[l]]="50%",v.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[l]),v})}}const Ut=y({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...G(),...Ge({location:"top"}),...fe(),...W(),...H()},"VProgressLinear"),jt=R()({name:"VProgressLinear",props:Ut(),emits:{"update:modelValue":e=>!0},setup(e,t){var _;let{slots:a}=t;const n=Pe(e,"modelValue"),{isRtl:s,rtlClasses:l}=Ee(),{themeClasses:i}=M(e),{locationStyles:d}=We(e),{textColorClasses:v,textColorStyles:b}=X(e,"color"),{backgroundColorClasses:C,backgroundColorStyles:h}=ne(u(()=>e.bgColor||e.color)),{backgroundColorClasses:o,backgroundColorStyles:c}=ne(u(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:m,backgroundColorStyles:r}=ne(e,"color"),{roundedClasses:g}=me(e),{intersectionRef:S,isIntersecting:I}=Me(),V=u(()=>parseFloat(e.max)),p=u(()=>parseFloat(e.height)),L=u(()=>he(parseFloat(e.bufferValue)/V.value*100,0,100)),E=u(()=>he(parseFloat(n.value)/V.value*100,0,100)),P=u(()=>s.value!==e.reverse),Z=u(()=>e.indeterminate?"fade-transition":"slide-x-transition"),N=we&&((_=window.matchMedia)==null?void 0:_.call(window,"(forced-colors: active)").matches);function ee(x){if(!S.value)return;const{left:$,right:U,width:z}=S.value.getBoundingClientRect(),j=P.value?z-x.clientX+(U-z):x.clientX-$;n.value=Math.round(j/z*V.value)}return A(()=>f(e.tag,{ref:S,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&I.value,"v-progress-linear--reverse":P.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},g.value,i.value,l.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?k(p.value):0,"--v-progress-linear-height":k(p.value),...e.absolute?d.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:E.value,onClick:e.clickable&&ee},{default:()=>[e.stream&&f("div",{key:"stream",class:["v-progress-linear__stream",v.value],style:{...b.value,[P.value?"left":"right"]:k(-p.value),borderTop:`${k(p.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${k(p.value/4)})`,width:k(100-L.value,"%"),"--v-progress-linear-stream-to":k(p.value*(P.value?1:-1))}},null),f("div",{class:["v-progress-linear__background",N?void 0:C.value],style:[h.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),f("div",{class:["v-progress-linear__buffer",N?void 0:o.value],style:[c.value,{opacity:parseFloat(e.bufferOpacity),width:k(L.value,"%")}]},null),f(yt,{name:Z.value},{default:()=>[e.indeterminate?f("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(x=>f("div",{key:x,class:["v-progress-linear__indeterminate",x,N?void 0:m.value],style:r.value},null))]):f("div",{class:["v-progress-linear__determinate",N?void 0:m.value],style:[r.value,{width:k(E.value,"%")}]},null)]}),a.default&&f("div",{class:"v-progress-linear__content"},[a.default({value:E.value,buffer:L.value})])]})),{}}}),Xt=y({loading:[Boolean,String]},"loader");function qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{loaderClasses:u(()=>({[`${t}--loading`]:e.loading}))}}function dn(e,t){var n;let{slots:a}=t;return f("div",{class:`${e.name}__loader`},[((n=a.default)==null?void 0:n.call(a,{color:e.color,isActive:e.active}))||f(jt,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Yt=["static","relative","fixed","absolute","sticky"],Jt=y({position:{type:String,validator:e=>Yt.includes(e)}},"position");function Kt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{positionClasses:u(()=>e.position?`${t}--${e.position}`:void 0)}}function Qt(){const e=Y("useRoute");return u(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function Zt(e,t){var h,o;const a=Ct("RouterLink"),n=u(()=>!!(e.href||e.to)),s=u(()=>(n==null?void 0:n.value)||be(t,"click")||be(e,"click"));if(typeof a=="string"||!("useLink"in a)){const c=B(e,"href");return{isLink:n,isClickable:s,href:c,linkProps:oe({href:c})}}const l=u(()=>({...e,to:B(()=>e.to||"")})),i=a.useLink(l.value),d=u(()=>e.to?i:void 0),v=Qt(),b=u(()=>{var c,m,r;return d.value?e.exact?v.value?((r=d.value.isExactActive)==null?void 0:r.value)&&Ve(d.value.route.value.query,v.value.query):((m=d.value.isExactActive)==null?void 0:m.value)??!1:((c=d.value.isActive)==null?void 0:c.value)??!1:!1}),C=u(()=>{var c;return e.to?(c=d.value)==null?void 0:c.route.value.href:e.href});return{isLink:n,isClickable:s,isActive:b,route:(h=d.value)==null?void 0:h.route,navigate:(o=d.value)==null?void 0:o.navigate,href:C,linkProps:oe({href:C,"aria-current":u(()=>b.value?"page":void 0)})}}const en=y({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function tn(e,t){Q(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&t&&kt(()=>{t(!0)})},{immediate:!0})}const re=Symbol("rippleStop"),nn=80;function _e(e,t){e.style.transform=t,e.style.webkitTransform=t}function ue(e){return e.constructor.name==="TouchEvent"}function Ue(e){return e.constructor.name==="KeyboardEvent"}const an=function(e,t){var h;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,s=0;if(!Ue(e)){const o=t.getBoundingClientRect(),c=ue(e)?e.touches[e.touches.length-1]:e;n=c.clientX-o.left,s=c.clientY-o.top}let l=0,i=.3;(h=t._ripple)!=null&&h.circle?(i=.15,l=t.clientWidth/2,l=a.center?l:l+Math.sqrt((n-l)**2+(s-l)**2)/4):l=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const d=`${(t.clientWidth-l*2)/2}px`,v=`${(t.clientHeight-l*2)/2}px`,b=a.center?d:`${n-l}px`,C=a.center?v:`${s-l}px`;return{radius:l,scale:i,x:b,y:C,centerX:d,centerY:v}},q={show(e,t){var c;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((c=t==null?void 0:t._ripple)!=null&&c.enabled))return;const n=document.createElement("span"),s=document.createElement("span");n.appendChild(s),n.className="v-ripple__container",a.class&&(n.className+=` ${a.class}`);const{radius:l,scale:i,x:d,y:v,centerX:b,centerY:C}=an(e,t,a),h=`${l*2}px`;s.className="v-ripple__animation",s.style.width=h,s.style.height=h,t.appendChild(n);const o=window.getComputedStyle(t);o&&o.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),_e(s,`translate(${d}, ${v}) scale3d(${i},${i},${i})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),_e(s,`translate(${b}, ${C}) scale3d(1,1,1)`)},0)},hide(e){var l;if(!((l=e==null?void 0:e._ripple)!=null&&l.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const a=t[t.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const n=performance.now()-Number(a.dataset.activated),s=Math.max(250-n,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var d;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((d=a.parentNode)==null?void 0:d.parentNode)===e&&e.removeChild(a.parentNode)},300)},s)}};function je(e){return typeof e>"u"||!!e}function D(e){const t={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[re])){if(e[re]=!0,ue(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(t.center=a._ripple.centered||Ue(e),a._ripple.class&&(t.class=a._ripple.class),ue(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{q.show(e,a,t)},a._ripple.showTimer=window.setTimeout(()=>{var n;(n=a==null?void 0:a._ripple)!=null&&n.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},nn)}else q.show(e,a,t)}}function xe(e){e[re]=!0}function w(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{w(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),q.hide(t)}}function Xe(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let F=!1;function qe(e){!F&&(e.keyCode===ye.enter||e.keyCode===ye.space)&&(F=!0,D(e))}function Ye(e){F=!1,w(e)}function Je(e){F&&(F=!1,w(e))}function Ke(e,t,a){const{value:n,modifiers:s}=t,l=je(n);if(l||q.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=l,e._ripple.centered=s.center,e._ripple.circle=s.circle,St(n)&&n.class&&(e._ripple.class=n.class),l&&!a){if(s.stop){e.addEventListener("touchstart",xe,{passive:!0}),e.addEventListener("mousedown",xe);return}e.addEventListener("touchstart",D,{passive:!0}),e.addEventListener("touchend",w,{passive:!0}),e.addEventListener("touchmove",Xe,{passive:!0}),e.addEventListener("touchcancel",w),e.addEventListener("mousedown",D),e.addEventListener("mouseup",w),e.addEventListener("mouseleave",w),e.addEventListener("keydown",qe),e.addEventListener("keyup",Ye),e.addEventListener("blur",Je),e.addEventListener("dragstart",w,{passive:!0})}else!l&&a&&Qe(e)}function Qe(e){e.removeEventListener("mousedown",D),e.removeEventListener("touchstart",D),e.removeEventListener("touchend",w),e.removeEventListener("touchmove",Xe),e.removeEventListener("touchcancel",w),e.removeEventListener("mouseup",w),e.removeEventListener("mouseleave",w),e.removeEventListener("keydown",qe),e.removeEventListener("keyup",Ye),e.removeEventListener("dragstart",w),e.removeEventListener("blur",Je)}function sn(e,t){Ke(e,t,!1)}function ln(e){delete e._ripple,Qe(e)}function on(e,t){if(t.value===t.oldValue)return;const a=je(t.oldValue);Ke(e,t,a)}const rn={mounted:sn,unmounted:ln,updated:on},un=y({active:{type:Boolean,default:void 0},activeColor:String,baseColor:String,symbol:{type:null,default:He},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:le,appendIcon:le,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...ze(),...G(),...Te(),...Et(),...Ne(),...Ot(),...Xt(),...Ge(),...Jt(),...fe(),...en(),...de(),...W({tag:"button"}),...H(),...Ae({variant:"elevated"})},"VBtn"),vn=R()({name:"VBtn",props:un(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:a,slots:n}=t;const{themeClasses:s}=M(e),{borderClasses:l}=Oe(e),{densityClasses:i}=Re(e),{dimensionStyles:d}=Tt(e),{elevationClasses:v}=$e(e),{loaderClasses:b}=qt(e),{locationStyles:C}=We(e),{positionClasses:h}=Kt(e),{roundedClasses:o}=me(e),{sizeClasses:c,sizeStyles:m}=ve(e),r=At(e,e.symbol,!1),g=Zt(e,a),S=u(()=>{var _;return e.active!==void 0?e.active:g.isLink.value?(_=g.isActive)==null?void 0:_.value:r==null?void 0:r.isSelected.value}),I=u(()=>S.value?e.activeColor??e.color:e.color),V=u(()=>{var x,$;return{color:(r==null?void 0:r.isSelected.value)&&(!g.isLink.value||((x=g.isActive)==null?void 0:x.value))||!r||(($=g.isActive)==null?void 0:$.value)?I.value??e.baseColor:e.baseColor,variant:e.variant}}),{colorClasses:p,colorStyles:L,variantClasses:E}=$t(V),P=u(()=>(r==null?void 0:r.disabled.value)||e.disabled),Z=u(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),N=u(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function ee(_){var x;P.value||g.isLink.value&&(_.metaKey||_.ctrlKey||_.shiftKey||_.button!==0||a.target==="_blank")||((x=g.navigate)==null||x.call(g,_),r==null||r.toggle())}return tn(g,r==null?void 0:r.select),A(()=>{const _=g.isLink.value?"a":e.tag,x=!!(e.prependIcon||n.prepend),$=!!(e.appendIcon||n.append),U=!!(e.icon&&e.icon!==!0);return _t(f(_,Le({type:_==="a"?void 0:"button",class:["v-btn",r==null?void 0:r.selectedClass.value,{"v-btn--active":S.value,"v-btn--block":e.block,"v-btn--disabled":P.value,"v-btn--elevated":Z.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},s.value,l.value,p.value,i.value,v.value,b.value,h.value,o.value,c.value,E.value,e.class],style:[L.value,d.value,C.value,m.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:P.value||void 0,tabindex:e.loading||e.readonly?-1:void 0,onClick:ee,value:N.value},g.linkProps),{default:()=>{var z;return[Nt(!0,"v-btn"),!e.icon&&x&&f("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?f(te,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):f(ae,{key:"prepend-icon",icon:e.prependIcon},null)]),f("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&U?f(ae,{key:"content-icon",icon:e.icon},null):f(te,{key:"content-defaults",disabled:!U,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var j;return[((j=n.default)==null?void 0:j.call(n))??e.text]}})]),!e.icon&&$&&f("span",{key:"append",class:"v-btn__append"},[n.append?f(te,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):f(ae,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&f("span",{key:"loader",class:"v-btn__loader"},[((z=n.loader)==null?void 0:z.call(n))??f(Wt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[rn,!P.value&&e.ripple,"",{center:!!e.icon}]])}),{group:r}}});export{Kt as A,Zt as B,un as C,X as D,vn as E,Dt as F,Ot as G,At as H,zt as I,Bt as J,dn as L,rn as R,ae as V,fe as a,de as b,Ne as c,ne as d,me as e,$e as f,A as g,te as h,Et as i,W as j,Tt as k,Te as l,G as m,Re as n,ze as o,Ae as p,Oe as q,$t as r,Nt as s,Xt as t,ve as u,Ge as v,Jt as w,en as x,qt as y,We as z};
