let gameplayState = function() {

};

gameplayState.prototype.preload = function() {


};

gameplayState.prototype.create = function () {


  game.stage.backgroundColor = '#00FFFF';

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

 	this.player= game.add.sprite(100,game.world.height-500, "horserun");
	game.physics.arcade.enable(this.player);
	this.player.body.gravity.y=100;
	this.player.body.collideWorldBounds = true;

	this.player.animations.add("run", [0,1,2,3,4,5,6,7,8,9,10], 8, true);
	this.player.animations.play("run");
	this.player.anchor.setTo(0.5,0.5);
	this.player.scale.x *= -1;

	this.buildings = game.add.group();
	this.buildings.enablebody = true;

	//Controls
	let swipeCoordX, swipeCoordY, swipeCoordX2, swipeCoordY2, swipeMinDistance = 100;
	game.input.onDown.add(function(pointer) {
		swipeCoordX = pointer.clientX;
		swipeCoordY = pointer.clientY;}, this);
		game.input.onUp.add(function(pointer) {
			swipeCoordX2 = pointer.clientX;
			swipeCoordY2 = pointer.clientY;
			if(swipeCoordX2 < swipeCoordX - swipeMinDistance){  console.log("left");        }
			else if(swipeCoordX2 > swipeCoordX + swipeMinDistance)
				{	console.log("right");
					this.player.body.acceleration.x = (100*3+100)*50;
   		  			this.charge=true;
   		  			this.returned=false;
   		  		}else if(swipeCoordY2 < swipeCoordY - swipeMinDistance){ console.log("up");    this.player.body.velocity.y = -200;    }
            else if(swipeCoordY2 > swipeCoordY + swipeMinDistance){            console.log("down");        }    }, this);


};

gameplayState.prototype.update = function () {


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

//Call this function to place blocks using the level
gameplayState.prototype.parseBlock = function(Xpos, Ypos, Type) {
	if (Type === 1)	//Ground 
	{
		let temp = this.buildings.create(Xpos, Ypos, "ground");
	}
	else if (Type === 2) //Ground going up
	{
		let temp = this.buildings.create(Xpos, Ypos, "groundUp");
	}
	else if (Type === 3) //Building
	{
		let temp = this.buildings.create(Xpos, Ypos, "building");
	}
	else if (Type === 4) //Building going up
	{
		let temp = this.buildings.create(Xpos, Ypos, "buildingUp");
	}
	else if (Type === 5) //Building going down
	{
		let temp = this.buildings.create(Cpos, Ypos, "buildingDown");
	}
};

//Call this function to place enemies using the level
gameplayState.prototype.parseEnemy = function(Xpos, Ypos, Type) {
	
};
