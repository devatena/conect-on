import{_ as p,r as s,o as c,c as b,w as o,a as u,t as _,b as r,d as a,u as g,F as d,Z as I,e,f as S,p as k,g as A}from"./app-DfN1wXhR.js";const B={__name:"CardTitle",props:{title:String},setup(t){return(m,i)=>{const n=s("v-card");return c(),b(n,{class:"mx-auto"},{title:o(()=>[u(_(t.title),1)]),_:1})}}},C=p(B,[["__scopeId","data-v-5689088b"]]),T=t=>(k("data-v-39279af4"),t=t(),A(),t),w=T(()=>e("thead",null,[e("tr",null,[e("th",{class:"text-left"},"Dia"),e("th",{class:"text-left"},"Tempo trabalhado ")])],-1)),y={class:"text-left"},N={class:"text-left"},V={__name:"Acompanhamento",props:{records:Object},setup(t){return(m,i)=>{const n=s("v-table"),h=s("v-card-text"),f=s("v-card"),x=s("painel-user");return c(),r(d,null,[a(g(I),{title:"Acompanhamento"}),a(x,null,{default:o(()=>[a(C,{title:"Acompanhamento"}),a(f,{class:"mx-auto mt-6"},{title:o(()=>[u(" Meus registros ")]),default:o(()=>[a(h,null,{default:o(()=>[a(n,null,{default:o(()=>[w,e("tbody",null,[(c(!0),r(d,null,S(t.records.hour,(l,v)=>(c(),r("tr",{key:v},[e("td",y,_(l.date),1),e("td",N,_(l.hour_complete?l.hour_complete.slice(0,-3):"----"),1)]))),128))])]),_:1})]),_:1})]),_:1})]),_:1})],64)}}},F=p(V,[["__scopeId","data-v-39279af4"]]);export{F as default};
