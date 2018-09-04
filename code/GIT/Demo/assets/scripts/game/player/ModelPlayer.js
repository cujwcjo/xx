var  PropSet = require("PropSet");


export class CModelPlayer extends PropSet.CPropSet{
    constructor(propSet){
        var tPropDict ={
            "name":null, //玩家名字
            "id":0,//玩家id
        }
        super(tPropDict);
        this.updateProp(propSet,false);
        this.mRoleModel = null;
    }

    setRoleModel(roleModel){
        this.mRoleModel = roleModel;
    }
    getRoleModel(){
        return this.mRoleModel;
    }
}