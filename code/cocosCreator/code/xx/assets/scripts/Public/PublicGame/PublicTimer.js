// 公共定时器模块
let functor = require("PublicFunctor").functor;
var PublicTimer = {
    name:"PublicTimer",
    init:function(){
        this.mTimerId = 0;// 定时器id
        this.mTimerDict = {}; //定时器字典
        this.mUpdateCnt = 0;// 正在刷新的个数

    },
    timer:function(interval, cnt, ...funcArgs){
        // 创建一个定时器
        //@param interval 定时器的间隔
        //@param cnt 循环的次数
        //@param funcArgs 回调参数列表
        //@return 定时器id
        let tFunctorObj = functor(...funcArgs);
        this.mTimerId ++;
        this.mTimerDict[this.mTimerId] = {
            funcObj:tFunctorObj, // 函数对象
            id:this.mTimerId, //定时器id
            interval:interval, // 间隔
            cnt:cnt, // 更新次数
            left:interval,//剩余的事件
        }
        this.mUpdateCnt ++;
        return this.mTimerId;
    },

    delTimer:function(timerId){
        //param 删除定时器
        //@ timerId 定时器id
        if(this.mTimerDict[timerId]){
            delete this.mTimerDict[timerId];
            this.mUpdateCnt --;
        }
    },

    update:function(dt){
        if(this.mUpdateCnt){
            for(let tTimerId in this.mTimerDict){
                let tTimerDict = this.mTimerDict[tTimerId];
                if(!this._updateOneTimer(dt, tTimerDict)){
                    this.delTimer(tTimerId);
                }
            }   
        }
    },
    _updateOneTimer:function(dt, timeObj){
        timeObj.left = timeObj.left - dt;
        if(timeObj.left <= 0){
            timeObj.funcObj.call();
            timeObj.cnt = timeObj.cnt-1;
            if(timeObj.cnt <= 0){
                return false;
            }
            timeObj.left = timeObj.interval + timeObj.left;
        }
        
        return true;
    },

    
}

module.exports = PublicTimer;
