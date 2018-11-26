var CPropSet = require("PublicPropSet").CPropSet;


class CModelMonster extends CPropSet{
    constructor(initDict){
        let tInitProp = {
            "id":0,// 怪物id
            "pos":null,//怪物位置
            "dir":0,// 朝向
        }
        super(tInitProp);
        this.updateProp(initDict, false);
    }

}

