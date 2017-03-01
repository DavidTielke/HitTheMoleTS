var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../Input/input.module", "../Primitives/primitives.module"], function (require, exports, input_module_1, primitives_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CursorBase = (function (_super) {
        __extends(CursorBase, _super);
        function CursorBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CursorBase.prototype.update = function () {
            if (input_module_1.Mouse.mousePosition) {
                this.middlePoint = input_module_1.Mouse.mousePosition;
            }
        };
        return CursorBase;
    }(primitives_module_1.Rectangle));
    exports.CursorBase = CursorBase;
});

//# sourceMappingURL=../../maps/Cursors/CursorBase.js.map
