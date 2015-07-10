var _ = require('lodash');

var mathFloat = function(){
    
};
var arrayProto = Array.prototype;

function isNumber(arr){
    var result = true;
    _.forEach(arr, function(num){
        if(!_.isNumber(num)){
            result = false;
            return false;
        }
    });
    return result;
}
function getTimeArr(arr){
    var time = 1;
    _.forEach(arr, function(num){
        time = Math.max(time, getTime(num));
    });
    return time;
}
function getTime(num){
    var str = num.toString().split('.')[1];
    if(str){
        return Math.pow(10, str.length);
    }
    return 1;
}
function singleMulti(a, b){
    var timea = getTime(a),
        timeb = getTime(b);
    var result = ((a * timea) * (b * timeb)) / (timea * timeb);
    return result;
}

var proto = {
    add: function(){
        var args = arrayProto.slice.call(arguments);
        if(!isNumber(args)){
            throw new Error('Illegal arguments!');
        }
        var time = getTimeArr(args),
            result = 0;
        _.forEach(args, function(item){
            result += item * time;
        });
        return result/time;
    },
    sub: function(){
        var args = arrayProto.slice.call(arguments);
        if(!isNumber(args)){
            throw new Error('Illegal arguments!');
        }
        var time = getTimeArr(args),
            result = args[0] * time;
        _.forEach(args, function(item, index){
            if(index !== 0){
                result -= item * time;
            }
        });
        return result/time;
    },
    multi: function(){
        var args = arrayProto.slice.call(arguments);
        if(!isNumber(args)){
            throw new Error('Illegal arguments!');
        }
        var result = 1;
        if(args.length === 1){
            return args[0];
        }else{
            _.forEach(args, function(item, index){
                if(index === 0){
                    result = singleMulti(1, item);
                }else{
                    result = singleMulti(result, item);
                }
            });
        }
        return result;
    }
};

mathFloat.prototype = proto;

module.exports = new mathFloat();
