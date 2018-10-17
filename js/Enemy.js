let Enemy = function(pos, type, platform) {
    this.type = type;
    this.speed = 100;
    this.isDead = false;
    this.platform = platform;
    this.dir = Phaser.NONE;

    // position
    this.enemy = game.add.sprite(pos.x, pos.y, type);
    this.enemy.anchor.set(0.5);
    game.physics.arcade.enable(this.enemy);
    // animation
    this.enemy.animations.add(Phaser.NONE, [0,1], 8, true);
    this.enemy.animations.add(Phaser.RIGHT, [0,1], 8, true);
    this.enemy.scale.x *= -1;

    this.enemy.enableBody = true;
    this.enemy.body.collideWorldBounds = true;
    this.enemy.body.velocity.x = 0;
    this.enemy.body.gravity.y = 300;
    this.move(this.dir);
};

Enemy.prototype.update = function() {
    game.physics.arcade.collide(this.enemy, this.platform);

    // A little x movement when falling down
    if (this.enemy.body.velocity.y > 0) {
        this.enemy.body.velocity.x = 5;
    }
    else if (this.dir === Phaser.RIGHT){
        this.move(Phaser.RIGHT);
    }

    // TODO: This should be moved to gameplay.js ===============================
    if (this.isDead) {
        this.enemy.body.collideWorldBounds = false;
    }
};

Enemy.prototype.move = function(direction) {
    this.dir = direction;
    var speed = this.speed;
    this.enemy.animations.play(direction);

    if (direction === Phaser.NONE) {
        speed = 0;
    }
    this.enemy.body.velocity.x = speed;
};

Enemy.prototype.getX = function() {
    return this.enemy.x;
}

// Trigger move right action
Enemy.prototype.flee = function() {
    this.move(Phaser.RIGHT);
}