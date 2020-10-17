"use strict";
// unions
var arr = ['js', 10, true];
console.log(arr);
var id = 1;
id = '2';
console.log(id);
// explicit objects
var player;
player = {
    name: 'ronaldo',
    id: 1,
    score: 10,
    champ: true
};
// implicit type
var novel;
novel = {
    title: 'X'
};
console.log(novel);
var greet;
greet = function () {
    console.log("hello");
};
var uuid = 1 || '1';
var projects = function (pros) {
    console.log(pros);
};
var data = [{
        title: 'Blogs',
        id: 1,
        url: 'vercel.com',
        stack: ['next.js']
    }];
projects(data);
// function signature
var addProject;
addProject = function (pro) { return pro; };
addProject({
    title: 'Blogs',
    id: 1,
    url: 'vercel.com',
    stack: ['next.js']
});
