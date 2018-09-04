export class CFunctor{
    constructor(...args){
        // 表示是单独的函数
        let self = this;
        self.mObj = null;
        self.mFunc = null;
        self.mArgs = null;
        if(typeof(args[0]) == "function"){
            self.mFunc = args[0];
            self.mArgs = args.slice(1)
        }
        else{
            self.mObj = args[0];
            self.mFunc = args[1];
            self.mArgs = args.slice(2)
        }
    }

    apply(...args){
        this.call(...args);
    }

    call(...args){  
        let self = this;
        if(!self.mFunc){
            return;
        }
        if(self.mArgs){
            args = args.concat(self.mArgs);
        }
        if(!self.mObj){
            self.mFunc(...args);
        }
        else{
            self.mFunc.apply(self.mObj,args);
        }
    }
    isSame(other){
        let self = this;
        if(other.mObj == self.mObj && other.mFunc == self.mFunc){
            if(self.mArgs && other.mArgs &&(self.mArgs.length == other.mArgs.length)){
                for(let tIndex = 0; tIndex < self.mArgs.length; tIndex ++){
                    if(self.mArgs[tIndex] != other.mArgs[tIndex]){
                        return false;
                    }
                }
                return true;
            }
        }
        return false;
    }

    isSameArgs(...args){
        let self = this;
        let tObj , tFunc, tArgs = null;
        if(typeof(args[0]) == "function"){
            tFunc = args[0];
            tArgs = args.slice(1);
        }
        else{
            tObj = args[0];
            tFunc = args[1];
            tArgs = args.slice(2)
        }
        if(tObj == self.mObj && tFunc == self.mFunc){
            if(self.mArgs && tArgs &&(self.mArgs.length == tArgs.length)){
                for(let tIndex = 0; tIndex < self.mArgs.length; tIndex ++){
                    if(self.mArgs[tIndex] != tArgs[tIndex]){
                        return false;
                    }
                }
                return true;
            }
        }
        return false;
    }
}




