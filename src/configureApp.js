"use strict";
exports.__esModule = true;
exports.configureApp = void 0;
var express_1 = require("express");
var helmet_1 = require("helmet");
var body_parser_1 = require("body-parser");
var MathsController_1 = require("./services/maths/MathsController");
var MiscController_1 = require("./services/misc/MiscController");
var RootController_1 = require("./services/root/RootController");
var AsciiController_1 = require("./services/ascii-art/AsciiController");
var PORT = 3000;
var configureApp = function () {
    var app = (0, express_1["default"])();
    app.use((0, helmet_1["default"])());
    app.use(body_parser_1["default"].json());
    app.use(body_parser_1["default"].urlencoded({ extended: true }));
    new AsciiController_1.AsciiController().installRoutes(app);
    new MathsController_1.MathsController().installRoutes(app);
    new MiscController_1.MiscController().installRoutes(app);
    new RootController_1.RootController().installRoutes(app);
    return app.listen(PORT, function () { return console.log("Running on ".concat(PORT, " \u26A1")); });
};
exports.configureApp = configureApp;
