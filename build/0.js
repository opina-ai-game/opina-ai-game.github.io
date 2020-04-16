webpackJsonp([0],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RespondentProfilePageModule", function() { return RespondentProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__respondent_profile__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RespondentProfilePageModule = /** @class */ (function () {
    function RespondentProfilePageModule() {
    }
    RespondentProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__respondent_profile__["a" /* RespondentProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__respondent_profile__["a" /* RespondentProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */]
            ],
        })
    ], RespondentProfilePageModule);
    return RespondentProfilePageModule;
}());

//# sourceMappingURL=respondent-profile.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BrMaskModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrMaskerIonic3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);


var BrMaskModel = (function () {
    function BrMaskModel() {
        this.type = 'alfa';
        this.decimal = 2;
        this.decimalCaracter = ",";
        this.userCaracters = false;
        this.numberAndTousand = false;
    }
    return BrMaskModel;
}());

var BrMaskerIonic3 = (function () {
    function BrMaskerIonic3(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.brmasker = new BrMaskModel();
    }
    BrMaskerIonic3.prototype.inputKeyup = function (event) {
        var value = this.returnValue(event.target.value);
        this.writeValue(value);
        event.target.value = value;
    };
    BrMaskerIonic3.prototype.inputOnblur = function (event) {
        var value = this.returnValue(event.value);
        this.writeValue(value);
        event.value = value;
    };
    BrMaskerIonic3.prototype.inputFocus = function (event) {
        var value = this.returnValue(event.value);
        this.writeValue(value);
        event.value = value;
    };
    BrMaskerIonic3.prototype.ngOnInit = function () {
        if (!this.brmasker.type) {
            this.brmasker.type = 'all';
        }
        if (!this.brmasker.decimal) {
            this.brmasker.decimal = 2;
        }
        if (!this.brmasker.decimalCaracter) {
            this.brmasker.decimalCaracter = ',';
        }
    };
    BrMaskerIonic3.prototype.writeValue = function (fn) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', fn);
    };
    BrMaskerIonic3.prototype.registerOnChange = function (fn) {
        return;
    };
    BrMaskerIonic3.prototype.registerOnTouched = function (fn) {
        return;
    };
    BrMaskerIonic3.prototype.setDisabledState = function (isDisabled) {
        if (isDisabled) {
            this._renderer.setElementAttribute(this._elementRef.nativeElement, 'disabled', 'true');
        }
        else {
            this._renderer.setElementAttribute(this._elementRef.nativeElement, 'disabled', 'false');
        }
    };
    BrMaskerIonic3.prototype.writeCreateValue = function (value, config) {
        if (config === void 0) { config = new BrMaskModel(); }
        if (value && config.phone) {
            return value.replace(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gi, '$1 ($2) $3-$4');
        }
        if (value && config.money) {
            return this.writeValueMoney(value, config);
        }
        if (value && config.person) {
            return this.writeValuePerson(value);
        }
        if (value && config.percent) {
            return this.writeValuePercent(value);
        }
        if (value && config.mask) {
            this.brmasker.mask = config.mask;
            if (config.len) {
                this.brmasker.len = config.len;
            }
            return this.onInput(value);
        }
        return value;
    };
    BrMaskerIonic3.prototype.writeValuePercent = function (value) {
        value.replace(/\D/gi, '');
        value.replace(/%/gi, '');
        return value.replace(/([0-9]{0})$/gi, '%$1');
    };
    BrMaskerIonic3.prototype.writeValuePerson = function (value) {
        if (value.length <= 11) {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, '\$1.\$2.\$3\-\$4');
        }
        else {
            return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/gi, '\$1.\$2.\$3\/\$4\-\$5');
        }
    };
    BrMaskerIonic3.prototype.writeValueMoney = function (value, config) {
        if (config === void 0) { config = new BrMaskModel(); }
        return this.moneyMask(value, config);
    };
    BrMaskerIonic3.prototype.returnValue = function (value) {
        if (!this.brmasker.mask) {
            this.brmasker.mask = '';
        }
        if (value) {
            var v = value;
            if (this.brmasker.type == 'alfa') {
                v = v.replace(/\d/gi, '');
            }
            if (this.brmasker.type == 'num') {
                v = v.replace(/\D/gi, '');
            }
            if (this.brmasker.money) {
                return this.moneyMask(this.onInput(v), this.brmasker);
            }
            if (this.brmasker.phone) {
                return this.phoneMask(v);
            }
            if (this.brmasker.phoneNotDDD) {
                return this.phoneNotDDDMask(v);
            }
            if (this.brmasker.person) {
                return this.peapollMask(v);
            }
            if (this.brmasker.percent) {
                return this.percentMask(v);
            }
            if (this.brmasker.numberAndTousand) {
                return this.thousand(v);
            }
            if (this.brmasker.userCaracters) {
                return this.usingSpecialCharacters(v, this.brmasker.mask, this.brmasker.len);
            }
            return this.onInput(v);
        }
        else {
            return '';
        }
    };
    BrMaskerIonic3.prototype.percentMask = function (v) {
        var tmp = v;
        tmp = tmp.replace(/\D/gi, '');
        tmp = tmp.replace(/%/gi, '');
        tmp = tmp.replace(/([0-9]{0})$/gi, '%$1');
        return tmp;
    };
    BrMaskerIonic3.prototype.phoneMask = function (v) {
        var n = v;
        if (n.length > 14) {
            this.brmasker.len = 15;
            this.brmasker.mask = '(99) 99999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{2})(\d)/gi, '$1 $2');
            n = n.replace(/(\d{5})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        else {
            this.brmasker.len = 14;
            this.brmasker.mask = '(99) 9999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{2})(\d)/gi, '$1 $2');
            n = n.replace(/(\d{4})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        return this.onInput(n);
    };
    BrMaskerIonic3.prototype.phoneNotDDDMask = function (v) {
        var n = v;
        if (n.length > 9) {
            this.brmasker.len = 10;
            this.brmasker.mask = '99999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{5})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        else {
            this.brmasker.len = 9;
            this.brmasker.mask = '9999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{4})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        return this.onInput(n);
    };
    BrMaskerIonic3.prototype.peapollMask = function (v) {
        var n = v;
        if (n.length > 14) {
            this.brmasker.len = 18;
            this.brmasker.mask = '99.999.999/9999-99';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{2})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d)/gi, '$1/$2');
            n = n.replace(/(\d{4})(\d{1,4})$/gi, '$1-$2');
            n = n.replace(/(\d{2})(\d{1,2})$/gi, '$1$2');
        }
        else {
            this.brmasker.len = 14;
            this.brmasker.mask = '999.999.999-99';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{3})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d{1,2})$/gi, '$1-$2');
        }
        return this.onInput(n);
    };
    BrMaskerIonic3.prototype.moneyMask = function (value, config) {
        var decimal = config.decimal || this.brmasker.decimal;
        value = value
            .replace(/\D/gi, '')
            .replace(new RegExp("([0-9]{" + decimal + "})$", "g"), config.decimalCaracter + '$1');
        if (value.length === decimal + 1) {
            return "0" + value; // leading 0 so we're not left with something weird like ",50"
        }
        else if (value.length > decimal + 2 && value.charAt(0) === '0') {
            return value.substr(1); // remove leading 0 when we don't need it anymore
        }
        if (config.thousand && value.length > (Number(4) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.decimalCaracter + "$2");
        }
        if (config.thousand && value.length > (Number(8) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.thousand + "([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.thousand + "$2" + config.decimalCaracter + "$3");
        }
        return value;
    };
    BrMaskerIonic3.prototype.onInput = function (value) {
        var ret = this.formatField(value, this.brmasker.mask, this.brmasker.len);
        return ret;
        // if (ret) {
        //   this.element.nativeElement.value = ret;
        // }
    };
    BrMaskerIonic3.prototype.thousand = function (value) {
        var val = value.replace(/\D/gi, '');
        var reverse = val.toString().split('').reverse().join('');
        var thousands = reverse.match(/\d{1,3}/g);
        if (thousands) {
            return thousands.join("" + (this.brmasker.thousand || '.')).split('').reverse().join('');
        }
        return val;
    };
    BrMaskerIonic3.prototype.usingSpecialCharacters = function (campo, Mascara, tamanho) {
        if (!tamanho) {
            tamanho = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\,| /gi;
        var campoSoNumeros = campo.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === ','));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    BrMaskerIonic3.prototype.formatField = function (campo, Mascara, tamanho) {
        if (!tamanho) {
            tamanho = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\$|\&|\%|\:| /gi;
        var campoSoNumeros = campo.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === '/'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '(') || (Mascara.charAt(i) === ')') || (Mascara.charAt(i) === ' '));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === ',') || (Mascara.charAt(i) === '*') || (Mascara.charAt(i) === '+'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '@') || (Mascara.charAt(i) === '#') || (Mascara.charAt(i) === ':'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '$') || (Mascara.charAt(i) === '&') || (Mascara.charAt(i) === '%'));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    return BrMaskerIonic3;
}());

