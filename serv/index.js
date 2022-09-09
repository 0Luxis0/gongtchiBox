const expr = require('express')
const cors = require('cors')

const main = expr()

main.use(cors())

const port = 5000

main.get('/', (req,res) => {
  console.log('AYO')
  res.send("gAJOROO")
})
main.listen(port, () => {console.log("ok", port)})


