let gameplayState = function() {
	this.score=0;
	this.readytocharge=true;
};

gameplayState.prototype.preload = function() {


};

gameplayState.prototype.create = function () {


  game.physics.startSystem(Phaser.Physics.ARCADE);

  game.world.setBounds(0, 0, 27000, 3227);

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
    game.paused = true;
    menu = game.add.sprite(game.world.width/2-400, game.world.height/2-315, 'pauseMenu');
    my_image.destroy();
    my_image = game.add.button(100,100,'play',onClickPlay);
    my_image.scale.setTo(0.2,0.2);
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
  this.player.body.gravity.y=1000;
  this.player.body.collideWorldBounds = true;

  //player animations
  this.player.animations.add("run", [31,32,33,34,35,36,37,38,39,40,41], 16, true);
	this.player.animations.add("buildup", [0,1,2,3,4,5,6], 8, true);
	this.player.animations.add("charge", [7,8,9,10,11,12,13,14,15,16], 10, true);
	this.player.animations.add("jump", [22,23,24,25,26,27,28,29,30], 3, false);
	this.player.animations.add("dead", [17,18,19,20,21], 8, true);
	this.player.animations.play("run");
	this.player.anchor.setTo(0.5,0.5);
	this.player.scale.x *= -1;
  this.player.offsetY=20;
  this.player.offsetX=40;


  	//Enemy group which contains the list of enemies
  	this.enemies = game.add.group();
  	this.enemies.enableBody = true;
  	
  	this.policeman = game.add.sprite(600, game.world.height-500, "policeman");
  	this.policeman.animations.add("idle", [0,1], 2, true);
  	this.policeman.animations.play("idle");
  	this.policeman.scale.setTo(.35, .35);
  	this.policeman.anchor.setTo(0, -.1);
  	this.enemies.add(this.policeman);

  	// this.scientist = game.add.sprite(800, game.world.height-500, "scientist");
  	// this.scientist.animations.add("idle", [0,1], 6, true);
  	// this.scientist.animations.play("idle");
  	// this.scientist.scale.setTo(.35, .35);
  	// this.scientist.anchor.setTo(0, -.25);
  	// this.enemies.add(this.scientist);

  	//let assettest = this.enemies.create(600, game.world.height-227, "policeman");

	//Building group which adds level components
	this.buildings = game.add.group();
	this.buildings.enableBody = true;
	//let assettest = this.buildings.create(0, game.world.height-600, "ground");
	let levelData = game.cache.getJSON("level");
	console.log(levelData.Data.length);

	//This function is to help place level components and make the level easier to edit and create
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

	//this.scientist = new Enemy({x:1200, y:game.world.height-227}, "scientist", this.buildings);
	for (let y = levelData.Data.length-1; y >= 0; --y)
	{
		for (let x = levelData.Data[y].length-1; x >= 0; --x)
		{
			if (levelData.Data[y][x] != 0){
				if (y === 0){
					let temp = this.buildings.create(x*600, game.world.height-227, parseBlock(levelData.Data[y][x]%10));
					temp.enableBody = true;
					temp.body.immovable = true;
					if (levelData.Data[y][x]/10 > 1 && levelData.Data[y][x]/10 < 2)
					{
						let policeman = game.add.sprite(x*600, game.world.height-500, "policeman");
  						policeman.animations.add("idle", [0,1], 2, true);
  						policeman.animations.play("idle");
  						policeman.scale.setTo(.35, .35);
  						policeman.anchor.setTo(.3, -.1);
  						this.enemies.add(policeman);
					}
					else if (levelData.Data[y][x]/10 > 2)
					{
						scientist = game.add.sprite(x*600, game.world.height-500, "scientist");
  						scientist.animations.add("idle", [0,1], 6, true);
  						scientist.animations.play("idle");
  						scientist.scale.setTo(.35, .35);
  						scientist.anchor.setTo(.1, -.25);
  						this.enemies.add(scientist);
					}
				}
				else{
					let temp = this.buildings.create(x*600, game.world.height-600*(y+1)+373, parseBlock(levelData.Data[y][x]%10));
					temp.enableBody = true;
					temp.body.immovable = true;
					console.log(levelData.Data[y][x]/10);
					if (levelData.Data[y][x]/10 > 1 && levelData.Data[y][x]/10 < 2)
					{
						let policeman = game.add.sprite(x*600, game.world.height-500-600*(y), "policeman");
  						policeman.animations.add("idle", [0,1], 2, true);
  						policeman.animations.play("idle");
  						policeman.scale.setTo(.35, .35);
  						policeman.anchor.setTo(.1, -.1);
  						this.enemies.add(policeman);
					}
					else if (levelData.Data[y][x]/10 > 2)
					{
						scientist = game.add.sprite(x*600, game.world.height-500-600*(y), "scientist");
  						scientist.animations.add("idle", [0,1], 6, true);
  						scientist.animations.play("idle");
  						scientist.scale.setTo(.35, .35);
  						scientist.anchor.setTo(.1, -.25);
  						this.enemies.add(scientist);
					}
				}
			}
			console.log(x + " " + y + " " + levelData.Data[y][x]);
		}
	}
	console.log(levelData);

	 this.cooldown= game.time.create();
     //this.cooldown.add(Phaser.Timer.SECOND*5,this.endCooldown, this);
     this.ctext= this.game.add.text(20,this.game.height-40,"Ready",{font:"40px Arial", fill: "#ff0"});
     this.ctext.fixedToCamera= true;

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
			else if((swipeCoordX2 > swipeCoordX + swipeMinDistance)&&this.readytocharge)
			{
        console.log("right");
        this.player.body.acceleration.x = (100*3+100)*50;
   		  this.charge=true;
   		  this.returned=false;
        this.player.animations.play("charge");
        game.time.events.add(1000, this.updateRun, this);
        this.readytocharge=false;
        game.time.events.add(3000, this.endCooldown,this);

        //this.cooldown.add(Phaser.Timer.SECOND*2,this.endCooldown, this);
        //this.cooldown.start();
        this.ctext.text= "On Cooldown";
   		 }
       else if((swipeCoordY2 < swipeCoordY - swipeMinDistance)&& this.player.body.touching.down)
       {
        	console.log("up");
   			this.player.body.velocity.y = -1500;
         	game.camera.y-=200;
   		   	this.player.animations.play("jump");
   		   	game.time.events.add(3000, this.updateRun, this);
   		  }
        else if(swipeCoordY2 > swipeCoordY + swipeMinDistance)
        {
        	this.player.body.velocity.y = +2000;
          console.log("down");
        }
      }, this);

      this.cursors = game.input.keyboard.createCursorKeys();

      //smooth camera follow
      game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);




};

