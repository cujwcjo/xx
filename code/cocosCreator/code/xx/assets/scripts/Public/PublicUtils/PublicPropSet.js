let CEvent = require("PublicEvent").CEvent;

export class CPropSet extends CEvent{
    constructor(initDict) {
        super();
        if(initDict){
            this.mPropDict = initDict;
        }
        else{
            this.mPropDict ={};
        }   
    }
    setProp(propName, value){
        // 设置一个属性
        if(this.mPropDict[propName] !=value){
            this.mPropDict[propName] = value;
            this.sendEvent("Prop_" + propName, value);
        }
    }
    getProp(propName){
        return this.mPropDict[propName];
    }

    updateProp(propDict, notRef){
        // 批量刷新属性
        let tDiffList = [];
        for(let tKey in propDict){
            if(this.mPropDict[tKey] != propDict[tKey]){
                tDiffList.push(tKey);
                this.mPropDict[tKey] = propDict[tKey];
            }
        }
        if(!notRef){
            return;
        }
        for(let tIndex = 0; tIndex < tDiffList.length; tIndex ++){
            let tPropName = tDiffList[tIndex];
            this.sendEvent("Prop_"+ tPropName, this.mPropDict[tPropName]);
        }

    }

    addRefCB(propName, ...args){
        this.addEventListen("Prop_" + propName, ...args);
    }

    addRefCBAndCall(propName, ...args){
        this.addEventListen("Prop_"+propName, ...args);
        if(typeof(args[0]) == "function"){
            let tFunc = args[0];
            let tArgs = args.slice(1);
            tArgs.concat(this.mPropDict[propName]);
            tFunc(...tArgs);
        }
        else{
            let tObj = args[0];
            let tFunc = args[1];
            let tArgs = args.slice(2);
            tArgs.concat(this.mPropDict[propName]);
            tFunc.apply(tObj, tArgs);
        }
    }

    removeRefCB(propName, ...args){
        this.delEventListen("Prop_" + propName, ...args);
    }
}