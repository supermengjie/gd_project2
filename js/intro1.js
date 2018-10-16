let intro1State = function(){

};



intro1State.prototype.create = function(){

  this.intro1pic= game.add.sprite(game.world.centerX,0, "intro1");
  this.intro1pic.anchor.setTo(0.5,0);
  game.physics.enable(this.intro1pic, Phaser.Physics.ARCADE);
  this.intro1pic.body.velocity.y -= 100
  game.time.events.add(14000, this.gotoNextstate, this);


};

intro1State.prototype.update = function(){

};

intro1State.prototype.gotoNextstate = function(){
  game.state.start("Intro2");

}

