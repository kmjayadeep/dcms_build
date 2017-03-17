webpackJsonp([0,4],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bluebird__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bluebird__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ConnectionService = (function () {
    function ConnectionService(af, firebase, http) {
        this.af = af;
        // public serverUrl = 'http://localhost:3000/dcms-admin';
        this.serverUrl = 'http://server.drishticet.org/dcms-admin';
        this.firebase = firebase;
    }
    ConnectionService.prototype.getHeaders = function () {
        if (!this.firebase || !this.firebase.auth().currentUser) {
            return new __WEBPACK_IMPORTED_MODULE_3_bluebird__(function (res, rej) {
                rej(new Error('Unable to login'));
            });
        }
        return this.firebase.auth().currentUser.getToken(false)
            .then(function (token) {
            return new __WEBPACK_IMPORTED_MODULE_3_bluebird__(function (resolve, reject) {
                if (!token)
                    reject('no token');
                var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
                headers.append('x-auth-token', token);
                resolve(headers);
            });
        });
    };
    ConnectionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* FirebaseApp */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["e" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["e" /* AngularFire */]) === 'function' && _a) || Object, Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === 'function' && _b) || Object])
    ], ConnectionService);
    return ConnectionService;
    var _a, _b;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/connection.service.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connection_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bluebird__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var EventService = (function (_super) {
    __extends(EventService, _super);
    function EventService(af, firebaseApp, http) {
        _super.call(this, af, firebaseApp, http);
        this.af = af;
        this.firebaseApp = firebaseApp;
        this.http = http;
        this.eventApi = this.serverUrl + '/event';
    }
    EventService.prototype.getEvents = function () {
        var _this = this;
        return this.getHeaders()
            .then(function (headers) {
            return _this.http
                .get(_this.eventApi, {
                headers: headers
            })
                .map(function (res) { return res.json(); })
                .toPromise();
        });
    };
    EventService.prototype.getEvent = function (eventId) {
        var _this = this;
        return this.getHeaders()
            .then(function (headers) {
            return _this.http
                .get(_this.eventApi + '/' + eventId, {
                headers: headers
            })
                .map(function (res) { return res.json(); })
                .toPromise();
        });
    };
    EventService.prototype.deleteEvent = function (eventId) {
        var _this = this;
        return this.getHeaders()
            .then(function (headers) {
            return _this.http
                .delete(_this.eventApi + '/' + eventId, {
                headers: headers
            })
                .map(function (res) { return res.json(); })
                .toPromise();
        });
    };
    EventService.prototype.updateEvent = function (event) {
        var _this = this;
        return this.getHeaders()
            .then(function (headers) {
            return _this.http
                .post(_this.eventApi + '/' + event.id, event, {
                headers: headers
            })
                .map(function (res) { return res.json(); })
                .toPromise();
        });
    };
    EventService.prototype.addEvent = function (event) {
        var _this = this;
        return this.getHeaders()
            .then(function (headers) {
            return _this.http
                .put(_this.eventApi, event, {
                headers: headers
            })
                .map(function (res) { return res.json(); })
                .toPromise();
        });
    };
    EventService.prototype.uploadPic = function (eventId, file) {
        var path = 'images/event/' + eventId + file.name;
        var ref = this.firebaseApp.storage().ref().child(path);
        return ref
            .put(file)
            .then(function (res) {
            return new __WEBPACK_IMPORTED_MODULE_5_bluebird__(function (resolve, reject) {
                ref.getDownloadURL().then(function (url) { return resolve(url); })
                    .catch(function (err) { return reject(err); });
            });
        });
    };
    EventService.prototype.getRegisteredStudents = function (eventId) {
        var _this = this;
        return this.getHeaders()
            .then(function (headers) {
            return _this.http
                .get(_this.eventApi + '/student/' + eventId, {
                headers: headers
            }).map(function (res) { return res.json(); })
                .toPromise();
        });
    };
    EventService.prototype.getRegisteredCount = function (eventId) {
        var _this = this;
        return this.getHeaders()
            .then(function (headers) {
            return _this.http
                .get(_this.eventApi + '/registeredCount/' + eventId, {
                headers: headers
            }).map(function (res) { return res.json(); })
                .toPromise();
        });
    };
    EventService.prototype.getRegisteredCountAll = function () {
        var _this = this;
        return this.getHeaders()
            .then(function (headers) {
            return _this.http
                .get(_this.eventApi + '/registeredCount', {
                headers: headers
            }).map(function (res) { return res.json(); })
                .toPromise();
        });
    };
    EventService.prototype.getEventAndWorkShop = function () {
        return this.http
            .get(this.serverUrl.split('/').slice(0, -1).join('/') + '/public/event', {})
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    EventService.prototype.getResult = function (eventId) {
        var _this = this;
        return this.getHeaders()
            .then(function (headers) {
            return _this.http
                .get(_this.serverUrl + '/event/result/' + eventId, {
                headers: headers
            })
                .map(function (res) { return res.json(); })
                .toPromise();
        });
    };
    EventService.prototype.putResult = function (eventId, position, points, identifier) {
        var _this = this;
        return this.getHeaders()
            .then(function (headers) {
            return _this.http
                .post(_this.serverUrl + '/event/result/' + eventId, {
                position: position,
                points: points,
                identifier: identifier
            }, {
                headers: headers
            }).map(function (res) { return res.json(); })
                .toPromise();
        });
    };
    EventService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6_angularfire2__["d" /* FirebaseApp */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angularfire2__["e" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6_angularfire2__["e" /* AngularFire */]) === 'function' && _a) || Object, Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _b) || Object])
    ], EventService);
    return EventService;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_2__connection_service__["a" /* ConnectionService */]));
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/event.service.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TimelineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ChatComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NotificationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
*	This class represents the lazy loaded HomeComponent.
*/
var TimelineComponent = (function () {
    function TimelineComponent() {
    }
    TimelineComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'timeline-cmp',
            template: __webpack_require__(931),
            styles: [__webpack_require__(912)],
        }), 
        __metadata('design:paramtypes', [])
    ], TimelineComponent);
    return TimelineComponent;
}());
var ChatComponent = (function () {
    function ChatComponent() {
    }
    ChatComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'chat-cmp',
            template: __webpack_require__(928)
        }), 
        __metadata('design:paramtypes', [])
    ], ChatComponent);
    return ChatComponent;
}());
var NotificationComponent = (function () {
    function NotificationComponent() {
    }
    NotificationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'notifications-cmp',
            template: __webpack_require__(930)
        }), 
        __metadata('design:paramtypes', [])
    ], NotificationComponent);
    return NotificationComponent;
}());
var HomeComponent = (function () {
    /* END*/
    function HomeComponent() {
        /* Carousel Variable */
        this.myInterval = 5000;
        this.index = 0;
        this.slides = [];
        this.imgUrl = [
            "assets/img/slider1.jpg",
            "assets/img/slider2.jpg",
            "assets/img/slider3.jpg",
            "assets/img/slider0.jpg"
        ];
        /* END */
        /* Alert component */
        this.alerts = [
            {
                type: 'danger',
                msg: 'Oh snap! Change a few things up and try submitting again.'
            },
            {
                type: 'success',
                msg: 'Well done! You successfully read this important alert message.',
                closable: true
            }
        ];
        for (var i = 0; i < 4; i++) {
            this.addSlide();
        }
    }
    HomeComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    /* Carousel */
    HomeComponent.prototype.addSlide = function () {
        var i = this.slides.length;
        this.slides.push({
            image: this.imgUrl[i],
            text: ['Dummy ', 'Dummy ', 'Dummy ', 'Dummy '][this.slides.length % 4] + "\n      \t\t\t" + ['text 0', 'text 1', 'text 2', 'text 3'][this.slides.length % 4]
        });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home-cmp',
            template: __webpack_require__(929)
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/home.component.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__(419);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_routes__ = __webpack_require__(686);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__login_routes__["a"]; });
/**
 * This barrel file provides the export for the lazy loaded AboutComponent.
 */


//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/index.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AuthService = (function () {
    function AuthService(af, firebase) {
        var _this = this;
        this.af = af;
        this.user = {};
        this.loggedIn = false;
        this.firebase = firebase;
        this.af.auth.subscribe(function (user) {
            if (user) {
                _this.user = user;
                _this.loggedIn = true;
                firebase.auth().currentUser
                    .getToken(false)
                    .then(function (idToken) {
                    _this.idToken = idToken;
                    localStorage['token'] = idToken;
                    // console.log(idToken);
                }).catch(function (error) {
                    console.log(error);
                });
            }
            else {
                _this.user = {};
                _this.loggedIn = false;
            }
        });
    }
    AuthService.prototype.login = function (provider) {
        return this.af.auth.login({
            provider: provider == 'google' ? __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AuthProviders */].Google : __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AuthProviders */].Facebook,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthMethods */].Popup
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
        return this.af.auth.logout();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* FirebaseApp */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["e" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["e" /* AngularFire */]) === 'function' && _a) || Object, Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/auth.service.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_module__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signup_signup_module__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_module__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_auto_complete__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_auth_service__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_bootstrap__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_ckeditor__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_connection_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_user_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_event_event_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_workshop_workshop_service__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_volunteer_volunteer_service__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular_2_data_table_bootstrap4__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular_2_data_table_bootstrap4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_angular_2_data_table_bootstrap4__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var firebaseConfig = {
    apiKey: 'AIzaSyCvN9K2cdfUf4H8BIr8vqRhdtGV_ca2UIs',
    authDomain: 'drishti-bd782.firebaseapp.com',
    databaseURL: 'https://drishti-bd782.firebaseio.com',
    storageBucket: 'drishti-bd782.appspot.com',
    messagingSenderId: '37494669483',
};
var myFirebaseAuthConfig = {
    provider: __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AuthProviders */].Google,
    method: __WEBPACK_IMPORTED_MODULE_16_angularfire2__["b" /* AuthMethods */].Popup
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_8__login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_12_ng2_auto_complete__["Ng2AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_9__signup_signup_module__["a" /* SignupModule */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_module__["a" /* DashboardModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14_ng2_bootstrap__["a" /* DropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14_ng2_bootstrap__["b" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2__["c" /* AngularFireModule */].initializeApp(firebaseConfig, myFirebaseAuthConfig),
                __WEBPACK_IMPORTED_MODULE_22_angular_2_data_table_bootstrap4__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_15_ng2_ckeditor__["CKEditorModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["APP_BASE_HREF"],
                    // useValue: '<%= APP_BASE %>'
                    useValue: '/'
                }, __WEBPACK_IMPORTED_MODULE_17__services_connection_service__["a" /* ConnectionService */],
                __WEBPACK_IMPORTED_MODULE_18__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_13__services_auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_19__services_event_event_service__["a" /* EventService */],
                __WEBPACK_IMPORTED_MODULE_20__services_workshop_workshop_service__["a" /* WorkshopService */],
                __WEBPACK_IMPORTED_MODULE_21__services_volunteer_volunteer_service__["a" /* VolunteerService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/app.module.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccomodationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccomodationComponent = (function () {
    function AccomodationComponent() {
    }
    AccomodationComponent.prototype.ngOnInit = function () {
    };
    AccomodationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-accomodation',
            template: __webpack_require__(918),
            styles: [__webpack_require__(908)]
        }), 
        __metadata('design:paramtypes', [])
    ], AccomodationComponent);
    return AccomodationComponent;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/accomodation.component.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(661);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccomodationRoutes; });

var AccomodationRoutes = [
    {
        path: 'accomodation',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* AccomodationComponent */]
    }
];
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/accomodation.routes.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminsComponent = (function () {
    function AdminsComponent(userService) {
        this.userService = userService;
        this.error = null;
        this.message = null;
        this.admins = [];
        this.admin = null;
    }
    AdminsComponent.prototype.getAdmins = function () {
        var _this = this;
        this.error = null;
        this.message = null;
        this.admin = null;
        this.userService.getAdmins()
            .then(function (admins) {
            console.log(admins);
            _this.admins = admins;
        })
            .catch(function (err) {
            console.log(err);
            _this.error = 'Unable to load Admins list';
        });
    };
    AdminsComponent.prototype.reloadAdmins = function () {
        console.log('reloading');
        this.getAdmins();
    };
    AdminsComponent.prototype.getStatus = function (status) {
        if (status == 0)
            return 'Not Verified';
        else if (status == 10)
            return 'SuperAdmin';
        else if (status == 9)
            return 'Admin';
        else if (status == 8)
            return 'Event Coordinator';
        else if (status == 7)
            return 'Registration Desk';
    };
    AdminsComponent.prototype.changeStatus = function (status) {
        this.admin.status = status;
    };
    AdminsComponent.prototype.save = function () {
        var _this = this;
        this.error = null;
        this.message = null;
        console.log(this.admin);
        this.userService.updateAdmin(this.admin)
            .then(function (res) {
            _this.message = 'Saved Successfully';
            _this.admin = null;
            _this.reloadAdmins();
        })
            .catch(function (err) {
            console.log(err);
            _this.error = 'Unable to save';
        });
    };
    AdminsComponent.prototype.view = function (adminId) {
        var _this = this;
        console.log('viewing');
        this.error = null;
        this.admin = null;
        this.userService.getAdmin(adminId)
            .then(function (admin) {
            console.log(admin);
            _this.admin = admin;
        })
            .catch(function (err) {
            _this.error = 'Unable to load Admin details';
        });
    };
    AdminsComponent.prototype.ngOnInit = function () {
        //this.getAdmins()
    };
    AdminsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admins',
            template: __webpack_require__(919),
            styles: [__webpack_require__(909)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], AdminsComponent);
    return AdminsComponent;
    var _a;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/admins.component.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admins_component__ = __webpack_require__(392);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__admins_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admins_routes__ = __webpack_require__(662);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__admins_routes__["a"]; });


//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/index.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlankPageComponent = (function () {
    function BlankPageComponent() {
    }
    BlankPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'blank-page',
            template: __webpack_require__(920)
        }), 
        __metadata('design:paramtypes', [])
    ], BlankPageComponent);
    return BlankPageComponent;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/blankPage.component.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blankPage_component__ = __webpack_require__(394);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__blankPage_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blankPage_routes__ = __webpack_require__(664);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__blankPage_routes__["a"]; });
/**
 * This barrel file provides the export for the lazy loaded BlankpageComponent.
 */


//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/index.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal_modal_component__ = __webpack_require__(285);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BSComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BSComponentComponent = (function () {
    function BSComponentComponent() {
        // Button
        this.singleModel = '1';
        this.radioModel = 'Middle';
        this.checkModel = { left: false, middle: true, right: false };
        // Dropdown 
        this.disabled = false;
        this.status = { isopen: false };
        this.items = ['The first choice!', 'And another choice for you.', 'but wait! A third!'];
        // Pagination
        this.totalItems = 64;
        this.currentPage = 4;
        this.maxSize = 5;
        this.bigTotalItems = 175;
        this.bigCurrentPage = 1;
        // Alert
        this.alerts = [{
                type: 'danger',
                msg: 'Oh snap! Change a few things up and try submitting again.'
            },
            {
                type: 'success',
                msg: 'Well done! You successfully read this important alert message.',
                closable: true
            }
        ];
        // Progressbar
        this.max = 200;
        this.stacked = [];
        // Rating
        this.x = 5;
        this.y = 2;
        this.maxRating = 10;
        this.rate = 7;
        this.isReadonly = false;
        this.ratingStates = [
            { stateOn: 'fa fa-check', stateOff: 'fa fa-check-circle' },
            { stateOn: 'fa fa-star', stateOff: 'fa fa-star-o' },
            { stateOn: 'fa fa-heart', stateOff: 'fa fa-ban' },
            { stateOn: 'fa fa-heart' },
            { stateOff: 'fa fa-power-off' }
        ];
        // Tabs
        this.tabs = [
            { title: 'Title 1', content: 'Dynamic content 1' },
            { title: 'Title 2', content: 'Dynamic content 2', disabled: true },
            { title: 'Title 3', content: 'Dynamic content 3', removable: true }
        ];
        // Typehead
        this.selected = '';
        this.asyncSelected = '';
        this.typeaheadLoading = false;
        this.typeaheadNoResults = false;
        this.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas',
            'California', 'Colorado',
            'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
            'Illinois', 'Indiana', 'Iowa',
            'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
            'Michigan', 'Minnesota',
            'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
            'New Jersey', 'New Mexico',
            'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon',
            'Pennsylvania', 'Rhode Island',
            'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington',
            'West Virginia', 'Wisconsin', 'Wyoming'];
        this.statesComplex = [
            { id: 1, name: 'Alabama' }, { id: 2, name: 'Alaska' }, { id: 3, name: 'Arizona' },
            { id: 4, name: 'Arkansas' }, { id: 5, name: 'California' },
            { id: 6, name: 'Colorado' }, { id: 7, name: 'Connecticut' },
            { id: 8, name: 'Delaware' }, { id: 9, name: 'Florida' },
            { id: 10, name: 'Georgia' }, { id: 11, name: 'Hawaii' },
            { id: 12, name: 'Idaho' }, { id: 13, name: 'Illinois' },
            { id: 14, name: 'Indiana' }, { id: 15, name: 'Iowa' },
            { id: 16, name: 'Kansas' }, { id: 17, name: 'Kentucky' },
            { id: 18, name: 'Louisiana' }, { id: 19, name: 'Maine' },
            { id: 21, name: 'Maryland' }, { id: 22, name: 'Massachusetts' },
            { id: 23, name: 'Michigan' }, { id: 24, name: 'Minnesota' },
            { id: 25, name: 'Mississippi' }, { id: 26, name: 'Missouri' },
            { id: 27, name: 'Montana' }, { id: 28, name: 'Nebraska' },
            { id: 29, name: 'Nevada' }, { id: 30, name: 'New Hampshire' },
            { id: 31, name: 'New Jersey' }, { id: 32, name: 'New Mexico' },
            { id: 33, name: 'New York' }, { id: 34, name: 'North Dakota' },
            { id: 35, name: 'North Carolina' }, { id: 36, name: 'Ohio' },
            { id: 37, name: 'Oklahoma' }, { id: 38, name: 'Oregon' },
            { id: 39, name: 'Pennsylvania' }, { id: 40, name: 'Rhode Island' },
            { id: 41, name: 'South Carolina' }, { id: 42, name: 'South Dakota' },
            { id: 43, name: 'Tennessee' }, { id: 44, name: 'Texas' },
            { id: 45, name: 'Utah' }, { id: 46, name: 'Vermont' },
            { id: 47, name: 'Virginia' }, { id: 48, name: 'Washington' },
            { id: 49, name: 'West Virginia' }, { id: 50, name: 'Wisconsin' },
            { id: 51, name: 'Wyoming' }];
        this.random();
        this.randomStacked();
    }
    // Alert
    BSComponentComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    BSComponentComponent.prototype.addAlert = function () {
        this.alerts.push({ msg: 'Another alert!', type: 'warning', closable: true });
    };
    // Dropdown
    BSComponentComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    BSComponentComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    // Pagination
    BSComponentComponent.prototype.setPage = function (pageNo) {
        this.currentPage = pageNo;
    };
    ;
    BSComponentComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    ;
    // Progressbar
    BSComponentComponent.prototype.random = function () {
        var value = Math.floor((Math.random() * 100) + 1);
        var type;
        if (value < 25) {
            type = 'success';
        }
        else if (value < 50) {
            type = 'info';
        }
        else if (value < 75) {
            type = 'warning';
        }
        else {
            type = 'danger';
        }
        this.showWarning = (type === 'danger' || type === 'warning');
        this.dynamic = value;
        this.type = type;
    };
    ;
    BSComponentComponent.prototype.randomStacked = function () {
        var types = ['success', 'info', 'warning', 'danger'];
        this.stacked = [];
        var total = 0;
        var n = Math.floor((Math.random() * 4) + 1);
        for (var i = 0; i < n; i++) {
            var index = Math.floor((Math.random() * 4));
            var value = Math.floor((Math.random() * 30) + 1);
            total += value;
            this.stacked.push({
                value: value,
                max: value,
                type: types[index]
            });
        }
    };
    ;
    // Rating
    BSComponentComponent.prototype.hoveringOver = function (value) {
        this.overStar = value;
        this.percent = 100 * (value / this.max);
    };
    ;
    BSComponentComponent.prototype.resetStar = function () {
        this.overStar = void 0;
    };
    // Tabs
    BSComponentComponent.prototype.alertMe = function () {
        setTimeout(function () {
            alert('You\'ve selected the alert tab!');
        });
    };
    ;
    BSComponentComponent.prototype.setActiveTab = function (index) {
        this.tabs[index].active = true;
    };
    ;
    BSComponentComponent.prototype.removeTabHandler = function () {
        console.log('Remove Tab handler');
    };
    ;
    // Typehead
    BSComponentComponent.prototype.getContext = function () {
        return this;
    };
    BSComponentComponent.prototype.getAsyncData = function (context) {
        if (this._prevContext === context) {
            return this._cache;
        }
        this._prevContext = context;
        var f = function () {
            var p = new Promise(function (resolve) {
                setTimeout(function () {
                    var query = new RegExp(context.asyncSelected, 'ig');
                    return resolve(context.states.filter(function (state) {
                        return query.test(state);
                    }));
                }, 200);
            });
            return p;
        };
        this._cache = f;
        return this._cache;
    };
    BSComponentComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    BSComponentComponent.prototype.changeTypeaheadNoResults = function (e) {
        this.typeaheadNoResults = e;
    };
    BSComponentComponent.prototype.typeaheadOnSelect = function (e) {
        console.log("Selected value: " + e.item);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal_modal_component__["a" /* ModalDirective */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal_modal_component__["a" /* ModalDirective */]) === 'function' && _a) || Object)
    ], BSComponentComponent.prototype, "childModal", void 0);
    BSComponentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bs-component',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(921),
            styles: ["\n    \t.tooltip.customClass .tooltip-inner {\n    \t\tcolor: #880000;\n    \t\tbackground-color: #ffff66;\n    \t\tbox-shadow: 0 6px 12px rgba(0,0,0,.175);\n    \t}\n    \t.tooltip.customClass .tooltip-arrow {\n    \t\tdisplay: none;\n    \t}\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], BSComponentComponent);
    return BSComponentComponent;
    var _a;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/bsComponent.component.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bsComponent_component__ = __webpack_require__(396);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__bsComponent_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bsComponent_routes__ = __webpack_require__(666);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__bsComponent_routes__["a"]; });
/**
*	This barrel file provides the export for the lazy loaded BSComponent.
*/


//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/index.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BSElementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BSElementComponent = (function () {
    function BSElementComponent() {
    }
    BSElementComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bs-element',
            template: __webpack_require__(922)
        }), 
        __metadata('design:paramtypes', [])
    ], BSElementComponent);
    return BSElementComponent;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/bsElement.component.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bsElement_component__ = __webpack_require__(398);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__bsElement_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bsElement_routes__ = __webpack_require__(668);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__bsElement_routes__["a"]; });
/**
 * This barrel file provides the export for the lazy loaded BSelementComponent.
 */


//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/index.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
*	This class represents the lazy loaded DashboardComponent.
*/
var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-cmp',
            template: __webpack_require__(923)
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/dashboard.component.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_event_service__ = __webpack_require__(169);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventRegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventRegistrationComponent = (function () {
    function EventRegistrationComponent(eventService, _sanitizer) {
        var _this = this;
        this.eventService = eventService;
        this._sanitizer = _sanitizer;
        this.error = null;
        this.message = null;
        this.event = null;
        this.registeredStudents = [];
        this.eventList = [];
        this.selectedEvent = null;
        this.autocompleListFormatter = function (data) {
            var html = "<span>" + data.name + "</span>";
            return _this._sanitizer.bypassSecurityTrustHtml(html);
        };
    }
    EventRegistrationComponent.prototype.ngOnInit = function () {
        this.getEvents();
        this.error = 'Please wait for loading events (this message will be gone when loaded)';
    };
    EventRegistrationComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventList = [];
        this.error = null;
        this.message = null;
        this.event = null;
        this.eventService.getEventAndWorkShop()
            .then(function (events) {
            _this.error = null;
            console.log(events);
            _this.eventList = events.map(function (x) {
                return {
                    id: x.id,
                    name: x.name,
                    group: x.group
                };
            });
        })
            .catch(function (err) {
            console.log(err);
            _this.error = 'Unable to load Event list';
        });
    };
    EventRegistrationComponent.prototype.getRegistered = function () {
        var _this = this;
        this.error = 'Loading, please wait';
        this.registeredStudents = [];
        console.log(this.selectedEvent);
        this.eventService.getRegisteredCount(this.selectedEvent.id)
            .then(function (result) {
            console.log(result);
            _this.error = null;
            _this.event = result;
            if (result.students.length === 0) {
                _this.error = 'No student registrations yet';
            }
            else {
                _this.registeredStudents = result.students;
            }
        }).catch(function (error) {
            console.log(error);
            _this.error = 'Unable to get students';
        });
    };
    EventRegistrationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-event-registration',
            template: __webpack_require__(924),
            styles: [__webpack_require__(910)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_event_event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_event_event_service__["a" /* EventService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _b) || Object])
    ], EventRegistrationComponent);
    return EventRegistrationComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/event-registration.component.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(671);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventRegistrationRoutes; });

var EventRegistrationRoutes = [
    {
        path: 'eventRegistration',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* EventRegistrationComponent */]
    }
];
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/event-registration.routes.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_event_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_data_table_bootstrap4__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_data_table_bootstrap4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_data_table_bootstrap4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bluebird__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_bluebird__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventsComponent = (function () {
    function EventsComponent(eventService, userService) {
        var _this = this;
        this.eventService = eventService;
        this.userService = userService;
        this.error = null;
        this.message = null;
        this.events = [];
        this.event = null;
        this.eventAdmin = null;
        this.category = {
            'ORIGINALS': 'Drishti Originals',
            'COMECON': 'Comecon',
            'GAMING': 'Gaming',
            'ONLINE': 'Online',
            'GEN': 'General',
            'CIVIL': 'Civil',
            'AR': 'Architecture',
            'EE': 'Electrical',
            'EC': 'Electronics',
            'ME': 'Mechanical',
            'CS': 'Computer Science',
            'ROBO': 'Robotics'
        };
        this.categoryArray = Object.keys(this.category).map(function (key) {
            return [key, _this.category[key]];
        });
        this.allAdmins = [];
        this.itemResource = [];
        userService.getAdmins()
            .then(function (admins) {
            _this.allAdmins = admins;
        });
    }
    EventsComponent.prototype.getEvents = function (query) {
        var _this = this;
        this.error = null;
        this.message = null;
        this.event = null;
        this.eventService.getRegisteredCountAll()
            .then(function (events) {
            console.log(events);
            _this.itemResource = new __WEBPACK_IMPORTED_MODULE_3_angular_2_data_table_bootstrap4__["DataTableResource"](events);
            if (!query) {
                _this.events = events;
            }
            else {
                _this.itemResource.query(query)
                    .then(function (items) {
                    _this.events = items;
                });
            }
        })
            .catch(function (err) {
            console.log(err);
            _this.error = 'Unable to load Event list';
        });
    };
    EventsComponent.prototype.reloadEvents = function (query) {
        var _this = this;
        console.log('reloading');
        console.log(query);
        if (query && this.events.length !== 0) {
            return this.itemResource.query(query)
                .then(function (items) {
                _this.events = items;
            });
        }
        this.getEvents(query);
        this.userService.getAdmins()
            .then(function (admins) {
            _this.allAdmins = admins;
        });
    };
    EventsComponent.prototype.view = function (eventId) {
        var _this = this;
        this.error = null;
        this.message = null;
        this.event = null;
        this.eventService.getEvent(eventId)
            .then(function (event) {
            console.log(event);
            event.group = event.group ? 1 : 0;
            _this.event = event;
        })
            .catch(function (err) {
            _this.error = 'Unable to load event';
        });
    };
    EventsComponent.prototype.save = function () {
        var _this = this;
        console.log(this.event);
        this.error = null;
        this.message = null;
        var promise = null;
        if (this.event.uploadImage) {
            this.message = 'Uploading Image';
            promise = new __WEBPACK_IMPORTED_MODULE_4_bluebird__(function (res, rej) {
                var picId = Math.random() * 1000000;
                if (_this.event.id)
                    picId = _this.event.id;
                _this.eventService.uploadPic(picId, _this.event.uploadImage)
                    .then(function (result) {
                    console.log(result);
                    _this.event.image = result;
                    res(result);
                })
                    .catch(function (err) {
                    rej(err);
                });
            });
        }
        else {
            promise = new __WEBPACK_IMPORTED_MODULE_4_bluebird__(function (res, rej) { return res(); });
        }
        promise.then(function (res) {
            if (_this.event.id)
                return _this.eventService.updateEvent(_this.event);
            else
                return _this.eventService.addEvent(_this.event);
        })
            .then(function (event) {
            console.log(event);
            _this.message = 'Event Updated Successfully';
            _this.event = null;
            _this.getEvents();
        })
            .catch(function (err) {
            console.log(err);
            _this.error = 'Unable to update event';
        });
    };
    EventsComponent.prototype.addEventAdmin = function (adminId) {
        if (!adminId)
            return;
        var admin = this.event.allAdmins.find(function (admin) { return admin.id === adminId; });
        console.log(admin);
        this.event.admins.push(admin);
        this.event.allAdmins = this.event.allAdmins.filter(function (ad) { return ad.id !== adminId; });
    };
    EventsComponent.prototype.deleteAdmin = function (admin) {
        this.event.admins = this.event.admins.filter(function (ad) { return ad.id !== admin.id; });
        this.event.allAdmins.push(admin);
    };
    EventsComponent.prototype.fileChange = function ($event) {
        console.log($event.target.files);
        if ($event.target.files && $event.target.files[0])
            this.event.uploadImage = $event.target.files[0];
    };
    EventsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(925),
            styles: [__webpack_require__(911)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_event_event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_event_event_service__["a" /* EventService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], EventsComponent);
    return EventsComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/events.component.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_component__ = __webpack_require__(403);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__events_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events_routes__ = __webpack_require__(672);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__events_routes__["a"]; });


//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/index.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormComponent = (function () {
    function FormComponent() {
    }
    FormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-cmp',
            template: __webpack_require__(926)
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/forms.component.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forms_component__ = __webpack_require__(405);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__forms_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forms_routes__ = __webpack_require__(674);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__forms_routes__["a"]; });
/**
 * This barrel file provides the export for the lazy loaded FormsComponent.
 */


//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/index.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridComponent = (function () {
    function GridComponent() {
    }
    GridComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'grid-cmp',
            template: __webpack_require__(927)
        }), 
        __metadata('design:paramtypes', [])
    ], GridComponent);
    return GridComponent;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/grid.component.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_component__ = __webpack_require__(407);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__grid_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_routes__ = __webpack_require__(676);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__grid_routes__["a"]; });
/**
 * This barrel file provides the export for the lazy loaded HomeComponent.
 */


//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/index.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(250);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_routes__ = __webpack_require__(678);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__home_routes__["a"]; });
/**
*	This barrel file provides the export for the lazy loaded HomeComponent.
*/


//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/index.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__(400);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_routes__ = __webpack_require__(670);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__dashboard_routes__["a"]; });
/**
*	This barrel file provides the export for the lazy loaded DashboardComponent.
*/


//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/index.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_event_service__ = __webpack_require__(169);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultComponent = (function () {
    function ResultComponent(eventService, _sanitizer) {
        var _this = this;
        this.eventService = eventService;
        this._sanitizer = _sanitizer;
        this.position = 0;
        this.points = "0";
        this.identifier = "";
        this.error = null;
        this.message = null;
        this.results = null;
        this.registeredStudents = [];
        this.eventList = [];
        this.selectedEvent = null;
        this.showAddResult = false;
        this.autocompleListFormatter = function (data) {
            var html = "<span>" + data.name + "</span>";
            return _this._sanitizer.bypassSecurityTrustHtml(html);
        };
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.getEvents();
        this.error = 'Please wait for loading events (this message will be gone when loaded)';
    };
    ResultComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventList = [];
        this.error = null;
        this.message = null;
        this.results = null;
        this.eventService.getEventAndWorkShop()
            .then(function (events) {
            _this.error = null;
            console.log(events);
            _this.eventList = events.map(function (x) {
                return {
                    id: x.id,
                    name: x.name,
                    group: x.group
                };
            });
        })
            .catch(function (err) {
            console.log(err);
            _this.error = 'Unable to load Event list';
        });
    };
    ResultComponent.prototype.getResult = function () {
        var _this = this;
        this.error = "please wait";
        this.showAddResult = false;
        this.position = 0;
        this.points = "0";
        this.identifier = "";
        this.eventService.getResult(this.selectedEvent.id)
            .then(function (result) {
            console.log(result);
            _this.error = null;
            _this.results = result;
        }).catch(function (error) {
            console.log(error);
            _this.error = 'Unable to get events';
        });
    };
    ResultComponent.prototype.putResult = function () {
        var _this = this;
        if (this.position == 0) {
            this.error = "please fill all values";
            return;
        }
        if (this.points == '') {
            this.error = "please fill all values";
            return;
        }
        if (this.identifier == '') {
            this.error = "please fill all values";
            return;
        }
        this.error = "please wait";
        console.log(this.position);
        console.log(this.identifier);
        console.log(this.points);
        this.eventService.putResult(this.selectedEvent.id, this.position, this.points, this.identifier)
            .then(function (result) {
            _this.error = "done";
            _this.getResult();
        })
            .catch(function (err) {
            _this.error = "Unable to add Result";
        });
    };
    ResultComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(932),
            styles: [__webpack_require__(913)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_event_event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_event_event_service__["a" /* EventService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _b) || Object])
    ], ResultComponent);
    return ResultComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/result.component.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(679);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultRoutes; });

var ResultRoutes = [
    {
        path: 'result',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* ResultComponent */]
    }
];
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/result.routes.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentsComponent = (function () {
    function StudentsComponent(userService) {
        this.userService = userService;
        this.error = null;
        this.message = null;
        this.students = [];
        this.student = null;
    }
    StudentsComponent.prototype.getStudents = function () {
        var _this = this;
        this.error = null;
        this.message = null;
        this.student = null;
        this.userService.getStudents()
            .then(function (students) {
            console.log(students);
            _this.students = students;
        })
            .catch(function (err) {
            console.log(err);
            _this.error = 'Unable to load Student list';
        });
    };
    StudentsComponent.prototype.reloadStudents = function () {
        console.log('reloading');
        this.getStudents();
    };
    StudentsComponent.prototype.view = function (id) {
        var _this = this;
        this.error = null;
        this.message = null;
        this.student = null;
        this.userService.getStudent(id)
            .then(function (student) {
            console.log(student);
            _this.student = student;
        })
            .catch(function (err) {
            _this.error = 'Unable to load student';
        });
    };
    StudentsComponent.prototype.save = function () {
        var _this = this;
        console.log(this.student);
        this.error = null;
        this.message = null;
        this.userService.updateStudent(this.student)
            .then(function () {
            _this.message = 'Student details updated successfully';
            _this.reloadStudents();
        })
            .catch(function (err) {
            _this.error = 'Unable to update student details';
        });
    };
    StudentsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-students',
            template: __webpack_require__(933),
            styles: [__webpack_require__(914)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], StudentsComponent);
    return StudentsComponent;
    var _a;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/students.component.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table_component__ = __webpack_require__(415);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__table_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__table_routes__ = __webpack_require__(682);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__table_routes__["a"]; });