BrMaskerIonic3.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[brmasker]',
                providers: [
                    {
                        provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
                        useExisting: BrMaskerIonic3,
                        multi: true
                    }
                ]
            },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
BrMaskerIonic3.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
]; };
BrMaskerIonic3.propDecorators = {
    'brmasker': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'inputKeyup': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['keyup', ['$event'],] },],
    'inputOnblur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['ionBlur', ['$event'],] },],
    'inputFocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['ionFocus', ['$event'],] },],
};
//# sourceMappingURL=brmasker-ionic-3.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BrMaskServicesModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrMaskerIonicServices3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var BrMaskServicesModel = (function () {
    function BrMaskServicesModel() {
        this.type = 'alfa';
        this.decimal = 2;
        this.decimalCaracter = ",";
        this.userCaracters = false;
        this.numberAndTousand = false;
    }
    return BrMaskServicesModel;
}());

var BrMaskerIonicServices3 = (function () {
    function BrMaskerIonicServices3() {
        this.brmasker = new BrMaskServicesModel();
    }
    BrMaskerIonicServices3.prototype.ngOnInit = function () {
        if (!this.brmasker.type) {
            this.brmasker.type = 'all';
        }
        if (!this.brmasker.decimal) {
            this.brmasker.decimal = 2;
        }
        if (!this.brmasker.decimalCaracter) {
            this.brmasker.decimalCaracter = ',';
        }
    };
    BrMaskerIonicServices3.prototype.writeCreateValue = function (value, config) {
        if (config === void 0) { config = new BrMaskServicesModel(); }
        if (value && config.phone) {
            return value.replace(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gi, '$1 ($2) $3-$4');
        }
        if (value && config.money) {
            return this.writeValueMoney(value, config);
        }
        if (value && config.person) {
            return this.writeValuePerson(value);
        }
        if (value && config.percent) {
            return this.writeValuePercent(value);
        }
        if (value && config.numberAndTousand) {
            return this.writeValueNumberAndThousand(value);
        }
        if (value && config.userCaracters) {
            return this.writeValueusingSpecialCharacters(value);
        }
        if (value && config.mask) {
            this.brmasker.mask = config.mask;
            if (config.len) {
                this.brmasker.len = config.len;
            }
            return this.onInput(value);
        }
        return value;
    };
    BrMaskerIonicServices3.prototype.writeValuePercent = function (value) {
        value.replace(/\D/gi, '');
        value.replace(/%/gi, '');
        return value.replace(/([0-9]{0})$/gi, '%$1');
    };
    BrMaskerIonicServices3.prototype.writeValuePerson = function (value) {
        if (value.length <= 11) {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, '\$1.\$2.\$3\-\$4');
        }
        else {
            return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/gi, '\$1.\$2.\$3\/\$4\-\$5');
        }
    };
    BrMaskerIonicServices3.prototype.writeValueMoney = function (value, config) {
        if (config === void 0) { config = new BrMaskServicesModel(); }
        return this.moneyMask(value, config);
    };
    BrMaskerIonicServices3.prototype.writeValueNumberAndThousand = function (value, config) {
        if (config === void 0) { config = new BrMaskServicesModel(); }
        return this.thousand(value);
    };
    BrMaskerIonicServices3.prototype.writeValueusingSpecialCharacters = function (value, config) {
        if (config === void 0) { config = new BrMaskServicesModel(); }
        return this.usingSpecialCharacters(value, config.mask, config.len);
    };
    BrMaskerIonicServices3.prototype.moneyMask = function (value, config) {
        var decimal = config.decimal || this.brmasker.decimal;
        value = value
            .replace(/\D/gi, '')
            .replace(new RegExp("([0-9]{" + decimal + "})$", "g"), config.decimalCaracter + '$1');
        if (value.length === decimal + 1) {
            return "0" + value; // leading 0 so we're not left with something weird like ",50"
        }
        else if (value.length > decimal + 2 && value.charAt(0) === '0') {
            return value.substr(1); // remove leading 0 when we don't need it anymore
        }
        if (config.thousand && value.length > (Number(4) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.decimalCaracter + "$2");
        }
        if (config.thousand && value.length > (Number(8) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.thousand + "([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.thousand + "$2" + config.decimalCaracter + "$3");
        }
        return value;
    };
    BrMaskerIonicServices3.prototype.onInput = function (value) {
        var ret = this.formatField(value, this.brmasker.mask, this.brmasker.len);
        return ret;
    };
    BrMaskerIonicServices3.prototype.thousand = function (value) {
        var val = value.replace(/\D/gi, '');
        var reverse = val.toString().split('').reverse().join('');
        var thousands = reverse.match(/\d{1,3}/g);
        val = thousands.join("" + (this.brmasker.thousand || '.')).split('').reverse().join('');
        return val;
    };
    BrMaskerIonicServices3.prototype.usingSpecialCharacters = function (campo, Mascara, tamanho) {
        if (!tamanho) {
            tamanho = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\,| /gi;
        var campoSoNumeros = campo.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === ','));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    BrMaskerIonicServices3.prototype.formatField = function (campo, Mascara, tamanho) {
        if (!tamanho) {
            tamanho = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\$|\&|\%|\:| /gi;
        var campoSoNumeros = campo.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === '/'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '(') || (Mascara.charAt(i) === ')') || (Mascara.charAt(i) === ' '));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === ',') || (Mascara.charAt(i) === '*') || (Mascara.charAt(i) === '+'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '@') || (Mascara.charAt(i) === '#') || (Mascara.charAt(i) === ':'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '$') || (Mascara.charAt(i) === '&') || (Mascara.charAt(i) === '%'));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    return BrMaskerIonicServices3;
}());

BrMaskerIonicServices3.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[brmasker]',
            },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
