import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{c as x}from"./index-CQJnhAbd.js";import{M as n,U as a,B as i}from"./user-B1Nl9pqv.js";import{A as l}from"./index-Dl2HYIcO.js";import{T as c}from"./index-CWVClC3q.js";import{B as M}from"./index-CIIPRYoT.js";import{H as j}from"./index-BRgwz2oW.js";import{c as h}from"./createLucideIcon-BT4tydPZ.js";import{S as I}from"./settings-Dg-RlEhs.js";import{L as y}from"./life-buoy-BXarWrHS.js";import"./index-C9rmetsa.js";import"./index-CE6WQixC.js";import"./index-BENMgSra.js";import"./index-BEn-qc9j.js";import"./index-Anqu5Gjn.js";import"./index-BUIDNy1Y.js";import"./index-wgz3LQUQ.js";import"./Combination-hW6GZtLN.js";import"./index-Dr8qfcuY.js";const H=x({base:"w-24"});function f({className:o,...t}){return e.jsx("img",{className:H({className:o}),...t})}f.__docgenInfo={description:"",methods:[],displayName:"Image"};const N=x({base:"fixed left-0 top-0 w-full bg-zinc-950"});function g({children:o,className:t,...p}){return e.jsx("header",{className:N({className:t}),...p,children:e.jsx("div",{className:"m-auto flex w-full max-w-6xl items-center justify-between p-4",children:o})})}g.__docgenInfo={description:"",methods:[],displayName:"Root"};const s={Root:g,Image:f},w=""+new URL("logo-white-CAYzcsj3.svg",import.meta.url).href;/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=h("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=h("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),$={component:s.Root,title:"Surfaces/Header",tags:["autodocs"]},r={render:({...o})=>e.jsxs(s.Root,{...o,children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s.Image,{src:w,alt:"Super Festval"}),e.jsxs(n.Root,{children:[e.jsx(n.Trigger,{children:e.jsx(v,{size:24,className:"text-zinc-50"})}),e.jsxs(n.Portal,{children:[e.jsx(n.Header,{children:e.jsx(j,{children:"Indicações RH"})}),e.jsxs(n.Content,{children:[e.jsx(n.Item,{href:"#",icon:a,className:"rounded-t",children:"Home"}),e.jsx(n.Item,{href:"#",icon:i,className:"rounded-b",children:"Indicações"})]})]})]})]}),e.jsxs(n.Root,{children:[e.jsx(n.Trigger,{children:e.jsx(l,{image:"https://placehold.co/600x400",username:"User"})}),e.jsxs(n.Portal,{children:[e.jsxs(n.Header,{children:[e.jsx(l,{image:"https://placehold.co/600x400",username:"User"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(c,{as:"strong",children:"Jhon Doe"}),e.jsx(c,{size:"xs",as:"small",children:"Administrador"})]})]}),e.jsxs(n.Content,{children:[e.jsx(n.Item,{href:"#",icon:a,children:"Perfil"}),e.jsx(n.Item,{href:"#",icon:i,children:"Notificações"}),e.jsx(n.Item,{href:"#",icon:I,children:"Configurações"})]}),e.jsxs(n.Footer,{children:[e.jsx(n.Item,{href:"#",icon:y,children:"Ajuda"}),e.jsx(M,{iconLeft:R,className:"w-full rounded-none rounded-b bg-yellow-600/25 text-yellow-800 hover:bg-yellow-600/50",children:"Sair"})]})]})]})]})};var m,d,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: ({
    ...rest
  }) => <Header.Root {...rest}>
      <div className="flex items-center gap-4">
        <Header.Image src={Logo} alt="Super Festval" />
        <Menu.Root>
          <Menu.Trigger>
            <MenuIcon size={24} className="text-zinc-50" />
          </Menu.Trigger>

          <Menu.Portal>
            <Menu.Header>
              <Heading>Indicações RH</Heading>
            </Menu.Header>
            <Menu.Content>
              <Menu.Item href="#" icon={User} className="rounded-t">
                Home
              </Menu.Item>
              <Menu.Item href="#" icon={Bell} className="rounded-b">
                Indicações
              </Menu.Item>
            </Menu.Content>
          </Menu.Portal>
        </Menu.Root>
      </div>

      <Menu.Root>
        <Menu.Trigger>
          <Avatar image="https://placehold.co/600x400" username="User" />
        </Menu.Trigger>

        <Menu.Portal>
          <Menu.Header>
            <Avatar image="https://placehold.co/600x400" username="User" />
            <div className="flex flex-col">
              <Text as="strong">Jhon Doe</Text>
              <Text size="xs" as="small">
                Administrador
              </Text>
            </div>
          </Menu.Header>
          <Menu.Content>
            <Menu.Item href="#" icon={User}>
              Perfil
            </Menu.Item>
            <Menu.Item href="#" icon={Bell}>
              Notificações
            </Menu.Item>
            <Menu.Item href="#" icon={Settings}>
              Configurações
            </Menu.Item>
          </Menu.Content>
          <Menu.Footer>
            <Menu.Item href="#" icon={LifeBuoy}>
              Ajuda
            </Menu.Item>
            <Button iconLeft={LogOut} className="w-full rounded-none rounded-b bg-yellow-600/25 text-yellow-800 hover:bg-yellow-600/50">
              Sair
            </Button>
          </Menu.Footer>
        </Menu.Portal>
      </Menu.Root>
    </Header.Root>
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const q=["Default"];export{r as Default,q as __namedExportsOrder,$ as default};