/**
 * This barrel file provides the export for the lazy loaded HomeComponent.
 */


//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/index.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableComponent = (function () {
    function TableComponent() {
    }
    TableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tables-cmp',
            template: __webpack_require__(934)
        }), 
        __metadata('design:paramtypes', [])
    ], TableComponent);
    return TableComponent;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/table.component.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_volunteer_volunteer_service__ = __webpack_require__(420);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VolunteerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VolunteerComponent = (function () {
    function VolunteerComponent(volunteerService) {
        this.volunteerService = volunteerService;
        this.student = {};
        this.error = null;
        this.registeredEvents = [];
        // for test purposes
        this.student['email'] = "johndoe@gmail.com";
        this.emailEntered();
    }
    VolunteerComponent.prototype.emailEntered = function () {
        var _this = this;
        this.registeredEvents = [];
        console.log(this.student);
        this.volunteerService.getRegisteredEvents(this.student)
            .then(function (result) {
            _this.error = null;
            _this.registeredEvents = result;
            console.log(result);
        }).catch(function (error) {
            console.log(error);
            _this.registeredEvents = [];
            _this.error = error.message;
        });
    };
    VolunteerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-volunteer',
            template: __webpack_require__(935),
            styles: [__webpack_require__(915)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_volunteer_volunteer_service__["a" /* VolunteerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_volunteer_volunteer_service__["a" /* VolunteerService */]) === 'function' && _a) || Object])
    ], VolunteerComponent);
    return VolunteerComponent;
    var _a;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/volunteer.component.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(683);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VolunteerRoutes; });

var VolunteerRoutes = [
    {
        path: 'volunteer',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["a" /* VolunteerComponent */]
    }
];
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/volunteer.routes.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_workshop_workshop_service__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bluebird__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bluebird__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkshopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkshopComponent = (function () {
    function WorkshopComponent(workshopService, userService) {
        var _this = this;
        this.workshopService = workshopService;
        this.userService = userService;
        this.error = null;
        this.message = null;
        this.workshops = [];
        this.workshop = null;
        this.WorkshopAdmin = null;
        this.category = {
            'ORIGINALS': 'Drishti Originals',
            'COMECON': 'Comecon',
            'GAMING': 'Gaming',
            'ONLINE': 'Online',
            'GEN': 'General',
            'CIVIL': 'Civil',
            'AR': 'Architecture',
            'EE': 'Electrical',
            'EC': 'Electronics',
            'ME': 'Mechanical',
            'CS': 'Computer Science',
            'ROBO': 'Robotics'
        };
        this.categoryArray = Object.keys(this.category).map(function (key) {
            return [key, _this.category[key]];
        });
        this.allAdmins = [];
        userService.getAdmins()
            .then(function (admins) {
            _this.allAdmins = admins;
        });
    }
    WorkshopComponent.prototype.getWorkshops = function () {
        var _this = this;
        this.error = null;
        this.message = null;
        this.workshop = null;
        this.workshopService.getWorkshops()
            .then(function (workshops) {
            console.log(workshops);
            _this.workshops = workshops;
        })
            .catch(function (err) {
            console.log(err);
            _this.error = 'Unable to load workshop list';
        });
    };
    WorkshopComponent.prototype.reloadWorkshops = function () {
        var _this = this;
        console.log('reloading');
        this.getWorkshops();
        this.userService.getAdmins()
            .then(function (admins) {
            _this.allAdmins = admins;
        });
    };
    WorkshopComponent.prototype.view = function (workshopId) {
        var _this = this;
        this.error = null;
        this.message = null;
        this.workshop = null;
        this.workshopService.getWorkshop(workshopId)
            .then(function (workshop) {
            console.log(workshop);
            workshop.group = workshop.group ? 1 : 0;
            _this.workshop = workshop;
        })
            .catch(function (err) {
            _this.error = 'Unable to load workshop';
        });
    };
    WorkshopComponent.prototype.save = function () {
        var _this = this;
        console.log(this.workshop);
        this.error = null;
        this.message = null;
        var promise = null;
        if (this.workshop.uploadImage) {
            this.message = 'Uploading Image';
            promise = new __WEBPACK_IMPORTED_MODULE_3_bluebird__(function (res, rej) {
                var picId = Math.random() * 1000000;
                if (_this.workshop.id)
                    picId = _this.workshop.id;
                _this.workshopService.uploadPic(picId, _this.workshop.uploadImage)
                    .then(function (result) {
                    console.log(result);
                    _this.workshop.image = result;
                    res(result);
                })
                    .catch(function (err) {
                    rej(err);
                });
            });
        }
        else {
            promise = new __WEBPACK_IMPORTED_MODULE_3_bluebird__(function (res, rej) { return res(); });
        }
        promise.then(function (res) {
            if (_this.workshop.id)
                return _this.workshopService.updateWorkshop(_this.workshop);
            else
                return _this.workshopService.addWorkshop(_this.workshop);
        })
            .then(function (workshop) {
            console.log(workshop);
            _this.message = 'workshop Updated Successfully';
            _this.workshop = null;
            _this.reloadWorkshops();
        })
            .catch(function (err) {
            console.log(err);
            _this.error = 'Unable to update workshop';
        });
    };
    WorkshopComponent.prototype.addWorkshopAdmin = function (adminId) {
        if (!adminId)
            return;
        var admin = this.workshop.allAdmins.find(function (admin) { return admin.id == adminId; });
        console.log(admin);
        this.workshop.admins.push(admin);
        this.workshop.allAdmins = this.workshop.allAdmins.filter(function (ad) { return ad.id != adminId; });
    };
    WorkshopComponent.prototype.deleteAdmin = function (admin) {
        this.workshop.admins = this.workshop.admins.filter(function (ad) { return ad.id != admin.id; });
        this.workshop.allAdmins.push(admin);
    };
    WorkshopComponent.prototype.fileChange = function ($workshop) {
        console.log($workshop.target.files);
        if ($workshop.target.files && $workshop.target.files[0])
            this.workshop.uploadImage = $workshop.target.files[0];
    };
    WorkshopComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-workshop',
            template: __webpack_require__(936),
            styles: [__webpack_require__(916)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_workshop_workshop_service__["a" /* WorkshopService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_workshop_workshop_service__["a" /* WorkshopService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], WorkshopComponent);
    return WorkshopComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/workshop.component.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
*	This class represents the lazy loaded LoginComponent.
*/
var LoginComponent = (function () {
    function LoginComponent(authService, router, userService) {
        this.authService = authService;
        this.router = router;
        this.userService = userService;
        this.error = '';
    }
    LoginComponent.prototype.login = function (provider) {
        var _this = this;
        this.error = '';
        this.authService.login(provider)
            .then(function (data) {
            return _this.userService.login(_this.authService.idToken);
        }).then(function (user) {
            console.log(user);
            if (user.status)
                _this.router.navigate(['dashboard/home']);
            else
                _this.error = 'Account Not verified by administrator';
        })
            .catch(function (err) {
            console.log(err);
            _this.error = 'Unable to login';
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login-cmp',
            template: __webpack_require__(937)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/login.component.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connection_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VolunteerService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var VolunteerService = (function (_super) {
    __extends(VolunteerService, _super);
    function VolunteerService(af, firebaseApp, http) {
        _super.call(this, af, firebaseApp, http);
        this.af = af;
        this.firebaseApp = firebaseApp;
        this.http = http;
        this.volunteerApi = this.serverUrl + '/volunteer';
    }
    VolunteerService.prototype.getRegisteredEvents = function (student) {
        var _this = this;
        return this.getHeaders()
            .then(function (headers) {
            return _this.http
                .post(_this.volunteerApi + '/registeredEvents', student, {
                headers: headers
            })
                .map(function (res) { return res.json(); })
                .toPromise();
        });
    };
    VolunteerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5_angularfire2__["d" /* FirebaseApp */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2__["e" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angularfire2__["e" /* AngularFire */]) === 'function' && _a) || Object, Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _b) || Object])
    ], VolunteerService);
    return VolunteerService;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_2__connection_service__["a" /* ConnectionService */]));
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/volunteer.service.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connection_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bluebird__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkshopService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var WorkshopService = (function (_super) {
    __extends(WorkshopService, _super);
    function WorkshopService(af, firebaseApp, http) {
        _super.call(this, af, firebaseApp, http);
        this.af = af;
        this.firebaseApp = firebaseApp;
        this.http = http;
        this.workshopApi = this.serverUrl + '/workshop';
    }
    WorkshopService.prototype.getWorkshops = function () {
        var _this = this;
        return this.getHeaders()
            .then(function (headers) {
            return _this.http
                .get(_this.workshopApi, {
                headers: headers
            })
                .map(function (res) { return res.json(); })
                .toPromise();
        });
    };
    WorkshopService.prototype.getWorkshop = function (workshopId) {
        var _this = this;
        return this.getHeaders()
            .then(function (headers) {
            return _this.http
                .get(_this.workshopApi + '/' + workshopId, {
                headers: headers
            })
                .map(function (res) { return res.json(); })
                .toPromise();
        });
    };
    WorkshopService.prototype.deleteWorkshop = function (workshopId) {
        var _this = this;
        return this.getHeaders()
            .then(function (headers) {
            return _this.http
                .delete(_this.workshopApi + '/' + workshopId, {
                headers: headers
            })
                .map(function (res) { return res.json(); })
                .toPromise();
        });
    };
    WorkshopService.prototype.updateWorkshop = function (workshop) {
        var _this = this;
        return this.getHeaders()
            .then(function (headers) {
            return _this.http
                .post(_this.workshopApi + '/' + workshop.id, workshop, {
                headers: headers
            })
                .map(function (res) { return res.json(); })
                .toPromise();
        });
    };
    WorkshopService.prototype.addWorkshop = function (workshop) {
        var _this = this;
        return this.getHeaders()
            .then(function (headers) {
            return _this.http
                .put(_this.workshopApi, workshop, {
                headers: headers
            })
                .map(function (res) { return res.json(); })
                .toPromise();
        });
    };
    WorkshopService.prototype.uploadPic = function (workshopId, file) {
        var path = 'images/workshops/' + workshopId + file.name;
        var ref = this.firebaseApp.storage().ref().child(path);
        return ref
            .put(file)
            .then(function (res) {
            return new __WEBPACK_IMPORTED_MODULE_5_bluebird__(function (resolve, reject) {
                ref.getDownloadURL().then(function (url) { return resolve(url); })
                    .catch(function (err) { return reject(err); });
            });
        });
    };
    WorkshopService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6_angularfire2__["d" /* FirebaseApp */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angularfire2__["e" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6_angularfire2__["e" /* AngularFire */]) === 'function' && _a) || Object, Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _b) || Object])
    ], WorkshopService);
    return WorkshopService;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_2__connection_service__["a" /* ConnectionService */]));
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/workshop.service.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__topnav_index__ = __webpack_require__(692);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__topnav_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_index__ = __webpack_require__(690);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__sidebar_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__name_list_index__ = __webpack_require__(423);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_env_config__ = __webpack_require__(687);
/* unused harmony namespace reexport */
/**
 * This barrel file provides the exports for the shared resources (services, components).
 */




//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/index.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__name_list_service__ = __webpack_require__(688);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__name_list_service__["a"]; });
/**
 * This barrel file provides the export for the shared NameListService.
 */

//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/index.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_component__ = __webpack_require__(425);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__signup_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signup_routes__ = __webpack_require__(695);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__signup_routes__["a"]; });
/**
*	This barrel file provides the export for the lazy loaded SignupComponent.
*/


//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/index.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
*	This class represents the lazy loaded SignupComponent.
*/
var SignupComponent = (function () {
    function SignupComponent() {
    }
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'signup-cmp',
            template: __webpack_require__(940)
        }), 
        __metadata('design:paramtypes', [])
    ], SignupComponent);
    return SignupComponent;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/signup.component.js.map

/***/ }),

/***/ 541:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 541;


/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(389);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/main.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
var AppComponent = (function () {
    function AppComponent(viewContainerRef, af) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
        // console.log('Environment config', Config);
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(917),
            styles: [__webpack_require__(907)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["e" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["e" /* AngularFire */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/app.component.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_index__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signup_index__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_index__ = __webpack_require__(410);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });




var routes = __WEBPACK_IMPORTED_MODULE_0__login_index__["a" /* LoginRoutes */].concat(__WEBPACK_IMPORTED_MODULE_1__signup_index__["a" /* SignupRoutes */], __WEBPACK_IMPORTED_MODULE_2__dashboard_index__["a" /* DashboardRoutes */], [
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_0__login_index__["b" /* LoginComponent */] }
]);
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/app.routes.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accomodation_component__ = __webpack_require__(390);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__accomodation_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accomodation_routes__ = __webpack_require__(391);
/* unused harmony namespace reexport */


//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/index.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(393);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminsRoutes; });

var AdminsRoutes = [
    {
        path: 'admins',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["b" /* AdminsComponent */]
    }
];
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/admins.routes.js.map

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blankPage_component__ = __webpack_require__(394);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlankPageModule = (function () {
    function BlankPageModule() {
    }
    BlankPageModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__blankPage_component__["a" /* BlankPageComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__blankPage_component__["a" /* BlankPageComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], BlankPageModule);
    return BlankPageModule;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/blankPage.module.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(395);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankPageRoutes; });

var BlankPageRoutes = [
    {
        path: 'blankpage',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["b" /* BlankPageComponent */]
    }
];
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/blankPage.routes.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bsComponent_component__ = __webpack_require__(396);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BSComponentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BSComponentModule = (function () {
    function BSComponentModule() {
    }
    BSComponentModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["b" /* AlertModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["d" /* ButtonsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["a" /* DropdownModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["e" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["f" /* ProgressbarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["g" /* RatingModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["h" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["i" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["c" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap__["j" /* TypeaheadModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__bsComponent_component__["a" /* BSComponentComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__bsComponent_component__["a" /* BSComponentComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], BSComponentModule);
    return BSComponentModule;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/bsComponent.module.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(397);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BSComponentRoutes; });

var BSComponentRoutes = [
    {
        path: 'components',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["b" /* BSComponentComponent */]
    }
];
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/bsComponent.routes.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bsElement_component__ = __webpack_require__(398);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BSElementModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BSElementModule = (function () {
    function BSElementModule() {
    }
    BSElementModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__bsElement_component__["a" /* BSElementComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__bsElement_component__["a" /* BSElementComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], BSElementModule);
    return BSElementModule;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/bsElement.module.js.map

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(399);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BSElementRoutes; });

var BSElementRoutes = [
    {
        path: 'element',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["b" /* BSElementComponent */]
    }
];
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/bsElement.routes.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_module__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blank_page_blankPage_module__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tables_table_module__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forms_forms_module__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__grid_grid_module__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bs_component_bsComponent_module__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bs_element_bsElement_module__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_index__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admins_admins_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular_2_data_table_bootstrap4__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular_2_data_table_bootstrap4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular_2_data_table_bootstrap4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__events_events_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__students_students_component__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_ckeditor__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_module__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__workshop_workshop_component__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__accomodation_accomodation_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__volunteer_volunteer_component__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__event_registration_event_registration_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_auto_complete__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ng2_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__result_result_component__ = __webpack_require__(411);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





























var myFirebaseAuthConfig = {
    provider: __WEBPACK_IMPORTED_MODULE_18_angularfire2__["a" /* AuthProviders */].Google,
    method: __WEBPACK_IMPORTED_MODULE_18_angularfire2__["b" /* AuthMethods */].Popup
};
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["a" /* DropdownModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["c" /* ModalModule */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_6__tables_table_module__["a" /* TableModule */],
                __WEBPACK_IMPORTED_MODULE_7__forms_forms_module__["a" /* FormModule */],
                __WEBPACK_IMPORTED_MODULE_8__grid_grid_module__["a" /* GridModule */],
                __WEBPACK_IMPORTED_MODULE_9__bs_component_bsComponent_module__["a" /* BSComponentModule */],
                __WEBPACK_IMPORTED_MODULE_10__bs_element_bsElement_module__["a" /* BSElementModule */],
                __WEBPACK_IMPORTED_MODULE_5__blank_page_blankPage_module__["a" /* BlankPageModule */],
                __WEBPACK_IMPORTED_MODULE_15_angular_2_data_table_bootstrap4__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2__["c" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_20__app_module__["b" /* firebaseConfig */], myFirebaseAuthConfig),
                __WEBPACK_IMPORTED_MODULE_19_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_25_ng2_auto_complete__["Ng2AutoCompleteModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_11__dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_12__shared_index__["a" /* TopNavComponent */], __WEBPACK_IMPORTED_MODULE_12__shared_index__["b" /* SidebarComponent */], __WEBPACK_IMPORTED_MODULE_13__admins_admins_component__["a" /* AdminsComponent */], __WEBPACK_IMPORTED_MODULE_16__events_events_component__["a" /* EventsComponent */], __WEBPACK_IMPORTED_MODULE_17__students_students_component__["a" /* StudentsComponent */], __WEBPACK_IMPORTED_MODULE_21__workshop_workshop_component__["a" /* WorkshopComponent */], __WEBPACK_IMPORTED_MODULE_22__accomodation_accomodation_component__["a" /* AccomodationComponent */], __WEBPACK_IMPORTED_MODULE_23__volunteer_volunteer_component__["a" /* VolunteerComponent */], __WEBPACK_IMPORTED_MODULE_24__event_registration_event_registration_component__["a" /* EventRegistrationComponent */], __WEBPACK_IMPORTED_MODULE_26__result_result_component__["a" /* ResultComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_11__dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_12__shared_index__["a" /* TopNavComponent */], __WEBPACK_IMPORTED_MODULE_12__shared_index__["b" /* SidebarComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/dashboard.module.js.map

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_index__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blank_page_index__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tables_index__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_index__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_index__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_component_index__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bs_element_index__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admins_index__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__events_index__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__students_student_routes__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__workshop_workshop_routes__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__accomodation_accomodation_routes__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__volunteer_volunteer_routes__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__result_result_routes__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__event_registration_event_registration_routes__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__index__ = __webpack_require__(410);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutes; });
















var DashboardRoutes = [
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_15__index__["b" /* DashboardComponent */],
        children: __WEBPACK_IMPORTED_MODULE_0__home_index__["a" /* HomeRoutes */].concat(__WEBPACK_IMPORTED_MODULE_7__admins_index__["a" /* AdminsRoutes */], __WEBPACK_IMPORTED_MODULE_8__events_index__["a" /* EventsRoutes */], __WEBPACK_IMPORTED_MODULE_9__students_student_routes__["a" /* StudentRoutes */], __WEBPACK_IMPORTED_MODULE_10__workshop_workshop_routes__["a" /* WorkshopRoutes */], __WEBPACK_IMPORTED_MODULE_12__volunteer_volunteer_routes__["a" /* VolunteerRoutes */], __WEBPACK_IMPORTED_MODULE_13__result_result_routes__["a" /* ResultRoutes */], __WEBPACK_IMPORTED_MODULE_14__event_registration_event_registration_routes__["a" /* EventRegistrationRoutes */], __WEBPACK_IMPORTED_MODULE_11__accomodation_accomodation_routes__["a" /* AccomodationRoutes */], __WEBPACK_IMPORTED_MODULE_5__bs_component_index__["a" /* BSComponentRoutes */], __WEBPACK_IMPORTED_MODULE_2__tables_index__["a" /* TableRoutes */], __WEBPACK_IMPORTED_MODULE_1__blank_page_index__["a" /* BlankPageRoutes */], __WEBPACK_IMPORTED_MODULE_3__forms_index__["a" /* FormRoutes */], __WEBPACK_IMPORTED_MODULE_4__grid_index__["a" /* GridRoutes */], __WEBPACK_IMPORTED_MODULE_6__bs_element_index__["a" /* BSElementRoutes */])
    }
];
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/dashboard.routes.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_registration_component__ = __webpack_require__(401);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__event_registration_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_registration_routes__ = __webpack_require__(402);
/* unused harmony namespace reexport */
/**
*	This barrel file provides the export for the lazy loaded DashboardComponent.
*/


//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/index.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(404);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsRoutes; });

var EventsRoutes = [
    {
        path: 'events',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["b" /* EventsComponent */]
    }
];
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/events.routes.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormModule = (function () {
    function FormModule() {
    }
    FormModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__forms_component__["a" /* FormComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__forms_component__["a" /* FormComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], FormModule);
    return FormModule;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/forms.module.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(406);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormRoutes; });

var FormRoutes = [
    {
        path: 'forms',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["b" /* FormComponent */]
    },
];
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/forms.routes.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_component__ = __webpack_require__(407);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GridModule = (function () {
    function GridModule() {
    }
    GridModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__grid_component__["a" /* GridComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__grid_component__["a" /* GridComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], GridModule);
    return GridModule;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/grid.module.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(408);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridRoutes; });

var GridRoutes = [
    {
        path: 'grid',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["b" /* GridComponent */]
    },
];
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/grid.routes.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__ = __webpack_require__(129);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["k" /* CarouselModule */], __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["a" /* DropdownModule */], __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["b" /* AlertModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_2__home_component__["b" /* TimelineComponent */], __WEBPACK_IMPORTED_MODULE_2__home_component__["c" /* ChatComponent */], __WEBPACK_IMPORTED_MODULE_2__home_component__["d" /* NotificationComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_2__home_component__["b" /* TimelineComponent */], __WEBPACK_IMPORTED_MODULE_2__home_component__["c" /* ChatComponent */], __WEBPACK_IMPORTED_MODULE_2__home_component__["d" /* NotificationComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/home.module.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(409);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutes; });

var HomeRoutes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["b" /* HomeComponent */]
    }
];
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/home.routes.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__result_component__ = __webpack_require__(411);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__result_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__result_routes__ = __webpack_require__(412);
/* unused harmony namespace reexport */


//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/index.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__students_component__ = __webpack_require__(413);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentRoutes; });

var StudentRoutes = [
    {
        path: 'students',
        component: __WEBPACK_IMPORTED_MODULE_0__students_component__["a" /* StudentsComponent */]
    }
];
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/student.routes.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_component__ = __webpack_require__(415);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableModule = (function () {
    function TableModule() {
    }
    TableModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__table_component__["a" /* TableComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__table_component__["a" /* TableComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], TableModule);
    return TableModule;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/table.module.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(414);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableRoutes; });

var TableRoutes = [
    {
        path: 'tables',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["b" /* TableComponent */]
    },
];
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/table.routes.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__volunteer_component__ = __webpack_require__(416);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__volunteer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__volunteer_routes__ = __webpack_require__(417);
/* unused harmony namespace reexport */
/**
*	This barrel file provides the export for the lazy loaded DashboardComponent.
*/


//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/index.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__workshop_component__ = __webpack_require__(418);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkshopRoutes; });

var WorkshopRoutes = [
    {
        path: 'workshops',
        component: __WEBPACK_IMPORTED_MODULE_0__workshop_component__["a" /* WorkshopComponent */]
    }
];
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/workshop.routes.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__(419);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/login.module.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(251);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutes; });

var LoginRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["b" /* LoginComponent */]
    }
];
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/login.routes.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Config */
// export const Config: EnvConfig = JSON.parse('<%= ENV_CONFIG %>');
var Config = {};
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/env.config.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(946);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * This class provides the NameList service with methods to read names and add names.
 */
var NameListService = (function () {
    /**
     * Creates a new NameListService with the injected Http.
     * @param {Http} http - The injected Http.
     * @constructor
     */
    function NameListService(http) {
        this.http = http;
    }
    /**
     * Returns an Observable for the HTTP GET request for the JSON resource.
     * @return {string[]} The Observable for the HTTP request.
     */
    NameListService.prototype.get = function () {
        return this.http.get('/assets/data.json')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    /**
      * Handle HTTP error
      */
    NameListService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    NameListService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], NameListService);
    return NameListService;
    var _a;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/name-list.service.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__name_list_index__ = __webpack_require__(423);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
* Do not specify providers for modules that might be imported by a lazy loaded module.
*/
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule,
            providers: [__WEBPACK_IMPORTED_MODULE_4__name_list_index__["a" /* NameListService */]]
        };
    };
    SharedModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/shared.module.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sidebar__ = __webpack_require__(691);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sidebar__["a"]; });

//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/index.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
        this.isActive = false;
        this.showMenu = '';
    }
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sidebar-cmp',
            template: __webpack_require__(938)
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/sidebar.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__topnav__ = __webpack_require__(693);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__topnav__["a"]; });

//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/index.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopNavComponent = (function () {
    function TopNavComponent(userService, authService, router) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.user = {};
        this.user = userService.user;
    }
    TopNavComponent.prototype.changeTheme = function (color) {
        var link = $('<link>');
        link
            .appendTo('head')
            .attr({ type: 'text/css', rel: 'stylesheet' })
            .attr('href', 'themes/app-' + color + '.css');
    };
    TopNavComponent.prototype.rtl = function () {
        var body = $('body');
        body.toggleClass('rtl');
    };
    TopNavComponent.prototype.sidebarToggler = function () {
        var sidebar = $('#sidebar');
        var mainContainer = $('.main-container');
        sidebar.toggleClass('sidebar-left-zero');
        mainContainer.toggleClass('main-container-ml-zero');
    };
    TopNavComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout()
            .then(function () {
            _this.router.navigate(['']);
        });
    };
    TopNavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'top-nav',
            template: __webpack_require__(939),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], TopNavComponent);
    return TopNavComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/topnav.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_component__ = __webpack_require__(425);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupModule = (function () {
    function SignupModule() {
    }
    SignupModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__signup_component__["a" /* SignupComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__signup_component__["a" /* SignupComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], SignupModule);
    return SignupModule;
}());
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/signup.module.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(424);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupRoutes; });

var SignupRoutes = [
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_0__index__["b" /* SignupComponent */]
    }
];
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/signup.routes.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/environment.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(972);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/polyfills.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connection_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bluebird__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService(af, firebase, http) {
        _super.call(this, af, firebase, http);
        this.af = af;
        this.http = http;
        this.userApi = this.serverUrl + '/student';
        this.adminApi = this.serverUrl + '/';
        this.authApi = this.serverUrl + '/auth';
        this.user = null;
        if (localStorage['profile'])
            this.user = JSON.parse(localStorage['profile']);
    }
    UserService.prototype.login = function (idToken) {
        var _this = this;
        return this.http
            .post(this.authApi + '/login', {
            idToken: idToken,
        })
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (user) {
            localStorage['profile'] = JSON.stringify(user);
            _this.user = user;
            return new __WEBPACK_IMPORTED_MODULE_5_bluebird__(function (resolve, reject) {
                resolve(user);
            });
        });
    };
    UserService.prototype.getAdmins = function () {
        var _this = this;
        return this.getHeaders()
            .then(function (headers) {
            return _this.http
                .get(_this.adminApi, {
                headers: headers
            })
                .map(function (res) { return res.json(); })
                .toPromise();
        });
    };
    UserService.prototype.getAdmin = function (adminId) {
        var _this = this;
        return this.getHeaders()
            .then(function (headers) {
            return _this.http
                .get(_this.adminApi + '/' + adminId, {
                headers: headers
            })
                .map(function (res) { return res.json(); })
                .toPromise();
        });
    };
    UserService.prototype.updateAdmin = function (admin) {
        var _this = this;
        return this.getHeaders()
            .then(function (headers) {
            return _this.http
                .post(_this.adminApi + '/' + admin.id, admin, {
                headers: headers
            })
                .map(function (res) { return res.json(); })
                .toPromise();
        });
    };
    UserService.prototype.getStudents = function () {
        var _this = this;
        return this.getHeaders()
            .then(function (headers) {
            return _this.http
                .get(_this.userApi, {
                headers: headers
            })
                .map(function (res) { return res.json(); })
                .toPromise();
        });
    };
    UserService.prototype.getStudent = function (studentId) {
        var _this = this;
        return this.getHeaders()
            .then(function (headers) {
            return _this.http
                .get(_this.userApi + '/' + studentId, {
                headers: headers
            })
                .map(function (res) { return res.json(); })
                .toPromise();
        });
    };
    UserService.prototype.updateStudent = function (student) {
        var _this = this;
        return this.getHeaders()
            .then(function (headers) {
            return _this.http
                .post(_this.userApi + '/' + student.id, student, {
                headers: headers
            })
                .map(function (res) { return res.json(); })
                .toPromise();
        });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_6_angularfire2__["d" /* FirebaseApp */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_angularfire2__["e" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6_angularfire2__["e" /* AngularFire */]) === 'function' && _a) || Object, Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _b) || Object])
    ], UserService);
    return UserService;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_2__connection_service__["a" /* ConnectionService */]));
//# sourceMappingURL=/home/jayadeep/workspace/projects/drishti/drishtiAdmin/src/user.service.js.map

/***/ }),

