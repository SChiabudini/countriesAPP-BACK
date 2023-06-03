const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const saveCountries = require('./src/controllers/countries/saveCountries.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  saveCountries(Country);
  console.log('Database connected');
  server.listen(3001, () => {
    console.log('Server listening at 3001'); // eslint-disable-line no-console
  });
});
