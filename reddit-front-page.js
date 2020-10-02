const puppeteer = require('puppeteer'); // control a headless browser
const $ = require('cheerio'); // parse the page
const url = 'https://www.reddit.com/';

puppeteer
	.launch()
	.then(browser => browser.newPage())
	.then((page) => {
		return page.goto(url).then(function() {
			return page.content();
		})
	})
	.then((html) => {
		$('h3', html).each(function() {
			console.log($(this).text());
		});
	})
	.catch((err) => {
		// handle error
	});
