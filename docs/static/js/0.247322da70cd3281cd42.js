webpackJsonp([0],{NsAP:function(t,e){},hLWp:function(t,e){},mJew:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"talk-area",data:function(){return{gitalk:{}}},watch:{$route:{handler:function(t){if("view"===t.name){var e=JSON.parse(window.localStorage.getItem("article")).id;console.log("id",e),this.initGitTalk(e)}},immediate:!0}},mounted:function(){this.gitalk.render("gitalk-container")},methods:{initGitTalk:function(t){this.gitalk=new Gitalk({id:t||"",clientID:"627fafddf767c8014821",clientSecret:"835037abb7b9be36bf5ef50d7249bd80a7493c92",repo:"talkArea",owner:"woniu1112",admin:["woniu1112"],perPage:50,distractionFreeMode:!1})}}},n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"talk-area"},[e("p",{staticClass:"title"},[this._v("评论区")]),this._v(" "),e("div",{attrs:{id:"gitalk-container"}})])}]};var r=i("C7Lr")(a,n,!1,function(t){i("hLWp"),i("NsAP")},"data-v-65c75588",null);e.default=r.exports}});
//# sourceMappingURL=0.247322da70cd3281cd42.js.map