class p{constructor(n){let{x:s,y:r,width:e,height:t}=n;this.x=s,this.y=r,this.width=e,this.height=t}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function v(f){const n=f.getBoundingClientRect(),s=getComputedStyle(f),r=s.transform;if(r){let e,t,i,o,u;if(r.startsWith("matrix3d("))e=r.slice(9,-1).split(/, /),t=+e[0],i=+e[5],o=+e[12],u=+e[13];else if(r.startsWith("matrix("))e=r.slice(7,-1).split(/, /),t=+e[0],i=+e[3],o=+e[4],u=+e[5];else return new p(n);const a=s.transformOrigin,c=n.x-o-(1-t)*parseFloat(a),l=n.y-u-(1-i)*parseFloat(a.slice(a.indexOf(" ")+1)),h=t?n.width/t:f.offsetWidth+1,d=i?n.height/i:f.offsetHeight+1;return new p({x:c,y:l,width:h,height:d})}else return new p(n)}function w(f,n,s){if(typeof f.animate>"u")return{finished:Promise.resolve()};let r;try{r=f.animate(n,s)}catch{return{finished:Promise.resolve()}}return typeof r.finished>"u"&&(r.finished=new Promise(e=>{r.onfinish=()=>{e(r)}})),r}const R="cubic-bezier(0.4, 0, 0.2, 1)",g=Symbol("Forwarded refs");function m(f,n){let s=f;for(;s;){const r=Reflect.getOwnPropertyDescriptor(s,n);if(r)return r;s=Object.getPrototypeOf(s)}}function x(f){for(var n=arguments.length,s=new Array(n>1?n-1:0),r=1;r<n;r++)s[r-1]=arguments[r];return f[g]=s,new Proxy(f,{get(e,t){if(Reflect.has(e,t))return Reflect.get(e,t);if(!(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))){for(const i of s)if(i.value&&Reflect.has(i.value,t)){const o=Reflect.get(i.value,t);return typeof o=="function"?o.bind(i.value):o}}},has(e,t){if(Reflect.has(e,t))return!0;if(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))return!1;for(const i of s)if(i.value&&Reflect.has(i.value,t))return!0;return!1},set(e,t,i){if(Reflect.has(e,t))return Reflect.set(e,t,i);if(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))return!1;for(const o of s)if(o.value&&Reflect.has(o.value,t))return Reflect.set(o.value,t,i);return!1},getOwnPropertyDescriptor(e,t){var o;const i=Reflect.getOwnPropertyDescriptor(e,t);if(i)return i;if(!(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))){for(const u of s){if(!u.value)continue;const a=m(u.value,t)??("_"in u.value?m((o=u.value._)==null?void 0:o.setupState,t):void 0);if(a)return a}for(const u of s){const a=u.value&&u.value[g];if(!a)continue;const c=a.slice();for(;c.length;){const l=c.shift(),h=m(l.value,t);if(h)return h;const d=l.value&&l.value[g];d&&c.push(...d)}}}}})}export{w as a,x as f,v as n,R as s};
