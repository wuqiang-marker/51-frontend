(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a968d8f"],{"621f":function(t,e,a){"use strict";var i=a("ebee"),s=a.n(i);s.a},"80d2":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"member-page"},[a("div",{staticClass:"left-container"},[a("div",{staticClass:"left1-container"},[a("Title",{attrs:{text:"会员等级分布（所有会员）"}}),a("div",{staticStyle:{height:"95%",width:"100%"},attrs:{id:"left1"}})],1),a("div",{staticClass:"left2-container"},[a("Title",{attrs:{text:"新会员年龄分布"}}),a("div",{staticStyle:{height:"80%",width:"100%"},attrs:{id:"left2"}})],1),a("div",{staticClass:"left3-container"},[a("Title",{attrs:{text:"新会员注册量TOP10省份"}}),a("div",{staticStyle:{height:"85%",width:"100%"},attrs:{id:"left3"}})],1)]),a("div",{staticClass:"center-container"},[t._m(0),a("div",{staticClass:"center2-container"},[a("Title",{attrs:{text:"会员注册趋势"}}),a("div",{staticStyle:{height:"90%",width:"100%"},attrs:{id:"center2"}})],1),a("div",{staticClass:"center3-container"},[a("Title",{attrs:{text:"会员价值分析"}}),a("div",{staticStyle:{height:"90%",width:"100%"},attrs:{id:"center3"}})],1)]),a("div",{staticClass:"right-container"},[a("div",{staticClass:"right1-container"},[a("Title",{attrs:{text:"新会员注册量top10门店"}}),a("div",{staticStyle:{height:"85%",width:"100%"},attrs:{id:"right1"}})],1),a("div",{staticClass:"right2-container"},[a("Title",{attrs:{text:"最受新会员喜欢top10产品"}}),a("table",{staticClass:"sales-top",attrs:{id:"sales-top"}},[t._m(1),a("tbody",t._l(t.top,(function(e,i){return a("tr",{key:i,class:{one:i%2==0,two:i%2!=0}},[a("td",{staticClass:"td-top",class:{onepink:0==i,twopurple:1==i,threeblue:2==i}},[t._v(t._s(e.rank))]),a("td",{staticClass:"td-top-center"},[t._v(t._s(e.product))]),a("td",{staticClass:"td-top"},[t._v(t._s(e.sales))])])})),0)])],1)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"center1-container"},[a("div",{staticClass:"center1-image"}),a("div",{staticClass:"tm"},[a("div",{staticClass:"dnumber"},[a("span",{staticClass:"number"},[t._v("34,898")])]),a("div",{staticClass:"dlabel"},[a("span",{staticClass:"label"},[t._v("天猫")])])]),a("div",{staticClass:"jd"},[a("div",{staticClass:"dnumber"},[a("span",{staticClass:"number"},[t._v("16,340")])]),a("div",{staticClass:"dlabel"},[a("span",{staticClass:"label"},[t._v("京东")])])]),a("div",{staticClass:"xin"},[a("div",{staticClass:"dnumber"},[a("span",{staticClass:"number"},[t._v("128,890")])]),a("div",{staticClass:"dlabel"},[a("span",{staticClass:"label"},[t._v("新会员总数")])])]),a("div",{staticClass:"qt"},[a("div",{staticClass:"dnumber"},[a("span",{staticClass:"number"},[t._v("16,238")])]),a("div",{staticClass:"dlabel"},[a("span",{staticClass:"label"},[t._v("其他")])])]),a("div",{staticClass:"wx"},[a("div",{staticClass:"dnumber"},[a("span",{staticClass:"number"},[t._v("35,097")])]),a("div",{staticClass:"dlabel"},[a("span",{staticClass:"label"},[t._v("微信")])])]),a("div",{staticClass:"zfb"},[a("div",{staticClass:"dnumber"},[a("span",{staticClass:"number"},[t._v("18,674")])]),a("div",{staticClass:"dlabel"},[a("span",{staticClass:"label"},[t._v("支付宝")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"tr-color"},[a("th",{staticClass:"th-top-left"},[t._v("排名")]),a("th",{staticClass:"th-top"},[t._v("产品")]),a("th",{staticClass:"th-top-right"},[t._v("销售额（万元）")])])])}],o=(a("1bea"),a("e08f")),r={name:"memberPage",components:{Title:o["a"]},data:function(){return{top:[{rank:"1",product:"IF.自然关爱优颜防晒乳液",sales:"2081"},{rank:"2",product:"悦诗风吟油菜花蜜护手霜",sales:"1981"},{rank:"3",product:"白牡丹焕研晶水分面膜",sales:"1900"},{rank:"4",product:"悦诗风吟 生机指甲油",sales:"1600"},{rank:"5",product:"悦诗风吟控油矿物质散粉",sales:"1555"},{rank:"6",product:"冀州熔岩海水菁研喷雾",sales:"1345"},{rank:"7",product:"灵动肌微博高光",sales:"1236"},{rank:"8",product:"火箭级补水小绿瓶",sales:"1166"},{rank:"9",product:"痘肌修护啫喱",sales:"1098"},{rank:"10",product:"钻石闪光眼影",sales:"999"}]}},mounted:function(){this.diawleft1(),this.diawleft2(),this.diawleft3(),this.diawcenter2(),this.diawcenter3(),this.diawright1()},methods:{diawleft1:function(){var t=this.$echarts.init(document.getElementById("left1"));t.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"10%",right:"10%",bottom:"20%",containLabel:!0},yAxis:[{type:"category",data:["vip","vip","welcome"],axisTick:{show:!1},axisLine:{lineStyle:{color:"#FFFFFF",opacity:.2}},axisLabel:{show:!0,textStyle:{color:"#0E8BFF",fontSize:"12"}}}],xAxis:[{type:"value",axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!0,lineStyle:{color:["#FFFFFF"],width:1,type:"solid",opacity:.2}},axisLabel:{show:!0,textStyle:{color:"#CCCCCC",fontSize:"12"}}}],series:[{name:"人数",type:"bar",barWidth:"25%",data:[255,260,360],itemStyle:{barBorderRadius:[40,40,40,40],color:new this.$echarts.graphic.LinearGradient(0,0,1,1,[{offset:0,color:"#269FB8"},{offset:1,color:"#47DDF5"}])},label:{show:!0,formatter:"{c}",position:"right",color:"#fff"}}]})},diawleft2:function(){var t=this.$echarts.init(document.getElementById("left2"));t.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{left:"center",top:"bottom",data:["20以下","20-30","30-40","40以上"],textStyle:{fontSize:8,color:"#FFFFFF"},itemWidth:6,itemHeight:6},series:[{name:"人数",type:"pie",radius:[30,60],center:["50%","40%"],roseType:"radius",label:{show:!1},emphasis:{label:{show:!0}},data:[{value:360,name:"20以下",itemStyle:{color:new this.$echarts.graphic.LinearGradient(0,0,1,1,[{offset:0,color:"#226FE3"},{offset:1,color:"#2CB1FD"}])}},{value:310,name:"20-30",itemStyle:{color:new this.$echarts.graphic.LinearGradient(0,0,1,1,[{offset:0,color:"#751D8D"},{offset:1,color:"#8B1D89"}])}},{value:235,name:"30-40",itemStyle:{color:new this.$echarts.graphic.LinearGradient(0,0,1,1,[{offset:0,color:"#9900FF"},{offset:1,color:"#D200FF"}])}},{value:274,name:"40以上",itemStyle:{color:new this.$echarts.graphic.LinearGradient(0,0,1,1,[{offset:0,color:"#7049E0"},{offset:1,color:"#4F4CDC"}])}}],itemStyle:{normal:{label:{show:!0,formatter:"{c}",fontSize:8,color:"#91CBFD"},labelLine:{show:!0}}}}]})},diawleft3:function(){var t=this.$echarts.init(document.getElementById("left3"));t.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"7%",right:"7%",bottom:"5%",containLabel:!0},xAxis:[{type:"category",data:["上海","北京","深圳","广东","江西","辽宁","浙江","湖南","吉林","湖北"],axisTick:{show:!1},axisLine:{lineStyle:{color:"#FFFFFF",opacity:.2}},axisLabel:{show:!0,textStyle:{color:"#0E8BFF",fontSize:"10"}}}],yAxis:[{type:"value",axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!0,lineStyle:{color:["#FFFFFF"],width:1,type:"solid",opacity:.2}},axisLabel:{show:!0,textStyle:{color:"#CCCCCC",fontSize:"10"}}}],series:[{name:"人数",type:"bar",barWidth:"25%",data:[{value:100,itemStyle:{barBorderRadius:[40,40,1,1],color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00A2FF"},{offset:1,color:"#1166FF"}])}},{value:200,itemStyle:{barBorderRadius:[40,40,1,1],color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#33DDF8"},{offset:1,color:"#47DDF5"}])}},{value:90,itemStyle:{barBorderRadius:[40,40,1,1],color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00A2FF"},{offset:1,color:"#1166FF"}])}},{value:230,itemStyle:{barBorderRadius:[40,40,1,1],color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#33DDF8"},{offset:1,color:"#47DDF5"}])}},{value:45,itemStyle:{barBorderRadius:[40,40,1,1],color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00A2FF"},{offset:1,color:"#1166FF"}])}},{value:210,itemStyle:{barBorderRadius:[40,40,1,1],color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#33DDF8"},{offset:1,color:"#47DDF5"}])}},{value:300,itemStyle:{barBorderRadius:[40,40,1,1],color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00A2FF"},{offset:1,color:"#1166FF"}])}},{value:150,itemStyle:{barBorderRadius:[40,40,1,1],color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#33DDF8"},{offset:1,color:"#47DDF5"}])}},{value:45,itemStyle:{barBorderRadius:[40,40,1,1],color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00A2FF"},{offset:1,color:"#1166FF"}])}},{value:340,itemStyle:{barBorderRadius:[40,40,1,1],color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#33DDF8"},{offset:1,color:"#47DDF5"}])}}],label:{show:!1,formatter:"{c}",position:"top"}}]})},diawcenter1:function(){},diawcenter2:function(){var t=this.$echarts.init(document.getElementById("center2"));t.setOption({tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},grid:[{left:"10%",right:"10%",bottom:"1%",top:"20%",containLabel:!0}],xAxis:[{type:"category",boundaryGap:!1,axisTick:{show:!1},data:["1","2","3","4","5","6","7","8","9"],axisLine:{lineStyle:{color:"#07288C",opacity:.4}},axisLabel:{show:!0,textStyle:{color:"#B0C8FF",fontSize:"10"}}}],yAxis:[{type:"value",axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!0,lineStyle:{color:["#FFFFFF"],width:1,type:"solid",opacity:.2}},axisLabel:{show:!0,textStyle:{color:"#B0C8FF",fontSize:"10"}}}],series:[{name:"注册人数",type:"line",areaStyle:{normal:{color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#E23AF5"},{offset:1,color:"transparent"}])}},data:[120,130,300,430,500,450,200,100,260],smooth:!0,symbol:"none",itemStyle:{normal:{color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#9837DD"},{offset:1,color:"#E23AF5"}])}}}]})},diawcenter3:function(){var t=this.$echarts.init(document.getElementById("center3"));t.setOption({tooltip:{trigger:"item",formatter:"{c}%"},angleAxis:{axisLine:!1,axisTick:{show:!1},minorTick:!1,axisLabel:{show:!1},splitLine:{show:!1},max:50},radiusAxis:{type:"category",data:["高价值用户","较高价值用户","中等价值用户","中低等价值用户","低价值用户"],z:10,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,interval:0,fontSize:12,textStyle:{color:"#54CDFC"},formatter:"{value}"}},polar:{},series:[{type:"bar",barWidth:"14px",barCategoryGap:"40%",showBackground:!0,backgroundStyle:{color:"#fff",opacity:.05,barBorderRadius:[10,0,20,20],borderWidth:1},coordinateSystem:"polar",label:{show:!0},data:[{value:30,name:"高价值用户",itemStyle:{barBorderRadius:[10,10,40,40],color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#24C8FF"},{offset:1,color:"#248FFF"}])},label:{show:!0}},{value:17,name:"较高价值用户",itemStyle:{barBorderRadius:[100,200,40,40],color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#226FE3"},{offset:1,color:"#2CB1FD"}])}},{value:40,name:"中等价值用户",itemStyle:{barBorderRadius:[100,200,40,40],color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#7049E0"},{offset:1,color:"#4F4CDC"}])}},{value:5,name:"中低等价值用户",itemStyle:{barBorderRadius:[100,200,40,40],color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#E03AF5"},{offset:1,color:"#9C00FF"}])}},{value:8,name:"低价值用户",itemStyle:{barBorderRadius:[100,200,40,40],color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#801D88"},{offset:1,color:"#891D88"}])}}]}]})},diawright1:function(){var t=this.$echarts.init(document.getElementById("right1")),e={position:[10,2,0,0],fontSize:15,color:"#FFFFFF"};t.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:20,right:50,top:15,bottom:0,show:!1},xAxis:{type:"value",axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},position:"top"},yAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},data:["乌鲁木齐友好时尚购物城昊元上品店","微信小程序","京东商城","上海万达店","北京1号店","大连万达店 ","IF SZ Haiya Mega Square (深圳海雅缤纷广场南山店)","IF XA Century Ginwa -Saigao (西安世纪金花赛高店）","IF URQ Youhao Fashion (乌鲁木齐友好时尚购物城昊元上品店)","IF XJ Taibai(新疆太百)"],offset:0,zlevel:30,axisLabel:{inside:!0,margin:10,color:"#fff",verticalAlign:"middle",fontSize:10}},series:[{name:"人数",type:"bar",stack:"总量",barWidth:"70%",barCategoryGap:"30%",showBackground:!0,backgroundStyle:{color:"transparent",barBorderRadius:[20,20,20,20],borderColor:"#2CA5F4",borderWidth:1},itemStyle:{barBorderRadius:20,color:new this.$echarts.graphic.LinearGradient(0,1,1,0,[{offset:0,color:"#245DEF"},{offset:1,color:"#32B2E1"}])},label:{show:!0,formatter:"{c}",fontSize:12,offset:[330,0]},data:[{value:12,label:e},{value:18,label:e},{value:30,label:e},{value:32,label:e},{value:40,label:e},{value:60,label:e},{value:65,label:e},{value:67,label:e},{value:89,label:e},{value:90,label:e}]}]})}}},l=r,c=(a("621f"),a("2877")),n=Object(c["a"])(l,i,s,!1,null,null,null);e["default"]=n.exports},ebee:function(t,e,a){}}]);