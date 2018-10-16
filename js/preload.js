let preloadState = function(){

};

preloadState.prototype.preload = function(){

  game.load.spritesheet('platform', 'assets/images/platform.png');
  game.load.spritesheet('char', 'assets/images/character.png');
  game.load.spritesheet('startButton', 'assets/images/start.png');
  game.load.spritesheet('settings','assets/images/settings.png');
  game.load.spritesheet('backButton', 'assets/images/back.png');
  game.load.spritesheet('pause','assets/images/pause.png');
  game.load.spritesheet("horserun", "assets/images/HorseRun.png",624,460);
  game.load.spritesheet('pauseMenu','assets/images/pause_menu.png');
  game.load.spritesheet('play','assets/images/play.png');
  game.load.spritesheet('home','assets/images/home.png');
  game.load.image('menu','assets/images/Title.png');
  game.load.image('settings_background','assets/images/Sky1.png');
  //load in sprites, images, etc.
};

preloadState.prototype.create = function(){

  game.state.start("Menu");

};

preloadState.prototype.update = function(){


};
