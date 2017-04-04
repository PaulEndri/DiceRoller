var Dice = require('./dice.js');
var Roller = require('./roller.js');
var Table = require('./table.js');

var core = function () {
    this.tables = [];
    this.players = [];

    var self = this;

    this.createTable = function (name, maxPlayers) {
        var table = new Table(name, maxPlayers);

        self.tables.push = table;
        return table;
    }

    this.createPlayer = function (id) {
        var player = new Roller(id);

        self.players.push(player);
    }

    this.quickRoll = function (sides, times, seperate = false) {
        var dice = new Dice(sides);

        if (seperate) {
            var rolls = []
            for (var i = 0; i < times; i++) {
                rolls.push(dice.roll());
            }

            return rolls;
        }

        return dice.roll(times);
    }

    this.setTables = function(tables) {
        self.tables = tables;
    }

    this.setPlayers = function (players) {
        self.players = players;
    }

    this.getTable = function (table) {
        return self.tables[table] !== undefined ? self.tables[table] : false;
    }

    this.getPlayer = function (player) {
        return self.players[player] !== undefined ? self.players[player] : false;
    }

    this.getTables = function (tables) {
        var data = {};

        for (var i in tables) {
            var table = self.getTable[i];

            if (table) {
                data[i] = table;
            }
        }

        return data;
    }

    this.getPlayers = function (players) {
        var data = {};

        for (var i in tables) {
            var player = self.getPlayers[i];

            if (table) {
                data[i] = player;
            }
        }

        return data;
    }
}

module.exports = core;