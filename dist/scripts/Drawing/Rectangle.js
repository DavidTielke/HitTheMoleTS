define(["require", "exports", "./Point"], function (require, exports, Point_1) {
    "use strict";
    var Rectangle = (function () {
        function Rectangle(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }
        Object.defineProperty(Rectangle.prototype, "middlePoint", {
            get: function () {
                var middleX = this.x + this.width / 2;
                var middleY = this.y + this.height / 2;
                return new Point_1.Point(middleX, middleY);
            },
            set: function (value) {
                var newX = value.x - this.width / 2;
                var newY = value.y - this.height / 2;
                this.position = new Point_1.Point(newX, newY);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "position", {
            get: function () {
                return new Point_1.Point(this.x, this.y);
            },
            set: function (newPosition) {
                this.x = newPosition.x;
                this.y = newPosition.y;
            },
            enumerable: true,
            configurable: true
        });
        Rectangle.prototype.contains = function (point) {
            var containsOnX = this.x <= point.x && this.x + this.width >= point.x;
            var containsOnY = this.y <= point.y && this.y + this.height >= point.y;
            var contained = containsOnX && containsOnY;
            return contained;
        };
        Rectangle.prototype.move = function (point) {
            this.x += point.x;
            this.y += point.y;
        };
        return Rectangle;
    }());
    exports.Rectangle = Rectangle;
});

//# sourceMappingURL=../../maps/Drawing/Rectangle.js.map
