const express = require('express')

const app = express()

app.get('/', (res, req) => req.send('Goodbye!'))

app.listen(3000, () => console.log('Goodbye listening on port 3000'))