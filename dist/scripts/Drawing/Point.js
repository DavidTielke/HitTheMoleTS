define(["require", "exports"], function (require, exports) {
    "use strict";
    var Point = (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        Point.prototype.distance = function (point) {
            var diffX = this.x - point.x;
            var diffY = this.y - point.y;
            var distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
            return distance;
        };
        Point.prototype.substract = function (point) {
            var diffX = point.x - this.x;
            var diffY = point.y - this.y;
            return new Point(diffX, diffY);
        };
        return Point;
    }());
    exports.Point = Point;
});

//# sourceMappingURL=../../maps/Drawing/Point.js.map
