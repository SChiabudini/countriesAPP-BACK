const axios = require('axios');

const saveCountries = async (Country) => {

    try {
        const { data } = await axios('https://rest-countries.up.railway.app/v3/all');

        const countries = data.map(country => {
            return{
                id: country.cca3,
                name: country.name.common,
                flag: country.flags[0],
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