/***/ 907:
/***/ (function(module, exports) {

module.exports = "@import url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,400,300,600);\n/*!\n * Bootstrap v4.0.0-alpha.2 (http://getbootstrap.com)\n * Copyright 2011-2015 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden],\ntemplate {\n  display: none; }\n\na {\n  background-color: transparent; }\n\na:active {\n  outline: 0; }\n\na:hover {\n  outline: 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\npre {\n  overflow: auto; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\n\nbutton {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput {\n  line-height: normal; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto; }\n\noptgroup {\n  font-weight: bold; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    box-shadow: none !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\"; }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  img {\n    max-width: 100% !important; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  .navbar {\n    display: none; }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important; }\n  .label {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important; } }\n\nhtml {\n  box-sizing: border-box; }\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n\n@-moz-viewport {\n  width: device-width; }\n\n@-ms-viewport {\n  width: device-width; }\n\n@-o-viewport {\n  width: device-width; }\n\n@-webkit-viewport {\n  width: device-width; }\n\n@viewport {\n  width: device-width; }\n\nhtml {\n  font-size: 16px;\n  -webkit-tap-highlight-color: transparent; }\n\nbody {\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #373a3c;\n  background-color: #fff; }\n\n[tabindex=\"-1\"]:focus {\n  outline: none !important; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: .5rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #818a91; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: bold; }\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\na {\n  color: #0275d8;\n  text-decoration: none; }\n  a:focus, a:hover {\n    color: #014c8c;\n    text-decoration: underline; }\n  a:focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle; }\n\n[role=\"button\"] {\n  cursor: pointer; }\n\na,\narea,\nbutton,\n[role=\"button\"],\ninput,\nlabel,\nselect,\nsummary,\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation; }\n\ntable {\n  background-color: transparent; }\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #818a91;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: left; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem; }\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color; }\n\ninput,\nbutton,\nselect,\ntextarea {\n  margin: 0;\n  line-height: inherit;\n  border-radius: 0; }\n\ntextarea {\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit; }\n\ninput[type=\"search\"] {\n  box-sizing: inherit;\n  -webkit-appearance: none; }\n\noutput {\n  display: inline-block; }\n\n[hidden] {\n  display: none !important; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit; }\n\nh1 {\n  font-size: 2.5rem; }\n\nh2 {\n  font-size: 2rem; }\n\nh3 {\n  font-size: 1.75rem; }\n\nh4 {\n  font-size: 1.5rem; }\n\nh5 {\n  font-size: 1.25rem; }\n\nh6 {\n  font-size: 1rem; }\n\n.h1 {\n  font-size: 2.5rem; }\n\n.h2 {\n  font-size: 2rem; }\n\n.h3 {\n  font-size: 1.75rem; }\n\n.h4 {\n  font-size: 1.5rem; }\n\n.h5 {\n  font-size: 1.25rem; }\n\n.h6 {\n  font-size: 1rem; }\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300; }\n\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300; }\n\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300; }\n\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300; }\n\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300; }\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: normal; }\n\nmark,\n.mark {\n  padding: .2em;\n  background-color: #f0ad4e; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline-item {\n  display: inline-block; }\n  .list-inline-item:not(:last-child) {\n    margin-right: 5px; }\n\n.dl-horizontal {\n  margin-right: -1.875rem;\n  margin-left: -1.875rem; }\n  .dl-horizontal::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase; }\n\n.blockquote {\n  padding: 0.5rem 1rem;\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n  border-left: 0.25rem solid #eceeef; }\n\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  line-height: 1.5;\n  color: #818a91; }\n  .blockquote-footer::before {\n    content: \"\\2014 \\00A0\"; }\n\n.blockquote-reverse {\n  padding-right: 1rem;\n  padding-left: 0;\n  text-align: right;\n  border-right: 0.25rem solid #eceeef;\n  border-left: 0; }\n\n.blockquote-reverse .blockquote-footer::before {\n  content: \"\"; }\n\n.blockquote-reverse .blockquote-footer::after {\n  content: \"\\00A0 \\2014\"; }\n\n.img-fluid, .carousel-inner > .carousel-item > img,\n.carousel-inner > .carousel-item > a > img {\n  display: block;\n  max-width: 100%;\n  height: auto; }\n\n.img-rounded {\n  border-radius: 0.3rem; }\n\n.img-thumbnail {\n  padding: 0.25rem;\n  line-height: 1.5;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0.25rem;\n  -webkit-transition: all .2s ease-in-out;\n  transition: all .2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto; }\n\n.img-circle {\n  border-radius: 50%; }\n\n.figure {\n  display: inline-block; }\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1; }\n\n.figure-caption {\n  font-size: 90%;\n  color: #818a91; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace; }\n\ncode {\n  padding: .2rem .4rem;\n  font-size: 90%;\n  color: #bd4147;\n  background-color: #f7f7f9;\n  border-radius: 0.25rem; }\n\nkbd {\n  padding: .2rem .4rem;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 0.2rem; }\n  kbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: bold; }\n\npre {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  font-size: 90%;\n  line-height: 1.5;\n  color: #373a3c; }\n  pre code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    background-color: transparent;\n    border-radius: 0; }\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.container {\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem; }\n  .container::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  @media (min-width: 544px) {\n    .container {\n      max-width: 576px; } }\n  @media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .container {\n      max-width: 940px; } }\n  @media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n\n.container-fluid {\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem; }\n  .container-fluid::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n\n.row {\n  margin-left: -0.9375rem;\n  margin-right: -0.9375rem; }\n  .row::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left; }\n\n.col-xs-1 {\n  width: 8.33333%; }\n\n.col-xs-2 {\n  width: 16.66667%; }\n\n.col-xs-3 {\n  width: 25%; }\n\n.col-xs-4 {\n  width: 33.33333%; }\n\n.col-xs-5 {\n  width: 41.66667%; }\n\n.col-xs-6 {\n  width: 50%; }\n\n.col-xs-7 {\n  width: 58.33333%; }\n\n.col-xs-8 {\n  width: 66.66667%; }\n\n.col-xs-9 {\n  width: 75%; }\n\n.col-xs-10 {\n  width: 83.33333%; }\n\n.col-xs-11 {\n  width: 91.66667%; }\n\n.col-xs-12 {\n  width: 100%; }\n\n.col-xs-pull-0 {\n  right: auto; }\n\n.col-xs-pull-1 {\n  right: 8.33333%; }\n\n.col-xs-pull-2 {\n  right: 16.66667%; }\n\n.col-xs-pull-3 {\n  right: 25%; }\n\n.col-xs-pull-4 {\n  right: 33.33333%; }\n\n.col-xs-pull-5 {\n  right: 41.66667%; }\n\n.col-xs-pull-6 {\n  right: 50%; }\n\n.col-xs-pull-7 {\n  right: 58.33333%; }\n\n.col-xs-pull-8 {\n  right: 66.66667%; }\n\n.col-xs-pull-9 {\n  right: 75%; }\n\n.col-xs-pull-10 {\n  right: 83.33333%; }\n\n.col-xs-pull-11 {\n  right: 91.66667%; }\n\n.col-xs-pull-12 {\n  right: 100%; }\n\n.col-xs-push-0 {\n  left: auto; }\n\n.col-xs-push-1 {\n  left: 8.33333%; }\n\n.col-xs-push-2 {\n  left: 16.66667%; }\n\n.col-xs-push-3 {\n  left: 25%; }\n\n.col-xs-push-4 {\n  left: 33.33333%; }\n\n.col-xs-push-5 {\n  left: 41.66667%; }\n\n.col-xs-push-6 {\n  left: 50%; }\n\n.col-xs-push-7 {\n  left: 58.33333%; }\n\n.col-xs-push-8 {\n  left: 66.66667%; }\n\n.col-xs-push-9 {\n  left: 75%; }\n\n.col-xs-push-10 {\n  left: 83.33333%; }\n\n.col-xs-push-11 {\n  left: 91.66667%; }\n\n.col-xs-push-12 {\n  left: 100%; }\n\n.col-xs-offset-0 {\n  margin-left: 0%; }\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%; }\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%; }\n\n.col-xs-offset-3 {\n  margin-left: 25%; }\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%; }\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%; }\n\n.col-xs-offset-6 {\n  margin-left: 50%; }\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%; }\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%; }\n\n.col-xs-offset-9 {\n  margin-left: 75%; }\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%; }\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%; }\n\n.col-xs-offset-12 {\n  margin-left: 100%; }\n\n@media (min-width: 544px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left; }\n  .col-sm-1 {\n    width: 8.33333%; }\n  .col-sm-2 {\n    width: 16.66667%; }\n  .col-sm-3 {\n    width: 25%; }\n  .col-sm-4 {\n    width: 33.33333%; }\n  .col-sm-5 {\n    width: 41.66667%; }\n  .col-sm-6 {\n    width: 50%; }\n  .col-sm-7 {\n    width: 58.33333%; }\n  .col-sm-8 {\n    width: 66.66667%; }\n  .col-sm-9 {\n    width: 75%; }\n  .col-sm-10 {\n    width: 83.33333%; }\n  .col-sm-11 {\n    width: 91.66667%; }\n  .col-sm-12 {\n    width: 100%; }\n  .col-sm-pull-0 {\n    right: auto; }\n  .col-sm-pull-1 {\n    right: 8.33333%; }\n  .col-sm-pull-2 {\n    right: 16.66667%; }\n  .col-sm-pull-3 {\n    right: 25%; }\n  .col-sm-pull-4 {\n    right: 33.33333%; }\n  .col-sm-pull-5 {\n    right: 41.66667%; }\n  .col-sm-pull-6 {\n    right: 50%; }\n  .col-sm-pull-7 {\n    right: 58.33333%; }\n  .col-sm-pull-8 {\n    right: 66.66667%; }\n  .col-sm-pull-9 {\n    right: 75%; }\n  .col-sm-pull-10 {\n    right: 83.33333%; }\n  .col-sm-pull-11 {\n    right: 91.66667%; }\n  .col-sm-pull-12 {\n    right: 100%; }\n  .col-sm-push-0 {\n    left: auto; }\n  .col-sm-push-1 {\n    left: 8.33333%; }\n  .col-sm-push-2 {\n    left: 16.66667%; }\n  .col-sm-push-3 {\n    left: 25%; }\n  .col-sm-push-4 {\n    left: 33.33333%; }\n  .col-sm-push-5 {\n    left: 41.66667%; }\n  .col-sm-push-6 {\n    left: 50%; }\n  .col-sm-push-7 {\n    left: 58.33333%; }\n  .col-sm-push-8 {\n    left: 66.66667%; }\n  .col-sm-push-9 {\n    left: 75%; }\n  .col-sm-push-10 {\n    left: 83.33333%; }\n  .col-sm-push-11 {\n    left: 91.66667%; }\n  .col-sm-push-12 {\n    left: 100%; }\n  .col-sm-offset-0 {\n    margin-left: 0%; }\n  .col-sm-offset-1 {\n    margin-left: 8.33333%; }\n  .col-sm-offset-2 {\n    margin-left: 16.66667%; }\n  .col-sm-offset-3 {\n    margin-left: 25%; }\n  .col-sm-offset-4 {\n    margin-left: 33.33333%; }\n  .col-sm-offset-5 {\n    margin-left: 41.66667%; }\n  .col-sm-offset-6 {\n    margin-left: 50%; }\n  .col-sm-offset-7 {\n    margin-left: 58.33333%; }\n  .col-sm-offset-8 {\n    margin-left: 66.66667%; }\n  .col-sm-offset-9 {\n    margin-left: 75%; }\n  .col-sm-offset-10 {\n    margin-left: 83.33333%; }\n  .col-sm-offset-11 {\n    margin-left: 91.66667%; }\n  .col-sm-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 768px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left; }\n  .col-md-1 {\n    width: 8.33333%; }\n  .col-md-2 {\n    width: 16.66667%; }\n  .col-md-3 {\n    width: 25%; }\n  .col-md-4 {\n    width: 33.33333%; }\n  .col-md-5 {\n    width: 41.66667%; }\n  .col-md-6 {\n    width: 50%; }\n  .col-md-7 {\n    width: 58.33333%; }\n  .col-md-8 {\n    width: 66.66667%; }\n  .col-md-9 {\n    width: 75%; }\n  .col-md-10 {\n    width: 83.33333%; }\n  .col-md-11 {\n    width: 91.66667%; }\n  .col-md-12 {\n    width: 100%; }\n  .col-md-pull-0 {\n    right: auto; }\n  .col-md-pull-1 {\n    right: 8.33333%; }\n  .col-md-pull-2 {\n    right: 16.66667%; }\n  .col-md-pull-3 {\n    right: 25%; }\n  .col-md-pull-4 {\n    right: 33.33333%; }\n  .col-md-pull-5 {\n    right: 41.66667%; }\n  .col-md-pull-6 {\n    right: 50%; }\n  .col-md-pull-7 {\n    right: 58.33333%; }\n  .col-md-pull-8 {\n    right: 66.66667%; }\n  .col-md-pull-9 {\n    right: 75%; }\n  .col-md-pull-10 {\n    right: 83.33333%; }\n  .col-md-pull-11 {\n    right: 91.66667%; }\n  .col-md-pull-12 {\n    right: 100%; }\n  .col-md-push-0 {\n    left: auto; }\n  .col-md-push-1 {\n    left: 8.33333%; }\n  .col-md-push-2 {\n    left: 16.66667%; }\n  .col-md-push-3 {\n    left: 25%; }\n  .col-md-push-4 {\n    left: 33.33333%; }\n  .col-md-push-5 {\n    left: 41.66667%; }\n  .col-md-push-6 {\n    left: 50%; }\n  .col-md-push-7 {\n    left: 58.33333%; }\n  .col-md-push-8 {\n    left: 66.66667%; }\n  .col-md-push-9 {\n    left: 75%; }\n  .col-md-push-10 {\n    left: 83.33333%; }\n  .col-md-push-11 {\n    left: 91.66667%; }\n  .col-md-push-12 {\n    left: 100%; }\n  .col-md-offset-0 {\n    margin-left: 0%; }\n  .col-md-offset-1 {\n    margin-left: 8.33333%; }\n  .col-md-offset-2 {\n    margin-left: 16.66667%; }\n  .col-md-offset-3 {\n    margin-left: 25%; }\n  .col-md-offset-4 {\n    margin-left: 33.33333%; }\n  .col-md-offset-5 {\n    margin-left: 41.66667%; }\n  .col-md-offset-6 {\n    margin-left: 50%; }\n  .col-md-offset-7 {\n    margin-left: 58.33333%; }\n  .col-md-offset-8 {\n    margin-left: 66.66667%; }\n  .col-md-offset-9 {\n    margin-left: 75%; }\n  .col-md-offset-10 {\n    margin-left: 83.33333%; }\n  .col-md-offset-11 {\n    margin-left: 91.66667%; }\n  .col-md-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 992px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left; }\n  .col-lg-1 {\n    width: 8.33333%; }\n  .col-lg-2 {\n    width: 16.66667%; }\n  .col-lg-3 {\n    width: 25%; }\n  .col-lg-4 {\n    width: 33.33333%; }\n  .col-lg-5 {\n    width: 41.66667%; }\n  .col-lg-6 {\n    width: 50%; }\n  .col-lg-7 {\n    width: 58.33333%; }\n  .col-lg-8 {\n    width: 66.66667%; }\n  .col-lg-9 {\n    width: 75%; }\n  .col-lg-10 {\n    width: 83.33333%; }\n  .col-lg-11 {\n    width: 91.66667%; }\n  .col-lg-12 {\n    width: 100%; }\n  .col-lg-pull-0 {\n    right: auto; }\n  .col-lg-pull-1 {\n    right: 8.33333%; }\n  .col-lg-pull-2 {\n    right: 16.66667%; }\n  .col-lg-pull-3 {\n    right: 25%; }\n  .col-lg-pull-4 {\n    right: 33.33333%; }\n  .col-lg-pull-5 {\n    right: 41.66667%; }\n  .col-lg-pull-6 {\n    right: 50%; }\n  .col-lg-pull-7 {\n    right: 58.33333%; }\n  .col-lg-pull-8 {\n    right: 66.66667%; }\n  .col-lg-pull-9 {\n    right: 75%; }\n  .col-lg-pull-10 {\n    right: 83.33333%; }\n  .col-lg-pull-11 {\n    right: 91.66667%; }\n  .col-lg-pull-12 {\n    right: 100%; }\n  .col-lg-push-0 {\n    left: auto; }\n  .col-lg-push-1 {\n    left: 8.33333%; }\n  .col-lg-push-2 {\n    left: 16.66667%; }\n  .col-lg-push-3 {\n    left: 25%; }\n  .col-lg-push-4 {\n    left: 33.33333%; }\n  .col-lg-push-5 {\n    left: 41.66667%; }\n  .col-lg-push-6 {\n    left: 50%; }\n  .col-lg-push-7 {\n    left: 58.33333%; }\n  .col-lg-push-8 {\n    left: 66.66667%; }\n  .col-lg-push-9 {\n    left: 75%; }\n  .col-lg-push-10 {\n    left: 83.33333%; }\n  .col-lg-push-11 {\n    left: 91.66667%; }\n  .col-lg-push-12 {\n    left: 100%; }\n  .col-lg-offset-0 {\n    margin-left: 0%; }\n  .col-lg-offset-1 {\n    margin-left: 8.33333%; }\n  .col-lg-offset-2 {\n    margin-left: 16.66667%; }\n  .col-lg-offset-3 {\n    margin-left: 25%; }\n  .col-lg-offset-4 {\n    margin-left: 33.33333%; }\n  .col-lg-offset-5 {\n    margin-left: 41.66667%; }\n  .col-lg-offset-6 {\n    margin-left: 50%; }\n  .col-lg-offset-7 {\n    margin-left: 58.33333%; }\n  .col-lg-offset-8 {\n    margin-left: 66.66667%; }\n  .col-lg-offset-9 {\n    margin-left: 75%; }\n  .col-lg-offset-10 {\n    margin-left: 83.33333%; }\n  .col-lg-offset-11 {\n    margin-left: 91.66667%; }\n  .col-lg-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 1200px) {\n  .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12 {\n    float: left; }\n  .col-xl-1 {\n    width: 8.33333%; }\n  .col-xl-2 {\n    width: 16.66667%; }\n  .col-xl-3 {\n    width: 25%; }\n  .col-xl-4 {\n    width: 33.33333%; }\n  .col-xl-5 {\n    width: 41.66667%; }\n  .col-xl-6 {\n    width: 50%; }\n  .col-xl-7 {\n    width: 58.33333%; }\n  .col-xl-8 {\n    width: 66.66667%; }\n  .col-xl-9 {\n    width: 75%; }\n  .col-xl-10 {\n    width: 83.33333%; }\n  .col-xl-11 {\n    width: 91.66667%; }\n  .col-xl-12 {\n    width: 100%; }\n  .col-xl-pull-0 {\n    right: auto; }\n  .col-xl-pull-1 {\n    right: 8.33333%; }\n  .col-xl-pull-2 {\n    right: 16.66667%; }\n  .col-xl-pull-3 {\n    right: 25%; }\n  .col-xl-pull-4 {\n    right: 33.33333%; }\n  .col-xl-pull-5 {\n    right: 41.66667%; }\n  .col-xl-pull-6 {\n    right: 50%; }\n  .col-xl-pull-7 {\n    right: 58.33333%; }\n  .col-xl-pull-8 {\n    right: 66.66667%; }\n  .col-xl-pull-9 {\n    right: 75%; }\n  .col-xl-pull-10 {\n    right: 83.33333%; }\n  .col-xl-pull-11 {\n    right: 91.66667%; }\n  .col-xl-pull-12 {\n    right: 100%; }\n  .col-xl-push-0 {\n    left: auto; }\n  .col-xl-push-1 {\n    left: 8.33333%; }\n  .col-xl-push-2 {\n    left: 16.66667%; }\n  .col-xl-push-3 {\n    left: 25%; }\n  .col-xl-push-4 {\n    left: 33.33333%; }\n  .col-xl-push-5 {\n    left: 41.66667%; }\n  .col-xl-push-6 {\n    left: 50%; }\n  .col-xl-push-7 {\n    left: 58.33333%; }\n  .col-xl-push-8 {\n    left: 66.66667%; }\n  .col-xl-push-9 {\n    left: 75%; }\n  .col-xl-push-10 {\n    left: 83.33333%; }\n  .col-xl-push-11 {\n    left: 91.66667%; }\n  .col-xl-push-12 {\n    left: 100%; }\n  .col-xl-offset-0 {\n    margin-left: 0%; }\n  .col-xl-offset-1 {\n    margin-left: 8.33333%; }\n  .col-xl-offset-2 {\n    margin-left: 16.66667%; }\n  .col-xl-offset-3 {\n    margin-left: 25%; }\n  .col-xl-offset-4 {\n    margin-left: 33.33333%; }\n  .col-xl-offset-5 {\n    margin-left: 41.66667%; }\n  .col-xl-offset-6 {\n    margin-left: 50%; }\n  .col-xl-offset-7 {\n    margin-left: 58.33333%; }\n  .col-xl-offset-8 {\n    margin-left: 66.66667%; }\n  .col-xl-offset-9 {\n    margin-left: 75%; }\n  .col-xl-offset-10 {\n    margin-left: 83.33333%; }\n  .col-xl-offset-11 {\n    margin-left: 91.66667%; }\n  .col-xl-offset-12 {\n    margin-left: 100%; } }\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem; }\n  .table th,\n  .table td {\n    padding: 0.75rem;\n    line-height: 1.5;\n    vertical-align: top;\n    border-top: 1px solid #eceeef; }\n  .table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #eceeef; }\n  .table tbody + tbody {\n    border-top: 2px solid #eceeef; }\n  .table .table {\n    background-color: #fff; }\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n\n.table-bordered {\n  border: 1px solid #eceeef; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #eceeef; }\n  .table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #f9f9f9; }\n\n.table-hover tbody tr:hover {\n  background-color: #f5f5f5; }\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: #f5f5f5; }\n\n.table-hover .table-active:hover {\n  background-color: #e8e8e8; }\n  .table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: #e8e8e8; }\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #5cb85c; }\n\n.table-hover .table-success:hover {\n  background-color: #4cae4c; }\n  .table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #4cae4c; }\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #5bc0de; }\n\n.table-hover .table-info:hover {\n  background-color: #46b8da; }\n  .table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #46b8da; }\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #f0ad4e; }\n\n.table-hover .table-warning:hover {\n  background-color: #eea236; }\n  .table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #eea236; }\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #d9534f; }\n\n.table-hover .table-danger:hover {\n  background-color: #d43f3a; }\n  .table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #d43f3a; }\n\n.table-responsive {\n  display: block;\n  width: 100%;\n  min-height: 0.01%;\n  overflow-x: auto; }\n\n.thead-inverse th {\n  color: #fff;\n  background-color: #373a3c; }\n\n.thead-default th {\n  color: #55595c;\n  background-color: #eceeef; }\n\n.table-inverse {\n  color: #eceeef;\n  background-color: #373a3c; }\n  .table-inverse.table-bordered {\n    border: 0; }\n  .table-inverse th,\n  .table-inverse td,\n  .table-inverse thead th {\n    border-color: #55595c; }\n\n.table-reflow thead {\n  float: left; }\n\n.table-reflow tbody {\n  display: block;\n  white-space: nowrap; }\n\n.table-reflow th,\n.table-reflow td {\n  border-top: 1px solid #eceeef;\n  border-left: 1px solid #eceeef; }\n  .table-reflow th:last-child,\n  .table-reflow td:last-child {\n    border-right: 1px solid #eceeef; }\n\n.table-reflow thead:last-child tr:last-child th,\n.table-reflow thead:last-child tr:last-child td,\n.table-reflow tbody:last-child tr:last-child th,\n.table-reflow tbody:last-child tr:last-child td,\n.table-reflow tfoot:last-child tr:last-child th,\n.table-reflow tfoot:last-child tr:last-child td {\n  border-bottom: 1px solid #eceeef; }\n\n.table-reflow tr {\n  float: left; }\n  .table-reflow tr th,\n  .table-reflow tr td {\n    display: block !important;\n    border: 1px solid #eceeef; }\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #55595c;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 0.25rem;\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s; }\n  .form-control::-ms-expand {\n    background-color: transparent;\n    border: 0; }\n  .form-control:focus {\n    border-color: #66afe9;\n    outline: none; }\n  .form-control::-webkit-input-placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control::-moz-placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control:-ms-input-placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control::placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control:disabled, .form-control[readonly] {\n    background-color: #eceeef;\n    opacity: 1; }\n  .form-control:disabled {\n    cursor: not-allowed; }\n\n.form-control-file,\n.form-control-range {\n  display: block; }\n\n.form-control-label {\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 2.25rem; }\n  input[type=\"date\"].input-sm,\n  .input-group-sm input[type=\"date\"].form-control,\n  input[type=\"time\"].input-sm,\n  .input-group-sm\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].input-sm,\n  .input-group-sm\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].input-sm,\n  .input-group-sm\n  input[type=\"month\"].form-control {\n    line-height: 1.8625rem; }\n  input[type=\"date\"].input-lg,\n  .input-group-lg input[type=\"date\"].form-control,\n  input[type=\"time\"].input-lg,\n  .input-group-lg\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].input-lg,\n  .input-group-lg\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].input-lg,\n  .input-group-lg\n  input[type=\"month\"].form-control {\n    line-height: 3.16667rem; } }\n\n.form-control-static {\n  min-height: 2.25rem;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0; }\n  .form-control-static.form-control-sm, .input-group-sm > .form-control-static.form-control,\n  .input-group-sm > .form-control-static.input-group-addon,\n  .input-group-sm > .input-group-btn > .form-control-static.btn, .form-control-static.form-control-lg, .input-group-lg > .form-control-static.form-control,\n  .input-group-lg > .form-control-static.input-group-addon,\n  .input-group-lg > .input-group-btn > .form-control-static.btn {\n    padding-right: 0;\n    padding-left: 0; }\n\n.form-control-sm, .input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  padding: 0.275rem 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.form-control-lg, .input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  padding: 0.75rem 1.25rem;\n  font-size: 1.25rem;\n  line-height: 1.33333;\n  border-radius: 0.3rem; }\n\n.form-group {\n  margin-bottom: 1rem; }\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-bottom: 0.75rem; }\n  .radio label,\n  .checkbox label {\n    padding-left: 1.25rem;\n    margin-bottom: 0;\n    font-weight: normal;\n    cursor: pointer; }\n    .radio label input:only-child,\n    .checkbox label input:only-child {\n      position: static; }\n\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-top: .25rem;\n  margin-left: -1.25rem; }\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -.25rem; }\n\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 1.25rem;\n  margin-bottom: 0;\n  font-weight: normal;\n  vertical-align: middle;\n  cursor: pointer; }\n\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: .75rem; }\n\ninput[type=\"radio\"]:disabled, input[type=\"radio\"].disabled,\ninput[type=\"checkbox\"]:disabled,\ninput[type=\"checkbox\"].disabled {\n  cursor: not-allowed; }\n\n.radio-inline.disabled,\n.checkbox-inline.disabled {\n  cursor: not-allowed; }\n\n.radio.disabled label,\n.checkbox.disabled label {\n  cursor: not-allowed; }\n\n.form-control-success,\n.form-control-warning,\n.form-control-danger {\n  padding-right: 2.25rem;\n  background-repeat: no-repeat;\n  background-position: center right 0.5625rem;\n  background-size: 1.4625rem 1.4625rem; }\n\n.has-success .text-help,\n.has-success .form-control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #5cb85c; }\n\n.has-success .form-control {\n  border-color: #5cb85c; }\n\n.has-success .input-group-addon {\n  color: #5cb85c;\n  border-color: #5cb85c;\n  background-color: #eaf6ea; }\n\n.has-success .form-control-feedback {\n  color: #5cb85c; }\n\n.has-success .form-control-success {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTIgNzkyIj48cGF0aCBmaWxsPSIjNWNiODVjIiBkPSJNMjMzLjggNjEwYy0xMy4zIDAtMjYtNi0zNC0xNi44TDkwLjUgNDQ4LjhDNzYuMyA0MzAgODAgNDAzLjMgOTguOCAzODljMTguOC0xNC4yIDQ1LjUtMTAuNCA1OS44IDguNGw3MiA5NUw0NTEuMyAyNDJjMTIuNS0yMCAzOC44LTI2LjIgNTguOC0xMy43IDIwIDEyLjQgMjYgMzguNyAxMy43IDU4LjhMMjcwIDU5MGMtNy40IDEyLTIwLjIgMTkuNC0zNC4zIDIwaC0yeiIvPjwvc3ZnPg==\"); }\n\n.has-warning .text-help,\n.has-warning .form-control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #f0ad4e; }\n\n.has-warning .form-control {\n  border-color: #f0ad4e; }\n\n.has-warning .input-group-addon {\n  color: #f0ad4e;\n  border-color: #f0ad4e;\n  background-color: white; }\n\n.has-warning .form-control-feedback {\n  color: #f0ad4e; }\n\n.has-warning .form-control-warning {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTIgNzkyIj48cGF0aCBmaWxsPSIjZjBhZDRlIiBkPSJNNjAzIDY0MC4ybC0yNzguNS01MDljLTMuOC02LjYtMTAuOC0xMC42LTE4LjUtMTAuNnMtMTQuNyA0LTE4LjUgMTAuNkw5IDY0MC4yYy0zLjcgNi41LTMuNiAxNC40LjIgMjAuOCAzLjggNi41IDEwLjggMTAuNCAxOC4zIDEwLjRoNTU3YzcuNiAwIDE0LjYtNCAxOC40LTEwLjQgMy41LTYuNCAzLjYtMTQuNCAwLTIwLjh6bS0yNjYuNC0zMGgtNjEuMlY1NDloNjEuMnY2MS4yem0wLTEwN2gtNjEuMlYzMDRoNjEuMnYxOTl6Ii8+PC9zdmc+\"); }\n\n.has-danger .text-help,\n.has-danger .form-control-label,\n.has-danger .radio,\n.has-danger .checkbox,\n.has-danger .radio-inline,\n.has-danger .checkbox-inline,\n.has-danger.radio label,\n.has-danger.checkbox label,\n.has-danger.radio-inline label,\n.has-danger.checkbox-inline label {\n  color: #d9534f; }\n\n.has-danger .form-control {\n  border-color: #d9534f; }\n\n.has-danger .input-group-addon {\n  color: #d9534f;\n  border-color: #d9534f;\n  background-color: #fdf7f7; }\n\n.has-danger .form-control-feedback {\n  color: #d9534f; }\n\n.has-danger .form-control-danger {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTIgNzkyIj48cGF0aCBmaWxsPSIjZDk1MzRmIiBkPSJNNDQ3IDU0NC40Yy0xNC40IDE0LjQtMzcuNiAxNC40LTUyIDBsLTg5LTkyLjctODkgOTIuN2MtMTQuNSAxNC40LTM3LjcgMTQuNC01MiAwLTE0LjQtMTQuNC0xNC40LTM3LjYgMC01Mmw5Mi40LTk2LjMtOTIuNC05Ni4zYy0xNC40LTE0LjQtMTQuNC0zNy42IDAtNTJzMzcuNi0xNC4zIDUyIDBsODkgOTIuOCA4OS4yLTkyLjdjMTQuNC0xNC40IDM3LjYtMTQuNCA1MiAwIDE0LjMgMTQuNCAxNC4zIDM3LjYgMCA1MkwzNTQuNiAzOTZsOTIuNCA5Ni40YzE0LjQgMTQuNCAxNC40IDM3LjYgMCA1MnoiLz48L3N2Zz4=\"); }\n\n@media (min-width: 544px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle; }\n  .form-inline .form-control-static {\n    display: inline-block; }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle; }\n    .form-inline .input-group .input-group-addon,\n    .form-inline .input-group .input-group-btn,\n    .form-inline .input-group .form-control {\n      width: auto; }\n  .form-inline .input-group > .form-control {\n    width: 100%; }\n  .form-inline .form-control-label {\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle; }\n    .form-inline .radio label,\n    .form-inline .checkbox label {\n      padding-left: 0; }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0; }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0; } }\n\n.btn {\n  display: inline-block;\n  font-weight: normal;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 1rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out; }\n  .btn:focus, .btn.focus, .btn:active:focus, .btn:active.focus, .btn.active:focus, .btn.active.focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n  .btn:focus, .btn:hover {\n    text-decoration: none; }\n  .btn.focus {\n    text-decoration: none; }\n  .btn:active, .btn.active {\n    background-image: none;\n    outline: 0; }\n  .btn.disabled, .btn:disabled {\n    cursor: not-allowed;\n    opacity: .65; }\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #0275d8;\n  border-color: #0275d8; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #025aa5;\n    border-color: #01549b; }\n  .btn-primary:focus, .btn-primary.focus {\n    color: #fff;\n    background-color: #025aa5;\n    border-color: #01549b; }\n  .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #025aa5;\n    border-color: #01549b;\n    background-image: none; }\n    .btn-primary:active:hover, .btn-primary:active:focus, .btn-primary:active.focus, .btn-primary.active:hover, .btn-primary.active:focus, .btn-primary.active.focus,\n    .open > .btn-primary.dropdown-toggle:hover,\n    .open > .btn-primary.dropdown-toggle:focus,\n    .open > .btn-primary.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #014682;\n      border-color: #01315a; }\n  .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary:disabled:focus, .btn-primary:disabled.focus {\n    background-color: #0275d8;\n    border-color: #0275d8; }\n  .btn-primary.disabled:hover, .btn-primary:disabled:hover {\n    background-color: #0275d8;\n    border-color: #0275d8; }\n\n.btn-secondary {\n  color: #373a3c;\n  background-color: #fff;\n  border-color: #ccc; }\n  .btn-secondary:hover {\n    color: #373a3c;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n  .btn-secondary:focus, .btn-secondary.focus {\n    color: #373a3c;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n  .btn-secondary:active, .btn-secondary.active,\n  .open > .btn-secondary.dropdown-toggle {\n    color: #373a3c;\n    background-color: #e6e6e6;\n    border-color: #adadad;\n    background-image: none; }\n    .btn-secondary:active:hover, .btn-secondary:active:focus, .btn-secondary:active.focus, .btn-secondary.active:hover, .btn-secondary.active:focus, .btn-secondary.active.focus,\n    .open > .btn-secondary.dropdown-toggle:hover,\n    .open > .btn-secondary.dropdown-toggle:focus,\n    .open > .btn-secondary.dropdown-toggle.focus {\n      color: #373a3c;\n      background-color: #d4d4d4;\n      border-color: #8c8c8c; }\n  .btn-secondary.disabled:focus, .btn-secondary.disabled.focus, .btn-secondary:disabled:focus, .btn-secondary:disabled.focus {\n    background-color: #fff;\n    border-color: #ccc; }\n  .btn-secondary.disabled:hover, .btn-secondary:disabled:hover {\n    background-color: #fff;\n    border-color: #ccc; }\n\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #5bc0de; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #2aabd2; }\n  .btn-info:focus, .btn-info.focus {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #2aabd2; }\n  .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #2aabd2;\n    background-image: none; }\n    .btn-info:active:hover, .btn-info:active:focus, .btn-info:active.focus, .btn-info.active:hover, .btn-info.active:focus, .btn-info.active.focus,\n    .open > .btn-info.dropdown-toggle:hover,\n    .open > .btn-info.dropdown-toggle:focus,\n    .open > .btn-info.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #269abc;\n      border-color: #1f7e9a; }\n  .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info:disabled:focus, .btn-info:disabled.focus {\n    background-color: #5bc0de;\n    border-color: #5bc0de; }\n  .btn-info.disabled:hover, .btn-info:disabled:hover {\n    background-color: #5bc0de;\n    border-color: #5bc0de; }\n\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #5cb85c; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #419641; }\n  .btn-success:focus, .btn-success.focus {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #419641; }\n  .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #419641;\n    background-image: none; }\n    .btn-success:active:hover, .btn-success:active:focus, .btn-success:active.focus, .btn-success.active:hover, .btn-success.active:focus, .btn-success.active.focus,\n    .open > .btn-success.dropdown-toggle:hover,\n    .open > .btn-success.dropdown-toggle:focus,\n    .open > .btn-success.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #398439;\n      border-color: #2d672d; }\n  .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success:disabled:focus, .btn-success:disabled.focus {\n    background-color: #5cb85c;\n    border-color: #5cb85c; }\n  .btn-success.disabled:hover, .btn-success:disabled:hover {\n    background-color: #5cb85c;\n    border-color: #5cb85c; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #f0ad4e; }\n  .btn-warning:hover {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #eb9316; }\n  .btn-warning:focus, .btn-warning.focus {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #eb9316; }\n  .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #eb9316;\n    background-image: none; }\n    .btn-warning:active:hover, .btn-warning:active:focus, .btn-warning:active.focus, .btn-warning.active:hover, .btn-warning.active:focus, .btn-warning.active.focus,\n    .open > .btn-warning.dropdown-toggle:hover,\n    .open > .btn-warning.dropdown-toggle:focus,\n    .open > .btn-warning.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #d58512;\n      border-color: #b06d0f; }\n  .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning:disabled:focus, .btn-warning:disabled.focus {\n    background-color: #f0ad4e;\n    border-color: #f0ad4e; }\n  .btn-warning.disabled:hover, .btn-warning:disabled:hover {\n    background-color: #f0ad4e;\n    border-color: #f0ad4e; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d9534f; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #c12e2a; }\n  .btn-danger:focus, .btn-danger.focus {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #c12e2a; }\n  .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #c12e2a;\n    background-image: none; }\n    .btn-danger:active:hover, .btn-danger:active:focus, .btn-danger:active.focus, .btn-danger.active:hover, .btn-danger.active:focus, .btn-danger.active.focus,\n    .open > .btn-danger.dropdown-toggle:hover,\n    .open > .btn-danger.dropdown-toggle:focus,\n    .open > .btn-danger.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #ac2925;\n      border-color: #8b211e; }\n  .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger:disabled:focus, .btn-danger:disabled.focus {\n    background-color: #d9534f;\n    border-color: #d9534f; }\n  .btn-danger.disabled:hover, .btn-danger:disabled:hover {\n    background-color: #d9534f;\n    border-color: #d9534f; }\n\n.btn-primary-outline {\n  color: #0275d8;\n  background-image: none;\n  background-color: transparent;\n  border-color: #0275d8; }\n  .btn-primary-outline:focus, .btn-primary-outline.focus, .btn-primary-outline:active, .btn-primary-outline.active,\n  .open > .btn-primary-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #0275d8;\n    border-color: #0275d8; }\n  .btn-primary-outline:hover {\n    color: #fff;\n    background-color: #0275d8;\n    border-color: #0275d8; }\n  .btn-primary-outline.disabled:focus, .btn-primary-outline.disabled.focus, .btn-primary-outline:disabled:focus, .btn-primary-outline:disabled.focus {\n    border-color: #43a7fd; }\n  .btn-primary-outline.disabled:hover, .btn-primary-outline:disabled:hover {\n    border-color: #43a7fd; }\n\n.btn-secondary-outline {\n  color: #ccc;\n  background-image: none;\n  background-color: transparent;\n  border-color: #ccc; }\n  .btn-secondary-outline:focus, .btn-secondary-outline.focus, .btn-secondary-outline:active, .btn-secondary-outline.active,\n  .open > .btn-secondary-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #ccc;\n    border-color: #ccc; }\n  .btn-secondary-outline:hover {\n    color: #fff;\n    background-color: #ccc;\n    border-color: #ccc; }\n  .btn-secondary-outline.disabled:focus, .btn-secondary-outline.disabled.focus, .btn-secondary-outline:disabled:focus, .btn-secondary-outline:disabled.focus {\n    border-color: white; }\n  .btn-secondary-outline.disabled:hover, .btn-secondary-outline:disabled:hover {\n    border-color: white; }\n\n.btn-info-outline {\n  color: #5bc0de;\n  background-image: none;\n  background-color: transparent;\n  border-color: #5bc0de; }\n  .btn-info-outline:focus, .btn-info-outline.focus, .btn-info-outline:active, .btn-info-outline.active,\n  .open > .btn-info-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #5bc0de;\n    border-color: #5bc0de; }\n  .btn-info-outline:hover {\n    color: #fff;\n    background-color: #5bc0de;\n    border-color: #5bc0de; }\n  .btn-info-outline.disabled:focus, .btn-info-outline.disabled.focus, .btn-info-outline:disabled:focus, .btn-info-outline:disabled.focus {\n    border-color: #b0e1ef; }\n  .btn-info-outline.disabled:hover, .btn-info-outline:disabled:hover {\n    border-color: #b0e1ef; }\n\n.btn-success-outline {\n  color: #5cb85c;\n  background-image: none;\n  background-color: transparent;\n  border-color: #5cb85c; }\n  .btn-success-outline:focus, .btn-success-outline.focus, .btn-success-outline:active, .btn-success-outline.active,\n  .open > .btn-success-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #5cb85c;\n    border-color: #5cb85c; }\n  .btn-success-outline:hover {\n    color: #fff;\n    background-color: #5cb85c;\n    border-color: #5cb85c; }\n  .btn-success-outline.disabled:focus, .btn-success-outline.disabled.focus, .btn-success-outline:disabled:focus, .btn-success-outline:disabled.focus {\n    border-color: #a3d7a3; }\n  .btn-success-outline.disabled:hover, .btn-success-outline:disabled:hover {\n    border-color: #a3d7a3; }\n\n.btn-warning-outline {\n  color: #f0ad4e;\n  background-image: none;\n  background-color: transparent;\n  border-color: #f0ad4e; }\n  .btn-warning-outline:focus, .btn-warning-outline.focus, .btn-warning-outline:active, .btn-warning-outline.active,\n  .open > .btn-warning-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #f0ad4e;\n    border-color: #f0ad4e; }\n  .btn-warning-outline:hover {\n    color: #fff;\n    background-color: #f0ad4e;\n    border-color: #f0ad4e; }\n  .btn-warning-outline.disabled:focus, .btn-warning-outline.disabled.focus, .btn-warning-outline:disabled:focus, .btn-warning-outline:disabled.focus {\n    border-color: #f8d9ac; }\n  .btn-warning-outline.disabled:hover, .btn-warning-outline:disabled:hover {\n    border-color: #f8d9ac; }\n\n.btn-danger-outline {\n  color: #d9534f;\n  background-image: none;\n  background-color: transparent;\n  border-color: #d9534f; }\n  .btn-danger-outline:focus, .btn-danger-outline.focus, .btn-danger-outline:active, .btn-danger-outline.active,\n  .open > .btn-danger-outline.dropdown-toggle {\n    color: #fff;\n    background-color: #d9534f;\n    border-color: #d9534f; }\n  .btn-danger-outline:hover {\n    color: #fff;\n    background-color: #d9534f;\n    border-color: #d9534f; }\n  .btn-danger-outline.disabled:focus, .btn-danger-outline.disabled.focus, .btn-danger-outline:disabled:focus, .btn-danger-outline:disabled.focus {\n    border-color: #eba5a3; }\n  .btn-danger-outline.disabled:hover, .btn-danger-outline:disabled:hover {\n    border-color: #eba5a3; }\n\n.btn-link {\n  font-weight: normal;\n  color: #0275d8;\n  border-radius: 0; }\n  .btn-link, .btn-link:active, .btn-link.active, .btn-link:disabled {\n    background-color: transparent; }\n  .btn-link, .btn-link:focus, .btn-link:active {\n    border-color: transparent; }\n  .btn-link:hover {\n    border-color: transparent; }\n  .btn-link:focus, .btn-link:hover {\n    color: #014c8c;\n    text-decoration: underline;\n    background-color: transparent; }\n  .btn-link:disabled:focus, .btn-link:disabled:hover {\n    color: #818a91;\n    text-decoration: none; }\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.75rem 1.25rem;\n  font-size: 1.25rem;\n  line-height: 1.33333;\n  border-radius: 0.3rem; }\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n\n.btn-block + .btn-block {\n  margin-top: 5px; }\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n  transition: opacity .15s linear; }\n  .fade.in {\n    opacity: 1; }\n\n.collapse {\n  display: none; }\n  .collapse.in {\n    display: block; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-duration: .35s;\n          transition-duration: .35s;\n  -webkit-transition-property: height;\n  transition-property: height; }\n\n.dropup,\n.dropdown {\n  position: relative; }\n\n.dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-right: .25rem;\n  margin-left: .25rem;\n  vertical-align: middle;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-left: 0.3em solid transparent; }\n\n.dropdown-toggle:focus {\n  outline: 0; }\n\n.dropup .dropdown-toggle::after {\n  border-top: 0;\n  border-bottom: 0.3em solid; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 1rem;\n  color: #373a3c;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem; }\n\n.dropdown-divider {\n  height: 1px;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  background-color: #e5e5e5; }\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #373a3c;\n  text-align: inherit;\n  white-space: nowrap;\n  background: none;\n  border: 0; }\n  .dropdown-item:focus, .dropdown-item:hover {\n    color: #2b2d2f;\n    text-decoration: none;\n    background-color: #f5f5f5; }\n  .dropdown-item.active, .dropdown-item.active:focus, .dropdown-item.active:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #0275d8;\n    outline: 0; }\n  .dropdown-item.disabled, .dropdown-item.disabled:focus, .dropdown-item.disabled:hover {\n    color: #818a91; }\n  .dropdown-item.disabled:focus, .dropdown-item.disabled:hover {\n    text-decoration: none;\n    cursor: not-allowed;\n    background-color: transparent;\n    background-image: none;\n    filter: \"progid:DXImageTransform.Microsoft.gradient(enabled = false)\"; }\n\n.open > .dropdown-menu {\n  display: block; }\n\n.open > a {\n  outline: 0; }\n\n.dropdown-menu-right {\n  right: 0;\n  left: auto; }\n\n.dropdown-menu-left {\n  right: auto;\n  left: 0; }\n\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #818a91;\n  white-space: nowrap; }\n\n.dropdown-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 990; }\n\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto; }\n\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  content: \"\";\n  border-top: 0;\n  border-bottom: 0.3em solid; }\n\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px; }\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; }\n  .btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    float: left; }\n    .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 2; }\n    .btn-group > .btn:hover,\n    .btn-group-vertical > .btn:hover {\n      z-index: 2; }\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px; }\n\n.btn-toolbar {\n  margin-left: -5px; }\n  .btn-toolbar::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .btn-toolbar .btn-group,\n  .btn-toolbar .input-group {\n    float: left; }\n  .btn-toolbar > .btn,\n  .btn-toolbar > .btn-group,\n  .btn-toolbar > .input-group {\n    margin-left: 5px; }\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0; }\n\n.btn-group > .btn:first-child {\n  margin-left: 0; }\n  .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0; }\n\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group > .btn-group {\n  float: left; }\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0; }\n\n.btn-group > .btn + .dropdown-toggle {\n  padding-right: 8px;\n  padding-left: 8px; }\n\n.btn-group > .btn-lg + .dropdown-toggle, .btn-group-lg.btn-group > .btn + .dropdown-toggle {\n  padding-right: 12px;\n  padding-left: 12px; }\n\n.btn .caret {\n  margin-left: 0; }\n\n.btn-lg .caret, .btn-group-lg > .btn .caret {\n  border-width: 0.3em 0.3em 0;\n  border-bottom-width: 0; }\n\n.dropup .btn-lg .caret, .dropup .btn-group-lg > .btn .caret {\n  border-width: 0 0.3em 0.3em; }\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%; }\n\n.btn-group-vertical > .btn-group::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.btn-group-vertical > .btn-group > .btn {\n  float: none; }\n\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0; }\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-bottom-left-radius: 0.25rem;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none; }\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate; }\n  .input-group .form-control {\n    position: relative;\n    z-index: 2;\n    float: left;\n    width: 100%;\n    margin-bottom: 0; }\n    .input-group .form-control:focus, .input-group .form-control:active, .input-group .form-control:hover {\n      z-index: 3; }\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell; }\n  .input-group-addon:not(:first-child):not(:last-child),\n  .input-group-btn:not(:first-child):not(:last-child),\n  .input-group .form-control:not(:first-child):not(:last-child) {\n    border-radius: 0; }\n\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle; }\n\n.input-group-addon {\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1;\n  color: #55595c;\n  text-align: center;\n  background-color: #eceeef;\n  border: 1px solid #ccc;\n  border-radius: 0.25rem; }\n  .input-group-addon.form-control-sm,\n  .input-group-sm > .input-group-addon,\n  .input-group-sm > .input-group-btn > .input-group-addon.btn {\n    padding: 0.275rem 0.75rem;\n    font-size: 0.875rem;\n    border-radius: 0.2rem; }\n  .input-group-addon.form-control-lg,\n  .input-group-lg > .input-group-addon,\n  .input-group-lg > .input-group-btn > .input-group-addon.btn {\n    padding: 0.75rem 1.25rem;\n    font-size: 1.25rem;\n    border-radius: 0.3rem; }\n  .input-group-addon input[type=\"radio\"],\n  .input-group-addon input[type=\"checkbox\"] {\n    margin-top: 0; }\n\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.input-group-addon:first-child {\n  border-right: 0; }\n\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.input-group-addon:last-child {\n  border-left: 0; }\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap; }\n  .input-group-btn > .btn {\n    position: relative; }\n    .input-group-btn > .btn + .btn {\n      margin-left: -1px; }\n    .input-group-btn > .btn:focus, .input-group-btn > .btn:active, .input-group-btn > .btn:hover {\n      z-index: 3; }\n  .input-group-btn:first-child > .btn,\n  .input-group-btn:first-child > .btn-group {\n    margin-right: -1px; }\n  .input-group-btn:last-child > .btn,\n  .input-group-btn:last-child > .btn-group {\n    z-index: 2;\n    margin-left: -1px; }\n    .input-group-btn:last-child > .btn:focus, .input-group-btn:last-child > .btn:active, .input-group-btn:last-child > .btn:hover,\n    .input-group-btn:last-child > .btn-group:focus,\n    .input-group-btn:last-child > .btn-group:active,\n    .input-group-btn:last-child > .btn-group:hover {\n      z-index: 3; }\n\n.c-input {\n  position: relative;\n  display: inline;\n  padding-left: 1.5rem;\n  color: #555;\n  cursor: pointer; }\n  .c-input > input {\n    position: absolute;\n    z-index: -1;\n    opacity: 0; }\n    .c-input > input:checked ~ .c-indicator {\n      color: #fff;\n      background-color: #0074d9; }\n    .c-input > input:focus ~ .c-indicator {\n      box-shadow: 0 0 0 .075rem #fff, 0 0 0 .2rem #0074d9; }\n    .c-input > input:active ~ .c-indicator {\n      color: #fff;\n      background-color: #84c6ff; }\n  .c-input + .c-input {\n    margin-left: 1rem; }\n\n.c-indicator {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  font-size: 65%;\n  line-height: 1rem;\n  color: #eee;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #eee;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%; }\n\n.c-checkbox .c-indicator {\n  border-radius: .25rem; }\n\n.c-checkbox input:checked ~ .c-indicator {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTYuNCwxTDUuNywxLjdMMi45LDQuNUwyLjEsMy43TDEuNCwzTDAsNC40bDAuNywwLjdsMS41LDEuNWwwLjcsMC43bDAuNy0wLjdsMy41LTMuNWwwLjctMC43TDYuNCwxTDYuNCwxeiINCgkvPg0KPC9zdmc+DQo=); }\n\n.c-checkbox input:indeterminate ~ .c-indicator {\n  background-color: #0074d9;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iOHB4IiBoZWlnaHQ9IjhweCIgdmlld0JveD0iMCAwIDggOCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgOCA4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0wLDN2Mmg4VjNIMHoiLz4NCjwvc3ZnPg0K); }\n\n.c-radio .c-indicator {\n  border-radius: 50%; }\n\n.c-radio input:checked ~ .c-indicator {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQsMUMyLjMsMSwxLDIuMywxLDRzMS4zLDMsMywzczMtMS4zLDMtM1M1LjcsMSw0LDF6Ii8+DQo8L3N2Zz4NCg==); }\n\n.c-inputs-stacked .c-input {\n  display: inline; }\n  .c-inputs-stacked .c-input::after {\n    display: block;\n    margin-bottom: .25rem;\n    content: \"\"; }\n  .c-inputs-stacked .c-input + .c-input {\n    margin-left: 0; }\n\n.c-select {\n  display: inline-block;\n  max-width: 100%;\n  padding: .375rem 1.75rem .375rem .75rem;\n  padding-right: .75rem \\9;\n  color: #55595c;\n  vertical-align: middle;\n  background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAMAAACzvE1FAAAADFBMVEUzMzMzMzMzMzMzMzMKAG/3AAAAA3RSTlMAf4C/aSLHAAAAPElEQVR42q3NMQ4AIAgEQTn//2cLdRKppSGzBYwzVXvznNWs8C58CiussPJj8h6NwgorrKRdTvuV9v16Afn0AYFOB7aYAAAAAElFTkSuQmCC) no-repeat right 0.75rem center;\n  background-image: none \\9;\n  background-size: 8px 10px;\n  border: 1px solid #ccc;\n  -moz-appearance: none;\n  -webkit-appearance: none; }\n  .c-select:focus {\n    border-color: #51a7e8;\n    outline: none; }\n  .c-select::-ms-expand {\n    opacity: 0; }\n\n.c-select-sm {\n  padding-top: 3px;\n  padding-bottom: 3px;\n  font-size: 12px; }\n  .c-select-sm:not([multiple]) {\n    height: 26px;\n    min-height: 26px; }\n\n.file {\n  position: relative;\n  display: inline-block;\n  height: 2.5rem;\n  cursor: pointer; }\n\n.file input {\n  min-width: 14rem;\n  margin: 0;\n  filter: alpha(opacity=0);\n  opacity: 0; }\n\n.file-custom {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 5;\n  height: 2.5rem;\n  padding: .5rem 1rem;\n  line-height: 1.5;\n  color: #555;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: .25rem; }\n\n.file-custom::after {\n  content: \"Choose file...\"; }\n\n.file-custom::before {\n  position: absolute;\n  top: -.075rem;\n  right: -.075rem;\n  bottom: -.075rem;\n  z-index: 6;\n  display: block;\n  height: 2.5rem;\n  padding: .5rem 1rem;\n  line-height: 1.5;\n  color: #555;\n  content: \"Browse\";\n  background-color: #eee;\n  border: 1px solid #ddd;\n  border-radius: 0 .25rem .25rem 0; }\n\n.nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.nav-link {\n  display: inline-block; }\n  .nav-link:focus, .nav-link:hover {\n    text-decoration: none; }\n  .nav-link.disabled {\n    color: #818a91; }\n    .nav-link.disabled, .nav-link.disabled:focus, .nav-link.disabled:hover {\n      color: #818a91;\n      cursor: not-allowed;\n      background-color: transparent; }\n\n.nav-inline .nav-item {\n  display: inline-block; }\n\n.nav-inline .nav-item + .nav-item,\n.nav-inline .nav-link + .nav-link {\n  margin-left: 1rem; }\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd; }\n  .nav-tabs::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .nav-tabs .nav-item {\n    float: left;\n    margin-bottom: -1px; }\n    .nav-tabs .nav-item + .nav-item {\n      margin-left: .2rem; }\n  .nav-tabs .nav-link {\n    display: block;\n    padding: 0.5em 1em;\n    border: 1px solid transparent;\n    border-radius: 0.25rem 0.25rem 0 0; }\n    .nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {\n      border-color: #eceeef #eceeef #ddd; }\n    .nav-tabs .nav-link.disabled, .nav-tabs .nav-link.disabled:focus, .nav-tabs .nav-link.disabled:hover {\n      color: #818a91;\n      background-color: transparent;\n      border-color: transparent; }\n  .nav-tabs .nav-link.active, .nav-tabs .nav-link.active:focus, .nav-tabs .nav-link.active:hover,\n  .nav-tabs .nav-item.open .nav-link,\n  .nav-tabs .nav-item.open .nav-link:focus,\n  .nav-tabs .nav-item.open .nav-link:hover {\n    color: #55595c;\n    background-color: #fff;\n    border-color: #ddd #ddd transparent; }\n\n.nav-pills::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.nav-pills .nav-item {\n  float: left; }\n  .nav-pills .nav-item + .nav-item {\n    margin-left: .2rem; }\n\n.nav-pills .nav-link {\n  display: block;\n  padding: 0.5em 1em;\n  border-radius: 0.25rem; }\n\n.nav-pills .nav-link.active, .nav-pills .nav-link.active:focus, .nav-pills .nav-link.active:hover,\n.nav-pills .nav-item.open .nav-link,\n.nav-pills .nav-item.open .nav-link:focus,\n.nav-pills .nav-item.open .nav-link:hover {\n  color: #fff;\n  cursor: default;\n  background-color: #0275d8; }\n\n.nav-stacked .nav-item {\n  display: block;\n  float: none; }\n  .nav-stacked .nav-item + .nav-item {\n    margin-top: .2rem;\n    margin-left: 0; }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.navbar {\n  position: relative;\n  padding: 0.5rem 1rem; }\n  .navbar::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  @media (min-width: 544px) {\n    .navbar {\n      border-radius: 0.25rem; } }\n\n.navbar-full {\n  z-index: 1000; }\n  @media (min-width: 544px) {\n    .navbar-full {\n      border-radius: 0; } }\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n  @media (min-width: 544px) {\n    .navbar-fixed-top,\n    .navbar-fixed-bottom {\n      border-radius: 0; } }\n\n.navbar-fixed-top {\n  top: 0; }\n\n.navbar-fixed-bottom {\n  bottom: 0; }\n\n.navbar-sticky-top {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1030;\n  width: 100%; }\n  @media (min-width: 544px) {\n    .navbar-sticky-top {\n      border-radius: 0; } }\n\n.navbar-brand {\n  float: left;\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  margin-right: 1rem;\n  font-size: 1.25rem; }\n  .navbar-brand:focus, .navbar-brand:hover {\n    text-decoration: none; }\n  .navbar-brand > img {\n    display: block; }\n\n.navbar-divider {\n  float: left;\n  width: 1px;\n  padding-top: .425rem;\n  padding-bottom: .425rem;\n  margin-right: 1rem;\n  margin-left: 1rem;\n  overflow: hidden; }\n  .navbar-divider::before {\n    content: \"\\00a0\"; }\n\n.navbar-toggler {\n  padding: .5rem .75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n  .navbar-toggler:focus, .navbar-toggler:hover {\n    text-decoration: none; }\n\n@media (min-width: 544px) {\n  .navbar-toggleable-xs {\n    display: block !important; } }\n\n@media (min-width: 768px) {\n  .navbar-toggleable-sm {\n    display: block !important; } }\n\n@media (min-width: 992px) {\n  .navbar-toggleable-md {\n    display: block !important; } }\n\n.navbar-nav .nav-item {\n  float: left; }\n\n.navbar-nav .nav-link {\n  display: block;\n  padding-top: .425rem;\n  padding-bottom: .425rem; }\n  .navbar-nav .nav-link + .nav-link {\n    margin-left: 1rem; }\n\n.navbar-nav .nav-item + .nav-item {\n  margin-left: 1rem; }\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.8); }\n  .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {\n    color: rgba(0, 0, 0, 0.8); }\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.3); }\n  .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\n    color: rgba(0, 0, 0, 0.6); }\n\n.navbar-light .navbar-nav .open > .nav-link, .navbar-light .navbar-nav .open > .nav-link:focus, .navbar-light .navbar-nav .open > .nav-link:hover,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link:focus,\n.navbar-light .navbar-nav .active > .nav-link:hover,\n.navbar-light .navbar-nav .nav-link.open,\n.navbar-light .navbar-nav .nav-link.open:focus,\n.navbar-light .navbar-nav .nav-link.open:hover,\n.navbar-light .navbar-nav .nav-link.active,\n.navbar-light .navbar-nav .nav-link.active:focus,\n.navbar-light .navbar-nav .nav-link.active:hover {\n  color: rgba(0, 0, 0, 0.8); }\n\n.navbar-light .navbar-divider {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.navbar-dark .navbar-brand {\n  color: white; }\n  .navbar-dark .navbar-brand:focus, .navbar-dark .navbar-brand:hover {\n    color: white; }\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5); }\n  .navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {\n    color: rgba(255, 255, 255, 0.75); }\n\n.navbar-dark .navbar-nav .open > .nav-link, .navbar-dark .navbar-nav .open > .nav-link:focus, .navbar-dark .navbar-nav .open > .nav-link:hover,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link:focus,\n.navbar-dark .navbar-nav .active > .nav-link:hover,\n.navbar-dark .navbar-nav .nav-link.open,\n.navbar-dark .navbar-nav .nav-link.open:focus,\n.navbar-dark .navbar-nav .nav-link.open:hover,\n.navbar-dark .navbar-nav .nav-link.active,\n.navbar-dark .navbar-nav .nav-link.active:focus,\n.navbar-dark .navbar-nav .nav-link.active:hover {\n  color: white; }\n\n.navbar-dark .navbar-divider {\n  background-color: rgba(255, 255, 255, 0.075); }\n\n.card {\n  position: relative;\n  display: block;\n  margin-bottom: 0.625rem;\n  background-color: #fff;\n  border: 1px solid #e5e5e5;\n  border-radius: 0.25rem; }\n\n.card-block {\n  padding: 0.875rem; }\n\n.card-title {\n  margin-bottom: 0.625rem; }\n\n.card-subtitle {\n  margin-top: -0.3125rem;\n  margin-bottom: 0; }\n\n.card-text:last-child {\n  margin-bottom: 0; }\n\n.card-link:hover {\n  text-decoration: none; }\n\n.card-link + .card-link {\n  margin-left: 0.875rem; }\n\n.card > .list-group:first-child .list-group-item:first-child {\n  border-radius: 0.25rem 0.25rem 0 0; }\n\n.card > .list-group:last-child .list-group-item:last-child {\n  border-radius: 0 0 0.25rem 0.25rem; }\n\n.card-header {\n  padding: 0.625rem 0.875rem;\n  background-color: #f5f5f5;\n  border-bottom: 1px solid #e5e5e5; }\n  .card-header:first-child {\n    border-radius: 0.25rem 0.25rem 0 0; }\n\n.card-footer {\n  padding: 0.625rem 0.875rem;\n  background-color: #f5f5f5;\n  border-top: 1px solid #e5e5e5; }\n  .card-footer:last-child {\n    border-radius: 0 0 0.25rem 0.25rem; }\n\n.card-primary {\n  background-color: #0275d8;\n  border-color: #0275d8; }\n\n.card-success {\n  background-color: #5cb85c;\n  border-color: #5cb85c; }\n\n.card-info {\n  background-color: #5bc0de;\n  border-color: #5bc0de; }\n\n.card-warning {\n  background-color: #f0ad4e;\n  border-color: #f0ad4e; }\n\n.card-danger {\n  background-color: #d9534f;\n  border-color: #d9534f; }\n\n.card-primary-outline {\n  background-color: transparent;\n  border-color: #0275d8; }\n\n.card-secondary-outline {\n  background-color: transparent;\n  border-color: #ccc; }\n\n.card-info-outline {\n  background-color: transparent;\n  border-color: #5bc0de; }\n\n.card-success-outline {\n  background-color: transparent;\n  border-color: #5cb85c; }\n\n.card-warning-outline {\n  background-color: transparent;\n  border-color: #f0ad4e; }\n\n.card-danger-outline {\n  background-color: transparent;\n  border-color: #d9534f; }\n\n.card-inverse .card-header,\n.card-inverse .card-footer {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n\n.card-inverse .card-header,\n.card-inverse .card-footer,\n.card-inverse .card-title,\n.card-inverse .card-blockquote {\n  color: #fff; }\n\n.card-inverse .card-link,\n.card-inverse .card-text,\n.card-inverse .card-blockquote > footer {\n  color: rgba(255, 255, 255, 0.65); }\n\n.card-inverse .card-link:focus, .card-inverse .card-link:hover {\n  color: #fff; }\n\n.card-blockquote {\n  padding: 0;\n  margin-bottom: 0;\n  border-left: 0; }\n\n.card-img {\n  border-radius: 0.25rem; }\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem; }\n\n.card-img-top {\n  border-radius: 0.25rem 0.25rem 0 0; }\n\n.card-img-bottom {\n  border-radius: 0 0 0.25rem 0.25rem; }\n\n@media (min-width: 544px) {\n  .card-deck {\n    display: table;\n    table-layout: fixed;\n    border-spacing: 1.25rem 0; }\n    .card-deck .card {\n      display: table-cell;\n      width: 1%;\n      vertical-align: top; }\n  .card-deck-wrapper {\n    margin-right: -1.25rem;\n    margin-left: -1.25rem; } }\n\n@media (min-width: 544px) {\n  .card-group {\n    display: table;\n    width: 100%;\n    table-layout: fixed; }\n    .card-group .card {\n      display: table-cell;\n      vertical-align: top; }\n      .card-group .card + .card {\n        margin-left: 0;\n        border-left: 0; }\n      .card-group .card:first-child {\n        border-bottom-right-radius: 0;\n        border-top-right-radius: 0; }\n        .card-group .card:first-child .card-img-top {\n          border-top-right-radius: 0; }\n        .card-group .card:first-child .card-img-bottom {\n          border-bottom-right-radius: 0; }\n      .card-group .card:last-child {\n        border-bottom-left-radius: 0;\n        border-top-left-radius: 0; }\n        .card-group .card:last-child .card-img-top {\n          border-top-left-radius: 0; }\n        .card-group .card:last-child .card-img-bottom {\n          border-bottom-left-radius: 0; }\n      .card-group .card:not(:first-child):not(:last-child) {\n        border-radius: 0; }\n        .card-group .card:not(:first-child):not(:last-child) .card-img-top,\n        .card-group .card:not(:first-child):not(:last-child) .card-img-bottom {\n          border-radius: 0; } }\n\n@media (min-width: 544px) {\n  .card-columns {\n    -webkit-column-count: 3;\n       -moz-column-count: 3;\n            column-count: 3;\n    -webkit-column-gap: 1.25rem;\n       -moz-column-gap: 1.25rem;\n            column-gap: 1.25rem; }\n    .card-columns .card {\n      display: inline-block;\n      width: 100%; } }\n\n.breadcrumb {\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #eceeef;\n  border-radius: 0.25rem; }\n  .breadcrumb::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .breadcrumb > li {\n    float: left; }\n    .breadcrumb > li + li::before {\n      padding-right: .5rem;\n      padding-left: .5rem;\n      color: #818a91;\n      content: \"/\"; }\n  .breadcrumb > .active {\n    color: #818a91; }\n\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border-radius: 0.25rem; }\n\n.page-item {\n  display: inline; }\n  .page-item:first-child .page-link {\n    margin-left: 0;\n    border-bottom-left-radius: 0.25rem;\n    border-top-left-radius: 0.25rem; }\n  .page-item:last-child .page-link {\n    border-bottom-right-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n  .page-item.active .page-link, .page-item.active .page-link:focus, .page-item.active .page-link:hover {\n    z-index: 2;\n    color: #fff;\n    cursor: default;\n    background-color: #0275d8;\n    border-color: #0275d8; }\n  .page-item.disabled .page-link, .page-item.disabled .page-link:focus, .page-item.disabled .page-link:hover {\n    color: #818a91;\n    cursor: not-allowed;\n    background-color: #fff;\n    border-color: #ddd; }\n\n.page-link {\n  position: relative;\n  float: left;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.5;\n  color: #0275d8;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n  .page-link:focus, .page-link:hover {\n    color: #014c8c;\n    background-color: #eceeef;\n    border-color: #ddd; }\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.33333; }\n\n.pagination-lg .page-item:first-child .page-link {\n  border-bottom-left-radius: 0.3rem;\n  border-top-left-radius: 0.3rem; }\n\n.pagination-lg .page-item:last-child .page-link {\n  border-bottom-right-radius: 0.3rem;\n  border-top-right-radius: 0.3rem; }\n\n.pagination-sm .page-link {\n  padding: 0.275rem 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.5; }\n\n.pagination-sm .page-item:first-child .page-link {\n  border-bottom-left-radius: 0.2rem;\n  border-top-left-radius: 0.2rem; }\n\n.pagination-sm .page-item:last-child .page-link {\n  border-bottom-right-radius: 0.2rem;\n  border-top-right-radius: 0.2rem; }\n\n.pager {\n  padding-left: 0;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  text-align: center;\n  list-style: none; }\n  .pager::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .pager li {\n    display: inline; }\n    .pager li > a,\n    .pager li > span {\n      display: inline-block;\n      padding: 5px 14px;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-radius: 15px; }\n    .pager li > a:focus, .pager li > a:hover {\n      text-decoration: none;\n      background-color: #eceeef; }\n  .pager .disabled > a, .pager .disabled > a:focus, .pager .disabled > a:hover {\n    color: #818a91;\n    cursor: not-allowed;\n    background-color: #fff; }\n  .pager .disabled > span {\n    color: #818a91;\n    cursor: not-allowed;\n    background-color: #fff; }\n\n.pager-next > a,\n.pager-next > span {\n  float: right; }\n\n.pager-prev > a,\n.pager-prev > span {\n  float: left; }\n\n.label {\n  display: inline-block;\n  padding: .25em .4em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem; }\n  .label:empty {\n    display: none; }\n\n.btn .label {\n  position: relative;\n  top: -1px; }\n\na.label:focus, a.label:hover {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.label-pill {\n  padding-right: .6em;\n  padding-left: .6em;\n  border-radius: 10rem; }\n\n.label-default {\n  background-color: #818a91; }\n  .label-default[href]:focus, .label-default[href]:hover {\n    background-color: #687077; }\n\n.label-primary {\n  background-color: #0275d8; }\n  .label-primary[href]:focus, .label-primary[href]:hover {\n    background-color: #025aa5; }\n\n.label-success {\n  background-color: #5cb85c; }\n  .label-success[href]:focus, .label-success[href]:hover {\n    background-color: #449d44; }\n\n.label-info {\n  background-color: #5bc0de; }\n  .label-info[href]:focus, .label-info[href]:hover {\n    background-color: #31b0d5; }\n\n.label-warning {\n  background-color: #f0ad4e; }\n  .label-warning[href]:focus, .label-warning[href]:hover {\n    background-color: #ec971f; }\n\n.label-danger {\n  background-color: #d9534f; }\n  .label-danger[href]:focus, .label-danger[href]:hover {\n    background-color: #c9302c; }\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #eceeef;\n  border-radius: 0.3rem; }\n  @media (min-width: 544px) {\n    .jumbotron {\n      padding: 4rem 2rem; } }\n\n.jumbotron-hr {\n  border-top-color: #d0d5d8; }\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0; }\n\n.alert {\n  padding: 15px;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n  .alert > p,\n  .alert > ul {\n    margin-bottom: 0; }\n  .alert > p + p {\n    margin-top: 5px; }\n\n.alert-heading {\n  color: inherit; }\n\n.alert-link {\n  font-weight: bold; }\n\n.alert-dismissible {\n  padding-right: 35px; }\n  .alert-dismissible .close {\n    position: relative;\n    top: -2px;\n    right: -21px;\n    color: inherit; }\n\n.alert-success {\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n  color: #FFF; }\n  .alert-success hr {\n    border-top-color: #449d44; }\n  .alert-success .alert-link {\n    color: #e6e6e6; }\n\n.alert-info {\n  background-color: #5bc0de;\n  border-color: #3db5d8;\n  color: #FFF; }\n  .alert-info hr {\n    border-top-color: #2aabd2; }\n  .alert-info .alert-link {\n    color: #e6e6e6; }\n\n.alert-warning {\n  background-color: #f0ad4e;\n  border-color: #eea236;\n  color: #FFF; }\n  .alert-warning hr {\n    border-top-color: #ec971f; }\n  .alert-warning .alert-link {\n    color: #e6e6e6; }\n\n.alert-danger {\n  background-color: #d9534f;\n  border-color: #d43f3a;\n  color: #FFF; }\n  .alert-danger hr {\n    border-top-color: #c9302c; }\n  .alert-danger .alert-link {\n    color: #e6e6e6; }\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n\n.progress {\n  display: block;\n  width: 100%;\n  height: 1rem;\n  margin-bottom: 1rem; }\n\n.progress[value] {\n  color: #0074d9;\n  border: 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n\n.progress[value]::-webkit-progress-bar {\n  background-color: #eee;\n  border-radius: 0.25rem; }\n\n.progress[value]::-webkit-progress-value::before {\n  content: attr(value); }\n\n.progress[value]::-webkit-progress-value {\n  background-color: #0074d9;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n\n.progress[value=\"100\"]::-webkit-progress-value {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem; }\n\n@media screen and (min-width: 0\\0) {\n  .progress {\n    background-color: #eee;\n    border-radius: 0.25rem; }\n  .progress-bar {\n    display: inline-block;\n    height: 1rem;\n    text-indent: -999rem;\n    background-color: #0074d9;\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n  .progress[width^=\"0\"] {\n    min-width: 2rem;\n    color: #818a91;\n    background-color: transparent;\n    background-image: none; }\n  .progress[width=\"100%\"] {\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem; } }\n\n.progress-striped[value]::-webkit-progress-value {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem; }\n\n.progress-striped[value]::-moz-progress-bar {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem; }\n\n@media screen and (min-width: 0\\0) {\n  .progress-bar-striped {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-size: 1rem 1rem; } }\n\n.progress-animated[value]::-webkit-progress-value {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n          animation: progress-bar-stripes 2s linear infinite; }\n\n.progress-animated[value]::-moz-progress-bar {\n  animation: progress-bar-stripes 2s linear infinite; }\n\n@media screen and (min-width: 0\\0) {\n  .progress-animated .progress-bar-striped {\n    -webkit-animation: progress-bar-stripes 2s linear infinite;\n            animation: progress-bar-stripes 2s linear infinite; } }\n\n.progress-success[value]::-webkit-progress-value {\n  background-color: #5cb85c; }\n\n.progress-success[value]::-moz-progress-bar {\n  background-color: #5cb85c; }\n\n@media screen and (min-width: 0\\0) {\n  .progress-success .progress-bar {\n    background-color: #5cb85c; } }\n\n.progress-info[value]::-webkit-progress-value {\n  background-color: #5bc0de; }\n\n.progress-info[value]::-moz-progress-bar {\n  background-color: #5bc0de; }\n\n@media screen and (min-width: 0\\0) {\n  .progress-info .progress-bar {\n    background-color: #5bc0de; } }\n\n.progress-warning[value]::-webkit-progress-value {\n  background-color: #f0ad4e; }\n\n.progress-warning[value]::-moz-progress-bar {\n  background-color: #f0ad4e; }\n\n@media screen and (min-width: 0\\0) {\n  .progress-warning .progress-bar {\n    background-color: #f0ad4e; } }\n\n.progress-danger[value]::-webkit-progress-value {\n  background-color: #d9534f; }\n\n.progress-danger[value]::-moz-progress-bar {\n  background-color: #d9534f; }\n\n@media screen and (min-width: 0\\0) {\n  .progress-danger .progress-bar {\n    background-color: #d9534f; } }\n\n.media {\n  margin-top: 15px; }\n  .media:first-child {\n    margin-top: 0; }\n\n.media,\n.media-body {\n  overflow: hidden;\n  zoom: 1; }\n\n.media-body {\n  width: 10000px; }\n\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top; }\n\n.media-middle {\n  vertical-align: middle; }\n\n.media-bottom {\n  vertical-align: bottom; }\n\n.media-object {\n  display: block; }\n  .media-object.img-thumbnail {\n    max-width: none; }\n\n.media-right {\n  padding-left: 10px; }\n\n.media-left {\n  padding-right: 10px; }\n\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.media-list {\n  padding-left: 0;\n  list-style: none; }\n\n.list-group {\n  padding-left: 0;\n  margin-bottom: 0; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: .75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n  .list-group-item:first-child {\n    border-top-right-radius: 0.25rem;\n    border-top-left-radius: 0.25rem; }\n  .list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n\n.list-group-flush .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0; }\n\n.list-group-flush:first-child .list-group-item:first-child {\n  border-top: 0; }\n\n.list-group-flush:last-child .list-group-item:last-child {\n  border-bottom: 0; }\n\na.list-group-item,\nbutton.list-group-item {\n  width: 100%;\n  color: #555;\n  text-align: inherit; }\n  a.list-group-item .list-group-item-heading,\n  button.list-group-item .list-group-item-heading {\n    color: #333; }\n  a.list-group-item:focus, a.list-group-item:hover,\n  button.list-group-item:focus,\n  button.list-group-item:hover {\n    color: #555;\n    text-decoration: none;\n    background-color: #f5f5f5; }\n\n.list-group-item.disabled, .list-group-item.disabled:focus, .list-group-item.disabled:hover {\n  color: #818a91;\n  cursor: not-allowed;\n  background-color: #eceeef; }\n  .list-group-item.disabled .list-group-item-heading, .list-group-item.disabled:focus .list-group-item-heading, .list-group-item.disabled:hover .list-group-item-heading {\n    color: inherit; }\n  .list-group-item.disabled .list-group-item-text, .list-group-item.disabled:focus .list-group-item-text, .list-group-item.disabled:hover .list-group-item-text {\n    color: #818a91; }\n\n.list-group-item.active, .list-group-item.active:focus, .list-group-item.active:hover {\n  z-index: 2;\n  color: #fff;\n  background-color: #0275d8;\n  border-color: #0275d8; }\n  .list-group-item.active .list-group-item-heading,\n  .list-group-item.active .list-group-item-heading > small,\n  .list-group-item.active .list-group-item-heading > .small, .list-group-item.active:focus .list-group-item-heading,\n  .list-group-item.active:focus .list-group-item-heading > small,\n  .list-group-item.active:focus .list-group-item-heading > .small, .list-group-item.active:hover .list-group-item-heading,\n  .list-group-item.active:hover .list-group-item-heading > small,\n  .list-group-item.active:hover .list-group-item-heading > .small {\n    color: inherit; }\n  .list-group-item.active .list-group-item-text, .list-group-item.active:focus .list-group-item-text, .list-group-item.active:hover .list-group-item-text {\n    color: #a8d6fe; }\n\n.list-group-item-success {\n  color: #FFF;\n  background-color: #5cb85c; }\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #FFF; }\n  a.list-group-item-success .list-group-item-heading,\n  button.list-group-item-success .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-success:focus, a.list-group-item-success:hover,\n  button.list-group-item-success:focus,\n  button.list-group-item-success:hover {\n    color: #FFF;\n    background-color: #4cae4c; }\n  a.list-group-item-success.active, a.list-group-item-success.active:focus, a.list-group-item-success.active:hover,\n  button.list-group-item-success.active,\n  button.list-group-item-success.active:focus,\n  button.list-group-item-success.active:hover {\n    color: #fff;\n    background-color: #FFF;\n    border-color: #FFF; }\n\n.list-group-item-info {\n  color: #FFF;\n  background-color: #5bc0de; }\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #FFF; }\n  a.list-group-item-info .list-group-item-heading,\n  button.list-group-item-info .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-info:focus, a.list-group-item-info:hover,\n  button.list-group-item-info:focus,\n  button.list-group-item-info:hover {\n    color: #FFF;\n    background-color: #46b8da; }\n  a.list-group-item-info.active, a.list-group-item-info.active:focus, a.list-group-item-info.active:hover,\n  button.list-group-item-info.active,\n  button.list-group-item-info.active:focus,\n  button.list-group-item-info.active:hover {\n    color: #fff;\n    background-color: #FFF;\n    border-color: #FFF; }\n\n.list-group-item-warning {\n  color: #FFF;\n  background-color: #f0ad4e; }\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #FFF; }\n  a.list-group-item-warning .list-group-item-heading,\n  button.list-group-item-warning .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-warning:focus, a.list-group-item-warning:hover,\n  button.list-group-item-warning:focus,\n  button.list-group-item-warning:hover {\n    color: #FFF;\n    background-color: #eea236; }\n  a.list-group-item-warning.active, a.list-group-item-warning.active:focus, a.list-group-item-warning.active:hover,\n  button.list-group-item-warning.active,\n  button.list-group-item-warning.active:focus,\n  button.list-group-item-warning.active:hover {\n    color: #fff;\n    background-color: #FFF;\n    border-color: #FFF; }\n\n.list-group-item-danger {\n  color: #FFF;\n  background-color: #d9534f; }\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #FFF; }\n  a.list-group-item-danger .list-group-item-heading,\n  button.list-group-item-danger .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-danger:focus, a.list-group-item-danger:hover,\n  button.list-group-item-danger:focus,\n  button.list-group-item-danger:hover {\n    color: #FFF;\n    background-color: #d43f3a; }\n  a.list-group-item-danger.active, a.list-group-item-danger.active:focus, a.list-group-item-danger.active:hover,\n  button.list-group-item-danger.active,\n  button.list-group-item-danger.active:focus,\n  button.list-group-item-danger.active:hover {\n    color: #fff;\n    background-color: #FFF;\n    border-color: #FFF; }\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3; }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden; }\n  .embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0; }\n\n.embed-responsive-21by9 {\n  padding-bottom: 42.85714%; }\n\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%; }\n\n.embed-responsive-4by3 {\n  padding-bottom: 75%; }\n\n.embed-responsive-1by1 {\n  padding-bottom: 100%; }\n\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .2; }\n  .close:focus, .close:hover {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n    opacity: .5; }\n\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n\n.modal-open {\n  overflow: hidden; }\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  outline: 0;\n  -webkit-overflow-scrolling: touch; }\n  .modal.fade .modal-dialog {\n    -webkit-transition: -webkit-transform .3s ease-out;\n    transition: -webkit-transform .3s ease-out;\n    transition: transform .3s ease-out;\n    transition: transform .3s ease-out, -webkit-transform .3s ease-out;\n    -webkit-transform: translate(0, -25%);\n            transform: translate(0, -25%); }\n  .modal.in .modal-dialog {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px; }\n\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000; }\n  .modal-backdrop.fade {\n    opacity: 0; }\n  .modal-backdrop.in {\n    opacity: 0.5; }\n\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5; }\n  .modal-header::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n\n.modal-header .close {\n  margin-top: -2px; }\n\n.modal-title {\n  margin: 0;\n  line-height: 1.5; }\n\n.modal-body {\n  position: relative;\n  padding: 15px; }\n\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5; }\n  .modal-footer::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .modal-footer .btn + .btn {\n    margin-bottom: 0;\n    margin-left: 5px; }\n  .modal-footer .btn-group .btn + .btn {\n    margin-left: -1px; }\n  .modal-footer .btn-block + .btn-block {\n    margin-left: 0; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 544px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto; }\n  .modal-sm {\n    width: 300px; } }\n\n@media (min-width: 768px) {\n  .modal-lg {\n    width: 900px; } }\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 0.875rem;\n  opacity: 0; }\n  .tooltip.in {\n    opacity: 0.9; }\n  .tooltip.tooltip-top, .tooltip.bs-tether-element-attached-bottom {\n    padding: 5px 0;\n    margin-top: -3px; }\n    .tooltip.tooltip-top .tooltip-arrow, .tooltip.bs-tether-element-attached-bottom .tooltip-arrow {\n      bottom: 0;\n      left: 50%;\n      margin-left: -5px;\n      border-width: 5px 5px 0;\n      border-top-color: #000; }\n  .tooltip.tooltip-right, .tooltip.bs-tether-element-attached-left {\n    padding: 0 5px;\n    margin-left: 3px; }\n    .tooltip.tooltip-right .tooltip-arrow, .tooltip.bs-tether-element-attached-left .tooltip-arrow {\n      top: 50%;\n      left: 0;\n      margin-top: -5px;\n      border-width: 5px 5px 5px 0;\n      border-right-color: #000; }\n  .tooltip.tooltip-bottom, .tooltip.bs-tether-element-attached-top {\n    padding: 5px 0;\n    margin-top: 3px; }\n    .tooltip.tooltip-bottom .tooltip-arrow, .tooltip.bs-tether-element-attached-top .tooltip-arrow {\n      top: 0;\n      left: 50%;\n      margin-left: -5px;\n      border-width: 0 5px 5px;\n      border-bottom-color: #000; }\n  .tooltip.tooltip-left, .tooltip.bs-tether-element-attached-right {\n    padding: 0 5px;\n    margin-left: -3px; }\n    .tooltip.tooltip-left .tooltip-arrow, .tooltip.bs-tether-element-attached-right .tooltip-arrow {\n      top: 50%;\n      right: 0;\n      margin-top: -5px;\n      border-width: 5px 0 5px 5px;\n      border-left-color: #000; }\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 0.875rem;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem; }\n  .popover.popover-top, .popover.bs-tether-element-attached-bottom {\n    margin-top: -10px; }\n    .popover.popover-top .popover-arrow, .popover.bs-tether-element-attached-bottom .popover-arrow {\n      bottom: -11px;\n      left: 50%;\n      margin-left: -11px;\n      border-top-color: rgba(0, 0, 0, 0.25);\n      border-bottom-width: 0; }\n      .popover.popover-top .popover-arrow::after, .popover.bs-tether-element-attached-bottom .popover-arrow::after {\n        bottom: 1px;\n        margin-left: -10px;\n        content: \"\";\n        border-top-color: #fff;\n        border-bottom-width: 0; }\n  .popover.popover-right, .popover.bs-tether-element-attached-left {\n    margin-left: 10px; }\n    .popover.popover-right .popover-arrow, .popover.bs-tether-element-attached-left .popover-arrow {\n      top: 50%;\n      left: -11px;\n      margin-top: -11px;\n      border-right-color: rgba(0, 0, 0, 0.25);\n      border-left-width: 0; }\n      .popover.popover-right .popover-arrow::after, .popover.bs-tether-element-attached-left .popover-arrow::after {\n        bottom: -10px;\n        left: 1px;\n        content: \"\";\n        border-right-color: #fff;\n        border-left-width: 0; }\n  .popover.popover-bottom, .popover.bs-tether-element-attached-top {\n    margin-top: 10px; }\n    .popover.popover-bottom .popover-arrow, .popover.bs-tether-element-attached-top .popover-arrow {\n      top: -11px;\n      left: 50%;\n      margin-left: -11px;\n      border-top-width: 0;\n      border-bottom-color: rgba(0, 0, 0, 0.25); }\n      .popover.popover-bottom .popover-arrow::after, .popover.bs-tether-element-attached-top .popover-arrow::after {\n        top: 1px;\n        margin-left: -10px;\n        content: \"\";\n        border-top-width: 0;\n        border-bottom-color: #fff; }\n  .popover.popover-left, .popover.bs-tether-element-attached-right {\n    margin-left: -10px; }\n    .popover.popover-left .popover-arrow, .popover.bs-tether-element-attached-right .popover-arrow {\n      top: 50%;\n      right: -11px;\n      margin-top: -11px;\n      border-right-width: 0;\n      border-left-color: rgba(0, 0, 0, 0.25); }\n      .popover.popover-left .popover-arrow::after, .popover.bs-tether-element-attached-right .popover-arrow::after {\n        right: 1px;\n        bottom: -10px;\n        content: \"\";\n        border-right-width: 0;\n        border-left-color: #fff; }\n\n.popover-title {\n  padding: 8px 14px;\n  margin: 0;\n  font-size: 1rem;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: -0.7rem -0.7rem 0 0; }\n\n.popover-content {\n  padding: 9px 14px; }\n\n.popover-arrow, .popover-arrow::after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.popover-arrow {\n  border-width: 11px; }\n\n.popover-arrow::after {\n  content: \"\";\n  border-width: 10px; }\n\n.carousel {\n  position: relative; }\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n  .carousel-inner > .carousel-item {\n    position: relative;\n    display: none;\n    -webkit-transition: .6s ease-in-out left;\n    transition: .6s ease-in-out left; }\n    .carousel-inner > .carousel-item > img,\n    .carousel-inner > .carousel-item > a > img {\n      line-height: 1; }\n    @media all and (transform-3d), (-webkit-transform-3d) {\n      .carousel-inner > .carousel-item {\n        -webkit-transition: -webkit-transform .6s ease-in-out;\n        transition: -webkit-transform .6s ease-in-out;\n        transition: transform .6s ease-in-out;\n        transition: transform .6s ease-in-out, -webkit-transform .6s ease-in-out;\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden;\n        -webkit-perspective: 1000px;\n                perspective: 1000px; }\n        .carousel-inner > .carousel-item.next, .carousel-inner > .carousel-item.active.right {\n          left: 0;\n          -webkit-transform: translate3d(100%, 0, 0);\n                  transform: translate3d(100%, 0, 0); }\n        .carousel-inner > .carousel-item.prev, .carousel-inner > .carousel-item.active.left {\n          left: 0;\n          -webkit-transform: translate3d(-100%, 0, 0);\n                  transform: translate3d(-100%, 0, 0); }\n        .carousel-inner > .carousel-item.next.left, .carousel-inner > .carousel-item.prev.right, .carousel-inner > .carousel-item.active {\n          left: 0;\n          -webkit-transform: translate3d(0, 0, 0);\n                  transform: translate3d(0, 0, 0); } }\n  .carousel-inner > .active,\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    display: block; }\n  .carousel-inner > .active {\n    left: 0; }\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    position: absolute;\n    top: 0;\n    width: 100%; }\n  .carousel-inner > .next {\n    left: 100%; }\n  .carousel-inner > .prev {\n    left: -100%; }\n  .carousel-inner > .next.left,\n  .carousel-inner > .prev.right {\n    left: 0; }\n  .carousel-inner > .active.left {\n    left: -100%; }\n  .carousel-inner > .active.right {\n    left: 100%; }\n\n.carousel-control {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 15%;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  opacity: 0.5; }\n  .carousel-control.left {\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1); }\n  .carousel-control.right {\n    right: 0;\n    left: auto;\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1); }\n  .carousel-control:focus, .carousel-control:hover {\n    color: #fff;\n    text-decoration: none;\n    outline: 0;\n    opacity: .9; }\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    position: absolute;\n    top: 50%;\n    z-index: 5;\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    margin-top: -10px;\n    font-family: serif;\n    line-height: 1; }\n  .carousel-control .icon-prev {\n    left: 50%;\n    margin-left: -10px; }\n  .carousel-control .icon-next {\n    right: 50%;\n    margin-right: -10px; }\n  .carousel-control .icon-prev::before {\n    content: \"\\2039\"; }\n  .carousel-control .icon-next::before {\n    content: \"\\203a\"; }\n\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  padding-left: 0;\n  margin-left: -30%;\n  text-align: center;\n  list-style: none; }\n  .carousel-indicators li {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    margin: 1px;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: transparent;\n    border: 1px solid #fff;\n    border-radius: 10px; }\n  .carousel-indicators .active {\n    width: 12px;\n    height: 12px;\n    margin: 0;\n    background-color: #fff; }\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6); }\n  .carousel-caption .btn {\n    text-shadow: none; }\n\n@media (min-width: 544px) {\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -15px;\n    font-size: 30px; }\n  .carousel-control .icon-prev {\n    margin-left: -15px; }\n  .carousel-control .icon-next {\n    margin-right: -15px; }\n  .carousel-caption {\n    right: 20%;\n    left: 20%;\n    padding-bottom: 30px; }\n  .carousel-indicators {\n    bottom: 20px; } }\n\n.clearfix::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.pull-xs-left {\n  float: left !important; }\n\n.pull-xs-right {\n  float: right !important; }\n\n.pull-xs-none {\n  float: none !important; }\n\n@media (min-width: 544px) {\n  .pull-sm-left {\n    float: left !important; }\n  .pull-sm-right {\n    float: right !important; }\n  .pull-sm-none {\n    float: none !important; } }\n\n@media (min-width: 768px) {\n  .pull-md-left {\n    float: left !important; }\n  .pull-md-right {\n    float: right !important; }\n  .pull-md-none {\n    float: none !important; } }\n\n@media (min-width: 992px) {\n  .pull-lg-left {\n    float: left !important; }\n  .pull-lg-right {\n    float: right !important; }\n  .pull-lg-none {\n    float: none !important; } }\n\n@media (min-width: 1200px) {\n  .pull-xl-left {\n    float: left !important; }\n  .pull-xl-right {\n    float: right !important; }\n  .pull-xl-none {\n    float: none !important; } }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto; }\n\n.invisible {\n  visibility: hidden !important; }\n\n.text-hide {\n  font: \"0/0\" a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.text-justify {\n  text-align: justify !important; }\n\n.text-nowrap {\n  white-space: nowrap !important; }\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.text-xs-left {\n  text-align: left !important; }\n\n.text-xs-right {\n  text-align: right !important; }\n\n.text-xs-center {\n  text-align: center !important; }\n\n@media (min-width: 544px) {\n  .text-sm-left {\n    text-align: left !important; }\n  .text-sm-right {\n    text-align: right !important; }\n  .text-sm-center {\n    text-align: center !important; } }\n\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important; }\n  .text-md-right {\n    text-align: right !important; }\n  .text-md-center {\n    text-align: center !important; } }\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important; }\n  .text-lg-right {\n    text-align: right !important; }\n  .text-lg-center {\n    text-align: center !important; } }\n\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important; }\n  .text-xl-right {\n    text-align: right !important; }\n  .text-xl-center {\n    text-align: center !important; } }\n\n.text-lowercase {\n  text-transform: lowercase !important; }\n\n.text-uppercase {\n  text-transform: uppercase !important; }\n\n.text-capitalize {\n  text-transform: capitalize !important; }\n\n.font-weight-normal {\n  font-weight: normal; }\n\n.font-weight-bold {\n  font-weight: bold; }\n\n.font-italic {\n  font-style: italic; }\n\n.text-muted {\n  color: #818a91; }\n\n.text-primary {\n  color: #0275d8 !important; }\n\na.text-primary:focus, a.text-primary:hover {\n  color: #025aa5; }\n\n.text-success {\n  color: #5cb85c !important; }\n\na.text-success:focus, a.text-success:hover {\n  color: #449d44; }\n\n.text-info {\n  color: #5bc0de !important; }\n\na.text-info:focus, a.text-info:hover {\n  color: #31b0d5; }\n\n.text-warning {\n  color: #f0ad4e !important; }\n\na.text-warning:focus, a.text-warning:hover {\n  color: #ec971f; }\n\n.text-danger {\n  color: #d9534f !important; }\n\na.text-danger:focus, a.text-danger:hover {\n  color: #c9302c; }\n\n.bg-inverse {\n  color: #eceeef;\n  background-color: #373a3c; }\n\n.bg-faded {\n  background-color: #f7f7f9; }\n\n.bg-primary {\n  color: #fff !important;\n  background-color: #0275d8 !important; }\n\na.bg-primary:focus, a.bg-primary:hover {\n  background-color: #025aa5; }\n\n.bg-success {\n  color: #fff !important;\n  background-color: #5cb85c !important; }\n\na.bg-success:focus, a.bg-success:hover {\n  background-color: #449d44; }\n\n.bg-info {\n  color: #fff !important;\n  background-color: #5bc0de !important; }\n\na.bg-info:focus, a.bg-info:hover {\n  background-color: #31b0d5; }\n\n.bg-warning {\n  color: #fff !important;\n  background-color: #f0ad4e !important; }\n\na.bg-warning:focus, a.bg-warning:hover {\n  background-color: #ec971f; }\n\n.bg-danger {\n  color: #fff !important;\n  background-color: #d9534f !important; }\n\na.bg-danger:focus, a.bg-danger:hover {\n  background-color: #c9302c; }\n\n.m-x-auto {\n  margin-right: auto !important;\n  margin-left: auto !important; }\n\n.m-a-0 {\n  margin: 0 0 !important; }\n\n.m-t-0 {\n  margin-top: 0 !important; }\n\n.m-r-0 {\n  margin-right: 0 !important; }\n\n.m-b-0 {\n  margin-bottom: 0 !important; }\n\n.m-l-0 {\n  margin-left: 0 !important; }\n\n.m-x-0 {\n  margin-right: 0 !important;\n  margin-left: 0 !important; }\n\n.m-y-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important; }\n\n.m-a-1 {\n  margin: 1rem 1rem !important; }\n\n.m-t-1 {\n  margin-top: 1rem !important; }\n\n.m-r-1 {\n  margin-right: 1rem !important; }\n\n.m-b-1 {\n  margin-bottom: 1rem !important; }\n\n.m-l-1 {\n  margin-left: 1rem !important; }\n\n.m-x-1 {\n  margin-right: 1rem !important;\n  margin-left: 1rem !important; }\n\n.m-y-1 {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important; }\n\n.m-a-2 {\n  margin: 1.5rem 1.5rem !important; }\n\n.m-t-2 {\n  margin-top: 1.5rem !important; }\n\n.m-r-2 {\n  margin-right: 1.5rem !important; }\n\n.m-b-2 {\n  margin-bottom: 1.5rem !important; }\n\n.m-l-2 {\n  margin-left: 1.5rem !important; }\n\n.m-x-2 {\n  margin-right: 1.5rem !important;\n  margin-left: 1.5rem !important; }\n\n.m-y-2 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important; }\n\n.m-a-3 {\n  margin: 3rem 3rem !important; }\n\n.m-t-3 {\n  margin-top: 3rem !important; }\n\n.m-r-3 {\n  margin-right: 3rem !important; }\n\n.m-b-3 {\n  margin-bottom: 3rem !important; }\n\n.m-l-3 {\n  margin-left: 3rem !important; }\n\n.m-x-3 {\n  margin-right: 3rem !important;\n  margin-left: 3rem !important; }\n\n.m-y-3 {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important; }\n\n.p-a-0 {\n  padding: 0 0 !important; }\n\n.p-t-0 {\n  padding-top: 0 !important; }\n\n.p-r-0 {\n  padding-right: 0 !important; }\n\n.p-b-0 {\n  padding-bottom: 0 !important; }\n\n.p-l-0 {\n  padding-left: 0 !important; }\n\n.p-x-0 {\n  padding-right: 0 !important;\n  padding-left: 0 !important; }\n\n.p-y-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important; }\n\n.p-a-1 {\n  padding: 1rem 1rem !important; }\n\n.p-t-1 {\n  padding-top: 1rem !important; }\n\n.p-r-1 {\n  padding-right: 1rem !important; }\n\n.p-b-1 {\n  padding-bottom: 1rem !important; }\n\n.p-l-1 {\n  padding-left: 1rem !important; }\n\n.p-x-1 {\n  padding-right: 1rem !important;\n  padding-left: 1rem !important; }\n\n.p-y-1 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important; }\n\n.p-a-2 {\n  padding: 1.5rem 1.5rem !important; }\n\n.p-t-2 {\n  padding-top: 1.5rem !important; }\n\n.p-r-2 {\n  padding-right: 1.5rem !important; }\n\n.p-b-2 {\n  padding-bottom: 1.5rem !important; }\n\n.p-l-2 {\n  padding-left: 1.5rem !important; }\n\n.p-x-2 {\n  padding-right: 1.5rem !important;\n  padding-left: 1.5rem !important; }\n\n.p-y-2 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important; }\n\n.p-a-3 {\n  padding: 3rem 3rem !important; }\n\n.p-t-3 {\n  padding-top: 3rem !important; }\n\n.p-r-3 {\n  padding-right: 3rem !important; }\n\n.p-b-3 {\n  padding-bottom: 3rem !important; }\n\n.p-l-3 {\n  padding-left: 3rem !important; }\n\n.p-x-3 {\n  padding-right: 3rem !important;\n  padding-left: 3rem !important; }\n\n.p-y-3 {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important; }\n\n.pos-f-t {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.hidden-xs-up {\n  display: none !important; }\n\n@media (max-width: 543px) {\n  .hidden-xs-down {\n    display: none !important; } }\n\n@media (min-width: 544px) {\n  .hidden-sm-up {\n    display: none !important; } }\n\n@media (max-width: 767px) {\n  .hidden-sm-down {\n    display: none !important; } }\n\n@media (min-width: 768px) {\n  .hidden-md-up {\n    display: none !important; } }\n\n@media (max-width: 991px) {\n  .hidden-md-down {\n    display: none !important; } }\n\n@media (min-width: 992px) {\n  .hidden-lg-up {\n    display: none !important; } }\n\n@media (max-width: 1199px) {\n  .hidden-lg-down {\n    display: none !important; } }\n\n@media (min-width: 1200px) {\n  .hidden-xl-up {\n    display: none !important; } }\n\n.hidden-xl-down {\n  display: none !important; }\n\n.visible-print-block {\n  display: none !important; }\n  @media print {\n    .visible-print-block {\n      display: block !important; } }\n\n.visible-print-inline {\n  display: none !important; }\n  @media print {\n    .visible-print-inline {\n      display: inline !important; } }\n\n.visible-print-inline-block {\n  display: none !important; }\n  @media print {\n    .visible-print-inline-block {\n      display: inline-block !important; } }\n\n@media print {\n  .hidden-print {\n    display: none !important; } }\n\n.user-avatar {\n  border: 3px solid #FFF;\n  border-radius: 50%; }\n\n#toggle-sidebar {\n  position: fixed;\n  top: 0px;\n  left: 5px;\n  color: #FFF;\n  background: #222;\n  font-size: 23px;\n  z-index: 3;\n  display: none; }\n\n.btn:focus {\n  outline: 3px auto #FFF; }\n\n.topnav {\n  border-radius: 0;\n  background-color: #222;\n  padding: 6px;\n  z-index: 100; }\n  .topnav .text-center {\n    text-align: center;\n    padding-left: 0;\n    cursor: pointer; }\n  .topnav .top-right-nav .buy-now a {\n    color: #999; }\n  .topnav .top-right-nav .dropdown-menu {\n    top: 40px;\n    right: -5px;\n    left: auto; }\n    .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body .media-heading {\n      font-size: 14px;\n      font-weight: bold;\n      margin-bottom: 0; }\n    .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body p {\n      margin: 0; }\n    .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body p.last {\n      font-size: 13px;\n      margin-bottom: 0; }\n    .topnav .top-right-nav .dropdown-menu hr {\n      margin-top: 1px;\n      margin-bottom: 4px; }\n\na:hover {\n  text-decoration: none; }\n\n.sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 3;\n  top: 50px;\n  left: 225px;\n  width: 225px;\n  margin-left: -225px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #222;\n    border: 0;\n    border-radius: 0;\n    color: #999;\n    text-decoration: none; }\n  .sidebar .list-group a:hover {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group a.router-link-active {\n    background: #151515;\n    color: #fff; }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n    .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #222; }\n      .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: .75rem 1.5rem;\n        padding-top: 1rem; }\n    .sidebar .sidebar-dropdown .panel-title a:hover, .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #151515; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radious: 0;\n    border: none; }\n    .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #222;\n      border: 0 solid transparent; }\n      .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n      .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #FFF; }\n    .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #151515; }\n\n.bg-white {\n  background: #fff; }\n\n.main-container {\n  margin: 50px 0 0 225px;\n  padding: 10px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  position: relative; }\n\n.chat-panel .chat-dropdown {\n  margin-top: -3px; }\n\n.chat-panel .chat {\n  height: 350px;\n  overflow-y: scroll;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n  .chat-panel .chat .left img {\n    margin-right: 15px; }\n  .chat-panel .chat .right img {\n    margin-left: 15px; }\n  .chat-panel .chat li {\n    margin-bottom: 10px;\n    margin-right: 15px;\n    padding-bottom: 5px;\n    border-bottom: 1px dotted #999; }\n\n.chat-panel .card-footer input {\n  padding: 3px; }\n\n/* RTL ashboard */\n.sidebarPushRight {\n  left: 225px !important;\n  z-index: 10; }\n\n.mainContainerPushLeft {\n  margin: 55px 255px 0 0; }\n\n/* End */\n.display-sm {\n  display: none; }\n\n.hide-sm {\n  display: block; }\n\n@media (min-width: 0) {\n  .navbar-toggleable-xs {\n    display: block !important; } }\n\n@media screen and (max-width: 600px) {\n  .topnav .text-center a {\n    font-size: 20px; } }\n\n@media screen and (max-width: 768px) {\n  #toggle-sidebar {\n    display: block; }\n  .topnav .text-center {\n    padding-left: 55px; }\n  .top-right-nav {\n    display: none; }\n  .navbar-brand {\n    float: none;\n    display: inline-block;\n    cursor: pointer; }\n  .show-name {\n    display: block !important;\n    z-index: 1; }\n  .display-sm {\n    display: block; }\n  .hide-sm {\n    display: none; }\n  .sidebar {\n    left: 0; }\n  .main-container {\n    margin-left: 0; }\n  .loading {\n    left: 39% !important; } }\n\n.carousel .carousel-control {\n  cursor: pointer; }\n\n.carousel .carousel-inner .carousel-item img {\n  width: 100%;\n  max-height: 373px; }\n\n.carousel .carousel-inner .fa-chevron-left:before {\n  position: absolute;\n  top: 46%;\n  left: 50px; }\n\n.carousel .carousel-inner .fa-chevron-right:before {\n  position: absolute;\n  top: 46%;\n  right: 50px; }\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #222;\n  text-align: center;\n  color: #fff;\n  padding: 3em; }\n  .login-page .col-lg-4 {\n    padding: 0; }\n  .login-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n  .login-page .input-underline {\n    background: 0 0;\n    border: none;\n    box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n    color: #FFF;\n    border-radius: 0; }\n  .login-page .input-underline:focus {\n    border-bottom: 2px solid #fff;\n    box-shadow: none; }\n  .login-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #222;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n  .login-page .rounded-btn:hover, .login-page .rounded-btn:focus, .login-page .rounded-btn:active, .login-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n  .login-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n    .login-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n  .login-page .form-group {\n    padding: 8px 0; }\n    .login-page .form-group input::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n  .login-page .form-content {\n    padding: 40px 0; }\n\n.nested-menu .list-group-item {\n  cursor: pointer; }\n\n.nested-menu .nested {\n  list-style-type: none; }\n\n.nested-menu ul.submenu {\n  height: 0; }\n\n.nested-menu .expand ul.submenu {\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #FFF;\n    padding: 10px;\n    display: block; }\n\n.spinner {\n  position: fixed !important;\n  top: 50%;\n  left: 50%;\n  margin-top: -10px;\n  margin-left: -55px;\n  text-align: center; }\n\n.spinner > div {\n  width: 18px;\n  height: 18px;\n  background-color: #333;\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both; }\n\n.spinner .bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s; }\n\n.spinner .bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s; }\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n"

/***/ }),

