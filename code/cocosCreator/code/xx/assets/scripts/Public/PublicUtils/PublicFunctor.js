export class CFunctor{
    constructor(...args){
        this.isFunctor =true;
        this.mFunc = null; // 函数
        this.mObj = null;//对象
        this.mArgs = null;// 参数列表
        this.mCanUse =true; //是否可以使用
        if(typeof(args[0]) == "function"){
            this.mFunc = args[0];
            this.mArgs = args.slice(1);
        }
        else{
            this.mObj = args[0];
            this.mFunc = args[1];
            this.mArgs = args.slice(2);
        }
    }
    isCanUse(){
        return this.mCanUse;
    }
    
    call(...args){
        if(!this.mCanUse){
            return;
        }
        if(this.mObj && !cc.isValid(this.mObj)){
            this.mCanUse = false;
            return;
        }
        let tArgs = this.mArgs ? this.mArgs.concat(args) : args;
        
        if(this.mObj){
            this.mFunc.apply(this.mObj, tArgs);
        }
        else{
            this.mFunc(...tArgs);
        }
    }

    equal(...args){
        // 是否相等
        let tObj;
        let tFunc;
        let tArgs;
        if(typeof(args[0]) == "function"){
            tFunc = args[0];
            tArgs = args.slice(1);
        }
        else{
            tObj = args[0];
            tFunc = args[1];
            tArgs = args.slice(2);
        }
        if(tObj == this.mObj && tFunc == this.mFunc){
            // 检测参数
            let tLength1 = tArgs.length;
            let tLength2 = this.mArgs.length;
            if(tLength1  == tLength2){
                for(let tIndex = 0; tIndex < tLength1; tIndex++){
                    if(tArgs[tIndex] != this.mArgs[tIndex]){
                        return false;
                    }
                }
            }
            return true;
        }
        return false;
    }

}

export function functor(...args){
    if(args[0].isFunctor){
        return args[0];
    }
    return new CFunctor(...args);
}