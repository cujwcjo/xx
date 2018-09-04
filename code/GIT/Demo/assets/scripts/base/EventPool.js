var EventBase = require("EventBase");

// 事件池

var gEventDict = {};


export function addListenFunc(type, eventName, ...funcArgs){
    if(!gEventDict[type]){
        gEventDict[type] = new EventBase.CEventBase();
    }
    gEventDict[type].addListenFunc(eventName, ...funcArgs);
}

export function delListenFunc(type, eventName, ...funcArgs){
    if(gEventDict[type]){
        gEventDict[type].delListenFunc(eventName, ...funcArgs);
    }

}

export function clear(){
    gEventDict = {};
}