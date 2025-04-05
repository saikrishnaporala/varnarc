import{Z as B,i as S,r as i,c as C,w as o,o as k,a as l,f as e,h as a}from"./app-07231ff0.js";import{L as E}from"./main-d6f67001.js";import{P as N}from"./page-header-9874defb.js";import{C as z}from"./card-header-7b6a059f.js";import{C as L}from"./component-ccccf2ab.js";/* empty css                  */import{s as U}from"./default-4ab2ebcb.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import"./simplebar-vue.esm-3d9a9dff.js";import"./logo-sm-eae269a3.js";import"./logo-dark-24ab6998.js";import"./logo-light-01b48412.js";import"./avatar-2-4823f2b4.js";import"./avatar-3-cd4bfcf0.js";import"./avatar-5-577750b4.js";import"./russia-3c30e48e.js";import"./avatar-8-a9f045da.js";import"./avatar-6-c2396ad9.js";import"./prism-8e83551a.js";const V={data(){return{value:null,value1:null,value5:null,value2:null,value3:null,value4:null,config:{wrap:!0,altFormat:"M j, Y",altInput:!0,dateFormat:"d M, Y"},date:null,date1:null,date3:null}},components:{Layout:E,PageHeader:N,CardHeader:z,Multiselect:U,flatPickr:L,Head:B,Link:S}},A=e("p",{class:"text-muted"},[a(" More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options. "),e("span",{class:"fw-medium"},[a("Requires the "),e("code",null,"$enable-grid-classes"),a(" Sass variable to be enabled")]),a(" (on by default). ")],-1),T={class:"live-preview"},D={class:"mb-3"},G=e("label",{for:"firstNameinput",class:"form-label"},"First Name",-1),Z={class:"mb-3"},M=e("label",{for:"lastNameinput",class:"form-label"},"Last Name",-1),R={class:"mb-3"},j=e("label",{for:"compnayNameinput",class:"form-label"},"Company Name",-1),H={class:"mb-3"},q=e("label",{for:"phonenumberInput",class:"form-label"},"Phone Number",-1),O={class:"mb-3"},J=e("label",{for:"emailidInput",class:"form-label"},"Email Address",-1),W={class:"mb-3"},Y=e("label",{for:"address1ControlTextarea",class:"form-label"},"Address",-1),K={class:"mb-3"},Q=e("label",{for:"citynameInput",class:"form-label"},"City",-1),X={class:"mb-3"},$=e("label",{for:"ForminputState",class:"form-label"},"State",-1),ll={class:"text-end"},el=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup",style:{height:"375px"}},[a(""),e("code",null,`<BForm action="javascript:void(0);">
<div class="row">
<div class="col-6">
<div class="mb-3">
<label for="firstNameinput" class="form-label">First Name</label>
<BFormInput type="text" class="form-control" placeholder="Enter your firstname" id="firstNameinput">
</div>
</div><!--end col-->
<div class="col-6">
<div class="mb-3">
<label for="lastNameinput" class="form-label">Last Name</label>
<BFormInput type="text" class="form-control" placeholder="Enter your lastname" id="lastNameinput">
</div>
</div><!--end col-->
<div class="col-12">
<div class="mb-3">
<label for="compnayNameinput" class="form-label">Company Name</label>
<BFormInput type="text" class="form-control" placeholder="Enter company name" id="compnayNameinput">
</div>
</div><!--end col-->
<div class="col-6">
<div class="mb-3">
<label for="phonenumberInput" class="form-label">Phone Number</label>
<BFormInput type="tel" class="form-control" placeholder="+(245) 451 45123" id="phonenumberInput">
</div>
</div><!--end col-->
<div class="col-6">
<div class="mb-3">
<label for="emailidInput" class="form-label">Email Address</label>
<BFormInput type="email" class="form-control" placeholder="example@gamil.com" id="emailidInput">
</div>
</div><!--end col-->
<div class="col-12">
<div class="mb-3">
<label for="address1ControlBFormTextarea" class="form-label">Address</label>
<BFormInput type="text" class="form-control" placeholder="Address 1" id="address1ControlBFormTextarea">
</div>
</div><!--end col-->
<div class="col-6">
<div class="mb-3">
<label for="citynameInput" class="form-label">City</label>
<BFormInput type="email" class="form-control" placeholder="Enter your city" id="citynameInput">
</div>
</div><!--end col-->
<div class="col-6">
<div class="mb-3">
<label for="ForminputState" class="form-label">State</label>
<select id="ForminputState" class="form-select">
<option selected>Choose...</option>
<option>...</option>
</select>
</div>
</div><!--end col-->
<div class="col-lg-12">
<div class="text-end">
<button type="submit" class="btn btn-primary">Submit</button>
</div>
</div><!--end col-->
</div><!--end row-->
</BForm>`)])],-1),ol={class:"text-muted"},tl=e("span",{class:"fw-medium"},[a("Also requires the "),e("code",null,"$enable-grid-classes"),a(" Sass variable to be enabled")],-1),al={class:"live-preview"},sl=e("label",{for:"fullnameInput",class:"form-label"},"Name",-1),nl=e("label",{for:"inputEmail4",class:"form-label"},"Email",-1),il=e("label",{for:"inputPassword4",class:"form-label"},"Password",-1),rl=e("label",{for:"inputAddress",class:"form-label"},"Address",-1),cl=e("label",{for:"inputAddress2",class:"form-label"},"Address 2",-1),dl=e("label",{for:"inputCity",class:"form-label"},"City",-1),ml=e("label",{for:"inputState",class:"form-label"},"State",-1),ul=e("label",{for:"inputZip",class:"form-label"},"Zip",-1),pl={class:"form-check d-flex"},fl=e("label",{class:"form-check-label",for:"gridCheck"}," Check me out ",-1),bl={class:"text-end"},vl=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup",style:{height:"375px"}},[a(""),e("code",null,`<BForm action="javascript:void(0);" class="row g-3">
<div class="col-md-12">
<label for="fullnameInput" class="form-label">Name</label>
<BFormInput type="text" class="form-control" id="fullnameInput" placeholder="Enter your name">
</div>
<div class="col-md-6">
<label for="inputEmail4" class="form-label">Email</label>
<BFormInput type="email" class="form-control" id="inputEmail4" placeholder="Email">
</div>
<div class="col-md-6">
<label for="inputPassword4" class="form-label">Password</label>
<BFormInput type="password" class="form-control" id="inputPassword4" placeholder="Password">
</div>
<div class="col-12">
<label for="inputAddress" class="form-label">Address</label>
<BFormInput type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
</div>
<div class="col-12">
<label for="inputAddress2" class="form-label">Address 2</label>
<BFormInput type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
</div>
<div class="col-md-6">
<label for="inputCity" class="form-label">City</label>
<BFormInput type="text" class="form-control" id="inputCity" placeholder="Enter your city">
</div>
<div class="col-md-4">
<label for="inputState" class="form-label">State</label>
<select id="inputState" class="form-select">
<option selected>Choose...</option>
<option>...</option>
</select>
</div>
<div class="col-md-2">
<label for="inputZip" class="form-label">Zip</label>
<BFormInput type="text" class="form-control" id="inputZip" placeholder="Zin code">
</div>
<div class="col-12">
<div class="form-check">
<BFormInput class="form-check-input" type="checkbox" id="gridCheck">
<label class="form-check-label" for="gridCheck">
Check me out
</label>
</div>
</div>
<div class="col-12">
<div class="text-end">
<button type="submit" class="btn btn-primary">Sign in</button>
</div>
</div>
</BForm>`)])],-1),_l=e("p",{class:"text-muted"},[a(" Example of vertical form using "),e("code",null,"form-control"),a(" class. No need to specify row and col class to create vertical form. ")],-1),hl={class:"live-preview"},yl={class:"mb-3"},gl=e("label",{for:"employeeName",class:"form-label"},"Employee Name",-1),Il={class:"mb-3"},xl=e("label",{for:"employeeUrl",class:"form-label"},"Employee Department URL",-1),Fl={class:"mb-3"},wl=e("label",{for:"StartleaveDate",class:"form-label"},"Start Leave Date",-1),Bl={class:"mb-3"},Sl=e("label",{for:"EndleaveDate",class:"form-label"},"End Leave Date",-1),Cl={class:"mb-3"},kl=e("label",{for:"VertimeassageInput",class:"form-label"},"Message",-1),El={class:"text-end"},Nl=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup",style:{height:"375px"}},[a(""),e("code",null,`<BForm action="">
<div class="mb-3">
<label for="employeeName" class="form-label">Employee Name</label>
<BFormInput type="text" class="form-control" id="employeeName" placeholder="Enter emploree name">
</div>
<div class="mb-3">
<label for="employeeUrl" class="form-label">Employee Department URL</label>
<BFormInput type="url" class="form-control" id="employeeUrl" placeholder="Enter emploree url">
</div>
<div class="mb-3">
<label for="StartleaveDate" class="form-label">Start Leave Date</label>
<BFormInput type="date" class="form-control" id="StartleaveDate">
</div>
<div class="mb-3">
<label for="EndleaveDate" class="form-label">End Leave Date</label>
<BFormInput type="date" class="form-control" id="EndleaveDate">
</div>
<div class="mb-3">
<label for="VertimeassageInput" class="form-label">Message</label>
<BFormTextarea class="form-control" id="VertimeassageInput" rows="3" placeholder="Enter your message"></BFormTextarea>
</div>
<div class="text-end">
<button type="submit" class="btn btn-primary">Add Leave</button>
</div>
</BForm>`)])],-1),zl=e("p",{class:"text-muted"},[a(" Create horizontal forms with the grid by adding the "),e("code",null,"row"),a(" class to form groups and using the "),e("code",null,"col-*-*"),a(" class to specify the width of your labels and controls. Be sure to add "),e("code",null,"col-form-label"),a(" class to your "),e("code",null,"<label>"),a("s as well so they’re vertically centered with their associated form controls. ")],-1),Ll={class:"live-preview"},Ul=e("label",{for:"nameInput",class:"form-label"},"Name",-1),Pl=e("label",{for:"websiteUrl",class:"form-label"},"Website URL",-1),Vl=e("label",{for:"dateInput",class:"form-label"},"Date",-1),Al=e("label",{for:"timeInput",class:"form-label"},"Time",-1),Tl=e("label",{for:"leaveemails",class:"form-label"},"Email Id",-1),Dl=e("label",{for:"contactNumber",class:"form-label"},"Contact Number",-1),Gl=e("label",{for:"meassageInput",class:"form-label"},"Message",-1),Zl={class:"text-end"},Ml=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup",style:{height:"375px"}},[a(""),e("code",null,`<BForm action="">
<div class="row mb-3">
<div class="col-lg-3">
<label for="nameInput" class="form-label">Name</label>
</div>
<div class="col-lg-9">
<BFormInput type="text" class="form-control" id="nameInput" placeholder="Enter your name">
</div>
</div>
<div class="row mb-3">
<div class="col-lg-3">
<label for="websiteUrl" class="form-label">Website URL</label>
</div>
<div class="col-lg-9">
<BFormInput type="url" class="form-control" id="websiteUrl" placeholder="Enter your url">
</div>
</div>
<div class="row mb-3">
<div class="col-lg-3">
<label for="dateInput" class="form-label">Date</label>
</div>
<div class="col-lg-9">
<BFormInput type="date" class="form-control" id="dateInput">
</div>
</div>
<div class="row mb-3">
<div class="col-lg-3">
<label for="timeInput" class="form-label">Time</label>
</div>
<div class="col-lg-9">
<BFormInput type="time" class="form-control" id="timeInput">
</div>
</div>
<div class="row mb-3">
<div class="col-lg-3">
<label for="leaveemails" class="form-label">Email Id</label>
</div>
<div class="col-lg-9">
<BFormInput type="email" class="form-control" id="leaveemails" placeholder="Enter your email">
</div>
</div>
<div class="row mb-3">
<div class="col-lg-3">
<label for="contactNumber" class="form-label">Contact Number</label>
</div>
<div class="col-lg-9">
<BFormInput type="number" class="form-control" id="contactNumber" placeholder="+91 9876543210">
</div>
</div>
<div class="row mb-3">
<div class="col-lg-3">
<label for="meassageInput" class="form-label">Message</label>
</div>
<div class="col-lg-9">
<BFormTextarea class="form-control" id="meassageInput" rows="3" placeholder="Enter your message"></BFormTextarea>
</div>
</div>
<div class="text-end">
<button type="submit" class="btn btn-primary">Add Leave</button>
</div>
</BForm>`)])],-1),Rl=e("p",{class:"text-muted"},[a(" Use "),e("code",null,"col-form-label-sm"),a(" class to set small size form label or "),e("code",null,"col-form-label-lg"),a(" class to set large size form label to <label>. No such class is required for the default size form label. ")],-1),jl={class:"live-preview"},Hl=e("label",{for:"colFormLabelSm",class:"col-sm-2 col-form-label col-form-label-sm"},"Email",-1),ql=e("label",{for:"colFormLabel",class:"col-sm-2 col-form-label"},"Email",-1),Ol=e("label",{for:"colFormLabelLg",class:"col-sm-2 col-form-label col-form-label-lg"},"Email",-1),Jl=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup",style:{height:"275px"}},[a(""),e("code",null,`<!-- Col Form Label Small -->
<div class="row">
<label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
<div class="col-sm-10">
<BFormInput type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm">
</div>
</div>`),a(`

