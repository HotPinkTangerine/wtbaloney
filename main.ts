controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (DINO.vy == 0) {
        DINO.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
    consumableHuman.destroy()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    DINO,
    [img`
        ........................
        ........................
        ..........ccc...........
        .........cccc...........
        .....ccccccc..ccc.......
        ...cc555555cccccc.......
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555551ff555555bccc.....
        c55d55ff55555555bc......
        c5555555555555555b......
        .cbb31bb5555dd555b.cc...
        .c5333b555ddddd55dccc...
        .c533b55ddddddddddb.....
        .c5555dddbb55bdddddccc..
        ..ccccbbbb555bdddddccc..
        ...cdcbc5555bddddddcc...
        ....ccbc55bc5ddddddbcccc
        .....cbbcc5555dddddddddc
        .....ccbbb555ddbddddddc.
        .....cdcbc55ddbbbdddcc..
        ...ccdddccddddbcbbcc....
        ...ccccccd555ddccc......
        ........cccccccc........
        `,img`
        ............ccc.........
        .......cccccccc.........
        .....cc55555cc..cc......
        ....c555555555cccc......
        ...c55555555555bcc......
        ..c555551ff55555b..cc...
        ..c55d55ff5555555bccc...
        ..c55555555d55555bcc....
        ..c5555d5555d55555b.....
        ..cbbbb55555ddd555b.cc..
        ..c555d5555ddddd55dccc..
        ...c555dbbbdddbd5ddcc...
        ....cccbbbbb555bdddb....
        ....cbbbbbbc555bdddccc..
        ...cbbbbbbc555bddddcc...
        ...cbbbbbc555bdddddc....
        ..ccbbbbbc55bddddddcc...
        ..ccbbbbbbcb55dddddbcc..
        ...cbbbbbb5555ddddddddcc
        ....cbbbbb555ddbdddddddc
        ....cccbbc55ddbbbddddcc.
        ...ccdddccddddbcbbccc...
        ...ccccccd555ddccc......
        ........cccccccc........
        `,img`
        .............ccc........
        ........cccccccc........
        ......cc55555cc..cc.....
        .....c555555555cccc.....
        ....c55555555555bcc.....
        ...c555555ccb5555b.cc...
        ...c55d55c55555555bcc...
        ...c55555555dd5555bc....
        ...c5555d5555dd5555.....
        ...cbbbd555555dd555.cc..
        ...c555d555555ddd55ccc..
        ....c555d5555ddbd5dcc...
        ....cccbbbbb555bdddb....
        ...cbbbbbbbc555bdddccc..
        ..cbbbbbbbc555bddddcc...
        ..cbbbbbbc555bdddddc....
        .ccbbbbbbc55bddddddcc...
        .ccbbbbbbbcb55dddddbc...
        ..cbbbbbbb5555ddddddbc..
        ...cbbbbbb555ddbddddddc.
        ....cccbbc55ddbbbddddddc
        ...ccdddccddddbcbbcccccc
        ...ccccccd555ddccc......
        ........cccccccc........
        `,img`
        ........................
        ........................
        ........................
        ..........ccc...........
        .........cccc...........
        .....ccccccc..ccc.......
        ...cc555555cccccc.......
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555555ccb55555bccc.....
        c55d55c555555555bc......
        c5555555555555555b......
        .cbbb1bb5555dd555b.cc...
        .c533bbbb5ddddd55dcc....
        .c533bbbb5ddddddddbcc...
        .c533bbb55dddddddddcccc.
        .c5333bb5bb55bdddddcccdc
        .c5333b5bb555bddddddbddc
        .c53335b5555bddddddddddc
        ..c5555c55bb55dbddddddcc
        ...cccbccc55ddbbbddddcc.
        ....cdddccddddbcbbbcc...
        ....cccccd555ddcccc.....
        ........cccccccc........
        `,img`
        ........................
        ........................
        ........................
        ..........ccc...........
        .........cccc...........
        .....ccccccc..ccc.......
        ...cc555555cccccc.......
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555555ccb55555bccc.....
        c55d55c555555555bc......
        c5555555555555555b......
        .cbbb1bb5555dd555b.cc...
        .c533bbbb5ddddd55dcc....
        .c533bbbb5ddddddddbcc...
        .c5333bb55dddddddddcccc.
        .c5333b55bb55bdddddcccdc
        .c533355bb555bddddddbddc
        ..c5555b5555bddddddddddc
        ...cccbc55bb55dbddddddcc
        .....cbbcc55ddbbbddddcc.
        ....cdddccddddbcbbbcc...
        ....cccccd555ddcccc.....
        ........cccccccc........
        `,img`
        ........................
        ........................
        ........................
        ..........ccc...........
        .........cccc...........
        .....ccccccc..ccc.......
        ...cc555555cccccc.......
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555555ccb55555bccc.....
        c55d55c555555555bc......
        c5555555555555555b......
        .cbbb1bb5555dd555b.cc...
        .c533bbb55ddddd55dcc....
        .c5333bb5dddddddddbcc...
        .c5333b55ddddddddddcccc.
        .c533355dbb55bdddddcccdc
        ..c55555bb555bddddddbddc
        ...cccbb5555bddddddddddc
        .....cbc55bb55dbddddddcc
        .....cdbcc55ddbbbddddcc.
        ....cdddccddddbcbbbcc...
        ....cccccd555ddcccc.....
        ........cccccccc........
        `],
    100,
    false
    )
    pause(200)
    pause(200)
    projectile = sprites.createProjectileFromSprite(img`
        ....888888aaa.................
        ...888888aa...................
        ..8888888.....................
        .8888aa.......................
        889888aaaa....................
        899888a.......................
        89888888888...................
        898888888888888888aaaaa.......
        8988888888888888888aaaaaaaaaa.
        8988888888888888..............
        8988888a......................
        8998888aaa....................
        889888aa......................
        .88888........................
        ..888888a.....................
        ...888888aa...................
        ....88aaaaaaa.................
        `, DINO, -200, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    DINO,
    [img`
        ........................
        ........................
        ...........ccc..........
        ...........cccc.........
        .......ccc..ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        ......cb55555555ff55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb13bbc.
        ...cccd55ddddd555b3335c.
        .....bdddddddddd55b335c.
        ..cccdddddb55bbddd5555c.
        ..cccdddddb555bbbbcccc..
        ...ccddddddb5555cbcdc...
        ccccbdddddd5cb55cbcc....
        cddddddddd5555ccbbc.....
        .cddddddbdd555bbbcc.....
        ..ccdddbbbdd55cbcdc.....
        ....ccbbcbddddccdddcc...
        ......cccdd555dcccccc...
        ........cccccccc........
        `,img`
        .........ccc............
        .........cccccccc.......
        ......cc..cc55555cc.....
        ......cccc555555555c....
        ......ccb55555555555c...
        ...cc..b55555ff155555c..
        ...cccb5555555ff55d55c..
        ....ccb55555d55555555c..
        .....b55555d5555d5555c..
        ..cc.b555ddd55555bbbbc..
        ..cccd55ddddd5555d555c..
        ...ccdd5dbdddbbbd555c...
        ....bdddb555bbbbbccc....
        ..cccdddb555cbbbbbbc....
        ...ccddddb555cbbbbbbc...
        ....cdddddb555cbbbbbc...
        ...ccddddddb55cbbbbbcc..
        ..ccbddddd55bcbbbbbbcc..
        ccdddddddd5555bbbbbbc...
        cdddddddbdd555bbbbbc....
        .ccddddbbbdd55cbbccc....
        ...cccbbcbddddccdddcc...
        ......cccdd555dcccccc...
        ........cccccccc........
        `,img`
        ........ccc.............
        ........cccccccc........
        .....cc..cc55555cc......
        .....cccc555555555c.....
        .....ccb55555555555c....
        ...cc.b5555bcc555555c...
        ...ccb55555555c55d55c...
        ....cb5555dd55555555c...
        .....5555dd5555d5555c...
        ..cc.555dd555555dbbbc...
        ..ccc55ddd555555d555c...
        ...ccd5dbdd5555d555c....
        ....bdddb555bbbbbccc....
        ..cccdddb555cbbbbbbbc...
        ...ccddddb555cbbbbbbbc..
        ....cdddddb555cbbbbbbc..
        ...ccddddddb55cbbbbbbcc.
        ...cbddddd55bcbbbbbbbcc.
        ..cbdddddd5555bbbbbbbc..
        .cddddddbdd555bbbbbbc...
        cddddddbbbdd55cbbccc....
        ccccccbbcbddddccdddcc...
        ......cccdd555dcccccc...
        ........cccccccc........
        `,img`
        ........................
        ........................
        ........................
        ...........ccc..........
        ...........cccc.........
        .......ccc..ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb55555bcc555555c
        ......cb555555555c55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb1bbbc.
        ....ccd55ddddd5bbbb335c.
        ...ccbdddddddd5bbbb335c.
        .ccccddddddddd55bbb335c.
        cdcccdddddb55bb5bb3335c.
        cddbddddddb555bb5b3335c.
        cddddddddddb5555b53335c.
        ccddddddbd55bb55c5555c..
        .ccddddbbbdd55cccbccc...
        ...ccbbbcbddddccdddc....
        .....ccccdd555dccccc....
        ........cccccccc........
        `,img`
        ........................
        ........................
        ........................
        ...........ccc..........
        ...........cccc.........
        .......ccc..ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb55555bcc555555c
        ......cb555555555c55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb1bbbc.
        ....ccd55ddddd5bbbb335c.
        ...ccbdddddddd5bbbb335c.
        .ccccddddddddd55bb3335c.
        cdcccdddddb55bb55b3335c.
        cddbddddddb555bb553335c.
        cddddddddddb5555b5555c..
        ccddddddbd55bb55cbccc...
        .ccddddbbbdd55ccbbc.....
        ...ccbbbcbddddccdddc....
        .....ccccdd555dccccc....
        ........cccccccc........
        `,img`
        ........................
        ........................
        ........................
        ...........ccc..........
        ...........cccc.........
        .......ccc..ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb55555bcc555555c
        ......cb555555555c55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb1bbbc.
        ....ccd55ddddd55bbb335c.
        ...ccbddddddddd5bb3335c.
        .ccccdddddddddd55b3335c.
        cdcccdddddb55bbd553335c.
        cddbddddddb555bb55555c..
        cddddddddddb5555bbccc...
        ccddddddbd55bb55cbc.....
        .ccddddbbbdd55ccbdc.....
        ...ccbbbcbddddccdddc....
        .....ccccdd555dccccc....
        ........cccccccc........
        `],
    100,
    false
    )
    pause(200)
    pause(200)
    projectile = sprites.createProjectileFromSprite(img`
        .................aaa888888....
        ...................aa888888...
        .....................8888888..
        .......................aa8888.
        ....................aaaa888988
        .......................a888998
        ...................88888888898
        .......aaaaa888888888888888898
        .aaaaaaaaaa8888888888888888898
        ..............8888888888888898
        ......................a8888898
        ....................aaa8888998
        ......................aa888988
        ........................88888.
        .....................a888888..
        ...................aa888888...
        .................aaaaaaa88....
        `, DINO, 200, 0)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    DINO,
    [img`
        ........................
        ............cc..........
        ............ccc.........
        ........cc..ccccccc.....
        ........ccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        ......cb55555555ff55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb13bbc.
        ...cccd55ddddd555b3335c.
        ....ccdd5ddddddd55b335c.
        .....bddddb55bdddd5555c.
        ..cccdddddb55bbbbbcccc..
        .ccccddddddb5555cbcccc..
        .cdccdddddddc555cbc55c..
        .cdddddddddddcccbbc5c...
        .cbddddddd55dbbbbccc....
        .ccbdddddd555dbbbcbc....
        ..cccddbbbd555bbccc.....
        ....ccbbbbbd555cc.......
        ......ccccbddddbc.......
        ..........cd5555dc......
        `],
    100,
    true
    )
    DINO.setScale(1, ScaleAnchor.Middle)
    if (DINO.tileKindAt(TileDirection.Center, assets.tile`myTile1`)) {
        DINO.ay += -400
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    DINO,
    [img`
        ........................
        ........................
        ...........cc...........
        .........cccc...........
        .....ccccccc...cc.......
        ...cc555555cccccc.......
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555551ff555555bccc.....
        c55d55ff55555555bcc.....
        c5555555555555555b......
        .cbb31bb55555d555b..c...
        .c5333bb55ddddd55dccc...
        .c533b55ddddddddddbc....
        .c5555ddddb55bdddddccc..
        ..ccccbbbb555bdddddccc..
        ...cdcbc5555bddddddcc...
        ....ccbc55bcdddddddbcccc
        .....cbbccbd55dddddddddc
        .....ccbbbd555ddddddddbc
        ...ccbdcbb555ddbbdddbcc.
        ...cbdddcc55ddbbbbccc...
        ...cccccccbdddbccc......
        ........cd555ddc........
        `,img`
        ........................
        ........................
        ..........ccc...........
        .........cccc...........
        .....ccccccc..ccc.......
        ...cc555555cccccc.......
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555551ff555555bccc.....
        c55d55ff55555555bc......
        c5555555555555555b......
        .cbb31bb5555dd555b.cc...
        .c5333b555ddddd55dccc...
        .c533b55ddddddddddb.....
        .c5555dddbb55bdddddccc..
        ..ccccbbbb555bdddddccc..
        ...cdcbc5555bddddddcc...
        ....ccbc55bc5ddddddbcccc
        .....cbbcc5555dddddddddc
        .....ccbbb555ddbddddddc.
        .....cdcbc55ddbbbdddcc..
        ...ccdddccddddbcbbcc....
        ...ccccccd555ddccc......
        ........cccccccc........
        `,img`
        ........................
        ..........cc............
        .........ccc............
        .....ccccccc.ccc........
        ...cc555555ccccc........
        ..c5555555555bcc........
        .c55551ff55555b.ccc.....
        c55555ff5555555bccc.....
        c55d555555555555bc......
        c55555bb555555555b.c....
        .cbb31b5555ddd555bcc....
        .c5333b555ddddd55dcc....
        .c533b55ddddddd5ddc.....
        ..c555dbbb555bddddb.c...
        ...cccb55555bbdddddcc...
        ....ccb555ccdddddddcc...
        ..ccccbcccbddddddddcc...
        ..c55cbbbbd55dddddddbcc.
        ...c5ccbbd555dddddddddcc
        ....cccbb555ddbbbddddddc
        ......ccb55ddbbbbddddcc.
        ....ccddcbdddbbbbbccc...
        ....ccccd555ddccccc.....
        ........cccccc..........
        `,img`
        ........................
        ..........cc............
        .........ccc............
        .....ccccccc.ccc........
        ...cc555555ccccc........
        ..c5555555555bcc........
        .c55551ff55555b.ccc.....
        c55555ff5555555bccc.....
        c55d555555555555bc......
        c55555bb555555555b.c....
        .cbb31b5555ddd555bcc....
        .c5333b555ddddd55dcc....
        .c533b55ddddddd5ddc.....
        ..c555dbbb555bddddb.c...
        ...cccb55555bbdddddcc...
        ....ccb555ccdddddddcc...
        ..ccccbcccdddddddddcccc.
        ..c55cbbbd55ddddddddcdc.
        ...c5cccd555ddddddddddc.
        ....cc555d5ddbbbbddddbc.
        ......5555ddbbbbbdddbc..
        ......c5555dbbbbbbccc...
        .......c555cccccccc.....
        ........ccc.............
        `,img`
        ........................
        ..........cc............
        .........ccc............
        .....ccccccc.ccc........
        ...cc555555ccccc........
        ..c5555555555bcc........
        .c55551ff55555b.ccc.....
        c55555ff5555555bccc.....
        c55d555555555555bc......
        c55555bb555555555b.c....
        .cbb31b5555ddd555bcc....
        .c5333b555ddddd55dcc....
        .c533b55ddddddd5ddc.....
        ..c555dbbb555bddddb.c...
        ...cccb555555bdddddcc...
        ....ccb5555ccddddddccc..
        ..ccccbcccbddddddddccdc.
        ..c55cbbbbdddddddddbddc.
        ...c5cbbbd55ddddddddddc.
        ....cccbdd55dbbbbddddbc.
        .....cccd555dbbbbdddbc..
        .....c555dddbbbbbbccc...
        .....c55555dbcccccc.....
        ......c5555cc...........
        `,img`
        ........................
        ..........cc............
        .........ccc............
        .....ccccccc..cc........
        ...cc555555ccccc........
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555551ff555555bccc.....
        c55d55ff55555555bc......
        c5555555555555555b......
        .cbb31bb5555dd555b.cc...
        .c5333b555ddddd55dccc...
        .c533b55ddddddd5ddcc....
        .c5555ddddb55bddddb.....
        ..ccccbbbbb55bdddddccc..
        ..ccccbc5555bddddddcccc.
        ..c55cbc555cdddddddccdc.
        ...c5cbbcccdddddddddddc.
        ....cccbbbbd55dddddddbc.
        ....cbcbbbd555ddddddbcc.
        .....cccbb555dbbbddccc..
        .......cc555dbbbbbcc....
        .......cbddddbcccc......
        ......cd5555dc..........
        `],
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    DINO,
    [img`
        ........................
        ............cc..........
        ............ccc.........
        ........cc..ccccccc.....
        ........ccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        ......cb55555555ff55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb13bbc.
        ...cccd55ddddd555b3335c.
        ....ccdd5ddddddd55b335c.
        .....bddddb55bdddd5555c.
        ..cccdddddb55bbbbbcccc..
        .ccccddddddb5555cbcccc..
        .cdccdddddddc555cbc55c..
        .cdddddddddddcccbbc5c...
        .cbddddddd55dbbbbccc....
        .ccbdddddd555dbbbcbc....
        ..cccddbbbd555bbccc.....
        ....ccbbbbbd555cc.......
        ......ccccbddddbc.......
        ..........cd5555dc......
        `],
    100,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    DINO,
    [img`
        ........................
        ..........cc............
        .........ccc............
        .....ccccccc..cc........
        ...cc555555ccccc........
        ..c5555555555bcc........
        .c555555555555b..cc.....
        c555551ff555555bccc.....
        c55d55ff55555555bc......
        c5555555555555555b......
        .cbb31bb5555dd555b.cc...
        .c5333b555ddddd55dccc...
        .c533b55ddddddd5ddcc....
        .c5555ddddb55bddddb.....
        ..ccccbbbbb55bdddddccc..
        ..ccccbc5555bddddddcccc.
        ..c55cbc555cdddddddccdc.
        ...c5cbbcccdddddddddddc.
        ....cccbbbbd55dddddddbc.
        ....cbcbbbd555ddddddbcc.
        .....cccbb555dbbbddccc..
        .......cc555dbbbbbcc....
        .......cbddddbcccc......
        ......cd5555dc..........
        `],
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    DINO,
    [img`
        ........................
        ........................
        ...........cc...........
        ...........cccc.........
        .......cc...ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        .....ccb55555555ff55d55c
        ......b5555555555555555c
        ...c..b555d55555bb13bbc.
        ...cccd55ddddd55bb3335c.
        ....cbdddddddddd55b335c.
        ..cccdddddb55bdddd5555c.
        ..cccdddddb555bbbbcccc..
        ...ccddddddb5555cbcdc...
        ccccbdddddddcb55cbcc....
        cddddddddd55dbccbbc.....
        cbdddddddd555dbbbcc.....
        .ccbdddbbdd555bbcdbcc...
        ...cccbbbbdd55ccdddbc...
        ......cccbdddbccccccc...
        ........cdd555dc........
        `,img`
        ........................
        ........................
        ...........ccc..........
        ...........cccc.........
        .......ccc..ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        ......cb55555555ff55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb13bbc.
        ...cccd55ddddd555b3335c.
        .....bdddddddddd55b335c.
        ..cccdddddb55bbddd5555c.
        ..cccdddddb555bbbbcccc..
        ...ccddddddb5555cbcdc...
        ccccbdddddd5cb55cbcc....
        cddddddddd5555ccbbc.....
        .cddddddbdd555bbbcc.....
        ..ccdddbbbdd55cbcdc.....
        ....ccbbcbddddccdddcc...
        ......cccdd555dcccccc...
        ........cccccccc........
        `,img`
        ........................
        ............cc..........
        ............ccc.........
        ........ccc.ccccccc.....
        ........ccccc555555cc...
        ........ccb5555555555c..
        .....ccc.b55555ff15555c.
        .....cccb5555555ff55555c
        ......cb555555555555d55c
        ....c.b555555555bb55555c
        ....ccb555ddd5555b13bbc.
        ....ccd55ddddd555b3335c.
        .....cdd5ddddddd55b335c.
        ...c.bddddb555bbbd555c..
        ...ccdddddbb55555bccc...
        ...ccdddddddcc555bcc....
        ...ccddddddddbcccbcccc..
        .ccbddddddd55dbbbbc55c..
        ccddddddddd555dbbcc5c...
        cddddddbbbdd555bbccc....
        .ccddddbbbbdd55bcc......
        ...cccbbbbbdddbcddcc....
        .....cccccdd555dcccc....
        ..........cccccc........
        `,img`
        ........................
        ............cc..........
        ............ccc.........
        ........ccc.ccccccc.....
        ........ccccc555555cc...
        ........ccb5555555555c..
        .....ccc.b55555ff15555c.
        .....cccb5555555ff55555c
        ......cb555555555555d55c
        ....c.b555555555bb55555c
        ....ccb555ddd5555b13bbc.
        ....ccd55ddddd555b3335c.
        .....cdd5ddddddd55b335c.
        ...c.bddddb555bbbd555c..
        ...ccdddddbb55555bccc...
        ...ccdddddddcc555bcc....
        .ccccdddddddddcccbcccc..
        .cdcdddddddd55dbbbc55c..
        .cdddddddddd555dccc5c...
        .cbddddbbbbdd5d555cc....
        ..cbdddbbbbbdd5555......
        ...cccbbbbbbd5555c......
        .....cccccccc555c.......
        .............ccc........
        `,img`
        ........................
        ............cc..........
        ............ccc.........
        ........ccc.ccccccc.....
        ........ccccc555555cc...
        ........ccb5555555555c..
        .....ccc.b55555ff15555c.
        .....cccb5555555ff55555c
        ......cb555555555555d55c
        ....c.b555555555bb55555c
        ....ccb555ddd5555b13bbc.
        ....ccd55ddddd555b3335c.
        .....cdd5ddddddd55b335c.
        ...c.bddddb555bbbd555c..
        ...ccdddddb555555bccc...
        ..cccddddddcc5555bcc....
        .cdccddddddddbcccbcccc..
        .cddbdddddddddbbbbc55c..
        .cdddddddddd55dbbbc5c...
        .cbddddbbbbd55ddbccc....
        ..cbdddbbbbd555dccc.....
        ...cccbbbbbbddd555c.....
        .....ccccccbd55555c.....
        ...........cc5555c......
        `,img`
        ........................
        ............cc..........
        ............ccc.........
        ........cc..ccccccc.....
        ........ccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        ......cb55555555ff55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb13bbc.
        ...cccd55ddddd555b3335c.
        ....ccdd5ddddddd55b335c.
        .....bddddb55bdddd5555c.
        ..cccdddddb55bbbbbcccc..
        .ccccddddddb5555cbcccc..
        .cdccdddddddc555cbc55c..
        .cdddddddddddcccbbc5c...
        .cbddddddd55dbbbbccc....
        .ccbdddddd555dbbbcbc....
        ..cccddbbbd555bbccc.....
        ....ccbbbbbd555cc.......
        ......ccccbddddbc.......
        ..........cd5555dc......
        `],
    100,
    true
    )
})
function monkeySpawner () {
    list = [0]
    consumableHuman = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . . f d d d d d e e f f . . . . 
        . c d d d f f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c f f d d c d d e e b d c . . . 
        f d d f e f f f e e e f . . . . 
        f d d f e e e f f f f f . . . . 
        f f f f f e e e e e f f . f f . 
        . f f f e f f e e e f f . e f . 
        . f b d f e f f b b f f f e f . 
        . f d d f e e f d d b f f e f . 
        . f f f f f f f f f f f f f . . 
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(consumableHuman, sprites.builtin.crowd0)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    DINO,
    [img`
        ........................
        ........................
        ...........cc...........
        ...........cccc.........
        .......cc...ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        .....ccb55555555ff55d55c
        ......b5555555555555555c
        ...c..b555d55555bb13bbc.
        ...cccd55ddddd55bb3335c.
        ....cbdddddddddd55b335c.
        ..cccdddddb55bdddd5555c.
        ..cccdddddb555bbbbcccc..
        ...ccddddddb5555cbcdc...
        ccccbdddddddcb55cbcc....
        cddddddddd55dbccbbc.....
        cbdddddddd555dbbbcc.....
        .ccbdddbbdd555bbcdbcc...
        ...cccbbbbdd55ccdddbc...
        ......cccbdddbccccccc...
        ........cdd555dc........
        `,img`
        ........................
        ........................
        ...........ccc..........
        ...........cccc.........
        .......ccc..ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        ......cb55555555ff55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb13bbc.
        ...cccd55ddddd555b3335c.
        .....bdddddddddd55b335c.
        ..cccdddddb55bbddd5555c.
        ..cccdddddb555bbbbcccc..
        ...ccddddddb5555cbcdc...
        ccccbdddddd5cb55cbcc....
        cddddddddd5555ccbbc.....
        .cddddddbdd555bbbcc.....
        ..ccdddbbbdd55cbcdc.....
        ....ccbbcbddddccdddcc...
        ......cccdd555dcccccc...
        ........cccccccc........
        `,img`
        ........................
        ............cc..........
        ............ccc.........
        ........ccc.ccccccc.....
        ........ccccc555555cc...
        ........ccb5555555555c..
        .....ccc.b55555ff15555c.
        .....cccb5555555ff55555c
        ......cb555555555555d55c
        ....c.b555555555bb55555c
        ....ccb555ddd5555b13bbc.
        ....ccd55ddddd555b3335c.
        .....cdd5ddddddd55b335c.
        ...c.bddddb555bbbd555c..
        ...ccdddddbb55555bccc...
        ...ccdddddddcc555bcc....
        ...ccddddddddbcccbcccc..
        .ccbddddddd55dbbbbc55c..
        ccddddddddd555dbbcc5c...
        cddddddbbbdd555bbccc....
        .ccddddbbbbdd55bcc......
        ...cccbbbbbdddbcddcc....
        .....cccccdd555dcccc....
        ..........cccccc........
        `,img`
        ........................
        ............cc..........
        ............ccc.........
        ........ccc.ccccccc.....
        ........ccccc555555cc...
        ........ccb5555555555c..
        .....ccc.b55555ff15555c.
        .....cccb5555555ff55555c
        ......cb555555555555d55c
        ....c.b555555555bb55555c
        ....ccb555ddd5555b13bbc.
        ....ccd55ddddd555b3335c.
        .....cdd5ddddddd55b335c.
        ...c.bddddb555bbbd555c..
        ...ccdddddbb55555bccc...
        ...ccdddddddcc555bcc....
        .ccccdddddddddcccbcccc..
        .cdcdddddddd55dbbbc55c..
        .cdddddddddd555dccc5c...
        .cbddddbbbbdd5d555cc....
        ..cbdddbbbbbdd5555......
        ...cccbbbbbbd5555c......
        .....cccccccc555c.......
        .............ccc........
        `,img`
        ........................
        ............cc..........
        ............ccc.........
        ........ccc.ccccccc.....
        ........ccccc555555cc...
        ........ccb5555555555c..
        .....ccc.b55555ff15555c.
        .....cccb5555555ff55555c
        ......cb555555555555d55c
        ....c.b555555555bb55555c
        ....ccb555ddd5555b13bbc.
        ....ccd55ddddd555b3335c.
        .....cdd5ddddddd55b335c.
        ...c.bddddb555bbbd555c..
        ...ccdddddb555555bccc...
        ..cccddddddcc5555bcc....
        .cdccddddddddbcccbcccc..
        .cddbdddddddddbbbbc55c..
        .cdddddddddd55dbbbc5c...
        .cbddddbbbbd55ddbccc....
        ..cbdddbbbbd555dccc.....
        ...cccbbbbbbddd555c.....
        .....ccccccbd55555c.....
        ...........cc5555c......
        `,img`
        ........................
        ............cc..........
        ............ccc.........
        ........cc..ccccccc.....
        ........ccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        ......cb55555555ff55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb13bbc.
        ...cccd55ddddd555b3335c.
        ....ccdd5ddddddd55b335c.
        .....bddddb55bdddd5555c.
        ..cccdddddb55bbbbbcccc..
        .ccccddddddb5555cbcccc..
        .cdccdddddddc555cbc55c..
        .cdddddddddddcccbbc5c...
        .cbddddddd55dbbbbccc....
        .ccbdddddd555dbbbcbc....
        ..cccddbbbd555bbccc.....
        ....ccbbbbbd555cc.......
        ......ccccbddddbc.......
        ..........cd5555dc......
        `],
    100,
    true
    )
    DINO.changeScale(-0.4, ScaleAnchor.Middle)
    if (DINO.tileKindAt(TileDirection.Center, assets.tile`myTile1`)) {
        if (controller.down.isPressed()) {
            DINO.ay += 400
        }
    }
})
let list: number[] = []
let projectile: Sprite = null
let DINO: Sprite = null
let consumableHuman: Sprite = null
consumableHuman = sprites.create(img`
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
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level3`)
let Earth = sprites.create(img`
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
    `, SpriteKind.Player)
