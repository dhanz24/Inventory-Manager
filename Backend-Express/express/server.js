const express = require('express');
const app = express();
require('dotenv').config(); // Menggunakan dotenv untuk mengakses file .env
const port = process.env.EXPRESS_PORT; // Port yang akan digunakan untuk backend
const cors = require('cors')

// Import router 
const dashboardRouter = require('./routes/dashboardRouter');
const barangRouter = require('./routes/barangRouter');
const transStokRouter = require('./routes/transStokRouter');
const userRouter = require('./routes/userRouter');
const chartRouter = require('./routes/chartRouter');
const auth = require('./routes/auth/authRouter');

// Middleware
app.use(cors())
app.use(express.json()); // Middleware untuk mengurai JSON

// Menggunakan router
app.use(auth);
app.use(dashboardRouter)
app.use(chartRouter)
app.use(barangRouter);
app.use(userRouter);
app.use(transStokRouter);


// Menjalankan server
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

if (process.env.NODE_ENV !== 'test') {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;