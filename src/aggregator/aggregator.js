var _ = require('underscore');
var rssList = require('./rssList');

var promise = Promise.resolve(rssList.getNext());

promise.then(function (list) {
	var subPromise = Promise.resolve();

	// promise.all을 쓰는 것을 고민해볼 것
	_.each(list, function (rss) {
		subPromise = subPromise.then(function () {
			rss.fetchRemoteContent();
		}).then(function (updatedRss) {
			rss.syncNewContent();
		});
	});

	subPromise.done();
});

