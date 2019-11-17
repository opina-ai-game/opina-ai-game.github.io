webpackJsonp([1],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouPageModule", function() { return ThankyouPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thankyou__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ThankyouPageModule = /** @class */ (function () {
    function ThankyouPageModule() {
    }
    ThankyouPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__thankyou__["a" /* ThankyouPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__thankyou__["a" /* ThankyouPage */]),
            ],
        })
    ], ThankyouPageModule);
    return ThankyouPageModule;
}());

//# sourceMappingURL=thankyou.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankyouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_answer_answer__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ThankyouPage = /** @class */ (function () {
    function ThankyouPage(navCtrl, navParams, answerProvider, loadingCtrl, alertCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.answerProvider = answerProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.useGame = false;
        this.storage.get('useGame').then(function (data) { return _this.useGame = data; });
        this.getUserType();
        this.points = navParams.get('points');
        this.answers = navParams.get('answers');
        this.answersNeighborhoods = navParams.get('answersNeighborhoods');
        this.prioritizations = navParams.get('prioritizations');
        this.progress = 100;
        var questions = navParams.get('questions');
        this.totalQuestions = questions.length;
        this.verifyLevel();
    }
    ThankyouPage.prototype.verifyLevel = function () {
        if (this.points > 0 && this.points <= 7) {
            this.level = "Bronze";
        }
        if (this.points > 7 && this.points <= 13) {
            this.level = "Prata";
        }
        if (this.points > 13) {
            this.level = "Ouro";
        }
    };
    ThankyouPage.prototype.help = function () {
        var alert = this.alertCtrl.create({
            title: '<div text-center>Sua participação não acaba aqui!</div>',
            message: '<div class="alert-align-center"><img class="img-alert" src="assets/imgs/publicdomainq-presenter.png"/></div>'
                + '<div text-center>Ainda não acabou!</div>'
                + '<div text-center>Você pode responder outros questionários e continuar contribuindo!</div>',
            buttons: [{
                    text: "Ok!",
                    handler: function () {
                    }
                }]
        });
        alert.present();
    };
    ThankyouPage.prototype.getUserType = function () {
        var _this = this;
        this.storage.get('userType')
            .then(function (data) {
            if (data != null) {
                _this.userType = data;
            }
            else {
                var userType = new __WEBPACK_IMPORTED_MODULE_3__home_home__["b" /* UserType */]();
                userType.id = null;
                userType.name = null;
                _this.userType = userType;
            }
        })
            .catch(function () {
            var userType = new __WEBPACK_IMPORTED_MODULE_3__home_home__["b" /* UserType */]();
            userType.id = null;
            userType.name = null;
            _this.userType = userType;
        });
    };
    ThankyouPage.prototype.finishQuestionary = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        this.answerProvider.insertAnswersData(this.answers, this.answersNeighborhoods, this.prioritizations, this.userType)
            .then(function (data) {
            if (data != null) {
                _this.storage.set('points', _this.points);
                _this.navCtrl.setRoot('QuestionariesListPage', {}).then(_this.loader.dismiss());
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Oops!',
                    message: 'Não foi possível enviar os dados para o servidor. Por favor, tente novamente.',
                    buttons: [{
                            text: "Tentar novamente",
                            handler: function () {
                                _this.finishQuestionary();
                            }
                        }]
                });
                alert_1.present();
                _this.loader.dismiss();
            }
        })
            .catch(function () {
            var alert = _this.alertCtrl.create({
                title: 'Oops!',
                message: 'Não foi possível enviar os dados para o servidor. Por favor, tente novamente.',
                buttons: [{
                        text: "Tentar novamente",
                        handler: function () {
                            _this.finishQuestionary();
                        }
                    }]
            });
            alert.present();
            _this.loader.dismiss();
        });
    };
    ThankyouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-thankyou',template:/*ion-inline-start:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\thankyou\thankyou.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col offset-2 col-6>\n        <img class="img-responsive" src="assets/imgs/header-logo.png" />\n      </ion-col>\n      <ion-col offset-1 col-2>\n        <button *ngIf="useGame" ion-button clear (click)="help()">\n          <ion-icon class="icon-help" name="alert"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 offset-3>\n        <img src="assets/imgs/thank-you.png" class="img-responsive">\n      </ion-col>\n      <ion-col *ngIf="useGame" col-12>\n        <!-- Pontuação -->\n        <ion-item *ngIf="points > 0">\n          <ion-thumbnail item-start>\n            <img *ngIf="level == \'Ouro\'" class="img-responsive" src="assets/imgs/level3.png" />\n            <img *ngIf="level == \'Prata\'" class="img-responsive" src="assets/imgs/level2.png" />\n            <img *ngIf="level == \'Bronze\'" class="img-responsive" src="assets/imgs/level1.png" />\n          </ion-thumbnail>\n          <h2>Você esta no nível {{level}}</h2>\n          <h2>de participação!</h2>\n          <p>Sua pontuação</p>\n          <ion-badge>{{points}} pontos</ion-badge>\n        </ion-item>\n        <!-- Pontuação -->\n        <!-- Pontuação -->\n        <ion-item *ngIf="points == 0">\n          <ion-thumbnail item-start>\n            <img class="img-responsive" src="assets/imgs/level0.png" />\n          </ion-thumbnail>\n          <h2>Responda os questionários</h2>\n          <h2>para aumentar seu nível</h2>\n          <h2>de participação!</h2>\n          <p>Sua pontuação</p>\n          <ion-badge>{{points}} pontos</ion-badge>\n        </ion-item>\n        <!-- Pontuação -->\n      </ion-col>\n      <ion-col col-12 text-center>\n        <img src="assets/imgs/intro4.jpg" />\n        <h2 >Continue participando!</h2>\n        <p style="font-size: 15px">\n          Você pode continuar participando respondendo outros <strong>questionários</strong>!\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 text-center class="margin-top-10">\n        <button ion-button full class="button-background" (click)="finishQuestionary()">Vamos lá!</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-navbar class="toolbar-progress">\n    <ion-title *ngIf="useGame" text-center>\n      <ion-icon range-right name="md-ribbon"></ion-icon>\n      {{points}} pontos\n    </ion-title>\n    <ion-range *ngIf="useGame" class="progress-bar" [min]="0" [max]="100" [step]="1" [(ngModel)]="progress" disabled>\n      <ion-icon range-left name="md-clipboard"></ion-icon>\n      <ion-icon range-right></ion-icon>\n    </ion-range>\n    <div *ngIf="useGame" text-center class="progres-text-uper">{{totalQuestions}} de {{totalQuestions}} questões</div>\n  </ion-navbar>\n</ion-footer>'/*ion-inline-end:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\thankyou\thankyou.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_answer_answer__["a" /* AnswerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ThankyouPage);
    return ThankyouPage;
}());

//# sourceMappingURL=thankyou.js.map

/***/ })

});
//# sourceMappingURL=1.js.map