/***/ 908:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 909:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 910:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 911:
/***/ (function(module, exports) {

module.exports = ".add-button{\n\tmargin-top: 32px\n}\n.event-admins i{\n\tfloat: right\n}"

/***/ }),

/***/ 912:
/***/ (function(module, exports) {

module.exports = "body {\n    -ms-overflow-x: hidden;\n    overflow-x: hidden;\n}\n\n.timeline {\n    position: relative;\n    padding: 20px 0 20px;\n    list-style: none;\n}\n\n.timeline:before {\n    content: \" \";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 50%;\n    width: 3px;\n    margin-left: -1.5px;\n    background-color: #eeeeee;\n}\n\n.timeline > li {\n    position: relative;\n    margin-bottom: 20px;\n}\n\n.timeline > li:before,\n.timeline > li:after {\n    content: \" \";\n    display: table;\n}\n\n.timeline > li:after {\n    clear: both;\n}\n\n.timeline > li:before,\n.timeline > li:after {\n    content: \" \";\n    display: table;\n}\n\n.timeline > li:after {\n    clear: both;\n}\n\n.timeline > li > .timeline-panel {\n    float: left;\n    position: relative;\n    width: 46%;\n    padding: 20px;\n    border: 1px solid #d4d4d4;\n    border-radius: 2px;\n    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\n}\n\n.timeline > li > .timeline-panel:before {\n    content: \" \";\n    display: inline-block;\n    position: absolute;\n    top: 26px;\n    right: -15px;\n    border-top: 15px solid transparent;\n    border-right: 0 solid #ccc;\n    border-bottom: 15px solid transparent;\n    border-left: 15px solid #ccc;\n}\n\n.timeline > li > .timeline-panel:after {\n    content: \" \";\n    display: inline-block;\n    position: absolute;\n    top: 27px;\n    right: -14px;\n    border-top: 14px solid transparent;\n    border-right: 0 solid #fff;\n    border-bottom: 14px solid transparent;\n    border-left: 14px solid #fff;\n}\n\n.timeline > li > .timeline-badge {\n    z-index: 100;\n    position: absolute;\n    top: 16px;\n    left: 50%;\n    width: 50px;\n    height: 50px;\n    margin-left: -25px;\n    border-radius: 50% 50% 50% 50%;\n    text-align: center;\n    font-size: 1.4em;\n    line-height: 50px;\n    color: #fff;\n    background-color: #999999;\n}\n\n.timeline > li.timeline-inverted > .timeline-panel {\n    float: right;\n}\n\n.timeline > li.timeline-inverted > .timeline-panel:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0;\n}\n\n.timeline > li.timeline-inverted > .timeline-panel:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0;\n}\n\n.timeline-badge.primary {\n    background-color: #2e6da4 !important;\n}\n\n.timeline-badge.success {\n    background-color: #3f903f !important;\n}\n\n.timeline-badge.warning {\n    background-color: #f0ad4e !important;\n}\n\n.timeline-badge.danger {\n    background-color: #d9534f !important;\n}\n\n.timeline-badge.info {\n    background-color: #5bc0de !important;\n}\n\n.timeline-title {\n    margin-top: 0;\n    color: inherit;\n}\n\n.timeline-body > p,\n.timeline-body > ul {\n    margin-bottom: 0;\n}\n\n.timeline-body > p + p {\n    margin-top: 5px;\n}\n\n@media (max-width: 767px) {\n    ul.timeline:before {\n        left: 40px;\n    }\n    ul.timeline > li > .timeline-panel {\n        width: calc(100% - 90px);\n        width: -webkit-calc(100% - 90px);\n    }\n    ul.timeline > li > .timeline-badge {\n        top: 16px;\n        left: 15px;\n        margin-left: 0;\n    }\n    ul.timeline > li > .timeline-panel {\n        float: right;\n    }\n    ul.timeline > li > .timeline-panel:before {\n        right: auto;\n        left: -15px;\n        border-right-width: 15px;\n        border-left-width: 0;\n    }\n    ul.timeline > li > .timeline-panel:after {\n        right: auto;\n        left: -14px;\n        border-right-width: 14px;\n        border-left-width: 0;\n    }\n}\n"

/***/ }),

