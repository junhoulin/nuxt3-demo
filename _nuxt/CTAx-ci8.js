import{S as h,_ as P,a as k,b as S,A as R,N as $,P as A}from"./BWZC9isq.js";import{B as u,_ as B,r as p,C as z,c as n,a as s,b as i,w as d,q as o,d as l,F as b,s as f,D as V,o as a,t as r,v as j}from"./DeoSQKGc.js";import{_ as D}from"./CU2sBTZx.js";import{_ as F}from"./DQyTWqE2.js";import{I as m}from"./BVrv9uHQ.js";import{u as N}from"./CspKsf-x.js";import"./IShi1APO.js";const O=u("/images/home-room-1.png"),T=u("/images/home-room-sm-1.png"),U=u("/images/home-map.png"),q=u("/images/home-map-sm.png"),E=S,X=O,H=U,Y=D,G={class:"overflow-hidden"},J={class:"hero position-relative"},K={class:"hero-wrapper d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-md-between gap-md-10 w-100 px-md-20 position-absolute z-2"},M={class:"hero__intro position-relative"},Q={class:"hero__intro-content"},W={class:"news bg-primary-10 py-20 py-md-30"},Z={class:"container position-relative"},ss={class:"row"},ts={class:"col-12 col-md-10 d-flex flex-column gap-10"},es={class:"d-flex flex-column flex-md-row align-items-center gap-6"},os=["srcset"],is=["src"],ls={class:"card-body p-0"},ns={class:"card-title mb-2 mb-md-6 fw-bold"},as={class:"card-text text-neutral-80 fs-8 fs-md-7 fw-medium"},ds={class:"room-intro position-relative px-3 py-20 px-md-0 py-md-30 bg-neutral-120"},rs={class:"d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-md-start align-items-md-end gap-6 gap-md-20"},ms={class:"room-intro-content text-neutral-0"},cs={class:"d-flex justify-content-end"},ps={class:"delicacy position-relative py-20 py-md-30 bg-primary-10"},bs={class:"container"},fs={class:"row flex-nowrap overflow-x-auto"},us={class:"card position-relative border-0 rounded-3"},vs=["srcset"],_s=["src","alt"],xs={class:"card-body position-absolute bottom-0 p-4 p-md-6 rounded-bottom-3 text-neutral-0"},gs={class:"d-flex justify-content-between align-items-center mb-4 mb-md-6"},ws={class:"card-title mb-0 fw-bold"},ys={class:"d-flex justify-content-between gap-4 text-neutral-40 fs-8 fs-md-7"},hs={class:"fw-bold"},ks={class:"card-text fs-8 fs-md-7"},js={class:"transportation bg-neutral-120"},Ns={class:"container pt-20 pb-10 pt-md-30 pb-md-20"},Cs={class:"row gap-6 gap-md-0"},Is={class:"col-12 col-md-4 text-neutral-0"},Ls={class:"col-12 col-md-4 text-neutral-0"},Ps={class:"col-12 col-md-4 text-neutral-0"},Ss={__name:"index",setup(Rs){const x=p([R,$,A]),v=p(null),g=p([]),w=p([]),C=()=>{v.value.$el.swiper.slidePrev()},I=()=>{v.value.$el.swiper.slideNext()},L=async()=>{const c=j();try{const{data:t}=await N("/home/news/",{baseURL:c.public.apiBase,method:"get"},"$PslAyef5YX");g.value=t.value.result}catch(t){t.data?console.log("API 回應錯誤內容:",t.data):console.log("登入失敗，伺服器未返回詳細資訊！")}};return(async()=>{const c=j();try{const{data:t}=await N("/home/culinary",{baseURL:c.public.apiBase,method:"get"},"$6PO73qLRkI");w.value=t.value.result}catch(t){t.data?console.log("API 回應錯誤內容:",t.data):console.log("登入失敗，伺服器未返回詳細資訊！")}})(),L(),(c,t)=>{const y=z("RouterLink");return a(),n("main",G,[s("section",J,[i(o(k),{modules:o(x),"slides-per-view":1,pagination:!0,autoplay:{delay:3e3,disableOnInteraction:!1}},{default:d(()=>[(a(),n(b,null,f(5,(e,_)=>i(o(h),{key:_},{default:d(()=>t[0]||(t[0]=[s("picture",null,[s("source",{srcset:E,media:"(min-width:576px)"}),s("img",{class:"hero-img",src:P,alt:"hero banner"})],-1)])),_:2},1024)),64))]),_:1},8,["modules"]),s("div",K,[t[4]||(t[4]=s("div",{class:"d-flex flex-column align-items-center text-center d-md-block text-md-start"},[s("div",{class:"mt-10 mb-5 mt-md-0 mb-md-10 text-primary-100 fw-bold"},[s("h2",null," 享樂酒店 "),s("h5",{class:"mb-0 fs-7 fs-md-5"}," Enjoyment Luxury Hotel ")]),s("div",{class:"deco-line"})],-1)),s("div",M,[s("div",Q,[t[2]||(t[2]=s("h1",{class:"mb-6 text-white fw-bold text-nowrap"},[l(" 高雄"),s("br"),l("豪華住宿之選 ")],-1)),t[3]||(t[3]=s("p",{class:"text-neutral-40 fw-semibold"}," 我們致力於為您提供無與倫比的奢華體驗與優質服務 ",-1)),i(y,{to:"/rooms",class:"btn btn-neutral-0 d-flex justify-content-end align-items-center gap-3 w-100 text-end text-neutral-100 fs-5 fw-semibold border-0"},{default:d(()=>t[1]||(t[1]=[l(" 立即訂房 "),s("div",{class:"cta-deco"},null,-1)])),_:1})])])])]),s("section",W,[s("div",Z,[s("div",ss,[t[5]||(t[5]=s("div",{class:"col-12 col-md-2"},[s("div",{class:"mb-10 mb-md-0"},[s("h2",{class:"mb-6 mb-md-10 fs-1 fw-bold text-primary-100"},[l(" 最新"),s("br"),l("消息 ")]),s("div",{class:"deco-line"})])],-1)),s("div",ts,[(a(!0),n(b,null,f(o(g),e=>(a(),n("div",{class:"card bg-transparent border-0",key:e._id},[s("div",es,[s("picture",null,[s("source",{srcset:e.image,media:"(min-width: 576px)"},null,8,os),s("img",{src:e.image,class:"w-100 rounded-3",alt:"可看見海景及泳池的套房"},null,8,is)]),s("div",ls,[s("h3",ns,r(e.title),1),s("p",as,r(e.description),1)])])]))),128))])])])]),t[22]||(t[22]=V('<section class="about position-relative z-n1 bg-neutral-120 py-20 py-md-30" data-v-fe475eb4><div class="container p-0" data-v-fe475eb4><div class="about-content p-6 p-md-20 mt-10 ms-10 me-5 mt-md-20 mx-md-auto text-neutral-0" data-v-fe475eb4><div class="d-flex align-items-center gap-10 mb-10 mb-md-20" data-v-fe475eb4><h2 class="text-nowrap mb-0 fs-1 fw-bold" data-v-fe475eb4> 關於<br data-v-fe475eb4>我們 </h2><div class="deco-line" data-v-fe475eb4></div></div><div class="d-flex flex-column gap-4 gap-md-10 fw-medium" data-v-fe475eb4><p class="mb-0 fs-8 fs-md-7" data-v-fe475eb4> 享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。 <br data-v-fe475eb4> 我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。 </p><p class="mb-0 fs-8 fs-md-7" data-v-fe475eb4> 我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。 <br data-v-fe475eb4> 我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。 </p><p class="mb-0 fs-8 fs-md-7" data-v-fe475eb4> 在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。 </p><p class="mb-0 fs-8 fs-md-7" data-v-fe475eb4> 享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。 </p></div></div></div></section>',1)),s("section",ds,[s("div",rs,[i(o(k),{ref_key:"roomSwiper",ref:v,modules:o(x),"slides-per-view":1,pagination:!0,autoplay:{delay:5e3,disableOnInteraction:!1},loop:!0},{default:d(()=>[(a(),n(b,null,f(5,(e,_)=>i(o(h),{key:_},{default:d(()=>t[6]||(t[6]=[s("picture",null,[s("source",{srcset:X,media:"(min-width:768px)"}),s("img",{class:"w-100",src:T,alt:"room-a"})],-1)])),_:2},1024)),64))]),_:1},8,["modules"]),s("div",ms,[t[8]||(t[8]=s("h2",{class:"mb-2 mb-md-4 fw-bold"}," 尊爵雙人房 ",-1)),t[9]||(t[9]=s("p",{class:"mb-6 mb-md-10 fs-8 fs-md-7"}," 享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。 ",-1)),t[10]||(t[10]=s("div",{class:"mb-6 mb-md-10 fs-3 fw-bold"}," NT$ 10,000 ",-1)),i(y,{to:"/rooms",class:"btn btn-neutral-0 d-flex justify-content-end align-items-center gap-3 w-100 p-5 p-md-10 mb-6 mb-md-10 text-end text-neutral-100 fs-7 fs-md-5 fw-bold border-0"},{default:d(()=>t[7]||(t[7]=[l(" 查看更多 "),s("div",{class:"cta-deco"},null,-1)])),_:1}),s("div",cs,[s("button",{class:"bg-transparent text-primary-100 icon-link icon-link-hover border-0",type:"button",onClick:C},[i(o(m),{icon:"mdi:arrow-left",class:"bi m-4",style:{"font-size":"1.5rem","--bs-icon-link-transform":"translateX(-0.25em)"}})]),s("button",{class:"bg-transparent text-primary-100 icon-link icon-link-hover border-0",type:"button",onClick:I},[i(o(m),{icon:"mdi:arrow-right",class:"bi m-4",style:{"font-size":"1.5rem"}})])])])])]),s("section",ps,[s("div",bs,[t[12]||(t[12]=s("div",{class:"d-flex align-items-center gap-10 mb-10 mb-md-20"},[s("h2",{class:"mb-0 fs-1 fw-bold text-primary-100"},[l(" 佳餚"),s("br"),l("美饌 ")]),s("div",{class:"deco-line"})],-1)),s("div",fs,[(a(!0),n(b,null,f(o(w),e=>(a(),n("div",{class:"col-10 col-md-6 col-xl-4",key:e._id},[s("div",us,[s("picture",null,[s("source",{srcset:e.image,media:"(min-width: 576px)"},null,8,vs),s("img",{class:"w-100 rounded-3",src:e.image,alt:e.title},null,8,_s)]),s("div",xs,[s("div",gs,[s("h5",ws,r(e.title),1),s("div",ys,[s("span",hs,r(e.diningTime),1),t[11]||(t[11]=s("span",{class:"fw-bold"},null,-1))])]),s("p",ks,r(e.description),1)])])]))),128))])])]),s("section",js,[s("div",Ns,[t[20]||(t[20]=s("div",{class:"d-flex align-items-center gap-10 mb-10 mb-md-20"},[s("h2",{class:"mb-0 fs-1 fw-bold text-primary-100"},[l(" 交通"),s("br"),l("方式 ")]),s("div",{class:"deco-line"})],-1)),s("div",Cs,[t[19]||(t[19]=s("div",{class:"col-12 mb-md-10"},[s("p",{class:"text-neutral-40 fw-bold"}," 台灣高雄市新興區六角路123號 "),s("picture",null,[s("source",{srcset:H,media:"(min-width: 576px)"}),s("img",{class:"w-100",src:q,alt:"描述地圖中酒店所在的位置"})])],-1)),s("div",Is,[i(o(m),{class:"mb-2 mb-md-4 display-1 text-primary-100",icon:"ic:baseline-directions-car"}),t[13]||(t[13]=s("h5",{class:"fs-7 fs-md-5 fw-bold"}," 自行開車 ",-1)),t[14]||(t[14]=s("p",{class:"mb-0 fs-8 fs-md-7"}," 如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。 ",-1))]),s("div",Ls,[i(o(m),{class:"mb-2 mb-md-4 display-1 text-primary-100",icon:"ic:baseline-train"}),t[15]||(t[15]=s("h5",{class:"fs-7 fs-md-5 fw-bold"}," 高鐵/火車 ",-1)),t[16]||(t[16]=s("p",{class:"mb-0 fs-8 fs-md-7"}," 如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。 ",-1))]),s("div",Ps,[i(o(m),{class:"mb-2 mb-md-4 display-1 text-primary-100",icon:"mdi:car-side"}),t[17]||(t[17]=s("h5",{class:"fs-7 fs-md-5 fw-bold"}," 禮賓車服務 ",-1)),t[18]||(t[18]=s("p",{class:"mb-0 fs-8 fs-md-7"}," 承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567 ",-1))])])]),t[21]||(t[21]=s("picture",null,[s("source",{srcset:Y,media:"(min-width:576px)"}),s("img",{class:"w-100",src:F,alt:"deco-line-group"})],-1))])])}}},Ts=B(Ss,[["__scopeId","data-v-fe475eb4"]]);export{Ts as default};
