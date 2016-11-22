var EventEmitter = require('eventemitter3');
var legoStore = Object.create(EventEmitter);
var legos = [
	{ id: 1, name: 'Scuba Steve', salary: 3.50},
	{ id: 2, name: 'Martin Lawrence', salary: 100000},
	{ id: 3, name: 'Gina', salary: "too much!"}

];

EventEmitter.apply(legoStore);

legoStore.get = function () {
	return legos;
};

legoStore.find = function (id) {
	return legos.find(function (lego) {
		return lego.id === id;
	});
};

module.exports = legoStore;
