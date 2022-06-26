"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log(_, name, descriptor) {
    const newDescriptor = Object.assign(Object.assign({}, descriptor), { value: function (...args) {
            console.log(`Calling ${name} with arguments:`);
            console.dir(args);
            const result = descriptor.value.apply(this, args);
            console.log(`Result:`);
            console.dir(result);
            return result;
        } });
    return newDescriptor;
}
class Calculator {
    add(x, y) {
        return x + y;
    }
}
__decorate([
    Log
], Calculator.prototype, "add", null);
const calculator = new Calculator();
calculator.add(1, 2);
