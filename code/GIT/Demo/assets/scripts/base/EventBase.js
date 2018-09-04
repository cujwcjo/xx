var Utils = require("Utils")

export class CEventBase{
    constructor(){
        this.mEventDict = {};
    }

    sendEvent(eventName, ...args){
        // 发送时间
        if(this.mEventDict[eventName]){
            this.mEventDict[eventName].forEach(function(functorObj){
                functorObj.call(...args); 
            })
        }
    }

    addListenFunc(eventName, ...funcArgs){
        // 增加监听
        if(this.isListen(eventName, ...funcArgs)){
            return;
        }
        if(!this.mEventDict[eventName]){
            this.mEventDict[eventName] = []
        }
        this.mEventDict[eventName].push(Utils.functor(...funcArgs));
    }

    delListenFunc(eventName, ...funcArgs){
        // 删除监听
        let tIndex = this.getListenIndex(eventName, ...funcArgs);
        if(tIndex != -1){
            this.mEventDict[eventName].splice(tIndex, 1);
        }
    }

    isListen(eventName, ...funcArgs){
        // 判断是否监听
        return this.getListenIndex(eventName, ...funcArgs)  != -1;
    }

    getListenIndex(eventName, ...funcArgs){
        if(!this.mEventDict[eventName]){
            return -1;
        }
        let tEventList = this.mEventDict[eventName];
        let tIsFunctor = false;
        if(funcArgs.length == 1&& funcArgs[0] instanceof Utils.CFunctor){
            tIsFunctor = true;
        }
        
        for(let tIndex = 0; tIndex < tEventList.length; tIndex ++){
            if(tIsFunctor){
                if(tEventList[tIndex].isSame(funcArgs[0])){
                    return tIndex;
                }
            }
            else{
                if(tEventList[tIndex].isSameArgs(...funcArgs)){
                    return tIndex;
                }
            }
        }
        return -1;
    }   
}
