class Resources {
    private basePath: string;
    private imagesSrc: string[];
    private images;

    get desert(){
        return this.images["desert.jpg"];
    }

    constructor() {
        this.images = [];
        this.basePath = "./images/";
        this.imagesSrc = [
            "desert.jpg",
            "fantasy.jpg",
            "mole.png",
            "moleHit.png",
            "monster.png",
            "monsterHit.png",
            "stats.png",
            "vulture.png"
        ];
    }

    public load(callback: () => void) {
        let loadedImages = 0;
        let amountImages = this.imagesSrc.length;
        for(let src in this.imagesSrc){
            let path = this.imagesSrc[src];
            this.images[path] = new Image();
            this.images[path].onload = ()=>{
                loadedImages++;
                if(loadedImages == amountImages){
                    callback();
                }
            };
            this.images[path].src = this.basePath+path;
        }
    }
}

let resources = new Resources();
export {resources as Resources};