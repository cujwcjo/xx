var CtrlMap = {
    name:"CtrlMap",
    mMapModel:null,
    mGridW:null,
    mGridH:null,

    initMapModel:function(id, mapObj){
        //初始化数据对象
        let tMapSize = mapObj.getMapSize();
        let tGridSize =mapObj.getTileSize();
        this.mGridW = tGridSize.width;
        this.mGridH = tGridSize.height;
        
        // 获取起点跟终点

        let tStartObj = mapObj.getObjectGroup("start").getObjects()[0];;
        let tStartRC = this.pos2rc(tStartObj.x, tStartObj.y);
        let tEndObj = mapObj.getObjectGroup("end").getObjects()[0];;
        let tEndRC = this.pos2rc(tEndObj.x, tEndObj.y);

        // 道路
        let tRoadObj = mapObj.getLayer("road");
        console.log(tRoadObj);
        // 快速寻找道路
        let tRoadList = [];
        let tCheckDict ={};
        let tGetIdFunc = function(r,c){
            return r*10000 +c;
        }
        let tFindRoadFunc = function(r, c){
            if(r< 0 || r>=tGridSize.height || c< 0 ||c>=tGridSize.width){
                return;
            }
            let tId = tGetIdFunc(r,c);
            if(tCheckDict[tId]){
                return;
            }   
            tCheckDict[tId] = true;
            if(tRoadObj.getTileGIDAt(c,r)){
                tRoadList.push({r:r,c:c});
                tFindRoadFunc(r+1, c);
                tFindRoadFunc(r-1,c);
                tFindRoadFunc(r,c+1);
                tFindRoadFunc(r, c-1);
            }
        }
        tFindRoadFunc(tStartRC.r,tStartRC.c);
        var tInitDict = {
            id:id,
            width:tMapSize.width,
            height:tMapSize.height,
            gridW:tGridSize.width,
            gridH:tGridSize.height,

            monsterStartRC:tStartRC,
            monsterEndRC:tEndRC,
            monsterPath:tRoadList,
        }

        let CModelMap = require("ModelMap").CModelMap;
        this.mMapModel = new CModelMap(tInitDict);
        require("ModelMgr").addModel("Map", this.mMapModel);
    },

    pos2rc:function(x, y){
        // 屏幕坐标转换成格子坐标
        return {
            r:Math.floor( x / this.mGridH),
            c:Math.floor( y / this.mGridH),
        }
    },

    rc2pos:function(r,c){
        // 格子坐标转转成屏幕坐标

    },




}

module.exports  = CtrlMap;