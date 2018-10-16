//Should just need a script to interpret level blocks
//Level blocks are 600x600 squares
//Probably only using these block codes:
/*
00
01
02
03
04
05
11
12
13
14
15
31
32
33
34
35
*/
//All of this will need to be moved into gameplay.js
//1. Preload the level data
//2. Loop through the JSon level data and place blocks
//	a. Interpret level block codes
//	b. Load block at position (x, y)
//	c. Give collision to the block
//3. Loop through the Json level data and place hazards
//	a. Interpret hazard code
//	b. Load hazard on 1/3 of block position
//	c. Add collision to hazards
//	d. Add collision to AI
let levelParser = function(){

};

levelParser.prototype.preload = function() 
{
	game.load.text("levelData", "assets/level.json");
	game.load.text("testLevel", "assets/testlevel.json");
};
//Xpos when passed should be position in the array * 600
//Ypos when passed should be max world position - position in the array * 600
//Type should be Array value % 10
levelParser.prototype.parseBlock = function(Xpos, Ypos, Type)
{
	if (Type === 1)	//Ground 
	{

	}
	else if (Type === 2) //Ground going up
	{

	}
	else if (Type === 3) //Building
	{

	}
	else if (Type === 4) //Building going up
	{

	}
	else if (Type === 5) //Building going down
	{

	}
	/*else if (Type === 6) //Building going up and down
	{

	}
	else if (Type === 7) //Building w gap
	{

	}
	else if (Type === 8) //Ground w Powerup
	{

	}
	else if (Type === 9) //Building w Powerup
	{

	}
	else //Empty space
	{

	}*/
};

//Xpos when passed should be position in the array * 600
//Ypos when passed should be max world position - position in the array * 600
//Type should be Array value % 10
levelParser.prototype.parseEnemy = function(Xpos, Ypos, Difficulty) 
{
	if (Difficulty === 1) //1 Hazard
	{

	}
	// else if (Difficulty === 2) //2 Hazards
	// {

	// }
	else if (Difficulty === 3) //1 AI
	{

	}
	// else if (Difficulty === 4) //1 Hazard 1 AI
	// {

	// }
	// else if (Difficulty === 5) //Finish zone
	// {

	// }

};