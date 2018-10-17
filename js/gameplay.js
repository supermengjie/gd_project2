let gameplayState = function() {

};

gameplayState.prototype.preload = function() {


};

gameplayState.prototype.create = function () {


  game.physics.startSystem(Phaser.Physics.ARCADE);

  //ADDING PAUSE BUTTON
  my_image = game.add.button(100,100,'pause',onClickPause);
  my_image.scale.setTo(0.2,0.2);

  home_button = game.add.button(game.world.width-200,100,'home',homeClick);
  home_button.scale.setTo(0.5,0.5);

  function homeClick(){
    game.state.start("Menu");
  }

  //START PAUSE STATE WHEN PAUSE BUTTON IS PRESSED
  function onClickPause(){
    //game.state.start("Pause");
    game.paused = true;
    // Then add the menu
    menu = game.add.sprite(game.world.width/2-400, game.world.height/2-315, 'pauseMenu');
    my_image.destroy();
    my_image = game.add.button(100,100,'play',onClickPlay);
    my_image.scale.setTo(0.2,0.2);
    //menu.anchor.setTo(0.5, 0.5);
  }

  function onClickPlay(){
    menu.destroy();
    game.paused = false;
    my_image.destroy();
    my_image = game.add.button(100,100,'pause',onClickPause);
    my_image.scale.setTo(0.2,0.2);
  }

  this.player= game.add.sprite(100,game.world.height-500, "horse");
  this.player.scale.setTo(0.5,0.5);
  game.physics.arcade.enable(this.player);
  this.player.body.gravity.y=200;
  this.player.body.collideWorldBounds = true;

  //player animations
	this.player.animations.add("run", [31,32,33,34,35,36,37,38,39,40,41], 6, true);
	this.player.animations.add("buildup", [0,1,2,3,4,5,6], 8, true);
	this.player.animations.add("charge", [7,8,9,10,11,12,13,14,15,16], 10, true);
	this.player.animations.add("jump", [22,23,24,25,26,27,28,29,30], 3, true);
	this.player.animations.add("dead", [17,18,19,20,21], 8, true);
	this.player.animations.play("run");
	this.player.anchor.setTo(0.5,0.5);
	this.player.scale.x *= -1;
	this.player.offsetY=20;

	//Building group which adds level components
	this.buildings = game.add.group();
	this.buildings.enableBody = true;
	//let assettest = this.buildings.create(0, game.world.height-600, "ground");
	let levelData = game.cache.getJSON("testlevel");
	console.log(levelData.Data.length);

	function parseBlock(Type) {
		if (Type === 1)	//Ground
		{
			return "ground";
		}
		else if (Type === 2) //Ground going up
		{
			return "groundUp";
		}
		else if (Type === 3) //Building
		{
			return "building";
		}
		else if (Type === 4) //Building going up
		{
			return "buildingUp";
		}
		else if (Type === 5) //Building going down
		{
			return "buildingDown";
		}
	};

	for (let y = levelData.Data.length-1; y >= 0; --y)
	{
		for (let x = levelData.Data[y].length-1; x >= 0; --x)
		{
			if (levelData.Data[y][x] != 0){
				if (y === 0){
					let temp = this.buildings.create(x*600, game.world.height-227, parseBlock(levelData.Data[y][x]%10));
					temp.enableBody = true;
					temp.body.immovable = true;
				}
				else{
					let temp = this.buildings.create(x*600, game.world.height-600*(y+1)+373, parseBlock(levelData.Data[y][x]%10));
					temp.enableBody = true;
					temp.body.immovable = true;
				}
			}
			//parseEnemy(0, 0, levelData.Data[x][y]/10);
			// temp.enableBody = true;
			// temp.body.immovable = true;
			//console.log(x + " " + y + " " + levelData.Data[y][x]);
		}
	}
	//console.log(levelData);

	//Controls
	let swipeCoordX, swipeCoordY, swipeCoordX2, swipeCoordY2, swipeMinDistance = 100;
	game.input.onDown.add(function(pointer) {
		swipeCoordX = pointer.clientX;
		swipeCoordY = pointer.clientY;
  }, this);
		game.input.onUp.add(function(pointer) {
			swipeCoordX2 = pointer.clientX;
			swipeCoordY2 = pointer.clientY;
			if(swipeCoordX2 < swipeCoordX - swipeMinDistance)
      {
        console.log("left");
      }
			else if(swipeCoordX2 > swipeCoordX + swipeMinDistance)
			{
        console.log("right");
        this.player.body.acceleration.x = (100*3+100)*50;
   		  this.charge=true;
   		  this.returned=false;
        this.player.animations.play("charge");
        game.time.events.add(1000, this.updateRun, this);
   		 }
       else if(swipeCoordY2 < swipeCoordY - swipeMinDistance)
       {
         console.log("up");
   		   this.player.body.velocity.y = -300;
   		   this.player.animations.play("jump");
   		   game.time.events.add(3000, this.updateRun, this);
   		  }
        else if(swipeCoordY2 > swipeCoordY + swipeMinDistance)
        {
          console.log("down");
        }
      }, this);
};

gameplayState.prototype.update = function () {
	game.physics.arcade.collide(this.player, this.buildings);


	if(this.charge){
		if(this.player.x -100 >100){
			this.player.body.acceleration.x =0;
			this.charge = false;
		}
	}

	if(!this.charge){
		if(this.player.x !== 100){
			this.player.body.acceleration.x -=100;
			this.return = true;
		}
	}
	if(this.return && this.player.x <= 100)
	{
		this.player.body.acceleration.x =0;
	}

};

gameplayState.prototype.updateRun = function(){

	this.player.animations.play("run");
}

//Call this function to place blocks using the level code
//Xpos when passed should be position in the array * 600
//Ypos when passed should be max world position - position in the array * 600
//Type should be Array value % 10

//Call this function to place enemies in the level
//Xpos when passed should be position in the array * 600
//Ypos when passed should be max world position - position in the array * 600
//Type should be Array value / 10
gameplayState.prototype.parseEnemy = function(Type) {

};