/***/ 913:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 914:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 915:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 916:
/***/ (function(module, exports) {

module.exports = ".add-button{\n\tmargin-top: 32px\n}\n.workshop-admins i{\n\tfloat: right\n}"

/***/ }),

/***/ 917:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 918:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <!-- Page Heading -->\n    <div class=\"row\">\n        <div class=\"col-xl-12\">\n            <h2 class=\"page-header\">\n                Accomodation\n            </h2>\n            <ol class=\"breadcrumb\">\n                <li>\n                    <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0);\" routerLink=\"/dashboard/home\">Dashboard</a>\n                </li>\n                <li class=\"active\">\n                    <i class=\"fa fa-building\"></i> Accomodation\n                </li>\n            </ol>\n            <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"error\">\n                {{error}}\n            </div>\n            <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"message\">\n                {{message}}\n            </div>\n        </div>\n    </div>\n    <div class=\"row\" layout-align=\"center center\">\n        <fieldset class=\"form-group\">\n            <label></label>\n            <input class=\"form-control\" placeholder=\"Enter text\">\n        </fieldset>\n    </div>\n</div>\n"

/***/ }),

/***/ 919:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <!-- Page Heading -->\n    <div class=\"row\">\n        <div class=\"col-xl-12\">\n            <h2 class=\"page-header\">\n                Admins\n            </h2>\n            <ol class=\"breadcrumb\">\n                <li>\n                    <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0);\" routerLink=\"/dashboard/home\">Dashboard</a>\n                </li>\n                <li class=\"active\">\n                    <i class=\"fa fa-user\"></i> Admins\n                </li>\n            </ol>\n            <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"error\">\n                {{error}}\n            </div>\n            <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"message\">\n                {{message}}\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <data-table [items]=\"admins\" [itemCount]=\"admins.length\" (reload)=\"reloadAdmins()\" [pagination]=\"false\" [indexColumn]=\"false\" [multiSelect]=\"true\">\n                <data-table-column property=\"name\" header=\"Name\" sortable=\"true\">\n                </data-table-column>\n                <data-table-column property=\"picture\" header=\"Picture\" sortable=\"false\" width=\"100px\">\n                    <template #dataTableCell let-item=\"item\">\n                        <img class=\"profile-pic img-thumbnail\" [src]=\"item.picture\" />\n                    </template>\n                </data-table-column>\n                <data-table-column property=\"email\" header=\"Email\">\n                </data-table-column>\n                <data-table-column property=\"eventMail\" header=\"Drishti Email\">\n                </data-table-column>\n                <data-table-column header=\"Role\" width=\"120px\">\n                    <template #dataTableCell let-item=\"item\">\n                        {{getStatus(item.status)}}\n                    </template>\n                </data-table-column>\n                <data-table-column header=\"Actions\" width=\"120px\">\n                    <template #dataTableCell let-item=\"item\">\n                        <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"view(item.id)\"><i class=\"fa fa-pencil\"></i> Edit</button>\n                    </template>\n                </data-table-column>\n            </data-table>\n        </div>\n    </div>\n    <br/>\n    <div class=\"row\" *ngIf=\"admin\">\n        <div class=\"col-md-12\">\n            <form role=\"form\" (submit)=\"save()\">\n                <fieldset class=\"form-group\">\n                    <label>Name</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"admin.name\" name=\"name\" />\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Phone</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"admin.phone\" name=\"phone\" />\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Email</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"admin.email\" name=\"email\" disabled=\"true\" />\n                </fieldset>\n                <fieldset>\n                    <label>Drishti Email</label>\n                    <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control\" name=\"eventMail\" aria-describedby=\"basic-addon2\" [(ngModel)]=\"admin.eventMail\">\n                        <span class=\"input-group-addon\" id=\"basic-addon2\">@drishticet.org</span>\n                    </div>\n                </fieldset>\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label for=\"exampleSelect1\">Role</label>\n                        <select class=\"form-control\" id=\"exampleSelect1\" [(ngModel)]=\"admin.status\" name=\"status\" (change)=\"changeStatus($event.target.value)\">\n                            <option value=\"0\">Not Verified</option>\n                            <option value=\"7\">Registration Desk</option>\n                            <option value=\"8\">Event Coordinator</option>\n                            <option value=\"9\">Admin</option>\n                            <option value=\"10\">SuperUser</option>\n                        </select>\n                    </div>\n                </fieldset>\n                <br/>\n                <button class=\"btn btn-info\" type=\"submit\" role=\"input\">\n                    <i class=\"fa fa-save\"></i> Save\n                </button>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 920:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 921:
/***/ (function(module, exports) {

module.exports = "<!-- Page Heading -->\n<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <h2 class=\"page-header\">\n            Bootstrap Grid\n        </h2>\n        <ol class=\"breadcrumb\">\n            <li>\n                <i class=\"fa fa-dashboard\"></i>  <a href=\"Javascript:void(0)\" routerLink=\"/dashboard/home'\">Dashboard</a>\n            </li>\n            <li class=\"active\">\n                <i class=\"fa fa-th-list\"></i> Component\n            </li>\n        </ol>\n    </div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-sm-12\">\n\t\t<div class=\"card card-block\">\n\t\t\t<h4 class=\"card-title\">Modal</h4>\n\t\t\t<!-- Large modal -->\n\t\t\t<button class=\"btn btn-primary\" (click)=\"lgModal.show()\">Large modal</button>\n\t\t\t<div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n\t\t\t    <div class=\"modal-dialog\">\n\t\t\t        <div class=\"modal-content\">\n\t\t\t            <div class=\"modal-header\">\n\t\t\t                <button type=\"button\" class=\"close\" (click)=\"lgModal.hide()\" aria-label=\"Close\">\n\t\t\t                    <span aria-hidden=\"true\">&times;</span>\n\t\t\t                </button>\n\t\t\t                <h5 class=\"modal-title\">Large modal</h5>\n\t\t\t            </div>\n\t\t\t            <div class=\"modal-body\">\n\t\t\t                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae accusantium maiores, placeat, quasi laborum in vitae accusamus veritatis inventore nulla et quibusdam debitis ipsam consectetur eum, velit ea praesentium!\n\t\t\t                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nostrum a velit esse est, voluptatum quam eos ipsum laudantium facere iusto. Provident deleniti non temporibus ex tenetur, assumenda labore eos!\n\t\t\t            </div>\n\t\t\t        </div>\n\t\t\t    </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- /.row -->\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"card card-block\">\n\t\t\t<h4 class=\"card-title\">Alert</h4>\n\t\t\t<alert *ngFor=\"let alert of alerts;let i = index\" [type]=\"alert.type\" dismissible=\"true\" (close)=\"closeAlert(i)\">\n\t\t\t\t{{ alert?.msg }}\n\t\t\t</alert>\n\t\t\t<alert dismissOnTimeout=\"3000\">This alert will dismiss in 3s</alert>\n\t\t\t<button type=\"button\" class='btn btn-primary' (click)=\"addAlert()\">Add Alert</button>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-lg-6\">\n\t\t<div class=\"card card-block\">\n\t\t\t<h4 class=\"card-title\">Single toggle</h4>\n\t\t\t<pre class=\"card card-block card-header\">{{singleModel}}</pre>\n\t\t\t<button type=\"button\" class=\"btn btn-primary\"\n\t\t\t\t[(ngModel)]=\"singleModel\" btnCheckbox\n\t\t\t\tbtnCheckboxTrue=\"1\" btnCheckboxFalse=\"0\">\n\t\t\t\tSingle Toggle\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"card card-block\">\n\t\t\t<h4>Radio &amp; Uncheckable Radio</h4>\n\t\t\t<pre class=\"card card-block card-header\">{{radioModel || 'null'}}</pre>\n\t\t\t<div class=\"btn-group\">\n\t\t\t\t<label class=\"btn btn-primary\" [(ngModel)]=\"radioModel\"\n\t\t\t\tbtnRadio=\"Left\">Left</label>\n\t\t\t\t<label class=\"btn btn-primary\" [(ngModel)]=\"radioModel\" btnRadio=\"Middle\">Middle</label>\n\t\t\t\t<label class=\"btn btn-primary\" [(ngModel)]=\"radioModel\"\n\t\t\t\tbtnRadio=\"Right\">Right</label>\n\t\t\t</div>\n\t\t\t<div class=\"btn-group\">\n\t\t\t\t<label class=\"btn btn-success\" [(ngModel)]=\"radioModel\" btnRadio=\"Left\"\n\t\t\t\tuncheckable>Left</label>\n\t\t\t\t<label class=\"btn btn-success\" [(ngModel)]=\"radioModel\" btnRadio=\"Middle\"\n\t\t\t\tuncheckable>Middle</label>\n\t\t\t\t<label class=\"btn btn-success\" [(ngModel)]=\"radioModel\" btnRadio=\"Right\"\n\t\t\t\tuncheckable>Right</label>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-lg-6\">\n\t\t<div class=\"card card-block\">\n\t\t\t<h4 class=\"card-title\">Checkbox</h4>\n\t\t\t<pre class=\"card card-block card-header\">Model via JsonPipe: {{checkModel | json}}</pre>\n\t\t\t<pre class=\"card card-block card-header\">Left: {{checkModel.left}} | Middle: {{checkModel.middle}} | Right: {{checkModel.right}}</pre>\n\t\t\t<h4 class=\"card-title\">Checkbox</h4>\n\t\t\t<div class=\"btn-group\">\n\t\t\t\t<label class=\"btn btn-primary\" [(ngModel)]=\"checkModel.left\"\n\t\t\t\tbtnCheckbox>Left</label>\n\t\t\t\t<label class=\"btn btn-primary\" [(ngModel)]=\"checkModel.middle\" btnCheckbox>Middle</label>\n\t\t\t\t<label class=\"btn btn-primary\" [(ngModel)]=\"checkModel.right\" btnCheckbox>Right</label>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-sm-12\">\n\t\t<div class=\"card card-block\">\n\t\t\t<h4 class=\"card-title\">Dropdown</h4>\n\t\t\t<div (click)=\"$event.preventDefault()\">\n\t\t\t\t<!-- Simple dropdown -->\n\t\t\t\t<span dropdown (on-toggle)=\"toggled($event)\">\n\t\t\t\t\t<a href id=\"simple-dropdown\" dropdownToggle>\n\t\t\t\t\t\tClick me for a dropdown, yo!\n\t\t\t\t\t</a>\n\t\t\t\t\t<ul class=\"dropdown-menu\" aria-labelledby=\"simple-dropdown\">\n\t\t\t\t\t\t<li *ngFor=\"let choice of items\">\n\t\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"#\">{{choice}}</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</span>\n\n\t\t\t\t<!-- Single button -->\n\t\t\t\t<div class=\"btn-group\" dropdown [(isOpen)]=\"status.isopen\">\n\t\t\t\t\t<button id=\"single-button\" type=\"button\" class=\"btn btn-primary\" dropdownToggle [disabled]=\"disabled\">\n\t\t\t\t\t\tButton dropdown <span class=\"caret\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n\t\t\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n\t\t\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n\t\t\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n\t\t\t\t\t\t<li class=\"divider dropdown-divider\"></li>\n\t\t\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Split button -->\n\t\t\t\t<div class=\"btn-group\" dropdown>\n\t\t\t\t\t<button id=\"split-button\" type=\"button\" class=\"btn btn-danger\">Action</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger dropdown-toggle\" dropdownToggle>\n\t\t\t\t\t\t<span class=\"caret\"></span>\n\t\t\t\t\t\t<span class=\"sr-only\">Split button!</span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"split-button\">\n\t\t\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n\t\t\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n\t\t\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n\t\t\t\t\t\t<li class=\"divider dropdown-divider\"></li>\n\t\t\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t\t<hr/>\n\t\t\t\t<p>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"toggleDropdown($event)\">Toggle button dropdown\n\t\t\t\t\t</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-sm\" (click)=\"disabled = !disabled\">Enable/Disable</button>\n\t\t\t\t</p>\n\n\t\t\t\t<hr>\n\t\t\t\t<!-- Single button with keyboard nav -->\n\t\t\t\t<div class=\"btn-group\" dropdown keyboardNav=\"true\">\n\t\t\t\t\t<button id=\"simple-btn-keyboard-nav\" type=\"button\" class=\"btn btn-primary\" dropdownToggle>\n\t\t\t\t\t\tDropdown with keyboard navigation <span class=\"caret\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"simple-btn-keyboard-nav\">\n\t\t\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n\t\t\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n\t\t\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n\t\t\t\t\t\t<li class=\"divider dropdown-divider\"></li>\n\t\t\t\t\t\t<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-lg-6\" style=\"margin-top: 10px;\">\n\t\t<div class=\"card card-block\">\n\t\t\t<h4 class=\"card-title\">Default</h4>\n\t\t\t<pagination [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" (pageChanged)=\"pageChanged($event)\"></pagination>\n\t\t\t<pagination [boundaryLinks]=\"true\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" class=\"pagination-sm\"\n\t\t\tpreviousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"></pagination>\n\t\t\t<pagination [directionLinks]=\"false\" [boundaryLinks]=\"true\" [totalItems]=\"totalItems\"\n\t\t\t[(ngModel)]=\"currentPage\"></pagination>\n\t\t\t<pagination [directionLinks]=\"false\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\"\n\t\t\t(numPages)=\"smallnumPages = $event\"></pagination>\n\t\t\t<pre class=\"card card-block card-header\">The selected page no: {{currentPage}}/{{smallnumPages}}</pre>\n\t\t\t<button type=\"button\" class=\"btn btn-info\" (click)=\"setPage(3)\">Set current page to: 3</button>\n\t\t</div>\n\t</div>\n\t<div class=\"col-lg-6\" style=\"margin-top: 10px;\">\n\t\t<div class=\"card card-block\">\n\t\t\t<h4 class=\"card-title\">Pager</h4>\n\t\t\t<hr/>\n\t\t\t<h4>Limit the maximum visible buttons</h4>\n\t\t\t<pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\" class=\"pagination-sm\"\n\t\t\t[boundaryLinks]=\"true\"></pagination>\n\t\t\t<pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\" class=\"pagination-sm\"\n\t\t\t[boundaryLinks]=\"true\" [rotate]=\"false\" (numPages)=\"numPages = $event\"></pagination>\n\t\t\t<pre class=\"card card-block card-header\">Page: {{bigCurrentPage}} / {{numPages}}</pre>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"card card-block\">\n\t<div class=\"row\">\n\t\t<div class=\"cal-lg-12\">\n\t\t\t<div class=\"card-block\">\n\t\t\t\t<h5>In bootstrap 4 progress has a different concept, no inner text, no default transition animation</h5>\n\t\t\t\t<h4>Static</h4>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<progress class=\"progress\" value=\"55\" max=\"100\"></progress>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<progress class=\"progress progress-striped\" value=\"22\" max=\"100\" type=\"warning\">22%</progress>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<progress class=\"progress progress-striped active\" max=\"200\" value=\"166\" type=\"danger\"><i>166 / 200</i></progress>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<h4>Dynamic <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"random()\">Randomize</button></h4>\n\t\t\t\t<progress class=\"progress progress-striped progress-animated\" [max]=\"max\" [value]=\"dynamic\">\n\t\t\t\t\t<span style=\"color:white; white-space:nowrap;\">{{dynamic}} / {{max}}</span>\n\t\t\t\t</progress>\n\n\t\t\t\t<small><em>No animation</em></small>\n\t\t\t\t<progress class=\"progress progress-success\" [value]=\"dynamic\" [max]=\"100\"><b>{{dynamic}}%</b></progress>\n\n\t\t\t\t<small><em>Object (changes type based on value)</em></small>\n\t\t\t\t<progress class=\"progress progress-striped progress-animated active progress-{{ type }}\" [value]=\"dynamic\" [max]=\"max\">\n\t\t\t\t\t{{type}} <i *ngIf=\"showWarning\">!!! Watch out !!!</i>\n\t\t\t\t</progress>\n\n\t\t\t\t<hr />\n\t\t\t\t<h4>Stacked <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"randomStacked()\">Randomize</button></h4>\n\t\t\t\t<div class=\"row col-lg-12\">\n\t\t\t\t\t<!-- todo: implement as component -->\n\t\t\t\t\t<progress *ngFor=\"let baz of stacked\"\n\t\t\t\t\tclass=\"progress progress-{{ baz?.type }}\"\n\t\t\t\t\tstyle=\"float: left;\"\n\t\t\t\t\t[ngStyle]=\"{width: baz.value + '%'}\"\n\t\t\t\t\t[value]=\"baz.value\" [max]=\"baz.max\">\n\t\t\t\t\t<span *ngIf=\"baz.value > 3\">{{baz?.value}}%</span>\n\t\t\t\t</progress>\n\t\t\t\t<!-- gray background -->\n\t\t\t\t<progress class=\"progress\" value=\"0\" max=\"100\" style=\"width: 100%;\"></progress>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"card card-block\">\n\t\t\t<h4 class=\"card-title\">Default</h4>\n\t\t\t<rating [(ngModel)]=\"rate\" [max]=\"maxRating\" [readonly]=\"isReadonly\"\n\t\t\t(onHover)=\"hoveringOver($event)\" (onLeave)=\"resetStar($event)\"\n\t\t\t[titles]=\"['one','two','three']\"></rating>\n\t\t\t<span class=\"label\"\n\t\t\t[ngClass]=\"{'label-warning': percent<30, 'label-info': percent>=30 && percent<70, 'label-success': percent>=70}\"\n\t\t\t[ngStyle]=\"{display: (overStar && !isReadonly) ? 'inline' : 'none'}\">{{percent}}%</span>\n\n\t\t\t<pre class=\"card card-block card-header\" style=\"margin:15px 0;\">Rate: <b>{{rate}}</b> - Readonly is: <i>{{isReadonly}}</i> - Hovering over: <b>{{overStar || \"none\"}}</b></pre>\n\n\t\t\t<button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"rate = 0\"\n\t\t\t\t[disabled]=\"isReadonly\">Clear\n\t\t\t</button>\n\t\t\t<button type=\"button\" class=\"btn btn-sm btn-primary\"\n\t\t\t\t(click)=\"isReadonly = ! isReadonly\">Toggle Readonly\n\t\t\t</button>\n\t\t\t<hr/>\n\n\t\t\t<h4>Custom icons</h4>\n\t\t\t<div>\n\t\t\t\t<rating [(ngModel)]=\"x\" max=\"15\" stateOn=\"glyphicon-ok-sign\"\n\t\t\t\tstateOff=\"glyphicon-ok-circle\"></rating>\n\t\t\t\t<b>(<i>Rate:</i> {{x}})</b>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<rating [(ngModel)]=\"y\" [ratingStates]=\"ratingStates\"></rating>\n\t\t\t\t<b>(<i>Rate:</i> {{y}})</b>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-lg-6\">\n\t\t<div class=\"card card-block\" (click)=\"$event.preventDefault()\">\n\t\t\t<p>Select a tab by setting active binding to true:</p>\n\t\t\t<p>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"tabs[0].active = true\">Select second tab</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"tabs[1].active = true\">Select third tab</button>\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"tabs[1].disabled = ! tabs[1].disabled\">Enable / Disable third tab</button>\n\t\t\t</p>\n\t\t\t<hr />\n\t\t\t<tabset>\n\t\t\t\t<tab heading=\"Static title\">Static content</tab>\n\t\t\t\t<tab *ngFor=\"let tabz of tabs\"\n\t\t\t\t[heading]=\"tabz.title\"\n\t\t\t\t[active]=\"tabz.active\"\n\t\t\t\t(select)=\"tabz.active = true\"\n\t\t\t\t(deselect)=\"tabz.active = false\"\n\t\t\t\t[disabled]=\"tabz.disabled\"\n\t\t\t\t[removable]=\"tabz.removable\"\n\t\t\t\t(removed)=\"removeTabHandler(tabz)\">\n\t\t\t\t{{tabz?.content}}\n\t\t\t\t</tab>\n\t\t\t\t<tab (select)=\"alertMe()\">\n\t\t\t\t\t<template tabHeading>\n\t\t\t\t\t\t<i class=\"glyphicon glyphicon-bell\"></i> Alert!\n\t\t\t\t\t</template>\n\t\t\t\t\tI've got an HTML heading, and a select callback. Pretty cool!\n\t\t\t\t</tab>\n\t\t\t</tabset>\n\t\t</div>\n\t</div>\n\t<div class=\"col-lg-6\">\n\t\t<div class=\"card card-block\">\n\t\t\t<tabset [vertical]=\"true\" type=\"pills\">\n\t\t\t\t<tab heading=\"Vertical 1\">Vertical content 1</tab>\n\t\t\t\t<tab heading=\"Vertical 2\">Vertical content 2</tab>\n\t\t\t</tabset>\n\t\t\t<hr />\n\t\t\t<p><i>Bootstrap 4 doesn't have justified classes</i></p>\n\t\t\t<tabset [justified]=\"true\">\n\t\t\t\t<tab heading=\"Justified\">Justified content</tab>\n\t\t\t\t<tab heading=\"SJ\">Short Labeled Justified content</tab>\n\t\t\t\t<tab heading=\"Long Justified\">Long Labeled Justified content</tab>\n\t\t\t</tabset>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-sm-12\">\n\t\t<div class=\"card card-block\">\n\t\t\t<div class=\"card-title\">Tooltip</div>\n\t\t\t<a href=\"#\" class=\"btn btn-danger\" tooltipPlacement=\"top\" tooltip=\"On the top!\">On Top</a>\n\t\t\t<a href=\"#\" class=\"btn btn-warning\" tooltipPlacement=\"bottom\" tooltip=\"On the bottom!\">On Bottom</a>\n\t\t\t<a href=\"#\" class=\"btn btn-success\" tooltipPlacement=\"left\" tooltip=\"On the left!\">On Left</a>\n\t\t\t<a href=\"#\" class=\"btn btn-info\" tooltipPlacement=\"right\" tooltip=\"On the right!\">On Right</a>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-sm-12\">\n\t\t<div class=\"card card-block\">\n\t\t    <h4>Static arrays</h4>\n\t\t    <pre class=\"card card-block card-header\">Model: {{selected | json}}</pre>\n\t\t    <input [(ngModel)]=\"selected\"\n\t\t           [typeahead]=\"statesComplex\"\n\t\t           (typeaheadOnSelect)=\"typeaheadOnSelect($event)\"\n\t\t           [typeaheadOptionField]=\"'name'\"\n\t\t           class=\"form-control\">\n\n\t\t    <h4>Asynchronous results</h4>\n\t\t    <pre class=\"card card-block card-header\">Model: {{asyncSelected | json}}</pre>\n\t\t    <input [(ngModel)]=\"asyncSelected\"\n\t\t           [typeahead]=\"getAsyncData(getContext())\"\n\t\t           (typeaheadLoading)=\"changeTypeaheadLoading($event)\"\n\t\t           (typeaheadNoResults)=\"changeTypeaheadNoResults($event)\"\n\t\t           (typeaheadOnSelect)=\"typeaheadOnSelect($event)\"\n\t\t           [typeaheadOptionsLimit]=\"7\"\n\t\t           placeholder=\"Locations loaded with timeout\"\n\t\t           class=\"form-control\">\n\t\t    <div *ngIf=\"typeaheadLoading===true\">\n\t\t        <i class=\"glyphicon glyphicon-refresh ng-hide\" style=\"\"></i>\n\t\t    </div>\n\t\t    <div *ngIf=\"typeaheadNoResults===true\" class=\"\" style=\"\">\n\t\t        <i class=\"glyphicon glyphicon-remove\"></i> No Results Found\n\t\t    </div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 922:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <!-- Page Heading -->\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <h2 class=\"page-header\">\n                Bootstrap Elements\n            </h2>\n            <ol class=\"breadcrumb\">\n                <li>\n                    <i class=\"fa fa-dashboard\"></i>  <a href=\"Javascript:void(0)\" routerLink=\"/dashboard/home\">Dashboard</a>\n                </li>\n                <li class=\"active\">\n                    <i class=\"fa fa-desktop\"></i> Bootstrap Elements\n                </li>\n            </ol>\n        </div>\n    </div>\n    <!-- /.row -->\n\n    <!-- Main jumbotron for a primary marketing message or call to action -->\n    <div class=\"jumbotron\">\n        <h1>Hello, world!</h1>\n        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>\n        <p><a href=\"javascript:;\" class=\"btn btn-primary btn-lg\" role=\"button\">Learn more »</a>\n        </p>\n    </div>\n\n    <div class=\"page-header\">\n        <h1>Buttons</h1>\n        <hr>\n    </div>\n    <p>\n        <button type=\"button\" class=\"btn btn-lg btn-secondary\">Default</button>\n        <button type=\"button\" class=\"btn btn-lg btn-primary\">Primary</button>\n        <button type=\"button\" class=\"btn btn-lg btn-success\">Success</button>\n        <button type=\"button\" class=\"btn btn-lg btn-info\">Info</button>\n        <button type=\"button\" class=\"btn btn-lg btn-warning\">Warning</button>\n        <button type=\"button\" class=\"btn btn-lg btn-danger\">Danger</button>\n        <button type=\"button\" class=\"btn btn-lg btn-link\">Link</button>\n    </p>\n    <p>\n        <button type=\"button\" class=\"btn btn-secondary\">Default</button>\n        <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n        <button type=\"button\" class=\"btn btn-success\">Success</button>\n        <button type=\"button\" class=\"btn btn-info\">Info</button>\n        <button type=\"button\" class=\"btn btn-warning\">Warning</button>\n        <button type=\"button\" class=\"btn btn-danger\">Danger</button>\n        <button type=\"button\" class=\"btn btn-link\">Link</button>\n    </p>\n    <p>\n        <button type=\"button\" class=\"btn btn-sm btn-secondary\">Default</button>\n        <button type=\"button\" class=\"btn btn-sm btn-primary\">Primary</button>\n        <button type=\"button\" class=\"btn btn-sm btn-success\">Success</button>\n        <button type=\"button\" class=\"btn btn-sm btn-info\">Info</button>\n        <button type=\"button\" class=\"btn btn-sm btn-warning\">Warning</button>\n        <button type=\"button\" class=\"btn btn-sm btn-danger\">Danger</button>\n        <button type=\"button\" class=\"btn btn-sm btn-link\">Link</button>\n    </p>\n\n    <br>\n\n    <div class=\"page-header\">\n        <h1>Thumbnails</h1>\n        <hr>\n    </div>\n    <img class=\"img-thumbnail\" src=\"http://placehold.it/400x400\" alt=\"\">\n\n    <div class=\"page-header\">\n        <h1>Dropdown menus</h1>\n        <hr>\n    </div>\n    <div class=\"dropdown theme-dropdown clearfix\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Dropdown\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n            <a class=\"dropdown-item\" href=\"javascript:;\">Action</a>\n            <a class=\"dropdown-item\" href=\"javascript:;\">Another action</a>\n            <a class=\"dropdown-item\" href=\"javascript:;\">Something else here</a>\n        </div>\n    </div>\n\n    <br>\n\n    <div class=\"page-header\">\n        <h1>Navbars</h1>\n    </div>\n\n    <nav class=\"navbar navbar-light bg-faded\">\n        <button class=\"navbar-toggler hidden-sm-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#exCollapsingNavbar2\">\n            ☰\n        </button>\n        <div class=\"collapse navbar-toggleable-xs\" id=\"exCollapsingNavbar2\">\n            <a class=\"navbar-brand\" href=\"javascript:;\">Responsive navbar</a>\n            <ul class=\"nav navbar-nav\">\n                <li class=\"nav-item-elements nav-item active\">\n                    <a class=\"nav-link nav-link-elements\" href=\"javascript:;\">Home <span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item-elements nav-item\">\n                    <a class=\"nav-link nav-link-elements\" href=\"javascript:;\">Features</a>\n                </li>\n                <li class=\"nav-item-elements nav-item\">\n                    <a class=\"nav-link nav-link-elements\" href=\"javascript:;\">Pricing</a>\n                </li>\n                <li class=\"nav-item-elements nav-item\">\n                    <a class=\"nav-link nav-link-elements\" href=\"javascript:;\">About</a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n    <br>\n    <nav class=\"navbar navbar-dark bg-inverse\">\n        <button class=\"navbar-toggler hidden-sm-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#exCollapsingNavbar3\">\n            ☰\n        </button>\n        <div class=\"collapse navbar-toggleable-xs\" id=\"exCollapsingNavbar3\">\n            <a class=\"navbar-brand\" href=\"javascript:;\">Responsive navbar</a>\n            <ul class=\"nav navbar-nav\">\n                <li class=\"nav-item nav-item-elements active\">\n                    <a class=\"nav-link nav-link-elements\" href=\"javascript:;\">Home <span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item nav-item-elements\">\n                    <a class=\"nav-link nav-link-elements\" href=\"javascript:;\">Features</a>\n                </li>\n                <li class=\"nav-item nav-item-elements\">\n                    <a class=\"nav-link nav-link-elements\" href=\"javascript:;\">Pricing</a>\n                </li>\n                <li class=\"nav-item nav-item-elements\">\n                    <a class=\"nav-link nav-link-elements\" href=\"javascript:;\">About</a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n\n    <div class=\"page-header\">\n        <h1>Alerts</h1>\n        <hr>\n    </div>\n    <div class=\"alert alert-success\">\n        <strong>Well done!</strong> You successfully read this important alert message.\n    </div>\n    <div class=\"alert alert-info\">\n        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n    </div>\n    <div class=\"alert alert-warning\">\n        <strong>Warning!</strong> Best check yo self, you're not looking too good.\n    </div>\n    <div class=\"alert alert-danger\">\n        <strong>Oh snap!</strong> Change a few things up and try submitting again.\n    </div>\n\n    <div class=\"page-header\">\n        <h1>Progress bars</h1>\n        <hr>\n    </div>\n    <progress class=\"progress\" value=\"25\" max=\"100\">\n        <div class=\"progress\">\n        <span class=\"progress-bar\" style=\"width: 25%;\">25%</span>\n        </div>\n    </progress>\n    <progress class=\"progress progress-success\" value=\"50\" max=\"100\">\n        <div class=\"progress\">\n        <span class=\"progress-bar\" style=\"width: 50%;\">50%</span>\n        </div>\n    </progress>\n    <progress class=\"progress progress-info\" value=\"65\" max=\"100\">\n        <div class=\"progress\">\n        <span class=\"progress-bar\" style=\"width: 65%;\">65%</span>\n        </div>\n    </progress>\n    <progress class=\"progress progress-warning\" value=\"80\" max=\"100\">\n        <div class=\"progress\">\n        <span class=\"progress-bar\" style=\"width: 80%;\">80%</span>\n        </div>\n    </progress>\n    <progress class=\"progress progress-danger\" value=\"95\" max=\"100\">\n        <div class=\"progress\">\n        <span class=\"progress-bar\" style=\"width: 95%;\">95%</span>\n        </div>\n    </progress>\n    <progress class=\"progress progress-striped progress-animated\" value=\"25\" max=\"100\">25%</progress>\n    <br>\n\n    <div class=\"page-header\">\n        <h1>List groups</h1>\n        <hr>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-4\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\">Cras justo odio</li>\n                <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n                <li class=\"list-group-item\">Morbi leo risus</li>\n                <li class=\"list-group-item\">Porta ac consectetur ac</li>\n                <li class=\"list-group-item\">Vestibulum at eros</li>\n            </ul>\n        </div>\n        <!-- /.col-sm-4 -->\n        <div class=\"col-sm-4\">\n            <div class=\"list-group\">\n                <a href=\"javascript:;\" class=\"list-group-item active\">Cras justo odio</a>\n                <a href=\"javascript:;\" class=\"list-group-item\">Dapibus ac facilisis in</a>\n                <a href=\"javascript:;\" class=\"list-group-item\">Morbi leo risus</a>\n                <a href=\"javascript:;\" class=\"list-group-item\">Porta ac consectetur ac</a>\n                <a href=\"javascript:;\" class=\"list-group-item\">Vestibulum at eros</a>\n            </div>\n        </div>\n        <!-- /.col-sm-4 -->\n        <div class=\"col-sm-4\">\n            <div class=\"list-group\">\n                <a href=\"javascript:;\" class=\"list-group-item active\">\n                    <h4 class=\"list-group-item-heading\">List group item heading</h4>\n                    <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n                </a>\n                <a href=\"javascript:;\" class=\"list-group-item\">\n                    <h4 class=\"list-group-item-heading\">List group item heading</h4>\n                    <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n                </a>\n                <a href=\"javascript:;\" class=\"list-group-item\">\n                    <h4 class=\"list-group-item-heading\">List group item heading</h4>\n                    <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n                </a>\n            </div>\n        </div>\n        <!-- /.col-sm-4 -->\n    </div>\n\n    <div class=\"page-header\">\n        <h1>Cards</h1>\n        <hr>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-4\">\n            <div class=\"card\">\n                <div class=\"card-header card-default\">\n                    Card title\n                </div>\n                <div class=\"card-block\">\n                    Card content\n                </div>\n            </div>\n            <div class=\"card card-primary card-inverse\">\n                <div class=\"card-header card-primary\">\n                    Card title\n                </div>\n                <div class=\"card-block bg-white\">\n                    Card content\n                </div>\n            </div>\n        </div>\n        <!-- /.col-sm-4 -->\n        <div class=\"col-sm-4\">\n            <div class=\"card card-success card-inverse\">\n                <div class=\"card-header card-success\">\n                    Card title\n                </div>\n                <div class=\"card-block bg-white\">\n                    Card content\n                </div>\n            </div>\n            <div class=\"card card-info card-inverse\">\n                <div class=\"card-header card-info\">\n                    Card title\n                </div>\n                <div class=\"card-block bg-white\">\n                    Card content\n                </div>\n            </div>\n        </div>\n        <!-- /.col-sm-4 -->\n        <div class=\"col-sm-4\">\n            <div class=\"card card-warning card-inverse\">\n                <div class=\"card-header card-warning\">\n                    Card title\n                </div>\n                <div class=\"card-block bg-white\">\n                    Card content\n                </div>\n            </div>\n            <div class=\"card card-danger card-inverse\">\n                <div class=\"card-header card-danger\">\n                    Card title\n                </div>\n                <div class=\"card-block bg-white\">\n                    Card content\n                </div>\n            </div>\n        </div>\n        <!-- /.col-sm-4 -->\n        <div class=\"col-sm-4\">\n            <div class=\"card card-success card-inverse\">\n                <div class=\"card-header card-success\">\n                    Card title\n                </div>\n                <div class=\"card-block bg-white\">\n                    Card content\n                </div>\n            </div>\n        </div>\n        <!-- /.col-sm-4 -->\n        <div class=\"col-sm-4\">\n            <div class=\"card card-warning card-inverse\">\n                <div class=\"card-header card-warning\">\n                    Card title\n                </div>\n                <div class=\"card-block bg-white\">\n                    Card content\n                </div>\n            </div>\n        </div>\n        <!-- /.col-sm-4 -->\n        <div class=\"col-sm-4\">\n            <div class=\"card card-danger card-inverse\">\n                <div class=\"card-header card-danger\">\n                    Card title\n                </div>\n                <div class=\"card-block bg-white\">\n                    Card content\n                </div>\n            </div>\n        </div>\n        <!-- /.col-sm-4 -->\n    </div>\n\n</div>"

/***/ }),

