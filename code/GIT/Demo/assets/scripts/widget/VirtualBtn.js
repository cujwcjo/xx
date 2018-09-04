
cc.Class({
    extends: cc.Component,

    properties: {
        nodBG:cc.Node,
        nodBall:cc.Node,
        nodArrow:cc.Node,
    },
    
    mIsClickBall:null,
    mBallOriPos :null,//球初始点的位置
    mBGR: null,// 背景的半径
    
    mMoveCB :null,//移动回调

    start () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegin, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);

        this.mBallOriPos = this.nodBall.getPosition();
        this.mBGR = this.nodBG.width/2;
        this.setDebug();
        
    },

    setMoveCB:function(cbFunc){
        this.mMoveCB = cbFunc;
    },

    onTouchBegin:function(event){
        let tPos = event.getLocation();
        tPos = this.nodBall.convertToNodeSpaceAR(tPos);
        let tVec = new cc.Vec2 (tPos, self.mBallOriPos);
        let tLength =tVec.mag();
        if(tLength <= this.mBGR){
            this.nodBall.setPosition(tPos);
            this.mIsClickBall = true;
            let tNormal = tVec.normalizeSelf();
            callFunc(this.mMoveCB, tNormal, tLength);
        }
        
    },
    onTouchMove:function(event){
        if(!this.mIsClickBall){
            return;
        }
        let tPos = event.getLocation();
        tPos = this.nodBall.convertToNodeSpaceAR(tPos);
        
        let tVec = new cc.Vec2 (tPos, self.mBallOriPos);
        let tLength = tVec.mag();
        
        if(tLength > this.mBGR){
            tLength = this.mBGR;
            let tNormal = tVec.normalizeSelf();
            tPos = tNormal.mul(tLength);
            callFunc(this.mMoveCB, tNormal, tLength);
        }

        this.nodBall.setPosition(tPos);

    },
    onTouchEnd:function(event){
        this.mIsClickBall  = false;
        console.log("结束了。。。")
        this.nodBall.setPosition(this.mBallOriPos);
    },

    setDebug:function(){    
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.mKeyInfo = {};
        
    },
    
    onKeyDown:function(event){
        console.log("OnKeyDown", event.keyCode)
        let tKeyCode = event.keyCode;
        if(tKeyCode == cc.macro.KEY_a || tKeyCode != cc.macro.KEY_w || tKeyCode != cc.macro.KEY_s|| tKeyCode != cc.macro.KEY_d){
            this.mKeyInfo[event.keyCode] = this.mKeyInfo[event.keyCode]|| 0 +1;
            this.updateKeyCode();
        }
        console.log("==-======",this.mKeyInfo)
        
        
    },
    onKeyUp:function(event){
        console.log("OnKeyUp", event.keyCode)
        this.mKeyInfo[event.keyCode] = 0;
        this.updateKeyCode();
    },

    updateKeyCode:function(){
        let x = -this.mKeyInfo[cc.macro.KEY_a]|| 0 + this.mKeyInfo[cc.macro.KEY_d]||0;
        let y = -this.mKeyInfo[cc.macro.KEY_s] || 0+ this.mKeyInfo[cc.macro.KEY_w] || 0;
        x = Math.min(x, 10);
        x = Math.max(x, -10);
        y = Math.min(y, 10);
        y = Math.max(y, -10);
        x = x /10;
        y =y /10;
        // 计算坐标
        console.log("测试/。。", x, y)
        this.nodBall.x =this.mBallOriPos.x + x* this.mBGR;
        this.nodBall.y =this.mBallOriPos.y + y* this.mBGR;
    }

});
