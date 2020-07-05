//执行用时：72 ms 在所有 JavaScript 提交中击败了84.42%的用户
//内存消耗：36.2 MB, 在所有 JavaScript 提交中击败了50.00%的用户
var lemonadeChange = function(bills) {
    let five = 0;
    let ten = 0;
    let twenty = 0;
    let state = true;
    for(let i = 0; i < bills.length; i++){
        if(!check(bills[i])){
            state = false;
            break;
        }
    };
    function check(number){
        switch(number){
            case 5 :
                five += 1;
                return true;
            case 10 :
                if(five == 0){
                    return false;
                }else {
                    five--;
                    ten++;
                    return true;
                }
            case 20 : 
                if(ten > 0 && five > 0){
                    ten--;
                    five--;
                    twenty++;
                    return true;
                }else if(five >= 3){
                    five -= 3;
                    twenty++;
                    return true
                }else {
                    return false
                }
        }
    }
    return state;
};