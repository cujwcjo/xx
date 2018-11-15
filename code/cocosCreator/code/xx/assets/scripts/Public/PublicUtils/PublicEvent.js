var functor = require("PublicFunctor").functor;


export class CEvent{
    constructor(){
        this.mEventDict = {};//事件字典
    }

    addEventListen(eventName, ...funcArgs){
        // 增加一个事件
        if(!this.mEventDict[eventName]){
            this.mEventDict[eventName] = [];
        }
        if(this.isListen(eventName, ...funcArgs)){
            return;
        }
        this.mEventDict[eventName].push(functor(...funcArgs));
    }

    sendEvent(eventName, ...args){
        // 发送事件信息
        let tFuncList = this.mEventDict[eventName] || [];
        for(let tIndex = 0; tIndex < tFuncList.length; tIndex++){
            let tFuncObj = tFuncList[tIndex];
            tFuncObj.call(...args);
        }
    }

    delEventListen(eventName, ...args){
        // 删除事件
        let tFuncList = this.mEventDict[eventName] || [];
        for(let tIndex = 0; tIndex < tFuncList.length; tIndex++){
            if(tFuncList[tIndex].equal(...args)){
                tFuncList.splice(tIndex, 1);
                return;
            }
        }
    }
    isListen(eventName,...args){
        let tFuncList = this.mEventDict[eventName] || [];
        for(let tIndex = 0; tIndex < tFuncList.length; tIndex++){
            if(tFuncList[tIndex].equal(...args)){
                return true;
            }
        }
        return false;
    }
}


export function Event(...args){
    return new CEvent(...args);
}