/***/ 923:
/***/ (function(module, exports) {

module.exports = "<top-nav></top-nav>\n<sidebar-cmp></sidebar-cmp>\n<section class=\"main-container\" [ngClass]=\"{sidebarPushRight: isActive}\">\t\n\t<router-outlet></router-outlet>\n</section>"

/***/ }),

/***/ 924:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <!-- Page Heading -->\n    <div class=\"row\">\n        <div class=\"col-xl-12\">\n            <h2 class=\"page-header\">\n                Event Registration\n            </h2>\n            <ol class=\"breadcrumb\">\n                <li>\n                    <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0);\" routerLink=\"/dashboard/home\">Dashboard</a>\n                </li>\n                <li class=\"active\">\n                    <i class=\"fa fa-list\"></i> Registration\n                </li>\n            </ol>\n            <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"error\">\n                {{error}}\n            </div>\n            <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"message\">\n                {{message}}\n            </div>\n        </div>\n    </div>\n    <div class=\"row\" layout-align=\"center center\">\n        <form id=\"eventRegForm\" class=\"form-horizontal\" (ngSubmit)=\"getRegistered()\">\n            <div class=\"col-sm-5\">\n                <div>\n                    <input [(ngModel)]=\"selectedEvent\" name=\"selectedEvent\" ng2-auto-complete [source]=\"eventList\" [list-formatter]=\"autocompleListFormatter\" value-property-name=\"id\" display-property-name=\"name\" placeholder=\"Event/Workshop Name\" class=\"form-control\">\n                </div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\" form=\"eventRegForm\" value=\"Submit\">Search</button>\n        </form>\n        <br>\n        <br>\n        <br>\n        <div class=\"col\">\n            <div *ngIf=\"event && event.group\">\n                <span>Groups Registered <span class=\"badge\">{{event.studentCount}}</span></span>\n                <br>\n                <span *ngIf=\"event.totalCount\"> Total Student <span class=\"badge\">{{event.totalCount}}</span> </span>\n            </div>\n            <div *ngIf=\"event && !event.group\">\n                <span>Students Registered <span class=\"badge\">{{event.studentCount}}</span></span>\n            </div>\n\n            <ul class=\"list-group\">\n                <div *ngFor=\"let student of registeredStudents\">\n                    <li class=\"list-group-item\">\n                        {{student.name}}\n                        <ul class=\"list-group\">\n                            <li class=\"list-group-item\"><a href=\"mailto:{{student.email}}\">{{student.email}}</a></li>\n                            <li class=\"list-group-item\"><a href=\"tel:{{student.phone}}\">{{student.phone}}</a></li>\n                            <li class=\"list-group-item\">{{student.college}}</li>\n                            <div *ngIf=\"student.group.length > 1\">\n                                Group\n                                <div *ngFor=\"let groupMember of student.group\">\n                                    <ul class=\"list-group\" *ngIf=\"groupMember.id!=student.id\">\n                                        <li class=\"list-group-item\">{{groupMember.name}}</li>\n                                        <ul class=\"list-group\">\n                                            <li class=\"list-group-item\"><a href=\"mailto:{{groupMember.email}}\">{{groupMember.email}}</a></li>\n                                            <li class=\"list-group-item\"><a href=\"tel:{{groupMember.phone}}\">{{groupMember.phone}}</a></li>\n                                            <li class=\"list-group-item\">{{groupMember.college}}</li>\n                                        </ul>\n                                    </ul>\n                                </div>\n                            </div>\n                        </ul>\n                    </li>\n                </div>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 925:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <!-- Page Heading -->\n    <div class=\"row\">\n        <div class=\"col-xl-12\">\n            <h2 class=\"page-header\">\n                Events\n            </h2>\n            <ol class=\"breadcrumb\">\n                <li>\n                    <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0);\" routerLink=\"/dashboard/home\">Dashboard</a>\n                </li>\n                <li class=\"active\">\n                    <i class=\"fa fa-television\"></i> Events\n                </li>\n            </ol>\n            <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"error\">\n                {{error}}\n            </div>\n            <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"message\">\n                {{message}}\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <button class=\"btn btn-primary\" (click)=\"event={group:0,category:'GEN'}\">Add new Event</button>\n            <data-table [items]=\"events\" [itemCount]=\"events.length\" (reload)=\"reloadEvents($event)\" [pagination]=\"true\" [indexColumn]=\"false\" [multiSelect]=\"true\">\n                <data-table-column property=\"name\" header=\"Name\" sortable=\"true\">\n                </data-table-column>\n                <data-table-column property=\"image\" header=\"Image\" width=\"100px\">\n                    <template #dataTableCell let-item=\"item\">\n                        <img *ngIf=\"item.image\" class=\"img-thumbnail\" [src]=\"item.image\" />\n                    </template>\n                </data-table-column>\n                <data-table-column header=\"Category\">\n                    <template #dataTableCell let-item=\"item\">\n                        {{category[item.category]}}\n                    </template>\n                    <data-table-column header=\"Total Prize\">\n                        <template #dataTableCell let-item=\"item\">\n                            {{item.prize1+item.prize2+item.prize3}}\n                        </template>\n                    </data-table-column>\n                </data-table-column>\n                <data-table-column property=\"students\" header=\"Reg Count\" sortable=\"true\">\n                </data-table-column>\n                <data-table-column property=\"day\" header=\"Day\" sortable=\"true\">\n                </data-table-column>\n                <data-table-column header=\"Event Type\" width=\"120px\" sortable=\"true\">\n                    <template #dataTableCell let-item=\"item\">\n                        {{item.group==1?'Group':'Individual'}}\n                    </template>\n                </data-table-column>\n                <data-table-column header=\"Actions\" width=\"120px\">\n                    <template #dataTableCell let-item=\"item\">\n                        <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"view(item.id)\"><i class=\"fa fa-pencil\"></i> Edit</button>\n                    </template>\n                </data-table-column>\n            </data-table>\n        </div>\n    </div>\n    <div class=\"row\" *ngIf=\"event\">\n        <div class=\"col-lg-12\">\n            <br/>\n            <br/>\n            <form role=\"form\" (submit)=\"save()\">\n                <fieldset class=\"form-group\">\n                    <label>Name</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"event.name\" name=\"name\" />\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Description</label>\n                    <ckeditor [(ngModel)]=\"event.description\" name=\"description\" debounce=\"500\">\n                    </ckeditor>\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Event Format (Rules)</label>\n                    <ckeditor [(ngModel)]=\"event.format\" name=\"format\" debounce=\"500\">\n                    </ckeditor>\n                </fieldset>\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label for=\"exampleSelect3\">Category</label>\n                        <select class=\"form-control\" id=\"exampleSelect3\" [(ngModel)]=\"event.category\" name=\"category\" (change)=\"event.category = $event.target.value\">\n                            <option *ngFor=\"let cat of categoryArray\" [value]=\"cat[0]\">{{cat[1]}}</option>\n                        </select>\n                    </div>\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Event Image</label>\n                    <img [src]=\"event.image\" *ngIf=\"event.image\" class=\"img-thumbnail img-event\" />\n                    <input type=\"file\" class=\"form-control\" (change)=\"fileChange($event)\" name=\"image\" />\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Registration Fee</label>\n                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"event.regFee\" name=\"regFee\" />\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>First Prize</label>\n                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"event.prize1\" name=\"prize1\" />\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Second Prize</label>\n                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"event.prize2\" name=\"prize2\" />\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Third Prize</label>\n                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"event.prize3\" name=\"prize3\" />\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Schedule</label>\n                    <input type=\"number\" [(ngModel)]=\"event.day\" name=\"day\" placeholder=\"day (1, 2 or 3)\" class=\"form-control\" />\n                    <input type=\"time\" [(ngModel)]=\"event.time\" name=\"time\" placeholder=\"time\" class=\"form-control\" />\n                </fieldset>\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label for=\"exampleSelect1\">Participation Type</label>\n                        <select class=\"form-control\" id=\"exampleSelect1\" [(ngModel)]=\"event.group\" name=\"group\" (change)=\"event.group = $event.target.value\">\n                            <option value=\"0\">Individual Event</option>\n                            <option value=\"1\">Group Event</option>\n                        </select>\n                    </div>\n                </fieldset>\n                <fieldset class=\"form-group\" *ngIf=\"event.group==1\">\n                    <label>Maxmimum members per group</label>\n                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"event.maxPerGroup\" name=\"maxGroups\" />\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Contact 1</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"event.contactName1\" name=\"contactName1\" placeholder=\"Name\" />\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"event.contactPhone1\" name=\"contactPhone1\" placeholder=\"Phone\" />\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"event.contactEmail1\" name=\"contactEmail1\" placeholder=\"Email\" />\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Contact 2</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"event.contactName2\" name=\"contactName2\" placeholder=\"Name\" />\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"event.contactPhone2\" name=\"contactPhone2\" placeholder=\"Phone\" />\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"event.contactEmail2\" name=\"contactEmail2\" placeholder=\"Email\" />\n                </fieldset>\n                <br/>\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label for=\"exampleSelect2\">Event Coordinator</label>\n                        <select class=\"form-control\" id=\"exampleSelect2\" [(ngModel)]=\"event.adminId\" (change)=\"eventAdmin=$event.target.value\" name=\"eventAdmin\">\n                            <option *ngFor=\"let admin of allAdmins\" [value]=\"admin.id\">{{admin.name}}</option>\n                        </select>\n                    </div>\n                </fieldset>\n                <button class=\"btn btn-info\" type=\"submit\" role=\"input\">\n                    <i class=\"fa fa-save\"></i> Save\n                </button>\n            </form>\n        </div>\n    </div>"

