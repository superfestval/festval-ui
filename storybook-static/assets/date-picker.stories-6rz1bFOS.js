import{j as r}from"./jsx-runtime-BjgbQsUx.js";import{t as S,a as L,b as M,c as q,f as m,C as P}from"./index-uXUwsKTt.js";import{B as _}from"./index-CoOt8dDS.js";import{R as b,T as A,P as C,C as E}from"./index-Bhp5quFJ.js";import{r as N}from"./index-BuYn5Wpo.js";import{c as z}from"./createLucideIcon-BfzO-L_U.js";import"./index-D2MAbzvX.js";import"./index-DW2zCSF8.js";import"./Combination-DzJNEkvQ.js";import"./index-BQoVKf07.js";import"./index-BG6K9iAw.js";import"./index-BIm0odtm.js";import"./index-CkqBjHd8.js";import"./index-BXfMUdj7.js";function B(e,a,t){const{years:s=0,months:o=0,weeks:i=0,days:n=0,hours:k=0,minutes:v=0,seconds:j=0}=a,p=S(e,t==null?void 0:t.in),u=o||s?L(p,o+s*12):p,w=n||i?M(u,n+i*7):u,R=v+k*60,T=(j+R*60)*1e3;return q(e,+w+T)}/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=z("Calendar1",[["path",{d:"M11 14h1v4",key:"fy54vd"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]]);function x({defaultValue:e,onValueChange:a,mode:t="single"}){const[s,o]=N.useState(()=>t==="single"?new Date:{from:e?e.from:new Date,to:e&&e.to?e.to:B(new Date,{days:15})}),i=n=>{o(n),a&&t==="range"&&a(n),a&&t==="single"&&a(n)};return r.jsxs(b,{children:[r.jsx(A,{children:r.jsxs(_,{variant:"ghost",className:"w-full border border-zinc-300",type:"button",children:[r.jsx(F,{size:14}),t==="single"?m(s,"dd/LL/yyyy"):m(s.from||new Date,"dd/LL/yyyy")+" - "+m(s.to||new Date,"dd/LL/yyyy")]})}),r.jsx(C,{children:r.jsx(E,{children:r.jsx(P,{required:!0,className:"mt-4",mode:t,selected:s,onSelect:i})})})]})}x.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{mode:{required:!1,tsType:{name:"Mode"},description:"",defaultValue:{value:'"single"',computed:!1}},defaultValue:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  from: Date;\r
  to?: Date;\r
}`,signature:{properties:[{key:"from",value:{name:"Date",required:!0}},{key:"to",value:{name:"Date",required:!1}}]}},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(range: DateRange | Date) => void",signature:{arguments:[{type:{name:"union",raw:"DateRange | Date",elements:[{name:"DateRange"},{name:"Date"}]},name:"range"}],return:{name:"void"}}},description:""}}};const te={component:({...e})=>r.jsx(x,{...e}),title:"Forms/DatePicker",tags:["autodocs"]},d={},c={args:{mode:"range"}};var y,l,g;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(g=(l=d.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var f,D,h;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    mode: "range"
  }
}`,...(h=(D=c.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};const re=["Single","Range"];export{c as Range,d as Single,re as __namedExportsOrder,te as default};
