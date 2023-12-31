(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



const routes = [{
  path: '',
  redirectTo: 'screen1',
  pathMatch: 'full'
}, {
  path: 'screen1',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Screen1_Screen1_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Screen1/Screen1.module */ 87258)).then(m => m.Screen1PageModule)
}, {
  path: 'screen2',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Screen2_Screen2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Screen2/Screen2.module */ 97639)).then(m => m.Screen2PageModule)
}, {
  path: 'about_us1',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_About_Us1_About_Us1_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./About_Us1/About_Us1.module */ 8298)).then(m => m.About_Us1PageModule)
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
    enableTracing: false,
    useHash: true
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic/storage */ 37045);
/* harmony import */ var _scripts_apperyio_apperyio_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/apperyio/apperyio.module */ 86890);
/* harmony import */ var _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/apperyio/declarables/apperyio.declarables.module */ 11371);
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/pipes.module */ 56972);
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/directives.module */ 43543);
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/components.module */ 22482);
/* harmony import */ var _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/custom-components.module */ 6235);
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/custom-modules.module */ 34363);
/* harmony import */ var _tinkoff_ng_dompurify__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @tinkoff/ng-dompurify */ 3373);
/* harmony import */ var _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/apperyio/translate_module */ 93952);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app */ 93485);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ 82027);
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/device/ngx */ 34344);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 37954);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 91714);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 49056);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/network/ngx */ 99118);
/* harmony import */ var _ionic_native_secure_storage_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/secure-storage/ngx */ 36608);






























_tinkoff_ng_dompurify__WEBPACK_IMPORTED_MODULE_17__.NgDompurifySanitizer.prototype._sanitize_fn = _tinkoff_ng_dompurify__WEBPACK_IMPORTED_MODULE_17__.NgDompurifySanitizer.prototype.sanitize;
_tinkoff_ng_dompurify__WEBPACK_IMPORTED_MODULE_17__.NgDompurifySanitizer.prototype.sanitize = function (...args) {
  let value = args[1];
  if (value && value.hasOwnProperty("changingThisBreaksApplicationSecurity")) {
    args[1] = value.changingThisBreaksApplicationSecurity;
  }
  return this._sanitize_fn(...args);
};
var getIonicModuleConfig, getIonicStorageModuleConfig;
let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.NgModule)({
  declarations: [_app__WEBPACK_IMPORTED_MODULE_8__.app],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonicModule.forRoot(typeof getIonicModuleConfig === "function" ? getIonicModuleConfig() : undefined), _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule, _scripts_apperyio_apperyio_module__WEBPACK_IMPORTED_MODULE_0__.ApperyioModule, _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule, _scripts_directives_module__WEBPACK_IMPORTED_MODULE_3__.DirectivesModule, _scripts_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__.ApperyioDeclarablesModule, _scripts_custom_components_module__WEBPACK_IMPORTED_MODULE_5__.CustomComponentsModule, _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_6__.CustomModulesModule, _ionic_storage__WEBPACK_IMPORTED_MODULE_25__.IonicStorageModule.forRoot(typeof getIonicStorageModuleConfig === "function" ? getIonicStorageModuleConfig() : undefined), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__.AppRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateModule.forRoot({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateLoader,
      useFactory: _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_7__.createTranslateLoader,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClient]
    }
  })],
  bootstrap: [_app__WEBPACK_IMPORTED_MODULE_8__.app],
  entryComponents: [
    //app
  ],
  providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_13__.StatusBar, _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_12__.SplashScreen, _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__.WebView, _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__.Device, _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_14__.Keyboard, _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_15__.Network, _ionic_native_secure_storage_ngx__WEBPACK_IMPORTED_MODULE_16__.SecureStorage, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_19__.Sanitizer,
    useClass: _tinkoff_ng_dompurify__WEBPACK_IMPORTED_MODULE_17__.NgDompurifySanitizer
  }]
})], AppModule);


/***/ }),

/***/ 93485:
/*!************************!*\
  !*** ./src/app/app.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.html?ngResource */ 50962);
/* harmony import */ var _app_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.css?ngResource */ 1886);
/* harmony import */ var _app_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.scss?ngResource */ 98647);
/* harmony import */ var _app_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/apperyio/apperyio_helper */ 67845);
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/apperyio/apperyio_mapping_helper */ 32535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 37954);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 91714);
var _a, _b, _c, _d, _e, _f, _g;













let app = class app {
  Apperyio;
  $aio_mappingHelper;
  $aio_changeDetector;
  platform;
  statusBar;
  splashScreen;
  menuCtrl;
  deviceType = 'web-browser';
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
  constructor(Apperyio, $aio_mappingHelper, $aio_changeDetector, platform, statusBar, splashScreen, menuCtrl) {
    this.Apperyio = Apperyio;
    this.$aio_mappingHelper = $aio_mappingHelper;
    this.$aio_changeDetector = $aio_changeDetector;
    this.platform = platform;
    this.statusBar = statusBar;
    this.splashScreen = splashScreen;
    this.menuCtrl = menuCtrl;
    this.$a = this.Apperyio;
    this.$v = this.Apperyio.vars;
    this.aioChangeDetector = this.$aio_changeDetector;
    this.deviceType = window.cordova ? 'mobile' : 'web-browser';
    // do not remove this code unless you know what you do
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  ngOnInit() {
    this.Apperyio.setThinScrollIfNeeded();
  }
  static ctorParameters = () => [{
    type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService
  }, {
    type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
  }, {
    type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__.StatusBar
  }, {
    type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__.SplashScreen
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController
  }];
  static propDecorators = {
    _aio_content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
      args: ['_aio_content']
    }]
  };
};
app = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  template: _app_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  selector: 'app-root',
  styles: [(_app_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default()), (_app_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [typeof (_a = typeof _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService !== "undefined" && _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService) === "function" ? _a : Object, typeof (_b = typeof _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService !== "undefined" && _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService) === "function" ? _b : Object, typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef) === "function" ? _c : Object, typeof (_d = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform) === "function" ? _d : Object, typeof (_e = typeof _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__.StatusBar !== "undefined" && _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__.StatusBar) === "function" ? _e : Object, typeof (_f = typeof _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__.SplashScreen !== "undefined" && _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__.SplashScreen) === "function" ? _f : Object, typeof (_g = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController) === "function" ? _g : Object])], app);


/***/ }),

/***/ 44825:
/*!**********************************************************!*\
  !*** ./src/app/custom_component/Rating/Rating.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingComponentModule": () => (/* binding */ RatingComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scripts/apperyio/translate_module */ 93952);
/* harmony import */ var _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scripts/apperyio/declarables/apperyio.declarables.module */ 11371);
/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Rating */ 87862);
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../scripts/pipes.module */ 56972);
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../scripts/directives.module */ 43543);
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../scripts/components.module */ 22482);
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../scripts/custom-modules.module */ 34363);
/* harmony import */ var ng_rating_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-rating-bar */ 63499);














let RatingComponentModule = class RatingComponentModule {};
RatingComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  declarations: [_Rating__WEBPACK_IMPORTED_MODULE_2__.Rating],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule, _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule, _scripts_directives_module__WEBPACK_IMPORTED_MODULE_4__.DirectivesModule, _scripts_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule, _scripts_apperyio_declarables_apperyio_declarables_module__WEBPACK_IMPORTED_MODULE_1__.ApperyioDeclarablesModule, _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_6__.CustomModulesModule, ng_rating_bar__WEBPACK_IMPORTED_MODULE_12__.NgRatingBarModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _scripts_apperyio_translate_module__WEBPACK_IMPORTED_MODULE_0__.ApperyioTranslateModule],
  exports: [_Rating__WEBPACK_IMPORTED_MODULE_2__.Rating],
  entryComponents: [_Rating__WEBPACK_IMPORTED_MODULE_2__.Rating]
})], RatingComponentModule);


/***/ }),

/***/ 87862:
/*!***************************************************!*\
  !*** ./src/app/custom_component/Rating/Rating.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rating": () => (/* binding */ Rating)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _Rating_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rating.html?ngResource */ 65594);
/* harmony import */ var _Rating_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rating.css?ngResource */ 59235);
/* harmony import */ var _Rating_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Rating_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Rating_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Rating.scss?ngResource */ 499);
/* harmony import */ var _Rating_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Rating_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../scripts/apperyio/apperyio_helper */ 67845);
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../scripts/apperyio/apperyio_mapping_helper */ 32535);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
var _a, _b, _c;












let Rating = class Rating {
  Apperyio;
  $aio_mappingHelper;
  $aio_changeDetector;
  model;
  $a;
  $v;
  aioChangeDetector;
  currentItem = null;
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
  rating;
  starsSize;
  ratingCount;
  disabled;
  /**
   * A callback executed when the content of the editor changes. Part of the
   * `ControlValueAccessor` (https://angular.io/api/forms/ControlValueAccessor) interface.
   *
   * Note: Unset unless the component uses the `ngModel`.
   */
  ngModelOnChange;
  /**
   * A callback executed when the editor has been blurred. Part of the
   * `ControlValueAccessor` (https://angular.io/api/forms/ControlValueAccessor) interface.
   *
   * Note: Unset unless the component uses the `ngModel`.
   */
  ccOnTouched;
  // Implementing the ControlValueAccessor interface (only when binding to ngModel).
  writeValue(value) {
    this.model = value;
  }
  // Implementing the ControlValueAccessor interface (only when binding to ngModel).
  registerOnChange(callback) {
    this.ngModelOnChange = callback;
  }
  // Implementing the ControlValueAccessor interface (only when binding to ngModel).
  registerOnTouched(callback) {
    this.ccOnTouched = callback;
  }
  // Implementing the ControlValueAccessor interface (only when binding to ngModel).
  setDisabledState(isDisabled) {}
  validate(control) {
    return null;
  }
  setValue($event) {
    this.ngModelOnChange($event);
  }
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
  static ctorParameters = () => [{
    type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService
  }, {
    type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef
  }];
  static propDecorators = {
    rating: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    starsSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    ratingCount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
    }]
  };
};
Rating = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  template: _Rating_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  selector: 'component-rating',
  providers: [{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(() => Rating),
    multi: true
  }, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(() => Rating),
    multi: true
  }],
  styles: [(_Rating_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default()), (_Rating_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [typeof (_a = typeof _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService !== "undefined" && _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioHelperService) === "function" ? _a : Object, typeof (_b = typeof _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService !== "undefined" && _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioMappingHelperService) === "function" ? _b : Object, typeof (_c = typeof _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef) === "function" ? _c : Object])], Rating);


/***/ }),

/***/ 63053:
/*!****************************************************************!*\
  !*** ./src/app/scripts/apperyio/appclient/appclient.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppClientModule": () => (/* binding */ AppClientModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _appclient_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appclient_service */ 2004);
/* harmony import */ var _appclient_generic_wrapper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appclient_generic_wrapper_service */ 1015);




let AppClientModule = class AppClientModule {};
AppClientModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  providers: [_appclient_service__WEBPACK_IMPORTED_MODULE_0__.AppClientService, _appclient_generic_wrapper_service__WEBPACK_IMPORTED_MODULE_1__.AppClientGenericWrapperService]
})], AppClientModule);


/***/ }),

/***/ 1015:
/*!*********************************************************************************!*\
  !*** ./src/app/scripts/apperyio/appclient/appclient_generic_wrapper_service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppClientGenericWrapperService": () => (/* binding */ AppClientGenericWrapperService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _appclient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appclient_service */ 2004);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config_service */ 74121);
var _a, _b;





let AppClientGenericWrapperService = class AppClientGenericWrapperService {
  appClientService;
  apperyioConfigService;
  constructor(appClientService, apperyioConfigService) {
    this.appClientService = appClientService;
    this.apperyioConfigService = apperyioConfigService;
  }
  goOnline(serviceRequest) {
    return this.appClientService.goOnline();
  }
  goOffline(serviceRequest) {
    return this.appClientService.goOffline();
  }
  setSessionToken(serviceRequest) {
    return this.appClientService.setSessionToken(serviceRequest.token);
  }
  revertLocalChanges(serviceRequest) {
    return this.appClientService.revertLocalChanges();
  }
  retrySync(serviceRequest) {
    return this.appClientService.retrySync();
  }
  resetFailedSync(serviceRequest) {
    return this.appClientService.resetFailedSync();
  }
  getState(serviceRequest) {
    return this.appClientService.getState();
  }
  getInstance(serviceRequest) {
    return this.appClientService.mssdk();
  }
  getConflict(serviceRequest) {
    return this.appClientService.getConflict();
  }
  resolveConflict(serviceRequest) {
    return this.appClientService.resolveConflict(serviceRequest.data, serviceRequest.action);
  }
  signup(serviceRequest) {
    return this.appClientService.signup(serviceRequest.username, serviceRequest.password, serviceRequest.options);
  }
  updateUser(serviceRequest) {
    return this.appClientService.updateUser(serviceRequest.username, serviceRequest.password, serviceRequest.options);
  }
  removeUser(serviceRequest) {
    return this.appClientService.removeUser();
  }
  loginAnonymously(serviceRequest) {
    return this.appClientService.loginAnonymously();
  }
  login(serviceRequest) {
    return this.appClientService.login(serviceRequest.username, serviceRequest.password, serviceRequest.token, serviceRequest.options);
  }
  logout(serviceRequest) {
    return this.appClientService.logout();
  }
  getCurrentUser(serviceRequest) {
    return this.appClientService.getCurrentUser();
  }
  invoke(request, serviceSettings) {
    var cached = lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(request.cached) ? serviceSettings.cached : request.cached;
    if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isString(cached)) {
      cached = cached.toLowerCase() === "true";
    }
    request.requestType = serviceSettings.requestType;
    request.responseType = serviceSettings.responseType;
    request.nativeBinaryResponse = serviceSettings.nativeBinaryResponse;
    return this.appClientService.invoke(serviceSettings.method, serviceSettings.url, request, cached);
  }
  deleteUndefinedFields(options) {
    for (var field in options) {
      if (options[field] === undefined) {
        delete options[field];
      }
    }
    return options;
  }
  deleteUndefinedFieldsDeep(obj) {
    let result = obj;
    if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray(obj)) {
      lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(result, function (value, index) {
        result[index] = this.deleteUndefinedFieldsDeep(value);
      }.bind(this));
      lodash__WEBPACK_IMPORTED_MODULE_0___default().remove(result, (lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined));
    } else if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isObject(obj)) {
      result = lodash__WEBPACK_IMPORTED_MODULE_0___default().omitBy(obj, (lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined));
      lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(result, function (value, key) {
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isObject(value)) {
          result[key] = this.deleteUndefinedFieldsDeep(value);
        }
      }.bind(this));
    }
    return result;
  }
  list(options, config) {
    return this.appClientService.getModelDao(config.model).then(function (dao) {
      var findOptions = {};
      var findWhere = {};
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(options.where) && lodash__WEBPACK_IMPORTED_MODULE_0___default().isObject(options.where)) {
        findWhere = this.deleteUndefinedFieldsDeep(options.where);
      }
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(options.offset) && !lodash__WEBPACK_IMPORTED_MODULE_0___default().isObject(options.offset)) {
        findOptions["offset"] = options.offset;
      }
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(options.limit) && !lodash__WEBPACK_IMPORTED_MODULE_0___default().isObject(options.limit)) {
        findOptions["limit"] = options.limit;
      }
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(options.sortBy)) {
        findOptions["sort"] = options.sortBy;
      }
      findOptions["cached"] = options.cached;
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(findOptions["cached"]) && lodash__WEBPACK_IMPORTED_MODULE_0___default().isString(findOptions["cached"])) {
        findOptions["cached"] = findOptions["cached"].toLowerCase() === "true";
      }
      findOptions["clearCache"] = options.clearCache;
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(findOptions["clearCache"]) && lodash__WEBPACK_IMPORTED_MODULE_0___default().isString(findOptions["clearCache"])) {
        findOptions["clearCache"] = findOptions["clearCache"].toLowerCase() === "true";
      }
      return dao.find(findWhere, findOptions).then(function (data) {
        return data;
      });
    }.bind(this));
  }
  count(options, config) {
    return this.appClientService.getModelDao(config.model).then(function (dao) {
      var findOptions = {};
      var findWhere = {};
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(options.where) && lodash__WEBPACK_IMPORTED_MODULE_0___default().isObject(options.where)) {
        findWhere = this.deleteUndefinedFieldsDeep(options.where);
      }
      findOptions["cached"] = options.cached;
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(findOptions["cached"]) && lodash__WEBPACK_IMPORTED_MODULE_0___default().isString(findOptions["cached"])) {
        findOptions["cached"] = findOptions["cached"].toLowerCase() === "true";
      }
      return dao.getCount(findWhere, findOptions).then(function (data) {
        return data;
      });
    }.bind(this));
  }
  fetch(options, config) {
    return this.appClientService.getModelDao(config.model).then(function (dao) {
      return dao.fetch();
    });
  }
  read(options, config) {
    return this.appClientService.getModelDao(config.model).then(function (dao) {
      var operationOptions = {};
      operationOptions["cached"] = options.cached;
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isUndefined(operationOptions["cached"]) && lodash__WEBPACK_IMPORTED_MODULE_0___default().isString(operationOptions["cached"])) {
        operationOptions["cached"] = operationOptions["cached"].toLowerCase() === "true";
      }
      return dao.get(options[config.primaryKeyName], operationOptions).then(function (data) {
        return data;
      });
    });
  }
  post(options, config) {
    this.deleteUndefinedFields(options);
    return this.appClientService.getModelDao(config.model).then(function (dao) {
      return dao.create(options).then(function (data) {
        return data;
      });
    });
  }
  put(options, config) {
    this.deleteUndefinedFields(options);
    return this.appClientService.getModelDao(config.model).then(function (dao) {
      return dao.update(options[config.primaryKeyName], options).then(function (data) {
        return data;
      });
    });
  }
  del(options, config) {
    return this.appClientService.getModelDao(config.model).then(function (dao) {
      return dao.delete(options[config.primaryKeyName], {}, options).then(function (data) {
        return data;
      });
    });
  }
  clear(options, config) {
    return this.appClientService.getModelDao(config.model).then(function (dao) {
      return dao.clearCache();
    });
  }
  ethSetPrivateKey(serviceRequest) {
    return this.appClientService.ethSetPrivateKey(serviceRequest.privateKey, serviceRequest.password);
  }
  ethCall(serviceRequest) {
    return this.appClientService.ethCall(serviceRequest.methodName, serviceRequest, this.apperyioConfigService.get("AppClientETHSettings"));
  }
  ethContractSendTransaction(serviceRequest) {
    return this.appClientService.ethContractSendTransaction(serviceRequest.methodName, serviceRequest, this.apperyioConfigService.get("AppClientETHSettings"));
  }
  ethGetBalance(serviceRequest) {
    return this.appClientService.ethGetBalance(serviceRequest, this.apperyioConfigService.get("AppClientETHSettings"));
  }
  ethTransferEther(serviceRequest) {
    return this.appClientService.ethTransferEther(serviceRequest, this.apperyioConfigService.get("AppClientETHSettings"));
  }
  ethGetTransaction(serviceRequest) {
    return this.appClientService.ethGetTransaction(serviceRequest.hash, this.apperyioConfigService.get("AppClientETHSettings"));
  }
  ethGetTransactionReceipt(serviceRequest) {
    return this.appClientService.ethGetTransactionReceipt(serviceRequest.hash, this.apperyioConfigService.get("AppClientETHSettings"));
  }
  ethGetAccount(serviceRequest) {
    return this.appClientService.ethGetAccount();
  }
  ethCreateAccount(serviceRequest) {
    return this.appClientService.ethCreateAccount(serviceRequest.password);
  }
  ethExportPrivateKey(serviceRequest) {
    return this.appClientService.ethExportPrivateKey(serviceRequest.password);
  }
  static ctorParameters = () => [{
    type: _appclient_service__WEBPACK_IMPORTED_MODULE_1__.AppClientService
  }, {
    type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ApperyioConfigService
  }];
};
AppClientGenericWrapperService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [typeof (_a = typeof _appclient_service__WEBPACK_IMPORTED_MODULE_1__.AppClientService !== "undefined" && _appclient_service__WEBPACK_IMPORTED_MODULE_1__.AppClientService) === "function" ? _a : Object, typeof (_b = typeof _config_service__WEBPACK_IMPORTED_MODULE_2__.ApperyioConfigService !== "undefined" && _config_service__WEBPACK_IMPORTED_MODULE_2__.ApperyioConfigService) === "function" ? _b : Object])], AppClientGenericWrapperService);


/***/ }),

/***/ 2004:
/*!*****************************************************************!*\
  !*** ./src/app/scripts/apperyio/appclient/appclient_service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppClientService": () => (/* binding */ AppClientService)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config_service */ 74121);

var _a;




let AppClientService = class AppClientService {
  apperyioConfigService;
  appClient;
  constructor(apperyioConfigService) {
    this.apperyioConfigService = apperyioConfigService;
  }
  loadAppClient() {
    var _this = this;
    return (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.appClient) {
        return _this.appClient;
      }
      const {
        default: appClient
      } = yield import( /*webpackIgnore: true*/'./app_client.js');
      _this.appClient = appClient;
      return _this.appClient;
    })();
  }
  mssdk() {
    var _this2 = this;
    return (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.loadAppClient();
      var AppClientInitOptions = {
        "domain": _this2.apperyioConfigService.get("AppClientSettings.domain"),
        "apiExpressAexDomain": _this2.apperyioConfigService.get("AppClientSettings.aexDomain"),
        "apiKey": _this2.apperyioConfigService.get("AppClientSettings.apiKey"),
        "currentState": _this2.apperyioConfigService.get("AppClientSettings.currentState"),
        "handleNetworkState": _this2.apperyioConfigService.get("AppClientSettings.handleNetworkState"),
        "cacheTimeout": _this2.apperyioConfigService.get("AppClientSettings.cacheTimeout"),
        "requestTimeout": _this2.apperyioConfigService.get("AppClientSettings.requestTimeout"),
        "autoLogin": _this2.apperyioConfigService.get("AppClientSettings.autoLogin"),
        "autoSync": _this2.apperyioConfigService.get("AppClientSettings.autoSync"),
        "clearOnLogout": _this2.apperyioConfigService.get("AppClientSettings.clearOnLogout"),
        "backendTarget": _this2.apperyioConfigService.get("AppClientSettings.backendTarget"),
        "isDataValidationEnabled": false
      };
      if (!lodash__WEBPACK_IMPORTED_MODULE_1___default().isUndefined(AppClientInitOptions.handleNetworkState) && lodash__WEBPACK_IMPORTED_MODULE_1___default().isString(AppClientInitOptions.handleNetworkState)) {
        AppClientInitOptions.handleNetworkState = AppClientInitOptions.handleNetworkState.toLowerCase() === "true";
      }
      if (!lodash__WEBPACK_IMPORTED_MODULE_1___default().isUndefined(AppClientInitOptions.autoLogin) && lodash__WEBPACK_IMPORTED_MODULE_1___default().isString(AppClientInitOptions.autoLogin)) {
        AppClientInitOptions.autoLogin = AppClientInitOptions.autoLogin.toLowerCase() === "true";
      }
      if (!lodash__WEBPACK_IMPORTED_MODULE_1___default().isUndefined(AppClientInitOptions.autoSync) && lodash__WEBPACK_IMPORTED_MODULE_1___default().isString(AppClientInitOptions.autoSync)) {
        AppClientInitOptions.autoSync = AppClientInitOptions.autoSync.toLowerCase() === "true";
      }
      if (!lodash__WEBPACK_IMPORTED_MODULE_1___default().isUndefined(AppClientInitOptions.clearOnLogout) && lodash__WEBPACK_IMPORTED_MODULE_1___default().isString(AppClientInitOptions.clearOnLogout)) {
        AppClientInitOptions.clearOnLogout = AppClientInitOptions.clearOnLogout.toLowerCase() === "true";
      }
      return _this2.appClient.init(AppClientInitOptions);
    })();
  }
  setStaticMetadata(metadata) {
    var _this3 = this;
    return (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.loadAppClient();
      let result;
      result = _this3.appClient.setProjectMetadata(metadata);
      if (!lodash__WEBPACK_IMPORTED_MODULE_1___default().isUndefined(result)) {
        return result.catch(e => Promise.resolve({
          status: "rejected",
          data: e
        }));
      } else {
        return Promise.resolve();
      }
    })();
  }
  instance() {
    var _this4 = this;
    return (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.loadAppClient();
      return Promise.resolve(_this4.appClient);
    })();
  }
  invokeAfterInit(func) {
    var _this5 = this;
    return (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.loadAppClient();
      return _this5.mssdk()["catch"](function () {}).then(func.bind(_this5));
    })();
  }
  invokeAfterSuccessInit(func) {
    return this.mssdk().then(func);
  }
  invokeAppClientMethod(...params) {
    var _this6 = this;
    return (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this6.loadAppClient();
      var promise;
      var method = params[0];
      var methodArguments = lodash__WEBPACK_IMPORTED_MODULE_1___default().tail(params);
      var appClientMethodExecutor = function () {
        return this.appClient[method].apply(this.appClient, methodArguments);
      }.bind(_this6);
      if (!_this6.appClient.isInitialized()) {
        promise = _this6.invokeAfterInit(appClientMethodExecutor);
      } else {
        promise = appClientMethodExecutor();
      }
      return promise;
    })();
  }
  goOnline() {
    return this.invokeAfterSuccessInit(function (success) {
      return success.goOnline();
    });
  }
  goOffline() {
    return this.invokeAfterSuccessInit(function (success) {
      return success.goOffline();
    });
  }
  setSessionToken(sessionToken) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.setSessionToken(sessionToken);
    });
  }
  revertLocalChanges() {
    return this.invokeAppClientMethod("revertLocalChanges");
  }
  retrySync() {
    return this.invokeAppClientMethod("retrySync");
  }
  resetFailedSync() {
    return this.invokeAppClientMethod("resetFailedSync");
  }
  getState() {
    return this.invokeAfterInit(function () {
      return {
        state: this.appClient.state
      };
    });
  }
  getConflict() {
    return this.invokeAppClientMethod("getConflict");
  }
  resolveConflict(data, action) {
    return this.invokeAppClientMethod("resolveConflict", data, action);
  }
  signup(username, password, options) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.signup(username, password, options);
    });
  }
  updateUser(username, password, options) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.updateUser(username, password, options);
    });
  }
  removeUser() {
    return this.invokeAfterSuccessInit(function (success) {
      return success.removeUser();
    });
  }
  loginAnonymously() {
    return this.invokeAfterSuccessInit(function (success) {
      return success.loginAnonymously();
    });
  }
  login(username, password, token, options) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.login(username, password, token, options);
    });
  }
  logout() {
    return this.invokeAfterSuccessInit(function (success) {
      return success.logout();
    });
  }
  getCurrentUser() {
    return this.invokeAfterSuccessInit(function (success) {
      return success.getCurrentUser();
    });
  }
  invoke(method, path, options, cached) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.invoke(method, path, options, cached);
    });
  }
  ethSetPrivateKey(privateKey, password) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.setEthPrivateKey(privateKey, password);
    });
  }
  ethCall(methodName, options, settings) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.ethContractCall(methodName, options, settings);
    });
  }
  ethContractSendTransaction(methodName, options, settings) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.ethContractSendTransaction(methodName, options, settings);
    });
  }
  ethGetBalance(options, settings) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.ethGetBalance(options, settings);
    });
  }
  ethTransferEther(options, settings) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.ethTransferEther(options, settings);
    });
  }
  ethGetTransaction(hash, settings) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.ethGetTransaction(hash, settings);
    });
  }
  ethGetTransactionReceipt(hash, settings) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.ethGetTransactionReceipt(hash, settings);
    });
  }
  ethGetAccount() {
    return this.invokeAfterSuccessInit(function (success) {
      return success.ethGetAccount();
    });
  }
  ethCreateAccount(password) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.ethCreateAccount(password);
    });
  }
  ethExportPrivateKey(password) {
    return this.invokeAfterSuccessInit(function (success) {
      return success.ethExportPrivateKey(password);
    });
  }
  getModelDao(model) {
    return this.mssdk().then(function (success) {
      return success.dao(model);
    });
  }
  static ctorParameters = () => [{
    type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ApperyioConfigService
  }];
};
AppClientService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [typeof (_a = typeof _config_service__WEBPACK_IMPORTED_MODULE_2__.ApperyioConfigService !== "undefined" && _config_service__WEBPACK_IMPORTED_MODULE_2__.ApperyioConfigService) === "function" ? _a : Object])], AppClientService);


/***/ }),

/***/ 86890:
/*!*****************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioModule": () => (/* binding */ ApperyioModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _appclient_appclient_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appclient/appclient.module */ 63053);
/* harmony import */ var _apperyio_restservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apperyio_restservice */ 82734);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config_service */ 74121);
/* harmony import */ var _entityapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entityapi_service */ 15877);
/* harmony import */ var _apperyio_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apperyio_helper */ 67845);
/* harmony import */ var _apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apperyio_mapping_helper */ 32535);
/* harmony import */ var _apperyio_data_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apperyio_data_helper */ 41265);
/* harmony import */ var _apperyio_native_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./apperyio_native_helper */ 66272);
/* harmony import */ var _apperyio_preload_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./apperyio_preload_helper */ 32892);
/* harmony import */ var _apperyio_theme_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./apperyio_theme_helper */ 89084);
/* harmony import */ var _apperyio_social_login_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./apperyio_social_login_helper */ 37526);
/* harmony import */ var _apperyio_push_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./apperyio_push_helper */ 21277);
/* harmony import */ var _apperyio_hot_push_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./apperyio_hot_push_helper */ 34798);
/* harmony import */ var _apperyio_datetime_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./apperyio_datetime_helper */ 5510);
/* harmony import */ var _apperyio_navigation_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./apperyio_navigation_helper */ 82022);
/* harmony import */ var _modal_screens_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modal_screens_service */ 33905);



















let ApperyioModule = class ApperyioModule {};
ApperyioModule = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.NgModule)({
  imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientJsonpModule, _appclient_appclient_module__WEBPACK_IMPORTED_MODULE_0__.AppClientModule],
  providers: [_apperyio_restservice__WEBPACK_IMPORTED_MODULE_1__.ApperyioRestService, _config_service__WEBPACK_IMPORTED_MODULE_2__.ApperyioConfigService, _entityapi_service__WEBPACK_IMPORTED_MODULE_3__.EntityApiService, _apperyio_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioHelperService, _apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_5__.ApperyioMappingHelperService, _apperyio_data_helper__WEBPACK_IMPORTED_MODULE_6__.ApperyioDataHelperService, _apperyio_native_helper__WEBPACK_IMPORTED_MODULE_7__.ApperyioNativeHelperService, _apperyio_preload_helper__WEBPACK_IMPORTED_MODULE_8__.ApperyioPreloadHelperService, _apperyio_theme_helper__WEBPACK_IMPORTED_MODULE_9__.ApperyioThemeHelperService, _apperyio_social_login_helper__WEBPACK_IMPORTED_MODULE_10__.ApperyioSocialLoginHelperService, _apperyio_push_helper__WEBPACK_IMPORTED_MODULE_11__.ApperyioPushHelperService, _apperyio_hot_push_helper__WEBPACK_IMPORTED_MODULE_12__.ApperyioHotPushHelperService, _apperyio_datetime_helper__WEBPACK_IMPORTED_MODULE_13__.ApperyioDateTimeHelperService, _apperyio_navigation_helper__WEBPACK_IMPORTED_MODULE_14__.ApperyioNavigationHelperService, _modal_screens_service__WEBPACK_IMPORTED_MODULE_15__.ModalScreensService]
})], ApperyioModule);


/***/ }),

/***/ 41265:
/*!**********************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio_data_helper.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioDataHelperService": () => (/* binding */ ApperyioDataHelperService)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 37045);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ 4274);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);

