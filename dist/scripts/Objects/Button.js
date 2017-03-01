var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./GameObject"], function (require, exports, GameObject_1) {
    "use strict";
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button(x, y, width, height) {
            _super.call(this, x, y, width, height);
            this._listener = new Array();
            this.backgroundColor = "#ff9900";
            this.hoverColor = "#ddd";
            this.activeColor = "#87cefa";
        }
        Button.prototype.draw = function (drawContext) {
            var color = this.isMouseOver ? this.hoverColor : this.backgroundColor;
            color = this.isMouseDown ? this.activeColor : color;
            drawContext.drawFilledRectangle(this, color);
            drawContext.drawCenteredText(this.middlePoint, this.text, "#000", 30);
            drawContext.drawRectangle(this.x, this.y, this.width, this.height, "#000");
        };
        Button.prototype.addClickListener = function (listener) {
            this._listener.push(listener);
        };
        Button.prototype.update = function () {
            var _this = this;
            if (this.isMouseDown && !this._wasButtonDown) {
                this._listener.forEach(function (l) { return l(_this, undefined); });
            }
            this._wasButtonDown = this.isMouseDown;
        };
        return Button;
    }(GameObject_1.GameObject));
    exports.Button = Button;
});

//# sourceMappingURL=../../maps/Objects/Button.js.map
