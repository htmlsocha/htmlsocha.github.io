(function (e) {
    function s(s) {
        for (var o, n, i = s[0], c = s[1], w = s[2], p = 0, u = []; p < i.length; p++) n = i[p], Object.prototype.hasOwnProperty.call(t, n) && t[n] && u.push(t[n][0]), t[n] = 0;
        for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
        a && a(s);
        while (u.length) u.shift()();
        return r.push.apply(r, w || []), d()
    }

    function d() {
        for (var e, s = 0; s < r.length; s++) {
            for (var d = r[s], o = !0, i = 1; i < d.length; i++) {
                var c = d[i];
                0 !== t[c] && (o = !1)
            }
            o && (r.splice(s--, 1), e = n(n.s = d[0]))
        }
        return e
    }

    var o = {}, t = {app: 0}, r = [];

    function n(s) {
        if (o[s]) return o[s].exports;
        var d = o[s] = {i: s, l: !1, exports: {}};
        return e[s].call(d.exports, d, d.exports, n), d.l = !0, d.exports
    }

    n.m = e, n.c = o, n.d = function (e, s, d) {
        n.o(e, s) || Object.defineProperty(e, s, {enumerable: !0, get: d})
    }, n.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, s) {
        if (1 & s && (e = n(e)), 8 & s) return e;
        if (4 & s && "object" === typeof e && e && e.__esModule) return e;
        var d = Object.create(null);
        if (n.r(d), Object.defineProperty(d, "default", {
            enumerable: !0,
            value: e
        }), 2 & s && "string" != typeof e) for (var o in e) n.d(d, o, function (s) {
            return e[s]
        }.bind(null, o));
        return d
    }, n.n = function (e) {
        var s = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return n.d(s, "a", s), s
    }, n.o = function (e, s) {
        return Object.prototype.hasOwnProperty.call(e, s)
    }, n.p = "/";
    var i = window["webpackJsonp"] = window["webpackJsonp"] || [], c = i.push.bind(i);
    i.push = s, i = i.slice();
    for (var w = 0; w < i.length; w++) s(i[w]);
    var a = c;
    r.push([0, "chunk-vendors"]), d()
})({
    0: function (e, s, d) {
        e.exports = d("56d7")
    }, "3a62": function (e, s, d) {
    }, "56d7": function (e, s, d) {
        "use strict";
        d.r(s);
        d("e260"), d("e6cf"), d("cca6"), d("a79d");
        var o = d("2b0e"), t = function () {
            var e = this, s = e.$createElement, d = e._self._c || s;
            return d("div", {
                staticClass: "h-full w-full",
                attrs: {id: "app"}
            }, [0 == e.choosencategory ? d("div", {staticClass: "flex flex-column justify-center items-center h-full w-full"}, [d("h1", {staticClass: "mt-6 mb-6"}, [e._v(" Wybierz swojego przeciwnika:")]), d("div", {staticClass: "container grid grid-cols-2 h-full w-full gap-3"}, [e._l(e.categories, (function (s) {
                return d("button", {
                    key: s.id,
                    staticClass: "text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-3 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900",
                    attrs: {id: s.id},
                    on: {
                        click: function (s) {
                            return e.choosecat(s)
                        }
                    }
                }, [e._v(" " + e._s(s.name) + " ")])
            })), d("button", {
                staticClass: "text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
                attrs: {type: "button"},
                on: {
                    click: function (s) {
                        return e.randomize()
                    }
                }
            }, [e._v(" Jestem gotowy na prawdziwego przeciwnika ")])], 2)]) : e._e(), 1 == e.choosencategory ? d("div", {staticClass: "container flex flex-col h-full justify-center items-center w-full"}, [0 == e.summaryscreenshown ? d("div", {staticClass: "bg-white p-12 rounded-lg shadow-lg w-full mt-8 pt-2"}, [d("h1", {staticClass: "font-bold text-4xl text-center text-purple-800"}, [e._v(" Very important test na odlewnika!!!!")]), 1 == e.notrandom ? d("div", [d("h1", {staticClass: "font-bold text-4xl text-center text-purple-800"}, [d("img", {attrs: {src: e.questions[e.index]["question"]}})]), e._l(e.questions[(e.index, e.indexmax)]["answers"], (function (s, o) {
                return d("label", {
                    key: s,
                    staticClass: "block text-xl w-full mt-4 border border-gray-400 rounded-lg py-3 px-6 text-lg-start hover:bg-indigo-100 cursor-pointer",
                    class: {allgood: e.allgood, somethingbad: e.somethingbad}
                }, [d("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.selectedAnswers,
                        expression: "selectedAnswers"
                    }],
                    staticClass: "checked:bg-blue-500 mr-3",
                    attrs: {type: "checkbox", id: o},
                    domProps: {
                        value: o,
                        checked: Array.isArray(e.selectedAnswers) ? e._i(e.selectedAnswers, o) > -1 : e.selectedAnswers
                    },
                    on: {
                        change: function (s) {
                            var d = e.selectedAnswers, t = s.target, r = !!t.checked;
                            if (Array.isArray(d)) {
                                var n = o, i = e._i(d, n);
                                t.checked ? i < 0 && (e.selectedAnswers = d.concat([n])) : i > -1 && (e.selectedAnswers = d.slice(0, i).concat(d.slice(i + 1)))
                            } else e.selectedAnswers = r
                        }
                    }
                }), e._v(" " + e._s(o) + "." + e._s(s) + " ")])
            })), 1 == e.show_ans ? d("div", {staticClass: "mt-4"}, [d("p", {staticClass: "text-lx text-green-500"}, [e._v(" Dobre odpowiedzi to: " + e._s(e.questions[e.index]["correctAnswers"]) + " ")])]) : e._e()], 2) : d("div", [d("div", {staticClass: "w-full text-purple-600 text-center text-xl rounded-full h-2.5 mb-6"}, [e._v(" " + e._s(this.numberq) + " / 20")]), d("div", {staticClass: "w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-6 "}, [d("div", {
                staticClass: "bg-purple-600 h-2.5 rounded-full",
                style: {width: this.percentage + "%"}
            })]), d("h1", {staticClass: "font-bold text-4xl text-center text-purple-800"}, [d("img", {attrs: {src: e.questions[e.randomquestionnumber]["question"]}})]), e._l(e.questions[e.randomquestionnumber]["answers"], (function (s, o) {
                return d("label", {
                    key: s,
                    staticClass: "block text-xl w-full mt-4 border border-gray-400 rounded-lg py-3 px-6 text-lg-start hover:bg-indigo-100 cursor-pointer",
                    class: {allgood: e.allgood, somethingbad: e.somethingbad}
                }, [d("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.selectedAnswers,
                        expression: "selectedAnswers"
                    }],
                    staticClass: "checked:bg-blue-500 mr-3",
                    attrs: {type: "checkbox", id: o},
                    domProps: {
                        value: o,
                        checked: Array.isArray(e.selectedAnswers) ? e._i(e.selectedAnswers, o) > -1 : e.selectedAnswers
                    },
                    on: {
                        change: function (s) {
                            var d = e.selectedAnswers, t = s.target, r = !!t.checked;
                            if (Array.isArray(d)) {
                                var n = o, i = e._i(d, n);
                                t.checked ? i < 0 && (e.selectedAnswers = d.concat([n])) : i > -1 && (e.selectedAnswers = d.slice(0, i).concat(d.slice(i + 1)))
                            } else e.selectedAnswers = r
                        }
                    }
                }), e._v(" " + e._s(o) + "." + e._s(s) + " ")])
            })), 1 == e.show_ans ? d("div", {staticClass: "mt-4"}, [d("p", {staticClass: "text-lx text-green-500"}, [e._v(" Dobre odpowiedzi to: " + e._s(e.questions[e.randomquestionnumber]["correctAnswers"]) + " ")])]) : e._e()], 2), d("div", {staticClass: "w-full flex justify-end gap-10"}, [1 == e.showcheck ? d("button", {
                staticClass: "bg-indigo-50 text-purple-800 text-3xl rounded-lg border border-gray-600 mt-4 px-6 py-2",
                on: {
                    click: function (s) {
                        return e.checkanswer(s)
                    }
                }
            }, [e._v("Sprawd?? ")]) : e._e(), 1 == e.hiddenbutton ? d("button", {
                staticClass: "bg-indigo-900 text-white text-3xl rounded-lg border border-gray-600 mt-4 px-6 py-2",
                attrs: {id: "next_question"},
                on: {
                    click: function (s) {
                        return e.nextquestion(s)
                    }
                }
            }, [e._v("Nast??pne ")]) : e._e(), 1 == e.showsummary ? d("button", {
                staticClass: "bg-rose-500 text-white-800 text-3xl rounded-lg border border-gray-600 mt-4 px-6 py-2",
                attrs: {id: "showsummary"},
                on: {
                    click: function (s) {
                        return e.showsummaryscreen()
                    }
                }
            }, [e._v("Zobacz wyniki ")]) : e._e()])]) : e._e(), 1 == e.summaryscreenshown ? d("div", {staticClass: "bg-white p-12 rounded-lg shadow-lg w-full mt-8"}, [1 == e.notrandom ? d("div", [d("h1", [e._v(" Tw??j wynik to:")]), d("p", [e._v(" " + e._s(e.points) + " / " + e._s(e.indexmax - e.pointsstart))])]) : d("div", [d("h1", [e._v(" Tw??j wynik to:")]), d("p", [e._v(" " + e._s(e.points) + " / 20")]), 20 / this.points <= 2 ? d("p", {staticClass: "bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"}, [e._v("???????????? Zdaned!!!!!! ????????????")]) : d("p", {staticClass: "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"}, [e._v("???????????? Niezdaned, we?? si?? w gar???? pociesz kotka i zdaj nast??pne oki? :( ????????????")])])]) : e._e()]) : e._e()])
        }, r = [], n = (d("a15b"), d("4e82"), d("a434"), {
            name: "App", data: function () {
                return {
                    publicPath: "/",
                    index: 0,
                    numberq: 1,
                    percentage: 2.5,
                    usethis: 0,
                    pointsstart: 0,
                    indexmax: 0,
                    indexrandom: 0,
                    randomquestionnumber: 0,
                    choosencategory: 0,
                    hiddenbutton: 0,
                    showsummary: 0,
                    points: 0,
                    summaryscreenshown: 0,
                    showcheck: 1,
                    notrandom: 1,
                    allgood: !1,
                    somethingbad: !1,
                    show_ans: 0,
                    selectedAnswers: [],
                    questions: [{
                        question: "1.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["b"]
                    }, {
                        question: "2.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["c"]
                    }, {
                        question: "3.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["c"]
                    }, {
                        question: "4.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["c"]
                    }, {
                        question: "5.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["b"]
                    }, {
                        question: "6.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["a"]
                    }, {
                        question: "7.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["a"]
                    }, {
                        question: "8.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["b"]
                    }, {
                        question: "9.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["c"]
                    }, {
                        question: "10.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["a"]
                    }, {
                        question: "11.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["a"]
                    }, {
                        question: "12.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["a"]
                    }, {
                        question: "13.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["a"]
                    }, {
                        question: "14.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["a", "b", "c"]
                    }, {
                        question: "15.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["a", "b", "c", "d"]
                    }, {
                        question: "16.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["b"]
                    }, {
                        question: "17.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["d"]
                    }, {
                        question: "18.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["c"]
                    }, {
                        question: "19.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["a"]
                    }, {
                        question: "20.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["a"]
                    }, {
                        question: "21.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["a"]
                    }, {
                        question: "22.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["a"]
                    }, {
                        question: "23.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["c"]
                    }, {
                        question: "24.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["d"]
                    }, {
                        question: "25.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["a"]
                    }, {
                        question: "26.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["d"]
                    }, {
                        question: "27.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["c"]
                    }, {
                        question: "28.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["d"]
                    }, {
                        question: "29.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["c"]
                    }, {
                        question: "30.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["b"]
                    }, {
                        question: "31.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["d"]
                    }, {
                        question: "32.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["c"]
                    }, {
                        question: "33.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["a"]
                    }, {
                        question: "34.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["c"]
                    }, {
                        question: "35.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["b"]
                    }, {
                        question: "36.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["a"]
                    }, {
                        question: "37.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["b"]
                    }, {
                        question: "38.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["c"]
                    }, {
                        question: "39.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["a"]
                    }, {
                        question: "40.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["b"]
                    }, {
                        question: "41.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["a"]
                    }, {
                        question: "42.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["b"]
                    }, {
                        question: "43.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["b"]
                    }, {
                        question: "44.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["b"]
                    }, {
                        question: "45.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["b"]
                    }, {
                        question: "46.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["a"]
                    }, {
                        question: "47.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["a"]
                    }, {
                        question: "48.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["a"]
                    }, {
                        question: "49.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["a"]
                    }, {
                        question: "50.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["b"]
                    }, {
                        question: "51.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["b"]
                    }, {
                        question: "52.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["a", "b", "c"]
                    }, {
                        question: "53.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["b"]
                    }, {
                        question: "54.png",
                        answers: {a: "Odpowied?? A", b: "Odpowied?? B", c: "Odpowied?? C", d: "Odpowied?? D"},
                        correctAnswers: ["a"]
                    }],
                    categories: [{id: 0, name: "Nowe pytania", numbers: [0, 53]}]
                }
            }, methods: {
                checkanswer: function () {
                    console.log(this.questions.length), 1 == this.notrandom ? (this.selectedAnswers.sort().join() === this.questions[this.index]["correctAnswers"].sort().join() ? (this.points++, this.allgood = !0, this.somethingbad = !1) : (console.log("nie!"), this.allgood = !1, this.somethingbad = !0), this.index === this.indexmax ? (this.showcheck = 1, this.hiddenbutton = 0, this.showsummary = 1) : this.hiddenbutton = 1) : (this.selectedAnswers.sort().join() === this.questions[this.randomquestionnumber]["correctAnswers"].sort().join() ? (this.points++, this.allgood = !0, this.somethingbad = !1) : (console.log("nie!"), this.allgood = !1, this.somethingbad = !0), 19 === this.index ? (this.showcheck = 1, this.hiddenbutton = 0, this.showsummary = 1) : this.hiddenbutton = 1), this.show_ans = 1, this.showcheck = 0
                }, nextquestion: function () {
                    this.indexrandom++, this.index++, this.selectedAnswers = [], this.allgood = !1, this.somethingbad = !1, this.show_ans = 0, this.numberq++, this.percentage = this.numberq / 20 * 100, this.index === this.indexmax ? (this.hiddenbutton = 0, this.showsummary = 1) : (this.showcheck = 1, this.hiddenbutton = 0), this.randomquestionnumber = this.usethis[this.index][0]
                }, showsummaryscreen: function () {
                    this.selectedAnswers.sort().join() === this.questions[this.index]["correctAnswers"].sort().join() && this.points++, this.summaryscreenshown = 1
                }, randomize: function () {
                    this.randomquestionnumber++, this.notrandom = 0, this.choosencategory = 1;
                    for (var e = 20, s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54], d = [], o = 54, t = 0; t < e; t++) {
                        var r = Math.ceil(0), n = Math.floor(o), i = Math.floor(Math.random() * (n - r + 1)) + r,
                            c = s.splice(i, 1);
                        o--, d.push(c)
                    }
                    this.usethis = d, this.randomquestionnumber = this.usethis[0][0]
                }, choosecat: function (e) {
                    this.notrandom = 1, console.log(e.currentTarget.id), this.index = this.categories[e.currentTarget.id]["numbers"][0], this.indexmax = this.categories[e.currentTarget.id]["numbers"][1], this.pointsstart = this.categories[e.currentTarget.id]["numbers"][0], this.choosencategory = 1
                }
            }
        }), i = n, c = d("2877"), w = Object(c["a"])(i, t, r, !1, null, null, null), a = w.exports;
        d("3a62"), d("ab8b"), d("4989");
        o["a"].config.productionTip = !1, new o["a"]({
            render: function (e) {
                return e(a)
            }
        }).$mount("#app")
    }
});
//# sourceMappingURL=app.269baef4.js.map