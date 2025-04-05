import{i as u,Z as m,r as c,c as f,w as a,o as g,a as e,f as l,h as s}from"./app-07231ff0.js";import{L as b}from"./main-d6f67001.js";import{P as w}from"./page-header-9874defb.js";import{C as x}from"./card-header-7b6a059f.js";import{_ as B}from"./img-1-692177ef.js";import{_ as y}from"./img-2-55da122e.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import"./simplebar-vue.esm-3d9a9dff.js";import"./logo-sm-eae269a3.js";import"./logo-dark-24ab6998.js";import"./logo-light-01b48412.js";import"./avatar-2-4823f2b4.js";import"./avatar-3-cd4bfcf0.js";import"./avatar-5-577750b4.js";import"./russia-3c30e48e.js";import"./avatar-8-a9f045da.js";import"./avatar-6-c2396ad9.js";import"./prism-8e83551a.js";const v={components:{Layout:b,PageHeader:w,CardHeader:x,Link:u,Head:m}},k=l("p",{class:"text-muted"},"In the example below, we take a typical card component and recreate it with placeholders applied to create a “loading card”.",-1),H={class:"live-preview"},L=l("img",{src:B,class:"card-img-top",alt:"card img"},null,-1),P=l("h5",{class:"card-title"},"Card title",-1),S=l("p",{class:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content.",-1),z=l("img",{src:y,class:"card-img-top",alt:"card dummy img"},null,-1),U=l("h5",{class:"card-title placeholder-glow"},[l("span",{class:"placeholder col-6"})],-1),$=l("p",{class:"card-text placeholder-glow"},[l("span",{class:"placeholder col-7"}),l("span",{class:"placeholder col-4"}),l("span",{class:"placeholder col-4"}),l("span",{class:"placeholder col-6"})],-1),j=l("div",{class:"d-none code-view"},[l("pre",{class:"language-markup",style:{height:"275px"}},[s(""),l("code",null,`<!-- Base Examples -->
<BCard>
    <img src="..." class="card-img-top" alt="card img">
    <BCard no-body>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </BCard>
</BCard>`),s(`

`),l("code",null,`<BCard aria-hidden="true">
    <img src="assets/images/small/img-2.jpg" class="card-img-top" alt="card dummy img">
    <BCard no-body>
      <BCard title=" " class="placeholder-glow">
        <span class="placeholder col-6"></span>
      </BCard>
      <BCard-text class="placeholder-glow">
        <span class="placeholder col-7"></span>
        <span class="placeholder col-4"></span>
        <span class="placeholder col-4"></span>
        <span class="placeholder col-6"></span>
      </BCard-text>
      <BLink  href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></BLink >
    </BCard>
</BCard>`)])],-1),N=l("p",{class:"text-muted"},[s(" Use "),l("code",null,"w-25,w-50,w-75"),s(" or "),l("code",null,"w-100"),s(" class to placeholder class to set different widths to the placeholder. ")],-1),V=l("div",{class:"live-preview"},[l("span",{class:"placeholder w-50"}),l("span",{class:"placeholder w-75"}),l("span",{class:"placeholder w-25"}),l("span",{class:"placeholder w-100"})],-1),q=l("div",{class:"d-none code-view"},[l("pre",{class:"language-markup"},[s(""),l("code",null,`<!-- Width Sizing-->
<div class="live-preview">
    <span class="placeholder col-6"></span>
    <span class="placeholder w-75"></span>
    <span class="placeholder" style="width: 25%;"></span>
</div>`)])],-1),G=l("p",{class:"text-muted"},[s(" Use "),l("code",null,"placeholder-lg"),s(", "),l("code",null,"placeholder-sm"),s(", or "),l("code",null,"placeholder-xs"),s(" class to placeholder class to set different size placeholder. ")],-1),I={class:"live-preview"},R=l("span",{class:"placeholder placeholder-lg w-100"},null,-1),T=l("span",{class:"placeholder w-100"},null,-1),W=l("span",{class:"placeholder placeholder-sm w-100"},null,-1),D=l("span",{class:"placeholder placeholder-xs w-100"},null,-1),E=l("div",{class:"d-none code-view"},[l("pre",{class:"language-markup"},[s(""),l("code",null,`<!-- Sizing -->
<span class="placeholder col-12 placeholder-lg"></span>`),s(`

`),l("code",null,'<span class="placeholder col-12"></span>'),s(`

`),l("code",null,'<span class="placeholder col-12 placeholder-sm"></span>'),s(`

`),l("code",null,'<span class="placeholder col-12 placeholder-xs"></span>')])],-1),Z=l("p",{class:"text-muted"},[s(" Use "),l("code",null,"bg-"),s(" class with the below-mentioned color variation to set a custom color. ")],-1),A={class:"live-preview"},F=l("span",{class:"placeholder w-100"},null,-1),J=l("span",{class:"placeholder bg-primary w-100"},null,-1),K=l("span",{class:"placeholder bg-secondary w-100"},null,-1),M=l("span",{class:"placeholder bg-success w-100"},null,-1),O=l("span",{class:"placeholder bg-danger w-100"},null,-1),Q=l("span",{class:"placeholder bg-warning w-100"},null,-1),X=l("span",{class:"placeholder bg-info w-100"},null,-1),Y=l("span",{class:"placeholder bg-light w-100"},null,-1),ll=l("span",{class:"placeholder bg-dark w-100"},null,-1),el=l("div",{class:"d-none code-view"},[l("pre",{class:"language-markup",style:{height:"275px"}},[s(""),l("code",null,`<!-- Color -->
<span class="placeholder col-12 mb-3"></span>`),s(`

`),l("code",null,'<span class="placeholder col-12 mb-3 bg-primary"></span>'),s(`

`),l("code",null,'<span class="placeholder col-12 mb-3 bg-secondary"></span>'),s(`

`),l("code",null,'<span class="placeholder col-12 mb-3 bg-success"></span>'),s(`

`),l("code",null,'<span class="placeholder col-12 mb-3 bg-danger"></span>'),s(`

`),l("code",null,'<span class="placeholder col-12 mb-3 bg-warning"></span>'),s(`

`),l("code",null,'<span class="placeholder col-12 mb-3 bg-info"></span>'),s(`

`),l("code",null,'<span class="placeholder col-12 mb-3 bg-light"></span>'),s(`

`),l("code",null,'<span class="placeholder col-12 mb-3 bg-dark"></span>')])],-1);function al(sl,ol,cl,nl,tl,dl){const i=c("Head"),_=c("PageHeader"),r=c("CardHeader"),p=c("BLink"),t=c("BCardBody"),d=c("BCard"),o=c("BCol"),n=c("BRow"),h=c("Layout");return g(),f(h,null,{default:a(()=>[e(i,{title:"Placeholders"}),e(_,{title:"Placeholders",pageTitle:"Base UI"}),e(n,null,{default:a(()=>[e(o,{lg:"12"},{default:a(()=>[e(d,{"no-body":""},{default:a(()=>[e(r,{title:"Default Placeholder"}),e(t,null,{default:a(()=>[k,l("div",H,[e(n,{class:"justify-content-center"},{default:a(()=>[e(o,{xl:"7"},{default:a(()=>[e(n,{class:"justify-content-between"},{default:a(()=>[e(o,{lg:"5",sm:"6"},{default:a(()=>[e(d,{"no-body":""},{default:a(()=>[L,e(t,null,{default:a(()=>[P,S,e(p,{href:"#",class:"btn btn-primary"},{default:a(()=>[s("Go somewhere")]),_:1})]),_:1})]),_:1})]),_:1}),e(o,{lg:"5",sm:"6"},{default:a(()=>[e(d,{"no-body":"","aria-hidden":"true"},{default:a(()=>[z,e(t,null,{default:a(()=>[U,$,e(p,{href:"#",tabindex:"-1",class:"btn btn-primary disabled placeholder col-6"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),j]),_:1})]),_:1})]),_:1})]),_:1}),e(n,null,{default:a(()=>[e(o,{xxl:"6"},{default:a(()=>[e(d,{"no-body":""},{default:a(()=>[e(r,{title:"Width"}),e(t,null,{default:a(()=>[N,V,q]),_:1})]),_:1})]),_:1}),e(o,{xxl:"6"},{default:a(()=>[e(d,{"no-body":""},{default:a(()=>[e(r,{title:"Sizing"}),e(t,null,{default:a(()=>[G,l("div",I,[e(n,{class:"gap-0"},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[R]),_:1}),e(o,{cols:"12"},{default:a(()=>[T]),_:1}),e(o,{cols:"12"},{default:a(()=>[W]),_:1}),e(o,{cols:"12"},{default:a(()=>[D]),_:1})]),_:1})]),E]),_:1})]),_:1})]),_:1})]),_:1}),e(n,null,{default:a(()=>[e(o,{lg:"12"},{default:a(()=>[e(d,{"no-body":""},{default:a(()=>[e(r,{title:"Color"}),e(t,null,{default:a(()=>[Z,l("div",A,[e(n,{class:"g-2"},{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[F]),_:1}),e(o,{cols:"12"},{default:a(()=>[J]),_:1}),e(o,{cols:"12"},{default:a(()=>[K]),_:1}),e(o,{cols:"12"},{default:a(()=>[M]),_:1}),e(o,{cols:"12"},{default:a(()=>[O]),_:1}),e(o,{cols:"12"},{default:a(()=>[Q]),_:1}),e(o,{cols:"12"},{default:a(()=>[X]),_:1}),e(o,{cols:"12"},{default:a(()=>[Y]),_:1}),e(o,{cols:"12"},{default:a(()=>[ll]),_:1})]),_:1})]),el]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const Ll=C(v,[["render",al]]);export{Ll as default};
