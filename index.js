const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => res.send('Hello World!'));

// console.log(process.env);

app.use(express.static('/lubuto-assets'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))