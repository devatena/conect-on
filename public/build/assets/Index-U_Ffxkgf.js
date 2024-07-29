import{k as U,j as T,l as P,e as _,w as t,r as c,o as n,a as e,b as l,c as k,d as C,F as O,O as Z,t as v,f as I,p as z,g as J,h as j,_ as Y}from"./app-DPwSx-UI.js";const M=o=>(z("data-v-5e1c9923"),o=o(),J(),o),q=M(()=>j("br",null,null,-1)),G={key:1,class:"mensagem"},K=M(()=>j("h1",null,"Nenhum dado encontrado!",-1)),Q=[K],R={key:2,class:"mensagem"},W=M(()=>j("h1",null,"Selecione um prestador!",-1)),X=[W],tt=U({__name:"Index",props:{records:Object,prestadores:Object,selected:Number,dateFilter:{type:Object,default:{dataInicial:"",dataFinal:""}}},setup(o){const B=T(" | Acompanhamento de Horas"),V=o,r=P({dataInicial:V.dateFilter.dataInicial,dataFinal:V.dateFilter.dataFinal}),F=T(V.selected);function E(){Z.visit("/gestao/acompanhamento",{method:"post",data:{id:F.value,dataInicial:r.dataInicial,dataFinal:r.dataFinal}})}function $(m){return{title:m.name,subtitle:m.role}}function H(m){const[s,b,a]=m.split("-"),p=new Date(s,b-1,a);return`${p.getDate().toString().padStart(2,"0")}/${(p.getMonth()+1).toString().padStart(2,"0")}/${p.getFullYear()}`}function A(m,s){const b=new Date("1970-01-01T"+m+"Z"),a=new Date("1970-01-01T"+s+"Z"),u=Math.abs(a-b)/(1e3*60*60),d=Math.floor(u),x=Math.floor((u-d)*60),y=Math.round(((u-d)*60-x)*60),h=(d<10?"0":"")+d,S=(x<10?"0":"")+x,w=(y<10?"0":"")+y;return h+":"+S+":"+w}function L(){r.dataInicial="",r.dataFinal=""}return(m,s)=>{const b=c("v-select"),a=c("v-col"),p=c("v-text-field"),u=c("v-btn"),d=c("v-row"),x=c("v-expansion-panel-title"),y=c("v-expansion-panel"),h=c("v-icon"),S=c("v-expansion-panel-text"),w=c("v-expansion-panels"),N=c("painel-gestao");return n(),_(N,{backTo:"true","page-name":B.value},{default:t(()=>[e(d,null,{default:t(()=>[e(a,{cols:"3"},{default:t(()=>[e(b,{modelValue:F.value,"onUpdate:modelValue":s[0]||(s[0]=i=>F.value=i),label:"Prestador de serviço","item-props":$,items:o.prestadores,"item-text":"id","item-value":"id"},null,8,["modelValue","items"])]),_:1}),e(a,{cols:"3"},{default:t(()=>[e(p,{modelValue:r.dataInicial,"onUpdate:modelValue":s[1]||(s[1]=i=>r.dataInicial=i),label:"Data Inicial",type:"date"},null,8,["modelValue"])]),_:1}),e(a,{cols:"3"},{default:t(()=>[e(p,{modelValue:r.dataFinal,"onUpdate:modelValue":s[2]||(s[2]=i=>r.dataFinal=i),label:"Data Final",type:"date"},null,8,["modelValue"])]),_:1}),e(a,{cols:"2",class:"btn-filter"},{default:t(()=>[e(u,{onClick:s[3]||(s[3]=i=>E()),class:"btn-search",disabled:F.value==null},{default:t(()=>[l(" Buscar")]),_:1},8,["disabled"]),e(u,{onClick:s[4]||(s[4]=i=>L())},{default:t(()=>[l(" Limpar Filtro")]),_:1})]),_:1})]),_:1}),JSON.stringify(o.records.hour)!=="[]"?(n(),_(w,{key:0,variant:"accordion"},{default:t(()=>[e(y,{elevation:"0",style:{"background-color":"blueviolet",color:"white"}},{default:t(()=>[e(x,{"hide-actions":!0},{default:t(()=>[e(d,{"no-gutters":""},{default:t(()=>[e(a,{cols:"4",class:"d-flex justify-start"},{default:t(()=>[l(" Dia ")]),_:1}),e(a,{cols:"4",class:"text--secondary"},{default:t(()=>[l(" Tempo trabalhado ")]),_:1}),e(a,{cols:"4",class:"text--secondary"},{default:t(()=>[l(" Status ")]),_:1})]),_:1})]),_:1})]),_:1}),(n(!0),k(O,null,C(o.records.hour,(i,f)=>(n(),_(y,{elevation:"0",key:f},{default:t(()=>[e(x,null,{default:t(()=>[e(d,{"no-gutters":""},{default:t(()=>[e(a,{cols:"4",class:"d-flex justify-start"},{default:t(()=>[l(v(H(f.slice(0,10))),1)]),_:2},1024),e(a,{cols:"4",class:"text--secondary"},{default:t(()=>[l(v(o.records.totalHour[f]),1)]),_:2},1024),e(a,{cols:"4",class:"text--secondary"},{default:t(()=>[o.records.errors[f]?I("",!0):(n(),_(h,{key:0,icon:"mdi-check-all"})),o.records.errors[f]?(n(),_(h,{key:1,icon:"mdi-alert"})):I("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(S,null,{default:t(()=>[e(d,{"no-gutters":"",class:"p-2",style:{"background-color":"rgb(213, 213, 213)"}},{default:t(()=>[e(a,{cols:"2",class:"text-left"},{default:t(()=>[l(" # ")]),_:1}),e(a,{cols:"2",class:"text-left"},{default:t(()=>[l(" Entrada ")]),_:1}),e(a,{cols:"2",class:"text-left"},{default:t(()=>[l(" Saida ")]),_:1}),e(a,{cols:"2",class:"text-left"},{default:t(()=>[l(" Tempo trabalhado ")]),_:1}),e(a,{cols:"2",class:"text-left"},{default:t(()=>[l(" Intervalo ")]),_:1}),e(a,{cols:"2",class:"text-left"},{default:t(()=>[l(" Ações ")]),_:1})]),_:1}),(n(!0),k(O,null,C(o.records.hour[f],(g,D)=>(n(),_(d,{key:f,"no-gutters":""},{default:t(()=>[e(a,{cols:"2",class:"text-left"},{default:t(()=>[l(v(D+1),1)]),_:2},1024),e(a,{cols:"2",class:"text-left"},{default:t(()=>[l(v(g.input),1)]),_:2},1024),e(a,{cols:"2",class:"text-left"},{default:t(()=>[l(v(g.output)+" ",1),g.output?I("",!0):(n(),_(h,{key:0,icon:"mdi-alert"}))]),_:2},1024),e(a,{cols:"2",class:"text-left"},{default:t(()=>[l(v(g.hour_complete)+" ",1),g.hour_complete?I("",!0):(n(),_(h,{key:0,icon:"mdi-alert"}))]),_:2},1024),e(a,{cols:"2",class:"text-left"},{default:t(()=>[l(v(D==0?" ":A(o.records.hour[f][D-1].output,g.input))+" ",1),q]),_:2},1024),e(a,{cols:"2",class:"text-left"},{default:t(()=>[e(u,{"prepend-icon":"mdi-pencil",variant:"outlined",size:"x-small",color:"orange",class:"mb-1"},{default:t(()=>[l(" Ajuste ")]),_:1})]),_:1})]),_:2},1024))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})):o.selected?(n(),k("div",G,Q)):(n(),k("div",R,X))]),_:1},8,["page-name"])}}}),at=Y(tt,[["__scopeId","data-v-5e1c9923"]]);export{at as default};