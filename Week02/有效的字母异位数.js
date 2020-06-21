//执行用时：272 ms , 在所有 JavaScript 提交中击败了 6.63%的用户
//内存消耗：45 MB , 在所有 JavaScript 提交中击败了14.29%的用户
var isAnagram = function (s, t) {
    let sk = s.split('');
    let tk = t.split('');
    let sl = {};
    let tl = {};
    for (let k = 0; k < sk.length; k++) {
        if (Object.keys(sl).indexOf(sk[k]) != -1) {
            sl[sk[k]] += 1;
        } else {
            sl[sk[k]] = 1;
        }
    }
    for (let k = 0; k < tk.length; k++) {
        if (Object.keys(tl).indexOf(tk[k]) != -1) {
            tl[tk[k]] += 1;
        } else {
            tl[tk[k]] = 1;
        }
    }
    let slKeys = Object.keys(sl).sort();
    let tlKeys = Object.keys(tl).sort();
    if (slKeys.length != tlKeys.length) {
        return false;
    } else {
        for (let k = 0; k < slKeys.length; k++) {
            if (slKeys[k] != tlKeys[k]) {
                return false;
            } else {
                if (sl[slKeys[k]] != tl[tlKeys[k]]) {
                    return false;
                }
            }
        }
        return true
    }
};



//执行用时：92 ms, 在所有 JavaScript 提交中击败了63.27%的用户
//内存消耗：36.4 MB, 在所有 JavaScript 提交中击败了85.71%的用户

//这个方法是抄的题解 答题思路是一样的不过 我多了很多无用的操作 用了很多无用的内存

var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }
    let hashMap = {};
    for (let i = 0; i < s.length; i++) {
        if (hashMap[s[i]] !== undefined) {
            hashMap[s[i]] += 1
        } else {
            hashMap[s[i]] = 1
        }
    }
    for (let j = 0; j < t.length; j++) {
        if (hashMap[t[j]] > 0 && hashMap[t[j]] !== undefined) {
            hashMap[t[j]]--
        } else {
            return false
        }
    }
    return true
};

//根据题解使用质数操作的 解法
//每个数组都能获取自己字母ascll的值 相乘 一样就是一个字母异位数 （未写完）
//但是做字母异位数分组的时候大数据就出了问题 也不知道行不行
var getCode = function(str){
    let list = str.split('');
    let num = 1;
    list.forEach(element => {
        num *= element.charCodeAt();
    });
    return num;
}