(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+q81":function(e,n,r){"use strict";r.r(n),r.d(n,"LoginModule",function(){return d});var o=r("ofXK"),t=r("3Pt+"),s=r("tyNb"),a=r("fXoL"),i=r("Ql6p");const b=[{path:"",component:(()=>{class e{constructor(e,n,r){this.auth=e,this.router=n,this.route=r,this.loading=!1,this.user={}}ngOnInit(){}onLogin(){this.loading=!0,this.auth.login(this.user).subscribe(e=>{this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/",this.router.navigate([this.returnUrl])},e=>{console.table(e.error),this.loading=!1})}}return e.\u0275fac=function(n){return new(n||e)(a.Jb(i.a),a.Jb(s.b),a.Jb(s.a))},e.\u0275cmp=a.Db({type:e,selectors:[["app-login"]],decls:16,vars:3,consts:[[1,"px-3"],[1,"lead"],[1,"row"],[1,"col-md-4"],[1,"card"],[1,"card-body"],[3,"ngSubmit"],["type","text","name","username","placeholder","Username","required","","autofocus","",1,"form-control",3,"ngModel","ngModelChange"],["type","password","name","password","placeholder","Password","required","",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(e,n){1&e&&(a.Ob(0,"main",0),a.Ob(1,"h1"),a.fc(2,"Welcome to sta-k.com"),a.Nb(),a.Ob(3,"p",1),a.fc(4," Find Local Stores around Vadakkencherry. sta-k.com app shows local stores of various categories accepting orders and delivering around vadakkencherry."),a.Nb(),a.Nb(),a.Ob(5,"div",2),a.Ob(6,"div",3),a.Ob(7,"div",4),a.Ob(8,"div",5),a.Ob(9,"form",6),a.Ub("ngSubmit",function(){return n.onLogin()}),a.Ob(10,"input",7),a.Ub("ngModelChange",function(e){return n.user.username=e}),a.Nb(),a.Kb(11,"br"),a.Ob(12,"input",8),a.Ub("ngModelChange",function(e){return n.user.password=e}),a.Nb(),a.Kb(13,"br"),a.Ob(14,"button",9),a.fc(15,"Log in"),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb()),2&e&&(a.zb(10),a.Zb("ngModel",n.user.username),a.zb(2),a.Zb("ngModel",n.user.password),a.zb(2),a.Zb("disabled",n.loading))},directives:[t.n,t.g,t.h,t.a,t.l,t.f,t.i],styles:[""]}),e})()}];let u=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({imports:[[s.d.forChild(b)],s.d]}),e})(),d=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({imports:[[o.c,u,t.e]]}),e})()}}]);