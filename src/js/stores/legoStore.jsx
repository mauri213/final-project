var EventEmitter = require('eventemitter3');
var legoStore = Object.create(EventEmitter);
var legos = [];

EventEmitter.apply(legoStore);

legoStore.get = function () {
	return legos;
};

// legoStore.find = function (id) {
// 	return legos.find(function (lego) {
// 		return lego.id === id;
// 	});
// };

legoStore.fetchLegos = function (offset) {
	offest = offset || 0;

	$.ajax({
		url: 'https://gateway.marvel.com/v1/public/characters?apikey=507d1910c614c046ed94c1e4643096a2&offset=' + offset,
		success: function (response) { 
			var results = response.data.results;
			legos = legos.concat(results);
			legoStore.emit('update');
		}
	});

	return legos;
};
// https://gateway.marvel.com/v1/public/characters?apikey=507d1910c614c046ed94c1e4643096a2&offset=



module.exports = legoStore;
