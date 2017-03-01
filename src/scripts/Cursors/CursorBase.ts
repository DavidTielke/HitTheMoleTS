import { IDrawable, Context } from "../Drawing/drawing.module";
import { Mouse } from "../Input/input.module";
import { Rectangle } from "../Primitives/primitives.module";
import { IUpdateable } from "../IUpdateable";

export abstract class CursorBase extends Rectangle implements IDrawable, IUpdateable {
    public update(): void {
        if (Mouse.mousePosition) {
            this.middlePoint = Mouse.mousePosition;
        }
    }

    public abstract draw(context: Context): void;
}