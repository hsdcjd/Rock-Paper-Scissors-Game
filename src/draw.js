
class Draw {
  setup(player) {
    this.player = player;
  }

  currentPlayer() {
     return this.player;
  }
  makeTheDraw(userInput) {
    const computerChoice = this.getComputerRandomSelection();
    const result = this.playRockPaperScissors(userInput, computerChoice);
    this.player.updateScore(result);
    return {
      userInput: userInput,
      computerChoice: computerChoice,
      result: result
    };
  }
  playRockPaperScissors(userInput, computerChoice) {
    const options = {
      rock: { rock: 'draw', paper: 'lose', scissors: 'win' },
      paper: { rock: 'win', paper: 'draw', scissors: 'lose' },
      scissors: { rock: 'lose', paper: 'win', scissors: 'drawer' },
    };
    return options[userInput][computerChoice];
  }

  getComputerRandomSelection() {
    const randomSelection = Math.floor(Math.random() * 3);
    if (randomSelection === 0) {
      return "rock";
    } else if (randomSelection === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  }
}

export default Draw;

