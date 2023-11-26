(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_About_Us1_About_Us1_module_ts"],{

/***/ 8298:
/*!***********************************************!*\
  !*** ./src/app/About_Us1/About_Us1.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "About_Us1PageModule": () => (/* binding */ About_Us1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/apperyio/translate_module */ 93952);
/* harmony import */ var _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/apperyio/declarables/apperyio.declarables.module */ 11371);
/* harmony import */ var _About_Us1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About_Us1 */ 89110);
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/pipes.module */ 56972);
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/directives.module */ 43543);
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/components.module */ 22482);
/* harmony import */ var _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/custom-components.module */ 6235);
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/custom-modules.module */ 34363);














let About_Us1PageModule = class About_Us1PageModule {};
About_Us1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  declarations: [_About_Us1__WEBPACK_IMPORTED_MODULE_2__.About_Us1],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule, _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__.DirectivesModule, _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule, _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__.ApperyioDeclarablesModule, _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_6__.CustomComponentsModule, _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_7__.CustomModulesModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild([{
    path: '',
    component: _About_Us1__WEBPACK_IMPORTED_MODULE_2__.About_Us1
  }]), _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__.ApperyioTranslateModule],
  exports: [_About_Us1__WEBPACK_IMPORTED_MODULE_2__.About_Us1]
})], About_Us1PageModule);


/***/ }),

/***/ 89110:
/*!****************************************!*\
  !*** ./src/app/About_Us1/About_Us1.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "About_Us1": () => (/* binding */ About_Us1)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _About_Us1_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About_Us1.html?ngResource */ 70720);
/* harmony import */ var _About_Us1_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About_Us1.css?ngResource */ 43522);
/* harmony import */ var _About_Us1_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_About_Us1_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _About_Us1_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./About_Us1.scss?ngResource */ 41976);
/* harmony import */ var _About_Us1_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_About_Us1_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_helper */ 67845);
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_mapping_helper */ 32535);

var _a, _b, _c;









let About_Us1 = class About_Us1 {
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
  backbuttonClick__j_41(event, currentItem) {
    var _this = this;
    return (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let __aio_tmp_val__;
      /* Navigate to Page */
      _this.Apperyio.navigation.back('Screen2');
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
About_Us1 = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  template: _About_Us1_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  selector: 'page-about_-us1',
  styles: [(_About_Us1_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default()), (_About_Us1_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [typeof (_a = typeof _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioHelperService !== "undefined" && _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioHelperService) === "function" ? _a : Object, typeof (_b = typeof _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_5__.ApperyioMappingHelperService !== "undefined" && _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_5__.ApperyioMappingHelperService) === "function" ? _b : Object, typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef) === "function" ? _c : Object])], About_Us1);


/***/ }),

/***/ 43522:
/*!****************************************************!*\
  !*** ./src/app/About_Us1/About_Us1.css?ngResource ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/* Styles properties */\nion-content[_aio-02138F4E] {\n\t--padding-top: 16px;\n\ttext-align: center;\n}\nimg[_aio-34B347D1] {\n\twidth: 100%;\n}\nh1[_aio-8F32100C] {\n\ttext-align: center;\n}\ndiv[_aio-705FF0C8] {\n\ttext-align: left;\n}\nh1[_aio-35FFB41A] {\n\ttext-align: center;\n}\na[_aio-A386B07B] {\n\ttext-align: left;\n\tmargin-bottom: 10px;\n}", "",{"version":3,"sources":["webpack://./src/app/About_Us1/About_Us1.css"],"names":[],"mappings":";AACA,sBAAsB;AACtB;CACC,mBAAmB;CACnB,kBAAkB;AACnB;AACA;CACC,WAAW;AACZ;AACA;CACC,kBAAkB;AACnB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,gBAAgB;CAChB,mBAAmB;AACpB","sourcesContent":["\n/* Styles properties */\nion-content[_aio-02138F4E] {\n\t--padding-top: 16px;\n\ttext-align: center;\n}\nimg[_aio-34B347D1] {\n\twidth: 100%;\n}\nh1[_aio-8F32100C] {\n\ttext-align: center;\n}\ndiv[_aio-705FF0C8] {\n\ttext-align: left;\n}\nh1[_aio-35FFB41A] {\n\ttext-align: center;\n}\na[_aio-A386B07B] {\n\ttext-align: left;\n\tmargin-bottom: 10px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 41976:
/*!*****************************************************!*\
  !*** ./src/app/About_Us1/About_Us1.scss?ngResource ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Custom SCSS */", "",{"version":3,"sources":["webpack://./src/app/About_Us1/About_Us1.scss"],"names":[],"mappings":"AAIA,gBAAA","sourcesContent":["/* Custom SCSS */"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 70720:
/*!*****************************************************!*\
  !*** ./src/app/About_Us1/About_Us1.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header _aio-31934740>\n    <ion-toolbar _aio-9229437D #j_39>\n        <ion-buttons #j_40 _aio-61185968 slot=\"start\" collapse=\"true\">\n            <ion-back-button _aio-80F30849 #j_41 (click)=\"backbuttonClick__j_41($event, currentItem)\">\n            </ion-back-button>\n        </ion-buttons>\n        <ion-title _aio-884D9038 #j_42>\n            About Us\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\" _aio-02138F4E #_aio_content>\n    <img _aio-34B347D1 #j_33 src=\"assets/images/photo_2020-02-11_14-30-53.jpg\" alt=\"Image error\">\n    <h1 _aio-8F32100C #j_34>\n        About Us\n    </h1>\n    <div _aio-705FF0C8 #j_35>\n        Tired of being skinny? Do you want to pump up your muscles? Do you want to be a\n        gigachad? Then get off the couch and start swinging! Time to hit the gym!\n    </div>\n    <h1 _aio-35FFB41A #j_36>\n        Contact us\n    </h1>\n    <a _aio-A386B07B #j_37>kupriyanov125@gmail.com</a><!--\n    --><aio-tester-buttons slot=\"fixed\">\n    </aio-tester-buttons>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_About_Us1_About_Us1_module_ts.js.map