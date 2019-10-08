'use strict';

let strUrl = window.location.search;

function decodeValue(val){
    return decodeURIComponent(val);
}

function encodeValue(val){
    return encodeURIComponent(val);
}

function parseToStr(param){
    let strArr=[];
    if(param){
        if(typeof param === 'object'){
            Object.keys(param).forEach(key => {
                let val = param[key];
                if(typeof val === 'undefined'){
                    val = '';
                }
                strArr.push([key, encodeValue(val)].join('='));
            })
        } 
    }
    
    return strArr.join('&');
}

console.log(parseToStr(strUrl))
console.log(parseToStr({'a': 1, 'b': 2}))

function parseToJson(url){
    let theRequest = new Object();
    if(url){
        const index = url.indexOf("?");
        if (index != -1) {
            let str = url.substr(index+1);
            let strs = str.split("&");
            for(let i = 0; i < strs.length; i ++) {
                theRequest[strs[i].split("=")[0]]=decodeValue(strs[i].split("=")[1]);
            }
        }
    }
    
    return theRequest;
}

console.log(parseToJson(strUrl));

exports.getSearchParamsToObj = parseToJson;
exports.getSearchParamsToStr = parseToStr;