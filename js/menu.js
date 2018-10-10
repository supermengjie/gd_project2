let menuState = function(){

};

menuState.prototype.preload = function(){

};

var button;

menuState.prototype.create = function(){

  game.stage.backgroundColor = '#fff';
  game.add.text(game.world.centerX-250, 100,
  'Our Game', { font: '84px Arial', fill: '#000000' });
  game.add.button(game.world.centerX-250, game.world.centerY-200,
  'startButton', actionOnClickStart);
  my_image = game.add.button(game.world.width - 200, game.world.height - 200,
  'settings',actionOnClickSettings);my_image.scale.setTo(0.2,0.2);

  function actionOnClickStart(){
    game.state.start("Gameplay");
  }
  function actionOnClickSettings(){
    game.state.start("Settings");
  }


};

menuState.prototype.update = function(){

};
