var Rss = require('./Rss');
var mysql = require('mysql');
var dbConfig = require('../config/db.config');
var queries = require('./queries');

var conn = mysql.createConnection({
	host: dbConfig.host,
	user: dbConfig.user,
	password: dbConfig.password,
	database: dbConfig.database
});

var rssList = {
    getNext: function () {
    	conn.connect();

    	console.log('query: ');
    	console.log(queries.rssList);

    	conn.query(queries.rssList, function (err, rows, fields) {
    		console.log(rows[0]);
    	});
    	
        console.log('rssManager#getList');
        var rss = new Rss();
        rss.set('title', '고든의 블로그');
        rss.set('url', 'http://jjy0501.blogspot.com/feeds/posts/default');

		return [rss];
	}
};

module.exports = rssList;
