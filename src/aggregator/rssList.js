var Rss = require('./Rss');

var rssList = {
    getNext: function () {
        console.log('rssManager#getList');
        var rss = new Rss();
        rss.set('title', '고든의 블로그');
        rss.set('url', 'http://jjy0501.blogspot.com/feeds/posts/default');

		return [rss];
	}
};

module.exports = rssList;
