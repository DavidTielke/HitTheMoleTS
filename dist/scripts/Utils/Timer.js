define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Timer = (function () {
        function Timer(interval) {
            this.interval = interval;
            this._timer = null;
            this._isRunning = false;
            this._tickCounter = 0;
            this._listener = new Array();
        }
        Object.defineProperty(Timer.prototype, "isRunning", {
            get: function () {
                return this._isRunning;
            },
            enumerable: true,
            configurable: true
        });
        Timer.prototype.start = function () {
            var _this = this;
            this._timer = window.setInterval(function () { return _this.tick(); }, this.interval);
            this._isRunning = true;
        };
        Timer.prototype.stop = function () {
            clearInterval(this._timer);
            this._isRunning = false;
        };
        Timer.prototype.tick = function () {
            var _this = this;
            this._tickCounter++;
            var args = new TimerElapsedArgs(this._tickCounter);
            this._listener.forEach(function (l) { return l(_this, args); });
        };
        Timer.prototype.addElapsedHandler = function (handler) {
            this._listener.push(handler);
        };
        Timer.prototype.removeElapsedHandler = function (handler) {
            var index = this._listener.indexOf(handler);
            if (index > -1) {
                this._listener.splice(index, 1);
            }
        };
        return Timer;
    }());
    exports.Timer = Timer;
    var TimerElapsedArgs = (function () {
        function TimerElapsedArgs(tickCounter) {
            this.tickCounter = tickCounter;
        }
        return TimerElapsedArgs;
    }());
    exports.TimerElapsedArgs = TimerElapsedArgs;
});

//# sourceMappingURL=../../maps/Utils/Timer.js.map