/***/ }),

/***/ 926:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <!-- Page Heading -->\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <h2 class=\"page-header\">\n                Forms\n            </h2>\n            <ol class=\"breadcrumb\">\n                <li>\n                    <i class=\"fa fa-dashboard\"></i>  <a href=\"Javascript:void(0)\" routerLink=\"/dashboard/home\">Dashboard</a>\n                </li>\n                <li class=\"active\">\n                    <i class=\"fa fa-edit\"></i> Forms\n                </li>\n            </ol>\n        </div>\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n\n            <form role=\"form\" (submit)=\"save()\">\n                <fieldset class=\"form-group\">\n                    <label>Text Input</label>\n                    <input class=\"form-control\">\n                    <p class=\"help-block\">Example block-level help text here.</p>\n                </fieldset>\n\n                <fieldset class=\"form-group\">\n                    <label>Text Input with Placeholder</label>\n                    <input class=\"form-control\" placeholder=\"Enter text\">\n                </fieldset>\n\n                <div class=\"form-group\">\n                    <label>Static Control</label>\n                    <p class=\"form-control-static\">email@example.com</p>\n                </div>\n\n                <fieldset class=\"form-group\">\n                    <label for=\"exampleInputFile\">File input</label>\n                    <input type=\"file\" class=\"form-control-file\" id=\"exampleInputFile\">\n                </fieldset>\n\n                <fieldset class=\"form-group\">\n                    <label>Text area</label>\n                    <textarea class=\"form-control\" rows=\"3\"></textarea>\n                </fieldset>\n\n                <div class=\"form-group\">\n                    <label>Checkboxes</label>\n                    <div class=\"checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\"> Checkbox 1\n                        </label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\"> Checkbox 2\n                        </label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\"> Checkbox 3\n                        </label>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Inline Checkboxes</label>\n                    <label class=\"checkbox-inline\">\n                        <input type=\"checkbox\">1\n                    </label>\n                    <label class=\"checkbox-inline\">\n                        <input type=\"checkbox\">2\n                    </label>\n                    <label class=\"checkbox-inline\">\n                        <input type=\"checkbox\">3\n                    </label>\n                </div>\n\n                <fieldset class=\"form-group\">\n                    <label>Radio Buttons</label>\n                    <div class=\"radio\">\n                        <label>\n                            <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked=\"\"> Radio 1\n                        </label>\n                    </div>\n                    <div class=\"radio\">\n                        <label>\n                            <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\"> Radio 2\n                        </label>\n                    </div>\n                    <div class=\"radio\">\n                        <label>\n                            <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" value=\"option3\"> Radio 3\n                        </label>\n                    </div>\n                </fieldset>\n\n                <fieldset class=\"form-group\">\n                    <label>Inline Radio Buttons</label>\n                    <label class=\"radio-inline\">\n                        <input type=\"radio\" name=\"optionsRadiosInline\" id=\"optionsRadiosInline1\" value=\"option1\" checked=\"\">1\n                    </label>\n                    <label class=\"radio-inline\">\n                        <input type=\"radio\" name=\"optionsRadiosInline\" id=\"optionsRadiosInline2\" value=\"option2\">2\n                    </label>\n                    <label class=\"radio-inline\">\n                        <input type=\"radio\" name=\"optionsRadiosInline\" id=\"optionsRadiosInline3\" value=\"option3\">3\n                    </label>\n                </fieldset>\n\n                <div class=\"form-group\">\n                    <label>Selects</label>\n                    <select class=\"form-control\">\n                        <option>1</option>\n                        <option>2</option>\n                        <option>3</option>\n                        <option>4</option>\n                        <option>5</option>\n                    </select>\n                </div>\n\n                <fieldset class=\"form-group\">\n                    <label>Multiple Selects</label>\n                    <select multiple=\"\" class=\"form-control\">\n                        <option>1</option>\n                        <option>2</option>\n                        <option>3</option>\n                        <option>4</option>\n                        <option>5</option>\n                    </select>\n                </fieldset>\n\n                <button type=\"submit\" class=\"btn btn-secondary\">Submit Button</button>\n                <button type=\"reset\" class=\"btn btn-secondary\">Reset Button</button>\n\n            </form>\n\n        </div>\n        <div class=\"col-lg-6\">\n            <h4>Disabled Form States</h4>\n\n            <form role=\"form\">\n\n                <fieldset disabled=\"\">\n\n                    <div class=\"form-group\">\n                        <label for=\"disabledSelect\">Disabled input</label>\n                        <input class=\"form-control\" id=\"disabledInput\" type=\"text\" placeholder=\"Disabled input\" disabled=\"\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"disabledSelect\">Disabled select menu</label>\n                        <select id=\"disabledSelect\" class=\"form-control\">\n                            <option>Disabled select</option>\n                        </select>\n                    </div>\n\n                    <div class=\"checkbox\">\n                        <label>\n                            <input type=\"checkbox\"> Disabled Checkbox\n                        </label>\n                    </div>\n\n                    <button type=\"submit\" class=\"btn btn-primary\">Disabled Button</button>\n\n                </fieldset>\n\n            </form>\n            <br>\n\n            <h4>Form Validation</h4>\n\n            <form role=\"form\">\n\n                <div class=\"form-group has-success\">\n                    <label class=\"form-control-label\" for=\"inputSuccess\">Input with success</label>\n                    <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess\">\n                </div>\n\n                <div class=\"form-group has-warning\">\n                    <label class=\"form-control-label\" for=\"inputWarning\">Input with warning</label>\n                    <input type=\"text\" class=\"form-control form-control-warning\" id=\"inputWarning\">\n                </div>\n\n                <div class=\"form-group has-danger\">\n                    <label class=\"form-control-label\" for=\"inputError\">Input with danger</label>\n                    <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputError\">\n                </div>\n\n            </form>\n\n            <h4>Input Groups</h4>\n\n            <form role=\"form\">\n\n                <div class=\"form-group input-group\">\n                    <span class=\"input-group-addon\">@</span>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n                </div>\n\n                <div class=\"form-group input-group\">\n                    <input type=\"text\" class=\"form-control\">\n                    <span class=\"input-group-addon\">.00</span>\n                </div>\n\n                <div class=\"form-group input-group\">\n                    <span class=\"input-group-addon\"><i class=\"fa fa-eur\"></i></span>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Font Awesome Icon\">\n                </div>\n\n                <div class=\"form-group input-group\">\n                    <span class=\"input-group-addon\">$</span>\n                    <input type=\"text\" class=\"form-control\">\n                    <span class=\"input-group-addon\">.00</span>\n                </div>\n\n                <div class=\"form-group input-group\">\n                    <input type=\"text\" class=\"form-control\">\n                    <span class=\"input-group-btn\"><button class=\"btn btn-secondary\" type=\"button\"><i class=\"fa fa-search\"></i></button></span>\n                </div>\n\n            </form>\n\n            <p>For complete documentation, please visit <a target=\"_blank\" href=\"http://v4-alpha.getbootstrap.com/components/forms/\">Bootstrap's Form Documentation</a>.</p>\n\n        </div>\n    </div>\n    <!-- /.row -->\n\n</div>"

/***/ }),

/***/ 927:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <!-- Page Heading -->\n    <div class=\"row\">\n        <div class=\"col-xl-12\">\n            <h2 class=\"page-header\">\n                Bootstrap Grid\n            </h2>\n            <ol class=\"breadcrumb\">\n                <li>\n                    <i class=\"fa fa-dashboard\"></i>  <a href=\"Javascript:void(0)\" routerLink=\"/dashboard/home\">Dashboard</a>\n                </li>\n                <li class=\"active\">\n                    <i class=\"fa fa-wrench\"></i> Bootstrap Grid\n                </li>\n            </ol>\n        </div>\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n        <div class=\"col-xl-12 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-12\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n        <div class=\"col-xl-6 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-6\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-6 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-6\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n        <div class=\"col-xl-4 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-4\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-4 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-4\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-4 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-4\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n        <div class=\"col-xl-3 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-3\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-3 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-3\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-3 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-3\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-3 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-3\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n        <div class=\"col-xl-2 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-2\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-2 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-2\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-2 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-2\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-2 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-2\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-2 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-2\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-2 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-2\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n        <div class=\"col-xl-1 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-1\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-1 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-1\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-1 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-1\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-1 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-1\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-1 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-1\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-1 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-1\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-1 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-1\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-1 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-1\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-1 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-1\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-1 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-1\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-1 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-1\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-1 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-1\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n        <div class=\"col-xl-8 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-8\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-4 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-4\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n        <div class=\"col-xl-3 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-3\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-6 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-6\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-3 text-xs-center\">\n            <div class=\"card card-default\">\n                <div class=\"card-block\">\n                    .col-xl-3\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.row -->\n\n</div>"

/***/ }),

/***/ 928:
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-panel card card-default\">\n    <div class=\"card-header\">\n        <i class=\"fa fa-comments fa-fw\"></i>\n        Chat\n        <div class=\" pull-right\" dropdown>\n            <button id=\"chat-dropdown\" type=\"button\" class=\"btn btn-secondary btn-sm\" dropdownToggle [disabled]=\"disabled\">\n                <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"chat-dropdown\">\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fa fa-refresh fa-fw\"></i> Refresh</a>\n                </li>\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fa fa-check-circle fa-fw\"></i> Available</a>\n                </li>\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fa fa-times fa-fw\"></i> Busy</a>\n                </li>\n                <li class=\"divider dropdown-divider\"></li>\n                <li role=\"menuitem\">\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <i class=\"fa fa-times fa-fw\"></i> Busy\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <i class=\"fa fa-clock-o fa-fw\"></i> Away\n                    </a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                  <a href=\"#\" class=\"dropdown-item\">\n                    <i class=\"fa fa-sign-out fa-fw\"></i> Sign Out\n                  </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <!-- /.panel-heading -->\n    <div class=\"card-block\">\n    <ul class=\"chat\">\n      <li class=\"left clearfix\">\n                <span class=\"chat-img pull-left\">\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n        <div class=\"chat-body clearfix\">\n          <div class=\"header\">\n            <strong class=\"primary-font\">Jack Sparrow</strong>\n            <small class=\"pull-right text-muted\">\n              <i class=\"fa fa-clock-o fa-fw\"></i> 12 mins ago\n            </small>\n          </div>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n          </p>\n        </div>\n      </li>\n      <li class=\"right clearfix\">\n                <span class=\"chat-img pull-right\">\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n        <div class=\"chat-body clearfix\">\n          <div class=\"header\">\n            <small class=\" text-muted\">\n              <i class=\"fa fa-clock-o fa-fw\"></i> 13 mins ago</small>\n            <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n          </div>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n          </p>\n        </div>\n      </li>\n      <li class=\"left clearfix\">\n                <span class=\"chat-img pull-left\">\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n        <div class=\"chat-body clearfix\">\n          <div class=\"header\">\n            <strong class=\"primary-font\">Jack Sparrow</strong>\n            <small class=\"pull-right text-muted\">\n              <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago</small>\n          </div>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n          </p>\n        </div>\n      </li>\n      <li class=\"right clearfix\">\n                <span class=\"chat-img pull-right\">\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n        <div class=\"chat-body clearfix\">\n          <div class=\"header\">\n            <small class=\" text-muted\">\n              <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago</small>\n            <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n          </div>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n          </p>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <!-- /.card-body -->\n    <div class=\"card-footer\">\n        <div class=\"input-group\">\n            <input id=\"btn-input\" type=\"text\" class=\"form-control input-sm\" placeholder=\"Type your message here...\">\n            <span class=\"input-group-btn\">\n                <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\n                    Send\n                </button>\n            </span>\n        </div>\n    </div>\n  <!-- /.card-footer -->\n</div>\n"

/***/ }),

/***/ 929:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h2 class=\"text-muted\">Dashboard <small>Statistics Overview</small></h2>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <carousel [interval]=\"myInterval\" [noWrap]=\"noWrapSlides\">\n                <slide *ngFor=\"let slidez of slides;let index=index\" [active]=\"slidez.active\">\n                    <img [src]=\"slidez.image\">\n                    <div class=\"carousel-caption\">\n                        <h4>Slide {{index}}</h4>\n                        <p>{{slidez.text}}</p>\n                    </div>\n                </slide>\n                <i class=\"fa fa-chevron-left left carousel-control\"></i>\n                <i class=\"fa fa-chevron-right right carousel-control\"></i>\n            </carousel>\n        </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-6\">\n            <div class=\"card card-primary card-inverse\">\n                <div class=\"card-header card-primary\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-3\">\n                            <i class=\"fa fa-comments fa-5x\"></i>\n                        </div>\n                        <div class=\"col-xs-9 text-xs-right\">\n                            <div class=\"huge\">26</div>\n                            <div>New Comments!</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-footer card-default\">\n                    <a href=\"javascript:;\">\n                        <span class=\"pull-xs-left\">View Details</span>\n                        <span class=\"pull-xs-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                        <div class=\"clearfix\"></div>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n            <div class=\"card card-success card-inverse\">\n                <div class=\"card-header card-success\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-3\">\n                            <i class=\"fa fa-tasks fa-5x\"></i>\n                        </div>\n                        <div class=\"col-xs-9 text-xs-right\">\n                            <div class=\"huge\">12</div>\n                            <div>New Tasks!</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-footer card-green\">\n                    <a class=\"text-success\" href=\"javascript:void(0);\">\n                        <span class=\"pull-xs-left\">View Details</span>\n                        <span class=\"pull-xs-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                        <div class=\"clearfix\"></div>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n            <div class=\"card card-warning card-inverse\">\n                <div class=\"card-header card-warning\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-3\">\n                            <i class=\"fa fa-shopping-cart fa-5x\"></i>\n                        </div>\n                        <div class=\"col-xs-9 text-xs-right\">\n                            <div class=\"huge\">124</div>\n                            <div>New Orders!</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-footer card-yellow\">\n                    <a  class=\"text-warning\" href=\"javascript:void(0);\">\n                        <span class=\"pull-xs-left\">View Details</span>\n                        <span class=\"pull-xs-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                        <div class=\"clearfix\"></div>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n            <div class=\"card card-danger card-inverse\">\n                <div class=\"card-header card-danger\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-3\">\n                            <i class=\"fa fa-support fa-5x\"></i>\n                        </div>\n                        <div class=\"col-xs-9 text-xs-right\">\n                            <div class=\"huge\">13</div>\n                            <div>Support Tickets!</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-footer card-red\">\n                    <a class=\"text-danger\" href=\"javascript:void(0);\">\n                        <span class=\"pull-xs-left\">View Details</span>\n                        <span class=\"pull-xs-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                        <div class=\"clearfix\"></div>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <alert *ngFor=\"let alert of alerts; let i = index\" [type]=\"alert.type\" dismissible=\"true\" (close)=\"closeAlert(i)\">\n        {{ alert?.msg }}\n    </alert>\n    <div class=\"row\">\n        <div class=\"col-lg-8\">\n        <div class=\"card card-default\">\n        <div class=\"card-header\">\n                    <i class=\"fa fa-clock-o fa-fw\"></i> Responsive Timeline\n                </div>\n                <!-- /.card-header -->\n                <timeline-cmp></timeline-cmp>\n                <!-- /.card-body -->\n            </div>\n            <!-- /.card -->\n        </div>\n        <!-- /.col-lg-8 -->\n        <div class=\"col-lg-4\">\n        <div class=\"card card-default\">\n        <div class=\"card-header\">\n        <i class=\"fa fa-bell fa-fw\"></i> Notifications card\n                </div>\n                <!-- /.card-header -->\n                <notifications-cmp></notifications-cmp>\n                <!-- /.card-body -->\n            </div>\n            <!-- /.card -->\n\n            <chat-cmp></chat-cmp>\n            <!-- /.card .chat-card -->\n        </div>\n        <!-- /.col-lg-4 -->\n    </div>\n\n</div>\n"

