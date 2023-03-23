import express from 'express';
export const router = express.Router();
import Draw from '../src/draw.js';
import Player from '../src/player.js';

router.post('/', (req, res) => {
  const draw = new Draw();
  const player1 = new Player(req.body.player1);
  draw.setup(player1);
  req.app.locals.draw = draw;

  res.redirect('/game');
})

router.get('/', (req, res) => {
  const player = req.app.locals.draw.currentPlayer();

  res.render('game', {
     player1Name: player.name
  });
})

