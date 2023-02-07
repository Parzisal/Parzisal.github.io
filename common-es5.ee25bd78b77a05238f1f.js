!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0wOC":function(t,r,o){"use strict";o.d(r,"a",function(){return f});var a=o("TtQc"),s=o("C3di"),c=o("fXoL"),u=o("ofXK"),i=o("ZyQt");function l(e,t){1&e&&(c.Ub(0,"nz-tag",1),c.Ub(1,"div",2),c.kc(2),c.Tb(),c.Tb()),2&e&&c.Cc("border-color",t.$implicit)}var d=["*"],f=function(){var t=function(){function t(){e(this,t)}return n(t,[{key:"getHeartSpectrumColor",value:function(e){return e?e>0&&e<3?a.a.yellow:e>2?a.a.redSevere:void 0:a.a.greenHighNormal}},{key:"getBloodPressureColor",value:function(e){return e.systolic?this.getBloodPressureColorSystolic(e.systolic):this.getBloodPressureColorDiastolic(e.diastolic)}},{key:"getBloodPressureColorSystolic",value:function(e){return e<91?a.a.greenNormal:e>90&&e<101?a.a.greenLowNormal:e>100&&e<121?a.a.greenLow:e>120&&e<131?a.a.greenHighNormal:e>130&&e<141?a.a.yellow:e>140&&e<161?a.a.redMild:e>160&&e<181?a.a.redModerate:e>180?a.a.redSevere:void 0}},{key:"getBloodPressureColorDiastolic",value:function(e){return e<61?a.a.greenNormal:e>60&&e<66?a.a.greenLowNormal:e>65&&e<81?a.a.greenLow:e>80&&e<86?a.a.greenHighNormal:e>85&&e<91?a.a.yellow:e>90&&e<101?a.a.redMild:e>100&&e<111?a.a.redModerate:e>110?a.a.redSevere:void 0}},{key:"ngOnInit",value:function(){var e=this;switch(this.type){case"heartSpectrum":this.tags=this.data.map(function(t){return e.getHeartSpectrumColor(t)});break;case"bloodPressure":this.tags=this.data.map(function(t){return e.getBloodPressureColor(t)});break;case"measurementsCount":this.tags=this.data.map(function(e){return Object(s.a)(e)})}}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ib({type:t,selectors:[["app-tags"]],inputs:{type:"type",data:"data"},ngContentSelectors:d,decls:1,vars:1,consts:[["class","custom-tag",3,"borderColor",4,"ngFor","ngForOf"],[1,"custom-tag"],[1,"custom-tag__body"]],template:function(e,t){1&e&&(c.lc(),c.Fc(0,l,3,2,"nz-tag",0)),2&e&&c.mc("ngForOf",t.tags)},directives:[u.n,i.a],styles:["[_nghost-%COMP%]{display:flex}[_nghost-%COMP%]   .ant-tag[_ngcontent-%COMP%]{border-radius:2px!important}.custom-tag[_ngcontent-%COMP%]{position:relative;width:0;height:0;border:8px solid;margin:0 2px}.custom-tag__body[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff!important;-webkit-print-color-adjust:exact}"],changeDetection:0}),t}()},C3di:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n("TtQc"),o=n("/Tr7"),a=n("jIYg");function s(e,t){var n=t||function(e){return Object(a.a)(1,arguments),Object(o.a)(e).getDate()}(new Date);switch(!0){case 1===n||2*e/(n-1)>=1:return r.a.greenNormal;case n<20&&(n<5||2*e/(n-4)>=1):return r.a.yellow;default:return r.a.redSevere}}},Kuuk:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(e){return e.pending="gold",e.enroute="blue",e.delivered="green",e.cancelled="",e}({})},S9na:function(t,n,r){"use strict";r.d(n,"a",function(){return c});var o=r("PCNd"),a=r("ovFC"),s=r("fXoL"),c=function(){var t=function t(){e(this,t)};return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(e){return new(e||t)},imports:[[o.a,a.a]]}),t}()},bYvm:function(t,n,r){"use strict";r.d(n,"a",function(){return u});var o=r("fXoL"),a=r("ofXK");function s(e,t){if(1&e&&(o.Ub(0,"span",3),o.Hc(1),o.Tb()),2&e){var n=o.ec();o.Ab(1),o.Ic(null==n.address?null:n.address.street2)}}function c(e,t){if(1&e&&(o.Ub(0,"span",3),o.Hc(1),o.Tb()),2&e){var n=o.ec();o.Ab(1),o.Ic(null==n.address?null:n.address.street3)}}var u=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Ib({type:t,selectors:[["app-address"]],inputs:{address:"address"},decls:12,vars:6,consts:[[1,"address"],[1,"address__text"],["class","address__text address__text--comma",4,"ngIf"],[1,"address__text","address__text--comma"]],template:function(e,t){1&e&&(o.Ub(0,"div",0),o.Ub(1,"span",1),o.Hc(2),o.Tb(),o.Fc(3,s,2,1,"span",2),o.Fc(4,c,2,1,"span",2),o.Tb(),o.Ub(5,"div",0),o.Ub(6,"span",3),o.Hc(7),o.Tb(),o.Ub(8,"span",3),o.Hc(9),o.Tb(),o.Ub(10,"span",1),o.Hc(11),o.Tb(),o.Tb()),2&e&&(o.Ab(2),o.Ic(null==t.address?null:t.address.street1),o.Ab(1),o.mc("ngIf",null==t.address?null:t.address.street2),o.Ab(1),o.mc("ngIf",null==t.address?null:t.address.street3),o.Ab(3),o.Ic(null==t.address?null:t.address.city),o.Ab(2),o.Ic(null==t.address?null:t.address.state),o.Ab(2),o.Ic(null==t.address?null:t.address.postal_code))},directives:[a.o],styles:['.address__text--comma[_ngcontent-%COMP%]{position:relative;margin-right:.4em}.address__text--comma[_ngcontent-%COMP%]:after{position:absolute;content:","}'],changeDetection:0}),t}()},e5ZD:function(t,r,o){"use strict";o.d(r,"a",function(){return c});var a=o("YFAD"),s=o("fXoL"),c=function(){var t=function(){function t(){e(this,t)}return n(t,[{key:"transform",value:function(e){return a.a[e]||null}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=s.Nb({name:"sex",type:t,pure:!0}),t}()},ovFC:function(t,n,r){"use strict";r.d(n,"a",function(){return a});var o=r("fXoL"),a=function(){var t=function t(){e(this,t)};return t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({factory:function(e){return new(e||t)}}),t}()},xlym:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(e){return e.blood_pressure_metrics="Blood pressure metrics",e.weight="Weight",e.spo2="SpO2 ",e.blood_glucose="Blood glucose",e.temperature="Temperature",e}({})}}])}();