!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){function e(e){return"\n            <tr data-id="+e.id+">\n                <td>"+e.project.text+"</td>\n                <td>"+e.activity.text+"</td>\n                <td>"+e.from+"</td>\n                <td>"+e.to+"</td>\n                <td>"+e.note+'</td>\n                <td class="action-edit hide-text">Redigera<i></i></td>\n                <td class="action-delete hide-text">Ta bort<i></i></td>\n            </tr>\n        '}return{reportHtml:e,renderReports:function(t,r){if(r){var n=r.map(function(t){return e(t)}).join("");t.innerHTML=n}console.log("rendered reports:",r)}}}()},function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={getValuesFromForm:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r={id:t||Date.now()},o=e.querySelectorAll("input"),d=e.querySelectorAll("select"),i=e.querySelectorAll("textarea");return[].concat(n(o),n(d),n(i)).forEach(function(e){"INPUT"===e.nodeName||"TEXTAREA"===e.nodeName?r[e.name]=e.value:"SELECT"===e.nodeName&&(r[e.name]={text:e[e.selectedIndex].innerText,selectIndex:e.selectedIndex})}),r},populateForm:function(e,t){e.project.selectedIndex=t.project.selectIndex,e.activity.selectedIndex=t.activity.selectIndex,e.from.value=t.from,e.to.value=t.to,e.note.value=t.note}}},function(e,t,r){"use strict";var n=d(r(1)),o=d(r(0));function d(e){return e&&e.__esModule?e:{default:e}}var i,u,a,c;i=document.querySelector("form"),u=document.querySelector("table"),a=u.querySelector("tbody"),c={reports:[],editReportId:null,addReport:function(e){this.reports.push(e)},deleteReport:function(e){var t=this.reports.filter(function(t){return t.id.toString()!==e});this.reports=t},editReport:function(e,t){var r=this.reports.map(function(r){return e===r.id.toString()?r=t:r});c.reports=r},getReport:function(e){return this.reports.filter(function(t){return t.id.toString()===e})[0]}},i.addEventListener("submit",function(e){e.preventDefault();var t=n.default.getValuesFromForm(i,c.editReportId);c.editReportId?(c.editReport(c.editReportId,t),c.editReportId=null):c.addReport(t),o.default.renderReports(a,c.reports),i.reset()}),u.addEventListener("click",function(e){var t=e.target,r=e.target.parentNode.parentNode.dataset.id;if(t.parentNode.classList.contains("action-delete")&&(c.deleteReport(r),o.default.renderReports(a,c.reports)),t.parentNode.classList.contains("action-edit")){c.editReportId=r;var d=c.getReport(r);n.default.populateForm(i,d)}})}]);