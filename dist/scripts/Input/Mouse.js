define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MouseController = (function () {
        function MouseController() {
        }
        MouseController.prototype.updating = function () {
            var _this = this;
            if (!this.mousePosition || !this._interactableSource) {
                return;
            }
            var items = this._interactableSource();
            items.forEach(function (i) { return i.isMouseOver = i.contains(_this.mousePosition); });
            if (this.mouseButtonDown) {
                items.forEach(function (i) { return i.isMouseDown = i.isMouseOver; });
            }
            if (!this._wasMouseButtonDown && this.mouseButtonDown) {
                items.forEach(function (i) { return i.isDragged = i.isMouseOver; });
            }
            if (!this.mouseButtonDown) {
                items.forEach(function (i) {
                    i.isDragged = false;
                    i.isMouseDown = false;
                });
            }
        };
        MouseController.prototype.registerInteractableSource = function (source) {
            this._interactableSource = source;
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

//# sourceMappingURL=../../maps/Input/Mouse.js.map