var _a;






let ApperyioDataHelperService = class ApperyioDataHelperService {
  storage;
  constructor(storage) {
    this.storage = storage;
  }
  _variables = {};
  initialized = false;
  initStarted = false;
  initializedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  init(context) {
    var _this = this;
    return (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.initStarted) return;
      _this.initStarted = true;
      let keys;
      const variables = _models__WEBPACK_IMPORTED_MODULE_1__._aioDefStorageValues.variables;
      keys = Object.keys(variables);
      keys.forEach(key => {
        _this.setVariable(key, lodash__WEBPACK_IMPORTED_MODULE_2___default().cloneDeep(variables[key]));
      });
      const functions = _models__WEBPACK_IMPORTED_MODULE_1__._aioDefStorageValues.functions;
      keys = Object.keys(functions);
      keys.forEach(key => {
        _this.setVariable(key, functions[key].bind(context));
      });
      const storages = _models__WEBPACK_IMPORTED_MODULE_1__._aioDefStorageValues.storages;
      keys = Object.keys(storages);
      const finishInit = () => {
        _this.initialized = true;
        _this.initializedSubject.next();
        _this.initializedSubject.complete();
      };
      if (keys.length) {
        _this.storage.keys().then(storageKeys => {
          let setPromises = [];
          for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (storageKeys.indexOf(key) === -1) {
              setPromises.push(_this.setStorage(key, storages[key]));
            }
          }
          Promise.all(setPromises).then(() => {
            finishInit();
          }).catch(() => {
            finishInit();
          });
        }).catch(() => {
          finishInit();
        });
      } else {
        finishInit();
      }
    })();
  }
  setVariable(varName, value) {
    this._variables[varName] = value;
  }
  getVariable(varName) {
    return this._variables[varName];
  }
  setStorage(varName, value) {
    return this.storage.set(varName, value);
  }
  _getStorage(varName) {
    return this.storage.get(varName);
  }
  getStorage(varName) {
    if (this.initialized) {
      return this._getStorage(varName);
    } else {
      return new Promise(res => {
        this.initializedSubject.subscribe(() => {
          this.getStorage(varName).then(val => res(val));
        });
      });
    }
  }
  removeStorage(varName) {
    return this.storage.remove(varName);
  }
  clearStorage() {
    return this.storage.clear();
  }
  getStorageKeys() {
    return this.storage.keys();
  }
  static ctorParameters = () => [{
    type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage
  }];
};
ApperyioDataHelperService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [typeof (_a = typeof _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage !== "undefined" && _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage) === "function" ? _a : Object])], ApperyioDataHelperService);

;

/***/ }),

/***/ 5510:
/*!**************************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio_datetime_helper.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioDateTimeHelperService": () => (/* binding */ ApperyioDateTimeHelperService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let ApperyioDateTimeHelperService = class ApperyioDateTimeHelperService {
  zoneOffset = new Date().getTimezoneOffset();
  utcToLocal(dateStr, zoneOffset) {
    if (zoneOffset === undefined) {
      zoneOffset = -this.zoneOffset;
    } else {
      zoneOffset = -zoneOffset;
    }
    if (!dateStr) return "";
    try {
      let date = new Date(dateStr);
      date.setSeconds(zoneOffset * 60);
      return date.toISOString().slice(0, -1);
    } catch (e) {
      console.error(e);
      return "";
    }
  }
  localToUtc(dateStr) {
    if (!dateStr) return "";
    try {
      let date = new Date(dateStr);
      return date.toISOString();
    } catch (e) {
      console.error(e);
      return "";
    }
  }
};
ApperyioDateTimeHelperService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], ApperyioDateTimeHelperService);

;

/***/ }),

/***/ 67845:
/*!*****************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio_helper.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioHelperService": () => (/* binding */ ApperyioHelperService)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ 7074);
/* harmony import */ var _entityapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entityapi_service */ 15877);
/* harmony import */ var _apperyio_data_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apperyio_data_helper */ 41265);
/* harmony import */ var _apperyio_native_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apperyio_native_helper */ 66272);
/* harmony import */ var _apperyio_preload_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apperyio_preload_helper */ 32892);
/* harmony import */ var _apperyio_theme_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apperyio_theme_helper */ 89084);
/* harmony import */ var _apperyio_hot_push_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./apperyio_hot_push_helper */ 34798);
/* harmony import */ var _apperyio_datetime_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./apperyio_datetime_helper */ 5510);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config_service */ 74121);
/* harmony import */ var _modal_screens_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal_screens_service */ 33905);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _apperyio_navigation_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./apperyio_navigation_helper */ 82022);
/* harmony import */ var _apperyio_social_login_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./apperyio_social_login_helper */ 37526);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/common */ 18545);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/db */ 19325);
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/http */ 98155);
/* harmony import */ var _utils_app_client__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utils/app_client */ 76007);
/* harmony import */ var _utils_secure_storage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utils/secure_storage */ 30521);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/network/ngx */ 99118);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;




















// Mixins with Utils methods







let ApperyioHelperService = class ApperyioHelperService {
  injector;
  router;
  entityAPI;
  modalScreensSrv;
  sanitizer;
  data;
  native;
  preload;
  theme;
  user;
  hotPush;
  dateTime;
  platform;
  navigation;
  http;
  network;
  config;
  translate;
  loadingController;
  ngZone;
  db = _utils_db__WEBPACK_IMPORTED_MODULE_16__.UtilsDB;
  servicesMap;
  _services = {};
  controllers = {};
  isInPreview = false;
  projectInfo = _constants__WEBPACK_IMPORTED_MODULE_1__.projectInfo;
  vars = {};
  _ = (lodash__WEBPACK_IMPORTED_MODULE_13___default());
  moment = (moment__WEBPACK_IMPORTED_MODULE_14___default());
  get path() {
    return this.router?.url?.substring(1);
  }
  constructor(injector, router, entityAPI, modalScreensSrv, sanitizer, data, native, preload, theme, user, hotPush, dateTime, platform, navigation, http, network, config, translate, loadingController, ngZone) {
    this.injector = injector;
    this.router = router;
    this.entityAPI = entityAPI;
    this.modalScreensSrv = modalScreensSrv;
    this.sanitizer = sanitizer;
    this.data = data;
    this.native = native;
    this.preload = preload;
    this.theme = theme;
    this.user = user;
    this.hotPush = hotPush;
    this.dateTime = dateTime;
    this.platform = platform;
    this.navigation = navigation;
    this.http = http;
    this.network = network;
    this.config = config;
    this.translate = translate;
    this.loadingController = loadingController;
    this.ngZone = ngZone;
    const context = {
      $a: this
    };
    this.data.init(context);
    this._addSourcesErrorCheck();
    this._setIsInPreview();
    this._disableDefaultSanitizer();
    this.vars = this.data._variables;
    context.$v = this.vars;
    this.initUtils();
    window._ = (lodash__WEBPACK_IMPORTED_MODULE_13___default());
    window.moment = (moment__WEBPACK_IMPORTED_MODULE_14___default());
  }
  /**
   * for preview add check when preview sources are unavailable (when app was changed and rebuild is needed)
   */
  _addSourcesErrorCheck() {
    if (window.location.href.includes("appery.io/app/view/")) {
      // it's preview
      var id = "aio_reload_popup_" + ("" + Math.random()).substring(3, 10),
        popupHTML = `<style>.disablepagediv {z-index: 9999999999;position: absolute;top: 0;left: 0;bottom:0;right:0;background-color: rgba(0,0,0,0.5);}.masterpopup {width: 270px;position: absolute;color: #000000;background-color: #ffffff;top: 100px;left: 50%;margin-left: -135px;border: 1px solid rgb(124, 153, 193);font-size:16px;}</style><div id="popDiv" class="disablepagediv"><div class="masterpopup"><div style="height:25px;line-height:25px;background-color:var(--ion-color-primary, #3880ff);color:var(--ion-color-primary-contrast, #ffffff);padding-left:10px;">Warning!</div><div style="padding:20px;text-align:center;">Sources loading failed. Probably app was changed. Reload app?<br/><br/><input type="button" style="margin:5px" onClick="document.getElementById('${id}').remove()" value="Cancel" /><input type="button" style="margin:5px" onClick="window.location.reload()" value="OK" /></div></div></div>`;
      var errorFn = console.error;
      console.error = function (err) {
        var isChunkLoadError = false;
        for (var i = 0; i < arguments.length; i++) {
          var err = arguments[i];
          if (err && (err.name === "ChunkLoadError" || err.message && err.message.indexOf && (/Loading chunk ?.+ failed/.test(err.message) || err.message.indexOf("ChunkLoadError") !== -1))) {
            isChunkLoadError = true;
            break;
          }
        }
        if (isChunkLoadError) {
          if (!document.getElementById(id)) {
            var div = document.createElement("div");
            div.id = id;
            div.innerHTML = popupHTML;
            document.body.append(div);
            document.documentElement.classList.add("hydrated");
          }
        }
        errorFn.apply(console, arguments);
      };
    }
  }
  _setIsInPreview() {
    let isInPreview = false;
    try {
      if (window !== window.top && (/\/shared.*\.html/.test(window.top.location.pathname) || '/app/mobile-frame' === window.top.location.pathname)) {
        isInPreview = true;
      }
    } catch (e) {
      isInPreview = true;
    }
    this.isInPreview = isInPreview;
  }
  /**
   * DompurifySanitizer is used in the project
   */
  _disableDefaultSanitizer() {
    this.sanitizer.bypassSecurityTrustResourceUrl = val => val;
  }
  _importServices() {
    var _this = this;
    return (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let services = yield __webpack_require__.e(/*! import() */ "src_app_scripts_services_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../services */ 37222));
      _this.servicesMap = services.services;
    })();
  }
  setThinScrollIfNeeded() {
    if (this.isInPreview) {
      const id = "_aio_scroll_styles";
      let style;
      const globStyle = document.getElementById(id);
      if (!globStyle) {
        style = document.createElement("style");
        style.textContent = "@media only screen and (max-width: 395px) and (max-height: 860px) {" + ":root[mode=ios] {" + "--ion-safe-area-top: 47px;" + "--ion-safe-area-bottom: 34px;" + "}";
        style.setAttribute("id", id);
        document.head.appendChild(style);
      }
      let ionContents = document.getElementsByTagName("ion-content");
      for (var i = 0; i < ionContents.length; i++) {
        const shadowRoot = ionContents[i].shadowRoot;
        if (!shadowRoot.getElementById(id)) {
          style = document.createElement("style");
          style.textContent = ".inner-scroll::-webkit-scrollbar {" + "width: 9px;" + "}" + ".inner-scroll::-webkit-scrollbar-track {" + "background: rgba(255, 255, 255, 0.2);" + "}" + ".inner-scroll::-webkit-scrollbar-thumb {" + "background: rgb(180, 180, 180);" + "border-radius: 5px;" + "border: 2px rgba(0, 0, 0, 0) solid;" + "background-clip: padding-box;" + "cursor: pointer;" + "}";
          style.setAttribute("id", id);
          shadowRoot.appendChild(style);
        }
      }
    }
  }
  // router/navigation
  navigateTo(...options) {
    if (_constants__WEBPACK_IMPORTED_MODULE_1__.routes[options[0]]) {
      let url = _constants__WEBPACK_IMPORTED_MODULE_1__.routes[options[0]];
      if (url[0] !== "." && url[0] !== "/") {
        url = "/" + url;
      }
      let optionalIndex = url.indexOf("/:");
      if (optionalIndex !== -1) {
        url = url.substring(0, optionalIndex);
      }
      options[0] = url;
    }
    return this.router.navigate(options);
  }
  getRouteParam(paramName) {
    return this.router.routerState.snapshot.root.firstChild.params[paramName];
  }
  getQueryParam(paramName) {
    return this.router.routerState.snapshot.root.queryParams[paramName];
  }
  // services
  getService(name) {
    var _this2 = this;
    return (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.servicesMap) {
        yield _this2._importServices();
      }
      if (!_this2._services[name] && _this2.servicesMap[name]) {
        _this2._services[name] = _this2.injector.get(_this2.servicesMap[name]);
      }
      return _this2._services[name];
    })();
  }
  // controllers
  getController(name) {
    if (this.controllers[name]) {
      return this.controllers[name];
    }
    switch (name) {
      case "ActionSheetController":
        this.controllers[name] = this.injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.ActionSheetController);
        break;
      case "AlertController":
        this.controllers[name] = this.injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.AlertController);
        break;
      case "PickerController":
        this.controllers[name] = this.injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.PickerController);
        break;
      case "MenuController":
        this.controllers[name] = this.injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.MenuController);
        break;
      case "ModalController":
        this.controllers[name] = this.injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.ModalController);
        break;
      case "PopoverController":
        this.controllers[name] = this.injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.PopoverController);
        break;
      case "LoadingController":
        this.controllers[name] = this.injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.LoadingController);
        break;
      case "ToastController":
        this.controllers[name] = this.injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.ToastController);
        break;
      default:
        console.log(`ApperyioService. Controller ${name} not supported`);
        return;
    }
    return this.controllers[name];
  }
  // modal
  showModal(screenName, options) {
    var _this3 = this;
    return (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!options) {
        options = {};
      }
      if (!screenName && !options.component) {
        console.log("ApperyioService showModal method: screenName missed");
        return;
      }
      if (!options.component && screenName) {
        options.component = yield _this3.modalScreensSrv.getModalScreen(screenName);
      }
      if (!options.component) {
        console.log("ApperyioService showModal method: nonexistent modal component");
        return;
      }
      options.cssClass = (options.cssClass ? options.cssClass + " " : "") + "aio_modal_" + screenName;
      const modalController = _this3.getController("ModalController");
      const modal = yield modalController.create(options);
      return modal;
    })();
  }
  entityAPIGet(name, defaults, default_undefined, skip_empty_objects) {
    return this.entityAPI.get(name, defaults, default_undefined, skip_empty_objects);
  }
  execDataService(context, serviceName, cb) {
    let func = context.$aio_dataServices[serviceName];
    if (func) {
      context[func](cb);
    } else {
      console.log("Service \"" + serviceName + "\" not found");
    }
  }
  getGSNameByImpl(srv) {
    var _this4 = this;
    return (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!srv) return;
      let srvClass = srv.constructor || srv;
      if (!_this4.servicesMap) {
        yield _this4._importServices();
      }
      if (_this4.servicesMap) {
        let keys = Object.keys(_this4.servicesMap);
        for (let i = 0; i < keys.length; i++) {
          if (_this4.servicesMap[keys[i]] === srvClass) {
            return keys[i];
          }
        }
      }
    })();
  }
  isAndroid() {
    return this.platform.is('android');
  }
  isIOS() {
    return this.platform.is('ios');
  }
  isMobile() {
    return this.platform.is('cordova');
  }
  isBrowser() {
    return !this.isMobile();
  }
  static ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.Injector
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_23__.Router
  }, {
    type: _entityapi_service__WEBPACK_IMPORTED_MODULE_2__.EntityApiService
  }, {
    type: _modal_screens_service__WEBPACK_IMPORTED_MODULE_10__.ModalScreensService
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.DomSanitizer
  }, {
    type: _apperyio_data_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioDataHelperService
  }, {
    type: _apperyio_native_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioNativeHelperService
  }, {
    type: _apperyio_preload_helper__WEBPACK_IMPORTED_MODULE_5__.ApperyioPreloadHelperService
  }, {
    type: _apperyio_theme_helper__WEBPACK_IMPORTED_MODULE_6__.ApperyioThemeHelperService
  }, {
    type: _apperyio_social_login_helper__WEBPACK_IMPORTED_MODULE_12__.ApperyioSocialLoginHelperService
  }, {
    type: _apperyio_hot_push_helper__WEBPACK_IMPORTED_MODULE_7__.ApperyioHotPushHelperService
  }, {
    type: _apperyio_datetime_helper__WEBPACK_IMPORTED_MODULE_8__.ApperyioDateTimeHelperService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.Platform
  }, {
    type: _apperyio_navigation_helper__WEBPACK_IMPORTED_MODULE_11__.ApperyioNavigationHelperService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_25__.HttpClient
  }, {
    type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_20__.Network
  }, {
    type: _config_service__WEBPACK_IMPORTED_MODULE_9__.ApperyioConfigService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.LoadingController
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.NgZone
  }];
};
ApperyioHelperService = (0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_27__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_22__.Injector !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_22__.Injector) === "function" ? _a : Object, typeof (_b = typeof _angular_router__WEBPACK_IMPORTED_MODULE_23__.Router !== "undefined" && _angular_router__WEBPACK_IMPORTED_MODULE_23__.Router) === "function" ? _b : Object, typeof (_c = typeof _entityapi_service__WEBPACK_IMPORTED_MODULE_2__.EntityApiService !== "undefined" && _entityapi_service__WEBPACK_IMPORTED_MODULE_2__.EntityApiService) === "function" ? _c : Object, typeof (_d = typeof _modal_screens_service__WEBPACK_IMPORTED_MODULE_10__.ModalScreensService !== "undefined" && _modal_screens_service__WEBPACK_IMPORTED_MODULE_10__.ModalScreensService) === "function" ? _d : Object, typeof (_e = typeof _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.DomSanitizer !== "undefined" && _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.DomSanitizer) === "function" ? _e : Object, typeof (_f = typeof _apperyio_data_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioDataHelperService !== "undefined" && _apperyio_data_helper__WEBPACK_IMPORTED_MODULE_3__.ApperyioDataHelperService) === "function" ? _f : Object, typeof (_g = typeof _apperyio_native_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioNativeHelperService !== "undefined" && _apperyio_native_helper__WEBPACK_IMPORTED_MODULE_4__.ApperyioNativeHelperService) === "function" ? _g : Object, typeof (_h = typeof _apperyio_preload_helper__WEBPACK_IMPORTED_MODULE_5__.ApperyioPreloadHelperService !== "undefined" && _apperyio_preload_helper__WEBPACK_IMPORTED_MODULE_5__.ApperyioPreloadHelperService) === "function" ? _h : Object, typeof (_j = typeof _apperyio_theme_helper__WEBPACK_IMPORTED_MODULE_6__.ApperyioThemeHelperService !== "undefined" && _apperyio_theme_helper__WEBPACK_IMPORTED_MODULE_6__.ApperyioThemeHelperService) === "function" ? _j : Object, typeof (_k = typeof _apperyio_social_login_helper__WEBPACK_IMPORTED_MODULE_12__.ApperyioSocialLoginHelperService !== "undefined" && _apperyio_social_login_helper__WEBPACK_IMPORTED_MODULE_12__.ApperyioSocialLoginHelperService) === "function" ? _k : Object, typeof (_l = typeof _apperyio_hot_push_helper__WEBPACK_IMPORTED_MODULE_7__.ApperyioHotPushHelperService !== "undefined" && _apperyio_hot_push_helper__WEBPACK_IMPORTED_MODULE_7__.ApperyioHotPushHelperService) === "function" ? _l : Object, typeof (_m = typeof _apperyio_datetime_helper__WEBPACK_IMPORTED_MODULE_8__.ApperyioDateTimeHelperService !== "undefined" && _apperyio_datetime_helper__WEBPACK_IMPORTED_MODULE_8__.ApperyioDateTimeHelperService) === "function" ? _m : Object, typeof (_o = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.Platform !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.Platform) === "function" ? _o : Object, typeof (_p = typeof _apperyio_navigation_helper__WEBPACK_IMPORTED_MODULE_11__.ApperyioNavigationHelperService !== "undefined" && _apperyio_navigation_helper__WEBPACK_IMPORTED_MODULE_11__.ApperyioNavigationHelperService) === "function" ? _p : Object, typeof (_q = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_25__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_25__.HttpClient) === "function" ? _q : Object, typeof (_r = typeof _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_20__.Network !== "undefined" && _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_20__.Network) === "function" ? _r : Object, typeof (_s = typeof _config_service__WEBPACK_IMPORTED_MODULE_9__.ApperyioConfigService !== "undefined" && _config_service__WEBPACK_IMPORTED_MODULE_9__.ApperyioConfigService) === "function" ? _s : Object, typeof (_t = typeof _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateService !== "undefined" && _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateService) === "function" ? _t : Object, typeof (_u = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.LoadingController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.LoadingController) === "function" ? _u : Object, typeof (_v = typeof _angular_core__WEBPACK_IMPORTED_MODULE_22__.NgZone !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_22__.NgZone) === "function" ? _v : Object])], ApperyioHelperService);

;
applyMixins(ApperyioHelperService, [_utils_common__WEBPACK_IMPORTED_MODULE_15__.UtilsCommon, _utils_http__WEBPACK_IMPORTED_MODULE_17__.UtilsHttp, _utils_app_client__WEBPACK_IMPORTED_MODULE_18__.UtilsAppClient, _utils_secure_storage__WEBPACK_IMPORTED_MODULE_19__.UtilsSecureStorage]);
function applyMixins(derivedCtor, constructors) {
  constructors.forEach(baseCtor => {
    let source = baseCtor.prototype || baseCtor;
    Object.getOwnPropertyNames(source).forEach(name => {
      Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(source, name) || Object.create(null));
    });
  });
}

/***/ }),

/***/ 34798:
/*!**************************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio_hot_push_helper.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioHotPushHelperService": () => (/* binding */ ApperyioHotPushHelperService)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ 7074);

var _a, _b;





let ApperyioHotPushHelperService = class ApperyioHotPushHelperService {
  http;
  platform;
  projectInfo = _constants__WEBPACK_IMPORTED_MODULE_1__.projectInfo;
  constructor(http, platform) {
    this.http = http;
    this.platform = platform;
  }
  generateErrorMessage(error) {
    console.error('Error', error);
    return {
      status: "Error",
      message: error
    };
  }
  generateSuccessMessage(data) {
    let message = {
      status: "Success"
    };
    if (data) {
      console.info('Success', data);
      message.data = data;
    } else {
      console.info('Success');
    }
    return message;
  }
  getHotcodeUrl() {
    const platformGuid = this.projectInfo.guid;
    const platformMode = this.platform.is('android') ? 'android' : 'ios';
    return 'https://upd.appery.io/hotcode/' + platformGuid + '/' + platformMode + '/chcp.json';
  }
  isCordovaUsed() {
    return window.cordova && window.chcp;
  }
  getAutoupdateVersion() {
    var _this = this;
    return (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let result = '';
      try {
        if (_this.isCordovaUsed()) {
          yield window.chcp.getVersionInfo((error, data) => {
            result = error ? _this.generateErrorMessage(error) : _this.generateSuccessMessage(data);
          });
          return result;
        }
        return _this.generateErrorMessage('Cordova hot push plugin does not exist');
      } catch (error) {
        return _this.generateErrorMessage(error);
      }
    })();
  }
  getAutoupdateServerVersionSync() {
    var _this2 = this;
    return (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (_this2.isCordovaUsed()) {
          const response = yield _this2.http.get(_this2.getHotcodeUrl()).toPromise();
          return _this2.generateSuccessMessage(response);
        }
        return _this2.generateErrorMessage('Cordova hot push plugin does not exist');
      } catch (error) {
        return _this2.generateErrorMessage(error);
      }
    })();
  }
  autoupdateDownloadLatestVersion() {
    var _this3 = this;
    return (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let result = '';
      try {
        if (_this3.isCordovaUsed()) {
          const options = {
            'config-file': _this3.getHotcodeUrl()
          };
          yield window.chcp.fetchUpdate((error, data) => {
            result = error ? _this3.generateErrorMessage(error) : _this3.generateSuccessMessage(data);
          }, options);
          return result;
        }
        return _this3.generateErrorMessage('Cordova hot push plugin does not exist');
      } catch (error) {
        return _this3.generateErrorMessage(error);
      }
    })();
  }
  autoupdateInstallLatestVersion() {
    var _this4 = this;
    return (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let result = '';
      try {
        if (_this4.isCordovaUsed()) {
          const options = {
            'config-file': _this4.getHotcodeUrl()
          };
          yield window.chcp.installUpdate(error => {
            result = error ? _this4.generateErrorMessage(error) : _this4.generateSuccessMessage();
          }, options);
          return result;
        }
        return _this4.generateErrorMessage('Cordova hot push plugin does not exist');
      } catch (error) {
        return _this4.generateErrorMessage(error);
      }
    })();
  }
  static ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform
  }];
};
ApperyioHotPushHelperService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient) === "function" ? _a : Object, typeof (_b = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform) === "function" ? _b : Object])], ApperyioHotPushHelperService);

;

/***/ }),

/***/ 32535:
/*!*************************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio_mapping_helper.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioMappingHelperService": () => (/* binding */ ApperyioMappingHelperService)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ 7074);
/* harmony import */ var _apperyio_data_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apperyio_data_helper */ 41265);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);

var _a;





let ApperyioMappingHelperService = class ApperyioMappingHelperService {
  $aio_dataHelper;
  constructor($aio_dataHelper) {
    this.$aio_dataHelper = $aio_dataHelper;
  }
  get IGNORED_VALUE() {
    return _constants__WEBPACK_IMPORTED_MODULE_1__.IGNORED_VALUE;
  }
  /**
   * element - ViewChild element
   * elementType - componentBeanName ("ion4button", "ion4input", "ion4card"...)
   * propertyName - property name ("value", "text", "label")
   **/
  getComponentPropValue(variableName, elementType, propertyName) {
    function getInnerText(element) {
      var el = element.el || element.nativeElement;
      if (el) {
        return Array.prototype.reduce.call(el.childNodes, (a, b) => {
          return a + (b.nodeType === b.TEXT_NODE ? b.textContent.trim() : '');
        }, '');
      }
      return '';
    }
    // get the element from a variable of the screen component
    let element = null;
    if (variableName) {
      element = this[variableName] || this[variableName + "_el"] || null;
    }
    if (!element) {
      return;
    }
    if (!propertyName) {
      return element;
    }
    if (propertyName === "className" || propertyName.endsWith(".className")) {
      var classList;
      if (element) {
        if (element.el) {
          // for Ionic 4 components
          classList = element.el.classList;
        } else if (element.nativeElement) {
          // for native html components
          classList = element.nativeElement.classList;
        } else if (element._elem && element._elem.nativeElement) {
          // for Google Map component
          classList = element._elem.nativeElement.classList;
        } else if (element.constructor && (element.constructor.name === "NgForm" || element.constructor.name === "NgModel")) {
          // for Angular form and controls
          element = this[variableName + "_el"];
          if (element) {
            classList = element.nativeElement.classList;
          }
        }
      }
      return classList ? classList.toString() : "";
    }
    let propValue;
    switch (elementType) {
      case "ionic5button":
        switch (propertyName) {
          case "text":
            propValue = element.el.textContent.trim();
            break;
          case "icon.name":
            propValue = element && element.name ? element.name : "";
            break;
          case "icon.customIcon":
            propValue = element && element.src ? element.src : "";
            break;
        }
        break;
      case "ionic5carditem":
        propValue = getInnerText(element);
        break;
      case "ionic5carditemtitle":
        propValue = element ? element.el.textContent.trim() : "";
        break;
      case "ionic5googlemap":
        propValue = element[propertyName.split('.')[1]].toString();
        break;
      case "ionic5googlemapmarker":
        propValue = element.nativeElement.getAttribute('ng-reflect-' + propertyName.split('.')[1]);
        break;
      case "ionic5html":
        propValue = element.nativeElement.innerHTML;
        break;
      case "ionic5icon":
        switch (propertyName) {
          case "customIcon":
            propValue = element.src ? element.src : "";
            break;
          case "style":
            propValue = element.name ? element.name : "";
            break;
        }
        break;
      case "ionic5label":
        switch (propertyName) {
          case "text":
            propValue = element ? element.el.textContent.trim() : "";
            break;
        }
        break;
      case "ionic5itemicon":
        switch (propertyName) {
          case "name":
            propValue = element && element.name ? element.name : "";
            break;
          case "customIcon":
            propValue = element && element.src ? element.src : "";
            break;
        }
        break;
      case "ionic5image":
        element = element.el || element.nativeElement || null;
        switch (propertyName) {
          case "altText":
            propValue = element && element.alt ? element.alt : "";
            break;
          case "imageSrc":
            propValue = element && element.src ? element.src : "";
            break;
        }
        break;
      case "ionic5inputitem":
        switch (propertyName) {
          case "value":
            if (element.type === "file") {
              propValue = element.multiple ? element.el.children[0].files : element.el.children[0].files[0];
            } else {
              propValue = element.value || "";
            }
            break;
        }
        break;
      case "ionic5textareaitem":
        switch (propertyName) {
          case "value":
            propValue = element.value || "";
            break;
        }
        break;
      case "ionic5itemlabel":
        propValue = element ? element.el.textContent.trim() : "";
        break;
      case "ionic5selectitem":
        switch (propertyName) {
          case "value":
            propValue = element.value || "";
            break;
          case "selectedText":
            propValue = element.selectedText || "";
            break;
        }
        break;
      case "ionic5selectoption":
        switch (propertyName) {
          case "selected":
            propValue = element.selected;
            break;
          case "text":
            propValue = element.el.textContent.trim();
            break;
          case "value":
            propValue = element.value;
            break;
        }
        break;
      case "ionic5spinner":
        propValue = element.name ? element.name : "";
        break;
      case "ionic5text":
        switch (propertyName) {
          case "wrapper":
            propValue = element.el.tagName;
            break;
          case "text":
            propValue = getInnerText(element);
            break;
        }
        break;
      case "ionic5search":
        propValue = element[propertyName];
        break;
      case "ionic5radiobuttonitem":
        switch (propertyName) {
          case "value":
            propValue = element.value;
            break;
          case "checked":
            propValue = element.checked;
            break;
        }
        break;
      case "ionic5checkboxitem":
        switch (propertyName) {
          case "value":
            propValue = element.value;
            break;
          case "checked":
            propValue = element.checked;
            break;
        }
        break;
      case "ionic5toolbartitle":
        propValue = element ? element.el.textContent.trim() : "";
        break;
      case "ionic5form":
        switch (propertyName) {
          case "formData":
            propValue = element && element.value ? element.value : {};
            break;
          case "isValid":
            propValue = element.valid;
            break;
          case "isInvalid":
            propValue = element.invalid;
            break;
        }
        break;
      case "ionic5radiogroup":
        propValue = element ? element.value : '';
        break;
      case "ionic5radiogroupheader":
        propValue = element ? element.el.textContent.trim() : '';
        break;
      case "ionic5datetimeitem":
        switch (propertyName) {
          case "value":
            propValue = element && element.value ? element.value : "";
            break;
        }
        break;
      case "ionic5datatable":
        switch (propertyName) {
          case "count":
          case "offset":
            propValue = element && element[propertyName] ? element[propertyName] : 0;
            break;
          case "limit":
            propValue = element && element.limit ? element.limit : undefined;
            break;
          case "rows":
            propValue = element && element.rows ? element.rows : [];
            break;
        }
        break;
      case "ionic5link":
        element = element.el || element.nativeElement || null;
        switch (propertyName) {
          case "href":
            propValue = element ? element.href : "";
            break;
          case "text":
            propValue = element ? element.textContent.trim() : "";
            break;
        }
        break;
      case "listitemoption":
        {
          switch (propertyName) {
            case "icon.name":
              propValue = element && element.name ? element.name : "";
              break;
            case "icon.customIcon":
              propValue = element && element.src ? element.src : "";
              break;
          }
        }
        break;
      case "ionic5toggleitem":
        switch (propertyName) {
          case "checked":
            propValue = element.checked;
            break;
          case "value":
            propValue = element.value;
            break;
        }
        break;
      case "ionic5rangeitem":
        switch (propertyName) {
          case "value":
            propValue = element.value;
            break;
        }
        break;
      case "ionic5filepicker":
        switch (propertyName) {
          case "value":
            propValue = element.getValue();
            break;
        }
        break;
      case "ionic5card":
      case "ionic5googlemapwindow":
      case "ionic5grid":
      case "ionic5gridcell":
      case "ionic5gridrow":
      case "indexscreen":
      case "ionic5menu":
      case "ionic5menucontent":
      case "ionic5menufooter":
      case "ionic5menuheader":
      case "ionic5splitpane":
      case "ionic5list":
      case "ionic5listitem":
      case "listitemoptions":
      case "ionic5content":
      case "ionic5footer":
      case "ionic5header":
      case "ionic5tabbar":
      case "ionic5tabbutton":
      case "ionic5tabs":
      case "screen":
      case "ionic5toolbar":
      case "ionic5toolbarbuttons":
        break;
    }
    return propValue;
  }
  getDataTableMapping(data, property, defaultValue) {
    const nestedObject = property.indexOf('.') != -1 ? property.split('.') : '',
      dataItem = nestedObject ? data[nestedObject[0]][nestedObject[1]] : data[property];
    if (data.isRowsMapping) {
      return dataItem;
    }
    if (defaultValue) {
      return defaultValue;
    }
    return dataItem;
  }
  isPropertyInMapping(mappingData, currentItem, property) {
    return property in (currentItem || mappingData || {});
  }
  getMapping(_mappingData, _currentItem, property, defaultValue, isVariable, isSelected) {
    const mappingData = _currentItem || _mappingData;
    let mappingValue;
    if (lodash__WEBPACK_IMPORTED_MODULE_3___default().isObject(_currentItem) && property in _currentItem) {
      mappingValue = lodash__WEBPACK_IMPORTED_MODULE_3___default().isFunction(_currentItem[property]) ? _currentItem[property]() : _currentItem[property];
      return isSelected ? !!mappingValue : mappingValue;
    } else {
      if (lodash__WEBPACK_IMPORTED_MODULE_3___default().isObject(_mappingData) && property in _mappingData) {
        mappingValue = lodash__WEBPACK_IMPORTED_MODULE_3___default().isFunction(_mappingData[property]) ? _mappingData[property]() : _mappingData[property];
        return isSelected ? !!mappingValue : mappingValue;
      }
    }
    if (mappingData && _currentItem) {
      return isSelected ? !!_currentItem : _currentItem;
    }
    if (defaultValue !== "" && defaultValue !== undefined && defaultValue !== null || isVariable) {
      if (typeof defaultValue == 'string') {
        return defaultValue.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
      }
      return defaultValue;
    }
    if (isSelected) {
      return false;
    }
    return '';
  }
  _getSubdata(data, path) {
    if (data && path && path.length) {
      try {
        let res = data;
        for (var i = 0; i < path.length; i++) {
          if (res) {
            res = res[path[i]];
          } else {
            return undefined;
          }
        }
        return res;
      } catch (e) {
        return undefined;
      }
    }
    return data;
  }
  getSubdata(data, path, defaultValue) {
    var value = this._getSubdata(data, path);
    if (value === null && defaultValue !== undefined) {
      return defaultValue;
    }
    return value !== undefined ? value : defaultValue;
  }
  getStorageValue(varName, path) {
    var _this = this;
    return (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var data = yield _this.$aio_dataHelper.getStorage(varName);
      return _this._getSubdata(data, path);
    })();
  }
  getServiceDataValue(varName, path) {
    var data = this.$aio_dataHelper.getVariable(varName);
    return this._getSubdata(data, path);
  }
  _updateData(data, path, value) {
    if (path && path.length) {
      if (!data || typeof data !== "object") {
        data = {};
      }
      if (path.length == 1) {
        data[path[0]] = value;
      } else {
        let res = data;
        for (var i = 0; i < path.length - 1; i++) {
          if (!res[path[i]] || typeof res[path[i]] !== "object") {
            if (Number.isInteger(path[i + 1])) {
              res[path[i]] = [];
            } else {
              res[path[i]] = {};
            }
          }
          res = res[path[i]];
        }
        res[path[path.length - 1]] = value;
      }
    } else {
      data = value;
    }
    return data;
  }
  updateData(data, path, value) {
    return this._updateData(data, path, value);
  }
  setStorageValue(varName, path, value) {
    var _this2 = this;
    return (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var data = yield _this2.$aio_dataHelper.getStorage(varName);
      yield _this2.$aio_dataHelper.setStorage(varName, _this2._updateData(data, path, value));
    })();
  }
  setServiceDataValue(varName, path, value) {
    var _this3 = this;
    return (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var data = _this3.$aio_dataHelper.getVariable(varName);
      _this3.$aio_dataHelper.setVariable(varName, _this3._updateData(data, path, value));
    })();
  }
  static ctorParameters = () => [{
    type: _apperyio_data_helper__WEBPACK_IMPORTED_MODULE_2__.ApperyioDataHelperService
  }];
};
ApperyioMappingHelperService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof _apperyio_data_helper__WEBPACK_IMPORTED_MODULE_2__.ApperyioDataHelperService !== "undefined" && _apperyio_data_helper__WEBPACK_IMPORTED_MODULE_2__.ApperyioDataHelperService) === "function" ? _a : Object])], ApperyioMappingHelperService);

