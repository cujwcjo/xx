
cc.Class({
    extends: cc.Component,

    properties: {
        clickEvents: {//点击事件
            default: [],
            type: cc.Component.EventHandler,
        },
        downEvents:{//点下事件
            default: [],
            type: cc.Component.EventHandler,
        },
        upEvents:{//抬起事件
            default:[],
            type: cc.Component.EventHandler,
        }, 
        moveEvent:{ // 移动事件
            default:[],
            type: cc.Component.EventHandler,
        },
    },

    start:function () {
        this.node.on("touchstart", this._onTouchStart, this);
        this.node.on("touchmove", this._onTouchMove, this);
        this.node.on("touchend", this._onTouchEnd, this);
        this.node.on("touchcancel", this._onTouchEnd, this);
    },


    _onTouchStart:function(event){
        LOG("TOUCH", "_onTouchStart",event);
        let self = this;
        this.downEvents.forEach(function(event){
            cc.Component.EventHandler.emitEvents(self.downEvents, event);
        })
    },
    _onTouchMove:function(event){
        LOG("TOUCH", "_onTouchMove",event);
    },

    _onTouchEnd:function(event){
        LOG("TOUCH", "_onTouchEnd",event);

    },

  
});
