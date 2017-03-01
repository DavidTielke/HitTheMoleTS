import { Point } from "./Primitives/primitives.module";
import { Mouse } from "./Input/input.module";
import { Game } from "./Game";
import { Resources } from "./Resources";

class HitTheMole {
    private static _canvas;

    public static StartGame(): void {
        Resources.load(() => {
            Game.start();
        });
        this._canvas = document.getElementById("gamePanel");
        document.getElementById("gamePanel").addEventListener("mousemove", HitTheMole.updateMousePosition);
        document.getElementById("gamePanel").addEventListener("mousedown", HitTheMole.mouseButtonDown);
        document.getElementById("gamePanel").addEventListener("mouseup", HitTheMole.mouseButtonUp);
    }

    public static updateMousePosition(e) {
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
        let newPosition = new Point(x, y);
        Mouse.mousePosition = newPosition;
    }

    public static mouseButtonDown() {
        Mouse.mouseButtonDown = true;
    }

    public static mouseButtonUp() {
        Mouse.mouseButtonDown = false;
    }
}

HitTheMole.StartGame();

