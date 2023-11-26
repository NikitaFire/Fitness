(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Screen2_Screen2_module_ts"],{

/***/ 97639:
/*!*******************************************!*\
  !*** ./src/app/Screen2/Screen2.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Screen2PageModule": () => (/* binding */ Screen2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/apperyio/translate_module */ 93952);
/* harmony import */ var _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/apperyio/declarables/apperyio.declarables.module */ 11371);
/* harmony import */ var _Screen2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Screen2 */ 77165);
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/pipes.module */ 56972);
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/directives.module */ 43543);
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/components.module */ 22482);
/* harmony import */ var _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/custom-components.module */ 6235);
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/custom-modules.module */ 34363);














let Screen2PageModule = class Screen2PageModule {};
Screen2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  declarations: [_Screen2__WEBPACK_IMPORTED_MODULE_2__.Screen2],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule, _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__.DirectivesModule, _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule, _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__.ApperyioDeclarablesModule, _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__.CustomComponentsModule, _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__.CustomModulesModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild([{
    path: '',
    component: _Screen2__WEBPACK_IMPORTED_MODULE_2__.Screen2
  }]), _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__.ApperyioTranslateModule],
  exports: [_Screen2__WEBPACK_IMPORTED_MODULE_2__.Screen2]
})], Screen2PageModule);


/***/ }),

/***/ 77165:
/*!************************************!*\
  !*** ./src/app/Screen2/Screen2.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Screen2": () => (/* binding */ Screen2)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _Screen2_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Screen2.html?ngResource */ 49510);
/* harmony import */ var _Screen2_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Screen2.css?ngResource */ 56570);
/* harmony import */ var _Screen2_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Screen2_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Screen2_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Screen2.scss?ngResource */ 53233);
/* harmony import */ var _Screen2_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Screen2_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_helper */ 67845);
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_mapping_helper */ 32535);

var _a, _b, _c;









let Screen2 = class Screen2 {
  Apperyio;
  $aio_mappingHelper;
  $aio_changeDetector;
  $a;
  $v;
  aioChangeDetector;
  currentItem = null;
  _aio_content;
  mappingData = {};
  __getMapping(_currentItem, property, defaultValue, isVariable, isSelected) {
    return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
  }
  __isPropertyInMapping(_currentItem, property) {
    return this.$aio_mappingHelper.isPropertyInMapping(this.mappingData, _currentItem, property);
  }
  __setMapping(data = {}, keyName, propName) {
    const changes = data.detail || {};
    if (propName) {
      this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes[propName]);
    } else {
      this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes.value);
    }
    this.$aio_changeDetector.detectChanges();
  }
  __bindedMethods = {};
  constructor(Apperyio, $aio_mappingHelper, $aio_changeDetector) {
    this.Apperyio = Apperyio;
    this.$aio_mappingHelper = $aio_mappingHelper;
    this.$aio_changeDetector = $aio_changeDetector;
    this.$a = this.Apperyio;
    this.$v = this.Apperyio.vars;
    this.aioChangeDetector = this.$aio_changeDetector;
  }
  ngOnInit() {
    this.Apperyio.setThinScrollIfNeeded();
  }
  button4Click__j_29(event, currentItem) {
    var _this = this;
    return (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Navigate to Page */
      _this.Apperyio.navigation.forward('About_Us1');
    })();
  }
  static ctorParameters = () => [{
    type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioHelperService
  }, {
    type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_5__.ApperyioMappingHelperService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef
  }];
  static propDecorators = {
    _aio_content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['_aio_content']
    }]
  };
};
Screen2 = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  template: _Screen2_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  selector: 'page-screen2',
  styles: [(_Screen2_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default()), (_Screen2_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [typeof (_a = typeof _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioHelperService !== "undefined" && _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioHelperService) === "function" ? _a : Object, typeof (_b = typeof _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_5__.ApperyioMappingHelperService !== "undefined" && _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_5__.ApperyioMappingHelperService) === "function" ? _b : Object, typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef) === "function" ? _c : Object])], Screen2);


