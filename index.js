const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const saveCountries = require('./src/controllers/countries/saveCountries.js');
const port = process.env.PORT || 3001;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  saveCountries(Country);
  console.log('Database connected');
  server.listen(port, () => {
    console.log(`Server listening at ${port}`); // eslint-disable-line no-console
  });
});
