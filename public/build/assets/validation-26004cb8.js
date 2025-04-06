import{i as V,Z as F,r as d,c as B,w as a,o as w,a as e,f as l,h as o}from"./app-3cfb9ddb.js";import{L as P}from"./main-fd3f050e.js";import{P as U}from"./page-header-c76b7ffd.js";import{C as S}from"./card-header-cc01c0c6.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import"./simplebar-vue.esm-3378fd5d.js";import"./logo-sm-eae269a3.js";import"./logo-dark-24ab6998.js";import"./logo-light-01b48412.js";import"./avatar-2-4823f2b4.js";import"./avatar-3-cd4bfcf0.js";import"./avatar-5-577750b4.js";import"./russia-3c30e48e.js";import"./avatar-8-a9f045da.js";import"./avatar-6-c2396ad9.js";import"./prism-a4be18ec.js";const L={data(){return{firstName:"Mark",lastName:"Otto",username:"",city:"",state:null,zip:"",agreedToTerms:!1,onSubmit:!1,customValidation:!1}},methods:{submitTooltipForm(){this.onSubmit=!0},submitCustomForm(){this.customValidation=!0}},components:{Layout:P,PageHeader:U,CardHeader:S,Link:V,Head:F}},N=l("p",{class:"text-muted"},"Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll see a slightly different style of feedback.While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.",-1),O={class:"live-preview"},I={class:"row g-3"},z=l("label",{for:"validationDefault01",class:"form-label"},"First name",-1),G=l("label",{for:"validationDefault02",class:"form-label"},"Last name",-1),H=l("label",{for:"validationDefaultUsername",class:"form-label"},"Username",-1),E={class:"input-group"},M=l("span",{class:"input-group-text",id:"inputGroupPrepend2"},"@",-1),Z=l("label",{for:"validationDefault03",class:"form-label"},"City",-1),A=l("label",{for:"validationDefault04",class:"form-label"},"State",-1),J=l("option",{selected:"",disabled:"",value:""},"Choose...",-1),R=l("option",null,"...",-1),W=l("label",{for:"validationDefault05",class:"form-label"},"Zip",-1),Y={class:"form-check d-flex"},j=l("label",{class:"form-check-label",for:"invalidCheck2"}," Agree to terms and conditions ",-1),K=l("div",{class:"d-none code-view"},[l("pre",{class:"language-markup",style:{height:"352px"}},[o(""),l("code",null,`<form class="row g-3">
<div class="col-md-4">
<label for="validationDefault01" class="form-label">First name</label>
<input type="text" class="form-control" id="validationDefault01" value="Mark" required />
</div>
<div class="col-md-4">
<label for="validationDefault02" class="form-label">Last name</label>
<input type="text" class="form-control" id="validationDefault02" value="Otto" required />
</div>
<div class="col-md-4">
<label for="validationDefaultUsername" class="form-label">Username</label>
<div class="input-group">
<span class="input-group-text" id="inputGroupPrepend2">@</span>
<input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2"
required />
</div>
</div>
<div class="col-md-6">
<label for="validationDefault03" class="form-label">City</label>
<input type="text" class="form-control" id="validationDefault03" required />
</div>
<div class="col-md-3">
<label for="validationDefault04" class="form-label">State</label>
<select class="form-select" id="validationDefault04" required />
<option selected disabled value="">Choose...</option>
<option>...</option>
</select>
</div>
<div class="col-md-3">
<label for="validationDefault05" class="form-label">Zip</label>
<input type="text" class="form-control" id="validationDefault05" required />
</div>
<div class="col-12">
<div class="form-check">
<BFormCheckbox class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
<label class="form-check-label" for="invalidCheck2">
Agree to terms and conditions
</label>
</div>
</div>
<div class="col-12">
<button class="btn btn-primary" type="submit">Submit form</button>
</div>
</form>`)])],-1),Q=l("p",{class:"text-muted"},[o("For custom Bootstrap form validation messages, you’ll need to add the "),l("code",null,"novalidate"),o(" boolean attribute to your "),l("code",null,"<form>"),o(". This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you. When attempting to submit, you’ll see the "),l("code",null,":invalid"),o(" and "),l("code",null,":valid"),o(" styles applied to your form controls. ")],-1),X={class:"live-preview"},$=l("label",{for:"validationCustom01",class:"form-label"},"First name",-1),ee=l("label",{for:"validationCustom02",class:"form-label"},"Last name",-1),le=l("label",{for:"validationCustomUsername",class:"form-label"},"Username",-1),ae=l("label",{for:"validationCustom03",class:"form-label"},"City",-1),oe=l("label",{for:"validationCustom04",class:"form-label"},"State",-1),te=l("option",{disabled:"",value:""},"Choose...",-1),ie=l("option",null,"...",-1),se=l("label",{for:"validationCustom05",class:"form-label"},"Zip",-1),ne=l("div",{class:"d-none code-view"},[l("pre",{class:"language-markup"},[o(""),l("code",null,`<form class="row g-3 needs-validation" novalidate>
<div class="col-md-4">
<label for="validationCustom01" class="form-label">First name</label>
<input type="text" class="form-control" id="validationCustom01" value="Mark" required />
<div class="valid-feedback">
Looks good!
</div>
</div>
<div class="col-md-4">
<label for="validationCustom02" class="form-label">Last name</label>
<input type="text" class="form-control" id="validationCustom02" value="Otto" required />
<div class="valid-feedback">
Looks good!
</div>
</div>
<div class="col-md-4">
<label for="validationCustomUsername" class="form-label">Username</label>
<div class="input-group has-validation">
<span class="input-group-text" id="inputGroupPrepend">@</span>
<input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend"
required />
<div class="invalid-feedback">
Please choose a username.
</div>
</div>
</div>
<div class="col-md-6">
<label for="validationCustom03" class="form-label">City</label>
<input type="text" class="form-control" id="validationCustom03" required />
<div class="invalid-feedback">
Please provide a valid city.
</div>
</div>
<div class="col-md-3">
<label for="validationCustom04" class="form-label">State</label>
<select class="form-select" id="validationCustom04" required />
<option selected disabled value="">Choose...</option>
<option>...</option>
</select>
<div class="invalid-feedback">
Please select a valid state.
</div>
</div>
<div class="col-md-3">
<label for="validationCustom05" class="form-label">Zip</label>
<input type="text" class="form-control" id="validationCustom05" required />
<div class="invalid-feedback">
Please provide a valid zip.
</div>
</div>
<div class="col-12">
<div class="form-check">
<BFormCheckbox class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
<label class="form-check-label" for="invalidCheck">
Agree to terms and conditions
</label>
<div class="invalid-feedback">
You must agree before submitting.
</div>
</div>
</div>
<div class="col-12">
<button class="btn btn-primary" type="submit">Submit form</button>
</div>
</form>`)])],-1),de=l("p",{class:"text-muted"},[o("Block-level or inline-level form text can be created using "),l("code",null,".form-text"),o(". ")],-1),re=l("div",{class:"live-preview"},[l("form",{class:"was-validated"},[l("div",{class:"mb-3"},[l("label",{for:"validationTextarea",class:"form-label"},"Textarea"),l("textarea",{class:"form-control",id:"validationTextarea",placeholder:"Required example textarea",required:""}),l("div",{class:"invalid-feedback"}," Please enter a message in the textarea. ")]),l("div",{class:"form-check mb-3"},[l("input",{type:"checkbox",class:"form-check-input",id:"validationFormCheck1",required:""}),l("label",{class:"form-check-label",for:"validationFormCheck1"},"Check this checkbox"),l("div",{class:"invalid-feedback"},"Example invalid feedback text")]),l("div",{class:"form-check"},[l("input",{type:"radio",class:"form-check-input",id:"validationFormCheck2",name:"radio-stacked",required:""}),l("label",{class:"form-check-label",for:"validationFormCheck2"},"Toggle this radio")]),l("div",{class:"form-check mb-3"},[l("input",{type:"radio",class:"form-check-input",id:"validationFormCheck3",name:"radio-stacked",required:""}),l("label",{class:"form-check-label",for:"validationFormCheck3"},"Or toggle this other radio"),l("div",{class:"invalid-feedback"},"More example invalid feedback text")]),l("div",{class:"mb-3"},[l("select",{class:"form-select",required:"","aria-label":"select example"},[l("option",{value:""},"Open this select menu"),l("option",{value:"1"},"One"),l("option",{value:"2"},"Two"),l("option",{value:"3"},"Three")]),l("div",{class:"invalid-feedback"},"Example invalid select feedback")]),l("div",{class:"mb-3"},[l("input",{type:"file",class:"form-control","aria-label":"file example",required:""}),l("div",{class:"invalid-feedback"},"Example invalid form file feedback")]),l("div",{class:"mb-0"},[l("button",{class:"btn btn-primary",type:"submit",disabled:""},"Submit form")])])],-1),ce=l("div",{class:"d-none code-view"},[l("pre",{class:"language-markup",style:{height:"352px"}},[o(""),l("code",null,`<form class="was-validated">
<div class="mb-3">
<label for="validationTextarea" class="form-label">Textarea</label>
<textarea class="form-control" id="validationTextarea" placeholder="Required / example textarea"
required /></textarea>
<div class="invalid-feedback">
Please enter a message in the textarea.
</div>
</div>

