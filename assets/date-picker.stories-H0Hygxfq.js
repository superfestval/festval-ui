import{j as t}from"./jsx-runtime-z8MfsBtr.js";import{r as b}from"./index-BEn-qc9j.js";import{R as v,T as C,P as M,C as A}from"./index-BuZeDFlD.js";import{a as E,b as N,C as z}from"./index-DK30o7V-.js";import{B}from"./index-WPAokm3T.js";import{t as F,c as W,f as p}from"./format-BK12zdBr.js";import{C as I}from"./calendar-1-CTyKSFdP.js";import"./index-C9rmetsa.js";import"./index-CFGT8jr2.js";import"./index-BUIDNy1Y.js";import"./index-wgz3LQUQ.js";import"./index-BroPwuUX.js";import"./floating-ui.react-dom-DKjcifLt.js";import"./index-De76eAE3.js";import"./Combination-D8i3ZibE.js";import"./index-CQJnhAbd.js";import"./createLucideIcon-BT4tydPZ.js";function O(e,s,r){const{years:a=0,months:o=0,weeks:i=0,days:n=0,hours:T=0,minutes:k=0,seconds:q=0}=s,u=F(e,r==null?void 0:r.in),l=o||a?E(u,o+a*12):u,L=n||i?N(l,n+i*7):l,P=k+T*60,_=(q+P*60)*1e3;return W(e,+L+_)}const S=({defaultValue:e,onValueChange:s,mode:r})=>{const[a,o]=b.useState(()=>r==="single"&&e?e:r==="single"&&!e?new Date:e&&r!=="single"?{from:e.from,to:e.to}:{from:e.from,to:e.to?e.from:O(new Date,{days:15})}),i=n=>{o(n),s&&r==="range"&&s(n),s&&r==="single"&&s(n)};return t.jsxs(v,{children:[t.jsx(C,{asChild:!0,children:t.jsxs(B,{variant:"ghost",className:"w-full border border-zinc-300",type:"button",children:[t.jsx(I,{size:14}),r==="single"?p(a,"dd/LL/yyyy"):p(a.from||new Date,"dd/LL/yyyy")+" - "+p(a.to||new Date,"dd/LL/yyyy")]})}),t.jsx(M,{children:t.jsx(A,{align:"start",children:t.jsx(z,{required:!0,className:"mt-2",mode:r,selected:a,onSelect:i})})})]})};S.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{mode:{required:!0,tsType:{name:"Mode"},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"Date | RangeValue",elements:[{name:"Date"},{name:"signature",type:"object",raw:"{ from: Date; to?: Date }",signature:{properties:[{key:"from",value:{name:"Date",required:!0}},{key:"to",value:{name:"Date",required:!1}}]}}]},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(range: DateRange | Date) => void",signature:{arguments:[{type:{name:"union",raw:"DateRange | Date",elements:[{name:"DateRange"},{name:"Date"}]},name:"range"}],return:{name:"void"}}},description:""}}};const ie={component:({...e})=>t.jsx(S,{...e}),title:"Forms/DatePicker",tags:["autodocs"]},m={args:{mode:"single",defaultValue:new Date}},d={args:{mode:"range",defaultValue:{from:new Date,to:new Date}}},c={args:{mode:"multiple",defaultValue:{from:new Date,to:new Date}}};var g,f,D;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
