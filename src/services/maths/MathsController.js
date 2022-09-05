"use strict";
exports.__esModule = true;
exports.MathsController = void 0;
var mathsService_1 = require("./mathsService");
var MathsController = /** @class */ (function () {
    function MathsController() {
        this.handleLcmRequest = function (req, res) {
            var requestBody = req.body;
            var result = (0, mathsService_1.getLcm)(requestBody.numbers);
            res.send(result.toString());
        };
        this.handleGcdRequest = function (req, res) {
            var requestBody = req.body;
            var result = (0, mathsService_1.getGcd)(requestBody.numbers);
            res.send(result.toString());
        };
    }
    MathsController.prototype.installRoutes = function (app) {
        app.post('/lcm', this.handleLcmRequest);
        app.post('/gcd', this.handleGcdRequest);
    };
    return MathsController;
}());
exports.MathsController = MathsController;