BrMaskerIonicServices3.ctorParameters = function () { return []; };
//# sourceMappingURL=brmasker-ionic-services.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RespondentProfilePage; });
/* unused harmony export ResidenceTime */
/* unused harmony export SalaryRange */
/* unused harmony export AgeRange */
/* unused harmony export Respondent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__intro_intro__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_city_city__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_neighborhood_neighborhood__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_database_database__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_respondent_respondent__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_prioritization_prioritization__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var RespondentProfilePage = /** @class */ (function () {
    function RespondentProfilePage(menuCtrl, navCtrl, databaseProvider, cityProvider, formBuilder, respondentProvider, neighborhoodProvider, priorizationProvider, alertCtrl, storage, loadingCtrl) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.databaseProvider = databaseProvider;
        this.cityProvider = cityProvider;
        this.formBuilder = formBuilder;
        this.respondentProvider = respondentProvider;
        this.neighborhoodProvider = neighborhoodProvider;
        this.priorizationProvider = priorizationProvider;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.respondentId = 0;
        this.isCommerce = false;
        this.userType = "cidadão";
        this.case_test = "POSCOMP";
        this.ageRangeName = "";
        this.genderList = [];
        this.courseEntryList = [];
        this.courseLeftList = [];
        this.courseNameList = [];
        this.userTypeList = [];
        this.cities = [];
        this.residenceTimeList = [];
        this.salaryRangeList = [];
        this.ageRangeList = [];
        this.residenceTimeName = "";
        this.salaryRangeName = "";
        this.metricItems = [];
        this.jobNeighborhoodDisabled = true;
        this.courseDisabled = true;
        this.isSameJobCity = "hide";
        this.useGame = false;
        this.editing = false;
        this.hideField = false;
        this.isDiscent = false;
        this.isDiscentEvaded = false;
        this.isDiscentConcluded = false;
        this.storage.get('useGame').then(function (data) { return _this.useGame = data; });
        this.storage.set('isRuralZone', false);
        this.createForm();
        this.getAllCities();
        this.loadMetrics();
        this.loadResidenceTime();
        this.loadSalaryRange();
        this.loadAgeRange();
        this.createGenderList();
        this.createCourseList();
        this.createUserTypeList();
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        setTimeout(function () {
            _this.existsRespondent();
        }, 1000);
    }
    RespondentProfilePage.prototype.createForm = function () {
        this.respondentForm = this.formBuilder.group({
            // cpf: ['', [Validators.required], this.validateCPF.bind(this)],
            // email: [''],
            code: [''],
            courseEntry: [''],
            courseLeft: [''],
            // courseName: [''],
            userType: [''],
            // residenceCity: [''],
            // jobAddress: [''],
            // jobName: [''],
            // whatsapp: [''],
            // residenceTimeRange: [''],
            // residenceNeighborhood: ['', [Validators.required]],
            // jobCity: [''],
            // jobNeighborhood: [''],
            // salaryRange: [''],
            // age: [''],
            // gender: [''],
            name: [''],
            // phone: [''],
            isDiscentConcluded: [''],
        });
        // this.respondentForm.controls['residenceTimeRange'].setValue(0);
        // this.respondentForm.controls['salaryRange'].setValue(0);
    };
    RespondentProfilePage.prototype.existsRespondent = function () {
        var _this = this;
        this.storage.get('respondent')
            .then(function (respondent) {
            _this.setFormData();
            if (respondent != null) {
                _this.editing = true;
                _this.respondentId = respondent.id;
                // this.respondentForm.controls['cpf'].setValue(respondent.cpf);
                // this.respondentForm.controls['email'].setValue(respondent.email);
                // this.respondentForm.controls['residenceTimeRange'].setValue(respondent.residenceTimeRange);
                // this.respondentForm.controls['salaryRange'].setValue(respondent.salaryRange);
                // this.respondentForm.controls['residenceNeighborhood'].setValue(respondent.residenceNeighborhood);
                // this.respondentForm.controls['jobCity'].setValue(respondent.jobCity);
                // this.respondentForm.controls['age'].setValue(respondent.ageRange);
                // this.respondentForm.controls['gender'].setValue(respondent.gender);
                _this.respondentForm.controls['name'].setValue(respondent.name);
                // this.respondentForm.controls['phone'].setValue(respondent.phone);
                _this.respondentForm.controls['code'].setValue(respondent.code);
                _this.respondentForm.controls['courseEntry'].setValue(respondent.courseEntry);
                _this.respondentForm.controls['courseLeft'].setValue(respondent.courseLeft);
                // this.respondentForm.controls['courseName'].setValue(respondent.courseName);
                _this.respondentForm.controls['userType'].setValue(respondent.type);
                // this.respondentForm.controls['residenceCity'].setValue(respondent.residenceCity);
                // this.respondentForm.controls['jobAddress'].setValue(respondent.jobAddress);
                // this.respondentForm.controls['jobName'].setValue(respondent.jobName);
                // this.respondentForm.controls['whatsapp'].setValue(respondent.whatsapp);
                _this.userType = respondent.type;
                if (_this.userType == "Discente formado") {
                    _this.isDiscent = true;
                    _this.isDiscentConcluded = true;
                    _this.isDiscentEvaded = true;
                    _this.respondentForm.controls['isDiscentConcluded'].setValue(true);
                    _this.respondentForm.controls['userType'].setValue("Ex-aluno");
                }
                else if (_this.userType == "Discente evadido") {
                    _this.isDiscent = true;
                    _this.isDiscentConcluded = false;
                    _this.isDiscentEvaded = true;
                    _this.respondentForm.controls['isDiscentConcluded'].setValue(false);
                    _this.respondentForm.controls['userType'].setValue("Ex-aluno");
                }
                else if (_this.userType == "Discente") {
                    _this.isDiscent = true;
                    _this.isDiscentConcluded = false;
                    _this.isDiscentEvaded = false;
                    _this.respondentForm.controls['isDiscentConcluded'].setValue(false);
                }
                else if (_this.userType == "Docente") {
                    _this.isDiscent = false;
                    _this.isDiscentConcluded = false;
                    _this.isDiscentEvaded = false;
                    _this.respondentForm.controls['isDiscentConcluded'].setValue(false);
                }
                if (respondent.type == "comerciante") {
                    // this.respondentForm.controls['isCommerce'].setValue(true);
                    _this.isCommerce = true;
                }
                else {
                    // this.respondentForm.controls['isCommerce'].setValue(false);
                    _this.isCommerce = false;
                }
                if (respondent.jobNeighborhood != null) {
                    // this.respondentForm.controls['jobNeighborhood'].setValue(respondent.jobNeighborhood);
                    _this.jobCity = respondent.jobCity;
                    _this.loadJobNeighborhoods();
                    _this.isSameJobCity = "";
                }
            }
            else {
                _this.isCommerce = false;
            }
        });
    };
    RespondentProfilePage.prototype.saveRespondentInfo = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        var cpf = this.respondentForm.controls['cpf'];
        var email = this.respondentForm.controls['email'];
        var residenceNeighborhood = this.respondentForm.controls['residenceNeighborhood'];
        var residenceTimeRange = this.respondentForm.controls['residenceTimeRange'];
        var jobCity = this.respondentForm.controls['jobCity'];
        var jobNeighborhood = this.respondentForm.controls['jobNeighborhood'];
        var salaryRange = this.respondentForm.controls['salaryRange'];
        var age = this.respondentForm.controls['age'];
        var gender = this.respondentForm.controls['gender'];
        var name = this.respondentForm.controls['name'];
        var phone = this.respondentForm.controls['phone'];
        var code = this.respondentForm.controls['code'];
        var courseEntry = this.respondentForm.controls['courseEntry'];
        var courseLeft = this.respondentForm.controls['courseLeft'];
        var courseName = this.respondentForm.controls['courseName'];
        var residenceCity = this.respondentForm.controls['residenceCity'];
        var jobAddress = this.respondentForm.controls['jobAddress'];
        var jobName = this.respondentForm.controls['jobName'];
        var whatsapp = this.respondentForm.controls['whatsapp'];
        if (!this.respondentForm.valid) {
            if (!cpf.valid) {
                cpf.markAsTouched();
            }
            if (!residenceNeighborhood.valid) {
                residenceNeighborhood.markAsTouched();
            }
            this.loader.dismiss();
        }
        else {
            var respondent_1 = new Respondent();
            respondent_1.cpf = cpf ? cpf.value : null;
            respondent_1.email = email ? email.value : null;
            respondent_1.residenceTimeRange = residenceTimeRange ? residenceTimeRange.value : null;
            respondent_1.residenceNeighborhood = residenceNeighborhood ? residenceNeighborhood.value : null;
            respondent_1.jobCity = jobCity ? jobCity.value : null;
            respondent_1.jobNeighborhood = jobNeighborhood ? jobNeighborhood.value : null;
            respondent_1.salaryRange = salaryRange ? salaryRange.value : null;
            respondent_1.ageRange = age ? age.value : null;
            respondent_1.gender = gender ? gender.value : null;
            respondent_1.name = name ? name.value : null;
            respondent_1.phone = phone ? phone.value : null;
            respondent_1.code = code ? code.value : null;
            respondent_1.courseEntry = courseEntry ? courseEntry.value : null;
            respondent_1.courseLeft = courseLeft ? courseLeft.value : null;
            respondent_1.courseName = courseName ? courseName.value : null;
            respondent_1.residenceCity = residenceCity ? residenceCity.value : null;
            respondent_1.jobAddress = jobAddress ? jobAddress.value : null;
            respondent_1.jobName = jobName ? jobName.value : null;
            respondent_1.whatsapp = whatsapp ? whatsapp.value : null;
            respondent_1.type = this.userType;
            respondent_1.caseTest = this.case_test;
            respondent_1.points = this.points;
            //---------------------- VERIFICA SE O RESPONDENTE ESTÁ CADASTRADO -------------------------
            // this.respondentProvider.getRespondentByCPF(respondent.cpf).then((result: Respondent) => {
            this.respondentProvider.getRespondentById(this.respondentId).then(function (result) {
                //------------- RESPONDENTE JA ESTA CADASTRADO -------------
                if (!!result) {
                    respondent_1.id = result.id;
                    _this.respondentProvider.updateRespondent(respondent_1)
                        .then(function () {
                        _this.navigate(respondent_1);
                    })
                        .catch(function () {
                        _this.tryAgainSaveRespondent();
                    });
                    //------------- RESPONDENTE NÃO ESTA CADASTRADO -------------
                }
                else {
                    _this.respondentProvider.insertRespondent(respondent_1)
                        .then(function (data) {
                        //------------------- RECUPERA O ID DO RESPONDENTE -------------------
                        respondent_1.id = data.id;
                        _this.navigate(respondent_1);
                    })
                        .catch(function () {
                        _this.tryAgainSaveRespondent();
                    });
                }
                //Ativar ou desativar a gamificação
                if (respondent_1.id % 2 == 0) {
                    //this.storage.set('useGame', true);
                }
                else {
                    //this.storage.set('useGame', false);
                }
            })
                .catch(function () {
                _this.tryAgainSaveRespondent();
            });
        }
    };
    RespondentProfilePage.prototype.selectUserType = function (userType) {
        this.userType = userType.value;
        // if (this.userType == "Graduação") {
        //   this.courseDisabled = false;
        //   this.createCourseNameListGrad();
        //   this.createCourseList();
        // } else if (this.userType == "Pós-Graduação") {
        //   this.courseDisabled = false;
        //   this.createCourseNameListPosGrad();
        //   this.createCourseList();
        // }else{
        //   this.courseDisabled = true;
        //   // this.respondentForm.controls['courseName'].setValue(null);
        //   this.respondentForm.controls['courseEntry'].setValue(null);
        //   this.respondentForm.controls['courseLeft'].setValue(null);
        //   this.courseNameList = [];
        // }
        if (this.userType == "Discente") {
            this.isDiscent = true;
            this.isDiscentEvaded = false;
            this.isDiscentConcluded = false;
            this.respondentForm.controls['courseEntry'].enable();
            this.respondentForm.controls['courseEntry'].setValue(null);
            this.respondentForm.controls['code'].enable();
            this.respondentForm.controls['code'].setValue(null);
            this.respondentForm.controls['courseLeft'].setValue(null);
            this.respondentForm.controls['courseLeft'].disable();
            this.respondentForm.controls['isDiscentConcluded'].setValue(false);
        }
        else if (this.userType == "Ex-aluno") {
            this.userType = "Discente evadido";
            this.isDiscent = true;
            this.isDiscentEvaded = true;
            this.isDiscentConcluded = false;
            this.respondentForm.controls['courseEntry'].enable();
            this.respondentForm.controls['courseEntry'].setValue(null);
            this.respondentForm.controls['courseLeft'].enable();
            this.respondentForm.controls['courseLeft'].setValue(null);
            this.respondentForm.controls['code'].setValue(null);
            this.respondentForm.controls['code'].disable();
        }
        else {
            this.isDiscent = false;
            this.isDiscentEvaded = false;
            this.isDiscentConcluded = false;
            this.respondentForm.controls['courseEntry'].setValue(null);
            this.respondentForm.controls['courseEntry'].disable();
            this.respondentForm.controls['courseLeft'].setValue(null);
            this.respondentForm.controls['courseLeft'].disable();
            this.respondentForm.controls['code'].setValue(null);
            this.respondentForm.controls['code'].disable();
            this.respondentForm.controls['isDiscentConcluded'].setValue(false);
        }
        this.scrollToBottom();
    };
    RespondentProfilePage.prototype.changeUserType = function () {
        if (this.userType == "comerciante") {
            // this.respondentForm.controls['isCommerce'].setValue(false);
            this.isCommerce = false;
            this.userType = "cidadão";
        }
        else {
            // this.respondentForm.controls['isCommerce'].setValue(true);
            this.isCommerce = true;
            this.userType = "comerciante";
        }
    };
    RespondentProfilePage.prototype.changeDiscentType = function () {
        if (this.userType == "Discente formado") {
            this.userType = "Discente evadido";
            this.isDiscentConcluded = false;
            this.respondentForm.controls['courseLeft'].setValue(null);
            this.respondentForm.controls['courseLeft'].disable();
            this.respondentForm.controls['isDiscentConcluded'].setValue(false);
        }
        else {
            this.userType = "Discente formado";
            this.isDiscentConcluded = true;
            this.respondentForm.controls['courseLeft'].enable();
            this.respondentForm.controls['courseLeft'].setValue(null);
            this.respondentForm.controls['isDiscentConcluded'].setValue(true);
        }
        this.scrollToBottom();
    };
    RespondentProfilePage.prototype.verifyLevel = function () {
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
    RespondentProfilePage.prototype.createGenderList = function () {
        var gender1 = {
            value: "Masculino"
        };
        this.genderList.push(gender1);
        var gender2 = {
            value: "Feminino"
        };
        this.genderList.push(gender2);
        var gender3 = {
            value: "Outro"
        };
        this.genderList.push(gender3);
    };
    RespondentProfilePage.prototype.createUserTypeList = function () {
        // let type1 = {
        //   value: "Graduação"
        // };
        // this.userTypeList.push(type1);
        // let type2 = {
        //   value: "Pós-Graduação"
        // };
        // this.userTypeList.push(type2);
        // let type3 = {
        //   value: "Docente Graduação"
        // };
        // this.userTypeList.push(type3);
        // let type4 = {
        //   value: "Docente Pós-Graduação"
        // };
        // this.userTypeList.push(type4);
        var type4 = {
            value: "Docente"
        };
        this.userTypeList.push(type4);
        var type5 = {
            value: "Discente"
        };
        this.userTypeList.push(type5);
        // let type7 = {
        //   value: "Cidadão"
        // };
        // this.userTypeList.push(type7);
        // let type8 = {
        //   value: "Profissional"
        // };
        // this.userTypeList.push(type8);
        // let type9 = {
        //   value: "Voluntário"
        // };
        // this.userTypeList.push(type9);
        var type10 = {
            value: "Ex-aluno"
        };
        this.userTypeList.push(type10);
    };
    RespondentProfilePage.prototype.createCourseList = function () {
        this.courseEntryList = [];
        this.courseLeftList = [];
        var courseEntry1 = {
            value: "1º semestre - 2010"
        };
        this.courseEntryList.push(courseEntry1);
        this.courseLeftList.push(courseEntry1);
        var courseEntry2 = {
            value: "2º semestre - 2010"
        };
        this.courseEntryList.push(courseEntry2);
        this.courseLeftList.push(courseEntry2);
        var courseEntry3 = {
            value: "1º semestre - 2011"
        };
        this.courseEntryList.push(courseEntry3);
        this.courseLeftList.push(courseEntry3);
        var courseEntry4 = {
            value: "2º semestre - 2011"
        };
        this.courseEntryList.push(courseEntry4);
        this.courseLeftList.push(courseEntry4);
        var courseEntry5 = {
            value: "1º semestre - 2012"
        };
        this.courseEntryList.push(courseEntry5);
        this.courseLeftList.push(courseEntry5);
        var courseEntry6 = {
            value: "2º semestre - 2012"
        };
        this.courseEntryList.push(courseEntry6);
        this.courseLeftList.push(courseEntry6);
        var courseEntry7 = {
            value: "1º semestre - 2013"
        };
        this.courseEntryList.push(courseEntry7);
        this.courseLeftList.push(courseEntry7);
        var courseEntry8 = {
            value: "2º semestre - 2013"
        };
        this.courseEntryList.push(courseEntry8);
        this.courseLeftList.push(courseEntry8);
        var courseEntry9 = {
            value: "1º semestre - 2014"
        };
        this.courseEntryList.push(courseEntry9);
        this.courseLeftList.push(courseEntry9);
        var courseEntry10 = {
            value: "2º semestre - 2014"
        };
        this.courseEntryList.push(courseEntry10);
        this.courseLeftList.push(courseEntry10);
        var courseEntry11 = {
            value: "1º semestre - 2015"
        };
        this.courseEntryList.push(courseEntry11);
        this.courseLeftList.push(courseEntry11);
        var courseEntry12 = {
            value: "2º semestre - 2015"
        };
        this.courseEntryList.push(courseEntry12);
        this.courseLeftList.push(courseEntry12);
        var courseEntry13 = {
            value: "1º semestre - 2016"
        };
        this.courseEntryList.push(courseEntry13);
        this.courseLeftList.push(courseEntry13);
        var courseEntry14 = {
            value: "2º semestre - 2016"
        };
        this.courseEntryList.push(courseEntry14);
        this.courseLeftList.push(courseEntry14);
        var courseEntry15 = {
            value: "1º semestre - 2017"
        };
        this.courseEntryList.push(courseEntry15);
        this.courseLeftList.push(courseEntry15);
        var courseEntry16 = {
            value: "2º semestre - 2017"
        };
        this.courseEntryList.push(courseEntry16);
        this.courseLeftList.push(courseEntry16);
        var courseEntry17 = {
            value: "1º semestre - 2018"
        };
        this.courseEntryList.push(courseEntry17);
        this.courseLeftList.push(courseEntry17);
        var courseEntry18 = {
            value: "2º semestre - 2018"
        };
        this.courseEntryList.push(courseEntry18);
        this.courseLeftList.push(courseEntry18);
        var courseEntry19 = {
            value: "1º semestre - 2019"
        };
        this.courseEntryList.push(courseEntry19);
        this.courseLeftList.push(courseEntry19);
        var courseEntry20 = {
            value: "2º semestre - 2019"
        };
        this.courseEntryList.push(courseEntry20);
        this.courseLeftList.push(courseEntry20);
        var courseEntry21 = {
            value: "1º semestre - 2020"
        };
        this.courseEntryList.push(courseEntry21);
        this.courseLeftList.push(courseEntry21);
    };
    RespondentProfilePage.prototype.createCourseNameListGrad = function () {
        this.courseNameList = [];
        var courseEntry1 = {
            value: "Administração"
        };
        this.courseNameList.push(courseEntry1);
        var courseEntry2 = {
            value: "Ciência da Computação"
        };
        this.courseNameList.push(courseEntry2);
        var courseEntry3 = {
            value: "Ciências Atmosféricas"
        };
        this.courseNameList.push(courseEntry3);
        var courseEntry4 = {
            value: "Ciências Biológicas"
        };
        this.courseNameList.push(courseEntry4);
        var courseEntry5 = {
            value: "Engenharia Ambiental"
        };
        this.courseNameList.push(courseEntry5);
        var courseEntry6 = {
            value: "Engenharia Ambiental – Itabira"
        };
        this.courseNameList.push(courseEntry6);
        var courseEntry7 = {
            value: "Engenharia Civil"
        };
        this.courseNameList.push(courseEntry7);
        var courseEntry8 = {
            value: "Engenharia da Mobilidade – Itabira"
        };
        this.courseNameList.push(courseEntry8);
        var courseEntry9 = {
            value: "Engenharia de Bioprocessos"
        };
        this.courseNameList.push(courseEntry9);
        var courseEntry10 = {
            value: "Engenharia de Computação"
        };
        this.courseNameList.push(courseEntry10);
        var courseEntry11 = {
            value: "Engenharia de Computação – Itabira"
        };
        this.courseNameList.push(courseEntry11);
        var courseEntry12 = {
            value: "Engenharia de Controle e Automação"
        };
        this.courseNameList.push(courseEntry12);
        var courseEntry13 = {
            value: "Engenharia de Controle e Automação – Itabira"
        };
        this.courseNameList.push(courseEntry13);
        var courseEntry14 = {
            value: "Engenharia de Energia"
        };
        this.courseNameList.push(courseEntry14);
        var courseEntry15 = {
            value: "Engenharia de Materiais"
        };
        this.courseNameList.push(courseEntry15);
        var courseEntry16 = {
            value: "Engenharia de Materiais – Itabira"
        };
        this.courseNameList.push(courseEntry16);
        var courseEntry17 = {
            value: "Engenharia de Produção"
        };
        this.courseNameList.push(courseEntry17);
        var courseEntry18 = {
            value: "Engenharia de Produção – Itabira"
        };
        this.courseNameList.push(courseEntry18);
        var courseEntry19 = {
            value: "Engenharia de Saúde e Segurança – Itabira"
        };
        this.courseNameList.push(courseEntry19);
        var courseEntry20 = {
            value: "Engenharia Elétrica"
        };
        this.courseNameList.push(courseEntry20);
        var courseEntry21 = {
            value: "Engenharia Elétrica – Itabira"
        };
        this.courseNameList.push(courseEntry21);
        var courseEntry22 = {
            value: "Engenharia Eletrônica"
        };
        this.courseNameList.push(courseEntry22);
        var courseEntry23 = {
            value: "Engenharia Hídrica"
        };
        this.courseNameList.push(courseEntry23);
        var courseEntry24 = {
            value: "Engenharia Mecânica"
        };
        this.courseNameList.push(courseEntry24);
        var courseEntry25 = {
            value: "Engenharia Mecânica – Itabira"
        };
        this.courseNameList.push(courseEntry25);
        var courseEntry26 = {
            value: "Engenharia Mecânica Aeronáutica"
        };
        this.courseNameList.push(courseEntry26);
        var courseEntry27 = {
            value: "Engenharia Química"
        };
        this.courseNameList.push(courseEntry27);
        var courseEntry28 = {
            value: "Física Bacharelado"
        };
        this.courseNameList.push(courseEntry28);
        var courseEntry29 = {
            value: "Física Licenciatura"
        };
        this.courseNameList.push(courseEntry29);
        var courseEntry30 = {
            value: "Matemática Bacharelado"
        };
        this.courseNameList.push(courseEntry30);
        var courseEntry31 = {
            value: "Matemática Licenciatura"
        };
        this.courseNameList.push(courseEntry31);
        var courseEntry32 = {
            value: "Química Bacharelado"
        };
        this.courseNameList.push(courseEntry32);
        var courseEntry33 = {
            value: "Química Licenciatura"
        };
        this.courseNameList.push(courseEntry33);
        var courseEntry34 = {
            value: "Sistemas de Informação"
        };
        this.courseNameList.push(courseEntry34);
    };
    RespondentProfilePage.prototype.createCourseNameListPosGrad = function () {
        this.courseNameList = [];
        var courseEntry1 = {
            value: "Engenharia Elétrica (mestrado)"
        };
        this.courseNameList.push(courseEntry1);
        var courseEntry2 = {
            value: "Engenharia Elétrica (doutorado)"
        };
        this.courseNameList.push(courseEntry2);
        var courseEntry3 = {
            value: "Engenharia Mecânica (mestrado) "
        };
        this.courseNameList.push(courseEntry3);
        var courseEntry4 = {
            value: "Engenharia Mecânica (doutorado) "
        };
        this.courseNameList.push(courseEntry4);
        var courseEntry5 = {
            value: "Engenharia de Produção (mestrado)"
        };
        this.courseNameList.push(courseEntry5);
        var courseEntry6 = {
            value: "Engenharia de Produção (doutorado)"
        };
        this.courseNameList.push(courseEntry6);
        var courseEntry7 = {
            value: "Multicêntrico em Química de Minas Gerais (mestrado) "
        };
        this.courseNameList.push(courseEntry7);
        var courseEntry8 = {
            value: "Multicêntrico em Química de Minas Gerais (doutorado) "
        };
        this.courseNameList.push(courseEntry8);
        var courseEntry9 = {
            value: "Meio Ambiente e Recursos Hídricos (mestrado)"
        };
        this.courseNameList.push(courseEntry9);
        var courseEntry10 = {
            value: "Meio Ambiente e Recursos Hídricos (doutorado)"
        };
        this.courseNameList.push(courseEntry10);
        var courseEntry11 = {
            value: "Materiais para a Engenharia (mestrado)"
        };
        this.courseNameList.push(courseEntry11);
        var courseEntry12 = {
            value: "Materiais para a Engenharia (doutorado)"
        };
        this.courseNameList.push(courseEntry12);
        var courseEntry13 = {
            value: "Educação em Ciências (mestrado)"
        };
        this.courseNameList.push(courseEntry13);
        var courseEntry14 = {
            value: "Engenharia de Energia (mestrado)"
        };
        this.courseNameList.push(courseEntry14);
        var courseEntry15 = {
            value: "Ciência e Tecnologia da Computação (mestrado)"
        };
        this.courseNameList.push(courseEntry15);
        var courseEntry16 = {
            value: "Desenvolvimento, Tecnologias e Sociedade (mestrado)"
        };
        this.courseNameList.push(courseEntry16);
        var courseEntry17 = {
            value: "Matemática (mestrado)"
        };
        this.courseNameList.push(courseEntry17);
        var courseEntry18 = {
            value: "Física (mestrado)"
        };
        this.courseNameList.push(courseEntry18);
    };
    RespondentProfilePage.prototype.setFormData = function () {
        var _this = this;
        var entities = ['city', 'plan', 'isRuralZone', 'questionaries'];
        this.databaseProvider.verifyEntities(entities)
            .then(function (data) {
            if (data.length > 0 && data.filter(function (data) { return data == false; }).length == 0) {
                _this.setEntities();
            }
            else {
                _this.navigateBack();
            }
        })
            .catch(function () {
            _this.navigateBack();
        });
    };
    RespondentProfilePage.prototype.setEntities = function () {
        var _this = this;
        this.storage.get('city')
            .then(function (data) {
            if (data != null) {
                _this.city = data;
                _this.cityName = _this.city.name;
                _this.storage.get('plan')
                    .then(function (data) {
                    if (data != null) {
                        _this.plan = data;
                        _this.storage.get('questionaries')
                            .then(function (data) {
                            _this.questionaries = data;
                            if (data != null) {
                                _this.storage.get('points')
                                    .then(function (data) {
                                    if (data != null) {
                                        _this.points = data;
                                        _this.verifyLevel();
                                        _this.loadResidenceNeighborhoods();
                                    }
                                    else {
                                        _this.navigateBack();
                                    }
                                })
                                    .catch(function () { return _this.navigateBack(); });
                            }
                            else {
                                _this.navigateBack();
                            }
                        })
                            .catch(function () { return _this.navigateBack(); });
                    }
                    else {
                        _this.navigateBack();
                    }
                })
                    .catch(function () { return _this.navigateBack(); });
            }
            else {
                _this.navigateBack();
            }
        })
            .catch(function () { return _this.navigateBack(); });
    };
    RespondentProfilePage.prototype.getAllCities = function () {
        var _this = this;
        this.cityProvider.getAllCities()
            .then(function (cities) {
            if (cities != null) {
                _this.cities = _this.sortAscCollection(cities);
            }
            else {
                _this.showAlertGetAllCities();
            }
        })
            .catch(function () {
            _this.showAlertGetAllCities();
        });
    };
    RespondentProfilePage.prototype.showAlertGetAllCities = function () {
        var _this = this;
        this.cities = [];
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.getAllCities();
                    }
                }]
        });
        alert.present();
    };
    RespondentProfilePage.prototype.loadMetrics = function () {
        var _this = this;
        //------------------------CARREGA OS ITENS DE MÉTRICAS-----------------------------
        //1 - GUT, 2 - ESCALA QUALITATIVA, (3-17) - Métricas do questionário de teste
        this.priorizationProvider.getMetricItems(1)
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
                    }
                    else {
                        _this.showAlertLoadMetrics();
                    }
                })
                    .catch(function () {
                    _this.showAlertLoadMetrics();
                });
            }
            else {
                _this.showAlertLoadMetrics();
            }
        })
            .catch(function () {
            _this.showAlertLoadMetrics();
        });
    };
    RespondentProfilePage.prototype.showAlertLoadMetrics = function () {
        var _this = this;
        this.metricItems = [];
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.loadMetrics();
                    }
                }]
        });
        alert.present();
    };
    RespondentProfilePage.prototype.loadResidenceNeighborhoods = function () {
        var _this = this;
        this.neighborhoodProvider.getAllNeighborhoodsByCity(this.city)
            .then(function (neighborhoods) {
            if (neighborhoods != null) {
                _this.residenceNeighborhoods = _this.sortAscCollection(neighborhoods);
                _this.storage.set('neighborhoods', _this.residenceNeighborhoods);
                _this.loader.dismiss();
            }
            else {
                _this.showAlertLoadResidenceNeighborhoods();
            }
        })
            .catch(function () {
            _this.showAlertLoadResidenceNeighborhoods();
        });
    };
    RespondentProfilePage.prototype.showAlertLoadResidenceNeighborhoods = function () {
        var _this = this;
        this.loader.dismiss();
        this.residenceNeighborhoods = [];
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.loadResidenceNeighborhoods();
                    }
                }]
        });
        alert.present();
    };
    RespondentProfilePage.prototype.selectCity = function (city) {
        this.jobCity = city;
        if (this.compareFn(this.jobCity, this.city)) {
            this.isSameJobCity = "";
            // this.respondentForm.controls['jobNeighborhood'].setValue('');
        }
        else {
            this.isSameJobCity = "hide";
        }
    };
    RespondentProfilePage.prototype.loadJobNeighborhoods = function () {
        var _this = this;
        this.neighborhoodProvider.getAllNeighborhoodsByCity(this.jobCity)
            .then(function (neighborhoods) {
            if (neighborhoods != null) {
                _this.jobNeighborhoodDisabled = false;
                _this.jobNeighborhoods = _this.sortAscCollection(neighborhoods);
                if (_this.compareFn(_this.jobCity, _this.city)) {
                    _this.isSameJobCity = "";
                }
                else {
                    _this.isSameJobCity = "hide";
                }
            }
            else {
                _this.showAlertLoadJobNeighborhoods();
            }
        })
            .catch(function () {
            _this.showAlertLoadJobNeighborhoods();
        });
    };
    RespondentProfilePage.prototype.showAlertLoadJobNeighborhoods = function () {
        var _this = this;
        this.jobNeighborhoods = [];
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.loadJobNeighborhoods();
                    }
                }]
        });
        alert.present();
    };
    RespondentProfilePage.prototype.validate = function (cpf) {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf == '')
            return false;
        // Elimina CPFs invalidos conhecidos
        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            return false;
        // Valida 1o digito
        var add = 0;
        for (var i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
        var rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(9)))
            return false;
        // Valida 2o digito
        add = 0;
        for (var i = 0; i < 10; i++)
            add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        return rev == parseInt(cpf.charAt(10));
    };
    RespondentProfilePage.prototype.validateCPF = function (control) {
        var isValid = this.validate(control.value.toString());
        return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(!isValid).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["map"])(function (result) { return result ? { invalid: true } : null; }));
    };
    RespondentProfilePage.prototype.sortAscCollection = function (collection) {
        return collection.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
    };
    RespondentProfilePage.prototype.tryAgainSaveRespondent = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.saveRespondentInfo();
                    }
                }]
        });
        this.loader.dismiss();
        alert.present();
    };
    RespondentProfilePage.prototype.getResidenceTimeNameByValue = function (event) {
        var residenceTimeChosen = event.value;
        this.residenceTimeName = this.residenceTimeList[residenceTimeChosen].name;
    };
    RespondentProfilePage.prototype.getSalaryRangeNameByValue = function (event) {
        var salaryRangeChosen = event.value;
        this.salaryRangeName = this.salaryRangeList[salaryRangeChosen].name;
    };
    RespondentProfilePage.prototype.getAgeRangeByValue = function (event) {
        var ageRageChoosen = event.value;
        this.ageRangeName = this.ageRangeList[ageRageChoosen].name;
    };
    RespondentProfilePage.prototype.loadResidenceTime = function () {
        var residenceTime = new ResidenceTime();
        residenceTime.name = "Menos de um 1 ano";
        residenceTime.value = 0;
        this.residenceTimeList.push(residenceTime);
        residenceTime = new ResidenceTime();
        residenceTime.name = "De 1 a 5 anos";
        residenceTime.value = 1;
        this.residenceTimeList.push(residenceTime);
        residenceTime = new ResidenceTime();
        residenceTime.name = "De 5 a 10 anos";
        residenceTime.value = 2;
        this.residenceTimeList.push(residenceTime);
        residenceTime = new ResidenceTime();
        residenceTime.name = "De 10 a 20 anos";
        residenceTime.value = 3;
        this.residenceTimeList.push(residenceTime);
        residenceTime = new ResidenceTime();
        residenceTime.name = "Mais de 20 anos";
        residenceTime.value = 4;
        this.residenceTimeList.push(residenceTime);
        this.residenceTimeName = this.residenceTimeList[0].name;
    };
    RespondentProfilePage.prototype.loadAgeRange = function () {
        var ageRange = new AgeRange();
        ageRange.name = "Até 16 anos";
        ageRange.value = 0;
        this.ageRangeList.push(ageRange);
        ageRange = new AgeRange();
        ageRange.name = "Entre 16 e 25 anos";
        ageRange.value = 1;
        this.ageRangeList.push(ageRange);
        ageRange = new AgeRange();
        ageRange.name = "Entre 25 e 40 anos";
        ageRange.value = 2;
        this.ageRangeList.push(ageRange);
        ageRange = new AgeRange();
        ageRange.name = "Entre 40 e 60 anos";
        ageRange.value = 3;
        this.ageRangeList.push(ageRange);
        ageRange = new AgeRange();
        ageRange.name = "Acima de 60 anos";
        ageRange.value = 4;
        this.ageRangeList.push(ageRange);
        this.ageRangeName = this.ageRangeList[0].name;
    };
    RespondentProfilePage.prototype.loadSalaryRange = function () {
        var salaryRange = new SalaryRange();
        salaryRange.name = "Até 2 Salários Mínimos";
        salaryRange.value = 0;
        this.salaryRangeList.push(salaryRange);
        salaryRange = new SalaryRange();
        salaryRange.name = "De 2 a 4 Salários Mínimos";
        salaryRange.value = 1;
        this.salaryRangeList.push(salaryRange);
        salaryRange = new SalaryRange();
        salaryRange.name = "De 4 a 10 Salários Mínimos";
        salaryRange.value = 2;
        this.salaryRangeList.push(salaryRange);
        salaryRange = new SalaryRange();
        salaryRange.name = "De 10 a 20 Salários Mínimos";
        salaryRange.value = 3;
        this.salaryRangeList.push(salaryRange);
        salaryRange = new SalaryRange();
        salaryRange.name = "Acima de 20 Salários Mínimos";
        salaryRange.value = 4;
        this.salaryRangeList.push(salaryRange);
        this.salaryRangeName = this.salaryRangeList[0].name;
    };
    RespondentProfilePage.prototype.navigate = function (respondent) {
        this.storage.set('respondent', respondent);
        this.navCtrl.setRoot('QuestionariesListPage', {}).then(this.loader.dismiss());
    };
    RespondentProfilePage.prototype.navigateBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__intro_intro__["a" /* IntroPage */], {}).then(this.loader.dismiss());
    };
    RespondentProfilePage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    RespondentProfilePage.prototype.compareFn = function (e1, e2) {
        return e1 && e2 ? e1.id === e2.id : e1 === e2;
    };
    RespondentProfilePage.prototype.scrollToBottom = function () {
        if (!!this.content) {
            var content_1 = this.content;
            setTimeout(function () {
                content_1.scrollToBottom(100);
            }, 100);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Content */])
    ], RespondentProfilePage.prototype, "content", void 0);
    RespondentProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-respondent-profile',template:/*ion-inline-start:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\respondent-profile\respondent-profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col offset-1 col-2 class="menu-icon-col">\n        <button ion-button clear (click)="openMenu()">\n          <ion-icon name="md-menu" class="menu-icon"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col offset-1 col-6>\n        <img class="img-responsive" src="assets/imgs/header-logo.png" />\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2 class="profile-title" col-12 text-center>Perfil do respondente</h2>\n  <!-- Pontuação -->\n  <div *ngIf="useGame" class="level-panel">\n    <ion-item *ngIf="points > 0" text-wrap>\n      <ion-thumbnail item-start>\n        <img *ngIf="level == \'Ouro\'" class="img-responsive" src="assets/imgs/level3.png" />\n        <img *ngIf="level == \'Prata\'" class="img-responsive" src="assets/imgs/level2.png" />\n        <img *ngIf="level == \'Bronze\'" class="img-responsive" src="assets/imgs/level1.png" />\n      </ion-thumbnail>\n      <ion-label>\n        <h2>Você está no nível <strong>{{level}}</strong> de Participação!</h2>\n        <p><b>Sua pontuação</b></p>\n        <ion-badge>{{points}} pontos</ion-badge>\n      </ion-label>\n    </ion-item>\n    <!-- Pontuação -->\n    <!-- Pontuação -->\n    <ion-item *ngIf="points == 0" text-wrap>\n      <ion-thumbnail item-start>\n        <img class="img-responsive" src="assets/imgs/level0.png" />\n      </ion-thumbnail>\n      <ion-label>\n        <h2>Responda os questionários para aumentar o <b>nível</b> de <b>Participação</b>!</h2>\n        <p><b>Sua pontuação</b></p>\n        <ion-badge>{{points}} pontos</ion-badge>\n      </ion-label>\n    </ion-item>\n    <!-- Pontuação -->\n  </div>\n  <h3 col-12 text-center>Por favor informe os seus dados</h3>\n  <form [formGroup]="respondentForm">\n    <!-----------------------CASE POSCOMP----------------------->\n    <!-- Nome -->\n    <ion-item>\n      <ion-label floating>Nome</ion-label>\n      <ion-input [formControl]="respondentForm.controls[\'name\']" required></ion-input>\n    </ion-item>\n    <!-- Nome -->\n    <!-- Tipo de Respondente -->\n    <ion-item>\n      <!-- Pontuação -->\n      <ion-label floating>Por favor, selecione a formação</ion-label>\n      <ion-select [formControl]="respondentForm.controls[\'userType\']" required>\n        <ion-option *ngFor="let userType of userTypeList" [value]="userType.value"\n          (ionSelect)="selectUserType(userType)">\n          {{userType.value}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <!-- Tipo de Respondente -->\n    <!-- Discente formado ou evadido -->\n    <ion-item *ngIf="isDiscent && isDiscentEvaded">\n      <ion-label>você se formou no curso?</ion-label>\n      <ion-checkbox item-end (ionChange)="changeDiscentType()"\n        [formControl]="respondentForm.controls[\'isDiscentConcluded\']"></ion-checkbox>\n    </ion-item>\n    <!-- Discente formado ou evadido -->\n    <!-- Ano e semestre de ingresso -->\n    <ion-item *ngIf="isDiscent">\n      <ion-label floating>Por favor, selecione o ano e semestre de ingresso</ion-label>\n      <ion-select [formControl]="respondentForm.controls[\'courseEntry\']" required>\n        <ion-option *ngFor="let courseEntry of courseEntryList" [value]="courseEntry.value">\n          {{courseEntry.value}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <!-- Ano e semestre de ingresso -->\n    <!-- Ano e semestre de conclusão -->\n    <ion-item *ngIf="isDiscent && isDiscentConcluded">\n      <ion-label floating>Por favor, selecione o ano e semestre de conclusão</ion-label>\n      <ion-select [formControl]="respondentForm.controls[\'courseLeft\']" required>\n        <ion-option *ngFor="let courseLeft of courseLeftList" [value]="courseLeft.value">\n          {{courseLeft.value}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <!-- Ano e semestre de conclusão -->\n    <!-- Número de matricula -->\n    <ion-item *ngIf="isDiscent && !isDiscentEvaded && !isDiscentConcluded">\n      <ion-label floating>Número de matrícula</ion-label>\n      <ion-input [formControl]="respondentForm.controls[\'code\']"\n        [brmasker]="{mask: \'000000000000\', type:\'num\', len: 12}" type="text" required>\n      </ion-input>\n    </ion-item>\n    <!-- Número de matricula -->\n    <!-----------------------CASE POSCOMP----------------------->\n    <!------------------------ TODOS OS CAMPOS ------------------------->\n    <!-----------------------INFORMAÇÕES PESSOAIS----------------------->\n    <!-- CPF -->\n    <!-- <ion-item>\n      <ion-label floating>CPF</ion-label>\n      <ion-input [formControl]="respondentForm.controls[\'cpf\']" type="text"\n        [brmasker]="{mask: \'000.000.000-00\', type:\'num\', len: 14}" required>\n      </ion-input>\n      <div class="validator-error"\n        *ngIf="respondentForm.controls[\'cpf\'].hasError(\'required\') && respondentForm.controls[\'cpf\'].touched">* CPF é\n        obrigatório!\n      </div>\n      <div class="validator-error"\n        *ngIf="respondentForm.controls[\'cpf\'].hasError(\'invalid\') && respondentForm.controls[\'cpf\'].touched">* CPF é\n        inválido!\n      </div>\n    </ion-item> -->\n    <!-- CPF -->\n    <!-- Nome -->\n    <!-- <ion-item>\n      <ion-label floating>Nome</ion-label>\n      <ion-input [formControl]="respondentForm.controls[\'name\']"></ion-input>\n    </ion-item> -->\n    <!-- Nome -->\n    <!-- Genero -->\n    <!-- <ion-item>\n      <ion-label floating>Gênero</ion-label>\n      <ion-select [formControl]="respondentForm.controls[\'gender\']">\n        <ion-option *ngFor="let gender of genderList" [value]="gender.value">\n          {{gender.value}}\n        </ion-option>\n      </ion-select>\n    </ion-item> -->\n    <!-- Genero -->\n    <!-- Email -->\n    <!-- <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input [email]="true" [formControl]="respondentForm.controls[\'email\']" type="email"></ion-input>\n    </ion-item> -->\n    <!-- Email -->\n    <!-- Telefone -->\n    <!-- <ion-item>\n      <ion-label floating>Telefone</ion-label>\n      <ion-input [brmasker]="{mask: \'(00)00000-0000\', type:\'num\', len: 15}"\n        [formControl]="respondentForm.controls[\'phone\']"></ion-input>\n    </ion-item> -->\n    <!-- Telefone -->\n    <!-- WhatsApp -->\n    <!-- <ion-item>\n      <ion-label floating>WhatsApp</ion-label>\n      <ion-input [brmasker]="{mask: \'(00)00000-0000\', type:\'num\', len: 15}"\n        [formControl]="respondentForm.controls[\'whatsapp\']"></ion-input>\n    </ion-item> -->\n    <!-- WhatsApp -->\n    <!-- Cidade de residência -->\n    <!-- <ion-item>\n      <ion-label floating>Cidade de Residência</ion-label>\n      <ion-select [formControl]="respondentForm.controls[\'residenceCity\']">\n        <ion-option *ngFor="let residenceCity of cities" [value]="residenceCity">\n          {{residenceCity.name}}\n        </ion-option>\n      </ion-select>\n    </ion-item> -->\n    <!-- Cidade de residência -->\n    <!-- Bairro de residencia -->\n    <!-- <ion-item>\n      <ion-label floating>Bairro de Residência</ion-label>\n      <ion-select [formControl]="respondentForm.controls[\'residenceNeighborhood\']" [compareWith]="compareFn">\n        <ion-option *ngFor="let residenceNeighborhood of residenceNeighborhoods" [value]="residenceNeighborhood">\n          {{residenceNeighborhood.name}}\n        </ion-option>\n      </ion-select>\n      <div class="validator-error"\n        *ngIf="respondentForm.controls[\'residenceNeighborhood\'].hasError(\'required\') && respondentForm.controls[\'residenceNeighborhood\'].touched">\n        * Bairro de Residência é obrigatório!\n      </div>\n    </ion-item> -->\n    <!-- Bairro de residencia -->\n    <!-----------------------INFORMAÇÕES PESSOAIS----------------------->\n    <!-----------------------INFORMAÇÕES DE TRABALHO----------------------->\n    <!-- Comerciante ou não -->\n    <!-- <ion-item>\n    <ion-label>Possui comércio no centro?</ion-label>\n    <ion-checkbox item-end (ionChange)="changeUserType()" [(ngModel)]="isCommerce"></ion-checkbox>\n  </ion-item> -->\n    <!-- Comerciante ou não -->\n    <!-- Cidade de trabalho -->\n    <!-- <ion-item>\n      <ion-label floating>Cidade de Trabalho</ion-label>\n      <ion-select [formControl]="respondentForm.controls[\'jobCity\']" (ionChange)="loadJobNeighborhoods()"\n        [compareWith]="compareFn">\n        <ion-option *ngFor="let jobCity of cities" [value]="jobCity" (ionSelect)="selectCity(jobCity)">\n          {{jobCity.name}}\n        </ion-option>\n      </ion-select>\n    </ion-item> -->\n    <!-- Cidade de trabalho -->\n    <!-- Nome da Empresa -->\n    <!-- <ion-item>\n      <ion-label floating>Nome da empresa</ion-label>\n      <ion-input [formControl]="respondentForm.controls[\'jobName\']"></ion-input>\n    </ion-item> -->\n    <!-- Nome da Empresa -->\n    <!-- Endereço da Empresa -->\n    <!-- <ion-item>\n      <ion-label floating>Endereço da empresa</ion-label>\n      <ion-input [formControl]="respondentForm.controls[\'jobAddress\']"></ion-input>\n    </ion-item> -->\n    <!-- Endereço da Empresa -->\n    <!-- Bairro de trabalho -->\n    <!-- <div class="{{isSameJobCity}}">\n      <ion-item>\n        <ion-label floating>Bairro de Trabalho</ion-label>\n        <ion-select [formControl]="respondentForm.controls[\'jobNeighborhood\']" [disabled]="jobNeighborhoodDisabled"\n          [compareWith]="compareFn">\n          <ion-option *ngFor="let jobNeighborhood of jobNeighborhoods" [value]="jobNeighborhood">\n            {{jobNeighborhood.name}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n    </div> -->\n    <!-- Bairro de trabalho -->\n    <!-----------------------INFORMAÇÕES DE TRABALHO----------------------->\n    <!-----------------------INFORMAÇÕES ACADÊMICAS----------------------->\n    <!-- Tipo de Respondente -->\n    <!-- <ion-item>\n      <ion-label floating>Nível</ion-label>\n      <ion-select [formControl]="respondentForm.controls[\'userType\']">\n        <ion-option *ngFor="let userType of userTypeList" [value]="userType.value"\n          (ionSelect)="selectUserType(userType)">\n          {{userType.value}}\n        </ion-option>\n      </ion-select>\n    </ion-item> -->\n    <!-- Tipo de Respondente -->\n    <!-- Discente formado ou evadido -->\n    <!-- <ion-item *ngIf="isDiscent">\n      <ion-label>Formou no curso?</ion-label>\n      <ion-checkbox item-end (ionChange)="changeDiscentType()"></ion-checkbox>\n    </ion-item> -->\n    <!-- Discente formado ou evadido -->\n    <!-- Número de matricula -->\n    <!-- <ion-item>\n      <ion-label floating>Número de matrícula</ion-label>\n      <ion-input [formControl]="respondentForm.controls[\'code\']"\n        [brmasker]="{mask: \'000000000000\', type:\'num\', len: 12}" type ="text" required>\n      </ion-input>\n    </ion-item> -->\n    <!-- Número de matricula -->\n    <!-- Curso -->\n    <!-- <ion-item>\n      <ion-label floating>Curso</ion-label>\n      <ion-select [formControl]="respondentForm.controls[\'courseName\']" [disabled]="courseDisabled">\n        <ion-option *ngFor="let courseName of courseNameList" [value]="courseName.value">\n          {{courseName.value}}\n        </ion-option>\n      </ion-select>\n    </ion-item> -->\n    <!-- Curso -->\n    <!-- Ano e semestre de ingresso -->\n    <!-- <ion-item *ngIf="isDiscent">\n      <ion-label floating>Ano e semestre de ingresso</ion-label>\n      <ion-select [formControl]="respondentForm.controls[\'courseEntry\']" [disabled]="courseDisabled">\n        <ion-option *ngFor="let courseEntry of courseEntryList" [value]="courseEntry.value">\n          {{courseEntry.value}}\n        </ion-option>\n      </ion-select>\n    </ion-item> -->\n    <!-- Ano e semestre de ingresso -->\n    <!-- Ano e semestre de conclusão -->\n    <!-- <ion-item *ngIf="isDiscent && isDiscentEvaded">\n      <ion-label floating>Ano e semestre de conclusão</ion-label>\n      <ion-select [formControl]="respondentForm.controls[\'courseLeft\']">\n        <ion-option *ngFor="let courseLeft of courseLeftList" [value]="courseLeft.value">\n          {{courseLeft.value}}\n        </ion-option>\n      </ion-select>\n    </ion-item> -->\n    <!-- Ano e semestre de conclusão -->\n    <!-- Idade -->\n    <!-- <ion-item>\n      <ion-label>Idade</ion-label>\n      <ion-range snaps="true" [min]="0" [max]="4" [step]="1" (ionChange)="getAgeRangeByValue($event)"\n        [formControl]="respondentForm.controls[\'age\']">\n      </ion-range>\n      <ion-label>{{ageRangeName}}</ion-label>\n    </ion-item> -->\n    <!-- Idade -->\n    <!-----------------------INFORMAÇÕES ACADÊMICAS----------------------->\n    <!-------------------------------RANGES-------------------------------->\n    <!-- Tempo de residência -->\n    <!-- <ion-item>\n      <ion-label>Tempo de Residência</ion-label>\n      <ion-range snaps="true" [min]="0" [max]="4" [step]="1" (ionChange)="getResidenceTimeNameByValue($event)"\n        [formControl]="respondentForm.controls[\'residenceTimeRange\']">\n      </ion-range>\n      <ion-label>{{residenceTimeName}}</ion-label>\n    </ion-item> -->\n    <!-- Tempo de residência -->\n    <!-- Renda -->\n    <!-- <ion-item>\n      <ion-label>Renda</ion-label>\n      <ion-range snaps="true" [min]="0" [max]="4" [step]="1" (ionChange)="getSalaryRangeNameByValue($event)"\n        [formControl]="respondentForm.controls[\'salaryRange\']">\n      </ion-range>\n      <ion-label>{{salaryRangeName}}</ion-label>\n    </ion-item> -->\n    <!-- Renda -->\n    <!-------------------------------RANGES-------------------------------->\n    <!------------------------ TODOS OS CAMPOS ------------------------->\n  </form>\n</ion-content>\n<ion-footer>\n  <ion-grid>\n    <ion-row *ngIf="editing && useGame">\n      <ion-col text-center>\n        <button ion-button block class="button-background" type="submit" (click)="saveRespondentInfo()"\n          [disabled]="!respondentForm.valid">\n          <ion-icon id="button-profile-update-game" class="text-button">\n            Salvar\n          </ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="!editing && useGame">\n      <ion-col text-center>\n        <button ion-button block class="button-background" type="submit" (click)="saveRespondentInfo()"\n          [disabled]="!respondentForm.valid">\n          <ion-icon id="button-profile-register-game" class="text-button">\n            Salvar\n          </ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="editing && !useGame">\n      <ion-col text-center>\n        <button ion-button block class="button-background" type="submit" (click)="saveRespondentInfo()"\n          [disabled]="!respondentForm.valid">\n          <ion-icon id="button-profile-update-not-game" class="text-button">\n            Salvar\n          </ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="!editing && !useGame">\n      <ion-col text-center>\n        <button ion-button block class="button-background" type="submit" (click)="saveRespondentInfo()"\n          [disabled]="!respondentForm.valid">\n          <ion-icon id="button-profile-register-not-game" class="text-button">\n            Salvar\n          </ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>'/*ion-inline-end:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\respondent-profile\respondent-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_8__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_city_city__["a" /* CityProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_9__providers_respondent_respondent__["a" /* RespondentProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_neighborhood_neighborhood__["a" /* NeighborhoodProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_prioritization_prioritization__["a" /* PrioritizationProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */]])
    ], RespondentProfilePage);
    return RespondentProfilePage;
}());

