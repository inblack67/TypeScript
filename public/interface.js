"use strict";
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
var introduceNextOverflow = function (next) {
    console.log(next);
    console.log(next.isDeployed(false));
};
introduceNextOverflow(NextOverflow);
