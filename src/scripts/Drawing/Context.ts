import { Rectangle, Point } from "../Primitives/primitives.module";

export class Context {
    private readonly _canvasId: string;

    private _canvas: any;
    private _context: any;

    get width(): number {
        return this._canvas.width;
    }

    get height(): number {
        return this._canvas.height;
    }

    constructor() {
        this._canvasId = "gamePanel";
        this._canvas = document.getElementById(this._canvasId);
        this._context = this._canvas.getContext("2d");
    }

    public drawImage(image,x : number, y:number, width : number, height : number) : void{
        this._context.drawImage(image,x,y,width,height);
    }

    public drawRectangle(x: number, y: number, width: number, height: number, color: string): void {
        this._context.beginPath();
        this._context.lineWidth="2";
        this._context.strokeStyle = color;
        this._context.rect(x, y, width, height);
        this._context.stroke();
    }

    public drawFilledRectangle(rect: Rectangle, color: string): void {
        this._context.fillStyle = color;
        this._context.fillRect(rect.x, rect.y, rect.width, rect.height);
    }

    public drawText(x: number, y: number, text: string, color = "#000", size = 30): void {
        this._context.textAlign = "left";
        this._context.textBaseline="alphabetic";
        this._context.fillStyle = color;
        this._context.font = size + "px Arial";
        this._context.fillText(text, x, y);
    }

    public drawCenteredText(position: Point, text: string, color: string, size: number): void {
        this._context.textAlign = "center";
        this._context.textBaseline="middle";
        this._context.fillStyle = color;
        this._context.font = size + "px Arial";
        this._context.fillText(text, position.x, position.y);
    }

    public clear(): void {
        //this.drawFilledRectangle(new Rectangle(0,0,this.width,this.height),"#000")
        this._context.clearRect(0,0,this.width, this.height);
    }
}