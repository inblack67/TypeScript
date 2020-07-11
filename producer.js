"use strict";
exports.__esModule = true;
var Auth = /** @class */ (function () {
    function Auth(user, password) {
        this.user = user;
        this.password = password;
        this.user = user;
        this.password = password;
    }
    Object.defineProperty(Auth.prototype, "getUser", {
        // get/set prvt fields
        get: function () {
            return this.user;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Auth.prototype, "setUser", {
        set: function (user) {
            this.user = user;
        },
        enumerable: false,
        configurable: true
    });
    Auth.prototype.login = function () {
        console.log(this.user + " is now logged in");
    };
    return Auth;
}());
exports["default"] = Auth;
