enum ActionKind {
    Walking,
    Idle,
    Jumping,
    FastWalk,
    SlowWalk
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
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(Cat, 100, 100)
})
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
Cat.setFlag(SpriteFlag.ShowPhysics, true)
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
scene.setBackgroundColor(9)
info.setScore(0)
game.setDialogTextColor(15)
game.showLongText("Welcome to Escape the Dungeon! In this game, your goal is to get to the blue and green sphere before time runs out. The faster you get out, the more points you get. Use the joystick to move around. Press A to accelerate or select when next to a lever. Press B to creep along. Press MENU to pause and adjust some settings. Good luck, and get out alive! ", DialogLayout.Bottom)
game.onUpdateInterval(100, function () {
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
        } else {
        	
        }
    }
})
