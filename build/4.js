webpackJsonp([4],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrioritizationPageModule", function() { return PrioritizationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prioritization__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PrioritizationPageModule = /** @class */ (function () {
    function PrioritizationPageModule() {
    }
    PrioritizationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__prioritization__["a" /* PrioritizationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__prioritization__["a" /* PrioritizationPage */]),
            ],
        })
    ], PrioritizationPageModule);
    return PrioritizationPageModule;
}());

//# sourceMappingURL=prioritization.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrioritizationPage; });
/* unused harmony export Prioritization */
/* unused harmony export MetricItem */
/* unused harmony export MetricValue */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_questionary_questionary__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prioritization_prioritization__ = __webpack_require__(209);
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





var PrioritizationPage = /** @class */ (function () {
    function PrioritizationPage(toastCtrl, menuCtrl, navCtrl, navParams, storage, alertCtrl, loadingCtrl, priorizationProvider) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.priorizationProvider = priorizationProvider;
        this.btnContinueDisabled = true;
        this.metricValueColor = "";
        this.YES = 1;
        this.disableSteps = false;
        this.scaleView = false;
        this.itemView = false;
        this.checkBoxView = false;
        this.useGame = false;
        this.storage.get('useGame').then(function (data) { return _this.useGame = data; });
        this.prioritizations = navParams.get('prioritizations');
        this.answers = navParams.get('answers');
        this.answersNeighborhoods = navParams.get('answersNeighborhoods');
        this.plan = navParams.get('plan');
        this.questionary = navParams.get('questionary');
        this.respondent = navParams.get('respondent');
        this.currentMetricItem = navParams.get('currentMetricItem');
        this.currentMetricItemIndex = navParams.get('currentMetricItemIndex');
        this.currentQuestion = navParams.get('currentQuestion');
        this.currentQuestionIndex = navParams.get('currentQuestionIndex');
        this.neighborhoods = navParams.get('neighborhoods');
        this.questions = navParams.get('questions');
        this.metricItems = navParams.get('metricItems');
        this.points = navParams.get('points');
        this.selectedMetricValue = new MetricValue();
        this.step = this.currentMetricItemIndex + 1;
        this.totalSteps = this.metricItems.length;
        if (this.totalSteps == 1)
            this.disableSteps = true;
        this.progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.totalQuestions = this.questions.length;
        //---------------------MUITO IMPORTANTE---------------------
        this.resolveMetricItem();
        //---------------------MUITO IMPORTANTE---------------------
    }
    PrioritizationPage.prototype.ionViewDidLeave = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.points = this.points - 1;
                return [2 /*return*/];
            });
        });
    };
    PrioritizationPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Clique no icone em caso de dúvidas!',
            duration: 5000,
            position: 'top'
        });
        toast.present();
    };
    PrioritizationPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    //---------------------MUITO IMPORTANTE---------------------
    //---------------DEFINE A EXIBIÇÃO DA RESPOSTA---------------
    PrioritizationPage.prototype.resolveMetricItem = function () {
        switch (this.currentMetricItem.name) {
            case "Gravidade":
                this.scaleView = true;
                break;
            case "Urgência":
                this.scaleView = true;
                break;
            case "Tendência":
                this.scaleView = true;
                break;
            case "Escala Qualitativa":
                this.itemView = true;
                break;
            case "Escala de satisfação":
                this.scaleView = true;
                break;
            case "Necessidade de Requalificação":
                this.scaleView = true;
                break;
            case "Escala de qualidade":
                this.scaleView = true;
                break;
            case "Escala de necessidade":
                this.scaleView = true;
                break;
            case "Escala de concordancia":
                this.scaleView = true;
                break;
            case "Melhorias para o comerciante":
                this.scaleView = true;
                break;
            case "Escala de Satisfação":
                this.scaleView = true;
                break;
            case "Avaliação do comerciante":
                this.scaleView = true;
                break;
            case "Concordancia e discordancia":
                this.itemView = true;
                break;
            case "Frequência Semanal":
                this.itemView = true;
                break;
            case "Atrações do Centro":
                this.checkBoxView = true;
                break;
            case "Motivos de não ir ao centro":
                this.checkBoxView = true;
                break;
            case "Atrações do Centro 2":
                this.checkBoxView = true;
                break;
            case "Equipamentos e comércios":
                this.itemView = true;
                break;
            case "Ramo de atividade comercial":
                this.itemView = true;
                break;
            case "Motivação de escolha para o comerciante":
                this.itemView = true;
                break;
            case "Atividades exercidas pelos pedestres":
                this.itemView = true;
                break;
            case "Pontos fortes para o comerciante":
                this.checkBoxView = true;
                break;
            case "Pontos fracos para o comerciante":
                this.checkBoxView = true;
                break;
            case "Ausências do Centro":
                this.itemView = true;
                break;
            case "Necessidades do Centro":
                this.checkBoxView = true;
                break;
            case "Atividades dos pedestres no Centro":
                this.checkBoxView = true;
                break;
            case "Pontos fortes da rua":
                this.checkBoxView = true;
                break;
            case "Pontos fracos da rua":
                this.checkBoxView = true;
                break;
            case "Frequência de uso dos espaços públicos":
                this.itemView = true;
                break;
        }
    };
    //---------------DEFINE A EXIBIÇÃO DA RESPOSTA---------------
    //---------------------MUITO IMPORTANTE---------------------
    PrioritizationPage.prototype.getDescriptionByPriorization = function () {
        //------------------------------DEFINIÇÃO DE MÉTRICA------------------------------
        switch (this.currentMetricItem.name) {
            case "Gravidade":
                return "Quão grave esse problema poderá se tornar caso nada seja feito?";
            case "Urgência":
                return "A resolução deste problema pode esperar ou deve ser realizada imediatamente?";
            case "Tendência":
                return "Se esse problema não for resolvido agora, ele vai piorar pouco a pouco ou vai piorar bruscamente?";
            case "Escala Qualitativa":
                return "O quanto você concorda com a afirmação?";
            default:
                return "";
        }
        //------------------------------DEFINIÇÃO DE MÉTRICA------------------------------
    };
    PrioritizationPage.prototype.selectMetricValue = function (metricValue) {
        this.selectedMetricValue = metricValue;
        this.setMetricValueColor();
        this.btnContinueDisabled = false;
        this.scrollToBottom();
    };
    PrioritizationPage.prototype.setMetricValueColor = function () {
        switch (this.selectedMetricValue.icon.toString().substr(0, 1)) {
            case '1': {
                this.metricValueColor = "metric_value_1";
                break;
            }
            case '2': {
                this.metricValueColor = "metric_value_2";
                break;
            }
            case '3': {
                this.metricValueColor = "metric_value_3";
                break;
            }
            case '4': {
                this.metricValueColor = "metric_value_4";
                break;
            }
            case '5': {
                this.metricValueColor = "metric_value_5";
                break;
            }
            default: {
                this.metricValueColor = "metric_value_default";
                break;
            }
        }
    };
    PrioritizationPage.prototype.isMetricValueSelected = function (metricValue) {
        if (!!this.selectedMetricValue) {
            return this.selectedMetricValue.value == metricValue.value;
        }
        else {
            return false;
        }
    };
    PrioritizationPage.prototype.updateMultiMetricValue = function (metricValue, checked) {
        var _this = this;
        if (checked) {
            if (metricValue.name == "Nenhum dos anteriores" || metricValue.name == "Nenhuma das anteriores") {
                this.currentMetricItem.metricValues.forEach(function (metric) {
                    _this.removeMultiMetricValue(metric);
                });
                var length_1 = this.checkBox.length;
                var cont_1 = 1;
                this.checkBox.forEach(function (box) {
                    if (cont_1 < length_1) {
                        box.checked = false;
                        cont_1++;
                    }
                });
            }
            else {
                if (this.checkBox.last.checked) {
                    this.checkBox.last.checked = false;
                    var metricRemove = this.currentMetricItem.metricValues.find(function (metric) {
                        metric.name == "Nenhum dos anteriores" || metric.name == "Nenhuma das anteriores";
                    });
                    this.removeMultiMetricValue(metricRemove);
                }
            }
            this.createMultiMetricValue(metricValue);
        }
        else {
            this.removeMultiMetricValue(metricValue);
        }
        this.scrollToBottom();
    };
    PrioritizationPage.prototype.createMultiMetricValue = function (metricValue) {
        var prioritization = new Prioritization();
        prioritization.plan = this.plan;
        prioritization.questionary = this.questionary;
        prioritization.question = this.currentQuestion;
        prioritization.respondent = this.respondent;
        prioritization.metricItem = this.currentMetricItem;
        prioritization.metricValue = metricValue;
        prioritization.created_at = new Date().toISOString();
        this.prioritizations.push(prioritization);
        this.btnContinueDisabled = false;
    };
    PrioritizationPage.prototype.removeMultiMetricValue = function (metricValue) {
        var _this = this;
        this.prioritizations =
            this.prioritizations.filter(function (prioritization) {
                return !(prioritization.plan.id == _this.plan.id
                    && prioritization.questionary.id == _this.questionary.id
                    && prioritization.respondent.id == _this.respondent.id
                    && prioritization.question.id == _this.currentQuestion.id
                    && prioritization.metricItem.id == _this.currentMetricItem.id
                    && prioritization.metricValue.id == metricValue.id);
            });
    };
    PrioritizationPage.prototype.nextStep = function () {
        if (!this.checkBoxView) {
            this.deletePrioritization();
            this.createPrioritization();
        }
        this.navigate();
    };
    PrioritizationPage.prototype.createPrioritization = function () {
        var prioritization = new Prioritization();
        prioritization.plan = this.plan;
        prioritization.questionary = this.questionary;
        prioritization.question = this.currentQuestion;
        prioritization.respondent = this.respondent;
        prioritization.metricItem = this.currentMetricItem;
        prioritization.metricValue = this.selectedMetricValue;
        prioritization.created_at = new Date().toISOString();
        this.prioritizations.push(prioritization);
    };
    PrioritizationPage.prototype.deletePrioritization = function () {
        var _this = this;
        this.prioritizations =
            this.prioritizations.filter(function (prioritization) {
                return !(prioritization.plan.id == _this.plan.id
                    && prioritization.questionary.id == _this.questionary.id
                    && prioritization.respondent.id == _this.respondent.id
                    && prioritization.question.id == _this.currentQuestion.id
                    && prioritization.metricItem.id == _this.currentMetricItem.id);
            });
    };
    PrioritizationPage.prototype.createAnswer = function (plan, questionary, currentQuestion, respondent, questionAnswer) {
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
    PrioritizationPage.prototype.loadMetrics = function (metricId) {
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
    PrioritizationPage.prototype.insertAnswerAndNavigateToPrioritization = function () {
        this.createAnswer(this.plan, this.questionary, this.questions[this.currentQuestionIndex + 1], this.respondent, this.YES);
        this.navigatePrioritizationPage(this.plan, this.respondent, this.questionary, this.neighborhoods, this.questions, this.metricItems, this.metricItems[0], 0, this.currentQuestionIndex + 1, this.questions[this.currentQuestionIndex + 1], this.answers, this.answersNeighborhoods, this.prioritizations);
    };
    PrioritizationPage.prototype.showAlertLoadMetrics = function (metricId) {
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
    PrioritizationPage.prototype.navigate = function () {
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        this.points = this.points + 1;
        //O plano esta habilitado pra usar a escala GUT
        if (this.plan.usePrioritization == true) {
            //Se a resposta for YES vai para a página de priorization com GUT
            if (this.currentMetricItemIndex + 1 < this.metricItems.length) {
                this.navigatePrioritizationPage(this.plan, this.respondent, this.questionary, this.neighborhoods, this.questions, this.metricItems, this.metricItems[this.currentMetricItemIndex + 1], this.currentMetricItemIndex + 1, this.currentQuestionIndex, this.currentQuestion, this.answers, this.answersNeighborhoods, this.prioritizations);
                //Se não, vai para a página do questionário
            }
            else {
                if (this.currentQuestionIndex + 1 < this.questions.length) {
                    this.navigateQuestionaryPage();
                    //acabaram as perguntas, mandar para thank-you page
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
                if (this.questions[this.currentQuestionIndex + 1].metricId == null) {
                    this.navigateQuestionaryPage();
                    //Se houver metric_id, carrega as métricas específicas  e navega para página de priorization
                }
                else {
                    this.loadMetrics(this.questions[this.currentQuestionIndex + 1].metricId);
                }
            }
            else {
                this.navigateThankYouPage();
            }
        }
    };
    PrioritizationPage.prototype.navigatePrioritizationPage = function (plan, respondent, questionary, neighborhoods, questions, metricItems, currentMetricItem, currentMetricItemIndex, currentQuestionIndex, currentQuestion, answers, answersNeighborhoods, prioritizations) {
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
    PrioritizationPage.prototype.navigateThankYouPage = function () {
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
    PrioritizationPage.prototype.navigateQuestionaryPage = function () {
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
    PrioritizationPage.prototype.scrollToBottom = function () {
        if (!!this.content) {
            var content_1 = this.content;
            setTimeout(function () {
                content_1.scrollToBottom(100);
            }, 100);
        }
    };
    PrioritizationPage.prototype.help = function () {
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
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]) === "function" && _a || Object)
    ], PrioritizationPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Checkbox */]),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* QueryList */]) === "function" && _b || Object)
    ], PrioritizationPage.prototype, "checkBox", void 0);
    PrioritizationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-prioritization',template:/*ion-inline-start:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\prioritization\prioritization.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-2 class="menu-icon-col">\n        <button ion-button clear (click)="openMenu()">\n          <ion-icon name="md-menu" class="menu-icon"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <img class="img-responsive" src="assets/imgs/header-logo.png" />\n      </ion-col>\n      <ion-col col-2>\n        <button *ngIf="currentQuestion.useNarrative && useGame" ion-button clear (click)="help()">\n          <ion-icon id="button-help-priorization" class="icon-help" name="alert"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row class="context-area">\n      <ion-col col-12 class="context-area-container">\n        <img class="context-area-icon" src="assets/imgs/{{currentQuestion.contextAreaIcon}}" />\n        <ion-label class="context-area-title">\n          {{currentQuestion.contextArea}}\n        </ion-label>\n      </ion-col>\n    </ion-row>\n    <!-- Enunciado da questão -->\n    <div class="hr"></div>\n    <ion-row class="margin-top-30">\n      <ion-col *ngIf="!useGame" col-12 text-justify class="question">\n        <h1>{{currentQuestion.name}}</h1>\n      </ion-col>\n      <ion-col *ngIf="useGame" col-12 text-justify class="question">\n        <h1>{{currentQuestion.question}}</h1>\n      </ion-col>\n      <ion-col col-12 text-center *ngIf="scaleView">\n        <h3>{{getDescriptionByPriorization()}}</h3>\n        <h2 class="{{metricValueColor}}">{{selectedMetricValue.name}}</h2>\n      </ion-col>\n    </ion-row>\n    <!-- Enunciado da questão -->\n    <!-- Seleção pela escala do emotion -->\n    <ion-row *ngIf="scaleView" padding-top margin-top text-center>\n      <ion-col *ngFor="let metricValue of currentMetricItem.metricValues">\n        <img *ngIf="!isMetricValueSelected(metricValue)" class="img-responsive" src="assets/imgs/{{metricValue.icon}}"\n          (click)="selectMetricValue(metricValue)" />\n        <img *ngIf="isMetricValueSelected(metricValue)" class="img-responsive"\n          src="assets/imgs/{{metricValue.iconSelected}}" (click)="selectMetricValue(metricValue)" />\n      </ion-col>\n    </ion-row>\n    <!-- Seleção pela escala do emotion -->\n    <!-- Seleção por itens -->\n    <ion-row *ngIf="itemView">\n      <ion-col col-12>\n        <ion-list radio-group>\n          <ion-item *ngFor="let metricValue of currentMetricItem.metricValues" class="radio-item">\n            <ion-label text-wrap text-left>{{metricValue.name}}</ion-label>\n            <ion-radio (ionSelect)="selectMetricValue(metricValue)"></ion-radio>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <!-- Seleção por itens -->\n    <!-- Seleção por checkbox -->\n    <ion-row *ngIf="checkBoxView">\n      <ion-col col-12>\n        <ion-list radio-group>\n          <ion-item *ngFor="let metricValue of currentMetricItem.metricValues">\n            <ion-label text-wrap text-left>{{metricValue.name}}</ion-label>\n            <ion-checkbox (ionChange)="updateMultiMetricValue(metricValue,$event.checked)"></ion-checkbox>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <!-- Seleção por checkbox -->\n    <ion-row *ngIf="useGame">\n      <ion-col col-12 text-center>\n        <button id="button-question-game-{{currentQuestion.id}}" ion-button full class="button-background-game" (click)="nextStep()"\n          [disabled]="btnContinueDisabled">Continuar\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="!useGame">\n      <ion-col col-12 text-center>\n        <button id="button-question-{{currentQuestion.id}}" ion-button full class="button-background-no-game" (click)="nextStep()"\n          [disabled]="btnContinueDisabled">Continuar\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-navbar class="toolbar-progress">\n    <div *ngIf="!disableSteps" text-center class="progres-text-uper">{{step}} de {{totalSteps}}</div>\n    <ion-range *ngIf="!disableSteps" class="step-bar" [min]="0" [max]="metricItems.length" [step]="1" [(ngModel)]="step"\n      disabled>\n      <ion-icon range-right></ion-icon>\n    </ion-range>\n    <ion-title *ngIf="useGame" text-center>\n      <ion-icon range-right name="md-ribbon"></ion-icon>\n      {{points}} pontos\n    </ion-title>\n    <ion-range *ngIf="useGame" class="progress-bar" [min]="0" [max]="100" [step]="1" [(ngModel)]="progress" disabled>\n      <ion-icon range-left name="md-clipboard"></ion-icon>\n      <ion-icon range-right></ion-icon>\n    </ion-range>\n    <div *ngIf="useGame" text-center class="progres-text-down">{{currentQuestionIndex + 1}} de {{totalQuestions}}\n      questões</div>\n  </ion-navbar>\n</ion-footer>'/*ion-inline-end:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\prioritization\prioritization.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__providers_prioritization_prioritization__["a" /* PrioritizationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_prioritization_prioritization__["a" /* PrioritizationProvider */]) === "function" && _k || Object])
    ], PrioritizationPage);
    return PrioritizationPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

var Prioritization = /** @class */ (function () {
    function Prioritization() {
    }
    return Prioritization;
}());

var MetricItem = /** @class */ (function () {
    function MetricItem() {
    }
    return MetricItem;
}());

var MetricValue = /** @class */ (function () {
    function MetricValue() {
    }
    return MetricValue;
}());

//# sourceMappingURL=prioritization.js.map

/***/ })

});
//# sourceMappingURL=4.js.map