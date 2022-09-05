"use strict";
exports.__esModule = true;
exports.getAsciiArtFile = void 0;
var fs = require("fs");
var getAsciiArtFile = function (name) {
    return fs.readFileSync("src/public/".concat(name, ".html"), { encoding: 'ascii' });
};
exports.getAsciiArtFile = getAsciiArtFile;
