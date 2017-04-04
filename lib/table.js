"use strict";
var Roller = require("./roller.js");

var Table = function (name, playerMax) {
    this.name = name || 'Throwaway Table';
    this.playerMax = isNaN(players) || players == 0 ? 1 : Math.ceil(players);
    this.players = new Array(this.playMax);
    this.id = 0;

    var self = this;

    this.addPlayer = function(id) {
        if (self.players.length > - self.playerMax) {
            var error = new Error("Table has reached max player count: " + self.playerMax);
        }

        self.players.push(id);

        return new Roller(id);
    }
}

module.exports = Table;