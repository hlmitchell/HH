function rockPaperScissors(num) {
  const arr = ['rock', 'paper', 'scissors'];
  const result = [];
  
  function roops(solo = [], count = 1) {
    for (let i = 0; i < arr.length; i += 1){
      solo.push(arr[i]);
      if (count === num){
        result.push(solo.slice());
      } else {
        roops(solo, count + 1);
      }
      solo.pop();
    }
  }
  roops();
  return result;
}

console.log(rockPaperScissors(3));