const axios = require('axios');

const saveCountries = async (Country) => {

    try {
        const { data } = await axios('https://restcountries.com/v3.1/all');

        const countries = data.map(country => {
            return{
                id: country.cca3,
                name: country.name.common,
                flag: country.flags && country.flags.png ? country.flags.png : 'No tiene bandera',
                continent: country.continents[0],
                capital: country.capital && country.capital[0] ? country.capital[0] : 'No tiene capital',
                subregion: country?.subregion,
                area: country.area,
                population: country.population
            }
        })

        await Country.bulkCreate(countries, {ignoreDuplicates: true});

    } catch (error) {
        throw new Error(error);
    }

}

module.exports = saveCountries;
