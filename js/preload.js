let preloadState = function(){

};

preloadState.prototype.preload = function(){

 // game.load.spritesheet('platform', 'assets/images/platform.png');
  //game.load.spritesheet('char', 'assets/images/character.png');
  game.load.spritesheet('startButton', 'assets/images/start.png');
  game.load.spritesheet('settings','assets/images/settings.png');
  game.load.spritesheet('backButton', 'assets/images/back.png');
  game.load.spritesheet('pause','assets/images/pause.png');
  game.load.spritesheet("horse", "assets/images/HorseSprite.png",748,609);
  game.load.image("intro1","assets/images/Intro1.png");
  game.load.image("intro2","assets/images/Intro2.png");
  //load in sprites, images, etc.
};

preloadState.prototype.create = function(){

  game.state.start("Menu");

};

preloadState.prototype.update = function(){


};
