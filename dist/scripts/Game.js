define(["require", "exports", "./Utils/utils.module", "./Cursors/cursors.module", "./Drawing/drawing.module", "./Primitives/primitives.module", "./Input/input.module"], function (require, exports, utils_module_1, cursors_module_1, drawing_module_1, primitives_module_1, input_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Game = (function () {
        function Game() {
            var _this = this;
            this._drawContext = new drawing_module_1.Context();
            this.size = new primitives_module_1.Rectangle(0, 0, this._drawContext.width, this._drawContext.height);
            this._timer = new utils_module_1.Timer(1);
            this._timer.addElapsedHandler(function (sender, args) { return _this.tick(sender, args); });
            this._cursor = new cursors_module_1.StandardCursor(0, 0, 5, 5);
        }
        Game.prototype.start = function () {
            this._timer.start();
        };
        Game.prototype.stop = function () {
            this._timer.stop();
        };
        Game.prototype.tick = function (sender, args) {
            input_module_1.Mouse.updating();
            this._drawContext.clear();
            if (input_module_1.Mouse.mousePosition !== undefined) {
                this._cursor.middlePoint = input_module_1.Mouse.mousePosition;
            }
            this._cursor.draw(this._drawContext);
            input_module_1.Mouse.updated();
        };
        return Game;
    }());
    var game = new Game();
    exports.Game = game;
});

//# sourceMappingURL=../maps/Game.js.map
