webpackJsonp([2],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionaryPageModule", function() { return QuestionaryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionary__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuestionaryPageModule = /** @class */ (function () {
    function QuestionaryPageModule() {
    }
    QuestionaryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__questionary__["a" /* QuestionaryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__questionary__["a" /* QuestionaryPage */]),
            ],
        })
    ], QuestionaryPageModule);
    return QuestionaryPageModule;
}());

//# sourceMappingURL=questionary.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_questionary_questionary__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_question_question__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_prioritization_prioritization__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var QuestionaryPage = /** @class */ (function () {
    function QuestionaryPage(toastCtrl, menuCtrl, navCtrl, navParams, questionProvider, storage, databaseProvider, loadingCtrl, alertCtrl, priorizationProvider) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.questionProvider = questionProvider;
        this.storage = storage;
        this.databaseProvider = databaseProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.priorizationProvider = priorizationProvider;
        this.neighborhoodsSelected = [];
        this.questionAnswer = -1;
        this.showNeighborhoodList = false;
        this.isYesSelected = false;
        this.isNoSelected = false;
        this.isDontKnowSelected = false;
        this.btnContinueDisabled = true;
        this.showDontNow = true;
        this.useGame = false;
        this.NO = 0;
        this.YES = 1;
        this.DONT_KNOW = 2;
        this.MANY_NEIGHBORHOODS_PROBLEM = 0;
        this.CITY_PROBLEM = 1;
        this.RESPONDENT_NEIGHBORHOOD_PROBLEM = 2;
        this.storage.get('useGame').then(function (data) { return _this.useGame = data; });
        this.progress = 0;
        this.answers = navParams.get('answers');
        this.answersNeighborhoods = navParams.get('answersNeighborhoods');
        this.prioritizations = navParams.get('prioritizations');
        this.questionary = navParams.get('questionary');
        this.currentQuestionIndex = navParams.get('currentQuestionIndex');
        this.currentQuestion = navParams.get('currentQuestion');
        this.points = navParams.get('points');
        this.isRuralZone();
        var entities = ['neighborhoods', 'metricItems', 'respondent'];
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
    }
    QuestionaryPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Clique no icone em caso de dúvidas!',
            duration: 5000,
            position: 'top'
        });
        toast.present();
    };
    QuestionaryPage.prototype.ionViewDidLeave = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.points = this.points - 1;
                return [2 /*return*/];
            });
        });
    };
    QuestionaryPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    QuestionaryPage.prototype.navigateBack = function () {
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        this.navCtrl.setRoot('QuestionariesListPage', {}).then(this.loader.dismiss());
    };
    QuestionaryPage.prototype.setEntities = function () {
        var _this = this;
        this.storage.get('neighborhoods')
            .then(function (data) { return _this.neighborhoods = data; })
            .catch(function () { return console.log('error setting neighborhoods'); });
        this.storage.get('metricItems')
            .then(function (data) { return _this.metricItems = data; })
            .catch(function () { return console.log('error setting metricItems'); });
        this.storage.get('respondent')
            .then(function (data) { return _this.respondent = data; })
            .catch(function () { return console.log('error setting respondent'); });
        this.storage.get('plan')
            .then(function (data) { return _this.plan = data; })
            .catch(function () { return console.log('error setting plan'); });
    };
    QuestionaryPage.prototype.getAllQuestionsByQuestionary = function (questionary, currentIndex, isRuralZone) {
        var _this = this;
        this.questionProvider.getAllQuestionsByQuestionary(questionary, isRuralZone)
            .then(function (result) {
            if (result != null) {
                _this.questions = result;
                _this.currentQuestion = _this.questions[currentIndex];
                _this.progress = ((currentIndex + 1) / _this.questions.length) * 100;
                _this.totalQuestions = _this.questions.length;
                //------------------------MUITO IMPORTANTE------------------------
                //-----------OCULTANDO O DONT NOW PARA DETERMINADAS PERGUNTAS-------------------
                var id = _this.currentQuestion.id;
                if (id == "1003" || id == "1008" || id == "1019" || id == "1020") {
                    _this.showDontNow = false;
                }
                //-----------OCULTANDO O DONT NOW PARA DETERMINADAS PERGUNTAS-------------------
                //------------------------MUITO IMPORTANTE------------------------
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Oops!',
                    message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
                    buttons: [{
                            text: "Tentar novamente",
                            handler: function () {
                                _this.getAllQuestionsByQuestionary(questionary, currentIndex, isRuralZone);
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
                            _this.getAllQuestionsByQuestionary(questionary, currentIndex, isRuralZone);
                        }
                    }]
            });
            alert.present();
        });
    };
    QuestionaryPage.prototype.isRuralZone = function () {
        var _this = this;
        this.storage.get('isRuralZone')
            .then(function (data) {
            _this.getAllQuestionsByQuestionary(_this.questionary, _this.currentQuestionIndex, data);
        }, function (error) {
            _this.getAllQuestionsByQuestionary(_this.questionary, _this.currentQuestionIndex, 0);
        })
            .catch(function () {
            _this.getAllQuestionsByQuestionary(_this.questionary, _this.currentQuestionIndex, 0);
        });
    };
    QuestionaryPage.prototype.answerToQuestion = function (value) {
        this.questionAnswer = value;
        switch (value) {
            case this.NO://no
                this.isNoSelected = true;
                this.isYesSelected = false;
                this.isDontKnowSelected = false;
                break;
            case this.YES://yes
                this.isNoSelected = false;
                this.isYesSelected = true;
                this.isDontKnowSelected = false;
                break;
            case this.DONT_KNOW://dont know
                this.isNoSelected = false;
                this.isYesSelected = false;
                this.isDontKnowSelected = true;
                break;
        }
        this.enableContinueButton();
        this.scrollToBottom();
    };
    QuestionaryPage.prototype.neighborhoodRadioSelected = function (value) {
        this.neighborhoodsSelected = [];
        if (value == this.CITY_PROBLEM) {
            this.neighborhoodsSelected = [];
        }
        else if (value == this.RESPONDENT_NEIGHBORHOOD_PROBLEM) {
            this.neighborhoodsSelected.push(this.respondent.residenceNeighborhood);
        }
        this.neighborhoodAnswer = value;
        this.showNeighborhoodList = value == this.MANY_NEIGHBORHOODS_PROBLEM;
        this.enableContinueButton();
        this.scrollToBottom();
    };
    QuestionaryPage.prototype.enableContinueButton = function () {
        //Tirar o this.isYesSelected para ativar o GUT
        if (this.isNoSelected || this.isDontKnowSelected || this.isYesSelected) {
            this.btnContinueDisabled = false;
        }
        else if (this.isYesSelected) {
            if (this.neighborhoodAnswer == this.CITY_PROBLEM || this.neighborhoodAnswer == this.RESPONDENT_NEIGHBORHOOD_PROBLEM) {
                this.btnContinueDisabled = false;
            }
            else if (this.neighborhoodAnswer == this.MANY_NEIGHBORHOODS_PROBLEM) {
                this.btnContinueDisabled = !(!!this.neighborhoodsSelected && this.neighborhoodsSelected.length > 0);
            }
            else {
                this.btnContinueDisabled = true;
            }
        }
        else {
            this.btnContinueDisabled = true;
        }
    };
    QuestionaryPage.prototype.createAnswer = function (plan, questionary, currentQuestion, respondent, questionAnswer) {
        var answer = new __WEBPACK_IMPORTED_MODULE_2__providers_questionary_questionary__["a" /* Answer */]();
        answer.plan = plan;
        answer.questionary = questionary;
        answer.question = currentQuestion;
        answer.respondent = respondent;
        answer.answer = questionAnswer;
        answer.created_at = new Date().toISOString();
        answer.isCompleted = false;
        this.answers.push(answer);
    };
    QuestionaryPage.prototype.createAnswersNeighborhoods = function () {
        var _this = this;
        if (this.neighborhoodsSelected.length > 0) {
            this.neighborhoodsSelected.forEach(function (neighborhood) {
                var answerNeighborhood = new __WEBPACK_IMPORTED_MODULE_2__providers_questionary_questionary__["b" /* AnswerNeighborhood */]();
                answerNeighborhood.plan = _this.plan;
                answerNeighborhood.questionary = _this.questionary;
                answerNeighborhood.question = _this.currentQuestion;
                answerNeighborhood.respondent = _this.respondent;
                answerNeighborhood.neighborhood = neighborhood;
                answerNeighborhood.created_at = new Date().toISOString();
                _this.answersNeighborhoods.push(answerNeighborhood);
            });
        }
    };
    QuestionaryPage.prototype.nextStep = function () {
        this.deleteAnswer();
        this.createAnswer(this.plan, this.questionary, this.currentQuestion, this.respondent, this.questionAnswer);
        this.deleteAnswersNeighborhoods();
        this.createAnswersNeighborhoods();
        this.navigate();
    };
    QuestionaryPage.prototype.deleteAnswer = function () {
        var _this = this;
        this.answers = this.answers.filter(function (answer) { return !(answer.plan.id == _this.plan.id && answer.questionary.id == _this.questionary.id && answer.respondent.id == _this.respondent.id && answer.question.id == _this.currentQuestion.id); });
    };
    QuestionaryPage.prototype.deleteAnswersNeighborhoods = function () {
        var _this = this;
        this.answersNeighborhoods = this.answersNeighborhoods.filter(function (answerNeighborhood) { return !(answerNeighborhood.plan.id == _this.plan.id && answerNeighborhood.questionary.id == _this.questionary.id && answerNeighborhood.respondent.id == _this.respondent.id && answerNeighborhood.question.id == _this.currentQuestion.id); });
    };
    QuestionaryPage.prototype.navigate = function () {
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        //O plano esta habilitado pra usar a escala GUT
        if (this.plan.usePrioritization == true) {
            //Se a resposta for YES vai para a página de priorization com GUT
            if (this.questionAnswer == this.YES) {
                if (this.metricItems.length > 0) {
                    this.navigatePrioritizationPage(this.plan, this.respondent, this.questionary, this.neighborhoods, this.questions, this.metricItems, this.metricItems[0], 0, this.currentQuestionIndex, this.currentQuestion, this.answers, this.answersNeighborhoods, this.prioritizations);
                }
                else {
                    this.points = this.points + 1;
                    this.navigateThankYouPage();
                }
                //Se não, vai para a página do questionário
            }
            else {
                this.points = this.points + 1;
                if (this.currentQuestionIndex + 1 < this.questions.length) {
                    this.navigateQuestionaryPage();
                }
                else {
                    this.navigateThankYouPage();
                }
            }
            //O plano não esta habilitado para usar a escala GUT
            //Nesse caso pode usar outras métricas
        }
        else {
            if (this.currentQuestionIndex + 1 < this.questions.length) {
                //se metric_id for nulo, navega para página de questionário
                this.points = this.points + 1;
                if (this.questions[this.currentQuestionIndex + 1].metricId == null) {
                    this.navigateQuestionaryPage();
                    //Se houver metric_id, carrega as métricas específicas  e navega para página de priorization
                }
                else {
                    this.loadMetrics(this.questions[this.currentQuestionIndex + 1].metricId);
                }
            }
            else {
                this.points = this.points + 1;
                this.navigateThankYouPage();
            }
        }
    };
    QuestionaryPage.prototype.insertAnswerAndNavigateToPrioritization = function () {
        this.createAnswer(this.plan, this.questionary, this.questions[this.currentQuestionIndex + 1], this.respondent, this.YES);
        this.navigatePrioritizationPage(this.plan, this.respondent, this.questionary, this.neighborhoods, this.questions, this.metricItems, this.metricItems[0], 0, this.currentQuestionIndex + 1, this.questions[this.currentQuestionIndex + 1], this.answers, this.answersNeighborhoods, this.prioritizations);
    };
    QuestionaryPage.prototype.navigateThankYouPage = function () {
        //Navegação para pagina de agradecimento
        this.navCtrl.push('ThankyouPage', {
            questions: this.questions,
            questionary: this.questionary,
            points: this.points,
            answers: this.answers,
            answersNeighborhoods: this.answersNeighborhoods,
            prioritizations: this.prioritizations
        }).then(this.loader.dismiss());
    };
    QuestionaryPage.prototype.navigateQuestionaryPage = function () {
        //Navegação para página do questionário
        this.navCtrl.push('QuestionaryPage', {
            points: this.points,
            respondent: this.respondent,
            questionary: this.questionary,
            neighborhoods: this.neighborhoods,
            currentQuestionIndex: this.currentQuestionIndex + 1,
            currentQuestion: this.questions[this.currentQuestionIndex + 1],
            metricItems: this.metricItems,
            answers: this.answers,
            answersNeighborhoods: this.answersNeighborhoods,
            prioritizations: this.prioritizations
        }).then(this.loader.dismiss());
    };
    QuestionaryPage.prototype.navigatePrioritizationPage = function (plan, respondent, questionary, neighborhoods, questions, metricItems, currentMetricItem, currentMetricItemIndex, currentQuestionIndex, currentQuestion, answers, answersNeighborhoods, prioritizations) {
        // Navegação para página do questinário
        this.navCtrl.push('PrioritizationPage', {
            points: this.points,
            plan: plan,
            respondent: respondent,
            questionary: questionary,
            neighborhoods: neighborhoods,
            questions: questions,
            metricItems: metricItems,
            currentMetricItem: currentMetricItem,
            currentMetricItemIndex: currentMetricItemIndex,
            currentQuestionIndex: currentQuestionIndex,
            currentQuestion: currentQuestion,
            answers: answers,
            answersNeighborhoods: answersNeighborhoods,
            prioritizations: prioritizations
        }).then(this.loader.dismiss());
    };
    QuestionaryPage.prototype.loadMetrics = function (metricId) {
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
    QuestionaryPage.prototype.showAlertLoadMetrics = function (metricId) {
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
    QuestionaryPage.prototype.scrollToBottom = function () {
        if (!!this.content) {
            var content_1 = this.content;
            setTimeout(function () {
                content_1.scrollToBottom(100);
            }, 100);
        }
    };
    QuestionaryPage.prototype.help = function () {
        var alert = this.alertCtrl.create({
            title: '<div text-center>Então, vamos soltar a imaginação!</div>',
            message: '<div class="dialogue-box"><div class="tdialogue-box-text">'
                + '<div text-center>' + this.currentQuestion.narrative + '</div>'
                + '</div></div>'
                + '<div class="alert-align-center"><img class="img-alert" src="assets/imgs/person2a.png" /></div>',
            buttons: [{
                    text: "Ok!",
                    handler: function () {
                    }
                }]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], QuestionaryPage.prototype, "content", void 0);
    QuestionaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-questionary',template:/*ion-inline-start:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\questionary\questionary.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="menu-icon-col">\n        <button ion-button clear (click)="openMenu()">\n          <ion-icon name="md-menu" class="menu-icon"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <img class="img-responsive" src="assets/imgs/header-logo.png" />\n      </ion-col>\n      <ion-col col-2>\n        <button class="button-help-question" *ngIf="currentQuestion.useNarrative && useGame" ion-button clear (click)="help()">\n          <ion-icon  class="icon-help button-help-question" name="alert"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row class="context-area">\n      <ion-col col-12 class="context-area-container">\n        <img class="context-area-icon" src="assets/imgs/{{currentQuestion.contextAreaIcon}}" />\n        <ion-label class="context-area-title">\n          {{currentQuestion.contextArea}}\n        </ion-label>\n      </ion-col>\n    </ion-row>\n    <div class="hr"></div>\n    <ion-row class="margin-top-30">\n      <ion-col *ngIf="!useGame" col-12 text-justify class="question">\n        <h1>{{currentQuestion.name}}</h1>\n        <h3>{{currentQuestion.description}}</h3>\n      </ion-col>\n      <ion-col *ngIf="useGame" col-12 text-justify class="question">\n        <h1>{{currentQuestion.question}}</h1>\n        <h3>{{currentQuestion.description}}</h3>\n      </ion-col>\n    </ion-row>\n    <ion-row class="margin-top-30" *ngIf="showDontNow">\n      <ion-col col-4 text-center>\n        <div *ngIf="!isYesSelected"><img class="img-responsive max-width-200" src="assets/imgs/yes.png"\n            (click)="answerToQuestion(1)" /></div>\n        <div *ngIf="isYesSelected"><img class="img-responsive max-width-200" src="assets/imgs/yes-selected.png"\n            (click)="answerToQuestion(1)" /></div>\n        <p><b>Sim</b></p>\n      </ion-col>\n      <ion-col col-4 text-center>\n        <div *ngIf="!isNoSelected"><img class="img-responsive max-width-200" src="assets/imgs/no.png"\n            (click)="answerToQuestion(0)" /></div>\n        <div *ngIf="isNoSelected"><img class="img-responsive max-width-200" src="assets/imgs/no-selected.png"\n            (click)="answerToQuestion(0)" /></div>\n        <p><b>Não</b></p>\n      </ion-col>\n      <ion-col col-4 text-center>\n        <div *ngIf="!isDontKnowSelected"><img class="img-responsive max-width-200" src="assets/imgs/question-mark.png"\n            (click)="answerToQuestion(2)" /></div>\n        <div *ngIf="isDontKnowSelected"><img class="img-responsive max-width-200"\n            src="assets/imgs/question-mark-selected.png" (click)="answerToQuestion(2)" /></div>\n        <p><b>Não sei</b></p>\n      </ion-col>\n    </ion-row>\n    <ion-row class="margin-top-30" *ngIf="!showDontNow">\n      <ion-col col-6 text-center>\n        <div *ngIf="!isYesSelected"><img class="img-responsive max-width-200" src="assets/imgs/yes.png"\n            (click)="answerToQuestion(1)" /></div>\n        <div *ngIf="isYesSelected"><img class="img-responsive max-width-200" src="assets/imgs/yes-selected.png"\n            (click)="answerToQuestion(1)" /></div>\n        <p><b>Sim</b></p>\n      </ion-col>\n      <ion-col col-6 text-center>\n        <div *ngIf="!isNoSelected"><img class="img-responsive max-width-200" src="assets/imgs/no.png"\n            (click)="answerToQuestion(0)" /></div>\n        <div *ngIf="isNoSelected"><img class="img-responsive max-width-200" src="assets/imgs/no-selected.png"\n            (click)="answerToQuestion(0)" /></div>\n        <p><b>Não</b></p>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row class="margin-top-30" *ngIf="isYesSelected">\n      <ion-col col-12 text-center>\n        <h3>Você acredita que mais algum bairro também tem esse problema?</h3>\n        <ion-list radio-group>\n          <ion-item>\n            <ion-label>Sim/citar (quais bairros?)</ion-label>\n            <ion-radio value="0" (ionSelect)="neighborhoodRadioSelected(0)"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Sim/todos (cidade)</ion-label>\n            <ion-radio value="1" (ionSelect)="neighborhoodRadioSelected(1)"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Não (somente o meu bairro)</ion-label>\n            <ion-radio value="2" (ionSelect)="neighborhoodRadioSelected(2)"></ion-radio>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row> -->\n    <ion-row *ngIf="showNeighborhoodList && isYesSelected">\n      <ion-col col-12 text-center>\n        <h4>Selecione os bairros abaixo</h4>\n        <ion-item>\n          <ion-label floating>Bairros</ion-label>\n          <ion-select [(ngModel)]="neighborhoodsSelected" multiple="true" (ionChange)="enableContinueButton()">\n            <ion-option *ngFor="let neighborhood of neighborhoods" [value]="neighborhood">{{neighborhood.name}}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="useGame">\n      <ion-col col-12 text-center>\n        <button ion-button full class="button-background-game" (click)="nextStep()" [disabled]="btnContinueDisabled">\n          <ion-icon id="button-question-game-{{currentQuestion.id}}" class="text-button">\n            Continuar\n          </ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="!useGame">\n      <ion-col col-12 text-center>\n        <button ion-button full class="button-background-no-game" (click)="nextStep()" [disabled]="btnContinueDisabled">\n          <ion-icon id="button-question-{{currentQuestion.id}}" class="text-button">\n            Continuar\n          </ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-navbar class="toolbar-progress">\n    <ion-title *ngIf="useGame" text-center class="toolbar-point">\n      <ion-icon range-right name="md-ribbon"></ion-icon>\n      {{points}} pontos\n    </ion-title>\n    <ion-range *ngIf="useGame" class="progress-bar" [min]="0" [max]="100" [step]="1" [(ngModel)]="progress" disabled>\n      <ion-icon range-left name="md-clipboard"></ion-icon>\n      <ion-icon range-right></ion-icon>\n    </ion-range>\n    <div *ngIf="useGame" text-center class="progres-text-uper">{{currentQuestionIndex + 1}} de {{totalQuestions}}\n      questões</div>\n  </ion-navbar>\n</ion-footer>'/*ion-inline-end:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\questionary\questionary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_question_question__["b" /* QuestionProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_prioritization_prioritization__["a" /* PrioritizationProvider */]])
    ], QuestionaryPage);
    return QuestionaryPage;
}());

//# sourceMappingURL=questionary.js.map

/***/ })

});
//# sourceMappingURL=2.js.map