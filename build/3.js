webpackJsonp([3],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionariesListPageModule", function() { return QuestionariesListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionaries_list__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuestionariesListPageModule = /** @class */ (function () {
    function QuestionariesListPageModule() {
    }
    QuestionariesListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__questionaries_list__["a" /* QuestionariesListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__questionaries_list__["a" /* QuestionariesListPage */]),
            ],
        })
    ], QuestionariesListPageModule);
    return QuestionariesListPageModule;
}());

//# sourceMappingURL=questionaries-list.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionariesListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__intro_intro__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_questionary_questionary__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_questionary_questionary__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_plan_plan__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_question_question__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_prioritization_prioritization__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var QuestionariesListPage = /** @class */ (function () {
    function QuestionariesListPage(toastCtrl, menuCtrl, navCtrl, databaseProvider, questionProvider, storage, questionaryProvider, loadingCtrl, alertCtrl, priorizationProvider) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.databaseProvider = databaseProvider;
        this.questionProvider = questionProvider;
        this.storage = storage;
        this.questionaryProvider = questionaryProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.priorizationProvider = priorizationProvider;
        this.disciplineList = [];
        this.questionaries = [];
        this.questionary = new __WEBPACK_IMPORTED_MODULE_4__providers_questionary_questionary__["c" /* Questionary */]();
        this.btnContinueDisabled = true;
        this.answers = [];
        this.useGame = false;
        this.answeredQuestionaries = 0;
        this.totalQuestionaries = 0;
        this.progress = 0;
        this.plan = new __WEBPACK_IMPORTED_MODULE_7__providers_plan_plan__["a" /* Plan */]();
        var entities = ['plan', 'questionaries', 'respondent'];
        this.databaseProvider.verifyEntities(entities)
            .then(function (data) {
            if (data.length > 0 && data.filter(function (data) { return data == false; }).length == 0) {
                _this.setEntities();
            }
            else {
                _this.navigateBack();
            }
        })
            .catch(function () { return _this.navigateBack(); });
        this.storage.get('useGame').then(function (data) {
            _this.useGame = data;
            if (_this.useGame) {
                _this.storage.get('helpHome')
                    .then(function (data) {
                    if (data == null) {
                        _this.help();
                    }
                });
            }
        });
        this.storage.get('disciplineSelected').then(function (data) { return _this.disciplineList = data; });
    }
    QuestionariesListPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    QuestionariesListPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Clique no icone em caso de dúvidas!',
            duration: 4000,
            position: 'top'
        });
        toast.present();
    };
    //Verifica se as entidades estão armazenadas no IONIC Storage
    QuestionariesListPage.prototype.setEntities = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        this.storage.get('plan')
            .then(function (data) {
            _this.plan = data;
            _this.questionaryProvider.getAllQuestionariesByPlan(_this.plan)
                .then(function (data) {
                _this.storage.set('questionaries', data);
                _this.questionaries = data;
                _this.storage.get('respondent')
                    .then(function (data) {
                    _this.respondent = data;
                    _this.questionaryProvider.getAllPlanQuestionariesAnsweredByRespondent(_this.plan, _this.questionaries, _this.respondent)
                        .then(function (data) {
                        if (data != null) {
                            //--------------IMPORTANTE---------------
                            //-------SELEÇÃO DOS QUESTIONÁRIOS PELO TIPO DO RESPONDENTE-------
                            if (_this.respondent.type == "Discente evadido") {
                                data = data.filter(function (item) {
                                    return item.name === "POSCOMP - Evasão Discente";
                                });
                            }
                            else if (_this.respondent.type == "Discente formado") {
                                data = data.filter(function (item) {
                                    return item.name === "POSCOMP - Discente Egresso";
                                });
                            }
                            else if (_this.respondent.type == "Discente") {
                                var dataTemp_1 = [];
                                _this.disciplineList.forEach(function (discipline) {
                                    var questTemp = data.filter(function (quest) {
                                        return quest.name.endsWith(discipline.name);
                                    });
                                    questTemp.forEach(function (q) {
                                        dataTemp_1.push(q);
                                    });
                                });
                                data = data.filter(function (item) { return (item.name === "POSCOMP - Avaliação da Secretaria" ||
                                    item.name === "POSCOMP - Avaliação da Coordenação"); });
                                dataTemp_1.forEach(function (dat) {
                                    return data.push(dat);
                                });
                            }
                            else if (_this.respondent.type == "Docente") {
                                data = data.filter(function (item) { return (item.name === "POSCOMP - Avaliação da Secretaria" ||
                                    item.name === "POSCOMP - Avaliação da Coordenação"); });
                            }
                            //-------SELEÇÃO DOS QUESTIONÁRIOS PELO TIPO DO RESPONDENTE-------
                            //--------------IMPORTANTE---------------
                            for (var i = 0; i < data.length; i++) {
                                if (data[i].answered)
                                    _this.progress = _this.progress + 1;
                            }
                            _this.totalQuestionaries = data.length;
                            _this.answeredQuestionaries = _this.progress;
                            _this.progress = _this.progress / data.length;
                            _this.progress = _this.progress * 100;
                            _this.questionaries = data;
                            _this.loader.dismiss();
                        }
                        else {
                            _this.questionaries = [];
                            var alert_1 = _this.alertCtrl.create({
                                title: 'Oops!',
                                message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
                                buttons: [{
                                        text: "Tentar novamente",
                                        handler: function () {
                                            _this.setEntities();
                                        }
                                    }]
                            });
                            alert_1.present();
                        }
                    })
                        .catch(function () {
                        var alert = _this.alertCtrl.create({
                            title: 'Oops!',
                            message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
                            buttons: [{
                                    text: "Tentar novamente",
                                    handler: function () {
                                        _this.setEntities();
                                    }
                                }]
                        });
                        alert.present();
                    });
                })
                    .catch(function () {
                    var alert = _this.alertCtrl.create({
                        title: 'Oops!',
                        message: 'Erro ao acessar os dados do respondente. Por favor, preencha novamente.',
                        buttons: [{
                                text: "Ok",
                                handler: function () {
                                    _this.navigateBack();
                                }
                            }]
                    });
                    alert.present();
                });
            })
                .catch(function () {
                var alert = _this.alertCtrl.create({
                    title: 'Oops!',
                    message: 'Erro ao acessar os dados de questionários. Por favor, tente novamente.',
                    buttons: [{
                            text: "Ok",
                            handler: function () {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__intro_intro__["a" /* IntroPage */], {});
                            }
                        }]
                });
                alert.present();
            });
        })
            .catch(function () {
            var alert = _this.alertCtrl.create({
                title: 'Oops!',
                message: 'Erro ao acessar os dados do plano. Por favor, tente novamente.',
                buttons: [{
                        text: "Ok",
                        handler: function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__intro_intro__["a" /* IntroPage */], {});
                        }
                    }]
            });
            alert.present();
        });
        this.storage.get('points').then(function (data) { return _this.points = data; })
            .catch(function () { return console.log('error setting points'); });
    };
    //Seleciona o questionário
    QuestionariesListPage.prototype.setQuestionary = function (questionary) {
        this.questionary = questionary;
        this.btnContinueDisabled = false;
    };
    //Retorna para a página de perfil
    QuestionariesListPage.prototype.navigateBack = function () {
        this.navCtrl.setRoot('RespondentProfilePage', {});
    };
    //Navegação para as perguntas
    QuestionariesListPage.prototype.navigate = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        this.storage.set('plan', this.plan).then(function () {
            //Consulta as questões do questionário
            _this.questionProvider.getAllQuestionsByQuestionary(_this.questionary, 0)
                .then(function (result) {
                if (result != null) {
                    _this.questions = result;
                    //se metric_id for nulo, navega para página de questionário
                    if (_this.questions[0].metricId == null) {
                        _this.navigateQuestionaryPage();
                        //Se houver metric_id, carrega as métricas específicas  e navega para página de priorization
                    }
                    else {
                        _this.loadMetrics(_this.questions[0].metricId);
                    }
                }
                else {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Oops!',
                        message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
                        buttons: [{
                                text: "Tentar novamente",
                                handler: function () {
                                    _this.navigate();
                                }
                            }]
                    });
                    alert_2.present();
                }
            })
                .catch(function () {
                var alert = _this.alertCtrl.create({
                    title: 'Oops!',
                    message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
                    buttons: [{
                            text: "Tentar novamente",
                            handler: function () {
                                _this.navigate();
                            }
                        }]
                });
                alert.present();
            });
        })
            .catch(function () {
            var alert = _this.alertCtrl.create({
                title: 'Oops!',
                message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
                buttons: [{
                        text: "Tentar novamente",
                        handler: function () {
                            _this.navigate();
                        }
                    }]
            });
            alert.present();
        });
    };
    //Navegação para página do questionário
    QuestionariesListPage.prototype.navigateQuestionaryPage = function () {
        this.navCtrl.push('QuestionaryPage', {
            points: this.points,
            questionary: this.questionary,
            currentQuestionIndex: 0,
            currentQuestion: new __WEBPACK_IMPORTED_MODULE_8__providers_question_question__["a" /* Question */](),
            answers: [],
            answersNeighborhoods: [],
            prioritizations: []
        }).then(this.loader.dismiss());
    };
    // Navegação para página de priorização
    QuestionariesListPage.prototype.navigatePrioritizationPage = function () {
        this.navCtrl.push('PrioritizationPage', {
            points: this.points,
            plan: this.plan,
            respondent: this.respondent,
            questionary: this.questionary,
            questions: this.questions,
            metricItems: this.metricItems,
            currentMetricItem: this.metricItems[0],
            currentMetricItemIndex: 0,
            currentQuestionIndex: 0,
            currentQuestion: this.questions[0],
            answers: this.answers,
            answersNeighborhoods: [],
            prioritizations: []
        }).then(this.loader.dismiss());
    };
    //Carrega as métricas e vai para a página de priorização
    QuestionariesListPage.prototype.loadMetrics = function (metricId) {
        var _this = this;
        //------------------------CARREGA OS ITENS DE MÉTRICAS-----------------------------
        //1 - GUT, 2 - ESCALA QUALITATIVA, (3-17) - Métricas do questionário de teste
        this.priorizationProvider.getMetricItems(metricId)
            .then(function (metricItems) {
            if (metricItems != null) {
                _this.metricItems = metricItems;
                //------------------------CARREGA OS VALORES DE MÉTRICA-----------------------------
                _this.priorizationProvider.getMetricValues()
                    .then(function (result) {
                    if (result != null) {
                        //------------------------ASSOCIA OS VALORES AOS ITENS-----------------------------
                        for (var i = 0; i < _this.metricItems.length; i++) {
                            var metricItem = _this.metricItems[i];
                            for (var j = 0; j < result.length; j++) {
                                var metricValue = result[j];
                                if (metricItem.id == metricValue.metricItemId) {
                                    _this.metricItems[i].metricValues.push(metricValue);
                                }
                            }
                        }
                        //------------------------SALVA OS ITENS DE MÉTRICA-----------------------------
                        _this.storage.set('metricItems', _this.metricItems);
                        _this.insertAnswerAndNavigateToPrioritization();
                    }
                    else {
                        _this.showAlertLoadMetrics(metricId);
                    }
                })
                    .catch(function () {
                    _this.showAlertLoadMetrics(metricId);
                });
            }
            else {
                _this.showAlertLoadMetrics(metricId);
            }
        })
            .catch(function () {
            _this.showAlertLoadMetrics(metricId);
        });
    };
    QuestionariesListPage.prototype.insertAnswerAndNavigateToPrioritization = function () {
        this.createAnswer();
        this.navigatePrioritizationPage();
    };
    QuestionariesListPage.prototype.createAnswer = function () {
        var answer = new __WEBPACK_IMPORTED_MODULE_1__providers_questionary_questionary__["a" /* Answer */]();
        answer.plan = this.plan;
        answer.questionary = this.questionary;
        answer.question = this.questions[0];
        answer.respondent = this.respondent;
        answer.answer = 1;
        var dateTime = new Date();
        answer.created_at = new Date(dateTime.valueOf() - dateTime.getTimezoneOffset() * 60000).toISOString();
        answer.isCompleted = false;
        this.answers.push(answer);
    };
    //Consulta todas as questões do questionário
    QuestionariesListPage.prototype.getAllQuestionsByQuestionary = function (questionary, isRuralZone) {
        var _this = this;
        this.questionProvider.getAllQuestionsByQuestionary(questionary, isRuralZone)
            .then(function (result) {
            if (result != null) {
                _this.questions = result;
            }
            else {
                var alert_3 = _this.alertCtrl.create({
                    title: 'Oops!',
                    message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
                    buttons: [{
                            text: "Tentar novamente",
                            handler: function () {
                                _this.getAllQuestionsByQuestionary(questionary, isRuralZone);
                            }
                        }]
                });
                alert_3.present();
            }
        })
            .catch(function () {
            var alert = _this.alertCtrl.create({
                title: 'Oops!',
                message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
                buttons: [{
                        text: "Tentar novamente",
                        handler: function () {
                            _this.getAllQuestionsByQuestionary(questionary, isRuralZone);
                        }
                    }]
            });
            alert.present();
        });
    };
    //Mensagem caso não consiga carregar as métricas
    QuestionariesListPage.prototype.showAlertLoadMetrics = function (metricId) {
        var _this = this;
        this.metricItems = [];
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.loadMetrics(metricId);
                    }
                }]
        });
        alert.present();
    };
    //Mensagem motivadora da narrativa
    QuestionariesListPage.prototype.help = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '<div text-center>Olá! Bem vindo ao Opina Aí</div>',
            message: 
            //----------------------MENSAGEM------------------
            '<div class="alert-align-center"><img class="img-alert" src="assets/imgs/person3a.png"/></div>'
                + '<div class="dialogue-box"><div class="tdialogue-box-text">'
                + '<div><strong>Bem vindo ao Opina Aí!</strong></div>'
                // + '<div text-center>Sinta-se a vontade para contribuir com sua <strong>cidade</strong> respondendo os questionários!</div>'
                // + '<div text-center>Sua <strong>participação</strong> é muito importante!</div>'
                // + '</div></div>',
                + '<div text-center>Sinta-se a vontade para contribuir com a <strong>autoavaliação do POSCOMP</strong> respondendo os questionários!</div>'
                + '<div text-center>Sua <strong>participação</strong> é muito importante!</div>'
                + '</div></div>',
            //----------------------MENSAGEM------------------
            buttons: [{
                    text: "Entendi, quero participar!",
                    handler: function () {
                        _this.storage.get('helpHome')
                            .then(function (data) {
                            if (data == null) {
                                _this.presentToast();
                                _this.storage.set('helpHome', true);
                            }
                        });
                    }
                }]
        });
        alert.present();
    };
    QuestionariesListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-questionaries-list',template:/*ion-inline-start:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\questionaries-list\questionaries-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col offset-1 col-2 class="menu-icon-col-not-game" *ngIf="!useGame">\n        <button ion-button clear (click)="openMenu()">\n          <ion-icon name="md-menu" class="menu-icon"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col offset-1 col-2 class="menu-icon-col" *ngIf="useGame">\n        <button ion-button clear (click)="openMenu()">\n          <ion-icon name="md-menu" class="menu-icon"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-6 *ngIf="!useGame">\n        <img class="img-responsive img-not-game" src="assets/imgs/header-logo.png" />\n      </ion-col>\n      <ion-col col-6 *ngIf="useGame">\n        <img class="img-responsive" src="assets/imgs/header-logo.png" />\n      </ion-col>\n      <ion-col col-2 *ngIf="useGame">\n        <button ion-button clear (click)="help()" class="button-help-questionary-list">\n          <ion-icon class="icon-help button-help-questionary-list" name="help-circle"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <!-------------------------- USE GAME -------------------------->\n    <ion-row *ngIf="useGame">\n      <h1 class="text-questionary-list" text-center>Questionários - {{plan.name}}</h1>\n      <ion-col col-3 class="text-questionary-list">\n        <img class="text-img" src="assets/imgs/person3b.png">\n      </ion-col>\n      <ion-col col-9 class="text-questionary-list-game">\n        <h5>Responda os questionários para conseguir <strong>pontos</strong> para aumentar seu <strong>nível</strong> de\n          participação! Você só poderá responder cada questionário uma vez.</h5>\n      </ion-col>\n    </ion-row>\n    <!-------------------------- USE GAME -------------------------->\n    <!-------------------------- NO GAME -------------------------->\n    <ion-row *ngIf="!useGame">\n      <h1 class="text-questionary-list" text-center>Questionários - {{plan.name}}</h1>\n      <ion-col col-12 class="text-questionary-list" >\n        <!-- <h5>Escolha um questionário abaixo para nos contar sua opinião sobre a requalificação do centro de Pouso Alegre.\n        </h5> -->\n        <h4>Escolha um dos questionários abaixo para nos contar sua opinião e contribuir com a autoavaliação do POSCOMP. Você só poderá responder cada questionário uma vez.</h4>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <!-------------------------- NO GAME -------------------------->\n      <ion-col col-12>\n        <!-- Lista de questionários -->\n        <ion-list radio-group>\n          <!-- Item da lista -->\n          <ion-item *ngFor="let questionary of questionaries" class="questionary-item-list">\n            <ion-thumbnail *ngIf="useGame" item-start>\n              <img *ngIf="questionary.answered" class="questionary-img-list"\n                src="assets/imgs/{{questionary.icon}}-selected.png">\n              <img *ngIf="!questionary.answered" class="questionary-img-list"\n                src="assets/imgs/{{questionary.icon}}.png">\n            </ion-thumbnail>\n            <ion-label text-wrap text-left>\n              <h2 class="text-questionary" *ngIf="!useGame">{{questionary.name}}</h2>\n              <h2 *ngIf="useGame">{{questionary.name}}</h2>\n              <div *ngIf="questionary.answered && useGame">\n                <p>Respondido!</p>\n              </div>\n            </ion-label>\n            <ion-radio disabled="{{questionary.answered}}" (ionSelect)="setQuestionary(questionary)"></ion-radio>\n          </ion-item>\n          <!-- Item da lista -->\n        </ion-list>\n        <!-- Lista de questionários -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<!-------------------------- NO GAME -------------------------->\n<ion-footer class="footer-not-game" *ngIf="!useGame">\n  <ion-grid>\n    <ion-row>\n      <button ion-button full class="button-background" (click)="navigate()" [disabled]="btnContinueDisabled">\n        <ion-icon id="button-questionary-list-not-game-{{questionary.id}}" class="text-button">\n          Continuar\n        </ion-icon>\n      </button>\n    </ion-row>\n  </ion-grid>\n  <ion-navbar class="toolbar-progress"></ion-navbar>\n</ion-footer>\n<!-------------------------- NO GAME -------------------------->\n<!-------------------------- USE GAME -------------------------->\n<ion-footer *ngIf="useGame">\n  <ion-grid>\n    <ion-row>\n      <button ion-button full class="button-background" (click)="navigate()" [disabled]="btnContinueDisabled">\n        <ion-icon id="button-questionary-list-game-{{questionary.id}}" class="text-button">\n          Continuar\n        </ion-icon>\n      </button>\n    </ion-row>\n  </ion-grid>\n  <ion-navbar class="toolbar-progress">\n    <ion-title text-center class="toolbar-point">\n      <ion-icon range-right name="md-ribbon"></ion-icon>\n      {{points}} pontos\n    </ion-title>\n    <ion-range class="progress-bar" [min]="0" [max]="100" [step]="1" [(ngModel)]="progress" disabled>\n      <ion-icon range-left name="logo-buffer"></ion-icon>\n      <ion-icon range-right></ion-icon>\n    </ion-range>\n    <div text-center class="progres-text-uper">{{answeredQuestionaries}} de {{totalQuestionaries}}\n      questionários respondidos</div>\n  </ion-navbar>\n</ion-footer>\n<!-------------------------- USE GAME -------------------------->\n'/*ion-inline-end:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\questionaries-list\questionaries-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_question_question__["b" /* QuestionProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_questionary_questionary__["d" /* QuestionaryProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9__providers_prioritization_prioritization__["a" /* PrioritizationProvider */]])
    ], QuestionariesListPage);
    return QuestionariesListPage;
}());

//# sourceMappingURL=questionaries-list.js.map

/***/ })

});
//# sourceMappingURL=3.js.map