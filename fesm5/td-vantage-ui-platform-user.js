import { Injectable, Optional, SkipSelf, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __extends, __decorate, __param, __metadata } from 'tslib';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TdGET, TdResponse, TdPOST, TdBody, TdPATCH, TdParam, TdDELETE, mixinHttp, TdQueryParams } from '@covalent/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var LDAPEncription = {
    None: 'NONE',
};
/**
 * @record
 */
function ILDAPConfig() { }
if (false) {
    /** @type {?|undefined} */
    ILDAPConfig.prototype.allowed_groups;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.base_dn;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.config_id;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.connectionUrl;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.email_field;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.encryption;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.group_id_field;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.groups_base_dn;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.id_field;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.member_field;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.member_of_field;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.name_field;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.port;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.search_pass;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.search_user;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.server;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.url;
}
var VantageLDAPService = /** @class */ (function (_super) {
    __extends(VantageLDAPService, _super);
    function VantageLDAPService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?=} response
     * @return {?}
     */
    VantageLDAPService.prototype.query = /**
     * @param {?=} response
     * @return {?}
     */
    function (response) {
        return response;
    };
    /**
     * @param {?} body
     * @param {?=} response
     * @return {?}
     */
    VantageLDAPService.prototype.create = /**
     * @param {?} body
     * @param {?=} response
     * @return {?}
     */
    function (body, response) {
        return response;
    };
    /**
     * @param {?} id
     * @param {?} body
     * @param {?=} response
     * @return {?}
     */
    VantageLDAPService.prototype.update = /**
     * @param {?} id
     * @param {?} body
     * @param {?=} response
     * @return {?}
     */
    function (id, body, response) {
        return response;
    };
    /**
     * @param {?} id
     * @param {?=} response
     * @return {?}
     */
    VantageLDAPService.prototype.delete = /**
     * @param {?} id
     * @param {?=} response
     * @return {?}
     */
    function (id, response) {
        return response;
    };
    /**
     * @param {?} body
     * @param {?=} response
     * @return {?}
     */
    VantageLDAPService.prototype.test = /**
     * @param {?} body
     * @param {?=} response
     * @return {?}
     */
    function (body, response) {
        return response.pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return res.status === 200;
        })));
    };
    VantageLDAPService.decorators = [
        { type: Injectable }
    ];
    __decorate([
        TdGET({
            path: '/',
        }),
        __param(0, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Observable]),
        __metadata("design:returntype", Observable)
    ], VantageLDAPService.prototype, "query", null);
    __decorate([
        TdPOST({
            path: '/',
        }),
        __param(0, TdBody()), __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageLDAPService.prototype, "create", null);
    __decorate([
        TdPATCH({
            path: '/:id',
        }),
        __param(0, TdParam('id')),
        __param(1, TdBody()),
        __param(2, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageLDAPService.prototype, "update", null);
    __decorate([
        TdDELETE({
            path: '/:id',
        }),
        __param(0, TdParam('id')), __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageLDAPService.prototype, "delete", null);
    __decorate([
        TdPOST({
            path: '/verify',
            options: {
                observe: 'response',
            },
        }),
        __param(0, TdBody()), __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageLDAPService.prototype, "test", null);
    return VantageLDAPService;
}(mixinHttp(/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}()), {
    baseUrl: '/api/user/ldap/config',
    baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
})));
/**
 * @param {?} parent
 * @return {?}
 */
function VANTAGE_LDAP_PROVIDER_FACTORY(parent) {
    return parent || new VantageLDAPService();
}
/** @type {?} */
var VANTAGE_LDAP_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageLDAPService,
    deps: [[new Optional(), new SkipSelf(), VantageLDAPService]],
    useFactory: VANTAGE_LDAP_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IUser() { }
if (false) {
    /** @type {?|undefined} */
    IUser.prototype.username;
    /** @type {?|undefined} */
    IUser.prototype.password;
    /** @type {?|undefined} */
    IUser.prototype.email;
    /** @type {?|undefined} */
    IUser.prototype.local;
    /** @type {?|undefined} */
    IUser.prototype.admin;
    /** @type {?|undefined} */
    IUser.prototype.groups;
    /** @type {?|undefined} */
    IUser.prototype.display_name;
    /** @type {?|undefined} */
    IUser.prototype.access_token;
    /** @type {?|undefined} */
    IUser.prototype.expires_at;
}
var VantageUserService = /** @class */ (function (_super) {
    __extends(VantageUserService, _super);
    function VantageUserService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * get all users
     */
    /**
     * get all users
     * @param {?=} queryParams
     * @param {?=} response
     * @return {?}
     */
    VantageUserService.prototype.query = /**
     * get all users
     * @param {?=} queryParams
     * @param {?=} response
     * @return {?}
     */
    function (queryParams, response) {
        return response.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return of(error);
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return {
                total: +res.headers.get('X-Total'),
                data: (/** @type {?} */ (res.body)),
            };
        })));
    };
    /**
     * gets a single users information
     */
    /**
     * gets a single users information
     * @param {?} id
     * @param {?=} response
     * @return {?}
     */
    VantageUserService.prototype.get = /**
     * gets a single users information
     * @param {?} id
     * @param {?=} response
     * @return {?}
     */
    function (id, response) {
        return response.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return of(error);
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return res.body;
        })));
    };
    VantageUserService.decorators = [
        { type: Injectable }
    ];
    __decorate([
        TdGET({
            path: '/users',
            options: {
                observe: 'response',
            },
        }),
        __param(0, TdQueryParams()),
        __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HttpParams,
            Observable]),
        __metadata("design:returntype", Observable)
    ], VantageUserService.prototype, "query", null);
    __decorate([
        TdGET({
            path: '/users/:username',
            options: {
                observe: 'response',
            },
        }),
        __param(0, TdParam('username')), __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageUserService.prototype, "get", null);
    return VantageUserService;
}(mixinHttp(/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}()), {
    baseUrl: '/api/user',
    baseHeaders: new HttpHeaders({
        Accept: 'application/json',
    }),
})));
/**
 * @param {?} parent
 * @return {?}
 */
