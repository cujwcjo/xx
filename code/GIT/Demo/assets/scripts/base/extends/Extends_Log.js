export function init(){
    window.LOG = function(logType, ...args){
        console.log(logType," DEBUG : ", ...args);
    }
}