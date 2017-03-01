import {Point} from "./Point";

export class Rectangle {

    get middlePoint() : Point{
        let middleX = this.x + this.width / 2;
        let middleY = this.y + this.height / 2;
        return new Point(middleX, middleY);
    }

    set middlePoint(value : Point){
        let newX = value.x - this.width / 2;
        let newY = value.y - this.height / 2;
        this.position = new Point(newX, newY);
    }

    get position() : Point{
        return new Point(this.x, this.y);
    }

    set position(newPosition : Point){
        this.x = newPosition.x;
        this.y = newPosition.y;
    }

    constructor(public x: number, 
    public y: number, 
    public width: number, 
    public height: number) {

    }

    public contains(point : Point) : boolean{
        let containsOnX = this.x <= point.x && this.x+this.width >= point.x;
        let containsOnY = this.y <= point.y && this.y + this.height >= point.y;
        let contained = containsOnX && containsOnY;
        return contained;
    }

    public move(point : Point) : void{
        this.x += point.x;
        this.y += point.y;
    }
}