<div class="form-check mb-3">
<input type="checkbox" class="form-check-input" id="validationFormCheck1" required />
<label class="form-check-label" for="validationFormCheck1">Check this checkbox</label>
<div class="invalid-feedback">Example invalid feedback text</div>
</div>

<div class="form-check">
<input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required />
<label class="form-check-label" for="validationFormCheck2">Toggle this radio</label>
</div>
<div class="form-check mb-3">
<input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required />
<label class="form-check-label" for="validationFormCheck3">Or toggle this other radio</label>
<div class="invalid-feedback">More example invalid feedback text</div>
</div>

<div class="mb-3">
<select class="form-select" required / aria-label="select example">
<option value="">Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>
<div class="invalid-feedback">Example invalid select feedback</div>
</div>

<div class="mb-3">
<input type="file" class="form-control" aria-label="file example" required />
<div class="invalid-feedback">Example invalid form file feedback</div>
</div>

<div class="mb-3">
<button class="btn btn-primary" type="submit" disabled>Submit form</button>
</div>
</form>`)])],-1),ue=l("p",{class:"text-muted"},[o("If your form layout allows it, you can swap the "),l("code",null,".{valid|invalid}-feedback"),o(" classes for "),l("code",null,".{valid|invalid}-tooltip"),o(" classes to display validation feedback in a styled tooltip. Be sure to have a parent with "),l("code",null,"position: relative"),o(" on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup. ")],-1),me={class:"live-preview"},ve=l("label",{for:"validationTooltip01",class:"form-label"},"First name",-1),pe=l("label",{for:"validationTooltip02",class:"form-label"},"Last name",-1),fe=l("label",{for:"validationTooltipUsername",class:"form-label"},"Username",-1),be=l("label",{for:"validationTooltip03",class:"form-label"},"City",-1),_e=l("label",{for:"validationTooltip04",class:"form-label"},"State",-1),he=l("option",{disabled:"",value:""},"Choose...",-1),ke=l("option",null,"...",-1),ye=l("label",{for:"validationTooltip05",class:"form-label"},"Zip",-1),xe=l("div",{class:"d-none code-view"},[l("pre",{class:"language-markup"},[o(""),l("code",null,`<form class="row g-3 needs-validation" novalidate>
<div class="col-md-4 position-relative">
<label for="validationTooltip01" class="form-label">First name</label>
<input type="text" class="form-control" id="validationTooltip01" value="Mark" required />
<div class="valid-tooltip">
Looks good!
</div>
</div>
<div class="col-md-4 position-relative">
<label for="validationTooltip02" class="form-label">Last name</label>
<input type="text" class="form-control" id="validationTooltip02" value="Otto" required />
<div class="valid-tooltip">
Looks good!
</div>
</div>
<div class="col-md-4 position-relative">
<label for="validationTooltipUsername" class="form-label">Username</label>
<div class="input-group has-validation">
<span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
<input type="text" class="form-control" id="validationTooltipUsername"
aria-describedby="validationTooltipUsernamePrepend" required />
<div class="invalid-tooltip">
Please choose a unique and valid username.
</div>
</div>
</div>
<div class="col-md-6 position-relative">
<label for="validationTooltip03" class="form-label">City</label>
<input type="text" class="form-control" id="validationTooltip03" required />
<div class="invalid-tooltip">
Please provide a valid city.
</div>
</div>
<div class="col-md-3 position-relative">
<label for="validationTooltip04" class="form-label">State</label>
<select class="form-select" id="validationTooltip04" required />
<option selected disabled value="">Choose...</option>
<option>...</option>
</select>
<div class="invalid-tooltip">
Please select a valid state.
</div>
</div>
<div class="col-md-3 position-relative">
<label for="validationTooltip05" class="form-label">Zip</label>
<input type="text" class="form-control" id="validationTooltip05" required />
<div class="invalid-tooltip">
Please provide a valid zip.
</div>
</div>
<div class="col-12">
<button class="btn btn-primary" type="submit">Submit form</button>
</div>
</form>`)])],-1);function Ce(ge,s,qe,Te,t,h){const g=d("Head"),q=d("PageHeader"),u=d("CardHeader"),r=d("BFormInput"),i=d("BCol"),b=d("BFormSelect"),k=d("BFormCheckbox"),_=d("BButton"),m=d("BCardBody"),v=d("BCard"),p=d("BRow"),c=d("BFormInvalidFeedback"),f=d("BFormValidFeedback"),y=d("BInputGroupPrepend"),x=d("BInputGroup"),C=d("BForm"),T=d("Layout");return w(),B(T,null,{default:a(()=>[e(g,{title:"Form Validation"}),e(q,{title:"Form Validation",pageTitle:"Forms"}),e(p,null,{default:a(()=>[e(i,{lg:"12"},{default:a(()=>[e(v,{"no-body":""},{default:a(()=>[e(u,{title:"Browser defaults"}),e(m,null,{default:a(()=>[N,l("div",O,[l("form",I,[e(i,{md:"4"},{default:a(()=>[z,e(r,{type:"text",class:"form-control",id:"validationDefault01",value:"Mark",required:""})]),_:1}),e(i,{md:"4"},{default:a(()=>[G,e(r,{type:"text",class:"form-control",id:"validationDefault02",value:"Otto",required:""})]),_:1}),e(i,{md:"4"},{default:a(()=>[H,l("div",E,[M,e(r,{type:"text",class:"form-control",id:"validationDefaultUsername","aria-describedby":"inputGroupPrepend2",required:""})])]),_:1}),e(i,{md:"6"},{default:a(()=>[Z,e(r,{type:"text",class:"form-control",id:"validationDefault03",required:""})]),_:1}),e(i,{md:"3"},{default:a(()=>[A,e(b,{class:"form-select",id:"validationDefault04",required:""},{default:a(()=>[J,R]),_:1})]),_:1}),e(i,{md:"3"},{default:a(()=>[W,e(r,{type:"text",class:"form-control",id:"validationDefault05",required:""})]),_:1}),e(i,{cols:"12"},{default:a(()=>[l("div",Y,[e(k,{class:"form-check-input",type:"checkbox",value:"",id:"invalidCheck2",required:""}),j])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(_,{variant:"primary",type:"submit"},{default:a(()=>[o("Submit form")]),_:1})]),_:1})])]),K]),_:1})]),_:1})]),_:1})]),_:1}),e(p,null,{default:a(()=>[e(i,{lg:"12"},{default:a(()=>[e(v,{"no-body":""},{default:a(()=>[e(u,{title:"Custom Styles"}),e(m,null,{default:a(()=>[Q,l("div",X,[e(C,{onSubmit:h.submitCustomForm,class:"row g-3",validated:t.customValidation,novalidate:!0},{default:a(()=>[e(i,{md:"4"},{default:a(()=>[$,e(r,{modelValue:t.firstName,"onUpdate:modelValue":s[0]||(s[0]=n=>t.firstName=n),id:"validationCustom01",required:""},null,8,["modelValue"]),e(c,null,{default:a(()=>[o("Please provide a valid first name.")]),_:1}),e(f,null,{default:a(()=>[o("Looks good!")]),_:1})]),_:1}),e(i,{md:"4"},{default:a(()=>[ee,e(r,{modelValue:t.lastName,"onUpdate:modelValue":s[1]||(s[1]=n=>t.lastName=n),id:"validationCustom02",required:""},null,8,["modelValue"]),e(c,null,{default:a(()=>[o("Please provide a valid last name.")]),_:1}),e(f,null,{default:a(()=>[o("Looks good!")]),_:1})]),_:1}),e(i,{md:"4"},{default:a(()=>[le,e(x,null,{default:a(()=>[e(y,{"is-text":""},{default:a(()=>[o("@")]),_:1}),e(r,{modelValue:t.username,"onUpdate:modelValue":s[2]||(s[2]=n=>t.username=n),id:"validationCustomUsername",required:""},null,8,["modelValue"]),e(c,null,{default:a(()=>[o("Please choose a username.")]),_:1})]),_:1})]),_:1}),e(i,{md:"6"},{default:a(()=>[ae,e(r,{modelValue:t.city,"onUpdate:modelValue":s[3]||(s[3]=n=>t.city=n),id:"validationCustom03",required:""},null,8,["modelValue"]),e(c,null,{default:a(()=>[o("Please provide a valid city.")]),_:1})]),_:1}),e(i,{md:"3"},{default:a(()=>[oe,e(b,{modelValue:t.state,"onUpdate:modelValue":s[4]||(s[4]=n=>t.state=n),id:"validationCustom04",required:""},{default:a(()=>[te,ie]),_:1},8,["modelValue"]),e(c,null,{default:a(()=>[o("Please select a valid state.")]),_:1})]),_:1}),e(i,{md:"3"},{default:a(()=>[se,e(r,{modelValue:t.zip,"onUpdate:modelValue":s[5]||(s[5]=n=>t.zip=n),id:"validationCustom05",required:""},null,8,["modelValue"]),e(c,null,{default:a(()=>[o("Please provide a valid zip.")]),_:1})]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(k,{modelValue:t.agreedToTerms,"onUpdate:modelValue":s[6]||(s[6]=n=>t.agreedToTerms=n),id:"invalidCheck",required:""},{default:a(()=>[o(" Agree to terms and conditions ")]),_:1},8,["modelValue"]),e(c,null,{default:a(()=>[o("You must agree before submitting.")]),_:1})]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(_,{type:"submit",variant:"primary"},{default:a(()=>[o("Submit form")]),_:1})]),_:1})]),_:1},8,["onSubmit","validated"])]),ne]),_:1})]),_:1})]),_:1}),e(p,null,{default:a(()=>[e(i,{lg:"12"},{default:a(()=>[e(v,{"no-body":""},{default:a(()=>[e(u,{title:"Supported Elements"}),e(m,null,{default:a(()=>[de,re,ce]),_:1})]),_:1})]),_:1})]),_:1}),e(p,null,{default:a(()=>[e(i,{lg:"12"},{default:a(()=>[e(v,{"no-body":""},{default:a(()=>[e(u,{title:"Tooltips"}),e(m,null,{default:a(()=>[ue,l("div",me,[e(C,{onSubmit:h.submitTooltipForm,class:"row g-3",validated:t.onSubmit,novalidate:!0},{default:a(()=>[e(i,{md:"4",class:"position-relative"},{default:a(()=>[ve,e(r,{modelValue:t.firstName,"onUpdate:modelValue":s[7]||(s[7]=n=>t.firstName=n),id:"validationTooltip01",required:""},null,8,["modelValue"]),e(f,{tooltip:!0},{default:a(()=>[o("Looks good!")]),_:1})]),_:1}),e(i,{md:"4",class:"position-relative"},{default:a(()=>[pe,e(r,{modelValue:t.lastName,"onUpdate:modelValue":s[8]||(s[8]=n=>t.lastName=n),id:"validationTooltip02",required:""},null,8,["modelValue"]),e(f,{tooltip:!0},{default:a(()=>[o("Looks good!")]),_:1})]),_:1}),e(i,{md:"4",class:"position-relative"},{default:a(()=>[fe,e(x,null,{default:a(()=>[e(y,{"is-text":""},{default:a(()=>[o("@")]),_:1}),e(r,{modelValue:t.username,"onUpdate:modelValue":s[9]||(s[9]=n=>t.username=n),id:"validationTooltipUsername",required:""},null,8,["modelValue"]),e(c,{tooltip:!0},{default:a(()=>[o("Please choose a unique and valid username.")]),_:1})]),_:1})]),_:1}),e(i,{md:"6",class:"position-relative"},{default:a(()=>[be,e(r,{modelValue:t.city,"onUpdate:modelValue":s[10]||(s[10]=n=>t.city=n),id:"validationTooltip03",required:""},null,8,["modelValue"]),e(c,{tooltip:!0},{default:a(()=>[o("Please provide a valid city.")]),_:1})]),_:1}),e(i,{md:"3",class:"position-relative"},{default:a(()=>[_e,e(b,{modelValue:t.state,"onUpdate:modelValue":s[11]||(s[11]=n=>t.state=n),id:"validationTooltip04",required:""},{default:a(()=>[he,ke]),_:1},8,["modelValue"]),e(c,{tooltip:!0},{default:a(()=>[o("Please select a valid state.")]),_:1})]),_:1}),e(i,{md:"3",class:"position-relative"},{default:a(()=>[ye,e(r,{modelValue:t.zip,"onUpdate:modelValue":s[12]||(s[12]=n=>t.zip=n),id:"validationTooltip05",required:""},null,8,["modelValue"]),e(c,{tooltip:!0},{default:a(()=>[o("Please provide a valid zip.")]),_:1})]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(_,{type:"submit",variant:"primary"},{default:a(()=>[o("Submit form")]),_:1})]),_:1})]),_:1},8,["onSubmit","validated"])]),xe]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const Me=D(L,[["render",Ce]]);export{Me as default};
