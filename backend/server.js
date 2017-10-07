const express = require('express');
const dbRoutes = require('./routes/databaseAccess.js');
const bodyParser = require('body-parser');

const app = express();

mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

// This line makes the build folder publicly available.
app.use(express.static('build'));
app.use(bodyParser.json());
app.use('/db', dbRoutes);

app.listen(3000, () => {
  console.log('Server for React Todo App listening on port 3000!')
});