;

/***/ }),

/***/ 66272:
/*!************************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio_native_helper.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioNativeHelperService": () => (/* binding */ ApperyioNativeHelperService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ 82027);
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/device/ngx */ 34344);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 37954);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 91714);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 49056);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ 99118);
var _a, _b, _c, _d, _e, _f;








let ApperyioNativeHelperService = class ApperyioNativeHelperService {
  webView;
  device;
  splashScreen;
  statusBar;
  keyboard;
  network;
  audioinput;
  constructor(webView, device, splashScreen, statusBar, keyboard, network) {
    this.webView = webView;
    this.device = device;
    this.splashScreen = splashScreen;
    this.statusBar = statusBar;
    this.keyboard = keyboard;
    this.network = network;
    this.audioinput = window.audioinput;
  }
  static ctorParameters = () => [{
    type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_0__.WebView
  }, {
    type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_1__.Device
  }, {
    type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen
  }, {
    type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar
  }, {
    type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__.Keyboard
  }, {
    type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__.Network
  }];
};
ApperyioNativeHelperService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [typeof (_a = typeof _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_0__.WebView !== "undefined" && _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_0__.WebView) === "function" ? _a : Object, typeof (_b = typeof _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_1__.Device !== "undefined" && _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_1__.Device) === "function" ? _b : Object, typeof (_c = typeof _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen !== "undefined" && _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen) === "function" ? _c : Object, typeof (_d = typeof _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar !== "undefined" && _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar) === "function" ? _d : Object, typeof (_e = typeof _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__.Keyboard !== "undefined" && _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__.Keyboard) === "function" ? _e : Object, typeof (_f = typeof _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__.Network !== "undefined" && _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__.Network) === "function" ? _f : Object])], ApperyioNativeHelperService);

;

/***/ }),

/***/ 82022:
/*!****************************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio_navigation_helper.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioNavigationHelperService": () => (/* binding */ ApperyioNavigationHelperService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ 7074);
var _a;




let ApperyioNavigationHelperService = class ApperyioNavigationHelperService {
  navController;
  constructor(navController) {
    this.navController = navController;
  }
  getUrlByRouteName(routeName) {
    if (routeName) {
      if (_constants__WEBPACK_IMPORTED_MODULE_0__.routes[routeName]) {
        let url = _constants__WEBPACK_IMPORTED_MODULE_0__.routes[routeName];
        if (url[0] !== "." && url[0] !== "/") {
          url = "/" + url;
        }
        let optionalIndex = url.indexOf("/:");
        if (optionalIndex !== -1) {
          url = url.substring(0, optionalIndex);
        }
        return url;
      }
      return routeName;
    }
    return "";
  }
  forward(routeName, routeParams = [], options = {}) {
    const url = [this.getUrlByRouteName(routeName)].concat(routeParams);
    return this.navController.navigateForward(url, options);
  }
  back(routeName, routeParams = [], options = {}) {
    const url = [this.getUrlByRouteName(routeName)].concat(routeParams);
    return this.navController.navigateBack(url, options);
  }
  root(routeName, routeParams = [], options = {}) {
    const url = [this.getUrlByRouteName(routeName)].concat(routeParams);
    return this.navController.navigateRoot(url, options);
  }
  static ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.NavController
  }];
};
ApperyioNavigationHelperService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [typeof (_a = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.NavController !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.NavController) === "function" ? _a : Object])], ApperyioNavigationHelperService);

;

/***/ }),

/***/ 32892:
/*!*************************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio_preload_helper.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioPreloadHelperService": () => (/* binding */ ApperyioPreloadHelperService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let ApperyioPreloadHelperService = class ApperyioPreloadHelperService {
  _loadedComponents = [];
  _loadedIcons = [];
  _hiddenDiv;
  createHiddenDiv() {
    if (!this._hiddenDiv) {
      this._hiddenDiv = document.createElement("div");
      this._hiddenDiv.style.display = "none";
      document.body.appendChild(this._hiddenDiv);
    }
  }
  components(components) {
    if (!this._hiddenDiv) {
      this.createHiddenDiv();
    }
    if (components && components.length) {
      let extraComponents = [];
      components.forEach(component => {
        switch (component) {
          case "ion-alert":
          case "ion-modal":
            extraComponents.push("ion-backdrop");
            break;
          case "ion-select":
            extraComponents = extraComponents.concat(["ion-alert", "ion-backdrop"]);
            break;
          case "ion-loading":
            extraComponents = extraComponents.concat(["ion-spinner", "ion-backdrop"]);
            break;
        }
      });
      components = [...components, ...extraComponents];
      components.forEach(component => {
        if (this._loadedComponents.indexOf(component) === -1) {
          let newComponent = document.createElement(component);
          this._hiddenDiv.appendChild(newComponent);
          setTimeout(() => {
            this._hiddenDiv.removeChild(newComponent);
          }, 1);
          this._loadedComponents.push(component);
        }
      });
    }
  }
  icons(icons) {
    if (!this._hiddenDiv) {
      this.createHiddenDiv();
    }
    if (icons && icons.length) {
      icons.forEach(icon => {
        if (this._loadedIcons.indexOf(icon) === -1) {
          let newComponent = document.createElement("ion-icon");
          newComponent.name = icon;
          this._hiddenDiv.appendChild(newComponent);
          setTimeout(() => {
            this._hiddenDiv.removeChild(newComponent);
          }, 1);
          this._loadedIcons.push(icon);
        }
      });
    }
  }
};
ApperyioPreloadHelperService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], ApperyioPreloadHelperService);

;

/***/ }),

/***/ 21277:
/*!**********************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio_push_helper.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioPushHelperService": () => (/* binding */ ApperyioPushHelperService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let ApperyioPushHelperService = class ApperyioPushHelperService {};
ApperyioPushHelperService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], ApperyioPushHelperService);

;

/***/ }),

/***/ 82734:
/*!**********************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio_restservice.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioRestService": () => (/* binding */ ApperyioRestService),
/* harmony export */   "paramsParse": () => (/* binding */ paramsParse)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/map */ 99464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var x2js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! x2js */ 81029);
/* harmony import */ var x2js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(x2js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apperyio_xml2js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apperyio_xml2js */ 50197);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config_service */ 74121);
/* harmony import */ var _entityapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entityapi_service */ 15877);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ 7074);
var _a, _b, _c;










var xmlStr2json = _apperyio_xml2js__WEBPACK_IMPORTED_MODULE_2__.ApperyioXMLHelper.xmlStr2json;
var inst = new x2js__WEBPACK_IMPORTED_MODULE_1__({});
var json2xmlStr = inst.js2xml.bind(inst);
function parsePath(path, data) {
  let parts = path.split(".");
  let res = data[parts[0]];
  let i = 1;
  while (res && i < parts.length) {
    res = res[parts[i]];
    i++;
  }
  return res;
}
function transform2form(obj) {
  var str = [];
  for (var key in obj) {
    if (obj[key] instanceof Array) {
      for (var idx in obj[key]) {
        var subObj = obj[key][idx];
        for (var subKey in subObj) {
          str.push(encodeURIComponent(key) + "[" + idx + "][" + encodeURIComponent(subKey) + "]=" + encodeURIComponent(subObj[subKey]));
        }
      }
    } else {
      str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
    }
  }
  return str.join("&");
}
;
/**
 * Check is there any files for upload
 * @param  {Object} request Request object
 *
 * @return {Boolean}         Result of checking. `True` if request contain files.
 */
function filesInRequest(request) {
  var result = request.aio_config && request.aio_config.requestType && request.aio_config.requestType.toLowerCase() == 'data';
  var data = request.data || {};
  if (Array.isArray(data)) {
    for (var i = 0, l = data.length; i < l; i++) {
      result = data[i] instanceof Blob;
      if (result) break;
    }
  } else {
    result = data instanceof Blob || data instanceof FormData || data instanceof FileList;
  }
  return result;
}
;
/**
 * Add File to FormData variable
 *
 * @param  {FormData} formData FormData instance
 * @param  {File|FileList} item File instance or FileList
 */
function appendItem(formData, item) {
  if (item) {
    if (item instanceof FileList) {
      for (var i = 0; i < item.length; i++) {
        appendItem(formData, item[i]);
      }
      return;
    }
    var name;
    if (item.name) {
      name = item.name;
    }
    formData.append(name, item);
  }
}
;
/**
 * Adjust request for uploading files.
 * For multiple files, also set (define) Content-Type to undefined
 *
 * @param  {Object} r request object (method modify argument)
 */
function adjustRequest4Files(r) {
  if (r.data instanceof FormData) {
    // If Content-Type was set, then use it, otherwise init property with undefined
    r.headers['Content-Type'] = r.headers['Content-Type'];
    return;
  }
  var formData = new FormData();
  if (r.data instanceof File) {
    r.data = [r.data];
  }
  if (Array.isArray(r.data) || r.data instanceof FileList) {
    r.headers['Content-Type'] = undefined;
    for (var i = 0, l = r.data.length; i < l; i++) {
      appendItem(formData, r.data[i]);
    }
  } else {
    r.headers['Content-Type'] = r.headers['Content-Type'] || r.data.type;
    return;
  }
  r.data = formData;
}
/**
  * Generate URL after parsing {template.entities} from system settings
  * @param  {String} template URL-template
  * @return {String}          URL-string
  */
/**
 * Generate URL after running {template.entities} as function
 * @param  {Function} template URL-template function
 * @return {String}          URL-string
 */
function url(template, options, allConfigData) {
  options = options ? {
    ...options,
    ...allConfigData
  } : {
    ...allConfigData
  }; //clone( arguments[ 1 ] || {}, true ),
  var R = /\{([\w\d_\$\.]+?)\}/,
    m = [],
    tmp = '',
    value;
  if (typeof template === "function") {
    return template.call(this, options);
  }
  m = template.match(R);
  tmp = template;
  while (m) {
    value = parsePath(m[1], options);
    if (value != undefined) {
      template = template.replace(m[0], value);
      tmp = template;
    } else {
      tmp = template.replace(m[0], m[0].replace('}', '\t\t}')); // mark processed bad expression
      template = tmp.concat('');
    }
    m = tmp.match(R);
  }
  if (value && value.toString() == template && ['number', 'boolean'].indexOf(typeof value) > -1) {
    template = value;
  } else if (typeof template == 'string') {
    template = template.replace(/\t\t\}/g, '}');
  }
  return template;
}
/**
 * Recursive parser for settings-objects. Invoke object properties and expand templates entries in value
 * @param  {Object} obj Settings object
 * @param  {Object} options OPTIONAL argument as additional dictionary for searching replaces
 * @return {Object}     Settings object
 */
function paramsParse(obj, options, allConfigData) {
  var options = arguments[1] || {},
    result = {};
  if (typeof obj === "string" || typeof obj === "function") {
    return url(obj, options, allConfigData);
  }
  if (typeof obj === "boolean" || obj === null || obj instanceof File || obj instanceof FileList || obj instanceof FormData || obj instanceof Blob || obj instanceof ArrayBuffer || typeof obj === "number" || typeof obj === "undefined") {
    result = obj;
  } else {
    if (Array.isArray(obj)) {
      result = [];
    }
    var props = Object.keys(obj);
    props = props.filter(function (k) {
      return obj[k] !== _constants__WEBPACK_IMPORTED_MODULE_5__.IGNORED_VALUE;
    });
    props.forEach(function (k) {
      result[k] = paramsParse(obj[k], options, allConfigData);
    });
  }
  return result;
}
let ApperyioRestService = class ApperyioRestService {
  http;
  ConfigService;
  EntityAPI;
  constructor(http, ConfigService, EntityAPI) {
    this.http = http;
    this.ConfigService = ConfigService;
    this.EntityAPI = EntityAPI;
  }
  prepareRequestData(exec_request) {
    var request = {},
      props,
      allConfigData = this.ConfigService.all() || {};
    request = exec_request;
    var $$request = paramsParse(request, request, allConfigData);
    var url = request.url;
    if (request.hasOwnProperty('headers') && request.headers && request.headers.hasOwnProperty('appery-proxy-url')) {
      url = request.headers['appery-proxy-url'];
    }
    if (request.hasOwnProperty('data') && request.data) {
      $$request = paramsParse($$request, request.data, allConfigData);
      props = Object.keys(request.data);
      props.forEach(function (k) {
        if (url.indexOf('{' + k + '}') > -1) {
          delete $$request.data[k];
        }
      });
    }
    if (request.hasOwnProperty('params') && request.params) {
      props = Object.keys(request.params);
      props.forEach(function (k) {
        if (url.indexOf('{' + k + '}') > -1) {
          delete $$request.params[k];
        }
      });
      $$request = paramsParse($$request, request.params, allConfigData);
    }
    if (request.hasOwnProperty('query') && request.query) {
      props = Object.keys(request.query);
      props.forEach(function (k) {
        if (url.indexOf('{' + k + '}') > -1) {
          delete $$request.query[k];
        }
      });
      $$request = paramsParse($$request, request.query, allConfigData);
    }
    if (filesInRequest($$request)) {
      adjustRequest4Files($$request);
    }
    return $$request;
  }
  sendRequest(request) {
    var reqOpts = {};
    if (request.params) {
      reqOpts.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams({
        fromObject: request.params
      });
    }
    if (request.headers) {
      var headers = {};
      for (var key in request.headers) {
        if (request.headers[key] !== undefined) {
          headers[key] = request.headers[key];
        }
      }
      reqOpts.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders(headers);
    }
    if (request.aio_config && request.aio_config.responseType) {
      switch (request.aio_config.responseType.toLowerCase()) {
        case "xml":
          reqOpts.responseType = "text";
          break;
        case "binary":
          reqOpts.responseType = "arraybuffer";
          break;
      }
    }
    if (request.aio_config && request.aio_config.requestType) {
      switch (request.aio_config.requestType.toLowerCase()) {
        case 'xml':
          {
            request.data = json2xmlStr(request.data);
            break;
          }
        case 'x-www-form-urlencoded':
          {
            request.data = transform2form(request.data);
            break;
          }
      }
    }
    if (request.aio_config.responseType === 'jsonp') {
      let url = request.url.indexOf("?") === -1 ? request.url + "?" : request.url;
      return this.http.jsonp(url + reqOpts.params.toString(), "callback");
    }
    switch (request.method.toLowerCase()) {
      case "post":
        return this.http.post(request.url, request.data || {}, reqOpts);
      case "put":
        return this.http.put(request.url, request.data || {}, reqOpts);
      case "patch":
        return this.http.patch(request.url, request.data || {}, reqOpts);
      case "delete":
        if (request.data === 0 || request.data === false || request.data && request.data.constructor !== Object || request.data && request.data.constructor === Object && Object.keys(request.data).length > 0) {
          reqOpts.body = request.data;
        }
        return this.http.delete(request.url, reqOpts);
      default:
        return this.http.get(request.url, reqOpts);
    }
  }
  run(request) {
    var aioConfig;
    if (request.hasOwnProperty('aio_config') && request.aio_config) {
      aioConfig = request.aio_config;
    }
    if (request.hasOwnProperty('echo') && request.echo) {
      var echo_data = request.echo;
      try {
        if (aioConfig) {
          if (aioConfig.responseType && aioConfig.responseType.toLowerCase() == 'xml') {
            echo_data = xmlStr2json(request.echo);
          }
          if (aioConfig.responseType && aioConfig.responseType.toLowerCase() == 'json') {
            echo_data = JSON.parse(request.echo);
          }
        }
      } catch (e) {
        echo_data = "Error while parsing echo data";
      }
      if (request.hasOwnProperty('transformResponse') && typeof request.transformResponse === "function") {
        echo_data = request.transformResponse.call(null, echo_data) || echo_data;
      }
      return new rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable(observer => {
        observer.next(echo_data);
        observer.complete();
      });
    }
    var $$request = this.prepareRequestData(request);
    return this.sendRequest($$request).map(res => {
      if (request.hasOwnProperty('aio_config') && request.aio_config && request.aio_config.hasOwnProperty('responseType')) {
        if (request.aio_config.responseType === 'xml') {
          res = xmlStr2json(res);
          if (request.aio_config.hasOwnProperty('serviceName')) {
            var response_model_name = request.aio_config.serviceName + '.response.body';
            var res = this.EntityAPI.get(response_model_name, res);
            return res[Object.keys(res)[0]];
          }
        }
        if (request.aio_config.responseType === 'binary') {
          var uarr = new Uint8Array(res);
          var strings = [],
            chunksize = 0xffff;
          var len = uarr.length;
          for (var i = 0; i * chunksize < len; i++) {
            strings.push(String.fromCharCode.apply(null, uarr.subarray(i * chunksize, (i + 1) * chunksize)));
          }
          return strings.join('');
        }
      }
      return res;
    });
  }
  static ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
  }, {
    type: _config_service__WEBPACK_IMPORTED_MODULE_3__.ApperyioConfigService
  }, {
    type: _entityapi_service__WEBPACK_IMPORTED_MODULE_4__.EntityApiService
  }];
};
ApperyioRestService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient) === "function" ? _a : Object, typeof (_b = typeof _config_service__WEBPACK_IMPORTED_MODULE_3__.ApperyioConfigService !== "undefined" && _config_service__WEBPACK_IMPORTED_MODULE_3__.ApperyioConfigService) === "function" ? _b : Object, typeof (_c = typeof _entityapi_service__WEBPACK_IMPORTED_MODULE_4__.EntityApiService !== "undefined" && _entityapi_service__WEBPACK_IMPORTED_MODULE_4__.EntityApiService) === "function" ? _c : Object])], ApperyioRestService);


/***/ }),

/***/ 37526:
/*!******************************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio_social_login_helper.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioSocialLoginHelperService": () => (/* binding */ ApperyioSocialLoginHelperService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);
var _a, _b;




