var rockPaperScissors = function(numOfRounds) {
  var options = ['rock', 'paper', 'scissors'];
  var result = [];
  
  function roops(round, roundNumber) {
    for (let i = 0; i < options.length; i++){
      round.push(options[i]);
      if(roundNumber === numOfRounds){
        result.push(round.slice());
      }else{
        roundChoice(round, roundNumber + 1);
      }
      round.pop();
    }
  }
  roops([], 1);
  return result;
}

rockPaperScissors(3);