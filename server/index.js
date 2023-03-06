const express = require('express')
const app = express()
const cors = require('cors')
//Setting
const port = 3000


//Middleware
app.use(express.json())
app.use(cors())

//Routes
app.use('/api/products', require('./routes/products'))


//listen
app.listen(port, ()=> {
    console.log('Server up in '+ port);
})
