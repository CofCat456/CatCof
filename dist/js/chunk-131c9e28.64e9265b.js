(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-131c9e28"],{"76db":function(t,e,c){"use strict";c.r(e);var o=c("7a23"),n=function(t){return Object(o["pushScopeId"])("data-v-4587841b"),t=t(),Object(o["popScopeId"])(),t},a={class:"container"},r=n((function(){return Object(o["createElementVNode"])("div",{class:"mx-5 my-3"},null,-1)})),s={class:"row justify-content-center"},i={class:"col-11 mx-5 my-3"},l={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},d={class:"breadcrumb d-flex justify-content-end"},u={class:"breadcrumb-item"},m=Object(o["createTextVNode"])("首頁"),b=n((function(){return Object(o["createElementVNode"])("li",{class:"breadcrumb-item active colorBlue","aria-current":"page"}," 購物車 ",-1)})),p={class:"col-lg-10 col-md-12 col-11 my-5"},h=n((function(){return Object(o["createElementVNode"])("h1",{class:"fw-bold text-center mb-4"},"購物車",-1)})),f={key:0,class:"mx-auto bg-white px-md-5 px-3 py-5 text-center rounded-3 shadow"},O={class:"table position-relative"},j=n((function(){return Object(o["createElementVNode"])("thead",null,[Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("td",{width:"40%",scope:"col",class:"py-3"},"商品資訊"),Object(o["createElementVNode"])("td",{width:"35%",scope:"col",class:"py-3"},"數量"),Object(o["createElementVNode"])("td",{width:"20%",scope:"col",class:"py-3"},"金額"),Object(o["createElementVNode"])("td",{width:"5%",scope:"col",class:"py-3"})])],-1)})),E={class:"align-middle"},N={class:"text-start"},C={class:"row align-items-center"},w={class:"col-4 d-md-block d-none"},v=["src","alt","onClick"],V={class:"col-md-8 m-0 px-md-2 fw-bold"},g={class:"d-flex justify-content-center"},x={class:"input-group d-flex justify-content-center"},y=["onClick"],k=n((function(){return Object(o["createElementVNode"])("i",{class:"bi bi-dash"},null,-1)})),B=[k],$={class:"form-control text-center px-0 p-md-1"},T=["onClick"],_=n((function(){return Object(o["createElementVNode"])("i",{class:"bi bi-plus"},null,-1)})),L=[_],P=["onClick"],S=n((function(){return Object(o["createElementVNode"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"},[Object(o["createElementVNode"])("path",{"fill-rule":"evenodd",d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}),Object(o["createElementVNode"])("path",{"fill-rule":"evenodd",d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"})],-1)})),I=[S],U={class:"row justify-content-end"},D={class:"col-12 text-end mb-1"},q={class:"m-0"},F={class:"d-block text-gray"},M={key:0,class:"d-block"},A={class:"col-12 mb-3"},J={class:"fs-5 text-end text-danger"},Z={class:"col-md-10 col-11 col-md-6 col-lg-5"},z={class:"input-group input-group-sm"},G={key:1,class:"mx-auto bg-white px-md-5 px-2 py-5 text-center rounded-3 shadow"},H=n((function(){return Object(o["createElementVNode"])("h3",{class:"mb-3"},"購物車內沒有商品",-1)})),K=Object(o["createTextVNode"])("前 往 購 物"),Q={key:0,class:"col-md-10 col-11 d-flex justify-content-between mb-5"},R=n((function(){return Object(o["createElementVNode"])("i",{class:"bi bi-caret-left me-1"},null,-1)})),W=Object(o["createTextVNode"])("繼 續 購 物"),X=Object(o["createTextVNode"])("填 寫 訂 單"),Y=n((function(){return Object(o["createElementVNode"])("i",{class:"bi bi-caret-right ms-1"},null,-1)}));function tt(t,e,c,n,k,_){var S=this,tt=Object(o["resolveComponent"])("router-link"),et=Object(o["resolveComponent"])("shopProcess");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[r,Object(o["createElementVNode"])("div",s,[Object(o["createElementVNode"])("div",i,[Object(o["createElementVNode"])("nav",l,[Object(o["createElementVNode"])("ol",d,[Object(o["createElementVNode"])("li",u,[Object(o["createVNode"])(tt,{to:"/"},{default:Object(o["withCtx"])((function(){return[m]})),_:1})]),b])])]),Object(o["createVNode"])(et,{status:"確認"}),Object(o["createElementVNode"])("div",p,[h,this.cart.carts&&0===this.cart.carts.length?(Object(o["openBlock"])(),Object(o["createElementBlock"])("main",G,[H,Object(o["createVNode"])(tt,{to:"/User/ProductList",class:"btn btn-custom-Orange px-5 py-1"},{default:Object(o["withCtx"])((function(){return[K]})),_:1})])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("main",f,[Object(o["createElementVNode"])("table",O,[j,Object(o["createElementVNode"])("tbody",E,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(k.cart.carts,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",{key:e.id},[Object(o["createElementVNode"])("td",N,[Object(o["createElementVNode"])("div",C,[Object(o["createElementVNode"])("div",w,[Object(o["createElementVNode"])("img",{src:e.product.imageUrl,alt:e.product.title+"的商品照片",onClick:function(t){return _.getProductId(e.product.id)}},null,8,v)]),Object(o["createElementVNode"])("p",V,Object(o["toDisplayString"])(e.product.title),1)])]),Object(o["createElementVNode"])("td",null,[Object(o["createElementVNode"])("div",g,[Object(o["createElementVNode"])("div",x,[Object(o["createElementVNode"])("button",{type:"button",class:"btn px-0 px-sm-1 px-md-2 border",onClick:function(t){return _.minusCart(e)}},B,8,y),Object(o["createElementVNode"])("span",$,Object(o["toDisplayString"])(e.qty),1),Object(o["createElementVNode"])("button",{type:"button",class:"btn px-0 px-sm-1 px-md-2 border",onClick:function(t){return _.addCart(e)}},L,8,T)])])]),Object(o["createElementVNode"])("td",null,[Object(o["createElementVNode"])("h5",null,Object(o["toDisplayString"])(t.$filters.currency(e.total))+" 元",1)]),Object(o["createElementVNode"])("td",null,[Object(o["createElementVNode"])("button",{type:"button",class:"btn-red bg-transparent border-0",onClick:function(t){return _.deleteCart(e)}},I,8,P)])])})),128))])]),Object(o["createElementVNode"])("div",U,[Object(o["createElementVNode"])("div",D,[Object(o["createElementVNode"])("p",q,[Object(o["createElementVNode"])("small",F," 商品金額NT $"+Object(o["toDisplayString"])(t.$filters.currency(this.cart.total)),1),k.is_UseCoupon?(Object(o["openBlock"])(),Object(o["createElementBlock"])("small",M," - 使用優惠折扣NT $"+Object(o["toDisplayString"])(t.$filters.currency(this.cart.total-parseInt(this.cart.final_total))),1)):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("small",{class:Object(o["normalizeClass"])([["d-block"],!this.cart.isFreight&&"text-decoration-line-through"])}," + 運費NT "+Object(o["toDisplayString"])(this.freight),3)])]),Object(o["createElementVNode"])("div",A,[Object(o["createElementVNode"])("p",J," 總金額NT $"+Object(o["toDisplayString"])(this.cart.isFreight?t.$filters.currency(parseInt(this.cart.final_total)+this.freight):t.$filters.currency(parseInt(this.cart.final_total))),1)]),Object(o["createElementVNode"])("div",Z,[Object(o["createElementVNode"])("div",z,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control",placeholder:"請輸入折扣碼","onUpdate:modelValue":e[0]||(e[0]=function(t){return S.code=t})},null,512),[[o["vModelText"],this.code]]),Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-discount btn-outline-success input-group-text",onClick:e[1]||(e[1]=function(t){return _.addCoupon(!0,S.code)})}," 套用優惠卷 ")])])])]))]),this.cart.carts&&0===this.cart.carts.length?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Q,[Object(o["createVNode"])(tt,{to:"/User/ProductList",class:"btn btn-custom-Blue px-md-4 py-2"},{default:Object(o["withCtx"])((function(){return[R,W]})),_:1}),Object(o["createElementVNode"])("button",{class:"btn btn-outline-danger px-md-4 py-2",onClick:e[2]||(e[2]=function(t){return _.deleteAllCart()})}," 清 空 購 物 車 "),Object(o["createVNode"])(tt,{to:"/User/Order",class:"btn btn-custom-Orange px-md-4 py-2"},{default:Object(o["withCtx"])((function(){return[X,Y]})),_:1})]))])])}var et=c("2909"),ct=c("5530"),ot=(c("99af"),c("683a")),nt=c("73dc"),at=c("fc60"),rt={inject:["emitter"],components:{shopProcess:ot["a"]},data:function(){return{cart:{},freight:300,code:"",is_UseCoupon:!1}},methods:{getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/cart");this.$http.get(e).then((function(e){e.data.data.carts.length<1&&localStorage.removeItem("CouponCode"),t.cart=Object(ct["a"])({},e.data.data),t.cart.carts=Object(et["a"])(Object(nt["b"])(e.data.data.carts)),t.cart.isFreight=Object(nt["a"])(e.data.data),t.checkCoupon(Object(at["a"])("CouponCode"))}))},minusCart:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/cart/").concat(t.id);if(t.qty<=1)this.$swal({showConfirmButton:!0,icon:"error",title:"數字型別錯誤",Text:"請輸入數字唷!"});else{var o={product_id:t.product_id,qty:--t.qty};this.$http.put(c,{data:o}).then((function(t){e.$swal({toast:!0,position:"top-end",showConfirmButton:!1,timer:1e3,timerProgressBar:!0,didOpen:function(t){t.addEventListener("mouseenter",e.$swal.stopTimer),t.addEventListener("mouseleave",e.$swal.resumeTimer)},icon:"success",title:"更新購物車成功!"}),e.getCart()})).catch((function(t){e.$swal({showConfirmButton:!0,icon:"error",title:"更新失敗",Text:t})}))}},addCart:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/cart/").concat(t.id),o={product_id:t.product_id,qty:++t.qty};this.$http.put(c,{data:o}).then((function(t){e.$swal({toast:!0,position:"top-end",showConfirmButton:!1,timer:1e3,timerProgressBar:!0,didOpen:function(t){t.addEventListener("mouseenter",e.$swal.stopTimer),t.addEventListener("mouseleave",e.$swal.resumeTimer)},icon:"success",title:"更新購物車成功!"}),e.getCart()})).catch((function(t){e.$swal({showConfirmButton:!0,icon:"error",title:"更新失敗",Text:t})}))},deleteCart:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/cart/").concat(t.id);this.$http.delete(c).then((function(t){e.$swal({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:function(t){t.addEventListener("mouseenter",e.$swal.stopTimer),t.addEventListener("mouseleave",e.$swal.resumeTimer)},icon:"success",title:"已經移出購物車"}),e.getCart(),e.emitter.emit("update-cartNumber")})).catch((function(t){e.$swal({showConfirmButton:!0,icon:"error",title:"清空失敗",Text:t})}))},deleteAllCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/carts");this.$swal({title:"確定刪除所有商品嗎?",text:"你將清空購物車",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"我想清楚了",cancelButtonText:"再想想"}).then((function(c){c.isConfirmed&&(t.$swal("已經清空囉!","你將到宇宙深處才能找到他們...","success"),t.$http.delete(e).then((function(e){localStorage.removeItem("CouponCode"),t.getCart(),t.emitter.emit("update-cartNumber")})).catch((function(e){t.$swal({showConfirmButton:!0,icon:"error",title:"清空失敗",Text:e})})))}))},addCoupon:function(t,e){var c=this,o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/coupon"),n={code:e};this.$http.post(o,{data:n}).then((function(o){o.data.success?(c.cart.final_total=o.data.data.final_total,c.is_UseCoupon=!0,Object(at["b"])("CouponCode",e),t&&c.$swal({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:function(t){t.addEventListener("mouseenter",c.$swal.stopTimer),t.addEventListener("mouseleave",c.$swal.resumeTimer)},icon:"success",title:"套用優惠卷成功!"})):c.$swal({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,didOpen:function(t){t.addEventListener("mouseenter",c.$swal.stopTimer),t.addEventListener("mouseleave",c.$swal.resumeTimer)},icon:"error",title:o.data.message})}))},checkCoupon:function(t){null!==t&&(this.is_UseCoupon=!0,this.code=t,this.addCoupon(!1,this.code))},getProductId:function(t){this.$router.push("/User/product/".concat(t))}},created:function(){this.getCart()},mounted:function(){var t=this;this.emitter.on("update-cart",(function(){t.getCart()}))}},st=(c("ead7"),c("d959")),it=c.n(st);const lt=it()(rt,[["render",tt],["__scopeId","data-v-4587841b"]]);e["default"]=lt},cf6b:function(t,e,c){},ead7:function(t,e,c){"use strict";c("cf6b")}}]);
//# sourceMappingURL=chunk-131c9e28.64e9265b.js.map