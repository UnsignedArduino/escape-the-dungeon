enum ActionKind {
    Walking,
    Idle,
    Jumping,
    FastWalk,
    SlowWalk
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
function level_prep () {
    info.changeScoreBy(1800)
    Break = 0
    info.startCountdown(180)
    scene.cameraFollowSprite(Cat)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Cat, 50, 50)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(Cat, 100, 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Cat, 200, 200)
})
function finished_level () {
    Break = 1
    Streak += 1
    info.stopCountdown()
    game.showLongText("Level " + Streak + " Complete. (+1000) " + "Streak: " + Streak + " (+" + Streak * 1000 + ") " + "Total: " + (1000 + (info.score() + Streak * 1000)), DialogLayout.Bottom)
    info.changeScoreBy(1000 + Streak * 1000)
}
function animation_check () {
    if (Cat.vx == 0 && Cat.vy == 0) {
        animation.setAction(Cat, ActionKind.Idle)
    } else {
        if (Cat.vx == -35) {
            animation.setAction(Cat, ActionKind.SlowWalk)
        } else if (Cat.vy == -35) {
            animation.setAction(Cat, ActionKind.SlowWalk)
        } else if (Cat.vx == 35) {
            animation.setAction(Cat, ActionKind.SlowWalk)
        } else if (Cat.vy == 35) {
            animation.setAction(Cat, ActionKind.SlowWalk)
        } else if (Cat.vx == -50) {
            animation.setAction(Cat, ActionKind.SlowWalk)
        } else if (Cat.vy == -50) {
            animation.setAction(Cat, ActionKind.SlowWalk)
        } else if (Cat.vx == 50) {
            animation.setAction(Cat, ActionKind.SlowWalk)
        } else if (Cat.vy == 50) {
            animation.setAction(Cat, ActionKind.SlowWalk)
        } else if (Cat.vx == -70) {
            animation.setAction(Cat, ActionKind.Walking)
        } else if (Cat.vy == -70) {
            animation.setAction(Cat, ActionKind.Walking)
        } else if (Cat.vx == 70) {
            animation.setAction(Cat, ActionKind.Walking)
        } else if (Cat.vy == 70) {
            animation.setAction(Cat, ActionKind.Walking)
        } else if (Cat.vx == -100) {
            animation.setAction(Cat, ActionKind.Walking)
        } else if (Cat.vy == -100) {
            animation.setAction(Cat, ActionKind.Walking)
        } else if (Cat.vx == 100) {
            animation.setAction(Cat, ActionKind.Walking)
        } else if (Cat.vy == 100) {
            animation.setAction(Cat, ActionKind.Walking)
        } else {
            animation.setAction(Cat, ActionKind.FastWalk)
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(Cat, 100, 100)
})
let Break = 0
let Streak = 0
let Cat: Sprite = null
Cat = sprites.create(img`
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e . b f b 
f d d d d d d d d f . f d f 
f b d d b b d d 2 f . f d f 
. f 2 2 2 2 2 2 b b f f d f 
. f b d d d d d d b b d b f 
. f d d d d d b d d f f f . 
. f d f f f d f f d f . . . 
. f f . . f f . . f f . . . 
`, SpriteKind.Player)
controller.moveSprite(Cat, 100, 100)
Cat.setFlag(SpriteFlag.StayInScreen, true)
Cat.setFlag(SpriteFlag.ShowPhysics, false)
let CatIdleAnim = animation.createAnimation(ActionKind.Idle, 250)
CatIdleAnim.addAnimationFrame(img`
e e e . . . . e e e . . . . . 
c d d c . . c d d c . . . . . 
c b d d f f d d b c . . . . . 
c 3 b d d b d b 3 c . . . . . 
f b 3 d d d d 3 b f . . . . . 
e d d d d d d d d e . . . . . 
e d f d d d d f d e . b f b . 
f d d d d d d d d f . f d f . 
f b d d b b d d 2 f . f d f . 
. f 2 2 2 2 2 2 b b f f d f . 
. f b d d d d d d b b d b f . 
. f d d d d d b d d f f f . . 
. f d f f f d f f d f . . . . 
. f f . . f f . . f f . . . . 
`)
for (let index = 0; index < 2; index++) {
    CatIdleAnim.addAnimationFrame(img`
e e e . . . . e e e . . . . . 
c d d c . . c d d c . . . . . 
c b d d f f d d b c . . . . . 
c 3 b d d b d b 3 c . . . . . 
f b 3 d d d d 3 b f . . . . . 
e d d d d d d d d e . . . . . 
e d f d d d d f d e . . b f b 
f d d d d d d d d f . . f d f 
f b d d b b d d 2 f . . f d f 
. f 2 2 2 2 2 2 b b f f d d f 
. f b d d d d d d b b d b f . 
. f d d d d d b d d f f f . . 
. f d f f f d f f d f . . . . 
. f f . . f f . . f f . . . . 
`)
}
for (let index = 0; index < 4; index++) {
    for (let index = 0; index < 2; index++) {
        CatIdleAnim.addAnimationFrame(img`
e e e . . . . e e e . . . . . 
c d d c . . c d d c . . . . . 
c b d d f f d d b c . . . . . 
c 3 b d d b d b 3 c . . . . . 
f b 3 d d d d 3 b f . . . . . 
e d d d d d d d d e . . . . . 
e d f d d d d f d e . b f b . 
f d d d d d d d d f . f d f . 
f b d d b b d d 2 f . f d f . 
. f 2 2 2 2 2 2 b b f f d f . 
. f b d d d d d d b b d b f . 
. f d d d d d b d d f f f . . 
. f d f f f d f f d f . . . . 
. f f . . f f . . f f . . . . 
`)
    }
    for (let index = 0; index < 2; index++) {
        CatIdleAnim.addAnimationFrame(img`
e e e . . . . e e e . . . . . 
c d d c . . c d d c . . . . . 
c b d d f f d d b c . . . . . 
c 3 b d d b d b 3 c . . . . . 
f b 3 d d d d 3 b f . . . . . 
e d d d d d d d d e . . . . . 
e d f d d d d f d e . . b f b 
f d d d d d d d d f . . f d f 
f b d d b b d d 2 f . . f d f 
. f 2 2 2 2 2 2 b b f f d d f 
. f b d d d d d d b b d b f . 
. f d d d d d b d d f f f . . 
. f d f f f d f f d f . . . . 
. f f . . f f . . f f . . . . 
`)
    }
}
CatIdleAnim.addAnimationFrame(img`
e e e . . . . e e e . . . . . 
c d d c . . c d d c . . . . . 
c b d d f f d d b c . . . . . 
c 3 b d d b d b 3 c . . . . . 
f b 3 d d d d 3 b f . . . . . 
e d d d d d d d d e . . . . . 
e d d d d d d d d e . b f b . 
f d d d d d d d d f . f d f . 
f b d d b b d d 2 f . f d f . 
. f 2 2 2 2 2 2 b b f f d f . 
. f b d d d d d d b b d b f . 
. f d d d d d b d d f f f . . 
. f d f f f d f f d f . . . . 
. f f . . f f . . f f . . . . 
`)
animation.attachAnimation(Cat, CatIdleAnim)
let CatWalkAnim = animation.createAnimation(ActionKind.Walking, 200)
for (let index = 0; index < 4; index++) {
    CatWalkAnim.addAnimationFrame(img`
e e e . . . . e e e . . . . . 
c d d c . . c d d c . . . . . 
c b d d f f d d b c . . . . . 
c 3 b d d b d b 3 c . . . . . 
f b 3 d d d d 3 b f . . . . . 
e d d d d d d d d e . . . . . 
e d f d d d d f d e . b f b . 
f d d d d d d d d f . f d f . 
f b d d b b d d 2 f . f d f . 
. f 2 2 2 2 2 2 b b f f d f . 
. f b d d d d d d b b d b f . 
. f d d d d d b d d f f f . . 
. f d f f f d f f d f . . . . 
. f f . . f f . . f f . . . . 
`)
    CatWalkAnim.addAnimationFrame(img`
. . . . . . . . . . . . . . 
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e b f b . 
f d d d d d d d d f f d f . 
f b d d b b d d 2 b f d f . 
. f 2 2 2 2 2 2 d b d b f . 
. f d d d d d d d f f f . . 
. f d b d f f f d f . . . . 
. . f f f f . . f f . . . . 
`)
}
animation.attachAnimation(Cat, CatWalkAnim)
let CatFastWalkAnim = animation.createAnimation(ActionKind.FastWalk, 100)
for (let index = 0; index < 4; index++) {
    CatFastWalkAnim.addAnimationFrame(img`
e e e . . . . e e e . . . . . 
c d d c . . c d d c . . . . . 
c b d d f f d d b c . . . . . 
c 3 b d d b d b 3 c . . . . . 
f b 3 d d d d 3 b f . . . . . 
e d d d d d d d d e . . . . . 
e d f d d d d f d e . b f b . 
f d d d d d d d d f . f d f . 
f b d d b b d d 2 f . f d f . 
. f 2 2 2 2 2 2 b b f f d f . 
. f b d d d d d d b b d b f . 
. f d d d d d b d d f f f . . 
. f d f f f d f f d f . . . . 
. f f . . f f . . f f . . . . 
`)
    CatFastWalkAnim.addAnimationFrame(img`
. . . . . . . . . . . . . . 
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e b f b . 
f d d d d d d d d f f d f . 
f b d d b b d d 2 b f d f . 
. f 2 2 2 2 2 2 d b d b f . 
. f d d d d d d d f f f . . 
. f d b d f f f d f . . . . 
. . f f f f . . f f . . . . 
`)
}
animation.attachAnimation(Cat, CatFastWalkAnim)
let CatSlowWalkAnim = animation.createAnimation(ActionKind.SlowWalk, 400)
for (let index = 0; index < 4; index++) {
    CatSlowWalkAnim.addAnimationFrame(img`
e e e . . . . e e e . . . . . 
c d d c . . c d d c . . . . . 
c b d d f f d d b c . . . . . 
c 3 b d d b d b 3 c . . . . . 
f b 3 d d d d 3 b f . . . . . 
e d d d d d d d d e . . . . . 
e d f d d d d f d e . b f b . 
f d d d d d d d d f . f d f . 
f b d d b b d d 2 f . f d f . 
. f 2 2 2 2 2 2 b b f f d f . 
. f b d d d d d d b b d b f . 
. f d d d d d b d d f f f . . 
. f d f f f d f f d f . . . . 
. f f . . f f . . f f . . . . 
`)
    CatSlowWalkAnim.addAnimationFrame(img`
. . . . . . . . . . . . . . 
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e b f b . 
f d d d d d d d d f f d f . 
f b d d b b d d 2 b f d f . 
. f 2 2 2 2 2 2 d b d b f . 
. f d d d d d d d f f f . . 
. f d b d f f f d f . . . . 
. . f f f f . . f f . . . . 
`)
}
animation.attachAnimation(Cat, CatSlowWalkAnim)
animation.setAction(Cat, ActionKind.Idle)
game.showLongText("Welcome to Escape the Dungeon! In this game, your goal is to get to the blue square before time runs out. The faster you get out, the more points you get. Use the joystick to move around. Press A to accelerate or select when next to a lever. Press B to creep along. Good luck, and get out alive! ", DialogLayout.Bottom)
Streak = 0
while (true) {
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0a160b0b0a0a160a0d00000000000019010404040404040518000000000000110209090909091a0714000000000000100209090909091a0715000000000000190308080808080806180000000000000f13171313121217120e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 . . . . . . . . 2 2 2 2 
2 2 2 2 . . . . . . . . 2 2 2 2 
2 2 2 2 . . . . . . . . 2 2 2 2 
2 2 2 2 . . . . . . . . 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundCenter,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.collectibleInsignia],
            TileScale.Sixteen
        ))
    tiles.placeOnTile(Cat, tiles.getTileLocation(5, 7))
    info.setScore(0)
    level_prep()
    while (Break == 0) {
        animation_check()
        pause(100)
        info.changeScoreBy(-1)
        if (Cat.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia)) {
            finished_level()
        }
    }
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0b160b0a0a160a0d000c160d00000019090909090909091800111a150000000f1217131213170915000f130e000000000000000000150915000000000000000c0a160b0a0b16091400000000000000191a09090909090918000000000000000f121712131317130e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
2 2 2 . . . . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundCenter,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.collectibleInsignia],
            TileScale.Sixteen
        ))
    tiles.placeOnTile(Cat, tiles.getTileLocation(3, 4))
    level_prep()
    while (Break == 0) {
        animation_check()
        pause(100)
        info.changeScoreBy(-1)
        if (Cat.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia)) {
            finished_level()
        }
    }
}
game.onUpdateInterval(100, function () {
    animation_check()
})
