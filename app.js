import express from 'express';

const app = express();
const port = 4000;

app.use(express.static('public'));
app.set('view engine', 'ejs'); //sets the templating engine for the app to EJS
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

import { router as indexRouter } from './routes/index.js';
import { router as gameRouter } from './routes/game.js';
import { router as scoreRouter } from './routes/score.js';

app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/score', scoreRouter);

app.listen(4000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

export default app;
