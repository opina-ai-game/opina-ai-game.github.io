webpackJsonp([7],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_city_city__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_plan_plan__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_questionary_questionary__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_database_database__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_rest_rest__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toastCtrl, cityProvider, planProvider, questionaryProvider, loadingCtrl, storage, databaseProvider, alertCtrl, restProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.cityProvider = cityProvider;
        this.planProvider = planProvider;
        this.questionaryProvider = questionaryProvider;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.databaseProvider = databaseProvider;
        this.alertCtrl = alertCtrl;
        this.restProvider = restProvider;
        this.cities = [];
        this.userTypes = [];
        this.plans = [];
        this.questionaries = [];
        this.btnContinueDisabled = true;
        this.btnCaseTestDisabled = false;
        this.isRuralZone = false;
        this.useGame = false;
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        this.restProvider.checkConnectionLocalVersion(this.navCtrl.getActiveChildNav());
        this.loadUserTypes();
        this.changeZone();
        setTimeout(function () {
            _this.existsAppCityPlan();
            _this.loader.dismiss();
        }, 1000);
    }
    HomePage.prototype.existsAppCityPlan = function () {
        var _this = this;
        var entities = ['city', 'plan', 'isRuralZone', 'questionaries'];
        this.databaseProvider.verifyEntities(entities)
            .then(function (data) {
            if (data.length > 0 && data.filter(function (data) { return data == false; }).length == 0) {
                _this.storage.get('respondent')
                    .then(function (respondent) {
                    if (respondent != null) {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Já existe um usuário respondendo os questionários',
                            message: 'Você gostaria de continuar respondendo os questionários com o usuário: <br/> CPF - ' + respondent.cpf + '?',
                            buttons: [{
                                    text: "Sim",
                                    handler: function () {
                                        _this.navigateQuestionaryList();
                                    }
                                }, {
                                    text: "Não",
                                    handler: function () {
                                        _this.removeStoredData();
                                    }
                                }]
                        });
                        alert_1.present();
                    }
                    else {
                        _this.removeStoredData();
                    }
                })
                    .catch(function () {
                    _this.removeStoredData();
                });
            }
            else {
                _this.getAllCitiesWithPlan();
            }
        })
            .catch(function () { return _this.getAllCitiesWithPlan(); });
    };
    HomePage.prototype.getAllCitiesWithPlan = function () {
        var _this = this;
        this.cityProvider.getAllCitiesWithPlan()
            .then(function (cities) {
            if (cities != null) {
                _this.cities = cities;
            }
            else {
                _this.cities = [];
                _this.showAlertGetAllCitiesWithPlan();
            }
        })
            .catch(function () {
            _this.cities = [];
            _this.showAlertGetAllCitiesWithPlan();
        });
    };
    HomePage.prototype.showAlertGetAllCitiesWithPlan = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.getAllCitiesWithPlan();
                    }
                }]
        });
        alert.present();
    };
    HomePage.prototype.getAllPlansByCity = function (city) {
        var _this = this;
        this.planProvider.getAllPlansByCity(city)
            .then(function (plans) {
            if (plans != null) {
                _this.storage.set('city', city).then(function () {
                    // Plano de mobilidade temporário [x]
                    //-----------------------TEMPORÁRIO-----------------------
                    var p = {
                        city: city,
                        id: 666,
                        name: "Plano de Mobilidade",
                        usePrioritization: false
                    };
                    plans.push(p);
                    //-----------------------TEMPORÁRIO-----------------------
                    _this.plans = plans;
                    _this.questionaries = [];
                    _this.btnContinueDisabled = true;
                });
            }
            else {
                _this.plans = [];
                _this.showAlertGetAllPlansByCity(city);
            }
        })
            .catch(function () {
            _this.showAlertGetAllPlansByCity(city);
        });
    };
    HomePage.prototype.loadUserTypes = function () {
        var userType = new UserType();
        userType.id = 41;
        userType.name = "Cidadão Comum";
        this.userTypes.push(userType);
        userType = new UserType();
        userType.id = 42;
        userType.name = "Funcionário da Prefeitura";
        this.userTypes.push(userType);
        userType = new UserType();
        userType.id = 43;
        userType.name = "Pesquisador NEIRU";
        this.userTypes.push(userType);
    };
    HomePage.prototype.selectUserType = function (userType) {
        this.storage.set('userType', userType);
    };
    HomePage.prototype.showAlertGetAllPlansByCity = function (city) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.getAllPlansByCity(city);
                    }
                }]
        });
        alert.present();
    };
    HomePage.prototype.getAllQuestionariesByPlan = function (plan) {
        var _this = this;
        this.questionaryProvider.getAllQuestionariesByPlan(plan)
            .then(function (questionaries) {
            if (questionaries != null) {
                _this.storage.set('plan', plan);
                // Questionário temporário [x]
                //----------------------------TEMPORÁRIO---------------------------------
                var questionaryTemp1 = {
                    id: 666,
                    name: "Centro - Diagnóstico Geral",
                    answered: false,
                    plan: plan,
                    questions: null,
                };
                var questionaryTemp2 = {
                    id: 661,
                    name: "Centro - Diagnóstico Específico",
                    answered: false,
                    plan: plan,
                    questions: null,
                };
                var questionaryTemp3 = {
                    id: 660,
                    name: "Centro - Comerciante",
                    answered: false,
                    plan: plan,
                    questions: null,
                };
                questionaries.push(questionaryTemp1);
                questionaries.push(questionaryTemp2);
                questionaries.push(questionaryTemp3);
                //----------------------------TEMPORÁRIO---------------------------------
                _this.questionaries = _this.questionaryProvider.resolveQuestionaryIcon(questionaries);
                _this.storage.set('questionaries', _this.questionaries);
                var points = 0;
                _this.storage.set('points', points);
            }
            else {
                _this.questionaries = [];
                _this.showAlertGetAllQuestionariesByPlan(plan);
            }
        })
            .catch(function () {
            _this.showAlertGetAllQuestionariesByPlan(plan);
        });
    };
    HomePage.prototype.showAlertGetAllQuestionariesByPlan = function (plan) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.getAllQuestionariesByPlan(plan);
                    }
                }]
        });
        alert.present();
    };
    HomePage.prototype.help = function () {
        var alert = this.alertCtrl.create({
            title: '<div text-center>Nos conte sobre você!</div>',
            message: '<div class="alert-align-center"><img class="img-alert" src="assets/imgs/publicdomainq-presenter.png"/></div>'
                + '<div class="alert-align-center"><strong>Vamos nos conhecer um pouco melhor...</strong></div>'
                + '<div text-center>Nos conte sobre você!</div>'
                + '<div text-center>Onde você mora?</div>'
                + '<div text-center>Em qual plano diretor você quer opinar?</div>',
            buttons: [{
                    text: "Entendi, quero participar!",
                    handler: function () {
                    }
                }]
        });
        alert.present();
    };
    HomePage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Exemplo de mensagem toasting',
            duration: 3000,
            position: 'top',
            showCloseButton: true,
            closeButtonText: "X"
        });
        toast.present();
    };
    HomePage.prototype.enableBtnContinue = function () {
        this.btnContinueDisabled = false;
    };
    HomePage.prototype.changeZone = function () {
        this.storage.set('isRuralZone', this.isRuralZone ? 1 : 0);
    };
    HomePage.prototype.navigateQuestionaryList = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        this.navCtrl.setRoot('QuestionariesListPage', {}).then(function () { return _this.loader.dismiss(); });
    };
    HomePage.prototype.navigateProfilePage = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        this.navCtrl.setRoot('RespondentProfilePage', {}).then(function () { return _this.loader.dismiss(); });
    };
    HomePage.prototype.removeStoredData = function () {
        var _this = this;
        this.storage.remove('respondent')
            .then(function () {
            _this.storage.remove('plan')
                .then(function () {
                _this.storage.remove('city')
                    .then(function () {
                    _this.storage.remove('isRuralZone')
                        .then(function () {
                        _this.storage.remove('questionaries')
                            .then(function () {
                            _this.storage.remove('metricItems')
                                .then(function () {
                                _this.storage.remove('neighborhoods')
                                    .then(function () {
                                    _this.storage.remove('userType')
                                        .then(function () {
                                        _this.storage.remove('points')
                                            .then(function () {
                                            _this.storage.remove('intro')
                                                .then(function () {
                                                // this.storage.remove('useGame')
                                                //   .then(() => {
                                                _this.storage.remove('helpHome')
                                                    .then(function () {
                                                    console.log("Remoção de dados concluída");
                                                })
                                                    .catch(function (error) {
                                                    console.log(error);
                                                });
                                                // })
                                                // .catch((error) => {
                                                //   console.log(error);
                                                // });
                                            })
                                                .catch(function (error) {
                                                console.log(error);
                                            });
                                        })
                                            .catch(function (error) {
                                            console.log(error);
                                        });
                                    })
                                        .catch(function (error) {
                                        console.log(error);
                                    });
                                })
                                    .catch(function (error) {
                                    console.log(error);
                                });
                            })
                                .catch(function (error) {
                                console.log(error);
                            });
                        })
                            .catch(function (error) {
                            console.log(error);
                        });
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                })
                    .catch(function (error) {
                    console.log(error);
                });
            })
                .catch(function (error) {
                console.log(error);
            });
        })
            .catch(function (error) {
            console.log(error);
        });
        this.getAllCitiesWithPlan();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col offset-2 col-6>\n        <img class="img-responsive" src="assets/imgs/header-logo.png" />\n      </ion-col>\n      <ion-col offset-1 col-2>\n        <button ion-button clear (click)="help()">\n          <ion-icon class="icon-help" name="help-circle"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 text-center class="text-home">\n        <h1>Bem vindo!</h1>\n        <h5>Por favor, nos informe quem é você e selecione uma cidade para responder os questionários.</h5>\n      </ion-col>\n    </ion-row>\n    <ion-row class="margin-top-30-percent">\n      <ion-col col-12>\n\n        <ion-item>\n          <ion-label>Quem é você?</ion-label>\n          <ion-select [(ngModel)]="userType">\n            <ion-option *ngFor="let userType of userTypes" [value]="userType" (ionSelect)="selectUserType(userType)">\n              {{userType.name}}</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item class="margin-top-30">\n          <ion-label>Selecione a cidade</ion-label>\n          <ion-select [(ngModel)]="city" disabled="{{userType == null}}">\n            <ion-option *ngFor="let city of cities" [value]="city" (ionSelect)="getAllPlansByCity(city)">{{city.name}}\n            </ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item class="margin-top-30">\n          <ion-label>Selecione o plano</ion-label>\n          <ion-select [(ngModel)]="plan" disabled="{{city == null}}">\n            <ion-option *ngFor="let plan of plans" [value]="plan"\n              (ionSelect)="getAllQuestionariesByPlan(plan); enableBtnContinue();">{{plan.name}}</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item class="margin-top-30">\n          <ion-label>Você reside em zona rural?</ion-label>\n          <ion-toggle [disabled]="btnContinueDisabled" (ionChange)="changeZone()" [(ngModel)]="isRuralZone"\n            checked="false"></ion-toggle>\n        </ion-item>\n        \n        <button ion-button full class="button-background margin-top-30" (click)="navigateProfilePage()"\n          [disabled]="btnContinueDisabled">Continuar</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_city_city__["a" /* CityProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_plan_plan__["b" /* PlanProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_questionary_questionary__["c" /* QuestionaryProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__providers_rest_rest__["a" /* RestProvider */]])
    ], HomePage);
    return HomePage;
}());

