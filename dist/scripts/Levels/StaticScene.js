define(["require", "exports", "../Drawing/Graphics", "../Resources", "../Cursors/cursors.module", "../Objects/objects.module"], function (require, exports, Graphics_1, Resources_1, cursors_module_1, objects_module_1) {
    "use strict";
    var StaticScene = (function () {
        function StaticScene() {
            this.items = [];
            this.cursor = new cursors_module_1.StandardCursor(0, 0, 5, 5);
            this._startGameMenuItem = new objects_module_1.Button(450, 350, 200, 50);
            this._startGameMenuItem.middlePoint = new Graphics_1.Point(560, 315);
            this._startGameMenuItem.text = "Spiel starten";
            this.items.push(this._startGameMenuItem);
        }
        StaticScene.prototype.draw = function (context) {
            context.drawImage(Resources_1.Resources.desert, 0, 0, context.width, context.height);
            this.items
                .filter(function (i) { return i.draw != undefined; })
                .forEach(function (go) { return go.draw(context); });
        };
        StaticScene.prototype.update = function () {
            this.items
                .filter(function (i) { return i.update != undefined; })
                .forEach(function (go) { return go.update(); });
        };
        return StaticScene;
    }());
    exports.StaticScene = StaticScene;
});

//# sourceMappingURL=../../maps/Levels/StaticScene.js.map
