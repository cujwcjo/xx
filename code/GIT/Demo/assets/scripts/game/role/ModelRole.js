var  PropSet = require("PropSet");

// 玩家对象类

export class CModelRole extends PropSet.CPropSet{
    constructor(propSet) {
        var tPropDict ={
            "name":null, //玩家名字
            "id":0,//玩家id
            "x":0,//位置
            "y":0,
            "hp":0,//血量

        }
        super(tPropDict);
        this.updateProp(propSet,false);
    }
}