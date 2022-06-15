(function(t){function e(e){for(var o,u,p=e[0],a=e[1],l=e[2],s=0,d=[];s<p.length;s++)u=p[s],Object.prototype.hasOwnProperty.call(i,u)&&i[u]&&d.push(i[u][0]),i[u]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);c&&c(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,p=1;p<n.length;p++){var a=n[p];0!==i[a]&&(o=!1)}o&&(r.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},i={app:0},r=[];function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/vue-drag-group/";var p=window["webpackJsonp"]=window["webpackJsonp"]||[],a=p.push.bind(p);p.push=e,p=p.slice();for(var l=0;l<p.length;l++)e(p[l]);var c=a;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2808:function(t,e,n){},"2e93":function(t,e,n){"use strict";n("f38e")},"56d7":function(t,e,n){"use strict";n.r(e);n("10cb"),n("450d");var o=n("f3ad"),i=n.n(o),r=(n("a7cc"),n("df33")),u=n.n(r),p=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("b0c0"),n("2b0e")),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("vue-drag-group",{ref:"dragGroup",attrs:{list:t.list,direction:"vertical",gap:10,w:1e3,h:1e3,classArr:["drag-group"]},on:{updateList:t.updateList,clickItem:t.clickItem}})],1)},l=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-drag-group",class:t.classArr,style:{"flex-direction":"horizon"===t.direction?"row":"column",gap:t.gap+"px",width:t.w+"px",height:t.h+"px"}},[t._l(t.groupList,(function(e,o){return n("div",{key:t.getKey(e),staticClass:"app-item",class:{"app-group":e.group},style:{top:e.top+"px",left:e.left+"px"},attrs:{title:e.group?e.group_name:e.app.name,id:t.getKey(e)},on:{mousedown:function(n){return n.stopPropagation(),t.onMouseDown(n,e,o)},mouseup:function(n){return t.onMouseUp(n,e,o)}}},[e.group?t._e():n("app-icon",{attrs:{app:e.app}}),e.group?n("div",{staticClass:"img-box-group"},t._l(e.children,(function(t){return n("div",{key:t.id,staticClass:"img-box-item"},[n("app-icon",{attrs:{width:20,height:20,app:t,borderRadius:4,font:{size:12}}})],1)})),0):t._e(),n("div",{staticClass:"app-name"},[t._v(" "+t._s(e.group?e.group_name:e.app.name)+" ")])],1)})),n("group-dialog",{attrs:{appGroup:t.appGroup,show:t.showAppGroupDialog},on:{"update:show":function(e){t.showAppGroupDialog=e},clickItem:t.clickItem,updateAppGroup:t.updateAppGroup}})],2)},s=[],d=n("c7eb"),g=n("1da1"),h=(n("a9e3"),n("d81d"),n("caad"),n("2532"),n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-icon"},[n("div",{staticClass:"img-box",style:{width:t.width+"px",height:t.height+"px","border-radius":t.borderRadius+"px"}},[t.getIcon(t.app)?n("img",{attrs:{width:"100%",height:"100%",src:t.getIcon(t.app),alt:"",draggable:"false"}}):n("div",{staticClass:"app-word-item",style:{width:t.width+"px",height:t.height+"px","line-height":t.height+"px"}},[n("div",{staticClass:"word",style:{"font-size":t.font.size+"px","font-weight":t.font.weight}},[t._v(t._s(t.getFirstName(t.app.name)))])])])])}),m=[],f=(n("ac1f"),n("1276"),n("00b4"),{name:"AppIcon",props:{app:{type:Object,default:function(){}},width:{type:Number,default:64},height:{type:Number,default:64},borderRadius:{type:Number,default:16},font:{type:Object,default:function(){return{size:36,weight:400}}}},data:function(){return{}},methods:{getIcon:function(t){var e=t.icon;return e},getFirstName:function(t){if(t){var e=t.split("");return/^[0-9A-Za-z]/.test(e[0]+e[1])?e[0]+e[1]:e[0]}}}}),v=f,w=(n("c66f"),n("2877")),y=Object(w["a"])(v,h,m,!1,null,"723e96cd",null),b=y.exports,A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-group-dialog"},[o("el-dialog",{attrs:{title:"",visible:t.show,width:"470px","destroy-on-close":!0,"before-close":t.cancel},on:{"update:visible":function(e){t.show=e}}},[o("div",{staticClass:"app-group"},[o("div",{staticClass:"app-group-name",on:{mouseenter:t.mouseEnter,mouseleave:t.mouseLeave}},[o("el-input",{ref:"groupNameInput",on:{change:function(e){return t.changeGroupName(t.appGroup)},focus:t.onFocus,blur:t.onBlur},model:{value:t.appGroup.group_name,callback:function(e){t.$set(t.appGroup,"group_name",e)},expression:"appGroup.group_name"}}),t.showEdit?o("div",{staticClass:"app-group-name-edit",on:{click:function(e){return e.stopPropagation(),t.groupNameFocus.apply(null,arguments)}}},[o("img",{attrs:{width:"18px",height:"18px",src:n("627d"),alt:""}})]):t._e()],1),o("div",{staticClass:"app-group-content"},[t._t("default",(function(){return t._l(t.appGroup.children,(function(e,n){return o("div",{key:e.id,staticClass:"app-item",attrs:{title:e.name,id:e.id,draggable:""},on:{click:function(n){return t.clickItem(e)},dragstart:function(o){return t.onDragStart(e,n)}}},[o("app-icon",{attrs:{app:e}}),o("div",{staticClass:"app-name"},[t._v(" "+t._s(e.name)+" ")])],1)}))}))],2)])])],1)},x=[],_={name:"GroupDialog",components:{AppIcon:b},props:["appGroup","show"],data:function(){return{canDrop:!1,dragIndex:null,dragItem:null,showEdit:!1,isFocus:!1}},methods:{cancel:function(){this.$emit("update:show",!1)},clickItem:function(t){this.$emit("clickItem",t)},groupNameFocus:function(){this.showEdit=!1,this.$refs["groupNameInput"].focus()},mouseEnter:function(){this.isFocus?this.showEdit=!1:this.showEdit=!0},mouseLeave:function(){this.showEdit=!1},onFocus:function(){this.showEdit=!1,this.isFocus=!0},onBlur:function(){this.isFocus=!1},updateAppGroup:function(t,e,n,o){this.$emit("updateAppGroup",t,e,n,o)},onDragStart:function(t,e){this.dragIndex=e,this.dragItem=t;var n=this,o=document.querySelector(".app-group-content").getBoundingClientRect();function i(t){var e=t||window.event,n=document.documentElement.scrollLeft||document.body.scrollLeft,o=document.documentElement.scrollTop||document.body.scrollTop,i=e.pageX||e.clientX+n,r=e.pageY||e.clientY+o;return{x:i,y:r}}function r(t){var e=i(t),n=e.x,r=e.y,u=o.x,p=o.y,a=o.width,l=o.height;return n>u&&n<u+a&&r>p&&r<p+l}document.ondragover=function(t){var e=t||window.event;e.preventDefault(),n.canDrop=!r(e)},document.ondrop=function(t){var e=t.x,o=t.y;console.log({x:e,y:o}),n.canDrop&&n.$emit("updateAppGroup",n.dragItem,n.dragIndex,e,o),document.ondragover=null,document.ondrop=null}},changeGroupName:function(t){this.$emit("changeGroupName",t)}}},I=_,D=(n("d73e"),Object(w["a"])(I,A,x,!1,null,"14556fdb",null)),G=D.exports,M={name:"vue-drag-group",components:{AppIcon:b,GroupDialog:G},props:{list:{type:Array,default:function(){}},direction:{type:String,default:"vertical",validator:function(t){return"horizon"===t||"vertical"===t}},gap:{type:Number,default:10},w:{type:Number,default:function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}},h:{type:Number,default:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}},menuList:{type:Array,default:function(){return[]}},classArr:{type:Array,default:function(){return[]}}},data:function(){return{appGroup:{},showAppGroupDialog:!1,perNum:6,vueDragGroup:null,groupList:this.list,dragItem:null}},computed:{desktopAppIds:function(){var t=[];return this.groupList.length&&this.groupList.map((function(e){e.group?e.children.map((function(e){t.push(e.id)})):t.push(e.app.id)})),t},mockList:function(){for(var t=[],e=this.groupList.length+1,n=0;n<e;n++)t.push({id:n,top:null,left:null});var o=document.querySelector(".app-item"),i=o.getBoundingClientRect(),r=i.width,u=i.height,p=0,a=0;for(n=0;n<t.length;n++){"vertical"===this.direction?(a=Math.floor(n/this.perNum),p=n%this.perNum):(p=Math.floor(n/this.perNum),a=n%this.perNum);var l=(u+this.gap)*p,c=(this.gap+r)*a;t[n].top=l,t[n].left=c}return t}},mounted:function(){this.vueDragGroup=document.querySelector(".vue-drag-group");var t=this.vueDragGroup.getBoundingClientRect(),e=t.height,n=document.querySelector(".app-item"),o=n.getBoundingClientRect(),i=o.height;this.perNum=Math.floor(e/(i+this.gap)),this.initAppItemPosition()},methods:{initAppItemPosition:function(){var t=this;return Object(g["a"])(Object(d["a"])().mark((function e(){var n,o,i,r,u;return Object(d["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n=t.groupList,o=0;o<n.length;o++)i=t.mockList[o].top,r=t.mockList[o].left,n[o].top=i,n[o].left=r,u=document.getElementById(t.getKey(n[o])),u.style.top="".concat(i,"px"),u.style.left="".concat(r,"px");t.$emit("updateList",n);case 3:case"end":return e.stop()}}),e)})))()},getKey:function(t){return t.group?t.group_id:t.app.id},clickItem:function(t){this.$emit("clickItem",t)},onMouseDown:function(t,e,n){var o=this,i=t.x,r=t.y;this.dragItem=e,this.dragIndex=n,this.dragId=this.getKey(e);var u=document.getElementById(this.dragId),p=u.offsetLeft,a=u.offsetTop;this.vueDragGroup.onmousemove=function(t){var n=t.x,l=t.y;if(i!==n||r!==l){o.isMove=!0,o.isMoved=!0,u.style.opacity="0.5",u.style.zIndex="-1";var c=l-(r-a),s=n-(i-p);c>o.h-u.clientHeight&&(c=o.h-u.clientHeight),c<0&&(c=0),s>o.w-u.clientWidth&&(s=o.w-u.clientWidth),s<0&&(s=0),u.style.top="".concat(c,"px"),u.style.left="".concat(s,"px"),e.top=c,e.left=s}},this.vueDragGroup.onmouseup=function(){u.style.opacity="1",u.style.zIndex="unset",o.vueDragGroup.onmousemove=null,o.dragItem=null,o.dragIndex=null,o.dragElement=null,o.isMove=!1},this.vueDragGroup.onmouseleave=function(){o.isMove&&o.updateDesktopApps(o.groupList),u.style.opacity="1",u.style.zIndex="unset",o.vueDragGroup.onmousemove=null,o.dragItem=null,o.dragIndex=null,o.dragElement=null,o.isMove=!1}},onMouseUp:function(t,e,n){if(0===t.button)if(this.isMove){var o=this.getKey(e);if(this.dragId===o)return;if(e.group&&!this.dragItem.group){var i=e.children.map((function(t){return t.id}));i.includes(this.dragItem.id)||(this.groupList.splice(this.dragIndex,1),e.children.push(this.dragItem.app))}else if(!e.group&&!this.dragItem.group){this.groupList.splice(this.dragIndex,1);var r=n<this.dragIndex?n:n-1;this.$set(this.groupList,r,{group:!0,group_id:Math.floor(1e8*Math.random()),children:[e.app,this.dragItem.app],group_name:"文件夹"}),this.$set(this.groupList[r],"top",e.top),this.$set(this.groupList[r],"left",e.left),this.updateDesktopApps(this.groupList)}}else e.group?(this.showAppGroupDialog=!0,this.appGroup=e,this.activeGroupIndex=n):this.clickItem(e);this.isMove=!1},updateDesktopApps:function(t){var e=this;return Object(g["a"])(Object(d["a"])().mark((function n(){var o,i;return Object(d["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:for(o=[],i=0;i<t.length;i++)t[i].group?o[i]={group_name:t[i].group_name,group:t[i].group,children_app_id:t[i].children.map((function(t){return t.id})),coordinate_top:t[i].top,coordinate_left:t[i].left}:o[i]={group_name:t[i].app.name,group:t[i].group,application_id:t[i].app.id,coordinate_top:t[i].top,coordinate_left:t[i].left};e.$emit("updateList",o);case 3:case"end":return n.stop()}}),n)})))()},changeGroupName:function(t){this.$emit("changeGroupName",t)},updateAppGroup:function(t,e,n,o){var i=this;return Object(g["a"])(Object(d["a"])().mark((function r(){var u,p,a,l,c,s,g,h,m,f;return Object(d["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:u=document.querySelector(".app-item"),p=n,a=o,l=i.vueDragGroup.getBoundingClientRect(),c=l.x,s=l.y,g=l.width,h=l.height,p<c&&(p=c),p>c+g-u.clientWidth&&(p=c+g-u.clientWidth),a<s&&(a=s),a>s+h-u.clientHeight&&(a=s+h-u.clientHeight),m={app:t,children:null,group:!1,group_name:null,left:p,top:a},f=i.groupList.map((function(t){return!t.group&&t.app.id})),f.includes(t.id)||(i.appGroup.children.splice(e,1),i.groupList.push(m),i.showAppGroupDialog=!1,i.appGroup.children.length||i.groupList.splice(i.activeGroupIndex,1)),i.$emit("updateList",i.groupList);case 12:case"end":return r.stop()}}),r)})))()},onContextmenu:function(t){return this.$contextmenu({items:this.menuList,event:t,minWidth:230}),!1}}},L=M,k=(n("2e93"),Object(w["a"])(L,c,s,!1,null,null,null)),C=k.exports,N={name:"App",components:{VueDragGroup:C},data:function(){return{list:[{group:!1,children:null,group_name:null,app:{id:1,name:"视频",icon:n("d5e1")},group_id:1,top:0,left:0},{group:!1,children:null,group_name:null,app:{id:2,name:"相册",icon:null},group_id:null,top:0,left:0},{group:!1,children:null,group_name:null,app:{id:3,name:"相机",icon:null},group_id:null,top:0,left:0},{group:!1,children:null,group_name:null,app:{id:4,name:"日历",icon:null},group_id:null,top:0,left:0},{group:!1,children:null,group_name:null,app:{id:5,name:"时钟",icon:null},group_id:null,top:0,left:0},{group:!1,children:null,group_name:null,app:{id:6,name:"footBook",icon:null},group_id:null,top:0,left:0},{group:!1,children:null,group_name:null,app:{id:7,name:"welove",icon:null},group_id:null,top:0,left:0},{group:!1,children:null,group_name:null,app:{id:8,name:"抖手",icon:null},group_id:null,top:0,left:0},{group:!1,children:null,group_name:null,app:{id:9,name:"快剪啊",icon:null},group_id:null,top:0,left:0},{group:!1,children:null,group_name:null,app:{id:10,name:"阿逗比",icon:null},group_id:null,top:0,left:0},{group:!1,children:null,group_name:null,app:{id:11,name:"联盟荣耀",icon:null},group_id:null,top:0,left:0},{group:!1,children:null,group_name:null,app:{id:12,name:"CS Come",icon:null},group_id:null,top:0,left:0},{group:!1,children:null,group_name:null,app:{id:13,name:"XX直播",icon:null},group_id:null,top:0,left:0},{group:!1,children:null,group_name:null,app:{id:14,name:"音乐",icon:null},group_id:null,top:0,left:0}]}},methods:{updateList:function(t){this.list=t},clickItem:function(t){console.log({item:t})}}},E=N,O=(n("5c0b"),Object(w["a"])(E,a,l,!1,null,null,null)),S=O.exports,B=n("e5d9");p["default"].use(B["a"]),p["default"].config.productionTip=!1,p["default"].component(u.a.name,u.a),p["default"].component(i.a.name,i.a),new p["default"]({render:function(t){return t(S)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"627d":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAsdJREFUWEe92NuLTWEYx/HvU85nLhyKOxe4QyQSMWYaYzDmRm5I3EhSkn9BUhLlSpMkETnlLJFIRIQb5UJKOZ/HKfPTM629LTN777XWu/be63Kv933WZ73v877vs7ZRx0vSRKADmABsMrPTPR9v9fJImgRcBcZFz/wDrDazQ3FDXUCSJkeYsT0GoAtYY2YHC7/XHCRpSoQZU2Y2HLXWzA74/ZqCJI0H7gGjE1LDUevMrKPWII+/F9iQIlcFrKwpqICQtAfYmAL1suogSVM9J4DNZuYrqfuStNuXegKqs6ogSdOAy8Ao4Diwysx+xVC7HFoBta9qIEnTI8zI2AMvACvM7HsMtRPYUgLlq2xtVUCSZgCXgBElHnQdaDWzLzHUDmBrrK3v3r7KunKDJM2MMMMrTMUdoNnM3sdQ24FtwH5gvZn5Ksu3D0maBVwEhqVYQY+ARWb2KoZqA04WMLlAkmYDniNDU2AKTZ4CDWb2olyfoCmTNAc4nxFTMDwHFprZs1KozCBJc4FzwJAMIxNv+iQCFacufjMTSNI84CwwOBDzOMK8zj1lkuZHmEGBGE9qn6o3lfqnGiFJC4AzQCjmYZTMb5NeJhEkqQHwUnNgUrAy9x9EmHdp+lcESWoETgED0gQr0eZ+tPcUN8SkOGVBkpp808qB8cLMN8IPSYjEVSapGTgB9M8SLNb2LtBoZh+z9u81QpJaotIhFOPnlmM+ZcX0OjoktQLHgH4hwYDbQJOZfQ7s/+9wlbQMOJoDcys60YMxxRGS5KfuEaBv4JvdjDDFmicwDiapHTicA3MDWGxmX0MR/60ySb+BPoHBvBpsMbNvgf17dfMR6q7UAq5rwJJqYrpzKBDkfxp4ndwZ8CIVu4SArgBL418S1URlBfk3l2N+VBPRM6nT5pAX88tricmSQ14/t5nZz1qNTCFuminzkrW9HhhH/QUJhfPeQjO4rAAAAABJRU5ErkJggg=="},"75b0":function(t,e,n){},"9c0c":function(t,e,n){},c66f:function(t,e,n){"use strict";n("75b0")},d5e1:function(t,e,n){t.exports=n.p+"img/video.1ca48e45.webp"},d73e:function(t,e,n){"use strict";n("2808")},f38e:function(t,e,n){}});