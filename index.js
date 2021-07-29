const express = require('express')
const app = express()
const port = 3000

app.set('viewengine','ejs');
app.use(express.urlencoded({extended: true}));

const indexRouter = require('./routes/indexRouter')
app.use('/', indexRouter)

const battleRouter = require('./routes/battleRouter')
app.use('/battle', battleRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
