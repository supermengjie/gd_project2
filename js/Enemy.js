let Enemy = function(game) {
    this.game = game;
    // this.type = type;
    this.speed = 500;
    this.isDead = false;
    this.dir = Phaser.LEFT;

};

Enemy.prototype.create = function() {
    // position
    this.enemy = this.game.add.sprite(64, 200, "police");
    this.enemy.anchor.set(0.5);
    this.game.physics.arcade.enable(this.enemy);
    // animation
    this.enemy.animations.add(Phaser.LEFT, [0,1,2,3], 20, true);
    this.enemy.animations.add(Phaser.RIGHT, [5,6,7,8], 20, true);

    // this.enemy.body.immovable = true;
    this.enemy.enableBody = true;
    this.enemy.body.collideWorldBounds = true;

    this.enemy.play(Phaser.LEFT);
    this.move(Phaser.LEFT);
};

Enemy.prototype.update = function() {
    this.game.physics.arcade.collide(this.enemy, this.game.platforms);
};

Enemy.prototype.move = function(direction) {
    // this.dir = direction;
    var speed = this.speed;
    this.enemy.animations.play(direction)
    if (direction === Phaser.NONE) {
        this.enemy.body.velocity.x = this.enemy.body.velocity.y = 0;
        return;
    }

    var speed = this.speed;
    if (direction === Phaser.LEFT) {
        speed = -speed;
    }

    if (direction === Phaser.LEFT || direction === Phaser.RIGHT) {
        this.enemy.body.velocity.x = speed;
    }
};