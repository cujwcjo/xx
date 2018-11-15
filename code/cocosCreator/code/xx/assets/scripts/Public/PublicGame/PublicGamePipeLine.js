var PublicGamePipeLine = {
    name:"PublicGamePipeLine",
    init:function(){
        let tAssetPipeLine = cc.loader.assetLoader;
        cc.loader.insertPipe(tAssetPipeLine,new PipeLine())
        
    }

    

}

var PipeLine = function(){
    this.id = "SpriteResPath";
    
}
PipeLine.prototype.handle = function(item, callBack){
    callBack(null, item);
}

module.exports = PublicGamePipeLine;