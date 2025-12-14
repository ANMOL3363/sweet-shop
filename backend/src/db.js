const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Sweet_shop')
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.log('MongoDB connection error');
    console.log(err);
  });
