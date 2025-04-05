import{i as h,Z as g,r as c,c as b,w as l,o as O,a as e,f as o,h as t}from"./app-07231ff0.js";import{L as S}from"./main-d6f67001.js";import{P as w}from"./page-header-9874defb.js";import{C as T}from"./card-header-7b6a059f.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";import"./simplebar-vue.esm-3d9a9dff.js";import"./logo-sm-eae269a3.js";import"./logo-dark-24ab6998.js";import"./logo-light-01b48412.js";import"./avatar-2-4823f2b4.js";import"./avatar-3-cd4bfcf0.js";import"./avatar-5-577750b4.js";import"./russia-3c30e48e.js";import"./avatar-8-a9f045da.js";import"./avatar-6-c2396ad9.js";import"./prism-8e83551a.js";const B={components:{Layout:S,PageHeader:w,CardHeader:T,Link:h,Head:g},data(){return{exManualSelected:null,exMultiOptions:[{value:"a",text:"Open this select menu (select menu size)"},{value:"b",text:"One"},{value:"c",text:"Two"},{value:"d",text:"Three"},{value:"e",text:"Four"},{value:"f",text:"Five"}],exMultiSelected:["a"]}}},M=o("p",{class:"text-muted"},[t(" Use "),o("code",null,"<select>"),t(" attribute with numerous options to show value with choice's option. ")],-1),y={class:"live-preview"},D=o("div",{class:"d-none code-view"},[o("pre",{class:"language-markup"},[t(""),o("code",null,` <select class="form-select mb-3" aria-label="Default select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>`),t(`

`),o("code",null,` <select class="form-select rounded-pill mb-3" aria-label="Default select example">
    <option selected>Search for services</option>
    <option value="1">Information Architecture</option>
    <option value="2">UI/UX Design</option>
    <option value="3">Back End Development</option>
</select>`),t(`

`),o("code",null,`<select class="form-select" aria-label="Disabled select example" disabled>
    <option selected>Open this select menu (Disabled)</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>`)])],-1),U=o("p",{class:"text-muted"},[t(" Use "),o("code",null,"multiple"),t(" attribute to select multiple values and "),o("code",null,'size="your value"'),t(" attribute to show a number of choice option within a select area. ")],-1),C={class:"live-preview"},z=o("option",{selected:""}," Open this select menu (multiple select option) ",-1),F=o("option",{value:"1"},"One",-1),H=o("option",{value:"2"},"Two",-1),k=o("option",{value:"3"},"Three",-1),L=o("div",{class:"d-none code-view"},[o("pre",{class:"language-markup",style:{height:"275px"}},[t(""),o("code",null,`<select class="form-select" multiple aria-label="multiple select example">
    <option selected>Open this select menu (multiple select option)</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>`),t(`

`),o("code",null,`<select class="form-select" size="3" aria-label="size 3 select example">
    <option selected>Open this select menu (select menu size)</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
    <option value="5">Five</option>
</select>`)])],-1),P=o("p",{class:"text-muted"},[t(" Use "),o("code",null,"form-select-sm"),t(" class to set small select size and "),o("code",null,"form-select-lg"),t(" class to form-select class to set large select size. No such class is required for default select size. ")],-1),I={class:"live-preview"},N=o("div",{class:"d-none code-view"},[o("pre",{class:"language-markup",style:{height:"275px"}},[o("code",null,`<select class="form-select form-select-sm  mb-3" aria-label=".form-select-sm example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>`),t(`

`),o("code",null,`<select class="form-select mb-3" aria-label=".form-select-lg example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>`),t(`

`),o("code",null,`<select class="form-select form-select-lg" aria-label=".form-select-lg example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>`)])],-1);function A(E,s,R,X,a,q){const _=c("Head"),v=c("PageHeader"),r=c("CardHeader"),n=c("BFormSelectOption"),d=c("BFormSelect"),i=c("BCol"),p=c("BRow"),m=c("BCardBody"),f=c("BCard"),x=c("Layout");return O(),b(x,null,{default:l(()=>[e(_,{title:"Form Select"}),e(v,{title:"Form Select",pageTitle:"Forms"}),e(p,null,{default:l(()=>[e(i,{lg:"12"},{default:l(()=>[e(f,{"no-body":""},{default:l(()=>[e(r,{title:"Default Select"}),e(m,null,{default:l(()=>[M,o("div",y,[e(p,null,{default:l(()=>[e(i,{lg:"6"},{default:l(()=>[e(d,{modelValue:a.exManualSelected,"onUpdate:modelValue":s[0]||(s[0]=u=>a.exManualSelected=u),class:"mb-3","aria-label":"Default select example"},{default:l(()=>[e(n,{value:null},{default:l(()=>[t("Select your Status")]),_:1}),e(n,{value:"1"},{default:l(()=>[t("Declined Payment")]),_:1}),e(n,{value:"2"},{default:l(()=>[t("Delivery Error")]),_:1}),e(n,{value:"3"},{default:l(()=>[t("Wrong Amount")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,{lg:"6"},{default:l(()=>[e(d,{modelValue:a.exManualSelected,"onUpdate:modelValue":s[1]||(s[1]=u=>a.exManualSelected=u),class:"form-select rounded-pill mb-3","aria-label":"Default select example"},{default:l(()=>[e(n,{value:null},{default:l(()=>[t("Search for services")]),_:1}),e(n,{value:"1"},{default:l(()=>[t("Information Architecture")]),_:1}),e(n,{value:"2"},{default:l(()=>[t("UI/UX Design")]),_:1}),e(n,{value:"3"},{default:l(()=>[t("Back End Development")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,{lg:"6"},{default:l(()=>[e(d,{modelValue:a.exManualSelected,"onUpdate:modelValue":s[2]||(s[2]=u=>a.exManualSelected=u),class:"form-select","aria-label":"Disabled select example",disabled:""},{default:l(()=>[e(n,{value:null},{default:l(()=>[t("Open this select menu (Disabled)")]),_:1}),e(n,{value:"1"},{default:l(()=>[t("One")]),_:1}),e(n,{value:"2"},{default:l(()=>[t("Two")]),_:1}),e(n,{value:"3"},{default:l(()=>[t("Three")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),D]),_:1})]),_:1})]),_:1})]),_:1}),e(p,null,{default:l(()=>[e(i,{lg:"12"},{default:l(()=>[e(f,{"no-body":""},{default:l(()=>[e(r,{title:"Menu Size"}),e(m,null,{default:l(()=>[U,o("div",C,[e(p,{class:"gy-4"},{default:l(()=>[e(i,{lg:"6"},{default:l(()=>[e(d,{class:"form-select",multiple:"","aria-label":"multiple select example"},{default:l(()=>[z,F,H,k]),_:1})]),_:1}),e(i,{lg:"6"},{default:l(()=>[e(d,{modelValue:a.exMultiSelected,"onUpdate:modelValue":s[3]||(s[3]=u=>a.exMultiSelected=u),options:a.exMultiOptions,multiple:"","select-size":3},null,8,["modelValue","options"])]),_:1})]),_:1})]),L]),_:1})]),_:1})]),_:1})]),_:1}),e(p,null,{default:l(()=>[e(i,{lg:"12"},{default:l(()=>[e(f,{"no-body":""},{default:l(()=>[e(r,{title:"Select Size"}),e(m,null,{default:l(()=>[P,o("div",I,[e(p,{class:"align-items-center g-3"},{default:l(()=>[e(i,{lg:"4"},{default:l(()=>[e(d,{modelValue:a.exManualSelected,"onUpdate:modelValue":s[4]||(s[4]=u=>a.exManualSelected=u),class:"form-select-sm"},{default:l(()=>[e(n,{value:null},{default:l(()=>[t("Open this select menu")]),_:1}),e(n,{value:"1"},{default:l(()=>[t("One")]),_:1}),e(n,{value:"2"},{default:l(()=>[t("Two")]),_:1}),e(n,{value:"3"},{default:l(()=>[t("Three")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,{lg:"4"},{default:l(()=>[e(d,{modelValue:a.exManualSelected,"onUpdate:modelValue":s[5]||(s[5]=u=>a.exManualSelected=u),class:"form-select"},{default:l(()=>[e(n,{value:null},{default:l(()=>[t("Open this select menu")]),_:1}),e(n,{value:"1"},{default:l(()=>[t("One")]),_:1}),e(n,{value:"2"},{default:l(()=>[t("Two")]),_:1}),e(n,{value:"3"},{default:l(()=>[t("Three")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,{lg:"4"},{default:l(()=>[e(d,{modelValue:a.exManualSelected,"onUpdate:modelValue":s[6]||(s[6]=u=>a.exManualSelected=u),class:"form-select-lg"},{default:l(()=>[e(n,{value:null},{default:l(()=>[t("Open this select menu")]),_:1}),e(n,{value:"1"},{default:l(()=>[t("One")]),_:1}),e(n,{value:"2"},{default:l(()=>[t("Two")]),_:1}),e(n,{value:"3"},{default:l(()=>[t("Three")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),N]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const ue=V(B,[["render",A]]);export{ue as default};
