import{_ as b,r as l,o as s,c,w as t,a as o,t as d,b as h,d as e,u as T,F as g,Z as $,e as k,f as m}from"./app-TX8DrTkI.js";const j={__name:"CardTitle",props:{title:String},setup(n){return(y,x)=>{const i=l("v-card");return s(),c(i,{class:"mx-auto"},{title:t(()=>[o(d(n.title),1)]),_:1})}}},B=b(j,[["__scopeId","data-v-5689088b"]]),N={__name:"Acompanhamento",props:{records:Object},setup(n){function y(x){const[i,a,r]=x.split("-"),_=new Date(i,a-1,r);return`${_.getDate().toString().padStart(2,"0")}/${(_.getMonth()+1).toString().padStart(2,"0")}/${_.getFullYear()}`}return(x,i)=>{const a=l("v-col"),r=l("v-row"),_=l("v-expansion-panel-title"),v=l("v-expansion-panel"),f=l("v-icon"),S=l("v-expansion-panel-text"),w=l("v-expansion-panels"),A=l("v-card-text"),C=l("v-card"),D=l("painel-user");return s(),h(g,null,[e(T($),{title:"Acompanhamento"}),e(D,null,{default:t(()=>[e(B,{title:"Acompanhamento"}),e(C,{class:"mx-auto mt-6"},{title:t(()=>[o(" Meus registros ")]),default:t(()=>[e(A,null,{default:t(()=>[e(w,{variant:"accordion"},{default:t(()=>[e(v,{elevation:"0",style:{"background-color":"blueviolet",color:"white"},readonly:"true"},{default:t(()=>[e(_,{"hide-actions":"false"},{default:t(()=>[e(r,{"no-gutters":""},{default:t(()=>[e(a,{cols:"4",class:"d-flex justify-start"},{default:t(()=>[o(" Dia ")]),_:1}),e(a,{cols:"4",class:"text--secondary"},{default:t(()=>[o(" Tempo trabalhado ")]),_:1}),e(a,{cols:"4",class:"text--secondary"},{default:t(()=>[o(" Status ")]),_:1})]),_:1})]),_:1})]),_:1}),(s(!0),h(g,null,k(n.records.hour,(V,p)=>(s(),c(v,{elevation:"0"},{default:t(()=>[e(_,null,{default:t(({open:u})=>[e(r,{"no-gutters":""},{default:t(()=>[e(a,{cols:"4",class:"d-flex justify-start"},{default:t(()=>[o(d(y(p.slice(0,10))),1)]),_:2},1024),e(a,{cols:"4",class:"text--secondary"},{default:t(()=>[o(d(n.records.totalHour[p]),1)]),_:2},1024),e(a,{cols:"4",class:"text--secondary"},{default:t(()=>[n.records.errors[p]?m("",!0):(s(),c(f,{key:0,icon:"mdi-check-all"})),n.records.errors[p]?(s(),c(f,{key:1,icon:"mdi-alert"})):m("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(S,null,{default:t(()=>[e(r,{"no-gutters":"",class:"p-2",style:{"background-color":"rgb(213, 213, 213)"}},{default:t(()=>[e(a,{cols:"3",class:"text-left"},{default:t(()=>[o(" Entrada ")]),_:1}),e(a,{cols:"3",class:"text-left"},{default:t(()=>[o(" Saida ")]),_:1}),e(a,{cols:"3",class:"text-left"},{default:t(()=>[o(" Tempo trabalhado ")]),_:1}),e(a,{cols:"3",class:"text-left"},{default:t(()=>[o(" Ações ")]),_:1})]),_:1}),(s(!0),h(g,null,k(n.records.hour[p],(u,F)=>(s(),c(r,{key:F,"no-gutters":""},{default:t(()=>[e(a,{cols:"3",class:"text-left"},{default:t(()=>[o(d(u.input),1)]),_:2},1024),e(a,{cols:"3",class:"text-left"},{default:t(()=>[o(d(u.output)+" ",1),u.output?m("",!0):(s(),c(f,{key:0,icon:"mdi-alert"}))]),_:2},1024),e(a,{cols:"3",class:"text-left"},{default:t(()=>[o(d(u.hour_complete)+" ",1),u.hour_complete?m("",!0):(s(),c(f,{key:0,icon:"mdi-alert"}))]),_:2},1024),e(a,{cols:"3",class:"text-left"},{default:t(()=>[o(" Ações ")]),_:1})]),_:2},1024))),128))]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1})]),_:1})],64)}}},I=b(N,[["__scopeId","data-v-22de976a"]]);export{I as default};