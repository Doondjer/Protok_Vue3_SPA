"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[740],{5934:(e,r,t)=>{var n;t.d(r,{Z:()=>c});var i=new Uint8Array(16);function o(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(i)}const a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const l=function(e){return"string"==typeof e&&a.test(e)};for(var u=[],s=0;s<256;++s)u.push((s+256).toString(16).substr(1));const d=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(u[e[r+0]]+u[e[r+1]]+u[e[r+2]]+u[e[r+3]]+"-"+u[e[r+4]]+u[e[r+5]]+"-"+u[e[r+6]]+u[e[r+7]]+"-"+u[e[r+8]]+u[e[r+9]]+"-"+u[e[r+10]]+u[e[r+11]]+u[e[r+12]]+u[e[r+13]]+u[e[r+14]]+u[e[r+15]]).toLowerCase();if(!l(t))throw TypeError("Stringified UUID is invalid");return t};const c=function(e,r,t){var n=(e=e||{}).random||(e.rng||o)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,r){t=t||0;for(var i=0;i<16;++i)r[t+i]=n[i];return r}return d(n)}},4740:(e,r,t)=>{t.r(r),t.d(r,{default:()=>b});var n=t(6252),i=t(2262),o=t(3577),a=t(5392),l=t(4290),u=t(443),s=t(9038),d=(0,n._)("option",{value:null},"Odaberite Polje...",-1),c=["value"],f=(0,n._)("option",{value:null},"Odaberite Tip Bagera...",-1),p=["value"];const b={__name:"Create",props:{excavationFields:Object,rodentTypes:Object},setup:function(e){var r=(0,s.cI)({rodent_id:null,name:"",excavation_field_id:null,rodent_type_id:null}),t=function(){r.post("/admin/rodent")};return function(s,b){return(0,n.wg)(),(0,n.j4)((0,i.SU)(a.Z),{title:"Kreiraj Bager",cardTitle:"Kreiraj Novi Bager",form:(0,i.SU)(r),breadcumbs:{Bageri:"/admin/rodent"},onSubmitForm:(0,i.SU)(t)},{default:(0,n.w5)((function(){return[(0,n.Wm)((0,i.SU)(l.Z),{modelValue:(0,i.SU)(r).rodent_id,"onUpdate:modelValue":b[0]||(b[0]=function(e){return(0,i.SU)(r).rodent_id=e}),error:(0,i.SU)(r).errors.rodent_id,class:"mb-3",label:"Id Bagera",placeholder:"Unesite Id Bagera...",hint:"Id Bagera pod kojim se zapisuje u SQL Server Bazi",required:""},null,8,["modelValue","error"]),(0,n.Wm)((0,i.SU)(l.Z),{modelValue:(0,i.SU)(r).name,"onUpdate:modelValue":b[1]||(b[1]=function(e){return(0,i.SU)(r).name=e}),error:(0,i.SU)(r).errors.name,class:"mb-3",label:"Naziv Bagera",placeholder:"Unesite Naziv Bagera...",hint:"",required:""},null,8,["modelValue","error"]),(0,n.Wm)((0,i.SU)(u.Z),{modelValue:(0,i.SU)(r).excavation_field_id,"onUpdate:modelValue":b[2]||(b[2]=function(e){return(0,i.SU)(r).excavation_field_id=e}),error:(0,i.SU)(r).errors.excavation_field_id,class:"mb-3",label:"Radna Jedinica",hint:"Odaberite Površinski Kop na kojem se bager nalazi",required:""},{default:(0,n.w5)((function(){return[d,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.excavationFields,(function(e,r){return(0,n.wg)(),(0,n.iD)("option",{value:r},(0,o.zw)(e),9,c)})),256))]})),_:1},8,["modelValue","error"]),(0,n.Wm)((0,i.SU)(u.Z),{modelValue:(0,i.SU)(r).rodent_type_id,"onUpdate:modelValue":b[3]||(b[3]=function(e){return(0,i.SU)(r).rodent_type_id=e}),error:(0,i.SU)(r).errors.rodent_type_id,class:"mb-3",label:"Tip Bagera",hint:"Odaberite Tip Bagera",required:""},{default:(0,n.w5)((function(){return[f,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.rodentTypes,(function(e,r){return(0,n.wg)(),(0,n.iD)("option",{value:r},(0,o.zw)(e),9,p)})),256))]})),_:1},8,["modelValue","error"])]})),_:1},8,["form","onSubmitForm"])}}}},5392:(e,r,t)=>{t.d(r,{Z:()=>D});var n=t(6252),i=t(3577),o=t(9963),a=t(2262),l=t(1868),u={class:"container-xl my-4"},s={class:"page-header d-print-none"},d={class:"row g-2 align-items-center"},c={class:"col"},f={class:"page-title"},p={class:"col-12 col-md-auto ms-auto d-print-none"},b={class:"breadcrumb","aria-label":"breadcrumbs"},m={class:"breadcrumb-item"},g=(0,n.Uk)("Početna"),v={class:"breadcrumb-item"},y={class:"breadcrumb-item active","aria-current":"page"},w={href:"#"},_={class:"container-xl"},h={class:"row row-cards"},S={class:"col-12"},O={class:"card-header"},j={class:"card-title"},U={class:"card-body",id:"accordion_form"},k={class:"form-footer d-grid gap-2"};const D={__name:"CreateEditLayout",props:{form:Object,breadcumbs:Object,title:String,cardTitle:String,buttonText:{type:String,default:"Kreiraj"}},emits:["submit-form"],setup:function(e){return function(r,t){var D=(0,n.up)("Link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",u,[(0,n._)("div",s,[(0,n._)("div",d,[(0,n._)("div",c,[(0,n._)("h2",f,(0,i.zw)(e.title),1)]),(0,n._)("div",p,[(0,n._)("ol",b,[(0,n._)("li",m,[(0,n.Wm)(D,{href:"/"},{default:(0,n.w5)((function(){return[g]})),_:1})]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.breadcumbs,(function(e,r){return(0,n.wg)(),(0,n.iD)("li",v,[(0,n.Wm)(D,{href:e},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,i.zw)(r),1)]})),_:2},1032,["href"])])})),256)),(0,n._)("li",y,[(0,n._)("a",w,(0,i.zw)(e.title),1)])])])])])]),(0,n._)("div",_,[(0,n._)("div",h,[(0,n._)("div",S,[(0,n.WI)(r.$slots,"cardcontent"),(0,n._)("form",{class:"card",onSubmit:t[0]||(t[0]=(0,o.iM)((function(e){return r.$emit("submit-form")}),["prevent"]))},[(0,n._)("div",O,[(0,n._)("h4",j,(0,i.zw)(e.cardTitle),1)]),(0,n._)("div",U,[(0,n.WI)(r.$slots,"default"),(0,n._)("div",k,[(0,n.Wm)((0,a.SU)(l.Z),{class:"btn-green",loading:e.form.processing},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,i.zw)(e.buttonText),1)]})),_:1},8,["loading"])])])],32)])])])],64)}}}},1868:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(6252),i=["disabled"],o={key:0,class:"spinner-border spinner-border-sm ms-2",role:"status"};const a={props:{loading:Boolean}};const l=(0,t(3744).Z)(a,[["render",function(e,r,t,a,l,u){return(0,n.wg)(),(0,n.iD)("button",{type:"submit",disabled:t.loading,class:"btn"},[(0,n.WI)(e.$slots,"default"),t.loading?((0,n.wg)(),(0,n.iD)("span",o)):(0,n.kq)("",!0)],8,i)}]])},443:(e,r,t)=>{t.d(r,{Z:()=>m});var n=t(6252),i=t(3577),o=t(9963);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var s=["for"],d=["id","aria-describedby"],c={key:1,class:"invalid-feedback"},f={key:2,class:"form-hint"};var p=t(5934);const b={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-input-".concat((0,p.Z)())}},error:String,label:String,modelValue:[String,Number,Boolean],required:Boolean,hint:String},emits:["update:modelValue"],data:function(){return{selected:this.modelValue}},watch:{selected:function(e){this.$emit("update:modelValue",e)}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()}}};const m=(0,t(3744).Z)(b,[["render",function(e,r,t,a,u,p){return(0,n.wg)(),(0,n.iD)("div",{class:(0,i.C_)(["form-group",e.$attrs.class])},[t.label?((0,n.wg)(),(0,n.iD)("label",{key:0,class:(0,i.C_)(["form-label",{required:t.required}]),for:t.id},(0,i.zw)(t.label)+":",11,s)):(0,n.kq)("",!0),(0,n.wy)((0,n._)("select",(0,n.dG)({id:t.id,ref:"input","onUpdate:modelValue":r[0]||(r[0]=function(e){return u.selected=e})},l(l({},e.$attrs),{},{class:null}),{class:["form-control",{"is-invalid":t.error}],"aria-describedby":t.label.trim().toLowerCase().replaceAll(" ","-")}),[(0,n.WI)(e.$slots,"default")],16,d),[[o.bM,u.selected]]),t.error?((0,n.wg)(),(0,n.iD)("div",c,(0,i.zw)(t.error),1)):(0,n.kq)("",!0),t.hint?((0,n.wg)(),(0,n.iD)("small",f,(0,i.zw)(t.hint),1)):(0,n.kq)("",!0)],2)}]])},4290:(e,r,t)=>{t.d(r,{Z:()=>b});var n=t(6252),i=t(3577);function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var u=["for"],s=["id","required","type","value","aria-describedby","placeholder"],d={key:1,class:"invalid-feedback"},c={key:2,class:"form-hint"};var f=t(5934);const p={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-input-".concat((0,f.Z)())}},type:{type:String,default:"text"},error:String,label:String,modelValue:[String,Number,Boolean],required:Boolean,hint:String,placeholder:String},emits:["update:modelValue"],methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(e,r){this.$refs.input.setSelectionRange(e,r)}}};const b=(0,t(3744).Z)(p,[["render",function(e,r,t,o,l,f){return(0,n.wg)(),(0,n.iD)("div",{class:(0,i.C_)(["form-group",e.$attrs.class])},[t.label?((0,n.wg)(),(0,n.iD)("label",{key:0,class:(0,i.C_)(["form-label",{required:t.required}]),for:t.id},(0,i.zw)(t.label)+":",11,u)):(0,n.kq)("",!0),(0,n._)("input",(0,n.dG)({id:t.id,ref:"input"},a(a({},e.$attrs),{},{class:null}),{required:t.required,class:["form-control",{"is-invalid":t.error}],type:t.type,value:t.modelValue,onInput:r[0]||(r[0]=function(r){return e.$emit("update:modelValue",r.target.value)}),"aria-describedby":t.label.trim().toLowerCase().replaceAll(" ","-"),placeholder:t.placeholder}),null,16,s),t.error?((0,n.wg)(),(0,n.iD)("div",d,(0,i.zw)(t.error),1)):(0,n.kq)("",!0),t.hint?((0,n.wg)(),(0,n.iD)("small",c,(0,i.zw)(t.hint),1)):(0,n.kq)("",!0)],2)}]])}}]);
//# sourceMappingURL=740.js.map?id=3557abf378ad10ba