/***/ }),

/***/ 930:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-body\">\n  <div class=\"list-group\">\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-comment fa-fw\"></i> New Comment\n            <span class=\"pull-right text-muted small\"><em>4 minutes ago</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\n            <span class=\"pull-right text-muted small\"><em>12 minutes ago</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-envelope fa-fw\"></i> Message Sent\n            <span class=\"pull-right text-muted small\"><em>27 minutes ago</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-tasks fa-fw\"></i> New Task\n            <span class=\"pull-right text-muted small\"><em>43 minutes ago</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\n            <span class=\"pull-right text-muted small\"><em>11:32 AM</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-bolt fa-fw\"></i> Server Crashed!\n            <span class=\"pull-right text-muted small\"><em>11:13 AM</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-warning fa-fw\"></i> Server Not Responding\n            <span class=\"pull-right text-muted small\"><em>10:57 AM</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\n            <span class=\"pull-right text-muted small\"><em>9:49 AM</em>\n            </span>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n      <i class=\"fa fa-money fa-fw\"></i> Payment Received\n            <span class=\"pull-right text-muted small\"><em>Yesterday</em>\n            </span>\n    </a>\n  </div>\n  <!-- /.list-group -->\n  <a href=\"#\" class=\"btn btn-default btn-block\">View All Alerts</a>\n</div>\n"

/***/ }),

/***/ 931:
/***/ (function(module, exports) {

module.exports = "<div class=\"card-block\">\n  <ul class=\"timeline\">\n    <li>\n      <div class=\"timeline-badge\"><i class=\"fa fa-check\"></i>\n      </div>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n          <p><small class=\"text-muted\"><i class=\"fa fa-clock-o\"></i> 11 hours ago via Twitter</small>\n          </p>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas suscipit facere rem dicta, debitis.</p>\n        </div>\n      </div>\n    </li>\n    <li class=\"timeline-inverted\">\n      <div class=\"timeline-badge warning\"><i class=\"fa fa-credit-card\"></i>\n      </div>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis alias, officia repellendus.</p>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.</p>\n        </div>\n      </div>\n    </li>\n    <li>\n      <div class=\"timeline-badge danger\"><i class=\"fa fa-bomb\"></i>\n      </div>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.</p>\n        </div>\n      </div>\n    </li>\n    <li class=\"timeline-inverted\">\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus libero, omnis ut debitis!</p>\n        </div>\n      </div>\n    </li>\n    <li>\n      <div class=\"timeline-badge info\"><i class=\"fa fa-save\"></i>\n      </div>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla qui! Laborum, atque.</p>\n          <hr>\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-gear\"></i>  <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\" role=\"menu\">\n              <li><a href=\"#\">Action</a>\n              </li>\n              <li><a href=\"#\">Another action</a>\n              </li>\n              <li><a href=\"#\">Something else here</a>\n              </li>\n              <li class=\"divider\"></li>\n              <li><a href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </li>\n    <li>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga odio quibusdam. Iure expedita, incidunt unde quis nam! Quod, quisquam. Officia quam qui adipisci quas consequuntur nostrum sequi. Consequuntur, commodi.</p>\n        </div>\n      </div>\n    </li>\n    <li class=\"timeline-inverted\">\n      <div class=\"timeline-badge success\"><i class=\"fa fa-graduation-cap\"></i>\n      </div>\n      <div class=\"timeline-panel\">\n        <div class=\"timeline-heading\">\n          <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n        </div>\n        <div class=\"timeline-body\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam, enim incidunt quisquam maxime neque eaque.</p>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 932:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <!-- Page Heading -->\n    <div class=\"row\">\n        <div class=\"col-xl-12\">\n            <h2 class=\"page-header\">\n                Result\n            </h2>\n            <ol class=\"breadcrumb\">\n                <li>\n                    <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0);\" routerLink=\"/dashboard/home\">Dashboard</a>\n                </li>\n                <li class=\"active\">\n                    <i class=\"fa fa-list-ol\"></i> Result\n                </li>\n            </ol>\n            <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"error\">\n                {{error}}\n            </div>\n            <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"message\">\n                {{message}}\n            </div>\n        </div>\n    </div>\n    <div class=\"row\" layout-align=\"center center\">\n        <div class=\"col-md-12\">\n            <form id=\"eventRegForm\" class=\"form-horizontal\" (ngSubmit)=\"getResult()\">\n                <div class=\"col-sm-5\">\n                    <div>\n                        <input [(ngModel)]=\"selectedEvent\" name=\"selectedEvent\" ng2-auto-complete [source]=\"eventList\" [list-formatter]=\"autocompleListFormatter\" value-property-name=\"id\" display-property-name=\"name\" placeholder=\"Event/Workshop Name\" class=\"form-control\">\n                    </div>\n                </div>\n                <button type=\"submit\" class=\"btn btn-default\" form=\"eventRegForm\" value=\"Submit\">Search</button>\n            </form>\n        </div>\n    </div>\n    <br/>\n    <div class=\"row\" *ngIf=\"!showAddResult\">\n        <div class=\"col-md-12\">\n            <button *ngIf=\"results\" (click)=\"showAddResult=true\" class=\"btn btn-info\">Add Result</button>\n        </div>\n    </div>\n    <div class=\"row\" *ngIf=\"showAddResult\">\n        <div class=\"col-md-12\">\n\n            <form role=\"form\" (submit)=\"putResult()\">\n                <fieldset class=\"form-group\">\n                    <label>Position (1,2 or 3)</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"position\" name=\"name\" />\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Student Email / Phone No</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"identifier\" name=\"identifier\" />\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Points</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"points\" name=\"points\" />\n                </fieldset>\n                <button type=\"submit\" role=\"button\" class=\"btn btn-info\">Save</button>\n            </form>\n\n\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div *ngIf=\"results\">\n                <table class=\"table\">\n                    <thead class=\"thead-inverse\">\n                        <tr>\n                            <th>Position</th>\n                            <th>Name</th>\n                            <th>College</th>\n                            <th>Points</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let result of results\">\n                            <td>{{result.position}}</td>\n                            <td>{{result.student.name}}</td>\n                            <td>{{result.college.name}}</td>\n                            <td>{{result.points}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 933:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <!-- Page Heading -->\n    <div class=\"row\">\n        <div class=\"col-xl-12\">\n            <h2 class=\"page-header\">\n                Students\n            </h2>\n            <ol class=\"breadcrumb\">\n                <li>\n                    <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0);\" routerLink=\"/dashboard/home\">Dashboard</a>\n                </li>\n                <li class=\"active\">\n                    <i class=\"fa fa-user\"></i> Students\n                </li>\n            </ol>\n            <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"error\">\n                {{error}}\n            </div>\n            <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"message\">\n                {{message}}\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <data-table [items]=\"students\" [itemCount]=\"students.length\" (reload)=\"reloadStudents()\" [pagination]=\"true\" [indexColumn]=\"false\" [multiSelect]=\"true\">\n                <data-table-column property=\"name\" header=\"Name\" sortable=\"true\">\n                </data-table-column>\n                <data-table-column property=\"picture\" header=\"Picture\" width=\"100px\">\n                    <template #dataTableCell let-item=\"item\">\n                        <img *ngIf=\"item.picture\" class=\"img-thumbnail\" [src]=\"item.picture\" />\n                    </template>\n                </data-table-column>\n                <data-table-column property=\"college\" header=\"College\">\n                </data-table-column>\n                <data-table-column property=\"score\" header=\"Score\">\n                </data-table-column>\n                <data-table-column property=\"accomodation\" header=\"Accomodation\">\n                </data-table-column>\n                <data-table-column header=\"Actions\" width=\"120px\">\n                    <template #dataTableCell let-item=\"item\">\n                        <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"view(item.id)\"><i class=\"fa fa-pencil\"></i> Edit</button>\n                    </template>\n                </data-table-column>\n            </data-table>\n        </div>\n    </div>\n    <div class=\"row\" *ngIf=\"student\">\n        <div class=\"col-lg-6\">\n            <br/>\n            <br/>\n            <form role=\"form\" (submit)=\"save()\">\n                <fieldset class=\"form-group\">\n                    <label>Name</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"student.name\" name=\"name\" />\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Phone</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"student.phone\" name=\"phone\" />\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>College</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"student.college\" name=\"college\" disabled=\"true\" />\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Accomodation</label>\n                    <select class=\"form-control\" id=\"exampleSelect1\" [(ngModel)]=\"student.accomodation\" name=\"accomodation\" (change)=\"student.accomodation=$event.target.value\">\n                        <option value=\"none\">None</option>\n                        <option value=\"male\">Male Accomodation</option>\n                        <option value=\"female\">Female Accomodation</option>\n                    </select>\n                </fieldset>\n                <br/>\n                <button class=\"btn btn-info\" type=\"submit\" role=\"input\">\n                    <i class=\"fa fa-save\"></i> Save\n                </button>\n            </form>\n        </div>\n        <div class=\"col-lg-6\" *ngIf=\"false\">\n            <br/>\n            <br/>\n            <h5>Event Coordinators</h5>\n            <br/>\n            <ul class=\"list-group\">\n                <li class=\"list-group-item event-admins\" *ngFor=\"let admin of event.admins\">{{admin.name}}<i class=\"fa fa-close\" (click)=\"deleteAdmin(admin)\"></i></li>\n            </ul>\n            <br/>\n            <div class=\"row\">\n                <div class=\"col-xs-8\">\n                    <fieldset>\n                        <div class=\"form-group\">\n                            <label for=\"exampleSelect2\">Add Admin</label>\n                            <select class=\"form-control\" id=\"exampleSelect2\" [(ngModel)]=\"eventAdmin\" (change)=\"eventAdmin=$event.target.value\" name=\"eventAdmin\">\n                                <option *ngFor=\"let admin of event.allAdmins\" [value]=\"admin.id\">{{admin.name}}</option>\n                            </select>\n                        </div>\n                    </fieldset>\n                </div>\n                <div class=\"col-xs-4\">\n                    <button class=\"btn btn-primary add-button\" (click)=\"addEventAdmin(eventAdmin)\">Add</button>\n                </div>\n            </div>\n            <br/>\n            <button class=\"btn btn-info\" (click)=\"saveEventAdmins()\"><i class=\"fa fa-save\"></i> Save</button>\n        </div>\n    </div>\n"

/***/ }),

/***/ 934:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <!-- Page Heading -->\n    <div class=\"row\">\n        <div class=\"col-xl-12\">\n            <h2 class=\"page-header\">\n                Tables\n            </h2>\n            <ol class=\"breadcrumb\">\n                <li>\n                    <i class=\"fa fa-dashboard\"></i>  <a href=\"Javascript:void(0);\" routerLink=\"/dashboard/home\">Dashboard</a>\n                </li>\n                <li class=\"active\">\n                    <i class=\"fa fa-table\"></i> Tables\n                </li>\n            </ol>\n        </div>\n    </div>\n    <!-- /.row -->\n    <div class=\"row\">\n        <div class=\"col-xl-6 col-lg-12\">\n            <h4>Basic example</h4>\n            <div class=\"card card-block\">\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@mdo</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Jacob</td>\n                                <td>Thornton</td>\n                                <td>@fat</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td>Larry</td>\n                                <td>the Bird</td>\n                                <td>@twitter</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <h4>Table head options</h4>\n            <div class=\"card card-block\">\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead class=\"thead-inverse\">\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@mdo</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Jacob</td>\n                                <td>Thornton</td>\n                                <td>@fat</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td>Larry</td>\n                                <td>the Bird</td>\n                                <td>@twitter</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <table class=\"table\">\n                        <thead class=\"thead-default\">\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@mdo</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Jacob</td>\n                                <td>Thornton</td>\n                                <td>@fat</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td>Larry</td>\n                                <td>the Bird</td>\n                                <td>@twitter</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <h4>Bordered table</h4>\n            <div class=\"card card-block\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-bordered\">\n                        <thead>\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@mdo</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@TwBootstrap</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td>Jacob</td>\n                                <td>Thornton</td>\n                                <td>@fat</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">4</th>\n                                <td colspan=\"2\">Larry the Bird</td>\n                                <td>@twitter</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <h4>Small table</h4>\n            <div class=\"card card-block\">\n                <table class=\"table table-sm\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>First Name</th>\n                            <th>Last Name</th>\n                            <th>Username</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td>Mark</td>\n                            <td>Otto</td>\n                            <td>@mdo</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                            <td>Jacob</td>\n                            <td>Thornton</td>\n                            <td>@fat</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                            <td colspan=\"2\">Larry the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <div class=\"col-xl-6 col-lg-12\">\n            <h4>Inverse table</h4>\n            <div class=\"card card-block\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-inverse\">\n                        <thead>\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@mdo</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Jacob</td>\n                                <td>Thornton</td>\n                                <td>@fat</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td>Larry</td>\n                                <td>the Bird</td>\n                                <td>@twitter</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <h4>Striped Rows</h4>\n            <div class=\"card card-block\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-hover table-striped\">\n                        <thead>\n                            <tr>\n                                <th>Page</th>\n                                <th>Visits</th>\n                                <th>% New Visits</th>\n                                <th>Revenue</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>/index.html</td>\n                                <td>1265</td>\n                                <td>32.3%</td>\n                                <td>$321.33</td>\n                            </tr>\n                            <tr>\n                                <td>/about.html</td>\n                                <td>261</td>\n                                <td>33.3%</td>\n                                <td>$234.12</td>\n                            </tr>\n                            <tr>\n                                <td>/sales.html</td>\n                                <td>665</td>\n                                <td>21.3%</td>\n                                <td>$16.34</td>\n                            </tr>\n                            <tr>\n                                <td>/blog.html</td>\n                                <td>9516</td>\n                                <td>89.3%</td>\n                                <td>$1644.43</td>\n                            </tr>\n                            <tr>\n                                <td>/404.html</td>\n                                <td>23</td>\n                                <td>34.3%</td>\n                                <td>$23.52</td>\n                            </tr>\n                            <tr>\n                                <td>/services.html</td>\n                                <td>421</td>\n                                <td>60.3%</td>\n                                <td>$724.32</td>\n                            </tr>\n                            <tr>\n                                <td>/blog/post.html</td>\n                                <td>1233</td>\n                                <td>93.2%</td>\n                                <td>$126.34</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <h4>Hoverable rows</h4>\n            <div class=\"card card-block\">\n                <table class=\"table table-hover\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>First Name</th>\n                            <th>Last Name</th>\n                            <th>Username</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td>Mark</td>\n                            <td>Otto</td>\n                            <td>@mdo</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                            <td>Jacob</td>\n                            <td>Thornton</td>\n                            <td>@fat</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                            <td colspan=\"2\">Larry the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <h4>Contextual classes</h4>\n            <div class=\"card card-block\">\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>First Name</th>\n                            <th>Last Name</th>\n                            <th>Username</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr class=\"table-active\">\n                            <th scope=\"row\">1</th>\n                            <td>Mark</td>\n                            <td>Otto</td>\n                            <td>@mdo</td>\n                        </tr>\n                        <tr class=\"table-success\">\n                            <th scope=\"row\">2</th>\n                            <td>Jacob</td>\n                            <td>Thornton</td>\n                            <td>@fat</td>\n                        </tr>\n                        <tr class=\"table-info\">\n                            <th scope=\"row\">3</th>\n                            <td>Larry</td>\n                            <td>the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                        <tr class=\"table-warning\">\n                            <th scope=\"row\">3</th>\n                            <td>Larry</td>\n                            <td>the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                        <tr class=\"table-danger\">\n                            <th scope=\"row\">3</th>\n                            <td>Larry</td>\n                            <td>the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 935:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <!-- Page Heading -->\n    <div class=\"row\">\n        <div class=\"col-xl-12\">\n            <h2 class=\"page-header\">\n                Registration Desk\n            </h2>\n            <ol class=\"breadcrumb\">\n                <li>\n                    <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0);\" routerLink=\"/dashboard/home\">Dashboard</a>\n                </li>\n                <li class=\"active\">\n                    <i class=\"fa fa-check\"></i> Registration Desk\n                </li>\n            </ol>\n            <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"error\">\n                {{error}}\n            </div>\n            <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"message\">\n                {{message}}\n            </div>\n        </div>\n    </div>\n    <div class=\"row\" layout-align=\"center center\">\n        <form role=\"form\" (submit)=\"emailEntered()\">\n            <div class=\"col-lg-6\">\n                <fieldset class=\"form-group\">\n                    <label>Email Id</label>\n                    <input class=\"form-control\" [(ngModel)]=\"student.email\" name=\"email\"placeholder=\"Email Id\">\n                </fieldset>\n                <button type=\"submit\" class=\"btn btn-secondary\">Get Details</button>\n            </div>\n        </form>\n    </div>\n    <div class=\"mt-2\"> \n      <ul class=\"list-group\">\n        <div *ngFor=\"let event of registeredEvents\" class=\"row list-group-item\">\n            <span>{{event.name}}</span>\n            <button type=\"button\" class=\"btn btn-primary pull-right\">Confirm Payment</button>\n        </div>\n      </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ 936:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <!-- Page Heading -->\n    <div class=\"row\">\n        <div class=\"col-xl-12\">\n            <h2 class=\"page-header\">\n                Workshops\n            </h2>\n            <ol class=\"breadcrumb\">\n                <li>\n                    <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0);\" routerLink=\"/dashboard/home\">Dashboard</a>\n                </li>\n                <li class=\"active\">\n                    <i class=\"fa fa-television\"></i> Workshops\n                </li>\n            </ol>\n            <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"error\">\n                {{error}}\n            </div>\n            <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"message\">\n                {{message}}\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <button class=\"btn btn-primary\" (click)=\"workshop={group:0,category:'GEN'}\">Add new workshop</button>\n            <data-table [items]=\"workshops\" [itemCount]=\"workshops.length\" (reload)=\"reloadWorkshops()\" [pagination]=\"true\" [indexColumn]=\"false\" [multiSelect]=\"true\">\n                <data-table-column property=\"name\" header=\"Name\" sortable=\"true\">\n                </data-table-column>\n                <data-table-column property=\"image\" header=\"Image\" width=\"100px\">\n                    <template #dataTableCell let-item=\"item\">\n                        <img *ngIf=\"item.image\" class=\"img-thumbnail\" [src]=\"item.image\" />\n                    </template>\n                </data-table-column>\n                <data-table-column header=\"Category\">\n                    <template #dataTableCell let-item=\"item\">\n                        {{category[item.category]}}\n                    </template>\n                    <data-table-column header=\"Total Prize\">\n                        <template #dataTableCell let-item=\"item\">\n                            {{item.prize1+item.prize2+item.prize3}}\n                        </template>\n                    </data-table-column>\n                </data-table-column>\n                <data-table-column property=\"regFee\" header=\"Reg Fee\" sortable=\"true\">\n                </data-table-column>\n                <data-table-column property=\"day\" header=\"Day\" sortable=\"true\">\n                </data-table-column>\n                <data-table-column header=\"Workshop Type\" width=\"120px\" sortable=\"true\">\n                    <template #dataTableCell let-item=\"item\">\n                        {{item.group==1?'Group':'Individual'}}\n                    </template>\n                </data-table-column>\n                <data-table-column header=\"Actions\" width=\"120px\">\n                    <template #dataTableCell let-item=\"item\">\n                        <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"view(item.id)\"><i class=\"fa fa-pencil\"></i> Edit</button>\n                    </template>\n                </data-table-column>\n            </data-table>\n        </div>\n    </div>\n    <div class=\"row\" *ngIf=\"workshop\">\n        <div class=\"col-lg-12\">\n            <br/>\n            <br/>\n            <form role=\"form\" (submit)=\"save()\">\n                <fieldset class=\"form-group\">\n                    <label>Name</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"workshop.name\" name=\"name\" />\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Description</label>\n                    <ckeditor [(ngModel)]=\"workshop.description\" name=\"description\" debounce=\"500\">\n                    </ckeditor>\n                </fieldset>\n                <!--<fieldset class=\"form-group\">\n                    <label>Workshop Format (Rules)</label>\n                    <ckeditor [(ngModel)]=\"workshop.format\" name=\"format\" debounce=\"500\">\n                    </ckeditor>\n                </fieldset>-->\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label for=\"exampleSelect3\">Category</label>\n                        <select class=\"form-control\" id=\"exampleSelect3\" [(ngModel)]=\"workshop.category\" name=\"category\" (change)=\"workshop.category = $event.target.value\">\n                            <option *ngFor=\"let cat of categoryArray\" [value]=\"cat[0]\">{{cat[1]}}</option>\n                        </select>\n                    </div>\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>workshop Image</label>\n                    <img [src]=\"workshop.image\" *ngIf=\"workshop.image\" class=\"img-thumbnail img-workshop\" />\n                    <input type=\"file\" class=\"form-control\" (change)=\"fileChange($event)\" name=\"image\" />\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Registration Fee</label>\n                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"workshop.regFee\" name=\"regFee\" />\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>First Prize</label>\n                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"workshop.prize1\" name=\"prize1\" />\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Second Prize</label>\n                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"workshop.prize2\" name=\"prize2\" />\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Third Prize</label>\n                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"workshop.prize3\" name=\"prize3\" />\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Schedule</label>\n                    <input type=\"number\" [(ngModel)]=\"workshop.day\" name=\"day\" placeholder=\"day (1, 2 or 3)\" class=\"form-control\" />\n                    <input type=\"time\" [(ngModel)]=\"workshop.time\" name=\"time\" placeholder=\"time\" class=\"form-control\" />\n                </fieldset>\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label for=\"exampleSelect1\">Participation Type</label>\n                        <select class=\"form-control\" id=\"exampleSelect1\" [(ngModel)]=\"workshop.group\" name=\"group\" (change)=\"workshop.group = $event.target.value\">\n                            <option value=\"0\">Individual workshop</option>\n                            <option value=\"1\">Group workshop</option>\n                        </select>\n                    </div>\n                </fieldset>\n                <fieldset class=\"form-group\" *ngIf=\"workshop.group==1\">\n                    <label>Maxmimum members per group</label>\n                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"workshop.maxPerGroup\" name=\"maxGroups\" />\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Contact 1</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"workshop.contactName1\" name=\"contactName1\" placeholder=\"Name\" />\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"workshop.contactPhone1\" name=\"contactPhone1\" placeholder=\"Phone\" />\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"workshop.contactEmail1\" name=\"contactEmail1\" placeholder=\"Email\" />\n                </fieldset>\n                <fieldset class=\"form-group\">\n                    <label>Contact 2</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"workshop.contactName2\" name=\"contactName2\" placeholder=\"Name\" />\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"workshop.contactPhone2\" name=\"contactPhone2\" placeholder=\"Phone\" />\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"workshop.contactEmail2\" name=\"contactEmail2\" placeholder=\"Email\" />\n                </fieldset>\n                <br/>\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label for=\"exampleSelect2\">workshop Coordinator</label>\n                        <select class=\"form-control\" id=\"exampleSelect2\" [(ngModel)]=\"workshop.adminId\" (change)=\"workshopAdmin=$event.target.value\" name=\"workshopAdmin\">\n                            <option *ngFor=\"let admin of allAdmins\" [value]=\"admin.id\">{{admin.name}}</option>\n                        </select>\n                    </div>\n                </fieldset>\n                <button class=\"btn btn-info\" type=\"submit\" role=\"input\">\n                    <i class=\"fa fa-save\"></i> Save\n                </button>\n            </form>\n        </div>\n    </div>\n"

/***/ }),

/***/ 937:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n    <div class=\"row\">\n        <div class=\"col-lg-4 col-lg-offset-4\">\n            <img src=\"assets/img/SB-admin.png\" width=\"150px\" class=\"user-avatar\" />\n            <h1>DCMS Admin 1.0</h1>\n            <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"error\">\n                {{error}}\n            </div>\n            <br/>\n            <h6>Login using</h6>\n            <br/>\n            <a class=\"btn rounded-btn fa fa-google google-login\" (click)=\"login('google')\"> Google </a>\n            <a class=\"btn rounded-btn fa fa-facebook facebook-login\" (click)=\"login('facebook')\"> Facebook </a>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 938:
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-default\" id=\"toggle-sidebar\" type=\"button\" (click)=\"eventCalled()\">\n    &#9776;\n</button>\n<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive}\">\n    <ul class=\"list-group\">\n        <a routerLink=\"/dashboard/home\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-dashboard\"></i> Dashboard\n        </a>\n        <a [routerLink]=\"['admins']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-user\"></i> Admins\n        </a>\n        <a [routerLink]=\"['events']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-television\"></i> Events\n        </a>\n        <a [routerLink]=\"['result']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-list-ol\"></i> Result\n        </a>\n        <a [routerLink]=\"['eventRegistration']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-list\"></i> Registration\n        </a>\n        <a [routerLink]=\"['workshops']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-television\"></i> Workshops\n        </a>\n        <a [routerLink]=\"['students']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-user\"></i> Students\n        </a>\n        <a [routerLink]=\"['accomodation']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-building\"></i> Accomodation\n        </a>\n        <a [routerLink]=\"['volunteer']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-check\"></i> Registration Desk\n        </a>\n        <a [routerLink]=\"['tables']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-table\"></i> Tables\n        </a>\n        <a [routerLink]=\"['forms']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-edit\"></i> Forms\n        </a>\n        <a [routerLink]=\"['element']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-desktop\"></i> Bootstrap Elements\n        </a>\n        <a [routerLink]=\"['grid']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-wrench\"></i> Bootstrap Grid\n        </a>\n        <a [routerLink]=\"['components']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-th-list\"></i> &nbsp;Component\n        </a>\n        <div class=\"nested-menu\">\n            <a class=\"list-group-item\" (click)=\"addExpandClass('pages')\">\n                <span><i class=\"fa fa-plus\"></i> &nbsp; Menu</span>\n            </a>\n            <li class=\"nested\" [ngClass]=\"{'expand' : showMenu === 'pages' }\">\n                <ul class=\"submenu\">\n                    <li>\n                        <a href><span>Submenu</span></a>\n                    </li>\n                    <li>\n                        <a href><span>Submenu</span></a>\n                    </li>\n                </ul>\n            </li>\n        </div>\n        <a [routerLink]=\"['blankpage']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-file-o\"></i> &nbsp;BlankPage\n        </a>\n        <a class=\"list-group-item more-themes\" href=\"http://www.strapui.com/\">\n            More Themes\n        </a>\n    </ul>\n</nav>"

/***/ }),

/***/ 939:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-inverse navbar-fixed-top topnav\">\n    <div class=\"collapse navbar-toggleable-xs clearfix text-center\">\n        <a class=\"navbar-brand\" [routerLink]=\"['/dashboard','/home']\">DCMS Admin 1.0</a>\n        \n        <ul class=\"nav navbar-nav top-nav navbar-right pull-xs-right top-right-nav\">\n<!--             <li class=\"nav-item buy-now\">\n                <a href=\"https://github.com/start-angular/SB-Admin-BS4-Angular-2/archive/master.zip\" class=\"btn btn-default-outline buy-now-btn\" role=\"button\" style=\"padding: .375rem 1rem !important; border-color: #999;\">Download Now</a>\n            </li>\n            <li class=\"dropdown nav-item\" dropdown>\n                    <a class=\"nav-link dropdown-toggle\" href=\"javascript:;\" id=\"dropdownMenu4\" dropdownToggle><i class=\"fa fa-envelope\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span></a>\n                    <ul class=\"dropdown-menu message-dropdown\" aria-labelledby=\"dropdownMenu4\">\n                        <li class=\"message-preview\">\n                            <a href=\"javascript:;\" class=\"dropdown-item\">\n                                <div class=\"media\">\n                                    <span class=\"media-left\">\n                                        <img class=\"media-object\" src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"\">\n                                    </span>\n                                    <div class=\"media-body\">\n                                        <h5 class=\"media-heading\"><strong>John Smith</strong>\n                                        </h5>\n                                        <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                                        <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\n                                    </div>\n                                </div>\n                            </a>\n                        </li>\n                        <hr>\n                        <li class=\"message-preview\">\n                            <a href=\"javascript:;\" class=\"dropdown-item\">\n                                <div class=\"media\">\n                                    <span class=\"media-left\">\n                                        <img class=\"media-object\" src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"\">\n                                    </span>\n                                    <div class=\"media-body\">\n                                        <h5 class=\"media-heading\"><strong>John Smith</strong>\n                                        </h5>\n                                        <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                                        <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\n                                    </div>\n                                </div>\n                            </a>\n                        </li>\n                        <hr>\n                        <li class=\"message-preview\">\n                            <a href=\"javascript:;\" class=\"dropdown-item\">\n                                <div class=\"media\">\n                                    <span class=\"media-left\">\n                                        <img class=\"media-object\" src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"\">\n                                    </span>\n                                    <div class=\"media-body\">\n                                        <h5 class=\"media-heading\"><strong>John Smith</strong>\n                                        </h5>\n                                        <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                                        <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\n                                    </div>\n                                </div>\n                            </a>\n                        </li>\n                        <hr>\n                        <li class=\"dropdown-item message-footer\">\n                            <a href=\"javascript:;\" class=\"dropdown-item text-center\">Read All New Messages</a>\n                        </li>\n                    </ul>\n            </li>\n            <li class=\"dropdown nav-item\" dropdown>\n                    <a href=\"javascript:;\" id=\"name2\" class=\"nav-link dropdown-toggle\" dropdownToggle>\n                        <i class=\"fa fa-bell\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\n                    </a>\n                    <ul class=\"dropdown-menu alert-dropdown\" aria-labelledby=\"name2\">\n                        <li >\n                            <a href=\"javascript:;\" class=\"dropdown-item\">Alert Name <span class=\"label label-default\"> Alert Badge</span></a>\n                        </li>\n                        <li >\n                            <a href=\"javascript:;\" class=\"dropdown-item\">Alert Name <span class=\"label label-default\"> Alert Badge</span></a>\n                        </li>\n                        <li >\n                            <a href=\"javascript:;\" class=\"dropdown-item\">Alert Name <span class=\"label label-default\"> Alert Badge</span></a>\n                        </li>\n                        <li class=\"dropdown-divider\"></li>\n                        <li>\n                            <a href=\"javascript:;\" class=\"dropdown-item\">View All</a>\n                        </li>\n                    </ul>\n            </li> -->\n            <li class=\"dropdown nav-item\" dropdown>\n                <a href=\"javascript:;\" id=\"single-button\" class=\"nav-link dropdown-toggle\" dropdownToggle >\n                    <i class=\"fa fa-user\"></i> &nbsp;{{user.name}} <b class=\"caret\"></b>\n                </a>\n                <ul class=\"dropdown-menu\" aria-labelledby=\"single-button\">\n                    <li>\n                        <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"fa fa-fw fa-user\"></i> Profile</a>\n                    </li>\n                    <li>\n                        <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"fa fa-fw fa-envelope\"></i> Inbox</a>\n                    </li>\n                    <li>\n                        <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"fa fa-fw fa-gear\"></i> Settings</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li>\n                        <a class=\"dropdown-item\" (click)=\"logout()\">\n                            <i class=\"fa fa-fw fa-power-off\"></i> Log Out\n                        </a>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ 940:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-4 col-lg-offset-4\">\n        \t<img src=\"assets/img/SB-admin.png\" width=\"150px;\" class=\"user-avatar\" />\n\t\t\t<h1>SB Admin BS 4 Angular2</h1>\n\t\t\t<form role=\"form\">\n\t\t\t\t<div class=\"form-content\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Full Name\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Email\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Password\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Repeat Password\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<a type=\"submit\" class=\"btn rounded-btn\" routerLink=\"/dashboard/home\"> Register </a>&nbsp;\n\t\t\t\t<a type=\"submit\" class=\"btn rounded-btn\" routerLink=\"/\"> Log in </a>\n\t\t\t</form>\n\t\t</div>\t\n\t</div>\n</div>\n"

/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(542);


/***/ })

},[974]);
//# sourceMappingURL=main.bundle.map