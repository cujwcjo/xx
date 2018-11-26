
cc.Class({
    extends: cc.Component,
    properties:{
        rootNode:cc.Node,
    },
    ctor:function(){
      //  window.self = null;
    },

    onLoad:function(){
        // 初始化通用模块
        require("EventPool").init();
        require("DialogMgr").init();
        require("ModelMgr").init();


        require("PublicGame").setGameFrame(30);
    

    },

    

   

});
