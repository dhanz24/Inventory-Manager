const express = require('express')
const app = express()
const port = 3000 //port yang akan jalan untuk di backend
require('dotenv').config();
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('inventory', 'admin', 'admin', {
    host: 'localhost',
    port: '5431',
    dialect: 'postgres'
  });

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})