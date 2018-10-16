let menuState = function(){

};

menuState.prototype.preload = function(){
};

var button;

menuState.prototype.create = function(){

  this.title_image = this.game.add.image(game.width/2, game.height/2, 'menu');
  this.title_image.anchor.setTo(0.5);
  this.title_image.angle = 270;
  
  var text = game.add.text(game.width - 600, game.height/2+65,
     "Start", { font: "180px Market", fill: "#fff", align: "center" })
  text.anchor.setTo(0.5);
  text.angle = 270;
  text.inputEnabled = true;
  text.events.onInputDown.add(down, this);
  my_image = game.add.button(game.world.width - 150, 50,
  'settings',actionOnClickSettings);my_image.scale.setTo(0.2,0.2);

  function down(item) {
    game.state.start("Gameplay");
  }

  function actionOnClickSettings(){
    game.state.start("Settings");
  }


};

menuState.prototype.update = function(){

};
