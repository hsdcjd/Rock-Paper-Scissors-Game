class Player {
  constructor(player) {
    this.name = player;
    this.myScore = 0;
    this.computerScore = 0;
  }

  updateScore(result) {
    switch (result) {
      case "win":
        this.myScore += 30;
        break;
      case "lose":
        this.computerScore += 30;
        break;
      case "draw":
        this.myScore += 10;
        this.computerScore += 10;
        break;
    } 
  }
}

export default Player;
