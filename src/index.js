'use strict';

let has = Object.prototype.hasOwnProperty;
let str = 'http://192.168.0.101:8880/example/test.html?type=12345&name=zhangxia';

function parseToStr(str, name){
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    const urlObj = str;
    let r =urlObj.indexOf('#')>-1? urlObj.split("?")[1].match(reg) : urlObj.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

console.log('type=',parseToStr(str, 'type'));
console.log('name=',parseToStr(str, 'name'));
exports.getStrName = parseToStr;