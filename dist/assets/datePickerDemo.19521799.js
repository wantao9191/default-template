import{_ as f,g as s,r as m,o as b,a as k,b as e,d as v,k as h,v as D,i as g}from"./index.ce14f47c.js";import{_ as x}from"./MCode.6f36c7b7.js";const C={components:{MCode:x},setup(){const c=s({value:"",code:'<tg-date-picker v-model:value="input"></tg-date-picker>',visible:!1}),t=()=>{c.visible=!c.visible},n=s({value:"",code:'<tg-date-picker v-model:value="input" clearable></tg-date-picker>',visible:!1}),o=()=>{n.visible=!n.visible},d=s({value:"",code:'<tg-date-picker v-model:value="input" disabled></tg-date-picker>',visible:!1}),_=()=>{d.visible=!d.visible},a=s({value:"",code:'<tg-date-picker v-model:value="input" type="password"></tg-date-picker>',visible:!1}),u=()=>{a.visible=!a.visible},i=s({value:"",code:'<tg-date-picker v-model:value="input" prefixIcon="desktop" />,<tg-date-picker ,2&v-model:value="input",2&suffixIcon="search" ,/>,<tg-date-picker ,2&v-model:value="input",2&prefixIcon="mail-unread" ,2&suffixIcon="search" ,/>',visible:!1}),l=()=>{i.visible=!i.visible},r=s({value:"",code:'<tg-date-picker v-model:value="input" prefixIcon="desktop" size="mini" />,<tg-date-picker ,2&v-model:value="input" ,2&size="small" ,2&suffixIcon="search" ,/>,<tg-date-picker ,2&v-model:value="input" ,2&size="large" ,2&prefixIcon="mail-unread" ,2&suffixIcon="search" ,/>',visible:!1});return{toggleDemoCode1:o,inputData:c,toggleDemoCode:t,inputData1:n,inputData2:d,toggleDemoCode2:_,toggleDemoCode3:u,inputData3:a,inputData4:i,toggleDemoCode4:l,inputData5:r,toggleDemoCode5:()=>{r.visible=!r.visible},onChange:p=>{console.log(p)},onBlur:p=>{console.log("blur",p)}}}},I={class:"demo icon-demo"},z=e("h2",null,"DatePicker \u8F93\u5165\u6846",-1),B=e("p",null," \u57FA\u672C\u8868\u5355\u7EC4\u4EF6\uFF0C\u652F\u6301 input \u548C textarea\uFF0C\u5E76\u5728\u539F\u751F\u63A7\u4EF6\u57FA\u7840\u4E0A\u8FDB\u884C\u4E86\u529F\u80FD\u6269\u5C55\uFF0C\u53EF\u4EE5\u7EC4\u5408\u4F7F\u7528\u3002 ",-1),S=e("h3",null,"\u4F55\u65F6\u4F7F\u7528",-1),w=e("ul",null,[e("li",null,"\u5728\u8868\u5355\u8F93\u5165\u65F6\u4F7F\u7528\uFF0C\u901A\u8FC7\u9F20\u6807\u6216\u952E\u76D8\u8F93\u5165\u5B57\u7B26\u3002")],-1),y=e("h3",null,"\u4EE3\u7801\u6F14\u793A",-1),N={class:"demo-block"},V={class:"demo-component"},j=e("div",{class:"demo-desc"},[e("span",{class:"desc-title"},"\u57FA\u672C\u7528\u6CD5"),e("div",{class:"desc-text"},"\u6700\u7B80\u5355\u7684\u7528\u6CD5")],-1),P={class:"demo-code"},E={class:"code-bg"},M=e("div",{class:"code-text"},[g(" \u7ED1\u5B9A "),e("code",null,"v-model:value"),g(" \u5230\u4E00\u4E2A "),e("code",null,"String"),g(" \u7C7B\u578B\u7684\u53D8\u91CF\u3002 ")],-1),T={class:"demo-btns"},U={href:"javaScript:;"};function q(c,t,n,o,d,_){const a=m("tg-date-picker"),u=m("m-code"),i=m("tg-icon");return b(),k("div",I,[z,B,S,w,y,e("div",N,[e("div",V,[v(a,{value:o.inputData.value,"onUpdate:value":t[0]||(t[0]=l=>o.inputData.value=l),size:"small",type:"date"},null,8,["value"])]),j,h(e("div",P,[e("code",E,[M,v(u,{value:o.inputData.code},null,8,["value"])])],512),[[D,o.inputData.visible]]),e("div",T,[e("a",U,[v(i,{icon:"tg-copy"})]),e("a",{href:"javaScript:;",onClick:t[1]||(t[1]=(...l)=>o.toggleDemoCode&&o.toggleDemoCode(...l))},[v(i,{icon:"tg-code",size:"21"})])])])])}var K=f(C,[["render",q]]);export{K as default};
