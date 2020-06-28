学习笔记
回溯算法自己想是真的难 不过目前可以看懂答案写的代码了 
感觉需要多被几套代码 让自己的脑子里有点模板 要不然光想是真的不行
感觉有时候逻辑处理和递归差不多
先是部分数据初始化 
再是子节点的逻辑处理 这个就要递归了 然后传参的话一般都需要父节点的
逻辑处理在这段代码结束前 还应有一段 数据处理函数 处理一些不需要的变量 或 在回溯时处理数据
var permute = (nums) => {
    let res = [] //数据初始化
    dfs([])
    function dfs(path) {
        //条件判断
      if (path.length===nums.length) {
        res.push(path.slice())
      }
      for (const num of nums) {
          //子节点的数据处理
        if (path.includes(num)) continue
        path.push(num)
        dfs(path) //递归处理
        path.pop() //回溯完成后的数据处理
      }
    }
    return res
  }