import{j as t}from"./jsx-runtime-z8MfsBtr.js";import{r as q}from"./index-BEn-qc9j.js";import{R as v,T as L,P,C as _}from"./index-BENMgSra.js";import{a as b,b as A,C}from"./index-DK30o7V-.js";import{B as E}from"./index-CIIPRYoT.js";import{t as M,c as N,f as c}from"./format-BK12zdBr.js";import{C as z}from"./calendar-1-CTyKSFdP.js";import"./index-C9rmetsa.js";import"./index-Anqu5Gjn.js";import"./index-BUIDNy1Y.js";import"./index-wgz3LQUQ.js";import"./Combination-hW6GZtLN.js";import"./index-Dr8qfcuY.js";import"./index-CQJnhAbd.js";import"./createLucideIcon-BT4tydPZ.js";function B(e,a,r){const{years:s=0,months:n=0,weeks:i=0,days:o=0,hours:j=0,minutes:w=0,seconds:R=0}=a,p=M(e,r==null?void 0:r.in),u=n||s?b(p,n+s*12):p,T=o||i?A(u,o+i*7):u,S=w+j*60,k=(R+S*60)*1e3;return N(e,+T+k)}function h({defaultValue:e,onValueChange:a,mode:r="single"}){const[s,n]=q.useState(()=>r==="single"?new Date:{from:e?e.from:new Date,to:e&&e.to?e.to:B(new Date,{days:15})}),i=o=>{n(o),a&&r==="range"&&a(o),a&&r==="single"&&a(o)};return t.jsxs(v,{children:[t.jsx(L,{children:t.jsxs(E,{variant:"ghost",className:"w-full border border-zinc-300",type:"button",children:[t.jsx(z,{size:14}),r==="single"?c(s,"dd/LL/yyyy"):c(s.from||new Date,"dd/LL/yyyy")+" - "+c(s.to||new Date,"dd/LL/yyyy")]})}),t.jsx(P,{children:t.jsx(_,{align:"start",children:t.jsx(C,{required:!0,className:"mt-2",mode:r,selected:s,onSelect:i})})})]})}h.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{mode:{required:!1,tsType:{name:"Mode"},description:"",defaultValue:{value:'"single"',computed:!1}},defaultValue:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  from: Date;\r
  to?: Date;\r
}`,signature:{properties:[{key:"from",value:{name:"Date",required:!0}},{key:"to",value:{name:"Date",required:!1}}]}},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(range: DateRange | Date) => void",signature:{arguments:[{type:{name:"union",raw:"DateRange | Date",elements:[{name:"DateRange"},{name:"Date"}]},name:"range"}],return:{name:"void"}}},description:""}}};const re={component:({...e})=>t.jsx(h,{...e}),title:"Forms/DatePicker",tags:["autodocs"]},d={},m={args:{mode:"range"}};var l,g,y;d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(y=(g=d.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,D,x;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    mode: "range"
  }
}`,...(x=(D=m.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};const te=["Single","Range"];export{m as Range,d as Single,te as __namedExportsOrder,re as default};
