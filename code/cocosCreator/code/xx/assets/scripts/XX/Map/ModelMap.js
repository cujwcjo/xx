var CPropSet = require("PublicPropSet").CPropSet;

// 地图数据对象
export class CModelMap extends CPropSet{
    constructor(initDict){
        var tInitInfo ={
            "id":0,// 地图id
            "width":0,//地图宽
            "height":0,//地图高
            "gridW":0,// 格子宽度 
            "gridH":0,// 格子高度
            "monsterStartRC":null,//怪物起点
            "monsterEndRC":null,//怪物终点
            "monsterPath":null,// 怪物的路径列表
        }
        super(tInitInfo);
        this.updateProp(initDict, true);


    }

}