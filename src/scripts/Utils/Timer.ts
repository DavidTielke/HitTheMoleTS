class Timer{
    private _timer;
    private _isRunning : boolean;
    private _tickCounter;
    public _listener : TimerElapsedCallback[];

    public get isRunning() : boolean{
        return this._isRunning;
    }

    constructor(public interval){
        this._timer = null;
        this._isRunning = false;
        this._tickCounter = 0;
        this._listener = new Array<TimerElapsedCallback>();
    }

    public start() : void{
        this._timer = window.setInterval(() => this.tick(), this.interval);
        this._isRunning = true;
    }

    public stop() : void{
        clearInterval(this._timer);
        this._isRunning = false;
    }

    private tick() : void{
        this._tickCounter++;
        let args = new TimerElapsedArgs(this._tickCounter);
        this._listener.forEach(l => l(this, args));
    }

    public addElapsedHandler(handler : TimerElapsedCallback){
        this._listener.push(handler);
    }

    public removeElapsedHandler(handler : TimerElapsedCallback){
        let index = this._listener.indexOf(handler);
        if(index > -1){
            this._listener.splice(index, 1);
        }
    }
}

class TimerElapsedArgs{
    constructor(readonly tickCounter){

    }
}

interface TimerElapsedCallback{
    (source : Timer, args : TimerElapsedArgs) : void;
}

export {
    Timer,
    TimerElapsedArgs,
    TimerElapsedCallback
}
