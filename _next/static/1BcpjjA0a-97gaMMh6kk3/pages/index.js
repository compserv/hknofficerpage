(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(i.default.useContext(o.AmpStateContext))};var r,i=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,o=e.hasQuery;return n||i&&(void 0!==o&&o)}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r=c(n("q1tI")),i=c(n("Xuae")),o=n("lwAK"),a=n("FYa8"),s=n("/0+H");function c(e){return e&&e.__esModule?e:{default:e}}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var u=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var o=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var a=i.key.slice(i.key.indexOf("$")+1);e.has(a)?o=!1:e.add(a)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var s=0,c=u.length;s<c;s++){var f=u[s];if(i.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?o=!1:n.add(f);else{var l=i.props[f],m=r[f]||new Set;m.has(l)?o=!1:(m.add(l),r[f]=m)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var p=(0,i.default)();function d(e){var t=e.children;return(r.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(a.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(p,{reduceComponentsToState:m,handleStateChange:n,inAmpMode:(0,s.isInAmpMode)(e)},t)}))})))}d.rewind=p.rewind;var h=d;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var i=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=i},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),i=n("EbDI"),o=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||i(e)||o(e)||a()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n("q1tI"),i=n.n(r),o=n("8Kt/"),a=n.n(o),s=i.a.createElement;function c(){return s("nav",{className:"db dt-l w-100 border-box ph5-l"},s("a",{className:"db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l pv3",href:"#",title:"Home"},s("img",{src:"hkn-bear.svg",className:"dib w2 h2 br-100 bid v-mid",alt:"HKN"}),s("div",{className:"dib v-mid"},s("div",{className:"fw8"},"Eta Kappa Nu")," UC Berkeley")),s("div",{className:"db dtc-l v-mid w-100 w-75-l tc tr-l"},s("a",{className:"link dim dark-gray pv3 f6 f5-l dib mr3 mr4-l",href:"#",title:"Student Services"},"Student Services"),s("a",{className:"link dim dark-gray pv3 f6 f5-l dib mr3 mr4-l",href:"#",title:"Industry"},"Industry"),s("a",{className:"link dim dark-gray pv3 f6 f5-l dib mr3 mr4-l",href:"#",title:"Outreach"},"Outreach"),s("a",{className:"link dim dark-gray pv3 f6 f5-l dib mr3 mr4-l",href:"#",title:"Events"},"Events"),s("a",{className:"link dim dark-gray pv3 f6 f5-l dib",href:"#",title:"About"},"About")))}var f=i.a.createElement;function l(){return f("footer",{className:"ph3 ph4-ns pv4 bt b--white-10 white-70 bg-near-black"},f("a",{href:"mailto:",class:"link b f3 f2-ns dim white-70 lh-solid"},"Eta Kappa Nu"),f("p",{className:"f6 db b lh-solid"},"hkn@hkn.eecs.berkeley.edu"),f("p",{className:"f6 db b ttu lh-solid"},"\xa9 2020 COMPANY Inc."),f("div",{className:"mt5"},f("a",{href:"/language/",title:"Language",className:"f6 dib pr2 gray dim"},"Language"),f("a",{href:"/terms/",title:"Terms",className:"f6 dib ph2 gray dim"},"Terms of Use"),f("a",{href:"/privacy/",title:"Privacy",className:"f6 dib pl2 gray dim"},"Privacy")))}var u=i.a.createElement;var m=function(e){var t=e.children;return u("div",{style:{"font-family":"'Source Sans Pro', sans-serif"}},u(a.a,null,u("link",{rel:"icon",href:"hkn-bear.svg"}),u("link",{rel:"stylesheet",href:"https://unpkg.com/tachyons@4/css/tachyons.min.css"}),u("link",{href:"https://fonts.googleapis.com/css2?family=Source+Sans+Pro",rel:"stylesheet"})),u(c,null),u("main",null,t),u(l,null))},p=(n("TSYQ"),i.a.createElement);var d=function(e){return p("section",{className:"tc ph1-l mb3-l dib dim"},p("article",{className:"hide-child relative h4-ns br2 overflow-hidden center"},p("img",{src:"members/"+e.officer.name+".jpeg",className:"dib-ns v-mid db w4-ns",alt:"Photo of "+e.officer.name}),p("div",{className:"pa2 w4-ns dib-ns v-mid"},p("a",{className:"f6 db link dark-blue hover-blue",href:"#"},e.officer.name),p("p",{className:"f6 gray mv1"},e.officer.position),p("a",{className:"link near-black hover-silver dib h1 w1 mr3",href:"https://github.com",title:"GitHub"},p("svg",{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.414"},p("path",{d:"M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"}))),p("a",{className:"link hover-silver near-black dib h1 w1 mr3",href:"https://linkedin.com",title:"LinkedIn"},p("svg",{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.414"},p("path",{d:"M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z","fill-rule":"nonzero"}))))))},h=i.a.createElement;var v=function(e){return h("section",{className:"pa4"},h("div",{className:"b f2 tl-l tc pa2"},e.comm.name),h("div",{className:""},h("div",{className:"dib-l v-top w-60-l mw7-l pa1"},e.comm.officers.map((function(e){return h(d,{officer:e})}))),h("div",{className:"w-40-l pa1 dib-l v-top"},h("img",{src:"committees/"+e.comm.name+".jpg",className:"w-100 br2",alt:"Photo of Execs"}))))},y=[{name:"Executive",color:"bg-washed-red",officers:[{name:"Dalton Omens",position:"President"},{name:"Danny Chu",position:"Vice President"},{name:"Jack Wang",position:"Recording Secretary"},{name:"Jerry Song",position:"Corresponding Secretary"},{name:"Rehan Durrani",position:"Department Relations"},{name:"Naomi Sagan",position:"Alumni Relations"},{name:"Srinath Goli",position:"Treasure"}]},{name:"Activities",color:"bg-lightest-blue",officers:[{name:"Amy Hung",position:"Officer"},{name:"Jerry Song",position:"Officer"},{name:"Katherine Shu",position:"Assistant Officer"},{name:"Srinath Goli",position:"Assistant Officer"},{name:"Jack Wang",position:"Assistant Officer"},{name:"Jerry Song",position:"Assistant Officer"}]},{name:"Bridge",color:"bg-washed-red",officers:[{name:"Jack Wang",position:"Officer"},{name:"Katherine Shu",position:"Officer"},{name:"Srinath Goli",position:"Officer"},{name:"Amy Hung",position:"Assistant Officer"},{name:"Jack Wang",position:"Assistant Officer"},{name:"Jerry Song",position:"Assistant Officer"}]},{name:"Computing Services",color:"bg-lightest-blue",officers:[{name:"Katherine Shu",position:"Officer"},{name:"Amy Hung",position:"Officer"},{name:"Srinath Goli",position:"Officer"},{name:"George Hutchinson",position:"Officer"},{name:"Jack Wang",position:"Assistant Officer"},{name:"Jerry Song",position:"Assistant Officer"},{name:"Amy Hung",position:"Assistant Officer"},{name:"George Hutchinson",position:"Assistant Officer"}]},{name:"Decal",color:"bg-washed-red",officers:[{name:"Srinath Goli",position:"Officer"},{name:"Naomi Sagan",position:"Officer"},{name:"George Hutchinson",position:"Officer"},{name:"Amy Hung",position:"Officer"},{name:"Jack Wang",position:"Assistant Officer"},{name:"Jerry Song",position:"Assistant Officer"}]},{name:"Industrial Relations",color:"bg-lightest-blue",officers:[{name:"Katherine Shu",position:"Officer"},{name:"George Hutchinson",position:"Officer"},{name:"Naomi Sagan",position:"Officer"},{name:"Srinath Goli",position:"Officer"},{name:"Amy Hung",position:"Assistant Officer"},{name:"Jerry Song",position:"Assistant Officer"}]},{name:"Professional Development",color:"bg-washed-red",officers:[{name:"Danny Chu",position:"Officer"},{name:"Katherine Shu",position:"Officer"},{name:"Amy Hung",position:"Officer"},{name:"Jack Wang",position:"Assistant Officer"}]},{name:"Service",color:"bg-lightest-blue",officers:[{name:"Naomi Sagan",position:"Officer"},{name:"George Hutchinson",position:"Officer"},{name:"Katherine Shu",position:"Officer"},{name:"Srinath Goli",position:"Assistant Officer"},{name:"Amy Hung",position:"Assistant Officer"},{name:"Jerry Song",position:"Assistant Officer"}]},{name:"Student Relations",color:"bg-washed-red",officers:[{name:"Amy Hung",position:"Officer"},{name:"Danny Chu",position:"Officer"},{name:"Jack Wang",position:"Assistant Officer"},{name:"Jerry Song",position:"Assistant Officer"}]},{name:"Tutoring",color:"bg-lightest-blue",officers:[{name:"Srinath Goli",position:"Officer"},{name:"Danny Chu",position:"Officer"},{name:"Naomi Sagan",position:"Officer"},{name:"Srinath Goli",position:"Officer"}]}],g=i.a.createElement;function b(){return g("div",null,g(a.a,null,g("title",null,"Officers | Berkeley HKN")),g(m,null,y.map((function(e){return g(v,{key:e.name,comm:e})}))))}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var a=i.apply(null,r);a&&e.push(a)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),i=n("PJYZ"),o=n("W8MJ"),a=n("7W2i"),s=n("a1gu"),c=n("Nsbk"),f=n("RIqP");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var i=c(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),m=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(f(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(s){a(f,s);var c=l(f);function f(e){var o;return r(this,f),o=c.call(this,e),m&&(t.add(i(o)),n(i(o))),o}return o(f,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(f,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(u.Component))}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),i=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?i(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var i=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);