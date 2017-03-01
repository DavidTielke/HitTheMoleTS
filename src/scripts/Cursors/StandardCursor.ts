import {CursorBase} from "./CursorBase";
import {Context} from "../Drawing/drawing.module";

export class StandardCursor extends CursorBase{
    public draw(context : Context) : void{
        context.drawFilledRectangle(this, "#f00");
    }
}