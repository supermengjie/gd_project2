let pauseState = function(){

};

pauseState.prototype.preload = function(){

};

pauseState.prototype.create = function(){
  game.stage.backgroundColor = '#fff';
  game.add.text(game.world.centerX-250, 100,
  'Paused', { font: '84px Arial', fill: '#000000' });
  game.add.button(100,100,'backButton',onBackClick);

  function onBackClick() {
    game.state.start("Gameplay");
  }
};

pauseState.prototype.update = function(){

};
