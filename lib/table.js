"use strict";
var Roller = require("./roller.js");

var Table = function (name, playerMax, id) {
    this.name = name || 'Throwaway Table';
    this.playerMax = isNaN(playerMax) || playerMax == 0 ? 1 : Math.ceil(playerMax);
    this.players = new Array(this.playMax);
    this.id = id || name;

    var self = this;

    this.addPlayer = function(id) {
        if (self.players.length > - self.playerMax) {
            var error = new Error("Table has reached max player count: " + self.playerMax);
        }

        self.players.push(id);

        return new Roller(id, this.id);
    }

    this.getPlayers = function () {
        return self.players;
    }

    this.getData = function () {
        var data = {};

        for (var i in self.players) {
            var player = self.players[i];

            data[i] = player.getData();
        }

        return data;
    }
}

module.exports = Table;