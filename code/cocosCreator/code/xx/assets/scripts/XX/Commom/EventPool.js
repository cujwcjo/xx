
let CEvent = require("PublicEvent").CEvent;
var EventPool = {
    // 全局事件池
    name:"EventPool",
    mEventDict: null,
    init:function(){
        this.mEventDict = {};
    },
    addEventListen:function(type ,eventName, ...args){
        if(!this.mEventDict[type]){
            this.mEventDict[type] = new CEvent();
        }
        this.mEventDict[type].addEventListen(eventName, ...args);
    },

    delEventListen:function(type, eventName, ...args){
        if(this.mEventDict[type]){
            this.mEventDict[type].delEventListen(eventName, ...args);
        }
    },

    sendEvent:function(type, eventName, ...args){
        if(this.mEventDict[type]){
            this.mEventDict[type].sendEvent(eventName, ...args);
        }
    },

    clear:function(){
        this.mEventDict = {};
    }
}

module.exports  = EventPool;