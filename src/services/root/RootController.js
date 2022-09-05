"use strict";
exports.__esModule = true;
exports.RootController = void 0;
var RootController = /** @class */ (function () {
    function RootController() {
        this.handleRootRequest = function (req, res) {
            res.send("Welcome to the EE Technical Task - you're up and running!");
        };
    }
    RootController.prototype.installRoutes = function (app) {
        app.get('/', this.handleRootRequest);
    };
    return RootController;
}());
exports.RootController = RootController;
