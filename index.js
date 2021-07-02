var subsets = function(nums) {
  const res = [];
  const tem = []
  debugger
  const order = () => {
      res.push([...tem]);
      for(let i = 0; i < nums.length; i++) {
          tem.push(nums[i]);
          order();
          
      }
  }
  order();
  return res;
};
console.log(subsets([1,2,3]))