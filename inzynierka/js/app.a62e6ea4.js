(function(e){function d(d){for(var s,r,n=d[0],p=d[1],c=d[2],t=0,a=[];t<n.length;t++)r=n[t],Object.prototype.hasOwnProperty.call(w,r)&&w[r]&&a.push(w[r][0]),w[r]=0;for(s in p)Object.prototype.hasOwnProperty.call(p,s)&&(e[s]=p[s]);O&&O(d);while(a.length)a.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var e,d=0;d<i.length;d++){for(var o=i[d],s=!0,n=1;n<o.length;n++){var p=o[n];0!==w[p]&&(s=!1)}s&&(i.splice(d--,1),e=r(r.s=o[0]))}return e}var s={},w={app:0},i=[];function r(d){if(s[d])return s[d].exports;var o=s[d]={i:d,l:!1,exports:{}};return e[d].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=s,r.d=function(e,d,o){r.o(e,d)||Object.defineProperty(e,d,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,d){if(1&d&&(e=r(e)),8&d)return e;if(4&d&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&d&&"string"!=typeof e)for(var s in e)r.d(o,s,function(d){return e[d]}.bind(null,s));return o},r.n=function(e){var d=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(d,"a",d),d},r.o=function(e,d){return Object.prototype.hasOwnProperty.call(e,d)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],p=n.push.bind(n);n.push=d,n=n.slice();for(var c=0;c<n.length;c++)d(n[c]);var O=p;i.push([0,"chunk-vendors"]),o()})({0:function(e,d,o){e.exports=o("56d7")},"3a62":function(e,d,o){},"56d7":function(e,d,o){"use strict";o.r(d);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s=o("2b0e"),w=function(){var e=this,d=e.$createElement,o=e._self._c||d;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"container flex flex-col h-full justify-center items-center w-full"},[0==e.summaryscreenshown?o("div",{staticClass:"bg-white p-12 rounded-lg shadow-lg w-full mt-8 pt-2"},[o("h1",{staticClass:"font-bold text-4xl text-center text-purple-800"},[e._v(" Very important test na odlewnika!!!!")]),o("h1",{staticClass:"font-bold text-4xl text-center text-purple-800"},[o("img",{attrs:{src:e.questions[e.index]["question"]}})]),e._l(e.questions[e.index]["answers"],(function(d,s){return o("label",{key:d,staticClass:"block text-xl w-full mt-4 border border-gray-400 rounded-lg py-3 px-6 text-lg-start hover:bg-indigo-100 cursor-pointer",class:{allgood:e.allgood,somethingbad:e.somethingbad}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedAnswers,expression:"selectedAnswers"}],staticClass:"checked:bg-blue-500 mr-3",attrs:{type:"checkbox",id:s},domProps:{value:s,checked:Array.isArray(e.selectedAnswers)?e._i(e.selectedAnswers,s)>-1:e.selectedAnswers},on:{change:function(d){var o=e.selectedAnswers,w=d.target,i=!!w.checked;if(Array.isArray(o)){var r=s,n=e._i(o,r);w.checked?n<0&&(e.selectedAnswers=o.concat([r])):n>-1&&(e.selectedAnswers=o.slice(0,n).concat(o.slice(n+1)))}else e.selectedAnswers=i}}}),e._v(" "+e._s(s)+"."+e._s(d)+" ")])})),1==e.show_ans?o("div",{staticClass:"mt-4"},[o("p",{staticClass:"text-lx text-green-500"},[e._v(" Dobre odpowiedzi to: "+e._s(e.questions[e.index]["correctAnswers"])+" ")])]):e._e(),o("div",{staticClass:"w-full flex justify-end gap-10"},[1==e.showcheck?o("button",{staticClass:"bg-indigo-50 text-purple-800 text-3xl rounded-lg border border-gray-600 mt-4 px-6 py-2",on:{click:function(d){return e.checkanswer(d)}}},[e._v("Sprawdź")]):e._e(),1==e.hiddenbutton?o("button",{staticClass:"bg-indigo-900 text-white text-3xl rounded-lg border border-gray-600 mt-4 px-6 py-2",attrs:{id:"next_question"},on:{click:function(d){return e.nextquestion(d)}}},[e._v("Następne")]):e._e(),1==e.showsummary?o("button",{staticClass:"bg-rose-500 text-white-800 text-3xl rounded-lg border border-gray-600 mt-4 px-6 py-2",attrs:{id:"showsummary"},on:{click:function(d){return e.showsummaryscreen()}}},[e._v("Zobacz wyniki")]):e._e()])],2):e._e(),1==e.summaryscreenshown?o("div",{staticClass:"bg-white p-12 rounded-lg shadow-lg w-full mt-8"},[o("h1",[e._v(" Twój wynik to:")]),o("p",[e._v(" "+e._s(e.points)+" / "+e._s(e.questions.length))])]):e._e()])])},i=[],r=(o("a15b"),o("4e82"),{name:"App",data:function(){return{publicPath:"/",index:0,hiddenbutton:0,showsummary:0,points:0,summaryscreenshown:0,showcheck:1,allgood:!1,somethingbad:!1,show_ans:0,selectedAnswers:[],questions:[{question:"1.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C"},correctAnswers:["c"]},{question:"2.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C"},correctAnswers:["b"]},{question:"3.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C"},correctAnswers:["a"]},{question:"4.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C"},correctAnswers:["a"]},{question:"5.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C"},correctAnswers:["b"]},{question:"6.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C"},correctAnswers:["b"]},{question:"7.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C"},correctAnswers:["b"]},{question:"8.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C"},correctAnswers:["a"]},{question:"9.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C"},correctAnswers:["a"]},{question:"10.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C"},correctAnswers:["a"]},{question:"11.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C"},correctAnswers:["c"]},{question:"12.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C"},correctAnswers:["b"]},{question:"13.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C"},correctAnswers:["c"]},{question:"14.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C"},correctAnswers:["b"]},{question:"15.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C"},correctAnswers:["c"]},{question:"16.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C"},correctAnswers:["b"]},{question:"17.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C"},correctAnswers:["b"]},{question:"18.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C"},correctAnswers:["c"]},{question:"19.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"20.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"21.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"22.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"23.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"24.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"25.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"26.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"27.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"28.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"29.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"30.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c","d"]},{question:"31.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"32.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c","d"]},{question:"33.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"34.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"35.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"36.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"37.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"38.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"39.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"40.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","d"]},{question:"41.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b","c"]},{question:"42.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"43.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"44.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","c"]},{question:"45.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"46.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"47.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b","c"]},{question:"48.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b"]},{question:"49.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b","c"]},{question:"50.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b"]},{question:"51.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"52.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","c"]},{question:"53.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"54.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"55.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"56.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"57.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"58.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:[""]},{question:"59.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"60.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"61.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"62.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"63.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:[]},{question:"64.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"65.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"66.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b"]},{question:"67.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c","d"]},{question:"68.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"69.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:[]},{question:"70.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:[]},{question:"71.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:[]},{question:"72.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b","c","d"]},{question:"73.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"74.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","d"]},{question:"75.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","d"]},{question:"76.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b","d"]},{question:"77.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b","c"]},{question:"78.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c","d"]},{question:"79.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","d"]},{question:"80.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","c"]},{question:"81.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c","a"]},{question:"82.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","c"]},{question:"83.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b"]},{question:"84.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","c"]},{question:"85.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","c"]},{question:"86.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c","d"]},{question:"87.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C"},correctAnswers:["c"]},{question:"88.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C"},correctAnswers:["a","b"]},{question:"89.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C"},correctAnswers:["a","b"]},{question:"90.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b"]},{question:"91.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b"]},{question:"92.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C"},correctAnswers:["a","b","c"]},{question:"93.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b","c"]},{question:"94.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b"]},{question:"95.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"96.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"97.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:[""]},{question:"98.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"99.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"100.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b"]},{question:"101.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b","d"]},{question:"102.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"103.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"104.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"105.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"106.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b","d"]},{question:"107.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b","d"]},{question:"108.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"109.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"110.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"111.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"112.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"113.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"114.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"115.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"116.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"117.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"118.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"119.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"120.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"121.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"122.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"123.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b","c","d"]},{question:"124.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"125.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"126.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"127.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["A"]},{question:"128.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"129.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"130.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:[""]},{question:"131.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:[""]},{question:"132.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:[""]},{question:"133.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:[""]},{question:"134.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:[""]},{question:"135.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:[""]},{question:"136.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:[""]},{question:"137.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:[""]},{question:"138.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:[""]},{question:"139.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:[""]},{question:"140.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:[""]},{question:"141.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:[""]},{question:"142.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:[""]},{question:"143.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:[""]},{question:"144.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:[""]},{question:"145.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:[""]},{question:"146.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:[""]},{question:"147.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"148.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"149.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"150.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"151.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"152.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"153.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"154.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"155.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"156.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"157.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"158.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"159.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C"},correctAnswers:["a","b","c"]},{question:"160.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b","d","c"]},{question:"161.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","c"]},{question:"162.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c","d"]},{question:"163.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d","b"]},{question:"164.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","d"]},{question:"165.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"166.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"167.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"168.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"169.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","c","d"]},{question:"170.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"171.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"172.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","c","d"]},{question:"173.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]}]}},methods:{checkanswer:function(){console.log(this.questions.length),this.selectedAnswers.sort().join()===this.questions[this.index]["correctAnswers"].sort().join()?(this.points++,this.allgood=!0,this.somethingbad=!1):(console.log("nie!"),this.allgood=!1,this.somethingbad=!0),this.index===this.questions.length-1?(this.showcheck=1,this.hiddenbutton=0,this.showsummary=1):this.hiddenbutton=1,this.show_ans=1,this.showcheck=0},nextquestion:function(){this.index++,this.selectedAnswers=[],this.allgood=!1,this.somethingbad=!1,this.show_ans=0,this.index===this.questions.length-1?(this.hiddenbutton=0,this.showsummary=1):(this.showcheck=1,this.hiddenbutton=0)},showsummaryscreen:function(){this.summaryscreenshown=1}}}),n=r,p=o("2877"),c=Object(p["a"])(n,w,i,!1,null,null,null),O=c.exports;o("3a62"),o("ab8b"),o("4989");s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(O)}}).$mount("#app")}});
//# sourceMappingURL=app.a62e6ea4.js.map