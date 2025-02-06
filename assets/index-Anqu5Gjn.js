import{r as c,a as v}from"./index-BEn-qc9j.js";import{j as p}from"./jsx-runtime-z8MfsBtr.js";function A(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e==null||e(r),n===!1||!r.defaultPrevented)return t==null?void 0:t(r)}}function E(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function P(...e){return t=>{let n=!1;const o=e.map(r=>{const s=E(r,t);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<o.length;r++){const s=o[r];typeof s=="function"?s():E(e[r],null)}}}}function B(...e){return c.useCallback(P(...e),e)}function I(e,t){const n=c.createContext(t),o=s=>{const{children:u,...i}=s,l=c.useMemo(()=>i,Object.values(i));return p.jsx(n.Provider,{value:l,children:u})};o.displayName=e+"Provider";function r(s){const u=c.useContext(n);if(u)return u;if(t!==void 0)return t;throw new Error(`\`${s}\` must be used within \`${e}\``)}return[o,r]}function K(e,t=[]){let n=[];function o(s,u){const i=c.createContext(u),l=n.length;n=[...n,u];const a=f=>{var g;const{scope:d,children:x,...m}=f,h=((g=d==null?void 0:d[e])==null?void 0:g[l])||i,b=c.useMemo(()=>m,Object.values(m));return p.jsx(h.Provider,{value:b,children:x})};a.displayName=s+"Provider";function C(f,d){var h;const x=((h=d==null?void 0:d[e])==null?void 0:h[l])||i,m=c.useContext(x);if(m)return m;if(u!==void 0)return u;throw new Error(`\`${f}\` must be used within \`${s}\``)}return[a,C]}const r=()=>{const s=n.map(u=>c.createContext(u));return function(i){const l=(i==null?void 0:i[e])||s;return c.useMemo(()=>({[`__scope${e}`]:{...i,[e]:l}}),[i,l])}};return r.scopeName=e,[o,R(r,...t)]}function R(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const u=o.reduce((i,{useScope:l,scopeName:a})=>{const f=l(s)[`__scope${a}`];return{...i,...f}},{});return c.useMemo(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}var j=c.forwardRef((e,t)=>{const{children:n,...o}=e,r=c.Children.toArray(n),s=r.find($);if(s){const u=s.props.children,i=r.map(l=>l===s?c.Children.count(u)>1?c.Children.only(null):c.isValidElement(u)?u.props.children:null:l);return p.jsx(y,{...o,ref:t,children:c.isValidElement(u)?c.cloneElement(u,void 0,i):null})}return p.jsx(y,{...o,ref:t,children:n})});j.displayName="Slot";var y=c.forwardRef((e,t)=>{const{children:n,...o}=e;if(c.isValidElement(n)){const r=_(n),s=O(o,n.props);return n.type!==c.Fragment&&(s.ref=t?P(t,r):r),c.cloneElement(n,s)}return c.Children.count(n)>1?c.Children.only(null):null});y.displayName="SlotClone";var w=({children:e})=>p.jsx(p.Fragment,{children:e});function $(e){return c.isValidElement(e)&&e.type===w}function O(e,t){const n={...t};for(const o in t){const r=e[o],s=t[o];/^on[A-Z]/.test(o)?r&&s?n[o]=(...i)=>{s(...i),r(...i)}:r&&(n[o]=r):o==="style"?n[o]={...r,...s}:o==="className"&&(n[o]=[r,s].filter(Boolean).join(" "))}return{...e,...n}}function _(e){var o,r;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function S(e){const t=c.useRef(e);return c.useEffect(()=>{t.current=e}),c.useMemo(()=>(...n)=>{var o;return(o=t.current)==null?void 0:o.call(t,...n)},[])}function D(e,t=globalThis==null?void 0:globalThis.document){const n=S(e);c.useEffect(()=>{const o=r=>{r.key==="Escape"&&n(r)};return t.addEventListener("keydown",o,{capture:!0}),()=>t.removeEventListener("keydown",o,{capture:!0})},[n,t])}var k=globalThis!=null&&globalThis.document?c.useLayoutEffect:()=>{},M=v.useId||(()=>{}),N=0;function F(e){const[t,n]=c.useState(M());return k(()=>{n(o=>o??String(N++))},[e]),e||(t?`radix-${t}`:"")}function T({prop:e,defaultProp:t,onChange:n=()=>{}}){const[o,r]=V({defaultProp:t,onChange:n}),s=e!==void 0,u=s?e:o,i=S(n),l=c.useCallback(a=>{if(s){const f=typeof a=="function"?a(e):a;f!==e&&i(f)}else r(a)},[s,e,r,i]);return[u,l]}function V({defaultProp:e,onChange:t}){const n=c.useState(e),[o]=n,r=c.useRef(o),s=S(t);return c.useEffect(()=>{r.current!==o&&(s(o),r.current=o)},[o,r,s]),n}export{j as S,D as a,S as b,A as c,k as d,K as e,T as f,F as g,I as h,w as i,P as j,B as u};
