/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    // 读懂题目含义，即在机器人正方向前面commands[i]之内存在障碍物，则机器人在
    // obstacles[i]之前一个点进行commands[i+1]的动作来绕开
    
      
      let maxLen=0;
    
      // 需要随时记录机器人的方向变化
      const direction=[[0,1],[1,0],[0,-1],[-1,0]]
      let i=0; //记录方向索引
      
      const cur=[0,0]
      for(const cmd of commands){
        switch(cmd){
            case -2:{
                if(i===0) i=3;
                else i-=1;
            };break;
            case -1:{
                if(i===3)i=0;
                else i+=1
            };break;
    
            default:move(cur,direction[i],cmd);maxLen=Math.max(maxLen,cur[0]*cur[0]+cur[1]*cur[1]);
        }
      }
    
      return  maxLen;
    
      /**
       * 当前位置cur
       * dir表示运动方向
       * step表示最大运动距离
       */
      function move(cur,dir,step){
       
        for(let i=1;i<=step;i++){
            let flag=true;
    
            cur[0]=cur[0]+dir[0];
            cur[1]=cur[1]+dir[1]
            for(const obstacle of obstacles){
                if(obstacle[0]===cur[0] && obstacle[1]===cur[1]){
                    cur[0]=cur[0]-dir[0];
                    cur[1]=cur[1]-dir[1];
                    flag=false;
                    break;
                }
            }
    
            if(!flag) break;
        }
      }
    };