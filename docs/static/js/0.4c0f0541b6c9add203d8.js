webpackJsonp([0],{fmtq:function(t,i){},ib58:function(t,i){},mJew:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={name:"talk-area",props:["articles"],data:function(){return{gitalk:{}}},watch:{articles:{handler:function(t){this.gitalk={},document.querySelector("#gitalk-container").innerHTML="",this.initGitTalk(Number(t.id))}}},mounted:function(){this.initGitTalk(this.articles.id)},methods:{initGitTalk:function(t){this.gitalk=new Gitalk({id:t||"",clientID:"627fafddf767c8014821",clientSecret:"835037abb7b9be36bf5ef50d7249bd80a7493c92",repo:"talkArea",owner:"woniu1112",admin:["woniu1112"],perPage:50,distractionFreeMode:!1}),this.gitalk.render("gitalk-container")}}},a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"talk-area"},[i("p",{staticClass:"title"},[this._v("开始吐槽")]),this._v(" "),i("div",{attrs:{id:"gitalk-container"}})])}]};var r=e("C7Lr")(n,a,!1,function(t){e("ib58"),e("fmtq")},"data-v-6c1387ac",null);i.default=r.exports}});
//# sourceMappingURL=0.4c0f0541b6c9add203d8.js.map