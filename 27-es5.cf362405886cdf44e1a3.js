!function(){function e(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||t(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,t,n){return(r="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var i=s(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return o(this,n)}}function o(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{TtQc:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(e){return e.greenHighNormal="rgb(56, 142, 60)",e.greenNormal="rgb(67, 160, 71)",e.greenLowNormal="rgb(76, 175, 80)",e.greenLow="rgb(102, 187, 106)",e.redSevere="rgb(246, 71, 71)",e.redModerate="rgb(226, 106, 106)",e.redMild="rgb(224, 130, 131)",e.yellow="rgb(253, 191, 80)",e}({})},bAuu:function(n,o,c){"use strict";c.r(o),c.d(o,"MeasurementDetailsModule",function(){return Ie});var m,f=c("PCNd"),p=c("tyNb"),d=c("oaey"),b=c("lJxs"),g=c("eIep"),h=c("nYR2"),y=c("1G5W"),v=c("xlym"),x="font-family: 'Noto Sans', -apple-system, BlinkMacSystemFont, 'Open sans', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",z={fontFamily:x,fontWeight:500,fontSize:"18px"},_={fontSize:"14px",fontFamily:x,fontWeight:400},I={series:[],chart:{height:600,type:"line",zoom:{enabled:!0,autoScaleYaxis:!0,type:"y"},redrawOnParentResize:!0,redrawOnWindowResize:!0},dataLabels:{enabled:!1},stroke:{curve:"straight",width:2},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}},row:{colors:["#f3f3f3","transparent"],opacity:.5}},tooltip:{marker:{show:!1}}},O={title:{text:"Blood pressure wave",align:"center",style:z},xaxis:{type:"numeric",tickAmount:12,max:12,decimalsInFloat:0,title:{text:"Time in seconds",style:_},labels:{formatter:function(e,t,n){return e}}},yaxis:{title:{text:"Pulse index",style:_}}},w={title:{text:"Constant pressure wave",align:"center",style:z},xaxis:{type:"numeric",tickAmount:12,max:12,decimalsInFloat:0,title:{text:"Time in seconds",style:_},labels:{formatter:function(e,t,n){return e}}},yaxis:{title:{text:"Pulse index",style:_}}},T={title:{text:"Heart spectrum wave",align:"center",style:z},xaxis:{type:"numeric",decimalsInFloat:0,title:{text:"Frequency (pulse / minute)",style:_},labels:{formatter:function(e,t,n){return Number(e).toFixed()}}},yaxis:{decimalsInFloat:0,title:{text:"Heart energy index (HEI)",style:_}},colors:["#545454"]},A={title:{text:"Heart spectrum + constant pressure wave results",align:"center",style:z},xaxis:{type:"numeric",decimalsInFloat:0,title:{text:"Frequency (pulse / minute)",style:_},labels:{formatter:function(e,t,n){return Number(e).toFixed()}}},yaxis:{decimalsInFloat:0,title:{text:"Heart energy index (HEI)",style:_}},colors:["#545454"]},P=c("fXoL"),C=((m=function e(){u(this,e)}).\u0275mod=P.Mb({type:m}),m.\u0275inj=P.Lb({factory:function(e){return new(e||m)}}),m),S=c("ILvI"),j=c("CvgI"),M=c("/h9T"),F=c("pl0G"),k=c("jIYg");function H(e,t){Object(k.a)(2,arguments);var n=Object(M.a)(t);return Object(F.a)(e,1e3*n)}function L(e,t){Object(k.a)(2,arguments);var n=Object(M.a)(t);return H(e,-n)}var U,R=c("tk/3"),D=((U=function(){function e(t){u(this,e),this.http=t}return l(e,[{key:"getMeasurementDetails",value:function(e){return this.http.get(Object(S.r)(e))}},{key:"getAlerts",value:function(e,t){var n=Object(j.a)({measurement_date_until:H(new Date(e),1).toISOString(),measurement_date_from:L(new Date(e),1).toISOString(),device_id:t});return this.http.get(S.b,{params:n}).pipe(Object(b.a)(function(e){return e.items[0]}))}}]),e}()).\u0275fac=function(e){return new(e||U)(P.Yb(R.c))},U.\u0275prov=P.Kb({token:U,factory:U.\u0275fac,providedIn:C}),U),E=c("yW9e"),N=c("5vDB"),q=c("ofXK"),B=c("OtHt"),W=c("xB20"),G=c("0wOC"),Y=c("QlLE"),$=c("CV0D"),J=c("qAZ0"),Q=["charts"],V=["apxChart"],K=function(){return{rows:3}};function X(e,t){if(1&e&&P.Pb(0,"nz-skeleton",10),2&e){var n=P.ec();P.mc("nzActive",!0)("nzLoading",n.measurementIsLoading&&!n.measurement)("nzParagraph",P.oc(4,K))("nzTitle",!1)}}var Z=function(){return{xxl:4,xl:4,lg:5,md:5,sm:2,xs:1}},ee=function(e){return{systolic:e}},te=function(e){return{diastolic:e}},ne=function(e,t){return[e,t]},re=function(e,t,n){return[e,t,n]};function ie(e,t){if(1&e&&(P.Ub(0,"nz-descriptions",11),P.Ub(1,"nz-descriptions-item",12),P.Hc(2),P.Tb(),P.Ub(3,"nz-descriptions-item",13),P.Pb(4,"app-tags",14),P.Tb(),P.Ub(5,"nz-descriptions-item",15),P.Hc(6),P.Tb(),P.Ub(7,"nz-descriptions-item",16),P.Hc(8),P.Tb(),P.Ub(9,"nz-descriptions-item",17),P.Hc(10),P.fc(11,"date"),P.Tb(),P.Ub(12,"nz-descriptions-item",18),P.Hc(13),P.Tb(),P.Ub(14,"nz-descriptions-item",19),P.Hc(15),P.Tb(),P.Ub(16,"nz-descriptions-item",20),P.Pb(17,"app-tags",21),P.Tb(),P.Tb()),2&e){var n=P.ec();P.mc("nzColumn",P.oc(14,Z)),P.Ab(2),P.Ic(n.measurementType),P.Ab(2),P.mc("data",P.qc(19,ne,P.pc(15,ee,n.measurement.systolic),P.pc(17,te,n.measurement.diastolic))),P.Ab(2),P.Ic(n.measurement.systolic),P.Ab(2),P.Ic(n.measurement.diastolic),P.Ab(2),P.Ic(P.hc(11,11,n.measurement.measurement_date,"short")),P.Ab(3),P.Ic(n.measurement.pulse),P.Ab(2),P.Lc("",n.measurement.heartbeat_zone_frequency,", ",n.measurement.valve_zone_frequency,", ",n.measurement.cardiovascular_zone_frequency,""),P.Ab(2),P.mc("data",P.rc(22,re,null==n.measurement?null:n.measurement.heartbeat_zone_frequency,null==n.measurement?null:n.measurement.valve_zone_frequency,null==n.measurement?null:n.measurement.cardiovascular_zone_frequency))}}var ae=function(){return{rows:2}};function oe(e,t){1&e&&P.Pb(0,"nz-skeleton",22),2&e&&P.mc("nzActive",!0)("nzParagraph",P.oc(3,ae))("nzTitle",!1)}function se(e,t){if(1&e&&(P.Ub(0,"nz-descriptions-item",28),P.Hc(1),P.Tb()),2&e){var n=P.ec(2);P.Ab(1),P.Ic(n.alerts.bp_alert)}}function ce(e,t){if(1&e&&(P.Ub(0,"nz-descriptions-item",29),P.Hc(1),P.Tb()),2&e){var n=P.ec(2);P.Ab(1),P.Ic(n.alerts.hr_alert)}}function le(e,t){if(1&e&&(P.Ub(0,"nz-descriptions-item",30),P.Hc(1),P.Tb()),2&e){var n=P.ec(2);P.Ab(1),P.Ic(n.alerts.arrhythmia_alert)}}function ue(e,t){if(1&e&&(P.Ub(0,"nz-descriptions-item",31),P.Hc(1),P.Tb()),2&e){var n=P.ec(2);P.Ab(1),P.Ic(n.alerts.alerts)}}function me(e,t){if(1&e&&(P.Sb(0),P.Ub(1,"nz-descriptions",23),P.Fc(2,se,2,1,"nz-descriptions-item",24),P.Fc(3,ce,2,1,"nz-descriptions-item",25),P.Fc(4,le,2,1,"nz-descriptions-item",26),P.Fc(5,ue,2,1,"nz-descriptions-item",27),P.Tb(),P.Rb()),2&e){var n=P.ec();P.Ab(2),P.mc("ngIf",n.alerts.bp_alert),P.Ab(1),P.mc("ngIf",n.alerts.hr_alert),P.Ab(1),P.mc("ngIf",n.alerts.arrhythmia_alert),P.Ab(1),P.mc("ngIf",n.alerts.alerts)}}function fe(e,t){1&e&&P.Pb(0,"nz-empty",32)}function pe(e,t){if(1&e&&(P.Ub(0,"p"),P.Hc(1),P.Tb()),2&e){var n=t.$implicit;P.Ab(1),P.Ic(n.title)}}function de(e,t){if(1&e&&(P.Sb(0),P.Ub(1,"div",37),P.Ub(2,"div",38),P.Pb(3,"apx-chart",39,40),P.Tb(),P.Ub(5,"div",41),P.Fc(6,pe,2,1,"p",42),P.Tb(),P.Tb(),P.Rb()),2&e){var n=t.ngIf,r=P.ec().$implicit,i=P.ec(2);P.Ab(3),P.mc("series",n.series)("xaxis",n.xaxis)("yaxis",n.yaxis)("title",n.title)("colors",n.colors)("chart",i.chartOptions.chart)("tooltip",i.chartOptions.tooltip)("dataLabels",i.chartOptions.dataLabels)("stroke",i.chartOptions.stroke)("grid",i.chartOptions.grid)("id",r.key),P.Ab(3),P.mc("ngForOf",n.aside)}}function be(e,t){if(1&e&&(P.Ub(0,"div",36),P.Fc(1,de,7,12,"ng-container",5),P.Tb()),2&e){var n=t.$implicit;P.Cb(n.value.pageBreakAfter?"page-break-before":""),P.Ab(1),P.mc("ngIf",n.value)}}function ge(e,t){if(1&e&&(P.Ub(0,"div",33,34),P.Fc(2,be,2,3,"div",35),P.fc(3,"keyvalue"),P.Tb()),2&e){var n=P.ec();P.Ab(2),P.mc("ngForOf",P.hc(3,1,n.chartConfigs,n.originalOrder))}}function he(e,t){1&e&&(P.Ub(0,"div",43),P.Pb(1,"nz-spin",44),P.Tb())}var ye,ve,xe,ze=[{path:"",component:(ye=function(n){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(c,n);var o=a(c);function c(e,n,r){var i,a,s,l,m;u(this,c),(i=o.call(this)).measurementDetailsService=e,i.router=n,i.activatedRoute=r,i.chartOptions=I,i.chartConfigs={bp_wave_form:{aside:[],series:[],title:O.title,xaxis:O.xaxis,yaxis:O.yaxis},bp_spectrum:{aside:[],series:[],title:T.title,xaxis:T.xaxis,yaxis:T.yaxis,colors:T.colors},fp_wave_form:{aside:[],series:[],title:w.title,xaxis:w.xaxis,yaxis:w.yaxis},fp_spectrum:{aside:[],series:[],title:A.title,xaxis:A.xaxis,yaxis:A.yaxis,colors:A.colors}},i.measurementType=v.a.blood_pressure_metrics,i.alertsIsLoading=!0,i.originalOrder=function(e,t){return 0},i.measurement=null===(l=null===(s=null===(a=i.router.getCurrentNavigation())||void 0===a?void 0:a.extras)||void 0===s?void 0:s.state)||void 0===l?void 0:l.measurement;var f=(null===(m=i.measurement)||void 0===m?void 0:m.id)||i.activatedRoute.snapshot.params.measurementId;return i.getMeasurementDetails(f),window.onbeforeprint=function(){var e,n=function(e,n){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){c=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(c)throw o}}}}(i.apxChart);try{for(n.s();!(e=n.n()).done;)e.value.dataURI().then(function(e){var t=document.createElement("div");t.classList.add("print-image-container");var n=new Image;n.src=e.imgURI,n.classList.add("print-image"),t.appendChild(n),i.chartsRef.nativeElement.appendChild(t)})}catch(r){n.e(r)}finally{n.f()}},window.onafterprint=function(){return i.removePrintContainers()},i}return l(c,[{key:"removePrintContainers",value:function(){document.querySelectorAll(".print-image-container").forEach(function(e){return e.remove()})}},{key:"getAlerts",value:function(e,t){return this.measurementDetailsService.getAlerts(e,t)}},{key:"setValuesToChartAside",value:function(){var t=this.measurement.systolic,n=this.measurement.diastolic,r=this.measurement.bp_wave_form,i=t-n,a=Math.round(t/3+2*n/3),o=this.measurement.pulse;this.chartConfigs.bp_wave_form.aside=[{title:"Sys. ".concat(t," mmHg")},{title:"Dia. ".concat(n," mmHg")},{title:"Mean ".concat(a," mmHg")},{title:"PP ".concat(i," mmHG")},{title:"Pulse "+o},{title:"Meas. time ".concat(r[r.length-1][0]-r[0][0]," sec.")}];var s=this.measurement.heartbeat_zone_frequency,c=this.measurement.valve_zone_frequency,l=this.measurement.cardiovascular_zone_frequency,u=s+c+l;this.chartConfigs.bp_spectrum.aside=[{title:"I_1 = "+s},{title:"I_2 = "+c},{title:"I_3 = "+l},{title:"Total noise = "+u}],this.chartConfigs.fp_wave_form.aside=[{title:"Mean ".concat(a," mmHg")},{title:"PP ".concat(i," mmHg")},{title:"Pulse "+o}];var m=this.measurement.fp_spectrum.map(function(e){return e[1]});this.chartConfigs.fp_spectrum.aside=[{title:"I_1 = "+s},{title:"I_2 = "+c},{title:"I_3 = "+l},{title:"Total noise = "+u},{title:"Peak of HEI = "+Math.max.apply(Math,e(m))}]}},{key:"getMeasurementDetails",value:function(e){var t=this;this.measurementIsLoading=!0,this.measurementDetailsService.getMeasurementDetails(e).pipe(Object(b.a)(function(e){t.measurement=e,t.setValuesToChartAside(),t.measurementIsLoading=!1,Object.keys(t.chartConfigs).forEach(function(n){return t.chartConfigs[n].series.push({name:"",data:e[n]})})}),Object(g.a)(function(){return t.getAlerts(t.measurement.measurement_date,t.measurement.device_id).pipe(Object(h.a)(function(){return t.alertsIsLoading=!1}),Object(b.a)(function(e){return t.alerts=e}))}),Object(y.a)(this.destroyed)).subscribe()}},{key:"ngOnDestroy",value:function(){r(s(c.prototype),"ngOnDestroy",this).call(this),this.removePrintContainers()}}]),c}(d.a),ye.\u0275fac=function(e){return new(e||ye)(P.Ob(D),P.Ob(p.e),P.Ob(p.a))},ye.\u0275cmp=P.Ib({type:ye,selectors:[["ng-component"]],viewQuery:function(e,t){var n;1&e&&(P.Mc(Q,!0),P.Mc(V,!0)),2&e&&(P.tc(n=P.cc())&&(t.chartsRef=n.first),P.tc(n=P.cc())&&(t.apxChart=n))},features:[P.xb],decls:12,vars:7,consts:[["nzText","Measurement information","nzOrientation","left",1,"large"],[3,"nzActive","nzLoading","nzParagraph","nzTitle",4,"ngIf"],["nzBordered","","nzSize","small",3,"nzColumn",4,"ngIf"],["nzText","Alerts","nzOrientation","left",1,"large"],[3,"nzActive","nzParagraph","nzTitle",4,"ngIf"],[4,"ngIf"],["nzNotFoundImage","simple","nzNotFoundContent","No alerts",4,"ngIf"],["nzText","Measurement charts","nzOrientation","left",1,"large"],["class","charts",4,"ngIf","ngIfElse"],["spinnerTpl",""],[3,"nzActive","nzLoading","nzParagraph","nzTitle"],["nzBordered","","nzSize","small",3,"nzColumn"],["nzTitle","Type"],["nzTitle","BP color"],["type","bloodPressure",3,"data"],["nzTitle","Systolic"],["nzTitle","Diastolic"],["nzTitle","Date"],["nzTitle","Pulse"],["nzTitle","I_1-3"],["nzTitle","Heart spectrum"],["type","heartSpectrum",3,"data"],[3,"nzActive","nzParagraph","nzTitle"],["nzBordered","","nzSize","small"],["nzTitle","Blood pressure",4,"ngIf"],["nzTitle","Heart rate",4,"ngIf"],["nzTitle","Arrhythmia",4,"ngIf"],["nzTitle","Other",4,"ngIf"],["nzTitle","Blood pressure"],["nzTitle","Heart rate"],["nzTitle","Arrhythmia"],["nzTitle","Other"],["nzNotFoundImage","simple","nzNotFoundContent","No alerts"],[1,"charts"],["charts",""],["class","chart__wrapper",3,"class",4,"ngFor","ngForOf"],[1,"chart__wrapper"],[1,"chart__container"],[1,"chart__body"],[3,"series","xaxis","yaxis","title","colors","chart","tooltip","dataLabels","stroke","grid","id"],["apxChart",""],[1,"chart__aside"],[4,"ngFor","ngForOf"],[1,"spinner"],["nzSimple","","nzTip","Loading measurements..."]],template:function(e,t){if(1&e&&(P.Ub(0,"nz-content"),P.Pb(1,"nz-divider",0),P.Fc(2,X,1,5,"nz-skeleton",1),P.Fc(3,ie,18,26,"nz-descriptions",2),P.Pb(4,"nz-divider",3),P.Fc(5,oe,1,4,"nz-skeleton",4),P.Fc(6,me,6,4,"ng-container",5),P.Fc(7,fe,1,0,"nz-empty",6),P.Pb(8,"nz-divider",7),P.Fc(9,ge,4,4,"div",8),P.Tb(),P.Fc(10,he,2,0,"ng-template",null,9,P.Gc)),2&e){var n=P.uc(11);P.Ab(2),P.mc("ngIf",t.measurementIsLoading),P.Ab(1),P.mc("ngIf",!t.measurementIsLoading||t.measurement),P.Ab(2),P.mc("ngIf",t.alertsIsLoading),P.Ab(1),P.mc("ngIf",t.alerts),P.Ab(1),P.mc("ngIf",!t.alerts&&!t.alertsIsLoading),P.Ab(2),P.mc("ngIf",!t.measurementIsLoading)("ngIfElse",n)}},directives:[E.a,N.a,q.o,B.a,W.a,W.b,G.a,Y.b,q.n,$.a,J.a],pipes:[q.e,q.i],styles:["[_nghost-%COMP%]     .apexcharts-canvas, [_nghost-%COMP%]     svg{width:100%!important}[_nghost-%COMP%]     .apexcharts-tooltip-text-goals-value, [_nghost-%COMP%]     .apexcharts-tooltip-text-y-value, [_nghost-%COMP%]     .apexcharts-tooltip-text-z-value{margin-left:0!important}[_nghost-%COMP%]     .ant-empty-image{height:30px;margin:0}.charts[_ngcontent-%COMP%]{display:grid;gap:16px}.chart[_ngcontent-%COMP%]{-moz-column-break-after:page;break-after:page;-moz-column-break-before:page;break-before:page}.chart__wrapper[_ngcontent-%COMP%]{border-radius:4px;border:1px solid #d2d2d2;padding:16px}@media print{.chart__wrapper[_ngcontent-%COMP%]{display:none}}.chart__title[_ngcontent-%COMP%]{text-align:center}.chart__aside[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;white-space:nowrap;margin-left:16px}.chart__container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.chart__body[_ngcontent-%COMP%]{width:100%}.spinner[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),ye)}],_e=((xe=function e(){u(this,e)}).\u0275mod=P.Mb({type:xe}),xe.\u0275inj=P.Lb({factory:function(e){return new(e||xe)},imports:[[p.h.forChild(ze)],p.h]}),xe),Ie=((ve=function e(){u(this,e)}).\u0275mod=P.Mb({type:ve}),ve.\u0275inj=P.Lb({factory:function(e){return new(e||ve)},imports:[[f.a,_e,C]]}),ve)}}])}();