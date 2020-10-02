const rp = require('request-promise');
const $ = require('cheerio'); // parse the HTML
const scrapeBirthday =  require('./birthdayScraper.js');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url)
    .then((html) => {
    	// success
    	const numOfPresidents = $('td > b > a', html).length;
    	const presidents = $('td > b > a', html);
    	const wikiUrls = [];
    	for (let i = 0; i < numOfPresidents; i++) {
    		wikiUrls.push(presidents[i].attribs.href);
    	}
    	return Promise.all(
            wikiUrls.map(function(url) {
                return scrapeBirthday('https://en.wikipedia.org' + url);
            })
        );
    })
    .then(presidents => console.log(presidents))
    .catch(function(err) {
    	// handle error
    });