gameplayState.prototype.update = function () {
	game.physics.arcade.collide(this.player, this.buildings);

	this.player.body.velocity.x = 400;

  game.physics.arcade.collide(this.player, this.buildings);
  game.physics.arcade.collide(this.enemies, this.buildings);
  //game.physics.arcade.collide(this.player, this.enemies);
  game.physics.arcade.overlap(this.player, this.enemies, this.hitOrMiss, null, this);

	if (this.cursors.left.isDown){
		this.player.body.velocity.x = -150;
		//this.player.animations.play("left");
	}
	else if (this.cursors.right.isDown){
		this.player.body.velocity.x = 350;
		//this.player.animations.play("right");
	}
		if (this.cursors.up.isDown && this.player.body.touching.down){
		this.player.body.velocity.y = -800;
	}

	if(this.charge){
		if(this.player.x -100 >100){
			this.player.body.acceleration.x =0;
			this.charge = false;
		}
	}

	// if(!this.charge){
	// 	if(this.player.x !== 100){
	// 		this.player.body.acceleration.x -=100;
	// 		this.return = true;
	// 	}
	// }
	// if(this.return && this.player.x <= 100)
	// {
	// 	this.player.body.acceleration.x =0;
	// }

};

gameplayState.prototype.updateRun= function(){

	this.player.animations.play("run");
};

gameplayState.prototype.hitOrMiss = function(player, enemy){
	
};

gameplayState.prototype.endCooldown =function(){
	console.log("cooldown ready to over");;
	console.log("cooldown over");
	this.ctext.text = "Ready";
	this.readytocharge=true;
}
