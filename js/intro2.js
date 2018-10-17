let intro2State = function(){

};



intro2State.prototype.create = function(){

  this.intro1pic= game.add.sprite(game.world.centerX,0, "intro2");
  this.intro1pic.anchor.setTo(0.5,0);
  game.physics.enable(this.intro1pic, Phaser.Physics.ARCADE);
  this.intro1pic.body.velocity.y -= 100
  game.time.events.add(14000, this.gotoNextstate, this);


};

intro2State.prototype.update = function(){
if (this.keys.down.isDown)
	{
		game.state.start("Menu");
	}
};

intro2State.prototype.gotoNextstate = function(){
  game.state.start("Menu");

}

