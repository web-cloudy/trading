(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[150],{1990:function(e,o,t){"use strict";t.r(o);var r=t(0),n=t(1087),c=t(1088),a=t(1124),i=t(466),l=t(478),p=t(15),s=t(463),d=t(725),j=t(904),m=t(905),g=t(6),u=function(){var e=Object(r.useState)(!1),o=Object(p.a)(e,2),t=o[0],n=o[1];return Object(g.jsxs)(r.Fragment,{children:[Object(g.jsx)(s.a.Ripple,{color:"primary",outline:!0,id:"controlledPopover",children:"Controlled"}),Object(g.jsxs)(d.a,{placement:"top",target:"controlledPopover",isOpen:t,toggle:function(){return n(!t)},children:[Object(g.jsx)(j.a,{children:"Controlled Popover"}),Object(g.jsx)(m.a,{children:"Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie."})]})]})},h=t(903),b=function(){return Object(g.jsxs)(r.Fragment,{children:[Object(g.jsx)(s.a,{color:"primary",outline:!0,id:"uncontrolledPopover",children:"Uncontrolled"}),Object(g.jsxs)(h.a,{placement:"top",target:"uncontrolledPopover",children:[Object(g.jsx)(j.a,{children:"Uncontrolled Popover"}),Object(g.jsx)(m.a,{children:"Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie."})]})]})},v=function(){return Object(g.jsxs)("div",{className:"demo-inline-spacing",children:[Object(g.jsx)(s.a.Ripple,{color:"primary",outline:!0,id:"popTop",children:"Top"}),Object(g.jsxs)(h.a,{placement:"top",target:"popTop",children:[Object(g.jsx)(j.a,{children:"Popover Top"}),Object(g.jsx)(m.a,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."})]}),Object(g.jsx)(s.a.Ripple,{color:"primary",outline:!0,id:"popRight",children:"Right"}),Object(g.jsxs)(h.a,{placement:"right",target:"popRight",children:[Object(g.jsx)(j.a,{children:"Popover Right"}),Object(g.jsx)(m.a,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."})]}),Object(g.jsx)(s.a.Ripple,{color:"primary",outline:!0,id:"popBottom",children:"Bottom"}),Object(g.jsxs)(h.a,{placement:"bottom",target:"popBottom",children:[Object(g.jsx)(j.a,{children:"Popover Bottom"}),Object(g.jsx)(m.a,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."})]}),Object(g.jsx)(s.a.Ripple,{color:"primary",outline:!0,id:"popLeft",children:"Left"}),Object(g.jsxs)(h.a,{placement:"left",target:"popLeft",children:[Object(g.jsx)(j.a,{children:"Popover Left"}),Object(g.jsx)(m.a,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."})]})]})},x=function(){return Object(g.jsxs)("div",{className:"demo-inline-spacing",children:[Object(g.jsx)(s.a.Ripple,{color:"primary",outline:!0,id:"popFocus",children:"Focus"}),Object(g.jsxs)(h.a,{trigger:"focus",placement:"top",target:"popFocus",children:[Object(g.jsx)(j.a,{children:"Focus Trigger"}),Object(g.jsx)(m.a,{children:"Focusing on the trigging element makes this popover appear. Blurring (clicking away) makes it disappear. You cannot select this text as the popover will disappear when you try."})]}),Object(g.jsx)(s.a.Ripple,{color:"primary",outline:!0,id:"popClick",children:"Click"}),Object(g.jsxs)(h.a,{trigger:"click",placement:"top",target:"popClick",children:[Object(g.jsx)(j.a,{children:"Click Trigger"}),Object(g.jsx)(m.a,{children:"Clicking on the triggering element makes this popover appear. Clicking on it again will make it disappear. You can select this text, but clicking away (somewhere other than the triggering element) will not dismiss this popover."})]}),Object(g.jsx)(s.a.Ripple,{trigger:"legacy",color:"primary",outline:!0,id:"popLegacy",children:"Legacy"}),Object(g.jsxs)(h.a,{placement:"top",target:"popLegacy",children:[Object(g.jsx)(j.a,{children:"Legacy Trigger"}),Object(g.jsx)(m.a,{children:'Legacy is a reactstrap special trigger value (outside of bootstrap\'s spec/standard). Before reactstrap correctly supported click and focus, it had a hybrid which was very useful and has been brought back as trigger="legacy". One advantage of the legacy trigger is that it allows the popover text to be selected while also closing when clicking outside the triggering element and popover itself.'})]})]})},O=t(229),P=t.n(O),y=Object(g.jsx)("pre",{children:Object(g.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap'\n\nconst PopoverControlled = () => {\n  const [popoverOpen, setPopoverOpen] = useState(false)\n\n  return (\n    <React.Fragment>\n      <Button.Ripple color='primary' outline id='controlledPopover'>\n        Controlled\n      </Button.Ripple>\n      <Popover\n        placement='top'\n        target='controlledPopover'\n        isOpen={popoverOpen}\n        toggle={() => setPopoverOpen(!popoverOpen)}\n      >\n        <PopoverHeader>Controlled Popover</PopoverHeader>\n        <PopoverBody>\n          Macaroon chocolate candy. I love carrot cake gingerbread cake lemon\n          drops. Muffin sugar plum marzipan pie.\n        </PopoverBody>\n      </Popover>\n    </React.Fragment>\n  )\n}\nexport default PopoverControlled\n"})}),f=Object(g.jsx)("pre",{children:Object(g.jsx)("code",{className:"language-jsx",children:"\n\nimport {\n  Button,\n  UncontrolledPopover,\n  PopoverHeader,\n  PopoverBody\n} from 'reactstrap'\n\nconst PopoverUncontrolled = () => {\n  return (\n    <React.Fragment>\n      <Button color='primary' outline id='uncontrolledPopover'>\n        Uncontrolled\n      </Button>\n      <UncontrolledPopover placement='top' target='uncontrolledPopover'>\n        <PopoverHeader>Uncontrolled Popover</PopoverHeader>\n        <PopoverBody>\n          Macaroon chocolate candy. I love carrot cake gingerbread cake lemon\n          drops. Muffin sugar plum marzipan pie.\n        </PopoverBody>\n      </UncontrolledPopover>\n    </React.Fragment>\n  )\n}\nexport default PopoverUncontrolled\n"})}),B=Object(g.jsx)("pre",{children:Object(g.jsx)("code",{className:"language-jsx",children:"\n\nimport { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'\n\nconst PopoverPositions = () => {\n  return (\n    <div className='demo-inline-spacing'>\n      <Button.Ripple color='primary' outline id='popTop'>\n        Top\n      </Button.Ripple>\n      <UncontrolledPopover placement='top' target='popTop'>\n        <PopoverHeader>Popover Top</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.</PopoverBody>\n      </UncontrolledPopover>\n\n      <Button.Ripple color='primary' outline id='popRight'>\n        Right\n      </Button.Ripple>\n      <UncontrolledPopover placement='right' target='popRight'>\n        <PopoverHeader>Popover Right</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.</PopoverBody>\n      </UncontrolledPopover>\n\n      <Button.Ripple color='primary' outline id='popBottom'>\n        Bottom\n      </Button.Ripple>\n      <UncontrolledPopover placement='bottom' target='popBottom'>\n        <PopoverHeader>Popover Bottom</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.</PopoverBody>\n      </UncontrolledPopover>\n\n      <Button.Ripple color='primary' outline id='popLeft'>\n        Left\n      </Button.Ripple>\n      <UncontrolledPopover placement='left' target='popLeft'>\n        <PopoverHeader>Popover Left</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.</PopoverBody>\n      </UncontrolledPopover>\n    </div>\n  )\n}\n\nexport default PopoverPositions\n"})}),k=Object(g.jsx)("pre",{children:Object(g.jsx)("code",{className:"language-jsx",children:"\n\nimport { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'\n\nconst PopoverTriggers = () => {\n  return (\n    <div className='demo-inline-spacing'>\n      <Button.Ripple color='primary' outline id='popFocus'>\n        Focus\n      </Button.Ripple>\n      <UncontrolledPopover trigger='focus' placement='top' target='popFocus'>\n        <PopoverHeader>Focus Trigger</PopoverHeader>\n        <PopoverBody>\n          Focusing on the trigging element makes this popover appear. Blurring (clicking away) makes it disappear. You\n          cannot select this text as the popover will disappear when you try.\n        </PopoverBody>\n      </UncontrolledPopover>\n\n      <Button.Ripple color='primary' outline id='popClick'>\n        Click\n      </Button.Ripple>\n      <UncontrolledPopover trigger='click' placement='top' target='popClick'>\n        <PopoverHeader>Click Trigger</PopoverHeader>\n        <PopoverBody>\n          Clicking on the triggering element makes this popover appear. Clicking on it again will make it disappear. You\n          can select this text, but clicking away (somewhere other than the triggering element) will not dismiss this\n          popover.\n        </PopoverBody>\n      </UncontrolledPopover>\n\n      <Button.Ripple trigger='legacy' color='primary' outline id='popLegacy'>\n        Legacy\n      </Button.Ripple>\n      <UncontrolledPopover placement='top' target='popLegacy'>\n        <PopoverHeader>Legacy Trigger</PopoverHeader>\n        <PopoverBody>\n          Legacy is a reactstrap special trigger value (outside of bootstrap's spec/standard). Before reactstrap\n          correctly supported click and focus, it had a hybrid which was very useful and has been brought back as\n          trigger=\"legacy\". One advantage of the legacy trigger is that it allows the popover text to be selected while\n          also closing when clicking outside the triggering element and popover itself.\n        </PopoverBody>\n      </UncontrolledPopover>\n    </div>\n  )\n}\nexport default PopoverTriggers\n"})});o.default=function(){return Object(r.useEffect)((function(){P.a.highlightAll()}),[]),Object(g.jsxs)(r.Fragment,{children:[Object(g.jsx)(i.a,{breadCrumbTitle:"Popovers",breadCrumbParent:"Components",breadCrumbActive:"Popovers"}),Object(g.jsxs)(n.a,{children:[Object(g.jsx)(c.a,{md:"6",sm:"12",children:Object(g.jsxs)(l.a,{title:"Controlled Popover",code:y,children:[Object(g.jsxs)(a.a,{children:["For controlled Popover you'll have to manage state of component. Controlled Popover require"," ",Object(g.jsx)("code",{children:"isOpen"})," and ",Object(g.jsx)("code",{children:"toggle"})," props to work."]}),Object(g.jsx)(u,{})]})}),Object(g.jsx)(c.a,{md:"6",sm:"12",children:Object(g.jsxs)(l.a,{title:"Uncontrolled Popover",code:f,children:[Object(g.jsx)(a.a,{children:"You can create an uncontrolled popover without having to manage state. All you have to do is wrap your content inside UncontrolledPopover tag."}),Object(g.jsx)(b,{})]})})]}),Object(g.jsxs)(n.a,{children:[Object(g.jsx)(c.a,{sm:"12",children:Object(g.jsxs)(l.a,{title:"Popover Positions",code:B,children:[Object(g.jsxs)(a.a,{className:"mb-0",children:["Use prop ",Object(g.jsx)("code",{children:"placement"})," to place you popover at desired position."]}),Object(g.jsx)(v,{})]})}),Object(g.jsx)(c.a,{sm:"12",children:Object(g.jsxs)(l.a,{title:"Popover Triggers",code:k,children:[Object(g.jsxs)(a.a,{className:"mb-0",children:["Use prop ",Object(g.jsx)("code",{children:"trigger"})," for various trigger options. Trigger each popover to see information about the trigger."]}),Object(g.jsx)(x,{})]})})]})]})}},466:function(e,o,t){"use strict";var r=t(467),n=t(1039),c=t(1027),a=t(1026),i=t(1024),l=t(1028),p=t(475),s=t(476),d=t(474),j=t(1265),m=t(1076),g=t(477),u=t(6);o.a=function(e){var o=e.breadCrumbTitle,t=e.breadCrumbParent,h=e.breadCrumbParent2,b=e.breadCrumbParent3,v=e.breadCrumbActive;return Object(u.jsxs)("div",{className:"content-header row",children:[Object(u.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(u.jsx)("div",{className:"row breadcrumbs-top",children:Object(u.jsxs)("div",{className:"col-12",children:[o?Object(u.jsx)("h2",{className:"content-header-title float-left mb-0",children:o}):"",Object(u.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(u.jsxs)(p.a,{children:[Object(u.jsx)(s.a,{tag:"li",children:Object(u.jsx)(r.b,{to:"/",children:"Home"})}),Object(u.jsx)(s.a,{tag:"li",className:"text-primary",children:t}),h?Object(u.jsx)(s.a,{tag:"li",className:"text-primary",children:h}):"",b?Object(u.jsx)(s.a,{tag:"li",className:"text-primary",children:b}):"",Object(u.jsx)(s.a,{tag:"li",active:!0,children:v})]})})]})})}),Object(u.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(u.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(u.jsxs)(d.a,{children:[Object(u.jsx)(j.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(u.jsx)(n.a,{size:14})}),Object(u.jsxs)(m.a,{tag:"ul",right:!0,children:[Object(u.jsxs)(g.a,{tag:r.b,to:"/apps/chat",children:[Object(u.jsx)(c.a,{className:"mr-1",size:14}),Object(u.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(u.jsxs)(g.a,{tag:r.b,to:"/apps/chat",children:[Object(u.jsx)(a.a,{className:"mr-1",size:14}),Object(u.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(u.jsxs)(g.a,{tag:r.b,to:"/apps/email",children:[Object(u.jsx)(i.a,{className:"mr-1",size:14}),Object(u.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(u.jsxs)(g.a,{tag:r.b,to:"/apps/calendar",children:[Object(u.jsx)(l.a,{className:"mr-1",size:14}),Object(u.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},478:function(e,o,t){"use strict";var r=t(15),n=t(0),c=t(487),a=t(1122),i=t(1121),l=t(472),p=t(1102),s=t(745),d=t(6);o.a=function(e){var o=e.title,t=e.children,j=e.noBody,m=e.code,g=e.iconCode,u=Object(n.useState)(!1),h=Object(r.a)(u,2),b=h[0],v=h[1],x=g||Object(d.jsx)(c.a,{size:15}),O=j?n.Fragment:a.a;return Object(d.jsxs)(i.a,{className:"card-snippet",children:[Object(d.jsxs)(l.a,{children:[Object(d.jsx)(p.a,{tag:"h4",children:o}),Object(d.jsx)("div",{className:"views cursor-pointer",onClick:function(){return v(!b)},children:x})]}),Object(d.jsx)(O,{children:t}),Object(d.jsx)(s.a,{isOpen:b,children:Object(d.jsx)(a.a,{children:m})})]})}}}]);
//# sourceMappingURL=150.1db2f34c.chunk.js.map