var UserType = /** @class */ (function () {
    function UserType() {
    }
    return UserType;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* unused harmony export APIResponse */
/* unused harmony export AppVersionResponse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jssha__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jssha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jssha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_version__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_intro_intro__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RestProvider = /** @class */ (function () {
    function RestProvider(http, network, alertCtrl, platform, storage, appVersionControl) {
        this.http = http;
        this.network = network;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.storage = storage;
        this.appVersionControl = appVersionControl;
        this.isConnected = true;
        this.createHeader();
        this.connectSubscription();
        this.disconnectSubscription();
        this.checkConnection();
    }
    RestProvider.prototype.checkConnection = function () {
        var _this = this;
        this.isConnected = this.network.type != 'none';
        if (!this.isConnected) {
            this.throwConnectionError();
        }
        else {
            if (this.network.type == 'wifi') {
                new Promise(function (resolve) {
                    _this.http.get("https://api.neiru.org/check-connection.php", { headers: _this.headers })
                        .subscribe(function (data) {
                        resolve(data);
                    }, function (error) {
                        resolve(error);
                    });
                })
                    .then(function (data) {
                    if (!!data && data != null && data.code == 200) {
                    }
                    else {
                        _this.throwConnectionError();
                    }
                })
                    .catch(function () { return _this.throwConnectionError(); });
            }
        }
    };
    RestProvider.prototype.checkConnectionLocalVersion = function (nav) {
        var _this = this;
        this.isConnected = this.network.type != 'none';
        if (!this.isConnected) {
            this.throwConnectionError();
        }
        else {
            if (this.network.type == 'wifi') {
                new Promise(function (resolve) {
                    _this.http.get("https://api.neiru.org/check-connection.php", { headers: _this.headers })
                        .subscribe(function (data) {
                        resolve(data);
                    }, function (error) {
                        resolve(error);
                    });
                })
                    .then(function (data) {
                    if (!!data && data != null && data.code == 200) {
                        if (!!data.response && data.response != null) {
                            var appVersion = data.response.app_version;
                            var createdAt = data.response.created_at;
                            _this.checkLocalVersion(nav, appVersion, createdAt);
                        }
                        else {
                            _this.throwConnectionError();
                        }
                    }
                    else {
                        _this.throwConnectionError();
                    }
                })
                    .catch(function () { return _this.throwConnectionError(); });
            }
        }
    };
    RestProvider.prototype.throwConnectionError = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Sem conexão com internet! <br/> Para acessar o aplicativo é necessário ter conexão com a internet. <br/> Conecte seu dispositivo a internet e tente novamente.',
            buttons: [{
                    text: "Ok",
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }]
        });
        alert.present();
    };
    RestProvider.prototype.checkLocalVersion = function (nav, app_version, created_at) {
        var _this = this;
        this.storage.get("app_version")
            .then(function (data) {
            if (data != null && data.app_version != app_version || created_at != data.created_at) {
                _this.appVersionControl.getVersionNumber().then(function (data) {
                    _this.removeStoredData(nav);
                    _this.setNewVersion(app_version, created_at);
                }).catch(function (error) {
                    _this.removeStoredData(nav);
                    _this.setNewVersion(app_version, created_at);
                });
            }
        })
            .catch(function (error) {
            console.log(error);
            _this.removeStoredData(nav);
            _this.setNewVersion(app_version, created_at);
        });
    };
    RestProvider.prototype.setNewVersion = function (app_version, created_at) {
        var version = new AppVersionResponse();
        version.app_version = app_version;
        version.created_at = created_at;
        this.storage.set("app_version", version);
    };
    RestProvider.prototype.connectSubscription = function () {
        var _this = this;
        this.network.onConnect()
            .subscribe(function () {
            _this.isConnected = true;
        });
    };
    RestProvider.prototype.disconnectSubscription = function () {
        var _this = this;
        this.network.onDisconnect()
            .subscribe(function () {
            _this.isConnected = false;
            _this.throwConnectionError();
        });
    };
    RestProvider.prototype.createHeader = function () {
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        this.headers.append("Accept", 'application/json');
        this.headers.append("Content-Type", 'application/json');
    };
    RestProvider.prototype.cryptography = function (stringToCrypto) {
        var shaObj = new __WEBPACK_IMPORTED_MODULE_4_jssha___default.a("SHA-256", "TEXT");
        shaObj.update(stringToCrypto);
        var hash = shaObj.getHash("HEX");
        return hash;
    };
    RestProvider.prototype.removeStoredData = function (nav) {
        var _this = this;
        this.storage.remove('respondent')
            .then(function () {
            _this.storage.remove('plan')
                .then(function () {
                _this.storage.remove('city')
                    .then(function () {
                    _this.storage.remove('isRuralZone')
                        .then(function () {
                        _this.storage.remove('questionaries')
                            .then(function () {
                            _this.storage.remove('metricItems')
                                .then(function () {
                                _this.storage.remove('neighborhoods')
                                    .then(function () {
                                    _this.storage.remove('userType')
                                        .then(function () {
                                        _this.storage.remove('points')
                                            .then(function () {
                                            _this.storage.remove('intro')
                                                .then(function () {
                                                // this.storage.remove('useGame')
                                                //   .then(() => {
                                                _this.storage.remove('helpHome')
                                                    .then(function () {
                                                    console.log("Remoção de dados concluída");
                                                    nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_intro_intro__["a" /* IntroPage */], {});
                                                })
                                                    .catch(function (error) {
                                                    console.log(error);
                                                });
                                                // })
                                                // .catch((error) => {
                                                //   console.log(error);
                                                // });
                                            })
                                                .catch(function (error) {
                                                console.log(error);
                                            });
                                        })
                                            .catch(function (error) {
                                            console.log(error);
                                        });
                                    })
                                        .catch(function (error) {
                                        console.log(error);
                                    });
                                })
                                    .catch(function (error) {
                                    console.log(error);
                                });
                            })
                                .catch(function (error) {
                                console.log(error);
                            });
                        })
                            .catch(function (error) {
                            console.log(error);
                        });
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                })
                    .catch(function (error) {
                    console.log(error);
                });
            })
                .catch(function (error) {
                console.log(error);
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_version__["a" /* AppVersion */]])
    ], RestProvider);
    return RestProvider;
}());

var APIResponse = /** @class */ (function () {
    function APIResponse() {
    }
    return APIResponse;
}());

var AppVersionResponse = /** @class */ (function () {
    function AppVersionResponse() {
    }
    return AppVersionResponse;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		291,
		5
	],
	"../pages/intro/intro.module": [
		293,
		6
	],
	"../pages/prioritization/prioritization.module": [
		296,
		4
	],
	"../pages/questionaries-list/questionaries-list.module": [
		294,
		3
	],
	"../pages/questionary/questionary.module": [
		295,
		2
	],
	"../pages/respondent-profile/respondent-profile.module": [
		297,
		0
	],
	"../pages/thankyou/thankyou.module": [
		292,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrioritizationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_rest__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrioritizationProvider = /** @class */ (function () {
    function PrioritizationProvider(http, restProvider) {
        this.http = http;
        this.restProvider = restProvider;
    }
    //-----------------------------IMPORTANTE-----------------------------
    PrioritizationProvider.prototype.getMetricItems = function (metricId) {
        var _this = this;
        return new Promise(function (resolve) {
            //metricID : 1 - GUT | 2 - Escala qualitativa | (3-18) - Métricas do questionário de teste
            _this.http.get("https://api.neiru.org/get-metric-items-by-metric.php?metric=" + metricId, { headers: _this.restProvider.headers })
                .subscribe(function (data) {
                // Metric Itens temporários [x]
                //------------------TEMPORÁRIO-------------------
                var itens = [];
                switch (metricId) {
                    case "3":
                        var item2 = {
                            id: "5",
                            name: "Frequência Semanal",
                            metric_id: "3",
                            metricValues: []
                        };
                        itens.push(item2);
                        data = itens;
                        break;
                    case "4":
                        var item3 = {
                            id: "6",
                            name: "Atrações do Centro",
                            metric_id: "4",
                            metricValues: []
                        };
                        itens.push(item3);
                        data = itens;
                        break;
                    case "5":
                        var item4 = {
                            id: "7",
                            name: "Motivos de não ir ao centro",
                            metric_id: "5",
                            metricValues: []
                        };
                        itens.push(item4);
                        data = itens;
                        break;
                    case "6":
                        var item5 = {
                            id: "8",
                            name: "Atrações do Centro 2",
                            metric_id: "6",
                            metricValues: []
                        };
                        itens.push(item5);
                        data = itens;
                        break;
                    case "7":
                        var item6 = {
                            id: "9",
                            name: "Necessidades do Centro",
                            metric_id: "7",
                            metricValues: []
                        };
                        itens.push(item6);
                        data = itens;
                        break;
                    case "8":
                        var item7 = {
                            id: "10",
                            name: "Escala de Satisfação",
                            metric_id: "8",
                            metricValues: []
                        };
                        itens.push(item7);
                        data = itens;
                        break;
                    case "9":
                        var item8 = {
                            id: "11",
                            name: "Necessidade de Requalificação",
                            metric_id: "9",
                            metricValues: []
                        };
                        itens.push(item8);
                        data = itens;
                        break;
                    case "10":
                        var item9 = {
                            id: "12",
                            name: "Avaliação do comerciante",
                            metric_id: "10",
                            metricValues: []
                        };
                        itens.push(item9);
                        data = itens;
                        break;
                    case "11":
                        var item10 = {
                            id: "13",
                            name: "Melhorias para o comerciante",
                            metric_id: "11",
                            metricValues: []
                        };
                        itens.push(item10);
                        data = itens;
                        break;
                    case "12":
                        var item11 = {
                            id: "14",
                            name: "Atividades exercidas pelos pedestres",
                            metric_id: "12",
                            metricValues: []
                        };
                        itens.push(item11);
                        data = itens;
                        break;
                    case "13":
                        var item12 = {
                            id: "15",
                            name: "Pontos fortes para o comerciante",
                            metric_id: "13",
                            metricValues: []
                        };
                        itens.push(item12);
                        data = itens;
                        break;
                    case "14":
                        var item13 = {
                            id: "16",
                            name: "Pontos fracos para o comerciante",
                            metric_id: "14",
                            metricValues: []
                        };
                        itens.push(item13);
                        data = itens;
                        break;
                    case "15":
                        var item14 = {
                            id: "17",
                            name: "Atividades dos pedestres no Centro",
                            metric_id: "15",
                            metricValues: []
                        };
                        itens.push(item14);
                        data = itens;
                        break;
                    case "16":
                        var item15 = {
                            id: "18",
                            name: "Pontos fortes da rua",
                            metric_id: "16",
                            metricValues: []
                        };
                        itens.push(item15);
                        data = itens;
                        break;
                    case "17":
                        var item16 = {
                            id: "19",
                            name: "Pontos fracos da rua",
                            metric_id: "17",
                            metricValues: []
                        };
                        itens.push(item16);
                        data = itens;
                        break;
                    case "18":
                        var item17 = {
                            id: "20",
                            name: "Escala de concordancia",
                            metric_id: "18",
                            metricValues: []
                        };
                        itens.push(item17);
                        data = itens;
                        break;
                    case "19":
                        var item18 = {
                            id: "21",
                            name: "Frequência de uso dos espaços públicos",
                            metric_id: "19",
                            metricValues: []
                        };
                        itens.push(item18);
                        data = itens;
                        break;
                }
                //------------------TEMPORÁRIO-------------------
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    //-----------------------------IMPORTANTE-----------------------------
    PrioritizationProvider.prototype.getMetricValues = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("https://api.neiru.org/get-all-metric-values.php", { headers: _this.restProvider.headers })
                .subscribe(function (data) {
                // Metric values temporários [x]
                //------------------TEMPORÁRIO-------------------
                data = _this.resolveItens(data);
                //------------------TEMPORÁRIO-------------------
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    //Adição de itens em tempo de execução
    //------------------TEMPORÁRIO-------------------
    PrioritizationProvider.prototype.resolveItens = function (data) {
        var metrics = [];
        for (var i = 0; i < data.length; i++) {
            metrics.push(data[i]);
        }
        var m21 = {
            id: "21",
            name: "1 vez por semana",
            value: "1",
            metricItemId: "5",
            icon: "1.png",
            iconSelected: "1-selected.png"
        };
        metrics.push(m21);
        var m22 = {
            id: "22",
            name: "De 2 a 3 vezes por semana",
            value: "2",
            metricItemId: "5",
            icon: "2.png",
            iconSelected: "2-selected.png"
        };
        metrics.push(m22);
        var m23 = {
            id: "23",
            name: "De 4 a 5 vezes por semana",
            value: "3",
            metricItemId: "5",
            icon: "3.png",
            iconSelected: "3-selected.png"
        };
        metrics.push(m23);
        var m24 = {
            id: "24",
            name: "De 6 a 7 vezes por semana",
            value: "4",
            metricItemId: "5",
            icon: "4.png",
            iconSelected: "4-selected.png"
        };
        metrics.push(m24);
        var m25 = {
            id: "25",
            name: "Mais de 7 vezes por semana",
            value: "5",
            metricItemId: "5",
            icon: "5.png",
            iconSelected: "5-selected.png"
        };
        metrics.push(m25);
        var m26 = {
            id: "26",
            name: "Moro aqui",
            value: "1",
            metricItemId: "6",
            icon: "1.png",
            iconSelected: "1-selected.png"
        };
        metrics.push(m26);
        var m27 = {
            id: "27",
            name: "Trabalho aqui",
            value: "2",
            metricItemId: "6",
            icon: "2.png",
            iconSelected: "2-selected.png"
        };
        metrics.push(m27);
        var m28 = {
            id: "28",
            name: "Venho fazer compras",
            value: "3",
            metricItemId: "6",
            icon: "3.png",
            iconSelected: "3-selected.png"
        };
        metrics.push(m28);
        var m29 = {
            id: "29",
            name: "Venho por lazer",
            value: "4",
            metricItemId: "6",
            icon: "4.png",
            iconSelected: "4-selected.png"
        };
        metrics.push(m29);
        var m30 = {
            id: "30",
            name: "Nenhuma das anteriores",
            value: "5",
            metricItemId: "6",
            icon: "5.png",
            iconSelected: "5-selected.png"
        };
        metrics.push(m30);
        var m31 = {
            id: "31",
            name: "Falta de segurança",
            value: "1",
            metricItemId: "7",
            icon: "1.png",
            iconSelected: "1-selected.png"
        };
        metrics.push(m31);
        var m32 = {
            id: "32",
            name: "Faltam opções de lazer à noite",
            value: "2",
            metricItemId: "7",
            icon: "2.png",
            iconSelected: "2-selected.png"
        };
        metrics.push(m32);
        var m33 = {
            id: "33",
            name: "Não moro no centro e não tem transporte público adequado para me locomover até lá",
            value: "3",
            metricItemId: "7",
            icon: "3.png",
            iconSelected: "3-selected.png"
        };
        metrics.push(m33);
        var m132 = {
            id: "131",
            name: "Nenhuma das anteriores",
            value: "4",
            metricItemId: "7",
            icon: "4.png",
            iconSelected: "4-selected.png"
        };
        metrics.push(m132);
        var m34 = {
            id: "34",
            name: "Parques e Praças",
            value: "1",
            metricItemId: "8",
            icon: "1.png",
            iconSelected: "1-selected.png"
        };
        metrics.push(m34);
        var m35 = {
            id: "35",
            name: "Equipamentos desportivos",
            value: "2",
            metricItemId: "8",
            icon: "2.png",
            iconSelected: "2-selected.png"
        };
        metrics.push(m35);
        var m36 = {
            id: "36",
            name: "Serviços de saúde",
            value: "3",
            metricItemId: "8",
            icon: "3.png",
            iconSelected: "3-selected.png"
        };
        metrics.push(m36);
        var m37 = {
            id: "37",
            name: "Serviços públicos",
            value: "4",
            metricItemId: "8",
            icon: "4.png",
            iconSelected: "4-selected.png"
        };
        metrics.push(m37);
        var m38 = {
            id: "38",
            name: "Atrações culturais",
            value: "5",
            metricItemId: "8",
            icon: "5.png",
            iconSelected: "5-selected.png"
        };
        metrics.push(m38);
        var m39 = {
            id: "39",
            name: "Comércio de primeira necessidade: Mercado, Padaria e Farmácia",
            value: "6",
            metricItemId: "8",
            icon: "6.png",
            iconSelected: "6-selected.png"
        };
        metrics.push(m39);
        var m40 = {
            id: "40",
            name: "Comércio de menor necessidade: Lojas de roupas e eletrodomésticos",
            value: "7",
            metricItemId: "8",
            icon: "7.png",
            iconSelected: "7-selected.png"
        };
        metrics.push(m40);
        var m41 = {
            id: "41",
            name: "Cafés, restaurantes ou bares",
            value: "8",
            metricItemId: "8",
            icon: "8.png",
            iconSelected: "8-selected.png"
        };
        metrics.push(m41);
        var m42 = {
            id: "42",
            name: "Nenhuma das anteriores",
            value: "9",
            metricItemId: "8",
            icon: "9.png",
            iconSelected: "9-selected.png"
        };
        metrics.push(m42);
        var m43 = {
            id: "43",
            name: "Habitação",
            value: "1",
            metricItemId: "9",
            icon: "1.png",
            iconSelected: "1-selected.png"
        };
        metrics.push(m43);
        var m44 = {
            id: "44",
            name: "Emprego",
            value: "2",
            metricItemId: "9",
            icon: "2.png",
            iconSelected: "2-selected.png"
        };
        metrics.push(m44);
        var m45 = {
            id: "45",
            name: "Cultura e lazer",
            value: "3",
            metricItemId: "9",
            icon: "3.png",
            iconSelected: "3-selected.png"
        };
        metrics.push(m45);
        var m46 = {
            id: "46",
            name: "Segurança",
            value: "4",
            metricItemId: "9",
            icon: "4.png",
            iconSelected: "4-selected.png"
        };
        metrics.push(m46);
        var m47 = {
            id: "47",
            name: "Infraestruturas básicas",
            value: "5",
            metricItemId: "9",
            icon: "5.png",
            iconSelected: "5-selected.png"
        };
        metrics.push(m47);
        var m48 = {
            id: "48",
            name: "Serviços de Saúde",
            value: "6",
            metricItemId: "9",
            icon: "6.png",
            iconSelected: "6-selected.png"
        };
        metrics.push(m48);
        var m49 = {
            id: "49",
            name: "Comércio e Serviços",
            value: "7",
            metricItemId: "9",
            icon: "7.png",
            iconSelected: "7-selected.png"
        };
        metrics.push(m49);
        var m50 = {
            id: "50",
            name: "Vagas e locais de estacionamento",
            value: "8",
            metricItemId: "9",
            icon: "8.png",
            iconSelected: "8-selected.png"
        };
        metrics.push(m50);
        var m51 = {
            id: "51",
            name: "Nenhuma das anteriores",
            value: "9",
            metricItemId: "9",
            icon: "9.png",
            iconSelected: "9-selected.png"
        };
        metrics.push(m51);
        var m52 = {
            id: "52",
            name: "Muito satisfeito",
            value: "1",
            metricItemId: "10",
            icon: "1.png",
            iconSelected: "1-selected.png"
        };
        metrics.push(m52);
        var m53 = {
            id: "53",
            name: "Satisfeito",
            value: "2",
            metricItemId: "10",
            icon: "2.png",
            iconSelected: "2-selected.png"
        };
        metrics.push(m53);
        var m54 = {
            id: "54",
            name: "Indiferente",
            value: "3",
            metricItemId: "10",
            icon: "3.png",
            iconSelected: "3-selected.png"
        };
        metrics.push(m54);
        var m55 = {
            id: "55",
            name: "Insatisfeito",
            value: "4",
            metricItemId: "10",
            icon: "4.png",
            iconSelected: "4-selected.png"
        };
        metrics.push(m55);
        var m56 = {
            id: "56",
            name: "Muito insatisfeito",
            value: "5",
            metricItemId: "10",
            icon: "5.png",
            iconSelected: "5-selected.png"
        };
        metrics.push(m56);
        var m57 = {
            id: "57",
            name: "Muito necessárias",
            value: "1",
            metricItemId: "11",
            icon: "1.png",
            iconSelected: "1-selected.png"
        };
        metrics.push(m57);
        var m58 = {
            id: "58",
            name: "Medianamente necessárias",
            value: "2",
            metricItemId: "11",
            icon: "2.png",
            iconSelected: "2-selected.png"
        };
        metrics.push(m58);
        var m59 = {
            id: "59",
            name: "Indiferente",
            value: "3",
            metricItemId: "11",
            icon: "3.png",
            iconSelected: "3-selected.png"
        };
        metrics.push(m59);
        var m60 = {
            id: "60",
            name: "Pouco necessárias",
            value: "4",
            metricItemId: "11",
            icon: "4.png",
            iconSelected: "4-selected.png"
        };
        metrics.push(m60);
        var m61 = {
            id: "61",
            name: "Não são necessárias",
            value: "5",
            metricItemId: "11",
            icon: "5.png",
            iconSelected: "5-selected.png"
        };
        metrics.push(m61);
        var m62 = {
            id: "62",
            name: "Muito bom",
            value: "1",
            metricItemId: "12",
            icon: "1.png",
            iconSelected: "1-selected.png"
        };
        metrics.push(m62);
        var m63 = {
            id: "63",
            name: "Bom",
            value: "2",
            metricItemId: "12",
            icon: "2.png",
            iconSelected: "2-selected.png"
        };
        metrics.push(m63);
        var m64 = {
            id: "64",
            name: "Indiferente",
            value: "3",
            metricItemId: "12",
            icon: "3.png",
            iconSelected: "3-selected.png"
        };
        metrics.push(m64);
        var m65 = {
            id: "65",
            name: "Ruim",
            value: "4",
            metricItemId: "12",
            icon: "4.png",
            iconSelected: "4-selected.png"
        };
        metrics.push(m65);
        var m66 = {
            id: "66",
            name: "Péssima",
            value: "5",
            metricItemId: "12",
            icon: "5.png",
            iconSelected: "5-selected.png"
        };
        metrics.push(m66);
        var m67 = {
            id: "67",
            name: "Não existem",
            value: "6",
            metricItemId: "12",
            icon: "6.png",
            iconSelected: "6-selected.png"
        };
        metrics.push(m67);
        var m68 = {
            id: "68",
            name: "Muito necessário",
            value: "1",
            metricItemId: "13",
            icon: "1.png",
            iconSelected: "1-selected.png"
        };
        metrics.push(m68);
        var m69 = {
            id: "69",
            name: "Necessário",
            value: "2",
            metricItemId: "13",
            icon: "2.png",
            iconSelected: "2-selected.png"
        };
        metrics.push(m69);
        var m70 = {
            id: "70",
            name: "Indiferente",
            value: "3",
            metricItemId: "13",
            icon: "3.png",
            iconSelected: "3-selected.png"
        };
        metrics.push(m70);
        var m71 = {
            id: "71",
            name: "Não necessário",
            value: "4",
            metricItemId: "13",
            icon: "5.png",
            iconSelected: "5-selected.png"
        };
        metrics.push(m71);
        var m72 = {
            id: "72",
            name: "Comércio atacadista",
            value: "1",
            metricItemId: "14",
            icon: "1.png",
            iconSelected: "1-selected.png"
        };
        metrics.push(m72);
        var m73 = {
            id: "73",
            name: "Comércio varejista",
            value: "2",
            metricItemId: "14",
            icon: "2.png",
            iconSelected: "2-selected.png"
        };
        metrics.push(m73);
        var m74 = {
            id: "74",
            name: "Restaurante",
            value: "3",
            metricItemId: "14",
            icon: "3.png",
            iconSelected: "3-selected.png"
        };
        metrics.push(m74);
        var m75 = {
            id: "75",
            name: "Supermercado",
            value: "4",
            metricItemId: "14",
            icon: "4.png",
            iconSelected: "4-selected.png"
        };
        metrics.push(m75);
        var m76 = {
            id: "76",
            name: "Centro de saúde",
            value: "5",
            metricItemId: "14",
            icon: "5.png",
            iconSelected: "5-selected.png"
        };
        metrics.push(m76);
        var m77 = {
            id: "77",
            name: "Escola",
            value: "6",
            metricItemId: "14",
            icon: "6.png",
            iconSelected: "6-selected.png"
        };
        metrics.push(m77);
        var m137 = {
            id: "137",
            name: "Prestação de serviços",
            value: "7",
            metricItemId: "14",
            icon: "7.png",
            iconSelected: "7-selected.png"
        };
        metrics.push(m137);
        var m138 = {
            id: "138",
            name: "Agencia bancária",
            value: "8",
            metricItemId: "14",
            icon: "8.png",
            iconSelected: "8-selected.png"
        };
        metrics.push(m138);
        var m78 = {
            id: "78",
            name: "Segurança",
            value: "1",
            metricItemId: "15",
            icon: "1.png",
            iconSelected: "1-selected.png"
        };
        metrics.push(m78);
        var m79 = {
            id: "79",
            name: "Infraestrutura básica",
            value: "2",
            metricItemId: "15",
            icon: "2.png",
            iconSelected: "2-selected.png"
        };
        metrics.push(m79);
        var m80 = {
            id: "80",
            name: "Circulação de pedestres",
            value: "3",
            metricItemId: "15",
            icon: "3.png",
            iconSelected: "3-selected.png"
        };
        metrics.push(m80);
        var m81 = {
            id: "81",
            name: "Circulação de veículos e estacionamento",
            value: "4",
            metricItemId: "15",
            icon: "4.png",
            iconSelected: "4-selected.png"
        };
        metrics.push(m81);
        var m82 = {
            id: "82",
            name: "Conservação das fachadas",
            value: "5",
            metricItemId: "15",
            icon: "5.png",
            iconSelected: "5-selected.png"
        };
        metrics.push(m82);
        var m83 = {
            id: "83",
            name: "Identidade cultural e histórica",
            value: "6",
            metricItemId: "15",
            icon: "6.png",
            iconSelected: "6-selected.png"
        };
        metrics.push(m83);
        var m84 = {
            id: "84",
            name: "Disponibilidade de local",
            value: "7",
            metricItemId: "15",
            icon: "7.png",
            iconSelected: "7-selected.png"
        };
        metrics.push(m84);
        var m85 = {
            id: "85",
            name: "Padronização de fachadas comerciais",
            value: "1",
            metricItemId: "16",
            icon: "1.png",
            iconSelected: "1-selected.png"
        };
        metrics.push(m85);
        var m86 = {
            id: "86",
            name: "Incentivo à circulação de pedestres",
            value: "2",
            metricItemId: "16",
            icon: "2.png",
            iconSelected: "2-selected.png"
        };
        metrics.push(m86);
        var m87 = {
            id: "87",
            name: "Melhora nas vias de circulação de veículos e ciclovias",
            value: "3",
            metricItemId: "16",
            icon: "3.png",
            iconSelected: "3-selected.png"
        };
        metrics.push(m87);
        var m88 = {
            id: "88",
            name: "Conservação/recuperação das fachadas dos edifícios",
            value: "4",
            metricItemId: "16",
            icon: "4.png",
            iconSelected: "4-selected.png"
        };
        metrics.push(m88);
        var m89 = {
            id: "89",
            name: "Aumento/criação de espaços de cultura e lazer",
            value: "5",
            metricItemId: "16",
            icon: "5.png",
            iconSelected: "5-selected.png"
        };
        metrics.push(m89);
        var m90 = {
            id: "90",
            name: "Aumento/criação de espaços verdes",
            value: "6",
            metricItemId: "16",
            icon: "6.png",
            iconSelected: "6-selected.png"
        };
        metrics.push(m90);
        var m91 = {
            id: "91",
            name: "Estacionamento",
            value: "7",
            metricItemId: "16",
            icon: "7.png",
            iconSelected: "7-selected.png"
        };
        metrics.push(m91);
        var m92 = {
            id: "92",
            name: "Trânsito",
            value: "8",
            metricItemId: "16",
            icon: "8.png",
            iconSelected: "8-selected.png"
        };
        metrics.push(m92);
        var m93 = {
            id: "93",
            name: "Limpeza das ruas",
            value: "9",
            metricItemId: "16",
            icon: "9.png",
            iconSelected: "9-selected.png"
        };
        metrics.push(m93);
        var m94 = {
            id: "94",
            name: "Coleta de lixo ",
            value: "10",
            metricItemId: "16",
            icon: "10.png",
            iconSelected: "10-selected.png"
        };
        metrics.push(m94);
        var m95 = {
            id: "95",
            name: "Iluminação",
            value: "11",
            metricItemId: "16",
            icon: "11.png",
            iconSelected: "11-selected.png"
        };
        metrics.push(m95);
        var m96 = {
            id: "96",
            name: "Saneamento básico",
            value: "12",
            metricItemId: "16",
            icon: "12.png",
            iconSelected: "12-selected.png"
        };
        metrics.push(m96);
        var m97 = {
            id: "97",
            name: "Comprar itens de primeira necessidade: medicamentos, alimentos",
            value: "1",
            metricItemId: "17",
            icon: "1.png",
            iconSelected: "1-selected.png"
        };
        metrics.push(m97);
        var m98 = {
            id: "98",
            name: "Comprar itens de menor necessidade: roupas, eletrodomésticos",
            value: "2",
            metricItemId: "17",
            icon: "2.png",
            iconSelected: "2-selected.png"
        };
        metrics.push(m98);
        var m99 = {
            id: "99",
            name: "Participar de atividades culturais e lazer",
            value: "3",
            metricItemId: "17",
            icon: "3.png",
            iconSelected: "3-selected.png"
        };
        metrics.push(m99);
        var m100 = {
            id: "100",
            name: "Frequentar ambientes de permanência: parques e praças",
            value: "4",
            metricItemId: "17",
            icon: "4.png",
            iconSelected: "4-selected.png"
        };
        metrics.push(m100);
        var m101 = {
            id: "101",
            name: "Nenhum dos anteriores",
            value: "5",
            metricItemId: "17",
            icon: "5.png",
            iconSelected: "5-selected.png"
        };
        metrics.push(m101);
        var m102 = {
            id: "102",
            name: "Fachadas e edifícios conservados",
            value: "1",
            metricItemId: "18",
            icon: "1.png",
            iconSelected: "1-selected.png"
        };
        metrics.push(m102);
        var m103 = {
            id: "103",
            name: "Trânsito fluido",
            value: "2",
            metricItemId: "18",
            icon: "2.png",
            iconSelected: "2-selected.png"
        };
        metrics.push(m103);
        var m104 = {
            id: "104",
            name: "Vagas e locais de estacionamento",
            value: "3",
            metricItemId: "18",
            icon: "3.png",
            iconSelected: "3-selected.png"
        };
        metrics.push(m104);
        var m105 = {
            id: "105",
            name: "Limpeza das ruas",
            value: "4",
            metricItemId: "18",
            icon: "4.png",
            iconSelected: "4-selected.png"
        };
        metrics.push(m105);
        var m106 = {
            id: "106",
            name: "Coleta de lixo",
            value: "5",
            metricItemId: "18",
            icon: "5.png",
            iconSelected: "5-selected.png"
        };
        metrics.push(m106);
        var m107 = {
            id: "107",
            name: "Saneamento básico",
            value: "6",
            metricItemId: "18",
            icon: "6.png",
            iconSelected: "6-selected.png"
        };
        metrics.push(m107);
        var m108 = {
            id: "108",
            name: "Iluminação",
            value: "7",
            metricItemId: "18",
            icon: "7.png",
            iconSelected: "7-selected.png"
        };
        metrics.push(m108);
        var m109 = {
            id: "109",
            name: "Espaços verdes",
            value: "8",
            metricItemId: "18",
            icon: "8.png",
            iconSelected: "8-selected.png"
        };
        metrics.push(m109);
        var m110 = {
            id: "110",
            name: "Áreas de cultura e lazer",
            value: "9",
            metricItemId: "18",
            icon: "9.png",
            iconSelected: "9-selected.png"
        };
        metrics.push(m110);
        var m111 = {
            id: "111",
            name: "Ciclovias",
            value: "10",
            metricItemId: "18",
            icon: "10.png",
            iconSelected: "10-selected.png"
        };
        metrics.push(m111);
        var m112 = {
            id: "112",
            name: "Boas relações entre a vizinhança",
            value: "11",
            metricItemId: "18",
            icon: "11.png",
            iconSelected: "11-selected.png"
        };
        metrics.push(m112);
        var m113 = {
            id: "113",
            name: "Circulação de pedestres",
            value: "12",
            metricItemId: "18",
            icon: "12.png",
            iconSelected: "12-selected.png"
        };
        metrics.push(m113);
        var m114 = {
            id: "114",
            name: "Localização e acesso",
            value: "13",
            metricItemId: "18",
            icon: "13.png",
            iconSelected: "13-selected.png"
        };
        metrics.push(m114);
        var m115 = {
            id: "115",
            name: "Fiação excessiva",
            value: "1",
            metricItemId: "19",
            icon: "1.png",
            iconSelected: "1-selected.png"
        };
        metrics.push(m115);
        var m116 = {
            id: "116",
            name: "Degradação de fachadas e edifícios",
            value: "2",
            metricItemId: "19",
            icon: "2.png",
            iconSelected: "2-selected.png"
        };
        metrics.push(m116);
        var m117 = {
            id: "117",
            name: "Trânsito congestionado",
            value: "3",
            metricItemId: "19",
            icon: "3.png",
            iconSelected: "3-selected.png"
        };
        metrics.push(m117);
        var m118 = {
            id: "118",
            name: "Limpeza das ruas insuficiente",
            value: "5",
            metricItemId: "19",
            icon: "5.png",
            iconSelected: "5-selected.png"
        };
        metrics.push(m118);
        var m119 = {
            id: "119",
            name: "Saneamento básico insuficiente",
            value: "6",
            metricItemId: "19",
            icon: "6.png",
            iconSelected: "6-selected.png"
        };
        metrics.push(m119);
        var m120 = {
            id: "120",
            name: "Iluminação precária",
            value: "7",
            metricItemId: "19",
            icon: "7.png",
            iconSelected: "7-selected.png"
        };
        metrics.push(m120);
        var m121 = {
            id: "121",
            name: "Espaços verdes insuficientes",
            value: "8",
            metricItemId: "19",
            icon: "8.png",
            iconSelected: "8-selected.png"
        };
        metrics.push(m121);
        var m122 = {
            id: "122",
            name: "Áreas de cultura e lazer insuficientes",
            value: "9",
            metricItemId: "19",
            icon: "9.png",
            iconSelected: "9-selected.png"
        };
        metrics.push(m122);
        var m123 = {
            id: "123",
            name: "Ciclovias insuficientes",
            value: "10",
            metricItemId: "19",
            icon: "10.png",
            iconSelected: "10-selected.png"
        };
        metrics.push(m123);
        var m124 = {
            id: "124",
            name: "Más relações entre a vizinhança",
            value: "11",
            metricItemId: "19",
            icon: "11.png",
            iconSelected: "11-selected.png"
        };
        metrics.push(m124);
        var m125 = {
            id: "125",
            name: "Falta de circulação de pedestres ",
            value: "12",
            metricItemId: "19",
            icon: "12.png",
            iconSelected: "12-selected.png"
        };
        metrics.push(m125);
        var m126 = {
            id: "126",
            name: "Localização e acesso",
            value: "13",
            metricItemId: "19",
            icon: "13.png",
            iconSelected: "13-selected.png"
        };
        metrics.push(m126);
        var m139 = {
            id: "139",
            name: "Vagas e locais de estacionamento insuficientes",
            value: "14",
            metricItemId: "19",
            icon: "14.png",
            iconSelected: "14-selected.png"
        };
        metrics.push(m139);
        var m140 = {
            id: "140",
            name: "Coleta de lixo insuficiente",
            value: "15",
            metricItemId: "19",
            icon: "15.png",
            iconSelected: "15-selected.png"
        };
        metrics.push(m140);
        var m127 = {
            id: "127",
            name: "Concordo Totalmente",
            value: "1",
            metricItemId: "20",
            icon: "1.png",
            iconSelected: "1-selected.png"
        };
        metrics.push(m127);
        var m128 = {
            id: "128",
            name: "Concordo",
            value: "2",
            metricItemId: "20",
            icon: "2.png",
            iconSelected: "2-selected.png"
        };
        metrics.push(m128);
        var m129 = {
            id: "129",
            name: "Nem concordo nem discordo",
            value: "3",
            metricItemId: "20",
            icon: "3.png",
            iconSelected: "3-selected.png"
        };
        metrics.push(m129);
        var m130 = {
            id: "130",
            name: "Discordo",
            value: "4",
            metricItemId: "20",
            icon: "4.png",
            iconSelected: "4-selected.png"
        };
        metrics.push(m130);
        var m131 = {
            id: "131",
            name: "Discordo Totalmente",
            value: "5",
            metricItemId: "20",
            icon: "5.png",
            iconSelected: "5-selected.png"
        };
        metrics.push(m131);
        var me132 = {
            id: "132",
            name: "Uso sempre",
            value: "1",
            metricItemId: "21",
            icon: "1.png",
            iconSelected: "1-selected.png"
        };
        metrics.push(me132);
        var m133 = {
            id: "133",
            name: "Uso bastante",
            value: "2",
            metricItemId: "21",
            icon: "2.png",
            iconSelected: "2-selected.png"
        };
        metrics.push(m133);
        var m134 = {
            id: "134",
            name: "Uso moderadamente",
            value: "3",
            metricItemId: "21",
            icon: "3.png",
            iconSelected: "3-selected.png"
        };
        metrics.push(m134);
        var m135 = {
            id: "135",
            name: "Uso pouco",
            value: "4",
            metricItemId: "21",
            icon: "4.png",
            iconSelected: "4-selected.png"
        };
        metrics.push(m135);
        var m136 = {
            id: "136",
            name: "Não uso",
            value: "5",
            metricItemId: "21",
            icon: "5.png",
            iconSelected: "5-selected.png"
        };
        metrics.push(m136);
        return metrics;
    };
    PrioritizationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__rest_rest__["a" /* RestProvider */]])
    ], PrioritizationProvider);
    return PrioritizationProvider;
}());

//# sourceMappingURL=prioritization.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_rest__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionProvider = /** @class */ (function () {
    function QuestionProvider(http, restProvider) {
        this.http = http;
        this.restProvider = restProvider;
    }
    QuestionProvider.prototype.getAllQuestionsByQuestionary = function (questionary, isRuralZone) {
        var _this = this;
        return new Promise(function (resolve) {
            //Essa api que vai ser alterada para vir com atributo Answered (true, false)
            _this.http.get("https://api.neiru.org/get-all-questions-by-questionary.php?questionary=" + questionary.id + "&isRuralZone=" + isRuralZone, { headers: _this.restProvider.headers })
                .subscribe(function (data) {
                // Questões temporárias [x]
                //-----------------TEMPORÁRIO-------------------
                //Diagnóstico Geral
                if (questionary.id == 666) {
                    var questions = [];
                    var q1 = {
                        id: "1001",
                        name: "1.	Com qual frequência você vai ao centro?",
                        description: "",
                        question: "1.	Com qual frequência você vai ao centro? (Game)",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: "3"
                    };
                    questions.push(q1);
                    var q2 = {
                        id: "1002",
                        name: "2.	O que te trás ao centro?",
                        description: "",
                        question: "2.	O que te trás ao centro? (Game)",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: "4"
                    };
                    questions.push(q2);
                    var q3 = {
                        id: "1003",
                        name: "3.	Com qual frequência você vai ao centro à noite?",
                        description: "",
                        question: "3.	Com qual frequência você vai ao centro à noite? (Game)",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: "3"
                    };
                    questions.push(q3);
                    var q4 = {
                        id: "1004",
                        name: "4.	Caso você tenha algum motivo para não ir ao centro à noite, qual seria?",
                        description: "Selecione abaixo",
                        question: "4.	Caso você tenha algum motivo para não ir ao centro à noite, qual seria? (Game)",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: "5"
                    };
                    questions.push(q4);
                    var q5 = {
                        id: "1005",
                        name: "5.	O que te atrai para o centro?",
                        description: "Selecione abaixo",
                        question: "5.	O que te atrai para o centro? (Game)",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: "6"
                    };
                    questions.push(q5);
                    var q6 = {
                        id: "1006",
                        name: "6.	O que falta no centro?",
                        description: "Selecione abaixo",
                        question: "6.	O que falta no centro? (Game)",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: "7"
                    };
                    questions.push(q6);
                    var q7 = {
                        id: "1007",
                        name: "7.	Como você qualifica os pontos comerciais no centro?",
                        description: "Selecione abaixo",
                        question: "7.	Como você qualifica os pontos comerciais no centro? (Game)",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: "8"
                    };
                    questions.push(q7);
                    questions = _this.resolveNarrative(questions);
                    data = questions;
                }
                //Diagnóstico Específico
                if (questionary.id == 661) {
                    var questions = [];
                    var q1 = {
                        id: "1008",
                        name: "1.	Costuma usufruir dos espaços públicos no centro? (Espaços públicos entende-se como calçada, rua, praças e parques)",
                        description: "",
                        question: "1.	Costuma usufruir dos espaços públicos no centro? (Espaços públicos entende-se como calçada, rua, praças e parques)",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: "19"
                    };
                    questions.push(q1);
                    var q2 = {
                        id: "1009",
                        name: "2.	Como considera as obras de requalificação urbana no centro?",
                        description: "",
                        question: "2.	Como considera as obras de requalificação urbana no centro?",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: "9"
                    };
                    questions.push(q2);
                    var q3 = {
                        id: "1010",
                        name: "3.	Como você avalia a qualidade da calçada?",
                        description: "",
                        question: "3.	Como você avalia a qualidade da calçada?",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: "10"
                    };
                    questions.push(q3);
                    var q4 = {
                        id: "1011",
                        name: "4.	Como você avalia as rampas de acessibilidade?",
                        description: "",
                        question: "4.	Como você avalia as rampas de acessibilidade?",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: "10"
                    };
                    questions.push(q4);
                    var q5 = {
                        id: "1012",
                        name: "5.	Como você avalia os pisos táteis? (Pisos táteis são faixas em alto-relevo fixadas no chão para fornecer auxílio à locomoção de pessoas com deficiência visual)",
                        description: "",
                        question: "5.	Como você avalia os pisos táteis? (Pisos táteis são faixas em alto-relevo fixadas no chão para fornecer auxílio à locomoção de pessoas com deficiência visual)",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: "10"
                    };
                    questions.push(q5);
                    var q6 = {
                        id: "1013",
                        name: "6.	Você acha que existem vagas de estacionamento suficientes?",
                        description: "",
                        question: "6.	Você acha que existem vagas de estacionamento suficientes?",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: null
                    };
                    questions.push(q6);
                    var q7 = {
                        id: "1014",
                        name: "7.	Como você avalia a necessidade destes equipamentos? (Locais de descanso)",
                        description: "",
                        question: "7.	Como você avalia a necessidade destes equipamentos? (Locais de descanso)",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: "11"
                    };
                    questions.push(q7);
                    var q8 = {
                        id: "1015",
                        name: "8.	Como você avalia a necessidade destes equipamentos? (Lixeiras)",
                        description: "",
                        question: "8.	Como você avalia a necessidade destes equipamentos? (Lixeiras)",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: "11"
                    };
                    questions.push(q8);
                    var q9 = {
                        id: "1016",
                        name: "9.	Como você avalia a necessidade destes equipamentos? (Arborização)",
                        description: "",
                        question: "9.	Como você avalia a necessidade destes equipamentos? (Arborização)",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: "11"
                    };
                    questions.push(q9);
                    var q10 = {
                        id: "1017",
                        name: "10.	Como você avalia a necessidade destes equipamentos? (Iluminação voltada aos pedestres)",
                        description: "",
                        question: "10.	Como você avalia a necessidade destes equipamentos? (Iluminação voltada aos pedestres)",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: "11"
                    };
                    questions.push(q10);
                    var q11 = {
                        id: "1018",
                        name: "11.	Como você avalia a necessidade destes equipamentos? (Ponto de Ônibus)",
                        description: "",
                        question: "11.	Como você avalia a necessidade destes equipamentos? (Ponto de Ônibus)",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: "11"
                    };
                    questions.push(q11);
                    var q12 = {
                        id: "1019",
                        name: "12.	Você gosta das barracas do comércio de rua?",
                        description: "",
                        question: "12.	Você gosta das barracas do comércio de rua?",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: null
                    };
                    questions.push(q12);
                    var q13 = {
                        id: "1020",
                        name: "13.	Você gosta das Kombis de alimentação do comércio de rua?",
                        description: "",
                        question: "12.	Você gosta das Kombis de alimentação do comércio de rua?",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: null
                    };
                    questions.push(q13);
                    questions = _this.resolveNarrative(questions);
                    data = questions;
                }
                //Questionário comerciante
                if (questionary.id == 660) {
                    var questions = [];
                    var q1 = {
                        id: "1021",
                        name: "1.	Qual o ramo da sua atividade comercial?",
                        description: "",
                        question: "1.	Qual o ramo da sua atividade comercial? (Game)",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: "12"
                    };
                    questions.push(q1);
                    var q2 = {
                        id: "1022",
                        name: "2.	Porque você escolheu essa rua para seu comércio?",
                        description: "",
                        question: "2.	Porque você escolheu essa rua para seu comércio? (Game)",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: "13"
                    };
                    questions.push(q2);
                    var q3 = {
                        id: "1023",
                        name: "3.	Quanto você está satisfeito com a infraestrutura básica da rua?",
                        description: "",
                        question: "3.	Quanto você está satisfeito com a infraestrutura básica da rua? (Game)",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: "8"
                    };
                    questions.push(q3);
                    var q4 = {
                        id: "1024",
                        name: "4.	Quais melhorias poderiam ser feitas para atender suas necessidades?",
                        description: "",
                        question: "4.	Quais melhorias poderiam ser feitas para atender suas necessidades? (Game)",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: "14"
                    };
                    questions.push(q4);
                    var q5 = {
                        id: "1025",
                        name: "5.	O que as pessoas costumam fazer nessa rua?",
                        description: "",
                        question: "5.	O que as pessoas costumam fazer nessa rua? (Game)",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: "15"
                    };
                    questions.push(q5);
                    var q6 = {
                        id: "1026",
                        name: "6.	Quais são os pontos fortes da sua rua?",
                        description: "",
                        question: "6.	Quais são os pontos fortes da sua rua? (Game)",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: "16"
                    };
                    questions.push(q6);
                    var q7 = {
                        id: "1027",
                        name: "7.	Quais são os pontos fracos da sua rua?",
                        description: "",
                        question: "7.	Quais são os pontos fracos da sua rua? (Game)",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: "17"
                    };
                    questions.push(q7);
                    var q8 = {
                        id: "1028",
                        name: "8.	O que você pensa sobre a seguinte afirmação: “Não trocaria a minha rua por nenhum outro local da cidade”",
                        description: "",
                        question: "8.	O que você pensa sobre a seguinte afirmação: “Não trocaria a minha rua por nenhum outro local da cidade” (Game)",
                        contextArea: "Requalificação do Centro",
                        contextAreaIcon: "city-icon.png",
                        position: "1",
                        isRuralZone: "0",
                        metricId: "18"
                    };
                    questions.push(q8);
                    questions = _this.resolveNarrative(questions);
                    data = questions;
                }
                //-----------------TEMPORÁRIO-------------------
                // data = this.resolveNarrative(data);
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    QuestionProvider.prototype.resolveNarrative = function (questions) {
        var newQuestions = [];
        questions.forEach(function (quest) {
            var q = {
                id: quest.id,
                name: quest.name,
                description: quest.description,
                question: quest.question,
                position: quest.position,
                contextArea: quest.contextArea,
                contextAreaIcon: quest.contextAreaIcon,
                isRuralZone: quest.isRuralZone,
                metricId: quest.metricId,
                narrative: null,
                sound: null,
                useNarrative: false
            };
            //-------------------------APLICAÇÃO DA NARRATIVA-------------------------
            //----------------------------IMPORTANTE--------------------------------
            switch (quest.id) {
                case "1001":
                    q.narrative = "No seu dia-a-dia, você costuma ir bastante ao centro ou poucas vezes? Você passa com frequência por lá?";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1002":
                    q.narrative = "Sua casa fica no centro? Caso você não more no centro, você costuma ir para lá a trabalho, compras ou para atividades de lazer?";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1003":
                    q.narrative = "As atividades para serem feitas no centro também podem ser feitas a noite! Você costuma ir ao centro a noite com alguma frequência?";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1004":
                    q.narrative = "Você pode ter seus próprios motivos para não ir ao centro a noite, nos ajude a descobrir qual é.";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1005":
                    q.narrative = "O centro possui serviços, comércios e espaços de lazer para a população. Quais desses tipos de atrações você leva em consideração quando esta passeando no centro da cidade?";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1006":
                    q.narrative = "Conte-nos o que lhe faz falta no centro! Que tipo de benefício você sente falta quando esta passeando com sua família pelo centro? Se você mora no centro, o é preciso para atender suas necessidades?";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1007":
                    q.narrative = "Qual sua avaliação das lojas levando em consideração as suas necessidades, atendimentos dos serviços e disponibilidade? Quando você esta satisfeito quando precisa fazer compras no centro da cidade?";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1008":
                    q.narrative = "Se você costuma ir ao centro por lazer, você faz passeio no parque? Você faz caminhadas pelas calçadas ou andar em veículos pelas ruas? ";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1009":
                    q.narrative = "As obras de requalificação tem como objetivo adequar o espaço urbano do centro da cidade a mobilidade das vias com objetivo de atender a necessidade da população. Você considera esse tipo de obra necessária?";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1010":
                    q.narrative = "Como você acha que estão as calçadas quando você anda pelo centro? O espaço esta adequado? Possui acessibilidade?";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1011":
                    q.narrative = "Você costuma deparar com as rampas de acessibilidade para cadeirantes quando esta no centro? Como você acha que esta o estado de conservação dessas rampas? Acha que  existem rampas o suficiente?";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1012":
                    q.narrative = "Você costuma deparar com pisos elevados para deficientes quando esta caminhando no centro da cidade? Os pisos táteis estão em todas as calçadas, acha que são suficientes?";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1013":
                    q.narrative = "Caso você vá ao centro de carro, você encontra problemas em estacionar a ponto de ficar um tempo procurando vaga ou não encontrar quando precisa?";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1014":
                    q.narrative = "Você costuma deparar com locais de descanço, como bancos, quando esta caminhando pelo centro? Como você acha que esta o estado de conservação dessas rampas? Acha que  existem rampas o suficiente?";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1015":
                    q.narrative = "Você costuma deparar com lixeiras quando vai no centro? Como você acha que esta o estado de conservação dessas rampas? Acha que  existem rampas o suficiente?";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1016":
                    q.narrative = "Você costuma deparar com ruas arborizadas quando vai no centro? Como você acha que esta o estado de conservação dessas rampas? Acha que  existem rampas o suficiente?";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1017":
                    q.narrative = "Quando você vai ao centro a noite as ruas estão bem iluminadas? Como você acha que esta o estado de conservação dessas rampas? Acha que  existem rampas o suficiente?";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1018":
                    q.narrative = "Você se depara com pontos de ônibus quando vai ao centro? Como você acha que esta o estado de conservação dessas rampas? Acha que  existem rampas o suficiente?";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1019":
                    q.narrative = "Você costuma comprar alguma coisa para sua casa ou presente para alguém das barracas do comércio de rua?";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1020":
                    q.narrative = "Você já parou nas kombis de alimentação durante seu passeio no centro? O que acha desse tipo de comércio?";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1021":
                    q.narrative = "Conte-nos sobre o seu negócio, qual o tipo do seu comércio? ";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1022":
                    q.narrative = "O que te fez escolher essa rua para estabelecer seu negócio?";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1023":
                    q.narrative = "A infraestrutura da rua de seu comércio como calçadas, iluminação, caçadas, lixeiras  é satisfatória para sua atividade comercial?";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1024":
                    q.narrative = "Quais melhorias apresentadas você acha que pode melhor atender as suas necessidades durante suas atividades diárias?";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1025":
                    q.narrative = "Quando você conversa com os clientes de seu negócio, o que as pessoas costumam dizer que as atraem para sua rua?";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1026":
                    q.narrative = "Quais os pontos fortes que você acha que sua rua tem?";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1027":
                    q.narrative = "Quais os pontos fracos você acha que podem ser melhorado na sua rua?";
                    q.narrative = "Você esta satisfeito com sua rua quando esta trabalhando? Ou pretendente trocar o local de seu estabelecimento se encontrar um local melhor?";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                case "1028":
                    q.narrative = "Você esta satisfeito com sua rua quando esta trabalhando? Ou pretendente trocar o local de seu estabelecimento se encontrar um local melhor?";
                    q.sound = "https://soundcloud.com/kito-1/stone-temple-pilots-interstate-love-song_kito-mp3";
                    q.useNarrative = true;
                    break;
                default:
                    q.narrative = null;
                    q.sound = null;
                    q.useNarrative = false;
                    break;
            }
            newQuestions.push(q);
            //-------------------------APLICAÇÃO DA NARRATIVA-------------------------
            //----------------------------IMPORTANTE----------------------------------
        });
        return newQuestions;
    };
    QuestionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__rest_rest__["a" /* RestProvider */]])
    ], QuestionProvider);
    return QuestionProvider;
}());

var Question = /** @class */ (function () {
    function Question() {
    }
    return Question;
}());

//# sourceMappingURL=question.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_rest__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnswerProvider = /** @class */ (function () {
    function AnswerProvider(http, restProvider) {
        this.http = http;
        this.restProvider = restProvider;
    }
    AnswerProvider.prototype.insertAnswersData = function (answers, answersNeighborhoods, prioritizations, userType) {
        var _this = this;
        return new Promise(function (resolve) {
            var token = _this.restProvider.cryptography(answers[0].plan.id + answers[0].questionary.id + answers[0].question.id + answers[0].respondent.id + answers[0].answer + answers[0].created_at);
            var answersParsed = [];
            answers.forEach(function (answer) {
                var item = {
                    "plan_id": answer.plan.id,
                    "questionary_id": answer.questionary.id,
                    "question_id": answer.question.id,
                    "respondent_id": answer.respondent.id,
                    "answer": answer.answer,
                    "user_id": userType.id,
                    "created_at": answer.created_at
                };
                answersParsed.push(item);
            });
            var answersNeighborhoodsParsed = [];
            answersNeighborhoods.forEach(function (answersNeighborhood) {
                var item = {
                    "plan_id": answersNeighborhood.plan.id,
                    "questionary_id": answersNeighborhood.questionary.id,
                    "question_id": answersNeighborhood.question.id,
                    "respondent_id": answersNeighborhood.respondent.id,
                    "neighborhood_id": answersNeighborhood.neighborhood.id,
                    "created_at": answersNeighborhood.created_at
                };
                answersNeighborhoodsParsed.push(item);
            });
            var prioritizationsParsed = [];
            prioritizations.forEach(function (prioritization) {
                var item = {
                    "plan_id": prioritization.plan.id,
                    "questionary_id": prioritization.questionary.id,
                    "question_id": prioritization.question.id,
                    "respondent_id": prioritization.respondent.id,
                    "metric_item": prioritization.metricItem.id,
                    "metric_value": prioritization.metricValue.value,
                    "created_at": prioritization.created_at
                };
                prioritizationsParsed.push(item);
            });
            var data = {
                "answers": JSON.parse(JSON.stringify(answersParsed)),
                "answersNeighborhoods": JSON.parse(JSON.stringify(answersNeighborhoodsParsed)),
                "prioritizations": JSON.parse(JSON.stringify(prioritizationsParsed)),
                "token": token
            };
            // this.http.post("https://api.neiru.org/insert-answers-data.php", data, {headers: this.restProvider.headers})
            //   .subscribe(data => {
            resolve(data);
            //   }, error => {
            //     resolve(error);
            //   });
        });
    };
    AnswerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__rest_rest__["a" /* RestProvider */]])
    ], AnswerProvider);
    return AnswerProvider;
}());

