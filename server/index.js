const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.get('/', (req, res) => {
    res.json({
      message: 'Hello World!',
    });
  });

app.listen('3001', ()=>{
    console.log('server is running on Port 3001')
})