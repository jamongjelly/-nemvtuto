var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require('cors')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors())
app.use('/api', require('./routes/api'))

app.use(express.static(path.join(__dirname, '../', 'fe', 'dist')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({ msg: err.message })
});

module.exports = app;

const mongoose = require('mongoose')
const User = require('./models/users')

mongoose.connect('mongodb://localhost:27017/nemv', { useNewUrlParser: true }, (err) => {
  if (err) return console.error(err)
  console.log('mongoose connected!')
})

// User.create({ name: '김쌈무' })
//   .then(r => console.log(r))
//   .catch(e => console.error(e))
// User.find()
//   .then(r => console.log(r))
//   .catch(e => console.error(e))
// User.updateOne({ _id: '5ea2ca288fd8ea5528dd83d0' }, { $set: { age: 21 } })
//   .then(r => {
//     console.log(r)
//       console.log('updated')
//     return User.find()
//   })
//   .then(r => console.log(r))
//   .catch(e => console.error(e))
// User.deleteOne({ name: '김쌈무' })
//   .then(r => {
//     console.log(r)
//       console.log('updated')
//     return User.find()
//   })
//   .then(r => console.log(r))
//   .catch(e => console.error(e))
