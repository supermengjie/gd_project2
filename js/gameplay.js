let gameplayState = function() {

};

gameplayState.prototype.preload = function() {


};

gameplayState.prototype.create = function () {

  game.physics.startSystem(Phaser.Physics.ARCADE);

  //ADDING PAUSE BUTTON
  my_image = game.add.button(100,100,'pause',onClickPause);
  my_image.scale.setTo(0.2,0.2);

  //START PAUSE STATE WHEN PAUSE BUTTON IS PRESSED
  function onClickPause(){
    game.state.start("Pause");
  }

  this.player= game.add.sprite(100,game.world.height-500, "horserun");
	game.physics.arcade.enable(this.player);
	this.player.body.gravity.y=100;
	this.player.body.collideWorldBounds = true;

	this.player.animations.add("run", [0,1,2,3,4,5,6,7,8,9,10], 8, true);
	this.player.animations.play("run");
	this.player.anchor.setTo(0.5,0.5);
	this.player.scale.x *= -1;

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
   		  		}else if(swipeCoordY2 < swipeCoordY - swipeMinDistance){ console.log("up");    this.player.body.velocity.y = -200;    }else if(swipeCoordY2 > swipeCoordY + swipeMinDistance){            console.log("down");        }    }, this);      


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
