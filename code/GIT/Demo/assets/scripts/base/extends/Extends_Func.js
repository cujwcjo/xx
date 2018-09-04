var Utils = require("Utils");


export function init(){
    window.callFunc = function(...args){ // 直接call一个方法
        let tArgs1 = args[0];
        if(typeof(tArgs1) == "function"){
            args.splice(0,1);
            return tArgs1(...args);
        }else  if(tArgs1 instanceof Utils.CFunctor){
            args.splice(0,1);
            tArgs1.call(...args);
        }
        else{
            let tFunc = args[1];
            if(!tFunc){
                return;
            }
            args.splice(0,2);
            tFunc.apply(tArgs1, args);
        }
    }
    console.log("初始化。啊。。。。。。。")
    window.isSameFunc = function(func1, func2){ // 判断是否是相同方法
        let tIsFunctor1 = func1 instanceof Utils.CFunctor;
        let tIsFunctor2 = func2 instanceof Utils.CFunctor;
        if(tIsFunctor1 && tIsFunctor2){
            return func1.isSameFunc(func2);
        }
        else if(!tIsFunctor1 && !tIsFunctor2){
            return func1 == func2;
        }   
        return false;
    }
    
}