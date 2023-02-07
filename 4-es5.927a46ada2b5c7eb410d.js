!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,o=u(t);if(e){var i=u(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0x4I":function(e,o,a){"use strict";a.d(o,"a",function(){return b});var c=a("3Pt+"),u=a("YFAD"),l=a("TwVa"),f=a("sWYD"),d=a("mCNh"),p=a("pLZG"),h=a("1G5W"),g=a("lJxs"),b=function(e){r(a,e);var o=s(a);function a(t){var e;return n(this,a),(e=o.call(this,t)).doctors=new l.f("getDoctorOptions","doctors"),e.groups=new l.f("getGroupOptions","groups"),e.practices=new l.f("getPracticeOptions","practices"),e.sex=u.a,e.originalOrder=function(t,e){return 0},e.form=new c.h({patient_id:new c.e("",[c.s.required]),first_name:new c.e("",[c.s.required]),middle_name:new c.e(""),last_name:new c.e("",[c.s.required]),sex:new c.e(null),birth_date:new c.e(null),phone:new c.e("",[c.s.required]),email:new c.e(null),doctor:new c.e(null,[c.s.required]),practice:new c.e(null,[c.s.required]),groups:new c.e(null),address:new c.h({city:new c.e("",[c.s.required]),company:new c.e(""),postal_code:new c.e("",[c.s.required]),state:new c.e("",[c.s.required]),street1:new c.e("",[c.s.required]),street2:new c.e(""),street3:new c.e("")}),notes:new c.e("")}),e.f.practice.valueChanges.pipe(Object(p.a)(function(t){return!t}),Object(h.a)(e.destroyed)).subscribe(function(){e.f.doctor.reset(),e.f.groups.reset()}),e}return i(a,[{key:"practiceValueChanged",value:function(t){this.f.doctor.reset(),this.f.groups.reset(),this.loadOptions$.next([{key:"practice",value:t.name}])}},{key:"pushOptions",value:function(){return Object(d.a)(Object(g.a)(function(e){var n,o,i=e.options,r=i.type;"doctors"===r&&(n=function(t){return Object.assign(new l.b,t)}),"groups"===r&&(n=function(t){return Object.assign(new l.e,t)}),"practices"===r&&(n=function(t){return Object.assign(new l.h,t)}),o=e.items.map(function(t){return n(t)}),i.items$.next([].concat(t(i.items$.value),t(o)))}))}},{key:"init",value:function(){this.formInitValue=this.form.getRawValue()}},{key:"formValue",get:function(){var e=this.form.value;return e.groups=e.groups?t(e.groups):[],e.birth_date=e.birth_date&&Object(f.a)(new Date(e.birth_date),"yyyy-MM-dd"),e.address.country="US",e}},{key:"f",get:function(){return this.form.controls}}]),a}(a("pfyX").a)},Pj3g:function(t,e,o){"use strict";o.d(e,"a",function(){return h});var a=o("fXoL"),c=o("oaey"),u=o("nYR2"),l=o("1G5W"),f=o("lJxs"),d=o("2Vo4"),p=o("EY2u"),h=function(t){r(o,t);var e=s(o);function o(){var t;return n(this,o),(t=e.call(this)).isLoading$=new d.a(!0),t.pageIndex$=new a.n,t.params=null,t}return i(o,[{key:"stopLoading",value:function(){return this.isLoading$.next(!1),p.a}},{key:"goToPrevPage",value:function(){return this.pageIndex$.emit(),p.a}},{key:"getItems",value:function(t){var e=this;return this.isLoading$.next(!0),t.pipe(Object(u.a)(function(){return e.isLoading$.next(!1)}),Object(l.a)(this.destroyed),Object(f.a)(function(t){return e.items=t.items,e.totalCount=t.total_count,t}))}}]),o}(c.a)},TwVa:function(t,e,o){"use strict";o.d(e,"a",function(){return a}),o.d(e,"g",function(){return c}),o.d(e,"b",function(){return u}),o.d(e,"f",function(){return f}),o.d(e,"c",function(){return d}),o.d(e,"e",function(){return p}),o.d(e,"d",function(){return h}),o.d(e,"h",function(){return g});var a=function(){function t(){n(this,t)}return i(t,[{key:"label",get:function(){return this.device_id}}]),t}(),c=function(){function t(){n(this,t)}return i(t,[{key:"label",get:function(){return"".concat(this.first_name," ").concat(this.middle_name||""," ").concat(this.last_name," - ").concat(this.patient_id)}}]),t}(),u=function(t){r(o,t);var e=s(o);function o(){return n(this,o),e.apply(this,arguments)}return i(o,[{key:"label",get:function(){return"".concat(this.first_name," ").concat(this.last_name," - ").concat(this.npi)}}]),o}(function(){return function t(){n(this,t)}}()),l=o("2Vo4"),f=function t(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;n(this,t),this.totalCount=0,this.items$=new l.a(new Array),this.searchChange$=new l.a(null),this.getRequestFuncName=e,this.type=o},d=function t(){n(this,t)},p=function(){function t(){n(this,t)}return i(t,[{key:"label",get:function(){return this.name}}]),t}(),h=function t(e){n(this,t),Object.assign(this,e)},g=function(){function t(){n(this,t)}return i(t,[{key:"label",get:function(){return this.name}}]),t}()},VdD3:function(t,e,o){"use strict";o.d(e,"a",function(){return h});var r=o("fXoL"),a=o("dEAy"),s=o("OzZK"),c=o("RwU8"),u=o("C2AL"),l=o("ofXK");function f(t,e){if(1&t){var n=r.Vb();r.Ub(0,"button",5),r.bc("click",function(){return r.vc(n),r.ec(2).onSaveClick(!1)}),r.Hc(1,"Save & Add another"),r.Tb()}if(2&t){var o=r.ec(2);r.mc("disabled",!o.formValid)("nzLoading",o.processing&&!o.processingClose)}}function d(t,e){1&t&&(r.Ub(0,"span"),r.Hc(1,"\xa0& Close"),r.Tb())}function p(t,e){if(1&t){var n=r.Vb();r.Sb(0),r.Ub(1,"button",1),r.bc("click",function(){return r.vc(n),r.ec().closeModal()}),r.Hc(2,"Cancel"),r.Tb(),r.Fc(3,f,2,2,"button",2),r.Ub(4,"button",3),r.bc("click",function(){return r.vc(n),r.ec().onSaveClick(!0)}),r.Hc(5,"Save"),r.Fc(6,d,2,0,"span",4),r.Tb(),r.Rb()}if(2&t){var o=r.ec();r.Ab(3),r.mc("ngIf",!o.isEditing),r.Ab(1),r.mc("disabled",!o.formValid)("nzLoading",o.processing&&o.processingClose),r.Ab(2),r.mc("ngIf",!o.isEditing)}}var h=function(){var t=function(){function t(){n(this,t),this.saveEvent=new r.n,this.closeEvent=new r.n,this.formValid=!0}return i(t,[{key:"closeModal",value:function(){this.closeEvent.emit()}},{key:"onSaveClick",value:function(t){this.saveEvent.emit(t)}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Ib({type:t,selectors:[["app-modal-footer"]],inputs:{processing:"processing",processingClose:"processingClose",formValid:"formValid",isEditing:"isEditing"},outputs:{saveEvent:"saveEvent",closeEvent:"closeEvent"},decls:1,vars:0,consts:[[4,"nzModalFooter"],["nz-button","",3,"click"],["nz-button","","nzType","default",3,"disabled","nzLoading","click",4,"ngIf"],["nz-button","","nzType","primary",3,"disabled","nzLoading","click"],[4,"ngIf"],["nz-button","","nzType","default",3,"disabled","nzLoading","click"]],template:function(t,e){1&t&&r.Fc(0,p,7,4,"ng-container",0)},directives:[a.a,s.a,c.a,u.a,l.o],encapsulation:2}),t}()},YFAD:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(t){return t.male="Male",t.female="Female",t}({})},bb81:function(e,o,a){"use strict";a.d(o,"a",function(){return q});var c,u=a("fXoL"),l=a("EY2u"),f=a("HDdC"),d=a("2Vo4"),p=a("1G5W"),h=a("vkgz"),g=a("/uUt"),b=a("Kj3r"),v=a("eIep"),m=a("nYR2"),O=a("JIr8"),y=a("pLZG"),C=a("oaey"),z=a("CvgI"),w=a("UXun"),k=a("lJxs"),j=a("ovFC"),S=a("tk/3"),_=((c=function(){function e(t){n(this,e),this.http=t,this.options$=new d.a([]),this.totalCount$=new d.a(0),this.isLoadingMore$=new d.a(!1),this.isLoading$=new d.a(!0),this.filters={}}return i(e,[{key:"loadMoreOptions",value:function(e,n){var o=this;return this.options.length<this.totalCount?(this.isLoadingMore=!0,this.getOptionsRequest(e).pipe(Object(k.a)(function(e){o.totalCount=e.total_count;var i=n?e.items.map(function(t){return n(t)}):e.items;o.options=[].concat(t(o.options),t(i))}),Object(m.a)(function(){return o.isLoadingMore=!1}))):l.a}},{key:"getOptions",value:function(t,e){var n=this;return this.getOptionsRequest(t).pipe(Object(k.a)(function(t){n.totalCount=t.total_count,n.options=e?t.items.map(function(t){return e(t)}):t.items}),Object(m.a)(function(){return n.isLoading=!1}))}},{key:"getOptionsRequest",value:function(t){var e=Object(z.a)(Object.assign({limit:15,offset:this.options.length},this.filters));return this.http.get(t,{params:e})}},{key:"optionsAsObservable$",get:function(){return this.options$.asObservable()}},{key:"options",get:function(){return this.options$.value},set:function(e){this.options$.next(t(e))}},{key:"totalCount",get:function(){return this.totalCount$.value},set:function(t){this.totalCount$.next(t)}},{key:"isLoadingMore",get:function(){return this.isLoadingMore$.value},set:function(t){this.isLoadingMore$.next(t)}},{key:"isLoadingMoreAsObservable$",get:function(){return this.isLoadingMore$.pipe(Object(w.a)(1))}},{key:"isLoadingAsObservable$",get:function(){return this.isLoading$.pipe(Object(w.a)(1))}},{key:"isLoading",get:function(){return this.isLoading$.value},set:function(t){this.isLoading$.next(t)}}]),e}()).\u0275fac=function(t){return new(t||c)(u.Yb(S.c))},c.\u0275prov=u.Kb({token:c,factory:c.\u0275fac,providedIn:j.a}),c),L=a("zAKX"),x=a("3Pt+"),M=a("vxfF"),$=a("ofXK"),T=a("qAZ0"),P=a("QlLE");function I(t,e){if(1&t&&u.Pb(0,"nz-option",7),2&t){var n=e.$implicit,o=u.ec();u.mc("nzValue",n.id)("nzLabel",n[o.labelKey])("nzDisabled",o.optionDisabled(n.id))}}function A(t,e){1&t&&(u.Ub(0,"nz-option",8),u.Ub(1,"div",9),u.Pb(2,"nz-spin"),u.Ub(3,"span",10),u.Hc(4,"Searching..."),u.Tb(),u.Tb(),u.Tb())}function F(t,e){1&t&&(u.Ub(0,"div",14),u.Pb(1,"nz-spin"),u.Ub(2,"span"),u.Hc(3,"Loading data..."),u.Tb(),u.Tb())}function E(t,e){if(1&t&&(u.Ub(0,"div",12),u.Fc(1,F,4,0,"div",13),u.fc(2,"async"),u.Tb()),2&t){var n=u.ec(2),o=u.uc(10);u.Ab(1),u.mc("ngIf",u.gc(2,2,n.isLoadingMore$))("ngIfElse",o)}}function D(t,e){if(1&t&&u.Fc(0,E,3,4,"div",11),2&t){var n=u.ec();u.mc("ngIf",!n.isSearching&&n.totalCount>15&&"tags"!==n.mode)}}function V(t,e){if(1&t&&(u.Ub(0,"div",15),u.Hc(1),u.Tb()),2&t){var n=u.ec();u.Ab(1),u.Kc("",n.options.length," of ",n.totalCount,"")}}function R(t,e){if(1&t&&u.Pb(0,"nz-empty",16),2&t){var n=u.ec();u.mc("nzNotFoundContent",n.noDataText)}}var U,q=((U=function(t){r(o,t);var e=s(o);function o(t){var i;return n(this,o),(i=e.call(this)).selectService=t,i.labelKey="name",i.size="default",i.mode="default",i.filterName="name",i.canLoad=!0,i.loadOptions$=new f.a,i.valueChangedEvt=new u.n,i.searchChange$=new d.a(null),i}return i(o,[{key:"onScrollToBottom",value:function(){this.selectService.loadMoreOptions(this.url,this.transformFunc).pipe(Object(p.a)(this.destroyed)).subscribe()}},{key:"onSearch",value:function(t){(t||this.selectService.filters[this.filterName])&&(this.isSearching=!0,this.searchChange$.next(t))}},{key:"onOpenChange",value:function(t){!t&&this.selectService.filters[this.filterName]&&(this.selectService.filters[this.filterName]=null,this.selectService.options=[],this.getOptions())}},{key:"selectionValueChanged",value:function(t){t&&this.valueChangedEvt.emit(this.selectService.options.find(function(e){return e.id===t}))}},{key:"searchOptions",value:function(){var t=this;return this.searchChange$.asObservable().pipe(Object(h.a)(function(e){t.selectService.options=[],t.selectService.filters[t.filterName]=e}),Object(g.a)(),Object(b.a)(500),Object(v.a)(function(){return t.selectService.getOptions(t.url,t.transformFunc).pipe(Object(m.a)(function(){t.isSearching=!1,t.disabled=!1}),Object(O.a)(function(){return l.a}))}),Object(p.a)(this.destroyed))}},{key:"getOptions",value:function(){this.selectService.getOptions(this.url,this.transformFunc).pipe(Object(p.a)(this.destroyed)).subscribe()}},{key:"optionDisabled",value:function(t){return!(!this.disabledOptions||!this.disabledOptions.length)&&this.disabledOptions.map(function(t){return t.id}).includes(t)}},{key:"ngOnInit",value:function(){var t=this,e=this.control.value;e&&(this.selectService.filters.include=e),this.isLoading$=this.selectService.isLoadingAsObservable$,this.isLoadingMore$=this.selectService.isLoadingMoreAsObservable$,this.options$=this.selectService.optionsAsObservable$,this.canLoad&&this.searchOptions().subscribe(),this.loadOptions$.pipe(Object(h.a)(function(){t.disabled=!0,t.selectService.isLoading=!0}),Object(p.a)(this.destroyed),Object(y.a)(function(t){return!!t}),Object(v.a)(function(e){return e.forEach(function(e){return t.selectService.filters[e.key]=e.value}),t.canLoad=!0,t.searchOptions()})).subscribe()}},{key:"totalCount",get:function(){return this.selectService.totalCount}},{key:"options",get:function(){return this.selectService.options}}]),o}(C.a)).\u0275fac=function(t){return new(t||U)(u.Ob(_))},U.\u0275cmp=u.Ib({type:U,selectors:[["app-select"]],inputs:{control:"control",url:"url",labelKey:"labelKey",size:"size",disabled:"disabled",placeholder:"placeholder",mode:"mode",maxTagCount:"maxTagCount",filterName:"filterName",canLoad:"canLoad",disabledOptions:"disabledOptions",noDataText:"noDataText",transformFunc:"transformFunc",loadOptions$:"loadOptions$"},outputs:{valueChangedEvt:"valueChangedEvt"},features:[u.zb([_]),u.xb],decls:13,vars:20,consts:[["nzAllowClear","","nzServerSearch","","nzShowSearch","",3,"nzSize","nzPlaceHolder","formControl","nzLoading","nzDisabled","nzMode","nzMaxTagCount","nzDropdownRender","nzShowArrow","nzNotFoundContent","nzOnSearch","nzOpenChange","ngModelChange","nzScrollToBottom"],[3,"itemSize","maxBufferPx"],[3,"nzValue","nzLabel","nzDisabled",4,"ngFor","ngForOf"],["nzDisabled","","nzCustomContent","",4,"ngIf"],["loadingMoreOptionsTpl",""],["totalCountTpl",""],["noDataTpl",""],[3,"nzValue","nzLabel","nzDisabled"],["nzDisabled","","nzCustomContent",""],[1,"searching-option"],[1,"searching-option__text"],["class","dropdown-footer",4,"ngIf"],[1,"dropdown-footer"],["class","dropdown-footer__spinner",4,"ngIf","ngIfElse"],[1,"dropdown-footer__spinner"],[1,"dropdown-footer__total"],["nzNotFoundImage","simple",3,"nzNotFoundContent"]],template:function(t,e){if(1&t&&(u.Ub(0,"nz-select",0),u.bc("nzOnSearch",function(t){return e.onSearch(t)})("nzOpenChange",function(t){return e.onOpenChange(t)})("ngModelChange",function(t){return e.selectionValueChanged(t)})("nzScrollToBottom",function(){return e.onScrollToBottom()}),u.fc(1,"async"),u.fc(2,"async"),u.Ub(3,"cdk-virtual-scroll-viewport",1),u.Fc(4,I,1,3,"nz-option",2),u.fc(5,"async"),u.Tb(),u.Fc(6,A,5,0,"nz-option",3),u.Fc(7,D,1,1,"ng-template",null,4,u.Gc),u.Tb(),u.Fc(9,V,2,2,"ng-template",null,5,u.Gc),u.Fc(11,R,1,1,"ng-template",null,6,u.Gc)),2&t){var n=u.uc(8),o=u.uc(12);u.mc("nzSize",e.size)("nzPlaceHolder",e.placeholder)("formControl",e.control)("nzLoading",e.canLoad&&u.gc(1,14,e.isLoading$))("nzDisabled",e.disabled||u.gc(2,16,e.isLoading$))("nzMode",e.mode)("nzMaxTagCount",e.maxTagCount)("nzDropdownRender",n)("nzShowArrow",!0)("nzNotFoundContent",o),u.Ab(3),u.mc("itemSize",32)("maxBufferPx",160),u.Ab(1),u.mc("ngForOf",u.gc(5,18,e.options$)),u.Ab(2),u.mc("ngIf",e.isSearching)}},directives:[L.d,x.n,x.f,M.b,M.a,$.n,$.o,L.a,T.a,P.b],pipes:[$.b],styles:["[_nghost-%COMP%], [_nghost-%COMP%]   nz-select[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]     .ant-select-arrow{top:48%}.dropdown-footer[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;align-items:center;justify-items:start;padding:4px 14px;color:#1890ff;border-top:1px solid #f0f0f0}.dropdown-footer__total[_ngcontent-%COMP%]{width:100%;grid-column:2/3;display:flex;justify-content:flex-end}.dropdown-footer__spinner[_ngcontent-%COMP%]{display:flex;align-items:center}.dropdown-footer__spinner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:18px}.dropdown-footer[_ngcontent-%COMP%]   nz-spin[_ngcontent-%COMP%]{margin-left:12px}.option[_ngcontent-%COMP%]{display:flex}.option[_ngcontent-%COMP%]   nz-spin[_ngcontent-%COMP%]{margin-left:.9em}.option[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#1890ff;margin-left:1.1em}.searching-option[_ngcontent-%COMP%]{display:flex;align-items:center}.searching-option[_ngcontent-%COMP%]   nz-spin[_ngcontent-%COMP%]{margin-left:.8em}.searching-option__text[_ngcontent-%COMP%]{margin-left:1.2em}"],changeDetection:0}),U)},o5fV:function(t,e,o){"use strict";o.d(e,"a",function(){return g});var r,a=o("mrSG"),s=o("sbGu"),c=o("dEAy"),u=o("CvgI"),l=o("tk/3"),f=o("lJxs"),d=o("pLZG"),p=o("fXoL"),h=((r=function t(e){n(this,t),this.modal=e,this.modal.updateConfig({nzWrapClassName:"vertical-center-modal",nzMaskClosable:!0,nzAutofocus:null,nzOkType:"danger",nzOkText:"Delete",nzClosable:!1})}).\u0275fac=function(t){return new(t||r)(p.Ob(c.c))},r.\u0275cmp=p.Ib({type:r,selectors:[["ng-component"]],decls:0,vars:0,template:function(t,e){},encapsulation:2,changeDetection:0}),r),g=function(){function t(){n(this,t);var e=s.a.getInjector;this.http=e.get(l.c),this.modalService=e.get(c.d)}return i(t,[{key:"getItems",value:function(t,e,n){var o=Object(u.a)(t),i=Object.assign({params:o},n);return this.http.get(e,Object.assign({},i)).pipe(Object(f.a)(function(t){return t}))}},{key:"openModal",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600;return this.modalService.create(Object.assign(Object.assign({},o&&{nzWrapClassName:"vertical-center-modal"}),{nzTitle:t,nzWidth:i+"px",nzContent:n,nzComponentParams:Object.assign({},e)})).afterClose.pipe(Object(d.a)(function(t){return t}))}},{key:"openActionConfirmationModal",value:function(t,e){return this.modalService.confirm({nzContent:e,nzTitle:t,nzOnOk:function(){return!0}}).afterClose.pipe(Object(d.a)(function(t){return t}))}},{key:"deleteItem",value:function(t,e){var n=this;return this.modalService.confirm({nzContent:h,nzTitle:t,nzOnOk:function(t){return Object(a.a)(n,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.modal.config.nzOkLoading=!0,n.next=3,this.deleteItemRequest(e);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}},n,this)}))}}).afterClose.pipe(Object(d.a)(function(t){return t}))}},{key:"deleteItemRequest",value:function(t){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.http.delete(t).toPromise().then(function(t){return"success"===t.status});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}))}}]),t}()},pfyX:function(t,e,o){"use strict";o.d(e,"a",function(){return g});var a=o("oaey"),c=o("sbGu"),u=o("lhsU"),l=o("3Pt+"),f=o("1G5W"),d=o("nYR2"),p=o("2Vo4"),h=o("bNXi"),g=function(t){r(o,t);var e=s(o);function o(t){var i;n(this,o),(i=e.call(this)).modal=t,i.loadOptions$=new p.a(null),i.updateAfterClosing=!1;var r=c.a.getInjector;return i.errorService=r.get(u.a),i.notifService=r.get(h.b),i}return i(o,[{key:"closeModal",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.updateAfterClosing;this.modal.destroy(t)}},{key:"saveItem",value:function(t,e){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.processing=!0,this.processingClose=t,this.form&&(this.markFormGroupTouched(this.form),this.errorService.form=this.form),e.pipe(Object(f.a)(this.destroyed),Object(d.a)(function(){return n.processing=!1})).subscribe(function(){o&&n.notifService.success(o,""),t?n.closeModal(!0):(n.form&&n.form.reset(n.formInitialValue),n.updateAfterClosing=!0)})}},{key:"onItemSelected",value:function(t,e,n){n.push(t),e.patchValue(null,{emitEvent:!1})}},{key:"onDeleteItemClick",value:function(t,e){this[e]=this[e].filter(function(e){return e.id!==t})}},{key:"markFormGroupTouched",value:function(t){var e=this;Object.values(t.controls).forEach(function(t){t.markAsTouched(),t instanceof l.h&&e.markFormGroupTouched(t)})}},{key:"f",get:function(){return this.form.controls}},{key:"formInitValue",set:function(t){this.formInitialValue=Object.assign({},t)}}]),o}(a.a)}}])}();