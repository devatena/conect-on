import{_ as h,Q as T,k as w,b as c,o as m,g as x,w as o,e as p,t as _,a as s,j as t,p as y,i as S,l as D,O as $,u as C,c as k,F as I,f as O,d as H,Z as N,h as R}from"./app-Cb4aBEkX.js";const B=e=>(y("data-v-b79d73cc"),e=e(),S(),e),V=B(()=>t("strong",null,"Função:",-1)),j=B(()=>t("strong",null,"Operação:",-1)),L={__name:"CardUser",setup(e){const u=T(),n=w(()=>u.props.auth.user);return(v,f)=>{const i=c("v-card-text"),r=c("v-card");return m(),x(r,{class:"mx-auto"},{title:o(()=>[p(_(n.value.name),1)]),default:o(()=>[s(i,null,{default:o(()=>[t("p",null,[V,p(" "+_(n.value.role),1)]),t("p",null,[j,p(" "+_(n.value.operation),1)])]),_:1})]),_:1})}}},P=h(L,[["__scopeId","data-v-b79d73cc"]]),J={class:"time mb-5"},U={class:"btn-register"},z={__name:"EntradaSaida",setup(e){const u=D(),n=D(!1);function v(){let r=new Date,a=r.getHours(),l=r.getMinutes(),d=r.getSeconds();a=a<10?"0"+a:a,l=l<10?"0"+l:l,d=d<10?"0"+d:d,u.value=a+":"+l+":"+d}function f(){$.post("/record/input",null,{onBefore:()=>n.value=!0,onFinish:()=>n.value=!1})}function i(){$.post("/record/output",null,{onBefore:()=>n.value=!0,onFinish:()=>n.value=!1})}return setInterval(v,1e3),v(),(r,a)=>{const l=c("v-icon"),d=c("v-btn"),g=c("v-card-text"),E=c("v-card");return m(),x(E,{class:"mx-auto"},{title:o(()=>[p(" Registro de disponibilidade")]),default:o(()=>[s(g,null,{default:o(()=>[s(l,{class:"mb-5",icon:"mdi-clock",size:"50",color:"purple"}),t("p",J,_(u.value),1),t("div",U,[s(d,{style:{background:"blueviolet"},onClick:a[0]||(a[0]=F=>f()),disabled:n.value},{default:o(()=>[p(" Entrada ")]),_:1},8,["disabled"]),s(d,{style:{background:"gray"},onClick:a[1]||(a[1]=F=>i()),disabled:n.value},{default:o(()=>[p(" Saida ")]),_:1},8,["disabled"])])]),_:1})]),_:1})}}},A=h(z,[["__scopeId","data-v-5a4a387c"]]),b=e=>(y("data-v-cd5a5ae4"),e=e(),S(),e),M=b(()=>t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"#"),t("th",{class:"text-left"},"Entrada"),t("th",{class:"text-left"},"Saída"),t("th",{class:"text-left"},"HT")])],-1)),Q={class:"text-left"},Z={class:"text-left"},q={class:"text-left"},G={class:"text-left"},K=b(()=>t("td",null,null,-1)),W=b(()=>t("td",null,null,-1)),X=b(()=>t("th",{class:"text-left"}," Total de horas:",-1)),Y={class:"text-left"},tt={__name:"JornadaResumo",props:{recordToDay:Object},setup(e){const u=new Date;return(n,v)=>{const f=c("v-table"),i=c("v-card-text"),r=c("v-card");return m(),x(r,{class:"mx-auto"},{title:o(()=>[p(" Acompanhamento - "+_(C(u).toLocaleDateString("pt-BR")),1)]),default:o(()=>[s(i,null,{default:o(()=>[s(f,null,{default:o(()=>[M,t("tbody",null,[(m(!0),k(I,null,O(e.recordToDay.horas,(a,l)=>(m(),k("tr",{key:l},[t("td",Q,_(l+1),1),t("td",Z,_(a.input),1),t("td",q,_(a.output?a.output:"-----"),1),t("td",G,_(a.hour_complete?a.hour_complete:"----"),1)]))),128)),t("tr",null,[K,W,X,t("th",Y,_(e.recordToDay.totalHoras?e.recordToDay.totalHoras:"-----"),1)])])]),_:1})]),_:1})]),_:1})}}},et=h(tt,[["__scopeId","data-v-cd5a5ae4"]]),ot=e=>(y("data-v-a04d58de"),e=e(),S(),e),at=ot(()=>t("br",null,null,-1)),st=H({__name:"Painel",props:{recordToDay:Object},setup(e){const u=T(),n=w(()=>({message:u.props.flash.message,link:u.props.flash.messageLink}));return(v,f)=>{const i=c("v-icon"),r=c("v-btn"),a=c("v-alert"),l=c("v-col"),d=c("v-row"),g=c("painel-user");return m(),k(I,null,[s(C(N),{title:"Painel"}),s(g,null,{default:o(()=>[s(P),n.value.message?(m(),x(a,{key:0,text:n.value.message,title:"Sucesso",type:"success",class:"mt-4"},{default:o(()=>[at,s(r,{"prepend-icon":"mdi-send",href:n.value.link,target:"_blank"},{prepend:o(()=>[s(i,{color:"info"})]),default:o(()=>[p(" Compartilhar registro no telegram ")]),_:1},8,["href"])]),_:1},8,["text"])):R("",!0),s(d,{class:"pt-4"},{default:o(()=>[s(l,{cols:"12",sm:"6"},{default:o(()=>[s(A)]),_:1}),s(l,{cols:"12",sm:"6"},{default:o(()=>[s(et,{recordToDay:e.recordToDay},null,8,["recordToDay"])]),_:1})]),_:1})]),_:1})],64)}}}),ct=h(st,[["__scopeId","data-v-a04d58de"]]);export{ct as default};