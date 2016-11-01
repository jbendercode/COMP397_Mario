var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(imgString) {
            _super.call(this, atlas, imgString);
            this._gravity = 9.81;
            this._maxSpeedX = 1;
            this._jumpSpeed = 10;
            this._friction = -1;
            this._marioState = config.MarioState.SMALL;
            this._isStar = false;
            this._isDead = false;
            this._isGrounded = false;
            this.start();
        }
        Player.prototype.start = function () {
            this._velocity = new objects.Vector2(0, 0);
            this.position = new objects.Vector2(30, 0);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height;
        };
        Player.prototype.update = function () {
            if (this._isGrounded)
                this._friction = 0.75;
            else {
                this._friction = 0;
            }
            // AccelerationX affects Velocity.x
            // Gravity affects Velocity.y
            // MaxSpeed caps Velocity.x
            if (Math.abs(this._velocity.x) < this._maxSpeedX) {
            }
            this._velocity.x += this._accelerationX;
            this.position.x += this._velocity.x;
            this.position.y += this._velocity.y + this._gravity;
            /*
            this._velocity.x *= this._friction;
            this.position.x += this._velocity.x;

            if(!this._isGrounded)
                this.position.y += this._velocity.y + this._gravity;
            */
            _super.prototype.update.call(this);
        };
        Player.prototype.getVelocity = function () {
            return this._velocity;
        };
        Player.prototype.setVelocity = function (newVelocity) {
            this._velocity = newVelocity;
        };
        Player.prototype.getIsGrounded = function () {
            return this._isGrounded;
        };
        Player.prototype.setIsGrounded = function (b) {
            this._isGrounded = b;
        };
        Player.prototype.moveRight = function () {
            this._accelerationX += 0.05;
        };
        Player.prototype.moveLeft = function () {
            this._accelerationX -= 0.05;
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map