import {IInteractable} from "./IInteractable";

export interface IInteractableSource{
    () : ReadonlyArray<IInteractable>;
}