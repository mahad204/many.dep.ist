const db = require('./config/db.js');
const express = require('express')
const app = express()

require('dotenv').config()


app.post('/users', (req, res) => {
  db.query(`INSERT INTO users(username, password) VALUES('ubaid', '')`, (err, result) => {
    if(err){
        res.send(err)
    }else{
        res.send(result)
    }
    res.end()
  })
});
db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
    }else{
      console.log(result);
    }
  });
  
app.get('/', (req, res) => {
  res.send('Hello World')
})

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})