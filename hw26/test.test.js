const axios = require('axios');
const { Validator } = require('jsonschema');
const googleSearchSchema = require('./data/googleSearch-v-1.json');
const validator = new Validator();
const encodedParams = new URLSearchParams();
encodedParams.append("q", "English is hard, but detectably so");
describe ('Testing api', function() {
    test(`should status code equal 200 on the website google-translate.com by languages`, async () => {
        const response = await axios({
            method: 'GET',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages', 
            headers: {
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': '6ca0c413f7mshbdada5f8cbe8e39p1aa796jsn9a8ddb20d513',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            }
        });
        await expect(response.status).toEqual(200);
    })
    test(`should status code equal 200 on the website covid-193.p.rapidapi.com by countries`, async () => {
        const response = await axios({
            method: 'GET',
            url: 'https://covid-193.p.rapidapi.com/countries',
            headers: {
                'X-RapidAPI-Key': '6ca0c413f7mshbdada5f8cbe8e39p1aa796jsn9a8ddb20d513',
                'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
            }
        });
          await expect(response.status).toEqual(200);
    })
    test(`should status code equal 200 on the website covid-193.p.rapidapi.com by statistics`, async () => {
        const response = await axios({
            method: 'GET',
            url: 'https://covid-193.p.rapidapi.com/statistics',
            headers: {
                'X-RapidAPI-Key': '6ca0c413f7mshbdada5f8cbe8e39p1aa796jsn9a8ddb20d513',
                'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
            }
        });
        await expect(response.status).toEqual(200);
    })    
    test(`should status code equal 200 on the website google-translate.com method POST`, async () => {
        const options = await axios( {   
            method: 'POST',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': '6ca0c413f7mshbdada5f8cbe8e39p1aa796jsn9a8ddb20d513',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            data: encodedParams
        });
            await expect(options.status).toEqual(200);    
    });
    test(`should be apropriate json schema website googleSearch`, async () => {
        const response = await axios ( {
            method: 'get',
            url: 'https://google-search3.p.rapidapi.com/api/v1/video/q=iphone+reviews',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': '6ca0c413f7mshbdada5f8cbe8e39p1aa796jsn9a8ddb20d513',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        })
        let validationResult = await validator.validate(response.data, googleSearchSchema);
        await expect(validationResult.errors.length).toEqual(0);
    })
})