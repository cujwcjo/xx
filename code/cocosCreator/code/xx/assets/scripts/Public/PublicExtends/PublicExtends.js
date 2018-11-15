// 扩展模块 

var  PublicExtends = {
    name:"PublicExtends",
    init:function(){
        require("PublicExtendsArray").init();
        require("PublicExtendsString").init();
        require("PublicExtendsObject").init();
        require("PublicExtendsLog").init();
    },

}
module.exports = PublicExtends;