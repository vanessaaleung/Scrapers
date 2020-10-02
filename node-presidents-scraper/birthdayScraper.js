const rp = require('request-promise');
const $ = require('cheerio'); // parse the HTML

const scrapeBirthday = function(url) {
    return rp(url)
                .then(function(html) {
                    // success
                    return {
                        name: $('.firstHeading', html).text(),
                        birthday: $('.bday', html).text()
                    }
                })
                .catch(function(err) {
                    // handle error
                });
};

module.exports =  scrapeBirthday;
