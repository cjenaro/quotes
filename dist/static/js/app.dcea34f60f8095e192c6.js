webpackJsonp([0],{"04yH":function(t,e){},"4vHc":function(t,e){},ILnC:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),i={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v(this._s(this.text))])},staticRenderFns:[]};var r=n("VU/8")({name:"Quote",props:["text"]},i,!1,function(t){n("ILnC")},"data-v-541ea320",null).exports,u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("progress",{attrs:{max:this.total},domProps:{value:this.current}})])},staticRenderFns:[]};var s=n("VU/8")({name:"Slider",props:["current","total"]},u,!1,function(t){n("qAx9")},"data-v-a25d58aa",null).exports,a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Write your quote:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.theNewQuote,expression:"theNewQuote"}],attrs:{type:"text",name:"quote"},domProps:{value:t.theNewQuote},on:{keydown:t.enterEvent,input:function(e){e.target.composing||(t.theNewQuote=e.target.value)}}}),t._v(" "),n("button",{on:{click:t.emitEvent}},[t._v("Add quote!")])])},staticRenderFns:[]};var c={name:"Main",components:{Quote:r,NewQuote:n("VU/8")({name:"NewQuote",data:function(){return{theNewQuote:"",id:0}},methods:{emitEvent:function(){this.$emit("new-quote-event",this.theNewQuote,this.id),this.theNewQuote="",this.id++},enterEvent:function(t){"Enter"==t.key&&this.emitEvent()}}},a,!1,function(t){n("z/a0")},"data-v-085b444c",null).exports,Slider:s},data:function(){return{quotes:[],maxQuotes:10}},methods:{pushQuote:function(t,e){this.quotes.length<this.maxQuotes?this.quotes.push({text:t,id:e}):alert("You have completed the amount of quotes!")},removeQuote:function(t){this.quotes=this.quotes.filter(function(e){return e.id!=t})}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("slider",{attrs:{current:t.quotes.length,total:t.maxQuotes}}),t._v(" "),n("new-quote",{on:{"new-quote-event":t.pushQuote}}),t._v(" "),n("transition-group",{staticClass:"all-quotes",attrs:{name:"fade",tag:"ul"}},t._l(t.quotes,function(e){return n("li",{key:e.id,on:{click:function(n){return t.removeQuote(e.id)}}},[n("quote",{attrs:{text:e.text}})],1)}),0)],1)},staticRenderFns:[]};var v={name:"App",components:{Main:n("VU/8")(c,l,!1,function(t){n("04yH")},"data-v-6d1c6b37",null).exports}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Main"),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("h3",[this._v("Click any quote to remove it!")])])}]};var h=n("VU/8")(v,d,!1,function(t){n("4vHc")},null,null).exports;o.a.config.productionTip=!1,new o.a({el:"#app",components:{App:h},template:"<App/>"})},qAx9:function(t,e){},"z/a0":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.dcea34f60f8095e192c6.js.map