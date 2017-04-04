# DiceRoller
A simple dice roller for tracking dice rolls by table/players/dice

# Database?
This is as of right now a skeleton app meant to be used in conjunction with any given implementation. It is database agnostic by default but can work with any relational or NoSQL database by passing in the id/document key as methods/classes are called/instantiated.

# Sample Usage
var DiceRoller = new DiceRoller();
DiceRoller.setPlayers(DatabaseResults.Players); // Where results is an object that contains a list of player ids, active table, and etc
DiceRoller.setTables(DatabaseResults.Tables);

var table = DiceRoller.getTable(activeTable);
var players = table.getPlayers();

// Here we would cross reference the players with entries in our database

var rolls = [];

for(var i in players) {
	var player = players[i];
	player.addDie(eventDieId,20);

	rolls[i] = player.roll(eventDieId, 4, eventMessage);
}

return rolls;

