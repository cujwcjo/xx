var PublicLoader = {
    name:"PublicLoader",

    loadRes:function(url, type, loadEndCB){
       cc.loader.loadRes(url, type, function(err, res){
            if(err){
                D_LOG("Load Res Error", err);
            }
            loadEndCB && loadEndCB(res);
       }) 
    },
    

}


module.exports =PublicLoader;