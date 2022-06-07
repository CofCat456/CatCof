(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b450ab0"],{"002d":function(e,t,c){"use strict";c("991f")},"0435":function(e,t,c){"use strict";c.r(t);c("b0c0"),c("b64b");var a=c("7a23"),r=function(e){return Object(a["pushScopeId"])("data-v-03c77b0c"),e=e(),Object(a["popScopeId"])(),e},l={class:"container"},n=r((function(){return Object(a["createElementVNode"])("div",{class:"mx-5 my-3"},null,-1)})),o={class:"row justify-content-center"},s=r((function(){return Object(a["createElementVNode"])("div",{class:"col-10 my-5"},[Object(a["createElementVNode"])("h1",{class:"fw-bold text-center mb-4"},"訂購人資訊")],-1)})),d={class:"col-12 mb-5 px-lg-0 px-xl-5 d-flex flex-wrap justify-content-center align-items-center"},i={class:"col-lg-6 col-12 mb-lg-0 mb-5 px-3"},b={class:"p-3 p-sm-5 mx-auto rounded bg-white shadow-sm"},m=r((function(){return Object(a["createElementVNode"])("h3",{class:"text-center mb-4 fs-5"},"購物明細",-1)})),u={class:"table text-center mb-5"},f=r((function(){return Object(a["createElementVNode"])("thead",null,[Object(a["createElementVNode"])("tr",null,[Object(a["createElementVNode"])("td",{scope:"col",width:"40%"},"商品資訊"),Object(a["createElementVNode"])("td",{scope:"col",width:"20%"},"數量"),Object(a["createElementVNode"])("td",{scope:"col",width:"40%"},"金額")])],-1)})),j={scope:"row",class:"text-start"},O={class:"fs-5 mb-2 text-center"},p={class:"col-lg-6 col-12 px-3"},V={class:"mb-3"},N=r((function(){return Object(a["createElementVNode"])("label",{for:"name",class:"form-label"},[Object(a["createTextVNode"])("訂購人姓名 "),Object(a["createElementVNode"])("span",{class:"text-danger fw-bold"},"*")],-1)})),h={class:"mb-3"},E=r((function(){return Object(a["createElementVNode"])("label",{for:"phone",class:"form-label"},[Object(a["createTextVNode"])("付款方式"),Object(a["createElementVNode"])("span",{class:"text-danger fw-bold"},"*")],-1)})),x=r((function(){return Object(a["createElementVNode"])("option",{value:"",selected:"",disabled:""},[Object(a["createTextVNode"])(" 選擇付款方式"),Object(a["createElementVNode"])("span",{class:"text-danger fw-bold"},"*")],-1)})),v=r((function(){return Object(a["createElementVNode"])("option",{value:"信用卡"},"VISA信用卡",-1)})),g=r((function(){return Object(a["createElementVNode"])("option",{value:"ATM轉帳"},"ATM轉帳",-1)})),w={class:"mb-3"},y=r((function(){return Object(a["createElementVNode"])("label",{for:"phone",class:"form-label"},[Object(a["createTextVNode"])("聯絡電話"),Object(a["createElementVNode"])("span",{class:"text-danger fw-bold"},"*")],-1)})),k={class:"mb-3"},C=r((function(){return Object(a["createElementVNode"])("label",{for:"email",class:"form-label"},[Object(a["createTextVNode"])("Email"),Object(a["createElementVNode"])("span",{class:"text-danger fw-bold"},"*")],-1)})),B={class:"mb-3"},T=r((function(){return Object(a["createElementVNode"])("label",{for:"address",class:"form-label"},[Object(a["createTextVNode"])("地址"),Object(a["createElementVNode"])("span",{class:"text-danger fw-bold"},"*")],-1)})),S={class:"mb-3"},$=r((function(){return Object(a["createElementVNode"])("label",{for:"validationTextarea",class:"form-label"},"備註",-1)})),U={class:"col-10 d-flex justify-content-between mb-2 mb-5"},F=r((function(){return Object(a["createElementVNode"])("i",{class:"bi bi-caret-left me-1"},null,-1)})),I=Object(a["createTextVNode"])("返 回 購 物 車"),_=["disabled"],q=Object(a["createTextVNode"])(" 送 出 訂 單 "),z=r((function(){return Object(a["createElementVNode"])("i",{class:"bi bi-caret-right ms-1"},null,-1)})),D=[q,z];function M(e,t,c,r,q,z){var M=this,P=Object(a["resolveComponent"])("Breadcrumb"),A=Object(a["resolveComponent"])("ShopProcess"),J=Object(a["resolveComponent"])("Field"),L=Object(a["resolveComponent"])("ErrorMessage"),G=Object(a["resolveComponent"])("router-link"),H=Object(a["resolveComponent"])("Form");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",l,[n,Object(a["createElementVNode"])("div",o,[Object(a["createVNode"])(P,{Breadcrumb:q.Breadcrumb},null,8,["Breadcrumb"]),Object(a["createVNode"])(A,{status:"輸入"}),s,Object(a["createVNode"])(H,{onSubmit:t[6]||(t[6]=function(e){return z.createOrder()}),class:"d-flex flex-column align-items-center"},{default:Object(a["withCtx"])((function(c){var r=c.errors;return[Object(a["createElementVNode"])("div",d,[Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("div",b,[m,Object(a["createElementVNode"])("table",u,[f,Object(a["createElementVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(M.cart.carts,(function(t){return Object(a["openBlock"])(),Object(a["createElementBlock"])("tr",{key:t},[Object(a["createElementVNode"])("td",j,Object(a["toDisplayString"])(t.product.title),1),Object(a["createElementVNode"])("td",null,Object(a["toDisplayString"])(t.qty),1),Object(a["createElementVNode"])("td",null,"NT $"+Object(a["toDisplayString"])(e.$filters.currency(t.total)),1)])})),128))])]),M.cart.isFreight?(Object(a["openBlock"])(),Object(a["createElementBlock"])("p",{key:0,class:Object(a["normalizeClass"])([["d-block"],!M.cart.isFreight&&"text-decoration-line-through"])}," + 運費NT "+Object(a["toDisplayString"])(M.freight),3)):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("p",O," 總金額NT $"+Object(a["toDisplayString"])(M.cart.isFreight?e.$filters.currency(parseInt(M.cart.final_total)+M.freight):e.$filters.currency(parseInt(M.cart.final_total))),1)])]),Object(a["createElementVNode"])("div",p,[Object(a["createElementVNode"])("div",V,[N,Object(a["createVNode"])(J,{id:"name",name:"姓名",type:"text",class:Object(a["normalizeClass"])(["form-control",{"is-invalid":r["姓名"]}]),placeholder:"請輸入姓名",modelValue:q.form.user.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return q.form.user.name=e}),rules:"required"},null,8,["modelValue","class"]),Object(a["createVNode"])(L,{name:"姓名",class:"invalid-feedback"})]),Object(a["createElementVNode"])("div",h,[E,Object(a["createVNode"])(J,{as:"select",name:"付款方式",class:Object(a["normalizeClass"])(["form-select",{"is-invalid":r["付款方式"]}]),rules:"required",modelValue:q.form.user.payment,"onUpdate:modelValue":t[1]||(t[1]=function(e){return q.form.user.payment=e})},{default:Object(a["withCtx"])((function(){return[x,v,g]})),_:2},1032,["modelValue","class"]),Object(a["createVNode"])(L,{name:"付款方式",class:"invalid-feedback"})]),Object(a["createElementVNode"])("div",w,[y,Object(a["createVNode"])(J,{id:"phone",name:"電話",type:"text",class:Object(a["normalizeClass"])(["form-control",{"is-invalid":r["電話"]}]),rules:z.isPhone,placeholder:"請輸入聯絡電話",modelValue:q.form.user.tel,"onUpdate:modelValue":t[2]||(t[2]=function(e){return q.form.user.tel=e})},null,8,["rules","modelValue","class"]),Object(a["createVNode"])(L,{name:"電話",class:"invalid-feedback"})]),Object(a["createElementVNode"])("div",k,[C,Object(a["createVNode"])(J,{id:"email",name:"email",type:"email",class:Object(a["normalizeClass"])(["form-control",{"is-invalid":r["email"]}]),rules:"email|required",placeholder:"請輸入Email",modelValue:q.form.user.email,"onUpdate:modelValue":t[3]||(t[3]=function(e){return q.form.user.email=e})},null,8,["modelValue","class"]),Object(a["createVNode"])(L,{name:"email",class:"invalid-feedback"})]),Object(a["createElementVNode"])("div",B,[T,Object(a["createVNode"])(J,{id:"address",name:"地址",type:"text",class:Object(a["normalizeClass"])(["form-control",{"is-invalid":r["地址"]}]),placeholder:"請輸入地址",modelValue:q.form.user.address,"onUpdate:modelValue":t[4]||(t[4]=function(e){return q.form.user.address=e}),rules:"required"},null,8,["modelValue","class"]),Object(a["createVNode"])(L,{name:"地址",class:"invalid-feedback"})]),Object(a["createElementVNode"])("div",S,[$,Object(a["withDirectives"])(Object(a["createElementVNode"])("textarea",{class:"form-control",id:"validationTextarea",placeholder:"如有特殊需求請寫備註欄","onUpdate:modelValue":t[5]||(t[5]=function(e){return q.form.user.remark=e})},null,512),[[a["vModelText"],q.form.user.remark]])])])]),Object(a["createElementVNode"])("div",U,[Object(a["createVNode"])(G,{to:"/User/cart",class:"btn btn-custom-Blue px-1g-4 px-2 py-2"},{default:Object(a["withCtx"])((function(){return[F,I]})),_:1}),Object(a["createElementVNode"])("button",{type:"submit",class:"btn btn-custom-Brown px-lg-4 px-2 py-2",disabled:0!==Object.keys(r).length},D,8,_)])]})),_:1})])])}var P=c("2909"),A=c("5530"),J=(c("99af"),c("ac1f"),c("00b4"),c("683a")),L=c("2fbc"),G=c("73dc"),H={inject:["emitter"],components:{ShopProcess:J["a"],Breadcrumb:L["a"]},data:function(){return{cart:{},Breadcrumb:[{title:"購物車",link:"/User/cart"},{title:"填寫訂單資源",link:""}],form:{user:{}},freight:300}},methods:{getCart:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/cart");this.$http.get(t).then((function(t){e.cart=Object(A["a"])({},t.data.data),e.cart.carts=Object(P["a"])(Object(G["b"])(t.data.data.carts)),e.cart.isFreight=Object(G["a"])(t.data.data)}))},isPhone:function(e){var t=/^(09)[0-9]{8}$/;return!!t.test(e)||"需要正確的電話號碼"},createOrder:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/order"),c=Object(A["a"])({},this.form);this.$swal({title:"確認送出訂單嗎?",text:"送出後將無法修改訂單資料",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"送出!",cancelButtonText:"晚點再說"}).then((function(a){a.isConfirmed&&e.$http.post(t,{data:c}).then((function(t){e.emitter.emit("update-cartNumber"),e.$router.push("/User/Order/".concat(t.data.orderId))}))}))}},created:function(){this.getCart()}},K=(c("002d"),c("d959")),Q=c.n(K);const R=Q()(H,[["render",M],["__scopeId","data-v-03c77b0c"]]);t["default"]=R},"991f":function(e,t,c){}}]);
//# sourceMappingURL=chunk-0b450ab0.6ecbbdd7.js.map