controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . 5 . . . . . . . . . 
        . . . . . . 5 . . . . . . . . . 
        . . . . . . 5 . . . . . . . . . 
        . . . . . . 5 . . . . . . . . . 
        . . . . . . 5 . . . . . . . . . 
        . . . . . . 5 . . . . . . . . . 
        . . . . . . 5 . . . . . . . . . 
        . . . . . . 5 . . . . . . . . . 
        . . . . . . 5 . . . . . . . . . 
        . . . . . . 5 . . . . . . . . . 
        `, Pumpkin_Ship, 0, -100)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    let mySprite: Sprite = null
    sprites.destroy(mySprite, effects.fire, 500)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.UntilDone)
})
let Evil_Tomatoes: Sprite = null
let projectile: Sprite = null
let Pumpkin_Ship: Sprite = null
effects.starField.startScreenEffect()
scene.setBackgroundColor(7)
Pumpkin_Ship = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e e e . . . . . . . . 
    . . . . . . . e . . . . . . . . 
    . . . . . . . e 4 4 4 4 4 . . . 
    . . . 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . 4 4 4 4 f 4 4 f 4 4 4 4 . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . 4 4 4 f f 4 4 f f 4 4 4 . . 
    . . 4 4 4 4 f f f f 4 4 4 . . . 
    . . . . 4 4 4 4 4 4 4 4 . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Pumpkin_Ship)
Pumpkin_Ship.setPosition(84, 98)
info.setLife(3)
game.onUpdateInterval(500, function () {
    Evil_Tomatoes = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e e e e e . . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 f 2 2 f 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 f f f 2 2 2 2 2 . 
        . . . 2 2 2 f 2 2 2 f 2 2 2 2 . 
        . . . . 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . 2 2 2 2 2 2 2 2 . . . 
        . . . . . . . . 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Evil_Tomatoes.setPosition(randint(0, scene.screenWidth()), 0)
    Evil_Tomatoes.follow(Pumpkin_Ship, 50)
})
