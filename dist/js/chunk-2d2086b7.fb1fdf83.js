(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),o={class:"container mt-5"},r={class:"col-md-6"},s=Object(a["createElementVNode"])("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),c={class:"mb-2"},i=Object(a["createElementVNode"])("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),l={class:"mb-2"},d=Object(a["createElementVNode"])("label",{for:"inputPassword",class:"sr-only"},"Password",-1),u=Object(a["createElementVNode"])("div",{class:"text-end mt-4"},[Object(a["createElementVNode"])("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"}," 登入 ")],-1);function m(e,t,n,m,b,p){var h=Object(a["resolveComponent"])("NavbarMain");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createVNode"])(h),Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("form",{class:"row justify-content-center",onSubmit:t[2]||(t[2]=Object(a["withModifiers"])((function(){return p.signIn&&p.signIn.apply(p,arguments)}),["prevent"]))},[Object(a["createElementVNode"])("div",r,[s,Object(a["createElementVNode"])("div",c,[i,Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":t[0]||(t[0]=function(e){return b.user.username=e})},null,512),[[a["vModelText"],b.user.username]])]),Object(a["createElementVNode"])("div",l,[d,Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return b.user.password=e})},null,512),[[a["vModelText"],b.user.password]])]),u])],32)])],64)}n("99af");var b=n("5ee8"),p={components:{NavbarMain:b["a"]},data:function(){return{user:{username:"",password:""}}},methods:{signIn:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","admin/signin");this.$http.post(t,this.user).then((function(t){if(t.data.success){var n=t.data,a=n.token,o=n.expired;document.cookie="hexToken = ".concat(a,"; expires = ").concat(new Date(o)),e.$router.push("/administrator/products")}}))}}},h=n("d959"),f=n.n(h);const j=f()(p,[["render",m]]);t["default"]=j}}]);
//# sourceMappingURL=chunk-2d2086b7.fb1fdf83.js.map