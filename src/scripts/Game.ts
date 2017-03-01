import { Timer, TimerElapsedArgs } from "./Utils/utils.module";
import { StandardCursor } from "./Cursors/cursors.module";
import { Context } from "./Drawing/drawing.module";
import { Rectangle } from "./Primitives/primitives.module";
import { Mouse } from "./Input/input.module";

class Game {
    private _timer: Timer;
    private _drawContext: Context;
    private _cursor: StandardCursor;

    public size: Rectangle;

    constructor() {
        this._drawContext = new Context();
        this.size = new Rectangle(0, 0, this._drawContext.width, this._drawContext.height);
        this._timer = new Timer(1);
        this._timer.addElapsedHandler((sender, args) => this.tick(sender, args));
        this._cursor = new StandardCursor(0, 0, 5, 5);
    }

    public start(): void {
        this._timer.start();
    }

    public stop(): void {
        this._timer.stop();
    }

    private tick(sender: Timer, args: TimerElapsedArgs): void {
        Mouse.updating();
        this._drawContext.clear();

        if (Mouse.mousePosition !== undefined) {
            this._cursor.middlePoint = Mouse.mousePosition;
        }
        this._cursor.draw(this._drawContext);

        Mouse.updated();
    }
}

let game = new Game();
export { game as Game };

