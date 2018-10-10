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

};

gameplayState.prototype.update = function () {

};
