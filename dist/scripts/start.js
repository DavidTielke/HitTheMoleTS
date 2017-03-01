define(["require", "exports", "./Primitives/primitives.module", "./Input/input.module", "./Game", "./Resources"], function (require, exports, primitives_module_1, input_module_1, Game_1, Resources_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HitTheMole = (function () {
        function HitTheMole() {
        }
        HitTheMole.StartGame = function () {
            Resources_1.Resources.load(function () {
                Game_1.Game.start();
            });
            this._canvas = document.getElementById("gamePanel");
            document.getElementById("gamePanel").addEventListener("mousemove", HitTheMole.updateMousePosition);
            document.getElementById("gamePanel").addEventListener("mousedown", HitTheMole.mouseButtonDown);
            document.getElementById("gamePanel").addEventListener("mouseup", HitTheMole.mouseButtonUp);
        };
        HitTheMole.updateMousePosition = function (e) {
            var x;
            var y;
            if (e.pageX || e.pageY) {
                x = e.pageX;
                y = e.pageY;
            }
            else {
                x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }
            x -= HitTheMole._canvas.offsetLeft;
            y -= HitTheMole._canvas.offsetTop;
            var newPosition = new primitives_module_1.Point(x, y);
            input_module_1.Mouse.mousePosition = newPosition;
        };
        HitTheMole.mouseButtonDown = function () {
            input_module_1.Mouse.mouseButtonDown = true;
        };
        HitTheMole.mouseButtonUp = function () {
            input_module_1.Mouse.mouseButtonDown = false;
        };
        return HitTheMole;
    }());
    HitTheMole.StartGame();
});

//# sourceMappingURL=../maps/start.js.map
