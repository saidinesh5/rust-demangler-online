"use strict";(self.webpackChunkrust_demangler=self.webpackChunkrust_demangler||[]).push([[235],{235:(n,e,t)=>{t.a(n,(async(n,r)=>{try{t.r(e),t.d(e,{__wbindgen_error_new:()=>o.hd,__wbindgen_object_drop_ref:()=>o.ug,__wbindgen_string_get:()=>o.qt,__wbindgen_string_new:()=>o.h4,demangle:()=>o.G1});var o=t(838),i=n([o]);o=(i.then?(await i)():i)[0],r()}catch(n){r(n)}}))},838:(n,e,t)=>{t.a(n,(async(r,o)=>{try{t.d(e,{G1:()=>T,h4:()=>I,hd:()=>E,qt:()=>q,ug:()=>j});var i=t(530);n=t.hmd(n);var c=r([i]);i=(c.then?(await c)():c)[0];const u=new Array(32).fill(void 0);function d(n){return u[n]}u.push(void 0,null,!0,!1);let _=0,a=new Uint8Array;function f(){return 0===a.byteLength&&(a=new Uint8Array(i.memory.buffer)),a}let g=new("undefined"==typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder)("utf-8");const l="function"==typeof g.encodeInto?function(n,e){return g.encodeInto(n,e)}:function(n,e){const t=g.encode(n);return e.set(t),{read:n.length,written:t.length}};function s(n,e,t){if(void 0===t){const t=g.encode(n),r=e(t.length);return f().subarray(r,r+t.length).set(t),_=t.length,r}let r=n.length,o=e(r);const i=f();let c=0;for(;c<r;c++){const e=n.charCodeAt(c);if(e>127)break;i[o+c]=e}if(c!==r){0!==c&&(n=n.slice(c)),o=t(o,r,r=c+3*n.length);const e=f().subarray(o+c,o+r);c+=l(n,e).written}return _=c,o}let w=new Int32Array;function h(){return 0===w.byteLength&&(w=new Int32Array(i.memory.buffer)),w}let b=new("undefined"==typeof TextDecoder?(0,n.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});function y(n,e){return b.decode(f().subarray(n,n+e))}b.decode();let p=u.length;function v(n){p===u.length&&u.push(u.length+1);const e=p;return p=u[e],u[e]=n,e}function m(n){n<36||(u[n]=p,p=n)}function k(n){const e=d(n);return m(n),e}let x=32;function A(n){if(1==x)throw new Error("out of js stack");return u[--x]=n,x}function T(n){try{const r=i.__wbindgen_add_to_stack_pointer(-16);i.demangle(r,A(n));var e=h()[r/4+0],t=h()[r/4+1];if(h()[r/4+2])throw k(t);return k(e)}finally{i.__wbindgen_add_to_stack_pointer(16),u[x++]=void 0}}function q(n,e){const t=d(e),r="string"==typeof t?t:void 0;var o=null==r?0:s(r,i.__wbindgen_malloc,i.__wbindgen_realloc),c=_;h()[n/4+1]=c,h()[n/4+0]=o}function E(n,e){return v(new Error(y(n,e)))}function j(n){k(n)}function I(n,e){return v(y(n,e))}o()}catch(C){o(C)}}))},530:(n,e,t)=>{t.a(n,(async(r,o)=>{try{var i,c=r([i=t(838)]),[i]=c.then?(await c)():c;await t.v(e,n.id,"84e77bc2d69f4f8c236b",{"./index_bg.js":{__wbindgen_string_get:i.qt,__wbindgen_error_new:i.hd,__wbindgen_object_drop_ref:i.ug,__wbindgen_string_new:i.h4}}),o()}catch(n){o(n)}}),1)}}]);