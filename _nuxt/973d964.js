(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{103:function(t,r,e){"use strict";var n=e(145),o=e.n(n),l=e(126),d={name:"LanguageSwitcher",components:{GlobeIcon:e.n(l).a},data:function(){return{active:!1,languages:[{id:"en",name:"English"},{id:"de",name:"Deutsch"}]}},methods:{toggle:function(){this.active=!this.active}}},c=(e(182),e(8)),f=Object(c.a)(d,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("GlobeIcon",{staticClass:"globe",attrs:{width:"2.2rem",height:"2.2rem"},on:{click:t.toggle}}),t._v(" "),t.active?e("div",{staticClass:"languages"},t._l(t.languages,(function(r){return e("nuxt-link",{key:r.id,staticClass:"languageItem",attrs:{to:t.switchLocalePath(r.id)}},[t._v("\n      "+t._s(r.name)+"\n    ")])})),1):t._e()],1)}),[],!1,null,null,null).exports,h=e(74),x={name:"NavigationBar",components:{CrypticHeadLogo:o.a,LanguageSwitcher:f},props:{backgroundAfterScroll:{type:Boolean,default:!1},title:{type:String,default:""}},data:function(){return{open:!1,scrollPosition:0}},computed:{scrolled:function(t){return t.scrollPosition>60},showBackground:function(t){return!t.backgroundAfterScroll||t.scrollPosition>0},items:function(){return[{label:"home",to:"/"},{label:"play",href:"https://play.cryptic-game.net"},{label:"blog",to:"/blog"},{label:"faq",to:"/faq"},{label:"roadmap",to:"/roadmap"},{label:"contribute",to:"/contribute"},{label:"team",to:"/team"}]},isNuxt:h.a},mounted:function(){var t=this,r=function(){t.scrollPosition=window.scrollY};window.addEventListener("scroll",r,{passive:!0}),this.$on("hook:beforeDestroy",(function(){window.removeEventListener("scroll",r)})),r()}},m=(e(184),Object(c.a)(x,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"navigation-bar",class:{"x-scrolled":t.scrolled,"x-show-background":t.showBackground,"x-open":t.open}},[e("div",{staticClass:"navigation-bar__placeholder"}),t._v(" "),e("nav",{staticClass:"navigation-bar__container-0"},[e("div",{staticClass:"navigation-bar__toggle",on:{click:function(r){t.open=!t.open}}},[e("span"),t._v(" "),e("span"),t._v(" "),e("span")]),t._v(" "),e("div",{staticClass:"navigation-bar__container-1 content"},[e("div",{staticClass:"navigation-bar__logos"},[e("CrypticHeadLogo",{staticClass:"navigation-bar__logo"}),t._v(" "),e("LanguageSwitcher",{staticClass:"navigation-bar__language"})],1),t._v(" "),e("span",{staticClass:"navigation-bar__title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"navigation-bar__container-2"},[e("div",{staticClass:"navigation-bar__links"},[t._l(t.items,(function(r){return[r.to?e(t.isNuxt?"nuxt-link":"router-link",{key:r.label,tag:"component",attrs:{to:t.localePath(r.to)},nativeOn:{"&click":function(r){t.open=!1}}},[t._v("\n              "+t._s(t.$t("navbar."+r.label))+"\n            ")]):e("a",{key:r.label,attrs:{href:r.href,rel:"noopener",target:"_blank"},on:{"&click":function(r){t.open=!1}}},[t._v("\n              "+t._s(t.$t("navbar."+r.label))+"\n            ")])]}))],2)])])])])}),[],!1,null,null,null));r.a=m.exports},126:function(t,r){t.exports={functional:!0,render(t,r){const{_c:e,_v:n,data:data,children:o=[]}=r,{class:l,staticClass:d,style:style,staticStyle:c,attrs:f={},...h}=data;return e("svg",{class:[l,d],style:[style,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 33.834 33.867",height:"128",width:"128"},f),...h},o.concat([e("defs",[e("linearGradient",{attrs:{id:"b"}},[e("stop",{attrs:{offset:"0","stop-color":"#71d8c8"}}),e("stop",{attrs:{offset:"1","stop-color":"#37abc8"}})]),e("linearGradient",{attrs:{id:"a"}},[e("stop",{attrs:{offset:"0"}}),e("stop",{attrs:{offset:"1","stop-color":"#b3b3b3","stop-opacity":"0"}})])]),e("path",{attrs:{transform:"matrix(.04207 -.024 .0236 .04281 -1.454 -16.248)",d:"M209.651 558.588a427.657 427.657 0 010 .237",stroke:"red","stroke-width":"1.323"}}),e("path",{attrs:{d:"M586.606 459.766a427.657 427.657 0 010 .237",stroke:"red","stroke-width":"1.323",transform:"matrix(.04823 0 0 .04909 -1.454 -16.248)"}}),e("g",{attrs:{transform:"matrix(.06473 0 0 .06588 16.34 16.313)",fill:"#37abc8","stroke-width":"5"}},[e("ellipse",{attrs:{ry:"172.1",rx:"48.501",transform:"rotate(1.03)"}}),e("ellipse",{attrs:{ry:"172.1",rx:"150.82",transform:"rotate(6.389)"}}),e("ellipse",{attrs:{ry:"172.1",rx:"164.791",transform:"rotate(-11.718)"}}),e("ellipse",{attrs:{ry:"172.1",rx:"82.23",transform:"rotate(-1.906)"}}),e("g",[e("ellipse",{attrs:{ry:"4.022",rx:"65.86",cy:"158.703"}}),e("ellipse",{attrs:{ry:"7.43",rx:"121.693",cy:"121.466"}}),e("ellipse",{attrs:{ry:"9.708",rx:"159",cy:"65.737"}}),e("ellipse",{attrs:{ry:"10.507",rx:"172.1"}}),e("ellipse",{attrs:{ry:"9.708",rx:"159",cy:"-65.737"}}),e("ellipse",{attrs:{ry:"7.43",rx:"121.693",cy:"-121.466"}}),e("ellipse",{attrs:{ry:"4.022",rx:"65.86",cy:"-158.703"}})]),e("circle",{attrs:{r:"172.1"}})]),e("g",{attrs:{transform:"matrix(.06381 0 0 .06494 16.34 16.313)",stroke:"#afdde9","stroke-width":"5",fill:"none"}},[e("ellipse",{attrs:{transform:"rotate(1.03)",rx:"48.501",ry:"172.1"}}),e("ellipse",{attrs:{transform:"rotate(6.389)",rx:"150.82",ry:"172.1"}}),e("ellipse",{attrs:{transform:"rotate(-11.718)",rx:"164.791",ry:"172.1"}}),e("ellipse",{attrs:{transform:"rotate(-1.906)",rx:"82.23",ry:"172.1"}}),e("g",[e("ellipse",{attrs:{cy:"158.703",rx:"65.86",ry:"4.022"}}),e("ellipse",{attrs:{cy:"121.466",rx:"121.693",ry:"7.43"}}),e("ellipse",{attrs:{cy:"65.737",rx:"159",ry:"9.708"}}),e("ellipse",{attrs:{rx:"172.1",ry:"10.507"}}),e("ellipse",{attrs:{cy:"-65.737",rx:"159",ry:"9.708"}}),e("ellipse",{attrs:{cy:"-121.466",rx:"121.693",ry:"7.43"}}),e("ellipse",{attrs:{cy:"-158.703",rx:"65.86",ry:"4.022"}})]),e("circle",{attrs:{r:"172.1"}})])]))}}},127:function(t,r,e){var content=e(183);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(37).default)("5807c098",content,!0,{sourceMap:!1})},128:function(t,r,e){var content=e(185);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(37).default)("12bea1c2",content,!0,{sourceMap:!1})},129:function(t,r,e){var content=e(187);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(37).default)("182577b2",content,!0,{sourceMap:!1})},131:function(t,r,e){var content=e(193);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(37).default)("7ec73ac2",content,!0,{sourceMap:!1})},132:function(t,r,e){var content=e(195);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(37).default)("c798b3f8",content,!0,{sourceMap:!1})},142:function(t,r,e){"use strict";var n={name:"Footer",data:function(){return{items:[{label:"legal",href:"https://the-morpheus.de/#signup"},{label:"privacy",href:"https://the-morpheus.de/faq-en.html"},{label:"serverStatus",to:"/status"}]}},computed:{isNuxt:e(74).a}},o=(e(194),e(8)),component=Object(o.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("footer",{staticClass:"content footer"},[t._l(t.items,(function(r){return[r.to?e(t.isNuxt?"nuxt-link":"router-link",{key:r.label,tag:"component",staticClass:"footer__link",attrs:{to:t.localePath(r.to)}},[t._v("\n      "+t._s(t.$t("footer."+r.label))+"\n    ")]):r.href?e("a",{key:r.label,staticClass:"footer__link",attrs:{href:r.href}},[t._v("\n      "+t._s(t.$t("footer."+r.label))+"\n    ")]):t._e()]}))],2)}),[],!1,null,"f20d78ac",null);r.a=component.exports},145:function(t,r){t.exports={functional:!0,render(t,r){const{_c:e,_v:n,data:data,children:o=[]}=r,{class:l,staticClass:d,style:style,staticStyle:c,attrs:f={},...h}=data;return e("svg",{class:[l,d],style:[style,c],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"295.468",height:"375.408",viewBox:"0 0 78.176 99.327",version:"1.1",id:"svg5826"},f),...h},o.concat([e("defs",{attrs:{id:"defs5820"}},[e("linearGradient",{attrs:{id:"linear-gradient-33",x1:"304.88",y1:"157.16",x2:"328.14",y2:"157.16",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{offset:"0","stop-color":"#95c11f",id:"stop40"}}),e("stop",{attrs:{offset:".67","stop-color":"#3aaa35",id:"stop42"}}),e("stop",{attrs:{offset:"1","stop-color":"#008d36",id:"stop44"}})]),e("linearGradient",{attrs:{id:"linear-gradient-34",x1:"304.88",y1:"195.99",x2:"328.14",y2:"195.99","xlink:href":"#linear-gradient-33",gradientTransform:"translate(4.91 -140.38) scale(2.42372)"}}),e("linearGradient",{attrs:{id:"linear-gradient-35",x1:"293.14",y1:"171.38",x2:"305.8",y2:"171.38","xlink:href":"#linear-gradient-33"}}),e("linearGradient",{attrs:{id:"linear-gradient-36",x1:"30.59",y1:"131.66",x2:"73.1",y2:"131.66","xlink:href":"#linear-gradient-33"}}),e("linearGradient",{attrs:{id:"linear-gradient-37",x1:"0",y1:"145.15",x2:"32.71",y2:"145.15","xlink:href":"#linear-gradient-33"}}),e("linearGradient",{attrs:{id:"linear-gradient-38",x1:"0",y1:"173.45",x2:"9.97",y2:"173.45","xlink:href":"#linear-gradient-33"}}),e("linearGradient",{attrs:{id:"linear-gradient-39",x1:".009",y1:"200.94",x2:"27.62",y2:"200.94","xlink:href":"#linear-gradient-33"}}),e("linearGradient",{attrs:{id:"linear-gradient-40",x1:"55.83",y1:"207.29",x2:"84.07",y2:"207.29","xlink:href":"#linear-gradient-33"}}),e("linearGradient",{attrs:{id:"linear-gradient-41",x1:"23.99",y1:"217.67",x2:"65.67",y2:"217.67","xlink:href":"#linear-gradient-33"}}),e("linearGradient",{attrs:{id:"linear-gradient-42",x1:"61",y1:"145.11",x2:"84.19",y2:"145.11","xlink:href":"#linear-gradient-33"}}),e("linearGradient",{attrs:{id:"linear-gradient-43",x1:"26.59",y1:"155.7",x2:"65.68",y2:"155.7","xlink:href":"#linear-gradient-33"}}),e("linearGradient",{attrs:{id:"linear-gradient-44",x1:"16.88",y1:"172.97",x2:"73.9",y2:"172.97","xlink:href":"#linear-gradient-33"}}),e("linearGradient",{attrs:{id:"linear-gradient-45",x1:"14.39",y1:"192.89",x2:"42.52",y2:"192.89","xlink:href":"#linear-gradient-33"}}),e("linearGradient",{attrs:{id:"linear-gradient-46",x1:"45.51",y1:"194.63",x2:"79.12",y2:"194.63","xlink:href":"#linear-gradient-33"}}),e("linearGradient",{attrs:{id:"linear-gradient-47",x1:"99.77",y1:"167.96",x2:"118.38",y2:"167.96","xlink:href":"#linear-gradient-33",gradientTransform:"translate(4.91 -140.38) scale(2.42372)"}}),e("linearGradient",{attrs:{id:"linear-gradient-48",x1:"88.32",y1:"176.59",x2:"102.06",y2:"176.59","xlink:href":"#linear-gradient-33",gradientTransform:"translate(4.91 -140.38) scale(2.42372)"}}),e("linearGradient",{attrs:{id:"linear-gradient-49",x1:"274.53",y1:"185.76",x2:"288.01",y2:"185.76","xlink:href":"#linear-gradient-33"}}),e("linearGradient",{attrs:{id:"linear-gradient-50",x1:"274.12",y1:"158.58",x2:"288.41",y2:"158.58","xlink:href":"#linear-gradient-33"}}),e("linearGradient",{attrs:{id:"linear-gradient-51",x1:"226.52",y1:"166.74",x2:"269.94",y2:"166.74","xlink:href":"#linear-gradient-33",gradientTransform:"translate(4.91 -140.38) scale(2.42372)"}}),e("linearGradient",{attrs:{id:"linear-gradient-52",x1:"174.83",y1:"196.17",x2:"222.37",y2:"196.17","xlink:href":"#linear-gradient-33",gradientTransform:"translate(4.91 -140.38) scale(2.42372)"}}),e("linearGradient",{attrs:{id:"linear-gradient-53",x1:"122.56",y1:"196.26",x2:"171.21",y2:"196.26","xlink:href":"#linear-gradient-33",gradientTransform:"translate(4.91 -140.38) scale(2.42372)"}}),e("linearGradient",{attrs:{"xlink:href":"#linear-gradient-33",id:"linearGradient4994",gradientUnits:"userSpaceOnUse",x1:"304.88",y1:"157.16",x2:"328.14",y2:"157.16",gradientTransform:"translate(4.91 -140.38) scale(2.42372)"}}),e("linearGradient",{attrs:{id:"linear-gradient-38-7",x1:"0",y1:"173.45",x2:"9.97",y2:"173.45","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.91743 0 0 .91743 24.904 19.435)"}}),e("linearGradient",{attrs:{id:"linear-gradient-39-7",x1:".009",y1:"200.94",x2:"27.62",y2:"200.94","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.91743 0 0 .91743 24.904 19.435)"}}),e("linearGradient",{attrs:{id:"linear-gradient-40-9",x1:"55.83",y1:"207.29",x2:"84.07",y2:"207.29","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.91743 0 0 .91743 24.904 19.435)"}}),e("linearGradient",{attrs:{id:"linear-gradient-41-7",x1:"23.99",y1:"217.67",x2:"65.67",y2:"217.67","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.91743 0 0 .91743 24.904 19.435)"}}),e("linearGradient",{attrs:{id:"linear-gradient-46-3",x1:"45.51",y1:"194.63",x2:"79.12",y2:"194.63","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.91743 0 0 .91743 24.904 19.435)"}}),e("linearGradient",{attrs:{id:"linear-gradient-45-9",x1:"14.39",y1:"192.89",x2:"42.52",y2:"192.89","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.91743 0 0 .91743 24.904 19.435)"}}),e("linearGradient",{attrs:{id:"linear-gradient-44-6",x1:"16.88",y1:"172.97",x2:"73.9",y2:"172.97","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.91743 0 0 .91743 24.904 19.435)"}}),e("linearGradient",{attrs:{id:"linear-gradient-43-5",x1:"26.59",y1:"155.7",x2:"65.68",y2:"155.7","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.91743 0 0 .91743 24.904 19.435)"}}),e("linearGradient",{attrs:{id:"linear-gradient-42-4",x1:"61",y1:"145.11",x2:"84.19",y2:"145.11","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.91743 0 0 .91743 24.904 19.435)"}}),e("linearGradient",{attrs:{id:"linear-gradient-36-0",x1:"30.59",y1:"131.66",x2:"73.1",y2:"131.66","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.91743 0 0 .91743 24.904 19.435)"}}),e("linearGradient",{attrs:{id:"linear-gradient-37-7",x1:"0",y1:"145.15",x2:"32.71",y2:"145.15","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.91743 0 0 .91743 24.904 19.435)"}}),e("linearGradient",{attrs:{id:"linear-gradient-38-6",x1:"0",y1:"173.45",x2:"9.97",y2:"173.45","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.64128 0 0 .64128 449.803 294.751)"}}),e("linearGradient",{attrs:{id:"linear-gradient-39-0",x1:".009",y1:"200.94",x2:"27.62",y2:"200.94","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.64128 0 0 .64128 449.803 294.751)"}}),e("linearGradient",{attrs:{id:"linear-gradient-40-1",x1:"55.83",y1:"207.29",x2:"84.07",y2:"207.29","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.64128 0 0 .64128 449.803 294.751)"}}),e("linearGradient",{attrs:{id:"linear-gradient-41-1",x1:"23.99",y1:"217.67",x2:"65.67",y2:"217.67","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.64128 0 0 .64128 449.803 294.751)"}}),e("linearGradient",{attrs:{id:"linear-gradient-46-9",x1:"45.51",y1:"194.63",x2:"79.12",y2:"194.63","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.64128 0 0 .64128 449.803 294.751)"}}),e("linearGradient",{attrs:{id:"linear-gradient-45-4",x1:"14.39",y1:"192.89",x2:"42.52",y2:"192.89","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.64128 0 0 .64128 449.803 294.751)"}}),e("linearGradient",{attrs:{id:"linear-gradient-44-1",x1:"16.88",y1:"172.97",x2:"73.9",y2:"172.97","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.64128 0 0 .64128 449.803 294.751)"}}),e("linearGradient",{attrs:{id:"linear-gradient-43-3",x1:"26.59",y1:"155.7",x2:"65.68",y2:"155.7","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.64128 0 0 .64128 449.803 294.751)"}}),e("linearGradient",{attrs:{id:"linear-gradient-42-8",x1:"61",y1:"145.11",x2:"84.19",y2:"145.11","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.64128 0 0 .64128 449.803 294.751)"}}),e("linearGradient",{attrs:{id:"linear-gradient-36-8",x1:"30.59",y1:"131.66",x2:"73.1",y2:"131.66","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.64128 0 0 .64128 449.803 294.751)"}}),e("linearGradient",{attrs:{id:"linear-gradient-37-4",x1:"0",y1:"145.15",x2:"32.71",y2:"145.15","xlink:href":"#linear-gradient-33",gradientTransform:"matrix(.64128 0 0 .64128 449.803 294.751)"}})]),e("g",{attrs:{id:"layer1",transform:"translate(-24.408 -130.454)"}},[e("path",{attrs:{d:"M52.968 149.573c4.05-2.42 8.144-4.766 12.183-7.202 1.716-1.01 1.89-.918 3.496 0 4.125 2.433 7.96 4.693 12.22 7.22l11.1-4.23c-7.795-4.563-16.001-9.373-23.504-13.76-1.514-.918-1.651-.918-3.064 0-3.444 2.103-6.988 4.04-10.496 6.036z",id:"path970-5-5-2-2",fill:"url(#linear-gradient-36-0)",stroke:"#010101","stroke-width":".917","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"7.95","stroke-dasharray":"none"}}),e("path",{attrs:{d:"M34.078 167.545v-5.128c0-1.505 0-1.689 1.174-2.404 6.134-3.568 12.446-7.364 17.716-10.44l1.935-11.936-7.504 4.413c-7.452 4.458-13.94 8.134-20.587 12.156-1.606.917-1.835 1.376-1.835 3.091v5.954z",id:"path972-8-25-2-3",fill:"url(#linear-gradient-37-7)",stroke:"#010101","stroke-width":".917","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"7.95","stroke-dasharray":"none"}}),e("path",{attrs:{d:"M34.078 189.82v-22.275l-9.101-4.294-.073 30.606z",id:"path974-2-1-2-7",fill:"url(#linear-gradient-38-7)",stroke:"#010101","stroke-width":".917","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"7.95","stroke-dasharray":"none"}}),e("path",{attrs:{d:"M50.243 208.948a2754.741 2754.741 0 01-15.184-8.917c-1-.587-1.018-.715-1.018-1.835l.037-8.376-9.175 4.037-.036 9.32c0 1.47-.003 1.537 1.447 2.375 7.894 4.676 13.085 7.781 20.571 12.185z",id:"path976-7-6-2-4",fill:"url(#linear-gradient-39-7)",stroke:"#010101","stroke-width":".917","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"7.95","stroke-dasharray":"none"}}),e("path",{attrs:{d:"M85.128 218.824c5.337-3.19 10.696-6.346 16.06-9.49.723-.418.977-1.03.761-1.835-.51-1.942-1.059-3.89-1.56-5.817-.486-1.88-2.33-1.32-3.577-.587-6.862 4.191-14.473 8.6-20.688 12.257z",id:"path978-9-7-2-7",fill:"url(#linear-gradient-40-9)",stroke:"#010101","stroke-width":".917","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"7.95","stroke-dasharray":"none"}}),e("path",{attrs:{d:"M46.922 217.756c6.897 4.055 12.83 7.554 18.734 11.027 1.183.698 1.293.716 2.394.064 6.518-3.837 10.985-6.45 17.184-10.082l-9.034-5.458c-2.985 1.785-5.402 3.156-8.15 4.77-.72.416-1.457.473-2.192.064-5.202-3.07-10.409-6.13-15.615-9.193z",id:"path980-7-5-2-2",fill:"url(#linear-gradient-41-7)",stroke:"#010101","stroke-width":".917","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"7.95","stroke-dasharray":"none"}}),e("path",{attrs:{d:"M80.867 149.59c5.49 3.27 11.104 6.333 16.513 9.735 1.349.789 2.588.532 2.991-.918a1096.13 1096.13 0 001.578-5.789l.165-.587a.862.862 0 00-.486-.917c-3.237-1.89-6.448-3.822-9.66-5.752z",id:"path982-3-2-2-4",fill:"url(#linear-gradient-42-4)",stroke:"#010101","stroke-width":".917","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"7.95","stroke-dasharray":"none"}}),e("path",{attrs:{d:"M54.82 151.857l13.762-2.633 14.68 6.128 1.834 17.055-17.431 2.918-18.459-5.083z",id:"path986-5-0-2-2",fill:"url(#linear-gradient-43-5)",stroke:"#010101","stroke-width":".917","stroke-miterlimit":"7.95","stroke-dasharray":"none"}}),e("path",{attrs:{d:"M40.39 173.894l8.816-3.652 18.459 5.083 17.431-2.918 7.633 6.743-24.44 6.166-13.386-5.46z",id:"path988-0-7-2-0",fill:"url(#linear-gradient-44-6)",stroke:"#010101","stroke-width":".917","stroke-miterlimit":"7.95","stroke-dasharray":"none"}}),e("path",{attrs:{d:"M38.105 181.664l6.422-2.752 5.945 1.835v13.247l13.248 10.964.22 8.908-16.697-17.587z",id:"path990-2-6-2-7",fill:"url(#linear-gradient-45-9)",stroke:"#010101","stroke-width":".917","stroke-miterlimit":"7.95","stroke-dasharray":"none"}}),e("path",{attrs:{d:"M97.49 183.949l-12.788 14.155-18.046 15.303.917-7.761 13.936-9.826 6.422-11.871 4.11-1.377z",id:"path992-3-6-2-2",fill:"url(#linear-gradient-46-3)",stroke:"#010101","stroke-width":".917","stroke-miterlimit":"7.95","stroke-dasharray":"none"}}),e("path",{staticClass:"cls-15",attrs:{d:"M63.257 183.565c-.068.156-1.778 1.195-2.849 1.356a4.853 4.853 0 01-4.927-2.468 4.358 4.358 0 01-.376-2.284",id:"path996-9-8-2-9",fill:"#fff",stroke:"#010101","stroke-width":".917","stroke-miterlimit":"7.95","stroke-dasharray":"none"}}),e("path",{staticClass:"cls-15",attrs:{d:"M81.509 182.123c.044.682-1.18 2.245-2.165 3.046a6.67 6.67 0 01-5.505 1.303c-1.083-.268-2.582-.776-2.862-1.615",id:"path1004-8-7-2-8",fill:"#fff",stroke:"#010101","stroke-width":".917","stroke-miterlimit":"7.95","stroke-dasharray":"none"}})])]))}}},149:function(t,r,e){"use strict";var n=e(75),o=e(142),l={components:{App:n.a,Footer:o.a}},d=e(8),component=Object(d.a)(l,(function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"default-layout fill-screen"},[r("App",[r("nuxt"),this._v(" "),r("Footer")],1)],1)}),[],!1,null,"77e1b71c",null);r.a=component.exports},150:function(t,r,e){"use strict";var n={components:{App:e(75).a}},o=e(8),component=Object(o.a)(n,(function(){var t=this.$createElement,r=this._self._c||t;return r("App",[r("nuxt")],1)}),[],!1,null,"5d7af4b8",null);r.a=component.exports},153:function(t,r,e){t.exports=e(154)},182:function(t,r,e){"use strict";e(127)},183:function(t,r,e){(r=e(36)(!1)).push([t.i,".languages{position:fixed;margin-top:10px;display:flex;flex-direction:column;border-width:1px;border-style:solid;border-radius:5px}.languageItem{padding:5px;border-top:1px solid #fff;color:var(--colors-background-c);text-decoration:none}.languageItem:hover{text-decoration:underline}.globe:hover{border-bottom:1px solid #fff;cursor:pointer}",""]),t.exports=r},184:function(t,r,e){"use strict";e(128)},185:function(t,r,e){(r=e(36)(!1)).push([t.i,'.app{--x-navbar-height:100px}@media(max-width:1000px){.app{--x-navbar-height:80px}}.navigation-bar{height:var(--x-navbar-height);position:relative;z-index:100000}.navigation-bar__placeholder{height:var(--x-navbar-height);width:100%}.navigation-bar__container-0{height:var(--x-navbar-height);position:fixed;top:0;left:0;right:0;z-index:2;display:flex;align-items:center;justify-content:center;font-size:1.1rem;text-transform:uppercase;transition:background-color .12s linear;background-color:transparent}.navigation-bar.x-show-background .navigation-bar__container-0{background-color:var(--colors-background)}.navigation-bar.x-scrolled .navigation-bar__container-0 .navigation-bar__title{opacity:1;transform:translateY(0)}.navigation-bar__toggle{display:none}.navigation-bar__logos{margin-right:0;display:flex;align-items:center}.navigation-bar__logo{height:70px;min-height:70px;width:46.3833px;min-width:46.3833px;margin-right:20px}.navigation-bar__title{font-size:1.5rem;font-weight:700;text-overflow:ellipsis;overflow:hidden;flex-shrink:0;max-width:calc(100% - 10px);transition:.2s ease;transition-property:opacity,transform;opacity:0;transform:translateY(10px)}@media(min-width:1001px){.navigation-bar__title{font-size:2rem}}.navigation-bar__container-1{max-width:100%;height:100%;overflow:hidden;display:flex;align-items:center;justify-content:space-between;padding:0 20px}.navigation-bar__container-2{width:100%}.navigation-bar__links{float:right}.navigation-bar__links a{display:inline-block;margin:5px 0 5px 30px;position:relative;text-decoration:none;color:var(--colors-background-c)}.navigation-bar__links a:after{content:"";position:absolute;top:30px;left:0;background-color:var(--colors-background-c);height:2px;width:100%;opacity:0;transition:opacity .2s linear}.navigation-bar__links a:hover:after{opacity:1}@media(max-width:1000px){.navigation-bar__toggle{display:block;position:relative;left:30px;z-index:2}.navigation-bar__toggle>span{display:block;background-color:var(--colors-background-c);width:30px;height:2px;transition:.2s linear;transition-property:opacity,transform}.navigation-bar__toggle>span:nth-child(2),.navigation-bar__toggle>span:nth-child(3){margin-top:8px}.navigation-bar__logos{margin-right:0;order:2;display:flex;align-items:center}.navigation-bar__logo{min-height:50px;height:50px;width:55.1px;margin-right:0;order:1}.navigation-bar__language{order:0;margin-right:10px}.navigation-bar__container-1{padding-left:50px!important}.navigation-bar__container-2{pointer-events:none;background-color:var(--colors-background);position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100vh;display:flex;align-items:center;justify-content:center;padding-top:var(--navbar-height);opacity:0;transition:opacity .2s ease-out}.navigation-bar__links{float:none}.navigation-bar__links>a{display:block;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0 auto 20px;font-size:1.5rem;transform:translateX(-100%);opacity:0;transition:.4s ease-out;transition-property:opacity,transform}.navigation-bar__links>a:after{top:35px}.navigation-bar.x-open .navigation-bar__toggle>span:first-child{transform:translateY(10px) rotate(45deg)}.navigation-bar.x-open .navigation-bar__toggle>span:nth-child(2){opacity:0}.navigation-bar.x-open .navigation-bar__toggle>span:nth-child(3){transform:translateY(-10px) rotate(-45deg)}.navigation-bar.x-open .navigation-bar__container-2{pointer-events:auto;opacity:1}.navigation-bar.x-open .navigation-bar__links>a{transform:translateX(0);opacity:1}}',""]),t.exports=r},186:function(t,r,e){"use strict";e(129)},187:function(t,r,e){(r=e(36)(!1)).push([t.i,"main.not-found-page[data-v-db314e48]{margin-bottom:5rem}",""]),t.exports=r},190:function(t,r,e){var content=e(191);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(37).default)("73ed3b1f",content,!0,{sourceMap:!1})},191:function(t,r,e){(r=e(36)(!1)).push([t.i,'body{font-family:"Open Sans",sans-serif}',""]),t.exports=r},192:function(t,r,e){"use strict";e(131)},193:function(t,r,e){(r=e(36)(!1)).push([t.i,".formatted a,.link,a.formatted{color:var(--colors-link);text-decoration:none;transition:opacity .1s linear;opacity:1}.formatted a:hover,.link:hover,a.formatted:hover{opacity:.8}.formatted h1,.formatted h2,.formatted h3,.formatted h4,.formatted h5,.formatted h6,.heading--1,.heading--2,.heading--3,.heading--4,.heading--5,.heading--6,h1.formatted,h2.formatted,h3.formatted,h4.formatted,h5.formatted,h6.formatted{margin-top:1rem;margin-bottom:1rem;font-weight:700;display:block}.formatted h1,.heading--1,h1.formatted{font-size:3.8rem}@media(max-width:800px){.formatted h1,.heading--1,h1.formatted{font-size:2.8rem}}.formatted h2,.heading--2,h2.formatted{font-size:3rem}@media(max-width:800px){.formatted h2,.heading--2,h2.formatted{font-size:2.5rem}}.formatted h3,.heading--3,h3.formatted{font-size:2.6rem}@media(max-width:800px){.formatted h3,.heading--3,h3.formatted{font-size:2.2rem}}.formatted h4,.heading--4,h4.formatted{font-size:2.2rem}@media(max-width:800px){.formatted h4,.heading--4,h4.formatted{font-size:2rem}}.formatted h5,.heading--5,h5.formatted{font-size:1.8rem}.formatted h6,.heading--6,h6.formatted{font-size:1.4rem}.formatted p,.formatted ul,.paragraph,p.formatted,ul.formatted{margin:20px 0}.formatted p li,.formatted ul li,.paragraph li,p.formatted li,ul.formatted li{margin-left:20px}.content{max-width:calc(100vw - var(--content-padding)*2);width:var(--content-width);padding:0 var(--content-padding);margin:0 auto}.flex-with-gutter{display:flex;flex-direction:row}.flex-with-gutter>:not(:last-child){margin-right:var(--gutter-size)}@media(max-width:800px){.flex-with-gutter{flex-direction:column}.flex-with-gutter>:not(:last-child){margin-right:0;margin-bottom:calc(var(--gutter-size)/2)}}.fill-screen{max-width:100vw;min-height:100vh}.center-content{display:flex;justify-content:center;align-items:center}*,:after,:before{box-sizing:border-box;margin:0;padding:0}.app,body,html{z-index:0;font-size:16px}.app,body,html{max-width:100vw;min-height:100vh}.app{--colors-background-c:#fff;--colors-background-a:#1d1c1c;--colors-background:#000;--colors-discord-c:#fff;--colors-discord-a:#6a7fca;--colors-discord:#7289da;--colors-blue-c:#000;--colors-blue-a:#3695d8;--colors-blue:#39a8f3;--colors-green-c:#000;--colors-green-a:#2ab662;--colors-green:#2ecc71;--colors-link-c:#000;--colors-link-a:#3695d8;--colors-link:#39a8f3;--content-width:1000px;--content-padding:20px;--gutter-size:40px;background:var(--colors-background);color:var(--colors-background-c);overflow:auto;position:relative}.app ::-moz-selection{background-color:var(--colors-background-a)}.app ::selection{background-color:var(--colors-background-a)}",""]),t.exports=r},194:function(t,r,e){"use strict";e(132)},195:function(t,r,e){(r=e(36)(!1)).push([t.i,".footer[data-v-f20d78ac]{margin-bottom:40px;position:-webkit-sticky;position:sticky;top:100vh;left:0;right:0;display:flex;flex-direction:row;justify-content:center;align-items:center}@media(max-width:800px){.footer[data-v-f20d78ac]{flex-direction:column}}.footer__link[data-v-f20d78ac]{text-decoration:none;flex-shrink:0;margin:10px;opacity:.6;color:var(--colors-background-c);transition:.12s linear;transition-property:opacity,color}.footer__link[data-v-f20d78ac]:hover{color:var(--colors-link);opacity:1}",""]),t.exports=r},35:function(t,r,e){"use strict";var n={name:"NotFound",components:{NavigationBar:e(103).a},head:function(){return{titleTemplate:"Not Found - %s"}}},o=(e(186),e(8)),component=Object(o.a)(n,(function(){var t=this.$createElement,r=this._self._c||t;return r("main",{staticClass:"not-found-page"},[r("NavigationBar",{attrs:{title:"Not found"}}),this._v(" "),this._m(0)],1)}),[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"content formatted"},[r("h1",[this._v("Not found")]),this._v(" "),r("p",{staticClass:"heading--5"},[this._v("\n      The page you requested could not be found.\n    ")])])}],!1,null,"db314e48",null);r.a=component.exports},74:function(t,r,e){"use strict";function n(t){return void 0!==t.$nuxt}e.d(r,"a",(function(){return n}))},75:function(t,r,e){"use strict";var n={name:"App"},o=(e(192),e(8)),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"app"},[this._t("default")],2)}),[],!1,null,null,null);r.a=component.exports}},[[153,11,2,12]]]);