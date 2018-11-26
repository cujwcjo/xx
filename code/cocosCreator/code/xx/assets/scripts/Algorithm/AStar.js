/**
 * a星算法
 */
class CAStar{
    constructor() {
        this.mStartPos = {x:0, y:0};//起点
        this.mEndPos = {x:0, y:0};//终点
        this.mCheckFunc = null;// 检测回调
    }
    init(startPos, endPos, checkFunc){
        this.mStartPos.x = startPos.x;
        this.mStartPos.y = startPos.y;
        this.mEndPos.x = endPos.x;
        this.mEndPos.y = endPos.y;
        this.mCheckFunc = checkFunc;

    }

    _findPath(node){
        
    }

    _createNode(x, y, parent){
   
        return {
            pos:{x:x, y:y},
            parent:parent,
            f:0,
            g:0,
            h:0,
        }
    }

}