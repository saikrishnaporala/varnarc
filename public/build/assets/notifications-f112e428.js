import{i as b,Z as p,r as o,c as g,w as t,o as v,a,f as s,h as e}from"./app-07231ff0.js";import{L as f}from"./main-d6f67001.js";import{P as _}from"./page-header-9874defb.js";import{C as y}from"./card-header-7b6a059f.js";import{_ as l}from"./logo-sm-eae269a3.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import"./simplebar-vue.esm-3d9a9dff.js";import"./logo-dark-24ab6998.js";import"./logo-light-01b48412.js";import"./avatar-2-4823f2b4.js";import"./avatar-3-cd4bfcf0.js";import"./avatar-5-577750b4.js";import"./russia-3c30e48e.js";import"./avatar-8-a9f045da.js";import"./avatar-6-c2396ad9.js";import"./prism-8e83551a.js";const x={components:{Layout:f,PageHeader:_,CardHeader:y,Link:b,Head:p}},C={class:"live-preview"},T=s("h5",{class:"fs-14 mb-3"},"Default Toast",-1),H=s("p",{class:"text-muted"},[e(" Use "),s("code",null,"toast"),e(" class to set a default toast. ")],-1),B=s("div",{class:"toast fade show",role:"alert","aria-live":"assertive","data-bs-autohide":"false","aria-atomic":"true"},[s("div",{class:"toast-header"},[s("img",{src:l,class:"rounded me-2",alt:"...",height:"20"}),s("span",{class:"fw-semibold me-auto"},"Velzon"),s("small",null,"06 mins ago"),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"})]),s("div",{class:"toast-body"},"Hello, world! This is a toast message.")],-1),V=s("div",{class:"mt-4"},[s("h5",{class:"fs-14"},"Translucent"),s("p",{class:"text-muted"}," Toasts are slightly translucent, too, so they blend over whatever they might appear over. "),s("div",{class:"p-3 bg-light"},[s("div",{class:"toast fade show",role:"alert","aria-live":"assertive","data-bs-autohide":"false","aria-atomic":"true"},[s("div",{class:"toast-header"},[s("img",{src:l,class:"rounded me-2",alt:"...",height:"20"}),s("span",{class:"fw-semibold me-auto"},"Velzon"),s("small",null,"11 mins ago"),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"})]),s("div",{class:"toast-body"},"Hello, world! This is a toast message.")])])],-1),z=s("div",null,[s("h5",{class:"fs-14"},"Stacking"),s("p",{class:"text-muted"}," When you have multiple toasts, we default to vertically stacking them in a readable manner. "),s("div",{class:"p-3 bg-light"},[s("div",{class:"toast fade show",role:"alert","aria-live":"assertive","data-bs-autohide":"false","aria-atomic":"true"},[s("div",{class:"toast-header"},[s("img",{src:l,class:"rounded me-2",alt:"...",height:"20"}),s("span",{class:"fw-semibold me-auto"},"Velzon"),s("small",null,"Just now"),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"})]),s("div",{class:"toast-body"},"See? Just like this.")]),s("div",{class:"toast fade show",role:"alert","aria-live":"assertive","data-bs-autohide":"false","aria-atomic":"true"},[s("div",{class:"toast-header"},[s("img",{src:l,class:"rounded me-2",alt:"...",height:"20"}),s("span",{class:"fw-semibold me-auto"},"Velzon"),s("small",null,"2 seconds ago"),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"})]),s("div",{class:"toast-body"},"Heads up, toasts will stack automatically")])])],-1),k={class:"mt-5"},P=s("h5",{class:"fs-14"},"Placement",-1),S=s("div",null,[s("p",{class:"text-muted"},[e(" Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you’re only ever going to show one toast at a time, put the positioning styles right on the "),s("code",null,".toast"),e(". ")]),s("div",{class:"bg-light","aria-live":"polite","aria-atomic":"true",style:{position:"relative","min-height":"200px"}},[s("div",{class:"toast fade show",role:"alert","aria-live":"assertive","aria-atomic":"true","data-bs-toggle":"toast",style:{position:"absolute",top:"16px",right:"16px"}},[s("div",{class:"toast-header"},[s("img",{src:l,class:"rounded me-2",alt:"...",height:"20"}),s("span",{class:"fw-semibold me-auto"},"Velzon"),s("small",null,"06 mins ago"),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"})]),s("div",{class:"toast-body"},"Hello, world! This is a toast message.")])])],-1),L=s("div",null,[s("p",{class:"text-muted"}," You can also get fancy with flexbox utilities to align toasts horizontally and/or vertically. "),s("div",{"aria-live":"polite","aria-atomic":"true",class:"bg-light d-flex justify-content-center align-items-center",style:{height:"200px"}},[s("div",{class:"toast fade show",role:"alert","aria-live":"assertive","data-bs-autohide":"false","aria-atomic":"true"},[s("div",{class:"toast-header"},[s("img",{src:l,class:"rounded me-2",alt:"...",height:"20"}),s("span",{class:"fw-semibold me-auto"},"Velzon"),s("small",null,"11 mins ago"),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"})]),s("div",{class:"toast-body"},"Hello, world! This is a toast message.")])])],-1),N=s("div",{class:"d-none code-view"},[s("pre",{class:"language-markup",style:{height:"275px"}},[e(""),s("code",null,`<!-- Default Toast --> 
<div class="toast fade show" role="alert" aria-live="assertive"
    data-bs-autohide="false" aria-atomic="true">
    <div class="toast-header">
        <img src="assets/images/logo-sm.png" class="rounded me-2"
            alt="..." height="20">
        <span class="fw-semibold me-auto">Velzon</span>
        <small>06 mins ago</small>
        <button type="button" class="btn-close"
            data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
        Hello, world! This is a toast message.
    </div>
</div>`),e(`

`),s("code",null,`<!-- Translucent Toast --> 
<div class="p-3 bg-light">
    <div class="toast fade show" role="alert" aria-live="assertive"
        data-bs-autohide="false" aria-atomic="true">
        <div class="toast-header">
            <img src="assets/images/logo-sm.png" class="rounded me-2"
                alt="..." height="20">
            <span class="fw-semibold me-auto">Velzon</span>
            <small>11 mins ago</small>
            <button type="button" class="btn-close"
                data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            Hello, world! This is a toast message.
        </div>
    </div>
</div>`),e(`

`),s("code",null,`<!-- Stacking Toast --> 
<div class="toast fade show" role="alert" aria-live="assertive"
    data-bs-autohide="false" aria-atomic="true">
    <div class="toast-header">
        <img src="assets/images/logo-sm.png" class="rounded me-2"
            alt="..." height="20">
        <span class="fw-semibold me-auto">Velzon</span>
        <small>Just now</small>
        <button type="button" class="btn-close"
            data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
        See? Just like this.
    </div>
</div>`),e(`

`),s("code",null,`<!-- Placement Toast --> 
<div class="bg-light" aria-live="polite" aria-atomic="true"
    style="position: relative; min-height: 200px;">
    <div class="toast fade show" role="alert" aria-live="assertive"
        aria-atomic="true" data-bs-toggle="toast"
        style="position: absolute; top: 16px; right: 16px;">
        <div class="toast-header">
            <img src="assets/images/logo-sm.png"
                class="rounded me-2" alt="..." height="20">
            <span class="fw-semibold me-auto">Velzon</span>
            <small>06 mins ago</small>
            <button type="button" class="btn-close"
                data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            Hello, world! This is a toast message.
        </div>
    </div>
</div>`),e(`

`),s("code",null,` <!-- Flexbox container for aligning the toasts -->
<div aria-live="polite" aria-atomic="true"
    class="bg-light d-flex justify-content-center align-items-center"
    style="height: 200px;">
    <div class="toast fade show" role="alert" aria-live="assertive"
        data-bs-autohide="false" aria-atomic="true">
        <div class="toast-header">
            <img src="assets/images/logo-sm.png"
                class="rounded me-2" alt="..." height="20">
            <span class="fw-semibold me-auto">Velzon</span>
            <small>11 mins ago</small>
            <button type="button" class="btn-close"
                data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            Hello, world! This is a toast message.
        </div>
    </div>
</div>`)])],-1);function J($,j,D,I,R,U){const d=o("Head"),r=o("PageHeader"),c=o("CardHeader"),i=o("BCol"),n=o("BRow"),m=o("BCardBody"),u=o("BCard"),h=o("Layout");return v(),g(h,null,{default:t(()=>[a(d,{title:"Notifications"}),a(r,{title:"Notifications",pageTitle:"Base UI"}),a(n,null,{default:t(()=>[a(i,{lg:"12"},{default:t(()=>[a(u,{"no-body":""},{default:t(()=>[a(c,{title:"Bootstrap Toasts"}),a(m,null,{default:t(()=>[s("div",C,[a(n,{class:"g-3"},{default:t(()=>[a(i,{xxl:"6"},{default:t(()=>[T,H,B,V]),_:1}),a(i,{xxl:"6"},{default:t(()=>[z]),_:1})]),_:1}),s("div",k,[P,a(n,{class:"g-3"},{default:t(()=>[a(i,{xxl:"6"},{default:t(()=>[S]),_:1}),a(i,{xxl:"6"},{default:t(()=>[L]),_:1})]),_:1})])]),N]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const es=w(x,[["render",J]]);export{es as default};
