var countSubstrings = function(s) {
    let len = s.length;
    if (len < 2) return len;
    let result = 0;
    const centerSpread = function (str, left, right) {
        let len = str.length;
        let i = left;
        let j = right;
        while (i >= 0 && j < len) {
            if (str.charAt(i) === str.charAt(j)) {
                result++;
                i--;
                j++;
            } else {
                break;
            }
        }
    };
    for (let i = 0; i < len; i++) {       
        centerSpread(s, i, i);
        centerSpread(s, i, i + 1);
    }
    return result;
};