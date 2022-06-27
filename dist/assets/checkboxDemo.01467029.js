import{_ as k,h as g,r as _,o as D,a as f,b as e,d as l,k as h,v as m,q as n,j as c}from"./index.204c51f9.js";import{_ as p}from"./MCode.de450ad8.js";const C={components:{MCode:p},setup(){const u=g({value:["\u9009\u9879\u4E00"],code:'<tg-checkbox-group v-model:value="checkbox">,2&<tg-checkbox label="\u9009\u9879\u4E00" value="1"></tg-checkbox>,2&<tg-checkbox label="\u9009\u9879\u4E8C" value="2"></tg-checkbox>,</tg-checkbox-group>',visible:!1}),a=()=>{u.visible=!u.visible},b=g({value:["\u9009\u9879\u4E00"],code:'<tg-checkbox-group v-model:value="checkbox" disabled>,2&<tg-checkbox label="\u9009\u9879\u4E00" value="1"></tg-checkbox>,2&<tg-checkbox label="\u9009\u9879\u4E8C" value="2"></tg-checkbox>,</tg-checkbox-group>',visible:!1}),o=()=>{b.visible=!b.visible},r=g({value:["\u9009\u9879\u4E00"],value1:["\u9009\u9879\u4E00"],value2:["\u9009\u9879\u4E00"],code:'<tg-checkbox-group v-model:value="checkbox" size="mini">,2&<tg-checkbox label="\u9009\u9879\u4E00" value="1"></tg-checkbox>,2&<tg-checkbox label="\u9009\u9879\u4E8C" value="2"></tg-checkbox>,</tg-checkbox-group>,<tg-checkbox-group v-model:value="checkbox" size="small">,2&<tg-checkbox label="\u9009\u9879\u4E00" value="1"></tg-checkbox>,2&<tg-checkbox label="\u9009\u9879\u4E8C" value="2"></tg-checkbox>,</tg-checkbox-group>,<tg-checkbox-group v-model:value="checkbox" size="large">,2&<tg-checkbox label="\u9009\u9879\u4E00" value="1"></tg-checkbox>,2&<tg-checkbox label="\u9009\u9879\u4E8C" value="2"></tg-checkbox>,</tg-checkbox-group>',visible:!1}),x=()=>{r.visible=!r.visible},d=g({value:!1,value1:!1,value2:!1,value3:!1,value4:!1,value5:!1,code:"",visible:!1});return{radioData:u,toggleDemoCode:a,radioData1:b,toggleDemoCode1:o,radioData2:r,toggleDemoCode2:x,radioData3:d,toggleDemoCode3:()=>{d.visible=!d.visible}}}},z={class:"demo icon-demo"},U=e("h2",null,"Checkbox \u5355\u9009\u6846",-1),j=e("p",null," \u57FA\u672C\u8868\u5355\u7EC4\u4EF6\uFF0C\u5728\u4E00\u7EC4\u5907\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9009\u3002 ",-1),S=e("h3",null,"\u4F55\u65F6\u4F7F\u7528",-1),y=e("ul",null,[e("li",null,"\u5355\u72EC\u4F7F\u7528\u53EF\u4EE5\u8868\u793A\u4E24\u79CD\u72B6\u6001\u4E4B\u95F4\u7684\u5207\u6362\uFF0C\u5199\u5728\u6807\u7B7E\u4E2D\u7684\u5185\u5BB9\u4E3A checkbox \u6309\u94AE\u540E\u7684\u4ECB\u7ECD\u3002")],-1),B=e("h3",null,"\u4EE3\u7801\u6F14\u793A",-1),V={class:"demo-block"},w={class:"demo-component"},N=e("br",null,null,-1),q=e("br",null,null,-1),A=e("div",{class:"demo-desc"},[e("span",{class:"desc-title"},"\u57FA\u672C\u7528\u6CD5"),e("div",{class:"desc-text"},"\u6700\u7B80\u5355\u7684\u7528\u6CD5")],-1),E={class:"demo-code"},M={class:"code-bg"},T=e("div",{class:"code-text"},[c(" \u8981\u4F7F\u7528 "),e("code",null,"Checkbox"),c(" \u7EC4\u4EF6\uFF0C\u53EA\u9700\u8981\u8BBE\u7F6E "),e("code",null,"v-model:value"),c(" \u7ED1\u5B9A\u53D8\u91CF\uFF0C \u9009\u4E2D\u610F\u5473\u7740\u53D8\u91CF\u7684\u503C\u4E3A\u76F8\u5E94 "),e("code",null,"Checkbox Value"),c(" \u5C5E\u6027\u7684\u503C\uFF0C"),e("code",null,"value"),c(" \u53EF\u4EE5\u662F "),e("code",null,"Boolean"),c(" \u3002 ")],-1),F={class:"demo-btns"},G={href:"javaScript:;"},H={class:"demo-block"},I={class:"demo-component"},J=e("div",{class:"demo-desc"},[e("span",{class:"desc-title"},"\u591A\u9009\u6846\u7EC4"),e("div",{class:"desc-text"},"\u9002\u7528\u4E8E\u591A\u4E2A\u52FE\u9009\u6846\u7ED1\u5B9A\u5230\u540C\u4E00\u4E2A\u6570\u7EC4\u7684\u60C5\u666F\uFF0C\u901A\u8FC7\u662F\u5426\u52FE\u9009\u6765\u8868\u793A\u8FD9\u4E00\u7EC4\u9009\u9879\u4E2D\u9009\u4E2D\u7684\u9879\u3002")],-1),K={class:"demo-code"},L={class:"code-bg"},O=e("div",{class:"code-text"},[c(" \u5728 "),e("code",null,"tg-checkbox-group"),c(" \u7EC4\u4EF6\u4E2D\u5D4C\u5957 "),e("code",null,"tg-checkbox"),c("\u7EC4\u4EF6\uFF0C\u5373\u53EF\u5F97\u5230\u591A\u9009\u6846\u7EC4\uFF0C\u6539\u7EC4\u7ED1\u5B9A\u503C\u5E94\u4E3A\u6570\u7EC4 "),e("code",null,"Array"),c("\u3002 ")],-1),P={class:"demo-btns"},Q={href:"javaScript:;"},R={class:"demo-block"},W={class:"demo-component"},X=e("div",{class:"demo-desc"},[e("span",{class:"desc-title"},"\u7981\u7528\u72B6\u6001"),e("div",{class:"desc-text"},[e("code",null,"disabled"),c(" \u5C5E\u6027\u53EF\u4EE5\u7528\u6765\u63A7\u5236\u5355\u9009\u6846\u7684\u7981\u7528\u72B6\u6001")])],-1),Y={class:"demo-code"},Z={class:"code-bg"},$=e("div",{class:"code-text"},[c(" \u4F20\u5165 "),e("code",null,"disbaled"),c(),e("code",null,"Boolean"),c("\u7684\u5C5E\u6027\u63A7\u5236\u5355\u9009\u6846\u72B6\u6001 ")],-1),ee={class:"demo-btns"},oe={href:"javaScript:;"},le={class:"demo-block"},ae={class:"demo-component"},te=e("br",null,null,-1),de=e("br",null,null,-1),ce=e("div",{class:"demo-desc"},[e("span",{class:"desc-title"},"\u4E0D\u540C\u5C3A\u5BF8"),e("div",{class:"desc-text"},[e("code",null,"size"),c(" \u5C5E\u6027\u53EF\u4EE5\u7528\u6765\u63A7\u5236\u5355\u9009\u6846\u7684\u5927\u5C0F")])],-1),se={class:"demo-code"},ie={class:"code-bg"},ve=e("div",{class:"code-text"},[c(" \u4F20\u5165 "),e("code",null,"disbaled"),c(),e("code",null,"Boolean"),c("\u7684\u5C5E\u6027\u63A7\u5236\u5355\u9009\u6846\u72B6\u6001 ")],-1),ne={class:"demo-btns"},ue={href:"javaScript:;"};function be(u,a,b,o,r,x){const d=_("tg-checkbox"),i=_("m-code"),s=_("tg-icon"),v=_("tg-checkbox-group");return D(),f("div",z,[U,j,S,y,B,e("div",V,[e("div",w,[l(d,{value:o.radioData3.value,"onUpdate:value":a[0]||(a[0]=t=>o.radioData3.value=t),label:"\u9009\u98791"},null,8,["value"]),l(d,{value:o.radioData3.value1,"onUpdate:value":a[1]||(a[1]=t=>o.radioData3.value1=t),label:"\u9009\u98792"},null,8,["value"]),N,l(d,{value:o.radioData3.value2,"onUpdate:value":a[2]||(a[2]=t=>o.radioData3.value2=t),label:"\u9009\u98793",style:{margin:"12px 0"}},null,8,["value"]),l(d,{value:o.radioData3.value3,"onUpdate:value":a[3]||(a[3]=t=>o.radioData3.value3=t),label:"\u9009\u98794"},null,8,["value"]),q,l(d,{value:o.radioData3.value4,"onUpdate:value":a[4]||(a[4]=t=>o.radioData3.value4=t),label:"\u9009\u98795"},null,8,["value"]),l(d,{value:o.radioData3.value5,"onUpdate:value":a[5]||(a[5]=t=>o.radioData3.value5=t),label:"\u9009\u98796"},null,8,["value"])]),A,h(e("div",E,[e("code",M,[T,l(i,{value:o.radioData3.code},null,8,["value"])])],512),[[m,o.radioData3.visible]]),e("div",F,[e("a",G,[l(s,{icon:"tg-copy"})]),e("a",{href:"javaScript:;",onClick:a[6]||(a[6]=(...t)=>o.toggleDemoCode3&&o.toggleDemoCode3(...t))},[l(s,{icon:"tg-code",size:"21"})])])]),e("div",H,[e("div",I,[l(v,{value:o.radioData.value,"onUpdate:value":a[7]||(a[7]=t=>o.radioData.value=t)},{default:n(()=>[l(d,{value:"\u9009\u9879\u4E00"}),l(d,{value:"\u9009\u9879\u4E8C"})]),_:1},8,["value"])]),J,h(e("div",K,[e("code",L,[O,l(i,{value:o.radioData.code},null,8,["value"])])],512),[[m,o.radioData.visible]]),e("div",P,[e("a",Q,[l(s,{icon:"tg-copy"})]),e("a",{href:"javaScript:;",onClick:a[8]||(a[8]=(...t)=>o.toggleDemoCode&&o.toggleDemoCode(...t))},[l(s,{icon:"tg-code",size:"21"})])])]),e("div",R,[e("div",W,[l(v,{value:o.radioData1.value,"onUpdate:value":a[9]||(a[9]=t=>o.radioData1.value=t),disabled:""},{default:n(()=>[l(d,{value:"\u9009\u9879\u4E00"}),l(d,{value:"\u9009\u9879\u4E8C"})]),_:1},8,["value"])]),X,h(e("div",Y,[e("code",Z,[$,l(i,{value:o.radioData1.code},null,8,["value"])])],512),[[m,o.radioData1.visible]]),e("div",ee,[e("a",oe,[l(s,{icon:"tg-copy"})]),e("a",{href:"javaScript:;",onClick:a[10]||(a[10]=(...t)=>o.toggleDemoCode1&&o.toggleDemoCode1(...t))},[l(s,{icon:"tg-code",size:"21"})])])]),e("div",le,[e("div",ae,[l(v,{value:o.radioData2.value,"onUpdate:value":a[11]||(a[11]=t=>o.radioData2.value=t),size:"mini"},{default:n(()=>[l(d,{value:"\u9009\u9879\u4E00"}),l(d,{value:"\u9009\u9879\u4E8C"})]),_:1},8,["value"]),te,l(v,{value:o.radioData2.value1,"onUpdate:value":a[12]||(a[12]=t=>o.radioData2.value1=t),size:"small",style:{margin:"12px 0"}},{default:n(()=>[l(d,{value:"\u9009\u9879\u4E00"}),l(d,{value:"\u9009\u9879\u4E8C"})]),_:1},8,["value"]),de,l(v,{value:o.radioData2.value2,"onUpdate:value":a[13]||(a[13]=t=>o.radioData2.value2=t),size:"large"},{default:n(()=>[l(d,{value:"\u9009\u9879\u4E00"}),l(d,{value:"\u9009\u9879\u4E8C"})]),_:1},8,["value"])]),ce,h(e("div",se,[e("code",ie,[ve,l(i,{value:o.radioData2.code},null,8,["value"])])],512),[[m,o.radioData2.visible]]),e("div",ne,[e("a",ue,[l(s,{icon:"tg-copy"})]),e("a",{href:"javaScript:;",onClick:a[14]||(a[14]=(...t)=>o.toggleDemoCode2&&o.toggleDemoCode2(...t))},[l(s,{icon:"tg-code",size:"21"})])])])])}var _e=k(C,[["render",be]]);export{_e as default};
