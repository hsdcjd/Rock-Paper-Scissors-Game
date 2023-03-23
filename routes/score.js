import express from 'express';
export const router = express.Router();


router.post('/', (req, res) => {
  const draw = req.app.locals.draw;
  const player = draw.currentPlayer();
  const userInput = req.body.play;
  const outcome = draw.makeTheDraw(userInput);

  const emojiMap = {
  rock: '&#x1F44A;', 
  paper: '&#x270B;', 
  scissors: '&#x270C;' 
};

  const userInputEmoji = emojiMap[outcome.userInput];
  const computerChoiceEmoji = emojiMap[outcome.computerChoice];


  res.render('score', {
    result: outcome.result,
    userInput: userInputEmoji,
    computerChoice: computerChoiceEmoji,
    player1Name: player.name,
    score: player.myScore + "-" + player.computerScore
  });
})

