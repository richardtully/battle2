const express = require('express')
const app = express()
const port = 3000
const Attack = require('./js functionality/attack');
const Game = require('./src/Game');

let game = new Game();

//viewengine
app.set('viewengine','ejs');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.post('/battle',(req,res) => {

  
  if (req.body.p1Name) {
    console.log('game is now starting*************')
    game.start(req.body.p1Name, req.body.p2Name);
  } else {
    console.log('game is attacking*****************')
    game.attack()
  }

  res.render('battle.ejs', {
    p1Name: game.p1.name,
    p2Name: game.p2.name,
    p1hp: game.p1.hp,
    p2hp: game.p2.hp,
    attackLog: game.attackLog,
    turnName: game.turnTracker[0].name,
    gameStatus: game.gameStatus
  })
})


app.post('/battle-attack',(req,res) => {
  

  res.render('battle.ejs', {
    p1Name: game.p1.name,
    p2Name: game.p2.name,
    p1hp: game.p1.hp,
    p2hp: game.p2.hp,
    attackLog: game.attackLog,
    turnName: game.turnTracker[0].name
  })
})

// Put the post request into a function?
// app.post('/battle-update', postAttack()
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
