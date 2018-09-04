var Utils_Funcotr = require("Utils_Funcotr");

module.exports.CFunctor = Utils_Funcotr.CFunctor;

export function functor(...args){
    if(args.length == 1 && args[0] instanceof Utils_Funcotr.CFunctor){
        return args;
    }
    return new Utils_Funcotr.CFunctor(...args);
}

export function delegate(obj, func, ...args){
    return function(...args1){
        args1 = args1.concat(self.mArgs);
        func.apply(obj, ...args1);
    }
}


