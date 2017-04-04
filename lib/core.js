var Dice = require('./dice.js');
var Roller = require('./roller.js');
var Table = require('./table.js');

var core = function () {
    this.tables = [];
    this.players = [];
    this.die = [];

    var self = this;

    this.createTable = function(name, maxPlayers) {
        var table = new Table(name, maxPlayers);

        self.tables.push = table;
        return table;
    }

    this.createPlayer = function (id, name) {
        var player = new Roller(id, name);

        self.players.push(player);
    }

    this.quickRoll = function (sides, times) {
        var dice = new Dice(sides);

        return dice.roll(times);
    }
}

module.exports = core;