let ApperyioSocialLoginHelperService = class ApperyioSocialLoginHelperService {
  http;
  platform;
  defaultDB;
  sessionTokens = {};
  providers = {
    twitter: {
      id: "twitter",
      baseUrl: "https://api.twitter.com/oauth/authenticate"
    },
    facebook: {
      id: "facebook",
      baseUrl: "https://www.facebook.com/dialog/oauth"
    },
    google: {
      id: "google",
      baseUrl: "https://accounts.google.com/o/oauth2/auth"
    }
  };
  statusNames = {
    unauthorized: "unauthorized",
    inProgress: "inProgress",
    authorized: "authorized",
    error: "error"
  };
  eventNames = {
    dbLoginStart: "dbloginstart",
    dbLoginEnd: "dbloginend"
  };
  host = "appery.io";
  dbBaseUrl = "https://api." + this.host + "/rest/1/db/";
  oauthUrl = this.dbBaseUrl + "oauth/";
  oauthLoginUrl = this.oauthUrl + "login/";
  oauthTokenUrl = this.oauthUrl + "token/";
  oauthLogout = this.oauthUrl + "logout?provider=<provider>";
  usersUrl = this.dbBaseUrl + "users/";
  loginUrl = this.dbBaseUrl + "login/";
  logoutUrl = this.dbBaseUrl + "logout/";
  checkLoginUrl = this.usersUrl + "me/";
  updateUserUrl = this.usersUrl + "<user_id>";
  constructor(http, platform) {
    this.http = http;
    this.platform = platform;
  }
  /**
   * Social login via google oauth provider.
   * @param {string} previewClientId  - Google client id, type "Web application".
   * @param {string} [callbackUrl]    - URL for redirecting after user grants access. Not required for login on device.
   * @param {string} [dbId]           - Database Id. Optional if default database id is set.
   * @returns {Promise}
   */
  loginGoogle(previewClientId, callbackUrl, dbId) {
    return new Promise((resolve, reject) => {
      if (this.isPhoneGapApp()) {
        this.loginGoogleOnDevice(resolve, reject, dbId, previewClientId);
      } else {
        this.loginOauth2_0(resolve, reject, dbId, previewClientId, this.providers.google.baseUrl, callbackUrl, this.providers.google.id, "profile", window);
      }
    });
  }
  /**
   * Social login via facebook oauth provider.
   * @param {string} clientId       - Social provider client id.
   * @param {string} callbackUrl    - URL for redirecting after user grants access.
   * @param {string} [dbId]         - Database Id. Optional if default database id is set.
   * @returns {Promise}
   */
  loginFB(clientId, callbackUrl, dbId) {
    return new Promise((resolve, reject) => {
      if (this.isPhoneGapApp()) {
        this.loginFacebookOnDevice(resolve, reject, dbId, clientId);
      } else {
        this.loginOauth2_0(resolve, reject, dbId, clientId, this.providers.facebook.baseUrl, callbackUrl, this.providers.facebook.id, "", window);
      }
    });
  }
  /**
   * Social login via twitter oauth provider.
   * @param {string} clientId       - Social provider client id.
   * @param {string} callbackUrl    - URL for redirecting after user grants access.
   * @param {string} [dbId]         - Database Id. Optional if default database id is set.
   * @returns {Promise}
   */
  loginTwitter(clientId, callbackUrl, dbId) {
    return new Promise((resolve, reject) => {
      if (this.isPhoneGapApp()) {
        const cordova = window.cordova;
        if (!cordova || !cordova.InAppBrowser) {
          reject("InAppBrowser Cordova Plugin is not installed");
        } else {
          this.loginOauth1_0a(resolve, reject, dbId, clientId, this.providers.twitter.baseUrl, callbackUrl, this.providers.twitter.id, cordova.InAppBrowser);
        }
      } else {
        this.loginOauth1_0a(resolve, reject, dbId, clientId, this.providers.twitter.baseUrl, callbackUrl, this.providers.twitter.id, window);
      }
    });
  }
  /**
   * Returns Appery.io database token.
   * @param {string} dbId - Database Id. Optional if default database id is set.
   * @returns {string|null}
   */
  getToken(dbId) {
    dbId = this.getDB(dbId);
    if (this.sessionTokens[dbId]) {
      return this.sessionTokens[dbId].token;
    }
    return null;
  }
  /**
   * Returns Appery.io database User Id.
   * @param {string} dbId - Database Id. Optional if default database id is set.
   * @returns {string|null}
   */
  getUserId(dbId) {
    dbId = this.getDB(dbId);
    if (this.sessionTokens[dbId]) {
      return this.sessionTokens[dbId].userId;
    }
    return null;
  }
  /**
   * Returns current login progress status.
   * @param {string} dbId - Database Id. Optional if default database id is set.
   * @returns {string}
   */
  getStatus(dbId) {
    dbId = this.getDB(dbId);
    if (this.sessionTokens[dbId]) {
      return this.sessionTokens[dbId].status;
    }
    return this.statusNames.unauthorized;
  }
  /**
   * Sets default Database Id.
   * @param {string} dbId - Database Id.
   */
  setDefaultDB(dbId) {
    this.defaultDB = dbId;
  }
  /**
   * Creates user in Appery.io database.
   * @param {Object.<String, String>} options - Request data. Should contain at least "username" and "password" fields.
   * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
   * @returns {Object}
   */
  createUser(options, dbId) {
    return new Promise((resolve, reject) => {
      this.internalLogin(resolve, reject, options, this.usersUrl, this.getDB(dbId), true);
    });
  }
  /**
   * Receives Appery.io database token.
   * @param {Object.<String, String>} options - Request parameters. Should contain "username" and "password" fields.
   * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
   * @returns {Object}
   */
  login(options, dbId) {
    return new Promise((resolve, reject) => {
      this.internalLogin(resolve, reject, options, this.loginUrl, this.getDB(dbId), true);
    });
  }
  /**
   * Invalidates token in Appery.io database.
   * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
   * @returns {Object}
   */
  logout(dbId) {
    return new Promise((resolve, reject) => {
      let httpOptions = this.getHttpOptions(dbId, {}, false);
      this.http.get(this.logoutUrl, httpOptions).subscribe(res => {
        this.invalidate(dbId);
        resolve(res);
      }, reject);
    });
  }
  /**
   * Returns list of users in Appery.io database.
   * @param {Object.<String, String>} options - Request parameters.
   * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
   * @returns {Object}
   */
  findUsers(options, dbId) {
    return new Promise((resolve, reject) => {
      let httpOptions = this.getHttpOptions(dbId, options, false);
      return this.http.get(this.usersUrl, httpOptions).subscribe(resolve, reject);
    });
  }
  /**
   * Checks if Appery.io database token is valid.
   * @param {Object.<String, String>} options - Request parameters.
   * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
   * @returns {Object}
   */
  isLogged(options, dbId) {
    return new Promise((resolve, reject) => {
      let httpOptions = this.getHttpOptions(dbId, {}, false);
      return this.http.get(this.checkLoginUrl, httpOptions).subscribe(resolve, reject);
    });
  }
  /**
   * Updates Appery.io database user.
   * @param {Object.<String, String>} options - Request parameters.
   * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
   * @returns {Object}
   */
  updateUser(options, dbId) {
    return new Promise((resolve, reject) => {
      let httpOptions = this.getHttpOptions(dbId, {}, false);
      let url = this.updateUserUrl.replace("<user_id>", this.getUserId(dbId));
      return this.http.put(url, options, httpOptions).subscribe(resolve, reject);
    });
  }
  /**
   * Deletes Appery.io database token. It doesn't invalidate token in Appery.io database.
   * Returns true if token existed.
   * @param {string}                  [dbId]  - Database Id. Optional if default database id is set.
   * @returns {boolean}
   */
  invalidate(dbId) {
    dbId = this.getDB(dbId);
    if (this.sessionTokens[dbId]) {
      this.sessionTokens[dbId] = undefined;
      return true;
    }
    return false;
  }
  /**
   * Removes social id from Appery.io database.
   * @param {string}                  provider - Provider Id.
   * @param {string}                  [dbId]   - Database Id. Optional if default database id is set.
   * @returns {Object}
   */
  logoutOauth(provider, dbId) {
    return new Promise((resolve, reject) => {
      let httpOptions = this.getHttpOptions(dbId, {}, false);
      let url = this.oauthLogout.replace("<provider>", provider);
      return this.http.delete(url, httpOptions).subscribe(resolve, reject);
    });
  }
  /**
   * If dbId is specified then returns dbId, if not then returns default database id.
   * @param {string} dbId - Database id. Optional if default database id is set.
   * @returns {string}
   */
  getDB(dbId) {
    if (dbId) {
      return dbId;
    } else {
      return this.defaultDB;
    }
  }
  /**
   * Social login via OAuth 2.0 Authorization Framework
   * @see {@link https://tools.ietf.org/html/rfc6749}
   * @param {function} resolve - function to resolve promise.
   * @param {function} reject  - function to reject promise.
   * @param {string} dbId           - Database id. Optional if default database id is set.
   * @param {string} clientId       - Social provider client id.
   * @param {string} baseUrl        - Social provider authorization URL.
   * @param {string} callbackUrl    - URL for redirecting after user grants access.
   * @param {string} socialnetwork  - Social provider id.
   * @param {string} scope          - Set of permissions that the application requests.
   * @param {object} window         - if in browser - should be global window object, if in cordova - should be cordova.InAppBrowser.
   */
  loginOauth2_0(resolve, reject, dbId, clientId, baseUrl, callbackUrl, socialnetwork, scope, window) {
    let self = this;
    const state = Math.random().toString(36).substring(2);
    const url = baseUrl + "?client_id=" + clientId + "&redirect_uri=" + callbackUrl + "&scope=" + scope + "&response_type=code&state=" + state;
    let ref;
    if (this.isPhoneGapApp()) {
      ref = window.open(url, '_blank', 'location=yes');
      ref.addEventListener("loadstart", handleDevice);
    } else {
      ref = window.open(url, '_blank', 'location=yes,top=100, left=100, width=600, height=600');
      window.addEventListener('message', handlePreview);
    }
    function handleDevice(event) {
      if (event.type !== "loadstart" || event.url.indexOf(callbackUrl) !== 0) {
        return;
      }
      ref.close();
      getAccessToken(event.url);
    }
    function handlePreview(event) {
      if (event.data.type !== "social_login" || event.data.url.indexOf(callbackUrl) !== 0) {
        return;
      }
      ref.close();
      window.removeEventListener('message', handlePreview);
      getAccessToken(event.data.url);
    }
    function getAccessToken(url) {
      let params = ApperyioSocialLoginHelperService.extractParams(url);
      if (state !== params["state"]) {
        return;
      }
      if (params['code']) {
        self.externalLogin(resolve, reject, params['code'], "", dbId, clientId, socialnetwork, callbackUrl);
      } else {
        reject("Access not granted");
      }
    }
  }
  /**
   * Social login via OAuth 1.0a Authorization Framework
   * @see {@link http://oauth.net/core/1.0a}
   * @param {function} resolve - function to resolve promise.
   * @param {function} reject  - function to reject promise.
   * @param {string} dbId           - Database id. Optional if default database id is set.
   * @param {string} clientId       - Social provider client id.
   * @param {string} baseUrl        - Social provider authorization URL.
   * @param {string} callbackUrl    - URL for redirecting after user grants access.
   * @param {string} socialnetwork  - Social provider id.
   * @param {object} window         - if in browser - should be global window object, if in cordova - should be cordova.InAppBrowser.
   */
  loginOauth1_0a(resolve, reject, dbId, clientId, baseUrl, callbackUrl, socialnetwork, window) {
    let ref;
    let self = this;
    const params = {
      provider: socialnetwork,
      appId: clientId,
      callback: callbackUrl
    };
    let httpOptions = this.getHttpOptions(dbId, params, true);
    this.http.get(this.oauthTokenUrl, httpOptions).subscribe(extractToken, error => {
      ApperyioSocialLoginHelperService.fireEvent(this.eventNames.dbLoginEnd);
      this.setStatus(dbId, this.statusNames.error);
      reject(error);
    });
    function extractToken(success) {
      const token = success.token;
      const url = baseUrl + "?oauth_token=" + token;
      if (self.isPhoneGapApp()) {
        ref = window.open(url, '_blank', 'location=yes');
        ref.addEventListener("loadstart", handleDevice);
      } else {
        ref = window.open(url, '_blank', 'location=yes,top=100, left=100, width=600, height=600');
        window.addEventListener('message', handlePreview);
      }
    }
    function handleDevice(event) {
      if (event.type !== "loadstart" || event.url.indexOf(callbackUrl) !== 0) {
        return;
      }
      ref.close();
      getVerifier(event.url);
    }
    function handlePreview(event) {
      if (event.data.type !== "social_login" || event.data.url.indexOf(callbackUrl) !== 0) {
        return;
      }
      ref.close();
      window.removeEventListener('message', handlePreview);
      getVerifier(event.data.url);
    }
    function getVerifier(url) {
      let params = ApperyioSocialLoginHelperService.extractParams(url);
      if (params['oauth_token'] && params['oauth_verifier']) {
        self.externalLogin(resolve, reject, params['oauth_verifier'], params['oauth_token'], dbId, clientId, socialnetwork);
      } else {
        reject("Access not granted");
      }
    }
  }
  /**
   * Social login via Facebook Connect Cordova Plugin
   * @param {function} resolve - function to resolve promise.
   * @param {function} reject  - function to reject promise.
   * @param {string} dbId           - Database id. Optional if default database id is set.
   * @param {string} clientId       - Social provider client id.
   */
  loginFacebookOnDevice(resolve, reject, dbId, clientId) {
    let self = this;
    if (!window["facebookConnectPlugin"] || !window["facebookConnectPlugin"].login) {
      reject("Facebook Connect Cordova Plugin is not installed");
    }
    window["facebookConnectPlugin"].login(["public_profile"], response => {
      self.externalLogin(resolve, reject, "", "", dbId, clientId, "facebook", null, response.authResponse.accessToken);
    }, reject);
  }
  /**
   * Social login via Google Sign-In Cordova Plugin
   * @see {@link https://github.com/EddyVerbruggen/cordova-plugin-googleplus}
   * @param {function} resolve    - function to resolve promise.
   * @param {function} reject     - function to reject promise.
   * @param {string} dbId         - Database id. Optional if default database id is set.
   * @param {string} webClientId  - Google web client id.
   */
  loginGoogleOnDevice(resolve, reject, dbId, webClientId) {
    let self = this;
    if (!window["plugins"] || !window["plugins"].googleplus) {
      reject("Google Sign-In Cordova Plugin is not installed");
    }
    window["plugins"].googleplus.login({
      'scopes': "profile",
      'webClientId': webClientId
    }, response => {
      self.externalLogin(resolve, reject, "", "", dbId, webClientId, "google", null, response.idToken);
    }, msg => {
      reject("Access not granted: " + msg);
    });
  }
  /**
   * Exchanges oauth provider token and verifier to Appery.io token.
   * @param {function} resolve - function to resolve promise.
   * @param {function} reject  - function to reject promise.
   * @param {string} verifier         - Oauth 1.0 verifier or Oauth 2.0 code.
   * @param {string} token            - Oauth 1.0 request token.
   * @param {string} dbId             - Database id. Optional if default database id is set.
   * @param {string} clientId         - Social provider client id.
   * @param {string} socialnetwork    - Social provider id.
   * @param {string} [callback]       - Callback URL. Only for OAuth 2.0.
   * @param {string} [accessToken]    - Access tokenif it's already known. Currently available only for Google
   */
  externalLogin(resolve, reject, verifier, token, dbId, clientId, socialnetwork, callback, accessToken) {
    const data = {
      "verifier": verifier,
      "token": token,
      "provider": socialnetwork,
      "appId": clientId,
      "callback": callback,
      "accessToken": accessToken
    };
    this.internalLogin(resolve, reject, data, this.oauthLoginUrl, this.getDB(dbId), false);
  }
  internalLogin(resolve, reject, data, url, dbId, withoutToken) {
    ApperyioSocialLoginHelperService.fireEvent(this.eventNames.dbLoginStart);
    this.setStatus(dbId, this.statusNames.inProgress);
    let httpOptions = this.getHttpOptions(dbId, {}, withoutToken);
    this.http.post(url, data, httpOptions).subscribe(res => {
      let token = this.handleToken(res, dbId);
      ApperyioSocialLoginHelperService.fireEvent(this.eventNames.dbLoginEnd);
      resolve(token);
    }, error => {
      ApperyioSocialLoginHelperService.fireEvent(this.eventNames.dbLoginEnd);
      this.setStatus(dbId, this.statusNames.error);
      reject(error);
    });
  }
  /**
   * Creates HttpOptions object.
   * @param {string}                         dbId            - Database id. Optional if default database id is set.
   * @param {Object.<String, String>} params          - Request parameters.
   * @param {boolean}                        [withoutToken]  - Is token header should be omitted. Optional.
   * @returns {object}
   */
  getHttpOptions(dbId, params, withoutToken) {
    dbId = this.getDB(dbId);
    let headers = {
      'Content-Type': 'application/json',
      "X-Appery-Database-Id": dbId
    };
    if (!withoutToken && this.getToken(dbId)) {
      headers["X-Appery-Session-Token"] = this.getToken(dbId);
    }
    return {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders(headers),
      params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
        fromObject: params
      })
    };
  }
  /**
   * Sets current login progress status
   * @param {string} dbId - Database Id. Optional if default database id is set.
   * @param {string} status - Current login progress status.
   */
  setStatus(dbId, status) {
    dbId = this.getDB(dbId);
    if (!dbId) {
      return;
    }
    if (this.sessionTokens[dbId]) {
      this.sessionTokens[dbId].status = status;
    } else {
      this.sessionTokens[dbId] = {
        status: status
      };
    }
  }
  /**
   * Extracts Appery.io database token from response
   * @param {Object.<String, String>} data     - Parsed response body.
   * @param {string}                  dbId     - Database id.
   */
  handleToken(data, dbId) {
    this.sessionTokens[dbId] = {
      token: data.sessionToken,
      userId: data["_id"],
      status: this.statusNames.authorized
    };
    return data.sessionToken;
  }
  /**
   * Fires event
   * @param eventName
   */
  static fireEvent(eventName) {
    const event = new Event(eventName, {
      bubbles: true,
      cancelable: true
    });
    document.dispatchEvent(event);
  }
  /**
   * Extracts parameters from URL.
   * @see {@link http://tools.ietf.org/html/rfc3986#section-3.4}
   * @param {string} url
   * @returns {Object.<String, String>}
   */
  static extractParams(url) {
    let params = {},
      search;
    if (url.indexOf("?") === -1) {
      return params;
    }
    if (url.indexOf("#") > -1) {
      search = url.slice(url.indexOf("?"), url.indexOf("#"));
    } else {
      search = url.slice(url.indexOf("?"));
    }
    if (search.length > 1) {
      for (var pairIndex = 0, pairs = search.substr(1).split("&"); pairIndex < pairs.length; pairIndex++) {
        var pair = pairs[pairIndex].split("=");
        params[pair[0]] = pair[1];
      }
    }
    return params;
  }
  /**
   * Determines if the app runs on device.
   * @returns {boolean}
   */
  isPhoneGapApp() {
    return this.platform.is('cordova');
  }
  /**
   * Determines if the app runs on android.
   * @returns {boolean}
   */
  isAndroid() {
    return this.platform.is('android');
  }
  static ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.Platform
  }];
};
ApperyioSocialLoginHelperService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient) === "function" ? _a : Object, typeof (_b = typeof _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.Platform !== "undefined" && _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.Platform) === "function" ? _b : Object])], ApperyioSocialLoginHelperService);


/***/ }),

/***/ 89084:
/*!***********************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio_theme_helper.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioThemeHelperService": () => (/* binding */ ApperyioThemeHelperService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let ApperyioThemeHelperService = class ApperyioThemeHelperService {
  getCurrent() {
    return window.document.body.dataset.themeName || "";
  }
  set(themeName = "") {
    let currTheme = window.document.body.dataset.themeName || "";
    currTheme && window.document.body.classList.remove(currTheme);
    window.document.body.dataset.themeName = themeName;
    themeName && window.document.body.classList.add(themeName);
  }
};
ApperyioThemeHelperService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], ApperyioThemeHelperService);

;

/***/ }),

/***/ 50197:
/*!*****************************************************!*\
  !*** ./src/app/scripts/apperyio/apperyio_xml2js.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioXMLHelper": () => (/* binding */ ApperyioXMLHelper)
/* harmony export */ });
function parseXML(node) {
  if (!node) return null;
  var txt = '',
    obj = null,
    att = null;
  var nt = node.nodeType,
    nn = node.localName || node.nodeName || '';
  var nv = node.content || node.nodeValue || '';
  if (node.childNodes && node.childNodes.length > 0) {
    node.childNodes.forEach((cn, n) => {
      var cnt = cn.nodeType,
        cnn = cn.localName || cn.nodeName || '',
        cnv = cn.content || cn.nodeValue || '';
      if (cnt == 8) {
        return; // ignore comment node
      } else if (cnt == 3 || cnt == 4 || !cnn) {
        // ignore white-space in between tags
        txt += cnv.trim();
      } else {
        obj = obj || {};
        if (obj[cnn]) {
          if (!Array.isArray(obj[cnn])) {
            obj[cnn] = [obj[cnn]];
          }
          obj[cnn].push(parseXML(cn));
        } else {
          obj[cnn] = parseXML(cn);
        }
      }
    });
  }
  if (node.attributes) {
    if (node.attributes.length > 0) {
      att = {};
      obj = obj || {};
      var a, atn, at, atv;
      for (a = 0; a < node.attributes; a++) {
        at = node.attributes[a];
        atn = '@' + (at.name || ''), atv = at.value;
        att[atn] = atv;
        if (obj[atn]) {
          obj[atn].push(atv);
        } else {
          obj[atn] = atv;
        }
      }
    }
  }
  if (obj && txt) {
    obj = {
      ...(obj || {}),
      ...(att || {})
    };
    txt = obj.content ? (typeof obj.content == 'object' ? obj.content : [obj.content || '']).concat([txt]) : txt;
    if (txt) obj.content = txt;
    txt = '';
  }
  var out = obj || txt;
  return out;
}
function xmlStr2json(xml) {
  if (!xml) return {};
  if (typeof xml == 'string') xml = parseXml(xml);
  if (!xml.nodeType) return;
  if (xml.nodeType == 3 || xml.nodeType == 4) return xml.nodeValue;
  var root = xml;
  var out = parseXML(root);
  xml = null;
  root = null;
  return out;
}
function parseXml(xml) {
  if (!xml || typeof xml !== "string") {
    return null;
  }
  var parser = new DOMParser(),
    domNode = null,
    parsererrorNS = null;
  var isIEParser = ("ActiveXObject" in window);
  // IE9+ now is here
  if (!isIEParser) {
    try {
      parsererrorNS = parser.parseFromString("INVALID", "text/xml").childNodes[0].namespaceURI;
    } catch (err) {
      parsererrorNS = null;
    }
  }
  try {
    domNode = parser.parseFromString(xml, "text/xml");
    if (parsererrorNS !== null && domNode.getElementsByTagNameNS(parsererrorNS, "parsererror").length > 0) {
      domNode = null;
    }
  } catch (err) {
    domNode = null;
  }
  return domNode;
}
let ApperyioXMLHelper = {
  xmlStr2json
};

/***/ }),

/***/ 74121:
/*!****************************************************!*\
  !*** ./src/app/scripts/apperyio/config_service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioConfigService": () => (/* binding */ ApperyioConfigService)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ 7074);

function parsePath(path, data) {
  let parts = path.split(".");
  let res = data[parts[0]];
  let i = 1;
  while (res && i < parts.length) {
    res = res[parts[i]];
    i++;
  }
  return res;
}
function addByPath(path, data, value) {
  let parts = path.split(".");
  let res = data;
  let i = 0;
  while (i < parts.length - 1) {
    if (!res[parts[i]] || typeof res[parts[i]] !== "object") {
      res[parts[i]] = {};
    }
    res = res[parts[i]];
    i++;
  }
  res[parts[parts.length - 1]] = value;
}
class ApperyioConfigService {
  constants;
  constructor() {
    this.constants = {
      ..._constants__WEBPACK_IMPORTED_MODULE_0__.constants
    };
  }
  add(exp, value) {
    addByPath(exp, this.constants, value);
  }
  all() {
    return {
      ...this.constants
    };
  }
  get(exp, defaultValue) {
    var result;
    if (this.constants[exp] !== undefined) {
      result = this.constants[exp];
    } else {
      try {
        result = parsePath(exp, this.constants);
      } catch (e) {
        result = undefined;
      }
      if (result === undefined && defaultValue !== undefined) {
        result = defaultValue;
      }
    }
    return result;
  }
  remove(exp) {
    var result = this.get(exp);
    this.add(exp);
    return result;
  }
}
;

/***/ }),

/***/ 11371:
/*!*****************************************************************************!*\
  !*** ./src/app/scripts/apperyio/declarables/apperyio.declarables.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioDeclarablesModule": () => (/* binding */ ApperyioDeclarablesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _apperyio_control_validation_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apperyio_control_validation_directive */ 57146);
/* harmony import */ var _apperyio_custom_markastouch_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apperyio_custom_markastouch_directive */ 6816);
/* harmony import */ var _apperyio_markastouch_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apperyio_markastouch_directive */ 72306);
/* harmony import */ var _apperyio_form_change_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apperyio_form_change_directive */ 1296);
/* harmony import */ var _apperyio_password_show_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apperyio_password_show_directive */ 53984);
/* harmony import */ var _apperyio_datatable_resizer_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apperyio_datatable_resizer_directive */ 10086);
/* harmony import */ var _apperyio_tester_buttons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apperyio_tester_buttons_component */ 1202);
/* harmony import */ var _apperyio_file_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./apperyio_file_picker_component */ 36776);
/* harmony import */ var _apperyio_datetime_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./apperyio_datetime_component */ 42295);














let ApperyioDeclarablesModule = class ApperyioDeclarablesModule {};
ApperyioDeclarablesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule],
  declarations: [_apperyio_control_validation_directive__WEBPACK_IMPORTED_MODULE_0__["default"], _apperyio_custom_markastouch_directive__WEBPACK_IMPORTED_MODULE_1__["default"], _apperyio_markastouch_directive__WEBPACK_IMPORTED_MODULE_2__["default"], _apperyio_form_change_directive__WEBPACK_IMPORTED_MODULE_3__["default"], _apperyio_password_show_directive__WEBPACK_IMPORTED_MODULE_4__["default"], _apperyio_datatable_resizer_directive__WEBPACK_IMPORTED_MODULE_5__["default"], _apperyio_tester_buttons_component__WEBPACK_IMPORTED_MODULE_6__["default"], _apperyio_file_picker_component__WEBPACK_IMPORTED_MODULE_7__["default"], _apperyio_datetime_component__WEBPACK_IMPORTED_MODULE_8__["default"]],
  exports: [_apperyio_control_validation_directive__WEBPACK_IMPORTED_MODULE_0__["default"], _apperyio_custom_markastouch_directive__WEBPACK_IMPORTED_MODULE_1__["default"], _apperyio_markastouch_directive__WEBPACK_IMPORTED_MODULE_2__["default"], _apperyio_form_change_directive__WEBPACK_IMPORTED_MODULE_3__["default"], _apperyio_password_show_directive__WEBPACK_IMPORTED_MODULE_4__["default"], _apperyio_datatable_resizer_directive__WEBPACK_IMPORTED_MODULE_5__["default"], _apperyio_tester_buttons_component__WEBPACK_IMPORTED_MODULE_6__["default"], _apperyio_file_picker_component__WEBPACK_IMPORTED_MODULE_7__["default"], _apperyio_datetime_component__WEBPACK_IMPORTED_MODULE_8__["default"]]
})], ApperyioDeclarablesModule);


/***/ }),

/***/ 57146:
/*!***************************************************************************************!*\
  !*** ./src/app/scripts/apperyio/declarables/apperyio_control_validation_directive.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _apperyio_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apperyio_helper */ 67845);
var _a, _b, _c;




/**
 * The directive allows to simply show validation errors text
 * For using it add the aioControlValidation directive to your form control component (e.g. Input)
 *
 * By default validation rules are defined by component properties
 * Advanced property aioControlValidation allows to add property independent validation rules
 * aioControlValidation="email|||requiredTrue|||minLength:2"
 * Multiple validation rules are separated with the "|||" symbols
 * Arguments of validation rules can be added with using the ":" symbol
 * aioControlValidation="pattern:[0-9]*"
 *
 * Avaliable validation rules:
 * min:<number>
 * max:<number>
 * required
 * requiredTrue - the control is valid only if it has boolean 'true' value
 * minLength:<number>
 * maxLength:<number>
 * pattern:<string>
 * email
 * digitsOnly
 * latinLettersOnly
 * strongPassword
 *
 * Set of custom rules (pattern based rules: digitsOnly, latinLettersOnly, strongPassword)
 * could be extended if needed. Custom rules could be set only via `aioControlValidation` Input property
 */
const EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const EMAIL_REGEXP_STR = EMAIL_REGEXP.toString().slice(1, -1);
const HIDDEN_CLASS = "ion-hide";
let AioControlValidationDirective = class AioControlValidationDirective {
  el;
  model;
  Apperyio;
  aioControlValidation = '';
  aioValidationMessages = {};
  aioValidationMessageClass = '';
  aioValidationShowMessage = '';
  aioValidationFunction;
  getMessageText(key, defVal) {
    let text = this.aioValidationMessages[key] ? this.aioValidationMessages[key] : defVal;
    if (text && this.Apperyio.translate) {
      text = this.Apperyio.translate.instant(text);
    }
    return text;
  }
  /**
   * Text of displayed messages depending on validation type
   */
  ERROR_MESSAGES = {
    default: 'Incorrect value',
    pattern: ({
      requiredPattern
    }) => {
      let message = this.getMessageText("pattern", '');
      if (message) {
        return message;
      }
      if (this.defaultPetternsDescription[requiredPattern]) {
        return this.defaultPetternsDescription[requiredPattern];
      }
      return 'The value must match the pattern';
    },
    required: () => this.getMessageText("required", 'Value of the field is required'),
    aioValidationFunction: data => this.getMessageText("aioValidationFunction", data || 'Incorrect value'),
    customValidation: data => this.getMessageText("customValidation", data || 'Incorrect value'),
    min: ({
      min
    }) => this.getMessageText("min", `The number must not be less than ${min}`),
    max: ({
      max
    }) => this.getMessageText("max", `The number must not exceed ${max}`),
    minlength: ({
      requiredLength
    }) => this.getMessageText("minlength", `The number of characters must not be less than ${requiredLength}`),
    maxlength: ({
      requiredLength
    }) => this.getMessageText("maxlength", `The number of characters must not exceed ${requiredLength}`)
  };
  /**
   * Symbol for separating multiple validation rules:
   * aioControlValidation="required|||minLength:3|||email"
   */
  RULES_DELIMETER = '|||';
  /**
   * Regular expression for matching validator name and their arguments:
   * <validatorName>:<argument> (e.g. min:3)
   */
  RULE_REGEXP = /^([a-zA-Z]+)(?::(.*))?$/;
  errorElement;
  defaultPetterns = {
    "digitsOnly": {
      pattern: "^[0-9]+$",
      description: "Only digits are allowed"
    },
    "latinLettersOnly": {
      pattern: "^[a-zA-Z]+$",
      description: "Only latin letters are allowed"
    },
    "strongPassword": {
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[\\.\\,;\\:_\\-~\\+\\=!@#$%^&*])[a-zA-Z0-9\\.\\,;\\:_\\-~\\+\\=!@#$%^&*]{8,30}$",
      description: "Password should be 8-30 symbols and should contain latin symbols, digits and special symbols (.;:_-~+=!@#$%^&*)"
    },
    "email": {
      pattern: EMAIL_REGEXP_STR,
      description: "Incorrect email"
    }
  };
  defaultPetternsDescription;
  generateDefaultPetternDescription() {
    this.defaultPetternsDescription = {};
    Object.keys(this.defaultPetterns).forEach(key => {
      this.defaultPetternsDescription[this.defaultPetterns[key].pattern] = this.defaultPetterns[key].description;
    });
  }
  constructor(el, model, Apperyio) {
    this.el = el;
    this.model = model;
    this.Apperyio = Apperyio;
    let markAsTouched = this.model.control.markAsTouched.bind(this.model.control);
    this.model.control.markAsTouched = (...params) => {
      markAsTouched(...params);
      if (!this.model.control._pendingTouched) {
        this.showError();
      }
    };
    this.generateDefaultPetternDescription();
  }
  ngOnInit() {
    this.refreshValidation();
  }
  /**
   * Sets existing validation rules up to date
   * Concates rules set as properties and rules defined with the "aioControlValidation" directive
   */
  refreshValidation() {
    const validators = [];
    this.concatRules().forEach(rule => {
      const validator = this.validatorFactory(rule);
      if (validator) {
        validators.push(validator);
      }
    });
    if (typeof this.aioValidationFunction === 'function') {
      validators.push(this.aioValidationFunction);
    }
    this.model.control.clearValidators();
    this.model.control.setValidators(validators);
    this.model.control.updateValueAndValidity();
  }
  /**
   * Returns concated array of rules
   * Rules specified with the aioControlValidation directive have higher priority
   */
  concatRules() {
    const advancedRules = this.aioControlValidation ? this.aioControlValidation.split(this.RULES_DELIMETER) : [];
    const propertyRules = this.getPropertyValidations();
    return advancedRules.concat(propertyRules.filter(rule => !this.aioControlValidation.includes(this.getRuleName(rule))));
  }
  /**
   * Returns name of rule
   * pattern:[0-9] -> pattern
   * @param rule
   */
  getRuleName(rule) {
    const ruleParts = rule.match(this.RULE_REGEXP);
    return ruleParts && ruleParts instanceof Array ? ruleParts[1] : rule;
  }
  /**
   * Transforms existing validation properties to validation rules
   */
  getPropertyValidations() {
    const validations = [];
    if (this.el.nativeElement.required) {
      validations.push('required');
    }
    if (this.el.nativeElement.pattern) {
      validations.push(`pattern:${this.el.nativeElement.pattern}`);
    }
    if (this.el.nativeElement.min) {
      validations.push(`min:${this.el.nativeElement.min}`);
    }
    if (this.el.nativeElement.max) {
      validations.push(`max:${this.el.nativeElement.max}`);
    }
    if (this.el.nativeElement.minlength) {
      validations.push(`minLength:${this.el.nativeElement.minlength}`);
    }
    return validations;
  }
  /**
   * Creates an Angular validator from passed validation rule
   * @param rule {String} - validation rule (e.g. required, minLength:2 etc.)
   */
  validatorFactory(rule) {
    let ruleParts = rule.match(this.RULE_REGEXP);
    if (ruleParts && ruleParts instanceof Array) {
      let ruleName = ruleParts[1] || '';
      let ruleData = ruleParts[2] || '';
      if (this.defaultPetterns[ruleName]) {
        let validator = _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern;
        let validatorData = this.defaultPetterns[ruleName].pattern;
        return validator(validatorData);
      } else {
        let validator = _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators[ruleName];
        if (validator) {
          let validatorData;
          if (ruleData) {
            if (ruleName === 'min' || ruleName === 'max' || ruleName === 'minLength' || ruleName === 'maxLength') {
              validatorData = parseFloat(ruleData);
            } else if (ruleName === 'pattern') {
              let regexStr = '';
              if (ruleData.charAt(0) !== '^') regexStr += '^';
              regexStr += ruleData;
              if (ruleData.charAt(ruleData.length - 1) !== '$') regexStr += '$';
              let regex;
              try {
                regex = new RegExp(regexStr);
              } catch (e) {
                console.warn("Validation error: wrong pattern", ruleData);
                return _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.nullValidator;
              }
              validatorData = regex;
            }
          }
          return validatorData ? validator(validatorData) : validator;
        }
      }
    }
    return _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.nullValidator;
  }
  showError() {
    if (this.aioValidationShowMessage === "true" && this.model.invalid) {
      if (!this.errorElement) {
        // create container if needed
        this.errorElement = document.createElement("div");
        this.errorElement.classList.add("aio-validation-error");
        if (this.aioValidationMessageClass) {
          this.errorElement.classList.add(...this.aioValidationMessageClass.split(" ").filter(item => item));
        }
        const referenceNode = this.el.nativeElement;
        if (referenceNode.parentNode.tagName === "ION-ITEM") {
          referenceNode.parentNode.after(this.errorElement);
        } else if (referenceNode.parentNode.tagName === "ION-COL" && referenceNode.parentNode.parentNode.tagName === "ION-ROW" && referenceNode.parentNode.parentNode.parentNode.tagName === "ION-ITEM") {
          referenceNode.parentNode.parentNode.parentNode.after(this.errorElement);
        } else {
          referenceNode.after(this.errorElement);
        }
      }
      // show the first error message
      this.errorElement.innerText = this.getFirstErrorMessage() || "";
      if (!this.errorElement.innerText) {
        this.clearErrorMessage();
      } else {
        this.errorElement.classList.remove(HIDDEN_CLASS);
      }
    }
  }
  onStatusChange(event) {
    if (this.aioValidationShowMessage === "true" && this.model.invalid) {
      if (event.type === 'ionBlur' && event.target.nodeName !== 'ION-SELECT' || event.type === 'ionCancel' && event.target.nodeName === 'ION-SELECT' || event.type === 'ionChange' && this.model.touched || event.type === 'ionChange' && (event.target.nodeName === 'ION-RADIO-GROUP' || event.target.nodeName === 'ION-CHECKBOX') && this.model.dirty) {
        this.showError();
      }
    } else {
      this.clearErrorMessage();
    }
  }
  /**
   * Returns a list of active validation errors
   */
  getFirstErrorMessage() {
    let key = Object.keys(this.model.errors)[0];
    return this.getErrorMessage(key, this.model.errors[key]);
  }
  /**
   * Returns an error message text from the configuration template by error name
   * If the template is missing, returns default message text
   * @param key {String} - Error name
   * @param data {Any} - Validation error object
   */
  getErrorMessage(key, data) {
    if (this.ERROR_MESSAGES.hasOwnProperty(key)) {
      return typeof this.ERROR_MESSAGES[key] === 'function' ? this.ERROR_MESSAGES[key](data) : this.ERROR_MESSAGES[key];
    }
    return this.ERROR_MESSAGES['default'];
  }
  clearErrorMessage() {
    if (this.errorElement) {
      this.errorElement.innerText = "";
      this.errorElement.classList.add(HIDDEN_CLASS);
    }
  }
  static ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel
  }, {
    type: _apperyio_helper__WEBPACK_IMPORTED_MODULE_0__.ApperyioHelperService
  }];
  static propDecorators = {
    aioControlValidation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    aioValidationMessages: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    aioValidationMessageClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    aioValidationShowMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    aioValidationFunction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    onStatusChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['ionBlur', ['$event']]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['ionChange', ['$event']]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['ionCancel', ['$event']]
    }]
  };
};
AioControlValidationDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({
  selector: '[aioControlValidation]',
  inputs: ['aioControlValidation', 'aioValidationMessages', 'aioValidationMessageClass', 'aioValidationShowMessage', 'aioValidationFunction']
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef) === "function" ? _a : Object, typeof (_b = typeof _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel !== "undefined" && _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel) === "function" ? _b : Object, typeof (_c = typeof _apperyio_helper__WEBPACK_IMPORTED_MODULE_0__.ApperyioHelperService !== "undefined" && _apperyio_helper__WEBPACK_IMPORTED_MODULE_0__.ApperyioHelperService) === "function" ? _c : Object])], AioControlValidationDirective);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AioControlValidationDirective);

/***/ }),

/***/ 6816:
/*!***************************************************************************************!*\
  !*** ./src/app/scripts/apperyio/declarables/apperyio_custom_markastouch_directive.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);
var _a;



let ApperyioCustomMarkAsTouchDirective = class ApperyioCustomMarkAsTouchDirective {
  model;
  aioCustomMarkAsTouched = '';
  constructor(model) {
    this.model = model;
  }
  ngOnInit() {
    const methodName = this.aioCustomMarkAsTouched || 'markAsTouched';
    const valueAccessor = this.model.valueAccessor;
    if (valueAccessor && valueAccessor[methodName]) {
      const markAsTouched = this.model.control.markAsTouched.bind(this.model.control);
      this.model.control.markAsTouched = (...params) => {
        markAsTouched(...params);
        valueAccessor[methodName](...params);
      };
    }
  }
  static ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgModel
  }];
  static propDecorators = {
    aioCustomMarkAsTouched: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  };
};
ApperyioCustomMarkAsTouchDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
  selector: '[aioCustomMarkAsTouched]' // Attribute selector
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgModel !== "undefined" && _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgModel) === "function" ? _a : Object])], ApperyioCustomMarkAsTouchDirective);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApperyioCustomMarkAsTouchDirective);

/***/ }),

