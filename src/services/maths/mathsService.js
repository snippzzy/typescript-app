"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.getGcd = exports.getLcm = void 0;
var ClientError_1 = require("../ClientError");
var getLcm = function (numbers) {
    if (numbers.length < 2) {
        throw new ClientError_1["default"]("Invalid number of arguments: ".concat(numbers.length), 400);
    }
    if (numbers.includes(0)) {
        return 0;
    }
    var originals = __spreadArray([], numbers, true);
    var currentStep = numbers;
    while (!areAllTheSame(currentStep)) {
        var minimum = Math.min.apply(Math, currentStep);
        var minIndex = currentStep.indexOf(minimum);
        currentStep[minIndex] = minimum + originals[minIndex];
    }
    return currentStep[0];
};
exports.getLcm = getLcm;
var areAllTheSame = function (numbers) { return __spreadArray([], new Set(numbers), true).length == 1; };
var getGcd = function (numbers) {
    if (numbers.length < 2) {
        throw new ClientError_1["default"]("Invalid number of arguments: ".concat(numbers.length), 400);
    }
    var result = numbers[0];
    numbers.forEach(function (number) {
        result = gcd(result, number);
    });
    return result;
};
exports.getGcd = getGcd;
var gcd = function (a, b) {
    if (a == 0)
        return b;
    return gcd(b % a, a);
};