/***/ }),

/***/ 56570:
/*!************************************************!*\
  !*** ./src/app/Screen2/Screen2.css?ngResource ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/* Styles properties */\nh3[_aio-2E182EEA] {\n\ttext-align: center;\n\tborder-style: solid;\n\tborder-color: #999999;\n}\nion-grid[_aio-9C9A118D] {\n\tbackground-color: #cccccc;\n\tborder-style: solid;\n}\nion-col[_aio-3F9A8394] {\n\tborder-color: #000000;\n}\nh5[_aio-EB97A06C] {\n\ttext-align: center;\n\tfont-size: 26px;\n\tfont-weight: bold;\n\tfont-style: normal;\n\tborder-style: solid;\n\tborder-top-left-radius: 5px;\n\tborder-top-right-radius: 5px;\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\nion-grid[_aio-763DDF32] {\n\tbackground-color: #cccccc;\n\tborder-style: solid;\n}\nh5[_aio-C622D991] {\n\ttext-align: center;\n\tfont-size: 26px;\n\tfont-weight: bold;\n\tborder-style: solid;\n}\nion-grid[_aio-395594EF] {\n\tbackground-color: #cccccc;\n\tborder-style: solid;\n}\ndiv[_aio-B9272355] {\n\ttext-align: center;\n\tfont-size: 24px;\n\tfont-weight: bold;\n\tborder-style: solid;\n}\nion-button[_aio-CF0034EC]::part(native) {\n\tborder-color: #000000;\n\tcolor: #000000;\n}", "",{"version":3,"sources":["webpack://./src/app/Screen2/Screen2.css"],"names":[],"mappings":";AACA,sBAAsB;AACtB;CACC,kBAAkB;CAClB,mBAAmB;CACnB,qBAAqB;AACtB;AACA;CACC,yBAAyB;CACzB,mBAAmB;AACpB;AACA;CACC,qBAAqB;AACtB;AACA;CACC,kBAAkB;CAClB,eAAe;CACf,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB,2BAA2B;CAC3B,4BAA4B;CAC5B,8BAA8B;CAC9B,+BAA+B;AAChC;AACA;CACC,yBAAyB;CACzB,mBAAmB;AACpB;AACA;CACC,kBAAkB;CAClB,eAAe;CACf,iBAAiB;CACjB,mBAAmB;AACpB;AACA;CACC,yBAAyB;CACzB,mBAAmB;AACpB;AACA;CACC,kBAAkB;CAClB,eAAe;CACf,iBAAiB;CACjB,mBAAmB;AACpB;AACA;CACC,qBAAqB;CACrB,cAAc;AACf","sourcesContent":["\n/* Styles properties */\nh3[_aio-2E182EEA] {\n\ttext-align: center;\n\tborder-style: solid;\n\tborder-color: #999999;\n}\nion-grid[_aio-9C9A118D] {\n\tbackground-color: #cccccc;\n\tborder-style: solid;\n}\nion-col[_aio-3F9A8394] {\n\tborder-color: #000000;\n}\nh5[_aio-EB97A06C] {\n\ttext-align: center;\n\tfont-size: 26px;\n\tfont-weight: bold;\n\tfont-style: normal;\n\tborder-style: solid;\n\tborder-top-left-radius: 5px;\n\tborder-top-right-radius: 5px;\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\nion-grid[_aio-763DDF32] {\n\tbackground-color: #cccccc;\n\tborder-style: solid;\n}\nh5[_aio-C622D991] {\n\ttext-align: center;\n\tfont-size: 26px;\n\tfont-weight: bold;\n\tborder-style: solid;\n}\nion-grid[_aio-395594EF] {\n\tbackground-color: #cccccc;\n\tborder-style: solid;\n}\ndiv[_aio-B9272355] {\n\ttext-align: center;\n\tfont-size: 24px;\n\tfont-weight: bold;\n\tborder-style: solid;\n}\nion-button[_aio-CF0034EC]::part(native) {\n\tborder-color: #000000;\n\tcolor: #000000;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 53233:
/*!*************************************************!*\
  !*** ./src/app/Screen2/Screen2.scss?ngResource ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Custom SCSS */", "",{"version":3,"sources":["webpack://./src/app/Screen2/Screen2.scss"],"names":[],"mappings":"AAIA,gBAAA","sourcesContent":["/* Custom SCSS */"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 49510:
/*!*************************************************!*\
  !*** ./src/app/Screen2/Screen2.html?ngResource ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content class=\"ion-padding\" _aio-41470B6E #_aio_content>\n    <img _aio-3F38AD52 #j_3 src=\"assets/images/SYketSivfo8_J_bObLLBFlFNGhtudTX_kYVfOS8Xp1Gj5pqKzWTJSFS_PsArI08gRZaK1yZktQXWesHOaOz7FWcJ5xZMng_m42Vtvvu_7Vvdyx3QZs_Cw.jpg\"\n    alt=\"Image error\">\n    <h3 _aio-2E182EEA #j_4>\n        Choose your exercise\n    </h3>\n    <ion-grid _aio-9C9A118D #j_5>\n        <ion-row _aio-C064D74D #j_6>\n            <ion-col _aio-E22F7E28 #j_7 size=\"5\">\n                <img _aio-58DF1257 #j_8 src=\"assets/images/a_5_glavnyh_oshibok_v_otzhimanijah_ot_pola_15871378771761917276.jpg\"\n                alt=\"Image error\">\n            </ion-col>\n            <ion-col _aio-3F9A8394 #j_9>\n                <h5 _aio-EB97A06C #j_10>\n                    Push ups\n                </h5>\n                <ion-button _aio-00A209F6 #j_11 expand=\"block\" shape=\"round\" size=\"default\" strong=\"true\">\n                    Choose\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-grid _aio-763DDF32 #j_12>\n        <ion-row _aio-6098EAD7 #j_13>\n            <ion-col _aio-F06B9B3D #j_14 size=\"7\">\n                <img _aio-5B0B9752 #j_15 src=\"assets/images/zkmco3krnic7ce4gx4vh7y3qsxx87e7c.jpg\"\n                alt=\"Image error\">\n            </ion-col>\n            <ion-col _aio-526F0654 #j_16>\n                <h5 _aio-C622D991 #j_17>\n                    Press\n                </h5>\n                <ion-button _aio-9D9C0C9D #j_18 expand=\"block\" shape=\"round\" strong=\"true\">\n                    Choose\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-grid _aio-395594EF #j_19>\n        <ion-row _aio-C33F3609 #j_20>\n            <ion-col _aio-57A811BE #j_21 size=\"5\">\n                <img _aio-CFAEDB7C #j_22 src=\"assets/images/a_40.2b_classical_squat.jpg\" alt=\"Image error\">\n            </ion-col>\n            <ion-col _aio-AFD511AA #j_23>\n                <div _aio-B9272355 #j_24>\n                    Squats\n                </div>\n                <ion-button _aio-B2D06866 #j_25 expand=\"block\" shape=\"round\" strong=\"true\">\n                    Choose\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <aio-tester-buttons slot=\"fixed\">\n    </aio-tester-buttons>\n</ion-content>\n<ion-footer _aio-1296911C>\n    <ion-toolbar _aio-54FE2379 #j_27>\n        <ion-buttons #j_28 _aio-5B3917F3 slot=\"end\" collapse=\"true\">\n            <ion-button _aio-CF0034EC #j_29 buttonType=\"button\" expand=\"block\" (click)=\"button4Click__j_29($event, currentItem)\">\n                <ion-icon _aio-CF0034EC #j_29__icon name=\"arrow-forward\">\n                </ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title _aio-7F2EFAC5 #j_30>\n            About Us\n        </ion-title>\n    </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_Screen2_Screen2_module_ts.js.map