/***/ 10086:
/*!**************************************************************************************!*\
  !*** ./src/app/scripts/apperyio/declarables/apperyio_datatable_resizer_directive.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 77070);
var _a;



const maxAttempts = 100;
let ApperyioDatatableResizerDirective = class ApperyioDatatableResizerDirective {
  table;
  constructor(table) {
    this.table = table;
  }
  fixWidth(attempt) {
    if (!this.table.element.parentElement // element is not rendered (because of *ngIf, etc.)
    || attempt > maxAttempts // something went wrong, just stop it 
    ) {
      return;
    }
    setTimeout(() => {
      if (!this.table.element.clientWidth) {
        // table is not visible yet. no sense to recalculate width
        this.fixWidth(attempt + 1);
        return;
      }
      setTimeout(() => {
        if (this.table.element.parentElement) {
          // element is still rendered
          const innerHeader = this.table.element.querySelector(".datatable-header .datatable-header-inner");
          if (!innerHeader || innerHeader.clientWidth !== this.table.element.clientWidth) {
            // recalculate few times because of bug with recalculation in case of smaller column width
            for (let i = 0; i < 10; i++) {
              this.table.recalculateColumns();
            }
            this.table.recalculate(); // full recalculate (not only columns)
            const column = this.table.headerComponent.getColumn(0);
            if (column) {
              this.table.onColumnResize({
                column: column,
                newValue: column.width
              });
            }
          }
        }
      }, 300);
    }, 100);
  }
  ngAfterViewInit() {
    // check if this directive is compatible with the current @swimlane/ngx-datatable version api
    if (this.table.element && this.table.recalculate && this.table.recalculateColumns && this.table.headerComponent && this.table.headerComponent.getColumn && this.table.onColumnResize) {
      this.fixWidth(0);
    }
  }
  static ctorParameters = () => [{
    type: _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_0__.DatatableComponent
  }];
};
ApperyioDatatableResizerDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({
  selector: '[aioDatatableResizer]'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [typeof (_a = typeof _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_0__.DatatableComponent !== "undefined" && _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_0__.DatatableComponent) === "function" ? _a : Object])], ApperyioDatatableResizerDirective);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApperyioDatatableResizerDirective);

/***/ }),

/***/ 42295:
/*!*****************************************************************************!*\
  !*** ./src/app/scripts/apperyio/declarables/apperyio_datetime_component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_src_app_scripts_apperyio_declarables_apperyio_datetime_component_ts_css_ngResource_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgOmhvc3QgewogICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1tYXJnaW4tdG9wLCAxMHB4KTsKICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWFyZ2luLWJvdHRvbSwgOXB4KTsKICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpbi1zdGFydCwgMHB4KTsKICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1tYXJnaW4tZW5kLCAwcHgpOwogICAgICAgIH0KICAgICAgICAKICAgICAgICA6aG9zdCBpb24tdGV4dCB7CiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7CiAgICAgICAgfQogICAgICAgIDpob3N0IGlvbi10ZXh0LnBsYWNlaG9sZGVyewogICAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5LCAwLjUpOwogICAgICAgIH0KICAgICAgICAKICAgICAgICA6aG9zdCAuZGlzYWJsZWQgewogICAgICAgICAgICBvcGFjaXR5OiAwLjM7CiAgICAgICAgfQogICAgICAgIAogICAgICAgIDpob3N0IC5jbGljay1idXR0b24gewogICAgICAgICAgICBsZWZ0OiAwcHg7CiAgICAgICAgICAgIHRvcDogMHB4OwogICAgICAgICAgICBtYXJnaW46IDBweDsKICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgICAgICBib3JkZXI6IDBweDsKICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTsKICAgICAgICAgICAgb3V0bGluZTogbm9uZTsKICAgICAgICAgICAgei1pbmRleDogMTsKICAgICAgICB9CiAgICAgICAgICAgIAogICAgICAgIC5haW8tZGF0ZXRpbWUtbW9kYWwgewogICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgICAgICAgLS13aWR0aDogMzI1cHg7CiAgICAgICAgICAgIC0taGVpZ2h0OiA0MzRweDsKICAgICAgICB9CiAgICAgICAgLnByZXNlbnRhdGlvbi1kYXRlIHsKICAgICAgICAgICAgLS1oZWlnaHQ6IDQzNHB4OwogICAgICAgIH0KICAgICAgICAucHJlc2VudGF0aW9uLWRhdGUtdGltZSwgLnByZXNlbnRhdGlvbi10aW1lLWRhdGUgewogICAgICAgICAgICAtLWhlaWdodDogNDY1cHg7CiAgICAgICAgfQogICAgICAgIC5wcmVzZW50YXRpb24tbW9udGgsIC5wcmVzZW50YXRpb24tbW9udGgteWVhciwgLnByZXNlbnRhdGlvbi10aW1lLCAucHJlc2VudGF0aW9uLXllYXIgewogICAgICAgICAgICAtLWhlaWdodDogMjcwcHg7CiAgICAgICAgfQogICAg_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_src_app_scripts_apperyio_declarables_apperyio_datetime_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/scripts/apperyio/declarables/apperyio_datetime_component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgICAgOmhvc3QgewogICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1tYXJnaW4tdG9wLCAxMHB4KTsKICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWFyZ2luLWJvdHRvbSwgOXB4KTsKICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpbi1zdGFydCwgMHB4KTsKICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1tYXJnaW4tZW5kLCAwcHgpOwogICAgICAgIH0KICAgICAgICAKICAgICAgICA6aG9zdCBpb24tdGV4dCB7CiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7CiAgICAgICAgfQogICAgICAgIDpob3N0IGlvbi10ZXh0LnBsYWNlaG9sZGVyewogICAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5LCAwLjUpOwogICAgICAgIH0KICAgICAgICAKICAgICAgICA6aG9zdCAuZGlzYWJsZWQgewogICAgICAgICAgICBvcGFjaXR5OiAwLjM7CiAgICAgICAgfQogICAgICAgIAogICAgICAgIDpob3N0IC5jbGljay1idXR0b24gewogICAgICAgICAgICBsZWZ0OiAwcHg7CiAgICAgICAgICAgIHRvcDogMHB4OwogICAgICAgICAgICBtYXJnaW46IDBweDsKICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgICAgICBib3JkZXI6IDBweDsKICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTsKICAgICAgICAgICAgb3V0bGluZTogbm9uZTsKICAgICAgICAgICAgei1pbmRleDogMTsKICAgICAgICB9CiAgICAgICAgICAgIAogICAgICAgIC5haW8tZGF0ZXRpbWUtbW9kYWwgewogICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgICAgICAgLS13aWR0aDogMzI1cHg7CiAgICAgICAgICAgIC0taGVpZ2h0OiA0MzRweDsKICAgICAgICB9CiAgICAgICAgLnByZXNlbnRhdGlvbi1kYXRlIHsKICAgICAgICAgICAgLS1oZWlnaHQ6IDQzNHB4OwogICAgICAgIH0KICAgICAgICAucHJlc2VudGF0aW9uLWRhdGUtdGltZSwgLnByZXNlbnRhdGlvbi10aW1lLWRhdGUgewogICAgICAgICAgICAtLWhlaWdodDogNDY1cHg7CiAgICAgICAgfQogICAgICAgIC5wcmVzZW50YXRpb24tbW9udGgsIC5wcmVzZW50YXRpb24tbW9udGgteWVhciwgLnByZXNlbnRhdGlvbi10aW1lLCAucHJlc2VudGF0aW9uLXllYXIgewogICAgICAgICAgICAtLWhlaWdodDogMjcwcHg7CiAgICAgICAgfQogICAg!./src/app/scripts/apperyio/declarables/apperyio_datetime_component.ts */ 78761);
/* harmony import */ var _srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_src_app_scripts_apperyio_declarables_apperyio_datetime_component_ts_css_ngResource_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgOmhvc3QgewogICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1tYXJnaW4tdG9wLCAxMHB4KTsKICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWFyZ2luLWJvdHRvbSwgOXB4KTsKICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpbi1zdGFydCwgMHB4KTsKICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1tYXJnaW4tZW5kLCAwcHgpOwogICAgICAgIH0KICAgICAgICAKICAgICAgICA6aG9zdCBpb24tdGV4dCB7CiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7CiAgICAgICAgfQogICAgICAgIDpob3N0IGlvbi10ZXh0LnBsYWNlaG9sZGVyewogICAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5LCAwLjUpOwogICAgICAgIH0KICAgICAgICAKICAgICAgICA6aG9zdCAuZGlzYWJsZWQgewogICAgICAgICAgICBvcGFjaXR5OiAwLjM7CiAgICAgICAgfQogICAgICAgIAogICAgICAgIDpob3N0IC5jbGljay1idXR0b24gewogICAgICAgICAgICBsZWZ0OiAwcHg7CiAgICAgICAgICAgIHRvcDogMHB4OwogICAgICAgICAgICBtYXJnaW46IDBweDsKICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgICAgICBib3JkZXI6IDBweDsKICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTsKICAgICAgICAgICAgb3V0bGluZTogbm9uZTsKICAgICAgICAgICAgei1pbmRleDogMTsKICAgICAgICB9CiAgICAgICAgICAgIAogICAgICAgIC5haW8tZGF0ZXRpbWUtbW9kYWwgewogICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgICAgICAgLS13aWR0aDogMzI1cHg7CiAgICAgICAgICAgIC0taGVpZ2h0OiA0MzRweDsKICAgICAgICB9CiAgICAgICAgLnByZXNlbnRhdGlvbi1kYXRlIHsKICAgICAgICAgICAgLS1oZWlnaHQ6IDQzNHB4OwogICAgICAgIH0KICAgICAgICAucHJlc2VudGF0aW9uLWRhdGUtdGltZSwgLnByZXNlbnRhdGlvbi10aW1lLWRhdGUgewogICAgICAgICAgICAtLWhlaWdodDogNDY1cHg7CiAgICAgICAgfQogICAgICAgIC5wcmVzZW50YXRpb24tbW9udGgsIC5wcmVzZW50YXRpb24tbW9udGgteWVhciwgLnByZXNlbnRhdGlvbi10aW1lLCAucHJlc2VudGF0aW9uLXllYXIgewogICAgICAgICAgICAtLWhlaWdodDogMjcwcHg7CiAgICAgICAgfQogICAg_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_src_app_scripts_apperyio_declarables_apperyio_datetime_component_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_src_app_scripts_apperyio_declarables_apperyio_datetime_component_ts_css_ngResource_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgOmhvc3QgewogICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1tYXJnaW4tdG9wLCAxMHB4KTsKICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWFyZ2luLWJvdHRvbSwgOXB4KTsKICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpbi1zdGFydCwgMHB4KTsKICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1tYXJnaW4tZW5kLCAwcHgpOwogICAgICAgIH0KICAgICAgICAKICAgICAgICA6aG9zdCBpb24tdGV4dCB7CiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7CiAgICAgICAgfQogICAgICAgIDpob3N0IGlvbi10ZXh0LnBsYWNlaG9sZGVyewogICAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5LCAwLjUpOwogICAgICAgIH0KICAgICAgICAKICAgICAgICA6aG9zdCAuZGlzYWJsZWQgewogICAgICAgICAgICBvcGFjaXR5OiAwLjM7CiAgICAgICAgfQogICAgICAgIAogICAgICAgIDpob3N0IC5jbGljay1idXR0b24gewogICAgICAgICAgICBsZWZ0OiAwcHg7CiAgICAgICAgICAgIHRvcDogMHB4OwogICAgICAgICAgICBtYXJnaW46IDBweDsKICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgICAgICBib3JkZXI6IDBweDsKICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTsKICAgICAgICAgICAgb3V0bGluZTogbm9uZTsKICAgICAgICAgICAgei1pbmRleDogMTsKICAgICAgICB9CiAgICAgICAgICAgIAogICAgICAgIC5haW8tZGF0ZXRpbWUtbW9kYWwgewogICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgICAgICAgLS13aWR0aDogMzI1cHg7CiAgICAgICAgICAgIC0taGVpZ2h0OiA0MzRweDsKICAgICAgICB9CiAgICAgICAgLnByZXNlbnRhdGlvbi1kYXRlIHsKICAgICAgICAgICAgLS1oZWlnaHQ6IDQzNHB4OwogICAgICAgIH0KICAgICAgICAucHJlc2VudGF0aW9uLWRhdGUtdGltZSwgLnByZXNlbnRhdGlvbi10aW1lLWRhdGUgewogICAgICAgICAgICAtLWhlaWdodDogNDY1cHg7CiAgICAgICAgfQogICAgICAgIC5wcmVzZW50YXRpb24tbW9udGgsIC5wcmVzZW50YXRpb24tbW9udGgteWVhciwgLnByZXNlbnRhdGlvbi10aW1lLCAucHJlc2VudGF0aW9uLXllYXIgewogICAgICAgICAgICAtLWhlaWdodDogMjcwcHg7CiAgICAgICAgfQogICAg_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_src_app_scripts_apperyio_declarables_apperyio_datetime_component_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





// eslint-disable-next-line no-useless-escape
const ISO_8601_REGEXP = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
// eslint-disable-next-line no-useless-escape
const TIME_REGEXP = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
let ApperyioDatetime = class ApperyioDatetime {
  datetimeInput;
  value;
  placeholder = "";
  presentation = "";
  formatOptions;
  locale = "";
  disabled = false;
  ionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  ionBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  ionCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  ionFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  subscriptions = [];
  id = Math.random().toString();
  onIonModalWillPresent() {
    this.datetimeInput.reset(Array.isArray(this.value) ? this.value[0] : this.value);
  }
  ngAfterContentInit() {
    // contentChild is set
    this.subscriptions.push(this.datetimeInput.ionChange.subscribe(e => {
      this.value = e.detail.value;
      this.onChange(this.value);
      this.ionChange.emit(e);
      e.stopPropagation();
    }));
    this.subscriptions.push(this.datetimeInput.ionBlur.subscribe(() => {
      this._onTouched();
      this.ionBlur.emit();
    }));
    this.subscriptions.push(this.datetimeInput.ionCancel.subscribe(() => {
      this.ionCancel.emit();
    }));
    this.subscriptions.push(this.datetimeInput.ionFocus.subscribe(() => {
      this.ionFocus.emit();
    }));
    if (this.datetimeInput.value) {
      setTimeout(() => {
        this.value = this.datetimeInput.value;
        this.onChange(this.value);
      }, 10);
    }
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
  writeValue(value) {
    this.value = value;
    if (this.datetimeInput) {
      this.datetimeInput.value = this.value;
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  onChange(_) {}
  _onTouched() {}
  _correctDateValue(value) {
    let parse;
    if (this.presentation === "time") {
      parse = TIME_REGEXP.exec(value);
      if (parse) {
        return new Date().toISOString().slice(0, 11) + parse[2] + ":" + parse[3];
      }
    }
    parse = ISO_8601_REGEXP.exec(value);
    if (!parse) return "";
    if (!parse[4] || !parse[5]) {
      return `${parse[1]}-${parse[2]}-${parse[3]}T${parse[4] || "00"}:${parse[5] || "00"}:${parse[6] || "00"}`;
    } else if (parse[8]) {
      // ends with Z
      return value.slice(0, -1);
    } else if (parse[9]) {
      // ends with (+|-)xx:xx
      return value.replace(/[\+\-]\d{2}(:\d{2})?$/, "");
    }
    return value;
  }
  formatDate(value) {
    if (!value) {
      return "";
    }
    value = this._correctDateValue(value);
    let options;
    if (!this.formatOptions) {
      switch (this.presentation) {
        case "date":
          options = {
            dateStyle: "medium"
          };
          break;
        case "date-time":
          options = {
            dateStyle: "medium",
            timeStyle: "short"
          };
          break;
        case "month":
          options = {
            month: "long"
          };
          break;
        case "month-year":
          options = {
            year: "numeric",
            month: "long"
          };
          break;
        case "time":
          options = {
            timeStyle: "short"
          };
          break;
        case "time-date":
          options = {
            dateStyle: "medium",
            timeStyle: "short"
          };
          break;
        case "year":
          options = {
            year: "numeric"
          };
          break;
        default:
          // works like `date` by default
          options = {
            dateStyle: "medium"
          };
      }
    } else {
      options = this.formatOptions;
    }
    let res, locale;
    if (this.locale) {
      locale = this.locale;
    } else {
      try {
        locale = Intl.DateTimeFormat().resolvedOptions().locale || "en-US";
      } catch (e) {
        locale = "en-US";
      }
    }
    try {
      res = new Date(value).toLocaleString(locale, options);
    } catch (e) {
      console.log(e);
      res = value;
    }
    return res;
  }
  static propDecorators = {
    datetimeInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonDatetime]
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    presentation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    formatOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    ionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    ionBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    ionCancel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    ionFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  };
};
ApperyioDatetime = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  template: `
        <ion-text [class.disabled]="disabled" *ngIf="!value" class="placeholder">{{placeholder || ('Select ' + (presentation === "time" ? 'time' : 'a date'))}}</ion-text>
        <ion-text [class.disabled]="disabled" *ngIf="value">{{formatDate(value)}}</ion-text>
        <button [disabled]="disabled" class="click-button" type="button" id="open-datetime{{id}}"></button>
        <ion-modal class="aio-datetime-modal presentation-{{presentation}}" trigger="open-datetime{{id}}" [keepContentsMounted]="true" (ionModalWillPresent)="onIonModalWillPresent()">
            <ng-template>
                <ion-content>
                    <ng-content></ng-content>
                </ion-content>
            </ng-template>
        </ion-modal>
    `,
  selector: 'aio-datetime',
  providers: [{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => ApperyioDatetime),
    multi: true
  }],
  styles: [(_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_src_app_scripts_apperyio_declarables_apperyio_datetime_component_ts_css_ngResource_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgOmhvc3QgewogICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1tYXJnaW4tdG9wLCAxMHB4KTsKICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWFyZ2luLWJvdHRvbSwgOXB4KTsKICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpbi1zdGFydCwgMHB4KTsKICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1tYXJnaW4tZW5kLCAwcHgpOwogICAgICAgIH0KICAgICAgICAKICAgICAgICA6aG9zdCBpb24tdGV4dCB7CiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7CiAgICAgICAgfQogICAgICAgIDpob3N0IGlvbi10ZXh0LnBsYWNlaG9sZGVyewogICAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5LCAwLjUpOwogICAgICAgIH0KICAgICAgICAKICAgICAgICA6aG9zdCAuZGlzYWJsZWQgewogICAgICAgICAgICBvcGFjaXR5OiAwLjM7CiAgICAgICAgfQogICAgICAgIAogICAgICAgIDpob3N0IC5jbGljay1idXR0b24gewogICAgICAgICAgICBsZWZ0OiAwcHg7CiAgICAgICAgICAgIHRvcDogMHB4OwogICAgICAgICAgICBtYXJnaW46IDBweDsKICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgICAgICBib3JkZXI6IDBweDsKICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTsKICAgICAgICAgICAgb3V0bGluZTogbm9uZTsKICAgICAgICAgICAgei1pbmRleDogMTsKICAgICAgICB9CiAgICAgICAgICAgIAogICAgICAgIC5haW8tZGF0ZXRpbWUtbW9kYWwgewogICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgICAgICAgLS13aWR0aDogMzI1cHg7CiAgICAgICAgICAgIC0taGVpZ2h0OiA0MzRweDsKICAgICAgICB9CiAgICAgICAgLnByZXNlbnRhdGlvbi1kYXRlIHsKICAgICAgICAgICAgLS1oZWlnaHQ6IDQzNHB4OwogICAgICAgIH0KICAgICAgICAucHJlc2VudGF0aW9uLWRhdGUtdGltZSwgLnByZXNlbnRhdGlvbi10aW1lLWRhdGUgewogICAgICAgICAgICAtLWhlaWdodDogNDY1cHg7CiAgICAgICAgfQogICAgICAgIC5wcmVzZW50YXRpb24tbW9udGgsIC5wcmVzZW50YXRpb24tbW9udGgteWVhciwgLnByZXNlbnRhdGlvbi10aW1lLCAucHJlc2VudGF0aW9uLXllYXIgewogICAgICAgICAgICAtLWhlaWdodDogMjcwcHg7CiAgICAgICAgfQogICAg_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_src_app_scripts_apperyio_declarables_apperyio_datetime_component_ts__WEBPACK_IMPORTED_MODULE_0___default())]
})], ApperyioDatetime);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApperyioDatetime);

/***/ }),

/***/ 36776:
/*!********************************************************************************!*\
  !*** ./src/app/scripts/apperyio/declarables/apperyio_file_picker_component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_src_app_scripts_apperyio_declarables_apperyio_file_picker_component_ts_css_ngResource_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgOmhvc3QgewogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7CiAgICAgICAgfQogICAgICAgIDpob3N0IGltZyB7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICB9CiAgICAgICAgOmhvc3QgLmRpc2FibGVkIHsKICAgICAgICAgICAgb3BhY2l0eTogLjU7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlcy1jb3VudCB7CiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlcy1saXN0IHsKICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlLWluZm8gewogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIH0KICAgICAgICA6aG9zdCAuZmlsZS1pbmZvIHNwYW4gewogICAgICAgICAgICBwYWRkaW5nOiA0cHg7CiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5yZW1vdmUtaWNvbiB7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgbWluLXdpZHRoOiA0MHB4OwogICAgICAgIH0KICAgIA_3D_3D_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_src_app_scripts_apperyio_declarables_apperyio_file_picker_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/scripts/apperyio/declarables/apperyio_file_picker_component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgICAgOmhvc3QgewogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7CiAgICAgICAgfQogICAgICAgIDpob3N0IGltZyB7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICB9CiAgICAgICAgOmhvc3QgLmRpc2FibGVkIHsKICAgICAgICAgICAgb3BhY2l0eTogLjU7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlcy1jb3VudCB7CiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlcy1saXN0IHsKICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlLWluZm8gewogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIH0KICAgICAgICA6aG9zdCAuZmlsZS1pbmZvIHNwYW4gewogICAgICAgICAgICBwYWRkaW5nOiA0cHg7CiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5yZW1vdmUtaWNvbiB7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgbWluLXdpZHRoOiA0MHB4OwogICAgICAgIH0KICAgIA%3D%3D!./src/app/scripts/apperyio/declarables/apperyio_file_picker_component.ts */ 55878);
/* harmony import */ var _srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_src_app_scripts_apperyio_declarables_apperyio_file_picker_component_ts_css_ngResource_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgOmhvc3QgewogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7CiAgICAgICAgfQogICAgICAgIDpob3N0IGltZyB7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICB9CiAgICAgICAgOmhvc3QgLmRpc2FibGVkIHsKICAgICAgICAgICAgb3BhY2l0eTogLjU7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlcy1jb3VudCB7CiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlcy1saXN0IHsKICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlLWluZm8gewogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIH0KICAgICAgICA6aG9zdCAuZmlsZS1pbmZvIHNwYW4gewogICAgICAgICAgICBwYWRkaW5nOiA0cHg7CiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5yZW1vdmUtaWNvbiB7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgbWluLXdpZHRoOiA0MHB4OwogICAgICAgIH0KICAgIA_3D_3D_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_src_app_scripts_apperyio_declarables_apperyio_file_picker_component_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_src_app_scripts_apperyio_declarables_apperyio_file_picker_component_ts_css_ngResource_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgOmhvc3QgewogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7CiAgICAgICAgfQogICAgICAgIDpob3N0IGltZyB7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICB9CiAgICAgICAgOmhvc3QgLmRpc2FibGVkIHsKICAgICAgICAgICAgb3BhY2l0eTogLjU7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlcy1jb3VudCB7CiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlcy1saXN0IHsKICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlLWluZm8gewogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIH0KICAgICAgICA6aG9zdCAuZmlsZS1pbmZvIHNwYW4gewogICAgICAgICAgICBwYWRkaW5nOiA0cHg7CiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5yZW1vdmUtaWNvbiB7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgbWluLXdpZHRoOiA0MHB4OwogICAgICAgIH0KICAgIA_3D_3D_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_src_app_scripts_apperyio_declarables_apperyio_file_picker_component_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);





const DEF_NO_FILE_MSG = "No file chosen";
const DEF_FILES_MSG = "file(s)";
let ApperyioFilePicker = class ApperyioFilePicker {
  inputEl;
  _multiple = false;
  change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  disabled = false;
  type;
  showCount;
  showFiles;
  showRemoveIcon;
  buttonText;
  noFilesText;
  filesText;
  iconSize;
  imageSrc;
  multiple;
  accept;
  value;
  currValue = undefined;
  _setValue(value) {
    this.currValue = value;
    this.refreshFilesList();
    this.ngModelOnChange && setTimeout(() => {
      this.ngModelOnChange(value);
    }, 0);
  }
  _filesInfo = [];
  get filesInfo() {
    return this._filesInfo;
  }
  getValue() {
    return this.currValue;
  }
  isFile(value) {
    return value instanceof File;
  }
  setValue(value) {
    if (this._multiple) {
      if (!Array.isArray(value)) {
        value = this.isFile(value) ? [value] : [];
      }
      for (let i = 0; i < value.length; i++) {
        if (!this.isFile(value[i])) {
          this._setValue([]);
          return;
        }
      }
      if (!_.isEqual(this.currValue, value)) {
        this._setValue(value);
      }
    } else {
      if (!this.isFile(value)) {
        this._setValue(undefined);
        return;
      }
      if (!_.isEqual(this.currValue, value)) {
        this._setValue(value);
      }
    }
  }
  ngOnChanges(changes) {
    if (changes.multiple) {
      this._multiple = changes.multiple.currentValue === 'true' || changes.multiple.currentValue === true;
      if (this._multiple) {
        this.inputEl.nativeElement.setAttribute("multiple", "true");
      } else {
        this.inputEl.nativeElement.removeAttribute("multiple");
      }
    }
    if (changes.value) {
      this.setValue(changes.value.currentValue);
    }
  }
  returnFileSize(number) {
    if (!number) return "-";
    if (number < 1024) {
      return number + 'bytes';
    } else if (number > 1024 && number < 1048576) {
      return (number / 1024).toFixed(1) + 'KB';
    } else if (number > 1048576) {
      return (number / 1048576).toFixed(1) + 'MB';
    }
  }
  getFilesText() {
    return !this._filesInfo.length ? this.noFilesText || DEF_NO_FILE_MSG : this._filesInfo.length + " " + (this.filesText || DEF_FILES_MSG);
  }
  getFileInfo(file) {
    return {
      name: file.name,
      size: this.returnFileSize(file.size)
    };
  }
  refreshFilesList() {
    const value = this.currValue;
    if (!value) {
      this._filesInfo = [];
      return;
    }
    if (!this._multiple) {
      this._filesInfo = [this.getFileInfo(value)];
    } else {
      this._filesInfo = value.map(value => this.getFileInfo(value));
    }
  }
  removeFile(index) {
    if (this._multiple) {
      let value = this.currValue;
      value.splice(index, 1);
      this._setValue(value);
    } else {
      this._setValue(undefined);
    }
  }
  /**
   * A callback executed when the content of the editor changes. Part of the
   * `ControlValueAccessor` (https://angular.io/api/forms/ControlValueAccessor) interface.
   *
   * Note: Unset unless the component uses the `ngModel`.
   */
  ngModelOnChange;
  /**
   * A callback executed when the editor has been blurred. Part of the
   * `ControlValueAccessor` (https://angular.io/api/forms/ControlValueAccessor) interface.
   *
   * Note: Unset unless the component uses the `ngModel`.
   */
  ccOnTouched;
  // Implementing the ControlValueAccessor interface (only when binding to ngModel).
  writeValue(value) {
    this.setValue(value);
    this.refreshFilesList();
  }
  // Implementing the ControlValueAccessor interface (only when binding to ngModel).
  registerOnChange(callback) {
    this.ngModelOnChange = callback;
  }
  // Implementing the ControlValueAccessor interface (only when binding to ngModel).
  registerOnTouched(callback) {
    this.ccOnTouched = callback;
  }
  // Implementing the ControlValueAccessor interface (only when binding to ngModel).
  setDisabledState(isDisabled) {}
  onChange($event) {
    $event.stopPropagation();
    const value = this._multiple ? Array.from(this.inputEl.nativeElement.files) : this.inputEl.nativeElement.files[0];
    this._setValue(value);
    this.inputEl.nativeElement.value = "";
    setTimeout(() => {
      this.change.emit(new CustomEvent("ionChange", {
        detail: {
          value: this.currValue
        }
      }));
    }, 0);
  }
  onSelect() {
    if (this.disabled === true || this.disabled.toLowerCase && this.disabled.toLowerCase() === "true") return;
    this.inputEl.nativeElement.click();
  }
  static propDecorators = {
    inputEl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['inputEl', {
        static: true
      }]
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['ionChange']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showCount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showFiles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showRemoveIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    buttonText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    noFilesText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    filesText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    iconSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    imageSrc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    accept: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  };
};
ApperyioFilePicker = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  template: `
        <input 
            #inputEl
            type="file"
            (change)="onChange($event)"
            style="display:none;"
            accept="{{accept || ''}}"
            >
        <ion-button 
            *ngIf="type !== 'image'"
            [disabled]="disabled"
            (click)="onSelect()"
            >
            {{buttonText || "Select file"}}
        </ion-button>
        <img 
            *ngIf="type === 'image'"
            [ngClass]="{disabled: disabled}"
            [src]="imageSrc"
            (click)="onSelect()">
        <span 
            *ngIf="showCount === 'true'"
            [ngClass]="{disabled: disabled}"
            class="files-count"
            >
            {{ getFilesText() }}
        </span>
        <div 
            *ngIf="showFiles === 'true' && filesInfo.length"
            [ngClass]="{disabled: disabled}"
            class="files-list"
            >
            <div
                class="file-info"
                *ngFor="let fileInfo of filesInfo; let i = index"
            >
                <span>
                    {{fileInfo.name}} ({{fileInfo.size}})
                </span>
                <ion-icon
                    *ngIf="showRemoveIcon === 'true'"
                    class="remove-icon"
                    name="close-circle-outline"
                    size="{{iconSize}}"
                    (click)="removeFile(i)">
                </ion-icon>
            </div>
        </div>
    `,
  selector: 'aio-file-picker',
  providers: [{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => ApperyioFilePicker),
    multi: true
  }],
  styles: [(_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_src_app_scripts_apperyio_declarables_apperyio_file_picker_component_ts_css_ngResource_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgOmhvc3QgewogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7CiAgICAgICAgfQogICAgICAgIDpob3N0IGltZyB7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICB9CiAgICAgICAgOmhvc3QgLmRpc2FibGVkIHsKICAgICAgICAgICAgb3BhY2l0eTogLjU7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlcy1jb3VudCB7CiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlcy1saXN0IHsKICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlLWluZm8gewogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIH0KICAgICAgICA6aG9zdCAuZmlsZS1pbmZvIHNwYW4gewogICAgICAgICAgICBwYWRkaW5nOiA0cHg7CiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5yZW1vdmUtaWNvbiB7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgbWluLXdpZHRoOiA0MHB4OwogICAgICAgIH0KICAgIA_3D_3D_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_src_app_scripts_apperyio_declarables_apperyio_file_picker_component_ts__WEBPACK_IMPORTED_MODULE_0___default())]
})], ApperyioFilePicker);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApperyioFilePicker);

/***/ }),

