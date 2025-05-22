import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as b}from"./index--qcDGAq6.js";import{R as v,T as M,P as A,C}from"./index-BZs7obFb.js";import{a as E,b as N,C as z}from"./index-D4gYyoCC.js";import{B}from"./index-DvclVnJF.js";import{t as F,c as W,f as p}from"./format-BK12zdBr.js";import{C as I}from"./calendar-1-CkqyQrtz.js";import"./index-yBjzXJbu.js";import"./index-CM8U5CGU.js";import"./index-BqH_RzhV.js";import"./index-fNjTmf9T.js";import"./Combination-KPLuhlwT.js";import"./index-Cx-X-mqx.js";import"./index-DhzuvZLO.js";import"./index-CN9BaGIw.js";import"./index-C66Dxnp2.js";import"./createLucideIcon-DbwIO29z.js";function O(e,n,r){const{years:a=0,months:o=0,weeks:i=0,days:s=0,hours:T=0,minutes:k=0,seconds:q=0}=n,u=F(e,r==null?void 0:r.in),l=o||a?E(u,o+a*12):u,L=s||i?N(l,s+i*7):l,P=k+T*60,_=(q+P*60)*1e3;return W(e,+L+_)}const S=({defaultValue:e,onValueChange:n,mode:r})=>{const[a,o]=b.useState(()=>r==="single"&&e?e:r==="single"&&!e?new Date:e&&r!=="single"?{from:e.from,to:e.to}:{from:e.from,to:e.to?e.from:O(new Date,{days:15})}),i=s=>{o(s),n&&r==="range"&&n(s),n&&r==="single"&&n(s)};return t.jsxs(v,{children:[t.jsx(M,{children:t.jsxs(B,{variant:"ghost",className:"w-full border border-zinc-300",type:"button",children:[t.jsx(I,{size:14}),r==="single"?p(a,"dd/LL/yyyy"):p(a.from||new Date,"dd/LL/yyyy")+" - "+p(a.to||new Date,"dd/LL/yyyy")]})}),t.jsx(A,{children:t.jsx(C,{align:"start",children:t.jsx(z,{required:!0,className:"mt-2",mode:r,selected:a,onSelect:i})})})]})};S.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{mode:{required:!0,tsType:{name:"Mode"},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"Date | RangeValue",elements:[{name:"Date"},{name:"signature",type:"object",raw:"{ from: Date; to?: Date }",signature:{properties:[{key:"from",value:{name:"Date",required:!0}},{key:"to",value:{name:"Date",required:!1}}]}}]},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(range: DateRange | Date) => void",signature:{arguments:[{type:{name:"union",raw:"DateRange | Date",elements:[{name:"DateRange"},{name:"Date"}]},name:"range"}],return:{name:"void"}}},description:""}}};const ie={component:({...e})=>t.jsx(S,{...e}),title:"Forms/DatePicker",tags:["autodocs"]},m={args:{mode:"single",defaultValue:new Date}},d={args:{mode:"range",defaultValue:{from:new Date,to:new Date}}},c={args:{mode:"multiple",defaultValue:{from:new Date,to:new Date}}};var g,f,D;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    mode: "single",
    defaultValue: new Date()
  }
}`,...(D=(f=m.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var y,w,x;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    mode: "range",
    defaultValue: {
      from: new Date(),
      to: new Date()
    }
  }
}`,...(x=(w=d.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var h,j,R;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    mode: "multiple",
    defaultValue: {
      from: new Date(),
      to: new Date()
    }
  }
}`,...(R=(j=c.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};const me=["Single","Range","Multiple"];export{c as Multiple,d as Range,m as Single,me as __namedExportsOrder,ie as default};
