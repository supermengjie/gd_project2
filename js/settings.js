let settingState = function(){

};

settingState.prototype.preload = function(){

};

settingState.prototype.create = function(){

  this.settings_image = this.game.add.image(game.width/2, game.height/2,
  'settings_background');
  this.settings_image.anchor.setTo(0.5);
  this.settings_image.angle = 270;
  settings_text = game.add.text(150, game.height/2 - 40,
  'Settings', { font: '84px Arial', fill: '#000000' });
  settings_text.anchor.setTo(0.5);
  settings_text.angle = 270;
  settings_button = game.add.button(100,game.height - 100,'backButton',onBackClick);
  settings_button.anchor.setTo(0.5);
  settings_button.angle = 270;


  function onBackClick() {
    game.state.start("Menu");
  }

};

settingState.prototype.update = function(){

};
