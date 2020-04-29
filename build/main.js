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
                // let questionaryTemp1: Questionary = {
                //   id: 666,
                //   name: "Centro - Diagnóstico Geral",
                //   answered: false,
                //   plan: plan,
                //   questions: null,
                // }
                // let questionaryTemp2: Questionary = {
                //   id: 661,
                //   name: "Centro - Diagnóstico Específico",
                //   answered: false,
                //   plan: plan,
                //   questions: null,
                // }
                // let questionaryTemp3: Questionary = {
                //   id: 660,
                //   name: "Centro - Comerciante",
                //   answered: false,
                //   plan: plan,
                //   questions: null,
                // }
                // questionaries.push(questionaryTemp1);
                // questionaries.push(questionaryTemp2);
                // questionaries.push(questionaryTemp3);
                // this.questionaries = this.questionaryProvider.resolveQuestionaryIcon(questionaries);
                //----------------------------TEMPORÁRIO---------------------------------
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
                                                _this.storage.remove('useGame')
                                                    .then(function () {
                                                    _this.storage.remove('helpHome')
                                                        .then(function () {
                                                        console.log("Remoção de dados concluída");
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_city_city__["a" /* CityProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_plan_plan__["b" /* PlanProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_questionary_questionary__["d" /* QuestionaryProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__providers_rest_rest__["a" /* RestProvider */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jssha__ = __webpack_require__(272);
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
    // API_URL: string = "http://localhost/neiru-surveys-api/";
    function RestProvider(http, network, alertCtrl, platform, storage, appVersionControl) {
        this.http = http;
        this.network = network;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.storage = storage;
        this.appVersionControl = appVersionControl;
        this.isConnected = true;
        // API_URL: string = "https://api.neiru.org/";
        // API_URL: string = "https://opina-ai-api.000webhostapp.com/";
        this.API_URL = "https://opina-ai-api.com/";
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
                    _this.http.get(_this.API_URL + "check-connection.php", { headers: _this.headers })
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
                    _this.http.get(_this.API_URL + "check-connection.php", { headers: _this.headers })
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
                                                _this.storage.remove('useGame')
                                                    .then(function () {
                                                    _this.storage.remove('helpHome')
                                                        .then(function () {
                                                        console.log("Remoção de dados concluída");
                                                        nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_intro_intro__["a" /* IntroPage */], {});
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_version__["a" /* AppVersion */]])
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
            _this.http.get(_this.restProvider.API_URL + "get-metric-items-by-metric.php?metric=" + metricId, { headers: _this.restProvider.headers })
                .subscribe(function (data) {
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
            _this.http.get(_this.restProvider.API_URL + "get-all-metric-values.php", { headers: _this.restProvider.headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
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
    AnswerProvider.prototype.insertAnswersData = function (answers, answersNeighborhoods, prioritizations, userType, useGame, points) {
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
                    "answer_text": answer.answer_text ? answer.answer_text : null,
                    "user_id": userType.id,
                    "created_at": answer.created_at,
                    "use_game": useGame
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
                    "created_at": prioritization.created_at,
                    "use_game": useGame
                };
                prioritizationsParsed.push(item);
            });
            var json = {
                "answers": JSON.parse(JSON.stringify(answersParsed)),
                "answersNeighborhoods": JSON.parse(JSON.stringify(answersNeighborhoodsParsed)),
                "prioritizations": JSON.parse(JSON.stringify(prioritizationsParsed)),
                "user_id": answers[0].respondent.id,
                "points": points ? points : 0,
                "token": token
            };
            var data = JSON.stringify(json);
            _this.http.post(_this.restProvider.API_URL + "insert-answers-data.php", data, { headers: _this.restProvider.headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
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

/***/ 211:
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
            _this.http.get(_this.restProvider.API_URL + "get-all-questions-by-questionary.php?questionary=" + questionary.id + "&isRuralZone=" + isRuralZone, { headers: _this.restProvider.headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
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
            _this.http.get(_this.restProvider.API_URL + "get-all-neighborhoods-by-city.php?city=" + city.id, { headers: _this.restProvider.headers })
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
            var json = {
                "cpf": cpf
            };
            var data = JSON.stringify(json);
            _this.http.post(_this.restProvider.API_URL + "get-respondent-by-cpf.php", data, { headers: _this.restProvider.headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
                resolve(error);
            });
        });
    };
    RespondentProvider.prototype.getRespondentByCode = function (code, oldCode) {
        var _this = this;
        if (code === null || code === oldCode) {
            return new Promise(function (resolve) {
                resolve(null);
            });
        }
        else {
            return new Promise(function (resolve) {
                var json = {
                    "code": code
                };
                var data = JSON.stringify(json);
                _this.http.post(_this.restProvider.API_URL + "get-respondent-by-code.php", data, { headers: _this.restProvider.headers })
                    .subscribe(function (data) {
                    resolve(data);
                }, function (error) {
                    resolve(error);
                });
            });
        }
    };
    RespondentProvider.prototype.getRespondentByEmail = function (email) {
        var _this = this;
        return new Promise(function (resolve) {
            var json = {
                "email": email
            };
            var data = JSON.stringify(json);
            _this.http.post(_this.restProvider.API_URL + "get-respondent-by-email.php", data, { headers: _this.restProvider.headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RespondentProvider.prototype.getRespondentById = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var json = {
                "id": id
            };
            var data = JSON.stringify(json);
            _this.http.post(_this.restProvider.API_URL + "get-respondent-by-id.php", data, { headers: _this.restProvider.headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    RespondentProvider.prototype.insertRespondent = function (respondent) {
        var _this = this;
        return new Promise(function (resolve) {
            var dateTime = new Date();
            var createdAt = new Date(dateTime.valueOf() - dateTime.getTimezoneOffset() * 60000).toISOString();
            // let token = this.restProvider.cryptography(respondent.email + respondent.residenceTimeRange + respondent.residenceNeighborhood.id + respondent.salaryRange + createdAt);
            var token = _this.restProvider.cryptography(respondent.type + respondent.caseTest + createdAt);
            var json = {
                "cpf": respondent.cpf ? respondent.cpf : null,
                "email": respondent.email ? respondent.email : null,
                "residence_time_range": respondent.residenceTimeRange ? respondent.residenceTimeRange : null,
                "residence_neighborhood_id": respondent.residenceNeighborhood ? respondent.residenceNeighborhood.id : null,
                "job_city_id": respondent.jobCity ? respondent.jobCity.id : null,
                "job_neighborhood_id": respondent.jobNeighborhood ? respondent.jobNeighborhood.id : null,
                "salary_range": respondent.salaryRange ? respondent.salaryRange : null,
                //-----------------NOVOS CAMPOS-----------------
                "name": respondent.name ? respondent.name : null,
                "age_range": respondent.ageRange ? respondent.ageRange : null,
                "gender": respondent.gender ? respondent.gender : null,
                "phone": respondent.phone ? respondent.phone : null,
                "code": respondent.code ? respondent.code : null,
                "points": respondent.points ? respondent.points : null,
                "course_entry": respondent.courseEntry ? respondent.courseEntry : null,
                "course_left": respondent.courseLeft ? respondent.courseLeft : null,
                "course_name": respondent.courseName ? respondent.courseName : null,
                "residence_city_id": respondent.residenceCity ? respondent.residenceCity.id : null,
                "job_address": respondent.jobAddress ? respondent.jobAddress : null,
                "job_name": respondent.jobName ? respondent.jobName : null,
                "whatsapp": respondent.whatsapp ? respondent.whatsapp : null,
                "game_type": respondent.gameType ? respondent.gameType : null,
                //-----------------NOVOS CAMPOS-----------------
                //-----------------CAMPOS OBRIGATÓRIOS-----------------
                "type": respondent.type ? respondent.type : null,
                "case_test": respondent.caseTest ? respondent.caseTest : null,
                "created_at": createdAt ? createdAt : null,
                "token": token
                //-----------------CAMPOS OBRIGATÓRIOS-----------------
            };
            var data = JSON.stringify(json);
            //-----------------INSERÇÃO NA API-----------------
            _this.http.post(_this.restProvider.API_URL + "insert-respondent.php", data, { headers: _this.restProvider.headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
            //-----------------INSERÇÃO NA API-----------------
        });
    };
    RespondentProvider.prototype.updateRespondent = function (respondent) {
        var _this = this;
        return new Promise(function (resolve) {
            var dateTime = new Date();
            var updatedAt = new Date(dateTime.valueOf() - dateTime.getTimezoneOffset() * 60000).toISOString();
            // let token = this.restProvider.cryptography(respondent.id + respondent.email + respondent.residenceTimeRange + respondent.residenceNeighborhood.id + respondent.salaryRange + updatedAt);
            var token = _this.restProvider.cryptography(respondent.id + respondent.type + respondent.caseTest + updatedAt);
            var json = {
                "cpf": respondent.cpf ? respondent.cpf : null,
                "email": respondent.email ? respondent.email : null,
                "residence_time_range": respondent.residenceTimeRange ? respondent.residenceTimeRange : null,
                "residence_neighborhood_id": respondent.residenceNeighborhood ? respondent.residenceNeighborhood.id : null,
                "job_city_id": respondent.jobCity ? respondent.jobCity.id : null,
                "job_neighborhood_id": respondent.jobNeighborhood ? respondent.jobNeighborhood.id : null,
                "salary_range": respondent.salaryRange ? respondent.salaryRange : null,
                //-----------------NOVOS CAMPOS-----------------
                "name": respondent.name ? respondent.name : null,
                "age_range": respondent.ageRange ? respondent.ageRange : null,
                "gender": respondent.gender ? respondent.gender : null,
                "phone": respondent.phone ? respondent.phone : null,
                "code": respondent.code ? respondent.code : null,
                "points": respondent.points ? respondent.points : null,
                "course_entry": respondent.courseEntry ? respondent.courseEntry : null,
                "course_left": respondent.courseLeft ? respondent.courseLeft : null,
                "course_name": respondent.courseName ? respondent.courseName : null,
                "residence_city_id": respondent.residenceCity ? respondent.residenceCity.id : null,
                "job_address": respondent.jobAddress ? respondent.jobAddress : null,
                "job_name": respondent.jobName ? respondent.jobName : null,
                "whatsapp": respondent.whatsapp ? respondent.whatsapp : null,
                "game_type": respondent.gameType ? respondent.gameType : null,
                //-----------------NOVOS CAMPOS-----------------
                //-----------------CAMPOS OBRIGATÓRIOS-----------------
                "type": respondent.type ? respondent.type : null,
                "case_test": respondent.caseTest ? respondent.caseTest : null,
                "updated_at": updatedAt ? updatedAt : null,
                "id": respondent.id ? respondent.id : null,
                "token": token
                //-----------------CAMPOS OBRIGATÓRIOS-----------------
            };
            var data = JSON.stringify(json);
            //-----------------ATUALIZAÇÃO NA API-----------------
            _this.http.post(_this.restProvider.API_URL + "update-respondent.php", data, { headers: _this.restProvider.headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                console.log(error);
                resolve(error);
            });
            //-----------------ATUALIZAÇÃO NA API-----------------
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_question_question__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_respondent_respondent__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_prioritization_prioritization__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_answer_answer__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_network__ = __webpack_require__(165);
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
                __WEBPACK_IMPORTED_MODULE_12__providers_questionary_questionary__["d" /* QuestionaryProvider */],
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\IONIC Projects\neiru_surveys_app-develop\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button class="menu-questionnary" ion-item (click)="navigateQuestionaryList()" menuClose>\n        <ion-icon range-left name="ios-list" class="menu-questionnary">\n        </ion-icon>\n        Questionários\n      </button>\n      <button class="menu-profile" ion-item (click)="navigateProfile()" menuClose>\n        <ion-icon range-left name="md-person" class="menu-profile">\n        </ion-icon>\n        Perfil\n      </button>\n      <button class="menu-about" ion-item (click)="navigateToAbout()" menuClose>\n        <ion-icon range-left name="md-information-circle" class="menu-about">\n        </ion-icon>\n        Sobre\n      </button>\n      <!-- <button class="menu-data-clear" ion-item (click)="refreshData()" menuClose>\n        <ion-icon range-left name="md-remove-circle" class="menu-data-clear">\n        </ion-icon>\n        Limpar dados\n      </button> -->\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"D:\IONIC Projects\neiru_surveys_app-develop\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return QuestionaryProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Questionary; });
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
            _this.http.get(_this.restProvider.API_URL + "get-all-questionaries-by-plan.php?plan=" + plan.id, { headers: _this.restProvider.headers })
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
                    "questionary_name": questionary.name,
                    "questionary_icon": questionary.icon
                };
                questionariesJson.push(item);
            });
            var json = {
                "plan": planJson,
                "questionaries": JSON.parse(JSON.stringify(questionariesJson)),
                "respondent": respondentJson
            };
            var data = JSON.stringify(json);
            _this.http.post(_this.restProvider.API_URL + "get-all-plan-questionaries-answered-by-respondent.php", data, { headers: _this.restProvider.headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
            });
        });
    };
    QuestionaryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__rest_rest__["a" /* RestProvider */]])
    ], QuestionaryProvider);
    return QuestionaryProvider;
}());

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
        setTimeout(function () {
            _this.changeZone();
            _this.existsAppCityPlan();
            _this.checkTrigger();
        }, 1000);
    }
    IntroPage.prototype.ionViewDidEnter = function () {
        this.checkTrigger();
    };
    IntroPage.prototype.checkTrigger = function () {
        var _this = this;
        //temporário
        // this.useGamification();
        // this.dontuseGamification();
        //Temporário
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
                    //IMPORTANTE - SELEÇÃO DA CIDADE
                    if (c.name == "Itajubá") {
                        _this.city = c;
                        _this.planProvider.getAllPlansByCity(_this.city)
                            .then(function (plans) {
                            if (plans != null) {
                                _this.storage.set('city', _this.city).then(function () {
                                    _this.plans = plans;
                                    _this.questionaries = [];
                                    _this.plans.forEach(function (p) {
                                        //IMPORTANTE - SELEÇÃO DO PLANO
                                        if (p.name == "Avaliação POSCOMP") {
                                            _this.plan = p;
                                            _this.questionaryProvider.getAllQuestionariesByPlan(_this.plan)
                                                .then(function (questionaries) {
                                                if (questionaries != null) {
                                                    _this.storage.set('plan', _this.plan);
                                                    _this.questionaries = questionaries;
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
                        // let alert = this.alertCtrl.create({
                        //   title: 'Já existe um usuário respondendo os questionários',
                        //   message: 'Você gostaria de continuar respondendo os questionários com o usuário: <br/> CPF - ' + respondent.cpf + '?',
                        //   buttons: [{
                        //     text: "Sim",
                        //     handler: () => {
                        _this.navigateQuestionaryList();
                        //     }
                        //   }, {
                        //     text: "Não",
                        //     handler: () => {
                        //       this.removeStoredData();
                        //     }
                        //   }]
                        // });
                        // alert.present();
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
                                                _this.storage.remove('useGame')
                                                    .then(function () {
                                                    _this.storage.remove('helpHome')
                                                        .then(function () {
                                                        console.log("Remoção de dados concluída");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], IntroPage.prototype, "slides", void 0);
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\intro\intro.html"*/'<ion-header>\n  <div (ionChange)="checkTrigger()" id="trigger"></div>\n  <ion-navbar>\n    <div offset-3 col-6 text-center>\n      <img class="img-responsive" src="assets/imgs/header-logo.png" />\n    </div>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-slides pager (ionSlideTap)="nextSlide($event)">\n    <!-- Slide 0 - Sem gamificação-->\n    <ion-slide padding *ngIf="!useGame">\n      <div class="slide-header">\n        <!-- <h1 class="title-box-no-game">Reurbanização do centro de Pouso Alegre</h1> -->\n        <!------------------------ CASE POSCOMP ------------------------>\n        <h1 class="title-box-no-game">Autoavaliação do Programa de Mestrado em \n          Ciência e Tecnologia da Computação (POSCOMP)</h1>\n        <!------------------------ CASE POSCOMP ------------------------>\n      </div>\n      <div class="dialogue-box dialogue-box-not-game">\n        <div class="tdialogue-box-text">\n          <!-- <p class="text-dialog">\n            Bem vindo a <strong>pesquisa de opinião</strong> sobre a reurbanização do centro de <strong>Pouso\n              Alegre</strong>!\n          </p>\n          <p class="text-dialog">\n            Responda os questionários para que nós possamos entender suas necessidades.\n          </p> -->\n          <!------------------------ CASE POSCOMP ------------------------>\n          <p class="text-dialog">\n            Bem vindo! Esta é uma <strong>pesquisa de opinião</strong> para a autoavaliação do \n            <strong>POSCOMP</strong> da UNIFEI!\n          </p>\n          <p class="text-dialog">\n            Nos ajude a <strong>avaliar o programa</strong> contribuindo com sua participação nessa pesquisa!\n          </p>\n          <!------------------------ CASE POSCOMP ------------------------>\n        </div>\n      </div>\n      <button ion-button margin-bottom (click)="skip()">\n        <ion-icon id="button-participate-not-game" class="text-button">\n          Participar\n        </ion-icon>\n      </button>\n    </ion-slide>\n    <!-- Slide 0 - Sem gamificação-->\n    <!-- Slide 1 -->\n    <ion-slide class="slide-img" padding *ngIf="useGame">\n      <div class="arrow-right">\n        <ion-icon float-right name="ios-arrow-forward"></ion-icon>\n      </div>\n      <div class="slide-header">\n        <h1 class="title-box">Olá, seja bem vindo!</h1>\n      </div>\n      <img class="img-responsive img-slide-game" src="assets/imgs/intro10.jpg" />\n      <div class="dialogue-box">\n        <div class="tdialogue-box-text">\n          <!-- <p class="text-dialog">\n            Olá! Que bom que você quer participar da pesquisa de opinião para a reurbanização do centro de Pouso Alegre!\n          </p>\n          <p class="text-dialog">\n            Vamos entender o que é a reurbanização?\n          </p> -->\n          <!------------------------ CASE POSCOMP ------------------------>\n          <p class="text-dialog">\n            Olá! Que bom que você quer participar da pesquisa de opinião para a \n            <strong>autoavaliação do POSCOMP</strong>!\n          </p>\n          <p class="text-dialog">\n            Vamos entender o que é a <strong>autoavaliação</strong>?\n            <!------------------------ CASE POSCOMP ------------------------>\n          </p>\n        </div>\n      </div>\n      <div class="slide-header">\n        <div padding-bottom text-right>\n          <a class="button-skip-game" (click)="skip()">pular</a>\n          <ion-icon name="arrow-dropright"></ion-icon>\n        </div>\n      </div>\n    </ion-slide>\n    <!-- Slide 1 -->\n    <!-- Slide 2 -->\n    <ion-slide class="slide-img" padding *ngIf="useGame">\n      <div class="arrow-left">\n        <ion-icon float-left name="ios-arrow-back"></ion-icon>\n      </div>\n      <div class="arrow-right">\n        <ion-icon float-right name="ios-arrow-forward"></ion-icon>\n      </div>\n      <div class="slide-header">\n        <!-- <h1 class="title-box">Você sabe o que é reurbanização?</h1> -->\n        <!------------------------ CASE POSCOMP ------------------------>\n        <h1 class="title-box">Autoavaliação do POSCOMP</h1>\n        <!------------------------ CASE POSCOMP ------------------------>\n      </div>\n      <img class="img-responsive img-slide-game" src="assets/imgs/intro7.jpg" />\n      <div class="dialogue-box">\n        <div class="tdialogue-box-text">\n          <!-- <p class="text-dialog">\n            Com o crescimento da cidade a área central tem apresentado problemas:\n          </p>\n          <p class="text-dialog">\n            Desgaste da rua, calçadas estreitas e falta de semáforos e faixas de pedestres.\n          </p> -->\n          <!------------------------ CASE POSCOMP ------------------------>\n          <p class="text-dialog">\n            A <strong>autoavaliação</strong> é realizada para monitorar o <strong>desempenho</strong>\n            e melhorar a <strong>qualidade</strong> do programa de mestrado.\n          </p>\n          <!------------------------ CASE POSCOMP ------------------------>\n        </div>\n      </div>\n      <div class="slide-header">\n        <div padding-bottom text-right>\n          <a class="button-skip-game" (click)="skip()">pular</a>\n          <ion-icon name="arrow-dropright"></ion-icon>\n        </div>\n      </div>\n    </ion-slide>\n    <!-- Slide 2 -->\n    <!-- Slide 3 -->\n    <ion-slide class="slide-img" padding *ngIf="useGame">\n      <div class="arrow-left">\n        <ion-icon float-left name="ios-arrow-back"></ion-icon>\n      </div>\n      <div class="arrow-right">\n        <ion-icon float-right name="ios-arrow-forward"></ion-icon>\n      </div>\n      <div class="slide-header">\n        <!-- <h1 class="title-box">A reurbanização da área central</h1> -->\n        <!------------------------ CASE POSCOMP ------------------------>\n        <h1 class="title-box">Autoavaliação do POSCOMP</h1>\n        <!------------------------ CASE POSCOMP ------------------------>\n      </div>\n      <img class="img-responsive img-slide-game" src="assets/imgs/intro9.jpg" />\n      <div class="dialogue-box">\n        <div class="tdialogue-box-text">\n          <!-- <p class="text-dialog">\n            A <strong>reurbanização</strong>\n            é um processo de organização da infraestrutura de uma região para garantir o desenvolvimento humano das\n            cidades.\n          </p> -->\n          <!------------------------ CASE POSCOMP ------------------------>\n          <p class="text-dialog">\n           Um dos <strong>intrumentos</strong> que estamos utilizando são \n           <strong>questionários</strong> em colaboração com os alunos, ex-alunos e professores.\n          </p>\n          <!------------------------ CASE POSCOMP ------------------------>\n        </div>\n      </div>\n      <div class="slide-header">\n        <div padding-bottom text-right>\n          <a class="button-skip-game" (click)="skip()">pular</a>\n          <ion-icon name="arrow-dropright"></ion-icon>\n        </div>\n      </div>\n    </ion-slide>\n    <!-- Slide 3 -->\n    <!-- Slide 4 -->\n    <ion-slide class="slide-img" padding *ngIf="useGame">\n      <div class="arrow-left">\n        <ion-icon float-left name="ios-arrow-back"></ion-icon>\n      </div>\n      <div class="arrow-right">\n        <ion-icon float-right name="ios-arrow-forward"></ion-icon>\n      </div>\n      <div class="slide-header">\n        <h1 class="title-box">Sua opinião é importante!</h1>\n      </div>\n      <img class="img-responsive img-slide-game" src="assets/imgs/intro3.jpg" />\n      <div class="dialogue-box">\n        <div class="tdialogue-box-text">\n          <p class="text-dialog">\n            Sua <strong>participação</strong> tem muita importância!\n          </p>\n          <!-- <p class="text-dialog">\n            Essa pesquisa de opinião possibilitará uma analise detalhada da sua necessidade como cidadão de Pouso Alegre\n          </p> -->\n          <!------------------------ CASE POSCOMP ------------------------>\n          <p class="text-dialog">\n            Essa pesquisa de opinião contribuirá com a \n            <strong>melhoria</strong> do <strong>programa de mestrado</strong>\n          </p>\n          <!------------------------ CASE POSCOMP ------------------------>\n        </div>\n      </div>\n      <div class="slide-header">\n        <div padding-bottom text-right>\n          <a class="button-skip-game" (click)="skip()">pular</a>\n          <ion-icon name="arrow-dropright"></ion-icon>\n        </div>\n      </div>\n    </ion-slide>\n    <!-- Slide 4 -->\n    <!-- Slide 5 -->\n    <ion-slide *ngIf="useGame" class="slide-img" padding>\n      <div class="arrow-left">\n        <ion-icon float-left name="ios-arrow-back"></ion-icon>\n      </div>\n      <!-- Pontuação -->\n      <ion-grid>\n        <ion-row class="title-last-row">\n          <ion-col col-3>\n            <img class="img-award" src="assets/imgs/premio1.png" />\n          </ion-col>\n          <ion-col text-justify col-9>\n            <h2 class="title-box-last">Consiga pontos para aumentar seu nível de\n              <strong>participação</strong>!</h2>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <!-- Pontuação -->\n      <img class="img-responsive-last" src="assets/imgs/intro4.jpg" />\n      <div class="dialogue-box-last">\n        <div class="tdialogue-box-text">\n          <p class="text-dialog-last">\n            Respondendo os questionários você coleta pontos que refletem na sua <strong>participação</strong>!\n          </p>\n          <p class="text-dialog-last">\n            Envie sua <strong>opinião</strong> para nós!\n          </p>\n        </div>\n      </div>\n      <button ion-button margin-bottom (click)="skip()">\n        <ion-icon id="button-participate-game" class="text-button">\n          Participar!\n        </ion-icon>\n      </button>\n    </ion-slide>\n    <!-- Slide 5 -->\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\intro\intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_city_city__["a" /* CityProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_plan_plan__["b" /* PlanProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_questionary_questionary__["d" /* QuestionaryProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__["a" /* RestProvider */]])
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
            _this.http.get(_this.restProvider.API_URL + "get-all-cities.php", { headers: _this.restProvider.headers })
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
            _this.http.get(_this.restProvider.API_URL + "get-all-cities-with-plan.php", { headers: _this.restProvider.headers })
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
            _this.http.get(_this.restProvider.API_URL + "get-all-plans-by-city.php?city=" + city.id, { headers: _this.restProvider.headers })
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