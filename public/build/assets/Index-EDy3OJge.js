import{k as b,j as k,l as C,e as y,w as a,r as o,o as s,a as e,h as n,c as l,d as _,F as p,n as z,t as u,O as B,_ as N}from"./app-DPwSx-UI.js";const I={class:"header",style:{"background-color":"red"}},O={class:"actions"},j=b({__name:"Index",props:{prestadores:Object},setup(m){const f=k(" | Prestadores de Serviço"),h=C(["Nome","Ações"]);function v(d){B.delete("prestadores/"+d)}return(d,w)=>{const c=o("v-icon"),r=o("v-btn"),x=o("v-table"),g=o("painel-gestao");return s(),y(g,{backTo:!0,"page-name":f.value},{default:a(()=>[e(x,{height:"500px","fixed-header":""},{default:a(()=>[n("thead",I,[n("tr",null,[(s(!0),l(p,null,_(h,(t,i)=>(s(),l("th",{class:z(t==="Nome"?"text-left":"text-right"),key:i},u(t),3))),128))])]),n("tbody",null,[(s(!0),l(p,null,_(m.prestadores,t=>(s(),l("tr",{key:t.name},[n("td",null,u(t.name),1),n("td",O,[e(r,{size:"small",class:"search"},{default:a(()=>[e(c,{icon:"mdi-text-box-search-outline"})]),_:1}),e(r,{size:"small",class:"edit"},{default:a(()=>[e(c,{icon:"mdi-file-edit-outline"})]),_:1}),e(r,{size:"small",class:"danger",onClick:i=>v(t.id)},{default:a(()=>[e(c,{icon:"mdi-trash-can"})]),_:2},1032,["onClick"])])]))),128))])]),_:1})]),_:1},8,["page-name"])}}}),S=N(j,[["__scopeId","data-v-af595bf4"]]);export{S as default};