define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Context = (function () {
        function Context() {
            this._canvasId = "gamePanel";
            this._canvas = document.getElementById(this._canvasId);
            this._context = this._canvas.getContext("2d");
        }
        Object.defineProperty(Context.prototype, "width", {
            get: function () {
                return this._canvas.width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Context.prototype, "height", {
            get: function () {
                return this._canvas.height;
            },
            enumerable: true,
            configurable: true
        });
        Context.prototype.drawImage = function (image, x, y, width, height) {
            this._context.drawImage(image, x, y, width, height);
        };
        Context.prototype.drawRectangle = function (x, y, width, height, color) {
            this._context.beginPath();
            this._context.lineWidth = "2";
            this._context.strokeStyle = color;
            this._context.rect(x, y, width, height);
            this._context.stroke();
        };
        Context.prototype.drawFilledRectangle = function (rect, color) {
            this._context.fillStyle = color;
            this._context.fillRect(rect.x, rect.y, rect.width, rect.height);
        };
        Context.prototype.drawText = function (x, y, text, color, size) {
            if (color === void 0) { color = "#000"; }
            if (size === void 0) { size = 30; }
            this._context.textAlign = "left";
            this._context.textBaseline = "alphabetic";
            this._context.fillStyle = color;
            this._context.font = size + "px Arial";
            this._context.fillText(text, x, y);
        };
        Context.prototype.drawCenteredText = function (position, text, color, size) {
            this._context.textAlign = "center";
            this._context.textBaseline = "middle";
            this._context.fillStyle = color;
            this._context.font = size + "px Arial";
            this._context.fillText(text, position.x, position.y);
        };
        Context.prototype.clear = function () {
            //this.drawFilledRectangle(new Rectangle(0,0,this.width,this.height),"#000")
            this._context.clearRect(0, 0, this.width, this.height);
        };
        return Context;
    }());
    exports.Context = Context;
});

//# sourceMappingURL=../../maps/Drawing/Context.js.map