//# sourceMappingURL=answer.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeighborhoodProvider; });
/* unused harmony export Neighborhood */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_rest__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NeighborhoodProvider = /** @class */ (function () {
    function NeighborhoodProvider(http, restProvider) {
        this.http = http;
        this.restProvider = restProvider;
    }
    NeighborhoodProvider.prototype.getAllNeighborhoodsByCity = function (city) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("https://api.neiru.org/get-all-neighborhoods-by-city.php?city=" + city.id, { headers: _this.restProvider.headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    NeighborhoodProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__rest_rest__["a" /* RestProvider */]])
    ], NeighborhoodProvider);
    return NeighborhoodProvider;
}());

var Neighborhood = /** @class */ (function () {
    function Neighborhood() {
    }
    return Neighborhood;
}());

//# sourceMappingURL=neighborhood.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RespondentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_rest__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RespondentProvider = /** @class */ (function () {
    function RespondentProvider(http, restProvider) {
        this.http = http;
        this.restProvider = restProvider;
    }
    RespondentProvider.prototype.getRespondentByCPF = function (cpf) {
        var _this = this;
        return new Promise(function (resolve) {
            var data = {
                "cpf": cpf
            };
            _this.http.post("https://api.neiru.org/get-respondent-by-cpf.php", data, { headers: _this.restProvider.headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RespondentProvider.prototype.updateRespondent = function (respondent) {
        var _this = this;
        return new Promise(function (resolve) {
            var updatedAt = new Date().toISOString();
            var token = _this.restProvider.cryptography(respondent.id + respondent.cpf + respondent.email + respondent.residenceTimeRange + respondent.residenceNeighborhood.id + respondent.salaryRange + updatedAt);
            var data = {
                "id": respondent.id,
                "cpf": respondent.cpf,
                "email": respondent.email,
                "residence_time_range": respondent.residenceTimeRange,
                "residence_neighborhood_id": respondent.residenceNeighborhood.id,
                "job_city_id": respondent.jobCity.id,
                "job_neighborhood_id": respondent.jobNeighborhood.id,
                "salary_range": respondent.salaryRange,
                "updated_at": updatedAt,
                "token": token,
                //-----------------NOVOS CAMPOS-----------------
                "age_range": respondent.ageRange,
                "gender": respondent.gender,
                "name": respondent.name,
                "phone": respondent.phone
                //-----------------NOVOS CAMPOS-----------------
            };
            // this.http.post("https://api.neiru.org/update-respondent.php", data, {headers: this.restProvider.headers})
            //   .subscribe(data => {
            resolve(data);
            //   }, error => {
            //     resolve(error);
            //   });
        });
    };
    RespondentProvider.prototype.insertRespondent = function (respondent) {
        var _this = this;
        return new Promise(function (resolve) {
            var createdAt = new Date().toISOString();
            var token = _this.restProvider.cryptography(respondent.cpf + respondent.email + respondent.residenceTimeRange + respondent.residenceNeighborhood.id + respondent.salaryRange + createdAt);
            var data = {
                "cpf": respondent.cpf,
                "email": respondent.email,
                "residence_time_range": respondent.residenceTimeRange,
                "residence_neighborhood_id": respondent.residenceNeighborhood.id,
                "job_city_id": respondent.jobCity.id,
                "job_neighborhood_id": respondent.jobNeighborhood.id,
                "salary_range": respondent.salaryRange,
                "created_at": createdAt,
                //-----------------NOVOS CAMPOS-----------------
                "age_range": respondent.ageRange,
                "gender": respondent.gender,
                "name": respondent.name,
                "phone": respondent.phone,
                //-----------------NOVOS CAMPOS-----------------
                "token": token
            };
            // this.http.post("https://api.neiru.org/insert-respondent.php", data, {headers: this.restProvider.headers})
            //   .subscribe(data => {
            resolve(data);
            //   }, error => {
            //     resolve(error);
            //   });
        });
    };
    RespondentProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__rest_rest__["a" /* RestProvider */]])
    ], RespondentProvider);
    return RespondentProvider;
}());

