define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Random = (function () {
        function Random() {
        }
        Random.FromInterval = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        return Random;
    }());
    exports.Random = Random;
});

//# sourceMappingURL=../../maps/Utils/Random.js.map