DINO = sprites.create(img`
    ........................
    ........................
    ...........cc...........
    ...........cccc.........
    .......cc...ccccccc.....
    .......cccccc555555cc...
    ........ccb5555555555c..
    .....cc..b555555555555c.
    .....cccb555555ff155555c
    .....ccb55555555ff55d55c
    ......b5555555555555555c
    ...c..b555d55555bb13bbc.
    ...cccd55ddddd55bb3335c.
    ....cbdddddddddd55b335c.
    ..cccdddddb55bdddd5555c.
    ..cccdddddb555bbbbcccc..
    ...ccddddddb5555cbcdc...
    ccccbdddddddcb55cbcc....
    cddddddddd55dbccbbc.....
    cbdddddddd555dbbbcc.....
    .ccbdddbbdd555bbcdbcc...
    ...cccbbbbdd55ccdddbc...
    ......cccbdddbccccccc...
    ........cdd555dc........
    `, SpriteKind.Player)
let nextLevel = sprites.create(img`
    . . . . . . . . . c c 8 . . . . 
    . . . . . . 8 c c c f 8 c c . . 
    . . . c c 8 8 f c a f f f c c . 
    . . c c c f f f c a a f f c c c 
    8 c c c f f f f c c a a c 8 c c 
    c c c b f f f 8 a c c a a a c c 
    c a a b b 8 a b c c c c c c c c 
    a f c a a b b a c c c c c f f c 
    a 8 f c a a c c a c a c f f f c 
    c a 8 a a c c c c a a f f f 8 a 
    . a c a a c f f a a b 8 f f c a 
    . . c c b a f f f a b b c c 6 c 
    . . . c b b a f f 6 6 a b 6 c . 
    . . . c c b b b 6 6 a c c c c . 
    . . . . c c a b b c c c . . . . 
    . . . . . c c c c c c . . . . . 
    `, SpriteKind.Player)
