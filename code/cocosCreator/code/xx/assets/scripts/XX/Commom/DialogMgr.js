var EventPool = require("EventPool");
var DialogMgr = {
    name:"DialogMgr",
    mDialogDict:null,
    init:function(){
        this.mDialogDict = {};
    },

    addDialog:function(dialogName, node){
        DEBUG("OnAddDialog", dialogName, node);
        this.mDialogDict[dialogName] = node;
        EventPool.sendEvent("Dialog", "AddDialog", dialogName);
    },

    delDialog:function(dialogName){
        if(this.mDialogDict[dialogName]){
            DEBUG("OnDelDialog", dialogName);
            delete  this.mDialogDict[dialogName];
            EventPool.sendEvent("Dialog", "DelDialog", dialogName);
        }
    },

    getDialog:function(dialogName){
        return  this.mDialogDict[dialogName]    
    },

}

module.exports  = DialogMgr;