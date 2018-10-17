let gameoverState = function(){

};

gameoverState.prototype.preload = function(){
};

var button;

gameoverState.prototype.create = function(){

  this.title_image = this.game.add.image(game.width/2, game.height/2, '_gameover');
 this.title_image.anchor.setTo(0.5,0.5);
  this.title_image.angle = 270;
  start_button = game.add.button(game.width - 250, game.height/2,
    'backButton',actionOnClickMenu);
  start_button.anchor.setTo(0.5);
  start_button.scale.setTo(1.8,1.8);
  start_button.angle = 270;

  function actionOnClickMenu() {
    game.state.start("Menu");
  }



};

gameoverState.prototype.update = function(){

};


