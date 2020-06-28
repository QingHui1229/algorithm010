var permute = (nums) => {
    let res = []
    dfs([])
    function dfs(path) {
      if (path.length===nums.length) {
        res.push(path.slice())
      }
      for (const num of nums) {
        if (path.includes(num)) continue
        path.push(num)
        dfs(path)
        path.pop()
      }
    }
    return res
  }