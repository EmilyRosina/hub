webpackJsonp([1],{"/X8t":function(t,e,r){"use strict";e.a={props:{fullWidth:{type:Boolean,default:!1,required:!1},fullHeight:{type:Boolean,default:!1,required:!1},fluid:{type:Boolean,default:!1,required:!1}},computed:{classes:function(){var t=this._props,e=[];return t.fullWidth&&e.push("full-width"),t.fullHeight&&e.push("full-height"),t.fluid&&e.push("container-fluid"),e.join(" ")}}}},"0H0j":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("sl-container",{attrs:{id:"welcome",fullWidth:"",fullHeight:""}},[r("sl-row",{attrs:{noGutters:"",flexGrow:1}},[r("sidebar"),t._v(" "),r("sl-col",[r("sl-container",{attrs:{fullWidth:"",fullHeight:""}},[r("sl-row",{attrs:{noGutters:"",flexGrow:1}},[r("sl-col",[t._v("2nd col - 1st row")])],1),t._v(" "),r("sl-row",{attrs:{noGutters:"",flexGrow:6}},[r("sl-col",[r("p",[t._v("examples i like...")]),t._v(" "),r("img",{attrs:{src:"https://reflect.io/assets/blog/github-screenshot-350443090d37bcbe5d838673f90149df0f1defdad08be88eb16438901411003c.png"}}),t._v(" "),r("img",{attrs:{src:"https://purecss.io/img/layouts/blog@2x.jpg"}}),t._v(" "),r("img",{attrs:{src:"https://1.bp.blogspot.com/-paSFxN2dtwk/WLyUzSFLjtI/AAAAAAAAAEA/03kct5t9JMMN7KiPntcCe6VoLHfBGtGLwCLcB/s1600/en_Notable.jpg"}})])],1)],1)],1)],1)],1)},s=[],u={render:n,staticRenderFns:s};e.a=u},"5rqd":function(t,e,r){"use strict";var n=r("QZZ6"),s=r("KWRN"),u=r("6I+s"),a=r("J6W3");e.a={name:"Welcome",data:function(){return{}},components:{slContainer:n.a,slRow:s.a,slCol:u.a,sidebar:a.a}}},"6I+s":function(t,e,r){"use strict";function n(t){r("Jv0s")}var s=r("TGLe"),u=r("SLJ1"),a=r("VU/8"),i=n,o=a(s.a,u.a,!1,i,null,null);e.a=o.exports},"8mJN":function(t,e){},"D+UM":function(t,e,r){"use strict";var n=r("fZjL"),s=r.n(n);e.a={props:{row:{type:String,default:"",required:!1},sm:{type:String,default:"",required:!1},md:{type:String,default:"",required:!1},lg:{type:String,default:"",required:!1},xl:{type:String,default:"",required:!1},noGutters:{type:Boolean,default:!1,required:!1},flexGrow:{type:Number,default:-1,required:!1}},computed:{classes:function(){var t=this._props,e=s()(t).filter(function(e){return t[e].length>0&&!["noGutters"].includes(e)}),r=[];return e.forEach(function(e){r.push(e+"-"+t[e])}),t.noGutters&&r.push("row-flush"),r.join(" ")},styles:function(){var t={};return this.flexGrow>=0&&(t.flex=this.flexGrow+" 0 auto"),t}}}},DdaA:function(t,e){},J6W3:function(t,e,r){"use strict";function n(t){r("qAJE")}var s=r("m2EB"),u=r("oLrT"),a=r("VU/8"),i=n,o=a(s.a,u.a,!1,i,"data-v-2f993fef",null);e.a=o.exports},Jv0s:function(t,e){},KWRN:function(t,e,r){"use strict";function n(t){r("8mJN")}var s=r("D+UM"),u=r("mSCV"),a=r("VU/8"),i=n,o=a(s.a,u.a,!1,i,null,null);e.a=o.exports},KhID:function(t,e){},M93x:function(t,e,r){"use strict";function n(t){r("N8LI")}var s=r("xJD8"),u=r("pj7j"),a=r("VU/8"),i=n,o=a(s.a,u.a,!1,i,null,null);e.a=o.exports},N8LI:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("7+uW"),s=r("M93x"),u=r("YaEn"),a=r("wtEF"),i=r("KhID"),o=(r.n(i),r("DdaA"));r.n(o);n.a.config.productionTip=!1,new n.a({el:"#app",router:u.a,template:"<App/>",components:{App:s.a},store:a.a})},NjT6:function(t,e,r){"use strict";function n(t){r("USQw")}var s=r("5rqd"),u=r("0H0j"),a=r("VU/8"),i=n,o=a(s.a,u.a,!1,i,"data-v-7caed600",null);e.a=o.exports},QZZ6:function(t,e,r){"use strict";function n(t){r("ymbC")}var s=r("/X8t"),u=r("iyNp"),a=r("VU/8"),i=n,o=a(s.a,u.a,!1,i,null,null);e.a=o.exports},SLJ1:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:["col",t.classes]},[t._t("default")],2)},s=[],u={render:n,staticRenderFns:s};e.a=u},TGLe:function(t,e,r){"use strict";var n=r("fZjL"),s=r.n(n);e.a={props:{col:{type:String,default:"",required:!1},xs:{type:String,default:"",required:!1},sm:{type:String,default:"",required:!1},md:{type:String,default:"",required:!1},lg:{type:String,default:"",required:!1},xl:{type:String,default:"",required:!1},hide:{type:String,default:"",required:!1},order:{type:String,default:"",required:!1},offset:{type:String,default:"",required:!1}},computed:{classes:function(){var t=this._props,e=s()(t).filter(function(e){return t[e].length>0}),r=[];return e.forEach(function(e){r.push(e+"-"+t[e])}),r.join(" ")}}}},USQw:function(t,e){},UjVw:function(t,e,r){"use strict";e.a={}},YaEn:function(t,e,r){"use strict";var n=r("7+uW"),s=r("/ocq"),u=r("NjT6");n.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"Welcome",component:u.a}]})},iyNp:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:["v-container","container",t.classes]},[t._t("default")],2)},s=[],u={render:n,staticRenderFns:s};e.a=u},m2EB:function(t,e,r){"use strict";var n=r("QZZ6"),s=r("KWRN"),u=r("6I+s");e.a={components:{slContainer:n.a,slRow:s.a,slCol:u.a}}},mSCV:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:["row",t.classes],style:t.styles},[t._t("default")],2)},s=[],u={render:n,staticRenderFns:s};e.a=u},mUbh:function(t,e,r){"use strict";e.a={}},oLrT:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("sl-col",{attrs:{col:"3",id:"sidebar"}},[r("p",[t._v("// sidebar //")]),t._v(" "),r("p",[t._v("...logo to go here...")]),t._v(" "),r("p",[t._v("...navigation to go here...")])])},s=[],u={render:n,staticRenderFns:s};e.a=u},pj7j:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],u={render:n,staticRenderFns:s};e.a=u},qAJE:function(t,e){},ukYY:function(t,e,r){"use strict";e.a={}},wtEF:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r("7+uW"),s=r("NYxO"),u=r("UjVw"),a=r("mUbh"),i=r("ukYY");n.a.use(s.a);var o=new s.a.Store({state:{stuff:[],test:"test name"},getters:u.a,mutations:i.a,actions:a.a})},xJD8:function(t,e,r){"use strict";e.a={name:"app"}},ymbC:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ec7d852f112bf33439ef.js.map