import{_ as F,T as I,Q as N,i as h,j as m,c as O,a as o,u as l,h as _,w as s,F as P,r as t,o as c,Z as T,e as v,f,b as g,O as U}from"./app-DdmHiQib.js";const $={class:"d-flex align-center flex-column login"},j={class:"logo"},z={__name:"Index",setup(A){const a=I({cpf:null,password:null}),x=N(),r=h(()=>x.props.errors),p=m(!1),d=m(!1);function b(){p.value=!0,U.post("/",a,{replace:!0,onFinish:w=>{p.value=!1}})}return(w,e)=>{const y=t("v-img"),u=t("v-alert"),i=t("v-text-field"),V=t("v-btn"),k=t("v-form"),C=t("v-card-text"),B=t("v-card");return c(),O(P,null,[o(l(T),{title:"Login"}),_("div",$,[_("div",j,[o(y,{width:100,src:"/img/logo.png",class:"mb-4"})]),o(B,{width:"300"},{default:s(()=>[o(C,null,{default:s(()=>[r.value.message?(c(),v(u,{key:0,type:"error",text:r.value.message,variant:"outlined",class:"mb-4",style:{padding:"0px"}},null,8,["text"])):f("",!0),r.value.cpf||r.value.password?(c(),v(u,{key:1,type:"error",variant:"outlined",class:"mb-4",style:{padding:"0px"}},{default:s(()=>[g(" CPF ou senha não pode ser vazio ")]),_:1})):f("",!0),o(k,null,{default:s(()=>[o(i,{label:"Colaborador",type:"text",modelValue:l(a).cpf,"onUpdate:modelValue":e[0]||(e[0]=n=>l(a).cpf=n)},null,8,["modelValue"]),o(i,{"append-inner-icon":d.value?"mdi-eye":"mdi-eye-off",label:"Senha",type:d.value?"text":"password",modelValue:l(a).password,"onUpdate:modelValue":e[1]||(e[1]=n=>l(a).password=n),"onClick:appendInner":e[2]||(e[2]=n=>d.value=!d.value)},null,8,["append-inner-icon","type","modelValue"]),o(V,{loading:p.value,block:"",class:"mt-2",onClick:e[3]||(e[3]=n=>b())},{default:s(()=>[g("Acessar")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})])],64)}}},L=F(z,[["__scopeId","data-v-430e342b"]]);export{L as default};