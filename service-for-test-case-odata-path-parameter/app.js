const express = require('express')

const hostname = '0.0.0.0'
const port = 3000

const app = express()

app.get('/thingies\\(\':thingyId\'\\)', (req, res) => {
  /*
  I cannot really explain why parentheses MUST be prefixed by TWO backslashes,
  while simple quotes MUST be prefixed by ONE backslash :-|
  */
  const thingyId = req.params.thingyId
  console.log(`thingyId = ${thingyId}`)
  if (thingyId === '1001') {
    res.status(200).json({
      id: 1001,
      message: "Hello!"
    })
  } else {
    res.status(404).end()
  }
})

app.listen(port, hostname, () => {
  console.log(`Server is listening on http://${hostname}:${port}`)
})

/*
$ curl "localhost:3000/thingies('1001')"
{"id":1001,"message":"Hello!"}
*/