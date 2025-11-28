import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as N}from"./index--qcDGAq6.js";import{C as c}from"./index-Bsfu_9WT.js";import{f as K}from"./index-BEO02Wfb.js";import"./index-yBjzXJbu.js";import"./index-C66Dxnp2.js";import"./check-BExW4hvz.js";import"./createLucideIcon-DbwIO29z.js";const U={component:s=>e.jsx(c,{...s}),title:"Forms/Checkbox",args:{disabled:!1,value:!1,defaultChecked:!1,onValueChange:K()},argTypes:{disabled:{control:{type:"boolean"}},value:{control:{type:"boolean"}},defaultChecked:{control:{type:"boolean"}}},tags:["autodocs"]},t={args:{value:!0,disabled:!1}},l={args:{value:!1}},o={args:{value:!1,disabled:!0}},d={render:()=>{const[s,a]=N.useState([]),C=n=>{if(s.includes(n)){a(s.filter(r=>r!==n));return}a(r=>[...r,n])},v=()=>{if(s.length>=5){a([]);return}a([0,1,2,3,4])};return e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"border-b border-b-gray-600 p-2",children:e.jsx(c,{onValueChange:()=>v()})}),e.jsx("th",{className:"border-b border-b-gray-600 p-2",children:e.jsx("p",{children:"Title"})})]})}),e.jsx("tbody",{children:Array.from({length:5}).map((n,r)=>e.jsxs("tr",{children:[e.jsx("td",{className:"border-b border-b-gray-600 p-2",children:e.jsx(c,{defaultChecked:s.includes(r),onValueChange:()=>C(r)})}),e.jsx("td",{className:"border-b border-b-gray-600 p-2",children:e.jsxs("p",{children:["Example ",r]})})]},r))})]})},args:{value:!1,disabled:!0}};var b,u,i;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: true,
    disabled: false
  }
}`,...(i=(u=t.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var p,m,h;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: false
  }
}`,...(h=(m=l.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,y,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: false,
    disabled: true
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var x,k,j;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [keys, setKeys] = useState<number[]>([]);
    const select = (key: number) => {
      if (keys.includes(key)) {
        setKeys(keys.filter(value => value !== key));
        return;
      }
      setKeys(prev => [...prev, key]);
    };
    const selectAll = () => {
      if (keys.length >= 5) {
        setKeys([]);
        return;
      }
      setKeys([0, 1, 2, 3, 4]);
    };
    return <table>\r
        <thead>\r
          <tr>\r
            <th className="border-b border-b-gray-600 p-2">\r
              <Checkbox onValueChange={() => selectAll()} />\r
            </th>\r
            <th className="border-b border-b-gray-600 p-2">\r
              <p>Title</p>\r
            </th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          {Array.from({
          length: 5
        }).map((_, index) => <tr key={index}>\r
              <td className="border-b border-b-gray-600 p-2">\r
                <Checkbox defaultChecked={keys.includes(index)} onValueChange={() => select(index)} />\r
              </td>\r
              <td className="border-b border-b-gray-600 p-2">\r
                <p>Example {index}</p>\r
              </td>\r
            </tr>)}\r
        </tbody>\r
      </table>;
  },
  args: {
    value: false,
    disabled: true
  }
}`,...(j=(k=d.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};const F=["Checked","Unchecked","Disabled","Multiple"];export{t as Checked,o as Disabled,d as Multiple,l as Unchecked,F as __namedExportsOrder,U as default};
