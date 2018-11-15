// 公共模块初始化 脚本需要挂不在canvans上在单独的节点
cc.Class({
    extends: cc.Component,
    onLoad:function(){
        // 初始化扩展模块
        require("PublicExtends").init();
        require("PublicGame").init();
        this._initModel();
    },
    

    update:function(dt){
        this.mTimer.update(dt);
    },
    
    _initModel:function(){
        this.mTimer = require("PublicTimer");
        this.mTimer.init();
    },


});