//# sourceMappingURL=respondent.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_database_database__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_city_city__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_plan_plan__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_questionary_questionary__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_neighborhood_neighborhood__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_question_question__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_respondent_respondent__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_prioritization_prioritization__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_answer_answer__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_network__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_app_version__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_intro_intro__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_intro_intro__["a" /* IntroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/thankyou/thankyou.module#ThankyouPageModule', name: 'ThankyouPage', segment: 'thankyou', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/questionaries-list/questionaries-list.module#QuestionariesListPageModule', name: 'QuestionariesListPage', segment: 'questionaries-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/questionary/questionary.module#QuestionaryPageModule', name: 'QuestionaryPage', segment: 'questionary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prioritization/prioritization.module#PrioritizationPageModule', name: 'PrioritizationPage', segment: 'prioritization', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/respondent-profile/respondent-profile.module#RespondentProfilePageModule', name: 'RespondentProfilePage', segment: 'respondent-profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_intro_intro__["a" /* IntroPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_city_city__["a" /* CityProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_plan_plan__["b" /* PlanProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_questionary_questionary__["c" /* QuestionaryProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_neighborhood_neighborhood__["a" /* NeighborhoodProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_question_question__["b" /* QuestionProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_respondent_respondent__["a" /* RespondentProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_respondent_respondent__["a" /* RespondentProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_prioritization_prioritization__["a" /* PrioritizationProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_answer_answer__["a" /* AnswerProvider */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_app_version__["a" /* AppVersion */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_intro_intro__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl, restProvider) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.restProvider = restProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_intro_intro__["a" /* IntroPage */];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.navigateQuestionaryList = function () {
        this.nav.setRoot('QuestionariesListPage', {});
    };
    MyApp.prototype.navigateToAbout = function () {
        this.nav.setRoot('AboutPage', {});
    };
    MyApp.prototype.navigateProfile = function () {
        this.nav.setRoot('RespondentProfilePage', {});
    };
    MyApp.prototype.refreshData = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Limpar dados do aplicativo',
            message: 'Você gostaria de limpar os dados já fornecidos e começar novamente?',
            buttons: [{
                    text: "Sim",
                    handler: function () {
                        _this.restProvider.removeStoredData(_this.nav);
                    }
                }, {
                    text: "Não"
                }]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\IONIC Projects\neiru_surveys_app-develop\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button class="menu-questionnary" ion-item (click)="navigateQuestionaryList()" menuClose>\n        <ion-icon range-left name="ios-list" class="menu-questionnary">\n        </ion-icon>\n        Questionários\n      </button>\n      <button class="menu-profile" ion-item (click)="navigateProfile()" menuClose>\n        <ion-icon range-left name="md-person" class="menu-profile">\n        </ion-icon>\n        Perfil\n      </button>\n      <button class="menu-about" ion-item (click)="navigateToAbout()" menuClose>\n        <ion-icon range-left name="md-information-circle" class="menu-about">\n        </ion-icon>\n        Sobre\n      </button>\n      <button class="menu-data-clear" ion-item (click)="refreshData()" menuClose>\n        <ion-icon range-left name="md-remove-circle" class="menu-data-clear">\n        </ion-icon>\n        Limpar dados\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"D:\IONIC Projects\neiru_surveys_app-develop\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return QuestionaryProvider; });
