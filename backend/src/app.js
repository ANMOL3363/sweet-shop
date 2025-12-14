
const express = require('express');

const cors = require('cors');

require('./db'); 

const app = express();

app.use(cors());

app.use(express.json());

const authRoutes = require('./routes/auth.routes');
const sweetRoutes = require('./routes/sweet.routes');
app.use('/api/auth', authRoutes);
app.use('/api/sweets', sweetRoutes);

app.get('/', (req, res) => {
  res.send('Sweet Shop Backend is running');
});

module.exports = app;
