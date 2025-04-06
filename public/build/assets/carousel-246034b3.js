import{i as h,Z as f,r as a,c as v,w as o,o as C,a as e,f as s,h as t}from"./app-3cfb9ddb.js";import{L as I}from"./main-fd3f050e.js";import{P as B}from"./page-header-c76b7ffd.js";import{C as w}from"./card-header-cc01c0c6.js";import{_ as b}from"./img-1-692177ef.js";import{_ as k}from"./img-2-55da122e.js";import{_ as y}from"./img-3-ebf211ec.js";import{_ as x}from"./img-4-61d4f345.js";import{_ as S}from"./img-5-dd3c51dd.js";import{_ as D}from"./img-6-5c2b195d.js";import{_ as T}from"./img-7-29f6a4ec.js";import{_ as H}from"./img-8-49c21b71.js";import{_ as W}from"./img-9-ad3e3120.js";import{_ as U}from"./img-10-21f83d87.js";import{_ as L}from"./img-11-6e932afd.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";import"./simplebar-vue.esm-3378fd5d.js";import"./logo-sm-eae269a3.js";import"./logo-dark-24ab6998.js";import"./logo-light-01b48412.js";import"./avatar-2-4823f2b4.js";import"./avatar-3-cd4bfcf0.js";import"./avatar-5-577750b4.js";import"./russia-3c30e48e.js";import"./avatar-8-a9f045da.js";import"./avatar-6-c2396ad9.js";import"./prism-a4be18ec.js";const A={data(){return{Img1:b,Img2:k,Img3:y,Img4:x,Img5:S,Img6:D,Img7:T,Img8:H,Img9:W,Img10:U,Img11:L}},components:{Layout:I,PageHeader:B,CardHeader:w,Link:h,Head:f}},G=s("p",{class:"text-muted"},[t(" Use "),s("code",null,"slide"),t(" class to set carousel with slides. Note the presence of the "),s("code",null,"d-block"),t(" and "),s("code",null,"w-100"),t(" class on carousel images to prevent browser default image alignment. ")],-1),N={class:"live-preview"},P=s("div",{class:"d-none code-view"},[s("pre",{class:"language-markup"},[t(""),s("code",null,`<!-- Slides Only -->
  <BCarousel :interval="2000" class="carousel slide">
    <BCarouselSlide active :img-src="Img1" />
    <BCarouselSlide :img-src="Img2" />
    <BCarouselSlide :img-src="Img3" />
  </BCarousel>
`)])],-1),j=s("p",{class:"text-muted"},[t(" Use "),s("code",null,"carousel-control-prev"),t(" and "),s("code",null,"carousel-control-next"),t(" class with <button> or <a> tag element to show carousel with control navigation. ")],-1),q={class:"live-preview"},O=s("div",{class:"d-none code-view"},[s("pre",{class:"language-markup"},[t(""),s("code",null,`<!-- With Controls -->
  <BCarousel class="carousel slide" :interval="2000" controls>
    <BCarouselSlide active :img-src="Img4" />
    <BCarouselSlide :img-src="Img5" />
    <BCarouselSlide :img-src="Img6" />
  </BCarousel>
`)])],-1),R=s("p",{class:"text-muted"},[t(" Use "),s("code",null,"carousel-indicators"),t(" class with <ol> element to show carousel with indicators. ")],-1),Y={class:"live-preview"},Z=s("div",{class:"d-none code-view"},[s("pre",{class:"language-markup"},[t(""),s("code",null,`<!-- With Indicators -->
  <BCarousel class="carousel slide" :interval="2000" controls indicators>
    <BCarouselSlide active :img-src="Img3" />
    <BCarouselSlide :img-src="Img2" />
    <BCarouselSlide :img-src="Img1" />
  </BCarousel>
`)])],-1),z=s("p",{class:"text-muted"},[t(" Use "),s("code",null,"carousel-caption"),t(" class to add captions to the carousel. ")],-1),E={class:"live-preview"},F=s("h5",{class:"text-white"},"Sunrise above a beach",-1),J=s("p",{class:"text-white-50"}," You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary. ",-1),K=s("h5",{class:"text-white"},"Working from home little spot",-1),M=s("p",{class:"text-white-50"}," Consistency piques people’s interest is that it has become more and more popular over the years, which is excellent. ",-1),Q=s("h5",{class:"text-white"}," Dramatic clouds at the Golden Gate Bridge ",-1),X=s("p",{class:"text-white-50"}," Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each letter. ",-1),$=s("div",{class:"d-none code-view"},[s("pre",{class:"language-markup",style:{height:"375px"}},[t(""),s("code",null,`<!-- With Captions -->
  <BCarousel class="carousel slide" :interval="2000" controls indicators>
    <BCarouselSlide active :img-src="Img7">
      <h5 class="text-white">Sunrise above a beach</h5>
      <p class="text-white-50">
        You've probably heard that opposites attract. The same
        is true for fonts. Don't be afraid to combine font
        styles that are different but complementary.
      </p>
    </BCarouselSlide>
    <BCarouselSlide :img-src="Img2">
      <h5 class="text-white">Working from home little spot</h5>
      <p class="text-white-50">
        Consistency piques people’s interest is that it has
        become more and more popular over the years, which is
        excellent.
      </p>
    </BCarouselSlide>
    <BCarouselSlide :img-src="Img9">
      <h5 class="text-white">
        Dramatic clouds at the Golden Gate Bridge
      </h5>
      <p class="text-white-50">
        Increase or decrease the letter spacing depending on the
        situation and try, try again until it looks right, and
        each letter.
      </p>
    </BCarouselSlide>
  </BCarousel>
`)])],-1),ee=s("p",{class:"text-muted"},[t(" Use "),s("code",null,"carousel-fade"),t(" class to the carousel to animate slides with a fade transition instead of a slide. ")],-1),se={class:"live-preview"},oe=s("div",{class:"d-none code-view"},[s("pre",null,[t(""),s("code",{class:"language-markup"},`
<!-- With Crossfade Animation -->
<BCarousel class="carousel slide carousel-fade" controls indicators>
  <BCarouselSlide active :img-src="Img1" />
  <BCarouselSlide :img-src="Img2" />
  <BCarouselSlide :img-src="Img3" />
</BCarousel>
`)])],-1),te=s("p",{class:"text-muted"},[t(" Use "),s("code",null,'data-bs-interval=" "'),t(" to a carousel-item to change the amount of time to delay between automatically cycling to the next item. ")],-1),le={class:"live-preview"},ie=s("div",{class:"d-none code-view"},[s("pre",{class:"language-markup"},[t(""),s("code",null,`<!-- Individual Slide -->
  <BCarousel class="carousel slide" :interval="2000" controls>
    <BCarouselSlide active :img-src="Img1" />
    <BCarouselSlide :img-src="Img11" />
    <BCarouselSlide :img-src="Img10" />
  </BCarousel>
`)])],-1),ae=s("p",{class:"text-muted"},[t(" Carousels support swiping left/right on touchscreen devices to move between slides. This can be disabled using the "),s("code",null,"data-bs-touch"),t(" attribute. The example below also does not include the "),s("code",null,"data-bs-ride attribute"),t(" and has "),s("code",null,'data-bs-interval="false"'),t(" so it doesn’t autoplay. ")],-1),ne={class:"live-preview"},re=s("div",{class:"d-none code-view"},[s("pre",{class:"language-markup"},[t(""),s("code",null,`<!-- Disable Touch Swiping -->
  <BCarousel class="carousel slide" :interval="2000" controls no-touch="true">
    <BCarouselSlide active :img-src="Img9" />
    <BCarouselSlide :img-src="Img8" />
    <BCarouselSlide :img-src="Img7" />
  </BCarousel>
`)])],-1),ce=s("p",{class:"text-muted"},[t(" Use "),s("code",null,"carousel-dark"),t(" class to the carousel for darker controls, indicators, and captions. ")],-1),de={class:"live-preview"},ue=s("div",{class:"carousel-caption d-none d-md-block"},[s("h5",null,"Drawing a sketch"),s("p",null," Too much or too little spacing, as in the example below, can make things unpleasant for the reader. ")],-1),me=s("div",{class:"carousel-caption d-none d-md-block"},[s("h5",null,"Blue clock on a pastel background"),s("p",null," In some designs, you might adjust your tracking to create a certain artistic effect asked them what graphic design tips they live. ")],-1),ge=s("div",{class:"carousel-caption d-none d-md-block"},[s("h5",null,"Working at a coffee shop"),s("p",null," A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring. ")],-1),pe=s("div",{class:"d-none code-view"},[s("pre",{class:"language-markup",style:{height:"375px"}},[t(""),s("code",null,`<!-- Dark Variant -->
  <BCarousel class="carousel slide carousel-dark" :interval="10000" controls>
    <BCarouselSlide active :img-src="Img4">
      <div class="carousel-caption d-none d-md-block">
        <h5>Drawing a sketch</h5>
        <p>
          Too much or too little spacing, as in the example below,
          can make things unpleasant for the reader.
        </p>
      </div>
    </BCarouselSlide>
    <BCarouselSlide :img-src="Img5">
      <div class="carousel-caption d-none d-md-block">
        <h5>Blue clock on a pastel background</h5>
        <p>
          In some designs, you might adjust your tracking to
          create a certain artistic effect asked them what graphic
          design tips they live.
        </p>
      </div>
    </BCarouselSlide>
    <BCarouselSlide :img-src="Img6">
      <div class="carousel-caption d-none d-md-block">
        <h5>Working at a coffee shop</h5>
        <p>
          A wonderful serenity has taken possession of my entire
          soul, like these sweet mornings of spring.
        </p>
      </div>
    </BCarouselSlide>
  </BCarousel>
`)])],-1);function _e(he,fe,ve,Ce,l,Ie){const g=a("Head"),p=a("PageHeader"),n=a("CardHeader"),i=a("BCarouselSlide"),r=a("BCarousel"),c=a("BCardBody"),d=a("BCard"),u=a("BCol"),m=a("BRow"),_=a("Layout");return C(),v(_,null,{default:o(()=>[e(g,{title:"Carousel"}),e(p,{title:"Carousel",pageTitle:"Base UI"}),e(m,null,{default:o(()=>[e(u,{xl:"6"},{default:o(()=>[e(d,{"no-body":""},{default:o(()=>[e(n,{title:"Slides Only"}),e(c,null,{default:o(()=>[G,s("div",N,[e(r,{interval:2e3,ride:"carousel",class:"carousel slide"},{default:o(()=>[e(i,{active:"","img-src":l.Img1},null,8,["img-src"]),e(i,{"img-src":l.Img2},null,8,["img-src"]),e(i,{"img-src":l.Img3},null,8,["img-src"])]),_:1})]),P]),_:1})]),_:1})]),_:1}),e(u,{xl:"6"},{default:o(()=>[e(d,{"no-body":""},{default:o(()=>[e(n,{title:"With Controls"}),e(c,null,{default:o(()=>[j,s("div",q,[e(r,{class:"carousel slide",ride:"carousel",interval:2e3,controls:""},{default:o(()=>[e(i,{active:"","img-src":l.Img4},null,8,["img-src"]),e(i,{"img-src":l.Img5},null,8,["img-src"]),e(i,{"img-src":l.Img6},null,8,["img-src"])]),_:1})]),O]),_:1})]),_:1})]),_:1})]),_:1}),e(m,null,{default:o(()=>[e(u,{xl:"6"},{default:o(()=>[e(d,{"no-body":""},{default:o(()=>[e(n,{title:"with Indicators"}),e(c,null,{default:o(()=>[R,s("div",Y,[e(r,{class:"carousel slide",ride:"carousel",interval:2e3,controls:"",indicators:""},{default:o(()=>[e(i,{active:"","img-src":l.Img3},null,8,["img-src"]),e(i,{"img-src":l.Img2},null,8,["img-src"]),e(i,{"img-src":l.Img1},null,8,["img-src"])]),_:1})]),Z]),_:1})]),_:1})]),_:1}),e(u,{xl:"6"},{default:o(()=>[e(d,{"no-body":""},{default:o(()=>[e(n,{title:"with Captions"}),e(c,null,{default:o(()=>[z,s("div",E,[e(r,{class:"carousel slide",ride:"carousel",interval:2e3,controls:"",indicators:""},{default:o(()=>[e(i,{active:"","img-src":l.Img7},{default:o(()=>[F,J]),_:1},8,["img-src"]),e(i,{"img-src":l.Img2},{default:o(()=>[K,M]),_:1},8,["img-src"]),e(i,{"img-src":l.Img9},{default:o(()=>[Q,X]),_:1},8,["img-src"])]),_:1})]),$]),_:1})]),_:1})]),_:1})]),_:1}),e(m,null,{default:o(()=>[e(u,{xl:"6"},{default:o(()=>[e(d,{"no-body":""},{default:o(()=>[e(n,{title:"Crossfade Animation"}),e(c,null,{default:o(()=>[ee,s("div",se,[e(r,{class:"carousel slide carousel-fade",ride:"carousel",interval:2e3,controls:"",indicators:""},{default:o(()=>[e(i,{active:"","img-src":l.Img1},null,8,["img-src"]),e(i,{"img-src":l.Img2},null,8,["img-src"]),e(i,{"img-src":l.Img3},null,8,["img-src"])]),_:1})]),oe]),_:1})]),_:1})]),_:1}),e(u,{xl:"6"},{default:o(()=>[e(d,{"no-body":""},{default:o(()=>[e(n,{title:"Individual carousel-item Interval"}),e(c,null,{default:o(()=>[te,s("div",le,[e(r,{class:"carousel slide",ride:"carousel",interval:2e3,controls:""},{default:o(()=>[e(i,{active:"","img-src":l.Img1},null,8,["img-src"]),e(i,{"img-src":l.Img11},null,8,["img-src"]),e(i,{"img-src":l.Img10},null,8,["img-src"])]),_:1})]),ie]),_:1})]),_:1})]),_:1})]),_:1}),e(m,null,{default:o(()=>[e(u,{xl:"6"},{default:o(()=>[e(d,{"no-body":""},{default:o(()=>[e(n,{title:"Disable Touch Swiping"}),e(c,null,{default:o(()=>[ae,s("div",ne,[e(r,{class:"carousel slide",interval:2e3,controls:"","no-touch":"true"},{default:o(()=>[e(i,{active:"","img-src":l.Img9},null,8,["img-src"]),e(i,{"img-src":l.Img8},null,8,["img-src"]),e(i,{"img-src":l.Img7},null,8,["img-src"])]),_:1})]),re]),_:1})]),_:1})]),_:1}),e(u,{xl:"6"},{default:o(()=>[e(d,{"no-body":""},{default:o(()=>[e(n,{title:"Dark Variant"}),e(c,null,{default:o(()=>[ce,s("div",de,[e(r,{class:"carousel slide carousel-dark",ride:"carousel",interval:2e3,controls:""},{default:o(()=>[e(i,{active:"","img-src":l.Img4},{default:o(()=>[ue]),_:1},8,["img-src"]),e(i,{"img-src":l.Img5},{default:o(()=>[me]),_:1},8,["img-src"]),e(i,{"img-src":l.Img6},{default:o(()=>[ge]),_:1},8,["img-src"])]),_:1})]),pe]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const Je=V(A,[["render",_e]]);export{Je as default};
