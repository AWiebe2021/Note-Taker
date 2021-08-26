const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
// const apiRoutes = require('./Develop/db');
const htmlRoutes = require('./Develop/routes/');
const { notes } = require('./Develop/db/db.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./Develop/public'));

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

// app.use('/api/notes', apiRoutes);
// app.use('/notes', htmlRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
