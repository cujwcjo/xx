var EventBase = require("EventBase");


// 属性集合

export class CPropSet extends EventBase.CEventBase{
    constructor(propDict){
        super();
        this.initProp(propDict);
    }
    
    initProp(propDict){
        if(propDict){
            this.mPropDict = propDict;
        }
        else{
            this.mPropDict = {};
        }
    }

    setProp(name, value, refFlag = true){
        if(this.mPropDict[name] && this.mPropDict[name] == value){
            return;
        }
        this.mPropDict[name] = value;
        if(refFlag){
            this.sendEvent(String.format("Prop_{0}", name), value);
        }
        
    }

    getProp(name){
        if(this.mPropDict[name]){
            return this.mPropDict[name];
        }
    }

    updateProp(propDict,refFlag = true){
        let tUpdateDict ={};
        for(let tName in propDict){
            if(propDict[tName] != this.mPropDict[tName]){
                this.mPropDict[tName] = propDict[tName];
                tUpdateDict[tName] = propDict[tName];
            }
        }
        if(refFlag){
            for(let tName in tUpdateDict){
                this.sendEvent(String.format("Prop_{0}", tName), tUpdateDict[tName])
            }
        }
    }
    
    addRef(name, ...funcArgs){
        if(!this.mPropDict[name]){return}
        this.addListenFunc(String.format("Prop_{0}", name), ...funcArgs);
    }
    
    addRefAndCall(name, ...funcArgs){
        if(!this.mPropDict[name]){return}
        this.addListenFunc(String.format("Prop_{0}", name), ...funcArgs);
        let arg = funcArgs.concat(this.mPropDict[name]);
        callFunc(...arg);
    }

    removeRef(name, ...funcArgs){
        if(this.mPropDict[name]){
            this.delListenFunc(String.format("Prop_{0}", name), ...funcArgs);
        }
    }
}
