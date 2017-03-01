export class Point{
    constructor(public x : number, public y : number){

    }

    public distance(point : Point) : number{
        let diffX = this.x - point.x;
        let diffY = this.y - point.y;
        
        let distance = Math.sqrt(Math.pow(diffX,2)+Math.pow(diffY,2));
        return distance;
    }

    public substract(point : Point) : Point{
        let diffX = point.x - this.x;
        let diffY = point.y - this.y;
        return new Point(diffX, diffY);
    }
}