/***/ 1296:
/*!********************************************************************************!*\
  !*** ./src/app/scripts/apperyio/declarables/apperyio_form_change_directive.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 36312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 86942);
var _a;





class EventLike {
  currentTarget;
  target;
  constructor(value) {
    this.currentTarget = {
      value
    };
    this.target = {
      value
    };
  }
}
let AioFormChangeDirective = class AioFormChangeDirective {
  hostRef;
  ngForm;
  nativeForm;
  valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  statusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
  constructor(hostRef) {
    this.hostRef = hostRef;
    this.nativeForm = this.hostRef.element.nativeElement;
  }
  ngOnInit() {
    this.subscriptions.add(this.createValueObservable().subscribe(value => {
      this.valueChange.emit(value);
    }));
    this.subscriptions.add(this.createStatusObservable().subscribe(status => {
      this.statusChange.emit(status);
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  /**
   * Returns true, if the form has native browser behavior
   */
  isNativeForm() {
    return !!this.nativeForm && this.nativeForm.hasAttribute("ngNoForm");
  }
  /**
   * Event source of the (valueChange) output
   */
  createValueObservable() {
    if (this.isNativeForm()) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.nativeForm, "change").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(event => {
        const formData = new FormData(event.currentTarget);
        const value = this.formDataToJSON(formData);
        return new EventLike(value);
      }));
    }
    return this.ngForm.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(value => new EventLike(value)));
  }
  /**
   * Event source of the (statusChange) output
   */
  createStatusObservable() {
    if (this.isNativeForm()) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.nativeForm, "change").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(event => {
        const nativeForm = event.currentTarget;
        const status = nativeForm.checkValidity() ? "VALID" : "INVALID";
        return new EventLike(status);
      }));
    }
    return this.ngForm.statusChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(status => new EventLike(status)));
  }
  formDataToJSON(formData) {
    let obj = {};
    formData.forEach((value, key) => {
      obj[key] = value;
    });
    return obj;
  }
  static ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
  }];
  static propDecorators = {
    ngForm: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ["aioFormChange"]
    }],
    valueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    statusChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  };
};
AioFormChangeDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
  selector: "[aioFormChange]" // Attribute selector
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef) === "function" ? _a : Object])], AioFormChangeDirective);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AioFormChangeDirective);

/***/ }),

/***/ 72306:
/*!********************************************************************************!*\
  !*** ./src/app/scripts/apperyio/declarables/apperyio_markastouch_directive.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);
var _a;




let ApperyioMarkAsTouchDirective = class ApperyioMarkAsTouchDirective {
  model;
  constructor(model) {
    this.model = model;
  }
  onShowErrorEvent(event) {
    this.model.control.markAsTouched();
  }
  static ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgModel
  }];
  static propDecorators = {
    onShowErrorEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['markAsTouched', ['$event']]
    }]
  };
};
ApperyioMarkAsTouchDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
  selector: '[aioMarkAsTouched]' // Attribute selector
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgModel !== "undefined" && _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgModel) === "function" ? _a : Object])], ApperyioMarkAsTouchDirective);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApperyioMarkAsTouchDirective);

/***/ }),

/***/ 53984:
/*!**********************************************************************************!*\
  !*** ./src/app/scripts/apperyio/declarables/apperyio_password_show_directive.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _apperyio_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apperyio_helper */ 67845);
var _a, _b;



/**
 * The directive allows to simply show/hide password
 * For using it add the aioPasswordShow directive to ion-item wrapper of input
 */
const DEF_SHOW_ICON_NAME = 'eye';
const DEF_HIDE_ICON_NAME = 'eye-off';
let AioPasswordShowDirective = class AioPasswordShowDirective {
  el;
  Apperyio;
  aioPasswordShow = {};
  iconEl;
  inputEl;
  options;
  mode = "password";
  constructor(el, Apperyio) {
    this.el = el;
    this.Apperyio = Apperyio;
  }
  // ngAfterContentInit() {
  ngAfterViewInit() {
    this.options = this.aioPasswordShow && typeof this.aioPasswordShow === 'object' ? this.aioPasswordShow : {};
    this.iconEl = this.el.nativeElement.querySelector("ion-icon[data-action='show-hide']");
    if (!this.iconEl) {
      this.iconEl = this.el.nativeElement.querySelector("ion-icon[name='" + this.options.showIconName || 0);
    }
    if (!this.iconEl) {
      this.iconEl = this.el.nativeElement.querySelector("ion-icon");
    }
    if (!this.iconEl) {
      return;
    }
    if (this.options.showIconName) {
      this.iconEl.name = this.options.showIconName;
    }
    this.iconEl.addEventListener("click", () => this.toggleMode());
    this.Apperyio.preload.icons([this.options.hideIconName || DEF_HIDE_ICON_NAME]);
  }
  toggleMode() {
    this.mode = this.mode === "password" ? "text" : "password";
    if (this.mode === "password") {
      this.iconEl.name = this.options.showIconName || DEF_SHOW_ICON_NAME;
    } else {
      this.iconEl.name = this.options.hideIconName || DEF_HIDE_ICON_NAME;
    }
    if (!this.inputEl) {
      this.inputEl = this.el.nativeElement.querySelector("input");
    }
    let selectionStart = this.inputEl.selectionStart,
      selectionEnd = this.inputEl.selectionEnd;
    this.inputEl.type = this.mode;
    // restore cursor position/selection
    setTimeout(() => {
      this.inputEl.selectionStart = selectionStart;
      this.inputEl.selectionEnd = selectionEnd;
    }, 0);
  }
  static ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }, {
    type: _apperyio_helper__WEBPACK_IMPORTED_MODULE_0__.ApperyioHelperService
  }];
  static propDecorators = {
    aioPasswordShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  };
};
AioPasswordShowDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
  selector: '[aioPasswordShow]' // Attribute selector
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [typeof (_a = typeof _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef !== "undefined" && _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef) === "function" ? _a : Object, typeof (_b = typeof _apperyio_helper__WEBPACK_IMPORTED_MODULE_0__.ApperyioHelperService !== "undefined" && _apperyio_helper__WEBPACK_IMPORTED_MODULE_0__.ApperyioHelperService) === "function" ? _b : Object])], AioPasswordShowDirective);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AioPasswordShowDirective);

/***/ }),

/***/ 1202:
/*!***********************************************************************************!*\
  !*** ./src/app/scripts/apperyio/declarables/apperyio_tester_buttons_component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_src_app_scripts_apperyio_declarables_apperyio_tester_buttons_component_ts_css_ngResource_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICA6aG9zdCB7CiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQ6ICNmZmZmZmY7CiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQtdGludDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tYWlvLXRlc3Rlci1idXR0b24tY29sb3IsICMwOWIzMDApOwogICAgICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgICAgICByaWdodDogMHB4OwogICAgICAgIGJvdHRvbTogNXB4OwogICAgICAgIHotaW5kZXg6IDEwMDA7CiAgICB9CiAgICBpb24tZmFiLWJ1dHRvbiB7CiAgICAgICAgLS1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTsKICAgICAgICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogdmFyKC0tYnV0dG9uLWNvbG9yKTsKICAgIH0KICAgIGlvbi1mYWItbGlzdCB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4OwogICAgfQogICAgaW9uLWljb24gewogICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOwogICAgfQogICA_3D_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_src_app_scripts_apperyio_declarables_apperyio_tester_buttons_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/scripts/apperyio/declarables/apperyio_tester_buttons_component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICA6aG9zdCB7CiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQ6ICNmZmZmZmY7CiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQtdGludDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tYWlvLXRlc3Rlci1idXR0b24tY29sb3IsICMwOWIzMDApOwogICAgICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgICAgICByaWdodDogMHB4OwogICAgICAgIGJvdHRvbTogNXB4OwogICAgICAgIHotaW5kZXg6IDEwMDA7CiAgICB9CiAgICBpb24tZmFiLWJ1dHRvbiB7CiAgICAgICAgLS1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTsKICAgICAgICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogdmFyKC0tYnV0dG9uLWNvbG9yKTsKICAgIH0KICAgIGlvbi1mYWItbGlzdCB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4OwogICAgfQogICAgaW9uLWljb24gewogICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOwogICAgfQogICA%3D!./src/app/scripts/apperyio/declarables/apperyio_tester_buttons_component.ts */ 50425);
/* harmony import */ var _srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_src_app_scripts_apperyio_declarables_apperyio_tester_buttons_component_ts_css_ngResource_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICA6aG9zdCB7CiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQ6ICNmZmZmZmY7CiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQtdGludDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tYWlvLXRlc3Rlci1idXR0b24tY29sb3IsICMwOWIzMDApOwogICAgICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgICAgICByaWdodDogMHB4OwogICAgICAgIGJvdHRvbTogNXB4OwogICAgICAgIHotaW5kZXg6IDEwMDA7CiAgICB9CiAgICBpb24tZmFiLWJ1dHRvbiB7CiAgICAgICAgLS1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTsKICAgICAgICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogdmFyKC0tYnV0dG9uLWNvbG9yKTsKICAgIH0KICAgIGlvbi1mYWItbGlzdCB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4OwogICAgfQogICAgaW9uLWljb24gewogICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOwogICAgfQogICA_3D_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_src_app_scripts_apperyio_declarables_apperyio_tester_buttons_component_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_src_app_scripts_apperyio_declarables_apperyio_tester_buttons_component_ts_css_ngResource_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICA6aG9zdCB7CiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQ6ICNmZmZmZmY7CiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQtdGludDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tYWlvLXRlc3Rlci1idXR0b24tY29sb3IsICMwOWIzMDApOwogICAgICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgICAgICByaWdodDogMHB4OwogICAgICAgIGJvdHRvbTogNXB4OwogICAgICAgIHotaW5kZXg6IDEwMDA7CiAgICB9CiAgICBpb24tZmFiLWJ1dHRvbiB7CiAgICAgICAgLS1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTsKICAgICAgICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogdmFyKC0tYnV0dG9uLWNvbG9yKTsKICAgIH0KICAgIGlvbi1mYWItbGlzdCB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4OwogICAgfQogICAgaW9uLWljb24gewogICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOwogICAgfQogICA_3D_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_src_app_scripts_apperyio_declarables_apperyio_tester_buttons_component_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



let ApperyioTesterButtons = class ApperyioTesterButtons {
  hidden = true;
  hideBackButton = false;
  constructor() {
    if (location.href.includes("hot_reload=true") || location.href.includes("preview_build=true")) {
      if (window._aioTesterButtonHidden !== true) {
        this.hidden = false;
      }
      if (location.href.includes("preview_build=true")) {
        this.hideBackButton = true;
      }
    }
  }
  reload() {
    window.location.reload();
  }
  goBack() {
    window.location.href = window.navigator.vendor.includes("Apple") ? "ionic://localhost/" : "https://localhost/";
  }
  goToHomeScreen() {
    window.location.href = window.location.href.substr(0, window.location.href.indexOf("#"));
  }
  hide() {
    if (confirm(`Hide the Controls menu buttons? \nNote that you will need to restart ${location.href.includes("hot_reload=true") ? "Appery.io Tester" : "the application"} to view your project updates and unhide the app controls?`)) {
      window._aioTesterButtonHidden = true;
      this.hidden = true;
    }
  }
  ngAfterContentChecked() {
    if (!this.hidden && window._aioTesterButtonHidden === true) {
      this.hidden = true;
    }
  }
  static ctorParameters = () => [];
};
ApperyioTesterButtons = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  template: `
    <ion-fab vertical="bottom" horizontal="end" slot="fixed" *ngIf="!hidden">
        <ion-fab-button color="light">
            <ion-icon name="share" src="assets/images/aio_tester_button.svg">
            </ion-icon>
        </ion-fab-button>
        <ion-fab-list side="start">
            <ion-fab-button (click)="goBack()" *ngIf="!hideBackButton">
                <ion-icon name="arrow-back-circle-outline">
                </ion-icon>
            </ion-fab-button>
            <ion-fab-button (click)="hide()">
                <ion-icon name="contract-outline">
                </ion-icon>
            </ion-fab-button>
            <ion-fab-button (click)="goToHomeScreen()">
                <ion-icon name="home-outline">
                </ion-icon>
            </ion-fab-button>
            <ion-fab-button (click)="reload()">
                <ion-icon name="reload-outline">
                </ion-icon>
            </ion-fab-button>
        </ion-fab-list>
    </ion-fab>
    `,
  selector: 'aio-tester-buttons',
  styles: [(_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_src_app_scripts_apperyio_declarables_apperyio_tester_buttons_component_ts_css_ngResource_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICA6aG9zdCB7CiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQ6ICNmZmZmZmY7CiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQtdGludDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tYWlvLXRlc3Rlci1idXR0b24tY29sb3IsICMwOWIzMDApOwogICAgICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgICAgICByaWdodDogMHB4OwogICAgICAgIGJvdHRvbTogNXB4OwogICAgICAgIHotaW5kZXg6IDEwMDA7CiAgICB9CiAgICBpb24tZmFiLWJ1dHRvbiB7CiAgICAgICAgLS1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTsKICAgICAgICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogdmFyKC0tYnV0dG9uLWNvbG9yKTsKICAgIH0KICAgIGlvbi1mYWItbGlzdCB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4OwogICAgfQogICAgaW9uLWljb24gewogICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOwogICAgfQogICA_3D_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_src_app_scripts_apperyio_declarables_apperyio_tester_buttons_component_ts__WEBPACK_IMPORTED_MODULE_0___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])], ApperyioTesterButtons);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApperyioTesterButtons);

/***/ }),

/***/ 15877:
/*!*******************************************************!*\
  !*** ./src/app/scripts/apperyio/entityapi_service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityApiService": () => (/* binding */ EntityApiService)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ 4274);


/**
 * General algorithm: create hash object where
 *  - Key is any path inside model
 *  - Value isolated function which returns already prepared entity
 *
 * This implementation avalible inside app as `Apperyio.EntityAPI('{ModelName.path}')`
 *
 * Instance exdends `Apperyio` instance in `Apperyio.js`
 *     by implement integration interface in `sentity.js with app/services/model.js`
 *
 * User documentation: https://docs.appery.io/docs/appbuilder-ionic-model#section-model-api
 */
function _type(model) {
  return model && (model.type || model.$ref);
}
var clone = (lodash__WEBPACK_IMPORTED_MODULE_0___default().clone),
  isArray = (lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray),
  each = (lodash__WEBPACK_IMPORTED_MODULE_0___default().each),
  keys = (lodash__WEBPACK_IMPORTED_MODULE_0___default().keys),
  union = (lodash__WEBPACK_IMPORTED_MODULE_0___default().union),
  map = (lodash__WEBPACK_IMPORTED_MODULE_0___default().map),
  isObject = (lodash__WEBPACK_IMPORTED_MODULE_0___default().isObject),
  isFunction = (lodash__WEBPACK_IMPORTED_MODULE_0___default().isFunction),
  TypeNotFoundError = function (message) {
    return {
      "name": "TypeNotFoundError",
      message: message
    };
  },
  NoModelError = function (message) {
    return {
      "name": "NoModelError",
      message: message
    };
  },
  // we supporting two syntaxes: `model.[i].property` and `model.[2].property`
  ARRAY_PATH_regex = /\[(i|\d+)\]/;
/**
 * EntityApiService base constructor for Instances of Model provided as argument
 */
class EntityApiService {
  default_undefined = true;
  models;
  _types;
  constructor() {
    this.models = _models__WEBPACK_IMPORTED_MODULE_1__.models || [];
    /**
     * Base types
     * @type {Object}
     */
    this._types = {
      "string": function (model) {
        return model && model.default || (this.default_undefined ? undefined : "");
      },
      "any": function (model) {
        return model && model.default || (this.default_undefined ? undefined : "");
      },
      "data": function (model) {
        return model && model.default || (this.default_undefined ? undefined : "");
      },
      "number": function (model) {
        return parseInt(model && model.default || 0, 10) || (this.default_undefined ? undefined : 0);
      },
      "boolean": function (model) {
        var result = model && lodash__WEBPACK_IMPORTED_MODULE_0___default().isBoolean(model.default) ? model.default : this.default_undefined ? undefined : false;
        if (typeof result == "string") {
          result = result.toLowerCase() === "true" || result === "1" || parseInt(result, 10) > 0;
        } else if (typeof result == "number") {
          result = result > 0;
        }
        return result;
      },
      "object": function (model) {
        var result = {};
        if (model && model.properties) {
          for (var key in model.properties) {
            result[key] = this._get(model.properties[key].type || model.properties[key].$ref, model.properties[key]);
          }
        }
        return result;
      },
      "array": function (model) {
        if (!model) {
          return [];
        }
        var result = model['default'] || [],
          self = this;
        if (isArray(model.items)) {
          // v2 version -- items is array
          each(model.items, function (item) {
            if (typeof item.index == "number") {
              // special model for item with concrete index
              result[item.index] = self._get(_type(item) || 'string', item);
            } else {
              // general or default item in array,
              // this model will be applied to all array items, except special indexed items
              result.__entity = self._get.bind(self, _type(item) || 'string', item);
            }
          });
          // in case when we for some reason don't have general model for items
          // we set it as `undefined`
          if (!result.__entity) {
            result.__entity = function () {
              return undefined;
            };
          }
        } else if (isObject(model.items)) {
          // v1 format - simple object for describing one model for items
          // pregenerate type
          this._get(_type(model.items), model.items);
          // create method for generating array items,
          // useful on merge step with given defaults
          result.__entity = this._get.bind(this, _type(model.items) || 'string', model.items);
        }
        return result;
      },
      "null": function (model) {
        return null;
      }
    };
  }
  /**
   * Retrieve instance of model specified by Name
   * @param  {String} name              Name of Model or Path to Model part
   * @param  {Object} defaults          Plain-object which will be merged to the instance
   * @param  {boolean} default_undefined If true, then any property in generated entity
   *                                     will be initialized by `undefined`, otherwise, by
   *                                     type specific empty value (0, "", false, {})
   * @param {boolean} skip_empty_objects  If true, then any empty property (empty arrays and objects
   *                                      without properties that differs from `undefined`)
   *                                      in generated entity will be set to `undefined`.
   * @return {Object}                   Instance of Model/Model part
   */
  get(name, defaults, default_undefined, skip_empty_objects) {
    var result = null;
    this.default_undefined = default_undefined || false;
    var isObjectDefaults = Object.prototype.toString.call(defaults) === "[object Object]";
    if (typeof defaults !== typeof undefined && !isObjectDefaults) {
      result = defaults;
    } else {
      result = this._get(name);
      if (isObjectDefaults) {
        result = this.__special_merge(result, defaults);
      }
      if (skip_empty_objects) {
        result = this._skip_empty_objects(lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(result));
      }
    }
    return lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeepWith(result, function (v) {
      if (isArray(v)) {
        var r = v.concat();
        r.__entity = v.__entity;
        return r;
      }
    });
  }
  /**
   * Recursive merge default value to Model Instance considering case with One Item in Array from XML
   * @privat
   * @param  {Object} from_model
   * @param  {Object} defaults
   * @return {Object}
   */
  __special_merge(from_model, defaults) {
    function merge(a, b) {
      var result, tmp;
      if (isObject(b)) {
        each(union(keys(a), keys(b)), function (k) {
          result = result || {};
          if (b.hasOwnProperty(k)) {
            // restoring array items
            if (isArray(a[k]) && a[k].hasOwnProperty('__entity')) {
              result[k] = [];
              for (let j = 0; j < a[k].length; j++) {
                result[k][j] = a[k][j];
              }
              var b_k = b[k];
              // now we restoring array items,
              // but if given default value is not an Array?
              // We should wrap it into Array
              if (!isArray(b_k)) {
                b_k = [b_k];
              }
              // Process each item in array one by one for Arrays with specific model for some items
              for (var b_i = 0, b_len = b_k.length; b_i < b_len; b_i++) {
                tmp = a[k][b_i] === undefined ? a[k].__entity(b_i) : clone(a[k][b_i]);
                if (isArray(b_k[b_i])) {
                  result[k][b_i] = map(b_k[b_i], merge.bind(null, tmp));
                } else {
                  result[k][b_i] = merge(tmp, b_k[b_i]);
                }
              }
            } else if (isObject(a[k])) {
              result[k] = merge(a[k], b[k]);
            } else {
              result[k] = b[k];
            }
          } else {
            result[k] = a[k];
          }
        });
      }
      result = result || a || b;
      return result;
    }
    return merge(from_model, defaults);
  }
  /**
   * Recursive check if object/array has no nonempty values then change it to "undefined"
   * @privat
   * @param  {Object} model
   * @return {Object}
   */
  _skip_empty_objects(model) {
    function isEmptyOblect(obj) {
      if (Object.prototype.toString.call(obj) === "[object Object]") {
        for (var key in obj) {
          if (lodash__WEBPACK_IMPORTED_MODULE_0___default().has(obj, key) && obj[key] !== undefined && !isFunction(obj[key])) {
            return false;
          }
        }
      } else if (isArray(obj)) {
        for (var i = 0, len = obj.length; i < len; i++) {
          if (obj[i] !== undefined) {
            return false;
          }
        }
      }
      return true;
    }
    var filterEmpty = function filterEmpty(data) {
      var objKeys = keys(data);
      for (var i = 0; i < objKeys.length; i++) {
        if (isObject(data[objKeys[i]])) {
          data[objKeys[i]] = filterEmpty(data[objKeys[i]]);
        }
      }
      if (isObject(data) && isEmptyOblect(data)) {
        return undefined;
      }
      return data;
    };
    return filterEmpty(model);
  }
  /**
   * Get hash name for specified name and get params
   * @privat
   * @param  {String} name Name of type
   * @return {Object}
   */
  _get_hash_name(name) {
    return name + "/" + (!!this.default_undefined).toString();
  }
  /**
   * Internal retrieving Instance of Model
   * @privat
   * @param  {String} name Model name
   * @return {Object}
   */
  _get(name, md) {
    var hashName = this._get_hash_name(name);
    if (typeof this._types[hashName] == "function") {
      return this._types[hashName].apply(this, Array.prototype.slice.call(arguments, 1));
    }
    if (typeof this._types[name] == "function") {
      return this._types[name].apply(this, Array.prototype.slice.call(arguments, 1));
    } else {
      try {
        this._add(name);
      } catch (e) {
        if (e instanceof NoModelError) {
          throw TypeNotFoundError(e.message);
        }
        throw e;
      }
      return this._types[hashName].apply(this, Array.prototype.slice.call(arguments, 1));
    }
  }
  /**
   * Expand user dot-path to internal path format for part of Model
   * @privat
   * @param  {String} name Path or Name of Model
   * @return {Array}      internal formatted path
   */
  _expand_path(name) {
    var new_path = [],
      m,
      path = name.split('.');
    new_path = [path.shift()];
    for (var i = 0, l = path.length; i < l; i++) {
      m = ARRAY_PATH_regex.exec(path[i]);
      if (isArray(m)) {
        new_path.push(['items', m[1]]);
      } else {
        new_path.push('properties');
        new_path.push(path[i]);
      }
    }
    return new_path;
  }
  /**
   * Internal method for adding new Models
   * @privat
   * @param {String} name Model name
   */
  _add(name) {
    var path = [],
      model;
    if (this.models[name] == undefined) {
      if (name.indexOf('.') > -1) {
        path = this._expand_path(name);
        model = clone(this.models[path.shift()]);
        var l = path.length;
        var i = 0;
        while (i < l) {
          var item = path[i],
            j,
            jl;
          if (isArray(item) && isArray(model.items)) {
            // new format of model
            if (parseInt(item[1], 10) == item[1]) {
              // array index is number
              for (j = 0, jl = model.items.length; j < jl; j++) {
                if (model.items[j].index == item[1]) {
                  model = model.items[j];
                  i++;
                  break;
                }
              }
            } else if (item[1] == "i") {
              //searching for first element without `index` property
              for (j = 0, jl = model.items.length; j < jl; j++) {
                if (!model.items[j].hasOwnProperty('index')) {
                  model = model.items[j];
                  i++;
                  break;
                }
              }
            }
          } else {
            if (isArray(item)) {
              // old array format (as object) but after new path-converter
              item = "items";
            }
            if (model.hasOwnProperty(item)) {
              model = model[item];
              i++;
            } else {
              model = this.models[_type(model)];
              if (typeof model == 'undefined') {
                throw NoModelError(_type(model) + ' not found');
              }
            }
          }
        }
      } else {
        throw NoModelError("Can't found `" + name + "` model");
      }
    } else {
      model = this.models[name];
    }
    this.__add(name, model);
  }
  /**
   * Compile and add new Model
   * @privat
   * @param  {String} name  Model name
   * @param  {Object} model Model description
   */
  __add(name, model) {
    this._types[this._get_hash_name(name)] = function (self, key, md) {
      var result = null;
      try {
        result = function (v) {
          return function () {
            return v;
          };
        }(self._get(_type(md), md));
      } catch (e) {
        if (e instanceof NoModelError) {
          result = self._add(key);
        } else {
          throw e;
        }
      }
      return result;
    }(this, name, model);
  }
  /**
   * Recursively remove all undefined values (in all nested levels) from object
   * @param  {Object}
   */
  removeUndefined(obj) {
    if (obj && isObject(obj)) {
      if (isArray(obj)) {
        obj = obj.filter(item => item !== undefined);
        for (var i = 0; i < obj.length; i++) {
          obj[i] = this.removeUndefined(obj[i]);
        }
      }
      for (var name in obj) {
        if (obj[name] === undefined) {
          delete obj[name];
        }
        if (obj[name] && isObject(obj[name])) {
          obj[name] = this.removeUndefined(obj[name]);
        }
      }
    }
    return obj;
  }
}
;

/***/ }),

/***/ 33905:
/*!***********************************************************!*\
  !*** ./src/app/scripts/apperyio/modal_screens_service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalScreensService": () => (/* binding */ ModalScreensService)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



let ModalScreensService = class ModalScreensService {
  modalScreens = {};
  getModalScreen(screenName) {
    var _this = this;
    return (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this.modalScreens[screenName];
    })();
  }
};
ModalScreensService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], ModalScreensService);

;

/***/ }),

/***/ 93952:
/*!******************************************************!*\
  !*** ./src/app/scripts/apperyio/translate_module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApperyioTranslateModule": () => (/* binding */ ApperyioTranslateModule),
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/http-loader */ 58319);






function createTranslateLoader(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
let ApperyioTranslateModule = class ApperyioTranslateModule {};
ApperyioTranslateModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule.forChild({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient]
    }
  })],
  exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule]
})], ApperyioTranslateModule);


/***/ }),

/***/ 76007:
/*!******************************************************!*\
  !*** ./src/app/scripts/apperyio/utils/app_client.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilsAppClient": () => (/* binding */ UtilsAppClient)
/* harmony export */ });
var UtilsAppClient = {};
;

/***/ }),

/***/ 18545:
/*!**************************************************!*\
  !*** ./src/app/scripts/apperyio/utils/common.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilsCommon": () => (/* binding */ UtilsCommon)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);

