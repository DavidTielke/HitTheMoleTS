import { Point } from "../Primitives/primitives.module";
import { Game } from "../Game";
import { IInteractable } from "./IInteractable";
import { IInteractableSource } from "./IInteractableSource";

class MouseController {
    private _mouseButtonDown: boolean;
    private _mousePosition: Point;
    private _wasMouseButtonDown: boolean;
    private _interactableSource: IInteractableSource;

    public lastMousePosition: Point;
    public mouseDownPosition: Point

    public updating(): void {
        if (!this.mousePosition || !this._interactableSource) {
            return;
        }

        let items = this._interactableSource();

        items.forEach(i => i.isMouseOver = i.contains(this.mousePosition));
        if (this.mouseButtonDown) {
            items.forEach(i => i.isMouseDown = i.isMouseOver);
        }

        if (!this._wasMouseButtonDown && this.mouseButtonDown) {
            items.forEach(i => i.isDragged = i.isMouseOver);
        }
        if (!this.mouseButtonDown) {
            items.forEach(i => {
                i.isDragged = false;
                i.isMouseDown = false;
            });
        }
    }

    public registerInteractableSource(source: IInteractableSource): void {
        this._interactableSource = source;
    }

    public updated(): void {

        this.lastMousePosition = this.mousePosition;
        this._wasMouseButtonDown = this.mouseButtonDown;
    }


    public get mousePosition(): Point {
        return this._mousePosition;
    }
    public set mousePosition(value: Point) {
        this._mousePosition = value;
    }

    public get mouseButtonDown(): boolean {
        return this._mouseButtonDown;
    }
    public set mouseButtonDown(value: boolean) {
        this._mouseButtonDown = value;
        if (value === true) {
            this.mouseDownPosition = this.mousePosition;
        }
    }
}

let mouse = new MouseController();

export { mouse as Mouse };