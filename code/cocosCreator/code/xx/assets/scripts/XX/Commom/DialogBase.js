var DialogMgr = require("DialogMgr");

cc.Class({
    extends: cc.Component,

    properties: {
        dialogName:"",
    },

    onLoad(){
        if(!this.dialogName){
            this.dialogName = this.node.name;
        }
        DialogMgr.addDialog(this.dialogName, this.node);
    },

    onDestroy:function(){
        DialogMgr.delDialog(this.dialogName);
    }

});
