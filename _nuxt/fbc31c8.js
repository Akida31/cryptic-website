(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{224:function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var n=new(o(227).a)({url:"https://ghost.cryptic-game.net",key:"6495bcf3e9a85556cb1e5519ab",version:"v3"});n.mappings={post:{feature_image:"image",created_at:"createdAt",updated_at:"updatedAt",published_at:"publishedAt",custom_excerpt:"customExcerpt",codeinjection_head:"codeinjectionHead",codeinjection_foot:"codeinjectionFoot",custom_template:"customTemplate",canonical_url:"canonicalURL",reading_time:"readingTime",og_image:"ogImage",og_title:"ogTitle",og_description:"ogDescription",twitter_image:"twitterImage",twitter_title:"twitterTitle",twitter_description:"twitterDescription",meta_title:"metaTitle",meta_description:"metaDescription",comment_id:"commentID"}}},225:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var n=o(4);o(16),o(9),o(104);function r(t,object){return Object.fromEntries(Object.entries(object).map((function(e){var o=Object(n.a)(e,2),r=o[0],c=o[1];return[t[r]||r,c]})))}},226:function(t,e,o){var content=o(229);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(37).default)("397b2124",content,!0,{sourceMap:!1})},228:function(t,e,o){"use strict";o(226)},229:function(t,e,o){(e=o(36)(!1)).push([t.i,'.blog-post-card[data-v-80148bd0]{background:var(--colors-background-a);color:#fff;overflow:hidden;position:relative;width:100%;border-radius:3px}.blog-post-card__info[data-v-80148bd0]{padding:20px}.blog-post-card__excerpt[data-v-80148bd0]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:100%;display:inline-block}.blog-post-card__image[data-v-80148bd0]{height:250px;width:100%;-o-object-fit:cover;object-fit:cover}.blog-post-card__date[data-v-80148bd0]{display:block}.blog-post-card__title[data-v-80148bd0]{display:block;font-size:1.2rem;font-weight:700;color:#fff;margin-bottom:8px}.blog-post-card__footer[data-v-80148bd0]{display:flex;justify-content:space-between;margin-top:20px}.blog-post-card__link[data-v-80148bd0]:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0}',""]),t.exports=e},230:function(t,e,o){"use strict";var n={name:"BlogPostCard",props:{post:{type:Object,required:!0},imageHeight:{type:String,default:void 0}},computed:{imageStyle:function(){return{height:this.imageHeight}}}},r=(o(228),o(8)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"blog-post-card"},[o("img",{staticClass:"blog-post-card__image",style:t.imageStyle,attrs:{alt:"Title Image from: "+t.post.title,src:t.post.image}}),t._v(" "),o("div",{staticClass:"blog-post-card__info"},[o("span",{staticClass:"blog-post-card__date"},[t._v(t._s(new Date(t.post.publishedAt).toLocaleDateString()))]),t._v(" "),o("span",{staticClass:"blog-post-card__title"},[t._v("\n      "+t._s(t.post.title)+"\n    ")]),t._v(" "),o("span",{staticClass:"blog-post-card__excerpt"},[t._v(t._s(t.post.excerpt))]),t._v(" "),o("div",{staticClass:"blog-post-card__footer"},[o("span",{staticClass:"blog-post-card__reading-time"},[o("strong",[t._v(t._s(Math.max(1,t.post.readingTime))+" minute"+t._s(1===Math.max(1,t.post.readingTime)?"":"s"))]),t._v("\n        reading time\n      ")]),t._v(" "),o("nuxt-link",{staticClass:"blog-post-card__link link",attrs:{to:"/blog/"+t.post.slug}},[t._v("\n        Read\n      ")])],1)])])}),[],!1,null,"80148bd0",null);e.a=component.exports},231:function(t,e,o){var content=o(245);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(37).default)("44a8b80c",content,!0,{sourceMap:!1})},244:function(t,e,o){"use strict";o(231)},245:function(t,e,o){(e=o(36)(!1)).push([t.i,".posts-page__posts[data-v-4b96fdd2]{margin-top:40px}.posts-page__posts .posts-page__post[data-v-4b96fdd2]{width:100%;margin-bottom:var(--gutter-size)}",""]),t.exports=e},286:function(t,e,o){"use strict";o.r(e);o(23),o(26),o(19);var n=o(3),r=o(103),c=o(224),l=o(225),d={name:"PostsPage",components:{BlogPostCard:o(230).a,NavigationBar:r.a},asyncData:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Array,t.next=3,c.a.posts.browse({include:"slug,title,feature_image,reading_time,published_at"});case 3:return t.t1=t.sent,t.t2=t.t0.from.call(t.t0,t.t1).map((function(t){return Object(l.a)(c.a.mappings.post,t)})),t.abrupt("return",{posts:t.t2});case 6:case"end":return t.stop()}}),t)})))()},data:function(){return{posts:[]}},head:function(){return{titleTemplate:"Blog - %s"}}},_=(o(244),o(8)),component=Object(_.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"posts-page"},[e("NavigationBar",{attrs:{title:"Blog"}}),this._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"heading--1"},[this._v("\n      Blog\n    ")]),this._v(" "),e("div",{staticClass:"posts-page__posts"},this._l(this.posts,(function(t){return e("BlogPostCard",{key:t.slug,staticClass:"posts-page__post",attrs:{post:t,"image-height":"50vh"}})})),1)])],1)}),[],!1,null,"4b96fdd2",null);e.default=component.exports}}]);