`),e("code",null,`<!-- Col Form Label Default -->
<div class="row">
<label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
<div class="col-sm-10">
<BFormInput type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
</div>
</div>`),a(`

`),e("code",null,`<!-- Col Form Label Large -->
<div class="row">
<label for="lg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
<div class="col-sm-10">
<BFormInput type="email" class="form-control form-control-lg" id="colFormLabelSm" placeholder="col-form-label-lg">
</div>
</div>`)])],-1),Wl=e("p",{class:"text-muted"},[a(" Use "),e("code",null,"col-sm-"),a(" class with required size value to set column size as per your requirement. ")],-1),Yl={class:"live-preview"},Kl=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup",style:{height:"275px"}},[a(""),e("code",null,`<div class="row g-3">
<div class="col-sm-6">
<BFormInput type="text" class="form-control" placeholder="Firstname" aria-label="First-Name">
</div><!--end col-->
<div class="col-sm-6">
<BFormInput type="text" class="form-control" placeholder="Lastname" aria-label="Last-Name">
</div><!--end col-->
<div class="col-sm-4">
<BFormInput type="text" class="form-control" placeholder="Email id" aria-label="Email Id">
</div><!--end col-->
<div class="col-sm-4">
<BFormInput type="password" class="form-control" placeholder="Password" aria-label="Password">
</div><!--end col-->
<div class="col-sm-4">
<BFormInput type="password" class="form-control" placeholder="Confirm Password" aria-label="confirm-password">
</div><!--end col-->
<div class="col-sm-7">
<BFormInput type="text" class="form-control" placeholder="City" aria-label="City">
</div><!--end col-->
<div class="col-sm">
<BFormInput type="text" class="form-control" placeholder="State" aria-label="State">
</div><!--end col-->
<div class="col-sm">
<BFormInput type="text" class="form-control" placeholder="Zip" aria-label="Zip">
</div><!--end col-->
</div><!--end row-->`)])],-1),Ql=e("p",{class:"text-muted"},[a(" Change "),e("code",null,"col"),a(" class to "),e("code",null,"col-auto"),a(" class so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents. ")],-1),Xl={class:"live-preview"},$l=e("label",{class:"visually-hidden",for:"autoSizingInput"},"Name",-1),le=e("label",{class:"visually-hidden",for:"autoSizingInputGroup"},"Username",-1),ee={class:"input-group"},oe=e("div",{class:"input-group-text"},"@",-1),te=e("label",{class:"visually-hidden",for:"autoSizingSelect"},"Preference",-1),ae={class:"form-check d-flex"},se=e("label",{class:"form-check-label",for:"autoSizingCheck"}," Remember me ",-1),ne=e("label",{class:"visually-hidden",for:"specificSizeInputName"},"Name",-1),ie=e("label",{class:"visually-hidden",for:"specificSizeInputGroupUsername"},"Username",-1),re={class:"input-group"},ce=e("div",{class:"input-group-text"},"@",-1),de=e("label",{class:"visually-hidden",for:"specificSizeSelect"},"Preference",-1),me={class:"col-auto"},ue={class:"form-check d-flex"},pe=e("label",{class:"form-check-label",for:"autoSizingCheck2"}," Remember me ",-1),fe={class:"col-auto"},be=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup",style:{height:"275px"}},[a(""),e("code",null,`<BForm action="javascript:void(0);">
<div class="row gy-2 gx-3 mb-3 align-items-center">
<div class="col-sm-auto">
<label class="visually-hidden" for="autoSizingInput">Name</label>
<BFormInput type="text" class="form-control" id="autoSizingInput" placeholder="Jane Doe">
</div><!--end col-->
<div class="col-sm-auto">
<label class="visually-hidden" for="autoSizingInputGroup">Username</label>
<div class="input-group">
<div class="input-group-text">@</div>
<BFormInput type="text" class="form-control" id="autoSizingInputGroup" placeholder="Username">
</div>
</div><!--end col-->
<div class="col-sm-auto">
<label class="visually-hidden" for="autoSizingSelect">Preference</label>
<select class="form-select" id="autoSizingSelect">
<option selected>Choose...</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>
</div><!--end col-->
<div class="col-sm-auto">
<div class="form-check">
<BFormInput class="form-check-input" type="checkbox" id="autoSizingCheck">
<label class="form-check-label" for="autoSizingCheck">
Remember me
</label>
</div>
</div><!--end col-->
<div class="col-sm-auto">
<button type="submit" class="btn btn-primary">Submit</button>
</div><!--end col-->
</div><!--end row-->
</BForm>`),a(`

