export function init(){
    Array.prototype.indexOf = function(object){
        for(let tIndex = 0; tIndex < this.length; tIndex ++){
            if(this[tIndex] == object){
                return tIndex
            }
        }
        return -1;
    }
    Array.prototype.remove = function(object){
        let tIndex = this.indexOf(object)
        if(tIndex != -1){
            this.splice(tIndex, 1);
            return true;
        }
        return false;
    }
    Array.haveObject = function(object){
        return this.indexOf(object) != -1;
    }
}