import{j as n}from"./jsx-runtime-BjgbQsUx.js";import{v as Mt}from"./v4-CQkTLCs1.js";import{R as Q,r}from"./index-BuYn5Wpo.js";import{r as We}from"./index-BG6K9iAw.js";import{u as A,S as Ce,P as M,c as E,h as At,a as Dt,R as Vt,F as Lt,D as kt,b as Bt}from"./Combination-DzJNEkvQ.js";import{c as Ke,d as G,b as be,e as Ht,u as Ne}from"./index-BQoVKf07.js";import{a as Ft,u as Wt}from"./index-BpEDaLUi.js";import{c as Ue,A as Kt,C as Ut,a as $t,R as zt}from"./index-CkqBjHd8.js";import{c as Gt}from"./createLucideIcon-BfzO-L_U.js";import{C as Yt}from"./check-BI1R92OW.js";import"./index-D2MAbzvX.js";import"./index-BIm0odtm.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=Gt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),{addons:Xt}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:Zt}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:Oe}=__STORYBOOK_MODULE_GLOBAL__;var Jt="storybook/actions",Qt=`${Jt}/action-event`,eo={depth:10,clearOnStoryChange:!0,limit:50},$e=(e,o)=>{let t=Object.getPrototypeOf(e);return!t||o(t)?t:$e(t,o)},to=e=>!!(typeof e=="object"&&e&&$e(e,o=>/^Synthetic(?:Base)?Event$/.test(o.constructor.name))&&typeof e.persist=="function"),oo=e=>{if(to(e)){let o=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));o.persist();let t=Object.getOwnPropertyDescriptor(o,"view"),c=t==null?void 0:t.value;return typeof c=="object"&&(c==null?void 0:c.constructor.name)==="Window"&&Object.defineProperty(o,"view",{...t,value:Object.create(c.constructor.prototype)}),o}return e},no=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?Mt():Date.now().toString(36)+Math.random().toString(36).substring(2);function ro(e,o={}){let t={...eo,...o},c=function(...a){var w,_;if(o.implicit){let y=(w="__STORYBOOK_PREVIEW__"in Oe?Oe.__STORYBOOK_PREVIEW__:void 0)==null?void 0:w.storyRenders.find(v=>v.phase==="playing"||v.phase==="rendering");if(y){let v=!((_=window==null?void 0:window.FEATURES)!=null&&_.disallowImplicitActionsInRenderV8),d=new Zt({phase:y.phase,name:e,deprecated:v});if(v)console.warn(d);else throw d}}let p=Xt.getChannel(),i=no(),l=5,s=a.map(oo),f=a.length>1?s:s[0],x={id:i,count:0,data:{name:e,args:f},options:{...t,maxDepth:l+(t.depth||3),allowFunction:t.allowFunction||!1}};p.emit(Qt,x)};return c.isAction=!0,c.implicit=o.implicit,c}function je(e,[o,t]){return Math.min(t,Math.max(o,e))}function so(e){const o=e+"CollectionProvider",[t,c]=Ke(o),[a,p]=t(o,{collectionRef:{current:null},itemMap:new Map}),i=y=>{const{scope:v,children:d}=y,h=Q.useRef(null),S=Q.useRef(new Map).current;return n.jsx(a,{scope:v,itemMap:S,collectionRef:h,children:d})};i.displayName=o;const l=e+"CollectionSlot",s=Q.forwardRef((y,v)=>{const{scope:d,children:h}=y,S=p(l,d),u=A(v,S.collectionRef);return n.jsx(Ce,{ref:u,children:h})});s.displayName=l;const f=e+"CollectionItemSlot",x="data-radix-collection-item",w=Q.forwardRef((y,v)=>{const{scope:d,children:h,...S}=y,u=Q.useRef(null),m=A(v,u),b=p(f,d);return Q.useEffect(()=>(b.itemMap.set(u,{ref:u,...S}),()=>void b.itemMap.delete(u))),n.jsx(Ce,{[x]:"",ref:m,children:h})});w.displayName=f;function _(y){const v=p(e+"CollectionConsumer",y);return Q.useCallback(()=>{const h=v.collectionRef.current;if(!h)return[];const S=Array.from(h.querySelectorAll(`[${x}]`));return Array.from(v.itemMap.values()).sort((b,O)=>S.indexOf(b.ref.current)-S.indexOf(O.ref.current))},[v.collectionRef,v.itemMap])}return[{Provider:i,Slot:s,ItemSlot:w},_,c]}var co="VisuallyHidden",ze=r.forwardRef((e,o)=>n.jsx(M.span,{...e,ref:o,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));ze.displayName=co;var io=[" ","Enter","ArrowUp","ArrowDown"],lo=[" ","Enter"],ce="Select",[fe,me,ao]=so(ce),[oe,Zo]=Ke(ce,[ao,Ue]),he=Ue(),[uo,Y]=oe(ce),[po,fo]=oe(ce),Ge=e=>{const{__scopeSelect:o,children:t,open:c,defaultOpen:a,onOpenChange:p,value:i,defaultValue:l,onValueChange:s,dir:f,name:x,autoComplete:w,disabled:_,required:y,form:v}=e,d=he(o),[h,S]=r.useState(null),[u,m]=r.useState(null),[b,O]=r.useState(!1),ne=Wt(f),[P=!1,V]=Ne({prop:c,defaultProp:a,onChange:p}),[U,X]=Ne({prop:i,defaultProp:l,onChange:s}),B=r.useRef(null),H=h?v||!!h.closest("form"):!0,[$,F]=r.useState(new Set),W=Array.from($).map(N=>N.props.value).join(";");return n.jsx(zt,{...d,children:n.jsxs(uo,{required:y,scope:o,trigger:h,onTriggerChange:S,valueNode:u,onValueNodeChange:m,valueNodeHasChildren:b,onValueNodeHasChildrenChange:O,contentId:be(),value:U,onValueChange:X,open:P,onOpenChange:V,dir:ne,triggerPointerDownPosRef:B,disabled:_,children:[n.jsx(fe.Provider,{scope:o,children:n.jsx(po,{scope:e.__scopeSelect,onNativeOptionAdd:r.useCallback(N=>{F(L=>new Set(L).add(N))},[]),onNativeOptionRemove:r.useCallback(N=>{F(L=>{const K=new Set(L);return K.delete(N),K})},[]),children:t})}),H?n.jsxs(gt,{"aria-hidden":!0,required:y,tabIndex:-1,name:x,autoComplete:w,value:U,onChange:N=>X(N.target.value),disabled:_,form:v,children:[U===void 0?n.jsx("option",{value:""}):null,Array.from($)]},W):null]})})};Ge.displayName=ce;var Ye="SelectTrigger",qe=r.forwardRef((e,o)=>{const{__scopeSelect:t,disabled:c=!1,...a}=e,p=he(t),i=Y(Ye,t),l=i.disabled||c,s=A(o,i.onTriggerChange),f=me(t),x=r.useRef("touch"),[w,_,y]=vt(d=>{const h=f().filter(m=>!m.disabled),S=h.find(m=>m.value===i.value),u=xt(h,d,S);u!==void 0&&i.onValueChange(u.value)}),v=d=>{l||(i.onOpenChange(!0),y()),d&&(i.triggerPointerDownPosRef.current={x:Math.round(d.pageX),y:Math.round(d.pageY)})};return n.jsx(Kt,{asChild:!0,...p,children:n.jsx(M.button,{type:"button",role:"combobox","aria-controls":i.contentId,"aria-expanded":i.open,"aria-required":i.required,"aria-autocomplete":"none",dir:i.dir,"data-state":i.open?"open":"closed",disabled:l,"data-disabled":l?"":void 0,"data-placeholder":ht(i.value)?"":void 0,...a,ref:s,onClick:E(a.onClick,d=>{d.currentTarget.focus(),x.current!=="mouse"&&v(d)}),onPointerDown:E(a.onPointerDown,d=>{x.current=d.pointerType;const h=d.target;h.hasPointerCapture(d.pointerId)&&h.releasePointerCapture(d.pointerId),d.button===0&&d.ctrlKey===!1&&d.pointerType==="mouse"&&(v(d),d.preventDefault())}),onKeyDown:E(a.onKeyDown,d=>{const h=w.current!=="";!(d.ctrlKey||d.altKey||d.metaKey)&&d.key.length===1&&_(d.key),!(h&&d.key===" ")&&io.includes(d.key)&&(v(),d.preventDefault())})})})});qe.displayName=Ye;var Xe="SelectValue",Ze=r.forwardRef((e,o)=>{const{__scopeSelect:t,className:c,style:a,children:p,placeholder:i="",...l}=e,s=Y(Xe,t),{onValueNodeHasChildrenChange:f}=s,x=p!==void 0,w=A(o,s.onValueNodeChange);return G(()=>{f(x)},[f,x]),n.jsx(M.span,{...l,ref:w,style:{pointerEvents:"none"},children:ht(s.value)?n.jsx(n.Fragment,{children:i}):p})});Ze.displayName=Xe;var mo="SelectIcon",Je=r.forwardRef((e,o)=>{const{__scopeSelect:t,children:c,...a}=e;return n.jsx(M.span,{"aria-hidden":!0,...a,ref:o,children:c||"▼"})});Je.displayName=mo;var ho="SelectPortal",Qe=e=>n.jsx(Bt,{asChild:!0,...e});Qe.displayName=ho;var ee="SelectContent",et=r.forwardRef((e,o)=>{const t=Y(ee,e.__scopeSelect),[c,a]=r.useState();if(G(()=>{a(new DocumentFragment)},[]),!t.open){const p=c;return p?We.createPortal(n.jsx(tt,{scope:e.__scopeSelect,children:n.jsx(fe.Slot,{scope:e.__scopeSelect,children:n.jsx("div",{children:e.children})})}),p):null}return n.jsx(ot,{...e,ref:o})});et.displayName=ee;var D=10,[tt,q]=oe(ee),go="SelectContentImpl",ot=r.forwardRef((e,o)=>{const{__scopeSelect:t,position:c="item-aligned",onCloseAutoFocus:a,onEscapeKeyDown:p,onPointerDownOutside:i,side:l,sideOffset:s,align:f,alignOffset:x,arrowPadding:w,collisionBoundary:_,collisionPadding:y,sticky:v,hideWhenDetached:d,avoidCollisions:h,...S}=e,u=Y(ee,t),[m,b]=r.useState(null),[O,ne]=r.useState(null),P=A(o,g=>b(g)),[V,U]=r.useState(null),[X,B]=r.useState(null),H=me(t),[$,F]=r.useState(!1),W=r.useRef(!1);r.useEffect(()=>{if(m)return At(m)},[m]),Dt();const N=r.useCallback(g=>{const[R,...j]=H().map(I=>I.ref.current),[T]=j.slice(-1),C=document.activeElement;for(const I of g)if(I===C||(I==null||I.scrollIntoView({block:"nearest"}),I===R&&O&&(O.scrollTop=0),I===T&&O&&(O.scrollTop=O.scrollHeight),I==null||I.focus(),document.activeElement!==C))return},[H,O]),L=r.useCallback(()=>N([V,m]),[N,V,m]);r.useEffect(()=>{$&&L()},[$,L]);const{onOpenChange:K,triggerPointerDownPosRef:z}=u;r.useEffect(()=>{if(m){let g={x:0,y:0};const R=T=>{var C,I;g={x:Math.abs(Math.round(T.pageX)-(((C=z.current)==null?void 0:C.x)??0)),y:Math.abs(Math.round(T.pageY)-(((I=z.current)==null?void 0:I.y)??0))}},j=T=>{g.x<=10&&g.y<=10?T.preventDefault():m.contains(T.target)||K(!1),document.removeEventListener("pointermove",R),z.current=null};return z.current!==null&&(document.addEventListener("pointermove",R),document.addEventListener("pointerup",j,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",R),document.removeEventListener("pointerup",j,{capture:!0})}}},[m,K,z]),r.useEffect(()=>{const g=()=>K(!1);return window.addEventListener("blur",g),window.addEventListener("resize",g),()=>{window.removeEventListener("blur",g),window.removeEventListener("resize",g)}},[K]);const[ge,ie]=vt(g=>{const R=H().filter(C=>!C.disabled),j=R.find(C=>C.ref.current===document.activeElement),T=xt(R,g,j);T&&setTimeout(()=>T.ref.current.focus())}),ve=r.useCallback((g,R,j)=>{const T=!W.current&&!j;(u.value!==void 0&&u.value===R||T)&&(U(g),T&&(W.current=!0))},[u.value]),xe=r.useCallback(()=>m==null?void 0:m.focus(),[m]),te=r.useCallback((g,R,j)=>{const T=!W.current&&!j;(u.value!==void 0&&u.value===R||T)&&B(g)},[u.value]),le=c==="popper"?Ie:nt,re=le===Ie?{side:l,sideOffset:s,align:f,alignOffset:x,arrowPadding:w,collisionBoundary:_,collisionPadding:y,sticky:v,hideWhenDetached:d,avoidCollisions:h}:{};return n.jsx(tt,{scope:t,content:m,viewport:O,onViewportChange:ne,itemRefCallback:ve,selectedItem:V,onItemLeave:xe,itemTextRefCallback:te,focusSelectedItem:L,selectedItemText:X,position:c,isPositioned:$,searchRef:ge,children:n.jsx(Vt,{as:Ce,allowPinchZoom:!0,children:n.jsx(Lt,{asChild:!0,trapped:u.open,onMountAutoFocus:g=>{g.preventDefault()},onUnmountAutoFocus:E(a,g=>{var R;(R=u.trigger)==null||R.focus({preventScroll:!0}),g.preventDefault()}),children:n.jsx(kt,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:p,onPointerDownOutside:i,onFocusOutside:g=>g.preventDefault(),onDismiss:()=>u.onOpenChange(!1),children:n.jsx(le,{role:"listbox",id:u.contentId,"data-state":u.open?"open":"closed",dir:u.dir,onContextMenu:g=>g.preventDefault(),...S,...re,onPlaced:()=>F(!0),ref:P,style:{display:"flex",flexDirection:"column",outline:"none",...S.style},onKeyDown:E(S.onKeyDown,g=>{const R=g.ctrlKey||g.altKey||g.metaKey;if(g.key==="Tab"&&g.preventDefault(),!R&&g.key.length===1&&ie(g.key),["ArrowUp","ArrowDown","Home","End"].includes(g.key)){let T=H().filter(C=>!C.disabled).map(C=>C.ref.current);if(["ArrowUp","End"].includes(g.key)&&(T=T.slice().reverse()),["ArrowUp","ArrowDown"].includes(g.key)){const C=g.target,I=T.indexOf(C);T=T.slice(I+1)}setTimeout(()=>N(T)),g.preventDefault()}})})})})})})});ot.displayName=go;var vo="SelectItemAlignedPosition",nt=r.forwardRef((e,o)=>{const{__scopeSelect:t,onPlaced:c,...a}=e,p=Y(ee,t),i=q(ee,t),[l,s]=r.useState(null),[f,x]=r.useState(null),w=A(o,P=>x(P)),_=me(t),y=r.useRef(!1),v=r.useRef(!0),{viewport:d,selectedItem:h,selectedItemText:S,focusSelectedItem:u}=i,m=r.useCallback(()=>{if(p.trigger&&p.valueNode&&l&&f&&d&&h&&S){const P=p.trigger.getBoundingClientRect(),V=f.getBoundingClientRect(),U=p.valueNode.getBoundingClientRect(),X=S.getBoundingClientRect();if(p.dir!=="rtl"){const C=X.left-V.left,I=U.left-C,Z=P.left-I,J=P.width+Z,Se=Math.max(J,V.width),we=window.innerWidth-D,ye=je(I,[D,Math.max(D,we-Se)]);l.style.minWidth=J+"px",l.style.left=ye+"px"}else{const C=V.right-X.right,I=window.innerWidth-U.right-C,Z=window.innerWidth-P.right-I,J=P.width+Z,Se=Math.max(J,V.width),we=window.innerWidth-D,ye=je(I,[D,Math.max(D,we-Se)]);l.style.minWidth=J+"px",l.style.right=ye+"px"}const B=_(),H=window.innerHeight-D*2,$=d.scrollHeight,F=window.getComputedStyle(f),W=parseInt(F.borderTopWidth,10),N=parseInt(F.paddingTop,10),L=parseInt(F.borderBottomWidth,10),K=parseInt(F.paddingBottom,10),z=W+N+$+K+L,ge=Math.min(h.offsetHeight*5,z),ie=window.getComputedStyle(d),ve=parseInt(ie.paddingTop,10),xe=parseInt(ie.paddingBottom,10),te=P.top+P.height/2-D,le=H-te,re=h.offsetHeight/2,g=h.offsetTop+re,R=W+N+g,j=z-R;if(R<=te){const C=B.length>0&&h===B[B.length-1].ref.current;l.style.bottom="0px";const I=f.clientHeight-d.offsetTop-d.offsetHeight,Z=Math.max(le,re+(C?xe:0)+I+L),J=R+Z;l.style.height=J+"px"}else{const C=B.length>0&&h===B[0].ref.current;l.style.top="0px";const Z=Math.max(te,W+d.offsetTop+(C?ve:0)+re)+j;l.style.height=Z+"px",d.scrollTop=R-te+d.offsetTop}l.style.margin=`${D}px 0`,l.style.minHeight=ge+"px",l.style.maxHeight=H+"px",c==null||c(),requestAnimationFrame(()=>y.current=!0)}},[_,p.trigger,p.valueNode,l,f,d,h,S,p.dir,c]);G(()=>m(),[m]);const[b,O]=r.useState();G(()=>{f&&O(window.getComputedStyle(f).zIndex)},[f]);const ne=r.useCallback(P=>{P&&v.current===!0&&(m(),u==null||u(),v.current=!1)},[m,u]);return n.jsx(So,{scope:t,contentWrapper:l,shouldExpandOnScrollRef:y,onScrollButtonChange:ne,children:n.jsx("div",{ref:s,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:b},children:n.jsx(M.div,{...a,ref:w,style:{boxSizing:"border-box",maxHeight:"100%",...a.style}})})})});nt.displayName=vo;var xo="SelectPopperPosition",Ie=r.forwardRef((e,o)=>{const{__scopeSelect:t,align:c="start",collisionPadding:a=D,...p}=e,i=he(t);return n.jsx(Ut,{...i,...p,ref:o,align:c,collisionPadding:a,style:{boxSizing:"border-box",...p.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Ie.displayName=xo;var[So,Pe]=oe(ee,{}),_e="SelectViewport",rt=r.forwardRef((e,o)=>{const{__scopeSelect:t,nonce:c,...a}=e,p=q(_e,t),i=Pe(_e,t),l=A(o,p.onViewportChange),s=r.useRef(0);return n.jsxs(n.Fragment,{children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:c}),n.jsx(fe.Slot,{scope:t,children:n.jsx(M.div,{"data-radix-select-viewport":"",role:"presentation",...a,ref:l,style:{position:"relative",flex:1,overflow:"hidden auto",...a.style},onScroll:E(a.onScroll,f=>{const x=f.currentTarget,{contentWrapper:w,shouldExpandOnScrollRef:_}=i;if(_!=null&&_.current&&w){const y=Math.abs(s.current-x.scrollTop);if(y>0){const v=window.innerHeight-D*2,d=parseFloat(w.style.minHeight),h=parseFloat(w.style.height),S=Math.max(d,h);if(S<v){const u=S+y,m=Math.min(v,u),b=u-m;w.style.height=m+"px",w.style.bottom==="0px"&&(x.scrollTop=b>0?b:0,w.style.justifyContent="flex-end")}}}s.current=x.scrollTop})})})]})});rt.displayName=_e;var st="SelectGroup",[wo,yo]=oe(st),ct=r.forwardRef((e,o)=>{const{__scopeSelect:t,...c}=e,a=be();return n.jsx(wo,{scope:t,id:a,children:n.jsx(M.div,{role:"group","aria-labelledby":a,...c,ref:o})})});ct.displayName=st;var it="SelectLabel",lt=r.forwardRef((e,o)=>{const{__scopeSelect:t,...c}=e,a=yo(it,t);return n.jsx(M.div,{id:a.id,...c,ref:o})});lt.displayName=it;var pe="SelectItem",[Co,at]=oe(pe),dt=r.forwardRef((e,o)=>{const{__scopeSelect:t,value:c,disabled:a=!1,textValue:p,...i}=e,l=Y(pe,t),s=q(pe,t),f=l.value===c,[x,w]=r.useState(p??""),[_,y]=r.useState(!1),v=A(o,u=>{var m;return(m=s.itemRefCallback)==null?void 0:m.call(s,u,c,a)}),d=be(),h=r.useRef("touch"),S=()=>{a||(l.onValueChange(c),l.onOpenChange(!1))};if(c==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return n.jsx(Co,{scope:t,value:c,disabled:a,textId:d,isSelected:f,onItemTextChange:r.useCallback(u=>{w(m=>m||((u==null?void 0:u.textContent)??"").trim())},[]),children:n.jsx(fe.ItemSlot,{scope:t,value:c,disabled:a,textValue:x,children:n.jsx(M.div,{role:"option","aria-labelledby":d,"data-highlighted":_?"":void 0,"aria-selected":f&&_,"data-state":f?"checked":"unchecked","aria-disabled":a||void 0,"data-disabled":a?"":void 0,tabIndex:a?void 0:-1,...i,ref:v,onFocus:E(i.onFocus,()=>y(!0)),onBlur:E(i.onBlur,()=>y(!1)),onClick:E(i.onClick,()=>{h.current!=="mouse"&&S()}),onPointerUp:E(i.onPointerUp,()=>{h.current==="mouse"&&S()}),onPointerDown:E(i.onPointerDown,u=>{h.current=u.pointerType}),onPointerMove:E(i.onPointerMove,u=>{var m;h.current=u.pointerType,a?(m=s.onItemLeave)==null||m.call(s):h.current==="mouse"&&u.currentTarget.focus({preventScroll:!0})}),onPointerLeave:E(i.onPointerLeave,u=>{var m;u.currentTarget===document.activeElement&&((m=s.onItemLeave)==null||m.call(s))}),onKeyDown:E(i.onKeyDown,u=>{var b;((b=s.searchRef)==null?void 0:b.current)!==""&&u.key===" "||(lo.includes(u.key)&&S(),u.key===" "&&u.preventDefault())})})})})});dt.displayName=pe;var se="SelectItemText",ut=r.forwardRef((e,o)=>{const{__scopeSelect:t,className:c,style:a,...p}=e,i=Y(se,t),l=q(se,t),s=at(se,t),f=fo(se,t),[x,w]=r.useState(null),_=A(o,S=>w(S),s.onItemTextChange,S=>{var u;return(u=l.itemTextRefCallback)==null?void 0:u.call(l,S,s.value,s.disabled)}),y=x==null?void 0:x.textContent,v=r.useMemo(()=>n.jsx("option",{value:s.value,disabled:s.disabled,children:y},s.value),[s.disabled,s.value,y]),{onNativeOptionAdd:d,onNativeOptionRemove:h}=f;return G(()=>(d(v),()=>h(v)),[d,h,v]),n.jsxs(n.Fragment,{children:[n.jsx(M.span,{id:s.textId,...p,ref:_}),s.isSelected&&i.valueNode&&!i.valueNodeHasChildren?We.createPortal(p.children,i.valueNode):null]})});ut.displayName=se;var pt="SelectItemIndicator",ft=r.forwardRef((e,o)=>{const{__scopeSelect:t,...c}=e;return at(pt,t).isSelected?n.jsx(M.span,{"aria-hidden":!0,...c,ref:o}):null});ft.displayName=pt;var Te="SelectScrollUpButton",Io=r.forwardRef((e,o)=>{const t=q(Te,e.__scopeSelect),c=Pe(Te,e.__scopeSelect),[a,p]=r.useState(!1),i=A(o,c.onScrollButtonChange);return G(()=>{if(t.viewport&&t.isPositioned){let l=function(){const f=s.scrollTop>0;p(f)};const s=t.viewport;return l(),s.addEventListener("scroll",l),()=>s.removeEventListener("scroll",l)}},[t.viewport,t.isPositioned]),a?n.jsx(mt,{...e,ref:i,onAutoScroll:()=>{const{viewport:l,selectedItem:s}=t;l&&s&&(l.scrollTop=l.scrollTop-s.offsetHeight)}}):null});Io.displayName=Te;var Re="SelectScrollDownButton",_o=r.forwardRef((e,o)=>{const t=q(Re,e.__scopeSelect),c=Pe(Re,e.__scopeSelect),[a,p]=r.useState(!1),i=A(o,c.onScrollButtonChange);return G(()=>{if(t.viewport&&t.isPositioned){let l=function(){const f=s.scrollHeight-s.clientHeight,x=Math.ceil(s.scrollTop)<f;p(x)};const s=t.viewport;return l(),s.addEventListener("scroll",l),()=>s.removeEventListener("scroll",l)}},[t.viewport,t.isPositioned]),a?n.jsx(mt,{...e,ref:i,onAutoScroll:()=>{const{viewport:l,selectedItem:s}=t;l&&s&&(l.scrollTop=l.scrollTop+s.offsetHeight)}}):null});_o.displayName=Re;var mt=r.forwardRef((e,o)=>{const{__scopeSelect:t,onAutoScroll:c,...a}=e,p=q("SelectScrollButton",t),i=r.useRef(null),l=me(t),s=r.useCallback(()=>{i.current!==null&&(window.clearInterval(i.current),i.current=null)},[]);return r.useEffect(()=>()=>s(),[s]),G(()=>{var x;const f=l().find(w=>w.ref.current===document.activeElement);(x=f==null?void 0:f.ref.current)==null||x.scrollIntoView({block:"nearest"})},[l]),n.jsx(M.div,{"aria-hidden":!0,...a,ref:o,style:{flexShrink:0,...a.style},onPointerDown:E(a.onPointerDown,()=>{i.current===null&&(i.current=window.setInterval(c,50))}),onPointerMove:E(a.onPointerMove,()=>{var f;(f=p.onItemLeave)==null||f.call(p),i.current===null&&(i.current=window.setInterval(c,50))}),onPointerLeave:E(a.onPointerLeave,()=>{s()})})}),To="SelectSeparator",Ro=r.forwardRef((e,o)=>{const{__scopeSelect:t,...c}=e;return n.jsx(M.div,{"aria-hidden":!0,...c,ref:o})});Ro.displayName=To;var Ee="SelectArrow",Eo=r.forwardRef((e,o)=>{const{__scopeSelect:t,...c}=e,a=he(t),p=Y(Ee,t),i=q(Ee,t);return p.open&&i.position==="popper"?n.jsx($t,{...a,...c,ref:o}):null});Eo.displayName=Ee;function ht(e){return e===""||e===void 0}var gt=r.forwardRef((e,o)=>{const{value:t,...c}=e,a=r.useRef(null),p=A(o,a),i=Ft(t);return r.useEffect(()=>{const l=a.current,s=window.HTMLSelectElement.prototype,x=Object.getOwnPropertyDescriptor(s,"value").set;if(i!==t&&x){const w=new Event("change",{bubbles:!0});x.call(l,t),l.dispatchEvent(w)}},[i,t]),n.jsx(ze,{asChild:!0,children:n.jsx("select",{...c,ref:p,defaultValue:t})})});gt.displayName="BubbleSelect";function vt(e){const o=Ht(e),t=r.useRef(""),c=r.useRef(0),a=r.useCallback(i=>{const l=t.current+i;o(l),function s(f){t.current=f,window.clearTimeout(c.current),f!==""&&(c.current=window.setTimeout(()=>s(""),1e3))}(l)},[o]),p=r.useCallback(()=>{t.current="",window.clearTimeout(c.current)},[]);return r.useEffect(()=>()=>window.clearTimeout(c.current),[]),[t,a,p]}function xt(e,o,t){const a=o.length>1&&Array.from(o).every(f=>f===o[0])?o[0]:o,p=t?e.indexOf(t):-1;let i=bo(e,Math.max(p,0));a.length===1&&(i=i.filter(f=>f!==t));const s=i.find(f=>f.textValue.toLowerCase().startsWith(a.toLowerCase()));return s!==t?s:void 0}function bo(e,o){return e.map((t,c)=>e[(o+c)%e.length])}var Po=Ge,No=qe,Oo=Ze,jo=Je,Mo=Qe,Ao=et,Do=rt,Vo=ct,Lo=lt,ko=dt,St=ut,wt=ft;function yt({...e}){return n.jsx(jo,{...e,children:n.jsx(qt,{})})}yt.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{placeholder:{required:!1,tsType:{name:"string"},description:""}}};const Ct=r.forwardRef(({children:e,...o},t)=>n.jsxs(ko,{ref:t,...o,className:"flex cursor-pointer items-center justify-between border-b border-b-zinc-100 px-4 py-2 outline-none hover:bg-zinc-100",children:[n.jsx(St,{children:e}),n.jsx(wt,{children:n.jsx(Yt,{size:14,className:"text-yellow-600"})})]}));Ct.__docgenInfo={description:"",methods:[],displayName:"Item"};function It({children:e,error:o,...t}){return n.jsxs(Po,{...t,children:[e,o&&n.jsx("small",{className:"mt-1 text-xs text-rose-600",children:o})]})}It.__docgenInfo={description:"",methods:[],displayName:"Root",props:{error:{required:!1,tsType:{name:"string"},description:""}}};function _t({...e}){return n.jsx(Oo,{...e})}_t.__docgenInfo={description:"",methods:[],displayName:"Value"};function Tt({children:e,...o}){return n.jsx(Vo,{...o,children:e})}Tt.__docgenInfo={description:"",methods:[],displayName:"Group"};function Rt({children:e,...o}){return n.jsx(Lo,{...o,className:"mt-4 text-center text-zinc-500",children:e})}Rt.__docgenInfo={description:"",methods:[],displayName:"Label"};function Et({children:e,...o}){return n.jsx(Mo,{...o,children:e})}Et.__docgenInfo={description:"",methods:[],displayName:"Portal"};function bt({children:e,...o}){return n.jsx(Ao,{...o,className:"rounded bg-zinc-50",children:e})}bt.__docgenInfo={description:"",methods:[],displayName:"Content"};function Pt({children:e,...o}){return n.jsx(No,{...o,className:"flex w-full items-start justify-between rounded border-2 border-zinc-200 bg-zinc-50 p-2 outline-yellow-700",children:e})}Pt.__docgenInfo={description:"",methods:[],displayName:"Trigger"};function Nt({children:e,...o}){return n.jsx(Do,{...o,children:e})}Nt.__docgenInfo={description:"",methods:[],displayName:"Viewport"};function Ot({children:e,...o}){return n.jsx(St,{...o,children:e})}Ot.__docgenInfo={description:"",methods:[],displayName:"ItemText"};function jt({children:e,...o}){return n.jsx(wt,{...o,children:e})}jt.__docgenInfo={description:"",methods:[],displayName:"ItemIndicator"};const k={Root:It,Portal:Et,Trigger:Pt,Content:bt,Viewport:Nt,Group:Tt,ItemIndicator:jt,ItemText:Ot,Item:Ct,Label:Rt,Value:_t,Icon:yt},Jo={render:({...e})=>n.jsxs(k.Root,{...e,defaultValue:"item-1",children:[n.jsxs(k.Trigger,{children:[n.jsx(k.Value,{placeholder:"Selecione"}),n.jsx(k.Icon,{})]}),n.jsx(k.Portal,{children:n.jsx(k.Content,{children:n.jsx(k.Viewport,{children:n.jsxs(k.Group,{children:[n.jsx(k.Label,{children:"Items"}),Array.from({length:5}).map((o,t)=>n.jsxs(k.Item,{value:t.toString(),children:["Item - ",t]}))]})})})})]}),title:"Forms/Select",tags:["autodocs"]},ae={},de={args:{onValueChange:ro("onValueChange")}},ue={args:{error:"Any error here"}};var Me,Ae,De;ae.parameters={...ae.parameters,docs:{...(Me=ae.parameters)==null?void 0:Me.docs,source:{originalSource:"{}",...(De=(Ae=ae.parameters)==null?void 0:Ae.docs)==null?void 0:De.source}}};var Ve,Le,ke;de.parameters={...de.parameters,docs:{...(Ve=de.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    onValueChange: action("onValueChange")
  }
}`,...(ke=(Le=de.parameters)==null?void 0:Le.docs)==null?void 0:ke.source}}};var Be,He,Fe;ue.parameters={...ue.parameters,docs:{...(Be=ue.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    error: "Any error here"
  }
}`,...(Fe=(He=ue.parameters)==null?void 0:He.docs)==null?void 0:Fe.source}}};const Qo=["Default","Controlled","HasError"];export{de as Controlled,ae as Default,ue as HasError,Qo as __namedExportsOrder,Jo as default};
