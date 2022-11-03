const express = require('express')
const app = express()

app.get('/',(req, res) => {
    res.send('Hello World')
})

app.get('/', (req, res) => {
  res.send('Panadda Sawangphol')
})

app.get('/getprofile', (req,res) => {
    let data = {
        name: 'Panadda Sawangphiol',
        age: 20,
        apocalypse: 'All the problem and worries you have in mind are illusion.',
        detail: 'Studying at the Faculty of Engineering Department of Multimedia and Entertainment, 2nd year, Bangkok University.'
    }
    res.send(data)
})


app.listen(3000,() => {
    console.log('Start server at port 3000.')
})