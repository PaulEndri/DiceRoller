"use strict";
var Dice = require('./dice.js');

var Roller = function (id, activeTable) {
	this.id = id || 0;
	this.activeTable = activeTable || 0;
	this.activeDice = {};
	this.history = {};
	var self = this;

	this.setActiveTable = function (table) {
		self.activeTable = table;
	}

	this.addDie = function (die, sides) {
		self.activeDice[die] = new Dice(sides);
	}

	this.roll = function (die, times, comment, table) {
		if (!die || self.activeDice[die] === undefined) {
			var dice = new Dice(6);
			
			self.activeDive[die] = dice;
		}
		else {
			var dice = self.activeDice[die];
		}

		if (!table && !self.activeTable) {
			return dice.roll();
		}
		else if (!table) {
			table = self.activeTable;
		}

		var roll = dice.roll(times, comment, false, true);
		roll.table = table;
		roll.die = die;

		self.history.push(roll);

		return roll.value;
	}

	this.getData = function () {
		return self.history;
	}
}

module.exports = Roller;