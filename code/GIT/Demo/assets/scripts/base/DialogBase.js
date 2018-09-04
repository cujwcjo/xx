var DialogMgr = require("DialogMgr");

cc.Class({
    extends: cc.Component,

    properties: {
        dialogName:"",
    },

    start:function () {
        let tDialogName = this.getDialogName();
        DialogMgr.addDialog(tDialogName, this.node);
    },
    getDialogName:function(){
        return this.dialogName?this.dialogName:this.node.name;
    },

    onDestroy:function(){
        DialogMgr.delDialog(this.getDialogName());
    },


});
