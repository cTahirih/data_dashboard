webpackJsonp([1],{"70J4":function(s,a){},NHnr:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=t("7+uW"),i=t("UlOv"),l=t("i2Ad"),n=t.n(l),r=t("U2qG"),o=t.n(r),d=[],c=[];n.a.data.map(function(s){return d.push(s.value)}),o.a.data.map(function(s){return c.push(s.value)});var u={labels:["2018/4/1","2018/4/2","2018/4/3","2018/4/4","2018/4/5","2018/4/6","2018/4/7","2018/4/8","2018/4/9","2018/4/10","2018/4/11","2018/4/12","2018/4/13","2018/4/14","2018/4/15","2018/4/16","2018/4/17","2018/4/18","2018/4/19","2018/4/20","2018/4/21","2018/4/22","2018/4/23","2018/4/24","2018/4/25","2018/4/26","2018/4/27","2018/4/28","2018/4/29","2018/4/30"],datasets:[{label:"Customers",fill:!1,backgroundColor:"#f25b8d",borderColor:"#f25b8d",pointBorderColor:"#f25b8d",pointHoverBackgroundColor:"#f25b8d",pointHoverBorderColor:"#f25b8d",pointRadius:3,pointHitRadius:10,lineTension:0,data:d,spanGaps:!1,yAxisID:"y-axis-1"},{label:"Sales",fill:!1,backgroundColor:"#26a69a",borderColor:"#26a69a",pointBorderColor:"#26a69a",pointHoverBackgroundColor:"#26a69a",pointHoverBorderColor:"#26a69a",pointRadius:3,pointHitRadius:10,lineTension:0,data:c,spanGaps:!1,yAxisID:"y-axis-2"}]},v={extends:i.b,mounted:function(){this.renderChart(u,{maintainAspectRatio:!1,legend:{position:"bottom"},hoverMode:"index",stacked:!1,scales:{yAxes:[{type:"linear",display:!0,position:"left",id:"y-axis-1"},{type:"linear",display:!0,position:"right",id:"y-axis-2",gridLines:{drawOnChartArea:!1}}]}})}},m={labels:["China","India","United States","Indonesia","Brazil","Pakistan"],datasets:[{label:"Population",data:[13793021,1935911,325791,80739,2073391,24924861],backgroundColor:["rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)","rgba(255, 99, 132, 0.6)"]}],options:{rotation:1*Math.PI,circumference:1*Math.PI}},j={name:"App",components:{LineChart:v,DonChart:{extends:i.a,mounted:function(){this.renderChart(m,{legend:{position:"bottom"},hoverMode:"index",stacked:!1})}}},data:function(){return{name:"Rosa",showAsideMenu:!1,asideFilters:[{id:"first_filter",value:"Planner Board"},{id:"second_filter",value:"Summary Board"},{id:"third_filter",value:"Internal Board"}],overview:[{id:1,title:"TOTAL CUSTOMERS",date:"Last 7 days",iconClass:"far fa-user px-2",total:35},{id:2,title:"NEW QUOTES",date:"Last 5 days",iconClass:"far fa-user px-2",total:23},{id:3,title:"WORK ORDERS",date:"Last 2 days",iconClass:"far fa-user px-2",total:13},{id:4,title:"NEW INVOICES",date:"Last 7 hours",iconClass:"far fa-user px-2",total:78},{id:5,title:"OPEN CASES",date:"Last 7 days",iconClass:"far fa-user px-2",total:12},{id:6,title:"NEW CASES",date:"Last 1 day",iconClass:"far fa-user px-2",total:10}],dataUpdates:""}}},f={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"dashboard layout"},[t("div",{staticClass:"header__nav row"},[s._m(0),t("div",{staticClass:"header__nav--left column"},[t("div",{staticClass:"row"},[t("p",{staticClass:"header__nav--text name my-0 column small-8"},[t("i",{staticClass:"far fa-user px-2"}),s._v("Hola "+s._s(s.name))]),s._m(1),t("p",{staticClass:"header__nav--icon my-0 column small-2 text-right"},[t("i",{staticClass:"fas fa-bars px-2",class:[1==s.showAsideMenu?"is-hide":""],on:{click:function(a){s.showAsideMenu=!0}}}),t("i",{staticClass:"far fa-window-close",class:[1==s.showAsideMenu?"":"is-hide"],on:{click:function(a){s.showAsideMenu=!1}}})])])])]),t("transition",{attrs:{name:"fade"}},[t("aside",{directives:[{name:"show",rawName:"v-show",value:s.showAsideMenu,expression:"showAsideMenu"}],staticClass:"aside__slider active"},[t("form",{staticClass:"aside__form active hide-for-large"},[t("input",{staticClass:"aside__form--input",attrs:{placeholder:"Buscar"}}),t("i",{staticClass:"fas fa-search px-2"})]),t("div",{staticClass:"aside__slider--content"},[t("span",{staticClass:"aside__slider-boxIcon"},[t("i",{staticClass:"fas fa-star aside__box--icon"})]),t("span",[s._v("        Planner Board")])]),t("p",{staticClass:"px-5"},[s._v("Filter by Board:")]),s._l(s.asideFilters,function(a){return t("div",{staticClass:"aside__slider--content"},[t("input",{attrs:{type:"checkbox",id:a.id}}),t("label",{attrs:{for:a.id}},[s._v(s._s(a.value)+" ")])])})],2)]),t("div",{staticClass:"main column"},[s._m(2),t("div",{staticClass:"row main__header"},s._l(s.overview,function(a){return t("div",{staticClass:"main__header--box row small-6 medium-2"},[t("div",{staticClass:"icon"},[t("i",{class:""+a.iconClass})]),t("div",{staticClass:"info"},[t("p",{staticClass:"main__header--title my-0"},[s._v(s._s(a.title))]),t("span",{staticClass:"main__header--span"},[s._v(s._s(a.date))]),t("p",{staticClass:"main__header--textLarge text-center my-0"},[s._v(s._s(a.total))])])])})),s._m(3),t("div",{staticClass:"row"},[t("div",{staticClass:"column small-12 medium-4"},[t("div",{staticClass:"main__card"},[t("DonChart")],1)]),t("div",{staticClass:"column small-12 medium-8"},[t("div",{staticClass:"main__card"},[t("LineChart")],1)])])])],1)},staticRenderFns:[function(){var s=this.$createElement,a=this._self._c||s;return a("div",{staticClass:"header__nav--right column show-for-large"},[a("div",{staticClass:"row"},[a("p",{staticClass:"header__nav--rightText header__nav--text medium-2 my-0 px-2 text-right"},[this._v("Board")]),a("form",{staticClass:"header__nav--form medium-10"},[a("input",{staticClass:"header__nav--input",attrs:{placeholder:"Buscar reportes"}}),a("i",{staticClass:"fas fa-search px-2"})])])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",{staticClass:"header__nav--icon my-0 column small-2 text-right"},[a("i",{staticClass:"far fa-bell"})])},function(){var s=this.$createElement,a=this._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"column"},[a("div",{staticClass:"aside__slider--content"},[a("span",{staticClass:"aside__slider-boxIcon"},[a("i",{staticClass:"fas fa-star aside__box--icon"})]),a("span",[this._v("        Planner Board - Summary")])])])])},function(){var s=this.$createElement,a=this._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"column small-12 medium-4"},[a("div",{staticClass:"main__card text-center"},[a("i",{staticClass:"fas fa-3x fa-chart-line"}),a("p",[this._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.")])])]),a("div",{staticClass:"column small-12 medium-4"},[a("div",{staticClass:"main__card text-center"},[a("i",{staticClass:"fas fa-3x fa-dollar-sign"}),a("p",[this._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.")])])]),a("div",{staticClass:"column small-12 medium-4"},[a("div",{staticClass:"main__card text-center"},[a("i",{staticClass:"fas fa-3x fa-chart-line"}),a("p",[this._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.       ")])])])])}]};var h=t("VU/8")(j,f,!1,function(s){t("70J4")},null,null).exports;e.a.config.productionTip=!1,new e.a({el:"#app",components:{App:h},template:"<App/>"})},U2qG:function(s,a){s.exports={data:[{value:53},{value:583},{value:1113},{value:1643},{value:2173},{value:2703},{value:3233},{value:3763},{value:4},{value:4823},{value:5353},{value:5883},{value:6413},{value:6943},{value:7473},{value:8003},{value:8533},{value:9063},{value:9593},{value:1123},{value:1053},{value:11183},{value:11713},{value:243},{value:12773}]}},i2Ad:function(s,a){s.exports={data:[{value:5},{value:55},{value:105},{value:155},{value:205},{value:255},{value:3},{value:355},{value:405},{value:455},{value:50},{value:555},{value:605},{value:65},{value:205},{value:755},{value:805},{value:855},{value:905},{value:955},{value:1005},{value:1055},{value:1105},{value:1155},{value:1205}]}},uslO:function(s,a,t){var e={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function i(s){return t(l(s))}function l(s){var a=e[s];if(!(a+1))throw new Error("Cannot find module '"+s+"'.");return a}i.keys=function(){return Object.keys(e)},i.resolve=l,s.exports=i,i.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.5f2e7b14eab07aeb7ed9.js.map