(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{213:function(t,r,n){var content=n(217);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("283f506a",content,!0,{sourceMap:!1})},214:function(t,r,n){"use strict";var e=n(92),o=n(140),l=n(215),d={name:"KNavigationBar",components:{CrypticHeadLogo:n.n(l).a},props:{backgroundAfterScroll:{type:Boolean,default:!1},title:{type:String,default:""}},data:function(){return{open:!1,scrollPosition:0}},computed:{scrolled:function(t){return t.scrollPosition>60},showBackground:function(t){return!t.backgroundAfterScroll||t.scrollPosition>0},classes:function(){var t=this.open,r=this.scrolled,n=this.showBackground;return Object(o.a)({open:t,scrolled:r,showBackground:n})},items:function(t){return t.$kiste.navigationItems},isNuxt:e.a},mounted:function(){var t=this,r=function(){t.scrollPosition=window.scrollY};window.addEventListener("scroll",r,{passive:!0}),this.$kiste.navigationBar=this,this.$on("hook:beforeDestroy",(function(){window.removeEventListener("scroll",r)})),r()},destroyed:function(){this.$kiste.navigationBar===this&&(this.$kiste.navigationBar=null)}},c=(n(216),n(12)),component=Object(c.a)(d,(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"k-navigation-bar",class:t.classes},[n("div",{staticClass:"k-navigation-bar__placeholder"}),t._v(" "),n("nav",{staticClass:"k-navigation-bar__container-0"},[n("div",{staticClass:"k-navigation-bar__toggle",on:{click:function(r){t.open=!t.open}}},[n("span"),t._v(" "),n("span"),t._v(" "),n("span")]),t._v(" "),n("div",{staticClass:"k-navigation-bar__container-1 content"},[n("CrypticHeadLogo",{staticClass:"k-navigation-bar__logo"}),t._v(" "),n("span",{staticClass:"k-navigation-bar__title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"k-navigation-bar__container-2"},[n("div",{staticClass:"k-navigation-bar__links"},[t._l(t.items,(function(r){return[r.to?n(t.isNuxt?"nuxt-link":"router-link",{key:r.label,tag:"component",attrs:{to:r.to},nativeOn:{"&click":function(r){t.open=!1}}},[t._v("\n              "+t._s(r.label)+"\n            ")]):n("a",{key:r.label,attrs:{href:r.href,rel:"noopener",target:"_blank"},on:{"&click":function(r){t.open=!1}}},[t._v("\n              "+t._s(r.label)+"\n            ")])]}))],2)])],1)])])}),[],!1,null,null,null);r.a=component.exports},215:function(t,r){t.exports={functional:!0,render(t,r){const{_c:n,_v:e,data:data,children:o=[]}=r,{class:l,staticClass:d,style:style,staticStyle:c,attrs:x={},...h}=data;return n("svg",{class:[l,d],style:[style,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"295.468",height:"375.408",viewBox:"0 0 78.176 99.327",version:"1.1",id:"svg5826"},x),...h},o.concat([n("defs",{attrs:{id:"defs5820"}},[n("linearGradient",{attrs:{id:"linear-gradient-33",x1:"304.88",y1:"157.16",x2:"328.14",y2:"157.16",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{offset:"0","stop-color":"#95c11f",id:"stop40"}}),n("stop",{attrs:{offset:".67","stop-color":"#3aaa35",id:"stop42"}}),n("stop",{attrs:{offset:"1","stop-color":"#008d36",id:"stop44"}})]),n("linearGradient",{attrs:{id:"linear-gradient-34",x1:"304.88",y1:"195.99",x2:"328.14",y2:"195.99","xlink:href":"#linear-gradient-33",gradientTransform:"translate(4.91 -140.38) scale(2.42372)"}}),n("linearGradient",{attrs:{id:"linear-gradient-35",x1:"293.14",y1:"171.38",x2:"305.8",y2:"171.38","xlink:href":"#linear-gradient-33"}}),n("linearGradient",{attrs:{id:"linear-gradient-36",x1:"30.59",y1:"131.66",x2:"73.1",y2:"131.66","xlink:href":"#linear-gradient-33"}}),n("linearGradient",{attrs:{id:"linear-gradient-37",x1:"0",y1:"145.15",x2:"32.71",y2:"145.15","xlink:href":"#linear-gradient-33"}}),n("linearGradient",{attrs:{id:"linear-gradient-38",x1:"0",y1:"173.45",x2:"9.97",y2:"173.45","xlink:href":"#linear-gradient-33"}}),n("linearGradient",{attrs:{id:"linear-gradient-39",x1:".009",y1:"200.94",x2:"27.62",y2:"200.94","xlink:href":"#linear-gradient-33"}}),n("linearGradient",{attrs:{id:"linear-gradient-40",x1:"55.83",y1:"207.29",x2:"84.07",y2:"207.29","xlink:href":"#linear-gradient-33"}}),n("linearGradient",{attrs:{id:"linear-gradient-41",x1:"23.99",y1:"217.67",x2:"65.67",y2:"217.67","xlink:href":"#linear-gradient-33"}}),n("linearGradient",{attrs:{id:"linear-gradient-42",x1:"61",y1:"145.11",x2:"84.19",y2:"145.11","xlink:href":"#linear-gradient-33"}}),n("linearGradient",{attrs:{id:"linear-gradient-43",x1:"26.59",y1:"155.7",x2:"65.68",y2:"155.7","xlink:href":"#linear-gradient-33"}}),n("linearGradient",{attrs:{id:"linear-gradient-44",x1:"16.88",y1:"172.97",x2:"73.9",y2:"172.97","xlink:href":"#linear-gradient-33"}}),n("linearGradient",{attrs:{id:"linear-gradient-45",x1:"14.39",y1:"192.89",x2:"42.52",y2:"192.89","xlink:href":"#linear-gradient-33"}}),n("linearGradient",{attrs:{id:"linear-gradient-46",x1:"45.51",y1:"194.63",x2:"79.12",y2:"194.63","xlink:href":"#linear-gradient-33"}}),n("linearGradient",{attrs:{id:"linear-gradient-47",x1:"99.77",y1:"167.96",x2:"118.38",y2:"167.96","xlink:href":"#linear-gradient-33",gradientTransform:"translate(4.91 -140.38) scale(2.42372)"}}),n("linearGradient",{attrs:{id:"linear-gradient-48",x1:"88.32",y1:"176.59",x2:"102.06",y2:"176.59","xlink:href":"#linear-gradient-33",gradientTransform:"translate(4.91 -140.38) scale(2.42372)"}}),n("linearGradient",{attrs:{id:"linear-gradient-49",x1:"274.53",y1:"185.76",x2:"288.01",y2:"185.76","xlink:href":"#linear-gradient-33"}}),n("linearGradient",{attrs:{id:"linear-gradient-50",x1:"274.12",y1:"158.58",x2:"288.41",y2:"158.58","xlink:href":"#linear-gradient-33"}}),n("linearGradient",{attrs:{id:"linear-gradient-51",x1:"226.52",y1:"166.74",x2:"269.94",y2:"166.74","xlink:href":"#linear-gradient-33",gradientTransform:"translate(4.91 -140.38) scale(2.42372)"}}),n("linearGradient",{attrs:{id:"linear-gradient-52",x1:"174.83",y1:"196.17",x2:"222.37",y2:"196.17","xlink:href":"#linear-gradient-33",gradientTransform:"translate(4.91 -140.38) scale(2.42372)"}}),n("linearGradient",{attrs:{id:"linear-gradient-53",x1:"122.56",y1:"196.26",x2:"171.21",y2:"196.26","xlink:href":"#linear-gradient-33",gradientTransform:"translate(4.91 -140.38) scale(2.42372)"}}),n("linearGradient",{attrs:{"xlink:href":"#linear-gradient-33",id:"linearGradient4994",gradientUnits:"userSpaceOnUse",x1:"304.88",y1:"157.16",x2:"328.14",y2:"157.16",gradientTransform:"translate(4.91 -140.38) scale(2.42372)"}}),n("linearGradient",{attrs:{id:"linear-gradient-38-7",x1:"0",y1:"173.45",x2:"9.97",y2:"173.45","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.91743 0 0 .91743 24.904 19.435)"}}),n("linearGradient",{attrs:{id:"linear-gradient-39-7",x1:".009",y1:"200.94",x2:"27.62",y2:"200.94","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.91743 0 0 .91743 24.904 19.435)"}}),n("linearGradient",{attrs:{id:"linear-gradient-40-9",x1:"55.83",y1:"207.29",x2:"84.07",y2:"207.29","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.91743 0 0 .91743 24.904 19.435)"}}),n("linearGradient",{attrs:{id:"linear-gradient-41-7",x1:"23.99",y1:"217.67",x2:"65.67",y2:"217.67","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.91743 0 0 .91743 24.904 19.435)"}}),n("linearGradient",{attrs:{id:"linear-gradient-46-3",x1:"45.51",y1:"194.63",x2:"79.12",y2:"194.63","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.91743 0 0 .91743 24.904 19.435)"}}),n("linearGradient",{attrs:{id:"linear-gradient-45-9",x1:"14.39",y1:"192.89",x2:"42.52",y2:"192.89","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.91743 0 0 .91743 24.904 19.435)"}}),n("linearGradient",{attrs:{id:"linear-gradient-44-6",x1:"16.88",y1:"172.97",x2:"73.9",y2:"172.97","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.91743 0 0 .91743 24.904 19.435)"}}),n("linearGradient",{attrs:{id:"linear-gradient-43-5",x1:"26.59",y1:"155.7",x2:"65.68",y2:"155.7","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.91743 0 0 .91743 24.904 19.435)"}}),n("linearGradient",{attrs:{id:"linear-gradient-42-4",x1:"61",y1:"145.11",x2:"84.19",y2:"145.11","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.91743 0 0 .91743 24.904 19.435)"}}),n("linearGradient",{attrs:{id:"linear-gradient-36-0",x1:"30.59",y1:"131.66",x2:"73.1",y2:"131.66","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.91743 0 0 .91743 24.904 19.435)"}}),n("linearGradient",{attrs:{id:"linear-gradient-37-7",x1:"0",y1:"145.15",x2:"32.71",y2:"145.15","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.91743 0 0 .91743 24.904 19.435)"}}),n("linearGradient",{attrs:{id:"linear-gradient-38-6",x1:"0",y1:"173.45",x2:"9.97",y2:"173.45","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.64128 0 0 .64128 449.803 294.751)"}}),n("linearGradient",{attrs:{id:"linear-gradient-39-0",x1:".009",y1:"200.94",x2:"27.62",y2:"200.94","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.64128 0 0 .64128 449.803 294.751)"}}),n("linearGradient",{attrs:{id:"linear-gradient-40-1",x1:"55.83",y1:"207.29",x2:"84.07",y2:"207.29","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.64128 0 0 .64128 449.803 294.751)"}}),n("linearGradient",{attrs:{id:"linear-gradient-41-1",x1:"23.99",y1:"217.67",x2:"65.67",y2:"217.67","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.64128 0 0 .64128 449.803 294.751)"}}),n("linearGradient",{attrs:{id:"linear-gradient-46-9",x1:"45.51",y1:"194.63",x2:"79.12",y2:"194.63","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.64128 0 0 .64128 449.803 294.751)"}}),n("linearGradient",{attrs:{id:"linear-gradient-45-4",x1:"14.39",y1:"192.89",x2:"42.52",y2:"192.89","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.64128 0 0 .64128 449.803 294.751)"}}),n("linearGradient",{attrs:{id:"linear-gradient-44-1",x1:"16.88",y1:"172.97",x2:"73.9",y2:"172.97","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.64128 0 0 .64128 449.803 294.751)"}}),n("linearGradient",{attrs:{id:"linear-gradient-43-3",x1:"26.59",y1:"155.7",x2:"65.68",y2:"155.7","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.64128 0 0 .64128 449.803 294.751)"}}),n("linearGradient",{attrs:{id:"linear-gradient-42-8",x1:"61",y1:"145.11",x2:"84.19",y2:"145.11","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.64128 0 0 .64128 449.803 294.751)"}}),n("linearGradient",{attrs:{id:"linear-gradient-36-8",x1:"30.59",y1:"131.66",x2:"73.1",y2:"131.66","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.64128 0 0 .64128 449.803 294.751)"}}),n("linearGradient",{attrs:{id:"linear-gradient-37-4",x1:"0",y1:"145.15",x2:"32.71",y2:"145.15","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.64128 0 0 .64128 449.803 294.751)"}})]),n("g",{attrs:{id:"layer1",transform:"translate(-24.408 -130.454)"}},[n("path",{attrs:{d:"M52.968 149.573c4.05-2.42 8.144-4.766 12.183-7.202 1.716-1.01 1.89-.918 3.496 0 4.125 2.433 7.96 4.693 12.22 7.22l11.1-4.23c-7.795-4.563-16.001-9.373-23.504-13.76-1.514-.918-1.651-.918-3.064 0-3.444 2.103-6.988 4.04-10.496 6.036z",id:"path970-5-5-2-2",fill:"url(#linear-gradient-36-0)",stroke:"#010101","stroke-width":".917","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"7.95","stroke-dasharray":"none"}}),n("path",{attrs:{d:"M34.078 167.545v-5.128c0-1.505 0-1.689 1.174-2.404 6.134-3.568 12.446-7.364 17.716-10.44l1.935-11.936-7.504 4.413c-7.452 4.458-13.94 8.134-20.587 12.156-1.606.917-1.835 1.376-1.835 3.091v5.954z",id:"path972-8-25-2-3",fill:"url(#linear-gradient-37-7)",stroke:"#010101","stroke-width":".917","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"7.95","stroke-dasharray":"none"}}),n("path",{attrs:{d:"M34.078 189.82v-22.275l-9.101-4.294-.073 30.606z",id:"path974-2-1-2-7",fill:"url(#linear-gradient-38-7)",stroke:"#010101","stroke-width":".917","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"7.95","stroke-dasharray":"none"}}),n("path",{attrs:{d:"M50.243 208.948a2754.741 2754.741 0 01-15.184-8.917c-1-.587-1.018-.715-1.018-1.835l.037-8.376-9.175 4.037-.036 9.32c0 1.47-.003 1.537 1.447 2.375 7.894 4.676 13.085 7.781 20.571 12.185z",id:"path976-7-6-2-4",fill:"url(#linear-gradient-39-7)",stroke:"#010101","stroke-width":".917","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"7.95","stroke-dasharray":"none"}}),n("path",{attrs:{d:"M85.128 218.824c5.337-3.19 10.696-6.346 16.06-9.49.723-.418.977-1.03.761-1.835-.51-1.942-1.059-3.89-1.56-5.817-.486-1.88-2.33-1.32-3.577-.587-6.862 4.191-14.473 8.6-20.688 12.257z",id:"path978-9-7-2-7",fill:"url(#linear-gradient-40-9)",stroke:"#010101","stroke-width":".917","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"7.95","stroke-dasharray":"none"}}),n("path",{attrs:{d:"M46.922 217.756c6.897 4.055 12.83 7.554 18.734 11.027 1.183.698 1.293.716 2.394.064 6.518-3.837 10.985-6.45 17.184-10.082l-9.034-5.458c-2.985 1.785-5.402 3.156-8.15 4.77-.72.416-1.457.473-2.192.064-5.202-3.07-10.409-6.13-15.615-9.193z",id:"path980-7-5-2-2",fill:"url(#linear-gradient-41-7)",stroke:"#010101","stroke-width":".917","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"7.95","stroke-dasharray":"none"}}),n("path",{attrs:{d:"M80.867 149.59c5.49 3.27 11.104 6.333 16.513 9.735 1.349.789 2.588.532 2.991-.918a1096.13 1096.13 0 001.578-5.789l.165-.587a.862.862 0 00-.486-.917c-3.237-1.89-6.448-3.822-9.66-5.752z",id:"path982-3-2-2-4",fill:"url(#linear-gradient-42-4)",stroke:"#010101","stroke-width":".917","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"7.95","stroke-dasharray":"none"}}),n("path",{attrs:{d:"M54.82 151.857l13.762-2.633 14.68 6.128 1.834 17.055-17.431 2.918-18.459-5.083z",id:"path986-5-0-2-2",fill:"url(#linear-gradient-43-5)",stroke:"#010101","stroke-width":".917","stroke-miterlimit":"7.95","stroke-dasharray":"none"}}),n("path",{attrs:{d:"M40.39 173.894l8.816-3.652 18.459 5.083 17.431-2.918 7.633 6.743-24.44 6.166-13.386-5.46z",id:"path988-0-7-2-0",fill:"url(#linear-gradient-44-6)",stroke:"#010101","stroke-width":".917","stroke-miterlimit":"7.95","stroke-dasharray":"none"}}),n("path",{attrs:{d:"M38.105 181.664l6.422-2.752 5.945 1.835v13.247l13.248 10.964.22 8.908-16.697-17.587z",id:"path990-2-6-2-7",fill:"url(#linear-gradient-45-9)",stroke:"#010101","stroke-width":".917","stroke-miterlimit":"7.95","stroke-dasharray":"none"}}),n("path",{attrs:{d:"M97.49 183.949l-12.788 14.155-18.046 15.303.917-7.761 13.936-9.826 6.422-11.871 4.11-1.377z",id:"path992-3-6-2-2",fill:"url(#linear-gradient-46-3)",stroke:"#010101","stroke-width":".917","stroke-miterlimit":"7.95","stroke-dasharray":"none"}}),n("path",{staticClass:"cls-15",attrs:{d:"M63.257 183.565c-.068.156-1.778 1.195-2.849 1.356a4.853 4.853 0 01-4.927-2.468 4.358 4.358 0 01-.376-2.284",id:"path996-9-8-2-9",fill:"#fff",stroke:"#010101","stroke-width":".917","stroke-miterlimit":"7.95","stroke-dasharray":"none"}}),n("path",{staticClass:"cls-15",attrs:{d:"M81.509 182.123c.044.682-1.18 2.245-2.165 3.046a6.67 6.67 0 01-5.505 1.303c-1.083-.268-2.582-.776-2.862-1.615",id:"path1004-8-7-2-8",fill:"#fff",stroke:"#010101","stroke-width":".917","stroke-miterlimit":"7.95","stroke-dasharray":"none"}})])]))}}},216:function(t,r,n){"use strict";n(213)},217:function(t,r,n){(r=n(41)(!1)).push([t.i,'.k-app{--x-navbar-height:100px}@media(max-width:1000px){.k-app{--x-navbar-height:80px}}.k-navigation-bar{height:var(--x-navbar-height);position:relative;z-index:100000}.k-navigation-bar__placeholder{height:var(--x-navbar-height);width:100%}.k-navigation-bar__container-0{height:var(--x-navbar-height);position:fixed;top:0;left:0;right:0;z-index:2;display:flex;align-items:center;justify-content:center;font-size:1.1rem;text-transform:uppercase;transition:background-color .12s linear;background-color:transparent}.k-navigation-bar.x-show-background .k-navigation-bar__container-0{background-color:var(--colors-background)}.k-navigation-bar.x-scrolled .k-navigation-bar__container-0 .k-navigation-bar__title{opacity:1;transform:translateY(0)}.k-navigation-bar__toggle{display:none}.k-navigation-bar__logo{height:70px;min-height:70px;width:46.3833px;min-width:46.3833px;margin-right:20px}.k-navigation-bar__title{font-size:1.5rem;font-weight:700;text-overflow:ellipsis;overflow:hidden;flex-shrink:0;max-width:calc(100% - 10px);transition:.2s ease;transition-property:opacity,transform;opacity:0;transform:translateY(10px)}@media(min-width:1001px){.k-navigation-bar__title{font-size:2rem}}.k-navigation-bar__container-1{max-width:100%;height:100%;overflow:hidden;display:flex;align-items:center;justify-content:space-between;padding:0 20px}.k-navigation-bar__container-2{width:100%}.k-navigation-bar__links{float:right}.k-navigation-bar__links a{display:inline-block;margin-left:40px;position:relative;text-decoration:none;color:var(--colors-background-c)}.k-navigation-bar__links a:after{content:"";position:absolute;top:30px;left:0;background-color:var(--colors-background-c);height:2px;width:100%;opacity:0;transition:opacity .2s linear}.k-navigation-bar__links a:hover:after{opacity:1}@media(max-width:1000px){.k-navigation-bar__toggle{display:block;position:relative;left:30px;z-index:2}.k-navigation-bar__toggle>span{display:block;background-color:var(--colors-background-c);width:30px;height:2px;transition:.2s linear;transition-property:opacity,transform}.k-navigation-bar__toggle>span:nth-child(2),.k-navigation-bar__toggle>span:nth-child(3){margin-top:8px}.k-navigation-bar__logo{min-height:50px;height:50px;width:55.1px;order:2;margin-right:0}.k-navigation-bar__container-1{padding-left:50px!important}.k-navigation-bar__container-2{pointer-events:none;background-color:var(--colors-background);position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100vh;display:flex;align-items:center;justify-content:center;padding-top:var(--navbar-height);opacity:0;transition:opacity .2s ease-out}.k-navigation-bar__links{float:none}.k-navigation-bar__links>a{display:block;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0 auto 20px;font-size:1.5rem;transform:translateX(-100%);opacity:0;transition:.4s ease-out;transition-property:opacity,transform}.k-navigation-bar__links>a:after{top:35px}.k-navigation-bar.x-open .k-navigation-bar__toggle>span:first-child{transform:translateY(10px) rotate(45deg)}.k-navigation-bar.x-open .k-navigation-bar__toggle>span:nth-child(2){opacity:0}.k-navigation-bar.x-open .k-navigation-bar__toggle>span:nth-child(3){transform:translateY(-10px) rotate(-45deg)}.k-navigation-bar.x-open .k-navigation-bar__container-2{pointer-events:auto;opacity:1}.k-navigation-bar.x-open .k-navigation-bar__links>a{transform:translateX(0);opacity:1}}',""]),t.exports=r},218:function(t,r,n){"use strict";n.d(r,"a",(function(){return e}));var e=new(n(220).a)({url:"https://ghost.cryptic-game.net",key:"6495bcf3e9a85556cb1e5519ab",version:"v3"});e.mappings={post:{feature_image:"image",created_at:"createdAt",updated_at:"updatedAt",published_at:"publishedAt",custom_excerpt:"customExcerpt",codeinjection_head:"codeinjectionHead",codeinjection_foot:"codeinjectionFoot",custom_template:"customTemplate",canonical_url:"canonicalURL",reading_time:"readingTime",og_image:"ogImage",og_title:"ogTitle",og_description:"ogDescription",twitter_image:"twitterImage",twitter_title:"twitterTitle",twitter_description:"twitterDescription",meta_title:"metaTitle",meta_description:"metaDescription",comment_id:"commentID"}}},219:function(t,r,n){"use strict";n.d(r,"a",(function(){return o}));var e=n(7);n(18),n(8),n(93);function o(t,object){return Object.fromEntries(Object.entries(object).map((function(r){var n=Object(e.a)(r,2),o=n[0],l=n[1];return[t[o]||o,l]})))}},221:function(t,r,n){var content=n(238);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("397b2124",content,!0,{sourceMap:!1})},236:function(t,r,n){"use strict";var e={name:"BlogPostCard",props:{post:{type:Object,required:!0},imageHeight:{type:String,default:void 0}},computed:{imageStyle:function(){return{height:this.imageHeight}}}},o=(n(237),n(12)),component=Object(o.a)(e,(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"blog-post-card"},[n("img",{staticClass:"blog-post-card__image",style:t.imageStyle,attrs:{alt:"Title Image from: "+t.post.title,src:t.post.image}}),t._v(" "),n("div",{staticClass:"blog-post-card__info"},[n("span",{staticClass:"blog-post-card__date"},[t._v(t._s(new Date(t.post.publishedAt).toLocaleDateString()))]),t._v(" "),n("span",{staticClass:"blog-post-card__title"},[t._v("\n      "+t._s(t.post.title)+"\n    ")]),t._v(" "),n("span",{staticClass:"blog-post-card__excerpt"},[t._v(t._s(t.post.excerpt))]),t._v(" "),n("div",{staticClass:"blog-post-card__footer"},[n("span",{staticClass:"blog-post-card__reading-time"},[n("strong",[t._v(t._s(Math.max(1,t.post.readingTime))+" minute"+t._s(1===Math.max(1,t.post.readingTime)?"":"s"))]),t._v("\n        reading time\n      ")]),t._v(" "),n("nuxt-link",{staticClass:"blog-post-card__link link",attrs:{to:"/blog/"+t.post.slug}},[t._v("\n        Read\n      ")])],1)])])}),[],!1,null,"80148bd0",null);r.a=component.exports},237:function(t,r,n){"use strict";n(221)},238:function(t,r,n){(r=n(41)(!1)).push([t.i,'.blog-post-card[data-v-80148bd0]{background:var(--colors-background-a);color:#fff;overflow:hidden;position:relative;width:100%;border-radius:3px}.blog-post-card__info[data-v-80148bd0]{padding:20px}.blog-post-card__excerpt[data-v-80148bd0]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:100%;display:inline-block}.blog-post-card__image[data-v-80148bd0]{height:250px;width:100%;-o-object-fit:cover;object-fit:cover}.blog-post-card__date[data-v-80148bd0]{display:block}.blog-post-card__title[data-v-80148bd0]{display:block;font-size:1.2rem;font-weight:700;color:#fff;margin-bottom:8px}.blog-post-card__footer[data-v-80148bd0]{display:flex;justify-content:space-between;margin-top:20px}.blog-post-card__link[data-v-80148bd0]:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0}',""]),t.exports=r}}]);