const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.status(200).send('Leah Sanchez')
})

app.get('/search',(req,res)=>{
    res.send('Search')
})

app.get('/pics',(req,res)=>{
    res.send('No pics')
})

app.get('/initial',(req,res)=>{
    res.send('Hello World')
})

app.get('*', (req, res)=>{
    res.status(404).send()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})