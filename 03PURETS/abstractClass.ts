abstract class takePhoto {
    constructor(public cameramode: string,
        public filter : string
    ){
    }
    abstract getSepia(): void
    getRealTime(): number{
        return 10
    }
}

class Instagram extends takePhoto {
    constructor(public cameramode: string,
        public filter : string,
        public username: string
    ){
        super(cameramode, filter)
    }
    
    getSepia(): void {
        console.log("profile")
    }
}

 