import{a3 as s,a4 as u,a5 as i,v as r}from"./DeoSQKGc.js";import{u as c}from"./BgMDfBSU.js";import"./IShi1APO.js";const p=s(async(f,m)=>{let e,a;const o=c("auth"),n=r();o.value||u("/account");const t=([e,a]=i(()=>$fetch("/user/check",{baseURL:n.public.apiBase,method:"GET",headers:{Authorization:o.value}}).catch(()=>null)),e=await e,a(),e);if((t==null?void 0:t.status)===void 0)return u("/account")});export{p as default};
