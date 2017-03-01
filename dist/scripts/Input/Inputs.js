define(["require", "exports", "./Game"], function (require, exports, Game_1) {
    "use strict";
    var MouseController = (function () {
        function MouseController() {
        }
        MouseController.prototype.updating = function () {
            var _this = this;
            if (!this.mousePosition) {
                return;
            }
            Game_1.Game.items.forEach(function (i) { return i.isMouseOver = i.contains(_this.mousePosition); });
            if (this.mouseButtonDown) {
                Game_1.Game.items.forEach(function (i) { return i.isMouseDown = i.isMouseOver; });
            }
            if (!this._wasMouseButtonDown && this.mouseButtonDown) {
                Game_1.Game.items.forEach(function (i) { return i.isDragged = i.isMouseOver; });
            }
            if (!this.mouseButtonDown) {
                Game_1.Game.items.forEach(function (i) {
                    i.isDragged = false;
                    i.isMouseDown = false;
                });
            }
        };
        MouseController.prototype.updated = function () {
            this.lastMousePosition = this.mousePosition;
            this._wasMouseButtonDown = this.mouseButtonDown;
        };
        Object.defineProperty(MouseController.prototype, "mousePosition", {
            get: function () {
                return this._mousePosition;
            },
            set: function (value) {
                this._mousePosition = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MouseController.prototype, "mouseButtonDown", {
            get: function () {
                return this._mouseButtonDown;
            },
            set: function (value) {
                this._mouseButtonDown = value;
                if (value === true) {
                    this.mouseDownPosition = this.mousePosition;
                }
            },
            enumerable: true,
            configurable: true
        });
        return MouseController;
    }());
    var mouse = new MouseController();
    exports.Mouse = mouse;
});

//# sourceMappingURL=../../maps/Input/Inputs.js.map
