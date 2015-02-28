var FeedParser = require('feedparser');
var request = require('request');

var Rss = function () {
	var properties = {};
	properties.articles = [];

	return {
		get: function (key) {
			return properties[key];
		},

		set: function (key, value) {
			properties[key] = value;
		},

		addArticle: function (article) {
			properties.articles.push(article);
		},

		syncNewContent: function () {
        	console.log('Rss#syncNewContent: ' + this.get('title'));
    	},
	
    	fetchRemoteContent: function () {
			var self = this;
        	var parser = new FeedParser();
	
        	return new Promise(function (resolve, reject) {
				console.log('Rss#fetchRemoteContent: ' + self.get('title'));
            	var req = request(this.get('url'));
	
            	req.on('response', function (res) {
                	this.pipe(parser);
                	resolve();
            	});
        	}).then(function () {
            	return new Promise(function (resolve, reject) {
                	parser.on('readable', function () {
                    	rss.set('meta', this.meta);
                    	while (item = this.read()) {
                        	rss.addArticle(item);
                    	}
                	});
	
                	parser.on('end', function () {
                    	resolve(rss);
                	});
            	});
        	});
    	}	
	};
};

module.exports = Rss;