`),e("code",null,`<BForm>
<div class="row gx-3 gy-2 align-items-center">
<div class="col-sm-3">
<label class="visually-hidden" for="specificSizeInputName">Name</label>
<BFormInput type="text" class="form-control" id="specificSizeInputName" placeholder="Jane Doe">
</div><!--end col-->
<div class="col-sm-3">
<label class="visually-hidden" for="specificSizeInputGroupUsername">Username</label>
<div class="input-group">
<div class="input-group-text">@</div>
<BFormInput type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder="Username">
</div>
</div><!--end col-->
<div class="col-sm-3">
<label class="visually-hidden" for="specificSizeSelect">Preference</label>
<Multiselect class="form-select" id="specificSizeSelect">
<option selected>Choose...</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</Multiselect>
</div><!--end col-->
<div class="col-auto">
<div class="form-check">
<BFormInput class="form-check-input" type="checkbox" id="autoSizingCheck2">
<label class="form-check-label" for="autoSizingCheck2">
Remember me
</label>
</div>
</div><!--end col-->
<div class="col-auto">
<button type="submit" class="btn btn-primary">Submit</button>
</div><!--end col-->
</div>
</BForm>`)])],-1),ve=e("p",{class:"text-muted"},[a(" Use "),e("code",null,"row-cols-*"),a(" class to set form inline. ")],-1),_e={class:"live-preview"},he=e("label",{class:"visually-hidden",for:"inlineFormInputGroupUsername"},"Username",-1),ye={class:"input-group"},ge=e("div",{class:"input-group-text"},"@",-1),Ie=e("label",{class:"visually-hidden",for:"inlineFormSelectPref"},"Preference",-1),xe={class:"form-check d-flex"},Fe=e("label",{class:"form-check-label",for:"inlineFormCheck"}," Remember me ",-1),we=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup",style:{height:"275px"}},[a(""),e("code",null,`<BForm action="javascript:void(0);">
<div class="row row-cols-lg-auto g-3 align-items-center">
<div class="col-12">
<label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
<div class="input-group">
<div class="input-group-text">@</div>
<BFormInput type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
</div>
</div><!--end col-->
<div class="col-12">
<label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
<BFormSelect class="form-select" id="inlineFormSelectPref">
<option selected>Choose...</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</BFormSelect>
</div><!--end col-->
<div class="col-12">
<div class="form-check">
<BFormInput class="form-check-input" type="checkbox" id="inlineFormCheck">
<label class="form-check-label" for="inlineFormCheck">
Remember me
</label>
</div>
</div><!--end col-->
<div class="col-12">
<button type="submit" class="btn btn-primary">Submit</button>
</div><!--end col-->
</div><!--end row-->
</BForm>`)])],-1),Be=e("p",{class:"text-muted"},[a(" Use "),e("code",null,"form-floating"),a(" class to enable floating labels with Bootstrap’s textual form fields. ")],-1),Se={class:"live-preview"},Ce={class:"form-floating"},ke=e("label",{for:"firstnamefloatingInput"},"First Name",-1),Ee={class:"form-floating"},Ne=e("label",{for:"lastnamefloatingInput"},"Last Name",-1),ze={class:"form-floating"},Le=e("label",{for:"emailfloatingInput"},"Email Address",-1),Ue={class:"form-floating"},Pe=e("label",{for:"passwordfloatingInput"},"Password",-1),Ve={class:"form-floating"},Ae=e("label",{for:"passwordfloatingInput1"},"Confirm Password",-1),Te={class:"form-floating"},De=e("label",{for:"cityfloatingInput"},"City",-1),Ge={class:"form-floating"},Ze=e("option",{value:""},"Choose...",-1),Me=e("option",{value:"1"},"USA",-1),Re=e("option",{value:"2"},"Brazil",-1),je=e("option",{value:"3"},"France",-1),He=e("option",{value:"4"},"Germany",-1),qe=e("label",{for:"floatingSelect"},"Country",-1),Oe={class:"form-floating"},Je=e("label",{for:"zipfloatingInput"},"Zipcode",-1),We={class:"text-end"},Ye=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup",style:{height:"275px"}},[a(""),e("code",null,`<BForm action="#">
<div class="row g-3">
<div class="col-lg-6">
<div class="form-floating">
<BFormInput type="text" class="form-control" id="firstnamefloatingInput" placeholder="Enter your firstname">
<label for="firstnamefloatingInput">First Name</label>
</div>
</div>
<div class="col-lg-6">
<div class="form-floating">
<BFormInput type="text" class="form-control" id="lastnamefloatingInput" placeholder="Enter your Lastname">
<label for="lastnamefloatingInput">Last Name</label>
</div>
</div>
<div class="col-lg-4">
<div class="form-floating">
<BFormInput type="email" class="form-control" id="emailfloatingInput" placeholder="Enter your email">
<label for="emailfloatingInput">Email Address</label>
</div>
</div>
<div class="col-lg-4">
<div class="form-floating">
<BFormInput type="password" class="form-control" id="passwordfloatingInput" placeholder="Enter your password">
<label for="passwordfloatingInput">Password</label>
</div>
</div>
<div class="col-lg-4">
<div class="form-floating">
<BFormInput type="password" class="form-control" id="passwordfloatingInput1" placeholder="Confirm password">
<label for="passwordfloatingInput1">Confirm Password</label>
</div>
</div>
<div class="col-lg-4">
<div class="form-floating">
<BFormInput type="text" class="form-control" id="cityfloatingInput" placeholder="Enter your city">
<label for="cityfloatingInput">City</label>
</div>
</div>
<div class="col-lg-4">
<div class="form-floating">
<BFormSelect class="form-select" id="floatingSelect" aria-label="Floating label select example">
<option selected>USA</option>
<option value="1">Brazil</option>
<option value="2">France</option>
<option value="3">Germany</option>
</BFormSelect>
<label for="floatingSelect">Country</label>
</div>
</div>
<div class="col-lg-4">
<div class="form-floating">
<BFormInput type="number" class="form-control" id="zipfloatingInput" placeholder="Enter your zipcode">
<label for="zipfloatingInput">Zipcode</label>
</div>
</div>
<div class="col-lg-12">
<div class="text-end">
<button type="submit" class="btn btn-primary">Submit</button>
</div>
</div>
</div>
</BForm>`)])],-1);function Ke(Qe,r,Xe,$e,c,lo){const g=i("Head"),I=i("PageHeader"),m=i("CardHeader"),s=i("BFormInput"),t=i("BCol"),v=i("Multiselect"),f=i("BButton"),n=i("BRow"),b=i("BForm"),u=i("BCardBody"),p=i("BCard"),x=i("BLink"),_=i("BFormCheckbox"),h=i("flat-pickr"),y=i("BFormTextarea"),F=i("BFormSelect"),w=i("Layout");return k(),C(w,null,{default:o(()=>[l(g,{title:"Form Layout"}),l(I,{title:"Form Layout",pagetitle:"Forms"}),l(n,null,{default:o(()=>[l(t,{xxl:"6"},{default:o(()=>[l(p,{"no-body":""},{default:o(()=>[l(m,{title:"Form Grid"}),l(u,null,{default:o(()=>[A,e("div",T,[l(b,{action:"javascript:void(0);"},{default:o(()=>[l(n,null,{default:o(()=>[l(t,{md:"6"},{default:o(()=>[e("div",D,[G,l(s,{type:"text",class:"form-control",placeholder:"Enter your firstname",id:"firstNameinput"})])]),_:1}),l(t,{md:"6"},{default:o(()=>[e("div",Z,[M,l(s,{type:"text",class:"form-control",placeholder:"Enter your lastname",id:"lastNameinput"})])]),_:1}),l(t,{md:"12"},{default:o(()=>[e("div",R,[j,l(s,{type:"text",class:"form-control",placeholder:"Enter company name",id:"compnayNameinput"})])]),_:1}),l(t,{md:"6"},{default:o(()=>[e("div",H,[q,l(s,{type:"tel",class:"form-control",placeholder:"+(245) 451 45123",id:"phonenumberInput"})])]),_:1}),l(t,{md:"6"},{default:o(()=>[e("div",O,[J,l(s,{type:"email",class:"form-control",placeholder:"example@gamil.com",id:"emailidInput"})])]),_:1}),l(t,{md:"12"},{default:o(()=>[e("div",W,[Y,l(s,{type:"text",class:"form-control",placeholder:"Address 1",id:"address1ControlTextarea"})])]),_:1}),l(t,{md:"6"},{default:o(()=>[e("div",K,[Q,l(s,{type:"email",class:"form-control",placeholder:"Enter your city",id:"citynameInput"})])]),_:1}),l(t,{md:"6"},{default:o(()=>[e("div",X,[$,l(v,{modelValue:c.value,"onUpdate:modelValue":r[0]||(r[0]=d=>c.value=d),"close-on-select":!0,searchable:!0,"create-option":!0,options:[{value:"choose",label:"Choose..."},{value:"...",label:"..."}]},null,8,["modelValue","options"])])]),_:1}),l(t,{lg:"12"},{default:o(()=>[e("div",ll,[l(f,{type:"submit",variant:"primary"},{default:o(()=>[a(" Submit ")]),_:1})])]),_:1})]),_:1})]),_:1})]),el]),_:1})]),_:1})]),_:1}),l(t,{xxl:"6"},{default:o(()=>[l(p,{"no-body":""},{default:o(()=>[l(m,{title:"Gutters"}),l(u,null,{default:o(()=>[e("p",ol,[a(" By adding "),l(x,{href:"#!",class:"text-decoration-underline"},{default:o(()=>[a("gutter modifier classes")]),_:1}),a(", you can have control over the gutter width in as well the inline as block direction. "),tl,a(" (on by default). ")]),e("div",al,[l(b,{action:"javascript:void(0);",class:"row g-3"},{default:o(()=>[l(t,{md:"12"},{default:o(()=>[sl,l(s,{type:"text",class:"form-control",id:"fullnameInput",placeholder:"Enter your name"})]),_:1}),l(t,{md:"6"},{default:o(()=>[nl,l(s,{type:"email",class:"form-control",id:"inputEmail4",placeholder:"Email"})]),_:1}),l(t,{md:"6"},{default:o(()=>[il,l(s,{type:"password",class:"form-control",id:"inputPassword4",placeholder:"Password"})]),_:1}),l(t,{cols:"12"},{default:o(()=>[rl,l(s,{type:"text",class:"form-control",id:"inputAddress",placeholder:"1234 Main St"})]),_:1}),l(t,{cols:"12"},{default:o(()=>[cl,l(s,{type:"text",class:"form-control",id:"inputAddress2",placeholder:"Apartment, studio, or floor"})]),_:1}),l(t,{md:"6"},{default:o(()=>[dl,l(s,{type:"text",class:"form-control",id:"inputCity",placeholder:"Enter your city"})]),_:1}),l(t,{md:"4"},{default:o(()=>[ml,l(v,{modelValue:c.value2,"onUpdate:modelValue":r[1]||(r[1]=d=>c.value2=d),"close-on-select":!0,searchable:!0,"create-option":!0,options:[{value:"choose",label:"Choose..."},{value:"...",label:"..."}]},null,8,["modelValue","options"])]),_:1}),l(t,{md:"2"},{default:o(()=>[ul,l(s,{type:"text",class:"form-control",id:"inputZip",placeholder:"Zin code"})]),_:1}),l(t,{cols:"12"},{default:o(()=>[e("div",pl,[l(_,{class:"form-check-input",type:"checkbox",id:"gridCheck"}),fl])]),_:1}),l(t,{cols:"12"},{default:o(()=>[e("div",bl,[l(f,{type:"submit",variant:"primary"},{default:o(()=>[a(" Sign in ")]),_:1})])]),_:1})]),_:1})]),vl]),_:1})]),_:1})]),_:1})]),_:1}),l(n,null,{default:o(()=>[l(t,{xxl:"6"},{default:o(()=>[l(p,{"no-body":""},{default:o(()=>[l(m,{title:"Vertical Form"}),l(u,null,{default:o(()=>[_l,e("div",hl,[l(b,{action:"javascript:void(0);"},{default:o(()=>[e("div",yl,[gl,l(s,{type:"text",class:"form-control",id:"employeeName",placeholder:"Enter emploree name"})]),e("div",Il,[xl,l(s,{type:"url",class:"form-control",id:"employeeUrl",placeholder:"Enter emploree url"})]),e("div",Fl,[wl,l(h,{modelValue:c.date,"onUpdate:modelValue":r[2]||(r[2]=d=>c.date=d),class:"form-control"},null,8,["modelValue"])]),e("div",Bl,[Sl,l(h,{modelValue:c.date1,"onUpdate:modelValue":r[3]||(r[3]=d=>c.date1=d),class:"form-control"},null,8,["modelValue"])]),e("div",Cl,[kl,l(y,{class:"form-control",id:"VertimeassageInput",rows:"3",placeholder:"Enter your message"})]),e("div",El,[l(f,{type:"submit",variant:"primary"},{default:o(()=>[a(" Add Leave ")]),_:1})])]),_:1})]),Nl]),_:1})]),_:1})]),_:1}),l(t,{xxl:"6"},{default:o(()=>[l(p,{"no-body":""},{default:o(()=>[l(m,{title:"Horizontal Form"}),l(u,null,{default:o(()=>[zl,e("div",Ll,[l(b,{action:"javascript:void(0);"},{default:o(()=>[l(n,{class:"mb-3"},{default:o(()=>[l(t,{lg:"3"},{default:o(()=>[Ul]),_:1}),l(t,{lg:"9"},{default:o(()=>[l(s,{type:"text",class:"form-control",id:"nameInput",placeholder:"Enter your name"})]),_:1})]),_:1}),l(n,{class:"mb-3"},{default:o(()=>[l(t,{lg:"3"},{default:o(()=>[Pl]),_:1}),l(t,{lg:"9"},{default:o(()=>[l(s,{type:"url",class:"form-control",id:"websiteUrl",placeholder:"Enter your url"})]),_:1})]),_:1}),l(n,{class:"mb-3"},{default:o(()=>[l(t,{lg:"3"},{default:o(()=>[Vl]),_:1}),l(t,{lg:"9"},{default:o(()=>[l(h,{modelValue:c.date3,"onUpdate:modelValue":r[4]||(r[4]=d=>c.date3=d),class:"form-control"},null,8,["modelValue"])]),_:1})]),_:1}),l(n,{class:"mb-3"},{default:o(()=>[l(t,{lg:"3"},{default:o(()=>[Al]),_:1}),l(t,{lg:"9"},{default:o(()=>[l(s,{type:"time",class:"form-control","data-provider":"timepickr","data-time-basic":"true",id:"timeInput"})]),_:1})]),_:1}),l(n,{class:"mb-3"},{default:o(()=>[l(t,{lg:"3"},{default:o(()=>[Tl]),_:1}),l(t,{lg:"9"},{default:o(()=>[l(s,{type:"email",class:"form-control",id:"leaveemails",placeholder:"Enter your email"})]),_:1})]),_:1}),l(n,{class:"mb-3"},{default:o(()=>[l(t,{lg:"3"},{default:o(()=>[Dl]),_:1}),l(t,{lg:"9"},{default:o(()=>[l(s,{type:"number",class:"form-control",id:"contactNumber",placeholder:"+91 9876543210"})]),_:1})]),_:1}),l(n,{class:"mb-3"},{default:o(()=>[l(t,{lg:"3"},{default:o(()=>[Gl]),_:1}),l(t,{lg:"9"},{default:o(()=>[l(y,{class:"form-control",id:"meassageInput",rows:"3",placeholder:"Enter your message"})]),_:1})]),_:1}),e("div",Zl,[l(f,{type:"submit",variant:"primary"},{default:o(()=>[a(" Add Leave ")]),_:1})])]),_:1})]),Ml]),_:1})]),_:1})]),_:1})]),_:1}),l(n,null,{default:o(()=>[l(t,{lg:"12"},{default:o(()=>[l(p,{"no-body":""},{default:o(()=>[l(m,{title:"Horizontal Form Label Sizing "}),l(u,null,{default:o(()=>[Rl,e("div",jl,[l(n,{class:"align-items-center g-3"},{default:o(()=>[l(t,{xxl:"4"},{default:o(()=>[l(n,null,{default:o(()=>[Hl,l(t,{sm:"10"},{default:o(()=>[l(s,{type:"email",class:"form-control form-control-sm",id:"colFormLabelSm",placeholder:"col-form-label-sm"})]),_:1})]),_:1})]),_:1}),l(t,{xxl:"4"},{default:o(()=>[l(n,null,{default:o(()=>[ql,l(t,{sm:"10"},{default:o(()=>[l(s,{type:"email",class:"form-control",id:"colFormLabel",placeholder:"col-form-label"})]),_:1})]),_:1})]),_:1}),l(t,{xxl:"4"},{default:o(()=>[l(n,null,{default:o(()=>[Ol,l(t,{sm:"10"},{default:o(()=>[l(s,{type:"email",class:"form-control form-control-lg",id:"colFormLabelLg",placeholder:"col-form-label-lg"})]),_:1})]),_:1})]),_:1})]),_:1})]),Jl]),_:1})]),_:1})]),_:1}),l(t,{lg:"12"},{default:o(()=>[l(p,{"no-body":""},{default:o(()=>[l(m,{title:"Column Sizing"}),l(u,null,{default:o(()=>[Wl,e("div",Yl,[l(n,{class:"g-3"},{default:o(()=>[l(t,{sm:"6"},{default:o(()=>[l(s,{type:"text",class:"form-control",placeholder:"Firstname","aria-label":"First-Name"})]),_:1}),l(t,{sm:"6"},{default:o(()=>[l(s,{type:"text",class:"form-control",placeholder:"Lastname","aria-label":"Last-Name"})]),_:1}),l(t,{sm:"4"},{default:o(()=>[l(s,{type:"text",class:"form-control",placeholder:"Email id","aria-label":"Email Id"})]),_:1}),l(t,{sm:"4"},{default:o(()=>[l(s,{type:"password",class:"form-control",placeholder:"Password","aria-label":"Password"})]),_:1}),l(t,{sm:"4"},{default:o(()=>[l(s,{type:"password",class:"form-control",placeholder:"Confirm Password","aria-label":"confirm-password"})]),_:1}),l(t,{sm:"7"},{default:o(()=>[l(s,{type:"text",class:"form-control",placeholder:"City","aria-label":"City"})]),_:1}),l(t,{sm:""},{default:o(()=>[l(s,{type:"text",class:"form-control",placeholder:"State","aria-label":"State"})]),_:1}),l(t,{sm:""},{default:o(()=>[l(s,{type:"text",class:"form-control",placeholder:"Zip","aria-label":"Zip"})]),_:1})]),_:1})]),Kl]),_:1})]),_:1})]),_:1})]),_:1}),l(n,null,{default:o(()=>[l(t,{lg:"12"},{default:o(()=>[l(p,{"no-body":""},{default:o(()=>[l(m,{title:"Auto Sizing"}),l(u,null,{default:o(()=>[Ql,e("div",Xl,[l(b,{action:"javascript:void(0);"},{default:o(()=>[l(n,{class:"gy-2 gx-3 mb-3 align-items-center"},{default:o(()=>[l(t,{sm:"auto"},{default:o(()=>[$l,l(s,{type:"text",class:"form-control",id:"autoSizingInput",placeholder:"Jane Doe"})]),_:1}),l(t,{sm:"auto"},{default:o(()=>[le,e("div",ee,[oe,l(s,{type:"text",class:"form-control",id:"autoSizingInputGroup",placeholder:"Username"})])]),_:1}),l(t,{sm:"auto"},{default:o(()=>[te,l(v,{class:"w-lg",modelValue:c.value3,"onUpdate:modelValue":r[5]||(r[5]=d=>c.value3=d),"close-on-select":!0,searchable:!0,"create-option":!0,options:[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}]},null,8,["modelValue"])]),_:1}),l(t,{sm:"auto"},{default:o(()=>[e("div",ae,[l(_,{class:"form-check-input",type:"checkbox",id:"autoSizingCheck"}),se])]),_:1}),l(t,{sm:"auto"},{default:o(()=>[l(f,{type:"submit",variant:"primary"},{default:o(()=>[a(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1}),l(b,{action:"javascript:void(0);"},{default:o(()=>[l(n,{class:"gx-3 gy-2 align-items-center"},{default:o(()=>[l(t,{sm:"3"},{default:o(()=>[ne,l(s,{type:"text",class:"form-control",id:"specificSizeInputName",placeholder:"Jane Doe"})]),_:1}),l(t,{sm:"3"},{default:o(()=>[ie,e("div",re,[ce,l(s,{type:"text",class:"form-control",id:"specificSizeInputGroupUsername",placeholder:"Username"})])]),_:1}),l(t,{sm:"3"},{default:o(()=>[de,l(v,{modelValue:c.value4,"onUpdate:modelValue":r[6]||(r[6]=d=>c.value4=d),"close-on-select":!0,searchable:!0,"create-option":!0,options:[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}]},null,8,["modelValue"])]),_:1}),e("div",me,[e("div",ue,[l(_,{class:"form-check-input",type:"checkbox",id:"autoSizingCheck2"}),pe])]),e("div",fe,[l(f,{type:"submit",variant:"primary"},{default:o(()=>[a(" Submit ")]),_:1})])]),_:1})]),_:1})]),be]),_:1})]),_:1})]),_:1})]),_:1}),l(n,null,{default:o(()=>[l(t,{lg:"12"},{default:o(()=>[l(p,{"no-body":""},{default:o(()=>[l(m,{title:"Inline Forms"}),l(u,null,{default:o(()=>[ve,e("div",_e,[l(b,{action:"javascript:void(0);"},{default:o(()=>[l(n,{class:"row-cols-lg-auto g-3 align-items-center"},{default:o(()=>[l(t,{cols:"12"},{default:o(()=>[he,e("div",ye,[ge,l(s,{type:"text",class:"form-control",id:"inlineFormInputGroupUsername",placeholder:"Username"})])]),_:1}),l(t,{cols:"12"},{default:o(()=>[Ie,l(v,{class:"w-md",modelValue:c.value5,"onUpdate:modelValue":r[7]||(r[7]=d=>c.value5=d),"close-on-select":!0,searchable:!0,"create-option":!0,options:[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}]},null,8,["modelValue"])]),_:1}),l(t,{cols:"12"},{default:o(()=>[e("div",xe,[l(_,{class:"form-check-input",type:"checkbox",id:"inlineFormCheck"}),Fe])]),_:1}),l(t,{cols:"12"},{default:o(()=>[l(f,{type:"submit",variant:"primary"},{default:o(()=>[a(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1})]),we]),_:1})]),_:1})]),_:1})]),_:1}),l(n,null,{default:o(()=>[l(t,{lg:"12"},{default:o(()=>[l(p,{"no-body":""},{default:o(()=>[l(m,{title:"Floating Labels"}),l(u,null,{default:o(()=>[Be,e("div",Se,[l(b,{action:"#"},{default:o(()=>[l(n,{class:"g-3"},{default:o(()=>[l(t,{lg:"6"},{default:o(()=>[e("div",Ce,[l(s,{type:"text",class:"form-control",id:"firstnamefloatingInput",placeholder:"Enter your firstname"}),ke])]),_:1}),l(t,{lg:"6"},{default:o(()=>[e("div",Ee,[l(s,{type:"text",class:"form-control",id:"lastnamefloatingInput",placeholder:"Enter your Lastname"}),Ne])]),_:1}),l(t,{lg:"4"},{default:o(()=>[e("div",ze,[l(s,{type:"email",class:"form-control",id:"emailfloatingInput",placeholder:"Enter your email"}),Le])]),_:1}),l(t,{lg:"4"},{default:o(()=>[e("div",Ue,[l(s,{type:"password",class:"form-control",id:"passwordfloatingInput",placeholder:"Enter your password"}),Pe])]),_:1}),l(t,{lg:"4"},{default:o(()=>[e("div",Ve,[l(s,{type:"password",class:"form-control",id:"passwordfloatingInput1",placeholder:"Confirm password"}),Ae])]),_:1}),l(t,{lg:"4"},{default:o(()=>[e("div",Te,[l(s,{type:"text",class:"form-control",id:"cityfloatingInput",placeholder:"Enter your city"}),De])]),_:1}),l(t,{lg:"4"},{default:o(()=>[e("div",Ge,[l(F,null,{default:o(()=>[Ze,Me,Re,je,He]),_:1}),qe])]),_:1}),l(t,{lg:"4"},{default:o(()=>[e("div",Oe,[l(s,{type:"number",class:"form-control",id:"zipfloatingInput",placeholder:"Enter your zipcode"}),Je])]),_:1}),l(t,{lg:"12"},{default:o(()=>[e("div",We,[l(f,{type:"submit",variant:"primary"},{default:o(()=>[a(" Submit ")]),_:1})])]),_:1})]),_:1})]),_:1})]),Ye]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const Io=P(V,[["render",Ke]]);export{Io as default};
