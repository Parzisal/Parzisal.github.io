(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Pj3g:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var i=n("fXoL"),o=n("oaey"),s=n("nYR2"),c=n("1G5W"),r=n("lJxs"),a=n("2Vo4"),l=n("EY2u");class d extends o.a{constructor(){super(),this.isLoading$=new a.a(!0),this.pageIndex$=new i.n,this.params=null}stopLoading(){return this.isLoading$.next(!1),l.a}goToPrevPage(){return this.pageIndex$.emit(),l.a}getItems(e){return this.isLoading$.next(!0),e.pipe(Object(s.a)(()=>this.isLoading$.next(!1)),Object(c.a)(this.destroyed),Object(r.a)(e=>(this.items=e.items,this.totalCount=e.total_count,e)))}}},TwVa:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"g",function(){return o}),n.d(t,"b",function(){return s}),n.d(t,"f",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"e",function(){return l}),n.d(t,"d",function(){return d}),n.d(t,"h",function(){return u});class i{constructor(){}get label(){return this.device_id}}class o{constructor(){}get label(){return`${this.first_name} ${this.middle_name||""} ${this.last_name} - ${this.patient_id}`}}class s extends class{}{get label(){return`${this.first_name} ${this.last_name} - ${this.npi}`}}var c=n("2Vo4");class r{constructor(e,t=null){this.totalCount=0,this.items$=new c.a(new Array),this.searchChange$=new c.a(null),this.getRequestFuncName=e,this.type=t}}class a{constructor(){}}class l{get label(){return this.name}}class d{constructor(e){Object.assign(this,e)}}class u{get label(){return this.name}}},VdD3:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var i=n("fXoL"),o=n("dEAy"),s=n("OzZK"),c=n("RwU8"),r=n("C2AL"),a=n("ofXK");function l(e,t){if(1&e){const e=i.Vb();i.Ub(0,"button",5),i.bc("click",function(){return i.vc(e),i.ec(2).onSaveClick(!1)}),i.Hc(1,"Save & Add another"),i.Tb()}if(2&e){const e=i.ec(2);i.mc("disabled",!e.formValid)("nzLoading",e.processing&&!e.processingClose)}}function d(e,t){1&e&&(i.Ub(0,"span"),i.Hc(1,"\xa0& Close"),i.Tb())}function u(e,t){if(1&e){const e=i.Vb();i.Sb(0),i.Ub(1,"button",1),i.bc("click",function(){return i.vc(e),i.ec().closeModal()}),i.Hc(2,"Cancel"),i.Tb(),i.Fc(3,l,2,2,"button",2),i.Ub(4,"button",3),i.bc("click",function(){return i.vc(e),i.ec().onSaveClick(!0)}),i.Hc(5,"Save"),i.Fc(6,d,2,0,"span",4),i.Tb(),i.Rb()}if(2&e){const e=i.ec();i.Ab(3),i.mc("ngIf",!e.isEditing),i.Ab(1),i.mc("disabled",!e.formValid)("nzLoading",e.processing&&e.processingClose),i.Ab(2),i.mc("ngIf",!e.isEditing)}}let p=(()=>{class e{constructor(){this.saveEvent=new i.n,this.closeEvent=new i.n,this.formValid=!0}closeModal(){this.closeEvent.emit()}onSaveClick(e){this.saveEvent.emit(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Ib({type:e,selectors:[["app-modal-footer"]],inputs:{processing:"processing",processingClose:"processingClose",formValid:"formValid",isEditing:"isEditing"},outputs:{saveEvent:"saveEvent",closeEvent:"closeEvent"},decls:1,vars:0,consts:[[4,"nzModalFooter"],["nz-button","",3,"click"],["nz-button","","nzType","default",3,"disabled","nzLoading","click",4,"ngIf"],["nz-button","","nzType","primary",3,"disabled","nzLoading","click"],[4,"ngIf"],["nz-button","","nzType","default",3,"disabled","nzLoading","click"]],template:function(e,t){1&e&&i.Fc(0,u,7,4,"ng-container",0)},directives:[o.a,s.a,c.a,r.a,a.o],encapsulation:2}),e})()},bb81:function(e,t,n){"use strict";n.d(t,"a",function(){return F});var i=n("fXoL"),o=n("EY2u"),s=n("HDdC"),c=n("2Vo4"),r=n("1G5W"),a=n("vkgz"),l=n("/uUt"),d=n("Kj3r"),u=n("eIep"),p=n("nYR2"),b=n("JIr8"),f=n("pLZG"),m=n("oaey"),h=n("CvgI"),v=n("UXun"),g=n("lJxs"),z=n("ovFC"),O=n("tk/3");let C=(()=>{class e{constructor(e){this.http=e,this.options$=new c.a([]),this.totalCount$=new c.a(0),this.isLoadingMore$=new c.a(!1),this.isLoading$=new c.a(!0),this.filters={}}get optionsAsObservable$(){return this.options$.asObservable()}get options(){return this.options$.value}set options(e){this.options$.next([...e])}get totalCount(){return this.totalCount$.value}set totalCount(e){this.totalCount$.next(e)}get isLoadingMore(){return this.isLoadingMore$.value}set isLoadingMore(e){this.isLoadingMore$.next(e)}get isLoadingMoreAsObservable$(){return this.isLoadingMore$.pipe(Object(v.a)(1))}get isLoadingAsObservable$(){return this.isLoading$.pipe(Object(v.a)(1))}get isLoading(){return this.isLoading$.value}set isLoading(e){this.isLoading$.next(e)}loadMoreOptions(e,t){return this.options.length<this.totalCount?(this.isLoadingMore=!0,this.getOptionsRequest(e).pipe(Object(g.a)(e=>{this.totalCount=e.total_count;const n=t?e.items.map(e=>t(e)):e.items;this.options=[...this.options,...n]}),Object(p.a)(()=>this.isLoadingMore=!1))):o.a}getOptions(e,t){return this.getOptionsRequest(e).pipe(Object(g.a)(e=>{this.totalCount=e.total_count,this.options=t?e.items.map(e=>t(e)):e.items}),Object(p.a)(()=>this.isLoading=!1))}getOptionsRequest(e){const t=Object(h.a)(Object.assign({limit:15,offset:this.options.length},this.filters));return this.http.get(e,{params:t})}}return e.\u0275fac=function(t){return new(t||e)(i.Yb(O.c))},e.\u0275prov=i.Kb({token:e,factory:e.\u0275fac,providedIn:z.a}),e})();var y=n("zAKX"),T=n("3Pt+"),_=n("vxfF"),S=n("ofXK"),I=n("qAZ0"),w=n("QlLE");function A(e,t){if(1&e&&i.Pb(0,"nz-option",7),2&e){const e=t.$implicit,n=i.ec();i.mc("nzValue",e.id)("nzLabel",e[n.labelKey])("nzDisabled",n.optionDisabled(e.id))}}function L(e,t){1&e&&(i.Ub(0,"nz-option",8),i.Ub(1,"div",9),i.Pb(2,"nz-spin"),i.Ub(3,"span",10),i.Hc(4,"Searching..."),i.Tb(),i.Tb(),i.Tb())}function U(e,t){1&e&&(i.Ub(0,"div",14),i.Pb(1,"nz-spin"),i.Ub(2,"span"),i.Hc(3,"Loading data..."),i.Tb(),i.Tb())}function M(e,t){if(1&e&&(i.Ub(0,"div",12),i.Fc(1,U,4,0,"div",13),i.fc(2,"async"),i.Tb()),2&e){const e=i.ec(2),t=i.uc(10);i.Ab(1),i.mc("ngIf",i.gc(2,2,e.isLoadingMore$))("ngIfElse",t)}}function x(e,t){if(1&e&&i.Fc(0,M,3,4,"div",11),2&e){const e=i.ec();i.mc("ngIf",!e.isSearching&&e.totalCount>15&&"tags"!==e.mode)}}function P(e,t){if(1&e&&(i.Ub(0,"div",15),i.Hc(1),i.Tb()),2&e){const e=i.ec();i.Ab(1),i.Kc("",e.options.length," of ",e.totalCount,"")}}function $(e,t){if(1&e&&i.Pb(0,"nz-empty",16),2&e){const e=i.ec();i.mc("nzNotFoundContent",e.noDataText)}}let F=(()=>{class e extends m.a{constructor(e){super(),this.selectService=e,this.labelKey="name",this.size="default",this.mode="default",this.filterName="name",this.canLoad=!0,this.loadOptions$=new s.a,this.valueChangedEvt=new i.n,this.searchChange$=new c.a(null)}get totalCount(){return this.selectService.totalCount}get options(){return this.selectService.options}onScrollToBottom(){this.selectService.loadMoreOptions(this.url,this.transformFunc).pipe(Object(r.a)(this.destroyed)).subscribe()}onSearch(e){(e||this.selectService.filters[this.filterName])&&(this.isSearching=!0,this.searchChange$.next(e))}onOpenChange(e){!e&&this.selectService.filters[this.filterName]&&(this.selectService.filters[this.filterName]=null,this.selectService.options=[],this.getOptions())}selectionValueChanged(e){e&&this.valueChangedEvt.emit(this.selectService.options.find(t=>t.id===e))}searchOptions(){return this.searchChange$.asObservable().pipe(Object(a.a)(e=>{this.selectService.options=[],this.selectService.filters[this.filterName]=e}),Object(l.a)(),Object(d.a)(500),Object(u.a)(()=>this.selectService.getOptions(this.url,this.transformFunc).pipe(Object(p.a)(()=>{this.isSearching=!1,this.disabled=!1}),Object(b.a)(()=>o.a))),Object(r.a)(this.destroyed))}getOptions(){this.selectService.getOptions(this.url,this.transformFunc).pipe(Object(r.a)(this.destroyed)).subscribe()}optionDisabled(e){return!(!this.disabledOptions||!this.disabledOptions.length)&&this.disabledOptions.map(e=>e.id).includes(e)}ngOnInit(){const e=this.control.value;e&&(this.selectService.filters.include=e),this.isLoading$=this.selectService.isLoadingAsObservable$,this.isLoadingMore$=this.selectService.isLoadingMoreAsObservable$,this.options$=this.selectService.optionsAsObservable$,this.canLoad&&this.searchOptions().subscribe(),this.loadOptions$.pipe(Object(a.a)(()=>{this.disabled=!0,this.selectService.isLoading=!0}),Object(r.a)(this.destroyed),Object(f.a)(e=>!!e),Object(u.a)(e=>(e.forEach(e=>this.selectService.filters[e.key]=e.value),this.canLoad=!0,this.searchOptions()))).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(i.Ob(C))},e.\u0275cmp=i.Ib({type:e,selectors:[["app-select"]],inputs:{control:"control",url:"url",labelKey:"labelKey",size:"size",disabled:"disabled",placeholder:"placeholder",mode:"mode",maxTagCount:"maxTagCount",filterName:"filterName",canLoad:"canLoad",disabledOptions:"disabledOptions",noDataText:"noDataText",transformFunc:"transformFunc",loadOptions$:"loadOptions$"},outputs:{valueChangedEvt:"valueChangedEvt"},features:[i.zb([C]),i.xb],decls:13,vars:20,consts:[["nzAllowClear","","nzServerSearch","","nzShowSearch","",3,"nzSize","nzPlaceHolder","formControl","nzLoading","nzDisabled","nzMode","nzMaxTagCount","nzDropdownRender","nzShowArrow","nzNotFoundContent","nzOnSearch","nzOpenChange","ngModelChange","nzScrollToBottom"],[3,"itemSize","maxBufferPx"],[3,"nzValue","nzLabel","nzDisabled",4,"ngFor","ngForOf"],["nzDisabled","","nzCustomContent","",4,"ngIf"],["loadingMoreOptionsTpl",""],["totalCountTpl",""],["noDataTpl",""],[3,"nzValue","nzLabel","nzDisabled"],["nzDisabled","","nzCustomContent",""],[1,"searching-option"],[1,"searching-option__text"],["class","dropdown-footer",4,"ngIf"],[1,"dropdown-footer"],["class","dropdown-footer__spinner",4,"ngIf","ngIfElse"],[1,"dropdown-footer__spinner"],[1,"dropdown-footer__total"],["nzNotFoundImage","simple",3,"nzNotFoundContent"]],template:function(e,t){if(1&e&&(i.Ub(0,"nz-select",0),i.bc("nzOnSearch",function(e){return t.onSearch(e)})("nzOpenChange",function(e){return t.onOpenChange(e)})("ngModelChange",function(e){return t.selectionValueChanged(e)})("nzScrollToBottom",function(){return t.onScrollToBottom()}),i.fc(1,"async"),i.fc(2,"async"),i.Ub(3,"cdk-virtual-scroll-viewport",1),i.Fc(4,A,1,3,"nz-option",2),i.fc(5,"async"),i.Tb(),i.Fc(6,L,5,0,"nz-option",3),i.Fc(7,x,1,1,"ng-template",null,4,i.Gc),i.Tb(),i.Fc(9,P,2,2,"ng-template",null,5,i.Gc),i.Fc(11,$,1,1,"ng-template",null,6,i.Gc)),2&e){const e=i.uc(8),n=i.uc(12);i.mc("nzSize",t.size)("nzPlaceHolder",t.placeholder)("formControl",t.control)("nzLoading",t.canLoad&&i.gc(1,14,t.isLoading$))("nzDisabled",t.disabled||i.gc(2,16,t.isLoading$))("nzMode",t.mode)("nzMaxTagCount",t.maxTagCount)("nzDropdownRender",e)("nzShowArrow",!0)("nzNotFoundContent",n),i.Ab(3),i.mc("itemSize",32)("maxBufferPx",160),i.Ab(1),i.mc("ngForOf",i.gc(5,18,t.options$)),i.Ab(2),i.mc("ngIf",t.isSearching)}},directives:[y.d,T.n,T.f,_.b,_.a,S.n,S.o,y.a,I.a,w.b],pipes:[S.b],styles:["[_nghost-%COMP%], [_nghost-%COMP%]   nz-select[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]     .ant-select-arrow{top:48%}.dropdown-footer[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;align-items:center;justify-items:start;padding:4px 14px;color:#1890ff;border-top:1px solid #f0f0f0}.dropdown-footer__total[_ngcontent-%COMP%]{width:100%;grid-column:2/3;display:flex;justify-content:flex-end}.dropdown-footer__spinner[_ngcontent-%COMP%]{display:flex;align-items:center}.dropdown-footer__spinner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:18px}.dropdown-footer[_ngcontent-%COMP%]   nz-spin[_ngcontent-%COMP%]{margin-left:12px}.option[_ngcontent-%COMP%]{display:flex}.option[_ngcontent-%COMP%]   nz-spin[_ngcontent-%COMP%]{margin-left:.9em}.option[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#1890ff;margin-left:1.1em}.searching-option[_ngcontent-%COMP%]{display:flex;align-items:center}.searching-option[_ngcontent-%COMP%]   nz-spin[_ngcontent-%COMP%]{margin-left:.8em}.searching-option__text[_ngcontent-%COMP%]{margin-left:1.2em}"],changeDetection:0}),e})()},o5fV:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var i=n("mrSG"),o=n("sbGu"),s=n("dEAy"),c=n("CvgI"),r=n("tk/3"),a=n("lJxs"),l=n("pLZG"),d=n("fXoL");let u=(()=>{class e{constructor(e){this.modal=e,this.modal.updateConfig({nzWrapClassName:"vertical-center-modal",nzMaskClosable:!0,nzAutofocus:null,nzOkType:"danger",nzOkText:"Delete",nzClosable:!1})}}return e.\u0275fac=function(t){return new(t||e)(d.Ob(s.c))},e.\u0275cmp=d.Ib({type:e,selectors:[["ng-component"]],decls:0,vars:0,template:function(e,t){},encapsulation:2,changeDetection:0}),e})();class p{constructor(){const e=o.a.getInjector;this.http=e.get(r.c),this.modalService=e.get(s.d)}getItems(e,t,n){const i=Object(c.a)(e),o=Object.assign({params:i},n);return this.http.get(t,Object.assign({},o)).pipe(Object(a.a)(e=>e))}openModal(e,t=null,n,i=!0,o=600){return this.modalService.create(Object.assign(Object.assign({},i&&{nzWrapClassName:"vertical-center-modal"}),{nzTitle:e,nzWidth:o+"px",nzContent:n,nzComponentParams:Object.assign({},t)})).afterClose.pipe(Object(l.a)(e=>e))}openActionConfirmationModal(e,t){return this.modalService.confirm({nzContent:t,nzTitle:e,nzOnOk:()=>!0}).afterClose.pipe(Object(l.a)(e=>e))}deleteItem(e,t){return this.modalService.confirm({nzContent:u,nzTitle:e,nzOnOk:e=>Object(i.a)(this,void 0,void 0,function*(){return e.modal.config.nzOkLoading=!0,yield this.deleteItemRequest(t)})}).afterClose.pipe(Object(l.a)(e=>e))}deleteItemRequest(e){return Object(i.a)(this,void 0,void 0,function*(){return yield this.http.delete(e).toPromise().then(e=>"success"===e.status)})}}},pfyX:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var i=n("oaey"),o=n("sbGu"),s=n("lhsU"),c=n("3Pt+"),r=n("1G5W"),a=n("nYR2"),l=n("2Vo4"),d=n("bNXi");class u extends i.a{constructor(e){super(),this.modal=e,this.loadOptions$=new l.a(null),this.updateAfterClosing=!1;const t=o.a.getInjector;this.errorService=t.get(s.a),this.notifService=t.get(d.b)}get f(){return this.form.controls}set formInitValue(e){this.formInitialValue=Object.assign({},e)}closeModal(e=this.updateAfterClosing){this.modal.destroy(e)}saveItem(e,t,n=null){this.processing=!0,this.processingClose=e,this.form&&(this.markFormGroupTouched(this.form),this.errorService.form=this.form),t.pipe(Object(r.a)(this.destroyed),Object(a.a)(()=>this.processing=!1)).subscribe(()=>{n&&this.notifService.success(n,""),e?this.closeModal(!0):(this.form&&this.form.reset(this.formInitialValue),this.updateAfterClosing=!0)})}onItemSelected(e,t,n){n.push(e),t.patchValue(null,{emitEvent:!1})}onDeleteItemClick(e,t){this[t]=this[t].filter(t=>t.id!==e)}markFormGroupTouched(e){Object.values(e.controls).forEach(e=>{e.markAsTouched(),e instanceof c.h&&this.markFormGroupTouched(e)})}}},uPpU:function(e,t,n){"use strict";n.r(t),n.d(t,"DeviceListModule",function(){return ue});var i=n("PCNd"),o=n("tyNb"),s=n("Pj3g"),c=n("fXoL"),r=n("+K6+"),a=n("dEAy"),l=n("4U9O");let d=(()=>{class e{}return e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({factory:function(t){return new(t||e)}}),e})();var u=n("ILvI"),p=n("o5fV"),b=n("TwVa"),f=n("3Pt+"),m=n("vxZU");class h extends m.a{constructor(){super()}edit(e,t){return this.editItemRequest(e,"Device updated successfully",Object(u.g)(t))}create(e){return this.createItemRequest(e,"Device created successfully",u.f)}getPracticeOptions(e){return this.getOptions(e,u.C)}}var v=n("pfyX"),g=n("1G5W"),z=n("ocnv"),O=n("B+r4"),C=n("bb81"),y=n("zAKX"),T=n("ofXK"),_=n("PTRe"),S=n("VdD3"),I=n("5vDB"),w=n("0lU3");function A(e,t){if(1&e&&c.Pb(0,"nz-option",12),2&e){const e=t.$implicit;c.mc("nzValue",e.key)("nzLabel",e.value)}}function L(e,t){if(1&e&&(c.Sb(0),c.Pb(1,"nz-divider"),c.Ub(2,"nz-form-item"),c.Ub(3,"nz-form-label",7),c.Hc(4,"SIM card ID"),c.Tb(),c.Ub(5,"nz-form-control",2),c.Pb(6,"input",13),c.Tb(),c.Tb(),c.Ub(7,"nz-form-item"),c.Ub(8,"nz-form-label",7),c.Hc(9,"SIM activation date"),c.Tb(),c.Ub(10,"nz-form-control",2),c.Pb(11,"nz-date-picker",14),c.Tb(),c.Tb(),c.Rb()),2&e){c.ec();const e=c.uc(26);c.Ab(3),c.mc("nzSpan",6),c.Ab(2),c.mc("nzErrorTip",e),c.Ab(3),c.mc("nzSpan",6),c.Ab(2),c.mc("nzErrorTip",e),c.Ab(1),c.mc("nzShowToday",!1)}}function U(e,t){1&e&&(c.Sb(0),c.Hc(1," This field is required "),c.Rb())}function M(e,t){if(1&e&&(c.Sb(0),c.Hc(1),c.Rb()),2&e){const e=c.ec().$implicit;c.Ab(1),c.Jc(" ",e.errors.validationError," ")}}function x(e,t){if(1&e&&(c.Fc(0,U,2,0,"ng-container",9),c.Fc(1,M,2,1,"ng-container",9)),2&e){const e=t.$implicit;c.mc("ngIf",e.hasError("required")),c.Ab(1),c.mc("ngIf",e.hasError("validationError"))}}let P=(()=>{class e extends v.a{constructor(e,t){super(e),this.crudService=t,this.practiceUrl=u.C,this.practices=new b.f("getPracticeOptions","practices"),this.deviceTypeOptions=l.a,this.bpmOnlyControls=[{controlName:"sim_activation_date",defaultValue:null},{controlName:"sim_card_id",defaultValue:""}],this.form=new f.h({device_type:new f.e("",[f.s.required]),practice:new f.e(null,[f.s.required]),device_id:new f.e("",[f.s.required]),serial_number:new f.e("")})}onSaveClick(e){var t;const n=null===(t=this.device)||void 0===t?void 0:t.id,i=this.form.value,o=n?this.crudService.edit(i,n):this.crudService.create(i);this.saveItem(e,o)}practiceValueChanged(e){this.loadOptions$.next([{key:"practice",value:e.name}])}ngOnInit(){if(this.device){this.deviceTypeOptions[this.device.device_type]===this.deviceTypeOptions.blood_pressure_monitor&&this.bpmOnlyControls.forEach(e=>this.form.addControl(e.controlName,new f.e(e.defaultValue)));for(const e in this.device)if(Object.prototype.hasOwnProperty.call(this.f,e)){if(this.device[e]&&"object"==typeof this.device[e]){this.f[e].patchValue(this.device[e].id,{emitEvent:!1});continue}if("sim_activation_date"===e){this.f[e].patchValue(this.device[e]?new Date(this.device[e]):null,{emitEvent:!1});continue}this.f[e].patchValue(this.device[e],{emitEvent:!1})}}this.formInitValue=this.form.getRawValue(),this.f.device_type.valueChanges.pipe(Object(g.a)(this.destroyed)).subscribe(e=>{this.bpmOnlyControls.forEach(this.deviceTypeOptions[e]===this.deviceTypeOptions.blood_pressure_monitor||this.deviceTypeOptions[e]===this.deviceTypeOptions.wrist_bp_monitor?e=>{this.form.addControl(e.controlName,new f.e(e.defaultValue))}:e=>this.form.removeControl(e.controlName))})}}return e.\u0275fac=function(t){return new(t||e)(c.Ob(a.c),c.Ob(h))},e.\u0275cmp=c.Ib({type:e,selectors:[["ng-component"]],features:[c.zb([h]),c.xb],decls:27,vars:19,consts:[["nz-form","",3,"formGroup"],["nzRequired","",3,"nzSpan"],[3,"nzErrorTip"],["placeholder","Search and select practice",3,"control","url","valueChangedEvt"],["formControlName","device_type"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],["nz-input","","formControlName","device_id","autocomplete",""],[3,"nzSpan"],["nz-input","","formControlName","serial_number","autocomplete",""],[4,"ngIf"],[3,"processing","processingClose","isEditing","formValid","saveEvent","closeEvent"],["errorTpl",""],[3,"nzValue","nzLabel"],["nz-input","","formControlName","sim_card_id","autocomplete",""],["formControlName","sim_activation_date","nzInputReadOnly","","nzFormat","dd/MM/yyyy",3,"nzShowToday"]],template:function(e,t){if(1&e&&(c.Ub(0,"form",0),c.Ub(1,"nz-form-item"),c.Ub(2,"nz-form-label",1),c.Hc(3,"Practice"),c.Tb(),c.Ub(4,"nz-form-control",2),c.Ub(5,"app-select",3),c.bc("valueChangedEvt",function(e){return t.practiceValueChanged(e)}),c.Tb(),c.Tb(),c.Tb(),c.Ub(6,"nz-form-item"),c.Ub(7,"nz-form-label",1),c.Hc(8,"Device type"),c.Tb(),c.Ub(9,"nz-form-control",2),c.Ub(10,"nz-select",4),c.Fc(11,A,1,2,"nz-option",5),c.fc(12,"keyvalue"),c.Tb(),c.Tb(),c.Tb(),c.Ub(13,"nz-form-item"),c.Ub(14,"nz-form-label",1),c.Hc(15,"Device ID"),c.Tb(),c.Ub(16,"nz-form-control",2),c.Pb(17,"input",6),c.Tb(),c.Tb(),c.Ub(18,"nz-form-item"),c.Ub(19,"nz-form-label",7),c.Hc(20,"Serial number"),c.Tb(),c.Ub(21,"nz-form-control",2),c.Pb(22,"input",8),c.Tb(),c.Tb(),c.Fc(23,L,12,5,"ng-container",9),c.Tb(),c.Ub(24,"app-modal-footer",10),c.bc("saveEvent",function(e){return t.onSaveClick(e)})("closeEvent",function(){return t.closeModal()}),c.Tb(),c.Fc(25,x,2,2,"ng-template",null,11,c.Gc)),2&e){const e=c.uc(26);c.mc("formGroup",t.form),c.Ab(2),c.mc("nzSpan",6),c.Ab(2),c.mc("nzErrorTip",e),c.Ab(1),c.mc("control",t.f.practice)("url",t.practiceUrl),c.Ab(2),c.mc("nzSpan",6),c.Ab(2),c.mc("nzErrorTip",e),c.Ab(2),c.mc("ngForOf",c.gc(12,17,t.deviceTypeOptions)),c.Ab(3),c.mc("nzSpan",6),c.Ab(2),c.mc("nzErrorTip",e),c.Ab(3),c.mc("nzSpan",6),c.Ab(2),c.mc("nzErrorTip",e),c.Ab(2),c.mc("ngIf",t.deviceTypeOptions[t.f.device_type.value]===t.deviceTypeOptions.blood_pressure_monitor||t.deviceTypeOptions[t.f.device_type.value]===t.deviceTypeOptions.wrist_bp_monitor),c.Ab(1),c.mc("processing",t.processing)("processingClose",t.processingClose)("isEditing",!(null==t.device||!t.device.id))("formValid",t.form.valid)}},directives:[f.t,f.o,z.b,f.i,O.c,z.c,O.a,z.d,z.a,C.a,y.d,f.n,f.g,T.n,_.b,f.d,T.o,S.a,y.a,I.a,w.b],pipes:[T.i],encapsulation:2}),e})(),$=(()=>{class e extends p.a{constructor(){super()}getDeviceList(e){return this.getItems(e,u.f)}addDevice(){return this.openModal("Add new device",void 0,P)}editDevice(e){return this.openModal("Edit device "+e.device_id,{device:e},P)}deleteDevice(e){return this.deleteItem(`Are you sure you want to delete device ${e.device_id}?`,Object(u.g)(e.id))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=c.Kb({token:e,factory:e.\u0275fac,providedIn:d}),e})(),F=(()=>{class e extends ${constructor(){super(),this.displayColumns=[{name:"Device type",filterMultiple:!1,filterKey:"device_type",listOfFilter:[...Object.entries(l.a).map(e=>({text:e[1],value:e[0]}))],pipe:"deviceType",filter:!0,visible:!1},{name:"Device ID",filterKey:"device_id",customFilter:"search",filter:!0,visible:!1},{name:"Serial number",filterKey:"serial_number",customFilter:"search",filter:!0,visible:!1},{name:"SIM card ID",filterKey:"sim_card_id",customFilter:"search",filter:!0,visible:!1},{name:"SIM activation date"},{name:"Practice",filterKey:"practice",customFilter:"search",filter:!0,visible:!1},{name:"Patient",filterKey:"patient_name",customFilter:"search",filter:!0,visible:!1},{name:"Last measurement date",filterKey:"last_measurement_date",customFilter:"date",sort:!0,sortOrder:null,filter:!0,visible:!1},{name:"State",filterMultiple:!1,filterKey:"active",listOfFilter:[{text:"Active",value:"true"},{text:"Inactive",value:"false"}],filter:!0,visible:!1,pipe:"state"},{name:""}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=c.Kb({token:e,factory:e.\u0275fac,providedIn:d}),e})(),j=(()=>{class e extends ${constructor(){super(),this.displayColumns=[{name:"Device type",filterMultiple:!1,filterKey:"device_type",listOfFilter:[...Object.entries(l.a).map(e=>({text:e[1],value:e[0]}))],pipe:"deviceType",filter:!0,visible:!1},{name:"Device ID",filterKey:"device_id",customFilter:"search",filter:!0,visible:!1},{name:"Serial number",filterKey:"serial_number",customFilter:"search",filter:!0,visible:!1},{name:"SIM card ID",filterKey:"sim_card_id",customFilter:"search",filter:!0,visible:!1},{name:"SIM activation date"},{name:"Patient",filterKey:"patient_name",customFilter:"search",filter:!0,visible:!1},{name:"Last measurement date",filterKey:"last_measurement_date",customFilter:"date",sort:!0,sortOrder:null,filter:!0,visible:!1},{name:"State",filterMultiple:!1,filterKey:"active",listOfFilter:[{text:"Active",value:"true"},{text:"Inactive",value:"false"}],filter:!0,visible:!1,pipe:"state"}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=c.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const D=new c.q("DeviceListService"),k={provide:D,useFactory:e=>{switch(e.currentRole){case"admin":return new F;case"manager":return new j}},deps:[r.a,a.d]};var E=n("mCNh"),V=n("eIep"),H=n("jPNr"),K=n("HZS1"),N=n("1ReC"),R=n("OzZK"),q=n("C2AL"),G=n("RwU8"),X=n("rMZv"),Z=n("FwiY"),B=n("ZyQt"),J=n("Nqz0"),W=n("Q8cG"),Y=n("pu9d");const Q=function(){return["/import-data/devices"]};function ee(e,t){if(1&e){const e=c.Vb();c.Ub(0,"nz-page-header-extra"),c.Ub(1,"a",5),c.Hc(2,"Import devices"),c.Tb(),c.Ub(3,"button",6),c.bc("click",function(){return c.vc(e),c.ec().onAddClick()}),c.Hc(4,"Add device"),c.Tb(),c.Tb()}2&e&&(c.Ab(1),c.mc("routerLink",c.oc(1,Q)))}function te(e,t){if(1&e&&(c.Ub(0,"td"),c.Hc(1),c.Tb()),2&e){const e=c.ec().$implicit;c.Ab(1),c.Ic(null==e.practice?null:e.practice.name)}}function ne(e,t){if(1&e&&(c.Sb(0),c.Ub(1,"a",12),c.Hc(2),c.Pb(3,"i",13),c.Tb(),c.Rb()),2&e){const e=t.ngIf;c.Ab(1),c.mc("href","/patient-details/"+e.id,c.xc),c.Ab(1),c.Lc(" ",e.first_name," ",e.last_name," - ",e.patient_id," ")}}function ie(e,t){1&e&&(c.Ub(0,"nz-tag",14),c.Hc(1,"active"),c.Tb())}function oe(e,t){1&e&&(c.Ub(0,"nz-tag",15),c.Hc(1,"inactive"),c.Tb())}function se(e,t){if(1&e){const e=c.Vb();c.Ub(0,"td",16),c.Ub(1,"div"),c.Ub(2,"button",17),c.Pb(3,"i",18),c.Tb(),c.Ub(4,"nz-dropdown-menu",null,19),c.Ub(6,"ul",20),c.Ub(7,"button",21),c.bc("click",function(){c.vc(e);const t=c.ec().$implicit;return c.ec().onEditClick(t)}),c.Ub(8,"div",22),c.Pb(9,"i",23),c.Ub(10,"span"),c.Hc(11,"Edit"),c.Tb(),c.Tb(),c.Tb(),c.Ub(12,"button",21),c.bc("click",function(){c.vc(e);const t=c.ec().$implicit;return c.ec().onDeleteClick(t)}),c.Ub(13,"div",24),c.Pb(14,"i",25),c.Ub(15,"span"),c.Hc(16,"Delete"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb()}if(2&e){const e=c.uc(5);c.Ab(2),c.mc("nzDropdownMenu",e)}}const ce=function(){return["admin"]};function re(e,t){if(1&e&&(c.Ub(0,"tr"),c.Ub(1,"td"),c.Hc(2),c.fc(3,"deviceType"),c.Tb(),c.Ub(4,"td"),c.Hc(5),c.Tb(),c.Ub(6,"td"),c.Hc(7),c.Tb(),c.Ub(8,"td"),c.Hc(9),c.Tb(),c.Ub(10,"td"),c.Hc(11),c.fc(12,"date"),c.Tb(),c.Fc(13,te,2,1,"td",2),c.Ub(14,"td"),c.Fc(15,ne,4,4,"ng-container",7),c.Tb(),c.Ub(16,"td"),c.Hc(17),c.fc(18,"date"),c.Tb(),c.Ub(19,"td",8),c.Fc(20,ie,2,0,"nz-tag",9),c.Fc(21,oe,2,0,"nz-tag",10),c.Tb(),c.Fc(22,se,17,1,"td",11),c.Tb()),2&e){const e=t.$implicit;c.Ab(2),c.Ic(c.gc(3,11,e.device_type)),c.Ab(3),c.Ic(e.device_id),c.Ab(2),c.Ic(e.serial_number),c.Ab(2),c.Ic(e.sim_card_id),c.Ab(2),c.Ic(c.hc(12,13,e.sim_activation_date,"short")),c.Ab(2),c.mc("appRolesAccess",c.oc(19,ce)),c.Ab(2),c.mc("ngIf",e.patient),c.Ab(2),c.Ic(c.hc(18,16,e.last_measurement_date,"short")),c.Ab(3),c.mc("ngIf",e.active),c.Ab(1),c.mc("ngIf",!e.active),c.Ab(1),c.mc("appRolesAccess",c.oc(20,ce))}}const ae=[{path:"",component:(()=>{class e extends s.a{constructor(e){super(),this.deviceListService=e,this.displayColumns=this.deviceListService.displayColumns}getDevices(e=this.params){return this.getItems(this.deviceListService.getDeviceList(e)).pipe(Object(g.a)(this.destroyed))}get devicesPipe(){return Object(E.a)(Object(V.a)(()=>this.getDevices()))}onAddClick(){this.deviceListService.addDevice().pipe(this.devicesPipe).subscribe()}onEditClick(e){this.deviceListService.editDevice(e).pipe(this.devicesPipe).subscribe()}onDeleteClick(e){this.deviceListService.deleteDevice(e).pipe(Object(V.a)(()=>1===this.items.length?this.goToPrevPage():this.getDevices())).subscribe()}onQueryParamsChange(e){this.params=e,this.getDevices().subscribe()}}return e.\u0275fac=function(t){return new(t||e)(c.Ob(D))},e.\u0275cmp=c.Ib({type:e,selectors:[["ng-component"]],features:[c.zb([k]),c.xb],decls:5,vars:8,consts:[[1,"panel"],["nzTitle","Device list",1,"page-header"],[4,"appRolesAccess"],[3,"data","displayColumns","totalCount","pageIndex$","isLoading$","queryParamsChange"],[4,"ngFor","ngForOf"],["nz-button","","nzType","link",3,"routerLink"],["nz-button","","nzType","primary",3,"click"],[4,"ngIf"],[1,"table-cell__state"],["nzColor","green",4,"ngIf"],["nzColor","red",4,"ngIf"],["class","table-cell__actions",4,"appRolesAccess"],["target","_blank",3,"href"],["nz-icon","","nzType","icon:external-link"],["nzColor","green"],["nzColor","red"],[1,"table-cell__actions"],["nz-button","","nzType","link","nzTrigger","click","nz-dropdown","",3,"nzDropdownMenu"],["nz-icon","","nzType","icon:more","nzTheme","outline"],["menu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",1,"btn--menu-item",3,"click"],[1,"ant-btn-sm","ant-btn-link","ant-btn"],["nz-icon","","nzType","edit","nzTheme","outline"],[1,"ant-btn-sm","ant-btn-link","ant-btn","ant-btn-dangerous"],["nz-icon","","nzType","delete","nzTheme","outline"]],template:function(e,t){1&e&&(c.Ub(0,"div",0),c.Ub(1,"nz-page-header",1),c.Fc(2,ee,5,2,"nz-page-header-extra",2),c.Tb(),c.Ub(3,"app-table-wrapper",3),c.bc("queryParamsChange",function(e){return t.onQueryParamsChange(e)}),c.Fc(4,re,23,21,"tr",4),c.Tb(),c.Tb()),2&e&&(c.Ab(2),c.mc("appRolesAccess",c.oc(7,ce)),c.Ab(1),c.mc("data",t.items)("displayColumns",t.displayColumns)("totalCount",t.totalCount)("pageIndex$",t.pageIndex$)("isLoading$",t.isLoading$.asObservable()),c.Ab(1),c.mc("ngForOf",t.items))},directives:[H.a,K.a,N.a,T.n,H.c,R.a,o.g,q.a,G.a,X.i,X.b,T.o,Z.a,B.a,J.d,J.b,J.e,W.c,W.d],pipes:[Y.a,T.e],styles:[""]}),e})()}];let le=(()=>{class e{}return e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({factory:function(t){return new(t||e)},imports:[[o.h.forChild(ae)],o.h]}),e})();var de=n("S9na");let ue=(()=>{class e{}return e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({factory:function(t){return new(t||e)},imports:[[i.a,le,d,de.a]]}),e})()}}]);