"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var io;
(function (io) {
    var FileSystem = /** @class */ (function () {
        function FileSystem() {
        }
        FileSystem.convert = function (base64, saveInto, fileName, callback) {
            //is really base64 
            var matches = base64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
            //set buffer
            if (matches && matches.length == 3) {
                var buffer = {
                    type: matches[1],
                    data: new Buffer(matches[2], 'base64')
                };
                //write into the file
                if (!fs.existsSync(saveInto)) {
                    fs.mkdirSync(saveInto);
                }
                fs.writeFile(fileName, buffer.data, callback);
            }
            callback(new Error("Invalid input."));
        };
        return FileSystem;
    }());
    io.FileSystem = FileSystem;
})(io = exports.io || (exports.io = {}));

//# sourceMappingURL=index.js.map
