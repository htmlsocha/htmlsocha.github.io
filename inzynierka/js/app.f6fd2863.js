(function(e){function d(d){for(var s,r,n=d[0],t=d[1],c=d[2],a=0,O=[];a<n.length;a++)r=n[a],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&O.push(i[r][0]),i[r]=0;for(s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);p&&p(d);while(O.length)O.shift()();return w.push.apply(w,c||[]),o()}function o(){for(var e,d=0;d<w.length;d++){for(var o=w[d],s=!0,n=1;n<o.length;n++){var t=o[n];0!==i[t]&&(s=!1)}s&&(w.splice(d--,1),e=r(r.s=o[0]))}return e}var s={},i={app:0},w=[];function r(d){if(s[d])return s[d].exports;var o=s[d]={i:d,l:!1,exports:{}};return e[d].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=s,r.d=function(e,d,o){r.o(e,d)||Object.defineProperty(e,d,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,d){if(1&d&&(e=r(e)),8&d)return e;if(4&d&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&d&&"string"!=typeof e)for(var s in e)r.d(o,s,function(d){return e[d]}.bind(null,s));return o},r.n=function(e){var d=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(d,"a",d),d},r.o=function(e,d){return Object.prototype.hasOwnProperty.call(e,d)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],t=n.push.bind(n);n.push=d,n=n.slice();for(var c=0;c<n.length;c++)d(n[c]);var p=t;w.push([0,"chunk-vendors"]),o()})({0:function(e,d,o){e.exports=o("56d7")},"3a62":function(e,d,o){},"56d7":function(e,d,o){"use strict";o.r(d);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s=o("2b0e"),i=function(){var e=this,d=e.$createElement,o=e._self._c||d;return o("div",{staticClass:"h-full w-full",attrs:{id:"app"}},[0==e.choosencategory?o("div",{staticClass:"flex flex-column justify-center items-center h-full w-full"},[o("h1",{staticClass:"mt-6 mb-6"},[e._v(" Wybierz swojego przeciwnika:")]),o("div",{staticClass:"container grid grid-cols-2 h-full w-full gap-3"},[e._l(e.categories,(function(d){return o("button",{key:d.id,staticClass:"text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-3 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900",attrs:{id:d.id},on:{click:function(d){return e.choosecat(d)}}},[e._v(" "+e._s(d.name)+" ")])})),o("button",{staticClass:"text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",attrs:{type:"button"},on:{click:function(d){return e.randomize()}}},[e._v(" Jestem gotowy na prawdziwego przeciwnika ")])],2)]):e._e(),1==e.choosencategory?o("div",{staticClass:"container flex flex-col h-full justify-center items-center w-full"},[0==e.summaryscreenshown?o("div",{staticClass:"bg-white p-12 rounded-lg shadow-lg w-full mt-8 pt-2"},[o("h1",{staticClass:"font-bold text-4xl text-center text-purple-800"},[e._v(" Very important test na odlewnika!!!!")]),1==e.notrandom?o("div",[o("h1",{staticClass:"font-bold text-4xl text-center text-purple-800"},[o("img",{attrs:{src:e.questions[e.index]["question"]}})]),e._l(e.questions[(e.index,e.indexmax)]["answers"],(function(d,s){return o("label",{key:d,staticClass:"block text-xl w-full mt-4 border border-gray-400 rounded-lg py-3 px-6 text-lg-start hover:bg-indigo-100 cursor-pointer",class:{allgood:e.allgood,somethingbad:e.somethingbad}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedAnswers,expression:"selectedAnswers"}],staticClass:"checked:bg-blue-500 mr-3",attrs:{type:"checkbox",id:s},domProps:{value:s,checked:Array.isArray(e.selectedAnswers)?e._i(e.selectedAnswers,s)>-1:e.selectedAnswers},on:{change:function(d){var o=e.selectedAnswers,i=d.target,w=!!i.checked;if(Array.isArray(o)){var r=s,n=e._i(o,r);i.checked?n<0&&(e.selectedAnswers=o.concat([r])):n>-1&&(e.selectedAnswers=o.slice(0,n).concat(o.slice(n+1)))}else e.selectedAnswers=w}}}),e._v(" "+e._s(s)+"."+e._s(d)+" ")])})),1==e.show_ans?o("div",{staticClass:"mt-4"},[o("p",{staticClass:"text-lx text-green-500"},[e._v(" Dobre odpowiedzi to: "+e._s(e.questions[e.index]["correctAnswers"])+" ")])]):e._e()],2):o("div",[o("div",{staticClass:"w-full text-purple-600 text-center text-xl rounded-full h-2.5 mb-6"},[e._v(" "+e._s(this.numberq)+" / 40")]),o("div",{staticClass:"w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-6 "},[o("div",{staticClass:"bg-purple-600 h-2.5 rounded-full",style:{width:this.percentage+"%"}})]),o("h1",{staticClass:"font-bold text-4xl text-center text-purple-800"},[o("img",{attrs:{src:e.questions[e.randomquestionnumber]["question"]}})]),e._l(e.questions[e.randomquestionnumber]["answers"],(function(d,s){return o("label",{key:d,staticClass:"block text-xl w-full mt-4 border border-gray-400 rounded-lg py-3 px-6 text-lg-start hover:bg-indigo-100 cursor-pointer",class:{allgood:e.allgood,somethingbad:e.somethingbad}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedAnswers,expression:"selectedAnswers"}],staticClass:"checked:bg-blue-500 mr-3",attrs:{type:"checkbox",id:s},domProps:{value:s,checked:Array.isArray(e.selectedAnswers)?e._i(e.selectedAnswers,s)>-1:e.selectedAnswers},on:{change:function(d){var o=e.selectedAnswers,i=d.target,w=!!i.checked;if(Array.isArray(o)){var r=s,n=e._i(o,r);i.checked?n<0&&(e.selectedAnswers=o.concat([r])):n>-1&&(e.selectedAnswers=o.slice(0,n).concat(o.slice(n+1)))}else e.selectedAnswers=w}}}),e._v(" "+e._s(s)+"."+e._s(d)+" ")])})),1==e.show_ans?o("div",{staticClass:"mt-4"},[o("p",{staticClass:"text-lx text-green-500"},[e._v(" Dobre odpowiedzi to: "+e._s(e.questions[e.randomquestionnumber]["correctAnswers"])+" ")])]):e._e()],2),o("div",{staticClass:"w-full flex justify-end gap-10"},[1==e.showcheck?o("button",{staticClass:"bg-indigo-50 text-purple-800 text-3xl rounded-lg border border-gray-600 mt-4 px-6 py-2",on:{click:function(d){return e.checkanswer(d)}}},[e._v("Sprawdź ")]):e._e(),1==e.hiddenbutton?o("button",{staticClass:"bg-indigo-900 text-white text-3xl rounded-lg border border-gray-600 mt-4 px-6 py-2",attrs:{id:"next_question"},on:{click:function(d){return e.nextquestion(d)}}},[e._v("Następne ")]):e._e(),1==e.showsummary?o("button",{staticClass:"bg-rose-500 text-white-800 text-3xl rounded-lg border border-gray-600 mt-4 px-6 py-2",attrs:{id:"showsummary"},on:{click:function(d){return e.showsummaryscreen()}}},[e._v("Zobacz wyniki ")]):e._e()])]):e._e(),1==e.summaryscreenshown?o("div",{staticClass:"bg-white p-12 rounded-lg shadow-lg w-full mt-8"},[1==e.notrandom?o("div",[o("h1",[e._v(" Twój wynik to:")]),o("p",[e._v(" "+e._s(e.points)+" / "+e._s(e.indexmax-e.pointsstart))])]):o("div",[o("h1",[e._v(" Twój wynik to:")]),o("p",[e._v(" "+e._s(e.points)+" / 40")]),40/this.points<=2?o("p",{staticClass:"bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"},[e._v("🎉🎉🎉 Zdaned!!!!!! 🎉🎉🎉")]):o("p",{staticClass:"bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"},[e._v("😿😿😿 Niezdaned, weź się w garść pociesz kotka i zdaj następne oki? :( 😿😿😿")])])]):e._e()]):e._e()])},w=[],r=(o("a15b"),o("4e82"),o("a434"),{name:"App",data:function(){return{publicPath:"/",index:0,numberq:1,percentage:2.5,usethis:0,pointsstart:0,indexmax:0,indexrandom:0,randomquestionnumber:0,choosencategory:0,hiddenbutton:0,showsummary:0,points:0,summaryscreenshown:0,showcheck:1,notrandom:1,allgood:!1,somethingbad:!1,show_ans:0,selectedAnswers:[],questions:[{question:"1.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"2.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"3.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"4.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"5.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"6.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"7.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"8.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"9.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"10.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"11.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"12.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"13.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"14.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"15.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"16.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"17.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"18.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"19.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"20.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"21.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"22.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b"]},{question:"23.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"24.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"25.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"26.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"27.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"28.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"29.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"30.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c","d"]},{question:"31.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"32.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c","d"]},{question:"33.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"34.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"35.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"36.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"37.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"38.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"39.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b","c","d"]},{question:"40.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","d"]},{question:"41.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b","c"]},{question:"42.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"43.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"44.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"45.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b","c","d"]},{question:"46.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c","d"]},{question:"47.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b","c"]},{question:"48.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b","c","d"]},{question:"49.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b","c"]},{question:"50.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b"]},{question:"51.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"52.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","c"]},{question:"53.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"54.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"55.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"56.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"57.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"58.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"59.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"60.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"61.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"62.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"63.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"64.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"65.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"66.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"67.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b","c","d"]},{question:"68.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"69.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c","d"]},{question:"70.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"71.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"72.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b","c","d"]},{question:"73.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","d"]},{question:"74.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","c","d"]},{question:"75.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","d"]},{question:"76.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b","d"]},{question:"77.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b","c"]},{question:"78.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c","d"]},{question:"79.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","d"]},{question:"80.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","c"]},{question:"81.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c","a"]},{question:"82.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","c"]},{question:"83.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b"]},{question:"84.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","c"]},{question:"85.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","c"]},{question:"86.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c","d"]},{question:"87.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"88.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b"]},{question:"89.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b"]},{question:"90.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b"]},{question:"91.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b"]},{question:"92.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b","c"]},{question:"93.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"94.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b","d"]},{question:"95.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"96.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"97.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"98.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"99.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b","d"]},{question:"100.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"101.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b","c","d"]},{question:"102.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"103.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"104.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"105.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"106.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b"]},{question:"107.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b","d"]},{question:"108.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"109.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"110.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"111.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"112.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"113.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"114.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"115.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"116.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"117.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"118.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"119.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"120.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"121.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"122.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"123.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b","c","d"]},{question:"124.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"125.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"126.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"127.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"128.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"129.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"130.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b","c","d"]},{question:"131.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b"]},{question:"132.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b","d"]},{question:"133.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b","d"]},{question:"134.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b","c","d"]},{question:"135.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b","d"]},{question:"136.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b","c","d"]},{question:"137.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"138.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","c"]},{question:"139.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b","d"]},{question:"140.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","c","d"]},{question:"141.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"142.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"143.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"144.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b","c","d"]},{question:"145.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b","d"]},{question:"146.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b","c"]},{question:"147.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"148.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"149.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"150.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"151.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"152.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"153.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"154.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"155.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"156.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]},{question:"157.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["c"]},{question:"158.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"159.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","b","c"]},{question:"160.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b","d","c"]},{question:"161.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","c"]},{question:"162.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b","d"]},{question:"163.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d","b"]},{question:"164.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","d"]},{question:"165.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b"]},{question:"166.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"167.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"168.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"169.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","c","d"]},{question:"170.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a"]},{question:"171.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["b","c"]},{question:"172.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["a","c","d"]},{question:"173.JPG",answers:{a:"Odpowiedź A",b:"Odpowiedź B",c:"Odpowiedź C",d:"Odpowiedź D"},correctAnswers:["d"]}],categories:[{id:0,name:"Matematyka",numbers:[0,18]},{id:1,name:"Chemia",numbers:[18,38]},{id:2,name:"Materiały na formy odlewnicze",numbers:[38,50]},{id:3,name:"Krystalizacja",numbers:[50,53]},{id:4,name:"Metody odchyłek ważonych",numbers:[53,65]},{id:5,name:"CAD",numbers:[65,74]},{id:6,name:"Metale nieżelazne",numbers:[74,86]},{id:7,name:"BHP",numbers:[86,92]},{id:8,name:"Mechanika płynow",numbers:[92,107]},{id:9,name:"Symulacje komputerowe procesów wytwarzania",numbers:[107,119]},{id:10,name:"Fizykochemia",numbers:[119,129]},{id:11,name:"Technologia Form Odlewniczych",numbers:[129,146]},{id:12,name:"Grafika Inżynierska",numbers:[146,158]},{id:13,name:"Częsci maszyn",numbers:[158,172]}]}},methods:{checkanswer:function(){console.log(this.questions.length),1==this.notrandom?(this.selectedAnswers.sort().join()===this.questions[this.index]["correctAnswers"].sort().join()?(this.points++,this.allgood=!0,this.somethingbad=!1):(console.log("nie!"),this.allgood=!1,this.somethingbad=!0),this.index===this.indexmax?(this.showcheck=1,this.hiddenbutton=0,this.showsummary=1):this.hiddenbutton=1):(this.selectedAnswers.sort().join()===this.questions[this.randomquestionnumber]["correctAnswers"].sort().join()?(this.points++,this.allgood=!0,this.somethingbad=!1):(console.log("nie!"),this.allgood=!1,this.somethingbad=!0),39===this.index?(this.showcheck=1,this.hiddenbutton=0,this.showsummary=1):this.hiddenbutton=1),this.show_ans=1,this.showcheck=0},nextquestion:function(){this.indexrandom++,this.index++,this.selectedAnswers=[],this.allgood=!1,this.somethingbad=!1,this.show_ans=0,this.numberq++,this.percentage=this.numberq/40*100,this.index===this.indexmax?(this.hiddenbutton=0,this.showsummary=1):(this.showcheck=1,this.hiddenbutton=0),this.randomquestionnumber=this.usethis[this.index][0]},showsummaryscreen:function(){this.selectedAnswers.sort().join()===this.questions[this.index]["correctAnswers"].sort().join()&&this.points++,this.summaryscreenshown=1},randomize:function(){this.randomquestionnumber++,this.notrandom=0,this.choosencategory=1;for(var e=40,d=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173],o=[],s=173,i=0;i<e;i++){var w=Math.ceil(0),r=Math.floor(s),n=Math.floor(Math.random()*(r-w+1))+w,t=d.splice(n,1);s--,o.push(t)}this.usethis=o,this.randomquestionnumber=this.usethis[0][0]},choosecat:function(e){this.notrandom=1,console.log(e.currentTarget.id),this.index=this.categories[e.currentTarget.id]["numbers"][0],this.indexmax=this.categories[e.currentTarget.id]["numbers"][1],this.pointsstart=this.categories[e.currentTarget.id]["numbers"][0],this.choosencategory=1}}}),n=r,t=o("2877"),c=Object(t["a"])(n,i,w,!1,null,null,null),p=c.exports;o("3a62"),o("ab8b"),o("4989");s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(p)}}).$mount("#app")}});
//# sourceMappingURL=app.f6fd2863.js.map