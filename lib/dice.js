"use strict";
var validation = require('./validation.js');

var Dice = function (sides, roller, table, modifier, base) {
    this.sides    = sides;
    this.modifier = +modifier || 0;
    this.base     = +base || 0;
    this.rolls    = [];

    var self = this;

    validation.validate(sides, 'number');

    this.roll = function (times, comment, base = false, full = false) {
        var total   = 0;
        var details = [];
        times = isNaN(times) || times == 0 ? 1 : Math.ceil(times);

        for(var i = 0; i < times; i++) {
            var singleValue = self.singleRoll(base === true);
            total += singleValue;
            details.push(singleValue);
        }

        var fullDetails = {
            times   : times,
            value   : total,
            rolls   : details,
            comment : comment
        };

        self.rolls.push(fullDetails);

        if(full) {
            return fullDetails;
        }

        return total;
    }

    this.singleRoll = function (ignore) {
        var value     = Math.random();
        var rollValue = Math.ceil(value * self.sides);

        return self.evalRoll(rollValue, ignore);
    }

    this.evalRoll = function (value, ignore) {
        if (ignore === true) {
            return value;
        }

        return Math.max(value + self.modifier, self.base);
    }

    this.viewRolls = function() {
        return self.rolls;
    }
}

module.exports = Dice;