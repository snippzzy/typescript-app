"use strict";
exports.__esModule = true;
exports.AsciiController = void 0;
var asciiService_1 = require("./asciiService");
var AsciiController = /** @class */ (function () {
    function AsciiController() {
        this.handleCookieRequest = function (req, res) {
            var response = (0, asciiService_1.getAsciiArtFile)('cookie-monster');
            res.send(response);
        };
        this.handleShinxRequest = function (req, res) {
            var response = (0, asciiService_1.getAsciiArtFile)('shinx');
            res.send(response);
        };
    }
    AsciiController.prototype.installRoutes = function (app) {
        app.get('/cookie', this.handleCookieRequest);
        app.get('/shinx', this.handleShinxRequest);
    };
    return AsciiController;
}());
exports.AsciiController = AsciiController;