/* unused harmony export Questionary */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Answer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AnswerNeighborhood; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_rest__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionaryProvider = /** @class */ (function () {
    function QuestionaryProvider(http, restProvider) {
        this.http = http;
        this.restProvider = restProvider;
    }
    QuestionaryProvider.prototype.getAllQuestionariesByPlan = function (plan) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("https://api.neiru.org/get-all-questionaries-by-plan.php?plan=" + plan.id, { headers: _this.restProvider.headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    QuestionaryProvider.prototype.getAllPlanQuestionariesAnsweredByRespondent = function (plan, questionaries, respondent) {
        var _this = this;
        return new Promise(function (resolve) {
            var planJson = {
                "plan_id": plan.id
            };
            var respondentJson = {
                "respondent_id": respondent.id
            };
            var questionariesJson = [];
            questionaries.forEach(function (questionary) {
                var item = {
                    "questionary_id": questionary.id,
                    "questionary_name": questionary.name
                };
                questionariesJson.push(item);
            });
            var data = {
                "plan": planJson,
                "questionaries": JSON.parse(JSON.stringify(questionariesJson)),
                "respondent": respondentJson
            };
            _this.http.post("https://api.neiru.org/get-all-plan-questionaries-answered-by-respondent.php", data, { headers: _this.restProvider.headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    //-------------------AJUSTE NO ÍCONE DO QUESTIONÁRIO-------------------
    //-----------------------------IMPORTANTE------------------------------
    QuestionaryProvider.prototype.resolveQuestionaryIcon = function (questionaries) {
        var questionariesParse = [];
        questionaries.forEach(function (questionary) {
            var item = {
                "id": questionary.id,
                "name": questionary.name,
                "answered": questionary.answered,
                "icon": "city-icon.png"
            };
            switch (item.name) {
                case "Segurança Pública": {
                    if (item.answered) {
                        item.icon = "security-icon-selected.png";
                    }
                    else {
                        item.icon = "security-icon.png";
                    }
                    break;
                }
                case "Mobilidade e Transporte": {
                    if (item.answered) {
                        item.icon = "urban_traffic-icon-selected.png";
                    }
                    else {
                        item.icon = "urban_traffic-icon.png";
                    }
                    break;
                }
                case "Uso e Ocupação do Solo": {
                    if (item.answered) {
                        item.icon = "environment-icon-selected.png";
                    }
                    else {
                        item.icon = "environment-icon.png";
                    }
                    break;
                }
                case "Saúde": {
                    if (item.answered) {
                        item.icon = "health-icon-selected.png";
                    }
                    else {
                        item.icon = "health-icon.png";
                    }
                    break;
                }
                case "Lazer Cultura e Turismo": {
                    if (item.answered) {
                        item.icon = "culture-icon-selected.png";
                    }
                    else {
                        item.icon = "culture-icon.png";
                    }
                    break;
                }
                case "Saneamento": {
                    if (item.answered) {
                        item.icon = "water_residues-icon-selected.png";
                    }
                    else {
                        item.icon = "water_residues-icon.png";
                    }
                    break;
                }
                case "Educação": {
                    if (item.answered) {
                        item.icon = "education-icon-selected.png";
                    }
                    else {
                        item.icon = "education-icon.png";
                    }
                    break;
                }
                case "Meio Ambiente": {
                    if (item.answered) {
                        item.icon = "water_residues-icon-selected.png";
                    }
                    else {
                        item.icon = "water_residues-icon.png";
                    }
                    break;
                }
                case "Abastecimento de água": {
                    if (item.answered) {
                        item.icon = "water_residues-icon-selected.png";
                    }
                    else {
                        item.icon = "water_residues-icon.png";
                    }
                    break;
                }
                case "Esgotamento Sanitário": {
                    if (item.answered) {
                        item.icon = "water_residues-icon-selected.png";
                    }
                    else {
                        item.icon = "water_residues-icon.png";
                    }
                    break;
                }
                case "Drenagem Urbana": {
                    if (item.answered) {
                        item.icon = "water_residues-icon-selected.png";
                    }
                    else {
                        item.icon = "water_residues-icon.png";
                    }
                    break;
                }
                case "Resíduos Sólidos": {
                    if (item.answered) {
                        item.icon = "water_residues-icon-selected.png";
                    }
                    else {
                        item.icon = "water_residues-icon.png";
                    }
                    break;
                }
                case "Informações Adicionais": {
                    if (item.answered) {
                        item.icon = "water_residues-icon-selected.png";
                    }
                    else {
                        item.icon = "water_residues-icon.png";
                    }
                    break;
                }
                default: {
                    if (item.answered) {
                        item.icon = "city-icon-selected.png";
                    }
                    else {
                        item.icon = "city-icon.png";
                    }
                    break;
                }
            }
            questionariesParse.push(item);
        });
        return questionariesParse;
    };
    QuestionaryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__rest_rest__["a" /* RestProvider */]])
    ], QuestionaryProvider);
    return QuestionaryProvider;
}());

//-------------------AJUSTE NO ÍCONE DO QUESTIONÁRIO-------------------
//-------------------------IMPORTANTE-------------------------
var Questionary = /** @class */ (function () {
    function Questionary() {
    }
    return Questionary;
}());

var Answer = /** @class */ (function () {
    function Answer() {
    }
    return Answer;
}());

var AnswerNeighborhood = /** @class */ (function () {
    function AnswerNeighborhood() {
    }
    return AnswerNeighborhood;
}());

//# sourceMappingURL=questionary.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_questionary_questionary__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_city_city__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_plan_plan__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_database_database__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var IntroPage = /** @class */ (function () {
    function IntroPage(cityProvider, planProvider, questionaryProvider, loadingCtrl, navCtrl, navParams, databaseProvider, storage, alertCtrl, restProvider) {
        var _this = this;
        this.cityProvider = cityProvider;
        this.planProvider = planProvider;
        this.questionaryProvider = questionaryProvider;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.databaseProvider = databaseProvider;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.restProvider = restProvider;
        this.cities = [];
        this.userTypes = [];
        this.plans = [];
        this.questionaries = [];
        this.isRuralZone = false;
        this.useGame = false;
        // this.storage.set('useGame', this.useGame).then(() => {
        setTimeout(function () {
            _this.changeZone();
            _this.existsAppCityPlan();
            _this.checkTrigger();
        }, 1000);
        // });
    }
    IntroPage.prototype.ionViewDidEnter = function () {
        this.checkTrigger();
    };
    IntroPage.prototype.checkTrigger = function () {
        var _this = this;
        this.storage.get('useGame').then(function (data) {
            console.log("checkTrigger");
            var trigger = document.getElementById("trigger");
            console.log(trigger);
            if (data == null) {
                if (trigger == null) {
                    _this.useGamification();
                }
                else {
                    _this.dontuseGamification();
                }
            }
            else {
                if (trigger == null) {
                    _this.useGamification();
                }
                else {
                    _this.useGame = data;
                }
            }
        });
    };
    IntroPage.prototype.useGamification = function () {
        this.useGame = true;
        this.storage.set('useGame', this.useGame);
    };
    IntroPage.prototype.dontuseGamification = function () {
        this.useGame = false;
        this.storage.set('useGame', this.useGame);
    };
    IntroPage.prototype.changeZone = function () {
        this.storage.set('isRuralZone', this.isRuralZone ? 1 : 0);
    };
    IntroPage.prototype.nextSlide = function (event) {
        this.checkTrigger();
        if (event._touches.startX > 180) {
            this.slides.slideNext();
        }
        else {
            this.slides.slidePrev();
        }
    };
    IntroPage.prototype.skip = function () {
        var _this = this;
        this.checkTrigger();
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        this.storage.set('intro', true).then(function () {
            _this.skipHome();
        });
    };
    IntroPage.prototype.skipHome = function () {
        var _this = this;
        this.userTypes.forEach(function (u) {
            if (u.name == "Cidadão Comum") {
                _this.userType = u;
                _this.storage.set('userType', _this.userType);
            }
        });
        this.cityProvider.getAllCitiesWithPlan()
            .then(function (cities) {
            if (cities != null) {
                _this.cities = cities;
                _this.cities.forEach(function (c) {
                    if (c.name == "Pouso Alegre") {
                        _this.city = c;
                        _this.planProvider.getAllPlansByCity(_this.city)
                            .then(function (plans) {
                            if (plans != null) {
                                _this.storage.set('city', _this.city).then(function () {
                                    // Plano temporário [x]
                                    //----------------------------TEMPORÁRIO---------------------------------
                                    var p = {
                                        city: _this.city,
                                        id: 666,
                                        name: "Plano de Mobilidade",
                                        usePrioritization: false
                                    };
                                    plans.push(p);
                                    //----------------------------TEMPORÁRIO---------------------------------
                                    _this.plans = plans;
                                    _this.questionaries = [];
                                    _this.plans.forEach(function (p) {
                                        if (p.name == "Plano de Mobilidade") {
                                            _this.plan = p;
                                            _this.questionaryProvider.getAllQuestionariesByPlan(_this.plan)
                                                .then(function (questionaries) {
                                                if (questionaries != null) {
                                                    _this.storage.set('plan', _this.plan);
                                                    // Questionário temporário [x]
                                                    //----------------------------TEMPORÁRIO---------------------------------
                                                    var questionaryTemp1 = {
                                                        id: 666,
                                                        name: "Centro - Diagnóstico Geral",
                                                        answered: false,
                                                        plan: _this.plan,
                                                        questions: null,
                                                    };
                                                    var questionaryTemp2 = {
                                                        id: 661,
                                                        name: "Centro - Diagnóstico Específico",
                                                        answered: false,
                                                        plan: _this.plan,
                                                        questions: null,
                                                    };
                                                    var questionaryTemp3 = {
                                                        id: 660,
                                                        name: "Centro - Comerciante",
                                                        answered: false,
                                                        plan: _this.plan,
                                                        questions: null,
                                                    };
                                                    questionaries.push(questionaryTemp1);
                                                    questionaries.push(questionaryTemp2);
                                                    questionaries.push(questionaryTemp3);
                                                    //----------------------------TEMPORÁRIO---------------------------------
                                                    _this.questionaries = _this.questionaryProvider.resolveQuestionaryIcon(questionaries);
                                                    _this.storage.set('questionaries', _this.questionaries);
                                                    var points = 0;
                                                    _this.storage.set('points', points);
                                                    _this.navigateProfilePage();
                                                }
                                                else {
                                                    _this.questionaries = [];
                                                    _this.showAlertGetAllQuestionariesByPlan();
                                                }
                                            })
                                                .catch(function () {
                                                _this.showAlertGetAllQuestionariesByPlan();
                                            });
                                        }
                                    });
                                });
                            }
                            else {
                                _this.plans = [];
                                _this.showAlertGetAllPlansByCity();
                            }
                        })
                            .catch(function () {
                            _this.showAlertGetAllPlansByCity();
                        });
                    }
                });
            }
            else {
                _this.cities = [];
                _this.showAlertGetAllCitiesWithPlan();
            }
        })
            .catch(function () {
            _this.cities = [];
            _this.showAlertGetAllCitiesWithPlan();
        });
    };
    IntroPage.prototype.existsAppCityPlan = function () {
        var _this = this;
        var entities = ['city', 'plan', 'isRuralZone', 'questionaries'];
        this.databaseProvider.verifyEntities(entities)
            .then(function (data) {
            if (data.length > 0 && data.filter(function (data) { return data == false; }).length == 0) {
                _this.storage.get('respondent')
                    .then(function (respondent) {
                    if (respondent != null) {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Já existe um usuário respondendo os questionários',
                            message: 'Você gostaria de continuar respondendo os questionários com o usuário: <br/> CPF - ' + respondent.cpf + '?',
                            buttons: [{
                                    text: "Sim",
                                    handler: function () {
                                        _this.navigateQuestionaryList();
                                    }
                                }, {
                                    text: "Não",
                                    handler: function () {
                                        _this.removeStoredData();
                                    }
                                }]
                        });
                        alert_1.present();
                    }
                    else {
                        _this.removeStoredData();
                    }
                })
                    .catch(function () {
                    _this.removeStoredData();
                });
            }
        });
    };
    IntroPage.prototype.navigateQuestionaryList = function () {
        var _this = this;
        this.storage.get('intro')
            .then(function (data) {
            if (data != null) {
                _this.loader = _this.loadingCtrl.create();
                _this.loader.present();
                _this.navCtrl.setRoot('QuestionariesListPage', {}).then(function () { return _this.loader.dismiss(); });
            }
        }).catch(function () { return console.log('error setting intro'); });
    };
    IntroPage.prototype.removeStoredData = function () {
        var _this = this;
        this.storage.remove('respondent')
            .then(function () {
            _this.storage.remove('plan')
                .then(function () {
                _this.storage.remove('city')
                    .then(function () {
                    _this.storage.remove('isRuralZone')
                        .then(function () {
                        _this.storage.remove('questionaries')
                            .then(function () {
                            _this.storage.remove('metricItems')
                                .then(function () {
                                _this.storage.remove('neighborhoods')
                                    .then(function () {
                                    _this.storage.remove('userType')
                                        .then(function () {
                                        _this.storage.remove('points')
                                            .then(function () {
                                            _this.storage.remove('intro')
                                                .then(function () {
                                                // this.storage.remove('useGame')
                                                //   .then(() => {
                                                _this.storage.remove('helpHome')
                                                    .then(function () {
                                                    console.log("Remoção de dados concluída");
                                                })
                                                    .catch(function (error) {
                                                    console.log(error);
                                                });
                                                // })
                                                // .catch((error) => {
                                                //   console.log(error);
                                                // });
                                            })
                                                .catch(function (error) {
                                                console.log(error);
                                            });
                                        })
                                            .catch(function (error) {
                                            console.log(error);
                                        });
                                    })
                                        .catch(function (error) {
                                        console.log(error);
                                    });
                                })
                                    .catch(function (error) {
                                    console.log(error);
                                });
                            })
                                .catch(function (error) {
                                console.log(error);
                            });
                        })
                            .catch(function (error) {
                            console.log(error);
                        });
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                })
                    .catch(function (error) {
                    console.log(error);
                });
            })
                .catch(function (error) {
                console.log(error);
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    IntroPage.prototype.navigateProfilePage = function () {
        var _this = this;
        this.navCtrl.setRoot('RespondentProfilePage', {}).then(function () { return _this.loader.dismiss(); });
    };
    IntroPage.prototype.navigateHomePage = function () {
        var _this = this;
        this.storage.get('intro')
            .then(function (data) {
            if (data != null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {});
            }
        }).catch(function () { return console.log('error setting intro'); });
    };
    IntroPage.prototype.showAlertGetAllCitiesWithPlan = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.skipHome();
                    }
                }]
        });
        alert.present();
    };
    IntroPage.prototype.showAlertGetAllPlansByCity = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.skipHome();
                    }
                }]
        });
        alert.present();
    };
    IntroPage.prototype.showAlertGetAllQuestionariesByPlan = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.skipHome();
                    }
                }]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], IntroPage.prototype, "slides", void 0);
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\intro\intro.html"*/'<ion-header>\n  <div (ionChange)="checkTrigger()" id="trigger"></div>\n  <ion-navbar>\n    <div offset-3 col-6 text-center>\n      <img class="img-responsive" src="assets/imgs/header-logo.png" />\n    </div>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-slides pager (ionSlideTap)="nextSlide($event)">\n    <!-- Slide 1 -->\n    <ion-slide class="slide-img" padding>\n      <div class="slide-header">\n        <h1 class="title-box">Olá, seja bem vindo!</h1>\n      </div>\n      <img class="img-responsive" src="assets/imgs/intro1.jpg" />\n      <div class="dialogue-box">\n        <div class="tdialogue-box-text">\n          <p class="text-dialog">\n            Olá! Que bom que você quer <strong>participar</strong> na requalificação do <strong>centro</strong> de\n            <strong>Pouso Alegre</strong>!\n          </p>\n          <p class="text-dialog">\n            Vamos conhecer essa <strong>possibilidade</strong>?\n          </p>\n        </div>\n      </div>\n      <div class="slide-header">\n        <div padding-bottom text-right>\n          <a class="button-skip" (click)="skip()">pular</a>\n          <ion-icon name="arrow-dropright"></ion-icon>\n        </div>\n      </div>\n    </ion-slide>\n    <!-- Slide 1 -->\n    <!-- Slide 2 -->\n    <ion-slide class="slide-img" padding>\n      <div class="slide-header">\n        <h3 class="title-box">Você sabe o que é requalificação urbana?</h3>\n      </div>\n      <img class="img-responsive" src="assets/imgs/intro2.jpg" />\n      <div class="dialogue-box">\n        <div class="tdialogue-box-text">\n          <p class="text-dialog">\n            Com o <strong>crescimento</strong> da cidade, a <strong>área central</strong> tem apresentado problemas como\n            desgaste da <strong>pavimentação</strong>, falta de padronização dos <strong>passeios</strong> e\n            <strong>calçadas</strong> estreitas.</p>\n        </div>\n      </div>\n      <div class="slide-header">\n        <div padding-bottom text-right>\n          <a class="button-skip" (click)="skip()">pular</a>\n          <ion-icon name="arrow-dropright"></ion-icon>\n        </div>\n      </div>\n    </ion-slide>\n    <!-- Slide 2 -->\n    <!-- Slide 3 -->\n    <ion-slide class="slide-img" padding>\n      <div class="slide-header">\n        <h3 class="title-box">A requalificação da área central</h3>\n      </div>\n      <img class="img-responsive" src="assets/imgs/intro5.jpg" />\n      <div class="dialogue-box">\n        <div class="tdialogue-box-text">\n          <p class="text-dialog">\n            Para resolver este problema as <strong>obras de requalificação</strong> tem como <strong>objetivo:</strong>\n            troca de <strong>pavimento</strong>, alargamento de <strong>calçadas</strong>,\n            instalação de <strong>equipamentos</strong> urbanos, <strong>arborização</strong>, <strong>faixas\n              elevadas</strong> e <strong>semáforos</strong>.\n          </p>\n        </div>\n      </div>\n      <div class="slide-header">\n        <div padding-bottom text-right>\n          <a class="button-skip" (click)="skip()">pular</a>\n          <ion-icon name="arrow-dropright"></ion-icon>\n        </div>\n      </div>\n    </ion-slide>\n    <!-- Slide 3 -->\n    <!-- Slide 4 -->\n    <ion-slide class="slide-img" padding>\n      <div class="slide-header">\n        <h3 class="title-box">A requalificação da áraea central</h3>\n      </div>\n      <img class="img-responsive" src="assets/imgs/intro6.jpg" />\n      <div class="dialogue-box">\n        <div class="tdialogue-box-text">\n          <p class="text-dialog">\n            Assim, a <strong>requalificação</strong> pode ampliar a <strong>mobilidade urbana</strong> e tornar a\n            <strong>área central</strong> de <strong>Pouso Alegre</strong> mais <strong>atrativa</strong> para os\n            <strong>pedestres</strong> e <strong>visitantes</strong>.</p>\n        </div>\n      </div>\n      <div class="slide-header">\n        <div padding-bottom text-right>\n          <a class="button-skip" (click)="skip()">pular</a>\n          <ion-icon name="arrow-dropright"></ion-icon>\n        </div>\n      </div>\n    </ion-slide>\n    <!-- Slide 4 -->\n    <!-- Slide 5 -->\n    <ion-slide class="slide-img" padding>\n      <div class="slide-header">\n        <h2 class="title-box">Sua opinião é importante!</h2>\n      </div>\n      <img class="img-responsive" src="assets/imgs/intro3.jpg" />\n      <div class="dialogue-box">\n        <div class="tdialogue-box-text">\n          <p class="text-dialog">\n            Sua <strong>participação</strong> possui grande importância. Essa <strong>pesquisa de opinião</strong>\n            possibilitará uma analise detalhada das necessidades da <strong>população</strong> de <strong>Pouso\n              Alegre</strong>.\n          </p>\n        </div>\n      </div>\n      <div *ngIf="useGame" class="slide-header">\n        <div padding-bottom text-right>\n          <a class="button-skip" (click)="skip()">pular</a>\n          <ion-icon name="arrow-dropright"></ion-icon>\n        </div>\n      </div>\n      <button *ngIf="!useGame" ion-button margin-bottom (click)="skip()">\n        <ion-icon id="button-participate-not-game" class="text-button">\n          Participar!\n        </ion-icon>\n      </button>\n    </ion-slide>\n    <!-- Slide 5 -->\n    <!-- Slide 6 -->\n    <ion-slide *ngIf="useGame" class="slide-img" padding>\n      <!-- Pontuação -->\n      <ion-grid>\n        <ion-row>\n          <ion-col col-3>\n            <img src="assets/imgs/premio1.png" />\n          </ion-col>\n          <ion-col text-justify col-9>\n            <h5 class="title-box-last">Consiga <strong>pontos</strong> para aumentar seu nível de\n              <strong>participação</strong>!</h5>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <!-- Pontuação -->\n      <img class="img-responsive" src="assets/imgs/intro4.jpg" />\n      <div class="dialogue-box-last">\n        <div class="tdialogue-box-text">\n          <p class="text-dialog">\n            Respondendo os questionários você coleta <strong>pontos</strong> que refletem sua\n            <strong>participação</strong>!\n            <strong>Participe</strong> agora nos enviando sua <strong>opinião</strong>!\n          </p>\n        </div>\n      </div>\n      <button ion-button margin-bottom (click)="skip()">\n        <ion-icon id="button-participate-game" class="text-button">\n          Participar!\n        </ion-icon>\n      </button>\n    </ion-slide>\n    <!-- Slide 6 -->\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\intro\intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_city_city__["a" /* CityProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_plan_plan__["b" /* PlanProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_questionary_questionary__["c" /* QuestionaryProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__["a" /* RestProvider */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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



