import{l as s}from"./index.0070ca73.js";const r={props:{value:{type:String,default:""}},setup(e,p){return()=>e.value.split(",").map(t=>(t=t.split("&"),s("span",{class:`code-tag ${t.length>1?"code-script-"+t[0]:""}`},t.length>1?t[1]:t[0])))}};export{r as _};
