(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9208:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9178)}])},9178:function(e,t,n){"use strict";n.r(t);var i=n(5893),s=n(24),l=n(7294),r=n(2237),d=n(8239),o=n(1290),u=n(5371);let c=()=>{let[e]=(0,s.KO)(u.L),[t,n]=(0,l.useState)([0,0]),[c,a]=(0,l.useState)(300),h=async e=>{let i=await o.x.control.post({body:{x:t[0],y:t[1],KeyEvent:e.code}});n([i.body.x,i.body.y])},y=async()=>{let e=await o.x.enemy.post({body:{y:c}}),t=Number(e.body.y);t!==c&&a(t)};return((0,l.useEffect)(()=>{let e=setInterval(y,50);return()=>{clearInterval(e)}},[c]),e)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:["gradius",t]}),(0,i.jsx)("div",{tabIndex:0,onKeyDown:h,style:{display:"inline-block",border:"solid"},children:(0,i.jsx)(r.Hf,{width:1280,height:720,children:(0,i.jsxs)(r.mh,{children:[(0,i.jsx)(r.UL,{x:t[1],y:t[0],width:50,height:40,fill:"blue"}),(0,i.jsx)(r.UL,{x:1100,y:c,width:50,height:40,fill:"red"})]})})})]}):(0,i.jsx)(d.g,{visible:!0})};t.default=c}},function(e){e.O(0,[237,774,888,179],function(){return e(e.s=9208)}),_N_E=e.O()}]);