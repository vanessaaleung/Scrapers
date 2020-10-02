const rp = require('request-promise');
const $ = require('cheerio'); // parse the HTML

const scrapeBirthday = (url) => {
    return rp(url)
                .then((html) => {
                    // success
                    return {
                        name: $('.firstHeading', html).text(),
                        birthday: $('.bday', html).text()
                    }
                })
                .catch((err) => {
                    // handle error
                });
};

module.exports =  scrapeBirthday;
