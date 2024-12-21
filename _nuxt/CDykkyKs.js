import{_ as w}from"./hcYs1tGp.js";import{S as b,_ as g,a as x,b as k,A as I,N,P as S}from"./BWZC9isq.js";import{I as c}from"./BVrv9uHQ.js";import{_ as j,r as y,c as n,a as s,b as o,w as r,q as e,D as B,F as m,s as p,o as l,m as L,t as i,v as P}from"./DeoSQKGc.js";import{u as R}from"./CspKsf-x.js";import"./IShi1APO.js";const z=k,A={class:"hero position-relative"},F={class:"py-10 py-md-30 bg-primary-10"},V={class:"container mb-md-12"},C={class:"d-flex flex-column gap-6 gap-md-12 list-unstyled"},D={class:"row"},E={class:"col-12 col-lg-7"},O=["srcset"],T=["src","alt"],U={class:"col-12 col-lg-5"},Y={class:"card-body pe-md-10 py-md-10"},$={class:"card-title fs-2 fw-bold text-neutral-100"},q={class:"card-text mb-6 mb-md-10 fs-8 fs-md-7 fw-medium text-neutral-80"},H={class:"d-flex gap-4 mb-6 mb-md-10 list-unstyled"},X={class:"card-info px-4 py-5 border border-primary-40 rounded-3"},G={class:"mb-0 fw-bold text-neutral-80 text-nowrap"},J={class:"card-info px-4 py-5 border border-primary-40 rounded-3"},K={class:"mb-0 fw-bold text-neutral-80 text-nowrap"},M={class:"card-info px-4 py-5 border border-primary-40 rounded-3"},Q={class:"mb-0 fw-bold text-neutral-80 text-nowrap"},W={class:"d-flex justify-content-between align-items-center fs-7 fs-md-5 text-primary-100"},Z={class:"mb-0 fw-bold"},ss={__name:"index",setup(ts){const u=y([I,N,S]),f=y([]);return(async()=>{const _=P();try{const{data:t}=await R("/rooms",{baseURL:_.public.apiBase,method:"get"},"$Y4YcXSuTj8");f.value=t.value.result}catch(t){t.data?console.log("API 回應錯誤內容:",t.data):console.log("登入失敗，伺服器未返回詳細資訊！")}})(),(_,t)=>{const h=w;return l(),n("main",null,[s("section",A,[o(e(x),{modules:e(u),"slides-per-view":1,pagination:!0,autoplay:{delay:3e3,disableOnInteraction:!1}},{default:r(()=>[(l(),n(m,null,p(5,(a,d)=>o(e(b),{key:d},{default:r(()=>t[0]||(t[0]=[s("picture",null,[s("source",{srcset:z,media:"(min-width:576px)"}),s("img",{class:"hero-img",src:g,alt:"hero banner"})],-1)])),_:2},1024)),64))]),_:1},8,["modules"]),t[1]||(t[1]=B('<div class="hero-wrapper d-flex flex-column justify-content-center align-items-center flex-md-row gap-10 gap-md-20 w-100 position-absolute z-2" data-v-2136d829><div class="d-flex flex-column align-items-center text-center d-md-block text-md-start" data-v-2136d829><div class="mt-10 mb-5 mt-md-0 mb-md-10 text-primary-100 fw-bold" data-v-2136d829><h2 class="fw-semibold" data-v-2136d829> 享樂酒店 </h2><h5 class="fs-7 fs-md-5 fw-semibold" data-v-2136d829> Enjoyment Luxury Hotel </h5></div><div class="deco-line" data-v-2136d829></div></div><h1 class="mb-0 text-neutral-0 fw-bold" data-v-2136d829> 客房旅宿 </h1></div>',1))]),s("section",F,[s("div",V,[t[3]||(t[3]=s("h4",{class:"mb-2 mb-md-4 fs-8 fs-md-6 fw-bold text-neutral-80"}," 房型選擇 ",-1)),t[4]||(t[4]=s("h2",{class:"mb-10 mb-md-20 fs-1 fw-bold text-primary-100"}," 各種房型，任您挑選 ",-1)),s("ul",C,[(l(!0),n(m,null,p(e(f),a=>(l(),n("li",{class:"card flex-lg-row border-0 rounded-3xl overflow-hidden",key:a._id},[s("div",D,[s("div",E,[o(e(x),{modules:e(u),"slides-per-view":1,navigation:"",pagination:{clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1}},{default:r(()=>[(l(!0),n(m,null,p(a.imageUrlList,(d,v)=>(l(),L(e(b),{key:v},{default:r(()=>[s("picture",null,[s("source",{srcset:d,media:"(min-width: 768px)"},null,8,O),s("img",{class:"w-100 object-fit-cover",src:d,loading:"lazy",alt:d},null,8,T)])]),_:2},1024))),128))]),_:2},1032,["modules"])]),s("div",U,[s("div",Y,[s("h3",$,i(a.name),1),s("p",q,i(a.decription),1),s("ul",H,[s("li",X,[o(e(c),{class:"mb-2 fs-5 text-primary-100",icon:"fluent:slide-size-24-filled"}),s("p",G,i(a.areaInfo),1)]),s("li",J,[o(e(c),{class:"mb-2 fs-5 text-primary-100",icon:"material-symbols:king-bed"}),s("p",K,i(a.bedInfo),1)]),s("li",M,[o(e(c),{class:"mb-2 fs-5 text-primary-100",icon:"ic:baseline-person"}),s("p",Q,i(a.maxPeople)+"人 ",1)])]),t[2]||(t[2]=s("div",{class:"deco-line w-100 mb-6 mb-md-10"},null,-1)),s("div",W,[s("p",Z," NT$ "+i(a.price),1),o(h,{to:{name:"rooms-id",params:{id:a._id}},class:"icon-link icon-link-hover text-primary-100"},{default:r(()=>[o(e(c),{class:"bi fs-5",icon:"mdi:arrow-right"})]),_:2},1032,["to"])])])])])]))),128))])])])])}}},rs=j(ss,[["__scopeId","data-v-2136d829"]]);export{rs as default};