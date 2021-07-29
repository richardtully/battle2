const express = require('express')
const router = express.Router()
const Game = require('../src/Game');

router.post('/',(req,res) => {

  if (req.body.p1Name) {
    let game = new Game();
    game.start(req.body.p1Name, req.body.p2Name);
    req.app.locals.game = game
  } 
  else req.app.locals.game.attack()
  console.log(req.app)

  res.render('battle.ejs', {
    p1Name: req.app.locals.game.p1.name,
    p2Name: req.app.locals.game.p2.name,
    p1hp: req.app.locals.game.p1.hp,
    p2hp: req.app.locals.game.p2.hp,
    attackLog: req.app.locals.game.attackLog,
    turnName: req.app.locals.game.turnTracker[0].name,
    gameStatus: req.app.locals.game.gameStatus
  })
})

module.exports = router