const RECONNECTION_TIMEOUT = 3000;
var FILE_FORMAT;
(function (FILE_FORMAT) {
  FILE_FORMAT[FILE_FORMAT["STRING"] = 1] = "STRING";
  FILE_FORMAT[FILE_FORMAT["ARRAY_BUFFER"] = 2] = "ARRAY_BUFFER";
  FILE_FORMAT[FILE_FORMAT["BLOB"] = 3] = "BLOB";
  FILE_FORMAT[FILE_FORMAT["FORM_DATA"] = 4] = "FORM_DATA";
  FILE_FORMAT[FILE_FORMAT["DATA_URL"] = 5] = "DATA_URL";
})(FILE_FORMAT || (FILE_FORMAT = {}));
var UtilsCommon = {
  initUtils: function () {
    var _this = this;
    this.network.onDisconnect().subscribe( /*#__PURE__*/(0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.offline = true;
      _this.onNetworkStateChange('offline');
    }));
    this.network.onConnect().subscribe(() => {
      if (this.offline === true) {
        setTimeout( /*#__PURE__*/(0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          _this.offline = false;
          _this.onNetworkStateChange('online');
        }), RECONNECTION_TIMEOUT);
      }
    });
    this.onWindowResize();
    window.addEventListener('resize', this.onWindowResize.bind(this));
    this.initHttpUtils();
    this.db.initDBUtils(this);
  },
  FILE_FORMAT: FILE_FORMAT,
  width: 0,
  height: 0,
  smUp: false,
  smDown: false,
  mdUp: false,
  mdDown: false,
  lgUp: false,
  lgDown: false,
  xlUp: false,
  xlDown: false,
  onWindowResize: function () {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.smUp = this.width >= 576;
    this.smDown = this.width < 576;
    this.mdUp = this.width >= 768;
    this.mdDown = this.width < 768;
    this.lgUp = this.width >= 992;
    this.lgDown = this.width < 992;
    this.xlUp = this.width >= 1200;
    this.xlDown = this.width < 1200;
  },
  hexToRGB: function (hex, alpha = 0) {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);
    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  },
  filterArray: function (array, condition) {
    return _.filter(array, condition);
  },
  removeFromArray: function (array, ...items) {
    _.pull.call(_, array, ...items);
    return [...array];
  },
  hasString: function (source, str, caseSensitive = false) {
    if (str === "") return true;
    if (!str || !source) return false;
    if (!_.isArray(source)) {
      source = [source];
    }
    if (!caseSensitive) {
      str = str.toLocaleLowerCase();
    }
    let s, i;
    for (i = 0; i < source.length; i++) {
      s = caseSensitive ? source[i] : source[i].toLocaleLowerCase();
      if (s.indexOf(str) !== -1) {
        return true;
      }
    }
    return false;
  },
  hasValue: function (source, value) {
    if (_.isArray(source) || _.isObject(source)) {
      let predicate = arguments.length === 1 ? item => item != undefined : item => item === value;
      return _.some(source, predicate);
    }
    return arguments.length < 2 ? source != undefined : source === value;
  },
  generatePassword: function (len = 10) {
    let length = len ? len : 10;
    let string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
    let numeric = '0123456789';
    let punctuation = '.;:_-~+=!@#$%^&*';
    let password = "";
    let character = "";
    while (password.length < length) {
      let entity1 = Math.ceil(string.length * Math.random() * Math.random());
      let entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
      let entity3 = Math.ceil(punctuation.length * Math.random() * Math.random());
      let hold = string.charAt(entity1);
      hold = password.length % 2 == 0 ? hold.toUpperCase() : hold;
      character += hold;
      character += numeric.charAt(entity2);
      character += punctuation.charAt(entity3);
      password = character;
    }
    password = password.split('').sort(function () {
      return 0.5 - Math.random();
    }).join('');
    return password.substr(0, len);
  },
  generateUUID: function () {
    var d = new Date().getTime(); //Timestamp
    var d2 = typeof performance !== 'undefined' && performance.now && performance.now() * 1000 || 0; //Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16; //random number between 0 and 16
      if (d > 0) {
        //Use timestamp until depleted
        r = (d + r) % 16 | 0;
        d = Math.floor(d / 16);
      } else {
        //Use microseconds since page-load if supported
        r = (d2 + r) % 16 | 0;
        d2 = Math.floor(d2 / 16);
      }
      return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
  },
  lang: '',
  offline: false,
  onNetworkStateChange: function (state) {
    console.log("network state " + state);
  },
  setLang: function (lang) {
    this.translate.use(lang);
    this.lang = lang;
  },
  setTheme: function (theme) {
    this.theme.set(theme);
  },
  getLang: function () {
    return this.lang;
  },
  getVariable: function (varName) {
    return this.data.getVariable(varName);
  },
  getConfig: function (configName, scope = 'Settings') {
    if (!this.config.constants[scope]) return null;
    return this.config.get(`${scope}.${configName}`);
  },
  getValueFromObject: function (obj, properties = ['description', 'message', 'error']) {
    let message = undefined;
    if (!obj) return message;
    for (let i = 0; i < properties.length; i++) {
      message = obj[properties[i]];
      if (message && typeof message == 'string') {
        return message;
      }
    }
    return message;
  },
  showError: function () {
    var _ref3 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
      let message = '';
      yield this.dismissLoading();
      if (typeof e == 'string') {
        try {
          e = JSON.parse(e);
        } catch (err) {
          message = e;
        }
      }
      if (_.isObject(e)) {
        message = this.getValueFromObject(e?.error) || this.getValueFromObject(e);
      }
      if (!message) message = 'Some error happens';
      yield this.alert(message, 'Error');
    });
    return function showError(_x) {
      return _ref3.apply(this, arguments);
    };
  }(),
  toast: function () {
    var _ref4 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (message, header, {
      color = 'success',
      position = 'bottom',
      duration = 1000
    } = {}) {
      const toast = yield this.getController("ToastController").create({
        header: header ? this.translate.instant(header) : undefined,
        message: message && this.translate.instant(message),
        color: color,
        position: position,
        duration: duration
      });
      yield toast.present();
    });
    return function toast(_x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }(),
  alert: function () {
    var _ref5 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (message, header, func, options = {}) {
      const alert = yield this.getController("AlertController").create({
        header: header ? this.translate.instant(header) : undefined,
        message: message && this.translate.instant(message),
        cssClass: options?.cssClass || '',
        subHeader: options?.subHeader ? this.translate.instant(options.subHeader) : '',
        backdropDismiss: options?.backdropDismiss !== undefined ? options?.backdropDismiss : true,
        htmlAttributes: options?.htmlAttributes,
        buttons: [{
          text: this.translate.instant('Ok'),
          handler: () => {
            func && _.isFunction(func) && func();
          }
        }]
      });
      yield alert.present();
    });
    return function alert(_x4, _x5, _x6) {
      return _ref5.apply(this, arguments);
    };
  }(),
  alertOkCancel: function () {
    var _ref6 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (message, header, funcOk, funcCancel, options = {}) {
      const alert = yield this.getController("AlertController").create({
        header: header ? this.translate.instant(header) : undefined,
        message: message && this.translate.instant(message),
        cssClass: options?.cssClass || '',
        subHeader: options?.subHeader ? this.translate.instant(options.subHeader) : '',
        backdropDismiss: options?.backdropDismiss !== undefined ? options?.backdropDismiss : true,
        htmlAttributes: options?.htmlAttributes,
        buttons: [{
          text: this.translate.instant('Cancel'),
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            funcCancel && _.isFunction(funcCancel) && funcCancel();
          }
        }, {
          text: this.translate.instant('Ok'),
          handler: () => {
            funcOk && _.isFunction(funcOk) && funcOk();
          }
        }]
      });
      yield alert.present();
    });
    return function alertOkCancel(_x7, _x8, _x9, _x10) {
      return _ref6.apply(this, arguments);
    };
  }(),
  markFormAsTouched: function (form, markAllAsTouched = true) {
    try {
      if (markAllAsTouched) form?.form?.markAllAsTouched();
    } catch (e) {
      console.log(e);
    }
    return form?.invalid;
  },
  closeModal: function (data = null) {
    this.getController("ModalController").dismiss(data);
  },
  modal: function () {
    var _ref7 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (screenName, componentProps = {}, options = {}) {
      const defaults = {
        componentProps: componentProps,
        showBackdrop: true,
        backdropDismiss: false,
        cssClass: "",
        animated: true,
        keyboardClose: true
      };
      const modal = yield this.showModal(screenName, {
        ...defaults,
        ...options
      });
      modal.present();
      let data = yield modal.onDidDismiss();
      return data?.data;
    });
    return function modal(_x11) {
      return _ref7.apply(this, arguments);
    };
  }(),
  dismissLoading: function () {
    var _ref8 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      while ((yield this.loadingController.getTop()) !== undefined) {
        try {
          yield this.loadingController.dismiss();
        } catch (e) {
          console.log(e);
        }
      }
    });
    return function dismissLoading() {
      return _ref8.apply(this, arguments);
    };
  }(),
  showLoading: function () {
    var _ref9 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (message = 'Please wait...', spinner = 'crescent') {
      yield this.dismissLoading();
      const loading = yield this.loadingController.create({
        message: this.translate.instant(message),
        spinner: spinner
      });
      yield loading.present();
    });
    return function showLoading() {
      return _ref9.apply(this, arguments);
    };
  }(),
  errorCatch: function () {
    var _ref10 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e, options = {}) {
      console.log(e);
      if (options.loadingEnd) yield this.dismissLoading();
      if (options.showError) yield this.showError(options.errorMessage || e);
      if (options.throwError) throw e;
    });
    return function errorCatch(_x12) {
      return _ref10.apply(this, arguments);
    };
  }(),
  resizeImage: function (base64image, {
    width = 0,
    height = 0,
    maxSize = 409600
  } = {}) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      if (!this.isDataURL(base64image)) {
        base64image = "data:;base64," + base64image;
      }
      img.src = base64image;
      let base64ResizedImage = base64image;
      img.onload = () => {
        // Check if the image require resize at all
        // if (img.height <= height && img.width <= width) {
        //     base64ResizedImage = base64image;
        //     // TODO: Call method to do something with the resize image
        // } else {
        // Make sure the width and height preserve the original aspect ratio and adjust if needed
        height ||= img.height;
        width ||= img.width;
        if (img.height > img.width) {
          width = Math.floor(height * (img.width / img.height));
        } else {
          height = Math.floor(width * (img.height / img.width));
        }
        let resizingCanvas = document.createElement('canvas');
        let resizingCanvasContext = resizingCanvas.getContext("2d");
        // Start with original image size
        resizingCanvas.width = img.width;
        resizingCanvas.height = img.height;
        // Draw the original image on the (temp) resizing canvas
        resizingCanvasContext.drawImage(img, 0, 0, resizingCanvas.width, resizingCanvas.height);
        let curImageDimensions = {
          width: Math.floor(img.width),
          height: Math.floor(img.height)
        };
        let halfImageDimensions = {
          width: null,
          height: null
        };
        // Quickly reduce the dize by 50% each time in few iterations until the size is less then
        // 2x time the target size - the motivation for it, is to reduce the aliasing that would have been
        // created with direct reduction of very big image to small image
        while (curImageDimensions.width * 0.5 > width) {
          // Reduce the resizing canvas by half and refresh the image
          halfImageDimensions.width = Math.floor(curImageDimensions.width * 0.5);
          halfImageDimensions.height = Math.floor(curImageDimensions.height * 0.5);
          resizingCanvasContext.drawImage(resizingCanvas, 0, 0, curImageDimensions.width, curImageDimensions.height, 0, 0, halfImageDimensions.width, halfImageDimensions.height);
          curImageDimensions.width = halfImageDimensions.width;
          curImageDimensions.height = halfImageDimensions.height;
        }
        // Now do final resize for the resizingCanvas to meet the dimension requirments
        // directly to the output canvas, that will output the final image
        let outputCanvas = document.createElement('canvas');
        let outputCanvasContext = outputCanvas.getContext("2d");
        outputCanvas.width = width;
        outputCanvas.height = height;
        outputCanvasContext.drawImage(resizingCanvas, 0, 0, curImageDimensions.width, curImageDimensions.height, 0, 0, width, height);
        // output the canvas pixels as an image. params: format, quality
        let quality = 1;
        base64ResizedImage = outputCanvas.toDataURL('image/jpeg', quality);
        while (base64ResizedImage.length > maxSize && quality > 0.1) {
          quality -= 0.05;
          base64ResizedImage = outputCanvas.toDataURL('image/jpeg', quality);
        }
        resolve(base64ResizedImage);
      };
    });
  },
  DEFAULT_FORMAT: FILE_FORMAT.FORM_DATA,
  DEFAULT_FILE_NAME: "file.dat",
  DEFAULT_FILE_TYPE: "application/octet-stream",
  convertData: function (ab, format, type = this.DEFAULT_FILE_TYPE, name = this.DEFAULT_FILE_NAME) {
    let result = ab;
    if (format === FILE_FORMAT.BLOB || format === FILE_FORMAT.FORM_DATA) {
      result = new Blob([ab], {
        type: type || this.DEFAULT_FILE_TYPE
      });
    }
    if (format === FILE_FORMAT.FORM_DATA) {
      const formData = new FormData();
      const fileName = name || this.DEFAULT_FILE_NAME;
      formData.append(fileName, result, fileName);
      result = formData;
    }
    return result;
  },
  readFile: function (file, format = FILE_FORMAT.DATA_URL, type = this.DEFAULT_FILE_TYPE, name = this.DEFAULT_FILE_NAME) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        let result = reader.result;
        if (format !== FILE_FORMAT.STRING) {
          result = this.convertData(result, format, type || file.type, name || file.name);
        }
        resolve(result);
      };
      reader.onerror = () => {
        reader.abort();
        reject('Error while reading file.');
      };
      switch (format) {
        case FILE_FORMAT.STRING:
          reader.readAsText(file);
          break;
        case FILE_FORMAT.DATA_URL:
          reader.readAsDataURL(file);
          break;
        default:
          reader.readAsArrayBuffer(file);
      }
    });
  },
  updateApp: function () {
    var _ref11 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (message = "Installing updates") {
      return new Promise((resolve, reject) => {
        if (window.cordova && window.chcp && !document.location.host.includes("appery.io")) {
          window.chcp.fetchUpdate((error, data) => {
            console.log('error', error);
            console.log('data', data);
            if (!error) {
              this.showLoading(message);
              window.chcp.installUpdate(error => {
                console.log(error);
                this.dismissLoading();
                resolve(true);
              });
            } else {
              resolve(true);
            }
          });
        } else {
          resolve(true);
        }
      });
    });
    return function updateApp() {
      return _ref11.apply(this, arguments);
    };
  }(),
  replaceObject: function (origin, source) {
    Object.keys(origin).forEach(key => delete origin[key]);
    _.assign(origin, source);
  },
  setRole(role) {
    this._role = role;
  },
  hasRole(...roles) {
    return roles.indexOf(this._role) !== -1;
  },
  service: function () {
    var _ref12 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (name, data = {}, options = {}) {
      try {
        options = this.getOptions(options);
        if (options.loadingStart) yield this.showLoading();
        const service = yield this.getService(name);
        const obj = yield service.execute(data).toPromise();
        if (options.loadingEnd) yield this.dismissLoading();
        if (options.message) yield this.toast(options.message);
        return obj || {
          status: 'success'
        };
      } catch (e) {
        yield this.errorCatch(e, options);
        return undefined;
      }
    });
    return function service(_x13) {
      return _ref12.apply(this, arguments);
    };
  }(),
  loadScript: function (src) {
    return new Promise((res, rej) => {
      const script = document.createElement("script");
      script.src = src;
      script.id = "script_" + new Date().getTime();
      document.head.append(script);
      script.onload = () => {
        res(true);
      };
      script.onerror = () => {
        rej();
      };
    });
  },
  setSession: function (name, value) {
    sessionStorage[name] = JSON.stringify(value);
  },
  getSession: function (name) {
    try {
      return JSON.parse(sessionStorage[name]);
    } catch (e) {
      console.log(e);
      return null;
    }
  },
  setLocal: function (name, value) {
    localStorage[name] = JSON.stringify(value);
  },
  getLocal: function (name) {
    try {
      return JSON.parse(localStorage[name]);
    } catch (e) {
      console.log(e);
      return null;
    }
  },
  setStorage: function () {
    var _ref13 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (name, value) {
      return yield this.data.setStorage(name, value);
    });
    return function setStorage(_x14, _x15) {
      return _ref13.apply(this, arguments);
    };
  }(),
  getStorage: function () {
    var _ref14 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (name) {
      return yield this.data.getStorage(name);
    });
    return function getStorage(_x16) {
      return _ref14.apply(this, arguments);
    };
  }(),
  removeStorage: function () {
    var _ref15 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (name) {
      return yield this.data.removeStorage(name);
    });
    return function removeStorage(_x17) {
      return _ref15.apply(this, arguments);
    };
  }(),
  convertBase64ToBlob: function (base64Image) {
    if (this.isDataURL(base64Image)) {
      base64Image = this.dataURLtoBase64(base64Image);
    }
    // Decode Base64 string
    const decodedData = window.atob(base64Image);
    // Create UNIT8ARRAY of size same as row data length
    const uInt8Array = new Uint8Array(decodedData.length);
    // Insert all character code into uInt8Array
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i);
    }
    // Return BLOB image after conversion
    return new Blob([uInt8Array]);
  },
  Uint8ToBase64: function (u8Arr) {
    var CHUNK_SIZE = 0x8000; //arbitrary number
    var index = 0;
    var length = u8Arr.length;
    var result = '';
    var slice;
    while (index < length) {
      slice = u8Arr.subarray(index, Math.min(index + CHUNK_SIZE, length));
      result += String.fromCharCode.apply(null, slice);
      index += CHUNK_SIZE;
    }
    return btoa(result);
  },
  dataURLtoFile: function (dataURL, filename) {
    let arr = dataURL.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {
      type: mime
    });
  },
  dataURLtoBase64: function (dataURL) {
    return dataURL.split(',')[1];
  },
  getMediaTypeFromDataURL: function (dataURL) {
    const defType = this.DEFAULT_FILE_TYPE;
    if (this.isDataURL(dataURL)) {
      let type = dataURL.split(',')[0].substring(5);
      if (type) {
        return type.split(';')[0];
      }
    }
    return defType;
  },
  isDataURL: function (dataUrl) {
    return dataUrl.startsWith('data:');
  },
  scrollTop: function (target, {
    duration = 300,
    timeout = 300
  } = {}) {
    if (!target) return;
    if (target._aio_content?.scrollToTop && _.isFunction(target._aio_content.scrollToTop)) {
      setTimeout(() => target._aio_content?.scrollToTop(duration), timeout);
      return;
    }
    if (target.constructor?.name === 'IonContent') {
      setTimeout(() => target.scrollToTop(duration, timeout));
      return;
    }
    if (target.nativeElement) {
      target = target.nativeElement;
    }
    if (target.scroll) {
      setTimeout(() => target.scroll({
        top: 0,
        behavior: "smooth"
      }), timeout);
    }
  },
  scrollBottom: function (target, {
    duration = 300,
    timeout = 300
  } = {}) {
    if (!target) return;
    if (target._aio_content?.scrollToBottom && _.isFunction(target._aio_content.scrollToBottom)) {
      setTimeout(() => target._aio_content?.scrollToBottom(duration), timeout);
      return;
    }
    if (target.constructor?.name === 'IonContent') {
      setTimeout(() => target.scrollToBottom(duration), timeout);
      return;
    }
    if (target.nativeElement) {
      target = target.nativeElement;
    }
    if (target.scroll) {
      setTimeout(() => target.scroll({
        top: 1e7,
        behavior: "smooth"
      }, timeout));
    }
  }
};
;

/***/ }),

/***/ 19325:
/*!**********************************************!*\
  !*** ./src/app/scripts/apperyio/utils/db.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilsDB": () => (/* binding */ UtilsDB)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ 7074);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



const WARNING = "WARNING! The `rememberMe` functionality uses Secure Storage, so it is safe to store login and password only in native applications (apk/aab, ipa). In the web version, a placeholder is used exclusively for testing the application. Do not use `rememberMe` in the production version of the web application.";
let warningWasShown = false;
function showWarning($a) {
  if (!warningWasShown) {
    if ($a._rootHelper.isBrowser()) {
      console.warn(WARNING);
    }
    warningWasShown = true;
  }
}
const HEADER_DATABASE_ID = "X-Appery-Database-Id",
  HEADER_SESSION_TOKEN = "X-Appery-Session-Token";
const SET_USER_ID_ERROR = "User ID is not specified. Set User ID with `userSetId` method",
  NOT_LOGGED_IN_ERROR = "User ID is not specified. Login before update user data";
var UtilsDB = {
  initDBUtils: function (rootHelper) {
    this._rootHelper = rootHelper;
    this.host = _constants__WEBPACK_IMPORTED_MODULE_1__.apiHost + "/rest/1/db";
    const databaseId = this._rootHelper.config.get("Settings.databaseId");
    if (databaseId) {
      this.setDatabaseId(databaseId);
    }
  },
  host: "",
  _rootHelper: null,
  _userId: undefined,
  headers: {},
  addHeaders: function (headers) {
    this._rootHelper.addHeaders.call(this, headers);
  },
  setHeaders: function (headers) {
    this.headers = headers;
  },
  getHeaders: function (options) {
    return this._rootHelper.getHeaders.call(this, options);
  },
  processOptions: function (options) {
    options = {
      ...options
    };
    options.headers = {
      ...this.headers,
      ...options.headers
    };
    return options;
  },
  login: function () {
    var _ref = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (payload = {}, options = {}) {
      this.setSessionToken(); // remove current Session Token. Wrong (expired) token leads to login error
      this.userSetId();
      options = this.processOptions(options);
      const session = yield this._rootHelper.post(`${this.host}/login`, {
        username: payload.username,
        password: payload.password
      }, {
        ...options,
        message: undefined
      });
      if (!session?.sessionToken) return null;
      this.setSessionToken(session.sessionToken);
      this.userSetId(session._id);
      options = this.processOptions(options);
      if (payload.rememberMe) {
        showWarning(this);
        yield this._rootHelper.setStorage('rememberMe', payload.rememberMe);
        yield this._rootHelper.ssSet('credentials', payload);
      }
      const res = yield this._rootHelper.get(`${this.host}/users/${session._id}`, {
        headers: options.headers
      });
      if (options.message) yield this._rootHelper.toast(options.message);
      return res;
    });
    return function login() {
      return _ref.apply(this, arguments);
    };
  }(),
  setSessionToken: function (sessionToken) {
    if (sessionToken) {
      this.addHeaders({
        [HEADER_SESSION_TOKEN]: sessionToken
      });
    } else {
      delete this.headers[HEADER_SESSION_TOKEN];
    }
  },
  getSessionToken: function () {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders(this.headers);
    return headers.get(HEADER_SESSION_TOKEN) || undefined;
  },
  setDatabaseId: function (databaseId) {
    if (databaseId) {
      this.addHeaders({
        [HEADER_DATABASE_ID]: databaseId
      });
    } else {
      delete this.headers[HEADER_DATABASE_ID];
    }
  },
  getDatabaseId: function () {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders(this.headers);
    return headers.get(HEADER_DATABASE_ID) || undefined;
  },
  clearItem: function (item) {
    delete item._id;
    delete item.acl;
    delete item._createdAt;
    delete item._updatedAt;
  },
  autoLogin: function () {
    var _ref2 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      showWarning(this);
      const rememberMe = yield this._rootHelper.getStorage('rememberMe');
      if (rememberMe) {
        const value = yield this._rootHelper.ssGet('credentials');
        return value ? yield this.login(value) : null;
      }
      return null;
    });
    return function autoLogin() {
      return _ref2.apply(this, arguments);
    };
  }(),
  logout: function () {
    var _ref3 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      this.setSessionToken();
      this.userSetId();
      yield this._rootHelper.setStorage('rememberMe', false);
      yield this._rootHelper.ssRemove('credentials');
    });
    return function logout() {
      return _ref3.apply(this, arguments);
    };
  }(),
  getById: function () {
    var _ref4 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (collection, id, options = {}) {
      options = this.processOptions(options);
      return yield this._rootHelper.get(`${this.host}/collections/${collection}/${id}`, options);
    });
    return function getById(_x, _x2) {
      return _ref4.apply(this, arguments);
    };
  }(),
  query: function () {
    var _ref5 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (collection, params, options = {}) {
      options = this.processOptions(options);
      return yield this._rootHelper.post(`${this.host}/collections/${collection}/query`, params, options);
    });
    return function query(_x3, _x4) {
      return _ref5.apply(this, arguments);
    };
  }(),
  save: function () {
    var _ref6 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (collection, item, options = {}) {
      options = this.processOptions(options);
      if (_.isArray(item)) {
        const payload = item.map(({
          _id,
          ...data
        }) => {
          this.clearItem(data);
          return _id ? {
            method: "PUT",
            collection,
            _id,
            data
          } : {
            method: "POST",
            collection,
            data
          };
        });
        return yield this._rootHelper.post(`${this.host}/batch`, payload, options);
      }
      let data = null;
      try {
        options = this._rootHelper.getOptions(options);
        if (options.loadingStart) yield this._rootHelper.showLoading();
        let saveRes, itemId;
        if (item._id) {
          const {
            _id,
            ...payload
          } = item;
          this.clearItem(payload);
          saveRes = yield this._rootHelper.put(`${this.host}/collections/${collection}/${_id}`, payload, {
            ...options,
            loading: false,
            message: undefined
          });
          itemId = _id;
        } else {
          saveRes = yield this._rootHelper.post(`${this.host}/collections/${collection}`, item, {
            ...options,
            loading: false,
            message: undefined
          });
          itemId = saveRes?._id;
        }
        if (saveRes) {
          data = yield this.getById(collection, itemId, {
            ...options,
            loading: false,
            message: undefined
          });
        }
        if (options.loadingEnd) yield this._rootHelper.dismissLoading();
        if (options.message) yield this._rootHelper.toast(options.message);
      } catch (e) {
        yield this._rootHelper.errorCatch(e, options);
      }
      return data;
    });
    return function save(_x5, _x6) {
      return _ref6.apply(this, arguments);
    };
  }(),
  remove: function () {
    var _ref7 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (collection, item, options = {}) {
      options = this.processOptions(options);
      if (_.isArray(item)) {
        const payload = item.map(({
          _id,
          ...data
        }) => {
          this.clearItem(data);
          return {
            method: "DELETE",
            collection,
            _id
          };
        });
        return yield this._rootHelper.post(`${this.host}/batch`, payload, options);
      }
      if (typeof item == 'object') item = item._id;
      return yield this._rootHelper.delete(`${this.host}/collections/${collection}/${item}`, options);
    });
    return function remove(_x7, _x8) {
      return _ref7.apply(this, arguments);
    };
  }(),
  /**
   * delete file if base64Data is null
   * update file if base64Data is string
   * options.deleteOldFile: boolean
   */
  saveWithFile: function () {
    var _ref8 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (collection, item, fileData = {}, options = {}) {
      let {
        base64Data,
        fileName,
        filePropName
      } = fileData || {};
      options = this.processOptions(options);
      if (!fileName) {
        fileName = this._rootHelper.DEFAULT_FILE_NAME;
      }
      if (!filePropName) {
        filePropName = "file";
      }
      let file = null;
      if (base64Data) {
        file = yield this.uploadBase64File(base64Data, fileName, {
          ...options,
          message: undefined
        });
        if (!file) return null;
      }
      try {
        let fileNameToDelete = options.deleteOldFile && item[filePropName]?.fileName;
        item[filePropName] = file;
        const updatedItem = yield this.save(collection, item, {
          ...options,
          throwError: true,
          message: undefined
        });
        if (fileNameToDelete) {
          yield this.deleteFile(fileNameToDelete, {
            ...options,
            message: undefined
          });
        }
        if (options.message) yield this._rootHelper.toast(options.message);
        return updatedItem;
      } catch (err) {
        if (file) {
          yield this.deleteFile(file.fileName, {
            ...options,
            message: undefined
          });
        }
        return null;
      }
    });
    return function saveWithFile(_x9, _x10) {
      return _ref8.apply(this, arguments);
    };
  }(),
  removeWithFile: function () {
    var _ref9 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (collection, item, filePropName, options = {}) {
      options = this.processOptions(options);
      if (item[filePropName]) {
        yield this.deleteFile(item[filePropName].fileName, {
          ...options,
          message: undefined
        });
      }
      return yield this.remove(collection, item, options);
    });
    return function removeWithFile(_x11, _x12, _x13) {
      return _ref9.apply(this, arguments);
    };
  }(),
  uploadBase64File: function () {
    var _ref10 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (base64Data, fileName = this._rootHelper.DEFAULT_FILE_NAME, options = {}) {
      options = this.processOptions(options);
      const file = yield this._rootHelper.post(`${this.host}/files/`, {
        _id: fileName,
        content: this._rootHelper.getFileBase64Data(base64Data),
        contentType: this._rootHelper.getMediaTypeFromDataURL(base64Data)
      }, options);
      return file ? {
        fileName: file._id,
        originalFileName: fileName,
        fileurl: this.getFileUrl(file._id)
      } : null;
    });
    return function uploadBase64File(_x14) {
      return _ref10.apply(this, arguments);
    };
  }(),
  deleteFile: function () {
    var _ref11 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (fileName, options = {}) {
      options = this.processOptions(options);
      return yield this._rootHelper.delete(`${this.host}/files/${fileName}`, options);
    });
    return function deleteFile(_x15) {
      return _ref11.apply(this, arguments);
    };
  }(),
  getFileUrl: function (fileName) {
    return `${_constants__WEBPACK_IMPORTED_MODULE_1__.apiHost}/rest/1.1/db/files/${this.getDatabaseId()}/${fileName}`;
  },
  userCreate: function () {
    var _ref12 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (userData, options = {}) {
      options = this.processOptions(options);
      let data = null;
      try {
        options = this._rootHelper.getOptions(options);
        if (options.loadingStart) yield this._rootHelper.showLoading();
        let saveRes;
        saveRes = yield this._rootHelper.post(`${this.host}/users`, userData, {
          ...options,
          loading: false,
          message: undefined
        });
        if (saveRes) {
          this.setSessionToken(saveRes.sessionToken);
          this.userSetId(saveRes._id);
          data = yield this.userGetData({
            ...options,
            loading: false,
            message: undefined
          });
        }
        if (options.loadingEnd) yield this._rootHelper.dismissLoading();
        if (options.message) yield this._rootHelper.toast(options.message);
      } catch (e) {
        yield this._rootHelper.errorCatch(e, options);
      }
      return data;
    });
    return function userCreate(_x16) {
      return _ref12.apply(this, arguments);
    };
  }(),
  userUpdate: function () {
    var _ref13 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (userData, options = {}) {
      if (!this.userGetId()) {
        if (this.headers[HEADER_SESSION_TOKEN]) {
          yield this._rootHelper.errorCatch({
            message: SET_USER_ID_ERROR
          }, options);
        } else {
          yield this._rootHelper.errorCatch({
            message: NOT_LOGGED_IN_ERROR
          }, options);
        }
        return;
      }
      options = this.processOptions(options);
      let data = null;
      try {
        options = this._rootHelper.getOptions(options);
        if (options.loadingStart) yield this._rootHelper.showLoading();
        let saveRes;
        const payload = {
          ...userData
        };
        this.clearItem(payload);
        saveRes = yield this._rootHelper.put(`${this.host}/users/${this.userGetId()}`, payload, {
          ...options,
          loading: false,
          message: undefined
        });
        if (saveRes) {
          data = yield this.userGetData({
            ...options,
            loading: false,
            message: undefined
          });
        }
        if (options.loadingEnd) yield this._rootHelper.dismissLoading();
        if (options.message) yield this._rootHelper.toast(options.message);
      } catch (e) {
        yield this._rootHelper.errorCatch(e, options);
      }
      return data;
    });
    return function userUpdate(_x17) {
      return _ref13.apply(this, arguments);
    };
  }(),
  userGetData: function () {
    var _ref14 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (options = {}) {
      if (!this.userGetId()) {
        if (this.headers[HEADER_SESSION_TOKEN]) {
          yield this._rootHelper.errorCatch({
            message: SET_USER_ID_ERROR
          }, options);
        } else {
          yield this._rootHelper.errorCatch({
            message: NOT_LOGGED_IN_ERROR
          }, options);
        }
        return;
      }
      options = this.processOptions(options);
      return yield this._rootHelper.get(`${this.host}/users/me`, options);
    });
    return function userGetData() {
      return _ref14.apply(this, arguments);
    };
  }(),
  userRemove: function () {
    var _ref15 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (options = {}) {
      if (!this.userGetId()) {
        if (this.headers[HEADER_SESSION_TOKEN]) {
          yield this._rootHelper.errorCatch({
            message: SET_USER_ID_ERROR
          }, options);
        } else {
          yield this._rootHelper.errorCatch({
            message: NOT_LOGGED_IN_ERROR
          }, options);
        }
        return;
      }
      options = this.processOptions(options);
      yield this._rootHelper.delete(`${this.host}/users/${this.userGetId()}`, options);
      yield this.logout();
    });
    return function userRemove() {
      return _ref15.apply(this, arguments);
    };
  }(),
  userGetId: function () {
    return this._userId;
  },
  userSetId: function (userId) {
    this._userId = userId;
  }
};
;

/***/ }),

/***/ 98155:
/*!************************************************!*\
  !*** ./src/app/scripts/apperyio/utils/http.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilsHttp": () => (/* binding */ UtilsHttp)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ 7074);



const defaultOptions = {
  showError: true,
  loadingStart: false,
  loadingEnd: false,
  throwError: false,
  message: '',
  errorMessage: '',
  cache: false,
  saveInCache: false,
  headers: null
};
function buildParams(prefix, obj, add) {
  var name;
  if (Array.isArray(obj)) {
    // Serialize array item.
    obj.forEach(function (v, i) {
      if (prefix.endsWith("[]")) {
        // Treat each array item as a scalar.
        add(prefix, v);
      } else {
        // Item is non-scalar (array or object), encode its numeric index.
        buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, add);
      }
    });
  } else if (typeof obj === "object" && obj) {
    // Serialize object item.
    for (name in obj) {
      buildParams(prefix + "[" + name + "]", obj[name], add);
    }
  } else {
    // Serialize scalar item.
    add(prefix, obj);
  }
}
function toParamStr(a) {
  var prefix,
    s = [],
    add = function (key, valueOrFunction) {
      // If value is a function, invoke it and use its return value
      var value = typeof valueOrFunction === "function" ? valueOrFunction() : valueOrFunction;
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
    };
  if (a == null) {
    return "";
  }
  // encode params recursively.
  for (prefix in a) {
    buildParams(prefix, a[prefix], add);
  }
  // Return the resulting serialization
  return s.join("&");
}
;
function addParamsToUrl(url, params) {
  if (!params) return url;
  const paramsStr = toParamStr(params);
  if (paramsStr) url += url.includes("?") ? "&" + paramsStr : "?" + paramsStr;
  return url;
}
var UtilsHttp = {
  initHttpUtils: function () {
    this.apiHost = _constants__WEBPACK_IMPORTED_MODULE_1__.apiHost + "/rest/1/db/collections/";
  },
  headers: {
    "Content-Type": "application/json"
  },
  apiHost: "",
  cache: {},
  getOptions: function (options, extraOptions = {}) {
    if (options.loading) {
      options.loadingStart = true;
      options.loadingEnd = true;
    } else if (options.loading === false) {
      options.loadingStart = false;
      options.loadingEnd = false;
    }
    return {
      ...defaultOptions,
      ...options,
      ...extraOptions
    };
  },
  setHeaders: function (headers) {
    this.headers = headers;
  },
  setHost: function (host) {
    this.apiHost = host;
  },
  getHost: function () {
    return this.apiHost;
  },
  getApiUrl: function (url) {
    return url.startsWith("http://") || url.startsWith("https://") ? url : this.apiHost + url;
  },
  getHeaders: function (options) {
    let headers = options.noExtend ? {
      ...options.headers
    } : {
      ...this.headers,
      ...options.headers
    };
    if (options.clearContentType) delete headers['Content-Type'];
    return {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders(headers)
    };
  },
  addHeaders: function (headers) {
    this.headers = {
      ...this.headers,
      ...headers
    };
  },
  post: function () {
    var _ref = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (url, body, options = {}) {
      options = this.getOptions(options);
      try {
        if (options.loadingStart) yield this.showLoading();
        url = addParamsToUrl(url, options.params);
        let res = yield this.http.post(this.getApiUrl(url), body, this.getHeaders(options)).toPromise();
        if (options.loadingEnd) yield this.dismissLoading();
        if (options.message) yield this.toast(options.message);
        return res;
      } catch (e) {
        console.log(e);
        yield this.errorCatch(e, options);
        return undefined;
      }
    });
    return function post(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(),
  put: function () {
    var _ref2 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (url, body, options = {}) {
      options = this.getOptions(options);
      try {
        if (options.loadingStart) yield this.showLoading();
        url = addParamsToUrl(url, options.params);
        let res = yield this.http.put(this.getApiUrl(url), body, this.getHeaders(options)).toPromise();
        if (options.loadingEnd) yield this.dismissLoading();
        if (options.message) yield this.toast(options.message);
        return res;
      } catch (e) {
        yield this.errorCatch(e, options);
        return undefined;
      }
    });
    return function put(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }(),
  getCache: function (name) {
    return _.cloneDeep(this.cache[name]);
  },
  setCache: function (name, value) {
    this.cache[name] = _.cloneDeep(value);
  },
  get: function () {
    var _ref3 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (url, options = {}) {
      try {
        options = this.getOptions(options);
        let cacheName = 'GET: ' + url;
        if (options.cache) {
          let cacheData = this.getCache(cacheName);
          if (cacheData) return cacheData;
        }
        if (options.loadingStart) yield this.showLoading();
        url = addParamsToUrl(url, options.params);
        let res = yield this.http.get(this.getApiUrl(url), this.getHeaders(options)).toPromise();
        if (options.cache || options.saveInCache) {
          this.setCache(cacheName, res);
        }
        if (options.loadingEnd) yield this.dismissLoading();
        if (options.message) yield this.toast(options.message);
        return res;
      } catch (e) {
        yield this.errorCatch(e, options);
        return undefined;
      }
    });
    return function get(_x5) {
      return _ref3.apply(this, arguments);
    };
  }(),
  delete: function () {
    var _ref4 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (url, options = {}) {
      try {
        options = this.getOptions(options);
        if (options.loadingStart) yield this.showLoading();
        url = addParamsToUrl(url, options.params);
        const res = yield this.http.delete(this.getApiUrl(url), this.getHeaders(options)).toPromise();
        if (options.loadingEnd) yield this.dismissLoading();
        if (options.message) yield this.toast(options.message);
        return res;
      } catch (e) {
        yield this.errorCatch(e, options);
        return undefined;
      }
    });
    return function _delete(_x6) {
      return _ref4.apply(this, arguments);
    };
  }(),
  getFileBase64Data: function (base64Data) {
    return this.isDataURL(base64Data) ? this.dataURLtoBase64(base64Data) : base64Data;
  },
  saveFile: function (data, fileName) {
    if (data.length || data.size) {
      const blob = data instanceof Blob ? new Blob([data]) : this.convertBase64ToBlob(data);
      const a = document.createElement('a');
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    } else {
      console.log('No data');
    }
  },
  saveTextFile: function (text, fileName) {
    if (text.length) {
      const a = document.createElement('a');
      a.href = 'data:text/plain;charset=utf-8, ' + encodeURIComponent(text);
      a.download = fileName;
      a.click();
      a.remove();
    } else {
      console.log('No data');
    }
  },
  sc: function () {
    var _ref5 = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (scriptName, body, options = {}) {
      if (!scriptName.includes('.')) scriptName = "Settings." + scriptName;
      return yield this.post(`${_constants__WEBPACK_IMPORTED_MODULE_1__.apiHost}/rest/1/code/${this.config.get(scriptName)}/exec`, body, options);
    });
    return function sc(_x7, _x8) {
      return _ref5.apply(this, arguments);
    };
  }()
};
;

