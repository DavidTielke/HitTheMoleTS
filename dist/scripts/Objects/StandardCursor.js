var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../Drawing/Graphics", "../Input/input.module"], function (require, exports, Graphics_1, input_module_1) {
    "use strict";
    var StandardCursor = (function (_super) {
        __extends(StandardCursor, _super);
        function StandardCursor(x, y, width, height) {
            _super.call(this, x, y, width, height);
        }
        StandardCursor.prototype.draw = function (context) {
            context.drawFilledRectangle(this, "#f00");
        };
        StandardCursor.prototype.update = function () {
            this.middlePoint = input_module_1.Mouse.mousePosition;
        };
        return StandardCursor;
    }(Graphics_1.Rectangle));
    exports.StandardCursor = StandardCursor;
});

//# sourceMappingURL=../../maps/Objects/StandardCursor.js.map
