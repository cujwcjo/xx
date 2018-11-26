
cc.Class({
    extends: cc.Component,

    properties: {
        sprBG:cc.Sprite,
        tiledMapObj:cc.TiledMap,
    },


    onLoad:function(){
        this.init(1);
    },

    init:function(id){
        let self = this;
        require("PublicLoader").loadRes("map/map"+ id, cc.TiledMapAsset, function(res){
            if(res){
                self.tiledMapObj.tmxAsset = res;
                require("CtrlMap").initMapModel(id,self.tiledMapObj);
            }
        })
    }


});
