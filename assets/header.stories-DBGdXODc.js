import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{c as x}from"./index-DW2zCSF8.js";import{M as r,U as a,B as i}from"./user-B4dxeEza.js";import{A as l}from"./index-C7xGP5Z4.js";import{T as c}from"./index-DG2JSD_H.js";import{B as M}from"./index-CoOt8dDS.js";import{H as j}from"./index-C6KdhitA.js";import{c as h}from"./createLucideIcon-BfzO-L_U.js";import{S as I}from"./settings-t4C7RlbB.js";import{L as y}from"./life-buoy-94GQ_62y.js";import"./index-D2MAbzvX.js";import"./index-DJvMY-OZ.js";import"./index-Bhp5quFJ.js";import"./index-BuYn5Wpo.js";import"./Combination-DzJNEkvQ.js";import"./index-BQoVKf07.js";import"./index-BG6K9iAw.js";import"./index-BIm0odtm.js";import"./index-CkqBjHd8.js";import"./index-BXfMUdj7.js";const H=x({base:"w-24"});function f({className:n,...t}){return e.jsx("img",{className:H({className:n}),...t})}f.__docgenInfo={description:"",methods:[],displayName:"Image"};const N=x({base:"fixed left-0 top-0 w-full bg-zinc-950"});function g({children:n,className:t,...p}){return e.jsx("header",{className:N({className:t}),...p,children:e.jsx("div",{className:"m-auto flex w-full max-w-6xl items-center justify-between p-4",children:n})})}g.__docgenInfo={description:"",methods:[],displayName:"Root"};const s={Root:g,Image:f},w=""+new URL("logo-white-CAYzcsj3.svg",import.meta.url).href;/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=h("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=h("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),q={component:s.Root,title:"Surfaces/Header",tags:["autodocs"]},o={render:({...n})=>e.jsxs(s.Root,{...n,children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s.Image,{src:w,alt:"Super Festval"}),e.jsxs(r.Root,{children:[e.jsx(r.Trigger,{children:e.jsx(v,{size:24,className:"text-zinc-50"})}),e.jsxs(r.Portal,{children:[e.jsx(r.Header,{children:e.jsx(j,{children:"Indicações RH"})}),e.jsxs(r.Content,{children:[e.jsx(r.Item,{href:"#",icon:a,className:"rounded-t",children:"Home"}),e.jsx(r.Item,{href:"#",icon:i,className:"rounded-b",children:"Indicações"})]})]})]})]}),e.jsxs(r.Root,{children:[e.jsx(r.Trigger,{children:e.jsx(l,{image:"https://placehold.co/600x400",username:"User"})}),e.jsxs(r.Portal,{children:[e.jsxs(r.Header,{children:[e.jsx(l,{image:"https://placehold.co/600x400",username:"User"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(c,{as:"strong",children:"Jhon Doe"}),e.jsx(c,{size:"xs",as:"small",children:"Administrador"})]})]}),e.jsxs(r.Content,{children:[e.jsx(r.Item,{href:"#",icon:a,children:"Perfil"}),e.jsx(r.Item,{href:"#",icon:i,children:"Notificações"}),e.jsx(r.Item,{href:"#",icon:I,children:"Configurações"})]}),e.jsxs(r.Footer,{children:[e.jsx(r.Item,{href:"#",icon:y,children:"Ajuda"}),e.jsx(M,{iconLeft:R,className:"w-full rounded-none rounded-b bg-yellow-600/25 text-yellow-800 hover:bg-yellow-600/50",children:"Sair"})]})]})]})]})};var m,d,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => <Header.Root {...rest}>\r
      <div className="flex items-center gap-4">\r
        <Header.Image src={Logo} alt="Super Festval" />\r
        <Menu.Root>\r
          <Menu.Trigger>\r
            <MenuIcon size={24} className="text-zinc-50" />\r
          </Menu.Trigger>\r
\r
          <Menu.Portal>\r
            <Menu.Header>\r
              <Heading>Indicações RH</Heading>\r
            </Menu.Header>\r
            <Menu.Content>\r
              <Menu.Item href="#" icon={User} className="rounded-t">\r
                Home\r
              </Menu.Item>\r
              <Menu.Item href="#" icon={Bell} className="rounded-b">\r
                Indicações\r
              </Menu.Item>\r
            </Menu.Content>\r
          </Menu.Portal>\r
        </Menu.Root>\r
      </div>\r
\r
      <Menu.Root>\r
        <Menu.Trigger>\r
          <Avatar image="https://placehold.co/600x400" username="User" />\r
        </Menu.Trigger>\r
\r
        <Menu.Portal>\r
          <Menu.Header>\r
            <Avatar image="https://placehold.co/600x400" username="User" />\r
            <div className="flex flex-col">\r
              <Text as="strong">Jhon Doe</Text>\r
              <Text size="xs" as="small">\r
                Administrador\r
              </Text>\r
            </div>\r
          </Menu.Header>\r
          <Menu.Content>\r
            <Menu.Item href="#" icon={User}>\r
              Perfil\r
            </Menu.Item>\r
            <Menu.Item href="#" icon={Bell}>\r
              Notificações\r
            </Menu.Item>\r
            <Menu.Item href="#" icon={Settings}>\r
              Configurações\r
            </Menu.Item>\r
          </Menu.Content>\r
          <Menu.Footer>\r
            <Menu.Item href="#" icon={LifeBuoy}>\r
              Ajuda\r
            </Menu.Item>\r
            <Button iconLeft={LogOut} className="w-full rounded-none rounded-b bg-yellow-600/25 text-yellow-800 hover:bg-yellow-600/50">\r
              Sair\r
            </Button>\r
          </Menu.Footer>\r
        </Menu.Portal>\r
      </Menu.Root>\r
    </Header.Root>
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const G=["Default"];export{o as Default,G as __namedExportsOrder,q as default};
