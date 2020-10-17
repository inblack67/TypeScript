"use strict";
var Queue = /** @class */ (function () {
    function Queue() {
        this.elements = [];
        this.size = this.elements.length;
        this.secret = 'you dont know node';
        this.tip = 'make a lot of projects';
    }
    Queue.prototype.enqueue = function (el) {
        this.elements.push(el);
    };
    Queue.prototype.dequeue = function () {
        return this.elements.shift(); // will not be undefined
    };
    Queue.prototype.display = function () {
        console.log(this.elements);
    };
    return Queue;
}());
var que = new Queue();
que.enqueue(10);
que.enqueue(20);
que.enqueue(30);
que.dequeue();
que.display();
console.log(que.tip);
