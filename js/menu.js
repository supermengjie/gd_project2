let menuState = function(){

};

menuState.prototype.preload = function(){
};

var button;

menuState.prototype.create = function(){

  this.title_image = this.game.add.image(game.width/2, game.height/2, 'menu');
  this.title_image.anchor.setTo(0.5);
  this.title_image.angle = 270;
  start_button = game.add.button(game.width - 250, game.height/2,
    'startButton',actionOnClickStart);
  start_button.anchor.setTo(0.5);
  start_button.scale.setTo(1.8,1.8);
  start_button.angle = 270;
  my_image = game.add.button(game.world.width - 150, 50,
  'settings',actionOnClickSettings);my_image.scale.setTo(0.2,0.2);

  function actionOnClickStart() {
    game.state.start("Gameplay");
  }

  function actionOnClickSettings(){
    game.state.start("Settings");
  }


};

menuState.prototype.update = function(){

};


menuState.prototype.update = function(){

};
