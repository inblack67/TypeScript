"use strict";
var body = document.querySelector('body');
console.log(body);
// ! -> I assure you it wont be null
body.innerHTML = 'yeah';
// or do runtime check
if (body) {
    // ...
}
// typecasting
var form = document.querySelector('.form');
var select = document.querySelector('.select');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("submit fired!");
});
