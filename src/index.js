'use strict';

function decodeValue(val){
    return decodeURIComponent(val);
}

function encodeValue(val){
    return encodeURIComponent(val);
}

function parseToStr(param){
    let strArr=[];
    if(param){
        if(param instanceof Object && !Array.isArray(param)){
            Object.keys(param).forEach(key => {
                let val = param[key];
                if(typeof val === 'undefined'){
                    val = '';
                }
                // if( typeof val === 'string' ){
                //     val = val.replace(/^\s*|\s*$/g,""); //去掉字符串两边的空白符
                // }
                strArr.push([key, encodeValue(val)].join('='));
            })
        } 
    }
    
    return strArr.join('&');
}

function parseToJson(url){
    let theRequest = new Object();
    if(url){
        const index = url.indexOf("?");
        if (index != -1) {
            let str = url.substr(index+1);
            let strs = str.split("&");
            for(let i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = decodeValue(strs[i].split("=")[1]);
            }
        }
    }
    
    return theRequest;
}

// 测试代码
let strUrl = window.location.search;
console.log(parseToStr([1,2,34]));
console.log(parseToStr(null));
console.log(parseToStr({'a': 1, 'b': ' ', 'c': ' 张三 '}));
console.log(parseToJson(strUrl));

exports.getSearchParamsToObj = parseToJson;
exports.getSearchParamsToStr = parseToStr;