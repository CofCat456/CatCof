(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3cca7c2d"],{"4af2":function(e,t,o){"use strict";o.r(t);var n=o("7a23"),c={class:"text-end mt-3"},a={class:"table mt-4"},l=Object(n["createElementVNode"])("thead",null,[Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("th",{width:"200"},"名稱"),Object(n["createElementVNode"])("th",{width:"300"},"折扣百分比"),Object(n["createElementVNode"])("th",{width:"250"},"到期日"),Object(n["createElementVNode"])("th",{width:"250"},"是否啟用"),Object(n["createElementVNode"])("th",{width:"300"},"編輯")])],-1),d={key:0,class:"text-success"},i={key:1,class:"text-muted"},r={class:"btn-group"},s=["onClick"],u=["onClick"];function p(e,t,o,p,m,b){var j=Object(n["resolveComponent"])("ToastMessage"),O=Object(n["resolveComponent"])("Loading"),h=Object(n["resolveComponent"])("Pagination"),f=Object(n["resolveComponent"])("CouponModal"),E=Object(n["resolveComponent"])("DeleteModel");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(j),Object(n["createVNode"])(O,{active:m.isLoading},null,8,["active"]),Object(n["createElementVNode"])("div",c,[Object(n["createElementVNode"])("button",{class:"btn btn-primary",type:"button",onClick:t[0]||(t[0]=function(e){return b.openModel(!0)})}," 增加一個優惠卷 ")]),Object(n["createElementVNode"])("table",a,[l,Object(n["createElementVNode"])("tbody",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(m.coupons,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:e.id},[Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(e.title),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(e.percent)+"%",1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(e.due_date),1),Object(n["createElementVNode"])("td",null,[e.is_enabled?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",d,"啟用")):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",i,"未啟用"))]),Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("div",r,[Object(n["createElementVNode"])("button",{class:"btn btn-outline-primary btn-sm",onClick:function(t){return b.openModel(!1,e)}}," 編輯 ",8,s),Object(n["createElementVNode"])("button",{class:"btn btn-outline-danger btn-sm",onClick:function(t){return b.openDeleteModel(e)}}," 刪除 ",8,u)])])])})),128))])]),Object(n["createVNode"])(h,{pages:m.pagination,onEmitAdpages:b.getCoupon,onEmitAdPrev:b.getCoupon,onEmitAdNext:b.getCoupon},null,8,["pages","onEmitAdpages","onEmitAdPrev","onEmitAdNext"]),Object(n["createVNode"])(f,{ref:"CouponModal",Coupon:m.tempCoupon,onUpdateCoupon:b.updateCoupon},null,8,["Coupon","onUpdateCoupon"]),Object(n["createVNode"])(E,{ref:"deleteModal",item:m.tempCoupon.title,id:m.tempCoupon.id,onDelItem:b.DeleteCoupon},null,8,["item","id","onDelItem"])],64)}var m=o("5530"),b=(o("99af"),o("d3b7"),o("159b"),function(e){return Object(n["pushScopeId"])("data-v-e86edc7a"),e=e(),Object(n["popScopeId"])(),e}),j={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},O={class:"modal-dialog modal-xl",role:"document"},h={class:"modal-content border-0"},f=b((function(){return Object(n["createElementVNode"])("div",{class:"modal-header bg-dark text-white"},[Object(n["createElementVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(n["createElementVNode"])("span",null,"編輯優惠卷")]),Object(n["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)})),E={class:"modal-body"},v={class:"row"},N={class:"col-sm-12 px-3"},V={class:"mb-3"},C=b((function(){return Object(n["createElementVNode"])("label",{for:"title",class:"form-label"},"名稱",-1)})),g={class:"row gx-3"},M=b((function(){return Object(n["createElementVNode"])("h5",{class:"px-2"},"優惠卷資訊",-1)})),x={class:"mt-2 mb-3 col-md-6 px-2"},k=b((function(){return Object(n["createElementVNode"])("label",{for:"percent",class:"form-label"},"折價比例",-1)})),w={class:"mt-2 mb-3 col-md-6 px-2"},y=b((function(){return Object(n["createElementVNode"])("label",{for:"due_date",class:"form-label"},"到期日",-1)})),D={class:"row gx-3"},_={class:"mb-3 col"},B=b((function(){return Object(n["createElementVNode"])("label",{for:"code",class:"form-label"},"優惠碼",-1)})),$={class:"mb-3"},L={class:"form-check"},S=b((function(){return Object(n["createElementVNode"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1)})),U={class:"modal-footer"},T=b((function(){return Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1)}));function A(e,t,o,c,a,l){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",j,[Object(n["createElementVNode"])("div",O,[Object(n["createElementVNode"])("div",h,[f,Object(n["createElementVNode"])("div",E,[Object(n["createElementVNode"])("div",v,[Object(n["createElementVNode"])("div",N,[Object(n["createElementVNode"])("div",V,[C,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"text",class:"form-control",id:"title",placeholder:"優惠卷名稱","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.tempCoupon.title=e})},null,512),[[n["vModelText"],a.tempCoupon.title]])]),Object(n["createElementVNode"])("div",g,[M,Object(n["createElementVNode"])("div",x,[k,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"number",class:"form-control",id:"percent",placeholder:"百分比","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.tempCoupon.percent=e})},null,512),[[n["vModelText"],a.tempCoupon.percent]])]),Object(n["createElementVNode"])("div",w,[y,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"number",class:"form-control",id:"due_date",placeholder:"請使用 Unix Timestamp 格式","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.tempCoupon.due_date=e})},null,512),[[n["vModelText"],a.tempCoupon.due_date]])])]),Object(n["createElementVNode"])("div",D,[Object(n["createElementVNode"])("div",_,[B,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"text",class:"form-control",id:"code",placeholder:"Code","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.tempCoupon.code=e})},null,512),[[n["vModelText"],a.tempCoupon.code]])])])]),Object(n["createElementVNode"])("div",$,[Object(n["createElementVNode"])("div",L,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":t[4]||(t[4]=function(e){return a.tempCoupon.is_enabled=e})},null,512),[[n["vModelCheckbox"],a.tempCoupon.is_enabled]]),S])])])]),Object(n["createElementVNode"])("div",U,[T,Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=function(t){return e.$emit("update-coupon",a.tempCoupon)})}," 確認 ")])])])],512)}var I=o("db44"),P={props:{Coupon:{type:Object,default:function(){return{}}}},data:function(){return{modal:{},tempCoupon:{}}},watch:{Coupon:function(){this.tempCoupon=this.Coupon}},mixins:[I["a"]]},F=(o("6ce8"),o("d959")),J=o.n(F);const Y=J()(P,[["render",A],["__scopeId","data-v-e86edc7a"]]);var q=Y,z=o("139f"),G=o("f367"),H=o("1799"),K=o("9bb9"),Q={components:{CouponModal:q,DeleteModel:z["a"],ToastMessage:G["a"],Pagination:H["a"]},inject:["emitter"],data:function(){return{coupons:[],pagination:{},isLoading:!1,tempCoupon:{},isNew:!1}},methods:{openModel:function(e,t){this.tempCoupon=e?{}:Object(m["a"])({},t),this.isNew=e;var o=this.$refs.CouponModal;o.showModel()},openDeleteModel:function(e){this.tempCoupon=Object(m["a"])({},e);var t=this.$refs.deleteModal;t.showModel()},getCoupon:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/admin/coupons?page=").concat(t);this.isLoading=!0,this.$http.get(o).then((function(t){e.isLoading=!1,t.data.success&&(e.coupons=t.data.coupons,e.coupons.forEach((function(e){e.due_date=Object(K["b"])(e.due_date)})),e.pagination=t.data.pagination)}))},updateCoupon:function(e){var t=this;this.tempCoupon=e;var o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/admin/coupon"),n="post";this.isNew||(o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/admin/coupon/").concat(e.id),n="put");var c=this.$refs.CouponModal;this.$http[n](o,{data:this.tempCoupon}).then((function(e){c.hideModel(),"post"===n?t.$httpMessageState(e,"新增優惠卷"):t.$httpMessageState(e,"編輯優惠卷"),e.data.success&&t.getCoupon()}))},DeleteCoupon:function(e){var t=this;console.log(e);var o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("cofcat-api","/admin/coupon/").concat(e),n=this.$refs.deleteModal;this.$http.delete(o).then((function(e){n.hideModel(),t.$httpMessageState(e,"刪除優惠卷‘"),t.getCoupon()}))},convertDate:function(e){var t=new Date(1e3*e);return t.getFullYear()+"/"+t.getMonth()+"/"+t.getDate()}},created:function(){this.getCoupon()}};const R=J()(Q,[["render",p]]);t["default"]=R},"6ce8":function(e,t,o){"use strict";o("a336")},a336:function(e,t,o){}}]);
//# sourceMappingURL=chunk-3cca7c2d.a66a924c.js.map