/***/ }),

/***/ 30521:
/*!**********************************************************!*\
  !*** ./src/app/scripts/apperyio/utils/secure_storage.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilsSecureStorage": () => (/* binding */ UtilsSecureStorage)
/* harmony export */ });
/* harmony import */ var _srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ 36240);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);


const WARNING = "WARNING! Secure Storage only works in native applications (apk/aab, ipa). It is not possible to implement Secure Storage in the Web version, so a placeholder is used exclusively for testing the application. Do not use Secure Storage in the production version of the Web application.";
let warningWasShown = false;
const UtilsSecureStorage = {
  ssGet(key) {
    var _this = this;
    return (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.isMobile()) {
        yield _this.platform.ready();
        yield initCordovaSecureStorage();
        return new Promise((resolve, reject) => {
          window.apperySecureStorage.get(value => {
            try {
              const parsedValue = JSON.parse(value);
              _this.ngZone.run(() => resolve(parsedValue));
            } catch (e) {
              _this.ngZone.run(() => resolve(value));
            }
          }, error => {
            _this.ngZone.run(() => reject(error));
          }, key);
        });
      } else {
        showWarning(_this);
        const bytes = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.decrypt(localStorage["secure_" + key], key) ?? null;
        const value = bytes && bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__.enc.Utf8);
        try {
          const parsedValue = JSON.parse(value);
          return parsedValue;
        } catch (e) {
          return value;
        }
      }
    })();
  },
  ssSet(key, value) {
    var _this2 = this;
    return (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      value = JSON.stringify(value);
      if (_this2.isMobile()) {
        yield _this2.platform.ready();
        yield initCordovaSecureStorage();
        return new Promise((resolve, reject) => {
          window.apperySecureStorage.set(() => {
            _this2.ngZone.run(() => resolve());
          }, error => {
            _this2.ngZone.run(() => reject(error));
          }, key, value);
        });
      } else {
        showWarning(_this2);
        localStorage["secure_" + key] = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(value, key).toString();
      }
    })();
  },
  ssRemove(key) {
    var _this3 = this;
    return (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.isMobile()) {
        yield _this3.platform.ready();
        yield initCordovaSecureStorage();
        return new Promise((resolve, reject) => {
          window.apperySecureStorage.remove(() => {
            _this3.ngZone.run(() => resolve());
          }, error => {
            _this3.ngZone.run(() => reject(error));
          }, key);
        });
      } else {
        showWarning(_this3);
        localStorage.removeItem("secure_" + key);
      }
    })();
  }
};
function initCordovaSecureStorage() {
  return _initCordovaSecureStorage.apply(this, arguments);
}
function _initCordovaSecureStorage() {
  _initCordovaSecureStorage = (0,_srv_appery_jenkins_workspace_dd7fa204_bb25_4262_a966_d5a804123af8_android_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    if (window.apperySecureStorage) return;
    const secureStorage = yield createCordovaSecureStorage("appery");
    window.apperySecureStorage = secureStorage;
  });
  return _initCordovaSecureStorage.apply(this, arguments);
}
function createCordovaSecureStorage(storageKey) {
  return new Promise((resolve, reject) => {
    const secureStorage = new window.cordova.plugins.SecureStorage(() => resolve(secureStorage), error => reject(error), storageKey);
  });
}
function showWarning($a) {
  if (!warningWasShown) {
    if ($a.isBrowser()) {
      console.warn(WARNING);
    }
    warningWasShown = true;
  }
}

/***/ }),

/***/ 22482:
/*!**********************************************!*\
  !*** ./src/app/scripts/components.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipes.module */ 56972);
/* harmony import */ var _directives_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives.module */ 43543);








let ComponentsModule = class ComponentsModule {};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  declarations: [],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule, _directives_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule],
  exports: [],
  entryComponents: []
})], ComponentsModule);


/***/ }),

/***/ 7074:
/*!**************************************!*\
  !*** ./src/app/scripts/constants.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IGNORED_VALUE": () => (/* binding */ IGNORED_VALUE),
/* harmony export */   "apiHost": () => (/* binding */ apiHost),
/* harmony export */   "constants": () => (/* binding */ constants),
/* harmony export */   "projectInfo": () => (/* binding */ projectInfo),
/* harmony export */   "pushSettings": () => (/* binding */ pushSettings),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
const constants = {
  /**
   * Settings
   */
  Settings: {}
};
const routes = {
  "Screen1": "screen1",
  "Product_Details1": "product_details1",
  "Screen2": "screen2",
  "About_Us1": "about_us1"
};
const pushSettings = {
  appID: 'dd7fa204-bb25-4262-a966-d5a804123af8',
  baseUrl: 'https://api.appery.io/rest/push/reg',
  baseSendUrl: 'https://api.appery.io/rest/push/msg',
  initOptions: {}
};
const projectInfo = {
  guid: 'dd7fa204-bb25-4262-a966-d5a804123af8',
  name: 'Fitness',
  description: ''
};
const IGNORED_VALUE = Symbol.for("AIO_REST_IGNORED_VALUE");
const apiHost = "https://api.appery.io";

/***/ }),

/***/ 6235:
/*!*****************************************************!*\
  !*** ./src/app/scripts/custom-components.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomComponentsModule": () => (/* binding */ CustomComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _custom_component_Rating_Rating_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom_component/Rating/Rating.module */ 44825);



let CustomComponentsModule = class CustomComponentsModule {};
CustomComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  declarations: [],
  exports: [_custom_component_Rating_Rating_module__WEBPACK_IMPORTED_MODULE_0__.RatingComponentModule],
  imports: []
})], CustomComponentsModule);


/***/ }),

/***/ 34363:
/*!**************************************************!*\
  !*** ./src/app/scripts/custom-modules.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomModulesModule": () => (/* binding */ CustomModulesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


let CustomModulesModule = class CustomModulesModule {};
CustomModulesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  declarations: [],
  imports: [],
  exports: []
})], CustomModulesModule);


/***/ }),

/***/ 43543:
/*!**********************************************!*\
  !*** ./src/app/scripts/directives.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectivesModule": () => (/* binding */ DirectivesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);



let DirectivesModule = class DirectivesModule {};
DirectivesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  declarations: [],
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule],
  exports: []
})], DirectivesModule);


/***/ }),

/***/ 4274:
/*!***********************************!*\
  !*** ./src/app/scripts/models.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_aioDefStorageValues": () => (/* binding */ _aioDefStorageValues),
/* harmony export */   "models": () => (/* binding */ models)
/* harmony export */ });
/**
 * Models generated from "Model and Storage" and models extracted from services.
 * To generate entity use syntax:
 * Apperyio.EntityAPI("<model_name>[.<model_field>]");
 */
var models = {
  "ProductModel": {
    "type": "object",
    "properties": {
      "description": {
        "type": "string"
      },
      "price": {
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "sizes": {
        "type": "array",
        "items": [{
          "type": "string"
        }]
      },
      "rating": {
        "type": "number"
      },
      "availability": {
        "type": "boolean"
      },
      "photos": {
        "type": "array",
        "items": [{
          "type": "string"
        }]
      },
      "originalPrice": {
        "type": "string"
      },
      "colors": {
        "type": "array",
        "items": [{
          "type": "string"
        }]
      }
    }
  },
  "String": {
    "type": "string"
  },
  "Number": {
    "type": "number"
  },
  "Any": {
    "type": "any"
  },
  "Function": {
    "type": "Function"
  },
  "Promise": {
    "type": "Promise"
  },
  "Boolean": {
    "type": "boolean"
  },
  "Observable": {
    "type": "Observable"
  }
};
/**
 * Data storage
 */
const _aioDefStorageValues = {
  variables: {},
  storages: {},
  functions: {}
};

/***/ }),

/***/ 56972:
/*!*****************************************!*\
  !*** ./src/app/scripts/pipes.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);



let PipesModule = class PipesModule {};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  declarations: [],
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule],
  exports: []
})], PipesModule);


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);
// Very important content




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 50425:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/scripts/apperyio/declarables/apperyio_tester_buttons_component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICA6aG9zdCB7CiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQ6ICNmZmZmZmY7CiAgICAgICAgLS1pb24tY29sb3ItbGlnaHQtdGludDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tYWlvLXRlc3Rlci1idXR0b24tY29sb3IsICMwOWIzMDApOwogICAgICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgICAgICByaWdodDogMHB4OwogICAgICAgIGJvdHRvbTogNXB4OwogICAgICAgIHotaW5kZXg6IDEwMDA7CiAgICB9CiAgICBpb24tZmFiLWJ1dHRvbiB7CiAgICAgICAgLS1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTsKICAgICAgICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogdmFyKC0tYnV0dG9uLWNvbG9yKTsKICAgIH0KICAgIGlvbi1mYWItbGlzdCB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsKICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4OwogICAgfQogICAgaW9uLWljb24gewogICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOwogICAgfQogICA%3D!./src/app/scripts/apperyio/declarables/apperyio_tester_buttons_component.ts ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n    :host {\n        --ion-color-light: #ffffff;\n        --ion-color-light-tint: var(--ion-color-light);\n        --ion-color-light-shade: var(--ion-color-light);\n        --button-color: var(--aio-tester-button-color, #09b300);\n        position: fixed;\n        right: 0px;\n        bottom: 5px;\n        z-index: 1000;\n    }\n    ion-fab-button {\n        --color: var(--button-color);\n        --ion-color-light-contrast: var(--button-color);\n    }\n    ion-fab-list {\n        background: var(--ion-color-light);\n        border-radius: 25px;\n    }\n    ion-icon {\n        pointer-events: none;\n    }\n   ", "",{"version":3,"sources":["webpack://./src/app/scripts/apperyio/declarables/apperyio_tester_buttons_component.ts"],"names":[],"mappings":";IACI;QACI,0BAA0B;QAC1B,8CAA8C;QAC9C,+CAA+C;QAC/C,uDAAuD;QACvD,eAAe;QACf,UAAU;QACV,WAAW;QACX,aAAa;IACjB;IACA;QACI,4BAA4B;QAC5B,+CAA+C;IACnD;IACA;QACI,kCAAkC;QAClC,mBAAmB;IACvB;IACA;QACI,oBAAoB;IACxB","sourcesContent":["\n    :host {\n        --ion-color-light: #ffffff;\n        --ion-color-light-tint: var(--ion-color-light);\n        --ion-color-light-shade: var(--ion-color-light);\n        --button-color: var(--aio-tester-button-color, #09b300);\n        position: fixed;\n        right: 0px;\n        bottom: 5px;\n        z-index: 1000;\n    }\n    ion-fab-button {\n        --color: var(--button-color);\n        --ion-color-light-contrast: var(--button-color);\n    }\n    ion-fab-list {\n        background: var(--ion-color-light);\n        border-radius: 25px;\n    }\n    ion-icon {\n        pointer-events: none;\n    }\n   "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 55878:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/scripts/apperyio/declarables/apperyio_file_picker_component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgICAgOmhvc3QgewogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7CiAgICAgICAgfQogICAgICAgIDpob3N0IGltZyB7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICB9CiAgICAgICAgOmhvc3QgLmRpc2FibGVkIHsKICAgICAgICAgICAgb3BhY2l0eTogLjU7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlcy1jb3VudCB7CiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlcy1saXN0IHsKICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5maWxlLWluZm8gewogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIH0KICAgICAgICA6aG9zdCAuZmlsZS1pbmZvIHNwYW4gewogICAgICAgICAgICBwYWRkaW5nOiA0cHg7CiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7CiAgICAgICAgfQogICAgICAgIDpob3N0IC5yZW1vdmUtaWNvbiB7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgbWluLXdpZHRoOiA0MHB4OwogICAgICAgIH0KICAgIA%3D%3D!./src/app/scripts/apperyio/declarables/apperyio_file_picker_component.ts ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n        :host {\n            align-items: center;\n            display: flex;\n            flex-wrap: wrap;\n        }\n        :host img {\n            cursor: pointer;\n        }\n        :host .disabled {\n            opacity: .5;\n        }\n        :host .files-count {\n            margin-left: 1em;\n        }\n        :host .files-list {\n            width: 100%;\n        }\n        :host .file-info {\n            align-items: center;\n            display: flex;\n        }\n        :host .file-info span {\n            padding: 4px;\n            word-break: break-word;\n        }\n        :host .remove-icon {\n            cursor: pointer;\n            min-width: 40px;\n        }\n    ", "",{"version":3,"sources":["webpack://./src/app/scripts/apperyio/declarables/apperyio_file_picker_component.ts"],"names":[],"mappings":";QACQ;YACI,mBAAmB;YACnB,aAAa;YACb,eAAe;QACnB;QACA;YACI,eAAe;QACnB;QACA;YACI,WAAW;QACf;QACA;YACI,gBAAgB;QACpB;QACA;YACI,WAAW;QACf;QACA;YACI,mBAAmB;YACnB,aAAa;QACjB;QACA;YACI,YAAY;YACZ,sBAAsB;QAC1B;QACA;YACI,eAAe;YACf,eAAe;QACnB","sourcesContent":["\n        :host {\n            align-items: center;\n            display: flex;\n            flex-wrap: wrap;\n        }\n        :host img {\n            cursor: pointer;\n        }\n        :host .disabled {\n            opacity: .5;\n        }\n        :host .files-count {\n            margin-left: 1em;\n        }\n        :host .files-list {\n            width: 100%;\n        }\n        :host .file-info {\n            align-items: center;\n            display: flex;\n        }\n        :host .file-info span {\n            padding: 4px;\n            word-break: break-word;\n        }\n        :host .remove-icon {\n            cursor: pointer;\n            min-width: 40px;\n        }\n    "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 78761:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/scripts/apperyio/declarables/apperyio_datetime_component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgICAgOmhvc3QgewogICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1tYXJnaW4tdG9wLCAxMHB4KTsKICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWFyZ2luLWJvdHRvbSwgOXB4KTsKICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpbi1zdGFydCwgMHB4KTsKICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1tYXJnaW4tZW5kLCAwcHgpOwogICAgICAgIH0KICAgICAgICAKICAgICAgICA6aG9zdCBpb24tdGV4dCB7CiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7CiAgICAgICAgfQogICAgICAgIDpob3N0IGlvbi10ZXh0LnBsYWNlaG9sZGVyewogICAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5LCAwLjUpOwogICAgICAgIH0KICAgICAgICAKICAgICAgICA6aG9zdCAuZGlzYWJsZWQgewogICAgICAgICAgICBvcGFjaXR5OiAwLjM7CiAgICAgICAgfQogICAgICAgIAogICAgICAgIDpob3N0IC5jbGljay1idXR0b24gewogICAgICAgICAgICBsZWZ0OiAwcHg7CiAgICAgICAgICAgIHRvcDogMHB4OwogICAgICAgICAgICBtYXJnaW46IDBweDsKICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgICAgICBib3JkZXI6IDBweDsKICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTsKICAgICAgICAgICAgb3V0bGluZTogbm9uZTsKICAgICAgICAgICAgei1pbmRleDogMTsKICAgICAgICB9CiAgICAgICAgICAgIAogICAgICAgIC5haW8tZGF0ZXRpbWUtbW9kYWwgewogICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsKICAgICAgICAgICAgLS13aWR0aDogMzI1cHg7CiAgICAgICAgICAgIC0taGVpZ2h0OiA0MzRweDsKICAgICAgICB9CiAgICAgICAgLnByZXNlbnRhdGlvbi1kYXRlIHsKICAgICAgICAgICAgLS1oZWlnaHQ6IDQzNHB4OwogICAgICAgIH0KICAgICAgICAucHJlc2VudGF0aW9uLWRhdGUtdGltZSwgLnByZXNlbnRhdGlvbi10aW1lLWRhdGUgewogICAgICAgICAgICAtLWhlaWdodDogNDY1cHg7CiAgICAgICAgfQogICAgICAgIC5wcmVzZW50YXRpb24tbW9udGgsIC5wcmVzZW50YXRpb24tbW9udGgteWVhciwgLnByZXNlbnRhdGlvbi10aW1lLCAucHJlc2VudGF0aW9uLXllYXIgewogICAgICAgICAgICAtLWhlaWdodDogMjcwcHg7CiAgICAgICAgfQogICAg!./src/app/scripts/apperyio/declarables/apperyio_datetime_component.ts ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n        :host {\n            margin-top: var(--margin-top, 10px);\n            margin-bottom: var(--margin-bottom, 9px);\n            margin-left: var(--margin-start, 0px);\n            margin-right: var(--margin-end, 0px);\n        }\n        \n        :host ion-text {\n            color: var(--placeholder-color);\n        }\n        :host ion-text.placeholder{\n            opacity: var(--placeholder-opacity, 0.5);\n        }\n        \n        :host .disabled {\n            opacity: 0.3;\n        }\n        \n        :host .click-button {\n            left: 0px;\n            top: 0px;\n            margin: 0px;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            border: 0px;\n            background: transparent;\n            cursor: pointer;\n            appearance: none;\n            outline: none;\n            z-index: 1;\n        }\n            \n        .aio-datetime-modal {\n            --border-radius: 8px;\n            --width: 325px;\n            --height: 434px;\n        }\n        .presentation-date {\n            --height: 434px;\n        }\n        .presentation-date-time, .presentation-time-date {\n            --height: 465px;\n        }\n        .presentation-month, .presentation-month-year, .presentation-time, .presentation-year {\n            --height: 270px;\n        }\n    ", "",{"version":3,"sources":["webpack://./src/app/scripts/apperyio/declarables/apperyio_datetime_component.ts"],"names":[],"mappings":";QACQ;YACI,mCAAmC;YACnC,wCAAwC;YACxC,qCAAqC;YACrC,oCAAoC;QACxC;;QAEA;YACI,+BAA+B;QACnC;QACA;YACI,wCAAwC;QAC5C;;QAEA;YACI,YAAY;QAChB;;QAEA;YACI,SAAS;YACT,QAAQ;YACR,WAAW;YACX,kBAAkB;YAClB,WAAW;YACX,YAAY;YACZ,WAAW;YACX,uBAAuB;YACvB,eAAe;YACf,gBAAgB;YAChB,aAAa;YACb,UAAU;QACd;;QAEA;YACI,oBAAoB;YACpB,cAAc;YACd,eAAe;QACnB;QACA;YACI,eAAe;QACnB;QACA;YACI,eAAe;QACnB;QACA;YACI,eAAe;QACnB","sourcesContent":["\n        :host {\n            margin-top: var(--margin-top, 10px);\n            margin-bottom: var(--margin-bottom, 9px);\n            margin-left: var(--margin-start, 0px);\n            margin-right: var(--margin-end, 0px);\n        }\n        \n        :host ion-text {\n            color: var(--placeholder-color);\n        }\n        :host ion-text.placeholder{\n            opacity: var(--placeholder-opacity, 0.5);\n        }\n        \n        :host .disabled {\n            opacity: 0.3;\n        }\n        \n        :host .click-button {\n            left: 0px;\n            top: 0px;\n            margin: 0px;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            border: 0px;\n            background: transparent;\n            cursor: pointer;\n            appearance: none;\n            outline: none;\n            z-index: 1;\n        }\n            \n        .aio-datetime-modal {\n            --border-radius: 8px;\n            --width: 325px;\n            --height: 434px;\n        }\n        .presentation-date {\n            --height: 434px;\n        }\n        .presentation-date-time, .presentation-time-date {\n            --height: 465px;\n        }\n        .presentation-month, .presentation-month-year, .presentation-time, .presentation-year {\n            --height: 270px;\n        }\n    "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1886:
/*!************************************!*\
  !*** ./src/app/app.css?ngResource ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/* Styles properties */", "",{"version":3,"sources":["webpack://./src/app/app.css"],"names":[],"mappings":";AACA,sBAAsB","sourcesContent":["\n/* Styles properties */"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 59235:
/*!***************************************************************!*\
  !*** ./src/app/custom_component/Rating/Rating.css?ngResource ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/* Styles properties */", "",{"version":3,"sources":["webpack://./src/app/custom_component/Rating/Rating.css"],"names":[],"mappings":";AACA,sBAAsB","sourcesContent":["\n/* Styles properties */"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 98647:
/*!*************************************!*\
  !*** ./src/app/app.scss?ngResource ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Custom SCSS */\nion-app.mobile .aio-mobile-hide,\nion-app.web-browser .aio-web-browser-hide,\n.aioHidden {\n  display: none !important;\n}\n\n.aio-disabled {\n  filter: grayscale(100%);\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.aio-validation-error {\n  color: var(--ion-color-danger);\n  --padding-top: 5px;\n  --padding-bottom: 5px;\n  padding: var(--padding-top, 5px) var(--padding-end, 15px) var(--padding-bottom, 5px) var(--padding-start, 15px);\n  text-align: start;\n}\n\nion-content.aio-vertical-align-center::part(scroll),\nion-content.aio-vertical-align-bottom::part(scroll) {\n  display: flex;\n  padding-top: 0px;\n}\n\nion-content.aio-vertical-align-center::part(scroll) {\n  align-items: center;\n  padding-bottom: 10px;\n}\n\nion-content.aio-vertical-align-bottom::part(scroll) {\n  align-items: flex-end;\n  padding-bottom: 0px;\n}\n\n.aio-vertical-align-wrapper {\n  flex: auto;\n}\n\nion-item.item-label-stacked.item-input > ion-icon[slot=start],\nion-item.item-label-stacked.item-input > ion-icon[slot=end],\nion-item.item-label-floating.item-input > ion-icon[slot=start],\nion-item.item-label-floating.item-input > ion-icon[slot=end],\nion-item.item-label-floating::part(detail-icon),\nion-item.item-label-stacked::part(detail-icon) {\n  margin-top: auto;\n}\n\nion-item.item-label-stacked.item-textarea > ion-icon[slot=start],\nion-item.item-label-stacked.item-textarea > ion-icon[slot=end],\nion-item.item-label-floating.item-textarea > ion-icon[slot=start],\nion-item.item-label-floating.item-textarea > ion-icon[slot=end] {\n  margin-top: 10px;\n}\n\nion-item.item-label-floating::part(detail-icon),\nion-item.item-label-stacked::part(detail-icon) {\n  margin-bottom: 10px;\n}\n\n/* Fix Ionic 5 issues */\nion-item ion-reorder:not([slot]) {\n  z-index: 100;\n}\n\n/** ngx-datatable fix pagination **/\n@media only screen and (max-width: 500px) {\n  .ngx-datatable.material .datatable-footer .page-count {\n    white-space: nowrap;\n  }\n  .ngx-datatable.material .datatable-footer .pager {\n    white-space: nowrap;\n  }\n}\nion-menu::part(container) {\n  box-sizing: border-box;\n}\n\n/*\n* Appery.io component.\n*/\n.img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n.img-circle {\n  border-radius: 50%;\n}\n\n.img-rounded {\n  border-radius: 6px;\n}\n\nion-img::part(image) {\n  box-sizing: border-box;\n}\n\nion-toolbar {\n  width: auto;\n}\n\nion-toolbar.ios ion-title.title-large {\n  text-align: center;\n}\n\n@media (min-width: 768px) {\n  ion-modal {\n    --border-radius: 8px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/app/app.scss","webpack://./src/scss/__aio_components.scss"],"names":[],"mappings":"AAIA,gBAAA;ACHA;;;EAGC,wBAAA;ADCD;;ACCA;EACC,uBAAA;EACA,YAAA;EACA,oBAAA;ADED;;ACAA;EACC,8BAAA;EACA,kBAAA;EACA,qBAAA;EACA,+GAAA;EACA,iBAAA;ADGD;;ACDA;;EAEC,aAAA;EACA,gBAAA;ADID;;ACFA;EACC,mBAAA;EACA,oBAAA;ADKD;;ACHA;EACC,qBAAA;EACA,mBAAA;ADMD;;ACJA;EACC,UAAA;ADOD;;ACLA;;;;;;EAMC,gBAAA;ADQD;;ACNA;;;;EAIC,gBAAA;ADSD;;ACPA;;EAEC,mBAAA;ADUD;;ACRA,uBAAA;AACA;EACC,YAAA;ADWD;;ACTA,mCAAA;AACA;EAEE;IACC,mBAAA;EDWD;ECTA;IACC,mBAAA;EDWD;AACF;ACNA;EACC,sBAAA;ADQD;;ACNA;;CAAA;AAGA;EACC,cAAA;EACA,eAAA;EACA,YAAA;ADSD;;ACPA;EACC,kBAAA;ADUD;;ACRA;EACC,kBAAA;ADWD;;ACTA;EACC,sBAAA;ADYD;;ACVA;EACC,WAAA;ADaD;;ACXA;EACC,kBAAA;ADcD;;ACZA;EACC;IACC,oBAAA;EDeA;AACF","sourcesContent":["/* Custom SCSS */\nion-app.mobile .aio-mobile-hide,\nion-app.web-browser .aio-web-browser-hide,\n.aioHidden {\n  display: none !important;\n}\n\n.aio-disabled {\n  filter: grayscale(100%);\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.aio-validation-error {\n  color: var(--ion-color-danger);\n  --padding-top: 5px;\n  --padding-bottom: 5px;\n  padding: var(--padding-top, 5px) var(--padding-end, 15px) var(--padding-bottom, 5px) var(--padding-start, 15px);\n  text-align: start;\n}\n\nion-content.aio-vertical-align-center::part(scroll),\nion-content.aio-vertical-align-bottom::part(scroll) {\n  display: flex;\n  padding-top: 0px;\n}\n\nion-content.aio-vertical-align-center::part(scroll) {\n  align-items: center;\n  padding-bottom: 10px;\n}\n\nion-content.aio-vertical-align-bottom::part(scroll) {\n  align-items: flex-end;\n  padding-bottom: 0px;\n}\n\n.aio-vertical-align-wrapper {\n  flex: auto;\n}\n\nion-item.item-label-stacked.item-input > ion-icon[slot=start],\nion-item.item-label-stacked.item-input > ion-icon[slot=end],\nion-item.item-label-floating.item-input > ion-icon[slot=start],\nion-item.item-label-floating.item-input > ion-icon[slot=end],\nion-item.item-label-floating::part(detail-icon),\nion-item.item-label-stacked::part(detail-icon) {\n  margin-top: auto;\n}\n\nion-item.item-label-stacked.item-textarea > ion-icon[slot=start],\nion-item.item-label-stacked.item-textarea > ion-icon[slot=end],\nion-item.item-label-floating.item-textarea > ion-icon[slot=start],\nion-item.item-label-floating.item-textarea > ion-icon[slot=end] {\n  margin-top: 10px;\n}\n\nion-item.item-label-floating::part(detail-icon),\nion-item.item-label-stacked::part(detail-icon) {\n  margin-bottom: 10px;\n}\n\n/* Fix Ionic 5 issues */\nion-item ion-reorder:not([slot]) {\n  z-index: 100;\n}\n\n/** ngx-datatable fix pagination **/\n@media only screen and (max-width: 500px) {\n  .ngx-datatable.material .datatable-footer .page-count {\n    white-space: nowrap;\n  }\n  .ngx-datatable.material .datatable-footer .pager {\n    white-space: nowrap;\n  }\n}\nion-menu::part(container) {\n  box-sizing: border-box;\n}\n\n/*\n* Appery.io component.\n*/\n.img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n.img-circle {\n  border-radius: 50%;\n}\n\n.img-rounded {\n  border-radius: 6px;\n}\n\nion-img::part(image) {\n  box-sizing: border-box;\n}\n\nion-toolbar {\n  width: auto;\n}\n\nion-toolbar.ios ion-title.title-large {\n  text-align: center;\n}\n\n@media (min-width: 768px) {\n  ion-modal {\n    --border-radius: 8px;\n  }\n}",null],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 499:
/*!****************************************************************!*\
  !*** ./src/app/custom_component/Rating/Rating.scss?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Custom SCSS */", "",{"version":3,"sources":["webpack://./src/app/custom_component/Rating/Rating.scss"],"names":[],"mappings":"AAIA,gBAAA","sourcesContent":["/* Custom SCSS */"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 10860,
	"./en-ca.js": 10860,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 33627,
	"./ru.js": 33627,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 42500,
	"./tg.js": 42500,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 50962:
/*!*************************************!*\
  !*** ./src/app/app.html?ngResource ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app class=\"{{deviceType}}\">\n    <ion-router-outlet id=\"main-content\">\n    </ion-router-outlet>\n</ion-app>";

/***/ }),

/***/ 65594:
/*!****************************************************************!*\
  !*** ./src/app/custom_component/Rating/Rating.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-rating-bar _aio-DE8B096B #j_54 (valueChange)=\"setValue($event)\" [ratingCount]=\"ratingCount || 5\"\n[styles]=\"{    fontSize: this.starsSize || '28px',    backgroundColor: '',    margin: '5px'}\"\n[disabled]=\"disabled\" [(value)]=\"rating\">\n</ng-rating-bar>";

/***/ }),

/***/ 42480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map