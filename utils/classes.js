var Auth = /** @class */ (function () {
    // ? optional params, all or none
    function Auth(user, password) {
        this.user = user;
        this.password = password;
    }
    Auth.prototype.login = function () {
        console.log(this.user + " is now logged in");
    };
    return Auth;
}());
var auth = new Auth('Aman', 123);
auth.user = 'Hacker'; // cant be hacked now
// I need public protect private
auth.login();
