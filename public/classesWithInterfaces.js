"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Portfolio = /** @class */ (function () {
    function Portfolio() {
        this.projects = [];
        this.author = 'Aman Bhardwaj';
    }
    Portfolio.prototype.addProject = function (pro) {
        this.projects.push(pro);
    };
    Portfolio.prototype.displayAuthor = function () {
        console.log(this.author);
    };
    Portfolio.prototype.displayProjects = function () {
        this.projects.forEach(function (pro) { return console.log(pro.backend, pro.frontend); });
    };
    return Portfolio;
}());
var NextOverflow = {
    frontend: 'Next.js',
    backend: 'GraphQL',
    deployed: false,
    devopsUsed: ['Indefinite'],
    displayTechs: function () { return console.log(''); },
    isDeployed: function (isIt) {
        if (isIt === void 0) { isIt = false; }
        return isIt;
    }
};
var port1 = new Portfolio();
port1.addProject(NextOverflow);
port1.displayAuthor();
port1.displayProjects();
