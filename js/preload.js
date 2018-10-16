let preloadState = function(){

};

preloadState.prototype.preload = function(){

<<<<<<< HEAD
  //game.load.spritesheet('platform', 'assets/images/platform.png');
  //game.load.spritesheet('char', 'assets/images/character.png');
  game.load.spritesheet('startButton', 'assets/Images/start.png');
  game.load.spritesheet('settings','assets/Images/settings.png');
  game.load.spritesheet('backButton', 'assets/Images/back.png');
  game.load.spritesheet('pause','assets/Images/pause.png');
  game.load.spritesheet("horserun", "assets/Images/HorseRun.png",624,460);
  game.load.text("testlevel", "assets/testlevel.json");
  game.load.text("level", "assets/level.json");
  game.load.spritesheet("horse", "assets/Images/HorseSprite.png",748,609);
  game.load.image("intro1","assets/Images/Intro1.png");
  game.load.image("intro2","assets/Images/Intro2.png");
  game.load.image("ground", "assets/Images/1.png");
  game.load.image("groundUp", "assets/Images/2.png");
  game.load.image("building", "assets/Images/3.png");
  game.load.image("buildingUp", "assets/Images/4.png");
  game.load.image("buildingDown", "assets/Images/5.png");
=======
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
>>>>>>> 6045d6d8c54242b3aa99418d1eff5e13e5b952c5
  //load in sprites, images, etc.
};

preloadState.prototype.create = function(){

  game.state.start("Menu");

};

preloadState.prototype.update = function(){


};


