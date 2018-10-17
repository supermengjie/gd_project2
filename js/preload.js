let preloadState = function(){

};

preloadState.prototype.preload = function(){

  game.load.spritesheet('play','assets/Images/play.png');
  game.load.spritesheet('pauseMenu','assets/Images/pause_menu.png');
  game.load.spritesheet('home','assets/Images/home.png');
  game.load.image('menu','assets/Images/Title.png');
  game.load.image('settings_background','assets/Images/Sky1.png');
  game.load.image("buildingDown", "assets/Images/5.png");
  game.load.image("buildingUp", "assets/Images/4.png");
  game.load.spritesheet('startButton', 'assets/Images/start.png');
  game.load.spritesheet('settings','assets/Images/settings.png');
  game.load.spritesheet('backButton', 'assets/Images/back.png');
  game.load.spritesheet('pause','assets/Images/pause.png');
  game.load.spritesheet("horserun", "assets/Images/HorseRun.png",624,460);
  game.load.json("testlevel", "assets/testlevel.json");
  game.load.json("level", "assets/level.json");
  game.load.spritesheet("horse", "assets/Images/HorseSprite.png",748,609);
  game.load.image("intro1","assets/Images/Intro1.png");
  game.load.image("intro2","assets/Images/Intro2.png");
  game.load.image("ground", "assets/Images/1Re.png");
  game.load.image("groundUp", "assets/Images/2Re.png");
  game.load.image("building", "assets/Images/3.png");
  game.load.image("buildingUp", "assets/Images/4.png");
  game.load.image("buildingDown", "assets/Images/5.png");
  game.load.spritesheet("scientist", "assets/Images/ScientistSprite.png",669,626);
  game.load.spritesheet("policeman", "assets/Images/PoliceSprite.png",269,712);
  //load in sprites, images, etc.
};

preloadState.prototype.create = function(){

  game.state.start("Menu");

};

preloadState.prototype.update = function(){


};