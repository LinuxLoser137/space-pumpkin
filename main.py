scene.set_background_color(9)
mySprite = sprites.create(img("""
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . e e e e . . . . . . . .
        . . . . . . . e . . . . . . . .
        . . . . . . . e 4 4 4 4 4 . . .
        . . . 4 4 4 4 4 4 . . . 4 4 . .
        . . 4 4 . . . . . . . . . 4 . .
        . . 4 . . . f . . f . . . 4 . .
        . . 4 . . . . . . . . . . 4 . .
        . . 4 . . f f . . f f . 4 4 . .
        . . 4 4 . . f f f f . 4 4 . . .
        . . . . 4 4 4 . . 4 4 4 . . . .
        . . . . . . 4 4 4 4 . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        """),
    SpriteKind.player)
controller.move_sprite(mySprite, 100, 0)
tiles.set_current_tilemap(tilemap("""
    level1
    """))