"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[262],{5934:(e,t,r)=>{var n;r.d(t,{Z:()=>u});var a=new Uint8Array(16);function i(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(a)}const l=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const o=function(e){return"string"==typeof e&&l.test(e)};for(var s=[],d=0;d<256;++d)s.push((d+256).toString(16).substr(1));const c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase();if(!o(r))throw TypeError("Stringified UUID is invalid");return r};const u=function(e,t,r){var n=(e=e||{}).random||(e.rng||i)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var a=0;a<16;++a)t[r+a]=n[a];return t}return c(n)}},4262:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ie});var n=r(6252),a=r(2262),i=r(9963),l=r(3577),o=r(5392),s=r(4290),d=["for"],c=["id","required","accept","aria-describedby","placeholder"],u={key:1,class:"invalid-feedback"},p={key:2,class:"form-hint"};var m=r(5934);const f={props:{modelValue:File,id:{type:String,default:function(){return"upload-input-".concat((0,m.Z)())}},label:String,accept:String,error:String,required:Boolean,hint:String,placeholder:String},emits:["update:modelValue"],watch:{modelValue:function(e){e||(this.$refs.file.value="")}},methods:{change:function(e){this.$emit("update:modelValue",e.target.files[0])}}};const b=(0,r(3744).Z)(f,[["render",function(e,t,r,a,i,o){return(0,n.wg)(),(0,n.iD)("div",{class:(0,l.C_)(["form-group",e.$attrs.class])},[r.label?((0,n.wg)(),(0,n.iD)("label",{key:0,class:(0,l.C_)(["form-label",{required:r.required}]),for:r.id},(0,l.zw)(r.label)+":",11,d)):(0,n.kq)("",!0),(0,n._)("div",{class:(0,l.C_)(["form-input p-0",{"is-invalid":r.error}])},[(0,n._)("input",{id:r.id,ref:"file",type:"file",required:r.required,accept:r.accept,class:(0,l.C_)(["form-control",{"is-invalid":r.error}]),"aria-describedby":r.label.trim().toLowerCase().replaceAll(" ","-"),placeholder:r.placeholder,onChange:t[0]||(t[0]=function(){return o.change&&o.change.apply(o,arguments)})},null,42,c)],2),r.error?((0,n.wg)(),(0,n.iD)("div",u,(0,l.zw)(r.error),1)):(0,n.kq)("",!0),r.hint?((0,n.wg)(),(0,n.iD)("small",p,(0,l.zw)(r.hint),1)):(0,n.kq)("",!0)],2)}]]);var g=r(9038),v=r(1868),y={class:"input-group mb-3"},_={class:"col-4"},w=["disabled"],h=["textContent"],k={class:"col-4"},S=["disabled"],U=["textContent"],x={class:"col-3"},C=["disabled"],D=["textContent"],j={class:"col-1"},q=["disabled"],O=[(0,n._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[(0,n._)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,n._)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,n._)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)],z={key:0,class:"text-danger"},V={class:"input-group"},T=["value"],P=["value"],B=["value"],M={class:"input-group-text"},Z=["onClick"],$=[(0,n._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[(0,n._)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,n._)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,n._)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)],I=(0,n._)("div",{class:"invalid-feedback"},null,-1);const W={__name:"RodentAttributes",props:{rodent_attributes:{type:Object,required:!1},rodent_type:{type:String,required:!1}},setup:function(e){var t=e,r=(0,g.cI)({name:null,value:null,unit:null}),o=(0,g.cI)(),s=function(e){o.delete("/admin/rodent-type/".concat(t.rodent_type,"/attribute/").concat(t.rodent_attributes.data[e].id))},d=function(){r.post("/admin/rodent-type/".concat(t.rodent_type,"/attribute"),{preserveScroll:!0,onSuccess:function(){return r.reset()}})};return function(t,o){return(0,n.wg)(),(0,n.iD)("div",{class:(0,l.C_)({"is-invalid":(0,a.SU)(r).errors.length})},[(0,n._)("div",y,[(0,n._)("div",_,[(0,n.wy)((0,n._)("input",{type:"text",disabled:!e.rodent_type,class:(0,l.C_)(["form-control",{"is-invalid":(0,a.SU)(r).errors.name}]),name:"name",placeholder:"Naziv...","onUpdate:modelValue":o[0]||(o[0]=function(e){return(0,a.SU)(r).name=e})},null,10,w),[[i.nr,(0,a.SU)(r).name]]),(0,a.SU)(r).errors.name?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"invalid-feedback",textContent:(0,l.zw)((0,a.SU)(r).errors.name)},null,8,h)):(0,n.kq)("",!0)]),(0,n._)("div",k,[(0,n.wy)((0,n._)("input",{type:"text",disabled:!e.rodent_type,class:(0,l.C_)(["form-control",{"is-invalid":(0,a.SU)(r).errors.value}]),name:"value",placeholder:"Veličina...","onUpdate:modelValue":o[1]||(o[1]=function(e){return(0,a.SU)(r).value=e})},null,10,S),[[i.nr,(0,a.SU)(r).value]]),(0,a.SU)(r).errors.value?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"invalid-feedback",textContent:(0,l.zw)((0,a.SU)(r).errors.value)},null,8,U)):(0,n.kq)("",!0)]),(0,n._)("div",x,[(0,n.wy)((0,n._)("input",{type:"text",disabled:!e.rodent_type,class:(0,l.C_)(["form-control",{"is-invalid":(0,a.SU)(r).errors.unit}]),name:"unit",placeholder:"Merna jedinica...","onUpdate:modelValue":o[2]||(o[2]=function(e){return(0,a.SU)(r).unit=e})},null,10,C),[[i.nr,(0,a.SU)(r).unit]]),(0,a.SU)(r).errors.unit?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"invalid-feedback",textContent:(0,l.zw)((0,a.SU)(r).errors.unit)},null,8,D)):(0,n.kq)("",!0)]),(0,n._)("div",j,[(0,n._)("button",{disabled:(0,a.SU)(r).processing,onClick:o[3]||(o[3]=(0,i.iM)((function(){return(0,a.SU)(d)&&(0,a.SU)(d).apply(void 0,arguments)}),["prevent"])),title:"Dodaj Tehnički Podatak",class:"btn btn-green w-100",type:"button","aria-label":"Button"},O,8,q)])]),e.rodent_type?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("p",z,"Morate prvo kreirati bager da bi ste dodavali tehničke detalje.")),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.rodent_attributes.data,(function(e,t){return(0,n.wg)(),(0,n.iD)("div",{class:"mb-3",key:t},[(0,n._)("div",V,[(0,n._)("input",{type:"text",class:"form-control disabled",disabled:"disabled",value:e.name},null,8,T),(0,n._)("input",{type:"text",class:"form-control disabled",disabled:"disabled",value:e.value},null,8,P),(0,n._)("input",{type:"text",class:"form-control disabled",disabled:"disabled",value:e.unit},null,8,B),(0,n._)("span",M,[(0,n._)("a",{href:"#",onClick:(0,i.iM)((function(e){return(0,a.SU)(s)(t)}),["prevent"]),title:"Obriši Tehnički Podatak",class:"text-danger","data-bs-toggle":"tooltip","data-bs-original-title":"Obriši Tehnički Podatak"},$,8,Z)])]),I])})),128))],2)}}};var R={class:"container-xl my-4"},A={class:"card"},E={class:"card-footer"},H={key:0,class:"mb-3"},L=(0,n._)("label",{class:"form-label"},"Postavljena Slika",-1),F={class:"row g-2"},N={class:"col-auto w-100"},Y={class:"form-imagecheck mb-2 w-100"},K={class:"form-imagecheck-figure"},G=["src","alt"],J=(0,n.Uk)("Obriši"),Q={key:1,class:"m-3"},X=["value"],ee=(0,n.Uk)("Pošalji sliku"),te={class:"card"},re={class:"card-footer"},ne={class:"form-group mb-3"},ae=(0,n._)("label",{class:"form-label"},"Tehnički podaci",-1);const ie={__name:"Edit",props:{rodentAttributes:Object,rodentType:Object},setup:function(e){var t=e,r=(0,g.cI)({name:t.rodentType.name}),d=(0,g.cI)({image:null}),c=(0,g.cI)({}),u=function(){r.patch("/admin/rodent-type/".concat(t.rodentType.slug))},p=function(){c.delete("/admin/rodent-type/".concat(t.rodentType.slug,"/image"))},m=function(){d.post("/admin/rodent-type/".concat(t.rodentType.slug,"/image"),{forceFormData:!0})};return function(t,f){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)((0,a.SU)(o.Z),{title:"Izmeni Model Bagera",cardTitle:"Izmeni Postojeći Model Bagera",form:(0,a.SU)(r),breadcumbs:{"Modeli Bagera":"/admin/rodent-type"},onSubmitForm:(0,a.SU)(u),buttonText:"Izmeni"},{default:(0,n.w5)((function(){return[(0,n.Wm)((0,a.SU)(s.Z),{modelValue:(0,a.SU)(r).name,"onUpdate:modelValue":f[0]||(f[0]=function(e){return(0,a.SU)(r).name=e}),error:(0,a.SU)(r).errors.name,class:"mb-3",label:"Naziv Modela Bagera",placeholder:"Unesite Naziv Modela Bagera...",required:""},null,8,["modelValue","error"])]})),_:1},8,["form","onSubmitForm"]),(0,n._)("div",R,[(0,n._)("div",A,[(0,n._)("div",E,[e.rodentType.image?((0,n.wg)(),(0,n.iD)("div",H,[L,(0,n._)("div",F,[(0,n._)("div",N,[(0,n._)("label",Y,[(0,n._)("span",K,[(0,n._)("img",{src:"/images/rodents/".concat(e.rodentType.image),alt:"SLika Bagera ".concat(e.rodentType.name),class:"form-imagecheck-image"},null,8,G)])]),(0,n.Wm)((0,a.SU)(v.Z),{class:"btn-warning w-100",onClick:(0,i.iM)((0,a.SU)(p),["prevent"]),loading:(0,a.SU)(c).processing},{default:(0,n.w5)((function(){return[J]})),_:1},8,["onClick","loading"])])])])):((0,n.wg)(),(0,n.iD)("div",Q,[(0,n.Wm)((0,a.SU)(b),{modelValue:(0,a.SU)(d).image,"onUpdate:modelValue":f[1]||(f[1]=function(e){return(0,a.SU)(d).image=e}),error:(0,a.SU)(d).errors.image,type:"file",accept:"image/*",label:"Slika Bagera",hint:"Odaberite sliku Bagera koja će biti prikazane na stranici za detalje bagera."},null,8,["modelValue","error"]),(0,a.SU)(d).progress?((0,n.wg)(),(0,n.iD)("progress",{key:0,value:(0,a.SU)(d).progress.percentage,max:"100"},(0,l.zw)((0,a.SU)(d).progress.percentage)+"% ",9,X)):(0,n.kq)("",!0),(0,n.Wm)((0,a.SU)(v.Z),{disabled:!(0,a.SU)(d).image,loading:(0,a.SU)(d).processing,onClick:(0,i.iM)((0,a.SU)(m),["prevent"]),class:"btn-success w-100"},{default:(0,n.w5)((function(){return[ee]})),_:1},8,["disabled","loading","onClick"])]))])]),(0,n._)("div",te,[(0,n._)("div",re,[(0,n._)("div",ne,[ae,(0,n._)("div",null,[(0,n.Wm)((0,a.SU)(W),{rodent_type:e.rodentType.slug,rodent_attributes:e.rodentAttributes},null,8,["rodent_type","rodent_attributes"])])])])])])],64)}}}},5392:(e,t,r)=>{r.d(t,{Z:()=>D});var n=r(6252),a=r(3577),i=r(9963),l=r(2262),o=r(1868),s={class:"container-xl my-4"},d={class:"page-header d-print-none"},c={class:"row g-2 align-items-center"},u={class:"col"},p={class:"page-title"},m={class:"col-12 col-md-auto ms-auto d-print-none"},f={class:"breadcrumb","aria-label":"breadcrumbs"},b={class:"breadcrumb-item"},g=(0,n.Uk)("Početna"),v={class:"breadcrumb-item"},y={class:"breadcrumb-item active","aria-current":"page"},_={href:"#"},w={class:"container-xl"},h={class:"row row-cards"},k={class:"col-12"},S={class:"card-header"},U={class:"card-title"},x={class:"card-body",id:"accordion_form"},C={class:"form-footer d-grid gap-2"};const D={__name:"CreateEditLayout",props:{form:Object,breadcumbs:Object,title:String,cardTitle:String,buttonText:{type:String,default:"Kreiraj"}},emits:["submit-form"],setup:function(e){return function(t,r){var D=(0,n.up)("Link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",s,[(0,n._)("div",d,[(0,n._)("div",c,[(0,n._)("div",u,[(0,n._)("h2",p,(0,a.zw)(e.title),1)]),(0,n._)("div",m,[(0,n._)("ol",f,[(0,n._)("li",b,[(0,n.Wm)(D,{href:"/"},{default:(0,n.w5)((function(){return[g]})),_:1})]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.breadcumbs,(function(e,t){return(0,n.wg)(),(0,n.iD)("li",v,[(0,n.Wm)(D,{href:e},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,a.zw)(t),1)]})),_:2},1032,["href"])])})),256)),(0,n._)("li",y,[(0,n._)("a",_,(0,a.zw)(e.title),1)])])])])])]),(0,n._)("div",w,[(0,n._)("div",h,[(0,n._)("div",k,[(0,n.WI)(t.$slots,"cardcontent"),(0,n._)("form",{class:"card",onSubmit:r[0]||(r[0]=(0,i.iM)((function(e){return t.$emit("submit-form")}),["prevent"]))},[(0,n._)("div",S,[(0,n._)("h4",U,(0,a.zw)(e.cardTitle),1)]),(0,n._)("div",x,[(0,n.WI)(t.$slots,"default"),(0,n._)("div",C,[(0,n.Wm)((0,l.SU)(o.Z),{class:"btn-green",loading:e.form.processing},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,a.zw)(e.buttonText),1)]})),_:1},8,["loading"])])])],32)])])])],64)}}}},1868:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(6252),a=["disabled"],i={key:0,class:"spinner-border spinner-border-sm ms-2",role:"status"};const l={props:{loading:Boolean}};const o=(0,r(3744).Z)(l,[["render",function(e,t,r,l,o,s){return(0,n.wg)(),(0,n.iD)("button",{type:"submit",disabled:r.loading,class:"btn"},[(0,n.WI)(e.$slots,"default"),r.loading?((0,n.wg)(),(0,n.iD)("span",i)):(0,n.kq)("",!0)],8,a)}]])},4290:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(6252),a=r(3577);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=["for"],d=["id","required","type","value","aria-describedby","placeholder"],c={key:1,class:"invalid-feedback"},u={key:2,class:"form-hint"};var p=r(5934);const m={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-input-".concat((0,p.Z)())}},type:{type:String,default:"text"},error:String,label:String,modelValue:[String,Number,Boolean],required:Boolean,hint:String,placeholder:String},emits:["update:modelValue"],methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(e,t){this.$refs.input.setSelectionRange(e,t)}}};const f=(0,r(3744).Z)(m,[["render",function(e,t,r,i,o,p){return(0,n.wg)(),(0,n.iD)("div",{class:(0,a.C_)(["form-group",e.$attrs.class])},[r.label?((0,n.wg)(),(0,n.iD)("label",{key:0,class:(0,a.C_)(["form-label",{required:r.required}]),for:r.id},(0,a.zw)(r.label)+":",11,s)):(0,n.kq)("",!0),(0,n._)("input",(0,n.dG)({id:r.id,ref:"input"},l(l({},e.$attrs),{},{class:null}),{required:r.required,class:["form-control",{"is-invalid":r.error}],type:r.type,value:r.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)}),"aria-describedby":r.label.trim().toLowerCase().replaceAll(" ","-"),placeholder:r.placeholder}),null,16,d),r.error?((0,n.wg)(),(0,n.iD)("div",c,(0,a.zw)(r.error),1)):(0,n.kq)("",!0),r.hint?((0,n.wg)(),(0,n.iD)("small",u,(0,a.zw)(r.hint),1)):(0,n.kq)("",!0)],2)}]])}}]);
//# sourceMappingURL=262.js.map?id=1ea73eda11479e59