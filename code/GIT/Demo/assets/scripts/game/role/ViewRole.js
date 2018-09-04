
cc.Class({
    extends: cc.Component,

    properties: {
       
    },
    

    mRoleModel:null,
    init:function(roleModel){
        this.removeEvent();
        this.mRoleModel = roleModel;
        this.initEvent();
    },

    initEvent:function(){
        this.mRoleModel.addRefAndCall("x", this, this.updateX);
        this.mRoleModel.addRefAndCall("y", this, this.updateY);
        this.mRoleModel.addRefAndCall("hp", this, this.updateHP);
    },

    removeEvent:function(){
        if(this.mRoleModel){
            this.mRoleModel.removeRef("x", this, this.updateX);
            this.mRoleModel.removeRef("y", this, this.updateY);
            this.mRoleModel.removeRef("hp", this, this.updateHP);
        }
        
    },

    updateX:function(x){
        this.node.x = x;
    },

    updateY:function(y){
        this.node.y = y;
    },

    updateHP:function(hp){
        // 刷新血条
    },

  
});
