var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../Drawing/Graphics"], function (require, exports, Graphics_1) {
    "use strict";
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        function GameObject(x, y, width, height) {
            _super.call(this, x, y, width, height);
        }
        return GameObject;
    }(Graphics_1.Rectangle));
    exports.GameObject = GameObject;
});

//# sourceMappingURL=../../maps/Objects/GameObject.js.map
