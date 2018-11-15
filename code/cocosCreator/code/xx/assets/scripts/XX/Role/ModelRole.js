var CPropSet = require("PublicPropSet").CPropSet;


class CModelRole extends CPropSet{
    constructor(initDict){
        let tPropDict= {
            "name":"",//角色名称
            "id":0,//角色id


            // 基础属性
            "body":0,// 肉身
            "godSea":0,//神海

            // 战斗相关属性
            "atk":0,//物理攻击
            "def":0,//物理防御
            "magicAtk":0,//法术攻击
            "magicDef":0,//法术防御

        }
        super(tPropDict);
        this.updateProp(initDict, true);

    }

}