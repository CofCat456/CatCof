(function(e){function t(t){for(var c,o,l=t[0],i=t[1],s=t[2],d=0,u=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&u.push(a[o][0]),a[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);b&&b(t);while(u.length)u.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(c=!1)}c&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},o={app:0},a={app:0},r=[];function l(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d2086b7":"fb1fdf83","chunk-323c0636":"56e2d37b","chunk-3bed80b6":"31ebc85d","chunk-b386dd0e":"4d9267f7","chunk-c9c78338":"8261b6f0","chunk-fa985b22":"13beecb8","chunk-448bd834":"a6c22959","chunk-3cca7c2d":"c8623b43","chunk-5ef343b4":"9b7aa080","chunk-8c646892":"08d25461","chunk-74b24a3e":"ecc992d0","chunk-76671001":"8e3bd491","chunk-a9e6e934":"b1df2c04","chunk-c27a7b98":"5a251290","chunk-fdc37e4e":"f9bb20a9"}[e]+".js"}function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-323c0636":1,"chunk-3bed80b6":1,"chunk-b386dd0e":1,"chunk-c9c78338":1,"chunk-fa985b22":1,"chunk-448bd834":1,"chunk-3cca7c2d":1,"chunk-5ef343b4":1,"chunk-8c646892":1,"chunk-74b24a3e":1,"chunk-76671001":1,"chunk-a9e6e934":1,"chunk-c27a7b98":1,"chunk-fdc37e4e":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-2d2086b7":"31d6cfe0","chunk-323c0636":"4bdee33c","chunk-3bed80b6":"eed2c4ce","chunk-b386dd0e":"88721ab5","chunk-c9c78338":"a2a004bb","chunk-fa985b22":"91ca957c","chunk-448bd834":"90035090","chunk-3cca7c2d":"5f5e978e","chunk-5ef343b4":"77bf1283","chunk-8c646892":"7a21bbd5","chunk-74b24a3e":"add29668","chunk-76671001":"a88ac30b","chunk-a9e6e934":"d651c5cb","chunk-c27a7b98":"ab4b5ec1","chunk-fdc37e4e":"85f9ca3c"}[e]+".css",a=i.p+c,r=document.getElementsByTagName("link"),l=0;l<r.length;l++){var s=r[l],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===c||d===a))return t()}var u=document.getElementsByTagName("style");for(l=0;l<u.length;l++){s=u[l],d=s.getAttribute("data-href");if(d===c||d===a)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var c=t&&t.target&&t.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete o[e],b.parentNode.removeChild(b),n(r)},b.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(b)})).then((function(){o[e]=0})));var c=a[e];if(0!==c)if(c)t.push(c[2]);else{var r=new Promise((function(t,n){c=a[e]=[t,n]}));t.push(c[2]=r);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=l(e);var u=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(b);var n=a[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+c+": "+o+")",u.name="ChunkLoadError",u.type=c,u.request=o,n[1](u)}a[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/coffeeShop/dist/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var b=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"087f":function(e,t,n){"use strict";var c=n("7a23"),o=function(e){return Object(c["pushScopeId"])("data-v-96461232"),e=e(),Object(c["popScopeId"])(),e},a={class:"btn-custom-ul position-fixed d-flex flex-column justify-content-around align-items-center"},r={class:"my-1"},l={type:"button",class:"love","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasWithBothOptions","aria-controls":"offcanvasWithBothOptions"},i={class:"bi bi-heart position-relative"},s={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"},d={class:"my-1"},u={class:"bi bi-cart3 position-relative"},b={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"},m={class:"offcanvas offcanvas-start","data-bs-scroll":"true",tabindex:"-1",id:"offcanvasWithBothOptions","aria-labelledby":"offcanvasWithBothOptionsLabel"},p=Object(c["createStaticVNode"])('<div class="offcanvas-header" data-v-96461232><div class="row align-items-center justify-content-between w-100" data-v-96461232><div class="col-10" data-v-96461232><h4 class="d-in;one" data-v-96461232>我的收藏</h4></div><div class="col-2 text-end" data-v-96461232><button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" data-v-96461232></button></div></div></div>',1),f={class:"offcanvas-body"},j={key:0,class:"mb-3"},O=["onClick"],h=["src"],g={class:"col-5 m-0 px-1 py-0 text-center"},v=o((function(){return Object(c["createElementVNode"])("br",null,null,-1)})),k={class:"col-2 col-sm-2 px-1"},y=["onUpdate:modelValue"],x={class:"col-2 p-0 ps-sm-1"},E=["onClick"],N=o((function(){return Object(c["createElementVNode"])("i",{class:"bi bi-cart3"},null,-1)})),V=[N],w={key:1,class:"w-100 text-center mb-5 px-3 py-2"},C=o((function(){return Object(c["createElementVNode"])("h4",null,"目前無收藏商品唷！",-1)})),B=[C],S={class:"row"},L={class:"col-6 px-2"},P={class:"col-6 px-2"},_={class:"col-12 mt-2 px-2"},T=["disabled"];function D(e,t,n,o,N,C){var D=this,I=Object(c["resolveComponent"])("Loading"),$=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(I,{active:N.isLoading},null,8,["active"]),Object(c["createElementVNode"])("ul",a,[Object(c["createElementVNode"])("li",r,[Object(c["createElementVNode"])("button",l,[Object(c["createElementVNode"])("i",i,[Object(c["createElementVNode"])("span",s,"+"+Object(c["toDisplayString"])(N.collects.length),1)])])]),Object(c["createElementVNode"])("li",d,[Object(c["createVNode"])($,{to:"/User/cart"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("i",u,[Object(c["createElementVNode"])("span",b,"+"+Object(c["toDisplayString"])(N.cartNumber),1)])]})),_:1})])]),Object(c["createElementVNode"])("div",m,[p,Object(c["createElementVNode"])("div",f,[this.collects.length>0?(Object(c["openBlock"])(),Object(c["createElementBlock"])("ul",j,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(N.collects,(function(t,n){return Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{key:t.id,class:"row justify-content-center align-items-center mb-2 pb-2 border-bottom"},[Object(c["createElementVNode"])("div",{class:"col-2 p-0 ms-2 me-1 d-sm-bolck",onClick:function(e){return C.getProducts(t.id)},"data-bs-dismiss":"offcanvas","aria-label":"Close"},[Object(c["createElementVNode"])("img",{src:t.imageUrl,class:"w-100"},null,8,h)],8,O),Object(c["createElementVNode"])("p",g,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(t.title)+" ",1),v,Object(c["createTextVNode"])(" $"+Object(c["toDisplayString"])(e.$filters.currency(t.price))+"元 ",1)]),Object(c["createElementVNode"])("div",k,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"number",min:"1","onUpdate:modelValue":function(e){return t.qty=e},class:"form-control w-100 text-center py-1"},null,8,y),[[c["vModelText"],t.qty]])]),Object(c["createElementVNode"])("div",x,[Object(c["createElementVNode"])("button",{type:"button",class:"btn fs-4",onClick:function(e){return C.addCart(t.id,t.qty,n)}},V,8,E)])])})),128))])):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",w,B)),Object(c["createElementVNode"])("div",S,[Object(c["createElementVNode"])("div",L,[Object(c["createElementVNode"])("button",{class:"btn btn-custom-Blue w-100 px-1 px-md-4 py-2",onClick:t[0]||(t[0]=function(e){return D.$router.push("/User/ProductList")}),"data-bs-dismiss":"offcanvas","aria-label":"Close"}," 繼 續 選 購 ")]),Object(c["createElementVNode"])("div",P,[Object(c["createElementVNode"])("button",{class:"btn btn-custom-Orange w-100 px-1 px-sm-2 px-md-4 py-2",onClick:t[1]||(t[1]=function(e){return D.$router.push("/User/cart")}),"data-bs-dismiss":"offcanvas","aria-label":"Close"}," 填 寫 訂 單 ")]),Object(c["createElementVNode"])("div",_,[Object(c["createElementVNode"])("button",{class:"btn btn-outline-danger w-100 px-1 px-sm-2 px-md-4 py-2",onClick:t[2]||(t[2]=function(e){return C.DeleteAllCollects()}),disabled:this.collects.length<1}," 清 空 收 藏 ",8,T)])])])])],64)}n("99af"),n("a434"),n("4de4"),n("d3b7"),n("07ac");var I=n("fc60"),$={inject:["emitter"],data:function(){return{collects:[],cartNumber:0,isLoading:!1}},methods:{getCart:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/cart");this.$http.get(t).then((function(t){t.data.success&&(e.cartNumber=t.data.data.carts.length)}))},addCart:function(e,t,n){var c=this,o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/cart");this.isLoading=!0;var a={product_id:e,qty:t};if(this.productNumber<1)return this.$swal({showConfirmButton:!0,icon:"error",title:"數字型別錯誤",Text:"請輸入數字唷!"}),void(this.productNumber=1);this.$http.post(o,{data:a}).then((function(e){e.data.success&&(c.isLoading=!1,c.$swal({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",c.$swal.stopTimer),e.addEventListener("mouseleave",c.$swal.resumeTimer)},icon:"success",title:"加入購物車成功!"}),c.collects.splice(n,1),Object(I["b"])("favoriteList",c.collects),c.getCart(),c.emitter.emit("update-cart"))})).catch((function(e){c.$swal({showConfirmButton:!0,icon:"error",title:"加入失敗",Text:e})}))},getProducts:function(e){this.emitter.emit("update-product",e),this.$router.push("/User/product/".concat(e))},DeleteAllCollects:function(){var e=this;this.collects=[],Object(I["b"])("favoriteList",this.collects),this.emitter.emit("update-collect"),this.$swal({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:function(t){t.addEventListener("mouseenter",e.$swal.stopTimer),t.addEventListener("mouseleave",e.$swal.resumeTimer)},icon:"success",title:"已經清空收藏囉"})}},mounted:function(){var e=this;this.getCart(),null!==Object(I["a"])("favoriteList")&&(this.collects=Object(I["a"])("favoriteList")),this.emitter.on("add-product",(function(t){t.qty=1,e.collects.push(t),Object(I["b"])("favoriteList",e.collects),e.$swal({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:function(t){t.addEventListener("mouseenter",e.$swal.stopTimer),t.addEventListener("mouseleave",e.$swal.resumeTimer)},icon:"success",title:"加入收藏成功!"})})),this.emitter.on("remove-product",(function(t){var n=Object(I["a"])("favoriteList");e.collects=Object.values(n).filter((function(e){return e.id!==t.id})),Object(I["b"])("favoriteList",e.collects),e.$swal({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:function(t){t.addEventListener("mouseenter",e.$swal.stopTimer),t.addEventListener("mouseleave",e.$swal.resumeTimer)},icon:"success",title:"移除收藏成功！"})})),this.emitter.on("update-cartNumber",(function(){e.getCart()}))}},F=(n("1d72"),n("d959")),U=n.n(F);const A=U()($,[["render",D],["__scopeId","data-v-96461232"]]);t["a"]=A},"0932":function(e,t,n){e.exports=n.p+"img/bg-005.8cc6602f.jpg"},"0aa7":function(e,t,n){},"0faa":function(e,t,n){},1791:function(e,t,n){"use strict";n("0aa7")},"1b9c":function(e,t,n){"use strict";n("e10c")},"1d72":function(e,t,n){"use strict";n("721f")},"2beb":function(e,t,n){e.exports=n.p+"img/bg-002.02ca6cf9.jpg"},3174:function(e,t,n){"use strict";n("55e2")},3371:function(e,t,n){e.exports=n.p+"img/bg-001.41f2e416.jpg"},"3e86":function(e,t,n){e.exports=n.p+"img/CofShopLogo.6e88b2ed.png"},"4d24":function(e,t,n){"use strict";n("7ee3")},"52c6":function(e,t,n){"use strict";n("9911"),n("b0c0");var c=n("7a23"),o=n("3e86"),a=n.n(o),r=function(e){return Object(c["pushScopeId"])("data-v-0deb9f7e"),e=e(),Object(c["popScopeId"])(),e},l={class:"container-fluid"},i={class:"row"},s={class:"col-11"},d={class:"wrap d-md-flex d-block"},u=r((function(){return Object(c["createElementVNode"])("div",{class:"logo me-lg-5 me-md-0"},[Object(c["createElementVNode"])("img",{src:a.a,alt:"貓咖啡 Logo"})],-1)})),b={class:"information ms-md-5 ms-0 my-3"},m=r((function(){return Object(c["createElementVNode"])("div",{class:"addres mb-4"},[Object(c["createElementVNode"])("p",null,"地址 : 新北市鶯歌區"),Object(c["createElementVNode"])("p",null,"電話 : 02-8711-3351")],-1)})),p=r((function(){return Object(c["createElementVNode"])("p",null,"營業時間 : 13:00-22:00",-1)})),f=r((function(){return Object(c["createElementVNode"])("p",null,"營業日 : 週一 ～ 週六",-1)})),j={class:"connectText fs-5 mt-md-4 mt-2"},O=["href"],h=r((function(){return Object(c["createElementVNode"])("p",{class:"mt-lg-5 mt-3 pt-lg-5 pt-md-3"}," Copyright © 2022 CofCat All right reserved ",-1)})),g={class:"link d-md-block d-none"};function v(e,t,n,o,a,r){var v=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createElementBlock"])("footer",null,[Object(c["createElementVNode"])("div",l,[Object(c["createElementVNode"])("div",i,[Object(c["createElementVNode"])("div",s,[Object(c["createElementVNode"])("div",d,[u,Object(c["createElementVNode"])("div",b,[m,p,f,Object(c["createElementVNode"])("div",j,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(a.infoData,(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("a",{key:e.icon,href:e.link,target:"_blank"},[Object(c["createElementVNode"])("i",{class:Object(c["normalizeClass"])(["bi",e.icon])},null,2)],8,O)})),128))]),h]),Object(c["createElementVNode"])("ul",g,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(a.routerData,(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{key:e.name},[Object(c["createVNode"])(v,{to:e.link},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.name),1)]})),_:2},1032,["to"])])})),128))])])])])])])}var k={data:function(){return{routerData:[{name:"商品列表",link:"/User/ProductList"},{name:"關於我們",link:"/User/About"},{name:"管理者登入",link:"/Login"},{name:"購物車",link:"/User/cart"}],infoData:[{icon:"bi-facebook",link:"https://www.facebook.com/liao.xiaoan"},{icon:"bi-envelope",link:"mailto:a25690756@gmail.com"},{icon:"bi-github",link:"https://github.com/CofCat456"}]}}},y=(n("4d24"),n("d959")),x=n.n(y);const E=x()(k,[["render",v],["__scopeId","data-v-0deb9f7e"]]);t["a"]=E},"55e2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function o(e,t,n,o,a,r){var l=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createBlock"])(l)}var a=n("cfb9"),r={provide:function(){return{emitter:a["a"]}}},l=(n("bea0"),n("d959")),i=n.n(l);const s=i()(r,[["render",o]]);var d=s,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),b=Object(c["createElementVNode"])("div",{class:"loadingio-spinner-ripple-3xq5u6jldre"},[Object(c["createElementVNode"])("div",{class:"ldio-dwik2dnj2i"},[Object(c["createElementVNode"])("div"),Object(c["createElementVNode"])("div")])],-1),m=Object(c["createElementVNode"])("div",{class:"d-flex justify-content-end mt-md-4 my-2 me-md-5 me-1 pe-md-2"},[Object(c["createElementVNode"])("p",{class:"me-2 px-2 rounded-pill bgOrange"},"NEW"),Object(c["createElementVNode"])("p",{class:"text-decoration-underline sTag"}," 結帳時輸入good coffee折扣碼即享有8折優惠！ ")],-1),p={"data-aos":"fade-up","data-aos-delay":"300","data-aos-duration":"1000","data-aos-easing":"ease-in-out","data-aos-anchor-placement":"top-bottom"},f={"data-aos":"fade-up","data-aos-delay":"400","data-aos-duration":"1000","data-aos-easing":"ease-in-out","data-aos-anchor-placement":"top-bottom"};function j(e,t,n,o,a,r){var l=Object(c["resolveComponent"])("Loading"),i=Object(c["resolveComponent"])("NavbarMain"),s=Object(c["resolveComponent"])("BannerImage"),d=Object(c["resolveComponent"])("OnlintStore"),u=Object(c["resolveComponent"])("HotProduct"),j=Object(c["resolveComponent"])("Fotter"),O=Object(c["resolveComponent"])("FixedButton");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(l,{active:a.isLoading},{default:Object(c["withCtx"])((function(){return[b]})),_:1},8,["active"]),Object(c["createVNode"])(i,{class:"sticky-top"}),m,Object(c["createVNode"])(s),Object(c["createElementVNode"])("section",p,[Object(c["createVNode"])(d)]),Object(c["createElementVNode"])("section",f,[Object(c["createVNode"])(u,{EnTitle:"Hot Products",Product:a.Hproduct,isFluid:""},null,8,["Product"])]),Object(c["createVNode"])(j),Object(c["createVNode"])(O)],64)}n("99af"),n("07ac");var O=function(e){return Object(c["pushScopeId"])("data-v-30fba24d"),e=e(),Object(c["popScopeId"])(),e},h=O((function(){return Object(c["createElementVNode"])("div",{class:"bigText text-center"},[Object(c["createElementVNode"])("h1",null,"來和貓咪一起快樂的過每一天吧!")],-1)}));function g(e,t,o,a,r,l){var i=Object(c["resolveComponent"])("swiper-slide"),s=Object(c["resolveComponent"])("swiper");return Object(c["openBlock"])(),Object(c["createBlock"])(s,{slidesPerView:1,slidesPerGroup:1,speed:2e3,effect:"fade",loop:!0,autoplay:{delay:3e3,pauseOnMouseEnter:!0,disableOnInteraction:!1},modules:a.modules,class:"mySwiper mt-1 mb-md-5 mb-0 mx-0"},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(r.imgData,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(i,{key:e,style:Object(c["normalizeStyle"])({backgroundImage:"url(".concat(n("76b8")("./"+e),")")}),class:"mx-0"},null,8,["style"])})),128)),h]})),_:1},8,["modules"])}var v=n("8349"),k=n("4da1"),y={components:{Swiper:v["a"],SwiperSlide:v["b"]},setup:function(){return{modules:[k["a"],k["b"]]}},data:function(){return{imgData:["bg-001.jpg","bg-002.jpg","bg-003.jpg"]}},methods:{scroll:function(e){var t=document.getElementById(e);t.scrollIntoView({behavior:"smooth"})}},mounted:function(){var e=this;window.onresize=function(){window.screenWidth=document.body.clientWidth,e.width=window.screenWidth}}};n("59f9");const x=i()(y,[["render",g],["__scopeId","data-v-30fba24d"]]);var E=x,N=n("5ee8"),V=function(e){return Object(c["pushScopeId"])("data-v-c172b114"),e=e(),Object(c["popScopeId"])(),e},w={class:"container-fluid my-5 mt-md-3 mb-md-0 py-xxl-5 py-md-0 pt-md-0"},C={class:"row d-flex justify-content-center"},B=V((function(){return Object(c["createElementVNode"])("div",{class:"col-lg-10 col-md-12 col-12 mt-5 mb-2 px-md-5 px-4"},[Object(c["createElementVNode"])("span",{class:"d-flex align-items-sm-end"},[Object(c["createElementVNode"])("h1",{class:"me-2 font-en"},"Online Store")])],-1)})),S={class:"col-lg-9 col-md-10 col-12 my-4 mb-md-0 pb-xxl-5 pb-md-0 d-flex flex-wrap"},L=["onClick"],P={class:"overflow-hidden imgBox"},_=["src"],T={class:"text px-md-4 px-4 py-md-4 py-3"},D={class:"fw-bold my-2 px-1"},I={class:"pb-3"};function $(e,t,n,o,a,r){var l=this;return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",w,[Object(c["createElementVNode"])("div",C,[B,Object(c["createElementVNode"])("div",S,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(a.productCategoryList,(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:e.title,class:"item col-lg-4 col-12 mb-lg-0 mb-md-4 mb-3 px-xl-4 px-md-3 px-5",onClick:function(t){return l.getProductCategory(e.title)}},[Object(c["createElementVNode"])("div",P,[Object(c["createElementVNode"])("img",{src:e.src},null,8,_)]),Object(c["createElementVNode"])("div",T,[Object(c["createElementVNode"])("h5",D,Object(c["toDisplayString"])(e.title),1),Object(c["createElementVNode"])("p",I,Object(c["toDisplayString"])(e.text),1)])],8,L)})),128))])])])}var F={data:function(){return{productCategoryList:[{title:"咖啡豆",src:n("b83c"),text:"職人親自挑選咖啡豆，提供客人最好的享受，讓我帶您走進手沖咖啡的世界吧！"},{title:"冷萃咖啡",src:n("e4fa"),text:"炎熱的夏天，想喝點冰的嗎？試試冷萃咖啡吧！使用冷水浸泡過，喝上一口便可抵擋炎熱天氣！"},{title:"精品禮盒",src:n("e6da"),text:"精品咖啡豆禮盒，不論是各種場合送禮都適合，趕快購買價格甜美的精品咖啡豆禮盒吧！"}]}},methods:{getProductCategory:function(e){this.$router.push("/User/Category/".concat(e))}}};n("3174");const U=i()(F,[["render",$],["__scopeId","data-v-c172b114"]]);var A=U,q=n("e915"),M=n("52c6"),z=n("087f"),W=n("9bb9"),H={inject:["emitter"],components:{BannerImage:E,NavbarMain:N["a"],OnlintStore:A,HotProduct:q["a"],Fotter:M["a"],FixedButton:z["a"]},data:function(){return{product:[],Hproduct:[],isLoading:!1}},methods:{getProducts:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/products/all");this.isLoading=!0,this.$http.get(t).then((function(t){t.data.success&&(e.isLoading=!1,e.product=Object(W["c"])(Object.values(t.data.products)),e.Hproduct=Object(W["d"])("熱門",e.product))}))}},created:function(){this.getProducts()}};n("e2e8");const J=i()(H,[["render",j]]);var G=J,K=[{path:"/",name:"Home",component:G},{path:"/User",component:function(){return n.e("chunk-a9e6e934").then(n.bind(null,"4c5d"))},children:[{path:"ProductList",component:function(){return n.e("chunk-c27a7b98").then(n.bind(null,"96fc"))}},{path:"Category/:id",component:function(){return n.e("chunk-74b24a3e").then(n.bind(null,"b54c"))}},{path:"Product/:productId",component:function(){return n.e("chunk-fdc37e4e").then(n.bind(null,"d2f1"))}},{path:"Cart",component:function(){return Promise.all([n.e("chunk-3bed80b6"),n.e("chunk-b386dd0e")]).then(n.bind(null,"76db"))}},{path:"Order",component:function(){return Promise.all([n.e("chunk-3bed80b6"),n.e("chunk-c9c78338")]).then(n.bind(null,"0435"))}},{path:"Order/:id",component:function(){return Promise.all([n.e("chunk-3bed80b6"),n.e("chunk-fa985b22")]).then(n.bind(null,"933e"))}},{path:"About",component:function(){return n.e("chunk-76671001").then(n.bind(null,"2695"))}}]},{path:"/Login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{path:"/administrator",component:function(){return n.e("chunk-323c0636").then(n.bind(null,"04be"))},children:[{path:"products",component:function(){return Promise.all([n.e("chunk-448bd834"),n.e("chunk-8c646892")]).then(n.bind(null,"e6dc"))}},{path:"orderList",component:function(){return Promise.all([n.e("chunk-448bd834"),n.e("chunk-5ef343b4")]).then(n.bind(null,"31ef"))}},{path:"coupon",component:function(){return Promise.all([n.e("chunk-448bd834"),n.e("chunk-3cca7c2d")]).then(n.bind(null,"4af2"))}}]}],R=Object(u["a"])({history:Object(u["b"])(),routes:K}),Y=R,Q=n("f5af"),X=n.n(Q),Z=(n("e829"),n("77ed"),n("a15b"),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"更新";if(e.data.success)a["a"].emit("push-message",{style:"success",title:"".concat(t,"成功")});else{var n="string"===typeof e.data.message?[e.data.message]:e.data.message;a["a"].emit("push-message",{style:"danger",title:"".concat(t,"失敗"),content:n.join("`")})}}),ee=n("bc3a"),te=n.n(ee),ne=n("130e"),ce=n("9062"),oe=n.n(ce),ae=(n("e40d"),n("ecee")),re=n("c074"),le=n("ad3d"),ie=(n("f507"),n("cd74"),n("7bb1")),se=n("3aa8"),de=n("cbdf"),ue=n("f9d5"),be=n.n(ue),me=(n("4413"),Object(c["createApp"])(d));ae["c"].add(re["a"]),Y.afterEach((function(e,t,n){window.scrollTo(0,0)})),X.a.init({once:!1}),me.component("font-awesome-icon",le["a"]),me.component("Loading",oe.a),me.component("Form",ie["c"]),me.component("Field",ie["b"]),me.component("ErrorMessage",ie["a"]),me.component("defineRule",ie["e"]),Object(ie["e"])("required",se["b"]),Object(ie["e"])("email",se["a"]),Object(ie["d"])({generateMessage:Object(de["a"])("zh_TW",{messages:{alpha:"{field} 須以英文組成",alpha_dash:"{field} 須以英數、斜線及底線組成",alpha_num:"{field} 須以英數組成",alpha_spaces:"{field} 須以英文及空格組成",between:"{field} 須介於 0:{min} 至 1:{max}之間",confirmed:" {field} 不一致",digits:"{field} 須為 0:{length} 位數字",dimensions:"{field} 圖片尺寸不正確。須為 0:{width} x 1:{height} 像素",email:"{field} 須為有效的電子信箱",excluded:"{field} 的選項無效",ext:"{field} 須為有效的檔案",image:"{field} 須為圖片",one_of:"{field} 的選項無效",integer:"{field} 須為整數",length:"{field} 的長度須為 0:{length}",max:"{field} 不能大於 0:{length} 個字元",max_value:"{field} 不得大於 0:{max}",mimes:"{field} 須為有效的檔案類型",min:"{field} 不能小於 0:{length} 個字元",min_value:"{field} 不得小於 0:{min}",numeric:"{field} 須為數字",regex:"{field} 的格式錯誤",required:"{field} 為必填",required_if:"{field} 為必填",size:"{field} 的檔案須小於 0:{size}KB"}}),validateOnInput:!0}),me.config.globalProperties.$filters={currency:W["a"]},me.config.globalProperties.$httpMessageState=Z,me.use(X.a),me.use(ne["a"],te.a),me.use(Y),me.use(be.a),me.mount("#app")},"59f9":function(e,t,n){"use strict";n("a0ec")},"5ee8":function(e,t,n){"use strict";n("b0c0"),n("9911");var c=n("7a23"),o=n("3e86"),a=n.n(o),r=function(e){return Object(c["pushScopeId"])("data-v-b75e5862"),e=e(),Object(c["popScopeId"])(),e},l={class:"container-fluid px-md-5 px-3"},i=r((function(){return Object(c["createElementVNode"])("img",{src:a.a,alt:"CoffeeShop Logo"},null,-1)})),s=r((function(){return Object(c["createElementVNode"])("span",{class:"navbar-toggler-icon material-icons text-white"},null,-1)})),d={class:"collapse navbar-collapse",id:"navbarSupportedContent"},u=r((function(){return Object(c["createElementVNode"])("div",{class:"mx-auto"},null,-1)})),b={class:"navbar-nav"};function m(e,t,n,o,a,r){var m=Object(c["resolveComponent"])("router-link"),p=Object(c["resolveComponent"])("font-awesome-icon");return Object(c["openBlock"])(),Object(c["createElementBlock"])("nav",{class:Object(c["normalizeClass"])(["navbar navbar-expand-lg w-100",{navBg:a.isScroll}])},[Object(c["createElementVNode"])("div",l,[Object(c["createVNode"])(m,{to:"/",class:"nav-link fs-5 title mt-md-1"},{default:Object(c["withCtx"])((function(){return[i]})),_:1}),Object(c["createElementVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:t[0]||(t[0]=function(){return e.hamburgerClick&&e.hamburgerClick.apply(e,arguments)})},[Object(c["createVNode"])(p,{icon:"bars",class:"hamburge"}),s]),Object(c["createElementVNode"])("div",d,[u,Object(c["createElementVNode"])("ul",b,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(a.navData,(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{key:e.name},[Object(c["createVNode"])(m,{to:e.link,class:"nav-link nav-text mx-lg-3 my-lg-0 p-lg-0 my-1 p-3 fw-bold"},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.name),1)]})),_:2},1032,["to"])])})),128))])])])],2)}var p={data:function(){return{isScroll:!1,navData:[{name:"商品列表",link:"/User/ProductList"},{name:"關於我們",link:"/User/About"},{name:"管理者登入",link:"/Login"},{name:"購物車",link:"/User/Cart"}]}},methods:{handleScroll:function(){if(window.pageYOffset>20)return this.isScroll=!0;this.isScroll=!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll,!0)}},f=(n("1b9c"),n("d959")),j=n.n(f);const O=j()(p,[["render",m],["__scopeId","data-v-b75e5862"]]);t["a"]=O},"721f":function(e,t,n){},"76b8":function(e,t,n){var c={"./bg-001.jpg":"3371","./bg-002.jpg":"2beb","./bg-003.jpg":"95d9","./bg-004.jpeg":"fe64","./bg-005.jpg":"0932"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}o.keys=function(){return Object.keys(c)},o.resolve=a,e.exports=o,o.id="76b8"},"7ee3":function(e,t,n){},"95d9":function(e,t,n){e.exports=n.p+"img/bg-003.39b8255a.jpg"},"9bb9":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return r}));n("ac1f"),n("5319"),n("b680"),n("d3b7"),n("159b"),n("1276"),n("4de4"),n("caad"),n("2532");function c(e){var t=parseInt(e,10);return"".concat(t.toFixed(0).replace(/./g,(function(e,t,n){return t&&"."!==e&&(n.length-t)%3===0?", ".concat(e).replace(/\s/g,""):e})))}function o(e){var t=new Date(1e3*e);return t.toLocaleDateString()}function a(e){var t=e;return e.forEach((function(e,n){t[n].CategoryArray=e.category.split(",")})),t}function r(e,t){var n=[];return n=t.filter((function(t){return t.CategoryArray.includes(e)})),n}},a0ec:function(e,t,n){},b83c:function(e,t,n){e.exports=n.p+"img/coffeeBeans.72a147d3.jpg"},bc9d:function(e,t,n){},bea0:function(e,t,n){"use strict";n("bc9d")},cfb9:function(e,t,n){"use strict";var c=n("1344"),o=Object(c["a"])();t["a"]=o},e10c:function(e,t,n){},e2e8:function(e,t,n){"use strict";n("0faa")},e4fa:function(e,t,n){e.exports=n.p+"img/ColdBrew.6a7c45e0.jpg"},e6da:function(e,t,n){e.exports=n.p+"img/BoutiqueGift.2b3ef5ae.jpg"},e915:function(e,t,n){"use strict";var c=n("7a23"),o=function(e){return Object(c["pushScopeId"])("data-v-39120787"),e=e(),Object(c["popScopeId"])(),e},a={class:"row d-flex justify-content-center"},r={class:"d-flex align-items-center"},l={class:"me-md-3 me-2 font-en"},i={key:0,class:"py-md-3 py-1 fw-bold"},s={key:1,class:"py-3 fw-bold d-flex"},d=o((function(){return Object(c["createElementVNode"])("p",null,"「",-1)})),u={class:"clrPink"},b=o((function(){return Object(c["createElementVNode"])("p",null,"」分類列表",-1)})),m=["onClick"],p={class:"overflow-hidden imgBox"},f=["src"],j={class:"text mt-2"},O={key:0,class:"d-flex mt-3 mb-2"},h={key:1,class:"mb-3"},g={class:"unit mt-2"},v={key:0,class:"col-md-9 col-12 text-center mt-md-3 mt-3 px-4"},k=o((function(){return Object(c["createElementVNode"])("i",{class:"bi bi-chevron-right px-1"},null,-1)})),y=Object(c["createTextVNode"])("列表展示 ");function x(e,t,n,o,x,E){var N=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:Object(c["normalizeClass"])([["my-5 py-3"],n.isFluid?"container-fluid":"container"])},[Object(c["createElementVNode"])("div",a,[Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])([n.isFluid?["col-xxl-10 px-md-5"]:["col-xxl-11"],["mt-1 mb-3 px-xxl-4 px-md-2 px-4 col-md-12 col-12"]])},[Object(c["createElementVNode"])("span",r,[Object(c["createElementVNode"])("h1",l,Object(c["toDisplayString"])(n.EnTitle),1),"undefined"===typeof n.CategoryText?(Object(c["openBlock"])(),Object(c["createElementBlock"])("p",i,Object(c["toDisplayString"])(n.ChTitle),1)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",s,[d,Object(c["createElementVNode"])("p",u,Object(c["toDisplayString"])(n.CategoryText),1),b]))])],2),Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])([n.isFluid?["col-xxl-9  mb-4"]:["col-xxl-11  mb-lg-5 mb-md-2"],["mt-2 px-md-4 px-3 col-12 d-flex flex-wrap"]])},[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(n.Product,(function(t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:t.title,class:"item col-lg-3 col-6 mb-md-5 mb-3 pb-md-3 pb-0 px-md-3 px-1",onClick:function(e){return E.getProductId(t.id)}},[Object(c["createElementVNode"])("div",p,[Object(c["createElementVNode"])("img",{src:t.imageUrl},null,8,f)]),Object(c["createElementVNode"])("div",j,["無"!=t.CategoryArray[0]?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",O,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(t.CategoryArray,(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("p",{key:e,class:Object(c["normalizeClass"])([["tag mx-1"],"熱門"===e&&"blue","推薦"===e&&"brown","免運費"===e&&"pink"])},Object(c["toDisplayString"])(e),3)})),128))])):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",h)),Object(c["createElementVNode"])("h6",null,Object(c["toDisplayString"])(t.title),1),Object(c["createElementVNode"])("h6",null,"TWD "+Object(c["toDisplayString"])(e.$filters.currency(t.price))+" 元",1),Object(c["createElementVNode"])("p",g,"#"+Object(c["toDisplayString"])(t.unit),1)])],8,m)})),128))],2),n.spButton?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",v,[Object(c["createVNode"])(N,{to:"/User/ProductList",class:"spButton"},{default:Object(c["withCtx"])((function(){return[k,y]})),_:1})])):Object(c["createCommentVNode"])("",!0)])],2)}var E={props:{isFluid:{type:Boolean},EnTitle:{type:String},ChTitle:{type:String},Product:{type:[Object,Array],required:!0},CategoryText:{type:String},spButton:{type:Boolean}},data:function(){return{productList:[]}},methods:{getProductId:function(e){this.$router.push("/User/product/".concat(e))}}},N=(n("1791"),n("d959")),V=n.n(N);const w=V()(E,[["render",x],["__scopeId","data-v-39120787"]]);t["a"]=w},fc60:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));n("e9c4");function c(e,t){localStorage.setItem(e,JSON.stringify(t))}function o(e){return JSON.parse(localStorage.getItem(e))}},fe64:function(e,t,n){e.exports=n.p+"img/bg-004.b11249d0.jpeg"}});
//# sourceMappingURL=app.bb3c2741.js.map