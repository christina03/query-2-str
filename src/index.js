'use strict';

let has = Object.prototype.hasOwnProperty;
let strUrl = 'http://192.168.0.101:8880/example/test.html?type=12345&name=zhangxia';

function parseToJson(url){
    let theRequest = new Object();
    const index = url.indexOf("?");
    if (index != -1) {
        let str = url.substr(index+1);
        let strs = str.split("&");
        for(let i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

console.log(parseToJson(strUrl));

exports.getParamsToObj = parseToJson;