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
function level_prep (xp: number, yp: number) {
    info.changeScoreBy(1800)
    Break = 0
    info.startCountdown(180)
    scene.cameraFollowSprite(Cat)
    tiles.placeOnTile(Cat, tiles.getTileLocation(xp, yp))
}
function level_7 () {
	
}
function level_3 () {
    tiles.setTilemap(tiles.createTilemap(
            hex`100010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0b160a0b0b0b0a0b160b0d00000000100909091e1f1e1f1e1f1e1500000000190909091f1e1f1e1f1e1f180000000011090909090909091a1f1e1400000000100909091f1e1f1e1f1e1f1500000000100909091e1f1e1f1e1f1e1400000000190909091f1e1f1e1f1e1f1800000000110909091e1f1e1f1e1f1e15000000000f121713121212131317120e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundCenter,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.collectibleInsignia,sprites.castle.tilePath3,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1],
            TileScale.Sixteen
        ))
    level_prep(4, 7)
    game.showLongText("Don't touch the lava!", DialogLayout.Bottom)
    while (Break == 0) {
        pause(100)
        info.changeScoreBy(-1)
        check_for_lava()
        animation_check()
        check_for_death()
        if (Cat.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia)) {
            finished_level()
        }
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Cat, 50, 50)
})
function level_2 () {
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
    level_prep(3, 4)
    game.showLongText("You don't have to touch the only blue square you see :)", DialogLayout.Bottom)
    while (Break == 0) {
        pause(100)
        info.changeScoreBy(-1)
        animation_check()
        check_for_death()
        if (Cat.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia)) {
            finished_level()
        }
    }
}
function level_1 () {
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
    level_prep(5, 7)
    while (Break == 0) {
        pause(100)
        info.changeScoreBy(-1)
        animation_check()
        check_for_death()
        if (Cat.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia)) {
            finished_level()
        }
    }
}
function check_for_death () {
    if (Dead == 1) {
        game.over(false)
    }
}
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(Cat, 100, 100)
})
function level_6 () {
    tiles.setTilemap(tiles.createTilemap(
            hex`100010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c22160a0b0b0b220b160b0d00000000102702091e1f1e261e1f1e1500000000190428091f1e1f1e1f1a1f1800000000110909091e1f1e1f1e1f1e1400000000100909091f1e1f1e1f1e1f1500000000100909091e1f1e1f1e1f1e1400000000190909091f1e1f1e1f1c1f1800000000110909091e1f1e1f1e1f1e15000000000f121713121212131317120e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundCenter,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.collectibleInsignia,sprites.castle.tilePath3,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.chestOpen,sprites.dungeon.greenSwitchUp,sprites.dungeon.greenSwitchDown,sprites.dungeon.floorLight0,sprites.dungeon.floorLight4,sprites.dungeon.floorDark0,sprites.dungeon.floorDark1,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.purpleSwitchUp],
            TileScale.Sixteen
        ))
    level_prep(4, 6)
    game.showLongText("Use A and B to switch levers", DialogLayout.Bottom)
    while (Break == 0) {
        pause(100)
        info.changeScoreBy(-1)
        check_for_lava()
        animation_check()
        check_for_death()
        check_for_chest(5000, 11, 10)
        if (Cat.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia)) {
            finished_level()
        }
        if (controller.A.isPressed()) {
            if (Cat.tileKindAt(TileDirection.Top, sprites.dungeon.greenSwitchUp)) {
                if (Cat.tileKindAt(TileDirection.Center, sprites.dungeon.floorDark1)) {
                    tiles.setTileAt(tiles.getTileLocation(3, 4), sprites.dungeon.greenSwitchDown)
                    pause(500)
                    tiles.setTileAt(tiles.getTileLocation(6, 8), sprites.dungeon.darkGroundCenter)
                    pause(500)
                    tiles.setTileAt(tiles.getTileLocation(7, 8), sprites.dungeon.darkGroundCenter)
                    pause(500)
                    tiles.setTileAt(tiles.getTileLocation(8, 8), sprites.dungeon.darkGroundCenter)
                    pause(500)
                    tiles.setTileAt(tiles.getTileLocation(9, 8), sprites.dungeon.darkGroundCenter)
                    pause(500)
                    tiles.setTileAt(tiles.getTileLocation(10, 8), sprites.dungeon.darkGroundCenter)
                    tiles.setTileAt(tiles.getTileLocation(9, 7), sprites.dungeon.darkGroundCenter)
                    pause(500)
                    tiles.setTileAt(tiles.getTileLocation(11, 8), sprites.dungeon.darkGroundCenter)
                    tiles.setTileAt(tiles.getTileLocation(9, 6), sprites.dungeon.darkGroundNorth)
                    pause(500)
                    tiles.setTileAt(tiles.getTileLocation(11, 7), sprites.dungeon.darkGroundCenter)
                }
                if (Cat.tileKindAt(TileDirection.Center, sprites.dungeon.floorDark0)) {
                    tiles.setTileAt(tiles.getTileLocation(9, 4), sprites.dungeon.greenSwitchDown)
                    pause(500)
                    tiles.setTileAt(tiles.getTileLocation(11, 9), sprites.dungeon.darkGroundCenter)
                }
            }
        }
        if (controller.B.isPressed()) {
            if (Cat.tileKindAt(TileDirection.Top, sprites.dungeon.greenSwitchDown)) {
                if (Cat.tileKindAt(TileDirection.Center, sprites.dungeon.floorDark1)) {
                    tiles.setTileAt(tiles.getTileLocation(3, 4), sprites.dungeon.greenSwitchUp)
                    pause(500)
                    tiles.setTileAt(tiles.getTileLocation(6, 8), sprites.dungeon.hazardLava1)
                    pause(500)
                    tiles.setTileAt(tiles.getTileLocation(7, 8), sprites.dungeon.hazardLava0)
                    pause(500)
                    tiles.setTileAt(tiles.getTileLocation(8, 8), sprites.dungeon.hazardLava1)
                    pause(500)
                    tiles.setTileAt(tiles.getTileLocation(9, 8), sprites.dungeon.hazardLava0)
                    pause(500)
                    tiles.setTileAt(tiles.getTileLocation(10, 8), sprites.dungeon.hazardLava1)
                    tiles.setTileAt(tiles.getTileLocation(9, 7), sprites.dungeon.hazardLava1)
                    pause(500)
                    tiles.setTileAt(tiles.getTileLocation(11, 8), sprites.dungeon.hazardLava0)
                    tiles.setTileAt(tiles.getTileLocation(9, 6), sprites.dungeon.hazardLava0)
                    pause(500)
                    tiles.setTileAt(tiles.getTileLocation(11, 7), sprites.dungeon.hazardLava1)
                }
                if (Cat.tileKindAt(TileDirection.Center, sprites.dungeon.floorDark0)) {
                    tiles.setTileAt(tiles.getTileLocation(9, 4), sprites.dungeon.greenSwitchUp)
                    pause(500)
                    tiles.setTileAt(tiles.getTileLocation(11, 9), sprites.dungeon.hazardLava1)
                }
            }
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Cat, 200, 200)
})
function check_for_lava () {
    if (Cat.tileKindAt(TileDirection.Center, sprites.dungeon.hazardLava0)) {
        game.over(false)
    }
    if (Cat.tileKindAt(TileDirection.Center, sprites.dungeon.hazardLava1)) {
        game.over(false)
    }
}
function finished_level () {
    Break = 1
    Streak += 1
    info.stopCountdown()
    game.showLongText("Level " + Streak + " Complete. (+1000) " + "Streak: " + Streak + " (+" + Streak * 1000 + ") " + "Total: " + (1000 + (info.score() + Streak * 1000)), DialogLayout.Bottom)
    info.changeScoreBy(1000 + Streak * 1000)
}
function level_4 () {
    tiles.setTilemap(tiles.createTilemap(
            hex`100010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0b160a0b0b0b0a0b160b0d00000000100909091e1f1e1f1e1f1e1500000000190909091f0909091f1a1f1800000000110909091e091e091e091e1400000000100909091f091f091f091f1500000000100909091e091e091e091e14000000001909090909091f0909091f1800000000110909091e1f1e1f1e1f1e15000000000f121713121212131317120e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundCenter,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.collectibleInsignia,sprites.castle.tilePath3,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1],
            TileScale.Sixteen
        ))
    level_prep(4, 6)
    game.showLongText("This is a good time to sneak using B", DialogLayout.Bottom)
    while (Break == 0) {
        pause(100)
        info.changeScoreBy(-1)
        check_for_lava()
        animation_check()
        check_for_death()
        if (Cat.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia)) {
            finished_level()
        }
    }
}
function level_5 () {
    tiles.setTilemap(tiles.createTilemap(
            hex`100010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0b160a0b0b0b0a0b160b0d00000000100909091e1f1e1f1e1f1e1500000000190909091f1e1f1e1f1a1f1800000000110909091e1f1e1f1e091e1400000000100909090909090909091f1500000000100909091e1f1e1f1e091e1400000000190909091f1e1f1e1f1c1f1800000000110909091e1f1e1f1e1f1e15000000000f121713121212131317120e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundCenter,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.collectibleInsignia,sprites.castle.tilePath3,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.chestOpen],
            TileScale.Sixteen
        ))
    level_prep(4, 6)
    game.showLongText("Chests get you extra points!", DialogLayout.Bottom)
    while (Break == 0) {
        pause(100)
        info.changeScoreBy(-1)
        check_for_lava()
        animation_check()
        check_for_death()
        check_for_chest(2500, 11, 10)
        if (Cat.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia)) {
            finished_level()
        }
    }
}
function check_for_chest (points: number, x: number, y: number) {
    if (Cat.tileKindAt(TileDirection.Center, sprites.dungeon.chestClosed)) {
        game.showLongText("You opened a chest! +" + points, DialogLayout.Bottom)
        info.changeScoreBy(points)
        tiles.setTileAt(tiles.getTileLocation(x, y), sprites.dungeon.chestOpen)
    }
}
info.onCountdownEnd(function () {
    Dead = 1
})
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
let Dead = 0
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
game.showLongText("Welcome to Escape the Dungeon! " + "In this game, you will have to get to a teleporter " + "(One of those blue squares) " + "before time runs out! " + "Use A to accelerate and unlock a lever when nearby. " + "Use B to creep along and lock levers. " + "Have fun, and get out! " + "                 Made by Cyrus and Elisa Yiu.", DialogLayout.Bottom)
Streak = 0
Dead = 0
info.setScore(0)
game.onUpdateInterval(100, function () {
    animation_check()
})
forever(function () {
    level_1()
    level_2()
    level_3()
    level_4()
    level_5()
    level_6()
    level_7()
    game.over(true, effects.confetti)
})