var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    DatabaseProvider.prototype.verifyEntities = function (entities) {
        var _this = this;
        var promises_array = [];
        var _loop_1 = function (i) {
            promises_array.push(new Promise(function (resolve) {
                _this.storage.get(entities[i])
                    .then(function (data) {
                    if (data != null) {
                        resolve(true);
                    }
                    else {
                        i = 9999;
                        resolve(false);
                    }
                })
                    .catch(function () {
                    i = 9999;
                    resolve(false);
                });
            }));
            out_i_1 = i;
        };
        var out_i_1;
        for (var i = 0; i < entities.length; i++) {
            _loop_1(i);
            i = out_i_1;
        }
        return Promise.all(promises_array);
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityProvider; });
/* unused harmony export City */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_rest__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CityProvider = /** @class */ (function () {
    function CityProvider(http, restProvider) {
        this.http = http;
        this.restProvider = restProvider;
    }
    CityProvider.prototype.getAllCities = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("https://api.neiru.org/get-all-cities.php", { headers: _this.restProvider.headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    CityProvider.prototype.getAllCitiesWithPlan = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("https://api.neiru.org/get-all-cities-with-plan.php", { headers: _this.restProvider.headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    CityProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__rest_rest__["a" /* RestProvider */]])
    ], CityProvider);
    return CityProvider;
}());

var City = /** @class */ (function () {
    function City() {
    }
    return City;
}());

//# sourceMappingURL=city.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PlanProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plan; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_rest__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlanProvider = /** @class */ (function () {
    function PlanProvider(http, restProvider) {
        this.http = http;
        this.restProvider = restProvider;
    }
    PlanProvider.prototype.getAllPlansByCity = function (city) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("https://api.neiru.org/get-all-plans-by-city.php?city=" + city.id, { headers: _this.restProvider.headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    PlanProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__rest_rest__["a" /* RestProvider */]])
    ], PlanProvider);
    return PlanProvider;
}());

var Plan = /** @class */ (function () {
    function Plan() {
    }
    return Plan;
}());

//# sourceMappingURL=plan.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map