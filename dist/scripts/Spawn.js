define(["require", "exports", "./Utils/Random", "./Drawing/Graphics"], function (require, exports, Random_1, Graphics_1) {
    "use strict";
    var Area = (function () {
        function Area(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }
        return Area;
    }());
    exports.Area = Area;
    var Spawner = (function () {
        function Spawner() {
        }
        Spawner.prototype.randomRespawn = function (object, area, minDistance) {
            if (minDistance === void 0) { minDistance = 250; }
            var leftBoundary = area.width - object.width;
            var bottomBoundary = area.height - object.height;
            var distance, newX, newY = 0;
            do {
                newX = Random_1.Random.FromInterval(area.x, leftBoundary);
                newY = Random_1.Random.FromInterval(area.y, bottomBoundary);
                var newPos = new Graphics_1.Point(newX, newY);
                distance = object.middlePoint.distance(newPos);
            } while (distance < minDistance);
            object.x = newX;
            object.y = newY;
        };
        return Spawner;
    }());
    exports.Spawner = Spawner;
});

//# sourceMappingURL=../maps/Spawn.js.map
