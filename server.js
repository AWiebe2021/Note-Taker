const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./db/');
const htmlRoutes = require('./public/');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.use('/api/notes', apiRoutes);
app.use('/notes', htmlRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
