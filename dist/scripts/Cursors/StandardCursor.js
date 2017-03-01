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
define(["require", "exports", "./CursorBase"], function (require, exports, CursorBase_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StandardCursor = (function (_super) {
        __extends(StandardCursor, _super);
        function StandardCursor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StandardCursor.prototype.draw = function (context) {
            context.drawFilledRectangle(this, "#f00");
        };
        return StandardCursor;
    }(CursorBase_1.CursorBase));
    exports.StandardCursor = StandardCursor;
});

//# sourceMappingURL=../../maps/Cursors/StandardCursor.js.map