function VANTAGE_USER_PROVIDER_FACTORY(parent) {
    return parent || new VantageUserService();
}
/** @type {?} */
var VANTAGE_USER_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageUserService,
    deps: [[new Optional(), new SkipSelf(), VantageUserService]],
    useFactory: VANTAGE_USER_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IGroup() { }
if (false) {
    /** @type {?|undefined} */
    IGroup.prototype.name;
    /** @type {?|undefined} */
    IGroup.prototype.description;
    /** @type {?|undefined} */
    IGroup.prototype.id;
    /** @type {?|undefined} */
    IGroup.prototype.display_name;
    /** @type {?|undefined} */
    IGroup.prototype.users;
}
var VantageGroupService = /** @class */ (function (_super) {
    __extends(VantageGroupService, _super);
    function VantageGroupService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * get groups in paginated form via query string
     */
    /**
     * get groups in paginated form via query string
     * @param {?=} queryParams
     * @param {?=} response
     * @return {?}
     */
    VantageGroupService.prototype.query = /**
     * get groups in paginated form via query string
     * @param {?=} queryParams
     * @param {?=} response
     * @return {?}
     */
    function (queryParams, response) {
        return response.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return of(error);
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return {
                total: +res.headers.get('X-Total'),
                data: (/** @type {?} */ (res.body)),
            };
        })));
    };
    VantageGroupService.decorators = [
        { type: Injectable }
    ];
    __decorate([
        TdGET({
            path: '/groups',
            options: {
                observe: 'response',
            },
        }),
        __param(0, TdQueryParams()),
        __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HttpParams,
            Observable]),
        __metadata("design:returntype", Observable)
    ], VantageGroupService.prototype, "query", null);
    return VantageGroupService;
}(mixinHttp(/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}()), {
    baseUrl: '/api/user',
    baseHeaders: new HttpHeaders({
        Accept: 'application/json',
    }),
})));
/**
 * @param {?} parent
 * @return {?}
 */
function VANTAGE_GROUP_PROVIDER_FACTORY(parent) {
    return parent || new VantageGroupService();
}
/** @type {?} */
var VANTAGE_GROUP_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageGroupService,
    deps: [[new Optional(), new SkipSelf(), VantageGroupService]],
    useFactory: VANTAGE_GROUP_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VantageUserModule = /** @class */ (function () {
    function VantageUserModule() {
    }
    VantageUserModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    providers: [VANTAGE_LDAP_PROVIDER, VANTAGE_USER_PROVIDER, VANTAGE_GROUP_PROVIDER],
                },] }
    ];
    return VantageUserModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LDAPEncription, VantageGroupService, VantageLDAPService, VantageUserModule, VantageUserService, VANTAGE_LDAP_PROVIDER_FACTORY as ɵa, VANTAGE_LDAP_PROVIDER as ɵb, VANTAGE_GROUP_PROVIDER_FACTORY as ɵc, VANTAGE_GROUP_PROVIDER as ɵd, VANTAGE_USER_PROVIDER_FACTORY as ɵe, VANTAGE_USER_PROVIDER as ɵf };
//# sourceMappingURL=td-vantage-ui-platform-user.js.map
