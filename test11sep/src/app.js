const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('hbs');
const app = express();

mongoose.connect('mongodb://mongo:27017/express-mongo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const apiRouter = require('./routes/api');

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/api', apiRouter);

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});