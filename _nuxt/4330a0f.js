(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{460:function(t,e,n){"use strict";n.r(e);var r=n(23);n(9),n(52),n(58),n(88),n(45),n(42),n(28),n(3),n(24),n(41),n(39),n(43),n(73);function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,m=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return m=t.done,t},e:function(t){l=!0,o=t},f:function(){try{m||null==n.return||n.return()}finally{if(l)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var m={layout:"PagesLayout",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=localStorage.getItem("model"),e.next=4,n("articles",{deep:!0}).where({model:r,extension:".md"}).fetch();case 4:return o=e.sent,e.abrupt("return",{mdsData:o});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{pageTitle:"",mds:"",commonMds:"",md:""}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,section;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("articles",{deep:!0}).where({model:t.$route.params.model,extension:".md"}).fetch();case 2:return t.mds=e.sent,e.next=5,t.$content("articles",{deep:!0}).where({model:"common",extension:".md"}).fetch();case 5:t.commonMds=e.sent,localStorage.getItem("pageTitle")?(n=localStorage.getItem("pageTitle"),t.md=t.mds.find((function(data){return data.slug===n}))):t.md=t.mds.find((function(data){return"index"===data.slug})),section=localStorage.getItem("sectionTitle"),t.$route.params.page!==section&&("はじめに"===t.$route.params.page?t.md=t.mdsData.find((function(data){return"はじめに"===data.section})):"基本"===t.$route.params.page?t.md=t.mdsData.find((function(data){return"基本"===data.section})):"音色"===t.$route.params.page?t.md=t.mdsData.find((function(data){return"音色"===data.section})):"機能"===t.$route.params.page?t.md=t.mdsData.find((function(data){return"機能"===data.section})):"設定"===t.$route.params.page&&(t.md=t.mdsData.find((function(data){return"設定"===data.section}))));case 9:case"end":return e.stop()}}),e)})))()},created:function(){this.setListener()},mounted:function(){localStorage.setItem("visited","true")},beforeDestroy:function(){localStorage.removeItem("visited")},methods:{setListener:function(){this.$nuxt.$on("updatePageTitle",this.setPageTitle)},setPageTitle:function(t){var e=this;this.pageTitle=t,localStorage.setItem("pageTitle",this.pageTitle);var n,r=o(this.commonMds);try{for(r.s();!(n=r.n()).done;){var i=n.value;this.mds.push(i)}}catch(t){r.e(t)}finally{r.f()}this.md=this.mds.find((function(data){return data.slug===e.pageTitle}))}}},l=n(62),component=Object(l.a)(m,(function(){var t=this._self._c;return t("div",[t("nuxt-content",{attrs:{document:this.md}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);