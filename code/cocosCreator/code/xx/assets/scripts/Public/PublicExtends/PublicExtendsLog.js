var PublicExtendsLog = {
    name:"PublicExtendsLog",
    init:function(){
        window.D_LOG = function(...args){
            console.log(...args);
        }
    },

}
module.exports = PublicExtendsLog;