Earth.setPosition(1500, 80)
DINO.setPosition(0, 200)
nextLevel.setPosition(1500, 80)
DINO.setStayInScreen(true)
scene.cameraFollowSprite(DINO)
controller.moveSprite(DINO, 100, 0)
animation.runMovementAnimation(
nextLevel,
animation.animationPresets(animation.shake),
2000,
true
)
DINO.ay = 200
info.setScore(0)
forever(function () {
    if (DINO.tileKindAt(TileDirection.Center, assets.tile`myTile10`) || DINO.tileKindAt(TileDirection.Bottom, assets.tile`myTile9`) || (DINO.tileKindAt(TileDirection.Center, sprites.dungeon.hazardLava1) || (DINO.tileKindAt(TileDirection.Center, assets.tile`myTile`) || DINO.tileKindAt(TileDirection.Center, assets.tile`myTile2`)))) {
        game.over(false)
    }
})
forever(function () {
	
})
forever(function () {
    if (DINO.overlapsWith(nextLevel)) {
        tiles.setCurrentTilemap(tilemap`level5`)
        Earth.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . 6 6 6 5 5 6 6 6 . . . . 
            . . . 7 7 7 7 6 6 6 6 6 6 . . . 
            . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
            . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
            . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
            . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
            . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
            . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
            . . . 6 8 8 8 8 8 8 8 8 6 . . . 
            . . . . 6 6 8 8 8 8 6 6 . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        DINO.setPosition(0, 150)
        DINO.ay = 50
        nextLevel.destroy()
    }
    if (DINO.overlapsWith(Earth)) {
        tiles.setCurrentTilemap(tilemap`level7`)
        DINO.setPosition(0, 150)
        Earth.destroy()
        DINO.ay = 200
        for (let index = 0; index < 100; index++) {
            monkeySpawner()
        }
    }
})
forever(function () {
    if (DINO.overlapsWith(Earth)) {
        DINO.ay = 2000
    }
})
