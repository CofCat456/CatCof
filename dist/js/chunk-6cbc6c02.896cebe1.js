(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cbc6c02"],{"18d9":function(e,t,c){},"191f":function(e,t,c){"use strict";c("18d9")},e01a:function(e,t,c){"use strict";var o=c("23e7"),l=c("83ab"),r=c("da84"),n=c("e330"),a=c("1a2d"),d=c("1626"),i=c("3a9b"),s=c("577e"),u=c("9bf2").f,m=c("e893"),b=r.Symbol,p=b&&b.prototype;if(l&&d(b)&&(!("description"in p)||void 0!==b().description)){var f={},j=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:s(arguments[0]),t=i(p,this)?new b(e):void 0===e?b():b(e);return""===e&&(f[t]=!0),t};m(j,b),j.prototype=p,p.constructor=j;var O="Symbol(test)"==String(b("test")),V=n(p.toString),h=n(p.valueOf),E=/^Symbol\((.*)\)[^)]+$/,v=n("".replace),N=n("".slice);u(p,"description",{configurable:!0,get:function(){var e=h(this),t=V(e);if(a(f,e))return"";var c=O?N(t,7,-1):v(t,E,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:j})}},e6dc:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),l={class:"text-end mt-3"},r={class:"table mt-4"},n=Object(o["createElementVNode"])("thead",null,[Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("th",{width:"250"},"分類"),Object(o["createElementVNode"])("th",null,"產品名稱"),Object(o["createElementVNode"])("th",{width:"120"},"原價"),Object(o["createElementVNode"])("th",{width:"120"},"售價"),Object(o["createElementVNode"])("th",{width:"120"},"是否啟用"),Object(o["createElementVNode"])("th",{width:"200"},"編輯")])],-1),a={key:0,class:"text-success"},d={key:1,class:"text-muted"},i={class:"btn-group"},s=["onClick"],u=["onClick"];function m(e,t,c,m,b,p){var f=Object(o["resolveComponent"])("ToastMessage"),j=Object(o["resolveComponent"])("Loading"),O=Object(o["resolveComponent"])("Pagination"),V=Object(o["resolveComponent"])("ProductModal"),h=Object(o["resolveComponent"])("DeleteModel");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(f),Object(o["createVNode"])(j,{active:b.isLoading},null,8,["active"]),Object(o["createElementVNode"])("div",l,[Object(o["createElementVNode"])("button",{class:"btn btn-primary",type:"button",onClick:t[0]||(t[0]=function(e){return p.openModel(!0)})}," 增加一個產品 ")]),Object(o["createElementVNode"])("table",r,[n,Object(o["createElementVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(b.products,(function(t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",{key:t.id},[Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(t.category),1),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(t.title),1),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(e.$filters.currency(t.origin_price)),1),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(e.$filters.currency(t.price)),1),Object(o["createElementVNode"])("td",null,[t.is_enabled?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",a,"啟用")):(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",d,"未啟用"))]),Object(o["createElementVNode"])("td",null,[Object(o["createElementVNode"])("div",i,[Object(o["createElementVNode"])("button",{class:"btn btn-outline-primary btn-sm",onClick:function(e){return p.openModel(!1,t)}}," 編輯 ",8,s),Object(o["createElementVNode"])("button",{class:"btn btn-outline-danger btn-sm",onClick:function(e){return p.openDeleteModel(t)}}," 刪除 ",8,u)])])])})),128))])]),Object(o["createVNode"])(O,{pages:b.pagination,onEmitAdpages:p.getProducts,onEmitAdPrev:p.getProducts,onEmitAdNext:p.getProducts},null,8,["pages","onEmitAdpages","onEmitAdPrev","onEmitAdNext"]),Object(o["createVNode"])(V,{ref:"productModal",product:b.tempProduct,onUpdateProduct:p.updateProduct},null,8,["product","onUpdateProduct"]),Object(o["createVNode"])(h,{ref:"deleteModal",item:b.tempProduct.title,id:b.tempProduct.id,onDelItem:p.DeleteProduct},null,8,["item","id","onDelItem"])],64)}var b=c("5530"),p=(c("99af"),c("a434"),c("a4d3"),c("e01a"),function(e){return Object(o["pushScopeId"])("data-v-fcafeaec"),e=e(),Object(o["popScopeId"])(),e}),f={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},j={class:"modal-dialog modal-xl",role:"document"},O={class:"modal-content border-0"},V=p((function(){return Object(o["createElementVNode"])("div",{class:"modal-header bg-dark text-white"},[Object(o["createElementVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(o["createElementVNode"])("span",null,"新增產品")]),Object(o["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)})),h={class:"modal-body"},E={class:"row"},v={class:"col-sm-4 px-3"},N=p((function(){return Object(o["createElementVNode"])("div",{class:"mb-3"},[Object(o["createElementVNode"])("label",{for:"image",class:"form-label"},"輸入圖片網址"),Object(o["createElementVNode"])("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結"})],-1)})),P={class:"mb-3"},g=p((function(){return Object(o["createElementVNode"])("label",{for:"customFile",class:"form-label"},[Object(o["createTextVNode"])("或 上傳圖片 "),Object(o["createElementVNode"])("i",{class:"fas fa-spinner fa-spin"})],-1)})),x=p((function(){return Object(o["createElementVNode"])("img",{class:"img-fluid",alt:""},null,-1)})),y={key:0,class:"mt-5"},w=["onUpdate:modelValue"],M=["onClick"],k={key:0},D={class:"col-sm-8 px-3"},U={class:"mb-3"},T=p((function(){return Object(o["createElementVNode"])("label",{for:"title",class:"form-label"},"標題",-1)})),B={class:"row"},C={class:"mb-3 col-md-6 px-2"},S=p((function(){return Object(o["createElementVNode"])("label",{for:"category",class:"form-label"},"分類",-1)})),$={class:"mb-3 col-md-6 px-2"},_=p((function(){return Object(o["createElementVNode"])("label",{for:"price",class:"form-label"},"單位",-1)})),F={class:"row gx-2"},L={class:"mb-3 col"},I=p((function(){return Object(o["createElementVNode"])("label",{for:"origin_price",class:"form-label"},"原價",-1)})),A={class:"mb-3 col"},J=p((function(){return Object(o["createElementVNode"])("label",{for:"price",class:"form-label"},"售價",-1)})),q=p((function(){return Object(o["createElementVNode"])("hr",null,null,-1)})),z={class:"mb-3"},G=p((function(){return Object(o["createElementVNode"])("label",{for:"description",class:"form-label"},"產品簡介",-1)})),H={class:"mb-3"},K=p((function(){return Object(o["createElementVNode"])("label",{for:"description",class:"form-label"},"商品附加內容",-1)})),Q={class:"mb-3"},R=p((function(){return Object(o["createElementVNode"])("label",{for:"stitle",class:"form-label"},"小標題",-1)})),W={class:"mb-3"},X=p((function(){return Object(o["createElementVNode"])("label",{for:"stitle",class:"form-label"},"內容物",-1)})),Y={class:"mb-3"},Z=p((function(){return Object(o["createElementVNode"])("label",{for:"stitle",class:"form-label"},"運費文字",-1)})),ee={class:"mb-3"},te=p((function(){return Object(o["createElementVNode"])("label",{for:"stext",class:"form-label"},"產品內容",-1)})),ce={class:"mb-3"},oe=p((function(){return Object(o["createElementVNode"])("label",{for:"detail",class:"form-label"},"多種咖啡細節",-1)})),le={class:"mb-3"},re=p((function(){return Object(o["createElementVNode"])("label",{for:"Element",class:"form-label"},"混合成分",-1)})),ne={class:"mb-3"},ae=p((function(){return Object(o["createElementVNode"])("label",{for:"country",class:"form-label"},"原產國",-1)})),de={class:"mb-3"},ie=p((function(){return Object(o["createElementVNode"])("label",{for:"area",class:"form-label"},"產區",-1)})),se={class:"mb-3"},ue=p((function(){return Object(o["createElementVNode"])("label",{for:"altitude",class:"form-label"},"海拔",-1)})),me={class:"mb-3"},be=p((function(){return Object(o["createElementVNode"])("label",{for:"Variety",class:"form-label"},"品種",-1)})),pe={class:"mb-3"},fe=p((function(){return Object(o["createElementVNode"])("label",{for:"Soli",class:"form-label"},"土壤種類",-1)})),je={class:"mb-3"},Oe=p((function(){return Object(o["createElementVNode"])("label",{for:"refined",class:"form-label"},"精煉",-1)})),Ve={class:"mb-3"},he=p((function(){return Object(o["createElementVNode"])("label",{for:"roast",class:"form-label"},"烘培程度",-1)})),Ee={class:"row gx-2"},ve={class:"mb-3 col"},Ne=p((function(){return Object(o["createElementVNode"])("label",{for:"bitter",class:"form-label"},"苦味",-1)})),Pe={class:"mb-3 col"},ge=p((function(){return Object(o["createElementVNode"])("label",{for:"sour",class:"form-label"},"酸味",-1)})),xe={class:"row gx-2"},ye={class:"mb-3 col"},we=p((function(){return Object(o["createElementVNode"])("label",{for:"sweet",class:"form-label"},"甜味",-1)})),Me={class:"mb-3 col"},ke=p((function(){return Object(o["createElementVNode"])("label",{for:"rich",class:"form-label"},"濃郁",-1)})),De={class:"mb-3"},Ue={class:"form-check"},Te=p((function(){return Object(o["createElementVNode"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1)})),Be={class:"modal-footer"},Ce=p((function(){return Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1)}));function Se(e,t,c,l,r,n){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",f,[Object(o["createElementVNode"])("div",j,[Object(o["createElementVNode"])("div",O,[V,Object(o["createElementVNode"])("div",h,[Object(o["createElementVNode"])("div",E,[Object(o["createElementVNode"])("div",v,[N,Object(o["createElementVNode"])("div",P,[g,Object(o["createElementVNode"])("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:t[0]||(t[0]=function(){return n.uploadFile&&n.uploadFile.apply(n,arguments)})},null,544)]),x,r.tempProduct.images?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",y,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(r.tempProduct.images,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"mb-3 input-group",key:t},[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":function(e){return r.tempProduct.images[t]=e},placeholder:"請輸入連結"},null,8,w),[[o["vModelText"],r.tempProduct.images[t]]]),Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(e){return r.tempProduct.images.splice(t,1)}}," 移除 ",8,M)])})),128)),r.tempProduct.images[r.tempProduct.images.length-1]||!r.tempProduct.images.length?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",k,[Object(o["createElementVNode"])("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[1]||(t[1]=function(e){return r.tempProduct.images.push("")})}," 新增圖片 ")])):Object(o["createCommentVNode"])("",!0)])):Object(o["createCommentVNode"])("",!0)]),Object(o["createElementVNode"])("div",D,[Object(o["createElementVNode"])("div",U,[T,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.tempProduct.title=e})},null,512),[[o["vModelText"],r.tempProduct.title]])]),Object(o["createElementVNode"])("div",B,[Object(o["createElementVNode"])("div",C,[S,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.tempProduct.category=e})},null,512),[[o["vModelText"],r.tempProduct.category]])]),Object(o["createElementVNode"])("div",$,[_,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":t[4]||(t[4]=function(e){return r.tempProduct.unit=e})},null,512),[[o["vModelText"],r.tempProduct.unit]])])]),Object(o["createElementVNode"])("div",F,[Object(o["createElementVNode"])("div",L,[I,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":t[5]||(t[5]=function(e){return r.tempProduct.origin_price=e})},null,512),[[o["vModelText"],r.tempProduct.origin_price]])]),Object(o["createElementVNode"])("div",A,[J,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":t[6]||(t[6]=function(e){return r.tempProduct.price=e})},null,512),[[o["vModelText"],r.tempProduct.price]])])]),q,Object(o["createElementVNode"])("div",z,[G,Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":t[7]||(t[7]=function(e){return r.tempProduct.description=e})},null,512),[[o["vModelText"],r.tempProduct.description]])]),Object(o["createElementVNode"])("div",H,[K,Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入商品附加內容","onUpdate:modelValue":t[8]||(t[8]=function(e){return r.tempProduct.bonus=e})},null,512),[[o["vModelText"],r.tempProduct.bonus]])]),Object(o["createElementVNode"])("div",Q,[R,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control",id:"stitle",placeholder:"請輸入小標題","onUpdate:modelValue":t[9]||(t[9]=function(e){return r.tempProduct.stitle=e})},null,512),[[o["vModelText"],r.tempProduct.stitle]])]),Object(o["createElementVNode"])("div",W,[X,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control",id:"content",placeholder:"請輸入內容物","onUpdate:modelValue":t[10]||(t[10]=function(e){return r.tempProduct.content=e})},null,512),[[o["vModelText"],r.tempProduct.content]])]),Object(o["createElementVNode"])("div",Y,[Z,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control",id:"freight",placeholder:"請輸入運費文字","onUpdate:modelValue":t[11]||(t[11]=function(e){return r.tempProduct.freight=e})},null,512),[[o["vModelText"],r.tempProduct.freight]])]),Object(o["createElementVNode"])("div",ee,[te,Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{type:"text",class:"form-control",id:"stext",placeholder:"請輸入商品附加內容","onUpdate:modelValue":t[12]||(t[12]=function(e){return r.tempProduct.stext=e})},null,512),[[o["vModelText"],r.tempProduct.stext]])]),Object(o["createElementVNode"])("div",ce,[oe,Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{type:"text",class:"form-control",id:"detail",placeholder:"請輸入多種咖啡細節","onUpdate:modelValue":t[13]||(t[13]=function(e){return r.tempProduct.detail=e})},null,512),[[o["vModelText"],r.tempProduct.detail]])]),Object(o["createElementVNode"])("div",le,[re,Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{type:"text",class:"form-control",id:"Element",placeholder:"請輸入混合成分","onUpdate:modelValue":t[14]||(t[14]=function(e){return r.tempProduct.Element=e})},null,512),[[o["vModelText"],r.tempProduct.Element]])]),Object(o["createElementVNode"])("div",ne,[ae,Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{type:"text",class:"form-control",id:"country",placeholder:"請輸入原產國","onUpdate:modelValue":t[15]||(t[15]=function(e){return r.tempProduct.country=e})},null,512),[[o["vModelText"],r.tempProduct.country]])]),Object(o["createElementVNode"])("div",de,[ie,Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{type:"text",class:"form-control",id:"area",placeholder:"請輸入產區","onUpdate:modelValue":t[16]||(t[16]=function(e){return r.tempProduct.area=e})},null,512),[[o["vModelText"],r.tempProduct.area]])]),Object(o["createElementVNode"])("div",se,[ue,Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{type:"text",class:"form-control",id:"altitude",placeholder:"請輸入平均","onUpdate:modelValue":t[17]||(t[17]=function(e){return r.tempProduct.altitude=e})},null,512),[[o["vModelText"],r.tempProduct.altitude]])]),Object(o["createElementVNode"])("div",me,[be,Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{type:"text",class:"form-control",id:"Variety",placeholder:"請輸入品種","onUpdate:modelValue":t[18]||(t[18]=function(e){return r.tempProduct.Variety=e})},null,512),[[o["vModelText"],r.tempProduct.Variety]])]),Object(o["createElementVNode"])("div",pe,[fe,Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{type:"text",class:"form-control",id:"Soli",placeholder:"請輸入品種","onUpdate:modelValue":t[19]||(t[19]=function(e){return r.tempProduct.Soli=e})},null,512),[[o["vModelText"],r.tempProduct.Soli]])]),Object(o["createElementVNode"])("div",je,[Oe,Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{type:"text",class:"form-control",id:"refined",placeholder:"請輸入精煉","onUpdate:modelValue":t[20]||(t[20]=function(e){return r.tempProduct.refined=e})},null,512),[[o["vModelText"],r.tempProduct.refined]])]),Object(o["createElementVNode"])("div",Ve,[he,Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{type:"text",class:"form-control",id:"roast",placeholder:"請輸入烘培程度","onUpdate:modelValue":t[21]||(t[21]=function(e){return r.tempProduct.roast=e})},null,512),[[o["vModelText"],r.tempProduct.roast]])]),Object(o["createElementVNode"])("div",Ee,[Object(o["createElementVNode"])("div",ve,[Ne,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"number",class:"form-control",id:"bitter",placeholder:"請輸入苦味程度","onUpdate:modelValue":t[22]||(t[22]=function(e){return r.tempProduct.bitter=e})},null,512),[[o["vModelText"],r.tempProduct.bitter]])]),Object(o["createElementVNode"])("div",Pe,[ge,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"number",class:"form-control",id:"sour",placeholder:"請輸入酸味程度","onUpdate:modelValue":t[23]||(t[23]=function(e){return r.tempProduct.sour=e})},null,512),[[o["vModelText"],r.tempProduct.sour]])])]),Object(o["createElementVNode"])("div",xe,[Object(o["createElementVNode"])("div",ye,[we,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"number",class:"form-control",id:"sweet",placeholder:"請輸入甜味程度","onUpdate:modelValue":t[24]||(t[24]=function(e){return r.tempProduct.sweet=e})},null,512),[[o["vModelText"],r.tempProduct.sweet]])]),Object(o["createElementVNode"])("div",Me,[ke,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"number",class:"form-control",id:"rich",placeholder:"請輸入濃郁程度","onUpdate:modelValue":t[25]||(t[25]=function(e){return r.tempProduct.rich=e})},null,512),[[o["vModelText"],r.tempProduct.rich]])])]),Object(o["createElementVNode"])("div",De,[Object(o["createElementVNode"])("div",Ue,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":t[26]||(t[26]=function(e){return r.tempProduct.is_enabled=e})},null,512),[[o["vModelCheckbox"],r.tempProduct.is_enabled]]),Te])])])])]),Object(o["createElementVNode"])("div",Be,[Ce,Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[27]||(t[27]=function(t){return e.$emit("update-product",r.tempProduct)})}," 確認 ")])])])],512)}var $e=c("db44"),_e={props:{product:{type:Object,default:function(){return{}}}},data:function(){return{modal:{},tempProduct:{}}},methods:{uploadFile:function(){var e=this,t=this.$refs.fileInput.files[0];console.dir(t);var c=new FormData;c.append("file-to-upload",t);var o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/admin/upload");this.$http.post(o,c).then((function(t){console.log(t.data),t.data&&(e.tempProduct.imageUrl=t.data.imageUrl,console.log("測試資料",e.tempProduct))}))}},watch:{product:function(){this.tempProduct=this.product,this.tempProduct.images||(this.tempProduct.images=[])}},mixins:[$e["a"]]},Fe=(c("191f"),c("d959")),Le=c.n(Fe);const Ie=Le()(_e,[["render",Se],["__scopeId","data-v-fcafeaec"]]);var Ae=Ie,Je=c("139f"),qe=c("f367"),ze=c("1799"),Ge={components:{ProductModal:Ae,DeleteModel:Je["a"],ToastMessage:qe["a"],Pagination:ze["a"]},inject:["emitter"],data:function(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},methods:{openModel:function(e,t){this.tempProduct=e?{}:Object(b["a"])({},t),this.isNew=e;var c=this.$refs.productModal;c.showModel()},openDeleteModel:function(e){this.tempProduct=Object(b["a"])({},e);var t=this.$refs.deleteModal;t.showModel()},getProducts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/admin/products?page=").concat(t);this.isLoading=!0,this.$http.get(c).then((function(t){e.isLoading=!1,t.data.success&&(console.log(t.data),e.products=t.data.products,e.pagination=t.data.pagination)}))},updateProduct:function(e){var t=this;this.tempProduct=e;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/admin/product"),o="post";this.isNew||(c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/admin/product/").concat(e.id),o="put");var l=this.$refs.productModal;this.$http[o](c,{data:this.tempProduct}).then((function(e){l.hideModel(),"post"===o?t.$httpMessageState(e,"新增產品"):t.$httpMessageState(e,"更新產品"),e.data.success&&t.getProducts()}))},DeleteProduct:function(e){var t=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/admin/product/").concat(e),o=this.$refs.deleteModal;this.$http.delete(c).then((function(e){o.hideModel(),t.$httpMessageState(e,"刪除產品"),t.getProducts()}))}},created:function(){this.getProducts()}};const He=Le()(Ge,[["render",m]]);t["default"]=He}}]);
//# sourceMappingURL=chunk-6cbc6c02.896cebe1.js.map