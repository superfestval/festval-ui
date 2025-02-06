import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{r as l}from"./index-BEn-qc9j.js";import{c as n}from"./createLucideIcon-BT4tydPZ.js";import{T as c}from"./index-CWVClC3q.js";import{H as _}from"./index-BRgwz2oW.js";import{A as N}from"./index-Dl2HYIcO.js";import{S as C}from"./settings-Dg-RlEhs.js";import{L as S}from"./life-buoy-BXarWrHS.js";import"./index-C9rmetsa.js";import"./index-CQJnhAbd.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=n("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=n("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=n("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=n("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=n("Sticker",[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",key:"1wis1t"}],["path",{d:"M14 3v4a2 2 0 0 0 2 2h4",key:"36rjfy"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1",key:"1vvgv3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=n("Ticket",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]]);function P(){const[t,a]=l.useState("open");return{state:t,toggle:()=>a(t==="open"?"close":"open")}}const x=l.createContext({});function f({children:t}){const a=P();return e.jsx(x.Provider,{value:a,children:t})}const o=()=>l.useContext(x);f.__docgenInfo={description:"",methods:[],displayName:"SidebarProvider"};function g({...t}){const{toggle:a,state:r}=o();return r==="open"?e.jsx(z,{...t,onClick:a}):e.jsx(L,{...t,onClick:a})}g.__docgenInfo={description:"",methods:[],displayName:"Icon"};function y({children:t,icon:a,...r}){const i=a,{state:m}=o();return e.jsxs("button",{...r,"data-state":m,className:"flex w-full gap-2 bg-zinc-50 p-4 text-left transition-colors hover:bg-zinc-100 data-[state=close]:max-w-24 data-[state=close]:justify-center",children:[i&&e.jsx(i,{}),e.jsx(c,{as:"strong","data-state":m,className:"data-[state=close]:hidden",children:t})]})}y.__docgenInfo={description:"",methods:[],displayName:"Item",props:{icon:{required:!1,tsType:{name:"ElementType"},description:""}}};function j({children:t,...a}){return e.jsx(f,{...a,children:t})}j.__docgenInfo={description:"",methods:[],displayName:"Root"};function v({children:t,...a}){const{state:r}=o();return e.jsx(_,{"data-state":r,size:"sm",className:"data-[state=close]:hidden",...a,children:t})}v.__docgenInfo={description:"",methods:[],displayName:"Title",props:{as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""}}};function k({user:t,children:a,...r}){const{state:i}=o();return e.jsxs("div",{...r,"data-state":i,className:"w-full rounded-b data-[state=close]:max-w-24",children:[a,e.jsxs("div",{className:"flex items-center gap-2 rounded-b border-t border-t-zinc-200 bg-zinc-50 p-4",children:[e.jsx(N,{image:t.image,username:t.name}),e.jsxs("div",{"data-state":i,className:"flex flex-col data-[state=close]:hidden",children:[e.jsx(c,{size:"lg",as:"strong",children:t.name}),e.jsx(c,{size:"xs",as:"small",className:"-mt-1 text-zinc-400",children:t.role})]})]})]})}k.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{user:{required:!0,tsType:{name:"signature",type:"object",raw:`{\r
  name: string;\r
  image: string;\r
  role: string;\r
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"image",value:{name:"string",required:!0}},{key:"role",value:{name:"string",required:!0}}]}},description:""}}};function b({children:t,...a}){const{state:r}=o();return e.jsx("div",{...a,"data-state":r,className:"flex h-16 w-full items-center justify-between rounded-t border-b border-b-zinc-200 p-4 data-[state=close]:max-w-24 data-[state=close]:justify-center",children:t})}b.__docgenInfo={description:"",methods:[],displayName:"Header"};function w({children:t,...a}){return e.jsx("div",{...a,className:"w-full",children:t})}w.__docgenInfo={description:"",methods:[],displayName:"Content"};function I({children:t,...a}){const{state:r}=o();return e.jsx("div",{...a,"data-state":r,className:"parent group grid h-full w-full max-w-60 grid-rows-[auto,1fr,auto] gap-4 rounded bg-zinc-50 data-[state=close]:max-w-24",children:t})}I.__docgenInfo={description:"",methods:[],displayName:"Container"};const s={Root:j,Content:w,Container:I,Header:b,Footer:k,Item:y,Title:v,Icon:g},G={render:()=>e.jsx("div",{className:"h-screen",children:e.jsx(s.Root,{children:e.jsxs(s.Container,{children:[e.jsxs(s.Header,{children:[e.jsx(s.Title,{children:"Menu"}),e.jsx(s.Icon,{})]}),e.jsxs(s.Content,{children:[e.jsx(s.Item,{icon:M,children:"Dashboard"}),e.jsx(s.Item,{icon:T,children:"Chats"}),e.jsx(s.Item,{icon:H,children:"Tickets"}),e.jsx(s.Item,{icon:q,children:"Feedbacks"})]}),e.jsxs(s.Footer,{user:{name:"Jhon Doe",image:"https://placehold.jp/150x150.png",role:"Administrador"},children:[e.jsx(s.Item,{icon:C,children:"Configuraçoes"}),e.jsx(s.Item,{icon:S,children:"Ajuda"})]})]})})}),title:"Surfaces/Sidebar",tags:["autodocs"]},d={};var p,h,u;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(h=d.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const K=["SidebarDefault"];export{d as SidebarDefault,K as __namedExportsOrder,G as default};
