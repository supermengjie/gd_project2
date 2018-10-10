let settingState = function(){

};

settingState.prototype.preload = function(){

};

settingState.prototype.create = function(){

  game.stage.backgroundColor = '#fff';
  game.add.text(game.world.centerX-250, 100,
  'Settings', { font: '84px Arial', fill: '#000000' });
  game.add.button(100,100,'backButton',onBackClick);

  function onBackClick() {
    game.state.start("Menu");
  }

};

settingState.prototype.update = function(){

};