var ResidenceTime = /** @class */ (function () {
    function ResidenceTime() {
    }
    return ResidenceTime;
}());

var SalaryRange = /** @class */ (function () {
    function SalaryRange() {
    }
    return SalaryRange;
}());

var AgeRange = /** @class */ (function () {
    function AgeRange() {
    }
    return AgeRange;
}());

var Respondent = /** @class */ (function () {
    function Respondent() {
    }
    return Respondent;
}());

//# sourceMappingURL=respondent-profile.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(307);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives__ = __webpack_require__(308);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrMaskerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_brmasker_ionic_3__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__ = __webpack_require__(299);




var BrMaskerModule = (function () {
    function BrMaskerModule() {
    }
    return BrMaskerModule;
}());

BrMaskerModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_2__directives_brmasker_ionic_3__["a" /* BrMaskerIonic3 */],
                    __WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__["a" /* BrMaskerIonicServices3 */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_2__directives_brmasker_ionic_3__["a" /* BrMaskerIonic3 */],
                    __WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__["a" /* BrMaskerIonicServices3 */]
                ],
                imports: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */]
                ],
                schemas: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]
                ],
                providers: [__WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__["a" /* BrMaskerIonicServices3 */]]
            },] },
];
/** @nocollapse */
BrMaskerModule.ctorParameters = function () { return []; };
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brmasker_ionic_3__ = __webpack_require__(298);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brmasker_ionic_services__ = __webpack_require__(299);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=0.js.map