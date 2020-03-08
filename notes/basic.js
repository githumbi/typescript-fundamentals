"use strict";
// function fun(a: string, b: string, ...c: number[]) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
exports.__esModule = true;
// (2) or the arrow-function variant
var sendTextMessage = function (to) {
    return {
        recipient: to.name + " <" + to.phone + ">",
        body: "You're pre-qualified for a loan!"
    };
};
