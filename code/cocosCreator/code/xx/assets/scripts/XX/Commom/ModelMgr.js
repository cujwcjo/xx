var ModelMgr ={
    name:"ModelMgr",
    mModelDict:null,
    init:function(){
        this.mModelDict = {};
    },

    addModel:function(name, modelObj){
        this.mModelDict[name] = modelObj;
    },

    delModel:function(name){
        if(this.mModelDict[name]){
            delete  this.mModelDict[name];
        }
    },
    getModel:function(name){
        return this.mModelDict[name];
    }
}
module.exports = ModelMgr;