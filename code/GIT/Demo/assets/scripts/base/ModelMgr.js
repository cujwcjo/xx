

// 数据管理器

var gModelDict = {};

export function addModel(name, modelObj){
    gModelDict[name] = modelObj;
}

export function delModel(name){
    delete gModelDict[name]
}

export function getModel(name){
    return gModelDict[name]
}

export function clear(){
    gModelDict  ={};
}
