"use strict";
exports.__esModule = true;
var producer_1 = require("./producer");
var auth = new producer_1["default"]('aman', 123);
auth.login();
console.log(auth.user);
