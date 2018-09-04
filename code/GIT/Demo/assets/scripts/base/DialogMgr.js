

var DialogMgr = {
    name:"DialogMgr",
    init:function(){
        this.mDialogDict ={};
    },
    addDialog:function(dialogName, node){
        // 添加一个界面引用
        this.mDialogDict[dialogName] = node;
    },


    delDialog:function(dialogName){
        // 删除一个界面引用
        if(this.mDialogDict[dialogName]){
            delete this.mDialogDict[dialogName];
        }
        
    },

    getDialog:function(dialogName){
        // 获取一个界面引用
        let tDialogNode = this.mDialogDict[dialogName];
        if(tDialogNode){
            return tDialogNode;
        }
        
    },

    delDialogNode:function(dialogName){
        //  删除一个界面节点
        let tDialogNode = this.mDialogDict[dialogName];
        if(tDialogNode){
            tDialogNode.destroy();
        }
    }
}

module.exports = DialogMgr;
