import{_ as P,r as w,p as U,c as i,a as t,b as f,q as s,t as o,x as c,y as x,z as $,F as y,s as g,m as _,A as p,o as n}from"./DeoSQKGc.js";import{_ as L}from"./C5dIsgQ6.js";import M from"./dtmOFE84.js";import{I as r}from"./BVrv9uHQ.js";import{u as z}from"./CgsauBUa.js";import"./BgMDfBSU.js";import"./IShi1APO.js";const S={class:"pt-18 pt-md-30 bg-neutral-120"},F={class:"py-10 py-md-30 bg-primary-10"},R={class:"container"},q={class:"row gap-10 gap-md-0"},A={class:"col-12 col-md-7"},E={class:"d-flex flex-column gap-6"},Z={class:"d-flex justify-content-between align-items-center text-neutral-100"},G={class:"mb-0 fw-medium"},H={class:"d-flex justify-content-between align-items-center text-neutral-100"},J={class:"mb-2 fw-medium"},K={class:"mb-0 fw-medium"},O={class:"d-flex justify-content-between align-items-center text-neutral-100"},Q={class:"mb-0 fw-medium"},W={class:"d-flex flex-column gap-6"},X={class:"text-neutral-100"},Y={class:"text-neutral-100"},tt={class:"text-neutral-100"},et={class:"text-neutral-100"},st={className:"d-flex gap-2"},lt=["value"],ot={class:"d-flex flex-column gap-6"},nt={class:"d-flex gap-4 list-unstyled"},dt={class:"card-info px-4 py-5 bg-neutral-0 border border-primary-40 rounded-3"},at={class:"mb-0 fw-bold text-neutral-80 text-nowrap"},it={class:"card-info px-4 py-5 bg-neutral-0 border border-primary-40 rounded-3"},rt={class:"mb-0 fw-bold text-neutral-80 text-nowrap"},mt={class:"card-info px-4 py-5 bg-neutral-0 border border-primary-40 rounded-3"},ut={class:"mb-0 fw-bold text-neutral-80 text-nowrap"},ft={class:"d-flex flex-wrap gap-6 gap-md-10 p-6 fs-8 fs-md-7 bg-neutral-0 rounded-3 list-unstyled"},ct={class:"mb-0 text-neutral-80 fw-bold"},pt={class:"d-flex flex-wrap row-gap-2 column-gap-10 p-6 mb-0 fs-8 fs-md-7 bg-neutral-0 rounded-3 list-unstyled"},bt={key:1,class:"mb-0 text-neutral-80 fw-bold"},xt={class:"d-flex flex-wrap row-gap-2 column-gap-10 p-6 mb-0 fs-8 fs-md-7 bg-neutral-0 rounded-3 list-unstyled"},yt={key:1,class:"mb-0 text-neutral-80 fw-bold"},gt={class:"col-12 col-md-5"},wt={class:"confirm-form rounded-3xl d-flex flex-column gap-10 p-6 p-md-10 mx-auto ms-md-auto me-md-0 bg-neutral-0"},_t={class:"d-flex justify-content-between align-items-center mb-3"},vt={class:"d-flex align-items-center text-neutral-100 fw-medium"},kt={class:"text-neutral-80"},ht={class:"fw-medium"},zt={class:"d-flex justify-content-between align-items-center fw-medium"},Nt={class:"text-primary-100"},Bt={class:"d-flex justify-content-between align-items-center text-neutral-100 fw-bold"},Dt={__name:"index",setup(It){const N=w([{detail:"100臺北市中正區",zipcode:100,city:"臺北市",county:"中正區"},{detail:"103臺北市大同區",zipcode:103,city:"臺北市",county:"大同區"},{detail:"104臺北市中山區",zipcode:104,city:"臺北市",county:"中山區"},{detail:"105臺北市松山區",zipcode:105,city:"臺北市",county:"松山區"},{detail:"106臺北市大安區",zipcode:106,city:"臺北市",county:"大安區"}]),v=U(),u=z(),{pushBooking:B}=z(),d=u.roomData,D=u.bookingPeople,I=u.daysCount,k=u.bookingDate,V=u.discount,j=u.totalPrice,a=w({address:{zipcode:100,detail:""},name:"",phone:"",email:""}),C=()=>{v.back()},b=w(!1),T=async()=>{b.value=!0;try{{const e=(await B(a.value)).result._id;setTimeout(()=>{b.value=!1,v.push({name:"booking-bookid",params:{bookid:e}})},1500)}}catch{alert("error"),b.value=!1}};return(h,e)=>(n(),i("main",S,[t("section",F,[t("div",R,[t("button",{class:"d-flex align-items-baseline gap-2 mb-10 bg-transparent border-0",type:"button",onClick:C},[f(s(r),{class:"fs-5 text-neutral-100",icon:"mdi:keyboard-arrow-left"}),e[5]||(e[5]=t("h1",{class:"mb-0 text-neutral-100 fs-3 fw-bold"}," 確認訂房資訊 ",-1))]),t("div",q,[t("div",A,[t("section",null,[e[12]||(e[12]=t("h2",{class:"mb-8 mb-md-10 text-neutral-100 fs-6 fs-md-4 fw-bold"}," 訂房資訊 ",-1)),t("div",E,[t("div",Z,[t("div",null,[e[6]||(e[6]=t("h3",{class:"title-deco mb-2 fs-7 fw-bold"}," 選擇房型 ",-1)),t("p",G,o(s(d).name),1)]),e[7]||(e[7]=t("button",{class:"bg-transparent border-0 fw-bold text-decoration-underline",type:"button"}," 編輯 ",-1))]),t("div",H,[t("div",null,[e[8]||(e[8]=t("h3",{class:"title-deco mb-2 fs-7 fw-bold"}," 訂房日期 ",-1)),t("p",J," 入住："+o(s(k).date.start),1),t("p",K," 退房："+o(s(k).date.end),1)]),e[9]||(e[9]=t("button",{class:"bg-transparent border-0 fw-bold text-decoration-underline",type:"button"}," 編輯 ",-1))]),t("div",O,[t("div",null,[e[10]||(e[10]=t("h3",{class:"title-deco mb-2 fs-7 fw-bold"}," 房客人數 ",-1)),t("p",Q,o(s(D))+" 人 ",1)]),e[11]||(e[11]=t("button",{class:"bg-transparent border-0 fw-bold text-decoration-underline",type:"button"}," 編輯 ",-1))])])]),e[23]||(e[23]=t("hr",{class:"my-10 my-md-12 opacity-100 text-neutral-60"},null,-1)),t("section",null,[e[17]||(e[17]=t("div",{class:"d-flex justify-content-between align-items-center mb-10"},[t("h2",{class:"mb-0 text-neutral-100 fs-6 fs-md-4 fw-bold"}," 訂房人資訊 "),t("button",{class:"text-primary-100 bg-transparent border-0 fw-bold text-decoration-underline",type:"button"}," 套用會員資料 ")],-1)),t("div",W,[t("div",X,[e[13]||(e[13]=t("label",{for:"name",class:"form-label fs-8 fs-md-7 fw-bold"},"姓名",-1)),c(t("input",{id:"name",type:"text",class:"form-control p-4 fs-8 fs-md-7 rounded-3",placeholder:"請輸入姓名","onUpdate:modelValue":e[0]||(e[0]=l=>s(a).name=l)},null,512),[[x,s(a).name]])]),t("div",Y,[e[14]||(e[14]=t("label",{for:"phone",class:"form-label fs-8 fs-md-7 fw-bold"},"手機號碼",-1)),c(t("input",{id:"phone",type:"tel",class:"form-control p-4 fs-8 fs-md-7 rounded-3",placeholder:"請輸入手機號碼","onUpdate:modelValue":e[1]||(e[1]=l=>s(a).phone=l)},null,512),[[x,s(a).phone]])]),t("div",tt,[e[15]||(e[15]=t("label",{for:"email",class:"form-label fs-8 fs-md-7 fw-bold"},"電子信箱",-1)),c(t("input",{id:"email",type:"email",class:"form-control p-4 fs-8 fs-md-7 rounded-3",placeholder:"請輸入電子信箱","onUpdate:modelValue":e[2]||(e[2]=l=>s(a).email=l)},null,512),[[x,s(a).email]])]),t("div",et,[e[16]||(e[16]=t("label",{for:"address",class:"form-label fs-8 fs-md-7 fw-bold"},"地址",-1)),t("div",st,[c(t("select",{class:"form-select p-4 text-neutral-80 fs-8 fs-md-7 fw-medium rounded-3","onUpdate:modelValue":e[3]||(e[3]=l=>s(a).address.zipcode=l)},[(n(!0),i(y,null,g(s(N),(l,m)=>(n(),i("option",{key:m,value:l.zipcode},o(l.detail),9,lt))),128))],512),[[$,s(a).address.zipcode]])]),c(t("input",{id:"address",type:"text",class:"form-control p-4 fs-8 fs-md-7 rounded-3 mt-4",placeholder:"請輸入詳細地址","onUpdate:modelValue":e[4]||(e[4]=l=>s(a).address.detail=l)},null,512),[[x,s(a).address.detail]])])])]),e[24]||(e[24]=t("hr",{class:"my-10 my-md-12 opacity-100 text-neutral-60"},null,-1)),t("section",null,[e[22]||(e[22]=t("h2",{class:"mb-8 mb-md-10 text-neutral-100 fs-6 fs-md-4 fw-bold"}," 房間資訊 ",-1)),t("div",ot,[t("section",null,[e[18]||(e[18]=t("h3",{class:"title-deco mb-4 mb-md-6 fs-7 fs-md-5 fw-bold"}," 房型基本資訊 ",-1)),t("ul",nt,[t("li",dt,[f(s(r),{class:"mb-2 fs-5 text-primary-100",icon:"fluent:slide-size-24-filled"}),t("p",at,o(s(d).areaInfo),1)]),t("li",it,[f(s(r),{class:"mb-2 fs-5 text-primary-100",icon:"material-symbols:king-bed"}),t("p",rt,o(s(d).bedInfo),1)]),t("li",mt,[f(s(r),{class:"mb-2 fs-5 text-primary-100",icon:"ic:baseline-person"}),t("p",ut,o(s(d).maxPeople)+" 人 ",1)])])]),t("section",null,[e[19]||(e[19]=t("h3",{class:"title-deco mb-4 mb-md-6 text-neutral-100 fs-7 fs-md-5 fw-bold"}," 房間格局 ",-1)),t("ul",ft,[(n(!0),i(y,null,g(s(d).layoutInfo,(l,m)=>(n(),i("li",{class:"d-flex gap-2",key:m},[f(s(r),{class:"fs-5 text-primary-100",icon:"material-symbols:check"}),t("p",ct,o(l.title),1)]))),128))])]),t("section",null,[e[20]||(e[20]=t("h3",{class:"title-deco mb-4 mb-md-6 text-neutral-100 fs-7 fs-md-5 fw-bold"}," 房內設備 ",-1)),t("ul",pt,[(n(!0),i(y,null,g(s(d).facilityInfo,(l,m)=>(n(),i("li",{class:"flex-item d-flex gap-2",key:m},[s(d)?(n(),_(s(r),{key:0,class:"fs-5 text-primary-100",icon:"material-symbols:check"})):p("",!0),s(d)?(n(),i("p",bt,o(l.title),1)):p("",!0)]))),128))])]),t("section",null,[e[21]||(e[21]=t("h3",{class:"title-deco mb-4 mb-md-6 text-neutral-100 fs-7 fs-md-5 fw-bold"}," 備品提供 ",-1)),t("ul",xt,[(n(!0),i(y,null,g(s(d).amenityInfo,(l,m)=>(n(),i("li",{class:"flex-item d-flex gap-2",key:m},[s(d)?(n(),_(s(r),{key:0,class:"fs-5 text-primary-100",icon:"material-symbols:check"})):p("",!0),s(d)?(n(),i("p",yt,o(l.title),1)):p("",!0)]))),128))])])])])]),t("div",gt,[t("div",wt,[e[29]||(e[29]=t("img",{class:"img-fluid rounded-3",src:L,alt:"room-a"},null,-1)),t("div",null,[e[27]||(e[27]=t("h2",{className:"mb-6 text-neutral-100 fs-6 fs-md-4 fw-bold"}," 價格詳情 ",-1)),t("div",_t,[t("div",vt,[t("span",null,"NT$ "+o(s(d).price),1),f(s(r),{class:"ms-2 me-1 text-neutral-80",icon:"material-symbols:close"}),t("span",kt,o(s(I))+"晚",1)]),t("span",ht," NT$ "+o(s(d).price),1)]),t("div",zt,[e[25]||(e[25]=t("p",{class:"d-flex align-items-center mb-0 text-neutral-100"}," 住宿折扣 ",-1)),t("span",Nt," -NT$ "+o(s(V)),1)]),e[28]||(e[28]=t("hr",{class:"my-6 opacity-100 text-neutral-40"},null,-1)),t("div",Bt,[e[26]||(e[26]=t("p",{class:"d-flex align-items-center mb-0"}," 總價 ",-1)),t("span",null," NT$ "+o(s(j)),1)])]),t("button",{class:"btn btn-primary-100 py-4 text-neutral-0 fw-bold rounded-3",type:"button",onClick:T}," 確認訂房 ")])])])])]),s(b)?(n(),_(M,{key:0})):p("",!0)]))}},Lt=P(Dt,[["__scopeId","data-v-8829760c"]]);export{Lt as default};
