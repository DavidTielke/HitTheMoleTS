import {Point} from "../Primitives/primitives.module";

export interface IInteractable{
    isMouseOver : boolean;
    isMouseDown : boolean;
    isDragged : boolean;

    contains(point : Point) : boolean;
}