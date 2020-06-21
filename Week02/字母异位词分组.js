
//这个解法数据多了 就有问题 没找到问题出在哪里。。。。。。。。。

//定义一个函数获取值的自定code值
var getCode = function (str) {
    let list = str.split('');
    let num = 1;
    list.forEach(element => {
        num *= element.charCodeAt()++;
    });
    return num;
}


var groupAnagrams = function (strs) {
    let arr = [];
    let list = [];
    let out = new Array();
    strs.forEach((element, i) => {
        if (arr.indexOf(getCode(element)) == -1) {
            arr.push(getCode(element))
        }
        list.push(getCode(element))
    });
    for (let k = 0; k < list.length; k++) {
        for (let l = 0; l < arr.length; l++) {
            if (list[k] == arr[l]) {
                if (out[l] == undefined) {
                    out[l] = [];
                }
                out[l].push(strs[k])
            }

        }
    }
    return out
};


/// 下面的代码也是抄的 看是看明白了 就交了这个 0.0
var groupAnagrams = function (strs) {
    let result = [];
    let temp = {};
    for (let item of strs) {
        const sort_item = item.split('').sort().join('');
        if (temp[sort_item]) {
            temp[sort_item].push(item);
        }
        else {
            temp[sort_item] = [item];
        }
    }
    for (let key in temp) {
        result.push(temp[key]);
    }
    return result;
};