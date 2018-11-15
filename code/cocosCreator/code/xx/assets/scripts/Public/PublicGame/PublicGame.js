// 公共游戏逻辑模块
var PublicGame = {
    name:"PublicGame",
    mRootNode:null, // 根节点
    init:function(rootNode){
        // rootNode 不在canvans上的节点
        this.mRootNode = rootNode;
        cc.game.addPersistRootNode(rootNode);
    
    },


    getRootNode:function(){
        return this.mRootNode;
    },

    setGameFrame:function(frame){
        // 设置游戏帧率
        cc.game.setFrameRate (frame);
    },


   
   
    
}

module.exports = PublicGame;