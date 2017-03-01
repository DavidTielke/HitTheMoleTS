define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Resources = (function () {
        function Resources() {
            this.images = [];
            this.basePath = "./images/";
            this.imagesSrc = [
                "desert.jpg",
                "fantasy.jpg",
                "mole.png",
                "moleHit.png",
                "monster.png",
                "monsterHit.png",
                "stats.png",
                "vulture.png"
            ];
        }
        Object.defineProperty(Resources.prototype, "desert", {
            get: function () {
                return this.images["desert.jpg"];
            },
            enumerable: true,
            configurable: true
        });
        Resources.prototype.load = function (callback) {
            var loadedImages = 0;
            var amountImages = this.imagesSrc.length;
            for (var src in this.imagesSrc) {
                var path = this.imagesSrc[src];
                this.images[path] = new Image();
                this.images[path].onload = function () {
                    loadedImages++;
                    if (loadedImages == amountImages) {
                        callback();
                    }
                };
                this.images[path].src = this.basePath + path;
            }
        };
        return Resources;
    }());
    var resources = new Resources();
    exports.Resources = resources;
});

//# sourceMappingURL=../maps/Resources.js.map
