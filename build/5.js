webpackJsonp([5],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
            ],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(menuCtrl, navCtrl, navParams, storage) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.useGame = false;
        this.storage.get('useGame').then(function (data) { return _this.useGame = data; });
    }
    AboutPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col offset-1 col-2 class="menu-icon-col-not-game" *ngIf="!useGame">\n        <button ion-button clear (click)="openMenu()">\n          <ion-icon name="md-menu" class="menu-icon"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col offset-1 col-2 class="menu-icon-col" *ngIf="useGame">\n        <button ion-button clear (click)="openMenu()">\n          <ion-icon name="md-menu" class="menu-icon"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col offset-1 col-6 *ngIf="useGame">\n        <img class="img-responsive" src="assets/imgs/header-logo.png" />\n      </ion-col>\n      <ion-col offset-1 col-6 *ngIf="!useGame">\n        <img class="img-responsive img-not-game" src=" assets/imgs/header-logo.png" />\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col offset-3 col-6 text-center>\n        <!-- <img src="assets/imgs/neiru.png" class="img-responsive max-height-200" alt=""> -->\n        <img src="assets/imgs/logo-poscomp.jpg" class="img-responsive img-center" alt="">\n      </ion-col>\n    </ion-row>\n    <ion-row class="margin-top-30">\n      <ion-col col-12 text-justify>\n        <!-- <p class="font-size-p">\n          NEIRU – Núcleo Estratégico Interdisciplinar em Resiliência Urbana é um grupo de pesquisa e extensão vínculado\n          à Universidade Federal de Itajubá que tem como objetivo o fornecimento de assistência técnica para prefeituras\n          municipais na área de Planejamento e resiliência urbana, elaboração de Planos Diretores e Planos Setoriais e\n          projetos de infraestrutura com enfoque na adaptação dos municípios às mudanças climáticas.\n        </p> -->\n        <p class="font-size-p">\n          Este aplicativo faz parte de um estudo piloto com objetivo de avaliar a intervenção da gamificação em pesquisas de\n          opinião.\n          A gamificação é o uso de elementos e características de jogos em contextos que não são de jogos. O aplicativo\n          Opina Aí\n          foi desenvolvido para aplicação de questionários e coleta de informações em projetos de Planos Diretores\n          Municipais.\n          Neste estudo, o aplicativo esta sendo usado como ferramenta no contexto da autoavaliação do Programa de\n          Mestrado em\n          Ciência e Tecnologia da Computação da Universidade Federal de Itajubá. A autoavaliação tem como objetivo\n          acompanhar o desempenho\n          do programa de mestrado de acordo com critérios estabelecidos pela CAPES.\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 text-center>\n        <span>FIQUE POR DENTRO:</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-2 offset-4>\n        <a href="https://www.facebook.com/poscompunifei/"><img id="facebook-link" src="assets/imgs/facebook.png"\n            alt="" class="img-link"></a>\n      </ion-col>\n      <ion-col col-2>\n        <a href="https://unifei.edu.br/mestrado-ciencia-tecnologia-computacao/"><img id="linkedin-link"\n            src="assets/imgs/logo-unifei.png" alt="" class="img-link"></a>\n      </ion-col>\n      <!-- <ion-col col-2 offset-4>\n        <a  href="https://www.facebook.com/neiruunifei/"><img id="facebook-link" src="assets/imgs/facebook.png" alt=""></a>\n      </ion-col> -->\n      <!-- <ion-col col-2>\n        <a href="https://www.linkedin.com/company/neiru/"><img id="linkedin-link" src="assets/imgs/linkedin.png" alt=""></a>\n      </ion-col> -->\n    </ion-row>\n  </ion-grid>\n</ion-footer>'/*ion-inline-end:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=5.js.map