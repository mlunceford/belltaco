
const express = require('express')
const app = express();
const port = 4040
const dc = require('./dataController')
const data = require('./data.json')
// app.use(cors())
app.use(express.json())

// endpoints
//get
app.get('/api/data', dc.allData)
//post
app.post('/api/data', dc.myData)

//delete
app.delete('/api/data/:index', dc.deleteData)
//put
app.put('/api/data', dc.renameData)


app.listen(port, () => console.log(`server running on port ${port}`, data[data.length -1].name))