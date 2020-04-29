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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_questionary_questionary__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_answer_answer__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(35);
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
    function ThankyouPage(menuCtrl, navCtrl, navParams, answerProvider, loadingCtrl, alertCtrl, storage) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.answerProvider = answerProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.useGame = false;
        this.questionary = new __WEBPACK_IMPORTED_MODULE_0__providers_questionary_questionary__["c" /* Questionary */]();
        this.storage.get('useGame').then(function (data) {
            _this.useGame = data;
            if (_this.useGame) {
                _this.form_url = "https://bit.ly/avaliacao-usabilidade-game";
            }
            else {
                _this.form_url = "https://bit.ly/avaliacao-usabilidade";
            }
            _this.storage.get('showForm').then(function (data) {
                if (!data) {
                    var showFormCont = 1;
                    _this.storage.set('showForm', showFormCont);
                    _this.showForm();
                }
                else if (data < 3) {
                    data++;
                    _this.storage.set('showForm', data);
                    _this.showForm();
                }
            });
        });
        this.getUserType();
        this.points = navParams.get('points');
        this.answers = navParams.get('answers');
        this.answersNeighborhoods = navParams.get('answersNeighborhoods');
        this.prioritizations = navParams.get('prioritizations');
        this.progress = 100;
        var questions = navParams.get('questions');
        this.totalQuestions = questions.length;
        this.questionary = navParams.get('questionary');
        this.verifyLevel();
    }
    ThankyouPage.prototype.verifyLevel = function () {
        if (this.points > 0 && this.points <= 12) {
            this.level = "Bronze";
        }
        if (this.points > 12 && this.points <= 21) {
            this.level = "Prata";
        }
        if (this.points > 21) {
            this.level = "Ouro";
        }
    };
    ThankyouPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    ThankyouPage.prototype.help = function () {
        var alert = this.alertCtrl.create({
            title: '<div text-center>Sua participação não acaba aqui!</div>',
            message: 
            //----------------------MENSAGEM------------------
            '<div class="alert-align-center"><img class="img-alert" src="assets/imgs/person3a.png"/></div>'
                + '<div class="dialogue-box"><div class="tdialogue-box-text">'
                + '<div text-center><strong>Ainda não acabou!</strong></div>'
                // + '<div text-center>Você pode responder outros <strong>questionários</strong> e continuar contribuindo!</div>'
                + '<div text-center>Por favor, nos ajude a avaliar a <strong>usabilidade do aplicativo</strong> respondendo o <strong>formulário: <a style="font-size:1.5rem" href="' + this.form_url + '"><strong>Avaliação da usabilidade</strong></a></div>'
                + '<div text-center>Você pode responder outros <strong>questionários</strong> e continuar contribuindo com a <strong>autoavaliação</strong>!</div>'
                + '</div></div>',
            //----------------------MENSAGEM------------------
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
                var userType = new __WEBPACK_IMPORTED_MODULE_4__home_home__["b" /* UserType */]();
                userType.id = null;
                userType.name = null;
                _this.userType = userType;
            }
        })
            .catch(function () {
            var userType = new __WEBPACK_IMPORTED_MODULE_4__home_home__["b" /* UserType */]();
            userType.id = null;
            userType.name = null;
            _this.userType = userType;
        });
    };
    ThankyouPage.prototype.finishQuestionary = function () {
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        // this.answerProvider.insertAnswersData(this.answers, this.answersNeighborhoods, this.prioritizations, this.userType, this.useGame, this.points)
        //   .then((data: boolean) => {
        //     if (data != null) {
        this.storage.set('points', this.points);
        this.navCtrl.setRoot('QuestionariesListPage', {}).then(this.loader.dismiss());
        //   } else {
        //     let alert = this.alertCtrl.create({
        //       title: 'Oops!',
        //       message: 'Não foi possível enviar os dados para o servidor. Por favor, tente novamente.',
        //       buttons: [{
        //         text: "Tentar novamente",
        //         handler: () => {
        //           this.finishQuestionary();
        //         }
        //       }]
        //     });
        //     alert.present();
        //     this.loader.dismiss();
        //   }
        // })
        // .catch(() => {
        //   let alert = this.alertCtrl.create({
        //     title: 'Oops!',
        //     message: 'Não foi possível enviar os dados para o servidor. Por favor, tente novamente.',
        //     buttons: [{
        //       text: "Tentar novamente",
        //       handler: () => {
        //         this.finishQuestionary();
        //       }
        //     }]
        //   });
        //   alert.present();
        //   this.loader.dismiss();
        // });
    };
    //Mensagem motivadora da narrativa
    ThankyouPage.prototype.showForm = function () {
        var alert = this.alertCtrl.create({
            title: '<div text-center>Nos ajude a avaliar a usabilidade do Aplicativo!</div>',
            message: 
            //----------------------MENSAGEM------------------
            '<div class="alert-align-center"><img class="img-alert" src="assets/imgs/person3a.png"/></div>'
                + '<div class="dialogue-box"><div class="tdialogue-box-text">'
                // + '<div><strong>Você utilizou a versão gamificada do aplicativo</strong></div>'
                // + '<div text-center>Por favor, nos ajude a avaliar a gamificação respondendo o <strong>formulário: </strong><a style="font-size:1.5rem" href="https://forms.gle/Z8RVkQvHitHyjrwGA"><strong>Avaliação da gamificação</strong></a></div>'
                + '<div text-center>Por favor, nos ajude a avaliar a <strong>usabilidade do aplicativo</strong> respondendo o <strong>formulário: <a style="font-size:1.5rem" href="' + this.form_url + '"><strong>Avaliação da usabilidade</strong></a></div>'
                + '<div text-center></div>'
                + '</div></div>',
            //----------------------MENSAGEM------------------
            buttons: [{
                    text: "Ok!",
                    handler: function () { }
                }]
        });
        alert.present();
    };
    ThankyouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-thankyou',template:/*ion-inline-start:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\thankyou\thankyou.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="menu-icon-col" *ngIf="useGame">\n        <button ion-button clear (click)="openMenu()">\n          <ion-icon name="md-menu" class="menu-icon"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-2 class="menu-icon-col-not-game" *ngIf="!useGame">\n        <button ion-button clear (click)="openMenu()">\n          <ion-icon name="md-menu" class="menu-icon"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-6 *ngIf="useGame">\n        <img class="img-responsive img-header" src="assets/imgs/header-logo.png" />\n      </ion-col>\n      <ion-col col-6 *ngIf="!useGame">\n        <img class="img-responsive img-not-game" src="assets/imgs/header-logo.png" />\n      </ion-col>\n      <ion-col offset-1 col-2 class="col-button-help">\n        <button class="button-help-thankyou" *ngIf="useGame" ion-button clear (click)="help()">\n          <ion-icon class="icon-help button-help-thankyou" name="alert"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngIf="!useGame" col-6 offset-3 text-center class="img-thank-you-no-game">\n        <img src="assets/imgs/thank-you.png" class="img-responsive-no-game">\n      </ion-col>\n      <ion-col *ngIf="useGame" col-6 offset-3 text-center class="img-thank-you-game">\n        <img src="assets/imgs/thank-you.png" class="img-responsive-game">\n      </ion-col>\n      <ion-col *ngIf="useGame" col-12 text-center class="level">\n        <!-- Pontuação -->\n        <ion-item *ngIf="points > 0" text-wrap>\n          <ion-thumbnail item-start>\n            <img *ngIf="level == \'Ouro\'" class="img-responsive" src="assets/imgs/level3.png" />\n            <img *ngIf="level == \'Prata\'" class="img-responsive" src="assets/imgs/level2.png" />\n            <img *ngIf="level == \'Bronze\'" class="img-responsive" src="assets/imgs/level1.png" />\n          </ion-thumbnail>\n          <ion-label>\n            <h2>Você está no nível <strong>{{level}}</strong> de Participação!</h2>\n            <p><b>Sua pontuação</b></p>\n            <ion-badge>{{points}} pontos</ion-badge>\n          </ion-label>\n        </ion-item>\n        <!-- Pontuação -->\n        <!-- Pontuação -->\n        <ion-item *ngIf="points == 0" text-wrap>\n          <ion-thumbnail item-start>\n            <img class="img-responsive" src="assets/imgs/level0.png" />\n          </ion-thumbnail>\n          <ion-label>\n            <h2>Responda os questionários para aumentar o <b>nível</b> de <b>Participação</b>!</h2>\n            <p><b>Sua pontuação</b></p>\n            <ion-badge>{{points}} pontos</ion-badge>\n          </ion-label>\n        </ion-item>\n        <!-- Pontuação -->\n      </ion-col>\n      <ion-col col-12 text-center class="text-form-game">\n        <!-- <p>\n          Você utilizou a versão <strong>gamificada</strong> do aplicativo!\n        </p>\n        <p>\n          Por favor, nos ajude a avaliar essa versão respondendo o <strong>formulário</strong>:\n        </p> -->\n        <p>\n          Por favor, nos ajude a avaliar a <strong>usabilidade do aplicativo</strong> respondendo o <strong>formulário</strong>:\n        </p>\n        <!-- <p>\n          <a href="https://forms.gle/Z8RVkQvHitHyjrwGA">Avaliação da gamificação</a>\n        </p> -->\n        <p  *ngIf="useGame">\n          <a href="https://bit.ly/avaliacao-usabilidade-game">Avaliação da usabilidade</a>\n        </p>\n        <p  *ngIf="!useGame">\n          <a href="https://bit.ly/avaliacao-usabilidade">Avaliação da usabilidade</a>\n        </p>\n      </ion-col>\n      <ion-col col-12 text-center class="text-bottom-game">\n        <img class="img-responsive img-center" src="assets/imgs/intro4.jpg" />\n        <h2>Continue participando!</h2>\n        <p>\n          Você pode continuar participando respondendo outros <strong>questionários</strong>!\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<!-------------------------- NO GAME -------------------------->\n<ion-footer *ngIf="!useGame" class="footer-not-game">\n  <ion-grid class="button-finish-grid">\n    <ion-row>\n      <ion-col col-12 text-center class="margin-top-10">\n        <button ion-button full class="button-background" (click)="finishQuestionary()">\n          <ion-icon id="button-thank-you-{{questionary.id}}" class="text-button">\n            Vamos lá!\n          </ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-navbar class="toolbar-progress">\n  </ion-navbar>\n</ion-footer>\n<!-------------------------- NO GAME -------------------------->\n<!-------------------------- USE GAME -------------------------->\n<ion-footer *ngIf="useGame">\n  <ion-grid class="button-finish-grid">\n    <ion-row>\n      <ion-col col-12 text-center class="margin-top-10">\n        <button ion-button full class="button-background" (click)="finishQuestionary()">\n          <ion-icon id="button-thank-you-game-{{questionary.id}}" class="text-button">\n            Vamos lá!\n          </ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-navbar class="toolbar-progress">\n    <ion-title text-center>\n      <ion-icon range-right name="md-ribbon"></ion-icon>\n      {{points}} pontos\n    </ion-title>\n    <ion-range class="progress-bar" [min]="0" [max]="100" [step]="1" [(ngModel)]="progress" disabled>\n      <ion-icon range-left name="md-clipboard"></ion-icon>\n      <ion-icon range-right></ion-icon>\n    </ion-range>\n    <div text-center class="progres-text-uper">{{totalQuestions}} de {{totalQuestions}} questões</div>\n  </ion-navbar>\n</ion-footer>\n<!-------------------------- USE GAME -------------------------->'/*ion-inline-end:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\thankyou\thankyou.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_answer_answer__["a" /* AnswerProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], ThankyouPage);
    return ThankyouPage;
}());

//# sourceMappingURL=thankyou.js.map

/***/ })

});
//# sourceMappingURL=1.js.map