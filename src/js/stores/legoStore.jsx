var EventEmitter = require('eventemitter3');
var legoStore = Object.create(EventEmitter);
var legos = [];

EventEmitter.apply(legoStore);

legoStore.get = function () {
	return legos;
};

legoStore.find = function (id) {
	return legos.find(function (lego) {
		return lego.id === id;
	});
};

legoStore.fetchLegos = function (offset) {
	offest = offset || 0;

	$.ajax({
		url: 'http://brickset.com/tools/webservices/v2/apikey=QK7V-K9Pc-HH1l' + offset,
		success: function (response) { 
			var results = response.data.results;
			legos = legos.concat(results);
			legoStore.emit('update');
		}
	});

	return legos;
};

module.exports = legoStore;

//api key
//epispvfmm0kekvrajkbrj0bnovg19k2tm5fg18opf5ta2r4ms67r9nf8rdjj67ek